import React from 'react';
import ReactDom from 'react-dom';
import './index.css'
import {IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter} from 'react-icons/io5';

function Info (){
    return(
        <div>
            <div className="card-image-container">
                <img className="card-image" src="https://www.kindpng.com/picc/m/333-3339055_thumb-image-smiling-business-woman-png-transparent-png.png" alt="Thumb Image - Smiling Business Woman Png, Transparent Png@kindpng.com"/>
            </div>        
            <div className = "card-name">
                <h1>Franca Mensa</h1>
                <p>Chief Executive Officer,</p>
                <p>Arts Media</p>
            </div>
            <div className="card-buttons">
                <button className="btn">Like</button>
                <button className="btn btn-blue">LinkedIn</button>
            </div> 
        </div>
    )
}

function About(){
return(
    <div className="section">
        <h1 className="section-title">About</h1>
        <p className="section-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel repudiandae iure, doloremque voluptatem expedita nulla!</p>
    </div>
)
}

function Interest(){
    return(
        <div className="section">
            <h1 className="section-title">Interest</h1>
            <p className="section-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel repudiandae iure, doloremque voluptatem expedita nulla!</p>
        </div>
    )
    }    

function Footer(){
    return(
        <div className="footer">
            <div className="social-media-icons">
                <IoLogoFacebook size="18" color="#caeaff"/>
                <IoLogoTwitter size="18" color="#caeaff"/>
                <IoLogoInstagram size="18" color="#caeaff"/>
                <IoLogoLinkedin size="18" color="#caeaff"/>
            </div>
        </div>
    )
}

function App(){
    return(
        <div className="card">
            <Info/>
            <About/>
            <Interest/>
            <Footer/>
        </div>
    )
}

ReactDom.render(<App/>, document.getElementById('root'))