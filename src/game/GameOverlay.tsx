import styled from "styled-components";
import { useGameContext } from "./GameContext";
import { ShadowBox } from "../components/ShadowBox";
import { StandardButton } from "../components/StandardButton";
import { Colors } from "../utils/Colors";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;

  * {
    margin: 8px;
  }

  user-select: none;
`

const ScoreBox = styled(ShadowBox)<{ correct: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 128px;
  height: 50px;
  background: ${({ correct }) => correct ? Colors.correctGreen : Colors.incorrectRed};
`

const StyledSpan = styled.span`
  color: white;
`

interface IProps {
  className?: string
}

export const GameOverlay = ({ className }: IProps) => {
  const { numCorrectGuesses, totalNumMatches, guessCorrect, resetGame} = useGameContext();

  const onSave = async () => {
    const object = {
      numCorrectGuesses,
      totalNumMatches,
      percentCorrect: numCorrectGuesses / totalNumMatches
    }

    const blob = new Blob([JSON.stringify(object)], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'results.json'
    link.href = url;
    link.click()
  }

  return (
    <MainContainer className={className}>
      <ScoreBox correct={guessCorrect}>
        <StyledSpan >Score: {numCorrectGuesses}/{totalNumMatches}</StyledSpan>
      </ScoreBox>
      <StandardButton text="Reset" width={64} height={64} onClick={async () => {resetGame()}} color={Colors.correctGreen}/>
      <StandardButton text="Save" width={64} height={64} onClick={onSave} color={Colors.correctGreen}/>
    </MainContainer>
  )
}