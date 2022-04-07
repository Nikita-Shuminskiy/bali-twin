import React from 'react'
import styles from './JobsPage.module.scss'
import { JobsCard } from '../../Components/JobsCard/JobsCard'
export const JobsPage = () => {
    return (
        <div className={styles['wrapper']}>
            <div className={styles['container']}>
                <JobsCard />
                <JobsCard />
                <JobsCard />
                <JobsCard />
            </div>
        </div>
    )
}
