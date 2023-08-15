import React from 'react';
import profilePicture from '../../assets/images/profile-picture.jpg';
import '../About/About.scss'; 

const About = () => {
    return (
        <div className="about-container">
            <div className="about-title">
                <h2>About Me</h2>
                <h3>Junior Software Engineer</h3>
            </div>
            <div className="profile-content">
                <div className="profile-picture">
                    <img src={profilePicture} alt="Profile" />
                </div>
                <div className="about-text">
                    <p>
                        I am dedicated to transitioning from hospitality to tech, driven by my passion for creating exceptional experiences. With a strong customer service background and attention to detail, I bring a unique combination of interpersonal skills and technical knowledge. I thrive in fast-paced environments, love solving problems, and generating innovative ideas. Beyond my professional pursuits, my dedication to physical fitness and working out fuels my discipline, resilience, and commitment to personal growth. Through my teamwork, continuous learning, and maintaining a healthy lifestyle, I aim to positively impact the tech industry.
                    </p>
                </div>
            </div>
        </div>
    );
};


export default About;
