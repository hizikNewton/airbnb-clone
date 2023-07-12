import React from 'react';

import './styles.css';
import { SwiperItemType } from 'types';

export type Props = SwiperItemType;

function SwiperItem({ imageSrc, imageAlt }: Props) {
    return (
        <li className="swiper-item">
            <img
                src={imageSrc}
                alt={imageAlt}
                className="swiper-img"
                draggable={false}
            />
        </li>
    );
}

export default SwiperItem;
