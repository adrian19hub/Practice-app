import styled from 'styled-components';

export const StyledHeader = styled.header`
    background-color: ${(props) => props.theme.colors.header};
    color: #B0FF9A;
    padding: 40px 20px;

    @media (max-width:${({theme}) => theme.widths.mobile}) {
        background-color: #B0FF9A;
        color: #fff;
    }

`

// export const Nav = styled.nav`
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     margin-bottom: 40px;
// `


