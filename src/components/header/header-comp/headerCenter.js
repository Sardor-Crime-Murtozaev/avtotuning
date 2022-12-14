import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class HeaderCenter extends Component {
    render(){
        return(
            <div className="header__center">
                <div className="container">
                    <Link to='/' className="header__logo">Auto<span>Tuning</span></Link>
                    <div className="header__time">
                        Режим работы:
                        <b>Пн-Вс: с 09:00-20:00</b>
                    </div>
                    <div className="header__call">
                        <b>998 (71) 200-00-00</b>
                        <button onClick={()=>{ console.log('salom');}}>Заказать звонок</button>
                    </div>
                    <div className="header__btns">
                        <Link to='/'>
                            <img src={require('../../../assets/img/icons/heart.png')} alt="" />
                        </Link>
                        <Link to='/'>
                            <img src={require('../../../assets/img/icons/compare.png')} alt="" />
                        </Link>
                        <div className="header__cart">
                            <div className="header__cart--left">
                                <img src={require('../../../assets/img/icons/cart.png')} alt="" />
                                <span>9</span>
                            </div>
                            <div className="header__cart--right">
                                Корзина
                                <b>9 товаров</b>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
} 