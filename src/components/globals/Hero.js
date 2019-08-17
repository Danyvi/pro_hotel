import styled from 'styled-components';
import {setFlex, setBackground} from '../../utils/styles'

const Hero = styled.header`
  min-height: 100vh;
  
  ${props=> setBackground({ img:props.img, color:"rgba(0,0,0,0)" })};
  /* Whatever children I am going to pass to this Hero component I want to place it to the center of the Hero component so I use flex center center*/
  ${setFlex({ x:'center', y:'center' })}
`;


export default Hero