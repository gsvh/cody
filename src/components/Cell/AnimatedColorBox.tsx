import { Box } from '@chakra-ui/react'

type Props = {
  color: string
}
const AnimatedColorBox = ({ color }: Props) => {
  const borderColor = color !== 'transparent' ? 'gray.500' : 'transparent'
  return (
    <Box
      h="100%"
      w="100%"
      backgroundColor={color}
      border="1px solid"
      borderColor={borderColor}
      borderRadius={10}
      transition="background-color 0.5s ease-in-out, border-color 0.5s ease-in-out" // Add transitions for backgroundColor and borderColor
    />
  )
}

export default AnimatedColorBox
