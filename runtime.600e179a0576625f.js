(() => {
    "use strict";
    var e, v = {},
        g = {};

    function r(e) {
        var n = g[e];
        if (void 0 !== n) return n.exports;
        var t = g[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return v[e].call(t.exports, t, t.exports, r), t.loaded = !0, t.exports
    }
    r.m = v, r.amdO = {}, e = [], r.O = (n, t, f, i) => {
        if (!t) {
            var a = 1 / 0;
            for (o = 0; o < e.length; o++) {
                for (var [t, f, i] = e[o], s = !0, d = 0; d < t.length; d++)(!1 & i || a >= i) && Object.keys(r.O).every(b => r.O[b](t[d])) ? t.splice(d--, 1) : (s = !1, i < a && (a = i));
                if (s) {
                    e.splice(o--, 1);
                    var l = f();
                    void 0 !== l && (n = l)
                }
            }
            return n
        }
        i = i || 0;
        for (var o = e.length; o > 0 && e[o - 1][2] > i; o--) e[o] = e[o - 1];
        e[o] = [t, f, i]
    }, r.n = e => {
        var n = e && e.__esModule ? () => e.default : () => e;
        return r.d(n, {
            a: n
        }), n
    }, (() => {
        var n, e = Object.getPrototypeOf ? t => Object.getPrototypeOf(t) : t => t.__proto__;
        r.t = function(t, f) {
            if (1 & f && (t = this(t)), 8 & f || "object" == typeof t && t && (4 & f && t.__esModule || 16 & f && "function" == typeof t.then)) return t;
            var i = Object.create(null);
            r.r(i);
            var o = {};
            n = n || [null, e({}), e([]), e(e)];
            for (var a = 2 & f && t;
                "object" == typeof a && !~n.indexOf(a); a = e(a)) Object.getOwnPropertyNames(a).forEach(s => o[s] = () => t[s]);
            return o.default = () => t, r.d(i, o), i
        }
    })(), r.d = (e, n) => {
        for (var t in n) r.o(n, t) && !r.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: n[t]
        })
    }, r.f = {}, r.e = e => Promise.all(Object.keys(r.f).reduce((n, t) => (r.f[t](e, n), n), [])), r.u = e => (({
        265: "canvg",
        297: "xlsx",
        592: "common",
        643: "pdfmake"
    }[e] || e) + "." + {
        265: "0d9620855d5997bb",
        293: "da43cd6498fcd6ec",
        297: "2f1534924a284e10",
        301: "786c774abc764c4b",
        404: "75d875edc1d32161",
        509: "934a9ce65f26e004",
        592: "67b876ce2a50a8af",
        643: "fe405013506e1336",
        794: "15931f7e391cb926",
        904: "470578cb288e5ab0",
        959: "f04489b8b81dfe0e"
    }[e] + ".js"), r.miniCssF = e => {}, r.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n), (() => {
        var e = {},
            n = "app-btcmtx:";
        r.l = (t, f, i, o) => {
            if (e[t]) e[t].push(f);
            else {
                var a, s;
                if (void 0 !== i)
                    for (var d = document.getElementsByTagName("script"), l = 0; l < d.length; l++) {
                        var c = d[l];
                        if (c.getAttribute("src") == t || c.getAttribute("data-webpack") == n + i) {
                            a = c;
                            break
                        }
                    }
                a || (s = !0, (a = document.createElement("script")).type = "module", a.charset = "utf-8", a.timeout = 120, r.nc && a.setAttribute("nonce", r.nc), a.setAttribute("data-webpack", n + i), a.src = r.tu(t)), e[t] = [f];
                var p = (_, b) => {
                        a.onerror = a.onload = null, clearTimeout(u);
                        var m = e[t];
                        if (delete e[t], a.parentNode && a.parentNode.removeChild(a), m && m.forEach(h => h(b)), _) return _(b)
                    },
                    u = setTimeout(p.bind(null, void 0, {
                        type: "timeout",
                        target: a
                    }), 12e4);
                a.onerror = p.bind(null, a.onerror), a.onload = p.bind(null, a.onload), s && document.head.appendChild(a)
            }
        }
    })(), r.r = e => {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
        var e;
        r.tt = () => (void 0 === e && (e = {
            createScriptURL: n => n
        }, typeof trustedTypes < "u" && trustedTypes.createPolicy && (e = trustedTypes.createPolicy("angular#bundler", e))), e)
    })(), r.tu = e => r.tt().createScriptURL(e), r.p = "", (() => {
        var e = {
            666: 0
        };
        r.f.j = (f, i) => {
            var o = r.o(e, f) ? e[f] : void 0;
            if (0 !== o)
                if (o) i.push(o[2]);
                else if (666 != f) {
                var a = new Promise((c, p) => o = e[f] = [c, p]);
                i.push(o[2] = a);
                var s = r.p + r.u(f),
                    d = new Error;
                r.l(s, c => {
                    if (r.o(e, f) && (0 !== (o = e[f]) && (e[f] = void 0), o)) {
                        var p = c && ("load" === c.type ? "missing" : c.type),
                            u = c && c.target && c.target.src;
                        d.message = "Loading chunk " + f + " failed.\n(" + p + ": " + u + ")", d.name = "ChunkLoadError", d.type = p, d.request = u, o[1](d)
                    }
                }, "chunk-" + f, f)
            } else e[f] = 0
        }, r.O.j = f => 0 === e[f];
        var n = (f, i) => {
                var d, l, [o, a, s] = i,
                    c = 0;
                if (o.some(u => 0 !== e[u])) {
                    for (d in a) r.o(a, d) && (r.m[d] = a[d]);
                    if (s) var p = s(r)
                }
                for (f && f(i); c < o.length; c++) r.o(e, l = o[c]) && e[l] && e[l][0](), e[l] = 0;
                return r.O(p)
            },
            t = self.webpackChunkapp_btcmtx = self.webpackChunkapp_btcmtx || [];
        t.forEach(n.bind(null, 0)), t.push = n.bind(null, t.push.bind(t))
    })()
})();