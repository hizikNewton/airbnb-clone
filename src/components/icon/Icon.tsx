
import React, { FC } from "react"
import { Globe, Menu, Search } from "assets/images/icons"
import { IconType } from "types"

interface IconProps extends React.HTMLAttributes<HTMLElement> {
  name: IconType
  width?: number
  height?: number
  fill?: string
  className?: string
}
export const Icons = {
  search: <Search />,
  globe: <Globe />,
  menu: <Menu />
};
const Icon: FC<IconProps> = ({ name, width = 20, height = 20, fill = "#5D6C76", className }) => {
  // Import or define your SVG icons as React components


  return (
    <>
      {Icons[name] ? React.cloneElement(Icons[name], { fill, width, height, className }) : null}
    </>
  );
};

export default Icon