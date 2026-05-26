import { useEffect, useState } from 'react';

// Använder en timer för att fördröja uppdateringen av värdet
export function useDebounce(value, delay = 400) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Väntar tills användaren slutat skriva innan värdet uppdateras
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Nollställer timern om användaren fortsätter skriva innan fördröjningen är klar
    return () => clearTimeout(timer);
  }, [value, delay]);

  // Returnerar det fördröjna värdet till den komponent som använder hooken
  return debouncedValue;
}
