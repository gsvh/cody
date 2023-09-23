import { Button, HStack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Tile } from '..'
import { OPTIONS } from '../../constants'
import { Option } from '../../types'

type Props = {
  handleSelectOption: (option: Option) => void
  handleResetOptions: () => void
  gameState: string
}
export const Actions = ({
  handleSelectOption,
  handleResetOptions,
  gameState,
}: Props) => {
  const [options, setOptions] = useState<Option[]>(OPTIONS)
  const [currentColor, setCurrentColor] = useState<string>('')

  const selectOption = (option: Option) => {
    if (option.color) {
      if (currentColor && option.color !== currentColor) {
        // setOptions((prev) => prev.filter((o) => o.color !== currentColor))
        const currentColorIndex = options.findIndex(
          (o) => o.color === currentColor
        )
        const newOptions = [...options]
        newOptions[currentColorIndex] = {
          ...newOptions[currentColorIndex],
          isDisabled: true,
        }
        setOptions(newOptions)
      }
      setCurrentColor(option.color)
    }
    handleSelectOption(option)
  }

  const resetOptions = () => {
    setOptions(OPTIONS)
    setCurrentColor('')
    handleResetOptions()
  }

  useEffect(() => {
    setOptions(OPTIONS)
    setCurrentColor('')
  }, [gameState])
  return (
    <HStack>
      <Button onClick={resetOptions}>reset</Button>
      {options.map((option, index) => (
        <Tile
          key={index}
          option={option}
          onClick={() => selectOption(option)}
        />
      ))}
    </HStack>
  )
}
