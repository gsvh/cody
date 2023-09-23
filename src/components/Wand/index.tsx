import { Box, Icon } from '@chakra-ui/react'
import { SlMagicWand } from 'react-icons/sl'
import { TILE_SIZE } from '../../constants'

export const Wand = () => {
  return (
    <Box w={`${TILE_SIZE * 6}px`} h={`${TILE_SIZE * 6}px`} p={6}>
      <Icon as={SlMagicWand} boxSize="100%" color="black" />
    </Box>
  )
}
