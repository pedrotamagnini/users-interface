import React from "react";
import "../App.css";
import alice from '../assets/TeamMember/Alice.png';
import bob from '../assets/TeamMember/Bob.png';
import charlie from '../assets/TeamMember/Charlie.png';
import david from '../assets/TeamMember/David.png';
import ella from '../assets/TeamMember/Ella.png';
import frank from '../assets/TeamMember/Frank.png';
import grace from '../assets/TeamMember/Grace.png';
import henry from '../assets/TeamMember/Henry.png';
import isabella from '../assets/TeamMember/Isabella.png';
import jack from '../assets/TeamMember/Jack.png';

import Nav from '../components/utils/Nav';


const team = [
    {
        name: 'Alice Smith',
        image: alice,
    },
    {
        name: 'Bob Johnson',
        image: bob,
    },
    {
        name: 'Charlie Brown',
        image: charlie,
    },
    {
        name: 'David Wilson',
        image: david,
    },
    {
        name: 'Ella Davis',
        image: ella,
    },
    {
        name: 'Frank Miller',
        image: frank,
    },
    {
        name: 'Grace Taylor',
        image: grace,
    },
    {
        name: 'Henry Young',
        image: henry,
    },
    {
        name: 'Isabella Hall',
        image: isabella,
    },
    {
        name: 'Jack Harris',
        image: jack,
    }
];


const About = () => {
    return (
        <div>
            <h1 className="home-title">About US</h1>
            <Nav />
            <div/>
        <div className='about-page'>
            <h1 style={{padding: '10px', textAlign: 'center'}}>Our Goal</h1>
            <p>Welcome to our About Us page. </p>
            <p>We are a passionate team of developers and creators dedicated to building amazing web applications and providing valuable information to our users.</p>
            <p>Our mission is to make the web a better place by delivering high-quality content and user-friendly applications that improve people's lives.</p>
            <p>Feel free to explore our website, learn more about our team, and check out the awesome projects we've been working on.</p>

            <h1 style={{padding: '10px', textAlign: 'center'}}> Our Team </h1>

            <div className="team">
                {team.map((member, index) => (
                    <div key={index} className="team-member">
                        <img src={member.image} alt={member.name} className="team-member-image"/>
                        <br/>
                        <br/>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};


export default About;