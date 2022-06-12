import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import Header from './components/Header';
// import Image1 from './components/Image1';
import Image1 from './components/Image1';
import CardsContainer from './components/CardsContainer';
import VenueContainer from './components/VenueContainer';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  return (
    <Fragment>
      <Header/>
      <Image1/>
      <CardsContainer/>
      <VenueContainer/>
      <Content/>
      <span className='contact'>Contact Us</span>
      <Footer/>
    </Fragment>
  );
}

export default App;
