import {
  InputWrapper,
  InputLexica,
} from '../InputValue/styled'

import { InputPriceAmount } from './styled'

type TResultPrice = {
  countValue: number,
  lexic: string,
  price: number,
}

export const ResultPrice = ({
  countValue,
  lexic,
  price,
}: TResultPrice) => {
  const showDash = countValue === 0 || price === 0

  // const getPrice = (priceItem: number, count: number) => {
  //   const result = ((Number(priceItem.toFixed(2))) / count).toFixed(2)
  //   return dotToComma(result)
  //   // return ((Number(priceItem.toFixed(2))) / count).toLocaleString()
  // }

  const getPrice = (priceItem: number, count: number) => {
    const price = priceItem / count

    return new Intl.NumberFormat(
      'ru-RU',
      {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
    ).format(price)
  }

  return (
    <InputWrapper>
      <InputLexica>
        {lexic}
      </InputLexica>
      <InputPriceAmount>
        {showDash
          ? '-'
          : getPrice(price, countValue)
        }
      </InputPriceAmount>
    </InputWrapper>
  )
}