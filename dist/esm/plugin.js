import { Plugins } from "@capacitor/core";
const { GooglePayIssuerPlugin } = Plugins;
export class GooglePayIssuer {
    getActiveWalletID() {
        return GooglePayIssuerPlugin.getActiveWalletID();
    }
    getTokenStatus(tsp, tokenReferenceId) {
        const options = {
            tsp,
            tokenReferenceId
        };
        return GooglePayIssuerPlugin.getTokenStatus(options);
    }
    getEnvironment() {
        return GooglePayIssuerPlugin.getEnvironment();
    }
    getStableHardwareId() {
        return GooglePayIssuerPlugin.getStableHardwareId();
    }
    listTokens() {
        return GooglePayIssuerPlugin.listTokens();
    }
    pushProvision(opc, tsp, clientName, lastDigits, address) {
        const options = {
            opc,
            tsp,
            clientName,
            lastDigits,
            address
        };
        return GooglePayIssuerPlugin.pushProvision(options);
    }
}
//# sourceMappingURL=plugin.js.map