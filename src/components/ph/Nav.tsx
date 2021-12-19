import React, { FC, ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const Nav: FC<Props> = ({children}) => {
    return (
        <>
            {children}
        </>
    )
}

export default Nav
