import { GamePage } from '../../Pages/GamePage/GamePage'
import { HomePage } from '../../Pages/HomePage/HomePage'

export const PATH: PathType = {
    HOME: '/',
    MAIN: '/bali-twin/',
    COLLECTION: '/game/Collection',
    GAME: '/game/play-game',
}

export const allSitePaths: AllSitePathsType = {
    HOME: {
        component: <HomePage />,
        path: PATH.HOME,
    },
    MAIN: {
        component: <HomePage />,
        path: PATH.MAIN,
    },
    GAME: {
        component: <GamePage />,
        path: PATH.GAME,
    },
    COLLECTION: {
        component: <GamePage />,
        path: PATH.COLLECTION,
    },
}
export const screens: { [key: string]: SitePathsType[] } = {
    NONROLE: [],
    AUTHORIZED: [
        allSitePaths.HOME,
        allSitePaths.MAIN,
        allSitePaths.GAME,
        allSitePaths.COLLECTION,
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
    MAIN: '/bali-twin/'
    COLLECTION: '/game/Collection'
    GAME: '/game/play-game'
}
