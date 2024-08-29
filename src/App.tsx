import styled from 'styled-components'
import { Board } from './components/board/board'
import { useState } from 'react'
import { Panel } from './components/panel/panel';

const pressedCoordinatesMock: PressedCoordinateType[] = [
  { coordinate: "d6", isCorrect: true },
  { coordinate: "d6", isCorrect: true },
  { coordinate: "d6", isCorrect: true },
  { coordinate: "d6", isCorrect: true },
  { coordinate: "d6", isCorrect: true },
  { coordinate: "d6", isCorrect: true },
  { coordinate: "d6", isCorrect: true },
  { coordinate: "d6", isCorrect: false },
  { coordinate: "d6", isCorrect: true },
  { coordinate: "d6", isCorrect: true },
  { coordinate: "d6", isCorrect: true },
  { coordinate: "d6", isCorrect: true },
  { coordinate: "d6", isCorrect: true },
  { coordinate: "d6", isCorrect: true },
  { coordinate: "d6", isCorrect: true },
  { coordinate: "d6", isCorrect: true },
  { coordinate: "d6", isCorrect: false },
  { coordinate: "d6", isCorrect: true },
  { coordinate: "d6", isCorrect: true },
  { coordinate: "d6", isCorrect: true },
  { coordinate: "d6", isCorrect: true },
  { coordinate: "d6", isCorrect: true },
  { coordinate: "d6", isCorrect: true },
  { coordinate: "d6", isCorrect: true },
  { coordinate: "d6", isCorrect: true },
  { coordinate: "d6", isCorrect: true },
  { coordinate: "d6", isCorrect: true },
  { coordinate: "d6", isCorrect: true },
  { coordinate: "d6", isCorrect: true },
  { coordinate: "d6", isCorrect: true },
]

type PlayingAsType = "white" | "black" | "random";

export type PressedCoordinateType = {
  coordinate: string;
  isCorrect: boolean;
}

const randomIntegerInRange = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;


export const LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
export const NUMBERS = [8, 7, 6, 5, 4, 3, 2, 1]

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  padding-left: 100px;
`

function App() {

  const [playingAs, setPlayingAs] = useState<PlayingAsType>("white")
  const [playAsBoth, setPlayAsBoth] = useState(false)
  const [currentCoordinate, setCurrentCoordinate] = useState("d6")
  const [gameStarted, setGameStarted] = useState(false)
  const [currentTime, setCurrentTime] = useState(15)
  const [showCoordinates, setShowCoordinates] = useState(true);

  const [pressedCoordinates, setPressedCoordinates] = useState<PressedCoordinateType[]>([])


  const onCellClick = (clickedCoordinate: string) => {
    if (!gameStarted) return
    const isCorrect = currentCoordinate === clickedCoordinate
    const pressedCoordinate: PressedCoordinateType = {
      coordinate: currentCoordinate,
      isCorrect: isCorrect
    }
    setPressedCoordinates([...pressedCoordinates, pressedCoordinate])

    if (playAsBoth) {
      setPlayingAs(randomIntegerInRange(0, 1) ? "white" : "black")
    }

    const newCoordinate = `${LETTERS[randomIntegerInRange(0, 7)]}${NUMBERS[randomIntegerInRange(0, 7)]}`
    setCurrentCoordinate(newCoordinate)
  }

  const onColorChange = (color: PlayingAsType) => {
    if (color === "random") {
      setPlayAsBoth(true)
    } else setPlayingAs(color)
  }

  const onStartGame = () => {
    setPressedCoordinates([])
    setGameStarted(true)
    setCurrentTime(15)
    countTime()
  }

  const countTime = () => {
    setTimeout(() => {
      setCurrentTime(time => {
        const newTime = time - 1;
        if (newTime === 0) {
          setGameStarted(false)
        } else countTime()
        return newTime;
      })
    }, 1000);
  }

  const onShowCoordinatesChange = ()=>{
    setShowCoordinates(!showCoordinates)
  }

  return <AppContainer>
    <Board 
      playingAs={playingAs} 
      gameStarted={gameStarted} 
      showCoordinates={showCoordinates}
      currentCoordinate={currentCoordinate} 
      
      onCellClick={onCellClick} 
    />
    <Panel
      playingAs={playingAs}
      gameStarted={gameStarted}
      currentTime={currentTime}
      currentCoordinate={currentCoordinate}
      pressedCoordinates={pressedCoordinates}

      onStartGame={onStartGame}
      onColorChange={onColorChange}
      onShowCoordinatesChange={onShowCoordinatesChange}
    />
  </AppContainer>
}

export default App
