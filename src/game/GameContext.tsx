import React, { createContext, useState, useContext } from 'react'
import { MatchDataLoader } from '../matches/MatchDataLoader'
import { IMatch } from '../matches/types'

interface IGameContext {
  totalNumMatches: number
  numCorrectGuesses: number
  guessCorrect: boolean
  matchLoader: MatchDataLoader
  currentMatch: IMatch
  onGuess: (guessCorrect: boolean) => void
  resetGame: () => void
}

const GameContext = createContext({} as IGameContext );

export const GameContextProvider = ({ children }: {children: JSX.Element } ) => {
  const [totalNumMatches, setTotalNumMatches] = useState(0)
  const [numCorrectGuesses, setNumCorrectGuesses] = useState(0)
  const [guessCorrect, setGuessCorrect] = useState(false)
  const [matchLoader, setMatchLoader] = useState(new MatchDataLoader())
  const [currentMatch, setCurrentMatch] = useState(matchLoader.getMatch())

  const onGuess = (guessCorrect: boolean) => {
    setTotalNumMatches(totalNumMatches + 1)
    if (guessCorrect) {
      setNumCorrectGuesses(numCorrectGuesses + 1)
    }
    setGuessCorrect(guessCorrect)
    setCurrentMatch(matchLoader.getMatch())
  }

  const resetGame = () => {
    setTotalNumMatches(0)
    setNumCorrectGuesses(0)
    setGuessCorrect(false)
    matchLoader.shuffleLoader()
    matchLoader.resetLoader()
    setCurrentMatch(matchLoader.getMatch())
  }


  return (
    <GameContext.Provider value={{ totalNumMatches, numCorrectGuesses, guessCorrect, onGuess, matchLoader, resetGame, currentMatch}}>
      {children}
    </GameContext.Provider>
  )
}

export const useGameContext = () => useContext(GameContext)