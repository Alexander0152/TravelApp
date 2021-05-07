import React, { Component } from "react";
import { connect } from "react-redux";
// import "./weather.scss";

class Weather extends Component {
    constructor(props){
        super(props);
        this.state = {}
        this._isMounted = false;
    }
    
    gettingWeather = async (city) => {
        const api = "68acbc07ccfa8d615fd6c1385a793700";
        const api_url = await
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&lang=EN`);
        const data = await api_url.json();

        const apiUrlRu = await
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&lang=RU`);
        const dataRU = await apiUrlRu.json();

        const apiUrlBe = await
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&lang=BE`);
        const dataBE = await apiUrlBe.json();


        const descriptionEn = data.weather[0].description;
        const descriptionRu = dataRU.weather[0].description;
        const descriptionBe = dataBE.weather[0].description;
        const kelvin = `${data.main.temp}`;
        const humidity = ` ${data.main.humidity}`;
        const wind = `${data.wind.speed}`;
        const icon = data.weather[0].icon;

        return{descriptionEn, descriptionRu, descriptionBe, kelvin, humidity, wind, icon}

    }

    componentDidMount(){
        this._isMounted = true;
        if (this.props.country) {
          const city = this.props.country.localizations.EN.capital
          this.gettingWeather(city).then(data=>{
            if (this._isMounted) {
                return this.setState(data)
            }
        })
        }

    }

    componentWillUnmount() {
        this._isMounted = false;
    }
    
    render() { 
        const temp = Math.round(this.state.kelvin - 273.15);

        if(this.props.language == "EN"){
            return (
              <div className="weather">
                <div className="weather__wrapper">
                  {this.state.icon && (
                    <img
                      className="weather__wrapper__img"
                      src={`http://openweathermap.org/img/w/${this.state.icon}.png`}
                      alt="icon"
                    />
                  )}
                  <div className="weather__wrapper__description">
                    {this.state.descriptionEn}
                  </div>
                </div>

                <div className="weather__info">
                  <div className="weather__info__temperature">{temp}°C</div>
                  <div className="weather__info__wind">
                    wind: {this.state.wind} km/h
                  </div>
                  <div className="weather__info__humidity">
                    humidity: {this.state.humidity}%
                  </div>
                </div>
              </div>
            );
        }else if(this.props.language == "RU"){
            return (
              <div className="weather">
                <div className="weather__wrapper">
                  {this.state.icon && (
                    <img
                      className="weather__wrapper__img"
                      src={`http://openweathermap.org/img/w/${this.state.icon}.png`}
                      alt="icon"
                    />
                  )}
                  <div className="weather__wrapper__description">
                    {this.state.descriptionRu}
                  </div>
                </div>

                <div className="weather__info">
                  <div className="weather__info__temperature">{temp}°C</div>
                  <div className="weather__info__wind">
                    ветер: {this.state.wind} км/ч
                  </div>
                  <div className="weather__info__humidity">
                    влажность: {this.state.humidity}%
                  </div>
                </div>
              </div>
            );
        }else if(this.props.language == "BE"){
            return (
              <div className="weather">
                <div className="weather__wrapper">
                  {this.state.icon && (
                    <img
                      className="weather__wrapper__img"
                      src={`http://openweathermap.org/img/w/${this.state.icon}.png`}
                      alt="icon"
                    />
                  )}
                  <div className="weather__wrapper__description">
                    {this.state.descriptionBe}
                  </div>
                </div>

                <div className="weather__info">
                  <div className="weather__info__temperature">{temp}°C</div>
                  <div className="weather__info__wind">
                    вецер: {this.state.wind} км/г
                  </div>
                  <div className="weather__info__humidity">
                    вільготнасць: {this.state.humidity}%
                  </div>
                </div>
              </div>
            );
        }
        
    }
}
const mapStateToProps = (state) => {
    return {
    language: state.language.language
    };
};

export default connect(mapStateToProps)(Weather);