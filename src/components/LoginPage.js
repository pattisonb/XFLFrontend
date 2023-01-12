import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './LoginPage.css'

function LoginPage(props) {

    const [enteredUsername, setenteredUsername] = useState('')
    const [enteredPassword, setenteredPassword] = useState('')
    const [enteredConfirmPassword, setenteredConfirmPassword] = useState('')
    const [enteredTeamName, setenteredTeamName] = useState('')
    const [createAccount, setCreateAccount] = useState(false)

    const usernameChangeHandler = (event) => {
        console.log(event.target.value)
        setenteredUsername(event.target.value)
    };

    const passwordChangeHandler = (event) => {
        setenteredPassword(event.target.value)
    };

    const teamNameChangeHandler = (event) => {
        setenteredTeamName(event.target.value)
    };

    const confirmPasswordChangeHandler = (event) => {
        setenteredConfirmPassword(event.target.value)
    };

    const createAccountHandler = () => {

        if (createAccount) {
            setCreateAccount(false)
        }
        else {
            setCreateAccount(true)
        }
    };

    const onSignUp = (event) => {
        event.preventDefault();

        if (enteredPassword && enteredUsername && enteredConfirmPassword && enteredTeamName) {
                if (enteredConfirmPassword == enteredPassword) {
                const user = {
                    username: enteredUsername,
                    password: enteredPassword,
                    team_name: enteredTeamName
                }
                props.onSignUp(user)
                setenteredPassword('')
                setenteredUsername('')
                setenteredConfirmPassword('')
                setenteredTeamName('')
            }
        }
    };


    const onLogIn = (event) => {
        event.preventDefault();

        if (enteredPassword && enteredUsername) {

            const user = {
                username: enteredUsername,
                password: enteredPassword,
            }
            props.onLogIn(user)
            setenteredPassword('')
            setenteredUsername('')
        }
    };

    if (createAccount) {
        return (
            <div className="center-screen">
             <Card style={{ width: '30%' }}>
                <form onSubmit={onSignUp}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Username</label>
                        <input type="text" className="form-control" placeholder="Enter username" value = {enteredUsername} onChange={usernameChangeHandler}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value = {enteredPassword} onChange={passwordChangeHandler}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword2">Confirm Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Confirm Password" value = {enteredConfirmPassword} onChange={confirmPasswordChangeHandler}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="teamname">Team Name</label>
                        <input type="text" className="form-control" id="teamname" placeholder="Team Name" value = {enteredTeamName} onChange={teamNameChangeHandler}/>
                    </div>
                    <Button type="submit" className="btn btn-primary me-1">Create Account</Button>
                </form>
                <Button className="btn btn-success" onClick={createAccountHandler}>Back to Log In</Button>
             </Card>
          </div>
        )
    }


    return (
        <div className="center-screen">
         <Card style={{ width: '30%' }}>
            <form onSubmit={onLogIn}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input type="text" className="form-control" placeholder="Enter username" value = {enteredUsername} onChange={usernameChangeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value = {enteredPassword} onChange={passwordChangeHandler}/>
                </div>
                <Button type="submit" className="btn btn-primary me-1">Submit</Button>
            </form>
            <Button className="btn btn-success" onClick={createAccountHandler}>Create Account</Button>
         </Card>
      </div>
    )
}
export default LoginPage;