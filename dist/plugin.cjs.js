'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

class GooglePayIssuerWeb extends core.WebPlugin {
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
core.registerWebPlugin(GooglePayIssuer);

exports.GooglePayIssuer = GooglePayIssuer;
exports.GooglePayIssuerWeb = GooglePayIssuerWeb;
//# sourceMappingURL=plugin.cjs.js.map
