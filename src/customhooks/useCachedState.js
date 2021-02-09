import { useState } from 'react';
 
function useCachedState(key, defaultValue) {


const [value, setValue] = useState('');


useEffect(() => {
  localStorage.setItem(localStorageKey, value);
}, [value]);



export default useCachedState;
