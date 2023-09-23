import { Box, Icon } from '@chakra-ui/react'
import { TILE_SIZE } from '../../constants'
import { Option } from '../../types'

type TyleProps = {
  option: Option
  onClick: () => void
}
export const Tile = ({ option, onClick }: TyleProps) => {
  return (
    <Box
      borderRadius={15}
      padding={2}
      border="1px solid"
      borderColor="gray.500"
      {...(option?.isDisabled
        ? {
            opacity: 0.2,
            _hover: {
              bg: 'gray.500',
              cursor: 'not-allowed',
            },
          }
        : {
            _hover: {
              bg: 'gray.500',
              cursor: 'pointer',
            },
            onClick: onClick,
          })}
    >
      <Box
        w={TILE_SIZE}
        h={TILE_SIZE}
        bg={option?.color ?? 'gray.200'}
        borderRadius={10}
        p={3}
        border="1px solid"
        borderColor="gray.500"
      >
        {option?.icon && (
          <Icon as={option.icon} w="100%" h="100%" color="gray.600" />
        )}
      </Box>
    </Box>
  )
}
