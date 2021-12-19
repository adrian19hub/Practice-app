import styled from 'styled-components'

export const FlexStyled = styled.div`
    display:flex;
    align-items:center;
    flex-wrap: wrap;
    justify-content: space-between;
    &>div, &>ul {
        flex: 1;
    }
`