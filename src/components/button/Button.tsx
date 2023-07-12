import React, { FC } from 'react'
import { StyledButton } from './styled'
import Icon from 'components/icon'
import { IconType } from 'types'

interface ButtonProps {
    text?: string
    iconName?: IconType
    className?: string
    customStyle?: any

}

const Button: FC<ButtonProps> = ({ text, iconName, className, customStyle }) => {
    return (
        <StyledButton className={className} customStyle={customStyle}>
            {iconName && <Icon name={iconName} className={className} />}
            {text && <span>{text}</span>}
        </StyledButton>
    )
}

export default Button