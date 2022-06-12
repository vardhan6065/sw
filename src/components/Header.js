import React,{Fragment} from 'react';
import classes from './Header.module.css';
import logoImg from '../assets/logo.jpg';
import Button from '@mui/material/Button';


const Header = (props) => {

    return (
      <Fragment>
        <header className={classes.header}>
          <div className={classes['logo-title']}>
            <div className={classes['logo-div']}>
                <img src={logoImg} alt='logo'/>
            </div>
            {/* <div className={classes['box-in-header']}> */}
                <h2 className={classes['title-nam']}>Shaadi Wire</h2>
            {/* </div> */}
          </div>
          <div className={classes.dropdown}>
            {/* <div className={classes['dropdown-menu']}>
                Menu
            </div> */}
            <div className={classes.options}>
              <Button variant="text"><a>Venues</a></Button>
              <Button variant="text"><a>Vendors</a></Button>
              <Button variant="text"><a>Photos</a></Button>
              <Button variant="text"><a>Real Weddings</a></Button>
              <Button variant="text"><a>Our Work</a></Button>
              <Button variant="text"><a>Shop</a></Button>
              <Button variant="text"><a>E-invites</a></Button>
            </div>
          </div>
        </header>
      </Fragment>
    );
  };
  
export default Header;
