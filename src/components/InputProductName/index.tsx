import {
  BaseSyntheticEvent,
  KeyboardEvent,
  useState,
} from 'react'

import {
  KEYBOARD_KEYS,
  DEFAULT_PRODUCT_TITLE,
  lexics,
} from '../../config/index'
import { useModal } from '../../hooks/useModal'
import {
  ProductNameWrapper,
  ProductNameLexica,
  ProductNameValue,
  ProductNameInput,
} from './styled'

type TInputProductName = {
  lexic: string,
  productName: string,
  handleSetName: React.Dispatch<React.SetStateAction<string>>
}

const getDefaultNameInput = (nameStr: string) => nameStr === DEFAULT_PRODUCT_TITLE ? DEFAULT_PRODUCT_TITLE : nameStr

export const InputProductName = ({
  lexic,
  productName,
  handleSetName,
}: TInputProductName) => {
  const [nameInput, setNameInput] = useState<string>(getDefaultNameInput(productName))

  const {
    close: endEditing,
    isOpen: isEditing,
    open: startEditing,
  } = useModal()

  const {
    defaultProductTitle,
  } = lexics

  const productNameValue = productName === DEFAULT_PRODUCT_TITLE ? defaultProductTitle : productName

  const onChangeNameInput = (e: BaseSyntheticEvent) => {
    setNameInput(e.target.value)
  }

  const finishEditing = () => {
    const removeAllEmptySpaces = nameInput.trim().replace(/\s{2,}/g, ' ')

    if (removeAllEmptySpaces !== '') {
      handleSetName(removeAllEmptySpaces)
    }
    setNameInput('')
    endEditing()
  }

  const keyDown = (e: KeyboardEvent) => {
    if (e.key === KEYBOARD_KEYS.enter) {
      finishEditing()
    }

    if (e.key === KEYBOARD_KEYS.escape) {
      setNameInput('')
      endEditing()
    }
  }

  return (
    <ProductNameWrapper>
      <ProductNameLexica>
        {lexic}
      </ProductNameLexica>
      {isEditing
        ? (
          <ProductNameInput
            autoFocus={isEditing}
            onBlur={finishEditing}
            onChange={onChangeNameInput}
            onInput={onChangeNameInput}
            onKeyDown={keyDown}
            value={nameInput}
          />
        )
        : (
          <ProductNameValue
            onClick={startEditing}
          >
            {productNameValue}
          </ProductNameValue>
        )}
    </ProductNameWrapper>
  )
}