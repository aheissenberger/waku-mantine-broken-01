import { createPages } from 'waku';

import { RootLayout } from './templates/root-layout.js';
import { HomePage } from './templates/home-page.js';
import { MyUILocalPage } from './templates/myui-local-page.js';
import { MyUIPackagePage } from './templates/myui-package-page.js';

export default createPages(async ({ createPage, createLayout }) => {
  createLayout({
    render: 'static',
    path: '/',
    component: RootLayout,
  });

  createPage({
    render: 'static',
    path: '/',
    component: HomePage,
  });

  createPage({
    render: 'dynamic',
    path: '/myuilocal',
    component: MyUILocalPage,
  });

  createPage({
    render: 'dynamic',
    path: '/myuipackage',
    component: MyUIPackagePage,
  });

});
