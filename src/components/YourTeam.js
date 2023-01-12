import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import DropButton from './DropButton';
import HereButton from './HereButton';

function YourTeam(props) {

    const onDropHandler = (playerID) => {
        props.onDropHandler(playerID)
    };

    const onHere = (playerID, movingPlayerID) => {
        props.onHere(playerID, movingPlayerID)
    }

    const DisplayData=props.players.map(
        (player)=>{
            if (props.changingLineup) {
                return(
                    <tr key={player.id}>
                        <td>{player.first_name} {player.last_name}</td>
                        <td>{player.position}</td>
                        <td>{player.team_city}</td>
                        <td>{player.total_points}</td>
                        <td><HereButton player={player} movingPlayer={props.movingPlayer} onHere = {onHere}/></td>
                    </tr>
                )
            }
            else {
                return(
                    <tr key={player.id}>
                        <td>{player.first_name} {player.last_name}</td>
                        <td>{player.position}</td>
                        <td>{player.team_city}</td>
                        <td>{player.total_points}</td>
                        <td><DropButton player = {player} onDropHandler={onDropHandler}/></td>
                    </tr>
                )
            }
        }
    )

        return (
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Position</th>
                        <th>Team</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>                           
                    {DisplayData}                           
                </tbody>
            </Table>
          );
}

export default YourTeam