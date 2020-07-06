import React from "react";
import HeaderNavbar from "../../components/headerNavbar";
import SideNavbar from "../../components/sideNav";
import Form from "../../components/form";

const InsideTheApp = () => {
    return (
        <div class="inside-the-app-wrapper">
            <HeaderNavbar />
            <div className="side-navbar-wrapper">
                <SideNavbar />
            </div>
            <div className="form-wrapper">
                <Form />
            </div>
        </div>
    );
};

export default InsideTheApp;
