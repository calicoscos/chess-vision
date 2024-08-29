import { LETTERS, NUMBERS } from '../../App'
import { BoardContainer, Cell, CellRows, CoordinateText, CurrentCoordinate, NumberCoordinateContainer, RowsContainer, TextCoordinateContainer } from './board.styles'


export const Board = ({ onCellClick, playingAs, gameStarted, showCoordinates, currentCoordinate }: any) => {

    const numbers = playingAs === "white" ? NUMBERS : [...NUMBERS].reverse()
    const letters = playingAs === "white" ? LETTERS : [...LETTERS].reverse()


    return <BoardContainer>
        {showCoordinates && <>
            <NumberCoordinateContainer className={playingAs}>{numbers.map((number) => <CoordinateText key={number}>{number}</CoordinateText>)}</NumberCoordinateContainer>
            <TextCoordinateContainer className={playingAs}>{letters.map((letter) => <CoordinateText key={letter}>{letter}</CoordinateText>)}</TextCoordinateContainer>
        </>}
        {gameStarted && <CurrentCoordinate className={playingAs} key={currentCoordinate}>{currentCoordinate}</CurrentCoordinate>}
        <RowsContainer>
            {numbers.map((number) =>
                <CellRows key={number}>
                    {letters.map((letter) => <Cell key={letter} onClick={() => onCellClick(`${letter}${number}`)} />)}
                </CellRows>
            )}
        </RowsContainer>
    </BoardContainer>
}