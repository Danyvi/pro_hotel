import styled from 'styled-components';
import { setRem } from '../../utils/styles';

const Section = styled.section`
  padding:${setRem(64)} 0;
  background: ${props=>props.bcolor};
`

export default Section;