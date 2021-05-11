import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import CountryCard from './CountryCards/CountryCard';
import USA from './ContryPages/USA';
import Australia from './ContryPages/Australia';
import LoginModal from './Modal/LoginModal'
import SignInModal from './Modal/SigninModal'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const fadeImages = [
  'assets/images/hill.jpg',
  'assets/images/dubai.jpg',
  'assets/images/sea.jpg'
];

function App() {
  const [cards, setCards] = React.useState([
    { id: 1, countryname: 'USA', rating: 8.4, numberOfVoters: 300 },
    { id: 2, countryname: 'Australia', rating: 8.8, numberOfVoters: 300 },
    { id: 3, countryname: 'France', rating: 5.4, numberOfVoters: 300 },
    { id: 2, countryname: 'Australia', rating: 8.8, numberOfVoters: 300 }
  ]);

  const [feedbackName, setFeedbackName] =  React.useState('');
  const [feedbackEmail, setFeedbackEmail] =  React.useState('');
  const [feedbackText, setFeedbackText] =  React.useState('');

  function sortByRating() {
    const sorted = [...cards].sort(function (a, b) {
      let keyA = new Number(a.rating),
        keyB = new Number(b.rating);
      if (keyA > keyB) return -1;
      if (keyA < keyB) return 1;
      return 0;
    });
    setCards(sorted); 
  }

  function sortByAlphabet() {
    const sorted = [...cards].sort(function (a, b) {
      let keyA = new String(a.countryname),
        keyB = new String(b.countryname);
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
    setCards(sorted); 
  }

  const CardsPanel = () => <h1>Home Page</h1>;

  let pagePath = () => '/';

  function setCountryPagePass(cardName) {
    pagePath = cardName;
  }

  useEffect(() => {
    fetch('/api/countries', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          setCards(result);
        },
        (error) => {
          console.log(error);
          setCards([{ id: 1, countryname: "ERROR", rating: 3, numberofvoters: 300 }]);
        }
      );
  }, [])

  function addFeedbackToDb(event){
    event.preventDefault();
    try {
        let data = {
            Name: feedbackName,
            Email: feedbackEmail,
            Text: feedbackText
        };
        fetch('api/feedback/AddFeedback', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        alert('Feedback send successfully!');
    } catch (e) {
      alert('Something goes wrong!');
    }
};
  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="wrapper">
            <div className="header_content">
              <a href="index.html">
                <div className="logo"></div>
              </a>
              <ul className="navbar">
                <li className="header_active"><a href="#"></a></li>
                <li className="header_active"><a href="#">About</a></li>
                <li><a href="pages/live_broadcast/panda.html">Countries</a></li>
                <li><a href="pages/intermediate_page/map.html">Map</a></li>
                <li><a href="#contact_us">Contact Us</a></li>
              </ul>
              <LoginModal />
              <SignInModal />
            </div>
          </div>
        </header>
        <Route exact path="/" component={CardsPanel}>
          <section class="first_screen">
            <div className="wrapper">
              <div className="slide-container">
                <ul className="social_net">
                  <li className="instagram">
                    <a href="https://www.instagram.com"></a>
                  </li>
                  <li className="twitter">
                    <a href="https://twitter.com"></a>
                  </li>
                  <li className="youtube">
                    <a href="https://youtube.com"></a>
                  </li>
                  <li className="vk">
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
            <div className="panel_sort">
            <button className="btn btn-info btn_sort" onClick={() => sortByRating()}>Sort by rating</button>
            <button className="btn btn-info btn_sort" onClick={() => sortByAlphabet()}>Sort by alphabet</button>
            </div>
            <div className="cards_panel">
              {cards.map((card) => { return <Link onClick={setCountryPagePass(card.countryname)} to={pagePath}><CountryCard country={card} key={card.id} id={card.id} /> </Link> })}
            </div>
          </section>
        </Route>
        <Route exact path="/USA" component={() => <USA country={cards[0]} />} />
        <Route exact path="/Australia" component={() => <Australia country={cards[4]} />} />
        <footer>
          <div class="wrapper">
            <div class="content">
              <div class="footer_navpanel">
                <a href="#about">
                  <div class="logo logo_footer"></div>
                </a>
                <ul class="footer_navbar">
                  <li><a href="#">About</a></li>
                  <li><a href="pages/live_broadcast/panda.html">Countries</a></li>
                  <li><a href="pages/intermediate_page/map.html">Map</a></li>
                  <li><a href="pages/intermediate_page/map.html">Contuct us</a></li>
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
                </ul>
                <span class="contact_us_title">Give feedback</span>
                <form class="contact_us_form" method="POST" onSubmit={(e) => addFeedbackToDb(e)}>
                  <input
                    class="contact_form_item"
                    type="text"
                    name="contactName"
                    placeholder="Name"
                    required=""
                    onInput={(e)=>(setFeedbackName(e.target.value))}
                  />
                  <input
                    class="contact_form_item"
                    type="email"
                    name="contactEmail"
                    placeholder="Email"
                    required=""
                    onInput={(e)=>(setFeedbackEmail(e.target.value))}
                  />
                  <fieldset>
                    <legend>Please enter your message</legend>
                    <textarea class="contact_text_area" onInput={(e)=>(setFeedbackText(e.target.value))}></textarea>
                  </fieldset>
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
