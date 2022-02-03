import { useEffect } from 'react'

export const useOnClickOutside = (ref, closeMenu) => {
    useEffect(() => {
        const listener = (event) => {
            if (
                ref.current &&
                event.target &&
                ref.current.contains(event.target)
            ) {
                return;
            }
            closeMenu()
        }
        document.addEventListener('mousedown', listener)
        return () => {
            document.removeEventListener('mousedown', listener)
        }
    }, [ref, closeMenu])
}
