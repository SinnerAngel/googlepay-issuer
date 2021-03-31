import { WebPlugin } from '@capacitor/core';

import type { GooglePayIssuerPlugin } from './definitions';

export class GooglePayIssuerWeb extends WebPlugin implements GooglePayIssuerPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
