import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import styled from 'styled-components'
import { MatchProvider } from './matches/MatchProvider'
import { GameOverlay } from './game/GameOverlay'
import { GameContextProvider } from './game/GameContext'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  width: 100vw;
  height: 100vh;
`

const StyledScoreOverlay = styled(GameOverlay)`
  position: absolute;
  z-index: 1;  
`

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GameContextProvider>
    <MainContainer>
      <StyledScoreOverlay/> 
      <MatchProvider />
    </MainContainer>
    </GameContextProvider>
  </React.StrictMode>,
)
