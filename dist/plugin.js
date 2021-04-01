var capacitorGooglePayIssuer = (function (exports, core) {
    'use strict';

    const { GooglePayIssuer } = core.Plugins;
    class GooglePayIssuerIO {
        constructor() { }
        getActiveWalletID() {
            return GooglePayIssuer.getActiveWalletID();
        }
        getTokenStatus(tsp, tokenReferenceId) {
            const options = {
                tsp,
                tokenReferenceId
            };
            return GooglePayIssuer.getTokenStatus(options);
        }
        getEnvironment() {
            return GooglePayIssuer.getEnvironment();
        }
        getStableHardwareId() {
            return GooglePayIssuer.getStableHardwareId();
        }
        listTokens() {
            return GooglePayIssuer.listTokens();
        }
        pushProvision(opc, tsp, clientName, lastDigits, address) {
            const options = {
                opc,
                tsp,
                clientName,
                lastDigits,
                address
            };
            return GooglePayIssuer.pushProvision(options);
        }
    }

    exports.GooglePayIssuerIO = GooglePayIssuerIO;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
