import React, { Component } from 'react'
import Room from './Room';
import styled from 'styled-components';
import Section from '../globals/Section';
import Title from '../globals/Title';
import rooms from './rooms-data';
import {setColor, media, setRem} from '../../utils/styles';


export default class Rooms extends Component {

  state = {
    rooms : rooms
  }

  render() {
    return (
      <Section bcolor={ setColor.lightGrey }>
        <Title title="our rooms" center />
        <RoomsCenter>
          {this.state.rooms.map((room)=>{
            return (
              <Room key={room.id} room={room} />
            );
          })}
        </RoomsCenter>
      </Section>
    );
  }
}

const RoomsCenter = styled.div`
  width: 90vw;
  margin: 0 auto;

  ${media.large`
    width: 100vw;
    max-width: 1170px;
  `}

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  grid-column-gap: ${setRem(45)};
`;

// auto-fit and auto-fill are opposite
// 

// const RoomsCenter = styled.div`
//   width: 90vw;
//   margin: 0 auto;

//   ${media.tablet`
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     grid-column-gap: ${setRem(32)};
//   `}

//   ${media.large`
//     width: 100vw;
//     max-width: 1170px;
//     grid-template-columns: repeat(3, 1fr);
//   `}
// `;