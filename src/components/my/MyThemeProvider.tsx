'use client';
import React, { createContext, useContext, useMemo } from 'react';
import DEFAULT_THEME from './default-theme.js';

const MyThemeContext = createContext(null);
const useSafeMyTheme = () => useContext(MyThemeContext) || DEFAULT_THEME;

function useMyTheme() {
    const ctx = useContext(MyThemeContext);
    if (!ctx) {
        throw new Error(
            "MyProvider was not found in component tree, make sure you have it in your app"
        );
    }
    return ctx;
}
function MyThemeProvider({
    theme,
    children,
    inherit = true
}) {
    const parentTheme = useSafeMyTheme();
    const mergedTheme = useMemo(
      () => ({...(inherit ? parentTheme : DEFAULT_THEME), ...theme}),
      [theme, parentTheme, inherit]
    );
    //const mergedTheme = theme || DEFAULT_THEME
    return /* @__PURE__ */ React.createElement(MyThemeContext.Provider, { value: mergedTheme }, children);
}
MyThemeProvider.displayName = "MyThemeProvider";

export { MyThemeContext, MyThemeProvider, useMyTheme, useSafeMyTheme };