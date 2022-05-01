import React, { useState } from 'react'
import styles from './Skill.module.scss'

export const Skill: React.FC<SkillPropsType> = ({
    text,
    classType = 'normal',
}) => {
    const stylesSkills = {
        normal: 'normal',
        filter: 'filter',
    }

    const [active, setActive] = useState<boolean>(false)

    const onClickHandler = () => {
        console.log('filter', text)
        setActive(!active)
    }

    return (
        <div
            className={`${
                styles[`required-skills-${stylesSkills[classType]}-skill`]
            } ${active ? styles['active'] : ''}`}
            onClick={onClickHandler}
        >
            <span
                className={
                    styles[
                        `required-skills-${stylesSkills[classType]}-skill-title`
                    ]
                }
            >
                {text}
            </span>
        </div>
    )
}

interface SkillPropsType {
    text: string
    classType?: 'filter' | 'normal'
}
