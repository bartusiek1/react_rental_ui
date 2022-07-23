import React from 'react';
import classes from './AppHeader.module.css'
import {Link} from "react-router-dom";

const AppHeader = () => {
    return (
        <div className={classes.AppHeader}>
            <div className={classes.HeaderLeft}>ARP 4 Rental</div>
            <div className={classes.HeaderRight}>
                <Link to={"/"}>
                    <div>Home</div>
                </Link>
                <Link to={"/cars"}>
                    <div>List</div>
                </Link>
                <Link to={"/rent"}>
                    <div>Form</div>
                </Link>

            </div>
        </div>
    );
};

export default AppHeader;
