declare module "@capacitor/core" {
    interface PluginRegistry {
        GooglePayIssuer: GooglePayIssuerPlugin;
    }
}
export interface GooglePayIssuerPlugin {
    /**
    * returns the ID of the active wallet
    * @return {Promise<any>}
    */
    pushProvision(opc: string, tsp: string, clientName: string, lastDigits: string, address: object): Promise<any>;
    getActiveWalletID(): Promise<any>;
    getTokenStatus(tsp: string, tokenReferenceId: string): Promise<any>;
    getEnvironment(): Promise<any>;
    getStableHardwareId(): Promise<any>;
    listTokens(): Promise<any>;
}
