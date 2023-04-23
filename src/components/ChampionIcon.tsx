import React from 'react'
import styled from 'styled-components'
import { getChampionIconPath } from '../utils/ChamptionToIconMap'
const ICON_SIZE = 100
const Container = styled.div`
  user-select: none;
`

interface IProps {
  champion: string
} 

export const ChampionIcon = ({ champion }: IProps) => {
  const championName = champion === 'FiddleSticks' ? 'Fiddlesticks' : champion
  return <Container>
    <img src={getChampionIconPath(championName)} alt={`${champion} icon`} style={{ width: `${ICON_SIZE}px`, height: `${ICON_SIZE}px`}}/>
  </Container>
}