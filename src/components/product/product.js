import React, { Component } from "react";
import { Link } from "react-router-dom";

import './product.scss'

export default class Product extends Component {
    render(){
        return(
            <div className="product__item">
                <div className="product__box">
                    <div className="product__btns">
                        <button><img src={require('../../assets/img/icons/heart.png')} alt="" /></button>
                        <button><img src={require('../../assets/img/icons/compare.png')} alt="" /></button>
                    </div>
                    <img src={require('../../assets/img/sun.png')} alt="" className="product__status"/>
                    <img src={require('../../assets/img/product.jpg')} alt="" className="product__img" />
                    <div className="product__rate">
                        <img src={require('../../assets/img/star.png')} alt="" />
                        <img src={require('../../assets/img/star.png')} alt="" />
                        <img src={require('../../assets/img/star.png')} alt="" />
                        <img src={require('../../assets/img/star.png')} alt="" />
                        <img src={require('../../assets/img/star.png')} alt="" className="gray"/>
                        <span>4.84</span>
                    </div>
                    <div className="product__price">
                        <div className="new">250 000 <span>сум</span></div>
                        <div className="old">320 000 сум</div>
                    </div>
                    <Link to='/' className="product__name">Yokohama BluEarth *Winter V905 205 45 R17 88V </Link>
                    <div className="product__cart">
                        <div className="product__count">
                            <button>-</button>
                            <span className="val">1</span>
                            <button>+</button>                        
                        </div>
                        <button className="product__add">
                            В корзину
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}