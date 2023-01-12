import logo from './logo.svg';
import React, { useState, useEffect, componentDidUpdate } from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import axios from "axios"

import PlayersTable from './components/PlayersTable';
import './App.css';
import YourTeam from './components/YourTeam';
import LoginPage from './components/LoginPage';
import { Button } from 'react-bootstrap';
import YourBench from './components/YourBench';
import SearchBar from './components/SearchBar';
import PositionPicker from './components/PositionPicker';
import TeamSelect from './components/TeamSelect';

const allPlayers = [
  // {id: '1', title: 'React Tutorial', time_hours: 10, date: new Date(2022, 11, 8)}
];

const defaultUser = {id: 1000, username: "null", password: "null"}


const url = 'http://localhost:8080'

function App() {

  const [user, setUser] = useState(defaultUser)

  const [userID, setID] = useState(1000)

  const [players, setPlayers] = useState(allPlayers)

  const [yourPlayers, setYourPlayers] = useState(allPlayers)

  const [yourBench, setYourBench] = useState(allPlayers)

  const [managePlayers, setManagePlayers] = useState(allPlayers)

  const [changingLineup, setChangingLineup] = useState(false)

  const [movingPlayer, setMovingPlayer] = useState(null)

  const logIn = async (enteredUser) => {
    axios.get(`${url}/owners/${enteredUser.username}/${enteredUser.password}`).then((response) => {
      setUser(response.data)
      setID(response.data.userID)
      localStorage.setItem('id', response.data.id)
      axios.get(`${url}/players/userTeam/${response.data.id}`).then((response) => {
        setYourPlayers(response.data);
      });
      axios.get(`${url}/players/userTeam/bench/${response.data.id}`).then((response) => {
        setYourBench(response.data);
      });
    });
  }

  const signUp = async (newUser) => {
    axios.post(
      `${url}/owners`,
      {
        username: newUser.username,
        password: newUser.password,
        team_name: newUser.team_name
      }
    );
    logIn(newUser)
  }

  const addPlayer = (playerID) => {
    axios.patch(
      `${url}/players/addPlayer/playerID=${playerID}/teamID=${userID}`,
    );
    window.location.reload()
  }

  const onStart = (player) => {
    setChangingLineup(true)
    setMovingPlayer(player)
  }

  const onCancel = (player) => {
    setChangingLineup(false)
    console.log(movingPlayer)
  }

  const onHere = (playerID, movingPlayerID) => {
    console.log(playerID)
    console.log(movingPlayerID)
    axios.patch(
      `${url}/players/startPlayer/playerToStart=${movingPlayerID}/playerToBench=${playerID}`,
    );
    window.location.reload()
  }

  const dropPlayer = (playerID) => {
    axios.patch(
      `${url}/players/dropPlayer/${playerID}`
    );
    window.location.reload()
  }

  const logOut = () => {
    setID(1000)
    localStorage.setItem('id', 1000)
  }

  const onSearch = (searchTerm) => {
    console.log(searchTerm)
    axios.get(`${url}/players/name/${searchTerm}`).then((response) => {
      setPlayers(response.data);
    });
  }

  const onClear = () => {
    axios.get(`${url}/players/freeAgents`).then((response) => {
      setPlayers(response.data);
    });
  }

  const onPositionClick = (position) => {
    console.log(position)
    if (position == "All") {
      axios.get(`${url}/players/freeAgents`).then((response) => {
        setPlayers(response.data);
      });
    }
    else {
      axios.get(`${url}/players/position/${position}`).then((response) => {
        setPlayers(response.data);
      });
    }
  }

  const setTeam = (team) => {
    if (team == "Select a team...") {
      axios.get(`${url}/players/freeAgents`).then((response) => {
        setPlayers(response.data);
      });
    }
    else {
      axios.get(`${url}/players/team/${team}`).then((response) => {
        setPlayers(response.data);
      });
    }
  }

  React.useEffect(() => {
    const userID = localStorage.getItem("id");
    console.log(userID)
    if (userID) {
      setID(userID)
      axios.get(`${url}/players/userTeam/${userID}`).then((response) => {
        setYourPlayers(response.data);
      });
      axios.get(`${url}/players/userTeam/bench/${userID}`).then((response) => {
        setYourBench(response.data);
      });
    }
  }, []);

  React.useEffect(() => {
    axios.get(`${url}/players/freeAgents`).then((response) => {
      setPlayers(response.data);
    });
  }, []);

  React.useEffect(() => {
    axios.get(`${url}/players`).then((response) => {
      setManagePlayers(response.data);
    });
  }, []);

  // React.useEffect(() => {
  //   axios.get(`${url}/players/userTeam/${userID}`).then((response) => {
  //     setYourPlayers(response.data);
  //   });
  // }, []);

  if (userID == 1000) {
    return (
      <LoginPage onLogIn = {logIn} onSignUp = {signUp}/>
    )
  }

  if (userID == 1) {
    return (
      <>
      <Button onClick={logOut}>Log Out</Button>
      <div className="rowC">
        <PlayersTable players={managePlayers} onAddHandler={addPlayer}/>
    </div>
    </>
    )
  }

  return (
    <>
    <Button onClick={logOut}>Log Out</Button>
    <div className="rowC">
    <SearchBar onSearch = {onSearch} onClear = {onClear}/>
    <PositionPicker onPositionClick = {onPositionClick}/>
    <TeamSelect setTeam = {setTeam}/>
    </div>
    <div className="rowC">
      <Card style={{ width: '50%' }}>
        <PlayersTable players={players} onAddHandler={addPlayer}/>
       </Card>
       <Card style={{ width: '50%' }}>
        <YourTeam players={yourPlayers} changingLineup = {changingLineup} onDropHandler={dropPlayer} movingPlayer = {movingPlayer} onHere={onHere}/>
        <YourBench players={yourBench} onDropHandler={dropPlayer} changingLineup = {changingLineup} onStart={onStart} onCancel={onCancel}/>
       </Card>
    </div>
    </>
  );
}

export default App;
