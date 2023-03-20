import React from 'react'
import user from "../images/images.png";
import {NavLink} from "react-router-dom";

const ContactDetail = (props) => {
    console.log(props);
    //const{name,email} = props.location.state.contact;
    return (
        <div className='main'>
            <div className='ui card centered'>
                <div className='image'>
                    <img style={{ marginTop: "25%" }} src={user} alt="user" />
                </div>
                <div className='content'>
                    <div className='header'>Dhanraj</div>
                    <div className='description'>Thawani</div>
                </div>
            </div>
            <div className='center-div'>
                <NavLink to="/">
                    <button className="ui button blue center">
                        Back to contact List
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default ContactDetail;