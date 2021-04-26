// Import React Hook
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// Import Bootstrap
import { Container } from 'react-bootstrap';
// Import Main Css file
import "./TeamInfo.css";
// Import Image
import Female from "../../photo/female.png"
import Male from "../../photo/male.png";
import Facebook from "../../icon/Facebook.png";
import Twitter from "../../icon/Twitter.png";
import Youtube from "../../icon/YouTube.png";
// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faFutbol, faMapMarkerAlt, faMarsStroke } from '@fortawesome/free-solid-svg-icons'




const TeamInfo = () => {
    const { idTeam } = useParams()
    const [team, setTeams] = useState([])
    const { strTeamBanner, strTeam, intFormedYear, strCountry, strSport, strGender, strDescriptionEN, strFacebook, strTwitter, strYoutube } = team;

    // Dynamic Api Data Load
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
            .then(res => res.json())
            .then((data) => {
                setTeams(data.teams[0])
            })
    }, [idTeam])


    return (
        <div className="bg-dark">
            <div className="banner">
                <img src={strTeamBanner} alt="" />
            </div>

            <Container>
                <div className=" row mt-3 team-details">
                    <div className="col-md-7 ">
                        <h1>{strTeam}</h1>
                        <h5><FontAwesomeIcon icon={faMapMarkerAlt} />  Founded: {intFormedYear}</h5>
                        <h5><FontAwesomeIcon icon={faFlag} />  Couuntry: {strCountry}</h5>
                        <h5><FontAwesomeIcon icon={faFutbol} />  Sports Type: {strSport}</h5>
                        <h5><FontAwesomeIcon icon={faMarsStroke} />  Gender: {strGender}</h5>
                    </div>

                    <div className=" col-md-5">
                        {
                            strGender === 'Male' ? <img className=" team-img" src={Male} alt="" /> : <img className=" team-img" src={Female} alt="" />
                        }
                    </div>
                </div>
            </Container>

            <Container className="mt-4">
                <div className="team-history">
                    <p>{strDescriptionEN}</p>
                    <p >{strDescriptionEN}</p>
                </div>
            </Container>

            <div className=" text-center">
                <a href={`https://${strFacebook}`} target="_blank" rel="noopener noreferrer" >  <img className="social-icon" src={Facebook} alt="" /></a>
                <a href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer" > <img className="social-icon" src={Twitter} alt="" /></a>
                <a href={`https://${strYoutube}`} target="_blank" rel="noopener noreferrer" > <img className="social-icon" src={Youtube} alt="" /></a>
            </div>
            
        </div>
    );
};

export default TeamInfo;