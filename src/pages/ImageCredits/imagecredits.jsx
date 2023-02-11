import React from "react";
import "./imagecredits.css";
import imageCreditsImg from '../../images/thankyou.avif'

const ImageCredits = () => {
    return (
        <section className="imagecredits">
            <div className="container">
                <div className="section-title">
                    <h2>Image Credits</h2>
                </div>

                <div className="imagecredits-content grid ">
                    <div className="imagecredits-img">
                        <img src= {imageCreditsImg} alt=''/>
                    </div>
                    <div className="imagecredits-text">
                        <h2 className="imagecredits-title fs-26 ls-1">Image Credits</h2>
                        <p>Big thank you...</p>
                        <p className="fs-17">Book Logo & Loading gif from icons8.com</p>
                        <a href="https://www.vecteezy.com/free-vector/web">Web Vectors by Vecteezy</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ImageCredits