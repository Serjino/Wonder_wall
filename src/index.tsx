import React from 'react'
import ReactDOM from 'react-dom'
import ReactPlayer from 'react-player/youtube'
import { Button, Icon } from "@mui/material";
import { BrowserRouter, Switch, Redirect, useLocation, useHistory, Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper';
import NumberFormat from "react-number-format";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './index.sass'
import slide1 from './misc/slider/slide1.jpg'
import slide2 from './misc/slider/slide2.jpg'
import slide3 from './misc/slider/slide3.jpg'
import slide4 from './misc/slider/slide4.jpg'
import slide5 from './misc/slider/slide5.jpg'
import slide6 from './misc/slider/slide6.jpg'
import slide7 from './misc/slider/slide7.jpg'
import slide8 from './misc/slider/slide8.jpg'
import slide9 from './misc/slider/slide9.jpg'
import slide10 from './misc/slider/slide10.jpg'
import slide11 from './misc/slider/slide11.jpg'

const slides = [
    {
        title: "",
        url: slide1
    },
    {
        title: "",
        url: slide2
    },
    {
        title: "",
        url: slide3
    },
    {
        title: "",
        url: slide4
    },
    {
        title: "",
        url: slide5
    },
    {
        title: "",
        url: slide6
    },
    {
        title: "",
        url: slide7
    },
    {
        title: "",
        url: slide8
    },
    {
        title: "",
        url: slide9
    },
    {
        title: "",
        url: slide10
    },
    {
        title: "",
        url: slide11
    },
]


function App() {
    const [dimensions, setDimensions] = React.useState({
        length: 0,
        width: 0
    })
    const [square, setSquare] = React.useState(0)
    const [price, setPrice] = React.useState(0)

    const minPrice = 5000
    const pricePerMetr = 1000
    const minSquare = minPrice / pricePerMetr

    React.useEffect(() => {
        setSquare((dimensions.length * dimensions.width).toFixed(2))
    }, [dimensions])

    React.useEffect(() => {
        minSquare < square ? setPrice((pricePerMetr * square).toFixed(2)) : setPrice(minPrice)
    }, [square])

    return (
        <div className="main">
            <header className="header">
                <div className="wrapper">
                    <div className="inner-wrapper">
                        <div className="whatsapp"></div>
                        <div className="logo"></div>
                        <div className="instagramm"></div>
                    </div>
                </div>
            </header>
            <div className="section main-offer">
                <div className="section-content">
                    <h1 className="section-heading">
                        Печать на стенах
                    </h1>
                    <div className="text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et corrupti saepe fugit aliquid,
                        repudiandae dignissimos neque quia magnam impedit distinctio sed ipsam asperiores quidem.
                        Repellendus quasi sunt aperiam ab numquam.
                    </div>
                    <div className="btn-wrapper">
                        <Button className="button leave-order" variant={"contained"}>Оставить заявку</Button>
                    </div>
                </div>
            </div>
            <div className="section how-do-we-work">
                <div className="section-content">
                    <h2 className="section-heading">
                        Как мы работаем
                    </h2>
                    <div className="video-wrapper">
                        {/* <div className={'video'}> */}
                        <ReactPlayer className="video" width={"100%"} height={"450px"} controls
                            url="https://www.youtube.com/watch?v=_nwEuDVi8fs&feature=emb_logo"
                        />
                        {/* </div> */}
                    </div>
                </div>
            </div>
            {/* <div className="slider-wrapper"> */}
            <div className="section how-do-we-work">
                <div className="section-content">
                    <h2 className="section-heading">
                        Галерея
                    </h2>
                    <Swiper
                        modules={[Pagination]}
                        pagination
                        className="mySwiper">

                        {
                            slides.map((slide: any) =>
                                <SwiperSlide>
                                    <img src={slide.url}>

                                    </img>
                                    <img src={slide.title} />
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </div>
            </div>
            <div className="section calculate">
                <div className="section-content">
                    <h2 className="section-heading">
                        Калькулятор стоимости
                    </h2>
                    <div className="calculator-wrapper">
                        <div className="dimensions">
                            <div className="dimension length">
                                <div className="title">
                                    Длина
                                </div>
                                <NumberFormat
                                    className="input"
                                    value={dimensions.length}
                                    onValueChange={(v) => v.value.length > 0 && v.value != "." && setDimensions({
                                        ...dimensions,
                                        length: v.floatValue
                                    })}
                                />
                            </div>
                            <div className="multiply_sign">
                                X
                            </div>
                            <div className="dimension width">
                                <div className="title">
                                    Ширина
                                </div>
                                <NumberFormat
                                    className="input"
                                    value={dimensions.width}
                                    onValueChange={(v) => v.value.length > 0 && v.value != "." && setDimensions({
                                        ...dimensions,
                                        width: v.floatValue
                                    })}
                                />
                            </div>
                        </div>
                        <div className="square">
                            Площадь: <span className="result">{square} кв.м.</span>
                        </div>
                        <div className="price">
                        {price > minPrice ? "Стоимость: " : "Мин. стоимость: "}  <span className="result">{price}р.</span>
                        </div>
                        <div className="btn-wrapper">
                            <Button className="button leave-order" variant={"contained"}>Оставить заявку</Button>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
            {/* <div className="text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et corrupti saepe fugit aliquid,
                        repudiandae dignissimos neque quia magnam impedit distinctio sed ipsam asperiores quidem.
                        Repellendus quasi sunt aperiam ab numquam.
                    </div> */}

        </div>
    )
}

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
)
