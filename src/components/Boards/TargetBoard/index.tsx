import { CellType } from '../../../types'
import { GameBoard } from '../GameBoard'

type Props = {
  targetCells: CellType[]
}
export const TargetBoard = ({ targetCells }: Props) => {
  return <GameBoard cells={targetCells} />
}
