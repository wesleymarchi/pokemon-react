import { useEffect, useState, useRef } from 'react';

export const useResize = () => {
    const ref = useRef(null)
    const [width, setWidth] = useState(document.documentElement.clientWidth)

    useEffect(() => {
        const handleResize = () => {
            setWidth(ref.current.offsetWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [ref]);

    return [width, ref];
}
