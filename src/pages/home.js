import React, { Component } from "react";

import CatNav from "../components/pages/home/catnav";
import Partner from "../components/pages/home/partners";
import Slider from "../components/pages/home/slider";
import Products from "../components/products";


import './home.scss'

export default class Home extends Component{    
    render(){
        return(
            <div className="wrapper">
                <Slider/>
                <CatNav/>
                <Products/>
                <Products/>
                <Products/>
                <Partner/>
                <hr />
                <div className="container">
                    <div className="title">Интернет-магазин Автотюнинг</div>
                    <p className='mb-200'>В интернет-магазине шин Тюнинг вы можете купить шины известных брендов. Подбор осуществляется как по типоразмеру, так и по марке авто. Предоставляем услуги по шиномонтажу и сезонному хранению шин. В интернет-магазине Тюнинг вы можете купить шины известных брендов. Подбор осуществляется как по типоразмеру, так и по марке авто. Предоставляем услуги по шиномонтажу и сезонному хранению шин.В интернет-магазине  Тюнинг вы можете купить шины известных брендов. Подбор осуществляется как по типоразмеру, так и по марке авто. Предоставляем услуги по шиномонтажу и сезонному хранению шин.</p>
                </div>
            </div>
        )
    }
}