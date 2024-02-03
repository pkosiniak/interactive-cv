import { FC } from 'react';
import { Icon, IconProps } from './Icon';

type Props = IconProps & {
  bgColor?: string;
  fgColor?: string;
  size?: number;
};

export const RedBabelIcon: FC<Props> = ({ size = 16, bgColor = '#222222', fgColor = '#ff0000', ...props }) => {
  return (
    <Icon size={size} {...props}>
      <svg
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='xMidYMid meet'
        viewBox='0 0 1200 1200'
        width={size}
        height={size}
      >
        <defs>
          <path d='M0 0L1200 0L1200 1200L0 1200L0 0Z' id='a6ic7o84B'></path>
          <path d='M1000 700L200 1100L1000 1100L1000 700Z' id='a3mEk5NP0i'></path>
          <path d='M300 1000L900 700L300 700L300 1000Z' id='anLk4QHJr'></path>
          <path d='M900 350L300 650L900 650L900 350Z' id='e4pgHY9M9s'></path>
          <path d='M400 550L800 350L400 350L400 550Z' id='c2f7PDMZER'></path>
          <path d='' id='aIWw9YD9Z'></path>
          <path d='M800 100L400 300L800 300L800 100Z' id='a621VDSya'></path>
          <path d='M500 200L700 100L500 100L500 200Z' id='aXzz4lnJp'></path>
        </defs>
        <g>
          <g>
            <g>
              <use xlinkHref='#a6ic7o84B' opacity='1' fill={bgColor} fillOpacity='1'></use>
              <g>
                <use
                  xlinkHref='#a6ic7o84B'
                  opacity='1'
                  fillOpacity='0'
                  stroke='#3ab755'
                  strokeWidth='0'
                  strokeOpacity='1'
                ></use>
              </g>
            </g>
            <g>
              <use xlinkHref='#a3mEk5NP0i' opacity='1' fill={fgColor} fillOpacity='1'></use>
              <g>
                <use
                  xlinkHref='#a3mEk5NP0i'
                  opacity='1'
                  fillOpacity='0'
                  stroke='#3ab755'
                  strokeWidth='0'
                  strokeOpacity='1'
                ></use>
              </g>
            </g>
            <g>
              <use xlinkHref='#anLk4QHJr' opacity='1' fill={fgColor} fillOpacity='1'></use>
              <g>
                <use
                  xlinkHref='#anLk4QHJr'
                  opacity='1'
                  fillOpacity='0'
                  stroke='#3ab755'
                  strokeWidth='0'
                  strokeOpacity='1'
                ></use>
              </g>
            </g>
            <g>
              <use xlinkHref='#e4pgHY9M9s' opacity='1' fill={fgColor} fillOpacity='1'></use>
              <g>
                <use
                  xlinkHref='#e4pgHY9M9s'
                  opacity='1'
                  fillOpacity='0'
                  stroke='#3ab755'
                  strokeWidth='0'
                  strokeOpacity='1'
                ></use>
              </g>
            </g>
            <g>
              <use xlinkHref='#c2f7PDMZER' opacity='1' fill={fgColor} fillOpacity='1'></use>
              <g>
                <use
                  xlinkHref='#c2f7PDMZER'
                  opacity='1'
                  fillOpacity='0'
                  stroke='#3ab755'
                  strokeWidth='0'
                  strokeOpacity='1'
                ></use>
              </g>
            </g>
            <g>
              <g>
                <use
                  xlinkHref='#aIWw9YD9Z'
                  opacity='1'
                  fillOpacity='0'
                  stroke='#3ab755'
                  strokeWidth='0'
                  strokeOpacity='1'
                ></use>
              </g>
            </g>
            <g>
              <use xlinkHref='#a621VDSya' opacity='1' fill={fgColor} fillOpacity='1'></use>
              <g>
                <use
                  xlinkHref='#a621VDSya'
                  opacity='1'
                  fillOpacity='0'
                  stroke='#3ab755'
                  strokeWidth='0'
                  strokeOpacity='1'
                ></use>
              </g>
            </g>
            <g>
              <use xlinkHref='#aXzz4lnJp' opacity='1' fill={fgColor} fillOpacity='1'></use>
              <g>
                <use
                  xlinkHref='#aXzz4lnJp'
                  opacity='1'
                  fillOpacity='0'
                  stroke='#3ab755'
                  strokeWidth='0'
                  strokeOpacity='1'
                ></use>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </Icon>
  );
};
