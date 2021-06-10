'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const { GooglePayIssuerPlugin } = core.Plugins;
class GooglePayIssuer {
    constructor() { }
    addListener() {
        return GooglePayIssuerPlugin.addListener;
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

exports.GooglePayIssuer = GooglePayIssuer;
//# sourceMappingURL=plugin.cjs.js.map
