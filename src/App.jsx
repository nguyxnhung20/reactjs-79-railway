import { useState } from 'react';
import './App.css';
import Result from "./components/Result.jsx";

function App() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSubmitted, setSubmitted] = useState(false);

    function submit() {
        console.log(name, email, password, confirmPassword);
        setSubmitted(true);
    }

    function changeName(e) {
        setName(e.target.value);
        setSubmitted(false);
    }

    function changeEmail(e) {
        setEmail(e.target.value);
        setSubmitted(false);
    }

    function changePassword(e) {
        setPassword(e.target.value);
        setSubmitted(false);
    }

    function changeConfirmPassword(e) {
        setConfirmPassword(e.target.value);
        setSubmitted(false);
    }

    return (
        <div className="background">
            <div className="login-form">
                <p className="title">Register</p>
                <input className="input" placeholder="Name" onChange={changeName} />
                <input className="input" placeholder="Email Address" onChange={changeEmail} />
                <input className="input" placeholder="Password" onChange={changePassword} />
                <input className="input" placeholder="Confirm Password" onChange={changeConfirmPassword} />
                <button className="login-submit" onClick={submit}>Register</button>
                <p className="not-a-member">Already a member? <span className="sign-sp">Login now</span></p>
            </div>
            {
                isSubmitted ? <Result name={name} email={email} password={password} confirmPassword={confirmPassword} /> : null
            }

        </div>
    );
}

export default App;
