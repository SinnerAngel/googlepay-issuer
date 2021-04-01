import { GooglePayIssuerPlugin } from "./definitions";
export declare class GooglePayIssuerIO implements GooglePayIssuerPlugin {
    constructor();
    getActiveWalletID(): Promise<any>;
    getTokenStatus(tsp: string, tokenReferenceId: string): Promise<any>;
    getEnvironment(): Promise<any>;
    getStableHardwareId(): Promise<any>;
    listTokens(): Promise<any>;
    pushProvision(opc: string, tsp: string, clientName: string, lastDigits: string, address: object): Promise<any>;
}
