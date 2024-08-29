import styled, { keyframes } from "styled-components"

export const BoardContainer = styled.div`
    position: relative;
`

export const RowsContainer = styled.div`
    overflow: hidden;
    border-radius: 3px;
`

export const CoordinateText = styled.div` 
    font-weight: 500;
    padding: 10px;
    font-size: 23px;
    width: 120px;
    height: 120px;
    color: black;
`

export const NumberCoordinateContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    pointer-events: none;
    &>div{
        color: #739552;
        &:nth-child(odd){
            color: #ebecd0;
        }
    }
    &:nth-child(odd){
        &>div{
            color: #ebecd0;
            &:nth-child(odd){
                color: #739552;
            }
        }
    }
`

export const TextCoordinateContainer = styled(NumberCoordinateContainer)`
    flex-direction: row;
    bottom: 0;
    &>div {
        display: grid;
        place-items: end;
    }
`

export const CellRows = styled.div`
    display: grid;
    grid-auto-flow: column;
    &>div{
        background: #ebecd0;
        &:nth-child(odd){
            background: #739552;
        }
    }
    &:nth-child(odd){
        &>div{
            background: #739552;
            &:nth-child(odd){
                background: #ebecd0;
            }
        }
    }
`

export const Cell = styled.div`
    width: 120px;
    height: 120px;
`

const animation = keyframes`
  from {
    opacity: 1;
    scale: 1;
  }
  to {
    opacity: 0;
    scale: 2;
  }
`

export const CurrentCoordinate = styled.div`
    pointer-events: none;
    width: 100%;
    height: 100%;
    font-size: 120px;
    position: absolute;
    display: grid;
    place-items: center;
    animation: ${animation} 1s linear forwards;

    &.white{
        color: white;
    }
    &.black{
        color: black;
    }
`