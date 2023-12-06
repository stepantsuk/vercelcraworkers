import {
  useRef,
  useEffect,
  RefObject,
} from 'react'

type TUseOutsideClick = {
  onClick: (event: MouseEvent) => void,
  outerRef?: RefObject<HTMLDivElement>,
}

export const useOutsideClick = <R extends HTMLElement>({
  onClick,
  outerRef,
}: TUseOutsideClick) => {
  const ref = useRef<R>(null)

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const { target } = e
      const targetNode = target instanceof Node
        ? target
        : null

      if (!ref.current?.contains(targetNode) && !outerRef?.current?.contains(targetNode)) {
        onClick(e)
      }
    }

    window.addEventListener('mousedown', handleOutsideClick)

    return () => {
      window.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [
    onClick,
    outerRef,
    ref,
  ])

  return ref
}
