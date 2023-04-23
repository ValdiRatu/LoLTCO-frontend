import React from 'react'
import styled from 'styled-components'
import { Side } from '../matches/types'
import { ChampionIcon } from './ChampionIcon'
import { Colors } from '../utils/Colors'

const Container = styled.div<{ side: Side }>`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  background: ${({ side }) => side === Side.Blue ? 
    `linear-gradient(180deg, ${Colors.gradientBlue} 0%, rgba(93, 167, 255, 0) 100%)`
  : `linear-gradient(180deg, ${Colors.gradientRed} 0%, rgba(253, 129, 129, 0) 100%)`};

  transition: transform 0.2s ease-in-out;

  padding: 50px;
  align-items: ${({ side }) => side === Side.Red? 'flex-end' : 'flex-start'};
  :hover {
    transform: scale(1.005);
    cursor: pointer;
  }

  > * {
    margin-bottom: 50px;
  }
`

interface IProps {
  side: Side
  champions: string[]
  onClick: (side: Side) => void
}

export const TeamContainer = ({side, champions, onClick}: IProps) => {
  return (
    <Container side={side} onClick={() => onClick(side)}>
      {champions.map((champion, index) => <ChampionIcon key={index} champion={champion} />)}
    </Container>
  )
}