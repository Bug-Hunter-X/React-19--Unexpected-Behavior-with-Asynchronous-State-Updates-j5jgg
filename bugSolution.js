```javascript
import React, { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    // This effect runs after every render
    console.log('Count updated:', count);
  }, [count]);

  const handleClick = () => {
    // Use useRef to get the latest value.
    countRef.current = countRef.current + 1;
    setCount(countRef.current);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default MyComponent;
```