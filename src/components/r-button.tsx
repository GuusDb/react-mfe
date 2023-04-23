import { useState } from 'react';

export const ReactButton = () => {
  const [clickCount, setClickCount] = useState<number>(0);

  const handleClick = async () => {
    setClickCount(clickCount + 1);
    //callAsync();
  };
  return (
    <div>
      <p>{clickCount}</p>
      <button onClick={handleClick}>click</button>
    </div>
  );
};
