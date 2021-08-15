import React from 'react';
import  '../About.css';
export function About(){
    return(
        <div className = "about-us">
            <div className="about-section">
                <h1>About Us Page</h1>
                <p>
                We are a non-profit organization whose sole motive is to help the local and non-local people who want to visit the places of dallas to get full and correct information within a same platform.
                This website suggest the best lakes in dallas area and also the facilities around those lakes with best deals. We were established on 2021 and have been working on to improve the website to provide our users with correct and updated information.
                We have a group of young, creative and hardworking group of programmers who are devoted to work 24hrs to provide the best services to the user.     
                </p>
            </div>
            <div>
                <h2 style= {{'text-align':'center'}}>Our Team</h2>
                <div className="row">
                    <div className="card">
                        <img src="bg.jpg" alt="Govinda"  style= {{width:"100%"}}/>
                        <div className="container">
                            <h2>Govinda K.C.</h2>
                            <p className="title">CEO & Founder</p>
                            <p> Full Stack web developer.</p>
                            <p>Govinda.kc@mavs.uta.edu</p>
                        </div>
                    </div>                     
                </div>
            </div>
            <div className="card">
                <img src="bg.jpg" alt="Nabin"  style= {{width:"100%"}} />
                <div className="container">
                    <h2>Nabin Shrestha</h2>
                    <p className="title">Developer</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>Nabin.shrestha2@mavs.uta.edu</p>
                </div>
            </div>
            <div className="card">
                <img src="/images/bg.jpg" alt="Mahesh" style= {{width:"100%"}} />
                <div className="container">
                    <h2>Mahesh Poudyal</h2>
                    <p className="title">Developer & Designer</p>
                    <p>I am a Computer Science Major and I love to Travel.</p>
                    <p>Mahesh.poudyal@mavs.uta.edu</p>
                    
                </div>
            </div>
            <div className="card">
                <img src="bg.jpg" alt="Abhinandan" style= {{width :"100%"}} />
                <div className="container">
                    <h2>Abhinandan Yadav</h2>
                    <p className="title">Developer & Designer</p>
                    <p>I am a computer science student with a solid background in the Full Stack java Developer.</p>
                    <p>Abhinandan.yadav@mavs.uta.edu</p>
                </div>
            </div>
        </div>      
    );
}
