import React from "react";
import "./about.css";
import aboutImg from '../../images/about-img.avif';


const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="section-title">
                    <h2>About</h2>
                </div>

                <div className="about-content grid ">
                    <div className="about-img">
                        <img src= {aboutImg} alt=''/>
                    </div>

                    <div className="about-text">
                        <h2 className="about-title fs-26 ls-1">About Bookpedia</h2>
                        <p className="fs-17">I've always enjoyed reading but never found the time to! After recently getting back into reading for pleasure, creating this "bookpedia" seemed like it would be fun! It was very cool being able to look up books that I've read before!</p>
                        <p className="fs-17">This was created using React and the Open Library Search API.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About