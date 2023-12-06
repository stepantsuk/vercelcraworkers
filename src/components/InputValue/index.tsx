import {
  BaseSyntheticEvent,
  KeyboardEvent,
  useState,
} from 'react'

import {
  KEYBOARD_KEYS,
  REGEX_DECIMAL,
  REGEX_INTEGER,
  VALUE_TYPE,
} from '../../config/index'
import { dotToComma } from '../../helpers/dotToComma'
import { useModal } from '../../hooks/useModal'
import {
  InputWrapper,
  InputLexica,
  Input,
  InputPriceAmount,
} from './styled'

type TInputValue = {
  countValue: number,
  handleSetPriceAmount: (str: string) => void,
  isPrice?: boolean,
  lexic: string,
  valueType: string,
}

type TFormattedValue = {
  valueType: string,
  count: number,
}

export const InputValue = ({
  countValue,
  handleSetPriceAmount,
  isPrice,
  lexic,
  valueType,
}: TInputValue) => {
  const [priceAmount, setPriceAmount] = useState<string>('')

  const {
    close: endEditing,
    isOpen: isEditing,
    open: startEditing,
  } = useModal()

  const {
    countType,
    priceType,
    weightType,
  } = VALUE_TYPE

  const getPlaceHolder = (typeValue: string) => {
    switch (true) {
      case typeValue === countType:
        return 'штук в упаковке'
      case typeValue === priceType:
        return 'цена в рублях'
      case typeValue === weightType:
        return 'граммы или мл.'
      default:
        return '';
    }
  }

  const regExp = isPrice ? REGEX_DECIMAL : REGEX_INTEGER

  const onChangePriceAmount = (e: BaseSyntheticEvent) => {
    const inputValue = dotToComma(e.target.value)

    if (regExp.test(inputValue)) {
      handleSetPriceAmount(Number(inputValue.replace(',', '.')).toFixed(2))
      setPriceAmount(inputValue);
    }
  }

  const finishEditingPriceAmount = () => {
    setPriceAmount('')

    endEditing()
  }

  const keyDown = (e: KeyboardEvent) => {
    if ([`${KEYBOARD_KEYS.escape}`, `${KEYBOARD_KEYS.enter}`].includes(e.key)) {
      finishEditingPriceAmount()
    }
  }

  const formattedValue = ({
    count,
    valueType,
  }: TFormattedValue) => {
    const isPrice = valueType === priceType

    return new Intl.NumberFormat(
      'ru-RU',
      {
        minimumFractionDigits: isPrice ? 2 : 0,
        maximumFractionDigits: isPrice ? 2 : 0,
      },
    ).format(count)
  }

  return (
    <InputWrapper>
      <InputLexica>
        {lexic}
      </InputLexica>
      {
        isEditing
          ? (
            <Input
              autoFocus={isEditing}
              onBlur={finishEditingPriceAmount}
              onChange={onChangePriceAmount}
              onInput={onChangePriceAmount}
              onKeyDown={keyDown}
              inputMode='decimal'
              placeholder={getPlaceHolder(valueType)}
              // type='number'
              // step={isPrice ? '0.01' : '1'}
              // min='0'
              value={priceAmount}
            // lang='ru'
            />
          )
          : (
            <InputPriceAmount
              onClick={startEditing}
            >
              {/* {isPrice
                ? dotToComma(countValue.toFixed(2))
                : countValue
              } */}
              {formattedValue(
                {
                  valueType,
                  count: countValue,
                }
              )}
            </InputPriceAmount>
          )
      }

    </InputWrapper>
  )
}