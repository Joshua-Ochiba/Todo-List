import React from 'react'
import "./Login.css"
import { assets } from '../../assets/assets'

import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [usernameActive, setUsernameActive] = useState(false);
    const [emailActive, setEmailActive] = useState(false);
    const [passwordActive, setPasswordActive] = useState(false);

    const [signUpMode, setSignUpMode] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

  const texts = [
    "Organize Your Life",
    "Tame Your To-Do's",
    "Your Tasks, Your Way"
  ];

  const navigate = useNavigate();

  const images = [
    assets.image1,
    assets.image2,
    assets.image3
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval); // cleanup
  }, [images.length]);

  const handleSignIn = (e) => {
    e.preventDefault(); // stop page reload
    navigate("/DashBoardPage"); 
  };

  const handleSignUp = (e) => {
    e.preventDefault(); // stop page reload
    
    navigate("/DashBoardPage"); 
  };


  return (
    <div className={`main ${signUpMode ? 'sign-up-mode' : ''}`}>

        <div className='box'>

            <div className='inner-box'>
                <div className='forms-wrap'>
                    <form action="" autoComplete='on' className="sign-in-form">
                        <div className="logo">
                            <img src={assets.logo} alt='easyclass'/>
                            <h4>ToDoList</h4>
                        </div>

                            <div className="heading">
                                <h2>Welcome Back</h2>
                                <h6>Not Registered Yet?</h6>
                                <a href='#' className='toggle' onClick={() => setSignUpMode(true)}> Sign Up</a>
                            </div>

                            <div className='actual-form'>
                                <div className='input-wrap'>
                                    <input 
                                      type='text' 
                                      minLength='4' 
                                      className={`input-field ${usernameActive ? 'active' : ''}`}
                                      onFocus={() => setUsernameActive(true)}
                                      onBlur={(e) => !e.target.value && setUsernameActive(false)}
                                      autoComplete='on'
                                      id='name'
                                      required
                                    />
                                    <label>Name</label>
                                </div>

                                <div className='input-wrap'>
                                    <input 
                                      type='password' 
                                      minLength='4' 
                                      className={`input-field ${passwordActive ? "active" : ""}`}
                                      onFocus={() => setPasswordActive(true)}
                                      onBlur={(e) => !e.target.value && setPasswordActive(false)}
                                      autoComplete='on'
                                      id='pass'
                                      required
                                    />
                                    <label>Password</label>
                                </div>

                                    <input type='submit' value="Sign In" onClick={handleSignIn} className='sign-btn'/>

                                    <p className='text'>
                                        Lorem ipsum dolor sit amet  impedit.
                                        <a href='#'> Get help</a> signing in
                                    </p>
                                </div>
                    </form>

                    <form action="" autoComplete='on' className="sign-up-form">
                        <div className="logo">
                            <img src={assets.logo} alt='easyclass'/>
                            <h3>ToDoList</h3>
                        </div>

                            <div className="heading">
                                <h2>Get Started</h2>
                                <h6>Already have an account?</h6>
                                <a href='#' className='toggle' onClick={() => setSignUpMode(false)}> Sign In</a>
                            </div>

                            <div className='actual-form'>
                                <div className='input-wrap'>
                                    <input 
                                      type='text' 
                                      minLength='4' 
                                      className={`input-field ${usernameActive ? 'active' : ''}`}
                                      onFocus={() => setUsernameActive(true)}
                                      onBlur={(e) => !e.target.value && setUsernameActive(false)}
                                      autoComplete='on'
                                      id='name'
                                      required
                                    />
                                    <label>Name</label>
                                </div>

                                <div className='input-wrap'>
                                    <input 
                                      type='email' 
                                      className={`input-field ${emailActive ? 'active' : ''}`}
                                      onFocus={() => setEmailActive(true)}
                                      onBlur={(e) => !e.target.value && setEmailActive(false)}
                                      autoComplete='on'
                                      id='name'
                                      required
                                    />
                                    <label>Email</label>
                                </div>

                                <div className='input-wrap'>
                                    <input 
                                      type='password' 
                                      minLength='4' 
                                      className={`input-field ${passwordActive ? "active" : ""}`}
                                      onFocus={() => setPasswordActive(true)}
                                      onBlur={(e) => !e.target.value && setPasswordActive(false)}
                                      autoComplete='on'
                                      id='pass'
                                      required
                                    />
                                    <label>Password</label>
                                </div>

                                    <input type='submit' onClick={handleSignUp} value="Sign Up" className='sign-btn'/>

                                    <p className='text'>
                                        By signing up, I agree to the
                                        <a href='#'> Terms of Service</a> and
                                        <a href='#'> Privacy Policy</a>.
                                    </p>
                                </div>
                    </form>
                </div>

                <div className='carousel'>
                    <div className="images-wrapper">
                        {images.map((src, index) => (
                <img 
                  key={index} 
                  src={src} 
                  alt={`slide ${index}`} 
                  className={`image img-${index + 1} ${activeIndex === index ? "show" : ""}`} 
                />
              ))}
                        
                    </div>

                    <div className="text-slider">
                        <div className='text-wrap'>
                            <div className="text-group" style={{ transform: `translateY(-${activeIndex * 2.2}rem)` }} >
                                {texts.map((t, index) => (
                    <h2 key={index}>{t}</h2>
                  ))}
                            </div>
                        </div>

                        <div className="bullets">
                            {texts.map((_, index) => (
                  <span 
                    key={index} 
                    className={activeIndex === index ? "active" : ""} 
                    onClick={() => setActiveIndex(index)} 
                  ></span>
                ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    
  )
}

export default Login