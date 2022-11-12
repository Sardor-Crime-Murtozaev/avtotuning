import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Nav extends Component {
    render (){
        return(
            <nav className="nav">
                <div className="container">
                    <Link to='/'>ШИНЫ</Link>                    
                    <Link to='/'>Тюнинг</Link>                    
                    <Link to='/'>Запчасти</Link>                    
                    <Link to='/'>ДИСКИ</Link>                    
                    <Link to='/'>ПУНКТЫ ВЫДАЧИ</Link>                    
                    <Link to='/'>АКЦИИ</Link>                    
                    <Link to='/'>КОНТАКТЫ</Link>                    
                </div>
            </nav>
        )
    }
}