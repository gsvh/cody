import { Button, Code, VStack } from '@chakra-ui/react'
import { randomSuccessMessage } from '../../../helpers'
import { Overlay } from '../Overlay'

type Props = {
  onClick: () => void
}
export const SuccessOverlay = ({ onClick }: Props) => {
  return (
    <Overlay>
      <VStack gap={24}>
        <Code
          fontSize={32}
          background="transparent"
          color="green.300"
          textShadow={'2px 2px 3px black'}
          textAlign="center"
        >
          {randomSuccessMessage()}
        </Code>
        <Button onClick={onClick} boxShadow="2xl">
          Next level
        </Button>
      </VStack>
    </Overlay>
  )
}
