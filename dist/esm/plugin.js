import { registerWebPlugin, WebPlugin } from "@capacitor/core";
export class GooglePayIssuerWeb extends WebPlugin {
    async getActiveWalletID() {
        return GooglePayIssuer.getActiveWalletID();
    }
    async getTokenStatus(tsp, tokenReferenceId) {
        return GooglePayIssuer.getTokenStatus(tsp, tokenReferenceId);
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
registerWebPlugin(GooglePayIssuer);
//# sourceMappingURL=plugin.js.map