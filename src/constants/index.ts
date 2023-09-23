import {
  FaLongArrowAltDown,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaLongArrowAltUp,
} from 'react-icons/fa'
import { Option } from '../types'

export const TILE_SIZE = 14

export const ROWS = 4
export const COLUMNS = 4

export const NUMBER_OF_CELLS = ROWS * COLUMNS

export enum CELL_TYPE {
  COLOR = 'color',
  EMPTY = 'empty',
}

export enum DIRECTIONS {
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGHT = 'right',
}

export const COLORS = [
  {
    type: CELL_TYPE.COLOR,
    color: 'blue.200',
  },
  {
    type: CELL_TYPE.COLOR,
    color: 'green.200',
  },
  {
    type: CELL_TYPE.COLOR,
    color: 'red.200',
  },
  {
    type: CELL_TYPE.COLOR,
    color: 'yellow.200',
  },
]
export const OPTIONS: Option[] = [
  ...COLORS,
  {
    type: 'movement',
    direction: DIRECTIONS.UP,
    icon: FaLongArrowAltUp,
  },
  {
    type: 'movement',
    direction: DIRECTIONS.DOWN,
    icon: FaLongArrowAltDown,
  },
  {
    type: 'movement',
    direction: DIRECTIONS.LEFT,
    icon: FaLongArrowAltLeft,
  },
  {
    type: 'movement',
    direction: DIRECTIONS.RIGHT,
    icon: FaLongArrowAltRight,
  },
]

export const SUCCESS_MESSAGES = [
  'You did it! Time to do your victory dance!',
  "Congratulations, champ! You're officially awesome.",
  "You're on fire! Or maybe just victorious.",
  "You're so cool, even ice cubes are jealous.",
  'You won! Now go brag to your pet goldfish.',
  "You're the bee's knees, my friend!",
  'You did the thing! High-fives all around',
  'Victory is yours, and it tastes like awesomeness!',
  "You're as rare as a unicorn on roller skates.",
  'In the game of life, you just leveled up!',
  "You're so cool, even snowmen are envious.",
  "They say winning is sweet, and you're the proof.",
  "You're so bright, you make the sun look dim.",
  "You're officially the hero of the day!",
  "You're as awesome as a double rainbow on a unicorn's birthday!",
]

export const FAIL_MESSAGES = [
  "Oops! Looks like you hit the 'Fail' button.",
  'Failure is the first step to legendary tales, right?',
  "Don't worry, even superheroes have their off days.",
  'Failure is just success in progress.',
  "You're so good, you even fail with style!",
  'Keep calm and fail forward.',
  'Remember, every great scientist failed a few experiments.',
  "It's all fun and games until someone fails... oh wait.",
  "You're just too good at being bad!",
  "Failure: It's a stepping stone to greatness.",
  'Failure is like a road bump on the highway to victory.',
  'Even the best chefs burn the toast sometimes.',
  "You're in good company; failure happens to the best of us.",
  "At least you tried! Some people didn't even do that.",
  'Failure is just a pit stop on the road to success.',
]
