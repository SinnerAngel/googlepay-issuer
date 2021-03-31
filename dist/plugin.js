var capacitorGooglePayIssuer = (function (exports, core) {
    'use strict';

    class GooglePayIssuerWeb extends core.WebPlugin {
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
    core.registerWebPlugin(GooglePayIssuer);

    exports.GooglePayIssuer = GooglePayIssuer;
    exports.GooglePayIssuerWeb = GooglePayIssuerWeb;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
