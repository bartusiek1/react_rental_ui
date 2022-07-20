import React, {useEffect, useState} from 'react';
import classes from './AppBody.module.css'
import {Grid} from "@mui/material";
import connection from "../../axios/axios";

const AppBody = () => {
    const [carList, setCarList] = useState([]);

    useEffect(() => {
        connection.get("/api/car/list")       // fire and forget
            .then((response) => {
                console.log("OK! ");
                console.log(response);
                setCarList(response.data);
            })
            .catch((errorResponse) => {
                console.log("ErRoR: " + errorResponse);
            });
    }, []);

    console.log("Przeładowuje")

    return (
        <div className={classes.AppBody}>
            <div className={classes.BodyContainer}>
                <div className={classes.ContainerHeader}>
                    Cars for rent
                </div>
                <div className={classes.ContainerBody}>
                    <Grid container direction={"row"}> {/*cała tabela*/}
                        <Grid container className={classes.TableHeader}>{/*wiersz nagłówka*/}
                            <Grid item xs={2}>Id</Grid>
                            <Grid item xs={2}>Name</Grid>
                            <Grid item xs={2}>Make</Grid>
                            <Grid item xs={2}>Body Type</Grid>
                            <Grid item xs={2}>Gearbox</Grid>
                            <Grid item xs={2}></Grid>
                        </Grid>
                    {
                        carList.map((elementListy) =>{
                            return (
                                <Grid key={elementListy.carId} container className={classes.TableHeader}>{/*wiersz*/}
                                <Grid item xs={2}>{elementListy.carId}</Grid>
                                <Grid item xs={2}>{elementListy.name}</Grid>
                                <Grid item xs={2}>{elementListy.make}</Grid>
                                <Grid item xs={2}>{elementListy.bodyType}</Grid>
                                <Grid item xs={2}>{elementListy.carGearBox}</Grid>
                                <Grid item xs={2}></Grid>
                            </Grid>
                            )
                        })
                    }
                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default AppBody;
