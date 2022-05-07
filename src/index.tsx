import React from 'react'
import ReactDOM from 'react-dom'
import ReactPlayer from 'react-player/youtube'
import { Button, Icon } from "@mui/material";
import { BrowserRouter, Switch, Redirect, useLocation, useHistory, Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper';
import NumberFormat from "react-number-format";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './index.sass'
import { slides } from './misc/slider/slides';
import { Tabs } from './components/tabs/tabs';
import img1 from './misc/tabImgs/1_paint_quality.png'
import img2 from './misc/tabImgs/2_print_dimensions.png'
import img3 from './misc/tabImgs/3_print_speed.png'
import img4 from './misc/tabImgs/4_any_format.png'

let tabContent = [
    {
        btnIcon: 'engineering',
        content: {
            img: img4,
            title: 'Печать на любых поверхностях',
            text: `Мы печатаем любое изображение на стенах, холстах,фанере,роллетах , досках, дверях, мебели, одежде, стекле и других объектах. 
            Ограничивает список только фантазия и некоторые технические возможности широкоформатного робота/принтера вертикальной печати.`
        }
    },
    {
        btnIcon: 'format_color_fill',
        content: {
            img: img1,
            title: 'Качество чернил',
            text: `Современные качественные UV отверждаемые чернила мгновенно высыхают без разводов и потёков. 
            Образуют покрытие не выцветающее даже под прямыми солнечными лучами. 
            После нанесения краска не оставляет запаха и является экологичной. `
        }
    },
    {
        btnIcon: 'photo_size_select_large',
        content: {
            img: img2,
            title: 'Размеры печати',
            text: `Размер печати по горизонтали не ограничен. Максимальная высота по вертикали составляет 2,9 метров.`
        }
    },
    {
        btnIcon: 'speed',
        content: {
            img: img3,
            title: 'Скорость печати',
            text: `Скорость печати достигает 2,5 м2/час. Принтер работает без перерывов, обедов и выходных четко следую поставленной задаче.`
        }
    },
    {
        btnIcon: 'speed',
        content: {
            img: img3,
            title: 'Скорость печати',
            text: `Скорость печати достигает 2,5 м2/час. Принтер работает без перерывов, обедов и выходных четко следую поставленной задаче.`
        }
    },
    // {
    //     btnIcon: 'speed',
    //     content: {
    //         img: img3,
    //         title: 'Скорость печати',
    //         text: `Скорость печати достигает 2,5 м2/час. Принтер работает без перерывов, обедов и выходных четко следую поставленной задаче.`
    //     }
    // },

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
                {/* <div className="wrapper"> */}
                <div className="inner-wrapper">
                    <div className="logo_wrapper">
                        <div className="logo"></div>
                        <div className="logo_name">Wonder Walls</div>
                    </div>
                    <a className="tel" href={"tel:+79530909033"}>+7 (953) 090-90-33</a>

                    {/* <div className="whatsapp"></div> */}
                    {/* <div className="instagramm"></div> */}
                </div>
                {/* </div> */}
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
                        <Button href={"mailto:lenskayal@gmail.com"} className="button leave-order" variant={"contained"}>Оставить заявку</Button>
                    </div>
                </div>
            </div>
            <div className="section advantages">
                <div className="section-content">
                    <h1 className="section-heading">
                        Преимущества
                    </h1>
                    <Tabs tabContent={tabContent} />
                </div>
            </div>
            <div className="section how-do-we-work">
                <div className="section-content">
                    <h2 className="section-heading">
                        Как мы работаем
                    </h2>
                    <div className="video-wrapper">
                        <ReactPlayer className="video" width={"100%"} height={"450px"} controls
                            url="https://www.youtube.com/watch?v=_nwEuDVi8fs&feature=emb_logo"
                        />
                    </div>
                </div>
            </div>
            {/* <div className="slider-wrapper"> */}
            <div className="section gallery">
                <div className="section-content">
                    <h2 className="section-heading">
                        Наши работы
                    </h2>
                    <Swiper
                        modules={[Pagination, Navigation]}
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
                            <div className="sign">
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
                            <div className="sign equal">
                                =
                            </div>
                            <div className="dimension square">
                                <span className="title">Площадь </span>
                                <span className="result">{square} кв.м.</span>
                            </div>
                        </div>
                        {/* <div className="square">
                            <span className="title">Площадь: </span>
                            <span className="result">{square} кв.м.</span>
                        </div> */}
                        <div className="price">
                            <span className="title">{price > minPrice ? "Стоимость: " : "Мин. стоимость: "}</span>
                            <span className="result">≈ {price} р.</span>
                        </div>
                        <div className="btn-wrapper">
                            <Button href={"mailto:lenskayal@gmail.com"} className="button leave-order" variant={"contained"}>Оставить заявку</Button>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <span>© Wonder Walls. 2022</span>
                {/* <a className="tel" href={"tel:+79530909033"}>+7 (953) 090-90-33</a> */}
            </footer>
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
