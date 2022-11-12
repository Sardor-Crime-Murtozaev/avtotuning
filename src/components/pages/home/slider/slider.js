import React, { Component } from "react";

import './slider.scss'

export default class Slider extends Component {
    render(){
        return(
            <div className="container">
                <div className="slider">
                    <img src={require('../../../../assets/img/slider.jpg')} alt="" />
                    <div className="slider__title">Запчасти для <span>вашего</span> автомобиля</div> 
                </div>
            </div>
        )
    }
} 