import React, { Component } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from "../header";
import '@splidejs/react-splide/css';
import './app.scss'

import Home from '../../pages/home'
import Footer from "../footer";

export default class App extends Component {
    render(){
        return(
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
                <Footer/>
            </Router>
        )
    }
}