import { BUTTON_TYPE } from '../../../config'

type TUseButton = {
  buttonType: string,
}

export const useButton = ({
  buttonType,
}: TUseButton) => {
  const {
    addProduct,
    cleanCalc,
    cleanList,
    no,
    yes,
  } = BUTTON_TYPE

  const getLexic = () => {
    switch (buttonType) {
      case addProduct:
        return 'Добавить товар'
      case cleanCalc:
        return 'Очистить поля'
      case cleanList:
        return 'Очистить список'
      case yes:
        return 'Да'
      case no:
        return 'Нет'
      // case confirmYes:
      //   return 'Да'
      // case confrimNo:
      //   return 'Нет'
      // case changeTask:
      //   return 'Редактировать'
      // case deleteTask:
      //   return 'Удалить'
      // case saveTask:
      //   return 'Сохранить'
      default:
        return ''
    }
  }

  return {
    lexic: getLexic(),
  }
}