
import Number from './src/Number/index.ts'
import Collections from './src/Collections/index.ts'
import Char from './src/Char/index.ts'
import { From } from './types.ts'

while (true) {
  console.log(
    From(Char.Digit(Number.Uniform))
  )
}
