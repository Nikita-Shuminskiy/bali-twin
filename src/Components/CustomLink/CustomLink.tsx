import React from 'react'
import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom'

interface ICustomLink {}

export const CustomLink = ({
    children,
    to,
    ...props
}: LinkProps & ICustomLink) => {
    let resolved = useResolvedPath(to)
    let match = useMatch({ path: resolved.pathname, end: false })
    return (
        <Link to={to} {...props}>
            {children}
        </Link>
    )
}
