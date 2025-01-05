import { useState } from 'react';

export function useTheme() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);

  return { isDark, toggleTheme };
}
