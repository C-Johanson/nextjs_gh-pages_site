import { useState, useEffect} from 'react'

export const useOnScreen = (ref) => {
    const [onScreen, setScreen] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver((([entry]) => {
            setScreen(entry.isIntersecting)
        }), {
            threshold: 0.4
        });

        observer.observe(ref.current);

        return () => observer.disconnect();
    })
  return onScreen;
}