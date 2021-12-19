import styled from 'styled-components'

export const StyledSearchBar = styled.input`
    border-radius: 50px;
    border:none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    font-size: 16px;
    padding: 15px;
    /*      top  right left bottom */
    margin: 20px 0px 0px 20px;
    background-color:${({bg}) =>  bg || '#fff'};
    color:${({color}) =>  color || '#333'};
    &:hover {
        opacity: 0.9;
    }
`