import type { IGooglePayIssuer } from "./definitions";
export declare class GooglePayIssuer implements IGooglePayIssuer {
    constructor();
    addListener(): (eventName: "registerDataChangedListener", listenerFunc: (response: any) => void) => import("@capacitor/core").PluginListenerHandle;
    getActiveWalletID(): Promise<any>;
    getTokenStatus(tsp: string, tokenReferenceId: string): Promise<any>;
    getEnvironment(): Promise<any>;
    getStableHardwareId(): Promise<any>;
    listTokens(): Promise<any>;
    registerDataChangedListener(): Promise<any>;
    pushProvision(opc: string, tsp: string, clientName: string, lastDigits: string, address: any): Promise<any>;
}
