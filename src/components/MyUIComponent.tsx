'use client'

import { useMyTheme } from "myui";

export function MyUIComponent() {
  const theme = useMyTheme(true) // true is replacing the the Exception with a console.log to allow to verify the react tree in the browser
  const themeString= JSON.stringify(theme)
  return <div >Name: {themeString} - DEBUG: {themeString==='{"name":"new"}'?'OK':'BROKEN'}</div>;
}
