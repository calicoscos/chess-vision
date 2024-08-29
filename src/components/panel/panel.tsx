import styled from "styled-components"
import { PressedCoordinateType } from "../../App"

const PanelContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 64px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    place-items: end start;
    font-size: 32px;
`

const CurrentCoordinate = styled.div`
    font-size: 120px;
    &.white{
        color: white;
    }
    &.black{
        color: black;
    }
`

const GameDataContainer = styled.div`
    display: grid;
    width: 100%;
    gap: 32px;
    place-self: center center;
`

const Timer = styled.div`
    width: fit-content;
    place-self: center;
`

const StartMenu = styled.div`
    display: grid;
    gap: 32px;
    width: 100%;
`

const PressedCoordinatesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    font-size: 16px;
    place-items: center;
    width: fit-content;
    gap: 8px 16px;
    place-self: center;
`

const PressedCoordinate = styled.div`
    color: transparent;
    text-shadow: 0 0 0 #fa412d;
    &.correct{
        text-shadow: 0 0 0 #81b64c;
    }
`
const CorrectCount = styled.div`
    color: transparent;
    text-shadow: 0 0 0 white;
`

const CurrentGameInfo = styled.div`
    display: grid;
    place-self: start center;
`

export const Panel = ({ currentCoordinate, playingAs, gameStarted, currentTime, pressedCoordinates, onColorChange, onStartGame, onShowCoordinatesChange }: any) => {

    return <PanelContainer>
        <CurrentGameInfo>
            {pressedCoordinates.length > 0 && <>
                <CorrectCount>♟️ {pressedCoordinates.filter(({ isCorrect }: PressedCoordinateType) => isCorrect).length}</CorrectCount>
                <PressedCoordinatesContainer>
                    {pressedCoordinates.map(({ coordinate, isCorrect }: PressedCoordinateType) => <PressedCoordinate className={isCorrect ? "correct" : ""}>{isCorrect ? `✔️` : `❌`}{coordinate}</PressedCoordinate>)}
                </PressedCoordinatesContainer>
            </>}
        </CurrentGameInfo>
        {gameStarted &&
            <GameDataContainer>
                <Timer>{currentTime}</Timer>
                <CurrentCoordinate className={playingAs}>{currentCoordinate}</CurrentCoordinate>
            </GameDataContainer>}
        {!gameStarted && <StartMenu>
            <div>
                <label htmlFor="showCoordinates">Show Coordinates</label>
                <input type="checkbox" id="showCoordinates" defaultChecked onChange={() => onShowCoordinatesChange()} />
                <select name="color" id="color" onChange={(e) => onColorChange(e.target.value)}>
                    <option value="white">White</option>
                    <option value="black">Black</option>
                    <option value="random">Random</option>
                </select>
            </div>
            <button className="primary" onClick={onStartGame}>Start</button>
        </StartMenu>}
    </PanelContainer>
}