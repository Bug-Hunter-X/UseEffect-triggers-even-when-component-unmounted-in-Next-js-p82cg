```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <MyComponent/>
    </div>
  );
}

// components/MyComponent.js
import { useState, useEffect } from 'react';

export default function MyComponent(){
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);
  
  useEffect(() => {
    if(isMounted){
      console.log('Component mounted');
    }
    return () => {
      if(isMounted){
        console.log('Component unmounted');
      }
    };
  }, [isMounted]);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```