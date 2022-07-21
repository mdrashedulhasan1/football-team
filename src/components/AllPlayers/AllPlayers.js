import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import MyTeam from '../MyTeam/MyTeam';
import Player from '../Player/Player';
import './AllPlayers.css';
const AllPlayers = () => {
    const [players, setPlayers] = useState([]);
    const[myPlayer, setMyPlayer] = useState([]);
    useEffect(() => {
        fetch('./fakedb.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, []);
    const handleAddPlayer = (player)=>{
        const updatePlayer = [...myPlayer,player];
        setMyPlayer(updatePlayer);
    }
    return (
        <div className='all-players-container'>
            <div className='players-container'>
                <Row xs={1} md={2} xl={3} className="g-4">
                    {
                        players.map(player => <Player key={player.id} player={player}
                             handleAddPlayer={handleAddPlayer}></Player>)
                    }
                </Row>
            </div>
            <div className='my-football-team-container'>
                <MyTeam myPlayer={myPlayer}></MyTeam>
            </div>
        </div>
    );
};

export default AllPlayers;