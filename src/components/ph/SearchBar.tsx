import React from 'react'
import { StyledSearchBar } from './styles/SearchBar.styled'

interface Props {
    setSearchName:Function;
}

const SearchBar = ({setSearchName}: Props) => {
    return (
        <StyledSearchBar type='text' placeholder='name' onChange={(e) => setSearchName(e.target.value)}/>
    )
}

export default SearchBar
