import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import CountryCard from './CountryCards/CountryCard';
import USA from './ContryPages/USA';
import Australia from './ContryPages/Australia';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const fadeImages = [
  'assets/images/hill.jpg',
  'assets/images/dubai.jpg',
  'assets/images/sea.jpg'
];

function App() {
  const [cards, setCards] = React.useState([
    { id: 1, name: 'USA', rating: '8.4' },
    { id: 2, name: 'Australia', rating: '8.8' },
    { id: 3, name: 'France', rating: '5.4' },
    { id: 2, name: 'Australia', rating: '8.8' },
    { id: 1, name: 'USA', rating: '8.4' },
    { id: 3, name: 'France', rating: '5.4' },
    { id: 1, name: 'USA', rating: '8.4' },
    { id: 3, name: 'France', rating: '5.4' },
    { id: 2, name: 'Australia', rating: '8.8' },
    { id: 1, name: 'USA', rating: '8.4' },
    { id: 2, name: 'Australia', rating: '8.8' },
    { id: 1, name: 'USA', rating: '8.4' },
    { id: 3, name: 'France', rating: '5.4' },
    { id: 2, name: 'Australia', rating: '8.8' },
    { id: 3, name: 'France', rating: '5.4' }
  ]);

  const CardsPanel = () => <h1>Home Page</h1>;

  let pagePath = () => '/';

  function setCountryPagePass(cardName){
    pagePath = cardName;
  }

  // reqHistory(event) {
  //   fetch('/users', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       id: this.state.id,
  //       item: this.history
  //     })
  //   })
  //     .then(res => res.json())
  //     .then(getHistory => this.setState({ getHistory }));
  // };

  return (
    <Router>
      <div className="App">
        <header className="header">
          <div class="wrapper">
            <div class="header_content">
              <a href="index.html">
                <div class="logo"></div>
              </a>
              <ul class="navbar">
                <li class="header_active"><a href="#">About</a></li>
                <li><a href="pages/live_broadcast/panda.html">Zoos</a></li>
                <li><a href="pages/intermediate_page/map.html">Map</a></li>
                <li><a href="#contact_us">Contact Us</a></li>
                <li>
                  <a
                    href="https://www.figma.com/file/HKt5Nlx0jghQtJp6jW9q8F/zooApp"
                  >Design</a
                  >
                </li>
              </ul>
              <label class="switch">
                <input type="checkbox" />
                <span class="theme_slider"></span>
              </label>
              <button class="btn_navigation"></button>
              <button className="btn btn-info">Log in</button>
              <button className="btn btn-info">Sign in</button>
            </div>
          </div>
        </header>
        <Route exact path="/" component={CardsPanel}>
          <section class="first_screen">
            <div className="wrapper">
              <div className="slide-container">
                <ul class="social_net">
                  <li class="instagram">
                    <a href="https://www.instagram.com"></a>
                  </li>
                  <li class="twitter">
                    <a href="https://twitter.com"></a>
                  </li>
                  <li class="youtube">
                    <a href="https://youtube.com"></a>
                  </li>
                  <li class="vk">
                    <a href="https://vk.com"></a>
                  </li>
                </ul>
                <Fade duration='3000' arrows={false}>
                  <div className="each-fade">
                    <div className="image-container">
                      <p className="slide_title first_slide_title">Travel from home</p>
                      <img src={fadeImages[0]} alt='slide1' />
                    </div>
                  </div>
                  <div className="each-fade">
                    <div className="image-container">
                      <p className="slide_title second_slide_title">Explore new places</p>
                      <img src={fadeImages[1]} alt='slide2' />
                    </div>
                  </div>
                  <div className="each-fade">
                    <div className="image-container">
                      <p className="slide_title third_slide_title">Discover the world</p>
                      <img src={fadeImages[2]} alt='slide3' />
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </section>
          <section className="cards">
            <div className="cards_panel">
              {cards.map((card) => { return <Link onClick = {setCountryPagePass(card.name)} to={pagePath}><CountryCard country={card} key={card.id} id={card.id} /> </Link> })}
            </div>
          </section>
        </Route>
        <Route exact path="/USA" component={USA} />
        <Route exact path="/Australia" component={Australia} />
        <footer>
          <div class="wrapper">
            <div class="content">
              <div class="footer_navpanel">
                <a href="#about">
                  <div class="logo logo_footer"></div>
                </a>
                <ul class="footer_navbar">
                  <li><a href="#">About</a></li>
                  <li><a href="pages/live_broadcast/panda.html">Zoos</a></li>
                  <li><a href="pages/intermediate_page/map.html">Map</a></li>
                  <li>
                    <a
                      href="https://www.figma.com/file/HKt5Nlx0jghQtJp6jW9q8F/zooApp"
                    >Design</a
                    >
                  </li>
                </ul>
                <button class="btn_donate_for_volunteers">
                  <span>DONATE FOR VOLUNTEERS</span>
                </button>
              </div>
              <div class="contact_us">
                <ul class="footer_navbar_vertical">
                  <li><a href="#">About</a></li>
                  <li><a href="pages/live_broadcast/panda.html">Zoos</a></li>
                  <li><a href="pages/intermediate_page/map.html">Map</a></li>
                  <li>
                    <a
                      href="https://www.figma.com/file/HKt5Nlx0jghQtJp6jW9q8F/zooApp"
                    >Design</a
                    >
                  </li>
                </ul>
                <span class="contact_us_title">Contact us</span>
                <form class="contact_us_form" method="POST">
                  <input
                    class="contact_form_item"
                    type="text"
                    name="contactName"
                    placeholder="Name"
                    required=""
                  />
                  <input
                    class="contact_form_item"
                    type="email"
                    name="contactEmail"
                    placeholder="Email"
                    required=""
                  />
                  <fieldset>
                    <legend>Please enter your message</legend>
                    <textarea class="contact_text_area"></textarea>
                  </fieldset>
                  <div class="contact_checkbox_container">
                    <input type="checkbox" id="contactCheckbox" required="" />
                    <label for="contact_checkbox" class="checkbox_title"
                    >I agree to the processing of Personal Data</label
                    >
                  </div>
                  <button type="submit" class="btn_contact_submit">
                    send
                <img src="assets/icons/arrow_right_submit.svg" alt="send" />
                  </button>
                </form>
              </div>
              <div class="travel_online_center">
                <span class="online_center_title">Travel online center</span>
                <p class="text color_white">132, Address District, Street</p>
                <p class="text color_white mb-20">Open Daily 10:00 am - 5:00 pm</p>
                <address>
                  <a href="tel:7021633433" class="text color_white"
                  >T(702) 163-3433</a
                  >
                </address>
                <address>
                  <a
                    href="mailto:zoo.online@gmail.com"
                    class="text color_white mb-20"
                  >travel.online@gmail.com</a
                  >
                </address>
                <ul class="footer_networks">
                  <li class="instagram">
                    <a href="https://www.instagram.com"></a>
                  </li>
                  <li class="twitter">
                    <a href="https://twitter.com"></a>
                  </li>
                  <li class="vk">
                    <a href="https://vk.com"></a>
                  </li>
                  <li class="youtube">
                    <a href="https://youtube.com"></a>
                  </li>
                </ul>
                <button class="btn_donate_for_volunteers">
                  <span>DONATE FOR VOLUNTEERS</span>
                </button>
              </div>
              <div class="footer_copyrights">
                <span class="copyrights_text mt-28">©Galushkin Alexander</span>
                <span class="copyrights_text"
                >©GRSU- 2021</span
                >
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
export default App;
