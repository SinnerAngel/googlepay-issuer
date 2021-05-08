var GooglePayIssuerPlugin = (function (exports, core) {
    'use strict';

    const { GooglePayIssuerPlugin } = core.Plugins;
    class GooglePayIssuer {
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
        deleteToken(tsp, tokenReferenceId) {
            const options = {
                tsp,
                tokenReferenceId
            };
            return GooglePayIssuerPlugin.deleteToken(options);
        }
        selectToken(tsp, tokenReferenceId) {
            const options = {
                tsp,
                tokenReferenceId
            };
            return GooglePayIssuerPlugin.selectToken(options);
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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
