import React from 'react';
import instaicon from "./images/instagram_PNG16.png"
import faceicon from "./images/baseline_facebook_black_24dp.png"
import giticon from "./images/icons8-github-48.png"
import linkedicon from "./images/icons8-linkedin-48.png"

const Footer = () => {
    return (
        <footer className="contact">
            <div className="container">
                <div className="contact-info">
                    <h2>Contact</h2>
                    <p>Luiz Felipe Martins</p>
                    <p>471 Brarfield Xing</p>
                    <p style={{ marginBottom: "2rem" }}>Marietta, GA 30066</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <p>Tel: 678-702-7824</p>
                    <p>email: lipihmartins@gmail.com</p>
                </div>
                <div className="social">
                    <h3>Stay Connected</h3>
                    <a
                        href="https://www.linkedin.com/in/luiz-felipe-dos-santos-martins/"
                        target="_blank">

                        <img
                            src={linkedicon}
                            alt="Linkedin-icon" />

                        <p>Linkedin</p>
                    </a>
                    <a
                        href="https://github.com/lipeehmartins"
                        target="_blank">

                        <img
                            src={giticon}
                            alt="Github-icon" />

                        <p>Github</p>
                    </a>
                    <a
                        href="https://www.facebook.com/felipe.martins.3532"
                        target="_blank">

                        <img
                            src={faceicon}
                            alt="Facebook-icon" />

                        <p>Facebook</p>
                    </a>
                    <a
                        href="https://www.instagram.com/lipeehmartins/"
                        target="_blank">

                        <img
                            src={instaicon}
                            alt="Instagram-icon" />

                        <p>Instagram</p>
                    </a>
                </div>
                <div className="form">
                    <h3>Or leave a message here</h3>
                    <form className="contact-form">
                        <input className="name" type="text" placeholder="Full name" required />
                        <input className="email" type="email" placeholder="Email*" required />
                        <input className="subject" type="text" placeholder="Subject" />
                        <textarea className="message" placeholder="Your Message" required />
                        <button className="btn btn-primary subbutton" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </footer>
    )
}

export default Footer
