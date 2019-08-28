import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from './TEST.module.css'
import UserAva from '../foto/fetch.gif'
import * as axios from 'axios'
import Slide from './Slide'


class PauseOnHover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products_data: [
                {
                    article: 2,
                    price: 200,
                    category: "\u041a\u043e\u043c\u0431\u0438\u043d\u0435\u0437\u043e\u043d\u044b",
                    brand: "Banana Republic",
                    picture: {UserAva},
                    sizes: [
                        "M"
                    ],
                    discount_price: 70
                },
                {
                    article: 10,
                    price: 400,
                    category: "\u041c\u0430\u0439\u043a\u0438",
                    brand: "Banana Republic",
                    picture: "https://shop4c60e634-309f-4061-b72d-b58582db3ae3.s3.amazonaws.com/04d9dc-Banana%20Republic%2AL.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAUOHTNFJ7U5SHUDG7%2F20190825%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20190825T203337Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=c9fecd215b93db3ef2c676d7fdc3b24b96718a339c264dc15b959e9ea88bbc8a",
                    sizes: [
                        "L"
                    ],
                    discount_price: 95
                },
                {
                    article: 24,
                    price: 250,
                    category: "\u041d\u043e\u0441\u043a\u0438",
                    brand: "Bioware",
                    picture: "https://shop4c60e634-309f-4061-b72d-b58582db3ae3.s3.amazonaws.com/0ca728-Bioware%2AS.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAUOHTNFJ7U5SHUDG7%2F20190825%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20190825T203337Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=3345a6022572e49e38cfcfedc95dc26c39396a181d0f915361b28aae6d08dc65",
                    sizes: [
                        "S"
                    ],
                    discount_price: 59
                },
                {
                    article: 27,
                    price: 200,
                    category: "\u041a\u043e\u0444\u0442\u044b",
                    brand: "Banana Republic",
                    picture: "https://shop4c60e634-309f-4061-b72d-b58582db3ae3.s3.amazonaws.com/0dec9a-Banana%20Republic%2AS.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAUOHTNFJ7U5SHUDG7%2F20190825%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20190825T203337Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=bc4f2ce9f15bbf7c7561eeee9135d349702811337b63d82f5cb5b924d925227e",
                    sizes: [
                       "S"
                    ],
                    discount_price: 62
                },
                {
                    article: 30,
                    price: 450,
                    category: "\u041d\u043e\u0441\u043a\u0438",
                    brand: "Banana Republic",
                    picture: "https://shop4c60e634-309f-4061-b72d-b58582db3ae3.s3.amazonaws.com/0efb75-Banana%20Republic%2AL.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAUOHTNFJ7U5SHUDG7%2F20190825%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20190825T203337Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=2f1912c722295fe9628b6f76e84f7d44364c8c0ffd0da6a7e11797c7dff822d5",
                    sizes: [
                        "L"
                    ],
                    discount_price: 82
                },
            ]

        };

    }


     
     

render() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,

    };
    let messagesElement = this.state.products_data.map(m => <Slide products_data={m.picture} key={m.id} />);
   debugger;
    return (
        <div className={styled.sliderWraper}>
            <h2>Pause On Hover {this.state.products_data.price}</h2>

            <Slider {...settings}>
                
                {messagesElement}
                
            </Slider>
        </div>
    );
}
  }
export default PauseOnHover;