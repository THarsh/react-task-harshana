import React from "react";
import logo from "../../assets/images/logo.png";
import userIcon from "../../assets/images/userIcon.jpg";
import Search from "./search";
import DateTimeBox from "./dateTimeBox";
import { BsEnvelope, BsBell } from "react-icons/bs";
const HeaderNavbar = () => {
    return (
        <div className="header-wrapper">
            <div className="logo-wrapper">
                <img src={logo} className="logo" title="logo" alt="logo" />
            </div>
            <div className="search-box-wrapper">
                <Search />
            </div>
            <div className="date-time-wrapper">
                <DateTimeBox />
            </div>
            <div className="notifications-wrapper">
                <div className="message">
                    <BsEnvelope className="envelope" />
                    <span />
                </div>
                <div className="alert">
                    <BsBell className="bell" />
                    <span />
                </div>
            </div>
            <div className="user-profile-wrapper">
                <h6> Alli Sherman </h6>
                <img
                    src={userIcon}
                    className="profile-image"
                    title="logo"
                    alt="logo"
                />
            </div>
        </div>
    );
};

export default HeaderNavbar;
