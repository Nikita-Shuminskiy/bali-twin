import React from 'react'
import styles from './SliderGame.module.scss'
import Slider, { Settings } from 'react-slick'
import { SliderBtnPrev } from './SliderBtn/SliderBtnPrev'
import { SliderBtnNext } from './SliderBtn/SliderBtnNext'

export const SliderGame: React.FC<SliderGamePropsType> = ({
    children,
    settings,
}) => {
    const sliderSettings = settings
        ? settings
        : {
              speed: 500,
              nextArrow: <SliderBtnNext />,
              prevArrow: <SliderBtnPrev />,
              slidesToShow: 4,
              slidesToScroll: 4,
              centerPadding: '20px 20px 20px 34px',
              rows: 1,
              initialSlide: 0,
              infinite: false,
              dots: false,
              arrows: true,
              adaptiveHeight: true,
              centerMode: window.screen.width < 1067,
              responsive: [
                  {
                      breakpoint: 1310,
                      settings: {
                          slidesToShow: 4,
                          slidesToScroll: 4,
                          infinite: false,
                          adaptiveHeight: true,
                          dots: false,
                          arrows: false,
                      },
                  },
                  {
                      breakpoint: 1100,
                      settings: {
                          slidesToShow: 3,
                          slidesToScroll: 3,
                          adaptiveHeight: true,
                          infinite: false,
                          dots: false,
                          arrows: false,
                      },
                  },
                  {
                      breakpoint: 795,
                      settings: {
                          slidesToShow: 2,
                          slidesToScroll: 2,
                          adaptiveHeight: true,
                          dots: false,
                          arrows: false,
                      },
                  },
                  {
                      breakpoint: 541,
                      settings: {
                          infinite: false,
                          adaptiveHeight: true,
                          slidesToShow: 1,
                          slidesToScroll: 1,
                      },
                  },
              ],
          }
    return <Slider {...sliderSettings}>{children}</Slider>
}

interface SliderGamePropsType {
    settings?: Settings
}
