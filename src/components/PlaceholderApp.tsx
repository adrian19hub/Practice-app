import { ThemeProvider } from 'styled-components'
import React, { FC, useState } from 'react'
import Header from './ph/Header'
import GlobalStyles from './ph/styles/Global'
import UsersList from './ph/UsersList';
import SearchBar from './ph/SearchBar'
import { store } from '../state/store'
import { Provider } from 'react-redux'
interface Props {

}

interface Theme {
    colors: { [key: string]: string };
    widths: { [key: string]: string };
}

const theme: Theme = {
    colors: {
        header: '#ebfbff',
        body: '#fff',
        footer: '#003333',
    },
    widths: {
        mobile: '540px'
    }

}

const PlaceholderApp: FC<Props> = () => {
    const [searchName, setSearchName] = useState('')

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <>
                    <GlobalStyles />
                    {/* ^ sets styling for everything under */}
                    <Header />
                    <SearchBar setSearchName={setSearchName}/>
                    <UsersList searchName={searchName}/>
                </>
            </ThemeProvider>
        </Provider>
    )
}

export default PlaceholderApp
