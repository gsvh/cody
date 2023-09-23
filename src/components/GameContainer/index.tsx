import { Box, Button, Code, Flex, HStack, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { Actions, PlayerBoard, TargetBoard } from '..'
import { COLORS, COLUMNS, ROWS } from '../../constants'
import { generateId, generateTargetCells } from '../../helpers'
import useLevel from '../../hooks/useLevel'
import { CellType, Option } from '../../types'
import { FailOverlay, SuccessOverlay } from '../Overlays'
import { Story } from '../Story'

export const GameContainer = () => {
  const [level, setLevel] = useLevel()
  const [options, setOptions] = useState<Option[]>([])
  const [start, setStart] = useState<boolean>(false)
  const [gameState, setGameState] = useState<'playing' | 'success' | 'fail'>(
    'playing'
  )

  const [targetCells, setTargetCells] = useState<CellType[]>(
    generateTargetCells(level)
  )

  const handleSelectOption = (option: Option) => {
    if (options.length < ROWS * COLUMNS + COLORS.length) {
      const id = generateId()
      setOptions((prev) => [...prev, { ...option, id }])
    }
  }

  const handleResetOptions = () => {
    setOptions([])
  }

  const handleRemoveOption = (id: string) => {
    setOptions((prev) => prev.filter((o) => o.id !== id))
  }

  const handleOnEnd = (playerCells?: CellType[]) => {
    setStart(false)
    setOptions([])

    const win = JSON.stringify(playerCells) === JSON.stringify(targetCells)
    if (win) {
      setGameState('success')
    } else {
      setGameState('fail')
    }
  }

  const handleNextLevel = () => {
    setTargetCells(generateTargetCells(level + 1))
    setLevel((prev) => prev + 1)
    setGameState('playing')
  }

  return (
    <VStack position="relative">
      <Code bg="transparent" fontSize={64}>
        Level {level}
      </Code>
      <HStack>
        <Box p={2} bg="gray.300" borderRadius={10}>
          <TargetBoard targetCells={targetCells} />
        </Box>
        <Box p={2} bg="gray.300" borderRadius={10}>
          <PlayerBoard
            playerInstructions={options}
            start={start}
            onEnd={handleOnEnd}
          />
        </Box>
      </HStack>
      <Flex flexDir="column" alignItems="center" mt={5} gap={3}>
        <Actions
          handleSelectOption={handleSelectOption}
          handleResetOptions={handleResetOptions}
          gameState={gameState}
        />
        <Story options={options} handleRemoveOption={handleRemoveOption} />
        <Button colorScheme="blue" onClick={() => setStart(true)}>
          Go!
        </Button>
      </Flex>
      {gameState === 'success' && <SuccessOverlay onClick={handleNextLevel} />}
      {gameState === 'fail' && (
        <FailOverlay
          onClick={() => {
            setGameState('playing')
          }}
        />
      )}
    </VStack>
  )
}
