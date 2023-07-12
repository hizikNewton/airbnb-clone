import { Icons } from 'components/icon/Icon';

export type IconType = keyof typeof Icons;

export interface NavOptionType {
  iconLink: string;
  name: string;
  id?: number;
}

export type SwiperItemType = {
  imageSrc: string;
  imageAlt: string;
};

export type CardItemType = {
  listingImages: Array<SwiperItemType>;
  listingName: string;
  listingHost: string;
  date: string;
  cost: string;
  ratings: string;
};
