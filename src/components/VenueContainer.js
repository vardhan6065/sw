import React, { Fragment } from "react";
import CardsImages from "./CardsImages";
import classes from './VenueContainer.module.css'
import Venue from "./Venue";
import hotel1 from '../assets/hotel1.jpg'
import hotel2 from '../assets/hotel2.jpg'
import hotel3 from '../assets/hotel3.jpg'
import hotel4 from '../assets/hotel4.jpg'

const VenueContainer = (props) =>{
    return (
        <div className={classes.outercontainer}>
            <div className={classes.title}>Popular Venue Searches</div>
            <div className={classes.container}>
                <Venue className={classes.card} img={hotel1} stars="5 star" text="Mumbai Taj Hotel"/>
                <Venue className={classes.card} img={hotel2} stars="4 star" text="Kolhapur Sayaji Hotel"/>
                <Venue className={classes.card} img={hotel3} stars="5 star" text="Pune ABC Hotel" />
                <Venue className={classes.card} img={hotel4} stars="3 star" text="Banglore Raoji Hotel" />
                {/* <Venue className={classes.card}  text="Mehandi" /> */}
            </div>
        </div>
    )
}

export default VenueContainer;
