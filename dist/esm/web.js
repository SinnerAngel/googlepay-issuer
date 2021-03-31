import { WebPlugin } from '@capacitor/core';
export class GooglePayIssuerWeb extends WebPlugin {
    constructor() {
        super({
            name: 'GooglePayIssuerPlugin',
            platforms: ['web'],
        });
    }
    async getActiveWalletID() {
        return;
    }
    async getTokenStatus(tsp, tokenReferenceId) {
        console.log('tsp', tsp);
        console.log('tokenReferenceId', tokenReferenceId);
        return {
            tsp,
            tokenReferenceId
        };
    }
    async getEnvironment() {
        return;
    }
    async getStableHardwareId() {
        return;
    }
    async listTokens() {
        return;
    }
    async pushProvision(opc, tsp, clientName, lastDigits, address) {
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
        };
    }
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
}
const GooglePayIssuer = new GooglePayIssuerWeb();
export { GooglePayIssuer };
import { registerWebPlugin } from "@capacitor/core";
registerWebPlugin(GooglePayIssuer);
//# sourceMappingURL=web.js.map