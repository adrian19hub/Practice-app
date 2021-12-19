// import { useAppDispatch, useAppSelector, useUsersDataFromApi } from '../../state/hooks'
import User from '../../../models/User'
import { FlexStyled } from '../styles/Flex.styled';
import {useAppDispatch} from '../../hooks'
import React from 'react'

export const findMatchingUsers = (users: User[], searchName:string): User[] => {
    return users.filter((user: User)=> {
        if (user.name
            .toLowerCase()
            .indexOf(searchName.toLowerCase()) > -1) return true;
        return false
    })    
}


export const generateUsersListItems = (data: [User[], Function]): JSX.Element[] => {
    const [users, removeUserDispatcher] = data

    return users.map(user => {
        return <>
                 <FlexStyled>
                     <li 
                        key={user.id} 
                        onClick={() => console.log(user)}>
                            {user.name}
                    </li>
                    <button onClick={() => removeUserDispatcher(user.id)}>
                        X
                    </button>
                 </FlexStyled>
        </>
    })
}

