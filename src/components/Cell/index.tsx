import { Box } from '@chakra-ui/react'
import { CELL_TYPE } from '../../constants'
import AnimatedColorBox from './AnimatedColorBox'

type Props = {
  type: CELL_TYPE
  color: string
}
export const Cell = ({ type, color }: Props) => {
  console.log(type)
  return (
    <Box p={2}>
      <Box
        w="100%"
        h="100%"
        border="1px solid"
        borderColor="gray.500"
        borderRadius={15}
        p={2}
      >
        <AnimatedColorBox color={color} />
      </Box>
    </Box>
  )
}
