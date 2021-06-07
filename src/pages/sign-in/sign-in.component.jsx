import { React, useState } from 'react';

import './sign-in.styles.scss';

const SignIn = () => {
    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });
    const { email, password } = userCredentials;

    const handleChange = (event) => {
        const { value, name } = event.target;
        setUserCredentials({...userCredentials, [name]: value });
        console.log(userCredentials);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Sign in started');
    }

    return (
        <div>
            <form className="sign-in">
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

                <button type="submit" onClick={handleSubmit}>Sign in</button>
            </form>
        </div>
    )
};

export default SignIn;