import { getLocalStorage } from '../../../helpers/localStorage'

export const getInitialProducts = () => {
  const productsArr = getLocalStorage('products')
  const jsonedArr = productsArr !== null ? JSON.parse(productsArr) : []
  return jsonedArr
}