(self.webpackChunkapp_btcmtx = self.webpackChunkapp_btcmtx || []).push([
    [904], {
        65904: function(module, exports, __webpack_require__) {
            var e;
            typeof navigator < "u" && (e = function() {
                "use strict";
                var svgNS = "http://www.w3.org/2000/svg",
                    locationHref = "",
                    _useWebWorker = !1,
                    initialDefaultFrame = -999999,
                    setWebWorker = function(e) {
                        _useWebWorker = !!e
                    },
                    getWebWorker = function() {
                        return _useWebWorker
                    },
                    setLocationHref = function(e) {
                        locationHref = e
                    },
                    getLocationHref = function() {
                        return locationHref
                    };

                function createTag(t) {
                    return document.createElement(t)
                }

                function extendPrototype(t, e) {
                    var r, s, i = t.length;
                    for (r = 0; r < i; r += 1)
                        for (var a in s = t[r].prototype) Object.prototype.hasOwnProperty.call(s, a) && (e.prototype[a] = s[a])
                }

                function getDescriptor(t, e) {
                    return Object.getOwnPropertyDescriptor(t, e)
                }

                function createProxyFunction(t) {
                    function e() {}
                    return e.prototype = t, e
                }
                var audioControllerFactory = function() {
                        function t(e) {
                            this.audios = [], this.audioFactory = e, this._volume = 1, this._isMuted = !1
                        }
                        return t.prototype = {
                                addAudio: function(r) {
                                    this.audios.push(r)
                                },
                                pause: function() {
                                    var r, i = this.audios.length;
                                    for (r = 0; r < i; r += 1) this.audios[r].pause()
                                },
                                resume: function() {
                                    var r, i = this.audios.length;
                                    for (r = 0; r < i; r += 1) this.audios[r].resume()
                                },
                                setRate: function(r) {
                                    var i, s = this.audios.length;
                                    for (i = 0; i < s; i += 1) this.audios[i].setRate(r)
                                },
                                createAudio: function(r) {
                                    return this.audioFactory ? this.audioFactory(r) : window.Howl ? new window.Howl({
                                        src: [r]
                                    }) : {
                                        isPlaying: !1,
                                        play: function() {
                                            this.isPlaying = !0
                                        },
                                        seek: function() {
                                            this.isPlaying = !1
                                        },
                                        playing: function() {},
                                        rate: function() {},
                                        setVolume: function() {}
                                    }
                                },
                                setAudioFactory: function(r) {
                                    this.audioFactory = r
                                },
                                setVolume: function(r) {
                                    this._volume = r, this._updateVolume()
                                },
                                mute: function() {
                                    this._isMuted = !0, this._updateVolume()
                                },
                                unmute: function() {
                                    this._isMuted = !1, this._updateVolume()
                                },
                                getVolume: function() {
                                    return this._volume
                                },
                                _updateVolume: function() {
                                    var r, i = this.audios.length;
                                    for (r = 0; r < i; r += 1) this.audios[r].volume(this._volume * (this._isMuted ? 0 : 1))
                                }
                            },
                            function() {
                                return new t
                            }
                    }(),
                    createTypedArray = function() {
                        function t(r, i) {
                            var n, s = 0,
                                a = [];
                            switch (r) {
                                case "int16":
                                case "uint8c":
                                    n = 1;
                                    break;
                                default:
                                    n = 1.1
                            }
                            for (s = 0; s < i; s += 1) a.push(n);
                            return a
                        }
                        return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function e(r, i) {
                            return "float32" === r ? new Float32Array(i) : "int16" === r ? new Int16Array(i) : "uint8c" === r ? new Uint8ClampedArray(i) : t(r, i)
                        } : t
                    }();

                function createSizedArray(t) {
                    return Array.apply(null, {
                        length: t
                    })
                }

                function _typeof$6(t) {
                    return (_typeof$6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(r) {
                        return typeof r
                    } : function(r) {
                        return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
                    })(t)
                }
                var subframeEnabled = !0,
                    expressionsPlugin = null,
                    expressionsInterfaces = null,
                    idPrefix$1 = "",
                    isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                    _shouldRoundValues = !1,
                    bmPow = Math.pow,
                    bmSqrt = Math.sqrt,
                    bmFloor = Math.floor,
                    bmMax = Math.max,
                    bmMin = Math.min,
                    BMMath = {};

                function ProjectInterface$1() {
                    return {}
                }! function() {
                    var e, t = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
                        r = t.length;
                    for (e = 0; e < r; e += 1) BMMath[t[e]] = Math[t[e]]
                }(), BMMath.random = Math.random, BMMath.abs = function(t) {
                    if ("object" === _typeof$6(t) && t.length) {
                        var i, r = createSizedArray(t.length),
                            s = t.length;
                        for (i = 0; i < s; i += 1) r[i] = Math.abs(t[i]);
                        return r
                    }
                    return Math.abs(t)
                };
                var defaultCurveSegments = 150,
                    degToRads = Math.PI / 180,
                    roundCorner = .5519;

                function roundValues(t) {
                    _shouldRoundValues = !!t
                }

                function bmRnd(t) {
                    return _shouldRoundValues ? Math.round(t) : t
                }

                function styleDiv(t) {
                    t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d"
                }

                function BMEnterFrameEvent(t, e, r, i) {
                    this.type = t, this.currentTime = e, this.totalTime = r, this.direction = i < 0 ? -1 : 1
                }

                function BMCompleteEvent(t, e) {
                    this.type = t, this.direction = e < 0 ? -1 : 1
                }

                function BMCompleteLoopEvent(t, e, r, i) {
                    this.type = t, this.currentLoop = r, this.totalLoops = e, this.direction = i < 0 ? -1 : 1
                }

                function BMSegmentStartEvent(t, e, r) {
                    this.type = t, this.firstFrame = e, this.totalFrames = r
                }

                function BMDestroyEvent(t, e) {
                    this.type = t, this.target = e
                }

                function BMRenderFrameErrorEvent(t, e) {
                    this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
                }

                function BMConfigErrorEvent(t) {
                    this.type = "configError", this.nativeError = t
                }

                function BMAnimationConfigErrorEvent(t, e) {
                    this.type = t, this.nativeError = e
                }
                var createElementID = (t = 0, function() {
                        return idPrefix$1 + "__lottie_element_" + (t += 1)
                    }),
                    t;

                function HSVtoRGB(t, e, r) {
                    var i, s, a, n, h, o, f, v;
                    switch (o = r * (1 - e), f = r * (1 - (h = 6 * t - (n = Math.floor(6 * t))) * e), v = r * (1 - (1 - h) * e), n % 6) {
                        case 0:
                            i = r, s = v, a = o;
                            break;
                        case 1:
                            i = f, s = r, a = o;
                            break;
                        case 2:
                            i = o, s = r, a = v;
                            break;
                        case 3:
                            i = o, s = f, a = r;
                            break;
                        case 4:
                            i = v, s = o, a = r;
                            break;
                        case 5:
                            i = r, s = o, a = f
                    }
                    return [i, s, a]
                }

                function RGBtoHSV(t, e, r) {
                    var n, i = Math.max(t, e, r),
                        s = Math.min(t, e, r),
                        a = i - s,
                        h = 0 === i ? 0 : a / i,
                        o = i / 255;
                    switch (i) {
                        case s:
                            n = 0;
                            break;
                        case t:
                            n = e - r + a * (e < r ? 6 : 0), n /= 6 * a;
                            break;
                        case e:
                            n = r - t + 2 * a, n /= 6 * a;
                            break;
                        case r:
                            n = t - e + 4 * a, n /= 6 * a
                    }
                    return [n, h, o]
                }

                function addSaturationToRGB(t, e) {
                    var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                    return r[1] += e, r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2])
                }

                function addBrightnessToRGB(t, e) {
                    var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                    return r[2] += e, r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2])
                }

                function addHueToRGB(t, e) {
                    var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                    return r[0] += e / 360, r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2])
                }
                var rgbToHex = function() {
                        var e, r, t = [];
                        for (e = 0; e < 256; e += 1) r = e.toString(16), t[e] = 1 === r.length ? "0" + r : r;
                        return function(i, s, a) {
                            return i < 0 && (i = 0), s < 0 && (s = 0), a < 0 && (a = 0), "#" + t[i] + t[s] + t[a]
                        }
                    }(),
                    setSubframeEnabled = function(e) {
                        subframeEnabled = !!e
                    },
                    getSubframeEnabled = function() {
                        return subframeEnabled
                    },
                    setExpressionsPlugin = function(e) {
                        expressionsPlugin = e
                    },
                    getExpressionsPlugin = function() {
                        return expressionsPlugin
                    },
                    setExpressionInterfaces = function(e) {
                        expressionsInterfaces = e
                    },
                    getExpressionInterfaces = function() {
                        return expressionsInterfaces
                    },
                    setDefaultCurveSegments = function(e) {
                        defaultCurveSegments = e
                    },
                    getDefaultCurveSegments = function() {
                        return defaultCurveSegments
                    },
                    setIdPrefix = function(e) {
                        idPrefix$1 = e
                    },
                    getIdPrefix = function() {
                        return idPrefix$1
                    };

                function createNS(t) {
                    return document.createElementNS(svgNS, t)
                }

                function _typeof$5(t) {
                    return (_typeof$5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(r) {
                        return typeof r
                    } : function(r) {
                        return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
                    })(t)
                }
                var dataManager = function() {
                        var r, i, t = 1,
                            e = [],
                            s = {
                                onmessage: function() {},
                                postMessage: function(b) {
                                    r({
                                        data: b
                                    })
                                }
                            },
                            a = {
                                postMessage: function(b) {
                                    s.onmessage({
                                        data: b
                                    })
                                }
                            };

                        function h() {
                            i || ((i = function n(p) {
                                if (window.Worker && window.Blob && getWebWorker()) {
                                    var b = new Blob(["var _workerSelf = self; self.onmessage = ", p.toString()], {
                                            type: "text/javascript"
                                        }),
                                        g = URL.createObjectURL(b);
                                    return new Worker(g)
                                }
                                return r = p, s
                            }(function(b) {
                                if (a.dataManager || (a.dataManager = function g() {
                                        function C(I, x) {
                                            var A, y, F, k, R, z, P = I.length;
                                            for (y = 0; y < P; y += 1)
                                                if ("ks" in (A = I[y]) && !A.completed) {
                                                    if (A.completed = !0, A.hasMask) {
                                                        var N = A.masksProperties;
                                                        for (k = N.length, F = 0; F < k; F += 1)
                                                            if (N[F].pt.k.i) E(N[F].pt.k);
                                                            else
                                                                for (z = N[F].pt.k.length, R = 0; R < z; R += 1) N[F].pt.k[R].s && E(N[F].pt.k[R].s[0]), N[F].pt.k[R].e && E(N[F].pt.k[R].e[0])
                                                    }
                                                    0 === A.ty ? (A.layers = l(A.refId, x), C(A.layers, x)) : 4 === A.ty && d(A.shapes)
                                                }
                                        }

                                        function l(I, x) {
                                            var A = function u(I, x) {
                                                for (var A = 0, y = x.length; A < y;) {
                                                    if (x[A].id === I) return x[A];
                                                    A += 1
                                                }
                                                return null
                                            }(I, x);
                                            return A ? A.layers.__used ? JSON.parse(JSON.stringify(A.layers)) : (A.layers.__used = !0, A.layers) : null
                                        }

                                        function d(I) {
                                            var x, y, P;
                                            for (x = I.length - 1; x >= 0; x -= 1)
                                                if ("sh" === I[x].ty)
                                                    if (I[x].ks.k.i) E(I[x].ks.k);
                                                    else
                                                        for (P = I[x].ks.k.length, y = 0; y < P; y += 1) I[x].ks.k[y].s && E(I[x].ks.k[y].s[0]), I[x].ks.k[y].e && E(I[x].ks.k[y].e[0]);
                                            else "gr" === I[x].ty && d(I[x].it)
                                        }

                                        function E(I) {
                                            var x, A = I.i.length;
                                            for (x = 0; x < A; x += 1) I.i[x][0] += I.v[x][0], I.i[x][1] += I.v[x][1], I.o[x][0] += I.v[x][0], I.o[x][1] += I.v[x][1]
                                        }

                                        function _(I, x) {
                                            var A = x ? x.split(".") : [100, 100, 100];
                                            return I[0] > A[0] || !(A[0] > I[0]) && (I[1] > A[1] || !(A[1] > I[1]) && (I[2] > A[2] || !(A[2] > I[2]) && null))
                                        }
                                        var I, T = function() {
                                                var I = [4, 4, 14];

                                                function x(y) {
                                                    y.t.d = {
                                                        k: [{
                                                            s: y.t.d,
                                                            t: 0
                                                        }]
                                                    }
                                                }

                                                function A(y) {
                                                    var P, F = y.length;
                                                    for (P = 0; P < F; P += 1) 5 === y[P].ty && x(y[P])
                                                }
                                                return function(y) {
                                                    if (_(I, y.v) && (A(y.layers), y.assets)) {
                                                        var P, F = y.assets.length;
                                                        for (P = 0; P < F; P += 1) y.assets[P].layers && A(y.assets[P].layers)
                                                    }
                                                }
                                            }(),
                                            M = (I = [4, 7, 99], function(x) {
                                                if (x.chars && !_(I, x.v)) {
                                                    var A, y = x.chars.length;
                                                    for (A = 0; A < y; A += 1) {
                                                        var P = x.chars[A];
                                                        P.data && P.data.shapes && (d(P.data.shapes), P.data.ip = 0, P.data.op = 99999, P.data.st = 0, P.data.sr = 1, P.data.ks = {
                                                            p: {
                                                                k: [0, 0],
                                                                a: 0
                                                            },
                                                            s: {
                                                                k: [100, 100],
                                                                a: 0
                                                            },
                                                            a: {
                                                                k: [0, 0],
                                                                a: 0
                                                            },
                                                            r: {
                                                                k: 0,
                                                                a: 0
                                                            },
                                                            o: {
                                                                k: 100,
                                                                a: 0
                                                            }
                                                        }, x.chars[A].t || (P.data.shapes.push({
                                                            ty: "no"
                                                        }), P.data.shapes[0].it.push({
                                                            p: {
                                                                k: [0, 0],
                                                                a: 0
                                                            },
                                                            s: {
                                                                k: [100, 100],
                                                                a: 0
                                                            },
                                                            a: {
                                                                k: [0, 0],
                                                                a: 0
                                                            },
                                                            r: {
                                                                k: 0,
                                                                a: 0
                                                            },
                                                            o: {
                                                                k: 100,
                                                                a: 0
                                                            },
                                                            sk: {
                                                                k: 0,
                                                                a: 0
                                                            },
                                                            sa: {
                                                                k: 0,
                                                                a: 0
                                                            },
                                                            ty: "tr"
                                                        })))
                                                    }
                                                }
                                            }),
                                            w = function() {
                                                var I = [5, 7, 15];

                                                function x(y) {
                                                    var P = y.t.p;
                                                    "number" == typeof P.a && (P.a = {
                                                        a: 0,
                                                        k: P.a
                                                    }), "number" == typeof P.p && (P.p = {
                                                        a: 0,
                                                        k: P.p
                                                    }), "number" == typeof P.r && (P.r = {
                                                        a: 0,
                                                        k: P.r
                                                    })
                                                }

                                                function A(y) {
                                                    var P, F = y.length;
                                                    for (P = 0; P < F; P += 1) 5 === y[P].ty && x(y[P])
                                                }
                                                return function(y) {
                                                    if (_(I, y.v) && (A(y.layers), y.assets)) {
                                                        var P, F = y.assets.length;
                                                        for (P = 0; P < F; P += 1) y.assets[P].layers && A(y.assets[P].layers)
                                                    }
                                                }
                                            }(),
                                            G = function() {
                                                var I = [4, 1, 9];

                                                function x(y) {
                                                    var P, k, R, F = y.length;
                                                    for (P = 0; P < F; P += 1)
                                                        if ("gr" === y[P].ty) x(y[P].it);
                                                        else if ("fl" === y[P].ty || "st" === y[P].ty)
                                                        if (y[P].c.k && y[P].c.k[0].i)
                                                            for (R = y[P].c.k.length, k = 0; k < R; k += 1) y[P].c.k[k].s && (y[P].c.k[k].s[0] /= 255, y[P].c.k[k].s[1] /= 255, y[P].c.k[k].s[2] /= 255, y[P].c.k[k].s[3] /= 255), y[P].c.k[k].e && (y[P].c.k[k].e[0] /= 255, y[P].c.k[k].e[1] /= 255, y[P].c.k[k].e[2] /= 255, y[P].c.k[k].e[3] /= 255);
                                                        else y[P].c.k[0] /= 255, y[P].c.k[1] /= 255, y[P].c.k[2] /= 255, y[P].c.k[3] /= 255
                                                }

                                                function A(y) {
                                                    var P, F = y.length;
                                                    for (P = 0; P < F; P += 1) 4 === y[P].ty && x(y[P].shapes)
                                                }
                                                return function(y) {
                                                    if (_(I, y.v) && (A(y.layers), y.assets)) {
                                                        var P, F = y.assets.length;
                                                        for (P = 0; P < F; P += 1) y.assets[P].layers && A(y.assets[P].layers)
                                                    }
                                                }
                                            }(),
                                            L = function() {
                                                var I = [4, 4, 18];

                                                function x(y) {
                                                    var P, k, R;
                                                    for (P = y.length - 1; P >= 0; P -= 1)
                                                        if ("sh" === y[P].ty)
                                                            if (y[P].ks.k.i) y[P].ks.k.c = y[P].closed;
                                                            else
                                                                for (R = y[P].ks.k.length, k = 0; k < R; k += 1) y[P].ks.k[k].s && (y[P].ks.k[k].s[0].c = y[P].closed), y[P].ks.k[k].e && (y[P].ks.k[k].e[0].c = y[P].closed);
                                                    else "gr" === y[P].ty && x(y[P].it)
                                                }

                                                function A(y) {
                                                    var P, F, R, z, N, H, k = y.length;
                                                    for (F = 0; F < k; F += 1) {
                                                        if ((P = y[F]).hasMask) {
                                                            var W = P.masksProperties;
                                                            for (z = W.length, R = 0; R < z; R += 1)
                                                                if (W[R].pt.k.i) W[R].pt.k.c = W[R].cl;
                                                                else
                                                                    for (H = W[R].pt.k.length, N = 0; N < H; N += 1) W[R].pt.k[N].s && (W[R].pt.k[N].s[0].c = W[R].cl), W[R].pt.k[N].e && (W[R].pt.k[N].e[0].c = W[R].cl)
                                                        }
                                                        4 === P.ty && x(P.shapes)
                                                    }
                                                }
                                                return function(y) {
                                                    if (_(I, y.v) && (A(y.layers), y.assets)) {
                                                        var P, F = y.assets.length;
                                                        for (P = 0; P < F; P += 1) y.assets[P].layers && A(y.assets[P].layers)
                                                    }
                                                }
                                            }(),
                                            B = {
                                                completeData: function V(I) {
                                                    I.__complete || (G(I), T(I), M(I), w(I), L(I), C(I.layers, I.assets), function c(I, x) {
                                                        if (I) {
                                                            var A = 0,
                                                                y = I.length;
                                                            for (A = 0; A < y; A += 1) 1 === I[A].t && (I[A].data.layers = l(I[A].data.refId, x), C(I[A].data.layers, x))
                                                        }
                                                    }(I.chars, I.assets), I.__complete = !0)
                                                }
                                            };
                                        return B.checkColors = G, B.checkChars = M, B.checkPathProperties = w, B.checkShapes = L, B.completeLayers = C, B
                                    }()), a.assetLoader || (a.assetLoader = function() {
                                        function C(u) {
                                            var l = u.getResponseHeader("content-type");
                                            return l && "json" === u.responseType && -1 !== l.indexOf("json") || u.response && "object" === _typeof$5(u.response) ? u.response : u.response && "string" == typeof u.response ? JSON.parse(u.response) : u.responseText ? JSON.parse(u.responseText) : null
                                        }
                                        return {
                                            load: function c(u, l, d, E) {
                                                var _, T = new XMLHttpRequest;
                                                try {
                                                    T.responseType = "json"
                                                } catch {}
                                                T.onreadystatechange = function() {
                                                    if (4 === T.readyState)
                                                        if (200 === T.status) _ = C(T), d(_);
                                                        else try {
                                                            _ = C(T), d(_)
                                                        } catch (M) {
                                                            E && E(M)
                                                        }
                                                };
                                                try {
                                                    T.open(["G", "E", "T"].join(""), u, !0)
                                                } catch {
                                                    T.open(["G", "E", "T"].join(""), l + "/" + u, !0)
                                                }
                                                T.send()
                                            }
                                        }
                                    }()), "loadAnimation" === b.data.type) a.assetLoader.load(b.data.path, b.data.fullPath, function(C) {
                                    a.dataManager.completeData(C), a.postMessage({
                                        id: b.data.id,
                                        payload: C,
                                        status: "success"
                                    })
                                }, function() {
                                    a.postMessage({
                                        id: b.data.id,
                                        status: "error"
                                    })
                                });
                                else if ("complete" === b.data.type) {
                                    var m = b.data.animation;
                                    a.dataManager.completeData(m), a.postMessage({
                                        id: b.data.id,
                                        payload: m,
                                        status: "success"
                                    })
                                } else "loadData" === b.data.type && a.assetLoader.load(b.data.path, b.data.fullPath, function(C) {
                                    a.postMessage({
                                        id: b.data.id,
                                        payload: C,
                                        status: "success"
                                    })
                                }, function() {
                                    a.postMessage({
                                        id: b.data.id,
                                        status: "error"
                                    })
                                })
                            })).onmessage = function(p) {
                                var b = p.data,
                                    g = b.id,
                                    m = e[g];
                                e[g] = null, "success" === b.status ? m.onComplete(b.payload) : m.onError && m.onError()
                            })
                        }

                        function o(p, b) {
                            var g = "processId_" + (t += 1);
                            return e[g] = {
                                onComplete: p,
                                onError: b
                            }, g
                        }
                        return {
                            loadAnimation: function f(p, b, g) {
                                h();
                                var m = o(b, g);
                                i.postMessage({
                                    type: "loadAnimation",
                                    path: p,
                                    fullPath: window.location.origin + window.location.pathname,
                                    id: m
                                })
                            },
                            loadData: function v(p, b, g) {
                                h();
                                var m = o(b, g);
                                i.postMessage({
                                    type: "loadData",
                                    path: p,
                                    fullPath: window.location.origin + window.location.pathname,
                                    id: m
                                })
                            },
                            completeAnimation: function S(p, b, g) {
                                h();
                                var m = o(b, g);
                                i.postMessage({
                                    type: "complete",
                                    animation: p,
                                    id: m
                                })
                            }
                        }
                    }(),
                    ImagePreloader = function() {
                        var t = function() {
                            var c = createTag("canvas");
                            c.width = 1, c.height = 1;
                            var u = c.getContext("2d");
                            return u.fillStyle = "rgba(0,0,0,0)", u.fillRect(0, 0, 1, 1), c
                        }();

                        function e() {
                            this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                        }

                        function r() {
                            this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                        }

                        function i(c, u, l) {
                            var d = "";
                            if (c.e) d = c.p;
                            else if (u) {
                                var E = c.p; - 1 !== E.indexOf("images/") && (E = E.split("/")[1]), d = u + E
                            } else d = l, d += c.u ? c.u : "", d += c.p;
                            return d
                        }

                        function s(c) {
                            var u = 0,
                                l = setInterval(function() {
                                    (c.getBBox().width || u > 500) && (this._imageLoaded(), clearInterval(l)), u += 1
                                }.bind(this), 50)
                        }

                        function h(c) {
                            var u = {
                                    assetData: c
                                },
                                l = i(c, this.assetsPath, this.path);
                            return dataManager.loadData(l, function(d) {
                                u.img = d, this._footageLoaded()
                            }.bind(this), function() {
                                u.img = {}, this._footageLoaded()
                            }.bind(this)), u
                        }

                        function C() {
                            this._imageLoaded = e.bind(this), this._footageLoaded = r.bind(this), this.testImageLoaded = s.bind(this), this.createFootageData = h.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
                        }
                        return C.prototype = {
                            loadAssets: function o(c, u) {
                                this.imagesLoadedCb = u;
                                var l, d = c.length;
                                for (l = 0; l < d; l += 1) c[l].layers || (c[l].t && "seq" !== c[l].t ? 3 === c[l].t && (this.totalFootages += 1, this.images.push(this.createFootageData(c[l]))) : (this.totalImages += 1, this.images.push(this._createImageData(c[l]))))
                            },
                            setAssetsPath: function v(c) {
                                this.assetsPath = c || ""
                            },
                            setPath: function f(c) {
                                this.path = c || ""
                            },
                            loadedImages: function b() {
                                return this.totalImages === this.loadedAssets
                            },
                            loadedFootages: function g() {
                                return this.totalFootages === this.loadedFootagesCount
                            },
                            destroy: function p() {
                                this.imagesLoadedCb = null, this.images.length = 0
                            },
                            getAsset: function S(c) {
                                for (var u = 0, l = this.images.length; u < l;) {
                                    if (this.images[u].assetData === c) return this.images[u].img;
                                    u += 1
                                }
                                return null
                            },
                            createImgData: function n(c) {
                                var u = i(c, this.assetsPath, this.path),
                                    l = createTag("img");
                                l.crossOrigin = "anonymous", l.addEventListener("load", this._imageLoaded, !1), l.addEventListener("error", function() {
                                    d.img = t, this._imageLoaded()
                                }.bind(this), !1), l.src = u;
                                var d = {
                                    img: l,
                                    assetData: c
                                };
                                return d
                            },
                            createImageData: function a(c) {
                                var u = i(c, this.assetsPath, this.path),
                                    l = createNS("image");
                                isSafari ? this.testImageLoaded(l) : l.addEventListener("load", this._imageLoaded, !1), l.addEventListener("error", function() {
                                    d.img = t, this._imageLoaded()
                                }.bind(this), !1), l.setAttributeNS("http://www.w3.org/1999/xlink", "href", u), this._elementHelper.append ? this._elementHelper.append(l) : this._elementHelper.appendChild(l);
                                var d = {
                                    img: l,
                                    assetData: c
                                };
                                return d
                            },
                            imageLoaded: e,
                            footageLoaded: r,
                            setCacheType: function m(c, u) {
                                "svg" === c ? (this._elementHelper = u, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
                            }
                        }, C
                    }();

                function BaseEvent() {}
                BaseEvent.prototype = {
                    triggerEvent: function(e, r) {
                        if (this._cbs[e])
                            for (var i = this._cbs[e], s = 0; s < i.length; s += 1) i[s](r)
                    },
                    addEventListener: function(e, r) {
                        return this._cbs[e] || (this._cbs[e] = []), this._cbs[e].push(r),
                            function() {
                                this.removeEventListener(e, r)
                            }.bind(this)
                    },
                    removeEventListener: function(e, r) {
                        if (r) {
                            if (this._cbs[e]) {
                                for (var i = 0, s = this._cbs[e].length; i < s;) this._cbs[e][i] === r && (this._cbs[e].splice(i, 1), i -= 1, s -= 1), i += 1;
                                this._cbs[e].length || (this._cbs[e] = null)
                            }
                        } else this._cbs[e] = null
                    }
                };
                var markerParser = function() {
                        function t(e) {
                            for (var s, r = e.split("\r\n"), i = {}, a = 0, n = 0; n < r.length; n += 1) 2 === (s = r[n].split(":")).length && (i[s[0]] = s[1].trim(), a += 1);
                            if (0 === a) throw new Error;
                            return i
                        }
                        return function(e) {
                            for (var r = [], i = 0; i < e.length; i += 1) {
                                var s = e[i],
                                    a = {
                                        time: s.tm,
                                        duration: s.dr
                                    };
                                try {
                                    a.payload = JSON.parse(e[i].cm)
                                } catch {
                                    try {
                                        a.payload = t(e[i].cm)
                                    } catch {
                                        a.payload = {
                                            name: e[i].cm
                                        }
                                    }
                                }
                                r.push(a)
                            }
                            return r
                        }
                    }(),
                    ProjectInterface = function() {
                        function t(e) {
                            this.compositions.push(e)
                        }
                        return function() {
                            function e(r) {
                                for (var i = 0, s = this.compositions.length; i < s;) {
                                    if (this.compositions[i].data && this.compositions[i].data.nm === r) return this.compositions[i].prepareFrame && this.compositions[i].data.xt && this.compositions[i].prepareFrame(this.currentFrame), this.compositions[i].compInterface;
                                    i += 1
                                }
                                return null
                            }
                            return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
                        }
                    }(),
                    renderers = {},
                    registerRenderer = function(e, r) {
                        renderers[e] = r
                    };

                function getRenderer(t) {
                    return renderers[t]
                }

                function getRegisteredRenderer() {
                    if (renderers.canvas) return "canvas";
                    for (var t in renderers)
                        if (renderers[t]) return t;
                    return ""
                }

                function _typeof$4(t) {
                    return (_typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(r) {
                        return typeof r
                    } : function(r) {
                        return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
                    })(t)
                }
                var AnimationItem = function() {
                    this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0), this.expressionsPlugin = getExpressionsPlugin()
                };
                extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(t) {
                    (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
                    var e = "svg";
                    t.animType ? e = t.animType : t.renderer && (e = t.renderer);
                    var r = getRenderer(e);
                    this.renderer = new r(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, this.loop = "" === t.loop || null == t.loop || !0 === t.loop || !1 !== t.loop && parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (this.path = -1 !== t.path.lastIndexOf("\\") ? t.path.substr(0, t.path.lastIndexOf("\\") + 1) : t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(t.path, this.configAnimation, this.onSetupError))
                }, AnimationItem.prototype.onSetupError = function() {
                    this.trigger("data_failed")
                }, AnimationItem.prototype.setupAnimation = function(t) {
                    dataManager.completeAnimation(t, this.configAnimation)
                }, AnimationItem.prototype.setData = function(t, e) {
                    e && "object" !== _typeof$4(e) && (e = JSON.parse(e));
                    var r = {
                            wrapper: t,
                            animationData: e
                        },
                        i = t.attributes;
                    r.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", r.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
                    var s = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
                    "false" === s ? r.loop = !1 : "true" === s ? r.loop = !0 : "" !== s && (r.loop = parseInt(s, 10));
                    var a = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : !i.getNamedItem("bm-autoplay") || i.getNamedItem("bm-autoplay").value;
                    r.autoplay = "false" !== a, r.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "", "false" === (i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "") && (r.prerender = !1), r.path ? this.setParams(r) : this.trigger("destroy")
                }, AnimationItem.prototype.includeLayers = function(t) {
                    t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
                    var r, a, e = this.animationData.layers,
                        i = e.length,
                        s = t.layers,
                        n = s.length;
                    for (a = 0; a < n; a += 1)
                        for (r = 0; r < i;) {
                            if (e[r].id === s[a].id) {
                                e[r] = s[a];
                                break
                            }
                            r += 1
                        }
                    if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
                        for (i = t.assets.length, r = 0; r < i; r += 1) this.animationData.assets.push(t.assets[r]);
                    this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
                }, AnimationItem.prototype.onSegmentComplete = function(t) {
                    this.animationData = t;
                    var e = getExpressionsPlugin();
                    e && e.initExpressions(this), this.loadNextSegment()
                }, AnimationItem.prototype.loadNextSegment = function() {
                    var t = this.animationData.segments;
                    if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
                    var e = t.shift();
                    this.timeCompleted = e.time * this.frameRate;
                    var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
                    this.segmentPos += 1, dataManager.loadData(r, this.includeLayers.bind(this), function() {
                        this.trigger("data_failed")
                    }.bind(this))
                }, AnimationItem.prototype.loadSegments = function() {
                    this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
                }, AnimationItem.prototype.imagesLoaded = function() {
                    this.trigger("loaded_images"), this.checkLoaded()
                }, AnimationItem.prototype.preloadImages = function() {
                    this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
                }, AnimationItem.prototype.configAnimation = function(t) {
                    if (this.renderer) try {
                        this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = markerParser(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
                    } catch (e) {
                        this.triggerConfigError(e)
                    }
                }, AnimationItem.prototype.waitForFontsLoaded = function() {
                    this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
                }, AnimationItem.prototype.checkLoaded = function() {
                    if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages()) {
                        this.isLoaded = !0;
                        var t = getExpressionsPlugin();
                        t && t.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
                            this.trigger("DOMLoaded")
                        }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
                    }
                }, AnimationItem.prototype.resize = function(t, e) {
                    this.renderer.updateContainerSize("number" == typeof t ? t : void 0, "number" == typeof e ? e : void 0)
                }, AnimationItem.prototype.setSubframe = function(t) {
                    this.isSubframeEnabled = !!t
                }, AnimationItem.prototype.gotoFrame = function() {
                    this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
                }, AnimationItem.prototype.renderFrame = function() {
                    if (!1 !== this.isLoaded && this.renderer) try {
                        this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame)
                    } catch (t) {
                        this.triggerRenderFrameError(t)
                    }
                }, AnimationItem.prototype.play = function(t) {
                    t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
                }, AnimationItem.prototype.pause = function(t) {
                    t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
                }, AnimationItem.prototype.togglePause = function(t) {
                    t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause())
                }, AnimationItem.prototype.stop = function(t) {
                    t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
                }, AnimationItem.prototype.getMarkerData = function(t) {
                    for (var e, r = 0; r < this.markers.length; r += 1)
                        if ((e = this.markers[r]).payload && e.payload.name === t) return e;
                    return null
                }, AnimationItem.prototype.goToAndStop = function(t, e, r) {
                    if (!r || this.name === r) {
                        var i = Number(t);
                        if (isNaN(i)) {
                            var s = this.getMarkerData(t);
                            s && this.goToAndStop(s.time, !0)
                        } else this.setCurrentRawFrameValue(e ? t : t * this.frameModifier);
                        this.pause()
                    }
                }, AnimationItem.prototype.goToAndPlay = function(t, e, r) {
                    if (!r || this.name === r) {
                        var i = Number(t);
                        if (isNaN(i)) {
                            var s = this.getMarkerData(t);
                            s && (s.duration ? this.playSegments([s.time, s.time + s.duration], !0) : this.goToAndStop(s.time, !0))
                        } else this.goToAndStop(i, e, r);
                        this.play()
                    }
                }, AnimationItem.prototype.advanceTime = function(t) {
                    if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                        var e = this.currentRawFrame + t * this.frameModifier,
                            r = !1;
                        e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (r = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (r = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), r && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
                    }
                }, AnimationItem.prototype.adjustSegment = function(t, e) {
                    this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
                }, AnimationItem.prototype.setSegment = function(t, e) {
                    var r = -1;
                    this.isPaused && (this.currentRawFrame + this.firstFrame < t ? r = t : this.currentRawFrame + this.firstFrame > e && (r = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, -1 !== r && this.goToAndStop(r, !0)
                }, AnimationItem.prototype.playSegments = function(t, e) {
                    if (e && (this.segments.length = 0), "object" === _typeof$4(t[0])) {
                        var r, i = t.length;
                        for (r = 0; r < i; r += 1) this.segments.push(t[r])
                    } else this.segments.push(t);
                    this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
                }, AnimationItem.prototype.resetSegments = function(t) {
                    this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
                }, AnimationItem.prototype.checkSegments = function(t) {
                    return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0)
                }, AnimationItem.prototype.destroy = function(t) {
                    t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null)
                }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
                    this.currentRawFrame = t, this.gotoFrame()
                }, AnimationItem.prototype.setSpeed = function(t) {
                    this.playSpeed = t, this.updaFrameModifier()
                }, AnimationItem.prototype.setDirection = function(t) {
                    this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
                }, AnimationItem.prototype.setLoop = function(t) {
                    this.loop = t
                }, AnimationItem.prototype.setVolume = function(t, e) {
                    e && this.name !== e || this.audioController.setVolume(t)
                }, AnimationItem.prototype.getVolume = function() {
                    return this.audioController.getVolume()
                }, AnimationItem.prototype.mute = function(t) {
                    t && this.name !== t || this.audioController.mute()
                }, AnimationItem.prototype.unmute = function(t) {
                    t && this.name !== t || this.audioController.unmute()
                }, AnimationItem.prototype.updaFrameModifier = function() {
                    this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
                }, AnimationItem.prototype.getPath = function() {
                    return this.path
                }, AnimationItem.prototype.getAssetsPath = function(t) {
                    var e = "";
                    if (t.e) e = t.p;
                    else if (this.assetsPath) {
                        var r = t.p; - 1 !== r.indexOf("images/") && (r = r.split("/")[1]), e = this.assetsPath + r
                    } else e = this.path, e += t.u ? t.u : "", e += t.p;
                    return e
                }, AnimationItem.prototype.getAssetData = function(t) {
                    for (var e = 0, r = this.assets.length; e < r;) {
                        if (t === this.assets[e].id) return this.assets[e];
                        e += 1
                    }
                    return null
                }, AnimationItem.prototype.hide = function() {
                    this.renderer.hide()
                }, AnimationItem.prototype.show = function() {
                    this.renderer.show()
                }, AnimationItem.prototype.getDuration = function(t) {
                    return t ? this.totalFrames : this.totalFrames / this.frameRate
                }, AnimationItem.prototype.updateDocumentData = function(t, e, r) {
                    try {
                        this.renderer.getElementByPath(t).updateDocumentData(e, r)
                    } catch {}
                }, AnimationItem.prototype.trigger = function(t) {
                    if (this._cbs && this._cbs[t]) switch (t) {
                        case "enterFrame":
                            this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
                            break;
                        case "drawnFrame":
                            this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t, this.drawnFrameEvent);
                            break;
                        case "loopComplete":
                            this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
                            break;
                        case "complete":
                            this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                            break;
                        case "segmentStart":
                            this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
                            break;
                        case "destroy":
                            this.triggerEvent(t, new BMDestroyEvent(t, this));
                            break;
                        default:
                            this.triggerEvent(t)
                    }
                    "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
                }, AnimationItem.prototype.triggerRenderFrameError = function(t) {
                    var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
                    this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
                }, AnimationItem.prototype.triggerConfigError = function(t) {
                    var e = new BMConfigErrorEvent(t, this.currentFrame);
                    this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
                };
                var animationManager = function() {
                        var t = {},
                            e = [],
                            r = 0,
                            i = 0,
                            s = 0,
                            a = !0,
                            n = !1;

                        function h(x) {
                            for (var A = 0, y = x.target; A < i;) e[A].animation === y && (e.splice(A, 1), A -= 1, i -= 1, y.isPaused || S()), A += 1
                        }

                        function o(x, A) {
                            if (!x) return null;
                            for (var y = 0; y < i;) {
                                if (e[y].elem === x && null !== e[y].elem) return e[y].animation;
                                y += 1
                            }
                            var P = new AnimationItem;
                            return p(P, x), P.setData(x, A), P
                        }

                        function v() {
                            s += 1, G()
                        }

                        function S() {
                            s -= 1
                        }

                        function p(x, A) {
                            x.addEventListener("destroy", h), x.addEventListener("_active", v), x.addEventListener("_idle", S), e.push({
                                elem: A,
                                animation: x
                            }), i += 1
                        }

                        function c(x) {
                            var y, A = x - r;
                            for (y = 0; y < i; y += 1) e[y].animation.advanceTime(A);
                            r = x, s && !n ? window.requestAnimationFrame(c) : a = !0
                        }

                        function u(x) {
                            r = x, window.requestAnimationFrame(c)
                        }

                        function G() {
                            !n && s && a && (window.requestAnimationFrame(u), a = !1)
                        }
                        return t.registerAnimation = o, t.loadAnimation = function b(x) {
                            var A = new AnimationItem;
                            return p(A, null), A.setParams(x), A
                        }, t.setSpeed = function g(x, A) {
                            var y;
                            for (y = 0; y < i; y += 1) e[y].animation.setSpeed(x, A)
                        }, t.setDirection = function m(x, A) {
                            var y;
                            for (y = 0; y < i; y += 1) e[y].animation.setDirection(x, A)
                        }, t.play = function C(x) {
                            var A;
                            for (A = 0; A < i; A += 1) e[A].animation.play(x)
                        }, t.pause = function l(x) {
                            var A;
                            for (A = 0; A < i; A += 1) e[A].animation.pause(x)
                        }, t.stop = function E(x) {
                            var A;
                            for (A = 0; A < i; A += 1) e[A].animation.stop(x)
                        }, t.togglePause = function _(x) {
                            var A;
                            for (A = 0; A < i; A += 1) e[A].animation.togglePause(x)
                        }, t.searchAnimations = function M(x, A, y) {
                            var F, P = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                                k = P.length;
                            for (F = 0; F < k; F += 1) y && P[F].setAttribute("data-bm-type", y), o(P[F], x);
                            if (A && 0 === k) {
                                y || (y = "svg");
                                var R = document.getElementsByTagName("body")[0];
                                R.innerText = "";
                                var z = createTag("div");
                                z.style.width = "100%", z.style.height = "100%", z.setAttribute("data-bm-type", y), R.appendChild(z), o(z, x)
                            }
                        }, t.resize = function w() {
                            var x;
                            for (x = 0; x < i; x += 1) e[x].animation.resize()
                        }, t.goToAndStop = function d(x, A, y) {
                            var P;
                            for (P = 0; P < i; P += 1) e[P].animation.goToAndStop(x, A, y)
                        }, t.destroy = function T(x) {
                            var A;
                            for (A = i - 1; A >= 0; A -= 1) e[A].animation.destroy(x)
                        }, t.freeze = function L() {
                            n = !0
                        }, t.unfreeze = function V() {
                            n = !1, G()
                        }, t.setVolume = function D(x, A) {
                            var y;
                            for (y = 0; y < i; y += 1) e[y].animation.setVolume(x, A)
                        }, t.mute = function B(x) {
                            var A;
                            for (A = 0; A < i; A += 1) e[A].animation.mute(x)
                        }, t.unmute = function I(x) {
                            var A;
                            for (A = 0; A < i; A += 1) e[A].animation.unmute(x)
                        }, t.getRegisteredAnimations = function f() {
                            var x, A = e.length,
                                y = [];
                            for (x = 0; x < A; x += 1) y.push(e[x].animation);
                            return y
                        }, t
                    }(),
                    BezierFactory = function() {
                        var t = {
                                getBezierEasing: function r(u, l, d, E, _) {
                                    var T = _ || ("bez_" + u + "_" + l + "_" + d + "_" + E).replace(/\./g, "p");
                                    if (e[T]) return e[T];
                                    var M = new c([u, l, d, E]);
                                    return e[T] = M, M
                                }
                            },
                            e = {},
                            h = 11,
                            o = 1 / (h - 1),
                            f = "function" == typeof Float32Array;

                        function v(u, l) {
                            return 1 - 3 * l + 3 * u
                        }

                        function S(u, l) {
                            return 3 * l - 6 * u
                        }

                        function p(u) {
                            return 3 * u
                        }

                        function b(u, l, d) {
                            return ((v(l, d) * u + S(l, d)) * u + p(l)) * u
                        }

                        function g(u, l, d) {
                            return 3 * v(l, d) * u * u + 2 * S(l, d) * u + p(l)
                        }

                        function c(u) {
                            this._p = u, this._mSampleValues = f ? new Float32Array(h) : new Array(h), this._precomputed = !1, this.get = this.get.bind(this)
                        }
                        return c.prototype = {
                            get: function(l) {
                                var d = this._p[0],
                                    E = this._p[1],
                                    _ = this._p[2],
                                    T = this._p[3];
                                return this._precomputed || this._precompute(), d === E && _ === T ? l : 0 === l ? 0 : 1 === l ? 1 : b(this._getTForX(l), E, T)
                            },
                            _precompute: function() {
                                var l = this._p[0],
                                    d = this._p[1],
                                    E = this._p[2],
                                    _ = this._p[3];
                                this._precomputed = !0, (l !== d || E !== _) && this._calcSampleValues()
                            },
                            _calcSampleValues: function() {
                                for (var l = this._p[0], d = this._p[2], E = 0; E < h; ++E) this._mSampleValues[E] = b(E * o, l, d)
                            },
                            _getTForX: function(l) {
                                for (var d = this._p[0], E = this._p[2], _ = this._mSampleValues, T = 0, M = 1, w = h - 1; M !== w && _[M] <= l; ++M) T += o;
                                var L = T + (l - _[--M]) / (_[M + 1] - _[M]) * o,
                                    V = g(L, d, E);
                                return V >= .001 ? function C(u, l, d, E) {
                                    for (var _ = 0; _ < 4; ++_) {
                                        var T = g(l, d, E);
                                        if (0 === T) return l;
                                        l -= (b(l, d, E) - u) / T
                                    }
                                    return l
                                }(l, L, d, E) : 0 === V ? L : function m(u, l, d, E, _) {
                                    var T, M, w = 0;
                                    do {
                                        (T = b(M = l + (d - l) / 2, E, _) - u) > 0 ? d = M : l = M
                                    } while (Math.abs(T) > 1e-7 && ++w < 10);
                                    return M
                                }(l, T, T + o, d, E)
                            }
                        }, t
                    }(),
                    pooling = {
                        double: function t(e) {
                            return e.concat(createSizedArray(e.length))
                        }
                    },
                    poolFactory = function(t, e, r) {
                        var i = 0,
                            s = t,
                            a = createSizedArray(s);
                        return {
                            newElement: function h() {
                                return i ? a[i -= 1] : e()
                            },
                            release: function o(f) {
                                i === s && (a = pooling.double(a), s *= 2), r && r(f), a[i] = f, i += 1
                            }
                        }
                    },
                    bezierLengthPool = poolFactory(8, function t() {
                        return {
                            addedLength: 0,
                            percents: createTypedArray("float32", getDefaultCurveSegments()),
                            lengths: createTypedArray("float32", getDefaultCurveSegments())
                        }
                    }),
                    segmentsLengthPool = poolFactory(8, function t() {
                        return {
                            lengths: [],
                            totalLength: 0
                        }
                    }, function e(r) {
                        var i, s = r.lengths.length;
                        for (i = 0; i < s; i += 1) bezierLengthPool.release(r.lengths[i]);
                        r.lengths.length = 0
                    });

                function bezFunction() {
                    var t = Math;

                    function e(p, b, g, m, C, c) {
                        var u = p * m + b * C + g * c - C * m - c * p - g * b;
                        return u > -.001 && u < .001
                    }
                    var i = function(p, b, g, m) {
                        var c, u, l, d, E, T, C = getDefaultCurveSegments(),
                            _ = 0,
                            M = [],
                            w = [],
                            G = bezierLengthPool.newElement();
                        for (l = g.length, c = 0; c < C; c += 1) {
                            for (E = c / (C - 1), T = 0, u = 0; u < l; u += 1) d = bmPow(1 - E, 3) * p[u] + 3 * bmPow(1 - E, 2) * E * g[u] + 3 * (1 - E) * bmPow(E, 2) * m[u] + bmPow(E, 3) * b[u], M[u] = d, null !== w[u] && (T += bmPow(M[u] - w[u], 2)), w[u] = M[u];
                            T && (_ += T = bmSqrt(T)), G.percents[c] = E, G.lengths[c] = _
                        }
                        return G.addedLength = _, G
                    };

                    function a(p) {
                        this.segmentLength = 0, this.points = new Array(p)
                    }

                    function n(p, b) {
                        this.partialLength = p, this.point = b
                    }
                    var p, h = (p = {}, function(b, g, m, C) {
                        var c = (b[0] + "_" + b[1] + "_" + g[0] + "_" + g[1] + "_" + m[0] + "_" + m[1] + "_" + C[0] + "_" + C[1]).replace(/\./g, "p");
                        if (!p[c]) {
                            var l, d, E, _, T, w, G, u = getDefaultCurveSegments(),
                                M = 0,
                                L = null;
                            2 === b.length && (b[0] !== g[0] || b[1] !== g[1]) && e(b[0], b[1], g[0], g[1], b[0] + m[0], b[1] + m[1]) && e(b[0], b[1], g[0], g[1], g[0] + C[0], g[1] + C[1]) && (u = 2);
                            var V = new a(u);
                            for (E = m.length, l = 0; l < u; l += 1) {
                                for (G = createSizedArray(E), T = l / (u - 1), w = 0, d = 0; d < E; d += 1) _ = bmPow(1 - T, 3) * b[d] + 3 * bmPow(1 - T, 2) * T * (b[d] + m[d]) + 3 * (1 - T) * bmPow(T, 2) * (g[d] + C[d]) + bmPow(T, 3) * g[d], G[d] = _, null !== L && (w += bmPow(G[d] - L[d], 2));
                                M += w = bmSqrt(w), V.points[l] = new n(w, G), L = G
                            }
                            V.segmentLength = M, p[c] = V
                        }
                        return p[c]
                    });

                    function o(p, b) {
                        var g = b.percents,
                            m = b.lengths,
                            C = g.length,
                            c = bmFloor((C - 1) * p),
                            u = p * b.addedLength,
                            l = 0;
                        if (c === C - 1 || 0 === c || u === m[c]) return g[c];
                        for (var d = m[c] > u ? -1 : 1, E = !0; E;)
                            if (m[c] <= u && m[c + 1] > u ? (l = (u - m[c]) / (m[c + 1] - m[c]), E = !1) : c += d, c < 0 || c >= C - 1) {
                                if (c === C - 1) return g[c];
                                E = !1
                            }
                        return g[c] + (g[c + 1] - g[c]) * l
                    }
                    var v = createTypedArray("float32", 8);
                    return {
                        getSegmentsLength: function s(p) {
                            var u, b = segmentsLengthPool.newElement(),
                                g = p.c,
                                m = p.v,
                                C = p.o,
                                c = p.i,
                                l = p._length,
                                d = b.lengths,
                                E = 0;
                            for (u = 0; u < l - 1; u += 1) d[u] = i(m[u], m[u + 1], C[u], c[u + 1]), E += d[u].addedLength;
                            return g && l && (d[u] = i(m[u], m[0], C[u], c[0]), E += d[u].addedLength), b.totalLength = E, b
                        },
                        getNewSegment: function S(p, b, g, m, C, c, u) {
                            C < 0 ? C = 0 : C > 1 && (C = 1);
                            var E, l = o(C, u),
                                d = o(c = c > 1 ? 1 : c, u),
                                _ = p.length,
                                T = 1 - l,
                                M = 1 - d,
                                w = T * T * T,
                                G = l * T * T * 3,
                                L = l * l * T * 3,
                                V = l * l * l,
                                D = T * T * M,
                                B = l * T * M + T * l * M + T * T * d,
                                I = l * l * M + T * l * d + l * T * d,
                                x = l * l * d,
                                A = T * M * M,
                                y = l * M * M + T * d * M + T * M * d,
                                P = l * d * M + T * d * d + l * M * d,
                                F = l * d * d,
                                k = M * M * M,
                                R = d * M * M + M * d * M + M * M * d,
                                z = d * d * M + M * d * d + d * M * d,
                                N = d * d * d;
                            for (E = 0; E < _; E += 1) v[4 * E] = t.round(1e3 * (w * p[E] + G * g[E] + L * m[E] + V * b[E])) / 1e3, v[4 * E + 1] = t.round(1e3 * (D * p[E] + B * g[E] + I * m[E] + x * b[E])) / 1e3, v[4 * E + 2] = t.round(1e3 * (A * p[E] + y * g[E] + P * m[E] + F * b[E])) / 1e3, v[4 * E + 3] = t.round(1e3 * (k * p[E] + R * g[E] + z * m[E] + N * b[E])) / 1e3;
                            return v
                        },
                        getPointInSegment: function f(p, b, g, m, C, c) {
                            var u = o(C, c),
                                l = 1 - u;
                            return [t.round(1e3 * (l * l * l * p[0] + (u * l * l + l * u * l + l * l * u) * g[0] + (u * u * l + l * u * u + u * l * u) * m[0] + u * u * u * b[0])) / 1e3, t.round(1e3 * (l * l * l * p[1] + (u * l * l + l * u * l + l * l * u) * g[1] + (u * u * l + l * u * u + u * l * u) * m[1] + u * u * u * b[1])) / 1e3]
                        },
                        buildBezierData: h,
                        pointOnLine2D: e,
                        pointOnLine3D: function r(p, b, g, m, C, c, u, l, d) {
                            if (0 === g && 0 === c && 0 === d) return e(p, b, m, C, u, l);
                            var M, E = t.sqrt(t.pow(m - p, 2) + t.pow(C - b, 2) + t.pow(c - g, 2)),
                                _ = t.sqrt(t.pow(u - p, 2) + t.pow(l - b, 2) + t.pow(d - g, 2)),
                                T = t.sqrt(t.pow(u - m, 2) + t.pow(l - C, 2) + t.pow(d - c, 2));
                            return (M = E > _ ? E > T ? E - _ - T : T - _ - E : T > _ ? T - _ - E : _ - E - T) > -1e-4 && M < 1e-4
                        }
                    }
                }
                var bez = bezFunction(),
                    initFrame = initialDefaultFrame,
                    mathAbs = Math.abs;

                function interpolateValue(t, e) {
                    var i, r = this.offsetTime;
                    "multidimensional" === this.propType && (i = createTypedArray("float32", this.pv.length));
                    for (var o, f, v, s = e.lastIndex, a = s, n = this.keyframes.length - 1, h = !0; h;) {
                        if (o = this.keyframes[a], f = this.keyframes[a + 1], a === n - 1 && t >= f.t - r) {
                            o.h && (o = f), s = 0;
                            break
                        }
                        if (f.t - r > t) {
                            s = a;
                            break
                        }
                        a < n - 1 ? a += 1 : (s = 0, h = !1)
                    }
                    v = this.keyframesMetadata[a] || {};
                    var S, p, b, g, m, C, l, c = f.t - r,
                        u = o.t - r;
                    if (o.to) {
                        v.bezierData || (v.bezierData = bez.buildBezierData(o.s, f.s || o.e, o.to, o.ti));
                        var d = v.bezierData;
                        if (t >= c || t < u) {
                            var E = t >= c ? d.points.length - 1 : 0;
                            for (p = d.points[E].point.length, S = 0; S < p; S += 1) i[S] = d.points[E].point[S]
                        } else {
                            v.__fnct ? C = v.__fnct : (C = BezierFactory.getBezierEasing(o.o.x, o.o.y, o.i.x, o.i.y, o.n).get, v.__fnct = C), b = C((t - u) / (c - u));
                            var T, _ = d.segmentLength * b,
                                M = e.lastFrame < t && e._lastKeyframeIndex === a ? e._lastAddedLength : 0;
                            for (m = e.lastFrame < t && e._lastKeyframeIndex === a ? e._lastPoint : 0, h = !0, g = d.points.length; h;) {
                                if (M += d.points[m].partialLength, 0 === _ || 0 === b || m === d.points.length - 1) {
                                    for (p = d.points[m].point.length, S = 0; S < p; S += 1) i[S] = d.points[m].point[S];
                                    break
                                }
                                if (_ >= M && _ < M + d.points[m + 1].partialLength) {
                                    for (T = (_ - M) / d.points[m + 1].partialLength, p = d.points[m].point.length, S = 0; S < p; S += 1) i[S] = d.points[m].point[S] + (d.points[m + 1].point[S] - d.points[m].point[S]) * T;
                                    break
                                }
                                m < g - 1 ? m += 1 : h = !1
                            }
                            e._lastPoint = m, e._lastAddedLength = M - d.points[m].partialLength, e._lastKeyframeIndex = a
                        }
                    } else {
                        var D;
                        if (n = o.s.length, l = f.s || o.e, this.sh && 1 !== o.h) t >= c ? (i[0] = l[0], i[1] = l[1], i[2] = l[2]) : t <= u ? (i[0] = o.s[0], i[1] = o.s[1], i[2] = o.s[2]) : quaternionToEuler(i, slerp(createQuaternion(o.s), createQuaternion(l), (t - u) / (c - u)));
                        else
                            for (a = 0; a < n; a += 1) 1 !== o.h && (t >= c ? b = 1 : t < u ? b = 0 : (o.o.x.constructor === Array ? (v.__fnct || (v.__fnct = []), v.__fnct[a] ? C = v.__fnct[a] : (C = BezierFactory.getBezierEasing(void 0 === o.o.x[a] ? o.o.x[0] : o.o.x[a], void 0 === o.o.y[a] ? o.o.y[0] : o.o.y[a], void 0 === o.i.x[a] ? o.i.x[0] : o.i.x[a], void 0 === o.i.y[a] ? o.i.y[0] : o.i.y[a]).get, v.__fnct[a] = C)) : v.__fnct ? C = v.__fnct : (C = BezierFactory.getBezierEasing(o.o.x, o.o.y, o.i.x, o.i.y).get, o.keyframeMetadata = C), b = C((t - u) / (c - u)))), l = f.s || o.e, D = 1 === o.h ? o.s[a] : o.s[a] + (l[a] - o.s[a]) * b, "multidimensional" === this.propType ? i[a] = D : i = D
                    }
                    return e.lastIndex = s, i
                }

                function slerp(t, e, r) {
                    var p, b, g, m, C, i = [],
                        s = t[0],
                        a = t[1],
                        n = t[2],
                        h = t[3],
                        o = e[0],
                        f = e[1],
                        v = e[2],
                        S = e[3];
                    return (b = s * o + a * f + n * v + h * S) < 0 && (b = -b, o = -o, f = -f, v = -v, S = -S), 1 - b > 1e-6 ? (p = Math.acos(b), g = Math.sin(p), m = Math.sin((1 - r) * p) / g, C = Math.sin(r * p) / g) : (m = 1 - r, C = r), i[0] = m * s + C * o, i[1] = m * a + C * f, i[2] = m * n + C * v, i[3] = m * h + C * S, i
                }

                function quaternionToEuler(t, e) {
                    var r = e[0],
                        i = e[1],
                        s = e[2],
                        a = e[3],
                        n = Math.atan2(2 * i * a - 2 * r * s, 1 - 2 * i * i - 2 * s * s),
                        h = Math.asin(2 * r * i + 2 * s * a),
                        o = Math.atan2(2 * r * a - 2 * i * s, 1 - 2 * r * r - 2 * s * s);
                    t[0] = n / degToRads, t[1] = h / degToRads, t[2] = o / degToRads
                }

                function createQuaternion(t) {
                    var e = t[0] * degToRads,
                        r = t[1] * degToRads,
                        i = t[2] * degToRads,
                        s = Math.cos(e / 2),
                        a = Math.cos(r / 2),
                        n = Math.cos(i / 2),
                        h = Math.sin(e / 2),
                        o = Math.sin(r / 2),
                        f = Math.sin(i / 2);
                    return [h * o * n + s * a * f, h * a * n + s * o * f, s * o * n - h * a * f, s * a * n - h * o * f]
                }

                function getValueAtCurrentTime() {
                    var t = this.comp.renderedFrame - this.offsetTime,
                        e = this.keyframes[0].t - this.offsetTime,
                        r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                    if (!(t === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= r && t >= r || this._caching.lastFrame < e && t < e))) {
                        this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                        var i = this.interpolateValue(t, this._caching);
                        this.pv = i
                    }
                    return this._caching.lastFrame = t, this.pv
                }

                function setVValue(t) {
                    var e;
                    if ("unidimensional" === this.propType) mathAbs(this.v - (e = t * this.mult)) > 1e-5 && (this.v = e, this._mdf = !0);
                    else
                        for (var r = 0, i = this.v.length; r < i;) mathAbs(this.v[r] - (e = t[r] * this.mult)) > 1e-5 && (this.v[r] = e, this._mdf = !0), r += 1
                }

                function processEffectsSequence() {
                    if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length) {
                        if (this.lock) return void this.setVValue(this.pv);
                        this.lock = !0, this._mdf = this._isFirstFrame;
                        var t, e = this.effectsSequence.length,
                            r = this.kf ? this.pv : this.data.k;
                        for (t = 0; t < e; t += 1) r = this.effectsSequence[t](r);
                        this.setVValue(r), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
                    }
                }

                function addEffect(t) {
                    this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                }

                function ValueProperty(t, e, r, i) {
                    this.propType = "unidimensional", this.mult = r || 1, this.data = e, this.v = r ? e.k * r : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
                }

                function MultiDimensionalProperty(t, e, r, i) {
                    this.propType = "multidimensional", this.mult = r || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
                    var s, a = e.k.length;
                    for (this.v = createTypedArray("float32", a), this.pv = createTypedArray("float32", a), this.vel = createTypedArray("float32", a), s = 0; s < a; s += 1) this.v[s] = e.k[s] * this.mult, this.pv[s] = e.k[s];
                    this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
                }

                function KeyframedValueProperty(t, e, r, i) {
                    this.propType = "unidimensional", this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.frameId = -1, this._caching = {
                        lastFrame: initFrame,
                        lastIndex: 0,
                        value: 0,
                        _lastKeyframeIndex: -1
                    }, this.k = !0, this.kf = !0, this.data = e, this.mult = r || 1, this.elem = t, this.container = i, this.comp = t.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.addEffect = addEffect
                }

                function KeyframedMultidimensionalProperty(t, e, r, i) {
                    this.propType = "multidimensional";
                    var s, n, h, o, f, a = e.k.length;
                    for (s = 0; s < a - 1; s += 1) e.k[s].to && e.k[s].s && e.k[s + 1] && e.k[s + 1].s && (h = e.k[s + 1].s, o = e.k[s].to, f = e.k[s].ti, (2 === (n = e.k[s].s).length && !(n[0] === h[0] && n[1] === h[1]) && bez.pointOnLine2D(n[0], n[1], h[0], h[1], n[0] + o[0], n[1] + o[1]) && bez.pointOnLine2D(n[0], n[1], h[0], h[1], h[0] + f[0], h[1] + f[1]) || 3 === n.length && !(n[0] === h[0] && n[1] === h[1] && n[2] === h[2]) && bez.pointOnLine3D(n[0], n[1], n[2], h[0], h[1], h[2], n[0] + o[0], n[1] + o[1], n[2] + o[2]) && bez.pointOnLine3D(n[0], n[1], n[2], h[0], h[1], h[2], h[0] + f[0], h[1] + f[1], h[2] + f[2])) && (e.k[s].to = null, e.k[s].ti = null), n[0] === h[0] && n[1] === h[1] && 0 === o[0] && 0 === o[1] && 0 === f[0] && 0 === f[1] && (2 === n.length || n[2] === h[2] && 0 === o[2] && 0 === f[2]) && (e.k[s].to = null, e.k[s].ti = null));
                    this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = r || 1, this.elem = t, this.container = i, this.comp = t.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
                    var v = e.k[0].s.length;
                    for (this.v = createTypedArray("float32", v), this.pv = createTypedArray("float32", v), s = 0; s < v; s += 1) this.v[s] = initFrame, this.pv[s] = initFrame;
                    this._caching = {
                        lastFrame: initFrame,
                        lastIndex: 0,
                        value: createTypedArray("float32", v)
                    }, this.addEffect = addEffect
                }
                var PropertyFactory = {
                    getProp: function t(r, i, s, a, n) {
                        var h;
                        if (i.sid && (i = r.globalData.slotManager.getProp(i)), i.k.length)
                            if ("number" == typeof i.k[0]) h = new MultiDimensionalProperty(r, i, a, n);
                            else switch (s) {
                                case 0:
                                    h = new KeyframedValueProperty(r, i, a, n);
                                    break;
                                case 1:
                                    h = new KeyframedMultidimensionalProperty(r, i, a, n)
                            } else h = new ValueProperty(r, i, a, n);
                        return h.effectsSequence.length && n.addDynamicProperty(h), h
                    }
                };

                function DynamicPropertyContainer() {}
                DynamicPropertyContainer.prototype = {
                    addDynamicProperty: function(e) {
                        -1 === this.dynamicProperties.indexOf(e) && (this.dynamicProperties.push(e), this.container.addDynamicProperty(this), this._isAnimated = !0)
                    },
                    iterateDynamicProperties: function() {
                        this._mdf = !1;
                        var e, r = this.dynamicProperties.length;
                        for (e = 0; e < r; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e]._mdf && (this._mdf = !0)
                    },
                    initDynamicPropertyContainer: function(e) {
                        this.container = e, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
                    }
                };
                var pointPool = poolFactory(8, function t() {
                    return createTypedArray("float32", 2)
                });

                function ShapePath() {
                    this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
                }
                ShapePath.prototype.setPathData = function(t, e) {
                    this.c = t, this.setLength(e);
                    for (var r = 0; r < e;) this.v[r] = pointPool.newElement(), this.o[r] = pointPool.newElement(), this.i[r] = pointPool.newElement(), r += 1
                }, ShapePath.prototype.setLength = function(t) {
                    for (; this._maxLength < t;) this.doubleArrayLength();
                    this._length = t
                }, ShapePath.prototype.doubleArrayLength = function() {
                    this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
                }, ShapePath.prototype.setXYAt = function(t, e, r, i, s) {
                    var a;
                    switch (this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
                        case "v":
                            a = this.v;
                            break;
                        case "i":
                            a = this.i;
                            break;
                        case "o":
                            a = this.o;
                            break;
                        default:
                            a = []
                    }(!a[i] || a[i] && !s) && (a[i] = pointPool.newElement()), a[i][0] = t, a[i][1] = e
                }, ShapePath.prototype.setTripleAt = function(t, e, r, i, s, a, n, h) {
                    this.setXYAt(t, e, "v", n, h), this.setXYAt(r, i, "o", n, h), this.setXYAt(s, a, "i", n, h)
                }, ShapePath.prototype.reverse = function() {
                    var t = new ShapePath;
                    t.setPathData(this.c, this._length);
                    var e = this.v,
                        r = this.o,
                        i = this.i,
                        s = 0;
                    this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], r[0][0], r[0][1], 0, !1), s = 1);
                    var h, a = this._length - 1,
                        n = this._length;
                    for (h = s; h < n; h += 1) t.setTripleAt(e[a][0], e[a][1], i[a][0], i[a][1], r[a][0], r[a][1], h, !1), a -= 1;
                    return t
                }, ShapePath.prototype.length = function() {
                    return this._length
                };
                var shapePool = (i = poolFactory(4, function t() {
                        return new ShapePath
                    }, function e(s) {
                        var n, a = s._length;
                        for (n = 0; n < a; n += 1) pointPool.release(s.v[n]), pointPool.release(s.i[n]), pointPool.release(s.o[n]), s.v[n] = null, s.i[n] = null, s.o[n] = null;
                        s._length = 0, s.c = !1
                    }), i.clone = function r(s) {
                        var n, a = i.newElement(),
                            h = void 0 === s._length ? s.v.length : s._length;
                        for (a.setLength(h), a.c = s.c, n = 0; n < h; n += 1) a.setTripleAt(s.v[n][0], s.v[n][1], s.o[n][0], s.o[n][1], s.i[n][0], s.i[n][1], n);
                        return a
                    }, i),
                    i;

                function ShapeCollection() {
                    this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
                }
                ShapeCollection.prototype.addShape = function(t) {
                    this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
                }, ShapeCollection.prototype.releaseShapes = function() {
                    var t;
                    for (t = 0; t < this._length; t += 1) shapePool.release(this.shapes[t]);
                    this._length = 0
                };
                var shapeCollectionPool = function() {
                        var t = {
                                newShapeCollection: function s() {
                                    return e ? i[e -= 1] : new ShapeCollection
                                },
                                release: function a(n) {
                                    var h, o = n._length;
                                    for (h = 0; h < o; h += 1) shapePool.release(n.shapes[h]);
                                    n._length = 0, e === r && (i = pooling.double(i), r *= 2), i[e] = n, e += 1
                                }
                            },
                            e = 0,
                            r = 4,
                            i = createSizedArray(r);
                        return t
                    }(),
                    ShapePropertyFactory = function() {
                        var t = -999999;

                        function e(c, u, l) {
                            var E, _, T, M, w, G, L, V, d = l.lastIndex,
                                B = this.keyframes;
                            if (c < B[0].t - this.offsetTime) E = B[0].s[0], T = !0, d = 0;
                            else if (c >= B[B.length - 1].t - this.offsetTime) E = B[B.length - 1].s ? B[B.length - 1].s[0] : B[B.length - 2].e[0], T = !0;
                            else {
                                for (var y, P, F, I = d, x = B.length - 1, A = !0; A && (y = B[I], !((P = B[I + 1]).t - this.offsetTime > c));) I < x - 1 ? I += 1 : A = !1;
                                if (F = this.keyframesMetadata[I] || {}, d = I, !(T = 1 === y.h)) {
                                    if (c >= P.t - this.offsetTime) V = 1;
                                    else if (c < y.t - this.offsetTime) V = 0;
                                    else {
                                        var k;
                                        F.__fnct ? k = F.__fnct : (k = BezierFactory.getBezierEasing(y.o.x, y.o.y, y.i.x, y.i.y).get, F.__fnct = k), V = k((c - (y.t - this.offsetTime)) / (P.t - this.offsetTime - (y.t - this.offsetTime)))
                                    }
                                    _ = P.s ? P.s[0] : y.e[0]
                                }
                                E = y.s[0]
                            }
                            for (G = u._length, L = E.i[0].length, l.lastIndex = d, M = 0; M < G; M += 1)
                                for (w = 0; w < L; w += 1) u.i[M][w] = T ? E.i[M][w] : E.i[M][w] + (_.i[M][w] - E.i[M][w]) * V, u.o[M][w] = T ? E.o[M][w] : E.o[M][w] + (_.o[M][w] - E.o[M][w]) * V, u.v[M][w] = T ? E.v[M][w] : E.v[M][w] + (_.v[M][w] - E.v[M][w]) * V
                        }

                        function r() {
                            var c = this.comp.renderedFrame - this.offsetTime,
                                u = this.keyframes[0].t - this.offsetTime,
                                l = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                                d = this._caching.lastFrame;
                            return d !== t && (d < u && c < u || d > l && c > l) || (this._caching.lastIndex = d < c ? this._caching.lastIndex : 0, this.interpolateShape(c, this.pv, this._caching)), this._caching.lastFrame = c, this.pv
                        }

                        function i() {
                            this.paths = this.localShapeCollection
                        }

                        function a(c) {
                            (function s(c, u) {
                                if (c._length !== u._length || c.c !== u.c) return !1;
                                var l, d = c._length;
                                for (l = 0; l < d; l += 1)
                                    if (c.v[l][0] !== u.v[l][0] || c.v[l][1] !== u.v[l][1] || c.o[l][0] !== u.o[l][0] || c.o[l][1] !== u.o[l][1] || c.i[l][0] !== u.i[l][0] || c.i[l][1] !== u.i[l][1]) return !1;
                                return !0
                            })(this.v, c) || (this.v = shapePool.clone(c), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
                        }

                        function n() {
                            if (this.elem.globalData.frameId !== this.frameId) {
                                if (!this.effectsSequence.length) return void(this._mdf = !1);
                                if (this.lock) return void this.setVValue(this.pv);
                                var c;
                                this.lock = !0, this._mdf = !1, c = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                                var u, l = this.effectsSequence.length;
                                for (u = 0; u < l; u += 1) c = this.effectsSequence[u](c);
                                this.setVValue(c), this.lock = !1, this.frameId = this.elem.globalData.frameId
                            }
                        }

                        function h(c, u, l) {
                            this.propType = "shape", this.comp = c.comp, this.container = c, this.elem = c, this.data = u, this.k = !1, this.kf = !1, this._mdf = !1, this.v = shapePool.clone(3 === l ? u.pt.k : u.ks.k), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = []
                        }

                        function o(c) {
                            this.effectsSequence.push(c), this.container.addDynamicProperty(this)
                        }

                        function f(c, u, l) {
                            this.propType = "shape", this.comp = c.comp, this.elem = c, this.container = c, this.offsetTime = c.data.st, this.keyframes = 3 === l ? u.pt.k : u.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
                            var d = this.keyframes[0].s[0].i.length;
                            this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, d), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = i, this._caching = {
                                lastFrame: t,
                                lastIndex: 0
                            }, this.effectsSequence = [r.bind(this)]
                        }
                        h.prototype.interpolateShape = e, h.prototype.getValue = n, h.prototype.setVValue = a, h.prototype.addEffect = o, f.prototype.getValue = n, f.prototype.interpolateShape = e, f.prototype.setVValue = a, f.prototype.addEffect = o;
                        var v = function() {
                                var c = roundCorner;

                                function u(l, d) {
                                    this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = d.d, this.elem = l, this.comp = l.comp, this.frameId = -1, this.initDynamicPropertyContainer(l), this.p = PropertyFactory.getProp(l, d.p, 1, 0, this), this.s = PropertyFactory.getProp(l, d.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                                }
                                return u.prototype = {
                                    reset: i,
                                    getValue: function() {
                                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                                    },
                                    convertEllToPath: function() {
                                        var d = this.p.v[0],
                                            E = this.p.v[1],
                                            _ = this.s.v[0] / 2,
                                            T = this.s.v[1] / 2,
                                            M = 3 !== this.d,
                                            w = this.v;
                                        w.v[0][0] = d, w.v[0][1] = E - T, w.v[1][0] = M ? d + _ : d - _, w.v[1][1] = E, w.v[2][0] = d, w.v[2][1] = E + T, w.v[3][0] = M ? d - _ : d + _, w.v[3][1] = E, w.i[0][0] = M ? d - _ * c : d + _ * c, w.i[0][1] = E - T, w.i[1][0] = M ? d + _ : d - _, w.i[1][1] = E - T * c, w.i[2][0] = M ? d + _ * c : d - _ * c, w.i[2][1] = E + T, w.i[3][0] = M ? d - _ : d + _, w.i[3][1] = E + T * c, w.o[0][0] = M ? d + _ * c : d - _ * c, w.o[0][1] = E - T, w.o[1][0] = M ? d + _ : d - _, w.o[1][1] = E + T * c, w.o[2][0] = M ? d - _ * c : d + _ * c, w.o[2][1] = E + T, w.o[3][0] = M ? d - _ : d + _, w.o[3][1] = E - T * c
                                    }
                                }, extendPrototype([DynamicPropertyContainer], u), u
                            }(),
                            S = function() {
                                function c(u, l) {
                                    this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = u, this.comp = u.comp, this.data = l, this.frameId = -1, this.d = l.d, this.initDynamicPropertyContainer(u), 1 === l.sy ? (this.ir = PropertyFactory.getProp(u, l.ir, 0, 0, this), this.is = PropertyFactory.getProp(u, l.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(u, l.pt, 0, 0, this), this.p = PropertyFactory.getProp(u, l.p, 1, 0, this), this.r = PropertyFactory.getProp(u, l.r, 0, degToRads, this), this.or = PropertyFactory.getProp(u, l.or, 0, 0, this), this.os = PropertyFactory.getProp(u, l.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                                }
                                return c.prototype = {
                                    reset: i,
                                    getValue: function() {
                                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                                    },
                                    convertStarToPath: function() {
                                        var V, D, B, I, l = 2 * Math.floor(this.pt.v),
                                            d = 2 * Math.PI / l,
                                            E = !0,
                                            _ = this.or.v,
                                            T = this.ir.v,
                                            M = this.os.v,
                                            w = this.is.v,
                                            G = 2 * Math.PI * _ / (2 * l),
                                            L = 2 * Math.PI * T / (2 * l),
                                            x = -Math.PI / 2;
                                        x += this.r.v;
                                        var A = 3 === this.data.d ? -1 : 1;
                                        for (this.v._length = 0, V = 0; V < l; V += 1) {
                                            B = E ? M : w, I = E ? G : L;
                                            var y = (D = E ? _ : T) * Math.cos(x),
                                                P = D * Math.sin(x),
                                                F = 0 === y && 0 === P ? 0 : P / Math.sqrt(y * y + P * P),
                                                k = 0 === y && 0 === P ? 0 : -y / Math.sqrt(y * y + P * P);
                                            this.v.setTripleAt(y += +this.p.v[0], P += +this.p.v[1], y - F * I * B * A, P - k * I * B * A, y + F * I * B * A, P + k * I * B * A, V, !0), E = !E, x += d * A
                                        }
                                    },
                                    convertPolygonToPath: function() {
                                        var M, l = Math.floor(this.pt.v),
                                            d = 2 * Math.PI / l,
                                            E = this.or.v,
                                            _ = this.os.v,
                                            T = 2 * Math.PI * E / (4 * l),
                                            w = .5 * -Math.PI,
                                            G = 3 === this.data.d ? -1 : 1;
                                        for (w += this.r.v, this.v._length = 0, M = 0; M < l; M += 1) {
                                            var L = E * Math.cos(w),
                                                V = E * Math.sin(w),
                                                D = 0 === L && 0 === V ? 0 : V / Math.sqrt(L * L + V * V),
                                                B = 0 === L && 0 === V ? 0 : -L / Math.sqrt(L * L + V * V);
                                            this.v.setTripleAt(L += +this.p.v[0], V += +this.p.v[1], L - D * T * _ * G, V - B * T * _ * G, L + D * T * _ * G, V + B * T * _ * G, M, !0), w += d * G
                                        }
                                        this.paths.length = 0, this.paths[0] = this.v
                                    }
                                }, extendPrototype([DynamicPropertyContainer], c), c
                            }(),
                            p = function() {
                                function c(u, l) {
                                    this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = u, this.comp = u.comp, this.frameId = -1, this.d = l.d, this.initDynamicPropertyContainer(u), this.p = PropertyFactory.getProp(u, l.p, 1, 0, this), this.s = PropertyFactory.getProp(u, l.s, 1, 0, this), this.r = PropertyFactory.getProp(u, l.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                                }
                                return c.prototype = {
                                    convertRectToPath: function() {
                                        var l = this.p.v[0],
                                            d = this.p.v[1],
                                            E = this.s.v[0] / 2,
                                            _ = this.s.v[1] / 2,
                                            T = bmMin(E, _, this.r.v),
                                            M = T * (1 - roundCorner);
                                        this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(l + E, d - _ + T, l + E, d - _ + T, l + E, d - _ + M, 0, !0), this.v.setTripleAt(l + E, d + _ - T, l + E, d + _ - M, l + E, d + _ - T, 1, !0), 0 !== T ? (this.v.setTripleAt(l + E - T, d + _, l + E - T, d + _, l + E - M, d + _, 2, !0), this.v.setTripleAt(l - E + T, d + _, l - E + M, d + _, l - E + T, d + _, 3, !0), this.v.setTripleAt(l - E, d + _ - T, l - E, d + _ - T, l - E, d + _ - M, 4, !0), this.v.setTripleAt(l - E, d - _ + T, l - E, d - _ + M, l - E, d - _ + T, 5, !0), this.v.setTripleAt(l - E + T, d - _, l - E + T, d - _, l - E + M, d - _, 6, !0), this.v.setTripleAt(l + E - T, d - _, l + E - M, d - _, l + E - T, d - _, 7, !0)) : (this.v.setTripleAt(l - E, d + _, l - E + M, d + _, l - E, d + _, 2), this.v.setTripleAt(l - E, d - _, l - E, d - _ + M, l - E, d - _, 3))) : (this.v.setTripleAt(l + E, d - _ + T, l + E, d - _ + M, l + E, d - _ + T, 0, !0), 0 !== T ? (this.v.setTripleAt(l + E - T, d - _, l + E - T, d - _, l + E - M, d - _, 1, !0), this.v.setTripleAt(l - E + T, d - _, l - E + M, d - _, l - E + T, d - _, 2, !0), this.v.setTripleAt(l - E, d - _ + T, l - E, d - _ + T, l - E, d - _ + M, 3, !0), this.v.setTripleAt(l - E, d + _ - T, l - E, d + _ - M, l - E, d + _ - T, 4, !0), this.v.setTripleAt(l - E + T, d + _, l - E + T, d + _, l - E + M, d + _, 5, !0), this.v.setTripleAt(l + E - T, d + _, l + E - M, d + _, l + E - T, d + _, 6, !0), this.v.setTripleAt(l + E, d + _ - T, l + E, d + _ - T, l + E, d + _ - M, 7, !0)) : (this.v.setTripleAt(l - E, d - _, l - E + M, d - _, l - E, d - _, 1, !0), this.v.setTripleAt(l - E, d + _, l - E, d + _ - M, l - E, d + _, 2, !0), this.v.setTripleAt(l + E, d + _, l + E - M, d + _, l + E, d + _, 3, !0)))
                                    },
                                    getValue: function() {
                                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                                    },
                                    reset: i
                                }, extendPrototype([DynamicPropertyContainer], c), c
                            }();
                        return {
                            getShapeProp: function b(c, u, l) {
                                var d;
                                return 3 === l || 4 === l ? d = (3 === l ? u.pt : u.ks).k.length ? new f(c, u, l) : new h(c, u, l) : 5 === l ? d = new p(c, u) : 6 === l ? d = new v(c, u) : 7 === l && (d = new S(c, u)), d.k && c.addDynamicProperty(d), d
                            },
                            getConstructorFunction: function g() {
                                return h
                            },
                            getKeyframedConstructorFunction: function m() {
                                return f
                            }
                        }
                    }(),
                    Matrix = function() {
                        var t = Math.cos,
                            e = Math.sin,
                            r = Math.tan,
                            i = Math.round;

                        function s() {
                            return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
                        }

                        function a(y) {
                            if (0 === y) return this;
                            var P = t(y),
                                F = e(y);
                            return this._t(P, -F, 0, 0, F, P, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                        }

                        function n(y) {
                            if (0 === y) return this;
                            var P = t(y),
                                F = e(y);
                            return this._t(1, 0, 0, 0, 0, P, -F, 0, 0, F, P, 0, 0, 0, 0, 1)
                        }

                        function h(y) {
                            if (0 === y) return this;
                            var P = t(y),
                                F = e(y);
                            return this._t(P, 0, F, 0, 0, 1, 0, 0, -F, 0, P, 0, 0, 0, 0, 1)
                        }

                        function o(y) {
                            if (0 === y) return this;
                            var P = t(y),
                                F = e(y);
                            return this._t(P, -F, 0, 0, F, P, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                        }

                        function f(y, P) {
                            return this._t(1, P, y, 1, 0, 0)
                        }

                        function v(y, P) {
                            return this.shear(r(y), r(P))
                        }

                        function S(y, P) {
                            var F = t(P),
                                k = e(P);
                            return this._t(F, k, 0, 0, -k, F, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(y), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(F, -k, 0, 0, k, F, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                        }

                        function p(y, P, F) {
                            return !F && 0 !== F && (F = 1), 1 === y && 1 === P && 1 === F ? this : this._t(y, 0, 0, 0, 0, P, 0, 0, 0, 0, F, 0, 0, 0, 0, 1)
                        }

                        function b(y, P, F, k, R, z, N, H, W, q, Y, Q, X, $, J, j) {
                            return this.props[0] = y, this.props[1] = P, this.props[2] = F, this.props[3] = k, this.props[4] = R, this.props[5] = z, this.props[6] = N, this.props[7] = H, this.props[8] = W, this.props[9] = q, this.props[10] = Y, this.props[11] = Q, this.props[12] = X, this.props[13] = $, this.props[14] = J, this.props[15] = j, this
                        }

                        function g(y, P, F) {
                            return F = F || 0, 0 !== y || 0 !== P || 0 !== F ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, y, P, F, 1) : this
                        }

                        function m(y, P, F, k, R, z, N, H, W, q, Y, Q, X, $, J, j) {
                            var O = this.props;
                            if (1 === y && 0 === P && 0 === F && 0 === k && 0 === R && 1 === z && 0 === N && 0 === H && 0 === W && 0 === q && 1 === Y && 0 === Q) return O[12] = O[12] * y + O[15] * X, O[13] = O[13] * z + O[15] * $, O[14] = O[14] * Y + O[15] * J, O[15] *= j, this._identityCalculated = !1, this;
                            var et = O[0],
                                at = O[1],
                                rt = O[2],
                                tt = O[3],
                                it = O[4],
                                st = O[5],
                                Z = O[6],
                                nt = O[7],
                                ot = O[8],
                                K = O[9],
                                ht = O[10],
                                U = O[11],
                                lt = O[12],
                                ft = O[13],
                                pt = O[14],
                                ct = O[15];
                            return O[0] = et * y + at * R + rt * W + tt * X, O[1] = et * P + at * z + rt * q + tt * $, O[2] = et * F + at * N + rt * Y + tt * J, O[3] = et * k + at * H + rt * Q + tt * j, O[4] = it * y + st * R + Z * W + nt * X, O[5] = it * P + st * z + Z * q + nt * $, O[6] = it * F + st * N + Z * Y + nt * J, O[7] = it * k + st * H + Z * Q + nt * j, O[8] = ot * y + K * R + ht * W + U * X, O[9] = ot * P + K * z + ht * q + U * $, O[10] = ot * F + K * N + ht * Y + U * J, O[11] = ot * k + K * H + ht * Q + U * j, O[12] = lt * y + ft * R + pt * W + ct * X, O[13] = lt * P + ft * z + pt * q + ct * $, O[14] = lt * F + ft * N + pt * Y + ct * J, O[15] = lt * k + ft * H + pt * Q + ct * j, this._identityCalculated = !1, this
                        }

                        function C(y) {
                            var P = y.props;
                            return this.transform(P[0], P[1], P[2], P[3], P[4], P[5], P[6], P[7], P[8], P[9], P[10], P[11], P[12], P[13], P[14], P[15])
                        }

                        function c() {
                            return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
                        }

                        function u(y) {
                            for (var P = 0; P < 16;) {
                                if (y.props[P] !== this.props[P]) return !1;
                                P += 1
                            }
                            return !0
                        }

                        function l(y) {
                            var P;
                            for (P = 0; P < 16; P += 1) y.props[P] = this.props[P];
                            return y
                        }

                        function d(y) {
                            var P;
                            for (P = 0; P < 16; P += 1) this.props[P] = y[P]
                        }

                        function E(y, P, F) {
                            return {
                                x: y * this.props[0] + P * this.props[4] + F * this.props[8] + this.props[12],
                                y: y * this.props[1] + P * this.props[5] + F * this.props[9] + this.props[13],
                                z: y * this.props[2] + P * this.props[6] + F * this.props[10] + this.props[14]
                            }
                        }

                        function _(y, P, F) {
                            return y * this.props[0] + P * this.props[4] + F * this.props[8] + this.props[12]
                        }

                        function T(y, P, F) {
                            return y * this.props[1] + P * this.props[5] + F * this.props[9] + this.props[13]
                        }

                        function M(y, P, F) {
                            return y * this.props[2] + P * this.props[6] + F * this.props[10] + this.props[14]
                        }

                        function w() {
                            var y = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                                P = this.props[5] / y,
                                F = -this.props[1] / y,
                                k = -this.props[4] / y,
                                R = this.props[0] / y,
                                z = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / y,
                                N = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / y,
                                H = new Matrix;
                            return H.props[0] = P, H.props[1] = F, H.props[4] = k, H.props[5] = R, H.props[12] = z, H.props[13] = N, H
                        }

                        function G(y) {
                            return this.getInverseMatrix().applyToPointArray(y[0], y[1], y[2] || 0)
                        }

                        function L(y) {
                            var P, F = y.length,
                                k = [];
                            for (P = 0; P < F; P += 1) k[P] = G(y[P]);
                            return k
                        }

                        function V(y, P, F) {
                            var k = createTypedArray("float32", 6);
                            if (this.isIdentity()) k[0] = y[0], k[1] = y[1], k[2] = P[0], k[3] = P[1], k[4] = F[0], k[5] = F[1];
                            else {
                                var R = this.props[0],
                                    z = this.props[1],
                                    N = this.props[4],
                                    H = this.props[5],
                                    W = this.props[12],
                                    q = this.props[13];
                                k[0] = y[0] * R + y[1] * N + W, k[1] = y[0] * z + y[1] * H + q, k[2] = P[0] * R + P[1] * N + W, k[3] = P[0] * z + P[1] * H + q, k[4] = F[0] * R + F[1] * N + W, k[5] = F[0] * z + F[1] * H + q
                            }
                            return k
                        }

                        function D(y, P, F) {
                            return this.isIdentity() ? [y, P, F] : [y * this.props[0] + P * this.props[4] + F * this.props[8] + this.props[12], y * this.props[1] + P * this.props[5] + F * this.props[9] + this.props[13], y * this.props[2] + P * this.props[6] + F * this.props[10] + this.props[14]]
                        }

                        function B(y, P) {
                            if (this.isIdentity()) return y + "," + P;
                            var F = this.props;
                            return Math.round(100 * (y * F[0] + P * F[4] + F[12])) / 100 + "," + Math.round(100 * (y * F[1] + P * F[5] + F[13])) / 100
                        }

                        function I() {
                            for (var y = 0, P = this.props, F = "matrix3d("; y < 16;) F += i(1e4 * P[y]) / 1e4, F += 15 === y ? ")" : ",", y += 1;
                            return F
                        }

                        function x(y) {
                            return y < 1e-6 && y > 0 || y > -1e-6 && y < 0 ? i(1e4 * y) / 1e4 : y
                        }

                        function A() {
                            var y = this.props;
                            return "matrix(" + x(y[0]) + "," + x(y[1]) + "," + x(y[4]) + "," + x(y[5]) + "," + x(y[12]) + "," + x(y[13]) + ")"
                        }
                        return function() {
                            this.reset = s, this.rotate = a, this.rotateX = n, this.rotateY = h, this.rotateZ = o, this.skew = v, this.skewFromAxis = S, this.shear = f, this.scale = p, this.setTransform = b, this.translate = g, this.transform = m, this.multiply = C, this.applyToPoint = E, this.applyToX = _, this.applyToY = T, this.applyToZ = M, this.applyToPointArray = D, this.applyToTriplePoints = V, this.applyToPointStringified = B, this.toCSS = I, this.to2dCSS = A, this.clone = l, this.cloneFromProps = d, this.equals = u, this.inversePoints = L, this.inversePoint = G, this.getInverseMatrix = w, this._t = this.transform, this.isIdentity = c, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
                        }
                    }();

                function _typeof$3(t) {
                    return (_typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(r) {
                        return typeof r
                    } : function(r) {
                        return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
                    })(t)
                }
                var lottie = {},
                    standalone = "__[STANDALONE]__",
                    animationData = "__[ANIMATIONDATA]__",
                    renderer = "";

                function setLocation(t) {
                    setLocationHref(t)
                }

                function searchAnimations() {
                    !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
                }

                function setSubframeRendering(t) {
                    setSubframeEnabled(t)
                }

                function setPrefix(t) {
                    setIdPrefix(t)
                }

                function loadAnimation(t) {
                    return !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t)
                }

                function setQuality(t) {
                    if ("string" == typeof t) switch (t) {
                        case "high":
                            setDefaultCurveSegments(200);
                            break;
                        default:
                        case "medium":
                            setDefaultCurveSegments(50);
                            break;
                        case "low":
                            setDefaultCurveSegments(10)
                    } else !isNaN(t) && t > 1 && setDefaultCurveSegments(t);
                    getDefaultCurveSegments() >= 50 ? roundValues(!1) : roundValues(!0)
                }

                function inBrowser() {
                    return typeof navigator < "u"
                }

                function installPlugin(t, e) {
                    "expressions" === t && setExpressionsPlugin(e)
                }

                function getFactory(t) {
                    switch (t) {
                        case "propertyFactory":
                            return PropertyFactory;
                        case "shapePropertyFactory":
                            return ShapePropertyFactory;
                        case "matrix":
                            return Matrix;
                        default:
                            return null
                    }
                }

                function checkReady() {
                    "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
                }

                function getQueryVariable(t) {
                    for (var e = queryString.split("&"), r = 0; r < e.length; r += 1) {
                        var i = e[r].split("=");
                        if (decodeURIComponent(i[0]) == t) return decodeURIComponent(i[1])
                    }
                    return null
                }
                lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.12.2";
                var queryString = "";
                if (standalone) {
                    var scripts = document.getElementsByTagName("script"),
                        index = scripts.length - 1,
                        myScript = scripts[index] || {
                            src: ""
                        };
                    queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", renderer = getQueryVariable("renderer")
                }
                var readyStateCheckInterval = setInterval(checkReady, 100);
                try {
                    _typeof$3(exports)
                } catch (t) {}
                var ShapeModifiers = function() {
                    var t = {},
                        e = {};
                    return t.registerModifier = function r(s, a) {
                        e[s] || (e[s] = a)
                    }, t.getModifier = function i(s, a, n) {
                        return new e[s](a, n)
                    }, t
                }();

                function ShapeModifier() {}

                function TrimModifier() {}

                function PuckerAndBloatModifier() {}
                ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(t) {
                    if (!this.closed) {
                        t.sh.container.addDynamicProperty(t.sh);
                        var e = {
                            shape: t.sh,
                            data: t,
                            localShapeCollection: shapeCollectionPool.newShapeCollection()
                        };
                        this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
                    }
                }, ShapeModifier.prototype.init = function(t, e) {
                    this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                }, ShapeModifier.prototype.processKeys = function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
                }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) {
                    this.s = PropertyFactory.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
                }, TrimModifier.prototype.addShapeToModifier = function(t) {
                    t.pathsData = []
                }, TrimModifier.prototype.calculateShapeEdges = function(t, e, r, i, s) {
                    var a = [];
                    e <= 1 ? a.push({
                        s: t,
                        e
                    }) : t >= 1 ? a.push({
                        s: t - 1,
                        e: e - 1
                    }) : (a.push({
                        s: t,
                        e: 1
                    }), a.push({
                        s: 0,
                        e: e - 1
                    }));
                    var h, f, n = [],
                        o = a.length;
                    for (h = 0; h < o; h += 1)(f = a[h]).e * s < i || f.s * s > i + r || n.push([f.s * s <= i ? 0 : (f.s * s - i) / r, f.e * s >= i + r ? 1 : (f.e * s - i) / r]);
                    return n.length || n.push([0, 0]), n
                }, TrimModifier.prototype.releasePathsData = function(t) {
                    var e, r = t.length;
                    for (e = 0; e < r; e += 1) segmentsLengthPool.release(t[e]);
                    return t.length = 0, t
                }, TrimModifier.prototype.processShapes = function(t) {
                    var e, r;
                    if (this._mdf || t) {
                        var i = this.o.v % 360 / 360;
                        if (i < 0 && (i += 1), (e = this.s.v > 1 ? 1 + i : this.s.v < 0 ? 0 + i : this.s.v + i) > (r = this.e.v > 1 ? 1 + i : this.e.v < 0 ? 0 + i : this.e.v + i)) {
                            var s = e;
                            e = r, r = s
                        }
                        e = 1e-4 * Math.round(1e4 * e), r = 1e-4 * Math.round(1e4 * r), this.sValue = e, this.eValue = r
                    } else e = this.sValue, r = this.eValue;
                    var a, n, o, f, v, S, p, h = this.shapes.length,
                        b = 0;
                    if (r === e)
                        for (n = 0; n < h; n += 1) this.shapes[n].localShapeCollection.releaseShapes(), this.shapes[n].shape._mdf = !0, this.shapes[n].shape.paths = this.shapes[n].localShapeCollection, this._mdf && (this.shapes[n].pathsData.length = 0);
                    else if (1 === r && 0 === e || 0 === r && 1 === e) {
                        if (this._mdf)
                            for (n = 0; n < h; n += 1) this.shapes[n].pathsData.length = 0, this.shapes[n].shape._mdf = !0
                    } else {
                        var m, C, g = [];
                        for (n = 0; n < h; n += 1)
                            if ((m = this.shapes[n]).shape._mdf || this._mdf || t || 2 === this.m) {
                                if (f = (a = m.shape.paths)._length, p = 0, !m.shape._mdf && m.pathsData.length) p = m.totalShapeLength;
                                else {
                                    for (v = this.releasePathsData(m.pathsData), o = 0; o < f; o += 1) S = bez.getSegmentsLength(a.shapes[o]), v.push(S), p += S.totalLength;
                                    m.totalShapeLength = p, m.pathsData = v
                                }
                                b += p, m.shape._mdf = !0
                            } else m.shape.paths = m.localShapeCollection;
                        var d, c = e,
                            u = r,
                            l = 0;
                        for (n = h - 1; n >= 0; n -= 1)
                            if ((m = this.shapes[n]).shape._mdf) {
                                for ((C = m.localShapeCollection).releaseShapes(), 2 === this.m && h > 1 ? (d = this.calculateShapeEdges(e, r, m.totalShapeLength, l, b), l += m.totalShapeLength) : d = [
                                        [c, u]
                                    ], f = d.length, o = 0; o < f; o += 1) {
                                    c = d[o][0], u = d[o][1], g.length = 0, u <= 1 ? g.push({
                                        s: m.totalShapeLength * c,
                                        e: m.totalShapeLength * u
                                    }) : c >= 1 ? g.push({
                                        s: m.totalShapeLength * (c - 1),
                                        e: m.totalShapeLength * (u - 1)
                                    }) : (g.push({
                                        s: m.totalShapeLength * c,
                                        e: m.totalShapeLength
                                    }), g.push({
                                        s: 0,
                                        e: m.totalShapeLength * (u - 1)
                                    }));
                                    var E = this.addShapes(m, g[0]);
                                    if (g[0].s !== g[0].e) {
                                        if (g.length > 1)
                                            if (m.shape.paths.shapes[m.shape.paths._length - 1].c) {
                                                var T = E.pop();
                                                this.addPaths(E, C), E = this.addShapes(m, g[1], T)
                                            } else this.addPaths(E, C), E = this.addShapes(m, g[1]);
                                        this.addPaths(E, C)
                                    }
                                }
                                m.shape.paths = C
                            }
                    }
                }, TrimModifier.prototype.addPaths = function(t, e) {
                    var r, i = t.length;
                    for (r = 0; r < i; r += 1) e.addShape(t[r])
                }, TrimModifier.prototype.addSegment = function(t, e, r, i, s, a, n) {
                    s.setXYAt(e[0], e[1], "o", a), s.setXYAt(r[0], r[1], "i", a + 1), n && s.setXYAt(t[0], t[1], "v", a), s.setXYAt(i[0], i[1], "v", a + 1)
                }, TrimModifier.prototype.addSegmentFromArray = function(t, e, r, i) {
                    e.setXYAt(t[1], t[5], "o", r), e.setXYAt(t[2], t[6], "i", r + 1), i && e.setXYAt(t[0], t[4], "v", r), e.setXYAt(t[3], t[7], "v", r + 1)
                }, TrimModifier.prototype.addShapes = function(t, e, r) {
                    var a, h, o, v, S, p, b, m, i = t.pathsData,
                        s = t.shape.paths.shapes,
                        n = t.shape.paths._length,
                        f = 0,
                        g = [],
                        C = !0;
                    for (r ? (S = r._length, m = r._length) : (r = shapePool.newElement(), S = 0, m = 0), g.push(r), a = 0; a < n; a += 1) {
                        for (p = i[a].lengths, r.c = s[a].c, o = s[a].c ? p.length : p.length + 1, h = 1; h < o; h += 1)
                            if (f + (v = p[h - 1]).addedLength < e.s) f += v.addedLength, r.c = !1;
                            else {
                                if (f > e.e) {
                                    r.c = !1;
                                    break
                                }
                                e.s <= f && e.e >= f + v.addedLength ? (this.addSegment(s[a].v[h - 1], s[a].o[h - 1], s[a].i[h], s[a].v[h], r, S, C), C = !1) : (b = bez.getNewSegment(s[a].v[h - 1], s[a].v[h], s[a].o[h - 1], s[a].i[h], (e.s - f) / v.addedLength, (e.e - f) / v.addedLength, p[h - 1]), this.addSegmentFromArray(b, r, S, C), C = !1, r.c = !1), f += v.addedLength, S += 1
                            }
                        if (s[a].c && p.length) {
                            if (v = p[h - 1], f <= e.e) {
                                var c = p[h - 1].addedLength;
                                e.s <= f && e.e >= f + c ? (this.addSegment(s[a].v[h - 1], s[a].o[h - 1], s[a].i[0], s[a].v[0], r, S, C), C = !1) : (b = bez.getNewSegment(s[a].v[h - 1], s[a].v[0], s[a].o[h - 1], s[a].i[0], (e.s - f) / c, (e.e - f) / c, p[h - 1]), this.addSegmentFromArray(b, r, S, C), C = !1, r.c = !1)
                            } else r.c = !1;
                            f += v.addedLength, S += 1
                        }
                        if (r._length && (r.setXYAt(r.v[m][0], r.v[m][1], "i", m), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), f > e.e) break;
                        a < n - 1 && (r = shapePool.newElement(), C = !0, g.push(r), S = 0)
                    }
                    return g
                }, extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
                    this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
                }, PuckerAndBloatModifier.prototype.processPath = function(t, e) {
                    var r = e / 100,
                        i = [0, 0],
                        s = t._length,
                        a = 0;
                    for (a = 0; a < s; a += 1) i[0] += t.v[a][0], i[1] += t.v[a][1];
                    i[0] /= s, i[1] /= s;
                    var n = shapePool.newElement();
                    for (n.c = t.c, a = 0; a < s; a += 1) n.setTripleAt(t.v[a][0] + (i[0] - t.v[a][0]) * r, t.v[a][1] + (i[1] - t.v[a][1]) * r, t.o[a][0] + (i[0] - t.o[a][0]) * -r, t.o[a][1] + (i[1] - t.o[a][1]) * -r, t.i[a][0] + (i[0] - t.i[a][0]) * -r, t.i[a][1] + (i[1] - t.i[a][1]) * -r, a);
                    return n
                }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
                    var e, r, s, a, h, o, i = this.shapes.length,
                        n = this.amount.v;
                    if (0 !== n)
                        for (r = 0; r < i; r += 1) {
                            if (o = (h = this.shapes[r]).localShapeCollection, h.shape._mdf || this._mdf || t)
                                for (o.releaseShapes(), h.shape._mdf = !0, e = h.shape.paths.shapes, a = h.shape.paths._length, s = 0; s < a; s += 1) o.addShape(this.processPath(e[s], n));
                            h.shape.paths = h.localShapeCollection
                        }
                    this.dynamicProperties.length || (this._mdf = !1)
                };
                var TransformPropertyFactory = function() {
                    var t = [0, 0];

                    function n(o, f, v) {
                        if (this.elem = o, this.frameId = -1, this.propType = "transform", this.data = f, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(v || o), f.p && f.p.s ? (this.px = PropertyFactory.getProp(o, f.p.x, 0, 0, this), this.py = PropertyFactory.getProp(o, f.p.y, 0, 0, this), f.p.z && (this.pz = PropertyFactory.getProp(o, f.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(o, f.p || {
                                k: [0, 0, 0]
                            }, 1, 0, this), f.rx) {
                            if (this.rx = PropertyFactory.getProp(o, f.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(o, f.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(o, f.rz, 0, degToRads, this), f.or.k[0].ti) {
                                var S, p = f.or.k.length;
                                for (S = 0; S < p; S += 1) f.or.k[S].to = null, f.or.k[S].ti = null
                            }
                            this.or = PropertyFactory.getProp(o, f.or, 1, degToRads, this), this.or.sh = !0
                        } else this.r = PropertyFactory.getProp(o, f.r || {
                            k: 0
                        }, 0, degToRads, this);
                        f.sk && (this.sk = PropertyFactory.getProp(o, f.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(o, f.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(o, f.a || {
                            k: [0, 0, 0]
                        }, 1, 0, this), this.s = PropertyFactory.getProp(o, f.s || {
                            k: [100, 100, 100]
                        }, 1, .01, this), this.o = f.o ? PropertyFactory.getProp(o, f.o, 0, .01, o) : {
                            _mdf: !1,
                            v: 1
                        }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
                    }
                    return n.prototype = {
                        applyToMatrix: function e(o) {
                            var f = this._mdf;
                            this.iterateDynamicProperties(), this._mdf = this._mdf || f, this.a && o.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && o.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && o.skewFromAxis(-this.sk.v, this.sa.v), this.r ? o.rotate(-this.r.v) : o.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? o.translate(this.px.v, this.py.v, this.data.p.z ? -this.pz.v : 0) : o.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                        },
                        getValue: function r(o) {
                            if (this.elem.globalData.frameId !== this.frameId) {
                                if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || o) {
                                    var f;
                                    if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                                        var v, S;
                                        if (f = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (v = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / f, 0), S = this.p.getValueAtTime(this.p.keyframes[0].t / f, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (v = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / f, 0), S = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / f, 0)) : (v = this.p.pv, S = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / f, this.p.offsetTime));
                                        else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                            v = [], S = [];
                                            var p = this.px,
                                                b = this.py;
                                            p._caching.lastFrame + p.offsetTime <= p.keyframes[0].t ? (v[0] = p.getValueAtTime((p.keyframes[0].t + .01) / f, 0), v[1] = b.getValueAtTime((b.keyframes[0].t + .01) / f, 0), S[0] = p.getValueAtTime(p.keyframes[0].t / f, 0), S[1] = b.getValueAtTime(b.keyframes[0].t / f, 0)) : p._caching.lastFrame + p.offsetTime >= p.keyframes[p.keyframes.length - 1].t ? (v[0] = p.getValueAtTime(p.keyframes[p.keyframes.length - 1].t / f, 0), v[1] = b.getValueAtTime(b.keyframes[b.keyframes.length - 1].t / f, 0), S[0] = p.getValueAtTime((p.keyframes[p.keyframes.length - 1].t - .01) / f, 0), S[1] = b.getValueAtTime((b.keyframes[b.keyframes.length - 1].t - .01) / f, 0)) : (v = [p.pv, b.pv], S[0] = p.getValueAtTime((p._caching.lastFrame + p.offsetTime - .01) / f, p.offsetTime), S[1] = b.getValueAtTime((b._caching.lastFrame + b.offsetTime - .01) / f, b.offsetTime))
                                        } else v = S = t;
                                        this.v.rotate(-Math.atan2(v[1] - S[1], v[0] - S[0]))
                                    }
                                    this.data.p && this.data.p.s ? this.v.translate(this.px.v, this.py.v, this.data.p.z ? -this.pz.v : 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                                }
                                this.frameId = this.elem.globalData.frameId
                            }
                        },
                        precalculateMatrix: function i() {
                            if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                                if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                                    if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                                    this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                                }
                                this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : !this.rz.effectsSequence.length && !this.ry.effectsSequence.length && !this.rx.effectsSequence.length && !this.or.effectsSequence.length && (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
                            }
                        },
                        autoOrient: function s() {}
                    }, extendPrototype([DynamicPropertyContainer], n), n.prototype.addDynamicProperty = function a(o) {
                        this._addDynamicProperty(o), this.elem.addDynamicProperty(o), this._isDirty = !0
                    }, n.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
                        getTransformProperty: function h(o, f, v) {
                            return new n(o, f, v)
                        }
                    }
                }();

                function RepeaterModifier() {}

                function RoundCornersModifier() {}

                function floatEqual(t, e) {
                    return 1e5 * Math.abs(t - e) <= Math.min(Math.abs(t), Math.abs(e))
                }

                function floatZero(t) {
                    return Math.abs(t) <= 1e-5
                }

                function lerp(t, e, r) {
                    return t * (1 - r) + e * r
                }

                function lerpPoint(t, e, r) {
                    return [lerp(t[0], e[0], r), lerp(t[1], e[1], r)]
                }

                function quadRoots(t, e, r) {
                    if (0 === t) return [];
                    var i = e * e - 4 * t * r;
                    if (i < 0) return [];
                    var s = -e / (2 * t);
                    if (0 === i) return [s];
                    var a = Math.sqrt(i) / (2 * t);
                    return [s - a, s + a]
                }

                function polynomialCoefficients(t, e, r, i) {
                    return [3 * e - t - 3 * r + i, 3 * t - 6 * e + 3 * r, -3 * t + 3 * e, t]
                }

                function singlePoint(t) {
                    return new PolynomialBezier(t, t, t, t, !1)
                }

                function PolynomialBezier(t, e, r, i, s) {
                    s && pointEqual(t, e) && (e = lerpPoint(t, i, 1 / 3)), s && pointEqual(r, i) && (r = lerpPoint(t, i, 2 / 3));
                    var a = polynomialCoefficients(t[0], e[0], r[0], i[0]),
                        n = polynomialCoefficients(t[1], e[1], r[1], i[1]);
                    this.a = [a[0], n[0]], this.b = [a[1], n[1]], this.c = [a[2], n[2]], this.d = [a[3], n[3]], this.points = [t, e, r, i]
                }

                function extrema(t, e) {
                    var r = t.points[0][e],
                        i = t.points[t.points.length - 1][e];
                    if (r > i) {
                        var s = i;
                        i = r, r = s
                    }
                    for (var a = quadRoots(3 * t.a[e], 2 * t.b[e], t.c[e]), n = 0; n < a.length; n += 1)
                        if (a[n] > 0 && a[n] < 1) {
                            var h = t.point(a[n])[e];
                            h < r ? r = h : h > i && (i = h)
                        }
                    return {
                        min: r,
                        max: i
                    }
                }

                function intersectData(t, e, r) {
                    var i = t.boundingBox();
                    return {
                        cx: i.cx,
                        cy: i.cy,
                        width: i.width,
                        height: i.height,
                        bez: t,
                        t: (e + r) / 2,
                        t1: e,
                        t2: r
                    }
                }

                function splitData(t) {
                    var e = t.bez.split(.5);
                    return [intersectData(e[0], t.t1, t.t), intersectData(e[1], t.t, t.t2)]
                }

                function boxIntersect(t, e) {
                    return 2 * Math.abs(t.cx - e.cx) < t.width + e.width && 2 * Math.abs(t.cy - e.cy) < t.height + e.height
                }

                function intersectsImpl(t, e, r, i, s, a) {
                    if (boxIntersect(t, e)) {
                        if (r >= a || t.width <= i && t.height <= i && e.width <= i && e.height <= i) return void s.push([t.t, e.t]);
                        var n = splitData(t),
                            h = splitData(e);
                        intersectsImpl(n[0], h[0], r + 1, i, s, a), intersectsImpl(n[0], h[1], r + 1, i, s, a), intersectsImpl(n[1], h[0], r + 1, i, s, a), intersectsImpl(n[1], h[1], r + 1, i, s, a)
                    }
                }

                function crossProduct(t, e) {
                    return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
                }

                function lineIntersection(t, e, r, i) {
                    var n = [r[0], r[1], 1],
                        h = [i[0], i[1], 1],
                        o = crossProduct(crossProduct([t[0], t[1], 1], [e[0], e[1], 1]), crossProduct(n, h));
                    return floatZero(o[2]) ? null : [o[0] / o[2], o[1] / o[2]]
                }

                function polarOffset(t, e, r) {
                    return [t[0] + Math.cos(e) * r, t[1] - Math.sin(e) * r]
                }

                function pointDistance(t, e) {
                    return Math.hypot(t[0] - e[0], t[1] - e[1])
                }

                function pointEqual(t, e) {
                    return floatEqual(t[0], e[0]) && floatEqual(t[1], e[1])
                }

                function ZigZagModifier() {}

                function setPoint(t, e, r, i, s, a, n) {
                    var h = r - Math.PI / 2,
                        o = r + Math.PI / 2,
                        f = e[0] + Math.cos(r) * i * s,
                        v = e[1] - Math.sin(r) * i * s;
                    t.setTripleAt(f, v, f + Math.cos(h) * a, v - Math.sin(h) * a, f + Math.cos(o) * n, v - Math.sin(o) * n, t.length())
                }

                function getPerpendicularVector(t, e) {
                    var r = [e[0] - t[0], e[1] - t[1]],
                        i = .5 * -Math.PI;
                    return [Math.cos(i) * r[0] - Math.sin(i) * r[1], Math.sin(i) * r[0] + Math.cos(i) * r[1]]
                }

                function getProjectingAngle(t, e) {
                    var r = 0 === e ? t.length() - 1 : e - 1,
                        i = (e + 1) % t.length(),
                        n = getPerpendicularVector(t.v[r], t.v[i]);
                    return Math.atan2(0, 1) - Math.atan2(n[1], n[0])
                }

                function zigZagCorner(t, e, r, i, s, a, n) {
                    var h = getProjectingAngle(e, r),
                        o = e.v[r % e._length],
                        f = e.v[0 === r ? e._length - 1 : r - 1],
                        v = e.v[(r + 1) % e._length],
                        S = 2 === a ? Math.sqrt(Math.pow(o[0] - f[0], 2) + Math.pow(o[1] - f[1], 2)) : 0,
                        p = 2 === a ? Math.sqrt(Math.pow(o[0] - v[0], 2) + Math.pow(o[1] - v[1], 2)) : 0;
                    setPoint(t, e.v[r % e._length], h, n, i, p / (2 * (s + 1)), S / (2 * (s + 1)), a)
                }

                function zigZagSegment(t, e, r, i, s, a) {
                    for (var n = 0; n < i; n += 1) {
                        var h = (n + 1) / (i + 1),
                            o = 2 === s ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0,
                            f = e.normalAngle(h);
                        setPoint(t, e.point(h), f, a, r, o / (2 * (i + 1)), o / (2 * (i + 1)), s), a = -a
                    }
                    return a
                }

                function linearOffset(t, e, r) {
                    var i = Math.atan2(e[0] - t[0], e[1] - t[1]);
                    return [polarOffset(t, i, r), polarOffset(e, i, r)]
                }

                function offsetSegment(t, e) {
                    var r, i, s, a, n, h, o;
                    r = (o = linearOffset(t.points[0], t.points[1], e))[0], i = o[1], s = (o = linearOffset(t.points[1], t.points[2], e))[0], a = o[1], n = (o = linearOffset(t.points[2], t.points[3], e))[0], h = o[1];
                    var f = lineIntersection(r, i, s, a);
                    null === f && (f = i);
                    var v = lineIntersection(n, h, s, a);
                    return null === v && (v = n), new PolynomialBezier(r, f, v, h)
                }

                function joinLines(t, e, r, i, s) {
                    var a = e.points[3],
                        n = r.points[0];
                    if (3 === i || pointEqual(a, n)) return a;
                    if (2 === i) {
                        var h = -e.tangentAngle(1),
                            o = -r.tangentAngle(0) + Math.PI,
                            f = lineIntersection(a, polarOffset(a, h + Math.PI / 2, 100), n, polarOffset(n, h + Math.PI / 2, 100)),
                            v = f ? pointDistance(f, a) : pointDistance(a, n) / 2,
                            S = polarOffset(a, h, 2 * v * roundCorner);
                        return t.setXYAt(S[0], S[1], "o", t.length() - 1), S = polarOffset(n, o, 2 * v * roundCorner), t.setTripleAt(n[0], n[1], n[0], n[1], S[0], S[1], t.length()), n
                    }
                    var g = lineIntersection(pointEqual(a, e.points[2]) ? e.points[0] : e.points[2], a, n, pointEqual(n, r.points[1]) ? r.points[3] : r.points[1]);
                    return g && pointDistance(g, a) < s ? (t.setTripleAt(g[0], g[1], g[0], g[1], g[0], g[1], t.length()), g) : a
                }

                function getIntersection(t, e) {
                    var r = t.intersections(e);
                    return r.length && floatEqual(r[0][0], 1) && r.shift(), r.length ? r[0] : null
                }

                function pruneSegmentIntersection(t, e) {
                    var r = t.slice(),
                        i = e.slice(),
                        s = getIntersection(t[t.length - 1], e[0]);
                    return s && (r[t.length - 1] = t[t.length - 1].split(s[0])[0], i[0] = e[0].split(s[1])[1]), t.length > 1 && e.length > 1 && (s = getIntersection(t[0], e[e.length - 1])) ? [
                        [t[0].split(s[0])[0]],
                        [e[e.length - 1].split(s[1])[1]]
                    ] : [r, i]
                }

                function pruneIntersections(t) {
                    for (var e, r = 1; r < t.length; r += 1) e = pruneSegmentIntersection(t[r - 1], t[r]), t[r - 1] = e[0], t[r] = e[1];
                    return t.length > 1 && (e = pruneSegmentIntersection(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t
                }

                function offsetSegmentSplit(t, e) {
                    var i, s, a, n, r = t.inflectionPoints();
                    return 0 === r.length ? [offsetSegment(t, e)] : 1 === r.length || floatEqual(r[1], 1) ? (s = (a = t.split(r[0]))[1], [offsetSegment(i = a[0], e), offsetSegment(s, e)]) : (i = (a = t.split(r[0]))[0], n = (a = a[1].split((r[1] - r[0]) / (1 - r[0])))[0], s = a[1], [offsetSegment(i, e), offsetSegment(n, e), offsetSegment(s, e)])
                }

                function OffsetPathModifier() {}

                function getFontProperties(t) {
                    for (var a, e = t.fStyle ? t.fStyle.split(" ") : [], r = "normal", i = "normal", s = e.length, n = 0; n < s; n += 1) switch (a = e[n].toLowerCase(), a) {
                        case "italic":
                            i = "italic";
                            break;
                        case "bold":
                            r = "700";
                            break;
                        case "black":
                            r = "900";
                            break;
                        case "medium":
                            r = "500";
                            break;
                        case "regular":
                        case "normal":
                            r = "400";
                            break;
                        case "light":
                        case "thin":
                            r = "200"
                    }
                    return {
                        style: i,
                        weight: t.fWeight || r
                    }
                }
                extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
                    this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
                }, RepeaterModifier.prototype.applyTransforms = function(t, e, r, i, s, a) {
                    var n = a ? -1 : 1,
                        h = i.s.v[0] + (1 - i.s.v[0]) * (1 - s),
                        o = i.s.v[1] + (1 - i.s.v[1]) * (1 - s);
                    t.translate(i.p.v[0] * n * s, i.p.v[1] * n * s, i.p.v[2]), e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), e.rotate(-i.r.v * n * s), e.translate(i.a.v[0], i.a.v[1], i.a.v[2]), r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), r.scale(a ? 1 / h : h, a ? 1 / o : o), r.translate(i.a.v[0], i.a.v[1], i.a.v[2])
                }, RepeaterModifier.prototype.init = function(t, e, r, i) {
                    for (this.elem = t, this.arr = e, this.pos = r, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[r]); r > 0;) this._elements.unshift(e[r -= 1]);
                    this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                }, RepeaterModifier.prototype.resetElements = function(t) {
                    var e, r = t.length;
                    for (e = 0; e < r; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it)
                }, RepeaterModifier.prototype.cloneElements = function(t) {
                    var e = JSON.parse(JSON.stringify(t));
                    return this.resetElements(e), e
                }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
                    var r, i = t.length;
                    for (r = 0; r < i; r += 1) t[r]._render = e, "gr" === t[r].ty && this.changeGroupRender(t[r].it, e)
                }, RepeaterModifier.prototype.processShapes = function(t) {
                    var e, r, i, s, a, n = !1;
                    if (this._mdf || t) {
                        var f, h = Math.ceil(this.c.v);
                        if (this._groups.length < h) {
                            for (; this._groups.length < h;) {
                                var o = {
                                    it: this.cloneElements(this._elements),
                                    ty: "gr"
                                };
                                o.it.push({
                                    a: {
                                        a: 0,
                                        ix: 1,
                                        k: [0, 0]
                                    },
                                    nm: "Transform",
                                    o: {
                                        a: 0,
                                        ix: 7,
                                        k: 100
                                    },
                                    p: {
                                        a: 0,
                                        ix: 2,
                                        k: [0, 0]
                                    },
                                    r: {
                                        a: 1,
                                        ix: 6,
                                        k: [{
                                            s: 0,
                                            e: 0,
                                            t: 0
                                        }, {
                                            s: 0,
                                            e: 0,
                                            t: 1
                                        }]
                                    },
                                    s: {
                                        a: 0,
                                        ix: 3,
                                        k: [100, 100]
                                    },
                                    sa: {
                                        a: 0,
                                        ix: 5,
                                        k: 0
                                    },
                                    sk: {
                                        a: 0,
                                        ix: 4,
                                        k: 0
                                    },
                                    ty: "tr"
                                }), this.arr.splice(0, 0, o), this._groups.splice(0, 0, o), this._currentCopies += 1
                            }
                            this.elem.reloadShapes(), n = !0
                        }
                        for (a = 0, i = 0; i <= this._groups.length - 1; i += 1) {
                            if (this._groups[i]._render = f = a < h, this.changeGroupRender(this._groups[i].it, f), !f) {
                                var v = this.elemsData[i].it,
                                    S = v[v.length - 1];
                                0 !== S.transform.op.v ? (S.transform.op._mdf = !0, S.transform.op.v = 0) : S.transform.op._mdf = !1
                            }
                            a += 1
                        }
                        this._currentCopies = h;
                        var p = this.o.v,
                            b = p % 1,
                            g = p > 0 ? Math.floor(p) : Math.ceil(p),
                            m = this.pMatrix.props,
                            C = this.rMatrix.props,
                            c = this.sMatrix.props;
                        this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                        var l, d, u = 0;
                        if (p > 0) {
                            for (; u < g;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), u += 1;
                            b && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, b, !1), u += b)
                        } else if (p < 0) {
                            for (; u > g;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), u -= 1;
                            b && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -b, !0), u -= b)
                        }
                        for (i = 1 === this.data.m ? 0 : this._currentCopies - 1, s = 1 === this.data.m ? 1 : -1, a = this._currentCopies; a;) {
                            if (d = (r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + i / (this._currentCopies - 1) * (this.eo.v - this.so.v), 0 !== u) {
                                for ((0 !== i && 1 === s || i !== this._currentCopies - 1 && -1 === s) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(C[0], C[1], C[2], C[3], C[4], C[5], C[6], C[7], C[8], C[9], C[10], C[11], C[12], C[13], C[14], C[15]), this.matrix.transform(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8], c[9], c[10], c[11], c[12], c[13], c[14], c[15]), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), l = 0; l < d; l += 1) r[l] = this.matrix.props[l];
                                this.matrix.reset()
                            } else
                                for (this.matrix.reset(), l = 0; l < d; l += 1) r[l] = this.matrix.props[l];
                            u += 1, a -= 1, i += s
                        }
                    } else
                        for (a = this._currentCopies, i = 0, s = 1; a;) r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, a -= 1, i += s;
                    return n
                }, RepeaterModifier.prototype.addShape = function() {}, extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
                    this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
                }, RoundCornersModifier.prototype.processPath = function(t, e) {
                    var r = shapePool.newElement();
                    r.c = t.c;
                    var i, a, n, h, o, f, v, p, b, g, m, C, c, s = t._length,
                        S = 0;
                    for (i = 0; i < s; i += 1) n = t.i[i], (a = t.v[i])[0] === (h = t.o[i])[0] && a[1] === h[1] && a[0] === n[0] && a[1] === n[1] ? 0 !== i && i !== s - 1 || t.c ? (o = 0 === i ? t.v[s - 1] : t.v[i - 1], v = (f = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2))) ? Math.min(f / 2, e) / f : 0, r.setTripleAt(p = C = a[0] + (o[0] - a[0]) * v, b = c = a[1] - (a[1] - o[1]) * v, p - (p - a[0]) * roundCorner, b - (b - a[1]) * roundCorner, C, c, S), S += 1, o = i === s - 1 ? t.v[0] : t.v[i + 1], v = (f = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2))) ? Math.min(f / 2, e) / f : 0, r.setTripleAt(p = g = a[0] + (o[0] - a[0]) * v, b = m = a[1] + (o[1] - a[1]) * v, g, m, C = p - (p - a[0]) * roundCorner, c = b - (b - a[1]) * roundCorner, S), S += 1) : (r.setTripleAt(a[0], a[1], h[0], h[1], n[0], n[1], S), S += 1) : (r.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], S), S += 1);
                    return r
                }, RoundCornersModifier.prototype.processShapes = function(t) {
                    var e, r, s, a, h, o, i = this.shapes.length,
                        n = this.rd.v;
                    if (0 !== n)
                        for (r = 0; r < i; r += 1) {
                            if (o = (h = this.shapes[r]).localShapeCollection, h.shape._mdf || this._mdf || t)
                                for (o.releaseShapes(), h.shape._mdf = !0, e = h.shape.paths.shapes, a = h.shape.paths._length, s = 0; s < a; s += 1) o.addShape(this.processPath(e[s], n));
                            h.shape.paths = h.localShapeCollection
                        }
                    this.dynamicProperties.length || (this._mdf = !1)
                }, PolynomialBezier.prototype.point = function(t) {
                    return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]]
                }, PolynomialBezier.prototype.derivative = function(t) {
                    return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]]
                }, PolynomialBezier.prototype.tangentAngle = function(t) {
                    var e = this.derivative(t);
                    return Math.atan2(e[1], e[0])
                }, PolynomialBezier.prototype.normalAngle = function(t) {
                    var e = this.derivative(t);
                    return Math.atan2(e[0], e[1])
                }, PolynomialBezier.prototype.inflectionPoints = function() {
                    var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
                    if (floatZero(t)) return [];
                    var e = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t,
                        r = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
                    if (r < 0) return [];
                    var i = Math.sqrt(r);
                    return floatZero(i) ? i > 0 && i < 1 ? [e] : [] : [e - i, e + i].filter(function(s) {
                        return s > 0 && s < 1
                    })
                }, PolynomialBezier.prototype.split = function(t) {
                    if (t <= 0) return [singlePoint(this.points[0]), this];
                    if (t >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
                    var e = lerpPoint(this.points[0], this.points[1], t),
                        r = lerpPoint(this.points[1], this.points[2], t),
                        i = lerpPoint(this.points[2], this.points[3], t),
                        s = lerpPoint(e, r, t),
                        a = lerpPoint(r, i, t),
                        n = lerpPoint(s, a, t);
                    return [new PolynomialBezier(this.points[0], e, s, n, !0), new PolynomialBezier(n, a, i, this.points[3], !0)]
                }, PolynomialBezier.prototype.bounds = function() {
                    return {
                        x: extrema(this, 0),
                        y: extrema(this, 1)
                    }
                }, PolynomialBezier.prototype.boundingBox = function() {
                    var t = this.bounds();
                    return {
                        left: t.x.min,
                        right: t.x.max,
                        top: t.y.min,
                        bottom: t.y.max,
                        width: t.x.max - t.x.min,
                        height: t.y.max - t.y.min,
                        cx: (t.x.max + t.x.min) / 2,
                        cy: (t.y.max + t.y.min) / 2
                    }
                }, PolynomialBezier.prototype.intersections = function(t, e, r) {
                    void 0 === e && (e = 2), void 0 === r && (r = 7);
                    var i = [];
                    return intersectsImpl(intersectData(this, 0, 1), intersectData(t, 0, 1), 0, e, i, r), i
                }, PolynomialBezier.shapeSegment = function(t, e) {
                    var r = (e + 1) % t.length();
                    return new PolynomialBezier(t.v[e], t.o[e], t.i[r], t.v[r], !0)
                }, PolynomialBezier.shapeSegmentInverted = function(t, e) {
                    var r = (e + 1) % t.length();
                    return new PolynomialBezier(t.v[r], t.i[r], t.o[e], t.v[e], !0)
                }, extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(t, e) {
                    this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(t, e.s, 0, null, this), this.frequency = PropertyFactory.getProp(t, e.r, 0, null, this), this.pointsType = PropertyFactory.getProp(t, e.pt, 0, null, this), this._isAnimated = 0 !== this.amplitude.effectsSequence.length || 0 !== this.frequency.effectsSequence.length || 0 !== this.pointsType.effectsSequence.length
                }, ZigZagModifier.prototype.processPath = function(t, e, r, i) {
                    var s = t._length,
                        a = shapePool.newElement();
                    if (a.c = t.c, t.c || (s -= 1), 0 === s) return a;
                    var n = -1,
                        h = PolynomialBezier.shapeSegment(t, 0);
                    zigZagCorner(a, t, 0, e, r, i, n);
                    for (var o = 0; o < s; o += 1) n = zigZagSegment(a, h, e, r, i, -n), h = o !== s - 1 || t.c ? PolynomialBezier.shapeSegment(t, (o + 1) % s) : null, zigZagCorner(a, t, o + 1, e, r, i, n);
                    return a
                }, ZigZagModifier.prototype.processShapes = function(t) {
                    var e, r, s, a, f, v, i = this.shapes.length,
                        n = this.amplitude.v,
                        h = Math.max(0, Math.round(this.frequency.v)),
                        o = this.pointsType.v;
                    if (0 !== n)
                        for (r = 0; r < i; r += 1) {
                            if (v = (f = this.shapes[r]).localShapeCollection, f.shape._mdf || this._mdf || t)
                                for (v.releaseShapes(), f.shape._mdf = !0, e = f.shape.paths.shapes, a = f.shape.paths._length, s = 0; s < a; s += 1) v.addShape(this.processPath(e[s], n, h, o));
                            f.shape.paths = f.localShapeCollection
                        }
                    this.dynamicProperties.length || (this._mdf = !1)
                }, extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(t, e) {
                    this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = 0 !== this.amount.effectsSequence.length
                }, OffsetPathModifier.prototype.processPath = function(t, e, r, i) {
                    var s = shapePool.newElement();
                    s.c = t.c;
                    var a = t.length();
                    t.c || (a -= 1);
                    var n, h, o, f = [];
                    for (n = 0; n < a; n += 1) o = PolynomialBezier.shapeSegment(t, n), f.push(offsetSegmentSplit(o, e));
                    if (!t.c)
                        for (n = a - 1; n >= 0; n -= 1) o = PolynomialBezier.shapeSegmentInverted(t, n), f.push(offsetSegmentSplit(o, e));
                    f = pruneIntersections(f);
                    var v = null,
                        S = null;
                    for (n = 0; n < f.length; n += 1) {
                        var p = f[n];
                        for (S && (v = joinLines(s, S, p[0], r, i)), S = p[p.length - 1], h = 0; h < p.length; h += 1) o = p[h], v && pointEqual(o.points[0], v) ? s.setXYAt(o.points[1][0], o.points[1][1], "o", s.length() - 1) : s.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], s.length()), s.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], s.length()), v = o.points[3]
                    }
                    return f.length && joinLines(s, S, f[0][0], r, i), s
                }, OffsetPathModifier.prototype.processShapes = function(t) {
                    var e, r, s, a, f, v, i = this.shapes.length,
                        n = this.amount.v,
                        h = this.miterLimit.v,
                        o = this.lineJoin;
                    if (0 !== n)
                        for (r = 0; r < i; r += 1) {
                            if (v = (f = this.shapes[r]).localShapeCollection, f.shape._mdf || this._mdf || t)
                                for (v.releaseShapes(), f.shape._mdf = !0, e = f.shape.paths.shapes, a = f.shape.paths._length, s = 0; s < a; s += 1) v.addShape(this.processPath(e[s], n, o, h));
                            f.shape.paths = f.localShapeCollection
                        }
                    this.dynamicProperties.length || (this._mdf = !1)
                };
                var FontManager = function() {
                    var e = {
                            w: 0,
                            size: 0,
                            shapes: [],
                            data: {
                                shapes: []
                            }
                        },
                        r = [];
                    r = r.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
                    var i = 127988,
                        S = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];

                    function b(x, A) {
                        var y = createTag("span");
                        y.setAttribute("aria-hidden", !0), y.style.fontFamily = A;
                        var P = createTag("span");
                        P.innerText = "giItT1WQy@!-/#", y.style.position = "absolute", y.style.left = "-10000px", y.style.top = "-10000px", y.style.fontSize = "300px", y.style.fontVariant = "normal", y.style.fontStyle = "normal", y.style.fontWeight = "normal", y.style.letterSpacing = "0", y.appendChild(P), document.body.appendChild(y);
                        var F = P.offsetWidth;
                        return P.style.fontFamily = function p(x) {
                            var y, A = x.split(","),
                                P = A.length,
                                F = [];
                            for (y = 0; y < P; y += 1) "sans-serif" !== A[y] && "monospace" !== A[y] && F.push(A[y]);
                            return F.join(",")
                        }(x) + ", " + A, {
                            node: P,
                            w: F,
                            parent: y
                        }
                    }

                    function m(x, A) {
                        var P, y = document.body && A ? "svg" : "canvas",
                            F = getFontProperties(x);
                        if ("svg" === y) {
                            var k = createNS("text");
                            k.style.fontSize = "100px", k.setAttribute("font-family", x.fFamily), k.setAttribute("font-style", F.style), k.setAttribute("font-weight", F.weight), k.textContent = "1", x.fClass ? (k.style.fontFamily = "inherit", k.setAttribute("class", x.fClass)) : k.style.fontFamily = x.fFamily, A.appendChild(k), P = k
                        } else {
                            var R = new OffscreenCanvas(500, 500).getContext("2d");
                            R.font = F.style + " " + F.weight + " 100px " + x.fFamily, P = R
                        }
                        return {
                            measureText: function z(N) {
                                return "svg" === y ? (P.textContent = N, P.getComputedTextLength()) : P.measureText(N).width
                            }
                        }
                    }

                    function E(x) {
                        var A = 0,
                            y = x.charCodeAt(0);
                        if (y >= 55296 && y <= 56319) {
                            var P = x.charCodeAt(1);
                            P >= 56320 && P <= 57343 && (A = 1024 * (y - 55296) + P - 56320 + 65536)
                        }
                        return A
                    }

                    function w(x) {
                        var A = E(x);
                        return A >= 127462 && A <= 127487
                    }
                    var B = function() {
                        this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
                    };
                    return B.isModifier = function _(x, A) {
                        var y = x.toString(16) + A.toString(16);
                        return -1 !== S.indexOf(y)
                    }, B.isZeroWidthJoiner = function T(x) {
                        return 8205 === x
                    }, B.isFlagEmoji = function G(x) {
                        return w(x.substr(0, 2)) && w(x.substr(2, 2))
                    }, B.isRegionalCode = w, B.isCombinedCharacter = function L(x) {
                        return -1 !== r.indexOf(x)
                    }, B.isRegionalFlag = function V(x, A) {
                        var y = E(x.substr(A, 2));
                        if (y !== i) return !1;
                        var P = 0;
                        for (A += 2; P < 5;) {
                            if ((y = E(x.substr(A, 2))) < 917601 || y > 917626) return !1;
                            P += 1, A += 2
                        }
                        return 917631 === E(x.substr(A, 2))
                    }, B.isVariationSelector = function M(x) {
                        return 65039 === x
                    }, B.BLACK_FLAG_CODE_POINT = i, B.prototype = {
                        addChars: function c(x) {
                            if (x) {
                                this.chars || (this.chars = []);
                                var A, P, k, y = x.length,
                                    F = this.chars.length;
                                for (A = 0; A < y; A += 1) {
                                    for (P = 0, k = !1; P < F;) this.chars[P].style === x[A].style && this.chars[P].fFamily === x[A].fFamily && this.chars[P].ch === x[A].ch && (k = !0), P += 1;
                                    k || (this.chars.push(x[A]), F += 1)
                                }
                            }
                        },
                        addFonts: function C(x, A) {
                            if (x) {
                                if (this.chars) return this.isLoaded = !0, void(this.fonts = x.list);
                                if (!document.body) return this.isLoaded = !0, x.list.forEach(function(Y) {
                                    Y.helper = m(Y), Y.cache = {}
                                }), void(this.fonts = x.list);
                                var P, y = x.list,
                                    F = y.length,
                                    k = F;
                                for (P = 0; P < F; P += 1) {
                                    var z, N, R = !0;
                                    if (y[P].loaded = !1, y[P].monoCase = b(y[P].fFamily, "monospace"), y[P].sansCase = b(y[P].fFamily, "sans-serif"), y[P].fPath) {
                                        if ("p" === y[P].fOrigin || 3 === y[P].origin) {
                                            if ((z = document.querySelectorAll('style[f-forigin="p"][f-family="' + y[P].fFamily + '"], style[f-origin="3"][f-family="' + y[P].fFamily + '"]')).length > 0 && (R = !1), R) {
                                                var H = createTag("style");
                                                H.setAttribute("f-forigin", y[P].fOrigin), H.setAttribute("f-origin", y[P].origin), H.setAttribute("f-family", y[P].fFamily), H.type = "text/css", H.innerText = "@font-face {font-family: " + y[P].fFamily + "; font-style: normal; src: url('" + y[P].fPath + "');}", A.appendChild(H)
                                            }
                                        } else if ("g" === y[P].fOrigin || 1 === y[P].origin) {
                                            for (z = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), N = 0; N < z.length; N += 1) - 1 !== z[N].href.indexOf(y[P].fPath) && (R = !1);
                                            if (R) {
                                                var W = createTag("link");
                                                W.setAttribute("f-forigin", y[P].fOrigin), W.setAttribute("f-origin", y[P].origin), W.type = "text/css", W.rel = "stylesheet", W.href = y[P].fPath, document.body.appendChild(W)
                                            }
                                        } else if ("t" === y[P].fOrigin || 2 === y[P].origin) {
                                            for (z = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), N = 0; N < z.length; N += 1) y[P].fPath === z[N].src && (R = !1);
                                            if (R) {
                                                var q = createTag("link");
                                                q.setAttribute("f-forigin", y[P].fOrigin), q.setAttribute("f-origin", y[P].origin), q.setAttribute("rel", "stylesheet"), q.setAttribute("href", y[P].fPath), A.appendChild(q)
                                            }
                                        }
                                    } else y[P].loaded = !0, k -= 1;
                                    y[P].helper = m(y[P], A), y[P].cache = {}, this.fonts.push(y[P])
                                }
                                0 === k ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                            } else this.isLoaded = !0
                        },
                        getCharData: function u(x, A, y) {
                            for (var P = 0, F = this.chars.length; P < F;) {
                                if (this.chars[P].ch === x && this.chars[P].style === A && this.chars[P].fFamily === y) return this.chars[P];
                                P += 1
                            }
                            return ("string" == typeof x && 13 !== x.charCodeAt(0) || !x) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", x, A, y)), e
                        },
                        getFontByName: function d(x) {
                            for (var A = 0, y = this.fonts.length; A < y;) {
                                if (this.fonts[A].fName === x) return this.fonts[A];
                                A += 1
                            }
                            return this.fonts[0]
                        },
                        measureText: function l(x, A, y) {
                            var P = this.getFontByName(A),
                                F = x;
                            if (!P.cache[F]) {
                                var k = P.helper;
                                if (" " === x) {
                                    var R = k.measureText("|" + x + "|"),
                                        z = k.measureText("||");
                                    P.cache[F] = (R - z) / 100
                                } else P.cache[F] = k.measureText(x) / 100
                            }
                            return P.cache[F] * y
                        },
                        checkLoadedFonts: function g() {
                            var x, A = this.fonts.length,
                                F = A;
                            for (x = 0; x < A; x += 1) this.fonts[x].loaded ? F -= 1 : "n" === this.fonts[x].fOrigin || 0 === this.fonts[x].origin ? this.fonts[x].loaded = !0 : ((this.fonts[x].monoCase.node.offsetWidth !== this.fonts[x].monoCase.w || this.fonts[x].sansCase.node.offsetWidth !== this.fonts[x].sansCase.w) && (F -= 1, this.fonts[x].loaded = !0), this.fonts[x].loaded && (this.fonts[x].sansCase.parent.parentNode.removeChild(this.fonts[x].sansCase.parent), this.fonts[x].monoCase.parent.parentNode.removeChild(this.fonts[x].monoCase.parent)));
                            0 !== F && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
                        },
                        setIsLoaded: function D() {
                            this.isLoaded = !0
                        }
                    }, B
                }();

                function SlotManager(t) {
                    this.animationData = t
                }

                function slotFactory(t) {
                    return new SlotManager(t)
                }

                function RenderableElement() {}
                SlotManager.prototype.getProp = function(t) {
                    return this.animationData.slots && this.animationData.slots[t.sid] ? Object.assign(t, this.animationData.slots[t.sid].p) : t
                }, RenderableElement.prototype = {
                    initRenderable: function() {
                        this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
                    },
                    addRenderableComponent: function(e) {
                        -1 === this.renderableComponents.indexOf(e) && this.renderableComponents.push(e)
                    },
                    removeRenderableComponent: function(e) {
                        -1 !== this.renderableComponents.indexOf(e) && this.renderableComponents.splice(this.renderableComponents.indexOf(e), 1)
                    },
                    prepareRenderableFrame: function(e) {
                        this.checkLayerLimits(e)
                    },
                    checkTransparency: function() {
                        this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
                    },
                    checkLayerLimits: function(e) {
                        this.data.ip - this.data.st <= e && this.data.op - this.data.st > e ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
                    },
                    renderRenderable: function() {
                        var e, r = this.renderableComponents.length;
                        for (e = 0; e < r; e += 1) this.renderableComponents[e].renderFrame(this._isFirstFrame)
                    },
                    sourceRectAtTime: function() {
                        return {
                            top: 0,
                            left: 0,
                            width: 100,
                            height: 100
                        }
                    },
                    getLayerSize: function() {
                        return 5 === this.data.ty ? {
                            w: this.data.textData.width,
                            h: this.data.textData.height
                        } : {
                            w: this.data.width,
                            h: this.data.height
                        }
                    }
                };
                var getBlendMode = function() {
                    var t = {
                        0: "source-over",
                        1: "multiply",
                        2: "screen",
                        3: "overlay",
                        4: "darken",
                        5: "lighten",
                        6: "color-dodge",
                        7: "color-burn",
                        8: "hard-light",
                        9: "soft-light",
                        10: "difference",
                        11: "exclusion",
                        12: "hue",
                        13: "saturation",
                        14: "color",
                        15: "luminosity"
                    };
                    return function(e) {
                        return t[e] || ""
                    }
                }();

                function SliderEffect(t, e, r) {
                    this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
                }

                function AngleEffect(t, e, r) {
                    this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
                }

                function ColorEffect(t, e, r) {
                    this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
                }

                function PointEffect(t, e, r) {
                    this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
                }

                function LayerIndexEffect(t, e, r) {
                    this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
                }

                function MaskIndexEffect(t, e, r) {
                    this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
                }

                function CheckboxEffect(t, e, r) {
                    this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
                }

                function NoValueEffect() {
                    this.p = {}
                }

                function EffectsManager(t, e) {
                    var r = t.ef || [];
                    this.effectElements = [];
                    var i, a, s = r.length;
                    for (i = 0; i < s; i += 1) a = new GroupEffect(r[i], e), this.effectElements.push(a)
                }

                function GroupEffect(t, e) {
                    this.init(t, e)
                }

                function BaseElement() {}

                function FrameElement() {}

                function FootageElement(t, e, r) {
                    this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, r)
                }

                function AudioElement(t, e, r) {
                    this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, r), this._isPlaying = !1, this._canPlay = !1;
                    var i = this.globalData.getAssetsPath(this.assetData);
                    this.audio = this.globalData.audioController.createAudio(i), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                        _placeholder: !0
                    }, this.lv = PropertyFactory.getProp(this, t.au && t.au.lv ? t.au.lv : {
                        k: [100]
                    }, 1, .01, this)
                }

                function BaseRenderer() {}
                extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
                    this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
                    var r, s, i = this.data.ef.length,
                        a = this.data.ef;
                    for (r = 0; r < i; r += 1) {
                        switch (s = null, a[r].ty) {
                            case 0:
                                s = new SliderEffect(a[r], e, this);
                                break;
                            case 1:
                                s = new AngleEffect(a[r], e, this);
                                break;
                            case 2:
                                s = new ColorEffect(a[r], e, this);
                                break;
                            case 3:
                                s = new PointEffect(a[r], e, this);
                                break;
                            case 4:
                            case 7:
                                s = new CheckboxEffect(a[r], e, this);
                                break;
                            case 10:
                                s = new LayerIndexEffect(a[r], e, this);
                                break;
                            case 11:
                                s = new MaskIndexEffect(a[r], e, this);
                                break;
                            case 5:
                                s = new EffectsManager(a[r], e, this);
                                break;
                            default:
                                s = new NoValueEffect(a[r], e, this)
                        }
                        s && this.effectElements.push(s)
                    }
                }, BaseElement.prototype = {
                    checkMasks: function() {
                        if (!this.data.hasMask) return !1;
                        for (var e = 0, r = this.data.masksProperties.length; e < r;) {
                            if ("n" !== this.data.masksProperties[e].mode && !1 !== this.data.masksProperties[e].cl) return !0;
                            e += 1
                        }
                        return !1
                    },
                    initExpressions: function() {
                        var e = getExpressionInterfaces();
                        if (e) {
                            var r = e("layer"),
                                i = e("effects"),
                                s = e("shape"),
                                a = e("text"),
                                n = e("comp");
                            this.layerInterface = r(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                            var h = i.createEffectsInterface(this, this.layerInterface);
                            this.layerInterface.registerEffectsInterface(h), 0 === this.data.ty || this.data.xt ? this.compInterface = n(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = s(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = a(this), this.layerInterface.text = this.layerInterface.textInterface)
                        }
                    },
                    setBlendMode: function() {
                        var e = getBlendMode(this.data.bm);
                        (this.baseElement || this.layerElement).style["mix-blend-mode"] = e
                    },
                    initBaseData: function(e, r, i) {
                        this.globalData = r, this.comp = i, this.data = e, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
                    },
                    getType: function() {
                        return this.type
                    },
                    sourceRectAtTime: function() {}
                }, FrameElement.prototype = {
                    initFrame: function() {
                        this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
                    },
                    prepareProperties: function(e, r) {
                        var i, s = this.dynamicProperties.length;
                        for (i = 0; i < s; i += 1)(r || this._isParent && "transform" === this.dynamicProperties[i].propType) && (this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
                    },
                    addDynamicProperty: function(e) {
                        -1 === this.dynamicProperties.indexOf(e) && this.dynamicProperties.push(e)
                    }
                }, FootageElement.prototype.prepareFrame = function() {}, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
                    return null
                }, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() {
                    var t = getExpressionInterfaces();
                    if (t) {
                        var e = t("footage");
                        this.layerInterface = e(this)
                    }
                }, FootageElement.prototype.getFootageData = function() {
                    return this.footageData
                }, AudioElement.prototype.prepareFrame = function(t) {
                    this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this._currentTime = this.tm._placeholder ? t / this.data.sr : this.tm.v, this._volume = this.lv.v[0];
                    var r = this._volume * this._volumeMultiplier;
                    this._previousVolume !== r && (this._previousVolume = r, this.audio.volume(r))
                }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
                    this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
                }, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() {
                    this.audio.pause(), this._isPlaying = !1
                }, AudioElement.prototype.pause = function() {
                    this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
                }, AudioElement.prototype.resume = function() {
                    this._canPlay = !0
                }, AudioElement.prototype.setRate = function(t) {
                    this.audio.rate(t)
                }, AudioElement.prototype.volume = function(t) {
                    this._volumeMultiplier = t, this._previousVolume = t * this._volume, this.audio.volume(this._previousVolume)
                }, AudioElement.prototype.getBaseElement = function() {
                    return null
                }, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {}, BaseRenderer.prototype.checkLayers = function(t) {
                    var e, i, r = this.layers.length;
                    for (this.completeLayers = !0, e = r - 1; e >= 0; e -= 1) this.elements[e] || (i = this.layers[e]).ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
                    this.checkPendingElements()
                }, BaseRenderer.prototype.createItem = function(t) {
                    switch (t.ty) {
                        case 2:
                            return this.createImage(t);
                        case 0:
                            return this.createComp(t);
                        case 1:
                            return this.createSolid(t);
                        case 3:
                        default:
                            return this.createNull(t);
                        case 4:
                            return this.createShape(t);
                        case 5:
                            return this.createText(t);
                        case 6:
                            return this.createAudio(t);
                        case 13:
                            return this.createCamera(t);
                        case 15:
                            return this.createFootage(t)
                    }
                }, BaseRenderer.prototype.createCamera = function() {
                    throw new Error("You're using a 3d camera. Try the html renderer.")
                }, BaseRenderer.prototype.createAudio = function(t) {
                    return new AudioElement(t, this.globalData, this)
                }, BaseRenderer.prototype.createFootage = function(t) {
                    return new FootageElement(t, this.globalData, this)
                }, BaseRenderer.prototype.buildAllItems = function() {
                    var t, e = this.layers.length;
                    for (t = 0; t < e; t += 1) this.buildItem(t);
                    this.checkPendingElements()
                }, BaseRenderer.prototype.includeLayers = function(t) {
                    this.completeLayers = !1;
                    var e, i, r = t.length,
                        s = this.layers.length;
                    for (e = 0; e < r; e += 1)
                        for (i = 0; i < s;) {
                            if (this.layers[i].id === t[e].id) {
                                this.layers[i] = t[e];
                                break
                            }
                            i += 1
                        }
                }, BaseRenderer.prototype.setProjectInterface = function(t) {
                    this.globalData.projectInterface = t
                }, BaseRenderer.prototype.initItems = function() {
                    this.globalData.progressiveLoad || this.buildAllItems()
                }, BaseRenderer.prototype.buildElementParenting = function(t, e, r) {
                    for (var i = this.elements, s = this.layers, a = 0, n = s.length; a < n;) s[a].ind == e && (i[a] && !0 !== i[a] ? (r.push(i[a]), i[a].setAsParent(), void 0 !== s[a].parent ? this.buildElementParenting(t, s[a].parent, r) : t.setHierarchy(r)) : (this.buildItem(a), this.addPendingElement(t))), a += 1
                }, BaseRenderer.prototype.addPendingElement = function(t) {
                    this.pendingElements.push(t)
                }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
                    var e, r = t.length;
                    for (e = 0; e < r; e += 1)
                        if (t[e].xt) {
                            var i = this.createComp(t[e]);
                            i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
                        }
                }, BaseRenderer.prototype.getElementById = function(t) {
                    var e, r = this.elements.length;
                    for (e = 0; e < r; e += 1)
                        if (this.elements[e].data.ind === t) return this.elements[e];
                    return null
                }, BaseRenderer.prototype.getElementByPath = function(t) {
                    var r, e = t.shift();
                    if ("number" == typeof e) r = this.elements[e];
                    else {
                        var i, s = this.elements.length;
                        for (i = 0; i < s; i += 1)
                            if (this.elements[i].data.nm === e) {
                                r = this.elements[i];
                                break
                            }
                    }
                    return 0 === t.length ? r : r.getElementByPath(t)
                }, BaseRenderer.prototype.setupGlobalData = function(t, e) {
                    this.globalData.fontManager = new FontManager, this.globalData.slotManager = slotFactory(t), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
                        w: t.w,
                        h: t.h
                    }
                };
                var effectTypes = {
                    TRANSFORM_EFFECT: "transformEFfect"
                };

                function TransformElement() {}

                function MaskElement(t, e, r) {
                    this.data = t, this.element = e, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
                    var s, i = this.globalData.defs,
                        a = this.masksProperties ? this.masksProperties.length : 0;
                    this.viewData = createSizedArray(a), this.solidPath = "";
                    var n, v, S, b, g, m, C, h = this.masksProperties,
                        o = 0,
                        f = [],
                        p = createElementID(),
                        c = "clipPath",
                        u = "clip-path";
                    for (s = 0; s < a; s += 1)
                        if (("a" !== h[s].mode && "n" !== h[s].mode || h[s].inv || 100 !== h[s].o.k || h[s].o.x) && (c = "mask", u = "mask"), "s" !== h[s].mode && "i" !== h[s].mode || 0 !== o ? b = null : ((b = createNS("rect")).setAttribute("fill", "#ffffff"), b.setAttribute("width", this.element.comp.data.w || 0), b.setAttribute("height", this.element.comp.data.h || 0), f.push(b)), n = createNS("path"), "n" === h[s].mode) this.viewData[s] = {
                            op: PropertyFactory.getProp(this.element, h[s].o, 0, .01, this.element),
                            prop: ShapePropertyFactory.getShapeProp(this.element, h[s], 3),
                            elem: n,
                            lastPath: ""
                        }, i.appendChild(n);
                        else {
                            var l;
                            if (o += 1, n.setAttribute("fill", "s" === h[s].mode ? "#000000" : "#ffffff"), n.setAttribute("clip-rule", "nonzero"), 0 !== h[s].x.k ? (c = "mask", u = "mask", C = PropertyFactory.getProp(this.element, h[s].x, 0, null, this.element), l = createElementID(), (g = createNS("filter")).setAttribute("id", l), (m = createNS("feMorphology")).setAttribute("operator", "erode"), m.setAttribute("in", "SourceGraphic"), m.setAttribute("radius", "0"), g.appendChild(m), i.appendChild(g), n.setAttribute("stroke", "s" === h[s].mode ? "#000000" : "#ffffff")) : (m = null, C = null), this.storedData[s] = {
                                    elem: n,
                                    x: C,
                                    expan: m,
                                    lastPath: "",
                                    lastOperator: "",
                                    filterId: l,
                                    lastRadius: 0
                                }, "i" === h[s].mode) {
                                S = f.length;
                                var d = createNS("g");
                                for (v = 0; v < S; v += 1) d.appendChild(f[v]);
                                var E = createNS("mask");
                                E.setAttribute("mask-type", "alpha"), E.setAttribute("id", p + "_" + o), E.appendChild(n), i.appendChild(E), d.setAttribute("mask", "url(" + getLocationHref() + "#" + p + "_" + o + ")"), f.length = 0, f.push(d)
                            } else f.push(n);
                            h[s].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[s] = {
                                elem: n,
                                lastPath: "",
                                op: PropertyFactory.getProp(this.element, h[s].o, 0, .01, this.element),
                                prop: ShapePropertyFactory.getShapeProp(this.element, h[s], 3),
                                invRect: b
                            }, this.viewData[s].prop.k || this.drawPath(h[s], this.viewData[s].prop.v, this.viewData[s])
                        }
                    for (this.maskElement = createNS(c), a = f.length, s = 0; s < a; s += 1) this.maskElement.appendChild(f[s]);
                    o > 0 && (this.maskElement.setAttribute("id", p), this.element.maskedElement.setAttribute(u, "url(" + getLocationHref() + "#" + p + ")"), i.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
                }
                TransformElement.prototype = {
                    initTransform: function() {
                        var e = new Matrix;
                        this.finalTransform = {
                            mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                                o: 0
                            },
                            _matMdf: !1,
                            _localMatMdf: !1,
                            _opMdf: !1,
                            mat: e,
                            localMat: e,
                            localOpacity: 1
                        }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0)
                    },
                    renderTransform: function() {
                        if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                            var r = this.finalTransform.mat,
                                i = 0,
                                s = this.hierarchy.length;
                            if (!this.finalTransform._matMdf)
                                for (; i < s;) {
                                    if (this.hierarchy[i].finalTransform.mProp._mdf) {
                                        this.finalTransform._matMdf = !0;
                                        break
                                    }
                                    i += 1
                                }
                            if (this.finalTransform._matMdf)
                                for (r.cloneFromProps(this.finalTransform.mProp.v.props), i = 0; i < s; i += 1) r.multiply(this.hierarchy[i].finalTransform.mProp.v)
                        }
                        this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v)
                    },
                    renderLocalTransform: function() {
                        if (this.localTransforms) {
                            var e = 0,
                                r = this.localTransforms.length;
                            if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)
                                for (; e < r;) this.localTransforms[e]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[e]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), e += 1;
                            if (this.finalTransform._localMatMdf) {
                                var i = this.finalTransform.localMat;
                                for (this.localTransforms[0].matrix.clone(i), e = 1; e < r; e += 1) i.multiply(this.localTransforms[e].matrix);
                                i.multiply(this.finalTransform.mat)
                            }
                            if (this.finalTransform._opMdf) {
                                var a = this.finalTransform.localOpacity;
                                for (e = 0; e < r; e += 1) a *= .01 * this.localTransforms[e].opacity;
                                this.finalTransform.localOpacity = a
                            }
                        }
                    },
                    searchEffectTransforms: function() {
                        if (this.renderableEffectsManager) {
                            var e = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
                            if (e.length) {
                                this.localTransforms = [], this.finalTransform.localMat = new Matrix;
                                var r = 0,
                                    i = e.length;
                                for (r = 0; r < i; r += 1) this.localTransforms.push(e[r])
                            }
                        }
                    },
                    globalToLocal: function(e) {
                        var r = [];
                        r.push(this.finalTransform);
                        for (var i = !0, s = this.comp; i;) s.finalTransform ? (s.data.hasMask && r.splice(0, 0, s.finalTransform), s = s.comp) : i = !1;
                        var a, h, n = r.length;
                        for (a = 0; a < n; a += 1) h = r[a].mat.applyToPointArray(0, 0, 0), e = [e[0] - h[0], e[1] - h[1], 0];
                        return e
                    },
                    mHelper: new Matrix
                }, MaskElement.prototype.getMaskProperty = function(t) {
                    return this.viewData[t].prop
                }, MaskElement.prototype.renderFrame = function(t) {
                    var r, e = this.element.finalTransform.mat,
                        i = this.masksProperties.length;
                    for (r = 0; r < i; r += 1)
                        if ((this.viewData[r].prop._mdf || t) && this.drawPath(this.masksProperties[r], this.viewData[r].prop.v, this.viewData[r]), (this.viewData[r].op._mdf || t) && this.viewData[r].elem.setAttribute("fill-opacity", this.viewData[r].op.v), "n" !== this.masksProperties[r].mode && (this.viewData[r].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[r].invRect.setAttribute("transform", e.getInverseMatrix().to2dCSS()), this.storedData[r].x && (this.storedData[r].x._mdf || t))) {
                            var s = this.storedData[r].expan;
                            this.storedData[r].x.v < 0 ? ("erode" !== this.storedData[r].lastOperator && (this.storedData[r].lastOperator = "erode", this.storedData[r].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[r].filterId + ")")), s.setAttribute("radius", -this.storedData[r].x.v)) : ("dilate" !== this.storedData[r].lastOperator && (this.storedData[r].lastOperator = "dilate", this.storedData[r].elem.setAttribute("filter", null)), this.storedData[r].elem.setAttribute("stroke-width", 2 * this.storedData[r].x.v))
                        }
                }, MaskElement.prototype.getMaskelement = function() {
                    return this.maskElement
                }, MaskElement.prototype.createLayerSolidPath = function() {
                    var t = "M0,0 ";
                    return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, (t += " h-" + this.globalData.compSize.w) + " v-" + this.globalData.compSize.h + " "
                }, MaskElement.prototype.drawPath = function(t, e, r) {
                    var s, a, i = " M" + e.v[0][0] + "," + e.v[0][1];
                    for (a = e._length, s = 1; s < a; s += 1) i += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[s][0] + "," + e.i[s][1] + " " + e.v[s][0] + "," + e.v[s][1];
                    if (e.c && a > 1 && (i += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), r.lastPath !== i) {
                        var n = "";
                        r.elem && (e.c && (n = t.inv ? this.solidPath + i : i), r.elem.setAttribute("d", n)), r.lastPath = i
                    }
                }, MaskElement.prototype.destroy = function() {
                    this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
                };
                var filtersFactory = function() {
                        var t = {
                            createFilter: function e(i, s) {
                                var a = createNS("filter");
                                return a.setAttribute("id", i), !0 !== s && (a.setAttribute("filterUnits", "objectBoundingBox"), a.setAttribute("x", "0%"), a.setAttribute("y", "0%"), a.setAttribute("width", "100%"), a.setAttribute("height", "100%")), a
                            },
                            createAlphaToLuminanceFilter: function r() {
                                var i = createNS("feColorMatrix");
                                return i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), i
                            }
                        };
                        return t
                    }(),
                    featureSupport = function() {
                        var t = {
                            maskType: !0,
                            svgLumaHidden: !0,
                            offscreenCanvas: typeof OffscreenCanvas < "u"
                        };
                        return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), /firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = !1), t
                    }(),
                    registeredEffects$1 = {},
                    idPrefix = "filter_result_";

                function SVGEffects(t) {
                    var e, h, r = "SourceGraphic",
                        i = t.data.ef ? t.data.ef.length : 0,
                        s = createElementID(),
                        a = filtersFactory.createFilter(s, !0),
                        n = 0;
                    for (this.filters = [], e = 0; e < i; e += 1) {
                        h = null;
                        var o = t.data.ef[e].ty;
                        registeredEffects$1[o] && (h = new(0, registeredEffects$1[o].effect)(a, t.effectsManager.effectElements[e], t, idPrefix + n, r), r = idPrefix + n, registeredEffects$1[o].countsAsEffect && (n += 1)), h && this.filters.push(h)
                    }
                    n && (t.globalData.defs.appendChild(a), t.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + s + ")")), this.filters.length && t.addRenderableComponent(this)
                }

                function registerEffect$1(t, e, r) {
                    registeredEffects$1[t] = {
                        effect: e,
                        countsAsEffect: r
                    }
                }

                function SVGBaseElement() {}

                function HierarchyElement() {}

                function RenderableDOMElement() {}

                function IImageElement(t, e, r) {
                    this.assetData = e.getAssetData(t.refId), this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)), this.initElement(t, e, r), this.sourceRect = {
                        top: 0,
                        left: 0,
                        width: this.assetData.w,
                        height: this.assetData.h
                    }
                }

                function ProcessedElement(t, e) {
                    this.elem = t, this.pos = e
                }

                function IShapeElement() {}
                SVGEffects.prototype.renderFrame = function(t) {
                    var e, r = this.filters.length;
                    for (e = 0; e < r; e += 1) this.filters[e].renderFrame(t)
                }, SVGEffects.prototype.getEffects = function(t) {
                    var e, r = this.filters.length,
                        i = [];
                    for (e = 0; e < r; e += 1) this.filters[e].type === t && i.push(this.filters[e]);
                    return i
                }, SVGBaseElement.prototype = {
                    initRendererElement: function() {
                        this.layerElement = createNS("g")
                    },
                    createContainerElements: function() {
                        this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                        var e = null;
                        if (this.data.td) {
                            this.matteMasks = {};
                            var r = createNS("g");
                            r.setAttribute("id", this.layerId), r.appendChild(this.layerElement), e = r, this.globalData.defs.appendChild(r)
                        } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), e = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                        if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
                            var i = createNS("clipPath"),
                                s = createNS("path");
                            s.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                            var a = createElementID();
                            if (i.setAttribute("id", a), i.appendChild(s), this.globalData.defs.appendChild(i), this.checkMasks()) {
                                var n = createNS("g");
                                n.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a + ")"), n.appendChild(this.layerElement), this.transformedElement = n, e ? e.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                            } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a + ")")
                        }
                        0 !== this.data.bm && this.setBlendMode()
                    },
                    renderElement: function() {
                        this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity)
                    },
                    destroyBaseElement: function() {
                        this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
                    },
                    getBaseElement: function() {
                        return this.data.hd ? null : this.baseElement
                    },
                    createRenderableComponents: function() {
                        this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this), this.searchEffectTransforms()
                    },
                    getMatte: function(e) {
                        if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[e]) {
                            var i, s, a, n, r = this.layerId + "_" + e;
                            if (1 === e || 3 === e) {
                                var h = createNS("mask");
                                h.setAttribute("id", r), h.setAttribute("mask-type", 3 === e ? "luminance" : "alpha"), (a = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), h.appendChild(a), this.globalData.defs.appendChild(h), !featureSupport.maskType && 1 === e && (h.setAttribute("mask-type", "luminance"), i = createElementID(), s = filtersFactory.createFilter(i), this.globalData.defs.appendChild(s), s.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (n = createNS("g")).appendChild(a), h.appendChild(n), n.setAttribute("filter", "url(" + getLocationHref() + "#" + i + ")"))
                            } else if (2 === e) {
                                var o = createNS("mask");
                                o.setAttribute("id", r), o.setAttribute("mask-type", "alpha");
                                var f = createNS("g");
                                o.appendChild(f), i = createElementID(), s = filtersFactory.createFilter(i);
                                var v = createNS("feComponentTransfer");
                                v.setAttribute("in", "SourceGraphic"), s.appendChild(v);
                                var S = createNS("feFuncA");
                                S.setAttribute("type", "table"), S.setAttribute("tableValues", "1.0 0.0"), v.appendChild(S), this.globalData.defs.appendChild(s);
                                var p = createNS("rect");
                                p.setAttribute("width", this.comp.data.w), p.setAttribute("height", this.comp.data.h), p.setAttribute("x", "0"), p.setAttribute("y", "0"), p.setAttribute("fill", "#ffffff"), p.setAttribute("opacity", "0"), f.setAttribute("filter", "url(" + getLocationHref() + "#" + i + ")"), f.appendChild(p), (a = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), f.appendChild(a), featureSupport.maskType || (o.setAttribute("mask-type", "luminance"), s.appendChild(filtersFactory.createAlphaToLuminanceFilter()), n = createNS("g"), f.appendChild(p), n.appendChild(this.layerElement), f.appendChild(n)), this.globalData.defs.appendChild(o)
                            }
                            this.matteMasks[e] = r
                        }
                        return this.matteMasks[e]
                    },
                    setMatte: function(e) {
                        this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + e + ")")
                    }
                }, HierarchyElement.prototype = {
                    initHierarchy: function() {
                        this.hierarchy = [], this._isParent = !1, this.checkParenting()
                    },
                    setHierarchy: function(e) {
                        this.hierarchy = e
                    },
                    setAsParent: function() {
                        this._isParent = !0
                    },
                    checkParenting: function() {
                        void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
                    }
                }, extendPrototype([RenderableElement, createProxyFunction({
                    initElement: function(r, i, s) {
                        this.initFrame(), this.initBaseData(r, i, s), this.initTransform(r, i, s), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
                    },
                    hide: function() {
                        this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
                    },
                    show: function() {
                        this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
                    },
                    renderFrame: function() {
                        this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                    },
                    renderInnerContent: function() {},
                    prepareFrame: function(r) {
                        this._mdf = !1, this.prepareRenderableFrame(r), this.prepareProperties(r, this.isInRange), this.checkTransparency()
                    },
                    destroy: function() {
                        this.innerElem = null, this.destroyBaseElement()
                    }
                })], RenderableDOMElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
                    var t = this.globalData.getAssetsPath(this.assetData);
                    this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
                }, IImageElement.prototype.sourceRectAtTime = function() {
                    return this.sourceRect
                }, IShapeElement.prototype = {
                    addShapeToModifiers: function(e) {
                        var r, i = this.shapeModifiers.length;
                        for (r = 0; r < i; r += 1) this.shapeModifiers[r].addShape(e)
                    },
                    isShapeInAnimatedModifiers: function(e) {
                        for (var i = this.shapeModifiers.length; 0 < i;)
                            if (this.shapeModifiers[0].isAnimatedWithShape(e)) return !0;
                        return !1
                    },
                    renderModifiers: function() {
                        if (this.shapeModifiers.length) {
                            var e, r = this.shapes.length;
                            for (e = 0; e < r; e += 1) this.shapes[e].sh.reset();
                            for (e = (r = this.shapeModifiers.length) - 1; e >= 0 && !this.shapeModifiers[e].processShapes(this._isFirstFrame); e -= 1);
                        }
                    },
                    searchProcessedElement: function(e) {
                        for (var r = this.processedElements, i = 0, s = r.length; i < s;) {
                            if (r[i].elem === e) return r[i].pos;
                            i += 1
                        }
                        return 0
                    },
                    addProcessedElement: function(e, r) {
                        for (var i = this.processedElements, s = i.length; s;)
                            if (i[s -= 1].elem === e) return void(i[s].pos = r);
                        i.push(new ProcessedElement(e, r))
                    },
                    prepareFrame: function(e) {
                        this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange)
                    }
                };
                var lineCapEnum = {
                        1: "butt",
                        2: "round",
                        3: "square"
                    },
                    lineJoinEnum = {
                        1: "miter",
                        2: "round",
                        3: "bevel"
                    };

                function SVGShapeData(t, e, r) {
                    this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = r, this.lvl = e, this._isAnimated = !!r.k;
                    for (var i = 0, s = t.length; i < s;) {
                        if (t[i].mProps.dynamicProperties.length) {
                            this._isAnimated = !0;
                            break
                        }
                        i += 1
                    }
                }

                function SVGStyleData(t, e) {
                    this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = createNS("path"), this.msElem = null
                }

                function DashProperty(t, e, r, i) {
                    this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = r, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(i);
                    var s, n, a = e.length || 0;
                    for (s = 0; s < a; s += 1) n = PropertyFactory.getProp(t, e[s].v, 0, 0, this), this.k = n.k || this.k, this.dataProps[s] = {
                        n: e[s].n,
                        p: n
                    };
                    this.k || this.getValue(!0), this._isAnimated = this.k
                }

                function SVGStrokeStyleData(t, e, r) {
                    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated
                }

                function SVGFillStyleData(t, e, r) {
                    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r
                }

                function SVGNoStyleData(t, e, r) {
                    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = r
                }

                function GradientProperty(t, e, r) {
                    this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
                    var i = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
                    this.o = createTypedArray("float32", i), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
                }

                function SVGGradientFillStyleData(t, e, r) {
                    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, r)
                }

                function SVGGradientStrokeStyleData(t, e, r) {
                    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, r), this._isAnimated = !!this._isAnimated
                }

                function ShapeGroupData() {
                    this.it = [], this.prevViewData = [], this.gr = createNS("g")
                }

                function SVGTransformData(t, e, r) {
                    this.transform = {
                        mProps: t,
                        op: e,
                        container: r
                    }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
                }
                SVGShapeData.prototype.setAsAnimated = function() {
                    this._isAnimated = !0
                }, SVGStyleData.prototype.reset = function() {
                    this.d = "", this._mdf = !1
                }, DashProperty.prototype.getValue = function(t) {
                    if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                        var e = 0,
                            r = this.dataProps.length;
                        for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < r; e += 1) "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
                    }
                }, extendPrototype([DynamicPropertyContainer], DashProperty), extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), extendPrototype([DynamicPropertyContainer], SVGNoStyleData), GradientProperty.prototype.comparePoints = function(t, e) {
                    for (var r = 0, i = this.o.length / 2; r < i;) {
                        if (Math.abs(t[4 * r] - t[4 * e + 2 * r]) > .01) return !1;
                        r += 1
                    }
                    return !0
                }, GradientProperty.prototype.checkCollapsable = function() {
                    if (this.o.length / 2 != this.c.length / 4) return !1;
                    if (this.data.k.k[0].s)
                        for (var t = 0, e = this.data.k.k.length; t < e;) {
                            if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                            t += 1
                        } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
                    return !0
                }, GradientProperty.prototype.getValue = function(t) {
                    if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
                        var e, i, s, r = 4 * this.data.p;
                        for (e = 0; e < r; e += 1) i = e % 4 == 0 ? 100 : 255, s = Math.round(this.prop.v[e] * i), this.c[e] !== s && (this.c[e] = s, this._cmdf = !t);
                        if (this.o.length)
                            for (r = this.prop.v.length, e = 4 * this.data.p; e < r; e += 1) i = e % 2 == 0 ? 100 : 1, s = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== s && (this.o[e - 4 * this.data.p] = s, this._omdf = !t);
                        this._mdf = !t
                    }
                }, extendPrototype([DynamicPropertyContainer], GradientProperty), SVGGradientFillStyleData.prototype.initGradientData = function(t, e, r) {
                    this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || {
                        k: 0
                    }, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || {
                        k: 0
                    }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, e), this.setGradientOpacity(e, r), this._isAnimated = !!this._isAnimated
                }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
                    var r = createElementID(),
                        i = createNS(1 === e.t ? "linearGradient" : "radialGradient");
                    i.setAttribute("id", r), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse");
                    var a, n, h, s = [];
                    for (h = 4 * e.g.p, n = 0; n < h; n += 4) a = createNS("stop"), i.appendChild(a), s.push(a);
                    t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + r + ")"), this.gf = i, this.cst = s
                }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
                    if (this.g._hasOpacity && !this.g._collapsable) {
                        var r, i, s, a = createNS("mask"),
                            n = createNS("path");
                        a.appendChild(n);
                        var h = createElementID(),
                            o = createElementID();
                        a.setAttribute("id", o);
                        var f = createNS(1 === t.t ? "linearGradient" : "radialGradient");
                        f.setAttribute("id", h), f.setAttribute("spreadMethod", "pad"), f.setAttribute("gradientUnits", "userSpaceOnUse"), s = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                        var v = this.stops;
                        for (i = 4 * t.g.p; i < s; i += 2)(r = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), f.appendChild(r), v.push(r);
                        n.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + h + ")"), "gs" === t.ty && (n.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), n.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), 1 === t.lj && n.setAttribute("stroke-miterlimit", t.ml)), this.of = f, this.ms = a, this.ost = v, this.maskId = o, e.msElem = n
                    }
                }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
                var buildShapeString = function(e, r, i, s) {
                        if (0 === r) return "";
                        var o, a = e.o,
                            n = e.i,
                            h = e.v,
                            f = " M" + s.applyToPointStringified(h[0][0], h[0][1]);
                        for (o = 1; o < r; o += 1) f += " C" + s.applyToPointStringified(a[o - 1][0], a[o - 1][1]) + " " + s.applyToPointStringified(n[o][0], n[o][1]) + " " + s.applyToPointStringified(h[o][0], h[o][1]);
                        return i && r && (f += " C" + s.applyToPointStringified(a[o - 1][0], a[o - 1][1]) + " " + s.applyToPointStringified(n[0][0], n[0][1]) + " " + s.applyToPointStringified(h[0][0], h[0][1]), f += "z"), f
                    },
                    SVGElementsRenderer = function() {
                        var t = new Matrix,
                            e = new Matrix;

                        function s(S, p, b) {
                            (b || p.transform.op._mdf) && p.transform.container.setAttribute("opacity", p.transform.op.v), (b || p.transform.mProps._mdf) && p.transform.container.setAttribute("transform", p.transform.mProps.v.to2dCSS())
                        }

                        function a() {}

                        function n(S, p, b) {
                            var g, m, C, c, u, l, _, T, M, w, d = p.styles.length,
                                E = p.lvl;
                            for (l = 0; l < d; l += 1) {
                                if (c = p.sh._mdf || b, p.styles[l].lvl < E) {
                                    for (T = e.reset(), M = E - p.styles[l].lvl, w = p.transformers.length - 1; !c && M > 0;) c = p.transformers[w].mProps._mdf || c, M -= 1, w -= 1;
                                    if (c)
                                        for (M = E - p.styles[l].lvl, w = p.transformers.length - 1; M > 0;) T.multiply(p.transformers[w].mProps.v), M -= 1, w -= 1
                                } else T = t;
                                if (m = (_ = p.sh.paths)._length, c) {
                                    for (C = "", g = 0; g < m; g += 1)(u = _.shapes[g]) && u._length && (C += buildShapeString(u, u._length, u.c, T));
                                    p.caches[l] = C
                                } else C = p.caches[l];
                                p.styles[l].d += !0 === S.hd ? "" : C, p.styles[l]._mdf = c || p.styles[l]._mdf
                            }
                        }

                        function h(S, p, b) {
                            var g = p.style;
                            (p.c._mdf || b) && g.pElem.setAttribute("fill", "rgb(" + bmFloor(p.c.v[0]) + "," + bmFloor(p.c.v[1]) + "," + bmFloor(p.c.v[2]) + ")"), (p.o._mdf || b) && g.pElem.setAttribute("fill-opacity", p.o.v)
                        }

                        function o(S, p, b) {
                            f(S, p, b), v(0, p, b)
                        }

                        function f(S, p, b) {
                            var E, _, T, M, L, g = p.gf,
                                m = p.g._hasOpacity,
                                C = p.s.v,
                                c = p.e.v;
                            if ((p.o._mdf || b) && p.style.pElem.setAttribute("gf" === S.ty ? "fill-opacity" : "stroke-opacity", p.o.v), p.s._mdf || b) {
                                var l = 1 === S.t ? "x1" : "cx",
                                    d = "x1" === l ? "y1" : "cy";
                                g.setAttribute(l, C[0]), g.setAttribute(d, C[1]), m && !p.g._collapsable && (p.of.setAttribute(l, C[0]), p.of.setAttribute(d, C[1]))
                            }
                            if (p.g._cmdf || b) {
                                var w = p.g.c;
                                for (T = (E = p.cst).length, _ = 0; _ < T; _ += 1)(M = E[_]).setAttribute("offset", w[4 * _] + "%"), M.setAttribute("stop-color", "rgb(" + w[4 * _ + 1] + "," + w[4 * _ + 2] + "," + w[4 * _ + 3] + ")")
                            }
                            if (m && (p.g._omdf || b)) {
                                var G = p.g.o;
                                for (T = (E = p.g._collapsable ? p.cst : p.ost).length, _ = 0; _ < T; _ += 1) M = E[_], p.g._collapsable || M.setAttribute("offset", G[2 * _] + "%"), M.setAttribute("stop-opacity", G[2 * _ + 1])
                            }
                            if (1 === S.t)(p.e._mdf || b) && (g.setAttribute("x2", c[0]), g.setAttribute("y2", c[1]), m && !p.g._collapsable && (p.of.setAttribute("x2", c[0]), p.of.setAttribute("y2", c[1])));
                            else if ((p.s._mdf || p.e._mdf || b) && (L = Math.sqrt(Math.pow(C[0] - c[0], 2) + Math.pow(C[1] - c[1], 2)), g.setAttribute("r", L), m && !p.g._collapsable && p.of.setAttribute("r", L)), p.e._mdf || p.h._mdf || p.a._mdf || b) {
                                L || (L = Math.sqrt(Math.pow(C[0] - c[0], 2) + Math.pow(C[1] - c[1], 2)));
                                var V = Math.atan2(c[1] - C[1], c[0] - C[0]),
                                    D = p.h.v;
                                D >= 1 ? D = .99 : D <= -1 && (D = -.99);
                                var B = L * D,
                                    I = Math.cos(V + p.a.v) * B + C[0],
                                    x = Math.sin(V + p.a.v) * B + C[1];
                                g.setAttribute("fx", I), g.setAttribute("fy", x), m && !p.g._collapsable && (p.of.setAttribute("fx", I), p.of.setAttribute("fy", x))
                            }
                        }

                        function v(S, p, b) {
                            var g = p.style,
                                m = p.d;
                            m && (m._mdf || b) && m.dashStr && (g.pElem.setAttribute("stroke-dasharray", m.dashStr), g.pElem.setAttribute("stroke-dashoffset", m.dashoffset[0])), p.c && (p.c._mdf || b) && g.pElem.setAttribute("stroke", "rgb(" + bmFloor(p.c.v[0]) + "," + bmFloor(p.c.v[1]) + "," + bmFloor(p.c.v[2]) + ")"), (p.o._mdf || b) && g.pElem.setAttribute("stroke-opacity", p.o.v), (p.w._mdf || b) && (g.pElem.setAttribute("stroke-width", p.w.v), g.msElem && g.msElem.setAttribute("stroke-width", p.w.v))
                        }
                        return {
                            createRenderFunction: function i(S) {
                                switch (S.ty) {
                                    case "fl":
                                        return h;
                                    case "gf":
                                        return f;
                                    case "gs":
                                        return o;
                                    case "st":
                                        return v;
                                    case "sh":
                                    case "el":
                                    case "rc":
                                    case "sr":
                                        return n;
                                    case "tr":
                                        return s;
                                    case "no":
                                        return a;
                                    default:
                                        return null
                                }
                            }
                        }
                    }();

                function SVGShapeElement(t, e, r) {
                    this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, r), this.prevViewData = []
                }

                function LetterProps(t, e, r, i, s, a) {
                    this.o = t, this.sw = e, this.sc = r, this.fc = i, this.m = s, this.p = a, this._mdf = {
                        o: !0,
                        sw: !!e,
                        sc: !!r,
                        fc: !!i,
                        m: !0,
                        p: !0
                    }
                }

                function TextProperty(t, e) {
                    this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, e.d && e.d.sid && (e.d = t.globalData.slotManager.getProp(e.d)), this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                        ascent: 0,
                        boxWidth: this.defaultBoxWidth,
                        f: "",
                        fStyle: "",
                        fWeight: "",
                        fc: "",
                        j: "",
                        justifyOffset: "",
                        l: [],
                        lh: 0,
                        lineWidths: [],
                        ls: "",
                        of: "",
                        s: "",
                        sc: "",
                        sw: 0,
                        t: 0,
                        tr: 0,
                        sz: 0,
                        ps: null,
                        fillColorAnim: !1,
                        strokeColorAnim: !1,
                        strokeWidthAnim: !1,
                        yOffset: 0,
                        finalSize: 0,
                        finalText: [],
                        finalLineHeight: 0,
                        __complete: !1
                    }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
                }
                extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
                    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
                }, SVGShapeElement.prototype.filterUniqueShapes = function() {
                    var t, r, i, a, e = this.shapes.length,
                        s = this.stylesList.length,
                        n = [],
                        h = !1;
                    for (i = 0; i < s; i += 1) {
                        for (a = this.stylesList[i], h = !1, n.length = 0, t = 0; t < e; t += 1) - 1 !== (r = this.shapes[t]).styles.indexOf(a) && (n.push(r), h = r._isAnimated || h);
                        n.length > 1 && h && this.setShapesAsAnimated(n)
                    }
                }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
                    var e, r = t.length;
                    for (e = 0; e < r; e += 1) t[e].setAsAnimated()
                }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
                    var r, i = new SVGStyleData(t, e),
                        s = i.pElem;
                    return "st" === t.ty ? r = new SVGStrokeStyleData(this, t, i) : "fl" === t.ty ? r = new SVGFillStyleData(this, t, i) : "gf" === t.ty || "gs" === t.ty ? (r = new("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, i), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), s.setAttribute("mask", "url(" + getLocationHref() + "#" + r.maskId + ")"))) : "no" === t.ty && (r = new SVGNoStyleData(this, t, i)), ("st" === t.ty || "gs" === t.ty) && (s.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), s.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), s.setAttribute("fill-opacity", "0"), 1 === t.lj && s.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && s.setAttribute("fill-rule", "evenodd"), t.ln && s.setAttribute("id", t.ln), t.cl && s.setAttribute("class", t.cl), t.bm && (s.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(i), this.addToAnimatedContents(t, r), r
                }, SVGShapeElement.prototype.createGroupElement = function(t) {
                    var e = new ShapeGroupData;
                    return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e
                }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
                    var r = TransformPropertyFactory.getTransformProperty(this, t, this),
                        i = new SVGTransformData(r, r.o, e);
                    return this.addToAnimatedContents(t, i), i
                }, SVGShapeElement.prototype.createShapeElement = function(t, e, r) {
                    var i = 4;
                    "rc" === t.ty ? i = 5 : "el" === t.ty ? i = 6 : "sr" === t.ty && (i = 7);
                    var a = new SVGShapeData(e, r, ShapePropertyFactory.getShapeProp(this, t, i, this));
                    return this.shapes.push(a), this.addShapeToModifiers(a), this.addToAnimatedContents(t, a), a
                }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
                    for (var r = 0, i = this.animatedContents.length; r < i;) {
                        if (this.animatedContents[r].element === e) return;
                        r += 1
                    }
                    this.animatedContents.push({
                        fn: SVGElementsRenderer.createRenderFunction(t),
                        element: e,
                        data: t
                    })
                }, SVGShapeElement.prototype.setElementStyles = function(t) {
                    var r, e = t.styles,
                        i = this.stylesList.length;
                    for (r = 0; r < i; r += 1) this.stylesList[r].closed || e.push(this.stylesList[r])
                }, SVGShapeElement.prototype.reloadShapes = function() {
                    this._isFirstFrame = !0;
                    var t, e = this.itemsData.length;
                    for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
                    for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
                    this.renderModifiers()
                }, SVGShapeElement.prototype.searchShapes = function(t, e, r, i, s, a, n) {
                    var o, v, S, m, C, h = [].concat(a),
                        f = t.length - 1,
                        p = [],
                        b = [];
                    for (o = f; o >= 0; o -= 1) {
                        if ((C = this.searchProcessedElement(t[o])) ? e[o] = r[C - 1] : t[o]._render = n, "fl" === t[o].ty || "st" === t[o].ty || "gf" === t[o].ty || "gs" === t[o].ty || "no" === t[o].ty) C ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], s), t[o]._render && e[o].style.pElem.parentNode !== i && i.appendChild(e[o].style.pElem), p.push(e[o].style);
                        else if ("gr" === t[o].ty) {
                            if (C)
                                for (S = e[o].it.length, v = 0; v < S; v += 1) e[o].prevViewData[v] = e[o].it[v];
                            else e[o] = this.createGroupElement(t[o]);
                            this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, s + 1, h, n), t[o]._render && e[o].gr.parentNode !== i && i.appendChild(e[o].gr)
                        } else "tr" === t[o].ty ? (C || (e[o] = this.createTransformElement(t[o], i)), h.push(e[o].transform)) : "sh" === t[o].ty || "rc" === t[o].ty || "el" === t[o].ty || "sr" === t[o].ty ? (C || (e[o] = this.createShapeElement(t[o], h, s)), this.setElementStyles(e[o])) : "tm" === t[o].ty || "rd" === t[o].ty || "ms" === t[o].ty || "pb" === t[o].ty || "zz" === t[o].ty || "op" === t[o].ty ? (C ? (m = e[o]).closed = !1 : ((m = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = m, this.shapeModifiers.push(m)), b.push(m)) : "rp" === t[o].ty && (C ? (m = e[o]).closed = !0 : (m = ShapeModifiers.getModifier(t[o].ty), e[o] = m, m.init(this, t, o, e), this.shapeModifiers.push(m), n = !1), b.push(m));
                        this.addProcessedElement(t[o], o + 1)
                    }
                    for (f = p.length, o = 0; o < f; o += 1) p[o].closed = !0;
                    for (f = b.length, o = 0; o < f; o += 1) b[o].closed = !0
                }, SVGShapeElement.prototype.renderInnerContent = function() {
                    this.renderModifiers();
                    var t, e = this.stylesList.length;
                    for (t = 0; t < e; t += 1) this.stylesList[t].reset();
                    for (this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
                }, SVGShapeElement.prototype.renderShape = function() {
                    var t, r, e = this.animatedContents.length;
                    for (t = 0; t < e; t += 1) r = this.animatedContents[t], (this._isFirstFrame || r.element._isAnimated) && !0 !== r.data && r.fn(r.data, r.element, this._isFirstFrame)
                }, SVGShapeElement.prototype.destroy = function() {
                    this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
                }, LetterProps.prototype.update = function(t, e, r, i, s, a) {
                    this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
                    var n = !1;
                    return this.o !== t && (this.o = t, this._mdf.o = !0, n = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, n = !0), this.sc !== r && (this.sc = r, this._mdf.sc = !0, n = !0), this.fc !== i && (this.fc = i, this._mdf.fc = !0, n = !0), this.m !== s && (this.m = s, this._mdf.m = !0, n = !0), a.length && (this.p[0] !== a[0] || this.p[1] !== a[1] || this.p[4] !== a[4] || this.p[5] !== a[5] || this.p[12] !== a[12] || this.p[13] !== a[13]) && (this.p = a, this._mdf.p = !0, n = !0), n
                }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) {
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }, TextProperty.prototype.setCurrentData = function(t) {
                    t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
                }, TextProperty.prototype.searchProperty = function() {
                    return this.searchKeyframes()
                }, TextProperty.prototype.searchKeyframes = function() {
                    return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
                }, TextProperty.prototype.addEffect = function(t) {
                    this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
                }, TextProperty.prototype.getValue = function(t) {
                    if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
                        this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                        var e = this.currentData,
                            r = this.keysIndex;
                        if (this.lock) return void this.setCurrentData(this.currentData);
                        this.lock = !0, this._mdf = !1;
                        var i, s = this.effectsSequence.length,
                            a = t || this.data.d.k[this.keysIndex].s;
                        for (i = 0; i < s; i += 1) a = this.effectsSequence[i](r !== this.keysIndex ? a : this.currentData, a.t);
                        e !== a && this.setCurrentData(a), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
                    }
                }, TextProperty.prototype.getKeyframeValue = function() {
                    for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, r = 0, i = t.length; r <= i - 1 && !(r === i - 1 || t[r + 1].t > e);) r += 1;
                    return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s
                }, TextProperty.prototype.buildFinalText = function(t) {
                    for (var s, a, e = [], r = 0, i = t.length, n = !1, h = !1, o = ""; r < i;) n = h, h = !1, s = t.charCodeAt(r), o = t.charAt(r), FontManager.isCombinedCharacter(s) ? n = !0 : s >= 55296 && s <= 56319 ? FontManager.isRegionalFlag(t, r) ? o = t.substr(r, 14) : (a = t.charCodeAt(r + 1)) >= 56320 && a <= 57343 && (FontManager.isModifier(s, a) ? (o = t.substr(r, 2), n = !0) : o = FontManager.isFlagEmoji(t.substr(r, 4)) ? t.substr(r, 4) : t.substr(r, 2)) : s > 56319 ? (a = t.charCodeAt(r + 1), FontManager.isVariationSelector(s) && (n = !0)) : FontManager.isZeroWidthJoiner(s) && (n = !0, h = !0), n ? (e[e.length - 1] += o, n = !1) : e.push(o), r += o.length;
                    return e
                }, TextProperty.prototype.completeTextData = function(t) {
                    t.__complete = !0;
                    var s, a, n, o, C, c, l, e = this.elem.globalData.fontManager,
                        r = this.data,
                        i = [],
                        h = 0,
                        f = r.m.g,
                        v = 0,
                        S = 0,
                        p = 0,
                        b = [],
                        g = 0,
                        m = 0,
                        u = e.getFontByName(t.f),
                        d = 0,
                        E = getFontProperties(u);
                    t.fWeight = E.weight, t.fStyle = E.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), a = t.finalText.length, t.finalLineHeight = t.lh;
                    var T, _ = t.tr / 1e3 * t.finalSize;
                    if (t.sz)
                        for (var L, V, M = !0, w = t.sz[0], G = t.sz[1]; M;) {
                            L = 0, g = 0, a = (V = this.buildFinalText(t.t)).length, _ = t.tr / 1e3 * t.finalSize;
                            var D = -1;
                            for (s = 0; s < a; s += 1) T = V[s].charCodeAt(0), n = !1, " " === V[s] ? D = s : (13 === T || 3 === T) && (g = 0, n = !0, L += t.finalLineHeight || 1.2 * t.finalSize), e.chars ? (l = e.getCharData(V[s], u.fStyle, u.fFamily), d = n ? 0 : l.w * t.finalSize / 100) : d = e.measureText(V[s], t.f, t.finalSize), g + d > w && " " !== V[s] ? (-1 === D ? a += 1 : s = D, L += t.finalLineHeight || 1.2 * t.finalSize, V.splice(s, D === s ? 1 : 0, "\r"), D = -1, g = 0) : (g += d, g += _);
                            L += u.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && G < L ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = V, a = t.finalText.length, M = !1)
                        }
                    g = -_, d = 0;
                    var I, B = 0;
                    for (s = 0; s < a; s += 1)
                        if (n = !1, 13 === (T = (I = t.finalText[s]).charCodeAt(0)) || 3 === T ? (B = 0, b.push(g), m = g > m ? g : m, g = -2 * _, o = "", n = !0, p += 1) : o = I, e.chars ? (l = e.getCharData(I, u.fStyle, e.getFontByName(t.f).fFamily), d = n ? 0 : l.w * t.finalSize / 100) : d = e.measureText(o, t.f, t.finalSize), " " === I ? B += d + _ : (g += d + _ + B, B = 0), i.push({
                                l: d,
                                an: d,
                                add: v,
                                n,
                                anIndexes: [],
                                val: o,
                                line: p,
                                animatorJustifyOffset: 0
                            }), 2 == f) {
                            if (v += d, "" === o || " " === o || s === a - 1) {
                                for (("" === o || " " === o) && (v -= d); S <= s;) i[S].an = v, i[S].ind = h, i[S].extra = d, S += 1;
                                h += 1, v = 0
                            }
                        } else if (3 == f) {
                        if (v += d, "" === o || s === a - 1) {
                            for ("" === o && (v -= d); S <= s;) i[S].an = v, i[S].ind = h, i[S].extra = d, S += 1;
                            v = 0, h += 1
                        }
                    } else i[h].ind = h, i[h].extra = 0, h += 1;
                    if (t.l = i, m = g > m ? g : m, b.push(g), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
                    else switch (t.boxWidth = m, t.j) {
                        case 1:
                            t.justifyOffset = -t.boxWidth;
                            break;
                        case 2:
                            t.justifyOffset = -t.boxWidth / 2;
                            break;
                        default:
                            t.justifyOffset = 0
                    }
                    t.lineWidths = b;
                    var A, y, x = r.a;
                    c = x.length;
                    var P, F, k = [];
                    for (C = 0; C < c; C += 1) {
                        for ((A = x[C]).a.sc && (t.strokeColorAnim = !0), A.a.sw && (t.strokeWidthAnim = !0), (A.a.fc || A.a.fh || A.a.fs || A.a.fb) && (t.fillColorAnim = !0), F = 0, P = A.s.b, s = 0; s < a; s += 1)(y = i[s]).anIndexes[C] = F, (1 == P && "" !== y.val || 2 == P && "" !== y.val && " " !== y.val || 3 == P && (y.n || " " == y.val || s == a - 1) || 4 == P && (y.n || s == a - 1)) && (1 === A.s.rn && k.push(F), F += 1);
                        r.a[C].s.totalChars = F;
                        var z, R = -1;
                        if (1 === A.s.rn)
                            for (s = 0; s < a; s += 1) R != (y = i[s]).anIndexes[C] && (R = y.anIndexes[C], z = k.splice(Math.floor(Math.random() * k.length), 1)[0]), y.anIndexes[C] = z
                    }
                    t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = u.ascent * t.finalSize / 100
                }, TextProperty.prototype.updateDocumentData = function(t, e) {
                    var r = this.copyData({}, this.data.d.k[e = void 0 === e ? this.keysIndex : e].s);
                    r = this.copyData(r, t), this.data.d.k[e].s = r, this.recalculate(e), this.setCurrentData(r), this.elem.addDynamicProperty(this)
                }, TextProperty.prototype.recalculate = function(t) {
                    var e = this.data.d.k[t].s;
                    e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
                }, TextProperty.prototype.canResizeFont = function(t) {
                    this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                }, TextProperty.prototype.setMinimumFontSize = function(t) {
                    this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                };
                var TextSelectorProp = function() {
                    var t = Math.max,
                        e = Math.min,
                        r = Math.floor;

                    function i(a, n) {
                        this._currentTextLength = -1, this.k = !1, this.data = n, this.elem = a, this.comp = a.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(a), this.s = PropertyFactory.getProp(a, n.s || {
                            k: 0
                        }, 0, 0, this), this.e = "e" in n ? PropertyFactory.getProp(a, n.e, 0, 0, this) : {
                            v: 100
                        }, this.o = PropertyFactory.getProp(a, n.o || {
                            k: 0
                        }, 0, 0, this), this.xe = PropertyFactory.getProp(a, n.xe || {
                            k: 0
                        }, 0, 0, this), this.ne = PropertyFactory.getProp(a, n.ne || {
                            k: 0
                        }, 0, 0, this), this.sm = PropertyFactory.getProp(a, n.sm || {
                            k: 100
                        }, 0, 0, this), this.a = PropertyFactory.getProp(a, n.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
                    }
                    return i.prototype = {
                        getMult: function(n) {
                            this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                            var h = 0,
                                o = 0,
                                f = 1,
                                v = 1;
                            this.ne.v > 0 ? h = this.ne.v / 100 : o = -this.ne.v / 100, this.xe.v > 0 ? f = 1 - this.xe.v / 100 : v = 1 + this.xe.v / 100;
                            var S = BezierFactory.getBezierEasing(h, o, f, v).get,
                                p = 0,
                                b = this.finalS,
                                g = this.finalE,
                                m = this.data.sh;
                            if (2 === m) p = S(p = g === b ? n >= g ? 1 : 0 : t(0, e(.5 / (g - b) + (n - b) / (g - b), 1)));
                            else if (3 === m) p = S(p = g === b ? n >= g ? 0 : 1 : 1 - t(0, e(.5 / (g - b) + (n - b) / (g - b), 1)));
                            else if (4 === m) g === b ? p = 0 : (p = t(0, e(.5 / (g - b) + (n - b) / (g - b), 1))) < .5 ? p *= 2 : p = 1 - 2 * (p - .5), p = S(p);
                            else if (5 === m) {
                                if (g === b) p = 0;
                                else {
                                    var C = g - b,
                                        c = -C / 2 + (n = e(t(0, n + .5 - b), g - b)),
                                        u = C / 2;
                                    p = Math.sqrt(1 - c * c / (u * u))
                                }
                                p = S(p)
                            } else 6 === m ? (g === b ? p = 0 : (n = e(t(0, n + .5 - b), g - b), p = (1 + Math.cos(Math.PI + 2 * Math.PI * n / (g - b))) / 2), p = S(p)) : (n >= r(b) && (p = t(0, e(n - b < 0 ? e(g, 1) - (b - n) : g - n, 1))), p = S(p));
                            if (100 !== this.sm.v) {
                                var l = .01 * this.sm.v;
                                0 === l && (l = 1e-8);
                                var d = .5 - .5 * l;
                                p < d ? p = 0 : (p = (p - d) / l) > 1 && (p = 1)
                            }
                            return p * this.a.v
                        },
                        getValue: function(n) {
                            this.iterateDynamicProperties(), this._mdf = n || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, n && 2 === this.data.r && (this.e.v = this._currentTextLength);
                            var h = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                                o = this.o.v / h,
                                f = this.s.v / h + o,
                                v = this.e.v / h + o;
                            if (f > v) {
                                var S = f;
                                f = v, v = S
                            }
                            this.finalS = f, this.finalE = v
                        }
                    }, extendPrototype([DynamicPropertyContainer], i), {
                        getTextSelectorProp: function s(a, n, h) {
                            return new i(a, n, h)
                        }
                    }
                }();

                function TextAnimatorDataProperty(t, e, r) {
                    var i = {
                            propType: !1
                        },
                        s = PropertyFactory.getProp,
                        a = e.a;
                    this.a = {
                        r: a.r ? s(t, a.r, 0, degToRads, r) : i,
                        rx: a.rx ? s(t, a.rx, 0, degToRads, r) : i,
                        ry: a.ry ? s(t, a.ry, 0, degToRads, r) : i,
                        sk: a.sk ? s(t, a.sk, 0, degToRads, r) : i,
                        sa: a.sa ? s(t, a.sa, 0, degToRads, r) : i,
                        s: a.s ? s(t, a.s, 1, .01, r) : i,
                        a: a.a ? s(t, a.a, 1, 0, r) : i,
                        o: a.o ? s(t, a.o, 0, .01, r) : i,
                        p: a.p ? s(t, a.p, 1, 0, r) : i,
                        sw: a.sw ? s(t, a.sw, 0, 0, r) : i,
                        sc: a.sc ? s(t, a.sc, 1, 0, r) : i,
                        fc: a.fc ? s(t, a.fc, 1, 0, r) : i,
                        fh: a.fh ? s(t, a.fh, 0, 0, r) : i,
                        fs: a.fs ? s(t, a.fs, 0, .01, r) : i,
                        fb: a.fb ? s(t, a.fb, 0, .01, r) : i,
                        t: a.t ? s(t, a.t, 0, 0, r) : i
                    }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r), this.s.t = e.s.t
                }

                function TextAnimatorProperty(t, e, r) {
                    this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                        alignment: {}
                    }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r)
                }

                function ITextElement() {}
                TextAnimatorProperty.prototype.searchProperties = function() {
                    var t, e = this._textData.a.length,
                        i = PropertyFactory.getProp;
                    for (t = 0; t < e; t += 1) this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, this._textData.a[t], this);
                    this._textData.p && "m" in this._textData.p ? (this._pathData = {
                        a: i(this._elem, this._textData.p.a, 0, 0, this),
                        f: i(this._elem, this._textData.p.f, 0, 0, this),
                        l: i(this._elem, this._textData.p.l, 0, 0, this),
                        r: i(this._elem, this._textData.p.r, 0, 0, this),
                        p: i(this._elem, this._textData.p.p, 0, 0, this),
                        m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
                    }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this)
                }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
                    if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
                        this._isFirstFrame = !1;
                        var o, f, v, S, b, g, m, C, c, u, l, d, E, _, T, M, w, L, r = this._moreOptions.alignment.v,
                            i = this._animatorsData,
                            s = this._textData,
                            a = this.mHelper,
                            n = this._renderType,
                            h = this.renderedLetters.length,
                            p = t.l;
                        if (this._hasMaskedPath) {
                            if (L = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                                var D, V = L.v;
                                for (this._pathData.r.v && (V = V.reverse()), b = {
                                        tLength: 0,
                                        segments: []
                                    }, S = V._length - 1, M = 0, v = 0; v < S; v += 1) D = bez.buildBezierData(V.v[v], V.v[v + 1], [V.o[v][0] - V.v[v][0], V.o[v][1] - V.v[v][1]], [V.i[v + 1][0] - V.v[v + 1][0], V.i[v + 1][1] - V.v[v + 1][1]]), b.tLength += D.segmentLength, b.segments.push(D), M += D.segmentLength;
                                v = S, L.v.c && (D = bez.buildBezierData(V.v[v], V.v[0], [V.o[v][0] - V.v[v][0], V.o[v][1] - V.v[v][1]], [V.i[0][0] - V.v[0][0], V.i[0][1] - V.v[0][1]]), b.tLength += D.segmentLength, b.segments.push(D), M += D.segmentLength), this._pathData.pi = b
                            }
                            if (l = 0, u = 1, C = 0, c = !0, _ = (b = this._pathData.pi).segments, (g = this._pathData.f.v) < 0 && L.v.c)
                                for (b.tLength < Math.abs(g) && (g = -Math.abs(g) % b.tLength), u = (E = _[l = _.length - 1].points).length - 1; g < 0;) g += E[u].partialLength, (u -= 1) < 0 && (u = (E = _[l -= 1].points).length - 1);
                            d = (E = _[l].points)[u - 1], T = (m = E[u]).partialLength
                        }
                        S = p.length, o = 0, f = 0;
                        var x, y, P, F, B = 1.2 * t.finalSize * .714,
                            I = !0;
                        P = i.length;
                        var k, z, N, H, X, $, J, j, O, et, at, rt, st, R = -1,
                            W = g,
                            q = l,
                            Y = u,
                            Q = -1,
                            tt = "",
                            it = this.defaultPropsArray;
                        if (2 === t.j || 1 === t.j) {
                            var Z = 0,
                                nt = 0,
                                ot = 2 === t.j ? -.5 : -1,
                                K = 0,
                                ht = !0;
                            for (v = 0; v < S; v += 1)
                                if (p[v].n) {
                                    for (Z && (Z += nt); K < v;) p[K].animatorJustifyOffset = Z, K += 1;
                                    Z = 0, ht = !0
                                } else {
                                    for (y = 0; y < P; y += 1)(x = i[y].a).t.propType && (ht && 2 === t.j && (nt += x.t.v * ot), Z += (k = i[y].s.getMult(p[v].anIndexes[y], s.a[y].s.totalChars)).length ? x.t.v * k[0] * ot : x.t.v * k * ot);
                                    ht = !1
                                }
                            for (Z && (Z += nt); K < v;) p[K].animatorJustifyOffset = Z, K += 1
                        }
                        for (v = 0; v < S; v += 1) {
                            if (a.reset(), X = 1, p[v].n) o = 0, f += t.yOffset, f += I ? 1 : 0, g = W, I = !1, this._hasMaskedPath && (d = (E = _[l = q].points)[(u = Y) - 1], T = (m = E[u]).partialLength, C = 0), tt = "", rt = "", et = "", st = "", it = this.defaultPropsArray;
                            else {
                                if (this._hasMaskedPath) {
                                    if (Q !== p[v].line) {
                                        switch (t.j) {
                                            case 1:
                                                g += M - t.lineWidths[p[v].line];
                                                break;
                                            case 2:
                                                g += (M - t.lineWidths[p[v].line]) / 2
                                        }
                                        Q = p[v].line
                                    }
                                    R !== p[v].ind && (p[R] && (g += p[R].extra), g += p[v].an / 2, R = p[v].ind), g += r[0] * p[v].an * .005;
                                    var U = 0;
                                    for (y = 0; y < P; y += 1)(x = i[y].a).p.propType && (U += (k = i[y].s.getMult(p[v].anIndexes[y], s.a[y].s.totalChars)).length ? x.p.v[0] * k[0] : x.p.v[0] * k), x.a.propType && (U += (k = i[y].s.getMult(p[v].anIndexes[y], s.a[y].s.totalChars)).length ? x.a.v[0] * k[0] : x.a.v[0] * k);
                                    for (c = !0, this._pathData.a.v && (g = .5 * p[0].an + (M - this._pathData.f.v - .5 * p[0].an - .5 * p[p.length - 1].an) * R / (S - 1), g += this._pathData.f.v); c;) C + T >= g + U || !E ? (N = d.point[0] + (m.point[0] - d.point[0]) * (w = (g + U - C) / m.partialLength), H = d.point[1] + (m.point[1] - d.point[1]) * w, a.translate(-r[0] * p[v].an * .005, -r[1] * B * .01), c = !1) : E && (C += m.partialLength, (u += 1) >= E.length && (u = 0, _[l += 1] ? E = _[l].points : L.v.c ? (u = 0, E = _[l = 0].points) : (C -= m.partialLength, E = null)), E && (d = m, T = (m = E[u]).partialLength));
                                    a.translate(-(z = p[v].an / 2 - p[v].add), 0, 0)
                                } else a.translate(-(z = p[v].an / 2 - p[v].add), 0, 0), a.translate(-r[0] * p[v].an * .005, -r[1] * B * .01, 0);
                                for (y = 0; y < P; y += 1)(x = i[y].a).t.propType && (k = i[y].s.getMult(p[v].anIndexes[y], s.a[y].s.totalChars), (0 !== o || 0 !== t.j) && (this._hasMaskedPath ? g += k.length ? x.t.v * k[0] : x.t.v * k : o += k.length ? x.t.v * k[0] : x.t.v * k));
                                for (t.strokeWidthAnim && (J = t.sw || 0), t.strokeColorAnim && ($ = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (j = [t.fc[0], t.fc[1], t.fc[2]]), y = 0; y < P; y += 1)(x = i[y].a).a.propType && ((k = i[y].s.getMult(p[v].anIndexes[y], s.a[y].s.totalChars)).length ? a.translate(-x.a.v[0] * k[0], -x.a.v[1] * k[1], x.a.v[2] * k[2]) : a.translate(-x.a.v[0] * k, -x.a.v[1] * k, x.a.v[2] * k));
                                for (y = 0; y < P; y += 1)(x = i[y].a).s.propType && ((k = i[y].s.getMult(p[v].anIndexes[y], s.a[y].s.totalChars)).length ? a.scale(1 + (x.s.v[0] - 1) * k[0], 1 + (x.s.v[1] - 1) * k[1], 1) : a.scale(1 + (x.s.v[0] - 1) * k, 1 + (x.s.v[1] - 1) * k, 1));
                                for (y = 0; y < P; y += 1) {
                                    if (x = i[y].a, k = i[y].s.getMult(p[v].anIndexes[y], s.a[y].s.totalChars), x.sk.propType && (k.length ? a.skewFromAxis(-x.sk.v * k[0], x.sa.v * k[1]) : a.skewFromAxis(-x.sk.v * k, x.sa.v * k)), x.r.propType && a.rotateZ(k.length ? -x.r.v * k[2] : -x.r.v * k), x.ry.propType && a.rotateY(k.length ? x.ry.v * k[1] : x.ry.v * k), x.rx.propType && a.rotateX(k.length ? x.rx.v * k[0] : x.rx.v * k), x.o.propType && (X += k.length ? (x.o.v * k[0] - X) * k[0] : (x.o.v * k - X) * k), t.strokeWidthAnim && x.sw.propType && (J += k.length ? x.sw.v * k[0] : x.sw.v * k), t.strokeColorAnim && x.sc.propType)
                                        for (O = 0; O < 3; O += 1) $[O] += k.length ? (x.sc.v[O] - $[O]) * k[0] : (x.sc.v[O] - $[O]) * k;
                                    if (t.fillColorAnim && t.fc) {
                                        if (x.fc.propType)
                                            for (O = 0; O < 3; O += 1) j[O] += k.length ? (x.fc.v[O] - j[O]) * k[0] : (x.fc.v[O] - j[O]) * k;
                                        x.fh.propType && (j = addHueToRGB(j, k.length ? x.fh.v * k[0] : x.fh.v * k)), x.fs.propType && (j = addSaturationToRGB(j, k.length ? x.fs.v * k[0] : x.fs.v * k)), x.fb.propType && (j = addBrightnessToRGB(j, k.length ? x.fb.v * k[0] : x.fb.v * k))
                                    }
                                }
                                for (y = 0; y < P; y += 1)(x = i[y].a).p.propType && (k = i[y].s.getMult(p[v].anIndexes[y], s.a[y].s.totalChars), this._hasMaskedPath ? k.length ? a.translate(0, x.p.v[1] * k[0], -x.p.v[2] * k[1]) : a.translate(0, x.p.v[1] * k, -x.p.v[2] * k) : k.length ? a.translate(x.p.v[0] * k[0], x.p.v[1] * k[1], -x.p.v[2] * k[2]) : a.translate(x.p.v[0] * k, x.p.v[1] * k, -x.p.v[2] * k));
                                if (t.strokeWidthAnim && (et = J < 0 ? 0 : J), t.strokeColorAnim && (at = "rgb(" + Math.round(255 * $[0]) + "," + Math.round(255 * $[1]) + "," + Math.round(255 * $[2]) + ")"), t.fillColorAnim && t.fc && (rt = "rgb(" + Math.round(255 * j[0]) + "," + Math.round(255 * j[1]) + "," + Math.round(255 * j[2]) + ")"), this._hasMaskedPath) {
                                    if (a.translate(0, -t.ls), a.translate(0, r[1] * B * .01 + f, 0), this._pathData.p.v) {
                                        var lt = 180 * Math.atan((m.point[1] - d.point[1]) / (m.point[0] - d.point[0])) / Math.PI;
                                        m.point[0] < d.point[0] && (lt += 180), a.rotate(-lt * Math.PI / 180)
                                    }
                                    a.translate(N, H, 0), g -= r[0] * p[v].an * .005, p[v + 1] && R !== p[v + 1].ind && (g += p[v].an / 2, g += .001 * t.tr * t.finalSize)
                                } else {
                                    switch (a.translate(o, f, 0), t.ps && a.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                                        case 1:
                                            a.translate(p[v].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[p[v].line]), 0, 0);
                                            break;
                                        case 2:
                                            a.translate(p[v].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[p[v].line]) / 2, 0, 0)
                                    }
                                    a.translate(0, -t.ls), a.translate(z, 0, 0), a.translate(r[0] * p[v].an * .005, r[1] * B * .01, 0), o += p[v].l + .001 * t.tr * t.finalSize
                                }
                                "html" === n ? tt = a.toCSS() : "svg" === n ? tt = a.to2dCSS() : it = [a.props[0], a.props[1], a.props[2], a.props[3], a.props[4], a.props[5], a.props[6], a.props[7], a.props[8], a.props[9], a.props[10], a.props[11], a.props[12], a.props[13], a.props[14], a.props[15]], st = X
                            }
                            h <= v ? (F = new LetterProps(st, et, at, rt, tt, it), this.renderedLetters.push(F), h += 1, this.lettersChangedFlag = !0) : this.lettersChangedFlag = (F = this.renderedLetters[v]).update(st, et, at, rt, tt, it) || this.lettersChangedFlag
                        }
                    }
                }, TextAnimatorProperty.prototype.getValue = function() {
                    this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
                }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), ITextElement.prototype.initElement = function(t, e, r) {
                    this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, r), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
                }, ITextElement.prototype.prepareFrame = function(t) {
                    this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
                }, ITextElement.prototype.createPathShape = function(t, e) {
                    var r, s, i = e.length,
                        a = "";
                    for (r = 0; r < i; r += 1) "sh" === e[r].ty && (a += buildShapeString(s = e[r].ks.k, s.i.length, !0, t));
                    return a
                }, ITextElement.prototype.updateDocumentData = function(t, e) {
                    this.textProperty.updateDocumentData(t, e)
                }, ITextElement.prototype.canResizeFont = function(t) {
                    this.textProperty.canResizeFont(t)
                }, ITextElement.prototype.setMinimumFontSize = function(t) {
                    this.textProperty.setMinimumFontSize(t)
                }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, r, i, s) {
                    switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
                        case 1:
                            e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]), 0, 0);
                            break;
                        case 2:
                            e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2, 0, 0)
                    }
                    e.translate(i, s, 0)
                }, ITextElement.prototype.buildColor = function(t) {
                    return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
                }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, ITextElement.prototype.validateText = function() {
                    (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
                };
                var emptyShapeData = {
                    shapes: []
                };

                function SVGTextLottieElement(t, e, r) {
                    this.textSpans = [], this.renderType = "svg", this.initElement(t, e, r)
                }

                function ISolidElement(t, e, r) {
                    this.initElement(t, e, r)
                }

                function NullElement(t, e, r) {
                    this.initFrame(), this.initBaseData(t, e, r), this.initFrame(), this.initTransform(t, e, r), this.initHierarchy()
                }

                function SVGRendererBase() {}

                function ICompElement() {}

                function SVGCompElement(t, e, r) {
                    this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                        _placeholder: !0
                    }
                }

                function SVGRenderer(t, e) {
                    this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
                    var r = "";
                    if (e && e.title) {
                        var i = createNS("title"),
                            s = createElementID();
                        i.setAttribute("id", s), i.textContent = e.title, this.svgElement.appendChild(i), r += s
                    }
                    if (e && e.description) {
                        var a = createNS("desc"),
                            n = createElementID();
                        a.setAttribute("id", n), a.textContent = e.description, this.svgElement.appendChild(a), r += " " + n
                    }
                    r && this.svgElement.setAttribute("aria-labelledby", r);
                    var h = createNS("defs");
                    this.svgElement.appendChild(h);
                    var o = createNS("g");
                    this.svgElement.appendChild(o), this.layerElement = o, this.renderConfig = {
                        preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                        imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                        contentVisibility: e && e.contentVisibility || "visible",
                        progressiveLoad: e && e.progressiveLoad || !1,
                        hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                        viewBoxOnly: e && e.viewBoxOnly || !1,
                        viewBoxSize: e && e.viewBoxSize || !1,
                        className: e && e.className || "",
                        id: e && e.id || "",
                        focusable: e && e.focusable,
                        filterSize: {
                            width: e && e.filterSize && e.filterSize.width || "100%",
                            height: e && e.filterSize && e.filterSize.height || "100%",
                            x: e && e.filterSize && e.filterSize.x || "0%",
                            y: e && e.filterSize && e.filterSize.y || "0%"
                        },
                        width: e && e.width,
                        height: e && e.height,
                        runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
                    }, this.globalData = {
                        _mdf: !1,
                        frameNum: -1,
                        defs: h,
                        renderConfig: this.renderConfig
                    }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
                }

                function ShapeTransformManager() {
                    this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
                }
                extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
                    this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
                }, SVGTextLottieElement.prototype.buildTextContents = function(t) {
                    for (var e = 0, r = t.length, i = [], s = ""; e < r;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (i.push(s), s = "") : s += t[e], e += 1;
                    return i.push(s), i
                }, SVGTextLottieElement.prototype.buildShapeData = function(t, e) {
                    if (t.shapes && t.shapes.length) {
                        var r = t.shapes[0];
                        if (r.it) {
                            var i = r.it[r.it.length - 1];
                            i.s && (i.s.k[0] = e, i.s.k[1] = e)
                        }
                    }
                    return t
                }, SVGTextLottieElement.prototype.buildNewText = function() {
                    this.addDynamicProperty(this);
                    var t, e, r = this.textProperty.currentData;
                    this.renderedLetters = createSizedArray(r ? r.l.length : 0), this.layerElement.setAttribute("fill", r.fc ? this.buildColor(r.fc) : "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
                    var i = this.globalData.fontManager.getFontByName(r.f);
                    if (i.fClass) this.layerElement.setAttribute("class", i.fClass);
                    else {
                        this.layerElement.setAttribute("font-family", i.fFamily);
                        var s = r.fWeight;
                        this.layerElement.setAttribute("font-style", r.fStyle), this.layerElement.setAttribute("font-weight", s)
                    }
                    this.layerElement.setAttribute("aria-label", r.t);
                    var n = r.l || [],
                        h = !!this.globalData.fontManager.chars;
                    e = n.length;
                    var o, f = this.mHelper,
                        S = this.data.singleShape,
                        p = 0,
                        b = 0,
                        g = !0,
                        m = .001 * r.tr * r.finalSize;
                    if (!S || h || r.sz) {
                        var d, l = this.textSpans.length;
                        for (t = 0; t < e; t += 1) {
                            if (this.textSpans[t] || (this.textSpans[t] = {
                                    span: null,
                                    childSpan: null,
                                    glyph: null
                                }), !h || !S || 0 === t) {
                                if (o = l > t ? this.textSpans[t].span : createNS(h ? "g" : "text"), l <= t) {
                                    if (o.setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = o, h) {
                                        var E = createNS("g");
                                        o.appendChild(E), this.textSpans[t].childSpan = E
                                    }
                                    this.textSpans[t].span = o, this.layerElement.appendChild(o)
                                }
                                o.style.display = "inherit"
                            }
                            if (f.reset(), S && (n[t].n && (p = -m, b += r.yOffset, b += g ? 1 : 0, g = !1), this.applyTextPropertiesToMatrix(r, f, n[t].line, p, b), p += n[t].l || 0, p += m), h) {
                                var _;
                                if (1 === (d = this.globalData.fontManager.getCharData(r.finalText[t], i.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily)).t) _ = new SVGCompElement(d.data, this.globalData, this);
                                else {
                                    var T = emptyShapeData;
                                    d.data && d.data.shapes && (T = this.buildShapeData(d.data, r.finalSize)), _ = new SVGShapeElement(T, this.globalData, this)
                                }
                                if (this.textSpans[t].glyph) {
                                    var M = this.textSpans[t].glyph;
                                    this.textSpans[t].childSpan.removeChild(M.layerElement), M.destroy()
                                }
                                this.textSpans[t].glyph = _, _._debug = !0, _.prepareFrame(0), _.renderFrame(), this.textSpans[t].childSpan.appendChild(_.layerElement), 1 === d.t && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + r.finalSize / 100 + "," + r.finalSize / 100 + ")")
                            } else S && o.setAttribute("transform", "translate(" + f.props[12] + "," + f.props[13] + ")"), o.textContent = n[t].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
                        }
                        S && o && o.setAttribute("d", "")
                    } else {
                        var C = this.textContainer,
                            c = "start";
                        switch (r.j) {
                            case 1:
                                c = "end";
                                break;
                            case 2:
                                c = "middle";
                                break;
                            default:
                                c = "start"
                        }
                        C.setAttribute("text-anchor", c), C.setAttribute("letter-spacing", m);
                        var u = this.buildTextContents(r.finalText);
                        for (e = u.length, b = r.ps ? r.ps[1] + r.ascent : 0, t = 0; t < e; t += 1)(o = this.textSpans[t].span || createNS("tspan")).textContent = u[t], o.setAttribute("x", 0), o.setAttribute("y", b), o.style.display = "inherit", C.appendChild(o), this.textSpans[t] || (this.textSpans[t] = {
                            span: null,
                            glyph: null
                        }), this.textSpans[t].span = o, b += r.finalLineHeight;
                        this.layerElement.appendChild(C)
                    }
                    for (; t < this.textSpans.length;) this.textSpans[t].span.style.display = "none", t += 1;
                    this._sizeChanged = !0
                }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
                    if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                        this._sizeChanged = !1;
                        var t = this.layerElement.getBBox();
                        this.bbox = {
                            top: t.y,
                            left: t.x,
                            width: t.width,
                            height: t.height
                        }
                    }
                    return this.bbox
                }, SVGTextLottieElement.prototype.getValue = function() {
                    var t, r, e = this.textSpans.length;
                    for (this.renderedFrame = this.comp.renderedFrame, t = 0; t < e; t += 1)(r = this.textSpans[t].glyph) && (r.prepareFrame(this.comp.renderedFrame - this.data.st), r._mdf && (this._mdf = !0))
                }, SVGTextLottieElement.prototype.renderInnerContent = function() {
                    if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                        this._sizeChanged = !0;
                        var t, e, s, a, n, r = this.textAnimator.renderedLetters,
                            i = this.textProperty.currentData.l;
                        for (e = i.length, t = 0; t < e; t += 1) i[t].n || (s = r[t], a = this.textSpans[t].span, (n = this.textSpans[t].glyph) && n.renderFrame(), s._mdf.m && a.setAttribute("transform", s.m), s._mdf.o && a.setAttribute("opacity", s.o), s._mdf.sw && a.setAttribute("stroke-width", s.sw), s._mdf.sc && a.setAttribute("stroke", s.sc), s._mdf.fc && a.setAttribute("fill", s.fc))
                    }
                }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
                    var t = createNS("rect");
                    t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
                }, NullElement.prototype.prepareFrame = function(t) {
                    this.prepareProperties(t, !0)
                }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
                    return null
                }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function(t) {
                    return new NullElement(t, this.globalData, this)
                }, SVGRendererBase.prototype.createShape = function(t) {
                    return new SVGShapeElement(t, this.globalData, this)
                }, SVGRendererBase.prototype.createText = function(t) {
                    return new SVGTextLottieElement(t, this.globalData, this)
                }, SVGRendererBase.prototype.createImage = function(t) {
                    return new IImageElement(t, this.globalData, this)
                }, SVGRendererBase.prototype.createSolid = function(t) {
                    return new ISolidElement(t, this.globalData, this)
                }, SVGRendererBase.prototype.configAnimation = function(t) {
                    this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize ? this.renderConfig.viewBoxSize : "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
                    var e = this.globalData.defs;
                    this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
                    var r = createNS("clipPath"),
                        i = createNS("rect");
                    i.setAttribute("width", t.w), i.setAttribute("height", t.h), i.setAttribute("x", 0), i.setAttribute("y", 0);
                    var s = createElementID();
                    r.setAttribute("id", s), r.appendChild(i), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + s + ")"), e.appendChild(r), this.layers = t.layers, this.elements = createSizedArray(t.layers.length)
                }, SVGRendererBase.prototype.destroy = function() {
                    this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
                    var t, e = this.layers ? this.layers.length : 0;
                    for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
                    this.elements.length = 0, this.destroyed = !0, this.animationItem = null
                }, SVGRendererBase.prototype.updateContainerSize = function() {}, SVGRendererBase.prototype.findIndexByInd = function(t) {
                    var e = 0,
                        r = this.layers.length;
                    for (e = 0; e < r; e += 1)
                        if (this.layers[e].ind === t) return e;
                    return -1
                }, SVGRendererBase.prototype.buildItem = function(t) {
                    var e = this.elements;
                    if (!e[t] && 99 !== this.layers[t].ty) {
                        e[t] = !0;
                        var r = this.createItem(this.layers[t]);
                        if (e[t] = r, getExpressionsPlugin() && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, t), this.layers[t].tt) {
                            var i = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
                            if (-1 === i) return;
                            if (this.elements[i] && !0 !== this.elements[i]) {
                                var a = e[i].getMatte(this.layers[t].tt);
                                r.setMatte(a)
                            } else this.buildItem(i), this.addPendingElement(r)
                        }
                    }
                }, SVGRendererBase.prototype.checkPendingElements = function() {
                    for (; this.pendingElements.length;) {
                        var t = this.pendingElements.pop();
                        if (t.checkParenting(), t.data.tt)
                            for (var e = 0, r = this.elements.length; e < r;) {
                                if (this.elements[e] === t) {
                                    var i = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1,
                                        a = this.elements[i].getMatte(this.layers[e].tt);
                                    t.setMatte(a);
                                    break
                                }
                                e += 1
                            }
                    }
                }, SVGRendererBase.prototype.renderFrame = function(t) {
                    if (this.renderedFrame !== t && !this.destroyed) {
                        null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
                        var e, r = this.layers.length;
                        for (this.completeLayers || this.checkLayers(t), e = r - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                        if (this.globalData._mdf)
                            for (e = 0; e < r; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
                    }
                }, SVGRendererBase.prototype.appendElementInPos = function(t, e) {
                    var r = t.getBaseElement();
                    if (r) {
                        for (var s, i = 0; i < e;) this.elements[i] && !0 !== this.elements[i] && this.elements[i].getBaseElement() && (s = this.elements[i].getBaseElement()), i += 1;
                        s ? this.layerElement.insertBefore(r, s) : this.layerElement.appendChild(r)
                    }
                }, SVGRendererBase.prototype.hide = function() {
                    this.layerElement.style.display = "none"
                }, SVGRendererBase.prototype.show = function() {
                    this.layerElement.style.display = "block"
                }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(t, e, r) {
                    this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), (this.data.xt || !e.progressiveLoad) && this.buildAllItems(), this.hide()
                }, ICompElement.prototype.prepareFrame = function(t) {
                    if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
                        if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
                        else {
                            var e = this.tm.v;
                            e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
                        }
                        var r, i = this.elements.length;
                        for (this.completeLayers || this.checkLayers(this.renderedFrame), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = !0))
                    }
                }, ICompElement.prototype.renderInnerContent = function() {
                    var t, e = this.layers.length;
                    for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
                }, ICompElement.prototype.setElements = function(t) {
                    this.elements = t
                }, ICompElement.prototype.getElements = function() {
                    return this.elements
                }, ICompElement.prototype.destroyElements = function() {
                    var t, e = this.layers.length;
                    for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
                }, ICompElement.prototype.destroy = function() {
                    this.destroyElements(), this.destroyBaseElement()
                }, extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function(t) {
                    return new SVGCompElement(t, this.globalData, this)
                }, extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(t) {
                    return new SVGCompElement(t, this.globalData, this)
                }, ShapeTransformManager.prototype = {
                    addTransformSequence: function(e) {
                        var r, i = e.length,
                            s = "_";
                        for (r = 0; r < i; r += 1) s += e[r].transform.key + "_";
                        var a = this.sequences[s];
                        return a || (a = {
                            transforms: [].concat(e),
                            finalTransform: new Matrix,
                            _mdf: !1
                        }, this.sequences[s] = a, this.sequenceList.push(a)), a
                    },
                    processSequence: function(e, r) {
                        for (var i = 0, s = e.transforms.length, a = r; i < s && !r;) {
                            if (e.transforms[i].transform.mProps._mdf) {
                                a = !0;
                                break
                            }
                            i += 1
                        }
                        if (a)
                            for (e.finalTransform.reset(), i = s - 1; i >= 0; i -= 1) e.finalTransform.multiply(e.transforms[i].transform.mProps.v);
                        e._mdf = a
                    },
                    processSequences: function(e) {
                        var r, i = this.sequenceList.length;
                        for (r = 0; r < i; r += 1) this.processSequence(this.sequenceList[r], e)
                    },
                    getNewKey: function() {
                        return this.transform_key_count += 1, "_" + this.transform_key_count
                    }
                };
                var lumaLoader = function() {
                    var e = "__lottie_element_luma_buffer",
                        r = null,
                        i = null,
                        s = null;

                    function n() {
                        r || (s = function a() {
                            var o = createNS("svg"),
                                f = createNS("filter"),
                                v = createNS("feColorMatrix");
                            return f.setAttribute("id", e), v.setAttribute("type", "matrix"), v.setAttribute("color-interpolation-filters", "sRGB"), v.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), f.appendChild(v), o.appendChild(f), o.setAttribute("id", e + "_svg"), featureSupport.svgLumaHidden && (o.style.display = "none"), o
                        }(), document.body.appendChild(s), r = createTag("canvas"), (i = r.getContext("2d")).filter = "url(#" + e + ")", i.fillStyle = "rgba(0,0,0,0)", i.fillRect(0, 0, 1, 1))
                    }
                    return {
                        load: n,
                        get: function h(o) {
                            return r || n(), r.width = o.width, r.height = o.height, i.filter = "url(#" + e + ")", r
                        }
                    }
                };

                function createCanvas(t, e) {
                    if (featureSupport.offscreenCanvas) return new OffscreenCanvas(t, e);
                    var r = createTag("canvas");
                    return r.width = t, r.height = e, r
                }
                var assetLoader = {
                        loadLumaCanvas: lumaLoader.load,
                        getLumaCanvas: lumaLoader.get,
                        createCanvas
                    },
                    registeredEffects = {};

                function CVEffects(t) {
                    var e, i, r = t.data.ef ? t.data.ef.length : 0;
                    for (this.filters = [], e = 0; e < r; e += 1) {
                        i = null;
                        var s = t.data.ef[e].ty;
                        registeredEffects[s] && (i = new(0, registeredEffects[s].effect)(t.effectsManager.effectElements[e], t)), i && this.filters.push(i)
                    }
                    this.filters.length && t.addRenderableComponent(this)
                }

                function registerEffect(t, e) {
                    registeredEffects[t] = {
                        effect: e
                    }
                }

                function CVMaskElement(t, e) {
                    this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
                    var r, i = this.masksProperties.length,
                        s = !1;
                    for (r = 0; r < i; r += 1) "n" !== this.masksProperties[r].mode && (s = !0), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
                    this.hasMasks = s, s && this.element.addRenderableComponent(this)
                }

                function CVBaseElement() {}
                CVEffects.prototype.renderFrame = function(t) {
                    var e, r = this.filters.length;
                    for (e = 0; e < r; e += 1) this.filters[e].renderFrame(t)
                }, CVEffects.prototype.getEffects = function(t) {
                    var e, r = this.filters.length,
                        i = [];
                    for (e = 0; e < r; e += 1) this.filters[e].type === t && i.push(this.filters[e]);
                    return i
                }, CVMaskElement.prototype.renderFrame = function() {
                    if (this.hasMasks) {
                        var r, s, a, n, t = this.element.finalTransform.mat,
                            e = this.element.canvasContext,
                            i = this.masksProperties.length;
                        for (e.beginPath(), r = 0; r < i; r += 1)
                            if ("n" !== this.masksProperties[r].mode) {
                                this.masksProperties[r].inv && (e.moveTo(0, 0), e.lineTo(this.element.globalData.compSize.w, 0), e.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), e.lineTo(0, this.element.globalData.compSize.h), e.lineTo(0, 0)), s = t.applyToPointArray((n = this.viewData[r].v).v[0][0], n.v[0][1], 0), e.moveTo(s[0], s[1]);
                                var h, o = n._length;
                                for (h = 1; h < o; h += 1) a = t.applyToTriplePoints(n.o[h - 1], n.i[h], n.v[h]), e.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
                                a = t.applyToTriplePoints(n.o[h - 1], n.i[0], n.v[0]), e.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5])
                            }
                        this.element.globalData.renderer.save(!0), e.clip()
                    }
                }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
                    this.element = null
                };
                var operationsMap = {
                    1: "source-in",
                    2: "source-out",
                    3: "source-in",
                    4: "source-out"
                };

                function CVShapeData(t, e, r, i) {
                    this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
                    var s = 4;
                    "rc" === e.ty ? s = 5 : "el" === e.ty ? s = 6 : "sr" === e.ty && (s = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, s, t);
                    var a, h, n = r.length;
                    for (a = 0; a < n; a += 1) r[a].closed || (h = {
                        transforms: i.addTransformSequence(r[a].transforms),
                        trNodes: []
                    }, this.styledShapes.push(h), r[a].elements.push(h))
                }

                function CVShapeElement(t, e, r) {
                    this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(t, e, r)
                }

                function CVTextElement(t, e, r) {
                    this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
                        fill: "rgba(0,0,0,0)",
                        stroke: "rgba(0,0,0,0)",
                        sWidth: 0,
                        fValue: ""
                    }, this.initElement(t, e, r)
                }

                function CVImageElement(t, e, r) {
                    this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, r)
                }

                function CVSolidElement(t, e, r) {
                    this.initElement(t, e, r)
                }

                function CanvasRendererBase() {}

                function CanvasContext() {
                    this.opacity = -1, this.transform = createTypedArray("float32", 16), this.fillStyle = "", this.strokeStyle = "", this.lineWidth = "", this.lineCap = "", this.lineJoin = "", this.miterLimit = "", this.id = Math.random()
                }

                function CVContextData() {
                    var t;
                    for (this.stack = [], this.cArrPos = 0, this.cTr = new Matrix, t = 0; t < 15; t += 1) {
                        var r = new CanvasContext;
                        this.stack[t] = r
                    }
                    this._length = 15, this.nativeContext = null, this.transformMat = new Matrix, this.currentOpacity = 1, this.currentFillStyle = "", this.appliedFillStyle = "", this.currentStrokeStyle = "", this.appliedStrokeStyle = "", this.currentLineWidth = "", this.appliedLineWidth = "", this.currentLineCap = "", this.appliedLineCap = "", this.currentLineJoin = "", this.appliedLineJoin = "", this.appliedMiterLimit = "", this.currentMiterLimit = ""
                }

                function CVCompElement(t, e, r) {
                    this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                        _placeholder: !0
                    }
                }

                function CanvasRenderer(t, e) {
                    this.animationItem = t, this.renderConfig = {
                        clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
                        context: e && e.context || null,
                        progressiveLoad: e && e.progressiveLoad || !1,
                        preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                        imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                        contentVisibility: e && e.contentVisibility || "visible",
                        className: e && e.className || "",
                        id: e && e.id || "",
                        runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
                    }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                        frameNum: -1,
                        _mdf: !1,
                        renderConfig: this.renderConfig,
                        currentGlobalAlpha: -1
                    }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas", this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData))
                }

                function HBaseElement() {}

                function HSolidElement(t, e, r) {
                    this.initElement(t, e, r)
                }

                function HShapeElement(t, e, r) {
                    this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, r), this.prevViewData = [], this.currentBBox = {
                        x: 999999,
                        y: -999999,
                        h: 0,
                        w: 0
                    }
                }

                function HTextElement(t, e, r) {
                    this.textSpans = [], this.textPaths = [], this.currentBBox = {
                        x: 999999,
                        y: -999999,
                        h: 0,
                        w: 0
                    }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, r)
                }

                function HCameraElement(t, e, r) {
                    this.initFrame(), this.initBaseData(t, e, r), this.initHierarchy();
                    var i = PropertyFactory.getProp;
                    if (this.pe = i(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = i(this, t.ks.p.x, 1, 0, this), this.py = i(this, t.ks.p.y, 1, 0, this), this.pz = i(this, t.ks.p.z, 1, 0, this)) : this.p = i(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = i(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
                        var s, a = t.ks.or.k.length;
                        for (s = 0; s < a; s += 1) t.ks.or.k[s].to = null, t.ks.or.k[s].ti = null
                    }
                    this.or = i(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = i(this, t.ks.rx, 0, degToRads, this), this.ry = i(this, t.ks.ry, 0, degToRads, this), this.rz = i(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
                        mProp: this
                    }
                }

                function HImageElement(t, e, r) {
                    this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r)
                }

                function HybridRendererBase(t, e) {
                    this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                        className: e && e.className || "",
                        imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                        hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                        filterSize: {
                            width: e && e.filterSize && e.filterSize.width || "400%",
                            height: e && e.filterSize && e.filterSize.height || "400%",
                            x: e && e.filterSize && e.filterSize.x || "-100%",
                            y: e && e.filterSize && e.filterSize.y || "-100%"
                        }
                    }, this.globalData = {
                        _mdf: !1,
                        frameNum: -1,
                        renderConfig: this.renderConfig
                    }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
                }

                function HCompElement(t, e, r) {
                    this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                        _placeholder: !0
                    }
                }

                function HybridRenderer(t, e) {
                    this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                        className: e && e.className || "",
                        imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                        hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                        filterSize: {
                            width: e && e.filterSize && e.filterSize.width || "400%",
                            height: e && e.filterSize && e.filterSize.height || "400%",
                            x: e && e.filterSize && e.filterSize.x || "-100%",
                            y: e && e.filterSize && e.filterSize.y || "-100%"
                        },
                        runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
                    }, this.globalData = {
                        _mdf: !1,
                        frameNum: -1,
                        renderConfig: this.renderConfig
                    }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
                }
                CVBaseElement.prototype = {
                    createElements: function() {},
                    initRendererElement: function() {},
                    createContainerElements: function() {
                        if (this.data.tt >= 1) {
                            this.buffers = [];
                            var e = this.globalData.canvasContext,
                                r = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
                            this.buffers.push(r);
                            var i = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
                            this.buffers.push(i), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas()
                        }
                        this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this), this.searchEffectTransforms()
                    },
                    createContent: function() {},
                    setBlendMode: function() {
                        var e = this.globalData;
                        if (e.blendMode !== this.data.bm) {
                            e.blendMode = this.data.bm;
                            var r = getBlendMode(this.data.bm);
                            e.canvasContext.globalCompositeOperation = r
                        }
                    },
                    createRenderableComponents: function() {
                        this.maskManager = new CVMaskElement(this.data, this), this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT)
                    },
                    hideElement: function() {
                        !this.hidden && (!this.isInRange || this.isTransparent) && (this.hidden = !0)
                    },
                    showElement: function() {
                        this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
                    },
                    clearCanvas: function(e) {
                        e.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)
                    },
                    prepareLayer: function() {
                        if (this.data.tt >= 1) {
                            var r = this.buffers[0].getContext("2d");
                            this.clearCanvas(r), r.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform)
                        }
                    },
                    exitLayer: function() {
                        if (this.data.tt >= 1) {
                            var e = this.buffers[1],
                                r = e.getContext("2d");
                            if (this.clearCanvas(r), r.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform), this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1).renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
                                var s = assetLoader.getLumaCanvas(this.canvasContext.canvas);
                                s.getContext("2d").drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(s, 0, 0)
                            }
                            this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(e, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over"
                        }
                    },
                    renderFrame: function(e) {
                        if (!this.hidden && !this.data.hd && (1 !== this.data.td || e)) {
                            this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
                            var r = 0 === this.data.ty;
                            this.prepareLayer(), this.globalData.renderer.save(r), this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity), this.renderInnerContent(), this.globalData.renderer.restore(r), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
                        }
                    },
                    destroy: function() {
                        this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
                    },
                    mHelper: new Matrix
                }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
                    opacity: 1,
                    _opMdf: !1
                }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
                    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
                }, CVShapeElement.prototype.createStyleElement = function(t, e) {
                    var r = {
                            data: t,
                            type: t.ty,
                            preTransforms: this.transformsManager.addTransformSequence(e),
                            transforms: [],
                            elements: [],
                            closed: !0 === t.hd
                        },
                        i = {};
                    if ("fl" === t.ty || "st" === t.ty ? (i.c = PropertyFactory.getProp(this, t.c, 1, 255, this), i.c.k || (r.co = "rgb(" + bmFloor(i.c.v[0]) + "," + bmFloor(i.c.v[1]) + "," + bmFloor(i.c.v[2]) + ")")) : ("gf" === t.ty || "gs" === t.ty) && (i.s = PropertyFactory.getProp(this, t.s, 1, null, this), i.e = PropertyFactory.getProp(this, t.e, 1, null, this), i.h = PropertyFactory.getProp(this, t.h || {
                            k: 0
                        }, 0, .01, this), i.a = PropertyFactory.getProp(this, t.a || {
                            k: 0
                        }, 0, degToRads, this), i.g = new GradientProperty(this, t.g, this)), i.o = PropertyFactory.getProp(this, t.o, 0, .01, this), "st" === t.ty || "gs" === t.ty) {
                        if (r.lc = lineCapEnum[t.lc || 2], r.lj = lineJoinEnum[t.lj || 2], 1 == t.lj && (r.ml = t.ml), i.w = PropertyFactory.getProp(this, t.w, 0, null, this), i.w.k || (r.wi = i.w.v), t.d) {
                            var s = new DashProperty(this, t.d, "canvas", this);
                            i.d = s, i.d.k || (r.da = i.d.dashArray, r.do = i.d.dashoffset[0])
                        }
                    } else r.r = 2 === t.r ? "evenodd" : "nonzero";
                    return this.stylesList.push(r), i.style = r, i
                }, CVShapeElement.prototype.createGroupElement = function() {
                    return {
                        it: [],
                        prevViewData: []
                    }
                }, CVShapeElement.prototype.createTransformElement = function(t) {
                    return {
                        transform: {
                            opacity: 1,
                            _opMdf: !1,
                            key: this.transformsManager.getNewKey(),
                            op: PropertyFactory.getProp(this, t.o, 0, .01, this),
                            mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
                        }
                    }
                }, CVShapeElement.prototype.createShapeElement = function(t) {
                    var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
                    return this.shapes.push(e), this.addShapeToModifiers(e), e
                }, CVShapeElement.prototype.reloadShapes = function() {
                    this._isFirstFrame = !0;
                    var t, e = this.itemsData.length;
                    for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
                    for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
                    this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
                }, CVShapeElement.prototype.addTransformToStyleList = function(t) {
                    var e, r = this.stylesList.length;
                    for (e = 0; e < r; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
                }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
                    var t, e = this.stylesList.length;
                    for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop()
                }, CVShapeElement.prototype.closeStyles = function(t) {
                    var e, r = t.length;
                    for (e = 0; e < r; e += 1) t[e].closed = !0
                }, CVShapeElement.prototype.searchShapes = function(t, e, r, i, s) {
                    var a, h, o, S, p, b, n = t.length - 1,
                        f = [],
                        v = [],
                        g = [].concat(s);
                    for (a = n; a >= 0; a -= 1) {
                        if ((S = this.searchProcessedElement(t[a])) ? e[a] = r[S - 1] : t[a]._shouldRender = i, "fl" === t[a].ty || "st" === t[a].ty || "gf" === t[a].ty || "gs" === t[a].ty) S ? e[a].style.closed = !1 : e[a] = this.createStyleElement(t[a], g), f.push(e[a].style);
                        else if ("gr" === t[a].ty) {
                            if (S)
                                for (o = e[a].it.length, h = 0; h < o; h += 1) e[a].prevViewData[h] = e[a].it[h];
                            else e[a] = this.createGroupElement(t[a]);
                            this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, i, g)
                        } else "tr" === t[a].ty ? (S || (b = this.createTransformElement(t[a]), e[a] = b), g.push(e[a]), this.addTransformToStyleList(e[a])) : "sh" === t[a].ty || "rc" === t[a].ty || "el" === t[a].ty || "sr" === t[a].ty ? S || (e[a] = this.createShapeElement(t[a])) : "tm" === t[a].ty || "rd" === t[a].ty || "pb" === t[a].ty || "zz" === t[a].ty || "op" === t[a].ty ? (S ? (p = e[a]).closed = !1 : ((p = ShapeModifiers.getModifier(t[a].ty)).init(this, t[a]), e[a] = p, this.shapeModifiers.push(p)), v.push(p)) : "rp" === t[a].ty && (S ? (p = e[a]).closed = !0 : (p = ShapeModifiers.getModifier(t[a].ty), e[a] = p, p.init(this, t, a, e), this.shapeModifiers.push(p), i = !1), v.push(p));
                        this.addProcessedElement(t[a], a + 1)
                    }
                    for (this.removeTransformFromStyleList(), this.closeStyles(f), n = v.length, a = 0; a < n; a += 1) v[a].closed = !0
                }, CVShapeElement.prototype.renderInnerContent = function() {
                    this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
                }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
                    (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0)
                }, CVShapeElement.prototype.drawLayer = function() {
                    var t, r, i, s, a, n, h, v, S, e = this.stylesList.length,
                        o = this.globalData.renderer,
                        f = this.globalData.canvasContext;
                    for (t = 0; t < e; t += 1)
                        if (("st" !== (v = (S = this.stylesList[t]).type) && "gs" !== v || 0 !== S.wi) && S.data._shouldRender && 0 !== S.coOp && 0 !== this.globalData.currentGlobalAlpha) {
                            for (o.save(), n = S.elements, "st" === v || "gs" === v ? (o.ctxStrokeStyle("st" === v ? S.co : S.grd), o.ctxLineWidth(S.wi), o.ctxLineCap(S.lc), o.ctxLineJoin(S.lj), o.ctxMiterLimit(S.ml || 0)) : o.ctxFillStyle("fl" === v ? S.co : S.grd), o.ctxOpacity(S.coOp), "st" !== v && "gs" !== v && f.beginPath(), o.ctxTransform(S.preTransforms.finalTransform.props), i = n.length, r = 0; r < i; r += 1) {
                                for (("st" === v || "gs" === v) && (f.beginPath(), S.da && (f.setLineDash(S.da), f.lineDashOffset = S.do)), a = (h = n[r].trNodes).length, s = 0; s < a; s += 1) "m" === h[s].t ? f.moveTo(h[s].p[0], h[s].p[1]) : "c" === h[s].t ? f.bezierCurveTo(h[s].pts[0], h[s].pts[1], h[s].pts[2], h[s].pts[3], h[s].pts[4], h[s].pts[5]) : f.closePath();
                                ("st" === v || "gs" === v) && (o.ctxStroke(), S.da && f.setLineDash(this.dashResetter))
                            }
                            "st" !== v && "gs" !== v && this.globalData.renderer.ctxFill(S.r), o.restore()
                        }
                }, CVShapeElement.prototype.renderShape = function(t, e, r, i) {
                    var s, n;
                    for (n = t, s = e.length - 1; s >= 0; s -= 1) "tr" === e[s].ty ? this.renderShapeTransform(t, n = r[s].transform) : "sh" === e[s].ty || "el" === e[s].ty || "rc" === e[s].ty || "sr" === e[s].ty ? this.renderPath(e[s], r[s]) : "fl" === e[s].ty ? this.renderFill(e[s], r[s], n) : "st" === e[s].ty ? this.renderStroke(e[s], r[s], n) : "gf" === e[s].ty || "gs" === e[s].ty ? this.renderGradientFill(e[s], r[s], n) : "gr" === e[s].ty && this.renderShape(n, e[s].it, r[s].it);
                    i && this.drawLayer()
                }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
                    if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                        var s, a, n, r = t.trNodes,
                            i = e.paths,
                            h = i._length;
                        r.length = 0;
                        var o = t.transforms.finalTransform;
                        for (n = 0; n < h; n += 1) {
                            var f = i.shapes[n];
                            if (f && f.v) {
                                for (a = f._length, s = 1; s < a; s += 1) 1 === s && r.push({
                                    t: "m",
                                    p: o.applyToPointArray(f.v[0][0], f.v[0][1], 0)
                                }), r.push({
                                    t: "c",
                                    pts: o.applyToTriplePoints(f.o[s - 1], f.i[s], f.v[s])
                                });
                                1 === a && r.push({
                                    t: "m",
                                    p: o.applyToPointArray(f.v[0][0], f.v[0][1], 0)
                                }), f.c && a && (r.push({
                                    t: "c",
                                    pts: o.applyToTriplePoints(f.o[s - 1], f.i[0], f.v[0])
                                }), r.push({
                                    t: "z"
                                }))
                            }
                        }
                        t.trNodes = r
                    }
                }, CVShapeElement.prototype.renderPath = function(t, e) {
                    if (!0 !== t.hd && t._shouldRender) {
                        var r, i = e.styledShapes.length;
                        for (r = 0; r < i; r += 1) this.renderStyledShape(e.styledShapes[r], e.sh)
                    }
                }, CVShapeElement.prototype.renderFill = function(t, e, r) {
                    var i = e.style;
                    (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity)
                }, CVShapeElement.prototype.renderGradientFill = function(t, e, r) {
                    var s, i = e.style;
                    if (!i.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
                        var a = this.globalData.canvasContext,
                            n = e.s.v,
                            h = e.e.v;
                        if (1 === t.t) s = a.createLinearGradient(n[0], n[1], h[0], h[1]);
                        else {
                            var o = Math.sqrt(Math.pow(n[0] - h[0], 2) + Math.pow(n[1] - h[1], 2)),
                                f = Math.atan2(h[1] - n[1], h[0] - n[0]),
                                v = e.h.v;
                            v >= 1 ? v = .99 : v <= -1 && (v = -.99);
                            var S = o * v,
                                p = Math.cos(f + e.a.v) * S + n[0],
                                b = Math.sin(f + e.a.v) * S + n[1];
                            s = a.createRadialGradient(p, b, 0, n[0], n[1], o)
                        }
                        var g, m = t.g.p,
                            C = e.g.c,
                            c = 1;
                        for (g = 0; g < m; g += 1) e.g._hasOpacity && e.g._collapsable && (c = e.g.o[2 * g + 1]), s.addColorStop(C[4 * g] / 100, "rgba(" + C[4 * g + 1] + "," + C[4 * g + 2] + "," + C[4 * g + 3] + "," + c + ")");
                        i.grd = s
                    }
                    i.coOp = e.o.v * r.opacity
                }, CVShapeElement.prototype.renderStroke = function(t, e, r) {
                    var i = e.style,
                        s = e.d;
                    s && (s._mdf || this._isFirstFrame) && (i.da = s.dashArray, i.do = s.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity), (e.w._mdf || this._isFirstFrame) && (i.wi = e.w.v)
                }, CVShapeElement.prototype.destroy = function() {
                    this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
                }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
                    var t = this.textProperty.currentData;
                    this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
                    var e = !1;
                    t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
                    var r = !1;
                    t.sc && (r = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
                    var s, a, i = this.globalData.fontManager.getFontByName(t.f),
                        n = t.l,
                        h = this.mHelper;
                    this.stroke = r, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, a = t.finalText.length;
                    var o, f, v, S, p, b, g, m, C, c, u = this.data.singleShape,
                        l = .001 * t.tr * t.finalSize,
                        d = 0,
                        E = 0,
                        _ = !0,
                        T = 0;
                    for (s = 0; s < a; s += 1) {
                        f = (o = this.globalData.fontManager.getCharData(t.finalText[s], i.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && o.data || {}, h.reset(), u && n[s].n && (d = -l, E += t.yOffset, E += _ ? 1 : 0, _ = !1), g = (p = f.shapes ? f.shapes[0].it : []).length, h.scale(t.finalSize / 100, t.finalSize / 100), u && this.applyTextPropertiesToMatrix(t, h, n[s].line, d, E), C = createSizedArray(g - 1);
                        var M = 0;
                        for (b = 0; b < g; b += 1)
                            if ("sh" === p[b].ty) {
                                for (S = p[b].ks.k.i.length, m = p[b].ks.k, c = [], v = 1; v < S; v += 1) 1 === v && c.push(h.applyToX(m.v[0][0], m.v[0][1], 0), h.applyToY(m.v[0][0], m.v[0][1], 0)), c.push(h.applyToX(m.o[v - 1][0], m.o[v - 1][1], 0), h.applyToY(m.o[v - 1][0], m.o[v - 1][1], 0), h.applyToX(m.i[v][0], m.i[v][1], 0), h.applyToY(m.i[v][0], m.i[v][1], 0), h.applyToX(m.v[v][0], m.v[v][1], 0), h.applyToY(m.v[v][0], m.v[v][1], 0));
                                c.push(h.applyToX(m.o[v - 1][0], m.o[v - 1][1], 0), h.applyToY(m.o[v - 1][0], m.o[v - 1][1], 0), h.applyToX(m.i[0][0], m.i[0][1], 0), h.applyToY(m.i[0][0], m.i[0][1], 0), h.applyToX(m.v[0][0], m.v[0][1], 0), h.applyToY(m.v[0][0], m.v[0][1], 0)), C[M] = c, M += 1
                            }
                        u && (d += n[s].l, d += l), this.textSpans[T] ? this.textSpans[T].elem = C : this.textSpans[T] = {
                            elem: C
                        }, T += 1
                    }
                }, CVTextElement.prototype.renderInnerContent = function() {
                    this.validateText(), this.canvasContext.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
                    var e, r, i, s, a, n, h = this.textAnimator.renderedLetters,
                        o = this.textProperty.currentData.l;
                    r = o.length;
                    var f, b, g, v = null,
                        S = null,
                        p = null,
                        m = this.globalData.renderer;
                    for (e = 0; e < r; e += 1)
                        if (!o[e].n) {
                            if ((f = h[e]) && (m.save(), m.ctxTransform(f.p), m.ctxOpacity(f.o)), this.fill) {
                                for (f && f.fc ? v !== f.fc && (m.ctxFillStyle(f.fc), v = f.fc) : v !== this.values.fill && (v = this.values.fill, m.ctxFillStyle(this.values.fill)), s = (b = this.textSpans[e].elem).length, this.globalData.canvasContext.beginPath(), i = 0; i < s; i += 1)
                                    for (n = (g = b[i]).length, this.globalData.canvasContext.moveTo(g[0], g[1]), a = 2; a < n; a += 6) this.globalData.canvasContext.bezierCurveTo(g[a], g[a + 1], g[a + 2], g[a + 3], g[a + 4], g[a + 5]);
                                this.globalData.canvasContext.closePath(), m.ctxFill()
                            }
                            if (this.stroke) {
                                for (f && f.sw ? p !== f.sw && (p = f.sw, m.ctxLineWidth(f.sw)) : p !== this.values.sWidth && (p = this.values.sWidth, m.ctxLineWidth(this.values.sWidth)), f && f.sc ? S !== f.sc && (S = f.sc, m.ctxStrokeStyle(f.sc)) : S !== this.values.stroke && (S = this.values.stroke, m.ctxStrokeStyle(this.values.stroke)), s = (b = this.textSpans[e].elem).length, this.globalData.canvasContext.beginPath(), i = 0; i < s; i += 1)
                                    for (n = (g = b[i]).length, this.globalData.canvasContext.moveTo(g[0], g[1]), a = 2; a < n; a += 6) this.globalData.canvasContext.bezierCurveTo(g[a], g[a + 1], g[a + 2], g[a + 3], g[a + 4], g[a + 5]);
                                this.globalData.canvasContext.closePath(), m.ctxStroke()
                            }
                            f && this.globalData.renderer.restore()
                        }
                }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
                    if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                        var t = createTag("canvas");
                        t.width = this.assetData.w, t.height = this.assetData.h;
                        var n, h, e = t.getContext("2d"),
                            r = this.img.width,
                            i = this.img.height,
                            s = r / i,
                            a = this.assetData.w / this.assetData.h,
                            o = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                        s > a && "xMidYMid slice" === o || s < a && "xMidYMid slice" !== o ? n = (h = i) * a : h = (n = r) / a, e.drawImage(this.img, (r - n) / 2, (i - h) / 2, n, h, 0, 0, this.assetData.w, this.assetData.h), this.img = t
                    }
                }, CVImageElement.prototype.renderInnerContent = function() {
                    this.canvasContext.drawImage(this.img, 0, 0)
                }, CVImageElement.prototype.destroy = function() {
                    this.img = null
                }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
                    this.globalData.renderer.ctxFillStyle(this.data.sc), this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh)
                }, extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function(t) {
                    return new CVShapeElement(t, this.globalData, this)
                }, CanvasRendererBase.prototype.createText = function(t) {
                    return new CVTextElement(t, this.globalData, this)
                }, CanvasRendererBase.prototype.createImage = function(t) {
                    return new CVImageElement(t, this.globalData, this)
                }, CanvasRendererBase.prototype.createSolid = function(t) {
                    return new CVSolidElement(t, this.globalData, this)
                }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function(t) {
                    1 === t[0] && 0 === t[1] && 0 === t[4] && 1 === t[5] && 0 === t[12] && 0 === t[13] || this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
                }, CanvasRendererBase.prototype.ctxOpacity = function(t) {
                    this.canvasContext.globalAlpha *= t < 0 ? 0 : t
                }, CanvasRendererBase.prototype.ctxFillStyle = function(t) {
                    this.canvasContext.fillStyle = t
                }, CanvasRendererBase.prototype.ctxStrokeStyle = function(t) {
                    this.canvasContext.strokeStyle = t
                }, CanvasRendererBase.prototype.ctxLineWidth = function(t) {
                    this.canvasContext.lineWidth = t
                }, CanvasRendererBase.prototype.ctxLineCap = function(t) {
                    this.canvasContext.lineCap = t
                }, CanvasRendererBase.prototype.ctxLineJoin = function(t) {
                    this.canvasContext.lineJoin = t
                }, CanvasRendererBase.prototype.ctxMiterLimit = function(t) {
                    this.canvasContext.miterLimit = t
                }, CanvasRendererBase.prototype.ctxFill = function(t) {
                    this.canvasContext.fill(t)
                }, CanvasRendererBase.prototype.ctxFillRect = function(t, e, r, i) {
                    this.canvasContext.fillRect(t, e, r, i)
                }, CanvasRendererBase.prototype.ctxStroke = function() {
                    this.canvasContext.stroke()
                }, CanvasRendererBase.prototype.reset = function() {
                    this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
                }, CanvasRendererBase.prototype.save = function() {
                    this.canvasContext.save()
                }, CanvasRendererBase.prototype.restore = function(t) {
                    this.renderConfig.clearCanvas ? (t && (this.globalData.blendMode = "source-over"), this.contextData.restore(t)) : this.canvasContext.restore()
                }, CanvasRendererBase.prototype.configAnimation = function(t) {
                    if (this.animationItem.wrapper) {
                        this.animationItem.container = createTag("canvas");
                        var e = this.animationItem.container.style;
                        e.width = "100%", e.height = "100%";
                        var r = "0px 0px 0px";
                        e.transformOrigin = r, e.mozTransformOrigin = r, e.webkitTransformOrigin = r, e["-webkit-transform"] = r, e.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
                    } else this.canvasContext = this.renderConfig.context;
                    this.contextData.setContext(this.canvasContext), this.data = t, this.layers = t.layers, this.transformCanvas = {
                        w: t.w,
                        h: t.h,
                        sx: 0,
                        sy: 0,
                        tx: 0,
                        ty: 0
                    }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize()
                }, CanvasRendererBase.prototype.updateContainerSize = function(t, e) {
                    var r, i, s, a;
                    if (this.reset(), t ? (i = e, this.canvasContext.canvas.width = r = t, this.canvasContext.canvas.height = i) : (this.animationItem.wrapper && this.animationItem.container ? (r = this.animationItem.wrapper.offsetWidth, i = this.animationItem.wrapper.offsetHeight) : (r = this.canvasContext.canvas.width, i = this.canvasContext.canvas.height), this.canvasContext.canvas.width = r * this.renderConfig.dpr, this.canvasContext.canvas.height = i * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
                        var n = this.renderConfig.preserveAspectRatio.split(" "),
                            h = n[1] || "meet",
                            o = n[0] || "xMidYMid",
                            f = o.substr(0, 4),
                            v = o.substr(4);
                        (a = this.transformCanvas.w / this.transformCanvas.h) > (s = r / i) && "meet" === h || a < s && "slice" === h ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === f && (a < s && "meet" === h || a > s && "slice" === h) ? (r - this.transformCanvas.w * (i / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === f && (a < s && "meet" === h || a > s && "slice" === h) ? (r - this.transformCanvas.w * (i / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === v && (a > s && "meet" === h || a < s && "slice" === h) ? (i - this.transformCanvas.h * (r / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === v && (a > s && "meet" === h || a < s && "slice" === h) ? (i - this.transformCanvas.h * (r / this.transformCanvas.w)) * this.renderConfig.dpr : 0
                    } else "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
                    this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
                }, CanvasRendererBase.prototype.destroy = function() {
                    var t;
                    for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
                    this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
                }, CanvasRendererBase.prototype.renderFrame = function(t, e) {
                    if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
                        this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
                        var r, i = this.layers.length;
                        for (this.completeLayers || this.checkLayers(t), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(t - this.layers[r].st);
                        if (this.globalData._mdf) {
                            for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
                            !0 !== this.renderConfig.clearCanvas && this.restore()
                        }
                    }
                }, CanvasRendererBase.prototype.buildItem = function(t) {
                    var e = this.elements;
                    if (!e[t] && 99 !== this.layers[t].ty) {
                        var r = this.createItem(this.layers[t], this, this.globalData);
                        e[t] = r, r.initExpressions()
                    }
                }, CanvasRendererBase.prototype.checkPendingElements = function() {
                    for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
                }, CanvasRendererBase.prototype.hide = function() {
                    this.animationItem.container.style.display = "none"
                }, CanvasRendererBase.prototype.show = function() {
                    this.animationItem.container.style.display = "block"
                }, CVContextData.prototype.duplicate = function() {
                    var t = 2 * this._length,
                        e = 0;
                    for (e = this._length; e < t; e += 1) this.stack[e] = new CanvasContext;
                    this._length = t
                }, CVContextData.prototype.reset = function() {
                    this.cArrPos = 0, this.cTr.reset(), this.stack[this.cArrPos].opacity = 1
                }, CVContextData.prototype.restore = function(t) {
                    this.cArrPos -= 1;
                    var i, e = this.stack[this.cArrPos],
                        r = e.transform,
                        s = this.cTr.props;
                    for (i = 0; i < 16; i += 1) s[i] = r[i];
                    if (t) {
                        this.nativeContext.restore();
                        var a = this.stack[this.cArrPos + 1];
                        this.appliedFillStyle = a.fillStyle, this.appliedStrokeStyle = a.strokeStyle, this.appliedLineWidth = a.lineWidth, this.appliedLineCap = a.lineCap, this.appliedLineJoin = a.lineJoin, this.appliedMiterLimit = a.miterLimit
                    }
                    this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]), (t || -1 !== e.opacity && this.currentOpacity !== e.opacity) && (this.nativeContext.globalAlpha = e.opacity, this.currentOpacity = e.opacity), this.currentFillStyle = e.fillStyle, this.currentStrokeStyle = e.strokeStyle, this.currentLineWidth = e.lineWidth, this.currentLineCap = e.lineCap, this.currentLineJoin = e.lineJoin, this.currentMiterLimit = e.miterLimit
                }, CVContextData.prototype.save = function(t) {
                    t && this.nativeContext.save();
                    var e = this.cTr.props;
                    this._length <= this.cArrPos && this.duplicate();
                    var i, r = this.stack[this.cArrPos];
                    for (i = 0; i < 16; i += 1) r.transform[i] = e[i];
                    this.cArrPos += 1;
                    var s = this.stack[this.cArrPos];
                    s.opacity = r.opacity, s.fillStyle = r.fillStyle, s.strokeStyle = r.strokeStyle, s.lineWidth = r.lineWidth, s.lineCap = r.lineCap, s.lineJoin = r.lineJoin, s.miterLimit = r.miterLimit
                }, CVContextData.prototype.setOpacity = function(t) {
                    this.stack[this.cArrPos].opacity = t
                }, CVContextData.prototype.setContext = function(t) {
                    this.nativeContext = t
                }, CVContextData.prototype.fillStyle = function(t) {
                    this.stack[this.cArrPos].fillStyle !== t && (this.currentFillStyle = t, this.stack[this.cArrPos].fillStyle = t)
                }, CVContextData.prototype.strokeStyle = function(t) {
                    this.stack[this.cArrPos].strokeStyle !== t && (this.currentStrokeStyle = t, this.stack[this.cArrPos].strokeStyle = t)
                }, CVContextData.prototype.lineWidth = function(t) {
                    this.stack[this.cArrPos].lineWidth !== t && (this.currentLineWidth = t, this.stack[this.cArrPos].lineWidth = t)
                }, CVContextData.prototype.lineCap = function(t) {
                    this.stack[this.cArrPos].lineCap !== t && (this.currentLineCap = t, this.stack[this.cArrPos].lineCap = t)
                }, CVContextData.prototype.lineJoin = function(t) {
                    this.stack[this.cArrPos].lineJoin !== t && (this.currentLineJoin = t, this.stack[this.cArrPos].lineJoin = t)
                }, CVContextData.prototype.miterLimit = function(t) {
                    this.stack[this.cArrPos].miterLimit !== t && (this.currentMiterLimit = t, this.stack[this.cArrPos].miterLimit = t)
                }, CVContextData.prototype.transform = function(t) {
                    this.transformMat.cloneFromProps(t);
                    var e = this.cTr;
                    this.transformMat.multiply(e), e.cloneFromProps(this.transformMat.props);
                    var r = e.props;
                    this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13])
                }, CVContextData.prototype.opacity = function(t) {
                    var e = this.stack[this.cArrPos].opacity;
                    this.stack[this.cArrPos].opacity !== (e *= t < 0 ? 0 : t) && (this.currentOpacity !== t && (this.nativeContext.globalAlpha = t, this.currentOpacity = t), this.stack[this.cArrPos].opacity = e)
                }, CVContextData.prototype.fill = function(t) {
                    this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fill(t)
                }, CVContextData.prototype.fillRect = function(t, e, r, i) {
                    this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fillRect(t, e, r, i)
                }, CVContextData.prototype.stroke = function() {
                    this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle, this.nativeContext.strokeStyle = this.appliedStrokeStyle), this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth, this.nativeContext.lineWidth = this.appliedLineWidth), this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap, this.nativeContext.lineCap = this.appliedLineCap), this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin, this.nativeContext.lineJoin = this.appliedLineJoin), this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit, this.nativeContext.miterLimit = this.appliedMiterLimit), this.nativeContext.stroke()
                }, extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
                    var e, t = this.canvasContext;
                    for (t.beginPath(), t.moveTo(0, 0), t.lineTo(this.data.w, 0), t.lineTo(this.data.w, this.data.h), t.lineTo(0, this.data.h), t.lineTo(0, 0), t.clip(), e = this.layers.length - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
                }, CVCompElement.prototype.destroy = function() {
                    var t;
                    for (t = this.layers.length - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
                    this.layers = null, this.elements = null
                }, CVCompElement.prototype.createComp = function(t) {
                    return new CVCompElement(t, this.globalData, this)
                }, extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function(t) {
                    return new CVCompElement(t, this.globalData, this)
                }, HBaseElement.prototype = {
                    checkBlendMode: function() {},
                    initRendererElement: function() {
                        this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
                    },
                    createContainerElements: function() {
                        this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode()
                    },
                    renderElement: function() {
                        var e = this.transformedElement ? this.transformedElement.style : {};
                        if (this.finalTransform._matMdf) {
                            var r = this.finalTransform.mat.toCSS();
                            e.transform = r, e.webkitTransform = r
                        }
                        this.finalTransform._opMdf && (e.opacity = this.finalTransform.mProp.o.v)
                    },
                    renderFrame: function() {
                        this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                    },
                    destroy: function() {
                        this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
                    },
                    createRenderableComponents: function() {
                        this.maskManager = new MaskElement(this.data, this, this.globalData)
                    },
                    addEffects: function() {},
                    setMatte: function() {}
                }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
                    var t;
                    this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t)
                }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
                    var t;
                    if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
                    else {
                        t = createNS("svg");
                        var e = this.comp.data ? this.comp.data : this.globalData.compSize;
                        t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t)
                    }
                    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t
                }, HShapeElement.prototype.getTransformedPoint = function(t, e) {
                    var r, i = t.length;
                    for (r = 0; r < i; r += 1) e = t[r].mProps.v.applyToPointArray(e[0], e[1], 0);
                    return e
                }, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
                    var s, n, h, o, f, r = t.sh.v,
                        i = t.transformers,
                        a = r._length;
                    if (!(a <= 1)) {
                        for (s = 0; s < a - 1; s += 1) n = this.getTransformedPoint(i, r.v[s]), h = this.getTransformedPoint(i, r.o[s]), o = this.getTransformedPoint(i, r.i[s + 1]), f = this.getTransformedPoint(i, r.v[s + 1]), this.checkBounds(n, h, o, f, e);
                        r.c && (n = this.getTransformedPoint(i, r.v[s]), h = this.getTransformedPoint(i, r.o[s]), o = this.getTransformedPoint(i, r.i[0]), f = this.getTransformedPoint(i, r.v[0]), this.checkBounds(n, h, o, f, e))
                    }
                }, HShapeElement.prototype.checkBounds = function(t, e, r, i, s) {
                    this.getBoundsOfCurve(t, e, r, i);
                    var a = this.shapeBoundingBox;
                    s.x = bmMin(a.left, s.x), s.xMax = bmMax(a.right, s.xMax), s.y = bmMin(a.top, s.y), s.yMax = bmMax(a.bottom, s.yMax)
                }, HShapeElement.prototype.shapeBoundingBox = {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }, HShapeElement.prototype.tempBoundingBox = {
                    x: 0,
                    xMax: 0,
                    y: 0,
                    yMax: 0,
                    width: 0,
                    height: 0
                }, HShapeElement.prototype.getBoundsOfCurve = function(t, e, r, i) {
                    for (var a, n, h, o, f, v, S, s = [
                            [t[0], i[0]],
                            [t[1], i[1]]
                        ], p = 0; p < 2; ++p) n = 6 * t[p] - 12 * e[p] + 6 * r[p], a = -3 * t[p] + 9 * e[p] - 9 * r[p] + 3 * i[p], h = 3 * e[p] - 3 * t[p], n |= 0, h |= 0, 0 == (a |= 0) && 0 === n || (0 === a ? (o = -h / n) > 0 && o < 1 && s[p].push(this.calculateF(o, t, e, r, i, p)) : (f = n * n - 4 * h * a) >= 0 && ((v = (-n + bmSqrt(f)) / (2 * a)) > 0 && v < 1 && s[p].push(this.calculateF(v, t, e, r, i, p)), (S = (-n - bmSqrt(f)) / (2 * a)) > 0 && S < 1 && s[p].push(this.calculateF(S, t, e, r, i, p))));
                    this.shapeBoundingBox.left = bmMin.apply(null, s[0]), this.shapeBoundingBox.top = bmMin.apply(null, s[1]), this.shapeBoundingBox.right = bmMax.apply(null, s[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, s[1])
                }, HShapeElement.prototype.calculateF = function(t, e, r, i, s, a) {
                    return bmPow(1 - t, 3) * e[a] + 3 * bmPow(1 - t, 2) * t * r[a] + 3 * (1 - t) * bmPow(t, 2) * i[a] + bmPow(t, 3) * s[a]
                }, HShapeElement.prototype.calculateBoundingBox = function(t, e) {
                    var r, i = t.length;
                    for (r = 0; r < i; r += 1) t[r] && t[r].sh ? this.calculateShapeBoundingBox(t[r], e) : t[r] && t[r].it ? this.calculateBoundingBox(t[r].it, e) : t[r] && t[r].style && t[r].w && this.expandStrokeBoundingBox(t[r].w, e)
                }, HShapeElement.prototype.expandStrokeBoundingBox = function(t, e) {
                    var r = 0;
                    if (t.keyframes) {
                        for (var i = 0; i < t.keyframes.length; i += 1) {
                            var s = t.keyframes[i].s;
                            s > r && (r = s)
                        }
                        r *= t.mult
                    } else r = t.v * t.mult;
                    e.x -= r, e.xMax += r, e.y -= r, e.yMax += r
                }, HShapeElement.prototype.currentBoxContains = function(t) {
                    return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height
                }, HShapeElement.prototype.renderInnerContent = function() {
                    if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
                        var t = this.tempBoundingBox,
                            e = 999999;
                        if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return;
                        var r = !1;
                        if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), r = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), r = !0), r || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
                            this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
                            var i = this.shapeCont.style,
                                s = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                            i.transform = s, i.webkitTransform = s
                        }
                    }
                }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
                    if (this.isMasked = this.checkMasks(), this.isMasked) {
                        this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
                        var t = createNS("g");
                        this.maskedElement.appendChild(t), this.innerElem = t
                    } else this.renderType = "html", this.innerElem = this.layerElement;
                    this.checkParenting()
                }, HTextElement.prototype.buildNewText = function() {
                    var t = this.textProperty.currentData;
                    this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
                    var e = this.innerElem.style,
                        r = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
                    e.fill = r, e.color = r, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
                    var i = this.globalData.fontManager.getFontByName(t.f);
                    if (!this.globalData.fontManager.chars)
                        if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", i.fClass) this.innerElem.className = i.fClass;
                        else {
                            e.fontFamily = i.fFamily;
                            var s = t.fWeight;
                            e.fontStyle = t.fStyle, e.fontWeight = s
                        }
                    var n, h, o = t.l;
                    h = o.length;
                    var f, v, S, b, p = this.mHelper,
                        g = "",
                        m = 0;
                    for (n = 0; n < h; n += 1) {
                        if (this.globalData.fontManager.chars ? (this.textPaths[m] ? f = this.textPaths[m] : ((f = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), f.setAttribute("stroke-linejoin", lineJoinEnum[2]), f.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[m] ? S = (v = this.textSpans[m]).children[0] : ((v = createTag("div")).style.lineHeight = 0, (S = createNS("svg")).appendChild(f), styleDiv(v)))) : this.isMasked ? f = this.textPaths[m] ? this.textPaths[m] : createNS("text") : this.textSpans[m] ? (v = this.textSpans[m], f = this.textPaths[m]) : (styleDiv(v = createTag("span")), styleDiv(f = createTag("span")), v.appendChild(f)), this.globalData.fontManager.chars) {
                            var c, C = this.globalData.fontManager.getCharData(t.finalText[n], i.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
                            if (c = C ? C.data : null, p.reset(), c && c.shapes && c.shapes.length && (b = c.shapes[0].it, p.scale(t.finalSize / 100, t.finalSize / 100), g = this.createPathShape(p, b), f.setAttribute("d", g)), this.isMasked) this.innerElem.appendChild(f);
                            else {
                                if (this.innerElem.appendChild(v), c && c.shapes) {
                                    document.body.appendChild(S);
                                    var u = S.getBBox();
                                    S.setAttribute("width", u.width + 2), S.setAttribute("height", u.height + 2), S.setAttribute("viewBox", u.x - 1 + " " + (u.y - 1) + " " + (u.width + 2) + " " + (u.height + 2));
                                    var l = S.style,
                                        d = "translate(" + (u.x - 1) + "px," + (u.y - 1) + "px)";
                                    l.transform = d, l.webkitTransform = d, o[n].yOffset = u.y - 1
                                } else S.setAttribute("width", 1), S.setAttribute("height", 1);
                                v.appendChild(S)
                            }
                        } else if (f.textContent = o[n].val, f.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(f);
                        else {
                            this.innerElem.appendChild(v);
                            var E = f.style,
                                _ = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
                            E.transform = _, E.webkitTransform = _
                        }
                        this.textSpans[m] = this.isMasked ? f : v, this.textSpans[m].style.display = "block", this.textPaths[m] = f, m += 1
                    }
                    for (; m < this.textSpans.length;) this.textSpans[m].style.display = "none", m += 1
                }, HTextElement.prototype.renderInnerContent = function() {
                    var t;
                    if (this.validateText(), this.data.singleShape) {
                        if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                        if (this.isMasked && this.finalTransform._matMdf) {
                            this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH);
                            var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
                            (t = this.svgElement.style).transform = e, t.webkitTransform = e
                        }
                    }
                    if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
                        var r, i, h, o, f, s = 0,
                            a = this.textAnimator.renderedLetters,
                            n = this.textProperty.currentData.l;
                        for (i = n.length, r = 0; r < i; r += 1) n[r].n ? s += 1 : (o = this.textSpans[r], f = this.textPaths[r], h = a[s], s += 1, h._mdf.m && (this.isMasked ? o.setAttribute("transform", h.m) : (o.style.webkitTransform = h.m, o.style.transform = h.m)), o.style.opacity = h.o, h.sw && h._mdf.sw && f.setAttribute("stroke-width", h.sw), h.sc && h._mdf.sc && f.setAttribute("stroke", h.sc), h.fc && h._mdf.fc && (f.setAttribute("fill", h.fc), f.style.color = h.fc));
                        if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                            var v = this.innerElem.getBBox();
                            if (this.currentBBox.w !== v.width && (this.currentBBox.w = v.width, this.svgElement.setAttribute("width", v.width)), this.currentBBox.h !== v.height && (this.currentBBox.h = v.height, this.svgElement.setAttribute("height", v.height)), this.currentBBox.w !== v.width + 2 || this.currentBBox.h !== v.height + 2 || this.currentBBox.x !== v.x - 1 || this.currentBBox.y !== v.y - 1) {
                                this.currentBBox.w = v.width + 2, this.currentBBox.h = v.height + 2, this.currentBBox.x = v.x - 1, this.currentBBox.y = v.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
                                var p = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                                (t = this.svgElement.style).transform = p, t.webkitTransform = p
                            }
                        }
                    }
                }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
                    var t, r, i, s, e = this.comp.threeDElements.length;
                    for (t = 0; t < e; t += 1)
                        if ("3d" === (r = this.comp.threeDElements[t]).type) {
                            s = r.container.style;
                            var a = this.pe.v + "px",
                                n = "0px 0px 0px",
                                h = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                            (i = r.perspectiveElem.style).perspective = a, i.webkitPerspective = a, s.transformOrigin = n, s.mozTransformOrigin = n, s.webkitTransformOrigin = n, i.transform = h, i.webkitTransform = h
                        }
                }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
                    var e, r, t = this._isFirstFrame;
                    if (this.hierarchy)
                        for (r = this.hierarchy.length, e = 0; e < r; e += 1) t = this.hierarchy[e].finalTransform.mProp._mdf || t;
                    if (t || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                        if (this.mat.reset(), this.hierarchy)
                            for (e = r = this.hierarchy.length - 1; e >= 0; e -= 1) {
                                var i = this.hierarchy[e].finalTransform.mProp;
                                this.mat.translate(-i.p.v[0], -i.p.v[1], i.p.v[2]), this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]), this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v), this.mat.scale(1 / i.s.v[0], 1 / i.s.v[1], 1 / i.s.v[2]), this.mat.translate(i.a.v[0], i.a.v[1], i.a.v[2])
                            }
                        if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                            var s;
                            s = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
                            var a = Math.sqrt(Math.pow(s[0], 2) + Math.pow(s[1], 2) + Math.pow(s[2], 2)),
                                n = [s[0] / a, s[1] / a, s[2] / a],
                                h = Math.sqrt(n[2] * n[2] + n[0] * n[0]),
                                o = Math.atan2(n[1], h),
                                f = Math.atan2(n[0], -n[2]);
                            this.mat.rotateY(f).rotateX(-o)
                        }
                        this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                        var v = !this._prevMat.equals(this.mat);
                        if ((v || this.pe._mdf) && this.comp.threeDElements) {
                            var S, p, b;
                            for (r = this.comp.threeDElements.length, e = 0; e < r; e += 1)
                                if ("3d" === (S = this.comp.threeDElements[e]).type) {
                                    if (v) {
                                        var g = this.mat.toCSS();
                                        (b = S.container.style).transform = g, b.webkitTransform = g
                                    }
                                    this.pe._mdf && ((p = S.perspectiveElem.style).perspective = this.pe.v + "px", p.webkitPerspective = this.pe.v + "px")
                                }
                            this.mat.clone(this._prevMat)
                        }
                    }
                    this._isFirstFrame = !1
                }, HCameraElement.prototype.prepareFrame = function(t) {
                    this.prepareProperties(t, !0)
                }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
                    return null
                }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
                    var t = this.globalData.getAssetsPath(this.assetData),
                        e = new Image;
                    this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = "anonymous", e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
                }, extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function() {
                    for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
                }, HybridRendererBase.prototype.appendElementInPos = function(t, e) {
                    var r = t.getBaseElement();
                    if (r) {
                        var i = this.layers[e];
                        if (i.ddd && this.supports3d) this.addTo3dContainer(r, e);
                        else if (this.threeDElements) this.addTo3dContainer(r, e);
                        else {
                            for (var a, n, s = 0; s < e;) this.elements[s] && !0 !== this.elements[s] && this.elements[s].getBaseElement && (n = this.elements[s], a = (this.layers[s].ddd ? this.getThreeDContainerByPos(s) : n.getBaseElement()) || a), s += 1;
                            a ? (!i.ddd || !this.supports3d) && this.layerElement.insertBefore(r, a) : (!i.ddd || !this.supports3d) && this.layerElement.appendChild(r)
                        }
                    }
                }, HybridRendererBase.prototype.createShape = function(t) {
                    return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this)
                }, HybridRendererBase.prototype.createText = function(t) {
                    return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextLottieElement(t, this.globalData, this)
                }, HybridRendererBase.prototype.createCamera = function(t) {
                    return this.camera = new HCameraElement(t, this.globalData, this), this.camera
                }, HybridRendererBase.prototype.createImage = function(t) {
                    return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this)
                }, HybridRendererBase.prototype.createSolid = function(t) {
                    return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this)
                }, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function(t) {
                    for (var e = 0, r = this.threeDElements.length; e < r;) {
                        if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
                        e += 1
                    }
                    return null
                }, HybridRendererBase.prototype.createThreeDContainer = function(t, e) {
                    var i, s, r = createTag("div");
                    styleDiv(r);
                    var a = createTag("div");
                    if (styleDiv(a), "3d" === e) {
                        (i = r.style).width = this.globalData.compSize.w + "px", i.height = this.globalData.compSize.h + "px";
                        var n = "50% 50%";
                        i.webkitTransformOrigin = n, i.mozTransformOrigin = n, i.transformOrigin = n;
                        var h = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                        (s = a.style).transform = h, s.webkitTransform = h
                    }
                    r.appendChild(a);
                    var o = {
                        container: a,
                        perspectiveElem: r,
                        startPos: t,
                        endPos: t,
                        type: e
                    };
                    return this.threeDElements.push(o), o
                }, HybridRendererBase.prototype.build3dContainers = function() {
                    var t, r, e = this.layers.length,
                        i = "";
                    for (t = 0; t < e; t += 1) this.layers[t].ddd && 3 !== this.layers[t].ty ? ("3d" !== i && (i = "3d", r = this.createThreeDContainer(t, "3d")), r.endPos = Math.max(r.endPos, t)) : ("2d" !== i && (i = "2d", r = this.createThreeDContainer(t, "2d")), r.endPos = Math.max(r.endPos, t));
                    for (t = (e = this.threeDElements.length) - 1; t >= 0; t -= 1) this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
                }, HybridRendererBase.prototype.addTo3dContainer = function(t, e) {
                    for (var r = 0, i = this.threeDElements.length; r < i;) {
                        if (e <= this.threeDElements[r].endPos) {
                            for (var a, s = this.threeDElements[r].startPos; s < e;) this.elements[s] && this.elements[s].getBaseElement && (a = this.elements[s].getBaseElement()), s += 1;
                            a ? this.threeDElements[r].container.insertBefore(t, a) : this.threeDElements[r].container.appendChild(t);
                            break
                        }
                        r += 1
                    }
                }, HybridRendererBase.prototype.configAnimation = function(t) {
                    var e = createTag("div"),
                        r = this.animationItem.wrapper,
                        i = e.style;
                    i.width = t.w + "px", i.height = t.h + "px", this.resizerElem = e, styleDiv(e), i.transformStyle = "flat", i.mozTransformStyle = "flat", i.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), r.appendChild(e), i.overflow = "hidden";
                    var s = createNS("svg");
                    s.setAttribute("width", "1"), s.setAttribute("height", "1"), styleDiv(s), this.resizerElem.appendChild(s);
                    var a = createNS("defs");
                    s.appendChild(a), this.data = t, this.setupGlobalData(t, s), this.globalData.defs = a, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
                }, HybridRendererBase.prototype.destroy = function() {
                    this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
                    var t, e = this.layers ? this.layers.length : 0;
                    for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
                    this.elements.length = 0, this.destroyed = !0, this.animationItem = null
                }, HybridRendererBase.prototype.updateContainerSize = function() {
                    var s, a, n, h, t = this.animationItem.wrapper.offsetWidth,
                        e = this.animationItem.wrapper.offsetHeight;
                    this.globalData.compSize.w / this.globalData.compSize.h > t / e ? (s = t / this.globalData.compSize.w, a = t / this.globalData.compSize.w, n = 0, h = (e - this.globalData.compSize.h * (t / this.globalData.compSize.w)) / 2) : (s = e / this.globalData.compSize.h, a = e / this.globalData.compSize.h, n = (t - this.globalData.compSize.w * (e / this.globalData.compSize.h)) / 2, h = 0);
                    var o = this.resizerElem.style;
                    o.webkitTransform = "matrix3d(" + s + ",0,0,0,0," + a + ",0,0,0,0,1,0," + n + "," + h + ",0,1)", o.transform = o.webkitTransform
                }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
                    this.resizerElem.style.display = "none"
                }, HybridRendererBase.prototype.show = function() {
                    this.resizerElem.style.display = "block"
                }, HybridRendererBase.prototype.initItems = function() {
                    if (this.buildAllItems(), this.camera) this.camera.setup();
                    else {
                        var r, t = this.globalData.compSize.w,
                            e = this.globalData.compSize.h,
                            i = this.threeDElements.length;
                        for (r = 0; r < i; r += 1) {
                            var s = this.threeDElements[r].perspectiveElem.style;
                            s.webkitPerspective = Math.sqrt(Math.pow(t, 2) + Math.pow(e, 2)) + "px", s.perspective = s.webkitPerspective
                        }
                    }
                }, HybridRendererBase.prototype.searchExtraCompositions = function(t) {
                    var e, r = t.length,
                        i = createTag("div");
                    for (e = 0; e < r; e += 1)
                        if (t[e].xt) {
                            var s = this.createComp(t[e], i, this.globalData.comp, null);
                            s.initExpressions(), this.globalData.projectInterface.registerComposition(s)
                        }
                }, extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
                    this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
                }, HCompElement.prototype.addTo3dContainer = function(t, e) {
                    for (var i, r = 0; r < e;) this.elements[r] && this.elements[r].getBaseElement && (i = this.elements[r].getBaseElement()), r += 1;
                    i ? this.layerElement.insertBefore(t, i) : this.layerElement.appendChild(t)
                }, HCompElement.prototype.createComp = function(t) {
                    return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
                }, extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function(t) {
                    return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
                };
                var CompExpressionInterface = function(t) {
                    function e(r) {
                        for (var i = 0, s = t.layers.length; i < s;) {
                            if (t.layers[i].nm === r || t.layers[i].ind === r) return t.elements[i].layerInterface;
                            i += 1
                        }
                        return null
                    }
                    return Object.defineProperty(e, "_name", {
                        value: t.data.nm
                    }), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e
                };

                function _typeof$2(t) {
                    return (_typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(r) {
                        return typeof r
                    } : function(r) {
                        return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
                    })(t)
                }

                function seedRandom(t, e) {
                    var S, r = this,
                        i = 256,
                        n = "random",
                        h = e.pow(i, 6),
                        o = e.pow(2, 52),
                        f = 2 * o,
                        v = 255;

                    function b(l) {
                        var d, E = l.length,
                            _ = this,
                            T = 0,
                            M = _.i = _.j = 0,
                            w = _.S = [];
                        for (E || (l = [E++]); T < i;) w[T] = T++;
                        for (T = 0; T < i; T++) w[T] = w[M = v & M + l[T % E] + (d = w[T])], w[M] = d;
                        _.g = function(G) {
                            for (var L, V = 0, D = _.i, B = _.j, I = _.S; G--;) L = I[D = v & D + 1], V = V * i + I[v & (I[D] = I[B = v & B + L]) + (I[B] = L)];
                            return _.i = D, _.j = B, V
                        }
                    }

                    function g(l, d) {
                        return d.i = l.i, d.j = l.j, d.S = l.S.slice(), d
                    }

                    function m(l, d) {
                        var T, E = [],
                            _ = _typeof$2(l);
                        if (d && "object" == _)
                            for (T in l) try {
                                E.push(m(l[T], d - 1))
                            } catch {}
                        return E.length ? E : "string" == _ ? l : l + "\0"
                    }

                    function C(l, d) {
                        for (var _, E = l + "", T = 0; T < E.length;) d[v & T] = v & (_ ^= 19 * d[v & T]) + E.charCodeAt(T++);
                        return u(d)
                    }

                    function u(l) {
                        return String.fromCharCode.apply(0, l)
                    }
                    e["seed" + n] = function p(l, d, E) {
                        var _ = [],
                            T = C(m((d = !0 === d ? {
                                entropy: !0
                            } : d || {}).entropy ? [l, u(t)] : null === l ? function c() {
                                try {
                                    S;
                                    var l = new Uint8Array(i);
                                    return (r.crypto || r.msCrypto).getRandomValues(l), u(l)
                                } catch {
                                    var d = r.navigator,
                                        E = d && d.plugins;
                                    return [+new Date, r, E, r.screen, u(t)]
                                }
                            }() : l, 3), _),
                            M = new b(_),
                            w = function() {
                                for (var L = M.g(6), V = h, D = 0; L < o;) L = (L + D) * i, V *= i, D = M.g(1);
                                for (; L >= f;) L /= 2, V /= 2, D >>>= 1;
                                return (L + D) / V
                            };
                        return w.int32 = function() {
                            return 0 | M.g(4)
                        }, w.quick = function() {
                            return M.g(4) / 4294967296
                        }, w.double = w, C(u(M.S), t), (d.pass || E || function(G, L, V, D) {
                            return D && (D.S && g(D, M), G.state = function() {
                                return g(M, {})
                            }), V ? (e[n] = G, L) : G
                        })(w, T, "global" in d ? d.global : this == e, d.state)
                    }, C(e.random(), t)
                }

                function initialize$2(t) {
                    seedRandom([], t)
                }
                var propTypes = {
                    SHAPE: "shape"
                };

                function _typeof$1(t) {
                    return (_typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(r) {
                        return typeof r
                    } : function(r) {
                        return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
                    })(t)
                }
                var ExpressionManager = function() {
                        var ob = {},
                            Math = BMMath,
                            window = null,
                            document = null,
                            XMLHttpRequest = null,
                            fetch = null,
                            frames = null,
                            _lottieGlobal = {};

                        function resetFrame() {
                            _lottieGlobal = {}
                        }

                        function $bm_isInstanceOfArray(t) {
                            return t.constructor === Array || t.constructor === Float32Array
                        }

                        function isNumerable(t, e) {
                            return "number" === t || e instanceof Number || "boolean" === t || "string" === t
                        }

                        function $bm_neg(t) {
                            var e = _typeof$1(t);
                            if ("number" === e || t instanceof Number || "boolean" === e) return -t;
                            if ($bm_isInstanceOfArray(t)) {
                                var r, i = t.length,
                                    s = [];
                                for (r = 0; r < i; r += 1) s[r] = -t[r];
                                return s
                            }
                            return t.propType ? t.v : -t
                        }
                        initialize$2(BMMath);
                        var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
                            easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
                            easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

                        function sum(t, e) {
                            var r = _typeof$1(t),
                                i = _typeof$1(e);
                            if (isNumerable(r, t) && isNumerable(i, e) || "string" === r || "string" === i) return t + e;
                            if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return (t = t.slice(0))[0] += e, t;
                            if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t + e[0], e;
                            if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                                for (var s = 0, a = t.length, n = e.length, h = []; s < a || s < n;) h[s] = ("number" == typeof t[s] || t[s] instanceof Number) && ("number" == typeof e[s] || e[s] instanceof Number) ? t[s] + e[s] : void 0 === e[s] ? t[s] : t[s] || e[s], s += 1;
                                return h
                            }
                            return 0
                        }
                        var add = sum;

                        function sub(t, e) {
                            var r = _typeof$1(t),
                                i = _typeof$1(e);
                            if (isNumerable(r, t) && isNumerable(i, e)) return "string" === r && (t = parseInt(t, 10)), "string" === i && (e = parseInt(e, 10)), t - e;
                            if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return (t = t.slice(0))[0] -= e, t;
                            if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t - e[0], e;
                            if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                                for (var s = 0, a = t.length, n = e.length, h = []; s < a || s < n;) h[s] = ("number" == typeof t[s] || t[s] instanceof Number) && ("number" == typeof e[s] || e[s] instanceof Number) ? t[s] - e[s] : void 0 === e[s] ? t[s] : t[s] || e[s], s += 1;
                                return h
                            }
                            return 0
                        }

                        function mul(t, e) {
                            var s, a, n, r = _typeof$1(t),
                                i = _typeof$1(e);
                            if (isNumerable(r, t) && isNumerable(i, e)) return t * e;
                            if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) {
                                for (s = createTypedArray("float32", n = t.length), a = 0; a < n; a += 1) s[a] = t[a] * e;
                                return s
                            }
                            if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) {
                                for (s = createTypedArray("float32", n = e.length), a = 0; a < n; a += 1) s[a] = t * e[a];
                                return s
                            }
                            return 0
                        }

                        function div(t, e) {
                            var s, a, n, r = _typeof$1(t),
                                i = _typeof$1(e);
                            if (isNumerable(r, t) && isNumerable(i, e)) return t / e;
                            if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) {
                                for (s = createTypedArray("float32", n = t.length), a = 0; a < n; a += 1) s[a] = t[a] / e;
                                return s
                            }
                            if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) {
                                for (s = createTypedArray("float32", n = e.length), a = 0; a < n; a += 1) s[a] = t / e[a];
                                return s
                            }
                            return 0
                        }

                        function mod(t, e) {
                            return "string" == typeof t && (t = parseInt(t, 10)), "string" == typeof e && (e = parseInt(e, 10)), t % e
                        }
                        var $bm_sum = sum,
                            $bm_sub = sub,
                            $bm_mul = mul,
                            $bm_div = div,
                            $bm_mod = mod;

                        function clamp(t, e, r) {
                            if (e > r) {
                                var i = r;
                                r = e, e = i
                            }
                            return Math.min(Math.max(t, e), r)
                        }

                        function radiansToDegrees(t) {
                            return t / degToRads
                        }
                        var radians_to_degrees = radiansToDegrees;

                        function degreesToRadians(t) {
                            return t * degToRads
                        }
                        var degrees_to_radians = radiansToDegrees,
                            helperLengthArray = [0, 0, 0, 0, 0, 0];

                        function length(t, e) {
                            if ("number" == typeof t || t instanceof Number) return Math.abs(t - (e = e || 0));
                            e || (e = helperLengthArray);
                            var r, i = Math.min(t.length, e.length),
                                s = 0;
                            for (r = 0; r < i; r += 1) s += Math.pow(e[r] - t[r], 2);
                            return Math.sqrt(s)
                        }

                        function normalize(t) {
                            return div(t, length(t))
                        }

                        function rgbToHsl(t) {
                            var n, h, e = t[0],
                                r = t[1],
                                i = t[2],
                                s = Math.max(e, r, i),
                                a = Math.min(e, r, i),
                                o = (s + a) / 2;
                            if (s === a) n = 0, h = 0;
                            else {
                                var f = s - a;
                                switch (h = o > .5 ? f / (2 - s - a) : f / (s + a), s) {
                                    case e:
                                        n = (r - i) / f + (r < i ? 6 : 0);
                                        break;
                                    case r:
                                        n = (i - e) / f + 2;
                                        break;
                                    case i:
                                        n = (e - r) / f + 4
                                }
                                n /= 6
                            }
                            return [n, h, o, t[3]]
                        }

                        function hue2rgb(t, e, r) {
                            return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + 6 * (e - t) * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
                        }

                        function hslToRgb(t) {
                            var s, a, n, e = t[0],
                                r = t[1],
                                i = t[2];
                            if (0 === r) s = i, n = i, a = i;
                            else {
                                var h = i < .5 ? i * (1 + r) : i + r - i * r,
                                    o = 2 * i - h;
                                s = hue2rgb(o, h, e + 1 / 3), a = hue2rgb(o, h, e), n = hue2rgb(o, h, e - 1 / 3)
                            }
                            return [s, a, n, t[3]]
                        }

                        function linear(t, e, r, i, s) {
                            if ((void 0 === i || void 0 === s) && (i = e, s = r, e = 0, r = 1), r < e) {
                                var a = r;
                                r = e, e = a
                            }
                            if (t <= e) return i;
                            if (t >= r) return s;
                            var n = r === e ? 0 : (t - e) / (r - e);
                            if (!i.length) return i + (s - i) * n;
                            var h, o = i.length,
                                f = createTypedArray("float32", o);
                            for (h = 0; h < o; h += 1) f[h] = i[h] + (s[h] - i[h]) * n;
                            return f
                        }

                        function random(t, e) {
                            if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                                var r, i = e.length;
                                t || (t = createTypedArray("float32", i));
                                var s = createTypedArray("float32", i),
                                    a = BMMath.random();
                                for (r = 0; r < i; r += 1) s[r] = t[r] + a * (e[r] - t[r]);
                                return s
                            }
                            return void 0 === t && (t = 0), t + BMMath.random() * (e - t)
                        }

                        function createPath(t, e, r, i) {
                            var s, a = t.length,
                                n = shapePool.newElement();
                            n.setPathData(!!i, a);
                            var o, f, h = [0, 0];
                            for (s = 0; s < a; s += 1) n.setTripleAt(t[s][0], t[s][1], (f = r && r[s] ? r[s] : h)[0] + t[s][0], f[1] + t[s][1], (o = e && e[s] ? e[s] : h)[0] + t[s][0], o[1] + t[s][1], s, !0);
                            return n
                        }

                        function initiateExpression(elem, data, property) {
                            function noOp(t) {
                                return t
                            }
                            if (!elem.globalData.renderConfig.runExpressions) return noOp;
                            var val = data.x,
                                needsVelocity = /velocity(?![\w\d])/.test(val),
                                _needsRandom = -1 !== val.indexOf("random"),
                                elemType = elem.data.ty,
                                transform, $bm_transform, content, effect, thisProperty = property;
                            thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                                get: function() {
                                    return thisProperty.v
                                }
                            }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
                            var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                                outPoint = elem.data.op / elem.comp.globalData.frameRate,
                                width = elem.data.sw ? elem.data.sw : 0,
                                height = elem.data.sh ? elem.data.sh : 0,
                                name = elem.data.nm,
                                loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                                numKeys = property.kf ? data.k.length : 0,
                                active = !this.data || !0 !== this.data.hd,
                                wiggle = function t(e, r) {
                                    var i, s, a = this.pv.length ? this.pv.length : 1,
                                        n = createTypedArray("float32", a),
                                        h = Math.floor(5 * time);
                                    for (i = 0, s = 0; i < h;) {
                                        for (s = 0; s < a; s += 1) n[s] += -r + 2 * r * BMMath.random();
                                        i += 1
                                    }
                                    var o = 5 * time,
                                        f = o - Math.floor(o),
                                        v = createTypedArray("float32", a);
                                    if (a > 1) {
                                        for (s = 0; s < a; s += 1) v[s] = this.pv[s] + n[s] + (-r + 2 * r * BMMath.random()) * f;
                                        return v
                                    }
                                    return this.pv + n[0] + (-r + 2 * r * BMMath.random()) * f
                                }.bind(this);

                            function loopInDuration(t, e) {
                                return loopIn(t, e, !0)
                            }

                            function loopOutDuration(t, e) {
                                return loopOut(t, e, !0)
                            }
                            thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                            var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface);

                            function lookAt(t, e) {
                                var r = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                                    i = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads;
                                return [-Math.atan2(r[1], r[2]) / degToRads, i, 0]
                            }

                            function easeOut(t, e, r, i, s) {
                                return applyEase(easeOutBez, t, e, r, i, s)
                            }

                            function easeIn(t, e, r, i, s) {
                                return applyEase(easeInBez, t, e, r, i, s)
                            }

                            function ease(t, e, r, i, s) {
                                return applyEase(easeInOutBez, t, e, r, i, s)
                            }

                            function applyEase(t, e, r, i, s, a) {
                                void 0 === s ? (s = r, a = i) : e = (e - r) / (i - r), e > 1 ? e = 1 : e < 0 && (e = 0);
                                var n = t(e);
                                if ($bm_isInstanceOfArray(s)) {
                                    var h, o = s.length,
                                        f = createTypedArray("float32", o);
                                    for (h = 0; h < o; h += 1) f[h] = (a[h] - s[h]) * n + s[h];
                                    return f
                                }
                                return (a - s) * n + s
                            }

                            function nearestKey(t) {
                                var e, i, s, r = data.k.length;
                                if (data.k.length && "number" != typeof data.k[0])
                                    if (i = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) i = 1, s = data.k[0].t;
                                    else {
                                        for (e = 0; e < r - 1; e += 1) {
                                            if (t === data.k[e].t) {
                                                i = e + 1, s = data.k[e].t;
                                                break
                                            }
                                            if (t > data.k[e].t && t < data.k[e + 1].t) {
                                                t - data.k[e].t > data.k[e + 1].t - t ? (i = e + 2, s = data.k[e + 1].t) : (i = e + 1, s = data.k[e].t);
                                                break
                                            }
                                        } - 1 === i && (i = e + 1, s = data.k[e].t)
                                    }
                                else i = 0, s = 0;
                                var a = {};
                                return a.index = i, a.time = s / elem.comp.globalData.frameRate, a
                            }

                            function key(t) {
                                var e, r, i;
                                if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + t);
                                e = {
                                    time: data.k[t -= 1].t / elem.comp.globalData.frameRate,
                                    value: []
                                };
                                var s = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
                                for (i = s.length, r = 0; r < i; r += 1) e[r] = s[r], e.value[r] = s[r];
                                return e
                            }

                            function framesToTime(t, e) {
                                return e || (e = elem.comp.globalData.frameRate), t / e
                            }

                            function timeToFrames(t, e) {
                                return !t && 0 !== t && (t = time), e || (e = elem.comp.globalData.frameRate), t * e
                            }

                            function seedRandom(t) {
                                BMMath.seedrandom(randSeed + t)
                            }

                            function sourceRectAtTime() {
                                return elem.sourceRectAtTime()
                            }

                            function substring(t, e) {
                                return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : ""
                            }

                            function substr(t, e) {
                                return "string" == typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : ""
                            }

                            function posterizeTime(t) {
                                time = 0 === t ? 0 : Math.floor(time * t) / t, value = valueAtTime(time)
                            }
                            var time, velocity, value, text, textIndex, textTotal, selectorValue, index = elem.data.ind,
                                hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                                parent, randSeed = Math.floor(1e6 * Math.random()),
                                globalData = elem.globalData;

                            function executeExpression(t) {
                                return value = t, this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisComp = elem.comp.compInterface, toWorld = (thisLayer = elem.layerInterface).toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), 4 === elemType && !content && (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt)
                            }
                            return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression
                        }
                        return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal], ob.resetFrame = resetFrame, ob
                    }(),
                    Expressions = function() {
                        var t = {
                            initExpressions: function e(r) {
                                var i = 0,
                                    s = [];
                                r.renderer.compInterface = CompExpressionInterface(r.renderer), r.renderer.globalData.projectInterface.registerComposition(r.renderer), r.renderer.globalData.pushExpression = function a() {
                                    i += 1
                                }, r.renderer.globalData.popExpression = function n() {
                                    0 == (i -= 1) && function o() {
                                        var f, v = s.length;
                                        for (f = 0; f < v; f += 1) s[f].release();
                                        s.length = 0
                                    }()
                                }, r.renderer.globalData.registerExpressionProperty = function h(f) {
                                    -1 === s.indexOf(f) && s.push(f)
                                }
                            }
                        };
                        return t.resetFrame = ExpressionManager.resetFrame, t
                    }(),
                    MaskManagerInterface = function() {
                        function t(r, i) {
                            this._mask = r, this._data = i
                        }
                        return Object.defineProperty(t.prototype, "maskPath", {
                                get: function() {
                                    return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                                }
                            }), Object.defineProperty(t.prototype, "maskOpacity", {
                                get: function() {
                                    return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
                                }
                            }),
                            function(i) {
                                var a, s = createSizedArray(i.viewData.length),
                                    n = i.viewData.length;
                                for (a = 0; a < n; a += 1) s[a] = new t(i.viewData[a], i.masksProperties[a]);
                                return function(f) {
                                    for (a = 0; a < n;) {
                                        if (i.masksProperties[a].nm === f) return s[a];
                                        a += 1
                                    }
                                    return null
                                }
                            }
                    }(),
                    ExpressionPropertyInterface = function() {
                        var t = {
                                pv: 0,
                                v: 0,
                                mult: 1
                            },
                            e = {
                                pv: [0, 0, 0],
                                v: [0, 0, 0],
                                mult: 1
                            };

                        function r(n, h, o) {
                            Object.defineProperty(n, "velocity", {
                                get: function() {
                                    return h.getVelocityAtTime(h.comp.currentFrame)
                                }
                            }), n.numKeys = h.keyframes ? h.keyframes.length : 0, n.key = function(f) {
                                if (!n.numKeys) return 0;
                                var v;
                                v = "s" in h.keyframes[f - 1] ? h.keyframes[f - 1].s : "e" in h.keyframes[f - 2] ? h.keyframes[f - 2].e : h.keyframes[f - 2].s;
                                var S = "unidimensional" === o ? new Number(v) : Object.assign({}, v);
                                return S.time = h.keyframes[f - 1].t / h.elem.comp.globalData.frameRate, S.value = "unidimensional" === o ? v[0] : v, S
                            }, n.valueAtTime = h.getValueAtTime, n.speedAtTime = h.getSpeedAtTime, n.velocityAtTime = h.getVelocityAtTime, n.propertyGroup = h.propertyGroup
                        }

                        function a() {
                            return t
                        }
                        return function(n) {
                            return n ? "unidimensional" === n.propType ? function i(n) {
                                (!n || !("pv" in n)) && (n = t);
                                var h = 1 / n.mult,
                                    o = n.pv * h,
                                    f = new Number(o);
                                return f.value = o, r(f, n, "unidimensional"),
                                    function() {
                                        return n.k && n.getValue(), f.value !== (o = n.v * h) && ((f = new Number(o)).value = o, r(f, n, "unidimensional")), f
                                    }
                            }(n) : function s(n) {
                                (!n || !("pv" in n)) && (n = e);
                                var h = 1 / n.mult,
                                    o = n.data && n.data.l || n.pv.length,
                                    f = createTypedArray("float32", o),
                                    v = createTypedArray("float32", o);
                                return f.value = v, r(f, n, "multidimensional"),
                                    function() {
                                        n.k && n.getValue();
                                        for (var S = 0; S < o; S += 1) v[S] = n.v[S] * h, f[S] = v[S];
                                        return f
                                    }
                            }(n) : a
                        }
                    }(),
                    TransformExpressionInterface = function(t) {
                        function e(n) {
                            switch (n) {
                                case "scale":
                                case "Scale":
                                case "ADBE Scale":
                                case 6:
                                    return e.scale;
                                case "rotation":
                                case "Rotation":
                                case "ADBE Rotation":
                                case "ADBE Rotate Z":
                                case 10:
                                    return e.rotation;
                                case "ADBE Rotate X":
                                    return e.xRotation;
                                case "ADBE Rotate Y":
                                    return e.yRotation;
                                case "position":
                                case "Position":
                                case "ADBE Position":
                                case 2:
                                    return e.position;
                                case "ADBE Position_0":
                                    return e.xPosition;
                                case "ADBE Position_1":
                                    return e.yPosition;
                                case "ADBE Position_2":
                                    return e.zPosition;
                                case "anchorPoint":
                                case "AnchorPoint":
                                case "Anchor Point":
                                case "ADBE AnchorPoint":
                                case 1:
                                    return e.anchorPoint;
                                case "opacity":
                                case "Opacity":
                                case 11:
                                    return e.opacity;
                                default:
                                    return null
                            }
                        }
                        var r, i, s, a;
                        return Object.defineProperty(e, "rotation", {
                            get: ExpressionPropertyInterface(t.r || t.rz)
                        }), Object.defineProperty(e, "zRotation", {
                            get: ExpressionPropertyInterface(t.rz || t.r)
                        }), Object.defineProperty(e, "xRotation", {
                            get: ExpressionPropertyInterface(t.rx)
                        }), Object.defineProperty(e, "yRotation", {
                            get: ExpressionPropertyInterface(t.ry)
                        }), Object.defineProperty(e, "scale", {
                            get: ExpressionPropertyInterface(t.s)
                        }), t.p ? a = ExpressionPropertyInterface(t.p) : (r = ExpressionPropertyInterface(t.px), i = ExpressionPropertyInterface(t.py), t.pz && (s = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", {
                            get: function() {
                                return t.p ? a() : [r(), i(), s ? s() : 0]
                            }
                        }), Object.defineProperty(e, "xPosition", {
                            get: ExpressionPropertyInterface(t.px)
                        }), Object.defineProperty(e, "yPosition", {
                            get: ExpressionPropertyInterface(t.py)
                        }), Object.defineProperty(e, "zPosition", {
                            get: ExpressionPropertyInterface(t.pz)
                        }), Object.defineProperty(e, "anchorPoint", {
                            get: ExpressionPropertyInterface(t.a)
                        }), Object.defineProperty(e, "opacity", {
                            get: ExpressionPropertyInterface(t.o)
                        }), Object.defineProperty(e, "skew", {
                            get: ExpressionPropertyInterface(t.sk)
                        }), Object.defineProperty(e, "skewAxis", {
                            get: ExpressionPropertyInterface(t.sa)
                        }), Object.defineProperty(e, "orientation", {
                            get: ExpressionPropertyInterface(t.or)
                        }), e
                    },
                    LayerExpressionInterface = function() {
                        function t(f) {
                            var v = new Matrix;
                            return void 0 !== f ? this._elem.finalTransform.mProp.getValueAtTime(f).clone(v) : this._elem.finalTransform.mProp.applyToMatrix(v), v
                        }

                        function e(f, v) {
                            var S = this.getMatrix(v);
                            return S.props[12] = 0, S.props[13] = 0, S.props[14] = 0, this.applyPoint(S, f)
                        }

                        function r(f, v) {
                            var S = this.getMatrix(v);
                            return this.applyPoint(S, f)
                        }

                        function i(f, v) {
                            var S = this.getMatrix(v);
                            return S.props[12] = 0, S.props[13] = 0, S.props[14] = 0, this.invertPoint(S, f)
                        }

                        function s(f, v) {
                            var S = this.getMatrix(v);
                            return this.invertPoint(S, f)
                        }

                        function a(f, v) {
                            if (this._elem.hierarchy && this._elem.hierarchy.length) {
                                var S, p = this._elem.hierarchy.length;
                                for (S = 0; S < p; S += 1) this._elem.hierarchy[S].finalTransform.mProp.applyToMatrix(f)
                            }
                            return f.applyToPointArray(v[0], v[1], v[2] || 0)
                        }

                        function n(f, v) {
                            if (this._elem.hierarchy && this._elem.hierarchy.length) {
                                var S, p = this._elem.hierarchy.length;
                                for (S = 0; S < p; S += 1) this._elem.hierarchy[S].finalTransform.mProp.applyToMatrix(f)
                            }
                            return f.inversePoint(v)
                        }

                        function h(f) {
                            var v = new Matrix;
                            if (v.reset(), this._elem.finalTransform.mProp.applyToMatrix(v), this._elem.hierarchy && this._elem.hierarchy.length) {
                                var S, p = this._elem.hierarchy.length;
                                for (S = 0; S < p; S += 1) this._elem.hierarchy[S].finalTransform.mProp.applyToMatrix(v);
                                return v.inversePoint(f)
                            }
                            return v.inversePoint(f)
                        }

                        function o() {
                            return [1, 1, 1, 1]
                        }
                        return function(f) {
                            var v;

                            function b(m) {
                                switch (m) {
                                    case "ADBE Root Vectors Group":
                                    case "Contents":
                                    case 2:
                                        return b.shapeInterface;
                                    case 1:
                                    case 6:
                                    case "Transform":
                                    case "transform":
                                    case "ADBE Transform Group":
                                        return v;
                                    case 4:
                                    case "ADBE Effect Parade":
                                    case "effects":
                                    case "Effects":
                                        return b.effect;
                                    case "ADBE Text Properties":
                                        return b.textInterface;
                                    default:
                                        return null
                                }
                            }
                            b.getMatrix = t, b.invertPoint = n, b.applyPoint = a, b.toWorld = r, b.toWorldVec = e, b.fromWorld = s, b.fromWorldVec = i, b.toComp = r, b.fromComp = h, b.sampleImage = o, b.sourceRectAtTime = f.sourceRectAtTime.bind(f), b._elem = f;
                            var g = getDescriptor(v = TransformExpressionInterface(f.finalTransform.mProp), "anchorPoint");
                            return Object.defineProperties(b, {
                                hasParent: {
                                    get: function() {
                                        return f.hierarchy.length
                                    }
                                },
                                parent: {
                                    get: function() {
                                        return f.hierarchy[0].layerInterface
                                    }
                                },
                                rotation: getDescriptor(v, "rotation"),
                                scale: getDescriptor(v, "scale"),
                                position: getDescriptor(v, "position"),
                                opacity: getDescriptor(v, "opacity"),
                                anchorPoint: g,
                                anchor_point: g,
                                transform: {
                                    get: function() {
                                        return v
                                    }
                                },
                                active: {
                                    get: function() {
                                        return f.isInRange
                                    }
                                }
                            }), b.startTime = f.data.st, b.index = f.data.ind, b.source = f.data.refId, b.height = 0 === f.data.ty ? f.data.h : 100, b.width = 0 === f.data.ty ? f.data.w : 100, b.inPoint = f.data.ip / f.comp.globalData.frameRate, b.outPoint = f.data.op / f.comp.globalData.frameRate, b._name = f.data.nm, b.registerMaskInterface = function S(m) {
                                b.mask = new MaskManagerInterface(m, f)
                            }, b.registerEffectsInterface = function p(m) {
                                b.effect = m
                            }, b
                        }
                    }(),
                    propertyGroupFactory = function(t, e) {
                        return function(r) {
                            return (r = void 0 === r ? 1 : r) <= 0 ? t : e(r - 1)
                        }
                    },
                    PropertyInterface = function(t, e) {
                        var r = {
                            _name: t
                        };
                        return function i(s) {
                            return (s = void 0 === s ? 1 : s) <= 0 ? r : e(s - 1)
                        }
                    },
                    EffectsExpressionInterface = function() {
                        function r(s, a, n, h) {
                            function o(b) {
                                for (var g = s.ef, m = 0, C = g.length; m < C;) {
                                    if (b === g[m].nm || b === g[m].mn || b === g[m].ix) return 5 === g[m].ty ? v[m] : v[m]();
                                    m += 1
                                }
                                throw new Error
                            }
                            var S, f = propertyGroupFactory(o, n),
                                v = [],
                                p = s.ef.length;
                            for (S = 0; S < p; S += 1) v.push(5 === s.ef[S].ty ? r(s.ef[S], a.effectElements[S], a.effectElements[S].propertyGroup, h) : i(a.effectElements[S], s.ef[S].ty, h, f));
                            return "ADBE Color Control" === s.mn && Object.defineProperty(o, "color", {
                                get: function() {
                                    return v[0]()
                                }
                            }), Object.defineProperties(o, {
                                numProperties: {
                                    get: function() {
                                        return s.np
                                    }
                                },
                                _name: {
                                    value: s.nm
                                },
                                propertyGroup: {
                                    value: f
                                }
                            }), o.active = o.enabled = 0 !== s.en, o
                        }

                        function i(s, a, n, h) {
                            var o = ExpressionPropertyInterface(s.p);
                            return s.p.setGroupProperty && s.p.setGroupProperty(PropertyInterface("", h)),
                                function f() {
                                    return 10 === a ? n.comp.compInterface(s.p.v) : o()
                                }
                        }
                        return {
                            createEffectsInterface: function e(s, a) {
                                if (s.effectsManager) {
                                    var o, n = [],
                                        h = s.data.ef,
                                        f = s.effectsManager.effectElements.length;
                                    for (o = 0; o < f; o += 1) n.push(r(h[o], s.effectsManager.effectElements[o], a, s));
                                    var v = s.data.ef || [],
                                        S = function(b) {
                                            for (o = 0, f = v.length; o < f;) {
                                                if (b === v[o].nm || b === v[o].mn || b === v[o].ix) return n[o];
                                                o += 1
                                            }
                                            return null
                                        };
                                    return Object.defineProperty(S, "numProperties", {
                                        get: function() {
                                            return v.length
                                        }
                                    }), S
                                }
                                return null
                            }
                        }
                    }(),
                    ShapePathInterface = function(e, r, i) {
                        var s = r.sh;

                        function a(h) {
                            return "Shape" === h || "shape" === h || "Path" === h || "path" === h || "ADBE Vector Shape" === h || 2 === h ? a.path : null
                        }
                        var n = propertyGroupFactory(a, i);
                        return s.setGroupProperty(PropertyInterface("Path", n)), Object.defineProperties(a, {
                            path: {
                                get: function() {
                                    return s.k && s.getValue(), s
                                }
                            },
                            shape: {
                                get: function() {
                                    return s.k && s.getValue(), s
                                }
                            },
                            _name: {
                                value: e.nm
                            },
                            ix: {
                                value: e.ix
                            },
                            propertyIndex: {
                                value: e.ix
                            },
                            mn: {
                                value: e.mn
                            },
                            propertyGroup: {
                                value: i
                            }
                        }), a
                    },
                    ShapeExpressionInterface = function() {
                        function t(g, m, C) {
                            var u, c = [],
                                l = g ? g.length : 0;
                            for (u = 0; u < l; u += 1) "gr" === g[u].ty ? c.push(r(g[u], m[u], C)) : "fl" === g[u].ty ? c.push(i(g[u], m[u], C)) : "st" === g[u].ty ? c.push(n(g[u], m[u], C)) : "tm" === g[u].ty ? c.push(h(g[u], m[u], C)) : "tr" === g[u].ty || c.push("el" === g[u].ty ? f(g[u], m[u], C) : "sr" === g[u].ty ? v(g[u], m[u], C) : "sh" === g[u].ty ? ShapePathInterface(g[u], m[u], C) : "rc" === g[u].ty ? S(g[u], m[u], C) : "rd" === g[u].ty ? p(g[u], m[u], C) : "rp" === g[u].ty ? b(g[u], m[u], C) : "gf" === g[u].ty ? s(g[u], m[u], C) : function g() {
                                return null
                            });
                            return c
                        }

                        function r(g, m, C) {
                            var c = function(E) {
                                switch (E) {
                                    case "ADBE Vectors Group":
                                    case "Contents":
                                    case 2:
                                        return c.content;
                                    default:
                                        return c.transform
                                }
                            };
                            c.propertyGroup = propertyGroupFactory(c, C);
                            var u = function e(g, m, C) {
                                    var c, u = function(E) {
                                        for (var _ = 0, T = c.length; _ < T;) {
                                            if (c[_]._name === E || c[_].mn === E || c[_].propertyIndex === E || c[_].ix === E || c[_].ind === E) return c[_];
                                            _ += 1
                                        }
                                        return "number" == typeof E ? c[E - 1] : null
                                    };
                                    u.propertyGroup = propertyGroupFactory(u, C), c = t(g.it, m.it, u.propertyGroup), u.numProperties = c.length;
                                    var l = o(g.it[g.it.length - 1], m.it[m.it.length - 1], u.propertyGroup);
                                    return u.transform = l, u.propertyIndex = g.cix, u._name = g.nm, u
                                }(g, m, c.propertyGroup),
                                l = o(g.it[g.it.length - 1], m.it[m.it.length - 1], c.propertyGroup);
                            return c.content = u, c.transform = l, Object.defineProperty(c, "_name", {
                                get: function() {
                                    return g.nm
                                }
                            }), c.numProperties = g.np, c.propertyIndex = g.ix, c.nm = g.nm, c.mn = g.mn, c
                        }

                        function i(g, m, C) {
                            function c(u) {
                                return "Color" === u || "color" === u ? c.color : "Opacity" === u || "opacity" === u ? c.opacity : null
                            }
                            return Object.defineProperties(c, {
                                color: {
                                    get: ExpressionPropertyInterface(m.c)
                                },
                                opacity: {
                                    get: ExpressionPropertyInterface(m.o)
                                },
                                _name: {
                                    value: g.nm
                                },
                                mn: {
                                    value: g.mn
                                }
                            }), m.c.setGroupProperty(PropertyInterface("Color", C)), m.o.setGroupProperty(PropertyInterface("Opacity", C)), c
                        }

                        function s(g, m, C) {
                            function c(u) {
                                return "Start Point" === u || "start point" === u ? c.startPoint : "End Point" === u || "end point" === u ? c.endPoint : "Opacity" === u || "opacity" === u ? c.opacity : null
                            }
                            return Object.defineProperties(c, {
                                startPoint: {
                                    get: ExpressionPropertyInterface(m.s)
                                },
                                endPoint: {
                                    get: ExpressionPropertyInterface(m.e)
                                },
                                opacity: {
                                    get: ExpressionPropertyInterface(m.o)
                                },
                                type: {
                                    get: function() {
                                        return "a"
                                    }
                                },
                                _name: {
                                    value: g.nm
                                },
                                mn: {
                                    value: g.mn
                                }
                            }), m.s.setGroupProperty(PropertyInterface("Start Point", C)), m.e.setGroupProperty(PropertyInterface("End Point", C)), m.o.setGroupProperty(PropertyInterface("Opacity", C)), c
                        }

                        function n(g, m, C) {
                            var d, M, c = propertyGroupFactory(T, C),
                                u = propertyGroupFactory(_, c),
                                E = g.d ? g.d.length : 0,
                                _ = {};
                            for (d = 0; d < E; d += 1) M = d, Object.defineProperty(_, g.d[M].nm, {
                                get: ExpressionPropertyInterface(m.d.dataProps[M].p)
                            }), m.d.dataProps[d].p.setGroupProperty(u);

                            function T(M) {
                                return "Color" === M || "color" === M ? T.color : "Opacity" === M || "opacity" === M ? T.opacity : "Stroke Width" === M || "stroke width" === M ? T.strokeWidth : null
                            }
                            return Object.defineProperties(T, {
                                color: {
                                    get: ExpressionPropertyInterface(m.c)
                                },
                                opacity: {
                                    get: ExpressionPropertyInterface(m.o)
                                },
                                strokeWidth: {
                                    get: ExpressionPropertyInterface(m.w)
                                },
                                dash: {
                                    get: function() {
                                        return _
                                    }
                                },
                                _name: {
                                    value: g.nm
                                },
                                mn: {
                                    value: g.mn
                                }
                            }), m.c.setGroupProperty(PropertyInterface("Color", c)), m.o.setGroupProperty(PropertyInterface("Opacity", c)), m.w.setGroupProperty(PropertyInterface("Stroke Width", c)), T
                        }

                        function h(g, m, C) {
                            function c(l) {
                                return l === g.e.ix || "End" === l || "end" === l ? c.end : l === g.s.ix ? c.start : l === g.o.ix ? c.offset : null
                            }
                            var u = propertyGroupFactory(c, C);
                            return c.propertyIndex = g.ix, m.s.setGroupProperty(PropertyInterface("Start", u)), m.e.setGroupProperty(PropertyInterface("End", u)), m.o.setGroupProperty(PropertyInterface("Offset", u)), c.propertyIndex = g.ix, c.propertyGroup = C, Object.defineProperties(c, {
                                start: {
                                    get: ExpressionPropertyInterface(m.s)
                                },
                                end: {
                                    get: ExpressionPropertyInterface(m.e)
                                },
                                offset: {
                                    get: ExpressionPropertyInterface(m.o)
                                },
                                _name: {
                                    value: g.nm
                                }
                            }), c.mn = g.mn, c
                        }

                        function o(g, m, C) {
                            function c(l) {
                                return g.a.ix === l || "Anchor Point" === l ? c.anchorPoint : g.o.ix === l || "Opacity" === l ? c.opacity : g.p.ix === l || "Position" === l ? c.position : g.r.ix === l || "Rotation" === l || "ADBE Vector Rotation" === l ? c.rotation : g.s.ix === l || "Scale" === l ? c.scale : g.sk && g.sk.ix === l || "Skew" === l ? c.skew : g.sa && g.sa.ix === l || "Skew Axis" === l ? c.skewAxis : null
                            }
                            var u = propertyGroupFactory(c, C);
                            return m.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", u)), m.transform.mProps.p.setGroupProperty(PropertyInterface("Position", u)), m.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", u)), m.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", u)), m.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", u)), m.transform.mProps.sk && (m.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", u)), m.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", u))), m.transform.op.setGroupProperty(PropertyInterface("Opacity", u)), Object.defineProperties(c, {
                                opacity: {
                                    get: ExpressionPropertyInterface(m.transform.mProps.o)
                                },
                                position: {
                                    get: ExpressionPropertyInterface(m.transform.mProps.p)
                                },
                                anchorPoint: {
                                    get: ExpressionPropertyInterface(m.transform.mProps.a)
                                },
                                scale: {
                                    get: ExpressionPropertyInterface(m.transform.mProps.s)
                                },
                                rotation: {
                                    get: ExpressionPropertyInterface(m.transform.mProps.r)
                                },
                                skew: {
                                    get: ExpressionPropertyInterface(m.transform.mProps.sk)
                                },
                                skewAxis: {
                                    get: ExpressionPropertyInterface(m.transform.mProps.sa)
                                },
                                _name: {
                                    value: g.nm
                                }
                            }), c.ty = "tr", c.mn = g.mn, c.propertyGroup = C, c
                        }

                        function f(g, m, C) {
                            function c(d) {
                                return g.p.ix === d ? c.position : g.s.ix === d ? c.size : null
                            }
                            var u = propertyGroupFactory(c, C);
                            c.propertyIndex = g.ix;
                            var l = "tm" === m.sh.ty ? m.sh.prop : m.sh;
                            return l.s.setGroupProperty(PropertyInterface("Size", u)), l.p.setGroupProperty(PropertyInterface("Position", u)), Object.defineProperties(c, {
                                size: {
                                    get: ExpressionPropertyInterface(l.s)
                                },
                                position: {
                                    get: ExpressionPropertyInterface(l.p)
                                },
                                _name: {
                                    value: g.nm
                                }
                            }), c.mn = g.mn, c
                        }

                        function v(g, m, C) {
                            function c(d) {
                                return g.p.ix === d ? c.position : g.r.ix === d ? c.rotation : g.pt.ix === d ? c.points : g.or.ix === d || "ADBE Vector Star Outer Radius" === d ? c.outerRadius : g.os.ix === d ? c.outerRoundness : !g.ir || g.ir.ix !== d && "ADBE Vector Star Inner Radius" !== d ? g.is && g.is.ix === d ? c.innerRoundness : null : c.innerRadius
                            }
                            var u = propertyGroupFactory(c, C),
                                l = "tm" === m.sh.ty ? m.sh.prop : m.sh;
                            return c.propertyIndex = g.ix, l.or.setGroupProperty(PropertyInterface("Outer Radius", u)), l.os.setGroupProperty(PropertyInterface("Outer Roundness", u)), l.pt.setGroupProperty(PropertyInterface("Points", u)), l.p.setGroupProperty(PropertyInterface("Position", u)), l.r.setGroupProperty(PropertyInterface("Rotation", u)), g.ir && (l.ir.setGroupProperty(PropertyInterface("Inner Radius", u)), l.is.setGroupProperty(PropertyInterface("Inner Roundness", u))), Object.defineProperties(c, {
                                position: {
                                    get: ExpressionPropertyInterface(l.p)
                                },
                                rotation: {
                                    get: ExpressionPropertyInterface(l.r)
                                },
                                points: {
                                    get: ExpressionPropertyInterface(l.pt)
                                },
                                outerRadius: {
                                    get: ExpressionPropertyInterface(l.or)
                                },
                                outerRoundness: {
                                    get: ExpressionPropertyInterface(l.os)
                                },
                                innerRadius: {
                                    get: ExpressionPropertyInterface(l.ir)
                                },
                                innerRoundness: {
                                    get: ExpressionPropertyInterface(l.is)
                                },
                                _name: {
                                    value: g.nm
                                }
                            }), c.mn = g.mn, c
                        }

                        function S(g, m, C) {
                            function c(d) {
                                return g.p.ix === d ? c.position : g.r.ix === d ? c.roundness : g.s.ix === d || "Size" === d || "ADBE Vector Rect Size" === d ? c.size : null
                            }
                            var u = propertyGroupFactory(c, C),
                                l = "tm" === m.sh.ty ? m.sh.prop : m.sh;
                            return c.propertyIndex = g.ix, l.p.setGroupProperty(PropertyInterface("Position", u)), l.s.setGroupProperty(PropertyInterface("Size", u)), l.r.setGroupProperty(PropertyInterface("Rotation", u)), Object.defineProperties(c, {
                                position: {
                                    get: ExpressionPropertyInterface(l.p)
                                },
                                roundness: {
                                    get: ExpressionPropertyInterface(l.r)
                                },
                                size: {
                                    get: ExpressionPropertyInterface(l.s)
                                },
                                _name: {
                                    value: g.nm
                                }
                            }), c.mn = g.mn, c
                        }

                        function p(g, m, C) {
                            function c(d) {
                                return g.r.ix === d || "Round Corners 1" === d ? c.radius : null
                            }
                            var u = propertyGroupFactory(c, C),
                                l = m;
                            return c.propertyIndex = g.ix, l.rd.setGroupProperty(PropertyInterface("Radius", u)), Object.defineProperties(c, {
                                radius: {
                                    get: ExpressionPropertyInterface(l.rd)
                                },
                                _name: {
                                    value: g.nm
                                }
                            }), c.mn = g.mn, c
                        }

                        function b(g, m, C) {
                            function c(d) {
                                return g.c.ix === d || "Copies" === d ? c.copies : g.o.ix === d || "Offset" === d ? c.offset : null
                            }
                            var u = propertyGroupFactory(c, C),
                                l = m;
                            return c.propertyIndex = g.ix, l.c.setGroupProperty(PropertyInterface("Copies", u)), l.o.setGroupProperty(PropertyInterface("Offset", u)), Object.defineProperties(c, {
                                copies: {
                                    get: ExpressionPropertyInterface(l.c)
                                },
                                offset: {
                                    get: ExpressionPropertyInterface(l.o)
                                },
                                _name: {
                                    value: g.nm
                                }
                            }), c.mn = g.mn, c
                        }
                        return function(g, m, C) {
                            var c;

                            function u(d) {
                                if ("number" == typeof d) return 0 === (d = void 0 === d ? 1 : d) ? C : c[d - 1];
                                for (var E = 0, _ = c.length; E < _;) {
                                    if (c[E]._name === d) return c[E];
                                    E += 1
                                }
                                return null
                            }
                            return u.propertyGroup = propertyGroupFactory(u, function l() {
                                return C
                            }), c = t(g, m, u.propertyGroup), u.numProperties = c.length, u._name = "Contents", u
                        }
                    }(),
                    TextExpressionInterface = function(t) {
                        var e;

                        function r(i) {
                            return "ADBE Text Document" === i ? r.sourceText : null
                        }
                        return Object.defineProperty(r, "sourceText", {
                            get: function() {
                                t.textProperty.getValue();
                                var s = t.textProperty.currentData.t;
                                return (!e || s !== e.value) && ((e = new String(s)).value = s || new String(s), Object.defineProperty(e, "style", {
                                    get: function() {
                                        return {
                                            fillColor: t.textProperty.currentData.fc
                                        }
                                    }
                                })), e
                            }
                        }), r
                    };

                function _typeof(t) {
                    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(r) {
                        return typeof r
                    } : function(r) {
                        return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
                    })(t)
                }
                var FootageInterface = (e = function(i) {
                        function s(a) {
                            return "Outline" === a ? s.outlineInterface() : null
                        }
                        return s._name = "Outline", s.outlineInterface = function(i) {
                            var s = "",
                                a = i.getFootageData();

                            function h(o) {
                                if (a[o]) return s = o, "object" === _typeof(a = a[o]) ? h : a;
                                var f = o.indexOf(s);
                                if (-1 !== f) {
                                    var v = parseInt(o.substr(f + s.length), 10);
                                    return "object" === _typeof(a = a[v]) ? h : a
                                }
                                return ""
                            }
                            return function n() {
                                return s = "", a = i.getFootageData(), h
                            }
                        }(i), s
                    }, function(r) {
                        function i(s) {
                            return "Data" === s ? i.dataInterface : null
                        }
                        return i._name = "Data", i.dataInterface = e(r), i
                    }),
                    interfaces = {
                        layer: LayerExpressionInterface,
                        effects: EffectsExpressionInterface,
                        comp: CompExpressionInterface,
                        shape: ShapeExpressionInterface,
                        text: TextExpressionInterface,
                        footage: FootageInterface
                    },
                    e;

                function getInterface(t) {
                    return interfaces[t] || null
                }
                var expressionHelpers = {
                    searchExpressions: function t(n, h, o) {
                        h.x && (o.k = !0, o.x = !0, o.initiateExpression = ExpressionManager.initiateExpression, o.effectsSequence.push(o.initiateExpression(n, h, o).bind(o)))
                    },
                    getSpeedAtTime: function r(n) {
                        var o = this.getValueAtTime(n),
                            f = this.getValueAtTime(n + -.01),
                            v = 0;
                        if (o.length) {
                            var S;
                            for (S = 0; S < o.length; S += 1) v += Math.pow(f[S] - o[S], 2);
                            v = 100 * Math.sqrt(v)
                        } else v = 0;
                        return v
                    },
                    getVelocityAtTime: function i(n) {
                        if (void 0 !== this.vel) return this.vel;
                        var v, S, h = -.001,
                            o = this.getValueAtTime(n),
                            f = this.getValueAtTime(n + h);
                        if (o.length)
                            for (v = createTypedArray("float32", o.length), S = 0; S < o.length; S += 1) v[S] = (f[S] - o[S]) / h;
                        else v = (f - o) / h;
                        return v
                    },
                    getValueAtTime: function e(n) {
                        return n *= this.elem.globalData.frameRate, (n -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < n ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(n, this._cachingAtTime), this._cachingAtTime.lastFrame = n), this._cachingAtTime.value
                    },
                    getStaticValueAtTime: function s() {
                        return this.pv
                    },
                    setGroupProperty: function a(n) {
                        this.propertyGroup = n
                    }
                };

                function addPropertyDecorator() {
                    function t(p, b, g) {
                        if (!this.k || !this.keyframes) return this.pv;
                        p = p ? p.toLowerCase() : "";
                        var u, l, d, E, _, m = this.comp.renderedFrame,
                            C = this.keyframes,
                            c = C[C.length - 1].t;
                        if (m <= c) return this.pv;
                        if (g ? l = c - (u = b ? Math.abs(c - this.elem.comp.globalData.frameRate * b) : Math.max(0, c - this.elem.data.ip)) : ((!b || b > C.length - 1) && (b = C.length - 1), u = c - (l = C[C.length - 1 - b].t)), "pingpong" === p) {
                            if (Math.floor((m - l) / u) % 2 != 0) return this.getValueAtTime((u - (m - l) % u + l) / this.comp.globalData.frameRate, 0)
                        } else {
                            if ("offset" === p) {
                                var M = this.getValueAtTime(l / this.comp.globalData.frameRate, 0),
                                    w = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                                    G = this.getValueAtTime(((m - l) % u + l) / this.comp.globalData.frameRate, 0),
                                    L = Math.floor((m - l) / u);
                                if (this.pv.length) {
                                    for (E = (_ = new Array(M.length)).length, d = 0; d < E; d += 1) _[d] = (w[d] - M[d]) * L + G[d];
                                    return _
                                }
                                return (w - M) * L + G
                            }
                            if ("continue" === p) {
                                var V = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                                    D = this.getValueAtTime((c - .001) / this.comp.globalData.frameRate, 0);
                                if (this.pv.length) {
                                    for (E = (_ = new Array(V.length)).length, d = 0; d < E; d += 1) _[d] = V[d] + (m - c) / this.comp.globalData.frameRate * (V[d] - D[d]) / 5e-4;
                                    return _
                                }
                                return V + (m - c) / .001 * (V - D)
                            }
                        }
                        return this.getValueAtTime(((m - l) % u + l) / this.comp.globalData.frameRate, 0)
                    }

                    function e(p, b, g) {
                        if (!this.k) return this.pv;
                        p = p ? p.toLowerCase() : "";
                        var u, l, d, E, _, m = this.comp.renderedFrame,
                            C = this.keyframes,
                            c = C[0].t;
                        if (m >= c) return this.pv;
                        if (g ? l = c + (u = b ? Math.abs(this.elem.comp.globalData.frameRate * b) : Math.max(0, this.elem.data.op - c)) : ((!b || b > C.length - 1) && (b = C.length - 1), u = (l = C[b].t) - c), "pingpong" === p) {
                            if (Math.floor((c - m) / u) % 2 == 0) return this.getValueAtTime(((c - m) % u + c) / this.comp.globalData.frameRate, 0)
                        } else {
                            if ("offset" === p) {
                                var M = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                                    w = this.getValueAtTime(l / this.comp.globalData.frameRate, 0),
                                    G = this.getValueAtTime((u - (c - m) % u + c) / this.comp.globalData.frameRate, 0),
                                    L = Math.floor((c - m) / u) + 1;
                                if (this.pv.length) {
                                    for (E = (_ = new Array(M.length)).length, d = 0; d < E; d += 1) _[d] = G[d] - (w[d] - M[d]) * L;
                                    return _
                                }
                                return G - (w - M) * L
                            }
                            if ("continue" === p) {
                                var V = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                                    D = this.getValueAtTime((c + .001) / this.comp.globalData.frameRate, 0);
                                if (this.pv.length) {
                                    for (E = (_ = new Array(V.length)).length, d = 0; d < E; d += 1) _[d] = V[d] + (V[d] - D[d]) * (c - m) / .001;
                                    return _
                                }
                                return V + (V - D) * (c - m) / .001
                            }
                        }
                        return this.getValueAtTime((u - ((c - m) % u + c)) / this.comp.globalData.frameRate, 0)
                    }

                    function r(p, b) {
                        if (!this.k) return this.pv;
                        if (p = .5 * (p || .4), (b = Math.floor(b || 5)) <= 1) return this.pv;
                        var d, E, g = this.comp.renderedFrame / this.comp.globalData.frameRate,
                            m = g - p,
                            c = b > 1 ? (g + p - m) / (b - 1) : 1,
                            u = 0,
                            l = 0;
                        for (d = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; u < b;) {
                            if (E = this.getValueAtTime(m + u * c), this.pv.length)
                                for (l = 0; l < this.pv.length; l += 1) d[l] += E[l];
                            else d += E;
                            u += 1
                        }
                        if (this.pv.length)
                            for (l = 0; l < this.pv.length; l += 1) d[l] /= b;
                        else d /= b;
                        return d
                    }

                    function i(p) {
                        this._transformCachingAtTime || (this._transformCachingAtTime = {
                            v: new Matrix
                        });
                        var b = this._transformCachingAtTime.v;
                        if (b.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
                            var g = this.a.getValueAtTime(p);
                            b.translate(-g[0] * this.a.mult, -g[1] * this.a.mult, g[2] * this.a.mult)
                        }
                        if (this.appliedTransformations < 2) {
                            var m = this.s.getValueAtTime(p);
                            b.scale(m[0] * this.s.mult, m[1] * this.s.mult, m[2] * this.s.mult)
                        }
                        if (this.sk && this.appliedTransformations < 3) {
                            var C = this.sk.getValueAtTime(p),
                                c = this.sa.getValueAtTime(p);
                            b.skewFromAxis(-C * this.sk.mult, c * this.sa.mult)
                        }
                        if (this.r && this.appliedTransformations < 4) {
                            var u = this.r.getValueAtTime(p);
                            b.rotate(-u * this.r.mult)
                        } else if (!this.r && this.appliedTransformations < 4) {
                            var l = this.rz.getValueAtTime(p),
                                d = this.ry.getValueAtTime(p),
                                E = this.rx.getValueAtTime(p),
                                _ = this.or.getValueAtTime(p);
                            b.rotateZ(-l * this.rz.mult).rotateY(d * this.ry.mult).rotateX(E * this.rx.mult).rotateZ(-_[2] * this.or.mult).rotateY(_[1] * this.or.mult).rotateX(_[0] * this.or.mult)
                        }
                        if (this.data.p && this.data.p.s) {
                            var T = this.px.getValueAtTime(p),
                                M = this.py.getValueAtTime(p);
                            if (this.data.p.z) {
                                var w = this.pz.getValueAtTime(p);
                                b.translate(T * this.px.mult, M * this.py.mult, -w * this.pz.mult)
                            } else b.translate(T * this.px.mult, M * this.py.mult, 0)
                        } else {
                            var G = this.p.getValueAtTime(p);
                            b.translate(G[0] * this.p.mult, G[1] * this.p.mult, -G[2] * this.p.mult)
                        }
                        return b
                    }

                    function s() {
                        return this.v.clone(new Matrix)
                    }
                    var a = TransformPropertyFactory.getTransformProperty;
                    TransformPropertyFactory.getTransformProperty = function(p, b, g) {
                        var m = a(p, b, g);
                        return m.getValueAtTime = m.dynamicProperties.length ? i.bind(m) : s.bind(m), m.setGroupProperty = expressionHelpers.setGroupProperty, m
                    };
                    var n = PropertyFactory.getProp;
                    PropertyFactory.getProp = function(p, b, g, m, C) {
                        var c = n(p, b, g, m, C);
                        c.getValueAtTime = c.kf ? expressionHelpers.getValueAtTime.bind(c) : expressionHelpers.getStaticValueAtTime.bind(c), c.setGroupProperty = expressionHelpers.setGroupProperty, c.loopOut = t, c.loopIn = e, c.smooth = r, c.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(c), c.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(c), c.numKeys = 1 === b.a ? b.k.length : 0, c.propertyIndex = b.ix;
                        var u = 0;
                        return 0 !== g && (u = createTypedArray("float32", 1 === b.a ? b.k[0].s.length : b.k.length)), c._cachingAtTime = {
                            lastFrame: initialDefaultFrame,
                            lastIndex: 0,
                            value: u
                        }, expressionHelpers.searchExpressions(p, b, c), c.k && C.addDynamicProperty(c), c
                    };
                    var o = ShapePropertyFactory.getConstructorFunction(),
                        f = ShapePropertyFactory.getKeyframedConstructorFunction();

                    function v() {}
                    v.prototype = {
                        vertices: function(b, g) {
                            this.k && this.getValue();
                            var m = this.v;
                            void 0 !== g && (m = this.getValueAtTime(g, 0));
                            var C, c = m._length,
                                u = m[b],
                                l = m.v,
                                d = createSizedArray(c);
                            for (C = 0; C < c; C += 1) d[C] = "i" === b || "o" === b ? [u[C][0] - l[C][0], u[C][1] - l[C][1]] : [u[C][0], u[C][1]];
                            return d
                        },
                        points: function(b) {
                            return this.vertices("v", b)
                        },
                        inTangents: function(b) {
                            return this.vertices("i", b)
                        },
                        outTangents: function(b) {
                            return this.vertices("o", b)
                        },
                        isClosed: function() {
                            return this.v.c
                        },
                        pointOnPath: function(b, g) {
                            var m = this.v;
                            void 0 !== g && (m = this.getValueAtTime(g, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(m));
                            for (var _, C = this._segmentsLength, c = C.lengths, u = C.totalLength * b, l = 0, d = c.length, E = 0; l < d;) {
                                if (E + c[l].addedLength > u) {
                                    var M = m.c && l === d - 1 ? 0 : l + 1;
                                    _ = bez.getPointInSegment(m.v[l], m.v[M], m.o[l], m.i[M], (u - E) / c[l].addedLength, c[l]);
                                    break
                                }
                                E += c[l].addedLength, l += 1
                            }
                            return _ || (_ = m.c ? [m.v[0][0], m.v[0][1]] : [m.v[m._length - 1][0], m.v[m._length - 1][1]]), _
                        },
                        vectorOnPath: function(b, g, m) {
                            1 == b ? b = this.v.c : 0 == b && (b = .999);
                            var C = this.pointOnPath(b, g),
                                c = this.pointOnPath(b + .001, g),
                                u = c[0] - C[0],
                                l = c[1] - C[1],
                                d = Math.sqrt(Math.pow(u, 2) + Math.pow(l, 2));
                            return 0 === d ? [0, 0] : "tangent" === m ? [u / d, l / d] : [-l / d, u / d]
                        },
                        tangentOnPath: function(b, g) {
                            return this.vectorOnPath(b, g, "tangent")
                        },
                        normalOnPath: function(b, g) {
                            return this.vectorOnPath(b, g, "normal")
                        },
                        setGroupProperty: expressionHelpers.setGroupProperty,
                        getValueAtTime: expressionHelpers.getStaticValueAtTime
                    }, extendPrototype([v], o), extendPrototype([v], f), f.prototype.getValueAtTime = function h(p) {
                        return this._cachingAtTime || (this._cachingAtTime = {
                            shapeValue: shapePool.clone(this.pv),
                            lastIndex: 0,
                            lastTime: initialDefaultFrame
                        }), p *= this.elem.globalData.frameRate, (p -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < p ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = p, this.interpolateShape(p, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
                    }, f.prototype.initiateExpression = ExpressionManager.initiateExpression;
                    var S = ShapePropertyFactory.getShapeProp;
                    ShapePropertyFactory.getShapeProp = function(p, b, g, m, C) {
                        var c = S(p, b, g, m, C);
                        return c.propertyIndex = b.ix, c.lock = !1, 3 === g ? expressionHelpers.searchExpressions(p, b.pt, c) : 4 === g && expressionHelpers.searchExpressions(p, b.ks, c), c.k && p.addDynamicProperty(c), c
                    }
                }

                function initialize$1() {
                    addPropertyDecorator()
                }

                function addDecorator() {
                    TextProperty.prototype.getExpressionValue = function(e, r) {
                        var i = this.calculateExpression(r);
                        if (e.t !== i) {
                            var s = {};
                            return this.copyData(s, e), s.t = i.toString(), s.__complete = !1, s
                        }
                        return e
                    }, TextProperty.prototype.searchProperty = function() {
                        var e = this.searchKeyframes(),
                            r = this.searchExpressions();
                        return this.kf = e || r, this.kf
                    }, TextProperty.prototype.searchExpressions = function t() {
                        return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
                    }
                }

                function initialize() {
                    addDecorator()
                }

                function SVGComposableEffect() {}
                SVGComposableEffect.prototype = {
                    createMergeNode: function t(e, r) {
                        var s, a, i = createNS("feMerge");
                        for (i.setAttribute("result", e), a = 0; a < r.length; a += 1)(s = createNS("feMergeNode")).setAttribute("in", r[a]), i.appendChild(s), i.appendChild(s);
                        return i
                    }
                };
                var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";

                function SVGTintFilter(t, e, r, i, s) {
                    this.filterManager = e;
                    var a = createNS("feColorMatrix");
                    a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "linearRGB"), a.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = a, a.setAttribute("result", i + "_tint_1"), t.appendChild(a), (a = createNS("feColorMatrix")).setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), a.setAttribute("result", i + "_tint_2"), t.appendChild(a), this.matrixFilter = a;
                    var n = this.createMergeNode(i, [s, i + "_tint_1", i + "_tint_2"]);
                    t.appendChild(n)
                }

                function SVGFillFilter(t, e, r, i) {
                    this.filterManager = e;
                    var s = createNS("feColorMatrix");
                    s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), s.setAttribute("result", i), t.appendChild(s), this.matrixFilter = s
                }

                function SVGStrokeEffect(t, e, r) {
                    this.initialized = !1, this.filterManager = e, this.elem = r, this.paths = []
                }

                function SVGTritoneFilter(t, e, r, i) {
                    this.filterManager = e;
                    var s = createNS("feColorMatrix");
                    s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "linearRGB"), s.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), t.appendChild(s);
                    var a = createNS("feComponentTransfer");
                    a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", i), this.matrixFilter = a;
                    var n = createNS("feFuncR");
                    n.setAttribute("type", "table"), a.appendChild(n), this.feFuncR = n;
                    var h = createNS("feFuncG");
                    h.setAttribute("type", "table"), a.appendChild(h), this.feFuncG = h;
                    var o = createNS("feFuncB");
                    o.setAttribute("type", "table"), a.appendChild(o), this.feFuncB = o, t.appendChild(a)
                }

                function SVGProLevelsFilter(t, e, r, i) {
                    this.filterManager = e;
                    var s = this.filterManager.effectElements,
                        a = createNS("feComponentTransfer");
                    (s[10].p.k || 0 !== s[10].p.v || s[11].p.k || 1 !== s[11].p.v || s[12].p.k || 1 !== s[12].p.v || s[13].p.k || 0 !== s[13].p.v || s[14].p.k || 1 !== s[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", a)), (s[17].p.k || 0 !== s[17].p.v || s[18].p.k || 1 !== s[18].p.v || s[19].p.k || 1 !== s[19].p.v || s[20].p.k || 0 !== s[20].p.v || s[21].p.k || 1 !== s[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", a)), (s[24].p.k || 0 !== s[24].p.v || s[25].p.k || 1 !== s[25].p.v || s[26].p.k || 1 !== s[26].p.v || s[27].p.k || 0 !== s[27].p.v || s[28].p.k || 1 !== s[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", a)), (s[31].p.k || 0 !== s[31].p.v || s[32].p.k || 1 !== s[32].p.v || s[33].p.k || 1 !== s[33].p.v || s[34].p.k || 0 !== s[34].p.v || s[35].p.k || 1 !== s[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", a)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (a.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(a)), (s[3].p.k || 0 !== s[3].p.v || s[4].p.k || 1 !== s[4].p.v || s[5].p.k || 1 !== s[5].p.v || s[6].p.k || 0 !== s[6].p.v || s[7].p.k || 1 !== s[7].p.v) && ((a = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", i), t.appendChild(a), this.feFuncRComposed = this.createFeFunc("feFuncR", a), this.feFuncGComposed = this.createFeFunc("feFuncG", a), this.feFuncBComposed = this.createFeFunc("feFuncB", a))
                }

                function SVGDropShadowEffect(t, e, r, i, s) {
                    var a = e.container.globalData.renderConfig.filterSize,
                        n = e.data.fs || a;
                    t.setAttribute("x", n.x || a.x), t.setAttribute("y", n.y || a.y), t.setAttribute("width", n.width || a.width), t.setAttribute("height", n.height || a.height), this.filterManager = e;
                    var h = createNS("feGaussianBlur");
                    h.setAttribute("in", "SourceAlpha"), h.setAttribute("result", i + "_drop_shadow_1"), h.setAttribute("stdDeviation", "0"), this.feGaussianBlur = h, t.appendChild(h);
                    var o = createNS("feOffset");
                    o.setAttribute("dx", "25"), o.setAttribute("dy", "0"), o.setAttribute("in", i + "_drop_shadow_1"), o.setAttribute("result", i + "_drop_shadow_2"), this.feOffset = o, t.appendChild(o);
                    var f = createNS("feFlood");
                    f.setAttribute("flood-color", "#00ff00"), f.setAttribute("flood-opacity", "1"), f.setAttribute("result", i + "_drop_shadow_3"), this.feFlood = f, t.appendChild(f);
                    var v = createNS("feComposite");
                    v.setAttribute("in", i + "_drop_shadow_3"), v.setAttribute("in2", i + "_drop_shadow_2"), v.setAttribute("operator", "in"), v.setAttribute("result", i + "_drop_shadow_4"), t.appendChild(v);
                    var S = this.createMergeNode(i, [i + "_drop_shadow_4", s]);
                    t.appendChild(S)
                }
                extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(t) {
                    if (t || this.filterManager._mdf) {
                        var e = this.filterManager.effectElements[0].p.v,
                            r = this.filterManager.effectElements[1].p.v;
                        this.linearFilter.setAttribute("values", linearFilterValue + " " + this.filterManager.effectElements[2].p.v / 100 + " 0"), this.matrixFilter.setAttribute("values", r[0] - e[0] + " 0 0 0 " + e[0] + " " + (r[1] - e[1]) + " 0 0 0 " + e[1] + " " + (r[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 1 0")
                    }
                }, SVGFillFilter.prototype.renderFrame = function(t) {
                    if (t || this.filterManager._mdf) {
                        var e = this.filterManager.effectElements[2].p.v;
                        this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + this.filterManager.effectElements[6].p.v + " 0")
                    }
                }, SVGStrokeEffect.prototype.initialize = function() {
                    var e, r, i, s, t = this.elem.layerElement.children || this.elem.layerElement.childNodes;
                    for (1 === this.filterManager.effectElements[1].p.v ? (s = this.elem.maskManager.masksProperties.length, i = 0) : s = 1 + (i = this.filterManager.effectElements[0].p.v - 1), (r = createNS("g")).setAttribute("fill", "none"), r.setAttribute("stroke-linecap", "round"), r.setAttribute("stroke-dashoffset", 1); i < s; i += 1) e = createNS("path"), r.appendChild(e), this.paths.push({
                        p: e,
                        m: i
                    });
                    if (3 === this.filterManager.effectElements[10].p.v) {
                        var a = createNS("mask"),
                            n = createElementID();
                        a.setAttribute("id", n), a.setAttribute("mask-type", "alpha"), a.appendChild(r), this.elem.globalData.defs.appendChild(a);
                        var h = createNS("g");
                        for (h.setAttribute("mask", "url(" + getLocationHref() + "#" + n + ")"); t[0];) h.appendChild(t[0]);
                        this.elem.layerElement.appendChild(h), this.masker = a, r.setAttribute("stroke", "#fff")
                    } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
                        if (2 === this.filterManager.effectElements[10].p.v)
                            for (t = this.elem.layerElement.children || this.elem.layerElement.childNodes; t.length;) this.elem.layerElement.removeChild(t[0]);
                        this.elem.layerElement.appendChild(r), this.elem.layerElement.removeAttribute("mask"), r.setAttribute("stroke", "#fff")
                    }
                    this.initialized = !0, this.pathMasker = r
                }, SVGStrokeEffect.prototype.renderFrame = function(t) {
                    this.initialized || this.initialize();
                    var e, i, s, r = this.paths.length;
                    for (e = 0; e < r; e += 1)
                        if (-1 !== this.paths[e].m && (i = this.elem.maskManager.viewData[this.paths[e].m], s = this.paths[e].p, (t || this.filterManager._mdf || i.prop._mdf) && s.setAttribute("d", i.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || i.prop._mdf)) {
                            var a;
                            if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                                var n = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                    h = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                    o = s.getTotalLength();
                                a = "0 0 0 " + o * n + " ";
                                var p, S = Math.floor(o * (h - n) / (1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01));
                                for (p = 0; p < S; p += 1) a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
                                a += "0 " + 10 * o + " 0 0"
                            } else a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
                            s.setAttribute("stroke-dasharray", a)
                        }
                    if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
                        var b = this.filterManager.effectElements[3].p.v;
                        this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * b[0]) + "," + bmFloor(255 * b[1]) + "," + bmFloor(255 * b[2]) + ")")
                    }
                }, SVGTritoneFilter.prototype.renderFrame = function(t) {
                    if (t || this.filterManager._mdf) {
                        var e = this.filterManager.effectElements[0].p.v,
                            r = this.filterManager.effectElements[1].p.v,
                            i = this.filterManager.effectElements[2].p.v,
                            a = i[1] + " " + r[1] + " " + e[1],
                            n = i[2] + " " + r[2] + " " + e[2];
                        this.feFuncR.setAttribute("tableValues", i[0] + " " + r[0] + " " + e[0]), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", n)
                    }
                }, SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
                    var r = createNS(t);
                    return r.setAttribute("type", "table"), e.appendChild(r), r
                }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, r, i, s) {
                    for (var h, S, a = 0, o = Math.min(t, e), f = Math.max(t, e), v = Array.call(null, {
                            length: 256
                        }), p = 0, b = s - i, g = e - t; a <= 256;) S = (h = a / 256) <= o ? g < 0 ? s : i : h >= f ? g < 0 ? i : s : i + b * Math.pow((h - t) / g, 1 / r), v[p] = S, p += 1, a += 256 / 255;
                    return v.join(" ")
                }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
                    if (t || this.filterManager._mdf) {
                        var e, r = this.filterManager.effectElements;
                        this.feFuncRComposed && (t || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (e = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (e = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (e = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (e = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (e = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", e))
                    }
                }, extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function(t) {
                    if (t || this.filterManager._mdf) {
                        if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
                            var e = this.filterManager.effectElements[0].p.v;
                            this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
                        }
                        if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                            var r = this.filterManager.effectElements[3].p.v,
                                i = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                                s = r * Math.cos(i),
                                a = r * Math.sin(i);
                            this.feOffset.setAttribute("dx", s), this.feOffset.setAttribute("dy", a)
                        }
                    }
                };
                var _svgMatteSymbols = [];

                function SVGMatte3Effect(t, e, r) {
                    this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = r, r.matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement
                }

                function SVGGaussianBlurEffect(t, e, r, i) {
                    t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
                    var s = createNS("feGaussianBlur");
                    s.setAttribute("result", i), t.appendChild(s), this.feGaussianBlur = s
                }

                function TransformEffect() {}

                function SVGTransformEffect(t, e) {
                    this.init(e)
                }

                function CVTransformEffect(t) {
                    this.init(t)
                }
                return SVGMatte3Effect.prototype.findSymbol = function(t) {
                    for (var e = 0, r = _svgMatteSymbols.length; e < r;) {
                        if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
                        e += 1
                    }
                    return null
                }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
                    var r = t.layerElement.parentNode;
                    if (r) {
                        for (var i = r.children, s = 0, a = i.length; s < a && i[s] !== t.layerElement;) s += 1;
                        var n;
                        s <= a - 2 && (n = i[s + 1]);
                        var h = createNS("use");
                        h.setAttribute("href", "#" + e), n ? r.insertBefore(h, n) : r.appendChild(h)
                    }
                }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
                    if (!this.findSymbol(e)) {
                        var r = createElementID(),
                            i = createNS("mask");
                        i.setAttribute("id", e.layerId), i.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
                        var s = t.globalData.defs;
                        s.appendChild(i);
                        var a = createNS("symbol");
                        a.setAttribute("id", r), this.replaceInParent(e, r), a.appendChild(e.layerElement), s.appendChild(a);
                        var n = createNS("use");
                        n.setAttribute("href", "#" + r), i.appendChild(n), e.data.hd = !1, e.show()
                    }
                    t.setMatte(e.layerId)
                }, SVGMatte3Effect.prototype.initialize = function() {
                    for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, r = 0, i = e.length; r < i;) e[r] && e[r].data.ind === t && this.setElementAsMask(this.elem, e[r]), r += 1;
                    this.initialized = !0
                }, SVGMatte3Effect.prototype.renderFrame = function() {
                    this.initialized || this.initialize()
                }, SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
                    if (t || this.filterManager._mdf) {
                        var r = .3 * this.filterManager.effectElements[0].p.v,
                            i = this.filterManager.effectElements[1].p.v;
                        this.feGaussianBlur.setAttribute("stdDeviation", (3 == i ? 0 : r) + " " + (2 == i ? 0 : r)), this.feGaussianBlur.setAttribute("edgeMode", 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate")
                    }
                }, TransformEffect.prototype.init = function(t) {
                    this.effectsManager = t, this.type = effectTypes.TRANSFORM_EFFECT, this.matrix = new Matrix, this.opacity = -1, this._mdf = !1, this._opMdf = !1
                }, TransformEffect.prototype.renderFrame = function(t) {
                    if (this._opMdf = !1, this._mdf = !1, t || this.effectsManager._mdf) {
                        var e = this.effectsManager.effectElements,
                            r = e[0].p.v,
                            i = e[1].p.v,
                            a = e[3].p.v,
                            n = 1 === e[2].p.v ? a : e[4].p.v,
                            h = e[5].p.v,
                            o = e[6].p.v,
                            f = e[7].p.v;
                        this.matrix.reset(), this.matrix.translate(-r[0], -r[1], r[2]), this.matrix.scale(.01 * n, .01 * a, 1), this.matrix.rotate(-f * degToRads), this.matrix.skewFromAxis(-h * degToRads, (o + 90) * degToRads), this.matrix.translate(i[0], i[1], 0), this._mdf = !0, this.opacity !== e[8].p.v && (this.opacity = e[8].p.v, this._opMdf = !0)
                    }
                }, extendPrototype([TransformEffect], SVGTransformEffect), extendPrototype([TransformEffect], CVTransformEffect), registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect$1(20, SVGTintFilter, !0), registerEffect$1(21, SVGFillFilter, !0), registerEffect$1(22, SVGStrokeEffect, !1), registerEffect$1(23, SVGTritoneFilter, !0), registerEffect$1(24, SVGProLevelsFilter, !0), registerEffect$1(25, SVGDropShadowEffect, !0), registerEffect$1(28, SVGMatte3Effect, !1), registerEffect$1(29, SVGGaussianBlurEffect, !0), registerEffect$1(35, SVGTransformEffect, !1), registerEffect(35, CVTransformEffect), lottie
            }, module.exports = e())
        }
    }
]);