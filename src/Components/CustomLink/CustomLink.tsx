import React from 'react'
import { Link, LinkProps } from 'react-router-dom'

interface ICustomLink {}

export const CustomLink = ({
    children,
    to,
    ...props
}: LinkProps & ICustomLink) => {
    return (
        <Link to={to} {...props}>
            {children}
        </Link>
    )
}
