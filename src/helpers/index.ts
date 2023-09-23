import {
  CELL_TYPE,
  COLORS,
  COLUMNS,
  FAIL_MESSAGES,
  NUMBER_OF_CELLS,
  ROWS,
  SUCCESS_MESSAGES,
} from '../constants'
import { CellType } from '../types'

export function generateId(): string {
  const timestamp = new Date().getTime()
  const random = Math.floor(Math.random() * 1000)
  return `${timestamp}-${random}`
}
function assignRandomColor(cells: CellType[], colors: typeof COLORS): void {
  const randomIndex = Math.floor(Math.random() * cells.length)

  cells[randomIndex] = {
    position: cells[randomIndex].position,
    ...colors[Math.floor(Math.random() * colors.length)],
  }
  console.log({
    randomIndex: {
      position: cells[randomIndex].position,
      ...colors[Math.floor(Math.random() * colors.length)],
    },
  })
}

export const generateTargetCells = (level: number) => {
  const cells = Array.from({ length: NUMBER_OF_CELLS }, (_, index) => {
    return {
      position: { x: index % COLUMNS, y: Math.floor(index / ROWS) },
      type: CELL_TYPE.EMPTY,
      color: 'transparent',
    }
  })

  // randomly set indexes to colored cells
  for (let i = 0; i < Math.ceil(level / 3) + Math.floor(ROWS / 2); i++) {
    assignRandomColor(cells, COLORS)
  }
  console.log({ cells })
  return cells
}

//   if (Math.random() < (level + 3) / 10) {
//     return {
//       position: { x: index % 3, y: Math.floor(index / 3) },
//       ...COLORS[Math.floor(Math.random() * COLORS.length)],
//     }
//   }
export const generateEmptyCells = () =>
  Array.from({ length: NUMBER_OF_CELLS }, (_, index) => ({
    position: { x: index % COLUMNS, y: Math.floor(index / ROWS) },
    type: CELL_TYPE.EMPTY,
    color: 'transparent',
  }))

export const randomSuccessMessage = () => {
  const randomIndex = Math.floor(Math.random() * SUCCESS_MESSAGES.length)
  return SUCCESS_MESSAGES[randomIndex]
}

export const randomFailMessage = () => {
  const randomIndex = Math.floor(Math.random() * FAIL_MESSAGES.length)
  return FAIL_MESSAGES[randomIndex]
}
