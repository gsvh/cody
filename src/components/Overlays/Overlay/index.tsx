import { Box, Center } from '@chakra-ui/react'

type Props = {
  children: React.ReactNode
}
export const Overlay = ({ children }: Props) => (
  <Box
    // position="absolute"
    // top={0}
    // left={0}
    // w="100%"
    // h="100%"
    // bg="blue.200"
    // backdropFilter="blur(5px)"
    // borderRadius="full"
    position="absolute"
    top={0}
    left={0}
    h="100%"
    w="100%"
    bg="blackAlpha.600"
    borderRadius={50}
    backdropFilter="blur(5px)"
    zIndex={2}
  >
    <Center w="100%" h="100%">
      {children}
    </Center>
  </Box>
)
