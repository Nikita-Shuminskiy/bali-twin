import React from 'react'
import styles from './JobsCard.module.scss'
import { ButtonGame } from '../ButtonGame'
export const JobsCard = () => {
    const ArraySkillText = ['Design', 'Unreal', 'Photo', 'Develop']
    return (
        <div className={styles['jobs-card-wrapper']}>
            <div className={styles['jobs-card-container']}>
                <div className={styles['top-inner']}>
                    <time className={styles['top-time']}>12.03.2022</time>
                    <h2 className={styles['top-title']}>Backend developer</h2>
                </div>
                <div className={styles['budget']}>
                    <span className={styles['budget-title']}>Budget</span>
                    <div className={styles['budget-price-inner']}>
                        <span className={styles['budget-price-crypto']}>
                            0.023 ETH
                        </span>
                        <span className={styles['budget-price']}>~$2000</span>
                    </div>
                </div>
                <div className={styles['required-skills-inner']}>
                    <span className={styles['required-skills-title']}>
                        Required skills
                    </span>
                    <div className={styles['required-skills']}>
                        {ArraySkillText.map((skill, index) => {
                            return (
                                <div
                                    key={index}
                                    className={styles['required-skills-skill']}
                                >
                                    <span
                                        className={
                                            styles[
                                                'required-skills-skill-title'
                                            ]
                                        }
                                    >
                                        {skill}
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <p className={styles['description']}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled.
                </p>
                <div className={styles['jobs-button-box']}>
                    <ButtonGame
                        type={'none'}
                        buttonText={'Show more'}
                        callback={() => {
                            console.log('job')
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
