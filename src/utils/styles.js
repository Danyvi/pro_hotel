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