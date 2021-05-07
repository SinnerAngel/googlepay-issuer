declare module "@capacitor/core" {
    interface PluginRegistry {
        GooglePayIssuerPlugin: IGooglePayIssuerPlugin;
    }
}
export interface IGooglePayIssuer {
    /**
    * returns the ID of the active wallet
    * @return {Promise<any>}
    */
    getActiveWalletID(): Promise<any>;
    /**
    * returns the status of a token with a given token ID
    * @param tsp {string} Sets the TSP that should be used for the tokenization attempt (see TokenServiceProvider).
    * @param tokenReferenceId {string} token registered to the active wallet
    * @return {Promise<any>}
    */
    getTokenStatus(tsp: string, tokenReferenceId: string): Promise<any>;
    /**
    * returns the environment (e.g. production or sandbox)
    * @return {Promise<any>}
    */
    getEnvironment(): Promise<any>;
    /**
    * returns the stable hardware ID of the device
    * @return {Promise<any>}
    */
    getStableHardwareId(): Promise<any>;
    /**
    * returns a list of tokens registered to the active wallet
    * @return {Promise<any>}
    */
    listTokens(): Promise<any>;
    /**
    * Push Provisionig
    * @param opc {string} Sets Opaque Payment Card binary data.
    * @param tsp {string} Sets the TSP that should be used for the tokenization attempt (see TokenServiceProvider).
    * @param clientName {string} Sets the TSP that should be used for the tokenization attempt (see TokenServiceProvider).
    * @param lastDigits {string} Sets the TSP that should be used for the tokenization attempt (see TokenServiceProvider).
    * @param address {object} Sets the TSP that should be used for the tokenization attempt (see TokenServiceProvider).
    * @return {Promise<any>}
    */
    pushProvision(opc: string, tsp: string, clientName: string, lastDigits: string, address: any): Promise<any>;
}
export interface IGooglePayIssuerPlugin {
    /**
    * returns the ID of the active wallet
    * @return {Promise<any>}
    */
    getActiveWalletID(): Promise<any>;
    /**
    * returns the status of a token with a given token ID
    * @param tsp {string} Sets the TSP that should be used for the tokenization attempt (see TokenServiceProvider).
    * @param tokenReferenceId {string} token registered to the active wallet
    * @return {Promise<any>}
    */
    getTokenStatus(options: {
        tsp: string;
        tokenReferenceId: string;
    }): Promise<any>;
    /**
    * returns the environment (e.g. production or sandbox)
    * @return {Promise<any>}
    */
    getEnvironment(): Promise<any>;
    /**
    * returns the stable hardware ID of the device
    * @return {Promise<any>}
    */
    getStableHardwareId(): Promise<any>;
    /**
    * returns a list of tokens registered to the active wallet
    * @return {Promise<any>}
    */
    listTokens(): Promise<any>;
    /**
  * returns the status of a token with a given token ID
  * @param tsp {string} Sets the TSP that should be used for the tokenization attempt (see TokenServiceProvider).
  * @return {Promise<any>}
  */
    deleteToken(options: {
        tsp: string;
    }): Promise<any>;
    /**
  * returns the status of a token with a given token ID
  * @param tsp {string} Sets the TSP that should be used for the tokenization attempt (see TokenServiceProvider).
  * @param tokenReferenceId {string} token registered to the active wallet
  * @return {Promise<any>}
  */
    selectToken(options: {
        tsp: string;
    }): Promise<any>;
    /**
  * returns the status of a token with a given token ID
  * @return {Promise<any>}
  */
    registerDataChangedListener(): Promise<any>;
    /**
    *  Starts the push tokenization flow
    * @param opc {string} Sets Opaque Payment Card binary data.
    * @param tsp {string} Sets the TSP that should be used for the tokenization attempt (see TokenServiceProvider).
    * @param clientName {string} Sets the TSP that should be used for the tokenization attempt (see TokenServiceProvider).
    * @param lastDigits {string} Sets the TSP that should be used for the tokenization attempt (see TokenServiceProvider).
    * @param address {object} Sets the TSP that should be used for the tokenization attempt (see TokenServiceProvider).
    * @return {Promise<any>}
    */
    pushProvision(options: {
        opc: string;
        tsp: string;
        clientName: string;
        lastDigits: string;
        address: any;
    }): Promise<any>;
}
