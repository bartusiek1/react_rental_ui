import React from 'react';
import classes from './AppBody.module.css'
import {Grid} from "@mui/material";

const AppBody = () => {
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
                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default AppBody;
