import type { TProductItem } from '../App/App'
import { lexics } from '../../config'
import { useModal } from '../../hooks/useModal'
import { EditProduct } from '../EditProduct'
import { ResultPrice } from '../ResultValue'
import {
  ProductItemContainer,
  ProductTitle,
  ProductTitleRightBlock,
  ProductEditBtn,
  ProductName,
  ProductDelete,
  ProductValues,
} from './styled'

type TProduct = {
  onDeleteProduct: (idProduct: number) => void,
  onSaveEdit: (product: TProductItem) => void,
} & TProductItem

export const ProductItem = ({
  count,
  id,
  name,
  price,
  weight,
  onDeleteProduct,
  onSaveEdit,
}: TProduct) => {
  const {
    priceWeight,
    priceCount,
    productEditBtn,
  } = lexics

  const {
    close: closeEdit,
    isOpen: isOpenEdit,
    open: openEdit,
  } = useModal()

  return (
    <ProductItemContainer>
      {isOpenEdit && (
        <EditProduct
          close={closeEdit}
          countProduct={count}
          nameProduct={name}
          priceProduct={price}
          weightProduct={weight}
          onSaveEdit={onSaveEdit}
          idProduct={id}
        />
      )}
      <ProductTitle>
        <ProductName>
          {name}
        </ProductName>
        <ProductTitleRightBlock>
          <ProductEditBtn onClick={openEdit}>
            {productEditBtn}
          </ProductEditBtn>
          <ProductDelete
            onClick={() => onDeleteProduct(id)}
          />
        </ProductTitleRightBlock>
      </ProductTitle>
      <ProductValues>
        <ResultPrice
          countValue={weight / 1000}
          lexic={priceWeight}
          price={price}
        />
        <ResultPrice
          countValue={count}
          lexic={priceCount}
          price={price}
        />
      </ProductValues>
    </ProductItemContainer>
  )
}