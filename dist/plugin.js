var capacitorGooglePayIssuer = (function (exports, core) {
    'use strict';

    const { GooglePayIssuer } = core.Plugins;
    class GooglePayIssuerWeb {
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

    exports.GooglePayIssuer = GooglePayIssuer;
    exports.GooglePayIssuerWeb = GooglePayIssuerWeb;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
