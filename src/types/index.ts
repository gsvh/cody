import { IconType } from 'react-icons'
import { CELL_TYPE, DIRECTIONS } from '../constants'

export type Option = {
  id?: string
  type: string
  color?: string
  direction?: DIRECTIONS
  icon?: IconType
  isDisabled?: boolean
}

export type Position = {
  x: number
  y: number
}

export type CellType = {
  position: Position
  type: CELL_TYPE
  color: string
}
