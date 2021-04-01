import { Plugins } from "@capacitor/core";
import { GooglePayIssuerPlugin } from "./definitions";

const { GooglePayIssuer } = Plugins;

export class GooglePayIssuerIO implements GooglePayIssuerPlugin {
    constructor() {}

    getActiveWalletID(): Promise<any> {
        return GooglePayIssuer.getActiveWalletID();
    }
    getTokenStatus(tsp: string, tokenReferenceId: string): Promise<any> {
        const options = {
            tsp,
            tokenReferenceId
        }
        return GooglePayIssuer.getTokenStatus(options);
    }
    getEnvironment(): Promise<any> {
        return GooglePayIssuer.getEnvironment();
    }
    getStableHardwareId(): Promise<any> {
        return GooglePayIssuer.getStableHardwareId();
    }
    listTokens(): Promise<any> {
        return GooglePayIssuer.listTokens();
    }
    pushProvision(opc: string, tsp: string, clientName: string, lastDigits: string, address: object): Promise<any> {
        const options = {
            opc,
            tsp,
            clientName,
            lastDigits,
            address
        }
        return GooglePayIssuer.pushProvision(options);
    }
}
