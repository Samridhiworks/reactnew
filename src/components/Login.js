import React, { useState } from 'react';
import Dashboard from './Dashboard';
import myimage from './house.webp';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hide, setHide] = useState(true);
    const [isLogin, setIsLogin] = useState(localStorage.getItem('islogin') === 'true');

    const handleUsername = (e) => {
        setUsername(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.length === 0) {
            setUsernameError('Username cannot be empty');
            return;
        } else if (username.includes(' ')) {
            setUsernameError('Username cannot include spaces');
            return;
        } else {
            setUsernameError('');
        }
        if (password.length === 0) {
            setPasswordError('Password cannot be empty');
            return;
        } else {
            setPasswordError('');
        }

        setIsLogin(true);
            localStorage.setItem('islogin', true);
    };

    const logout = () => {
        setIsLogin(false);
        localStorage.removeItem('islogin');
    };

    const showHide = () => {
        setHide(!hide);
    };

    return (
        <div className='container'>
            {isLogin ? (
                <div>
                    <Dashboard />
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <div className='img-content'>
                    <img src={myimage} alt="House" />
                    <div className='content'>
                        <form onSubmit={handleSubmit}>
                            <h1>Login Form</h1>
                            <input
                                type='text'
                                placeholder='Enter Username'
                                value={username}
                                onChange={handleUsername}
                                required
                            />
                            <span className='error'>{usernameError}</span>

                            <input
                                type={hide ? 'password' : 'text'}
                                placeholder='Enter Password'
                                value={password}
                                onChange={handlePassword}
                                required
                            />
                            <span onClick={showHide}>
                                <i className={hide ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'}></i>
                            </span>
                            <span className='error'>{passwordError}</span>

                            <div className='remember'>
                                <label>
                                    <input type='checkbox' /> <p>Remember Me</p>
                                </label>
                            </div>

                            <button type='submit' onClick={handleSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;
