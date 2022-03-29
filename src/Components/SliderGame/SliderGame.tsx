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
              arrows: false,
              speed: 500,
              slidesToShow: 5,
              slidesToScroll: 5,
              rows: 1,
              initialSlide: 0,
              infinite: true,
              responsive: [
                  {
                      breakpoint: 1310,
                      settings: {
                          slidesToShow: 4,
                          slidesToScroll: 4,
                          infinite: true,
                          dots: true,
                      },
                  },
                  {
                      breakpoint: 1100,
                      settings: {
                          slidesToShow: 3,
                          slidesToScroll: 3,
                          infinite: true,
                          dots: true,
                      },
                  },
                  {
                      breakpoint: 900,
                      settings: {
                          slidesToShow: 2,
                          slidesToScroll: 2,
                      },
                  },
                  {
                      breakpoint: 480,
                      settings: {
                          infinite: true,
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
