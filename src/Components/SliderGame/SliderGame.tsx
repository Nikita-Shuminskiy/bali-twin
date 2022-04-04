import React from 'react'
import { Navigation, Pagination } from 'swiper'
import { Swiper } from 'swiper/react'
import { SwiperProps } from 'swiper/react/swiper-react'
import './slider.css'

export const SliderGame: React.FC<SliderGamePropsType> = ({
    children,
    settings,
}) => {
    const sliderSettings: SwiperProps = settings
        ? settings
        : {
              modules: [Pagination, Navigation],
              navigation: true,
              breakpoints: {
                  1038: { initialSlide: 0, slidesPerView: 4, spaceBetween: 32 },
                  850: { initialSlide: 0, slidesPerView: 3, spaceBetween: 32 },
                  570: {
                      initialSlide: 0,
                      slidesPerView: 2,
                      spaceBetween: 32,
                  },
                  310: {
                      initialSlide: 0,
                      slidesPerView: 1,
                      spaceBetween: 0,
                  },
              },
          }
    return (
        <>
            <Swiper {...sliderSettings}>{children}</Swiper>
        </>
    )
}

interface SliderGamePropsType {
    settings?: SwiperProps
}
