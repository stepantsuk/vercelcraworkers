import { useState } from 'react'

import type { TProductItem } from '../App/App'
import {
  lexics,
  VALUE_TYPE,
  BUTTON_TYPE,
} from '../../config'
import { Popup } from '../../ui-kit/Popup'
import { OutsideClick } from '../../ui-kit/OutsideClick'
import { InputValue } from '../InputValue'
import { InputProductName } from '../InputProductName'
import { Button } from '../../ui-kit/Button'
import {
  EditContainer,
  EditProductContainer,
  EditProductButtons,
  ButtonsTitle,
  ButtonsContainer,
} from './styled'

type TEditProduct = {
  close: () => void,
  countProduct: number,
  nameProduct: string,
  priceProduct: number,
  weightProduct: number,
  onSaveEdit: (product: TProductItem) => void,
  idProduct: number,
}

export type THandleSet = {
  fn: React.Dispatch<React.SetStateAction<number>>,
  str: string,
}

export const EditProduct = ({
  close,
  countProduct,
  nameProduct,
  priceProduct,
  weightProduct,
  onSaveEdit,
  idProduct,
}: TEditProduct) => {
  const [price, setPrice] = useState<number>(priceProduct)
  const [weight, setWeight] = useState<number>(weightProduct)
  const [count, setCount] = useState<number>(countProduct)
  const [productName, setProductName] = useState<string>(nameProduct)

  const handleSet = ({
    fn,
    str,
  }: THandleSet) => {
    fn(parseFloat(str))
  }

  const handleSave = () => {
    onSaveEdit({
      count: count,
      id: idProduct,
      name: productName ? productName : 'Без названия',
      price: price,
      weight: weight,
    })
    close()
  }

  const {
    count: countLexic,
    price: priceLexic,
    weight: weightLexic,
    productTitle,
    saveChanges,
  } = lexics

  const {
    countType,
    priceType,
    weightType,
  } = VALUE_TYPE

  const {
    no,
    yes,
  } = BUTTON_TYPE

  return (
    <Popup>
      <EditContainer>
        <OutsideClick onClick={close}>
          <EditProductContainer>
            <InputProductName
              handleSetName={setProductName}
              lexic={productTitle}
              productName={productName}
            />
            <InputValue
              countValue={price}
              isPrice={true}
              handleSetPriceAmount={(str) => handleSet({ fn: setPrice, str })}
              lexic={priceLexic}
              valueType={priceType}
            />
            <InputValue
              countValue={weight}
              handleSetPriceAmount={(str) => handleSet({ fn: setWeight, str })}
              lexic={weightLexic}
              valueType={weightType}
            />
            <InputValue
              countValue={count}
              handleSetPriceAmount={(str) => handleSet({ fn: setCount, str })}
              lexic={countLexic}
              valueType={countType}
            />
            <EditProductButtons>
              <ButtonsTitle>
                {saveChanges}
              </ButtonsTitle>
              <ButtonsContainer>
                <Button
                  buttonType={yes}
                  onClick={handleSave}
                />
                <Button
                  buttonType={no}
                  onClick={close}
                />
              </ButtonsContainer>
            </EditProductButtons>
          </EditProductContainer>
        </OutsideClick>
      </EditContainer>
    </Popup>
  )
}