// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ShInH":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _ = require("./views/partials/");
var _layoutHbs = require("./views/layouts/layout.hbs");
var _layoutHbsDefault = parcelHelpers.interopDefault(_layoutHbs);
var _atorizationRegistrationHbs = require("./views/layouts/atorization_registration.hbs");
var _atorizationRegistrationHbsDefault = parcelHelpers.interopDefault(_atorizationRegistrationHbs);
var _errorHbs = require("./views/layouts/error.hbs");
var _errorHbsDefault = parcelHelpers.interopDefault(_errorHbs);
var _chatsHbs = require("./views/layouts/chats.hbs");
var _chatsHbsDefault = parcelHelpers.interopDefault(_chatsHbs);
var _profileHbs = require("./views/layouts/profile.hbs");
var _profileHbsDefault = parcelHelpers.interopDefault(_profileHbs);
var _profileChangeInfoHbs = require("./views/layouts/profile-change-info.hbs");
var _profileChangeInfoHbsDefault = parcelHelpers.interopDefault(_profileChangeInfoHbs);
var _chatsCss = require("./views/layouts/chats.css");
var _profileCss = require("./views/layouts/profile.css");
var _fileImgJpg = require("./views/images/file-img.jpg");
var _fileImgJpgDefault = parcelHelpers.interopDefault(_fileImgJpg);
var _toRightAngleSvg = require("./views/images/to-right-angle.svg");
var _toRightAngleSvgDefault = parcelHelpers.interopDefault(_toRightAngleSvg);
var _lupaSvg = require("./views/images/lupa.svg");
var _lupaSvgDefault = parcelHelpers.interopDefault(_lupaSvg);
window.addEventListener("DOMContentLoaded", ()=>{
    const root = document.querySelector("#root");
    const body = document.querySelector("#body");
    root.innerHTML = (0, _layoutHbsDefault.default)();
    if (window.location.pathname === "/404") body.innerHTML = (0, _errorHbsDefault.default)({
        error_code: "404",
        error_message: "Не туда попали"
    });
    else if (window.location.pathname === "/500") body.innerHTML = (0, _errorHbsDefault.default)({
        error_code: "500",
        error_message: "Уже чиним"
    });
    else if (window.location.pathname === "/login") body.innerHTML = (0, _atorizationRegistrationHbsDefault.default)({
        title: "Вход",
        reg_auth_button_title: "Авторизоваться",
        reg_auth_link_title: "Нет аккаунта?",
        reg_auth_link: "registration"
    });
    else if (window.location.pathname === "/registration") {
        body.innerHTML = (0, _atorizationRegistrationHbsDefault.default)({
            registration: true,
            title: "Регистрация",
            reg_auth_button_title: "Зарегистрироваться",
            reg_auth_link_title: "Войти",
            reg_auth_link: "login"
        });
        const reg_form = document.getElementsByTagName("form");
        reg_form[0].style.height = "auto";
    } else if (window.location.pathname === "/chats") body.innerHTML = (0, _chatsHbsDefault.default)({
        file_img: (0, _fileImgJpgDefault.default),
        to_right_angle_svg: (0, _toRightAngleSvgDefault.default)
    });
    else if (window.location.pathname === "/profile") body.innerHTML = (0, _profileHbsDefault.default)();
    else if (window.location.pathname === "/profile-change-data") body.innerHTML = (0, _profileChangeInfoHbsDefault.default)();
    else if (window.location.pathname === "/profile-change-pass") body.innerHTML = (0, _profileChangeInfoHbsDefault.default)({
        change_pass: true
    });
    else if (window.location.pathname === "/profile-new-ava-modal-choose-file") body.innerHTML = (0, _profileHbsDefault.default)({
        change_ava: true
    });
    else body.innerHTML = (0, _atorizationRegistrationHbsDefault.default)({
        title: "Вход",
        reg_auth_button_title: "Авторизоваться",
        reg_auth_link_title: "Нет аккаунта?",
        reg_auth_link: "registration"
    });
});

},{"./views/layouts/layout.hbs":"3nU9z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./views/partials/":"2fPOx","./views/layouts/error.hbs":"2RRt6","./views/layouts/chats.hbs":"isot7","./views/images/file-img.jpg":"aHAdS","./views/images/to-right-angle.svg":"8Xa51","./views/images/lupa.svg":"5J09N","./views/layouts/profile.hbs":"6gUru","./views/layouts/profile-change-info.hbs":"dg6Pb","./views/layouts/atorization_registration.hbs":"c6EAB","./views/layouts/profile.css":"l9W8a","./views/layouts/chats.css":"2qg8i"}],"3nU9z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return (stack1 = container.invokePartial(lookupProperty(partials, "menu"), depth0, {
            "name": "menu",
            "data": data,
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "";
    },
    "usePartial": true,
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b7ZpO":[function(require,module,exports) {
/**!

 @license
 handlebars v4.7.7

Copyright (C) 2011-2019 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/ (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
})(this, function() {
    return /******/ function(modules) {
        /******/ // The module cache
        /******/ var installedModules = {};
        /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId]) /******/ return installedModules[moduleId].exports;
            /******/ // Create a new module (and put it into the cache)
            /******/ var module1 = installedModules[moduleId] = {
                /******/ exports: {},
                /******/ id: moduleId,
                /******/ loaded: false
            };
            /******/ // Execute the module function
            /******/ modules[moduleId].call(module1.exports, module1, module1.exports, __webpack_require__);
            /******/ // Flag the module as loaded
            /******/ module1.loaded = true;
            /******/ // Return the exports of the module
            /******/ return module1.exports;
        /******/ }
        /******/ // expose the modules object (__webpack_modules__)
        /******/ __webpack_require__.m = modules;
        /******/ // expose the module cache
        /******/ __webpack_require__.c = installedModules;
        /******/ // __webpack_public_path__
        /******/ __webpack_require__.p = "";
        /******/ // Load entry module and return exports
        /******/ return __webpack_require__(0);
    /******/ }([
        /* 0 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _interopRequireWildcard = __webpack_require__(1)["default"];
            var _interopRequireDefault = __webpack_require__(2)["default"];
            exports.__esModule = true;
            var _handlebarsBase = __webpack_require__(3);
            var base = _interopRequireWildcard(_handlebarsBase);
            // Each of these augment the Handlebars object. No need to setup here.
            // (This is done to easily share code between commonjs and browse envs)
            var _handlebarsSafeString = __webpack_require__(36);
            var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);
            var _handlebarsException = __webpack_require__(5);
            var _handlebarsException2 = _interopRequireDefault(_handlebarsException);
            var _handlebarsUtils = __webpack_require__(4);
            var Utils = _interopRequireWildcard(_handlebarsUtils);
            var _handlebarsRuntime = __webpack_require__(37);
            var runtime = _interopRequireWildcard(_handlebarsRuntime);
            var _handlebarsNoConflict = __webpack_require__(43);
            var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);
            // For compatibility and usage outside of module systems, make the Handlebars object a namespace
            function create() {
                var hb = new base.HandlebarsEnvironment();
                Utils.extend(hb, base);
                hb.SafeString = _handlebarsSafeString2["default"];
                hb.Exception = _handlebarsException2["default"];
                hb.Utils = Utils;
                hb.escapeExpression = Utils.escapeExpression;
                hb.VM = runtime;
                hb.template = function(spec) {
                    return runtime.template(spec, hb);
                };
                return hb;
            }
            var inst = create();
            inst.create = create;
            _handlebarsNoConflict2["default"](inst);
            inst["default"] = inst;
            exports["default"] = inst;
            module1.exports = exports["default"];
        /***/ },
        /* 1 */ /***/ function(module1, exports) {
            "use strict";
            exports["default"] = function(obj) {
                if (obj && obj.__esModule) return obj;
                else {
                    var newObj = {};
                    if (obj != null) {
                        for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                    }
                    newObj["default"] = obj;
                    return newObj;
                }
            };
            exports.__esModule = true;
        /***/ },
        /* 2 */ /***/ function(module1, exports) {
            "use strict";
            exports["default"] = function(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                };
            };
            exports.__esModule = true;
        /***/ },
        /* 3 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(2)["default"];
            exports.__esModule = true;
            exports.HandlebarsEnvironment = HandlebarsEnvironment;
            var _utils = __webpack_require__(4);
            var _exception = __webpack_require__(5);
            var _exception2 = _interopRequireDefault(_exception);
            var _helpers = __webpack_require__(9);
            var _decorators = __webpack_require__(29);
            var _logger = __webpack_require__(31);
            var _logger2 = _interopRequireDefault(_logger);
            var _internalProtoAccess = __webpack_require__(32);
            var VERSION = "4.7.7";
            exports.VERSION = VERSION;
            var COMPILER_REVISION = 8;
            exports.COMPILER_REVISION = COMPILER_REVISION;
            var LAST_COMPATIBLE_COMPILER_REVISION = 7;
            exports.LAST_COMPATIBLE_COMPILER_REVISION = LAST_COMPATIBLE_COMPILER_REVISION;
            var REVISION_CHANGES = {
                1: "<= 1.0.rc.2",
                2: "== 1.0.0-rc.3",
                3: "== 1.0.0-rc.4",
                4: "== 1.x.x",
                5: "== 2.0.0-alpha.x",
                6: ">= 2.0.0-beta.1",
                7: ">= 4.0.0 <4.3.0",
                8: ">= 4.3.0"
            };
            exports.REVISION_CHANGES = REVISION_CHANGES;
            var objectType = "[object Object]";
            function HandlebarsEnvironment(helpers, partials, decorators) {
                this.helpers = helpers || {};
                this.partials = partials || {};
                this.decorators = decorators || {};
                _helpers.registerDefaultHelpers(this);
                _decorators.registerDefaultDecorators(this);
            }
            HandlebarsEnvironment.prototype = {
                constructor: HandlebarsEnvironment,
                logger: _logger2["default"],
                log: _logger2["default"].log,
                registerHelper: function registerHelper(name, fn) {
                    if (_utils.toString.call(name) === objectType) {
                        if (fn) throw new _exception2["default"]("Arg not supported with multiple helpers");
                        _utils.extend(this.helpers, name);
                    } else this.helpers[name] = fn;
                },
                unregisterHelper: function unregisterHelper(name) {
                    delete this.helpers[name];
                },
                registerPartial: function registerPartial(name, partial) {
                    if (_utils.toString.call(name) === objectType) _utils.extend(this.partials, name);
                    else {
                        if (typeof partial === "undefined") throw new _exception2["default"]('Attempting to register a partial called "' + name + '" as undefined');
                        this.partials[name] = partial;
                    }
                },
                unregisterPartial: function unregisterPartial(name) {
                    delete this.partials[name];
                },
                registerDecorator: function registerDecorator(name, fn) {
                    if (_utils.toString.call(name) === objectType) {
                        if (fn) throw new _exception2["default"]("Arg not supported with multiple decorators");
                        _utils.extend(this.decorators, name);
                    } else this.decorators[name] = fn;
                },
                unregisterDecorator: function unregisterDecorator(name) {
                    delete this.decorators[name];
                },
                /**
	   * Reset the memory of illegal property accesses that have already been logged.
	   * @deprecated should only be used in handlebars test-cases
	   */ resetLoggedPropertyAccesses: function resetLoggedPropertyAccesses() {
                    _internalProtoAccess.resetLoggedProperties();
                }
            };
            var log = _logger2["default"].log;
            exports.log = log;
            exports.createFrame = _utils.createFrame;
            exports.logger = _logger2["default"];
        /***/ },
        /* 4 */ /***/ function(module1, exports) {
            "use strict";
            exports.__esModule = true;
            exports.extend = extend;
            exports.indexOf = indexOf;
            exports.escapeExpression = escapeExpression;
            exports.isEmpty = isEmpty;
            exports.createFrame = createFrame;
            exports.blockParams = blockParams;
            exports.appendContextPath = appendContextPath;
            var escape = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;",
                "=": "&#x3D;"
            };
            var badChars = /[&<>"'`=]/g, possible = /[&<>"'`=]/;
            function escapeChar(chr) {
                return escape[chr];
            }
            function extend(obj /* , ...source */ ) {
                for(var i = 1; i < arguments.length; i++){
                    for(var key in arguments[i])if (Object.prototype.hasOwnProperty.call(arguments[i], key)) obj[key] = arguments[i][key];
                }
                return obj;
            }
            var toString = Object.prototype.toString;
            exports.toString = toString;
            // Sourced from lodash
            // https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
            /* eslint-disable func-style */ var isFunction = function isFunction(value) {
                return typeof value === "function";
            };
            // fallback for older versions of Chrome and Safari
            /* istanbul ignore next */ if (isFunction(/x/)) exports.isFunction = isFunction = function(value) {
                return typeof value === "function" && toString.call(value) === "[object Function]";
            };
            exports.isFunction = isFunction;
            /* eslint-enable func-style */ /* istanbul ignore next */ var isArray = Array.isArray || function(value) {
                return value && typeof value === "object" ? toString.call(value) === "[object Array]" : false;
            };
            exports.isArray = isArray;
            // Older IE versions do not directly support indexOf so we must implement our own, sadly.
            function indexOf(array, value) {
                for(var i = 0, len = array.length; i < len; i++){
                    if (array[i] === value) return i;
                }
                return -1;
            }
            function escapeExpression(string) {
                if (typeof string !== "string") {
                    // don't escape SafeStrings, since they're already safe
                    if (string && string.toHTML) return string.toHTML();
                    else if (string == null) return "";
                    else if (!string) return string + "";
                    // Force a string conversion as this will be done by the append regardless and
                    // the regex test will do this transparently behind the scenes, causing issues if
                    // an object's to string has escaped characters in it.
                    string = "" + string;
                }
                if (!possible.test(string)) return string;
                return string.replace(badChars, escapeChar);
            }
            function isEmpty(value) {
                if (!value && value !== 0) return true;
                else if (isArray(value) && value.length === 0) return true;
                else return false;
            }
            function createFrame(object) {
                var frame = extend({}, object);
                frame._parent = object;
                return frame;
            }
            function blockParams(params, ids) {
                params.path = ids;
                return params;
            }
            function appendContextPath(contextPath, id) {
                return (contextPath ? contextPath + "." : "") + id;
            }
        /***/ },
        /* 5 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _Object$defineProperty = __webpack_require__(6)["default"];
            exports.__esModule = true;
            var errorProps = [
                "description",
                "fileName",
                "lineNumber",
                "endLineNumber",
                "message",
                "name",
                "number",
                "stack"
            ];
            function Exception(message, node) {
                var loc = node && node.loc, line = undefined, endLineNumber = undefined, column = undefined, endColumn = undefined;
                if (loc) {
                    line = loc.start.line;
                    endLineNumber = loc.end.line;
                    column = loc.start.column;
                    endColumn = loc.end.column;
                    message += " - " + line + ":" + column;
                }
                var tmp = Error.prototype.constructor.call(this, message);
                // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
                for(var idx = 0; idx < errorProps.length; idx++)this[errorProps[idx]] = tmp[errorProps[idx]];
                /* istanbul ignore else */ if (Error.captureStackTrace) Error.captureStackTrace(this, Exception);
                try {
                    if (loc) {
                        this.lineNumber = line;
                        this.endLineNumber = endLineNumber;
                        // Work around issue under safari where we can't directly set the column value
                        /* istanbul ignore next */ if (_Object$defineProperty) {
                            Object.defineProperty(this, "column", {
                                value: column,
                                enumerable: true
                            });
                            Object.defineProperty(this, "endColumn", {
                                value: endColumn,
                                enumerable: true
                            });
                        } else {
                            this.column = column;
                            this.endColumn = endColumn;
                        }
                    }
                } catch (nop) {
                /* Ignore if the browser is very particular */ }
            }
            Exception.prototype = new Error();
            exports["default"] = Exception;
            module1.exports = exports["default"];
        /***/ },
        /* 6 */ /***/ function(module1, exports, __webpack_require__) {
            module1.exports = {
                "default": __webpack_require__(7),
                __esModule: true
            };
        /***/ },
        /* 7 */ /***/ function(module1, exports, __webpack_require__) {
            var $ = __webpack_require__(8);
            module1.exports = function defineProperty(it, key, desc) {
                return $.setDesc(it, key, desc);
            };
        /***/ },
        /* 8 */ /***/ function(module1, exports) {
            var $Object = Object;
            module1.exports = {
                create: $Object.create,
                getProto: $Object.getPrototypeOf,
                isEnum: ({}).propertyIsEnumerable,
                getDesc: $Object.getOwnPropertyDescriptor,
                setDesc: $Object.defineProperty,
                setDescs: $Object.defineProperties,
                getKeys: $Object.keys,
                getNames: $Object.getOwnPropertyNames,
                getSymbols: $Object.getOwnPropertySymbols,
                each: [].forEach
            };
        /***/ },
        /* 9 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(2)["default"];
            exports.__esModule = true;
            exports.registerDefaultHelpers = registerDefaultHelpers;
            exports.moveHelperToHooks = moveHelperToHooks;
            var _helpersBlockHelperMissing = __webpack_require__(10);
            var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);
            var _helpersEach = __webpack_require__(11);
            var _helpersEach2 = _interopRequireDefault(_helpersEach);
            var _helpersHelperMissing = __webpack_require__(24);
            var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);
            var _helpersIf = __webpack_require__(25);
            var _helpersIf2 = _interopRequireDefault(_helpersIf);
            var _helpersLog = __webpack_require__(26);
            var _helpersLog2 = _interopRequireDefault(_helpersLog);
            var _helpersLookup = __webpack_require__(27);
            var _helpersLookup2 = _interopRequireDefault(_helpersLookup);
            var _helpersWith = __webpack_require__(28);
            var _helpersWith2 = _interopRequireDefault(_helpersWith);
            function registerDefaultHelpers(instance) {
                _helpersBlockHelperMissing2["default"](instance);
                _helpersEach2["default"](instance);
                _helpersHelperMissing2["default"](instance);
                _helpersIf2["default"](instance);
                _helpersLog2["default"](instance);
                _helpersLookup2["default"](instance);
                _helpersWith2["default"](instance);
            }
            function moveHelperToHooks(instance, helperName, keepHelper) {
                if (instance.helpers[helperName]) {
                    instance.hooks[helperName] = instance.helpers[helperName];
                    if (!keepHelper) delete instance.helpers[helperName];
                }
            }
        /***/ },
        /* 10 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            var _utils = __webpack_require__(4);
            exports["default"] = function(instance) {
                instance.registerHelper("blockHelperMissing", function(context, options) {
                    var inverse = options.inverse, fn = options.fn;
                    if (context === true) return fn(this);
                    else if (context === false || context == null) return inverse(this);
                    else if (_utils.isArray(context)) {
                        if (context.length > 0) {
                            if (options.ids) options.ids = [
                                options.name
                            ];
                            return instance.helpers.each(context, options);
                        } else return inverse(this);
                    } else {
                        if (options.data && options.ids) {
                            var data = _utils.createFrame(options.data);
                            data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
                            options = {
                                data: data
                            };
                        }
                        return fn(context, options);
                    }
                });
            };
            module1.exports = exports["default"];
        /***/ },
        /* 11 */ /***/ function(module1, exports, __webpack_require__) {
            /* WEBPACK VAR INJECTION */ (function(global) {
                "use strict";
                var _Object$keys = __webpack_require__(12)["default"];
                var _interopRequireDefault = __webpack_require__(2)["default"];
                exports.__esModule = true;
                var _utils = __webpack_require__(4);
                var _exception = __webpack_require__(5);
                var _exception2 = _interopRequireDefault(_exception);
                exports["default"] = function(instance) {
                    instance.registerHelper("each", function(context, options) {
                        if (!options) throw new _exception2["default"]("Must pass iterator to #each");
                        var fn = options.fn, inverse = options.inverse, i = 0, ret = "", data = undefined, contextPath = undefined;
                        if (options.data && options.ids) contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + ".";
                        if (_utils.isFunction(context)) context = context.call(this);
                        if (options.data) data = _utils.createFrame(options.data);
                        function execIteration(field, index, last) {
                            if (data) {
                                data.key = field;
                                data.index = index;
                                data.first = index === 0;
                                data.last = !!last;
                                if (contextPath) data.contextPath = contextPath + field;
                            }
                            ret = ret + fn(context[field], {
                                data: data,
                                blockParams: _utils.blockParams([
                                    context[field],
                                    field
                                ], [
                                    contextPath + field,
                                    null
                                ])
                            });
                        }
                        if (context && typeof context === "object") {
                            if (_utils.isArray(context)) {
                                for(var j = context.length; i < j; i++)if (i in context) execIteration(i, i, i === context.length - 1);
                            } else if (global.Symbol && context[global.Symbol.iterator]) {
                                var newContext = [];
                                var iterator = context[global.Symbol.iterator]();
                                for(var it = iterator.next(); !it.done; it = iterator.next())newContext.push(it.value);
                                context = newContext;
                                for(var j = context.length; i < j; i++)execIteration(i, i, i === context.length - 1);
                            } else (function() {
                                var priorKey = undefined;
                                _Object$keys(context).forEach(function(key) {
                                    // We're running the iterations one step out of sync so we can detect
                                    // the last iteration without have to scan the object twice and create
                                    // an itermediate keys array.
                                    if (priorKey !== undefined) execIteration(priorKey, i - 1);
                                    priorKey = key;
                                    i++;
                                });
                                if (priorKey !== undefined) execIteration(priorKey, i - 1, true);
                            })();
                        }
                        if (i === 0) ret = inverse(this);
                        return ret;
                    });
                };
                module1.exports = exports["default"];
            /* WEBPACK VAR INJECTION */ }).call(exports, function() {
                return this;
            }());
        /***/ },
        /* 12 */ /***/ function(module1, exports, __webpack_require__) {
            module1.exports = {
                "default": __webpack_require__(13),
                __esModule: true
            };
        /***/ },
        /* 13 */ /***/ function(module1, exports, __webpack_require__) {
            __webpack_require__(14);
            module1.exports = __webpack_require__(20).Object.keys;
        /***/ },
        /* 14 */ /***/ function(module1, exports, __webpack_require__) {
            // 19.1.2.14 Object.keys(O)
            var toObject = __webpack_require__(15);
            __webpack_require__(17)("keys", function($keys) {
                return function keys(it) {
                    return $keys(toObject(it));
                };
            });
        /***/ },
        /* 15 */ /***/ function(module1, exports, __webpack_require__) {
            // 7.1.13 ToObject(argument)
            var defined = __webpack_require__(16);
            module1.exports = function(it) {
                return Object(defined(it));
            };
        /***/ },
        /* 16 */ /***/ function(module1, exports) {
            // 7.2.1 RequireObjectCoercible(argument)
            module1.exports = function(it) {
                if (it == undefined) throw TypeError("Can't call method on  " + it);
                return it;
            };
        /***/ },
        /* 17 */ /***/ function(module1, exports, __webpack_require__) {
            // most Object methods by ES6 should accept primitives
            var $export = __webpack_require__(18), core = __webpack_require__(20), fails = __webpack_require__(23);
            module1.exports = function(KEY, exec) {
                var fn = (core.Object || {})[KEY] || Object[KEY], exp = {};
                exp[KEY] = exec(fn);
                $export($export.S + $export.F * fails(function() {
                    fn(1);
                }), "Object", exp);
            };
        /***/ },
        /* 18 */ /***/ function(module1, exports, __webpack_require__) {
            var global = __webpack_require__(19), core = __webpack_require__(20), ctx = __webpack_require__(21), PROTOTYPE = "prototype";
            var $export = function(type, name, source) {
                var IS_FORCED = type & $export.F, IS_GLOBAL = type & $export.G, IS_STATIC = type & $export.S, IS_PROTO = type & $export.P, IS_BIND = type & $export.B, IS_WRAP = type & $export.W, exports = IS_GLOBAL ? core : core[name] || (core[name] = {}), target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE], key, own, out;
                if (IS_GLOBAL) source = name;
                for(key in source){
                    // contains in native
                    own = !IS_FORCED && target && key in target;
                    if (own && key in exports) continue;
                    // export native or passed
                    out = own ? target[key] : source[key];
                    // prevent global pollution for namespaces
                    exports[key] = IS_GLOBAL && typeof target[key] != "function" ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function(C) {
                        var F = function(param) {
                            return this instanceof C ? new C(param) : C(param);
                        };
                        F[PROTOTYPE] = C[PROTOTYPE];
                        return F;
                    // make static versions for prototype methods
                    }(out) : IS_PROTO && typeof out == "function" ? ctx(Function.call, out) : out;
                    if (IS_PROTO) (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
                }
            };
            // type bitmap
            $export.F = 1; // forced
            $export.G = 2; // global
            $export.S = 4; // static
            $export.P = 8; // proto
            $export.B = 16; // bind
            $export.W = 32; // wrap
            module1.exports = $export;
        /***/ },
        /* 19 */ /***/ function(module1, exports) {
            // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
            var global = module1.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
            if (typeof __g == "number") __g = global; // eslint-disable-line no-undef
        /***/ },
        /* 20 */ /***/ function(module1, exports) {
            var core = module1.exports = {
                version: "1.2.6"
            };
            if (typeof __e == "number") __e = core; // eslint-disable-line no-undef
        /***/ },
        /* 21 */ /***/ function(module1, exports, __webpack_require__) {
            // optional / simple context binding
            var aFunction = __webpack_require__(22);
            module1.exports = function(fn, that, length) {
                aFunction(fn);
                if (that === undefined) return fn;
                switch(length){
                    case 1:
                        return function(a) {
                            return fn.call(that, a);
                        };
                    case 2:
                        return function(a, b) {
                            return fn.call(that, a, b);
                        };
                    case 3:
                        return function(a, b, c) {
                            return fn.call(that, a, b, c);
                        };
                }
                return function() {
                    return fn.apply(that, arguments);
                };
            };
        /***/ },
        /* 22 */ /***/ function(module1, exports) {
            module1.exports = function(it) {
                if (typeof it != "function") throw TypeError(it + " is not a function!");
                return it;
            };
        /***/ },
        /* 23 */ /***/ function(module1, exports) {
            module1.exports = function(exec) {
                try {
                    return !!exec();
                } catch (e) {
                    return true;
                }
            };
        /***/ },
        /* 24 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(2)["default"];
            exports.__esModule = true;
            var _exception = __webpack_require__(5);
            var _exception2 = _interopRequireDefault(_exception);
            exports["default"] = function(instance) {
                instance.registerHelper("helperMissing", function() /* [args, ]options */ {
                    if (arguments.length === 1) // A missing field in a {{foo}} construct.
                    return undefined;
                    else // Someone is actually trying to call something, blow up.
                    throw new _exception2["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"');
                });
            };
            module1.exports = exports["default"];
        /***/ },
        /* 25 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(2)["default"];
            exports.__esModule = true;
            var _utils = __webpack_require__(4);
            var _exception = __webpack_require__(5);
            var _exception2 = _interopRequireDefault(_exception);
            exports["default"] = function(instance) {
                instance.registerHelper("if", function(conditional, options) {
                    if (arguments.length != 2) throw new _exception2["default"]("#if requires exactly one argument");
                    if (_utils.isFunction(conditional)) conditional = conditional.call(this);
                    // Default behavior is to render the positive path if the value is truthy and not empty.
                    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
                    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
                    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) return options.inverse(this);
                    else return options.fn(this);
                });
                instance.registerHelper("unless", function(conditional, options) {
                    if (arguments.length != 2) throw new _exception2["default"]("#unless requires exactly one argument");
                    return instance.helpers["if"].call(this, conditional, {
                        fn: options.inverse,
                        inverse: options.fn,
                        hash: options.hash
                    });
                });
            };
            module1.exports = exports["default"];
        /***/ },
        /* 26 */ /***/ function(module1, exports) {
            "use strict";
            exports.__esModule = true;
            exports["default"] = function(instance) {
                instance.registerHelper("log", function() /* message, options */ {
                    var args = [
                        undefined
                    ], options = arguments[arguments.length - 1];
                    for(var i = 0; i < arguments.length - 1; i++)args.push(arguments[i]);
                    var level = 1;
                    if (options.hash.level != null) level = options.hash.level;
                    else if (options.data && options.data.level != null) level = options.data.level;
                    args[0] = level;
                    instance.log.apply(instance, args);
                });
            };
            module1.exports = exports["default"];
        /***/ },
        /* 27 */ /***/ function(module1, exports) {
            "use strict";
            exports.__esModule = true;
            exports["default"] = function(instance) {
                instance.registerHelper("lookup", function(obj, field, options) {
                    if (!obj) // Note for 5.0: Change to "obj == null" in 5.0
                    return obj;
                    return options.lookupProperty(obj, field);
                });
            };
            module1.exports = exports["default"];
        /***/ },
        /* 28 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(2)["default"];
            exports.__esModule = true;
            var _utils = __webpack_require__(4);
            var _exception = __webpack_require__(5);
            var _exception2 = _interopRequireDefault(_exception);
            exports["default"] = function(instance) {
                instance.registerHelper("with", function(context, options) {
                    if (arguments.length != 2) throw new _exception2["default"]("#with requires exactly one argument");
                    if (_utils.isFunction(context)) context = context.call(this);
                    var fn = options.fn;
                    if (!_utils.isEmpty(context)) {
                        var data = options.data;
                        if (options.data && options.ids) {
                            data = _utils.createFrame(options.data);
                            data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
                        }
                        return fn(context, {
                            data: data,
                            blockParams: _utils.blockParams([
                                context
                            ], [
                                data && data.contextPath
                            ])
                        });
                    } else return options.inverse(this);
                });
            };
            module1.exports = exports["default"];
        /***/ },
        /* 29 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(2)["default"];
            exports.__esModule = true;
            exports.registerDefaultDecorators = registerDefaultDecorators;
            var _decoratorsInline = __webpack_require__(30);
            var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);
            function registerDefaultDecorators(instance) {
                _decoratorsInline2["default"](instance);
            }
        /***/ },
        /* 30 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            var _utils = __webpack_require__(4);
            exports["default"] = function(instance) {
                instance.registerDecorator("inline", function(fn, props, container, options) {
                    var ret = fn;
                    if (!props.partials) {
                        props.partials = {};
                        ret = function(context, options) {
                            // Create a new partials stack frame prior to exec.
                            var original = container.partials;
                            container.partials = _utils.extend({}, original, props.partials);
                            var ret = fn(context, options);
                            container.partials = original;
                            return ret;
                        };
                    }
                    props.partials[options.args[0]] = options.fn;
                    return ret;
                });
            };
            module1.exports = exports["default"];
        /***/ },
        /* 31 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            var _utils = __webpack_require__(4);
            var logger = {
                methodMap: [
                    "debug",
                    "info",
                    "warn",
                    "error"
                ],
                level: "info",
                // Maps a given level value to the `methodMap` indexes above.
                lookupLevel: function lookupLevel(level) {
                    if (typeof level === "string") {
                        var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
                        if (levelMap >= 0) level = levelMap;
                        else level = parseInt(level, 10);
                    }
                    return level;
                },
                // Can be overridden in the host environment
                log: function log(level) {
                    level = logger.lookupLevel(level);
                    if (typeof console !== "undefined" && logger.lookupLevel(logger.level) <= level) {
                        var method = logger.methodMap[level];
                        // eslint-disable-next-line no-console
                        if (!console[method]) method = "log";
                        for(var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)message[_key - 1] = arguments[_key];
                        console[method].apply(console, message); // eslint-disable-line no-console
                    }
                }
            };
            exports["default"] = logger;
            module1.exports = exports["default"];
        /***/ },
        /* 32 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _Object$create = __webpack_require__(33)["default"];
            var _Object$keys = __webpack_require__(12)["default"];
            var _interopRequireWildcard = __webpack_require__(1)["default"];
            exports.__esModule = true;
            exports.createProtoAccessControl = createProtoAccessControl;
            exports.resultIsAllowed = resultIsAllowed;
            exports.resetLoggedProperties = resetLoggedProperties;
            var _createNewLookupObject = __webpack_require__(35);
            var _logger = __webpack_require__(31);
            var logger = _interopRequireWildcard(_logger);
            var loggedProperties = _Object$create(null);
            function createProtoAccessControl(runtimeOptions) {
                var defaultMethodWhiteList = _Object$create(null);
                defaultMethodWhiteList["constructor"] = false;
                defaultMethodWhiteList["__defineGetter__"] = false;
                defaultMethodWhiteList["__defineSetter__"] = false;
                defaultMethodWhiteList["__lookupGetter__"] = false;
                var defaultPropertyWhiteList = _Object$create(null);
                // eslint-disable-next-line no-proto
                defaultPropertyWhiteList["__proto__"] = false;
                return {
                    properties: {
                        whitelist: _createNewLookupObject.createNewLookupObject(defaultPropertyWhiteList, runtimeOptions.allowedProtoProperties),
                        defaultValue: runtimeOptions.allowProtoPropertiesByDefault
                    },
                    methods: {
                        whitelist: _createNewLookupObject.createNewLookupObject(defaultMethodWhiteList, runtimeOptions.allowedProtoMethods),
                        defaultValue: runtimeOptions.allowProtoMethodsByDefault
                    }
                };
            }
            function resultIsAllowed(result, protoAccessControl, propertyName) {
                if (typeof result === "function") return checkWhiteList(protoAccessControl.methods, propertyName);
                else return checkWhiteList(protoAccessControl.properties, propertyName);
            }
            function checkWhiteList(protoAccessControlForType, propertyName) {
                if (protoAccessControlForType.whitelist[propertyName] !== undefined) return protoAccessControlForType.whitelist[propertyName] === true;
                if (protoAccessControlForType.defaultValue !== undefined) return protoAccessControlForType.defaultValue;
                logUnexpecedPropertyAccessOnce(propertyName);
                return false;
            }
            function logUnexpecedPropertyAccessOnce(propertyName) {
                if (loggedProperties[propertyName] !== true) {
                    loggedProperties[propertyName] = true;
                    logger.log("error", 'Handlebars: Access has been denied to resolve the property "' + propertyName + '" because it is not an "own property" of its parent.\n' + "You can add a runtime option to disable the check or this warning:\n" + "See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details");
                }
            }
            function resetLoggedProperties() {
                _Object$keys(loggedProperties).forEach(function(propertyName) {
                    delete loggedProperties[propertyName];
                });
            }
        /***/ },
        /* 33 */ /***/ function(module1, exports, __webpack_require__) {
            module1.exports = {
                "default": __webpack_require__(34),
                __esModule: true
            };
        /***/ },
        /* 34 */ /***/ function(module1, exports, __webpack_require__) {
            var $ = __webpack_require__(8);
            module1.exports = function create(P, D) {
                return $.create(P, D);
            };
        /***/ },
        /* 35 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _Object$create = __webpack_require__(33)["default"];
            exports.__esModule = true;
            exports.createNewLookupObject = createNewLookupObject;
            var _utils = __webpack_require__(4);
            /**
	 * Create a new object with "null"-prototype to avoid truthy results on prototype properties.
	 * The resulting object can be used with "object[property]" to check if a property exists
	 * @param {...object} sources a varargs parameter of source objects that will be merged
	 * @returns {object}
	 */ function createNewLookupObject() {
                for(var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++)sources[_key] = arguments[_key];
                return _utils.extend.apply(undefined, [
                    _Object$create(null)
                ].concat(sources));
            }
        /***/ },
        /* 36 */ /***/ function(module1, exports) {
            // Build out our basic SafeString type
            "use strict";
            exports.__esModule = true;
            function SafeString(string) {
                this.string = string;
            }
            SafeString.prototype.toString = SafeString.prototype.toHTML = function() {
                return "" + this.string;
            };
            exports["default"] = SafeString;
            module1.exports = exports["default"];
        /***/ },
        /* 37 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _Object$seal = __webpack_require__(38)["default"];
            var _Object$keys = __webpack_require__(12)["default"];
            var _interopRequireWildcard = __webpack_require__(1)["default"];
            var _interopRequireDefault = __webpack_require__(2)["default"];
            exports.__esModule = true;
            exports.checkRevision = checkRevision;
            exports.template = template;
            exports.wrapProgram = wrapProgram;
            exports.resolvePartial = resolvePartial;
            exports.invokePartial = invokePartial;
            exports.noop = noop;
            var _utils = __webpack_require__(4);
            var Utils = _interopRequireWildcard(_utils);
            var _exception = __webpack_require__(5);
            var _exception2 = _interopRequireDefault(_exception);
            var _base = __webpack_require__(3);
            var _helpers = __webpack_require__(9);
            var _internalWrapHelper = __webpack_require__(42);
            var _internalProtoAccess = __webpack_require__(32);
            function checkRevision(compilerInfo) {
                var compilerRevision = compilerInfo && compilerInfo[0] || 1, currentRevision = _base.COMPILER_REVISION;
                if (compilerRevision >= _base.LAST_COMPATIBLE_COMPILER_REVISION && compilerRevision <= _base.COMPILER_REVISION) return;
                if (compilerRevision < _base.LAST_COMPATIBLE_COMPILER_REVISION) {
                    var runtimeVersions = _base.REVISION_CHANGES[currentRevision], compilerVersions = _base.REVISION_CHANGES[compilerRevision];
                    throw new _exception2["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + runtimeVersions + ") or downgrade your runtime to an older version (" + compilerVersions + ").");
                } else // Use the embedded version info since the runtime doesn't know about this revision yet
                throw new _exception2["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + compilerInfo[1] + ").");
            }
            function template(templateSpec, env) {
                /* istanbul ignore next */ if (!env) throw new _exception2["default"]("No environment passed to template");
                if (!templateSpec || !templateSpec.main) throw new _exception2["default"]("Unknown template object: " + typeof templateSpec);
                templateSpec.main.decorator = templateSpec.main_d;
                // Note: Using env.VM references rather than local var references throughout this section to allow
                // for external users to override these as pseudo-supported APIs.
                env.VM.checkRevision(templateSpec.compiler);
                // backwards compatibility for precompiled templates with compiler-version 7 (<4.3.0)
                var templateWasPrecompiledWithCompilerV7 = templateSpec.compiler && templateSpec.compiler[0] === 7;
                function invokePartialWrapper(partial, context, options) {
                    if (options.hash) {
                        context = Utils.extend({}, context, options.hash);
                        if (options.ids) options.ids[0] = true;
                    }
                    partial = env.VM.resolvePartial.call(this, partial, context, options);
                    var extendedOptions = Utils.extend({}, options, {
                        hooks: this.hooks,
                        protoAccessControl: this.protoAccessControl
                    });
                    var result = env.VM.invokePartial.call(this, partial, context, extendedOptions);
                    if (result == null && env.compile) {
                        options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
                        result = options.partials[options.name](context, extendedOptions);
                    }
                    if (result != null) {
                        if (options.indent) {
                            var lines = result.split("\n");
                            for(var i = 0, l = lines.length; i < l; i++){
                                if (!lines[i] && i + 1 === l) break;
                                lines[i] = options.indent + lines[i];
                            }
                            result = lines.join("\n");
                        }
                        return result;
                    } else throw new _exception2["default"]("The partial " + options.name + " could not be compiled when running in runtime-only mode");
                }
                // Just add water
                var container = {
                    strict: function strict(obj, name, loc) {
                        if (!obj || !(name in obj)) throw new _exception2["default"]('"' + name + '" not defined in ' + obj, {
                            loc: loc
                        });
                        return container.lookupProperty(obj, name);
                    },
                    lookupProperty: function lookupProperty(parent, propertyName) {
                        var result = parent[propertyName];
                        if (result == null) return result;
                        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return result;
                        if (_internalProtoAccess.resultIsAllowed(result, container.protoAccessControl, propertyName)) return result;
                        return undefined;
                    },
                    lookup: function lookup(depths, name) {
                        var len = depths.length;
                        for(var i = 0; i < len; i++){
                            var result = depths[i] && container.lookupProperty(depths[i], name);
                            if (result != null) return depths[i][name];
                        }
                    },
                    lambda: function lambda(current, context) {
                        return typeof current === "function" ? current.call(context) : current;
                    },
                    escapeExpression: Utils.escapeExpression,
                    invokePartial: invokePartialWrapper,
                    fn: function fn(i) {
                        var ret = templateSpec[i];
                        ret.decorator = templateSpec[i + "_d"];
                        return ret;
                    },
                    programs: [],
                    program: function program(i, data, declaredBlockParams, blockParams, depths) {
                        var programWrapper = this.programs[i], fn = this.fn(i);
                        if (data || depths || blockParams || declaredBlockParams) programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
                        else if (!programWrapper) programWrapper = this.programs[i] = wrapProgram(this, i, fn);
                        return programWrapper;
                    },
                    data: function data(value, depth) {
                        while(value && depth--)value = value._parent;
                        return value;
                    },
                    mergeIfNeeded: function mergeIfNeeded(param, common) {
                        var obj = param || common;
                        if (param && common && param !== common) obj = Utils.extend({}, common, param);
                        return obj;
                    },
                    // An empty object to use as replacement for null-contexts
                    nullContext: _Object$seal({}),
                    noop: env.VM.noop,
                    compilerInfo: templateSpec.compiler
                };
                function ret(context) {
                    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                    var data = options.data;
                    ret._setup(options);
                    if (!options.partial && templateSpec.useData) data = initData(context, data);
                    var depths = undefined, blockParams = templateSpec.useBlockParams ? [] : undefined;
                    if (templateSpec.useDepths) {
                        if (options.depths) depths = context != options.depths[0] ? [
                            context
                        ].concat(options.depths) : options.depths;
                        else depths = [
                            context
                        ];
                    }
                    function main(context /*, options*/ ) {
                        return "" + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
                    }
                    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
                    return main(context, options);
                }
                ret.isTop = true;
                ret._setup = function(options) {
                    if (!options.partial) {
                        var mergedHelpers = Utils.extend({}, env.helpers, options.helpers);
                        wrapHelpersToPassLookupProperty(mergedHelpers, container);
                        container.helpers = mergedHelpers;
                        if (templateSpec.usePartial) // Use mergeIfNeeded here to prevent compiling global partials multiple times
                        container.partials = container.mergeIfNeeded(options.partials, env.partials);
                        if (templateSpec.usePartial || templateSpec.useDecorators) container.decorators = Utils.extend({}, env.decorators, options.decorators);
                        container.hooks = {};
                        container.protoAccessControl = _internalProtoAccess.createProtoAccessControl(options);
                        var keepHelperInHelpers = options.allowCallsToHelperMissing || templateWasPrecompiledWithCompilerV7;
                        _helpers.moveHelperToHooks(container, "helperMissing", keepHelperInHelpers);
                        _helpers.moveHelperToHooks(container, "blockHelperMissing", keepHelperInHelpers);
                    } else {
                        container.protoAccessControl = options.protoAccessControl; // internal option
                        container.helpers = options.helpers;
                        container.partials = options.partials;
                        container.decorators = options.decorators;
                        container.hooks = options.hooks;
                    }
                };
                ret._child = function(i, data, blockParams, depths) {
                    if (templateSpec.useBlockParams && !blockParams) throw new _exception2["default"]("must pass block params");
                    if (templateSpec.useDepths && !depths) throw new _exception2["default"]("must pass parent depths");
                    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
                };
                return ret;
            }
            function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
                function prog(context) {
                    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                    var currentDepths = depths;
                    if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) currentDepths = [
                        context
                    ].concat(depths);
                    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [
                        options.blockParams
                    ].concat(blockParams), currentDepths);
                }
                prog = executeDecorators(fn, prog, container, depths, data, blockParams);
                prog.program = i;
                prog.depth = depths ? depths.length : 0;
                prog.blockParams = declaredBlockParams || 0;
                return prog;
            }
            /**
	 * This is currently part of the official API, therefore implementation details should not be changed.
	 */ function resolvePartial(partial, context, options) {
                if (!partial) {
                    if (options.name === "@partial-block") partial = options.data["partial-block"];
                    else partial = options.partials[options.name];
                } else if (!partial.call && !options.name) {
                    // This is a dynamic partial that returned a string
                    options.name = partial;
                    partial = options.partials[partial];
                }
                return partial;
            }
            function invokePartial(partial, context, options) {
                // Use the current closure context to save the partial-block if this partial
                var currentPartialBlock = options.data && options.data["partial-block"];
                options.partial = true;
                if (options.ids) options.data.contextPath = options.ids[0] || options.data.contextPath;
                var partialBlock = undefined;
                if (options.fn && options.fn !== noop) (function() {
                    options.data = _base.createFrame(options.data);
                    // Wrapper function to get access to currentPartialBlock from the closure
                    var fn = options.fn;
                    partialBlock = options.data["partial-block"] = function partialBlockWrapper(context) {
                        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                        // Restore the partial-block from the closure for the execution of the block
                        // i.e. the part inside the block of the partial call.
                        options.data = _base.createFrame(options.data);
                        options.data["partial-block"] = currentPartialBlock;
                        return fn(context, options);
                    };
                    if (fn.partials) options.partials = Utils.extend({}, options.partials, fn.partials);
                })();
                if (partial === undefined && partialBlock) partial = partialBlock;
                if (partial === undefined) throw new _exception2["default"]("The partial " + options.name + " could not be found");
                else if (partial instanceof Function) return partial(context, options);
            }
            function noop() {
                return "";
            }
            function initData(context, data) {
                if (!data || !("root" in data)) {
                    data = data ? _base.createFrame(data) : {};
                    data.root = context;
                }
                return data;
            }
            function executeDecorators(fn, prog, container, depths, data, blockParams) {
                if (fn.decorator) {
                    var props = {};
                    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
                    Utils.extend(prog, props);
                }
                return prog;
            }
            function wrapHelpersToPassLookupProperty(mergedHelpers, container) {
                _Object$keys(mergedHelpers).forEach(function(helperName) {
                    var helper = mergedHelpers[helperName];
                    mergedHelpers[helperName] = passLookupPropertyOption(helper, container);
                });
            }
            function passLookupPropertyOption(helper, container) {
                var lookupProperty = container.lookupProperty;
                return _internalWrapHelper.wrapHelper(helper, function(options) {
                    return Utils.extend({
                        lookupProperty: lookupProperty
                    }, options);
                });
            }
        /***/ },
        /* 38 */ /***/ function(module1, exports, __webpack_require__) {
            module1.exports = {
                "default": __webpack_require__(39),
                __esModule: true
            };
        /***/ },
        /* 39 */ /***/ function(module1, exports, __webpack_require__) {
            __webpack_require__(40);
            module1.exports = __webpack_require__(20).Object.seal;
        /***/ },
        /* 40 */ /***/ function(module1, exports, __webpack_require__) {
            // 19.1.2.17 Object.seal(O)
            var isObject = __webpack_require__(41);
            __webpack_require__(17)("seal", function($seal) {
                return function seal(it) {
                    return $seal && isObject(it) ? $seal(it) : it;
                };
            });
        /***/ },
        /* 41 */ /***/ function(module1, exports) {
            module1.exports = function(it) {
                return typeof it === "object" ? it !== null : typeof it === "function";
            };
        /***/ },
        /* 42 */ /***/ function(module1, exports) {
            "use strict";
            exports.__esModule = true;
            exports.wrapHelper = wrapHelper;
            function wrapHelper(helper, transformOptionsFn) {
                if (typeof helper !== "function") // This should not happen, but apparently it does in https://github.com/wycats/handlebars.js/issues/1639
                // We try to make the wrapper least-invasive by not wrapping it, if the helper is not a function.
                return helper;
                var wrapper = function wrapper() /* dynamic arguments */ {
                    var options = arguments[arguments.length - 1];
                    arguments[arguments.length - 1] = transformOptionsFn(options);
                    return helper.apply(this, arguments);
                };
                return wrapper;
            }
        /***/ },
        /* 43 */ /***/ function(module1, exports) {
            /* WEBPACK VAR INJECTION */ (function(global) {
                "use strict";
                exports.__esModule = true;
                exports["default"] = function(Handlebars) {
                    /* istanbul ignore next */ var root = typeof global !== "undefined" ? global : window, $Handlebars = root.Handlebars;
                    /* istanbul ignore next */ Handlebars.noConflict = function() {
                        if (root.Handlebars === Handlebars) root.Handlebars = $Handlebars;
                        return Handlebars;
                    };
                };
                module1.exports = exports["default"];
            /* WEBPACK VAR INJECTION */ }).call(exports, function() {
                return this;
            }());
        /***/ }
    ]);
});

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"2fPOx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _menuHbs = require("./menu.hbs");
var _menuHbsDefault = parcelHelpers.interopDefault(_menuHbs);
var _atorizationRegistrationInputHbs = require("./atorization_registration_input.hbs");
var _atorizationRegistrationInputHbsDefault = parcelHelpers.interopDefault(_atorizationRegistrationInputHbs);
var _profileRowHbs = require("./profile_row.hbs");
var _profileRowHbsDefault = parcelHelpers.interopDefault(_profileRowHbs);
var _profileChangeRowHbs = require("./profile_change_row.hbs");
var _profileChangeRowHbsDefault = parcelHelpers.interopDefault(_profileChangeRowHbs);
var _profileChangeLinkHbs = require("./profile_change_link.hbs");
var _profileChangeLinkHbsDefault = parcelHelpers.interopDefault(_profileChangeLinkHbs);
var _profileAvaHbs = require("./profile_ava.hbs");
var _profileAvaHbsDefault = parcelHelpers.interopDefault(_profileAvaHbs);
var _profileSidebarHbs = require("./profile_sidebar.hbs");
var _profileSidebarHbsDefault = parcelHelpers.interopDefault(_profileSidebarHbs);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
(0, _handlebarsRuntimeDefault.default).registerPartial("menu", (0, _menuHbsDefault.default));
(0, _handlebarsRuntimeDefault.default).registerPartial("atorization_registration_input", (0, _atorizationRegistrationInputHbsDefault.default));
(0, _handlebarsRuntimeDefault.default).registerPartial("profile_row", (0, _profileRowHbsDefault.default));
(0, _handlebarsRuntimeDefault.default).registerPartial("profile_change_row", (0, _profileChangeRowHbsDefault.default));
(0, _handlebarsRuntimeDefault.default).registerPartial("profile_change_link", (0, _profileChangeLinkHbsDefault.default));
(0, _handlebarsRuntimeDefault.default).registerPartial("profile_ava", (0, _profileAvaHbsDefault.default));
(0, _handlebarsRuntimeDefault.default).registerPartial("profile_sidebar", (0, _profileSidebarHbsDefault.default));

},{"./menu.hbs":"kLJj0","handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./atorization_registration_input.hbs":"cGqvE","./profile_row.hbs":"59Am1","./profile_change_link.hbs":"4mVVF","./profile_ava.hbs":"bmBjJ","./profile_sidebar.hbs":"d1s5f","./profile_change_row.hbs":"34Sch"}],"kLJj0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        return '<nav>\n  <a href="/login">Авторизация</a> | <a href="/registration">Регистрация</a> | <a href="/chats">Чат</a> | <a href="/profile">Профиль</a> | <a href="/404">404</a> | <a href="/500">500</a>\n</nav>';
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cGqvE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="inp-holder"> \n  <input  type=' + alias4((helper = (helper = lookupProperty(helpers, "type") || (depth0 != null ? lookupProperty(depth0, "type") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "type",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 15
                },
                "end": {
                    "line": 2,
                    "column": 23
                }
            }
        }) : helper)) + ' placeholder="' + alias4((helper = (helper = lookupProperty(helpers, "label") || (depth0 != null ? lookupProperty(depth0, "label") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "label",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 37
                },
                "end": {
                    "line": 2,
                    "column": 46
                }
            }
        }) : helper)) + '" id="' + alias4((helper = (helper = lookupProperty(helpers, "input_id") || (depth0 != null ? lookupProperty(depth0, "input_id") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "input_id",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 52
                },
                "end": {
                    "line": 2,
                    "column": 64
                }
            }
        }) : helper)) + '" pattern="^[A-Za-zА-Яа-яЁё\\s]{6,}">\n<span class="warn" style="opacity: 0; height: 0;">' + alias4((helper = (helper = lookupProperty(helpers, "error_message") || (depth0 != null ? lookupProperty(depth0, "error_message") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "error_message",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 50
                },
                "end": {
                    "line": 3,
                    "column": 67
                }
            }
        }) : helper)) + '</span>	\n<label for="username">' + alias4((helper = (helper = lookupProperty(helpers, "label") || (depth0 != null ? lookupProperty(depth0, "label") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "label",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 22
                },
                "end": {
                    "line": 4,
                    "column": 31
                }
            }
        }) : helper)) + "</label>\n</div> ";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"59Am1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '	<div class="prof-table-row">\n		<div class="prof-table-col prof-table-col-left">\n			<p>' + alias4((helper = (helper = lookupProperty(helpers, "description") || (depth0 != null ? lookupProperty(depth0, "description") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "description",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 6
                },
                "end": {
                    "line": 3,
                    "column": 21
                }
            }
        }) : helper)) + '</p>\n		</div>\n		<div class="prof-table-col prof-table-col-right">\n			<p>' + alias4((helper = (helper = lookupProperty(helpers, "value") || (depth0 != null ? lookupProperty(depth0, "value") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "value",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 6,
                    "column": 6
                },
                "end": {
                    "line": 6,
                    "column": 15
                }
            }
        }) : helper)) + "</p>\n		</div>\n	</div>";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4mVVF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '	<div class="prof-table-row">\n		<div class="prof-table-col prof-table-col-left">\n			<p><a href="' + alias4((helper = (helper = lookupProperty(helpers, "link") || (depth0 != null ? lookupProperty(depth0, "link") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "link",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 15
                },
                "end": {
                    "line": 3,
                    "column": 23
                }
            }
        }) : helper)) + '">' + alias4((helper = (helper = lookupProperty(helpers, "description") || (depth0 != null ? lookupProperty(depth0, "description") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "description",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 25
                },
                "end": {
                    "line": 3,
                    "column": 40
                }
            }
        }) : helper)) + "</a></p>\n		</div>\n	</div>";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bmBjJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        return '				<div class="profil-ava" onclick="location.href=\'profile-new-ava-modal-choose-file\';">\n					<span class="no-ava">\n						<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n						<path fill-rule="evenodd" clip-rule="evenodd" d="M36 2H4C2.89543 2 2 2.89543 2 4V25.2667L14.6547 22.3139C15.5486 22.1053 16.4635 22 17.3814 22H22.6186C23.5365 22 24.4514 22.1053 25.3453 22.3139L38 25.2667V4C38 2.89543 37.1046 2 36 2ZM4 0C1.79086 0 0 1.79086 0 4V36C0 38.2091 1.79086 40 4 40H36C38.2091 40 40 38.2091 40 36V4C40 1.79086 38.2091 0 36 0H4ZM10.9091 14.5455C12.9174 14.5455 14.5455 12.9174 14.5455 10.9091C14.5455 8.90079 12.9174 7.27273 10.9091 7.27273C8.90082 7.27273 7.27276 8.90079 7.27276 10.9091C7.27276 12.9174 8.90082 14.5455 10.9091 14.5455Z" fill="#CDCDCD"/>\n						</svg>\n					</span>\n				</div>';
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d1s5f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        return '		<div class="profile-sidebar">\n			<button class="left-arrow-button">\n				<span class="left-arrow-button">\n					<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">\n					<circle cx="14" cy="14" r="14" transform="rotate(-180 14 14)" fill="#3369F3"/>\n					<rect x="20" y="14.8" width="11" height="1.6" transform="rotate(-180 20 14.8)" fill="white"/>\n					<path d="M13 19L9 14L13 9" stroke="white" stroke-width="1.6"/>\n					</svg>\n				</span>\n			</button>\n		</div>';
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"34Sch":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '					<div class="inp-holder">	\n					  <input  type="' + alias4((helper = (helper = lookupProperty(helpers, "type") || (depth0 != null ? lookupProperty(depth0, "type") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "type",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 21
                },
                "end": {
                    "line": 2,
                    "column": 29
                }
            }
        }) : helper)) + '" placeholder="' + alias4((helper = (helper = lookupProperty(helpers, "placeholder") || (depth0 != null ? lookupProperty(depth0, "placeholder") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "placeholder",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 44
                },
                "end": {
                    "line": 2,
                    "column": 59
                }
            }
        }) : helper)) + '" id="' + alias4((helper = (helper = lookupProperty(helpers, "id") || (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "id",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 65
                },
                "end": {
                    "line": 2,
                    "column": 71
                }
            }
        }) : helper)) + '" pattern="^[A-Za-zА-Яа-яЁё\\s]{6,}">\n					<label for="password">' + alias4((helper = (helper = lookupProperty(helpers, "description") || (depth0 != null ? lookupProperty(depth0, "description") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "description",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 27
                },
                "end": {
                    "line": 3,
                    "column": 42
                }
            }
        }) : helper)) + '</label>\n						<span class="warn" style="opacity: 0; height: 0;">' + alias4((helper = (helper = lookupProperty(helpers, "_errormessage") || (depth0 != null ? lookupProperty(depth0, "_errormessage") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "_errormessage",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 56
                },
                "end": {
                    "line": 4,
                    "column": 73
                }
            }
        }) : helper)) + "</span>\n					</div>	";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2RRt6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '\r\n<div class="main"> \r\n<section class="error">	\r\n<h3>' + alias4((helper = (helper = lookupProperty(helpers, "error_code") || (depth0 != null ? lookupProperty(depth0, "error_code") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "error_code",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 4
                },
                "end": {
                    "line": 4,
                    "column": 18
                }
            }
        }) : helper)) + "</h3>\r\n<h4>" + alias4((helper = (helper = lookupProperty(helpers, "error_message") || (depth0 != null ? lookupProperty(depth0, "error_message") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "error_message",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 4
                },
                "end": {
                    "line": 5,
                    "column": 21
                }
            }
        }) : helper)) + '</h4>\r\n<p><a href="chats">Назад к чатам</a></p>\r\n</section>\r\n</div>\r\n';
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"isot7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="main"> \r\n  <header>\r\n  </header>\r\n  <section class="hero" id="hero">\r\n   <div class="chat">\r\n  <div class="top">\r\n	  <div class="profil"><a href="#">Профиль <img src="' + alias4((helper = (helper = lookupProperty(helpers, "to_right_angle_svg") || (depth0 != null ? lookupProperty(depth0, "to_right_angle_svg") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "to_right_angle_svg",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 7,
                    "column": 53
                },
                "end": {
                    "line": 7,
                    "column": 75
                }
            }
        }) : helper)) + '" alt=""/></a></div>\r\n	  <div class="search">\r\n		  <form class="chat-forma">\r\n<input type="text" placeholder="&#xF002; Поиск" style="font-family: \'Inter\', \'Font Awesome 5 Free\'" />\r\n</form>		  \r\n	  </div>\r\n  </div>\r\n  <div class="tumbler">\r\n    <div class="conversations">\r\n      <div class="person">\r\n        <div class="box">\r\n          <div class="image"> <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n		<circle cx="23.5" cy="23.5" r="23.5" fill="#EFEFEF"/>\r\n		</svg>\r\n		 </div>     \r\n        </div>\r\n        <div class="information">\r\n          <div class="content">\r\n            <div class="username">Андрей</div>\r\n			<div class="message">Изображение</div>\r\n          </div>\r\n        </div>\r\n        <div class="notice">\r\n			<div class="data">            \r\n            <div class="time">1 Мая 2020</div>\r\n          </div>\r\n          <div class="point">3</div>\r\n        </div>\r\n      </div>\r\n      <div class="person">\r\n        <div class="box">\r\n          <div class="image"> <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n		<circle cx="23.5" cy="23.5" r="23.5" fill="#EFEFEF"/>\r\n		</svg>\r\n		 </div>\r\n        </div>\r\n        <div class="information">\r\n          <div class="content">\r\n            <div class="username">Киноклуб</div>\r\n			<div class="message"><strong>Вы:</strong> Круто!</div>\r\n          </div>\r\n        </div>\r\n        <div class="notice">\r\n			<div class="data">            \r\n            <div class="time">10:49</div>\r\n          </div>\r\n			\r\n          <div class="point">5</div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n      <div class="person">\r\n\r\n        <div class="box">\r\n          <div class="image"> <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n		<circle cx="23.5" cy="23.5" r="23.5" fill="#EFEFEF"/>\r\n		</svg>\r\n		 </div>\r\n          \r\n        </div>\r\n\r\n        <div class="information">\r\n          <div class="content">\r\n            <div class="username">Илья</div>\r\n			<div class="message">Друзья, у меня для вас особенный выпуск новостей!</div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n        <div class="notice">\r\n			<div class="data">            \r\n            <div class="time">12:00</div>\r\n          </div>\r\n			\r\n          <div class="point">3</div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n      <div class="person">\r\n\r\n        <div class="box">\r\n          <div class="image"> <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n		<circle cx="23.5" cy="23.5" r="23.5" fill="#EFEFEF"/>\r\n		</svg>\r\n		 </div>\r\n          \r\n        </div>\r\n\r\n        <div class="information">\r\n          <div class="content">\r\n            <div class="username">Вадим</div>\r\n			<div class="message"><strong>Вы:</strong> Круто!</div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n        <div class="notice">\r\n			<div class="data">            \r\n            <div class="time">15:12</div>\r\n          </div>\r\n			\r\n          <div class="point">3</div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n      <div class="person">\r\n\r\n        <div class="box">\r\n          <div class="image"> <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n		<circle cx="23.5" cy="23.5" r="23.5" fill="#EFEFEF"/>\r\n		</svg>\r\n		 </div>\r\n          \r\n        </div>\r\n\r\n        <div class="information">\r\n          <div class="content">\r\n            <div class="username">тет-а-теты</div>\r\n			<div class="message">И Human Interface Guidelines и Material Design рекомендуют...</div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n        <div class="notice">\r\n			<div class="data">            \r\n            <div class="time">Пт</div>\r\n          </div>\r\n			\r\n          <!--<div class="point">3</div>-->\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n      <div class="person">\r\n\r\n        <div class="box">\r\n          <div class="image"> <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n		<circle cx="23.5" cy="23.5" r="23.5" fill="#EFEFEF"/>\r\n		</svg>\r\n		 </div>\r\n          \r\n        </div>\r\n\r\n        <div class="information">\r\n          <div class="content">\r\n            <div class="username">1, 2, 3</div>\r\n			<div class="message">Миллионы россиян ежедневно проводят десятки часов свое...</div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n        <div class="notice">\r\n			<div class="data">            \r\n            <div class="time">Ср</div>\r\n          </div>\r\n			\r\n          <!--<div class="point">3</div>-->\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n      <div class="person">\r\n\r\n        <div class="box">\r\n          <div class="image"> <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n		<circle cx="23.5" cy="23.5" r="23.5" fill="#EFEFEF"/>\r\n		</svg>\r\n		 </div>\r\n          \r\n        </div>\r\n\r\n        <div class="information">\r\n          <div class="content">\r\n            <div class="username">Design Destroyer</div>\r\n			<div class="message">В 2008 году художник Jon Rafman  начал собирать...</div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n        <div class="notice">\r\n			<div class="data">            \r\n            <div class="time">Пн</div>\r\n          </div>\r\n			\r\n          <!--<div class="point">3</div>-->\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n      <div class="person">\r\n\r\n        <div class="box">\r\n          <div class="image"> <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n		<circle cx="23.5" cy="23.5" r="23.5" fill="#EFEFEF"/>\r\n		</svg>\r\n		 </div>\r\n          \r\n        </div>\r\n\r\n        <div class="information">\r\n          <div class="content">\r\n            <div class="username">Day.</div>\r\n			<div class="message">Так увлёкся работой по курсу, что совсем забыл его анонсир...</div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n        <div class="notice">\r\n			<div class="data">            \r\n            <div class="time">Пн</div>\r\n          </div>\r\n			\r\n         <!-- <div class="point">3</div>-->\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n      <div class="person">\r\n\r\n        <div class="box">\r\n          <div class="image"> <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n		<circle cx="23.5" cy="23.5" r="23.5" fill="#EFEFEF"/>\r\n		</svg>\r\n		 </div>\r\n          \r\n        </div>\r\n\r\n        <div class="information">\r\n          <div class="content">\r\n            <div class="username">Андрей</div>\r\n			<div class="message"><strong>Вы:</strong> Круто!</div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n        <div class="notice">\r\n			<div class="data">            \r\n            <div class="time">1 Мая 2020</div>\r\n          </div>\r\n			\r\n          <div class="point">3</div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n      <div class="person">\r\n\r\n        <div class="box">\r\n          <div class="image"> <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n		<circle cx="23.5" cy="23.5" r="23.5" fill="#EFEFEF"/>\r\n		</svg>\r\n		 </div>\r\n          \r\n        </div>\r\n\r\n        <div class="information">\r\n          <div class="content">\r\n            <div class="username">Андрей</div>\r\n			<div class="message"><strong>Вы:</strong> Круто!</div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n        <div class="notice">\r\n			<div class="data">            \r\n            <div class="time">1 Мая 2020</div>\r\n          </div>\r\n			\r\n          <div class="point">3</div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n      <div class="person">\r\n\r\n        <div class="box">\r\n          <div class="image"> <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n		<circle cx="23.5" cy="23.5" r="23.5" fill="#EFEFEF"/>\r\n		</svg>\r\n		 </div>\r\n          \r\n        </div>\r\n\r\n        <div class="information">\r\n          <div class="content">\r\n            <div class="username">Андрей</div>\r\n			<div class="message"><strong>Вы:</strong> Круто!</div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n        <div class="notice">\r\n			<div class="data">            \r\n            <div class="time">1 Мая 2020</div>\r\n          </div>\r\n			\r\n          <div class="point">3</div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n      <div class="person">\r\n\r\n        <div class="box">\r\n          <div class="image"> <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n		<circle cx="23.5" cy="23.5" r="23.5" fill="#EFEFEF"/>\r\n		</svg>\r\n		 </div>\r\n          \r\n        </div>\r\n\r\n        <div class="information">\r\n          <div class="content">\r\n            <div class="username">Андрей</div>\r\n			<div class="message"><strong>Вы:</strong> Круто!</div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n        <div class="notice">\r\n			<div class="data">            \r\n            <div class="time">1 Мая 2020</div>\r\n          </div>\r\n			\r\n          <div class="point">3</div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n      <div class="person">\r\n\r\n        <div class="box">\r\n          <div class="image"> <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n		<circle cx="23.5" cy="23.5" r="23.5" fill="#EFEFEF"/>\r\n		</svg>\r\n		 </div>\r\n          \r\n        </div>\r\n\r\n        <div class="information">\r\n          <div class="content">\r\n            <div class="username">Андрей</div>\r\n			<div class="message"><strong>Вы:</strong> Круто!</div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n        <div class="notice">\r\n			<div class="data">            \r\n            <div class="time">1 Мая 2020</div>\r\n          </div>\r\n			\r\n          <div class="point">3</div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n      <div class="person">\r\n\r\n        <div class="box">\r\n          <div class="image"> <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n		<circle cx="23.5" cy="23.5" r="23.5" fill="#EFEFEF"/>\r\n		</svg>\r\n		 </div>\r\n          \r\n        </div>\r\n\r\n        <div class="information">\r\n          <div class="content">\r\n            <div class="username">Андрей</div>\r\n			<div class="message"><strong>Вы:</strong> Круто!</div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n        <div class="notice">\r\n			<div class="data">            \r\n            <div class="time">1 Мая 2020</div>\r\n          </div>\r\n			\r\n          <div class="point">3</div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n      <div class="person">\r\n\r\n        <div class="box">\r\n          <div class="image"> <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n		<circle cx="23.5" cy="23.5" r="23.5" fill="#EFEFEF"/>\r\n		</svg>\r\n		 </div>\r\n          \r\n        </div>\r\n\r\n        <div class="information">\r\n          <div class="content">\r\n            <div class="username">Андрей</div>\r\n			<div class="message"><strong>Вы:</strong> Круто!</div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n        <div class="notice">\r\n			<div class="data">            \r\n            <div class="time">1 Мая 2020</div>\r\n          </div>\r\n			\r\n          <div class="point">3</div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n		\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div> \r\n    \r\n	   <div class="chat-content">\r\n\r\n        <div class="chat-content-header">\r\n      \r\n          <div class="person">\r\n\r\n              <div class="box">\r\n\r\n                <div class="image">\r\n\r\n                  <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n                    <circle cx="23.5" cy="23.5" r="23.5" fill="#EFEFEF"></circle>\r\n                  </svg>\r\n\r\n                </div>\r\n\r\n              </div>\r\n\r\n\r\n              <div class="information">\r\n                <div class="content">\r\n                  <div class="username">Андрей</div>                \r\n                </div>\r\n              </div>\r\n\r\n              <div class="notice">\r\n                <div class="burger-menu">            \r\n                    \r\n                  <svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n                  <circle cx="1.5" cy="2" r="1.5" fill="#1E1E1E"/>\r\n                  <circle cx="1.5" cy="8" r="1.5" fill="#1E1E1E"/>\r\n                  <circle cx="1.5" cy="14" r="1.5" fill="#1E1E1E"/>\r\n                  </svg>\r\n\r\n\r\n                </div>               \r\n              </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n		    <div class="content-holder">\r\n\r\n          <p class="mess-date">19 июня</p>\r\n\r\n          <div class="message-holder">            \r\n\r\n            <div class="message-in">\r\n\r\n              <div class="message-in-text">\r\n                <p>EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.<br>\r\n\r\n                Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.</p>\r\n                <div class="time">11:56</div>\r\n              </div>\r\n\r\n              <div class="message-in-file">\r\n\r\n                <img src="' + alias4((helper = (helper = lookupProperty(helpers, "file_img") || (depth0 != null ? lookupProperty(depth0, "file_img") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "file_img",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 516,
                    "column": 26
                },
                "end": {
                    "line": 516,
                    "column": 38
                }
            }
        }) : helper)) + '">\r\n\r\n                <div class="time time-bg">11:56</div>\r\n                \r\n              </div>\r\n\r\n                \r\n\r\n            </div>\r\n\r\n            <div class="message-out">\r\n              <div class="message-out-text">\r\n                <p>Круто!</p>\r\n              \r\n                <div class="time time-check">\r\n                  <span class="mark-polucil">\r\n                    <svg width="11" height="5" viewBox="0 0 11 5" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n                      <line y1="-0.5" x2="3.765" y2="-0.5" transform="matrix(0.705933 0.708278 -0.705933 0.708278 0.700195 2.33313)" stroke="#3369F3"/>\r\n                      <line y1="-0.5" x2="5.6475" y2="-0.5" transform="matrix(0.705933 -0.708278 0.705933 0.708278 3.35828 5.00006)" stroke="#3369F3"/>\r\n                      <line y1="-0.5" x2="5.6475" y2="-0.5" transform="matrix(0.705933 -0.708278 0.705933 0.708278 6.01587 5.00006)" stroke="#3369F3"/>\r\n                    </svg>\r\n                </span>\r\n                11:56\r\n              </div>\r\n            </div>\r\n            </div>\r\n              \r\n\r\n\r\n          </div>\r\n\r\n\r\n          <p class="mess-date">19 июня</p>\r\n\r\n          <div class="message-holder">            \r\n\r\n            <div class="message-in">\r\n\r\n              <div class="message-in-text">\r\n                <p>EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.<br>\r\n\r\n                Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.</p>\r\n                <div class="time">11:56</div>\r\n              </div>\r\n\r\n              <div class="message-in-file">\r\n\r\n                <img src="' + alias4((helper = (helper = lookupProperty(helpers, "file_img") || (depth0 != null ? lookupProperty(depth0, "file_img") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "file_img",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 563,
                    "column": 26
                },
                "end": {
                    "line": 563,
                    "column": 38
                }
            }
        }) : helper)) + '">\r\n\r\n                <div class="time time-bg">11:56</div>\r\n                \r\n              </div>\r\n\r\n                \r\n\r\n            </div>\r\n\r\n            <div class="message-out">\r\n              <div class="message-out-text">\r\n                <p>Круто!</p>\r\n              \r\n                <div class="time time-check">\r\n                  <span class="mark-polucil">\r\n                    <svg width="11" height="5" viewBox="0 0 11 5" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n                      <line y1="-0.5" x2="3.765" y2="-0.5" transform="matrix(0.705933 0.708278 -0.705933 0.708278 0.700195 2.33313)" stroke="#3369F3"/>\r\n                      <line y1="-0.5" x2="5.6475" y2="-0.5" transform="matrix(0.705933 -0.708278 0.705933 0.708278 3.35828 5.00006)" stroke="#3369F3"/>\r\n                      <line y1="-0.5" x2="5.6475" y2="-0.5" transform="matrix(0.705933 -0.708278 0.705933 0.708278 6.01587 5.00006)" stroke="#3369F3"/>\r\n                    </svg>\r\n                </span>\r\n                11:56\r\n              </div>\r\n            </div>\r\n            </div>\r\n              \r\n\r\n\r\n          </div>\r\n\r\n\r\n			\r\n		    </div>\r\n\r\n        <div class="chat-content-footer">\r\n\r\n          <form id="mess_forma">\r\n            <div class="input-holder">        \r\n              <input type="file" id="file-input">\r\n              <label for="file-input">             \r\n                <span class="file">                  \r\n                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.18662 13.5L14.7628 5.92389L15.7056 6.8667L8.12943 14.4428L7.18662 13.5Z" fill="#999999"/>\r\n                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.70067 16.0141L17.2768 8.43793L18.2196 9.38074L10.6435 16.9569L9.70067 16.0141Z" fill="#999999"/>\r\n                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0433 21.3567L22.6195 13.7806L23.5623 14.7234L15.9861 22.2995L15.0433 21.3567Z" fill="#999999"/>\r\n                  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5574 23.8708L25.1335 16.2946L26.0763 17.2374L18.5002 24.8136L17.5574 23.8708Z" fill="#999999"/>\r\n                  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5574 23.8709C14.9423 26.486 10.7118 26.4954 8.10831 23.8919C5.50482 21.2884 5.51424 17.0579 8.12936 14.4428L7.18655 13.5C4.0484 16.6381 4.0371 21.7148 7.16129 24.839C10.2855 27.9632 15.3621 27.9518 18.5003 24.8137L17.5574 23.8709Z" fill="#999999"/>\r\n                  <path fill-rule="evenodd" clip-rule="evenodd" d="M22.6195 13.7806L23.5623 14.7234C26.003 12.2826 26.0118 8.3341 23.5819 5.90417C21.152 3.47424 17.2035 3.48303 14.7627 5.92381L15.7055 6.86662C17.6233 4.94887 20.7257 4.94196 22.6349 6.85119C24.5441 8.76042 24.5372 11.8628 22.6195 13.7806Z" fill="#999999"/>\r\n                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.70092 16.0144C7.95751 17.7578 7.95123 20.5782 9.68689 22.3138C11.4226 24.0495 14.2429 24.0432 15.9863 22.2998L15.0435 21.357C13.8231 22.5774 11.8489 22.5818 10.6339 21.3668C9.41894 20.1518 9.42334 18.1776 10.6437 16.9572L9.70092 16.0144Z" fill="#999999"/>\r\n                  </svg>\r\n                </span>\r\n              </label>\r\n            </div>\r\n            <div class="input-holder">\r\n              <input type="text" id="mess" placeholder="Сообщение">              \r\n            </div>\r\n            <div class="input-holder">        \r\n              <button class="button-send">\r\n                <span class="send">\r\n                  <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n                  <rect y="5.19995" width="11" height="1.6" fill="white"/>\r\n                  <path d="M7 1L11 6L7 11" stroke="white" stroke-width="1.6"/>\r\n                  </svg>\r\n                </span>\r\n              </button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n	  </div>  \r\n  </section>\r\n</div>\r\n';
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aHAdS":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bLxZJ") + "file-img.fd72d921.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"8Xa51":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bLxZJ") + "to-right-angle.de92ae6a.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"5J09N":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bLxZJ") + "lupa.bbf62c8a.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"6gUru":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "1": function(container, depth0, helpers, partials, data) {
        return '<div class="modal-overley">\r\n	<form class="modal">\r\n		<h3>Загрузите файл</h3>\r\n		<div class="inp-holder">   \r\n			<input type="file" placeholder="Выбрать файл на компьютере" id="file-sel">\r\n			<span class="file-sel d-none">Выбрать файл на компьютере</span> \r\n			<label for="file-sel">Выбрать файл на компьютере</label>\r\n		</div>   \r\n		<button>Поменять</button>\r\n	</form> \r\n</div>\r\n';
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="main">\r\n	<section class="profile">\r\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "profile_sidebar"), depth0, {
            "name": "profile_sidebar",
            "data": data,
            "indent": "		",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '		<div class="profile-content">\r\n			<form class="profil-forma">\r\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "profile_ava"), depth0, {
            "name": "profile_ava",
            "data": data,
            "indent": "				",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '			  	<h3>Вадим</h3>\r\n				<div class="prof-table d-flex">\r\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "profile_row"), depth0, {
            "name": "profile_row",
            "hash": {
                "value": "asktask@icloud.ru",
                "description": "Почта"
            },
            "data": data,
            "indent": "					",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "profile_row"), depth0, {
            "name": "profile_row",
            "hash": {
                "value": "vadimmaharram",
                "description": "Логин"
            },
            "data": data,
            "indent": "					",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "profile_row"), depth0, {
            "name": "profile_row",
            "hash": {
                "value": "Вадим",
                "description": "Имя"
            },
            "data": data,
            "indent": "					",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "profile_row"), depth0, {
            "name": "profile_row",
            "hash": {
                "value": "Махаррам",
                "description": "Фамилия"
            },
            "data": data,
            "indent": "					",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "profile_row"), depth0, {
            "name": "profile_row",
            "hash": {
                "value": "Вадим",
                "description": "Имя в чате"
            },
            "data": data,
            "indent": "					",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "profile_row"), depth0, {
            "name": "profile_row",
            "hash": {
                "value": "+7 (909) 967 30 30",
                "description": "Телефон"
            },
            "data": data,
            "indent": "					",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '				</div>\r\n				<div class="prof-table d-flex data-forma">\r\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "profile_change_link"), depth0, {
            "name": "profile_change_link",
            "hash": {
                "link": "profile-change-data",
                "description": "Изменить данные"
            },
            "data": data,
            "indent": "					",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "profile_change_link"), depth0, {
            "name": "profile_change_link",
            "hash": {
                "link": "profile-change-pass",
                "description": "Изменить пароль"
            },
            "data": data,
            "indent": "					",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '				</div>\r\n				<div class="out-profil"><a href="#">Выйти</a></div>\r\n			</form>	\r\n		</div>\r\n	</section>\r\n</div>\r\n' + ((stack1 = lookupProperty(helpers, "if").call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "change_ava") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 25,
                    "column": 0
                },
                "end": {
                    "line": 37,
                    "column": 7
                }
            }
        })) != null ? stack1 : "");
    },
    "usePartial": true,
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dg6Pb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "1": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return ((stack1 = container.invokePartial(lookupProperty(partials, "profile_change_row"), depth0, {
            "name": "profile_change_row",
            "hash": {
                "_errormessage": "Неверный пароль",
                "id": "passwordold",
                "description": "Старый пароль",
                "type": "password"
            },
            "data": data,
            "indent": "						",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "profile_change_row"), depth0, {
            "name": "profile_change_row",
            "hash": {
                "_errormessage": "Пароли не совпадают",
                "id": "passwordnew",
                "description": "Новый пароль",
                "type": "password"
            },
            "data": data,
            "indent": "						",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "profile_change_row"), depth0, {
            "name": "profile_change_row",
            "hash": {
                "_errormessage": "Пароли не совпадают",
                "id": "passwordpovt",
                "description": "Повторите новый пароль",
                "type": "password"
            },
            "data": data,
            "indent": "						",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "");
    },
    "3": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return ((stack1 = container.invokePartial(lookupProperty(partials, "profile_change_row"), depth0, {
            "name": "profile_change_row",
            "hash": {
                "_errormessage": "Неверный адрес почты",
                "id": "email",
                "description": "Почта",
                "placeholder": "pochta@yandex.ru",
                "type": "text"
            },
            "data": data,
            "indent": "						",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "profile_change_row"), depth0, {
            "name": "profile_change_row",
            "hash": {
                "_errormessage": "Неверный Логин",
                "id": "login",
                "description": "Логин",
                "placeholder": "vadimmaharram",
                "type": "text"
            },
            "data": data,
            "indent": "						",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "profile_change_row"), depth0, {
            "name": "profile_change_row",
            "hash": {
                "_errormessage": "Неверное Имя",
                "id": "name",
                "description": "Имя",
                "placeholder": "Вадим",
                "type": "text"
            },
            "data": data,
            "indent": "						",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "profile_change_row"), depth0, {
            "name": "profile_change_row",
            "hash": {
                "_errormessage": "Неверная Фамилия",
                "id": "familiya",
                "description": "Фамилия",
                "placeholder": "Махаррам",
                "type": "text"
            },
            "data": data,
            "indent": "						",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "profile_change_row"), depth0, {
            "name": "profile_change_row",
            "hash": {
                "_errormessage": "Неверное Имя",
                "id": "chatname",
                "description": "Имя в чате",
                "placeholder": "Вадим",
                "type": "text"
            },
            "data": data,
            "indent": "						",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "profile_change_row"), depth0, {
            "name": "profile_change_row",
            "hash": {
                "_errormessage": "Неверный телефон",
                "id": "phone",
                "description": "Телефон",
                "placeholder": "+7 (909) 967 30 30",
                "type": "text"
            },
            "data": data,
            "indent": "						",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "");
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="main">\r\n	<section class="profile">\r\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "profile_sidebar"), depth0, {
            "name": "profile_sidebar",
            "data": data,
            "indent": "		",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '		<div class="profile-content">\r\n			<form class="change-profil-forma">\r\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "profile_ava"), depth0, {
            "name": "profile_ava",
            "data": data,
            "indent": "				",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '				<div class="change-profil-forma">\r\n' + ((stack1 = lookupProperty(helpers, "if").call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "change_pass") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.program(3, data, 0),
            "data": data,
            "loc": {
                "start": {
                    "line": 8,
                    "column": 5
                },
                "end": {
                    "line": 19,
                    "column": 12
                }
            }
        })) != null ? stack1 : "") + '						<div class="forma-footer">		\r\n					  	<button>Сохранить</button>\r\n						</div>\r\n				</div>\r\n			</form>	\r\n		</div>\r\n	</section>\r\n</div>';
    },
    "usePartial": true,
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c6EAB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "1": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return ((stack1 = container.invokePartial(lookupProperty(partials, "atorization_registration_input"), depth0, {
            "name": "atorization_registration_input",
            "hash": {
                "error_message": "Неверный адрес почты",
                "input_id": "email",
                "type": "text",
                "label": "Почта"
            },
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "atorization_registration_input"), depth0, {
            "name": "atorization_registration_input",
            "hash": {
                "error_message": "Неверный Логин",
                "input_id": "login",
                "type": "text",
                "label": "Логин"
            },
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "atorization_registration_input"), depth0, {
            "name": "atorization_registration_input",
            "hash": {
                "error_message": "Неверное Имя",
                "input_id": "name",
                "type": "text",
                "label": "Имя"
            },
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "atorization_registration_input"), depth0, {
            "name": "atorization_registration_input",
            "hash": {
                "error_message": "Неверная Фамилия",
                "input_id": "familiya",
                "type": "text",
                "label": "Фамилия"
            },
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "atorization_registration_input"), depth0, {
            "name": "atorization_registration_input",
            "hash": {
                "error_message": "Неверный Телефон",
                "input_id": "email",
                "type": "text",
                "label": "Телефон"
            },
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "atorization_registration_input"), depth0, {
            "name": "atorization_registration_input",
            "hash": {
                "error_message": "Неверный Пароль",
                "input_id": "password",
                "type": "password",
                "label": "Пароль"
            },
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "atorization_registration_input"), depth0, {
            "name": "atorization_registration_input",
            "hash": {
                "error_message": "Пароли не совпадают",
                "input_id": "passwordval",
                "type": "password",
                "label": "Пароль (ещё раз)"
            },
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "");
    },
    "3": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return ((stack1 = container.invokePartial(lookupProperty(partials, "atorization_registration_input"), depth0, {
            "name": "atorization_registration_input",
            "hash": {
                "error_message": "Неверный логин",
                "input_id": "username",
                "type": "text",
                "label": "Логин"
            },
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "atorization_registration_input"), depth0, {
            "name": "atorization_registration_input",
            "hash": {
                "error_message": "Неверный пароль",
                "input_id": "password",
                "type": "password",
                "label": "Пароль"
            },
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "");
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="main"> \r\n  <header>\r\n  </header>\r\n<form class="auth_reg_form" id="auth_reg_form">\r\n  <h3>' + alias4((helper = (helper = lookupProperty(helpers, "title") || (depth0 != null ? lookupProperty(depth0, "title") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "title",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 6
                },
                "end": {
                    "line": 5,
                    "column": 15
                }
            }
        }) : helper)) + "</h3>\r\n\r\n" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "registration") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.program(3, data, 0),
            "data": data,
            "loc": {
                "start": {
                    "line": 7,
                    "column": 2
                },
                "end": {
                    "line": 18,
                    "column": 9
                }
            }
        })) != null ? stack1 : "") + "  <button>" + alias4((helper = (helper = lookupProperty(helpers, "reg_auth_button_title") || (depth0 != null ? lookupProperty(depth0, "reg_auth_button_title") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "reg_auth_button_title",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 19,
                    "column": 10
                },
                "end": {
                    "line": 19,
                    "column": 35
                }
            }
        }) : helper)) + '</button>\r\n  <div class="form-bottom">\r\n    <a href="' + alias4((helper = (helper = lookupProperty(helpers, "reg_auth_link") || (depth0 != null ? lookupProperty(depth0, "reg_auth_link") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "reg_auth_link",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 21,
                    "column": 13
                },
                "end": {
                    "line": 21,
                    "column": 30
                }
            }
        }) : helper)) + '" class="no-akkaunt">' + alias4((helper = (helper = lookupProperty(helpers, "reg_auth_link_title") || (depth0 != null ? lookupProperty(depth0, "reg_auth_link_title") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "reg_auth_link_title",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 21,
                    "column": 51
                },
                "end": {
                    "line": 21,
                    "column": 74
                }
            }
        }) : helper)) + "</a>\r\n  </div>\r\n</form>	\r\n</div>\r\n\r\n";
    },
    "usePartial": true,
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l9W8a":[function() {},{}],"2qg8i":[function() {},{}]},["ShInH","8lqZg"], "8lqZg", "parcelRequire40a5")

//# sourceMappingURL=index.975ef6c8.js.map
