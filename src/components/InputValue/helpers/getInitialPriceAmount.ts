import { dotToComma } from '../../../helpers/dotToComma'

export const getInitialPriceAmount = (num: number) => {
  if (num === 0) return ''
  return dotToComma(num.toFixed(2))
}