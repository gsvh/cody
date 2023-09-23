import { Button, Code, VStack } from '@chakra-ui/react'
import { randomFailMessage } from '../../../helpers'
import { Overlay } from '../Overlay'

type Props = {
  onClick: () => void
}
export const FailOverlay = ({ onClick }: Props) => {
  return (
    <Overlay>
      <VStack gap={24}>
        <Code
          fontSize={32}
          background="transparent"
          color="red.300"
          textShadow={'2px 2px 3px black'}
          textAlign="center"
          maxW="70%"
        >
          {randomFailMessage()}
        </Code>
        <Button onClick={onClick} boxShadow="xl">
          Try again
        </Button>
      </VStack>
    </Overlay>
  )
}
