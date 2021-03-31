import { WebPlugin } from '@capacitor/core';
import type { GooglePayIssuerPlugin } from './definitions';
export declare class GooglePayIssuerWeb extends WebPlugin implements GooglePayIssuerPlugin {
    constructor();
    getActiveWalletID(): Promise<any>;
    getTokenStatus(tsp: string, tokenReferenceId: string): Promise<any>;
    getEnvironment(): Promise<any>;
    getStableHardwareId(): Promise<any>;
    listTokens(): Promise<any>;
    pushProvision(opc: string, tsp: string, clientName: string, lastDigits: string, address: object): Promise<any>;
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
declare const GooglePayIssuer: GooglePayIssuerWeb;
export { GooglePayIssuer };
