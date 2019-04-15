import { useState, Dispatch, SetStateAction } from 'react';


export default function useLocalStorage<S>(
    key: string,
    initialValue?: S
): [S, Dispatch<SetStateAction<S>>] {
    // The initialValue arg is only used if there is nothing in localStorage ...
    // ... otherwise we use the value in localStorage so state persist through a page refresh.
    // We pass a function to useState so localStorage lookup only happens once.
    // We wrap in try/catch in case localStorage is unavailable
    const [item, setInnerValue] = useState<S>(() => {
        try {
            const valueItem = window.localStorage.getItem(key);
            return valueItem ? JSON.parse(valueItem) : initialValue;
        } catch (error) {
            // Return default value if JSON parsing fails
            console.log(error);
            return initialValue;
        }
    });

    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = (value: SetStateAction<S>): SetStateAction<S> => {
        try {

            setInnerValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error);
        }
        return value;
    };

    // Alternatively we could update localStorage inside useEffect ...
    // ... but this would run every render and it really only needs ...
    // ... to happen when the returned setValue function is called.
    /*
    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(item));
    });
    */

    return [item, setValue];
}
