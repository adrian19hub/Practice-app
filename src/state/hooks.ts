/* eslint-disable react-hooks/exhaustive-deps */
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'
import React, {useEffect} from 'react'
import {getUsers} from '../api'
import { addUsers } from './slices/usersSlice'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


export const useUsersDataFromApi: Function = (): void => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        getUsers().then(data => dispatch(addUsers(data)))
        // console.log('fetched users')
    }, [])
}