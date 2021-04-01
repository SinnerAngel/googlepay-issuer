import { registerWebPlugin, WebPlugin } from "@capacitor/core";
import { GooglePayIssuerPlugin } from './definitions';


export class GooglePayIssuerWeb  extends WebPlugin implements GooglePayIssuerPlugin {

    async getActiveWalletID(): Promise<any> {
        return GooglePayIssuer.getActiveWalletID();
    }

    async getTokenStatus(tsp: string, tokenReferenceId: string): Promise<any> {
        return GooglePayIssuer.getTokenStatus(tsp, tokenReferenceId);
    }

    async getEnvironment(): Promise<any> {
        return;
    }

    async getStableHardwareId(): Promise<any> {
        return;
    }

    async listTokens(): Promise<any> {
        return;
    }

    async pushProvision(opc: string, tsp: string, clientName: string, lastDigits: string, address: object): Promise<any> {
        console.log('opc', opc);
        console.log('tsp', tsp);
        console.log('clientName', clientName);
        console.log('lastDigits', lastDigits);
        console.log('address', address);
        return {
            opc,
            tsp,
            clientName,
            lastDigits,
            address,

        }
    }
    async echo(options: { value: string }): Promise<{ value: string }> {
        console.log('ECHO', options);
        return options;
    }
}
const GooglePayIssuer = new GooglePayIssuerWeb();

export { GooglePayIssuer };


registerWebPlugin(GooglePayIssuer);
