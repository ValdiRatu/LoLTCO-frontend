import React from 'react'
import { TeamContainer } from '../components/TeamContainer'
import { Side } from './types'
import styled from 'styled-components'
import { MatchUtils } from '../utils/MatchUtils'
import { useGameContext } from '../game/GameContext'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: inherit;
`

interface IProps {

}

export const MatchProvider = ({}: IProps) => {
  const { onGuess, currentMatch } = useGameContext()

  const blueTeam = currentMatch.teams.find(team => team.side === Side.Blue)
  const redTeam = currentMatch.teams.find(team => team.side === Side.Red)

  const handleTeamClick = (side: Side) => {
    const blueTeamWin = MatchUtils.didBlueWin(currentMatch)
    if (blueTeamWin && side === Side.Blue || (!blueTeamWin && side === Side.Red)) {
      onGuess(true)
    } else {
      onGuess(false)
    }
  }

  return <Container>
    <TeamContainer side={Side.Blue} champions={blueTeam?.participants.map((participant) => participant.championName) ?? []} onClick={handleTeamClick}/>
    <TeamContainer side={Side.Red} champions={redTeam?.participants.map((participant) => participant.championName) ?? []} onClick={handleTeamClick}/>
  </Container>
}