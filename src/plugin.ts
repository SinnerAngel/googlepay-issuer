import { Plugins } from "@capacitor/core";
import { IGooglePayIssuer } from "./definitions";

const { GooglePayIssuerPlugin } = Plugins;

export class GooglePayIssuer implements IGooglePayIssuer {
    constructor() {}

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
    pushProvision(opc: string, tsp: string, clientName: string, lastDigits: string, address: object): Promise<any> {
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
