import React, { Fragment } from "react";
import CardsImages from "./CardsImages";
import classes from './CardsContainer.module.css'
import dress from '../assets/dress.jpg'
import makeup from '../assets/makeup.jpg'
import mehandi from '../assets/mehandi.jpg'
import jwellery from '../assets/jwellery.jpg'
import invitation from '../assets/invitation.jpg'
import groom from '../assets/groom.jpg'
import food from '../assets/food.jpg'

const CardsContainer = (props) =>{
    return (
        <div className={classes.outercontainer}>
            <div className={classes.container}>
                <CardsImages className={classes.card} img={dress} text="Dress"/>
                <CardsImages className={classes.card} img={makeup} text="Make Up"/>
                <CardsImages className={classes.card}  img={mehandi} text="Mehandi" />
                <CardsImages className={classes.card}  img={jwellery} text="Jwellery" />
                <CardsImages className={classes.card}  img={invitation} text="Invitation" />
                <CardsImages className={classes.card} img={groom} text="Groom Wear"/>
                <CardsImages className={classes.card} img={food} text="Catering"/>
            </div>
        </div>
    )
}

export default CardsContainer;
