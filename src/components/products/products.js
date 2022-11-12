import React, { Component } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from "react-router-dom";

import Product from "../product";

import './products.scss'

export default class Products extends Component {
    render(){
        return(
            <div className="products">
                <div className="container">
                    <div className="products__head">
                        <div className="title">Популярные товары</div>
                        <Link to='/' className="products__more">
                            Смотреть все 
                            <img src={require('../../assets/img/icons/right.png')} alt="" />
                        </Link>
                    </div> 
                    <Splide options={{
                        type:'loop',
                        perPage:4,
                        autoplay:true,
                        gap:30,
                    }}>
                        <SplideSlide>
                            <Product/>
                        </SplideSlide>
                        <SplideSlide>
                            <Product/>
                        </SplideSlide>
                    </Splide>                       
                    
                </div>
            </div>
        )
    }
}