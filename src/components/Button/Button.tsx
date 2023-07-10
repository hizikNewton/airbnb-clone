import React, { FC } from 'react'
import { StyledButton } from './styled'
import Icon from 'components/Icon'
import { IconType } from 'types'

interface ButtonProps {
    text?: string
    iconName?: IconType
}

const Button: FC<ButtonProps> = ({ text, iconName }) => {
    return (
        <StyledButton>
            {iconName && <Icon name={iconName} />}
            {text && <span>{text}</span>}
        </StyledButton>
    )
}

export default Button