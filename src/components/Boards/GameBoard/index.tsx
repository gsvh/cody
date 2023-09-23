import { Box } from '@chakra-ui/react'
import { COLUMNS, ROWS, TILE_SIZE } from '../../../constants'

import { Cell } from '../..'
import { CellType } from '../../../types'

interface GameBoardProps {
  cells: CellType[]
}

export function GameBoard({ cells }: GameBoardProps) {
  return (
    <Box
      border="1px solid"
      borderColor="gray.300"
      borderRadius={5}
      display="grid"
      gridTemplateColumns={`repeat(${COLUMNS}, ${TILE_SIZE * 6}px)`}
      gridTemplateRows={`repeat(${ROWS}, ${TILE_SIZE * 6}px)`}
      position="relative"
    >
      {/* Render the grid cells */}
      {cells.map((cell, index) => (
        <Cell key={`cell-${index}`} type={cell.type} color={cell.color} />
      ))}
    </Box>
  )
}
