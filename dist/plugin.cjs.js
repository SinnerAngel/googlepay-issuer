'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const GooglePayIssuer = core.registerPlugin('GooglePayIssuer', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.GooglePayIssuerWeb()),
});

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

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    GooglePayIssuerWeb: GooglePayIssuerWeb
});

exports.GooglePayIssuer = GooglePayIssuer;
//# sourceMappingURL=plugin.cjs.js.map
