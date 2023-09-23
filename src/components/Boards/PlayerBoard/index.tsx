import { Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Wand } from '../..'
import { CELL_TYPE, COLUMNS, DIRECTIONS, ROWS } from '../../../constants'
import { generateEmptyCells } from '../../../helpers'
import { useInterval } from '../../../hooks'
import { CellType, Option } from '../../../types'
import { GameBoard } from '../GameBoard'
import { Hand } from './WandLayer'

const INITIAL_WAND_POSITION = { x: 0, y: 0 }

type Props = {
  playerInstructions: Option[]
  start: boolean
  onEnd: (playerCells?: CellType[]) => void
}

export const PlayerBoard = ({ playerInstructions, start, onEnd }: Props) => {
  const [instructionIndex, setInstructionIndex] = useState<number | null>(null)
  const [wandPosition, setWandPosition] = useState(INITIAL_WAND_POSITION) // Initialize wand position
  const [delay, setDelay] = useState<number | null>(null)
  const [playerCells, setPlayerCells] = useState<CellType[]>(
    generateEmptyCells()
  )
  const [isWiggling, setIsWiggling] = useState(false)

  const handleWiggle = (callback: () => void) => {
    setIsWiggling(true)

    // Reset the wiggle animation after a short delay
    setTimeout(() => {
      callback()
    }, 300)
    setTimeout(() => {
      setIsWiggling(false)
    }, 700) // Adjust the delay as needed
  }

  const handleEnd = () => {
    // reset board
    setWandPosition(INITIAL_WAND_POSITION)
    setPlayerCells(generateEmptyCells())
    setInstructionIndex(null)
    setDelay(null)

    // call onEnd
    onEnd(playerCells)
  }

  useEffect(() => {
    if (start && playerInstructions.length) {
      setDelay(1000)
      setInstructionIndex(0)
    } else {
      setDelay(null)
    }
  }, [start, playerInstructions])

  useInterval(() => {
    if (instructionIndex !== null) {
      const { type, direction, color } = playerInstructions[instructionIndex]
      if (type === 'movement') {
        const newPosition = { ...wandPosition }
        switch (direction) {
          case DIRECTIONS.UP:
            newPosition.y = wandPosition.y - 1
            break
          case DIRECTIONS.DOWN:
            newPosition.y = wandPosition.y + 1
            break
          case DIRECTIONS.LEFT:
            newPosition.x = wandPosition.x - 1
            break
          case DIRECTIONS.RIGHT:
            newPosition.x = wandPosition.x + 1
            break
        }
        if (
          newPosition.x < 0 ||
          newPosition.y < 0 ||
          newPosition.x >= COLUMNS ||
          newPosition.y >= ROWS
        ) {
          handleEnd()
        } else {
          setWandPosition(newPosition)
        }
      } else if (type === 'color') {
        handleWiggle(() => {
          const newCells = [...playerCells]
          newCells[wandPosition.x + wandPosition.y * ROWS] = {
            ...newCells[wandPosition.x + wandPosition.y * ROWS],
            color: color ?? '',
            type: CELL_TYPE.COLOR,
          }
          setPlayerCells(newCells)
        })
      }

      //   set new instruction index
      if (instructionIndex < playerInstructions.length - 1) {
        setInstructionIndex((prev) => (prev !== null ? prev + 1 : null))
      } else {
        setInstructionIndex(null)
      }
    } else {
      handleEnd()
    }
  }, delay)

  return (
    <Box position="relative">
      <Hand
        rows={ROWS}
        columns={COLUMNS}
        currentPosition={wandPosition}
        style={{
          transformOrigin: 'center',
          animation: isWiggling ? 'wiggle 0.2s ease-in-out infinite' : 'none',
        }}
      >
        <Wand />
      </Hand>
      <GameBoard cells={playerCells} />
    </Box>
  )
}
