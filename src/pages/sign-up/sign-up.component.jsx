import { React, useState } from 'react';

import './sign-up.styles.scss';

const SignUp = () => {
    const [userCredentials, setUserCredentials] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { username, email, password, confirmPassword } = userCredentials;

    const handleChange = (event) => {
        const { value, name } = event.target;
        setUserCredentials({...userCredentials, [name]: value });
        console.log(userCredentials);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Sign up started');
    }

    return (
        <div >
            <form className="sign-up" onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type="text"
                    required
                    name="username"
                    value={username}
                    onChange={handleChange}
                />

                <label>Email</label>
                <input
                    type="email"
                    required
                    name="email"
                    value={email}
                    onChange={handleChange}
                />

                <label>Password</label>
                <input
                    type="password"
                    required
                    name="password"
                    value={password}
                    onChange={handleChange}
                />

                <label>Confirm password</label>
                <input
                    type="password"
                    required
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                />

                <button type="submit">Sign up</button>
            </form>
        </div>)
};

export default SignUp;