import React, { FC, ReactNode } from 'react'
import { styled } from 'styled-components'

interface ContainerProps {
    children: ReactNode
}

const StyledContainer = styled.div`
    padding-inline:8rem;
    

`

const Container: FC<ContainerProps> = ({ children }) => {
    return (
        <StyledContainer>{children}</StyledContainer>
    )
}

export default Container