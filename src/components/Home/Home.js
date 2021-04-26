import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Team from '../Team/Team';




const Home = () => {
    const [teams, setTeams] = useState([])
    // Load Api Data
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(res => res.json())
            .then(data => {
                setTeams(data.teams.slice(0, 15))
            })

    }, [])

    return (
        <div>
            <Header></Header>

            {
                teams.map(team => <Team team={team} idTeam={team.idTeam}></Team>)
            }


        </div>


    );
};

export default Home;