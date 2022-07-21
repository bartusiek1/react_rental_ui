import React, {useEffect, useState} from 'react';
import classes from './AppBody.module.css'
import {Button, Grid} from "@mui/material";
import connection from "../../axios/axios";
import Card from "../card/Card";
import Notification from "../notification/Notification";

const AppBody = () => {
    const [carList, setCarList] = useState([]);
    const [notification, setNotification] = useState(null);

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

    const functionClickDelete = (paramId) => {
        console.log("Wywołano usuń - parametr id: " + paramId)

        connection.delete("api/car/" + paramId)
            .then((response) => {
                setNotification("Car has been deleted!")   // zamiast console.log....

                // 1. carList - znajdz element o id: paramId
                for (var i=0; i<carList.length; i++) {
                    if(carList[i].carId === paramId) {

                        // 2. usun element o id: paramId z listy carList
                        carList.splice(i, 1)
                    }
                }
                // 3. stwóz kopię listy carList
                const carListCopy = [...carList];

                // 4. zastąp obecną listę aktualną
                setCarList(carListCopy);
        })
            .catch((errorResponse) => {
                setNotification("Unable to remove car: " + errorResponse)  //zamiast console.log...
            });
    }

    if (notification != null) {             // ustawiamy timer dla naszego komunikatu
        setTimeout(() => {
            console.log("Timer zakończył pracę!")
            setNotification(null);
        }, 5000);           // to jest 5 sekund
    }

    console.log("Przeładowuje")




    return (
        <div className={classes.AppBody}>
            <Card cardTitle={"Super Cars for Rent"}>
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
                                <Grid key={elementListy.carId} container className={classes.TableRow}>{/*wiersz*/}
                                    <Grid item xs={2}>{elementListy.carId}</Grid>
                                    <Grid item xs={2}>{elementListy.name}</Grid>
                                    <Grid item xs={2}>{elementListy.make}</Grid>
                                    <Grid item xs={2}>{elementListy.bodyType}</Grid>
                                    <Grid item xs={2}>{elementListy.carGearBox}</Grid>
                                    <Grid item xs={2}>
                                        <Button variant="contained" color="error" onClick={() => {
                                            functionClickDelete(elementListy.carId);
                                        }}>
                                            Delete
                                        </Button>
                                    </Grid>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Card>

            <Notification>{notification}</Notification>
        </div>
    );
};

export default AppBody;
