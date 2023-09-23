import { Flex } from '@chakra-ui/react'
import { Tile } from '..'
import { TILE_SIZE } from '../../constants'
import { Option } from '../../types'

type Props = {
  options: Option[]
  handleRemoveOption: (id: string) => void
}
export const Story = ({ options, handleRemoveOption }: Props) => {
  return (
    <Flex
      minW="100%"
      maxW="70vw"
      minH={`${(TILE_SIZE + 10) * 4}px`}
      bg="gray.300"
      borderRadius={10}
      p={3}
      gap={3}
      flex="wrap"
      flexWrap="wrap"
    >
      {options.map((option, index) => (
        <Tile
          key={`story-${index}}`}
          option={option}
          onClick={() => handleRemoveOption(option?.id ?? '')}
        />
      ))}
    </Flex>
  )
}
