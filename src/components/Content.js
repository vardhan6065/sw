import React from "react";
import classes from './Content.module.css'

// className={classes.}

const Content = (props) =>{
    return (
        <div className={classes.outercontainer}>
            <div className={classes.innercontainer}>
                <div className={classes.upper}>
                    <h3>Shaadi Wire - Wedding Planner That You Need</h3>
                    <h4>Plan your wedding with Us</h4>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                </div>
               <hr></hr>
                <div className={classes.lower}>
                    <h4 className={classes.contact}>Contact Us</h4>
                    <div className={classes.stickers}>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;