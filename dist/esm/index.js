import { registerPlugin } from '@capacitor/core';
const GooglePayIssuer = registerPlugin('GooglePayIssuer', {
    web: () => import('./web').then(m => new m.GooglePayIssuerWeb()),
});
export * from './definitions';
export { GooglePayIssuer };
//# sourceMappingURL=index.js.map