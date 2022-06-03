import React, { useEffect, useState } from "react";
import { MdLocationOn, MdSchool } from "react-icons/md";
import { FiCodepen } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import "./contact.css";

export default function Contact() {
    return (

        <div id="Contact" className="route">
            <h3>Contact</h3>
            <div className="container">
                <div className="left-cont">
                    <form action="" id="contact-form">
                        <div className="form-group">
                            <input type="text" className="form-control" id="name" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" id="email" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" id="message" rows={3} placeholder="Message" />
                        </div>
                        <button type="submit" id="submit">
                            <div className="svg-wrapper-1">
                                <div className="svg-wrapper">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                    </svg>
                                </div>
                            </div>
                            <span>Send</span>
                        </button>
                    </form>
                </div>
                <div className="right-cont">
                    <ul>
                        <li><MdLocationOn /> Mexico - Mexico City</li>
                        <li><MdSchool /> UNAM</li>
                        <li><IoMdMail /> jmanuelhv9@gmail.com</li>
                    </ul>
                    <hr />
                    <ul>
                        <li><a href=""><BsGithub /></a></li>
                        <li><a href=""><FiCodepen /></a></li>
                        <li><a href=""></a></li>
                        <li><a href=""></a></li>
                    </ul>
                    <hr />
                </div>
            </div>
        </div>
    );
};