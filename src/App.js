import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header class="header">
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
      <section class="first_screen">
        <div class="wrapper">
          <div class="content">
            <div class="zoo_title">
              <p>Watch your favorite animal online</p>
              <a href="pages/live_broadcast/panda.html">
                <div class="btn_watch_online btn_first_screen">
                  <div class="play_icon"></div>
                  <span>WATCH ONLINE</span>
                </div>
              </a>
            </div>
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
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
