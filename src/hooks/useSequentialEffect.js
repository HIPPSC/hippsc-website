import { useEffect } from 'react';

/**
 * Apply a sequential animation delay to each child of the given ref.
 * @param {React.MutableRefObject} ref - The ref to the parent element containing items to animate.
 * @param {number} [delay=100] - The delay in milliseconds between each item's animation.
 */
const useSequentialEffect = (ref, classname, delay = 100) => {
    useEffect(() => {
        if (ref.current) {
            const items = ref.current.querySelectorAll(classname);
            items.forEach((item, index) => {
                item.style.animationDelay = `${index * delay}ms`;
                item.style.animationPlayState = 'running';
            });
        }
    }, [ref, delay, classname]);
};

export default useSequentialEffect;
