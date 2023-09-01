import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const useTypingEffect = (fullText, threshold = 1, speed = 20) => {
  const [visibleText, setVisibleText] = useState('');
  const [invisibleText, setInvisibleText] = useState(fullText);
  const [textIndex, setTextIndex] = useState(0);
  const [ref, inView] = useInView({
    threshold: threshold,
    triggerOnce: true,
  });

  useEffect(() => {
    let timer;
    if (inView && textIndex < fullText.length) {
      timer = setTimeout(() => {
        setVisibleText((prevText) => prevText + fullText.charAt(textIndex));
        setInvisibleText((prevText) => prevText.substring(1));
        setTextIndex((prevIndex) => prevIndex + 1);
      }, speed);
    }
    return () => clearTimeout(timer);
  }, [inView, textIndex, fullText, speed]);

  return [visibleText, invisibleText, ref];
};

export default useTypingEffect;
