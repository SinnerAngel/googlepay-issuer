import { Plugins } from "@capacitor/core";

import type { IGooglePayIssuer } from "./definitions";

const { GooglePayIssuerPlugin } = Plugins;

export class GooglePayIssuer implements IGooglePayIssuer {

    constructor() { }

    removeAllListeners() {
        GooglePayIssuerPlugin.removeAllListeners();
    };

    addListener(eventName: 'registerDataChangedListener', listenerFunc: (response: any) => void) {
        GooglePayIssuerPlugin.registerDataChangedListener();
        return GooglePayIssuerPlugin.addListener(eventName, (res: any) => {
            listenerFunc(res);
        });
    }

    getActiveWalletID(): Promise<any> {
        return GooglePayIssuerPlugin.getActiveWalletID();
    }
    getTokenStatus(tsp: string, tokenReferenceId: string): Promise<any> {
        const options = {
            tsp,
            tokenReferenceId
        }
        return GooglePayIssuerPlugin.getTokenStatus(options);
    }
    getEnvironment(): Promise<any> {
        return GooglePayIssuerPlugin.getEnvironment();
    }
    getStableHardwareId(): Promise<any> {
        return GooglePayIssuerPlugin.getStableHardwareId();
    }
    listTokens(): Promise<any> {
        return GooglePayIssuerPlugin.listTokens();
    }
    registerDataChangedListener(): Promise<any> {
        return GooglePayIssuerPlugin.registerDataChangedListener();
    }
    pushProvision(opc: string, tsp: string, clientName: string, lastDigits: string, address: any): Promise<any> {
        const options = {
            opc,
            tsp,
            clientName,
            lastDigits,
            address
        }
        return GooglePayIssuerPlugin.pushProvision(options);
    }
}
