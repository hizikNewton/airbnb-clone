import React, { FC } from 'react'
import { CardContainer, Picture, PictureContainer, TextContainer } from './styled'
import Swiper from 'components/swiper'
import { CardItemType } from 'types'
import { ReactComponent as Star } from 'assets/images/icons/star.svg'

interface CardProps {
    cardItem: CardItemType
}

const Card: FC<CardProps> = ({ cardItem }) => {
    const { listingImages, listingName, listingHost, date, cost, ratings } = cardItem
    return (
        <CardContainer>

            <TextContainer>
                <div className='listingName'>{listingName}</div>
                <div className='listingWhere'>{listingHost}</div>
                <div className='date'>{date}</div>
                <div className='cost'><span>{cost}</span> night</div>
                <span className='ratings'>
                    <span><Star /></span>
                    {ratings}
                </span>

            </TextContainer>
            <PictureContainer>
                <Picture className='picture'>
                <Swiper items={listingImages} />
                </Picture>
            </PictureContainer>
        </CardContainer>
    )
}

export default Card