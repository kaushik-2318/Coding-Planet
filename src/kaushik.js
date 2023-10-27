import {useEffect, useState} from 'react';

export default function App() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div>
      <h2>Width: {windowSize.innerWidth}</h2>
    </div>
  );
}

function getWindowSize() {
  const {innerWidth} = window;
  return {innerWidth};
}