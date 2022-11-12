import React, { Component } from "react";
import {Link} from 'react-router-dom'
export default class HeaderTop extends Component {    
    render(){
        return(
            <div className="header__top">
                <div className="container">
                    <div className="header__location">
                        <button>Ташкент <img src={require('../../../assets/img/icons/down.png')} alt="" /></button>
                    </div>
                    <ul className="header__menu">
                        <li><Link to='/'>Доставка</Link></li>
                        <li><Link to='/'>Отзывы</Link></li>
                        <li><Link to='/'>Покупателям</Link></li>                        
                    </ul>
                    <div className="header__search">
                        <input type="text" placeholder="Поиск по сайту"/>
                        <button><img src={require('../../../assets/img/icons/search.png')} alt="" /></button>
                    </div>
                    <button className="header__login">
                        <img src={require('../../../assets/img/icons/login.png')} alt="" />
                        Войти
                    </button>
                </div>
            </div>
        )
    }
}