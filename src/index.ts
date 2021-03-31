import { registerPlugin } from '@capacitor/core';

import type { GooglePayIssuerPlugin } from './definitions';

const GooglePayIssuer = registerPlugin<GooglePayIssuerPlugin>('GooglePayIssuer', {
  web: () => import('./web').then(m => new m.GooglePayIssuerWeb()),
});

export * from './definitions';
export { GooglePayIssuer };
