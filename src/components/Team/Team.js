
import React from 'react';
import "./Team.css";
// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
// Import Bootstrap
import { Card, Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Team = (props) => {
    const { strTeamBadge, strTeam, idTeam, strSport } = props.team
    const history = useHistory()

    // Button Event Handler
    const handleExploreButton = (idTeam) => {
        history.push(`/team/${idTeam}`)
    }


    return (
        <Container className="bg-dark">
            <Card className="card bg-primary  mt-3">
                <Card.Img variant="top" src={strTeamBadge} />
                <Card.Body>
                    <h2 className="text-center">{strTeam}</h2>
                    <h5 className="text-center">Sports Type: {strSport}</h5>
                    <Button className="explore-Btn" variant="warning" onClick={() => handleExploreButton(idTeam)}>Explore  <FontAwesomeIcon icon={faArrowRight} /></Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Team;