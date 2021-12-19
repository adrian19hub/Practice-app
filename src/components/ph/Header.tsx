import React, { FC } from 'react'
import { Container } from './styles/Container.styled'
import { StyledHeader } from './styles/Header.styled'
import Nav from './Nav'
import { ButtonStyled } from './styles/Button.styled'
import { FlexStyled } from './styles/Flex.styled'
import { getUsers } from '../../api/api'
import { useAppSelector, useAppDispatch } from '../hooks'
import { addUsers } from '../../state/slices/usersSlice'

interface Props {

}

const Header: FC<Props> = () => {
    const dispatch = useAppDispatch()

    const handleClick = () => {
        getUsers().then(data => dispatch(addUsers(data)))
    }


    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <FlexStyled>
                        <h1>JSON.Placeholder App</h1>
                        <ButtonStyled onClick={handleClick}>Fetch Users</ButtonStyled>
                    </FlexStyled>
                </Nav>
            </Container>
        </StyledHeader>
    )
}

export default Header
