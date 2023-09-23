import styled from 'styled-components'

interface WandLayerProps {
  rows: number
  columns: number
  currentPosition: { x: number; y: number }
}

export const Hand = styled.div<WandLayerProps>`
  z-index: 1;
  position: absolute;
  transition: 'ease-in';
  top: calc(${(p) => p.currentPosition.y} * ${(p) => 100 / p.rows}%);
  left: calc(${(p) => p.currentPosition.x} * ${(p) => 100 / p.columns}%);
  transition: all 0.5s ease-in-out;

  @keyframes wiggle {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(5deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`
