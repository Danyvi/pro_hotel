import { css } from 'styled-components';
// Helper functions

export const setColor = {
  primaryColor:'#AF9A7D',
  mainWhite:'#FFF',
  mainBlack:'#222',
  mainGrey:'#ECECEC',
  lightGrey:'#F7F7F7'
};

export const setFont={
  main: "font-family: 'Lato', sans-serif;",
  slanted:"font-family: 'Courgette', cursive;"
};

export const setFlex = ({x='center',y='center'}={}) => {
  return `
  display: flex;
  justify-content: ${x}; 
  align-items: ${y}; 
  `
};

export const setBackground = ({
    img='https://images.pexels.com/photos/1628086/pexels-photo-1628086.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    color='rgba(0,0,0,0)'
  }={}) => {
  return `
    background: linear-gradient(${color}, ${color}),
    url(${img}) center center/cover no-repeat fixed
  `;
};

export const setRem = (number=16) => {
  return `${ number/16 }rem`;
};

export const setLetterSpacing = (number=2) => {
  return `letter-spacing:${number}px`;
};

export const setBorder = ({ width="2px", style="solid", color="black" }={}) => {
  return `border:${ width } ${ style } ${ color }`;
};

// Media query section
const sizes = {
  large: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576,
}

//iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]/16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});


export const setTransition = ({property="all", time="0.3s", timing="ease-in-out"}={}) => {
  return `transition: ${property} ${time} ${timing}`;
};