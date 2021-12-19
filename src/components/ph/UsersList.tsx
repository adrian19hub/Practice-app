/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, {FC, useEffect, useState} from 'react'
// import { useState } from 'react'
// import { getUsers } from '../../api'
import { useAppDispatch, useAppSelector, useUsersDataFromApi } from '../../state/hooks'

interface Props {
    
}

const UsersList: FC<Props> = () => {
    const users = useAppSelector((state => state.users.data))
    // console.log('UsersList')
    // const [clicked, setClicked] = useState<boolean>(false)
    useUsersDataFromApi()
    return (
        <ul>
            {users.map(user => {
                return <li key={user.id}>{user.name}</li>
            })}
            {/* <button onClick={() => {
                setClicked(!clicked)
                console.log("Clicked")
            }}>Test</button> */}
        </ul>
    )
}

export default UsersList
