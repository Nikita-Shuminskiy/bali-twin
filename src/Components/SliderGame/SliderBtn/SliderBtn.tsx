import React from 'react'
import { useSwiper } from 'swiper/react'
import styles from './SliderBtn.module.scss'
export const SliderBtn: React.FC<SliderBtnPropsType> = ({
    type,
    Move,
    disabled,
}) => {
    const btnType = {
        nextBtn: document.querySelectorAll('.swiper-button-next')[
            type === 'Load' ? 0 : 1
        ],
        prevBtn: document.querySelectorAll('.swiper-button-prev')[
            type === 'Load' ? 0 : 1
        ],
    }
    return (
        <div
            className={`${styles['slider-button']} ${
                Move === 'nextBtn'
                    ? styles['slider-button-right']
                    : styles['slider-button-left']
            } ${disabled ? styles['slider-button-disabled'] : ''}`}
            onClick={() => {
                if (btnType[Move]) {
                    console.log(btnType[Move])
                    // @ts-ignore
                    btnType[Move].click()
                }
            }}
        >
            <svg
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.09094 0.265207C9.49676 -0.109399 10.1294 -0.0840962 10.504 0.321722L13.7348 3.82168C14.0884 4.20474 14.0884 4.79518 13.7348 5.17824L10.504 8.67828C10.1294 9.08411 9.49677 9.10941 9.09095 8.73481C8.68513 8.36021 8.65982 7.72755 9.03442 7.32173L10.716 5.49997L0.999999 5.49997C0.447714 5.49997 -7.64154e-07 5.05225 -7.86799e-07 4.49997C-8.09444e-07 3.94768 0.447714 3.49997 0.999999 3.49997L10.716 3.49997L9.03443 1.67829C8.65982 1.27247 8.68513 0.639813 9.09094 0.265207Z"
                    fill="white"
                />
            </svg>
        </div>
    )
}

interface SliderBtnPropsType {
    type: 'Load' | 'Create'
    Move: 'nextBtn' | 'prevBtn'
    disabled?: boolean
}
