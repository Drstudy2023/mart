// Footer.js
import React from 'react';
import styles from "../Footer/Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-5 col-12">
                        <div className={styles.ft1}>
                            <h3><span>Illugma</span></h3>
                            <p style={{color:"white"}} >At Illugma, we are dedicated to providing innovative solutions that streamline your business operations and enhance productivity.</p>
                            <div className={styles.footerIcons}>
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-instagram"></i>
                                <i className="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-12">
                        <div className={styles.ft2}>
                            <h5 style={{color:"yellow"}}>Information</h5>
                            <ul>
                                <li><a  href="/">Help</a></li>
                                <li><a href="/">Rules & Regulations</a></li>
                                <li><a href="/">Contact Us</a></li>
                                <li><a href="/">Services</a></li>
                                <li><a href="/">About</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-12">
                        <div className={styles.ft3}>
                            <h5 style={{color:"yellow"}}>Contact</h5>
                            <p style={{color:"white"}}><i className="fa-solid fa-phone-volume"></i>+94752673321</p>
                            <p style={{color:"white"}}><i className="fa-solid fa-envelope"></i>Illugma@gmail.com</p>
                            <p style={{color:"white"}}><i className="fa-solid fa-paper-plane"></i>+94752673321 /@Iluggmaadmin</p>
                            <p style={{color:"white"}}><i className="fa-brands fa-whatsapp"></i>+94752673321</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.LastFooter}>
                <p style={{color:"white"}}>power by Assailent</p>
            </div>
        </footer>
    );
};

export default Footer;
