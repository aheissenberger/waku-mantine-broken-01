'use client'

import { useMyTheme } from "./MyThemeProvider.js";

export function MyComponent() {
  const theme = useMyTheme()
  return <div >Name: {JSON.stringify(theme)}</div>;
}
