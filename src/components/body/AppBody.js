import React from 'react';
import classes from './AppBody.module.css'
import {Route, Routes} from "react-router-dom";
import CarList from "../carList/CarList";
import CarForm from "../carForm/CarForm";

const AppBody = () => {
    return (
        <div className={classes.AppBody}>
            <Routes>
                <Route path={"/"}></Route>
                <Route path={"/cars"} element={<CarList/>}></Route>
                <Route path={"/cars/form"} element={<CarForm/>}></Route>
            </Routes>

        </div>
    );
};

export default AppBody;

