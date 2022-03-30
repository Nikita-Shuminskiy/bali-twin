import React from 'react'
import styles from './SliderGame.module.scss'
import Slider, { Settings } from 'react-slick'

export const SliderGame: React.FC<SliderGamePropsType> = ({
    children,
    settings,
}) => {
    const sliderSettings = settings
        ? settings
        : {
              speed: 500,
              slidesToShow: 5,
              slidesToScroll: 5,
              rows: 1,
              initialSlide: 0,
              infinite: true,
              dots: false,
              arrows: false,
              adaptiveHeight: true,
              responsive: [
                  {
                      breakpoint: 1310,
                      settings: {
                          slidesToShow: 4,
                          slidesToScroll: 4,
                          infinite: true,
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
                          infinite: true,
                          dots: false,
                          arrows: false,
                      },
                  },
                  {
                      breakpoint: 900,
                      settings: {
                          slidesToShow: 2,
                          slidesToScroll: 2,
                          adaptiveHeight: true,
                          dots: false,
                          arrows: false,
                      },
                  },
                  {
                      breakpoint: 664,
                      settings: {
                          infinite: true,
                          adaptiveHeight: true,
                          slidesToShow: 1,
                          slidesToScroll: 1,
                      },
                  },
              ],
          }
    return (
        <div className={styles['container-slider']}>
            <Slider {...sliderSettings}>{children}</Slider>
        </div>
    )
}

interface SliderGamePropsType {
    settings?: Settings
}
