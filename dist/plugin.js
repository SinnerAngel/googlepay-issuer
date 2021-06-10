var GooglePayIssuerPlugin = (function (exports, core) {
    'use strict';

    const { GooglePayIssuerPlugin } = core.Plugins;
    class GooglePayIssuer {
        constructor() { }
        addListener(eventName, listenerFunc) {
            GooglePayIssuerPlugin.registerDataChangedListener();
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

    exports.GooglePayIssuer = GooglePayIssuer;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
