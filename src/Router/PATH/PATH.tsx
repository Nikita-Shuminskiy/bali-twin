import { GamePage } from '../../Pages/GamePage/GamePage'
import { HomePage } from '../../Pages/HomePage/HomePage'
import { JobsPage } from '../../Pages/JobsPage/JobsPage'
import { Collection } from 'Pages/Collection/Collection'
export const PATH: PathType = {
    HOME: '/',
    // MAIN: '/bali-twin/',
    COLLECTION: '/game/Collection',
    GAME: '/game',
    PLAY_GAME: '/game/play-game',
    JOBS: '/Jobs',
}

export const allSitePaths: AllSitePathsType = {
    HOME: {
        component: <HomePage />,
        path: PATH.HOME,
    },
    // MAIN: {
    //     // component: <HomePage />,
    //     // path: PATH.MAIN,
    // },
    GAME: {
        component: <HomePage />,
        path: PATH.GAME,
    },
    PLAY_GAME: {
        component: <GamePage />,
        path: PATH.PLAY_GAME,
    },
    COLLECTION: {
        component: <Collection />,
        path: PATH.COLLECTION,
    },
    JOBS: {
        component: <JobsPage />,
        path: PATH.JOBS,
    },
}
export const screens: { [key: string]: SitePathsType[] } = {
    NONROLE: [],
    AUTHORIZED: [
        allSitePaths.HOME,
        allSitePaths.MAIN,
        allSitePaths.GAME,
        allSitePaths.COLLECTION,
        allSitePaths.JOBS,
    ],
}

export type SitePathsType = {
    component: JSX.Element
    path: string
}

export type AllSitePathsType = {
    [key: string]: SitePathsType
}

export type PathType = {
    HOME: '/'
    // MAIN: '/bali-twin/'
    COLLECTION: '/game/Collection'
    GAME: '/game'
    PLAY_GAME: '/game/play-game'
    JOBS: '/Jobs'
}
