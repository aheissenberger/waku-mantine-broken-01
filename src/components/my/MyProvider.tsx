'use client'

import React from 'react';
import { MyContext } from './My.context.js';
import { MyThemeProvider } from './MyThemeProvider.js';

function MyProvider({
    theme,
    children,
    getRootElement = () => document.documentElement,
}) {

    return /* @__PURE__ */ React.createElement(
        MyContext.Provider,
        {
            value: {
                getRootElement,
            }
        },
        /* @__PURE__ */ React.createElement(MyThemeProvider, { theme }, children)
    )
}
export { MyProvider };