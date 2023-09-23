import { useEffect, useState } from 'react'

// Define a key for storing the user's level in storage
const STORAGE_KEY = 'level'

export const useLevel = (): [
  number,
  React.Dispatch<React.SetStateAction<number>>
] => {
  // Initialize the level state with the value from storage or a default value
  const [level, setLevel] = useState(() => {
    const storedLevel = localStorage.getItem(STORAGE_KEY)
    return storedLevel ? parseInt(storedLevel) : 1 // Default level is 1
  })

  // Update the user's level in storage whenever it changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, level.toString())
  }, [level])

  return [level, setLevel]
}

export default useLevel
