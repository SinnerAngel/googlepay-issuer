import type { GooglePayIssuerPlugin } from './definitions';
declare const GooglePayIssuer: GooglePayIssuerPlugin;
export declare class GooglePayIssuerWeb implements GooglePayIssuerPlugin {
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
export { GooglePayIssuer };
