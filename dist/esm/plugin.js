import { Plugins } from "@capacitor/core";
const { GooglePayIssuerPlugin } = Plugins;
export class GooglePayIssuer {
    constructor() { }
    addListener(eventName, listenerFunc) {
        return GooglePayIssuerPlugin.addListener(eventName, (res) => {
            listenerFunc(res);
        });
    }
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
    registerDataChangedListener() {
        return GooglePayIssuerPlugin.registerDataChangedListener();
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