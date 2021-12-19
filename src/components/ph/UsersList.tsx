/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { FC, useEffect, useState } from 'react'
// import { useState } from 'react'
// import { getUsers } from '../../api'
import { useAppDispatch, useAppSelector, useUsersDataFromApi } from '../hooks'
import User from '../../models/User'
import {StyledOrderedList} from './styles/UsersList.styled'
import {generateUsersListItems, findMatchingUsers} from './utils/UsersList.utils'
import {removeUser} from '../../state/slices/usersSlice'

const UsersList: FC<{searchName:string}> = ({searchName}) => {
    useUsersDataFromApi()
    const dispatch = useAppDispatch()
    const users = useAppSelector((state => state.users.data))
    const queriedUsers: User[] = findMatchingUsers(users, searchName)
    const removeUserDispatcher = (userId: number) =>  dispatch(removeUser(userId))
    
    return (
        <StyledOrderedList>
            {generateUsersListItems(
                queriedUsers.length === 0 && !searchName 
                ? [users, removeUserDispatcher]
                : [queriedUsers, removeUserDispatcher])
            }
            
        </StyledOrderedList>
    )
}

export default UsersList
