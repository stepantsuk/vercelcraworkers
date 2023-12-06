import type { TProductItem } from '../App/App'
import {
  lexics,
  BUTTON_TYPE,
} from '../../config'
import { ProductItem } from '../ProductItem'
import { Button } from '../../ui-kit/Button'
import { Container } from '../App/styled'
import {
  ProductsContainer,
  // DividerLine,
  ProductsListHeader,
  ProductsListTitle,
  ProductsListContainer,
} from './styled'

type TProductsList = {
  products: Array<TProductItem>,
  onDeleteProduct: (idProduct: number) => void,
  onCleanList: () => void,
  onSaveEdit: (product: TProductItem) => void,
}

export const ProductsList = ({
  products,
  onDeleteProduct,
  onCleanList,
  onSaveEdit,
}: TProductsList) => {
  const { productsListTitle } = lexics
  const { cleanList } = BUTTON_TYPE

  const isProductsEmpty = products.length === 0

  const additionalLexic = isProductsEmpty ? 'пусто...' : ''

  return (
    <Container>
      <ProductsContainer>
        <ProductsListHeader>
          <ProductsListTitle>
            {`${productsListTitle} ${additionalLexic}`}
          </ProductsListTitle>
          {!isProductsEmpty && (
            <Button
              buttonType={cleanList}
              onClick={onCleanList}
            />
          )}
        </ProductsListHeader>
        <ProductsListContainer>
          {
            (!isProductsEmpty)
            && products.map(({
              count,
              id,
              name,
              price,
              weight,
            }) => (
              <ProductItem
                key={id}
                count={count}
                id={id}
                name={name}
                price={price}
                weight={weight}
                onDeleteProduct={onDeleteProduct}
                onSaveEdit={onSaveEdit}
              />))
          }
        </ProductsListContainer>
      </ProductsContainer>
    </Container>
  )
}