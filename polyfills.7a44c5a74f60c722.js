(self.webpackChunkapp_btcmtx = self.webpackChunkapp_btcmtx || []).push([
    [429], {
        55321: (Bt, at, X) => {
            "use strict";
            X(48332), window.global = window, global.Buffer = global.Buffer || X(39007).Buffer
        },
        9919: (Bt, at) => {
            "use strict";
            at.byteLength = function a(b) {
                var L = U(b),
                    pt = L[1];
                return 3 * (L[0] + pt) / 4 - pt
            }, at.toByteArray = function Et(b) {
                var L, Q, S = U(b),
                    pt = S[0],
                    lt = S[1],
                    ct = new dt(function et(b, L, S) {
                        return 3 * (L + S) / 4 - S
                    }(0, pt, lt)),
                    _t = 0,
                    Pt = lt > 0 ? pt - 4 : pt;
                for (Q = 0; Q < Pt; Q += 4) L = v[b.charCodeAt(Q)] << 18 | v[b.charCodeAt(Q + 1)] << 12 | v[b.charCodeAt(Q + 2)] << 6 | v[b.charCodeAt(Q + 3)], ct[_t++] = L >> 16 & 255, ct[_t++] = L >> 8 & 255, ct[_t++] = 255 & L;
                return 2 === lt && (L = v[b.charCodeAt(Q)] << 2 | v[b.charCodeAt(Q + 1)] >> 4, ct[_t++] = 255 & L), 1 === lt && (L = v[b.charCodeAt(Q)] << 10 | v[b.charCodeAt(Q + 1)] << 4 | v[b.charCodeAt(Q + 2)] >> 2, ct[_t++] = L >> 8 & 255, ct[_t++] = 255 & L), ct
            }, at.fromByteArray = function Z(b) {
                for (var L, S = b.length, pt = S % 3, lt = [], _t = 0, Pt = S - pt; _t < Pt; _t += 16383) lt.push(rt(b, _t, _t + 16383 > Pt ? Pt : _t + 16383));
                return 1 === pt ? lt.push(X[(L = b[S - 1]) >> 2] + X[L << 4 & 63] + "==") : 2 === pt && lt.push(X[(L = (b[S - 2] << 8) + b[S - 1]) >> 10] + X[L >> 4 & 63] + X[L << 2 & 63] + "="), lt.join("")
            };
            for (var X = [], v = [], dt = typeof Uint8Array < "u" ? Uint8Array : Array, yt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Y = 0; Y < 64; ++Y) X[Y] = yt[Y], v[yt.charCodeAt(Y)] = Y;

            function U(b) {
                var L = b.length;
                if (L % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                var S = b.indexOf("=");
                return -1 === S && (S = L), [S, S === L ? 0 : 4 - S % 4]
            }

            function nt(b) {
                return X[b >> 18 & 63] + X[b >> 12 & 63] + X[b >> 6 & 63] + X[63 & b]
            }

            function rt(b, L, S) {
                for (var lt = [], ct = L; ct < S; ct += 3) lt.push(nt((b[ct] << 16 & 16711680) + (b[ct + 1] << 8 & 65280) + (255 & b[ct + 2])));
                return lt.join("")
            }
            v["-".charCodeAt(0)] = 62, v["_".charCodeAt(0)] = 63
        },
        39007: (Bt, at, X) => {
            "use strict";
            const v = X(9919),
                dt = X(22601),
                yt = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
            at.Buffer = a, at.SlowBuffer = function ct(n) {
                return +n != n && (n = 0), a.alloc(+n)
            }, at.INSPECT_MAX_BYTES = 50;
            const Y = 2147483647;

            function U(n) {
                if (n > Y) throw new RangeError('The value "' + n + '" is invalid for option "size"');
                const t = new Uint8Array(n);
                return Object.setPrototypeOf(t, a.prototype), t
            }

            function a(n, t, e) {
                if ("number" == typeof n) {
                    if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
                    return rt(n)
                }
                return et(n, t, e)
            }

            function et(n, t, e) {
                if ("string" == typeof n) return function Z(n, t) {
                    if (("string" != typeof t || "" === t) && (t = "utf8"), !a.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
                    const e = 0 | _t(n, t);
                    let r = U(e);
                    const i = r.write(n, t);
                    return i !== e && (r = r.slice(0, i)), r
                }(n, t);
                if (ArrayBuffer.isView(n)) return function L(n) {
                    if (o(n, Uint8Array)) {
                        const t = new Uint8Array(n);
                        return S(t.buffer, t.byteOffset, t.byteLength)
                    }
                    return b(n)
                }(n);
                if (null == n) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof n);
                if (o(n, ArrayBuffer) || n && o(n.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (o(n, SharedArrayBuffer) || n && o(n.buffer, SharedArrayBuffer))) return S(n, t, e);
                if ("number" == typeof n) throw new TypeError('The "value" argument must not be of type number. Received type number');
                const r = n.valueOf && n.valueOf();
                if (null != r && r !== n) return a.from(r, t, e);
                const i = function pt(n) {
                    if (a.isBuffer(n)) {
                        const t = 0 | lt(n.length),
                            e = U(t);
                        return 0 === e.length || n.copy(e, 0, 0, t), e
                    }
                    return void 0 !== n.length ? "number" != typeof n.length || u(n.length) ? U(0) : b(n) : "Buffer" === n.type && Array.isArray(n.data) ? b(n.data) : void 0
                }(n);
                if (i) return i;
                if (typeof Symbol < "u" && null != Symbol.toPrimitive && "function" == typeof n[Symbol.toPrimitive]) return a.from(n[Symbol.toPrimitive]("string"), t, e);
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof n)
            }

            function Et(n) {
                if ("number" != typeof n) throw new TypeError('"size" argument must be of type number');
                if (n < 0) throw new RangeError('The value "' + n + '" is invalid for option "size"')
            }

            function rt(n) {
                return Et(n), U(n < 0 ? 0 : 0 | lt(n))
            }

            function b(n) {
                const t = n.length < 0 ? 0 : 0 | lt(n.length),
                    e = U(t);
                for (let r = 0; r < t; r += 1) e[r] = 255 & n[r];
                return e
            }

            function S(n, t, e) {
                if (t < 0 || n.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
                if (n.byteLength < t + (e || 0)) throw new RangeError('"length" is outside of buffer bounds');
                let r;
                return r = void 0 === t && void 0 === e ? new Uint8Array(n) : void 0 === e ? new Uint8Array(n, t) : new Uint8Array(n, t, e), Object.setPrototypeOf(r, a.prototype), r
            }

            function lt(n) {
                if (n >= Y) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + Y.toString(16) + " bytes");
                return 0 | n
            }

            function _t(n, t) {
                if (a.isBuffer(n)) return n.length;
                if (ArrayBuffer.isView(n) || o(n, ArrayBuffer)) return n.byteLength;
                if ("string" != typeof n) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof n);
                const e = n.length,
                    r = arguments.length > 2 && !0 === arguments[2];
                if (!r && 0 === e) return 0;
                let i = !1;
                for (;;) switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return e;
                    case "utf8":
                    case "utf-8":
                        return vt(n).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * e;
                    case "hex":
                        return e >>> 1;
                    case "base64":
                        return se(n).length;
                    default:
                        if (i) return r ? -1 : vt(n).length;
                        t = ("" + t).toLowerCase(), i = !0
                }
            }

            function Pt(n, t, e) {
                let r = !1;
                if ((void 0 === t || t < 0) && (t = 0), t > this.length || ((void 0 === e || e > this.length) && (e = this.length), e <= 0) || (e >>>= 0) <= (t >>>= 0)) return "";
                for (n || (n = "utf8");;) switch (n) {
                    case "hex":
                        return ue(this, t, e);
                    case "utf8":
                    case "utf-8":
                        return bt(this, t, e);
                    case "ascii":
                        return ie(this, t, e);
                    case "latin1":
                    case "binary":
                        return Xt(this, t, e);
                    case "base64":
                        return Mt(this, t, e);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return ae(this, t, e);
                    default:
                        if (r) throw new TypeError("Unknown encoding: " + n);
                        n = (n + "").toLowerCase(), r = !0
                }
            }

            function Q(n, t, e) {
                const r = n[t];
                n[t] = n[e], n[e] = r
            }

            function jt(n, t, e, r, i) {
                if (0 === n.length) return -1;
                if ("string" == typeof e ? (r = e, e = 0) : e > 2147483647 ? e = 2147483647 : e < -2147483648 && (e = -2147483648), u(e = +e) && (e = i ? 0 : n.length - 1), e < 0 && (e = n.length + e), e >= n.length) {
                    if (i) return -1;
                    e = n.length - 1
                } else if (e < 0) {
                    if (!i) return -1;
                    e = 0
                }
                if ("string" == typeof t && (t = a.from(t, r)), a.isBuffer(t)) return 0 === t.length ? -1 : Wt(n, t, e, r, i);
                if ("number" == typeof t) return t &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(n, t, e) : Uint8Array.prototype.lastIndexOf.call(n, t, e) : Wt(n, [t], e, r, i);
                throw new TypeError("val must be string, number or Buffer")
            }

            function Wt(n, t, e, r, i) {
                let P, c = 1,
                    l = n.length,
                    m = t.length;
                if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                    if (n.length < 2 || t.length < 2) return -1;
                    c = 2, l /= 2, m /= 2, e /= 2
                }

                function w(R, D) {
                    return 1 === c ? R[D] : R.readUInt16BE(D * c)
                }
                if (i) {
                    let R = -1;
                    for (P = e; P < l; P++)
                        if (w(n, P) === w(t, -1 === R ? 0 : P - R)) {
                            if (-1 === R && (R = P), P - R + 1 === m) return R * c
                        } else -1 !== R && (P -= P - R), R = -1
                } else
                    for (e + m > l && (e = l - m), P = e; P >= 0; P--) {
                        let R = !0;
                        for (let D = 0; D < m; D++)
                            if (w(n, P + D) !== w(t, D)) {
                                R = !1;
                                break
                            }
                        if (R) return P
                    }
                return -1
            }

            function Ht(n, t, e, r) {
                e = Number(e) || 0;
                const i = n.length - e;
                r ? (r = Number(r)) > i && (r = i) : r = i;
                const c = t.length;
                let l;
                for (r > c / 2 && (r = c / 2), l = 0; l < r; ++l) {
                    const m = parseInt(t.substr(2 * l, 2), 16);
                    if (u(m)) return l;
                    n[e + l] = m
                }
                return l
            }

            function te(n, t, e, r) {
                return Vt(vt(t, n.length - e), n, e, r)
            }

            function ee(n, t, e, r) {
                return Vt(function Ot(n) {
                    const t = [];
                    for (let e = 0; e < n.length; ++e) t.push(255 & n.charCodeAt(e));
                    return t
                }(t), n, e, r)
            }

            function ne(n, t, e, r) {
                return Vt(se(t), n, e, r)
            }

            function It(n, t, e, r) {
                return Vt(function pe(n, t) {
                    let e, r, i;
                    const c = [];
                    for (let l = 0; l < n.length && !((t -= 2) < 0); ++l) e = n.charCodeAt(l), r = e >> 8, i = e % 256, c.push(i), c.push(r);
                    return c
                }(t, n.length - e), n, e, r)
            }

            function Mt(n, t, e) {
                return v.fromByteArray(0 === t && e === n.length ? n : n.slice(t, e))
            }

            function bt(n, t, e) {
                e = Math.min(n.length, e);
                const r = [];
                let i = t;
                for (; i < e;) {
                    const c = n[i];
                    let l = null,
                        m = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                    if (i + m <= e) {
                        let w, P, R, D;
                        switch (m) {
                            case 1:
                                c < 128 && (l = c);
                                break;
                            case 2:
                                w = n[i + 1], 128 == (192 & w) && (D = (31 & c) << 6 | 63 & w, D > 127 && (l = D));
                                break;
                            case 3:
                                w = n[i + 1], P = n[i + 2], 128 == (192 & w) && 128 == (192 & P) && (D = (15 & c) << 12 | (63 & w) << 6 | 63 & P, D > 2047 && (D < 55296 || D > 57343) && (l = D));
                                break;
                            case 4:
                                w = n[i + 1], P = n[i + 2], R = n[i + 3], 128 == (192 & w) && 128 == (192 & P) && 128 == (192 & R) && (D = (15 & c) << 18 | (63 & w) << 12 | (63 & P) << 6 | 63 & R, D > 65535 && D < 1114112 && (l = D))
                        }
                    }
                    null === l ? (l = 65533, m = 1) : l > 65535 && (l -= 65536, r.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), r.push(l), i += m
                }
                return function Rt(n) {
                    const t = n.length;
                    if (t <= re) return String.fromCharCode.apply(String, n);
                    let e = "",
                        r = 0;
                    for (; r < t;) e += String.fromCharCode.apply(String, n.slice(r, r += re));
                    return e
                }(r)
            }
            at.kMaxLength = Y, !(a.TYPED_ARRAY_SUPPORT = function it() {
                try {
                    const n = new Uint8Array(1),
                        t = {
                            foo: function() {
                                return 42
                            }
                        };
                    return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(n, t), 42 === n.foo()
                } catch {
                    return !1
                }
            }()) && typeof console < "u" && "function" == typeof console.error && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(a.prototype, "parent", {
                enumerable: !0,
                get: function() {
                    if (a.isBuffer(this)) return this.buffer
                }
            }), Object.defineProperty(a.prototype, "offset", {
                enumerable: !0,
                get: function() {
                    if (a.isBuffer(this)) return this.byteOffset
                }
            }), a.poolSize = 8192, a.from = function(n, t, e) {
                return et(n, t, e)
            }, Object.setPrototypeOf(a.prototype, Uint8Array.prototype), Object.setPrototypeOf(a, Uint8Array), a.alloc = function(n, t, e) {
                return function nt(n, t, e) {
                    return Et(n), n <= 0 ? U(n) : void 0 !== t ? "string" == typeof e ? U(n).fill(t, e) : U(n).fill(t) : U(n)
                }(n, t, e)
            }, a.allocUnsafe = function(n) {
                return rt(n)
            }, a.allocUnsafeSlow = function(n) {
                return rt(n)
            }, a.isBuffer = function(t) {
                return null != t && !0 === t._isBuffer && t !== a.prototype
            }, a.compare = function(t, e) {
                if (o(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)), o(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)), !a.isBuffer(t) || !a.isBuffer(e)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (t === e) return 0;
                let r = t.length,
                    i = e.length;
                for (let c = 0, l = Math.min(r, i); c < l; ++c)
                    if (t[c] !== e[c]) {
                        r = t[c], i = e[c];
                        break
                    }
                return r < i ? -1 : i < r ? 1 : 0
            }, a.isEncoding = function(t) {
                switch (String(t).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, a.concat = function(t, e) {
                if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length) return a.alloc(0);
                let r;
                if (void 0 === e)
                    for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
                const i = a.allocUnsafe(e);
                let c = 0;
                for (r = 0; r < t.length; ++r) {
                    let l = t[r];
                    if (o(l, Uint8Array)) c + l.length > i.length ? (a.isBuffer(l) || (l = a.from(l)), l.copy(i, c)) : Uint8Array.prototype.set.call(i, l, c);
                    else {
                        if (!a.isBuffer(l)) throw new TypeError('"list" argument must be an Array of Buffers');
                        l.copy(i, c)
                    }
                    c += l.length
                }
                return i
            }, a.byteLength = _t, a.prototype._isBuffer = !0, a.prototype.swap16 = function() {
                const t = this.length;
                if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (let e = 0; e < t; e += 2) Q(this, e, e + 1);
                return this
            }, a.prototype.swap32 = function() {
                const t = this.length;
                if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (let e = 0; e < t; e += 4) Q(this, e, e + 3), Q(this, e + 1, e + 2);
                return this
            }, a.prototype.swap64 = function() {
                const t = this.length;
                if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (let e = 0; e < t; e += 8) Q(this, e, e + 7), Q(this, e + 1, e + 6), Q(this, e + 2, e + 5), Q(this, e + 3, e + 4);
                return this
            }, a.prototype.toLocaleString = a.prototype.toString = function() {
                const t = this.length;
                return 0 === t ? "" : 0 === arguments.length ? bt(this, 0, t) : Pt.apply(this, arguments)
            }, a.prototype.equals = function(t) {
                if (!a.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                return this === t || 0 === a.compare(this, t)
            }, a.prototype.inspect = function() {
                let t = "";
                const e = at.INSPECT_MAX_BYTES;
                return t = this.toString("hex", 0, e).replace(/(.{2})/g, "$1 ").trim(), this.length > e && (t += " ... "), "<Buffer " + t + ">"
            }, yt && (a.prototype[yt] = a.prototype.inspect), a.prototype.compare = function(t, e, r, i, c) {
                if (o(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)), !a.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
                if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === i && (i = 0), void 0 === c && (c = this.length), e < 0 || r > t.length || i < 0 || c > this.length) throw new RangeError("out of range index");
                if (i >= c && e >= r) return 0;
                if (i >= c) return -1;
                if (e >= r) return 1;
                if (this === t) return 0;
                let l = (c >>>= 0) - (i >>>= 0),
                    m = (r >>>= 0) - (e >>>= 0);
                const w = Math.min(l, m),
                    P = this.slice(i, c),
                    R = t.slice(e, r);
                for (let D = 0; D < w; ++D)
                    if (P[D] !== R[D]) {
                        l = P[D], m = R[D];
                        break
                    }
                return l < m ? -1 : m < l ? 1 : 0
            }, a.prototype.includes = function(t, e, r) {
                return -1 !== this.indexOf(t, e, r)
            }, a.prototype.indexOf = function(t, e, r) {
                return jt(this, t, e, r, !0)
            }, a.prototype.lastIndexOf = function(t, e, r) {
                return jt(this, t, e, r, !1)
            }, a.prototype.write = function(t, e, r, i) {
                if (void 0 === e) i = "utf8", r = this.length, e = 0;
                else if (void 0 === r && "string" == typeof e) i = e, r = this.length, e = 0;
                else {
                    if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    e >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === i && (i = "utf8")) : (i = r, r = void 0)
                }
                const c = this.length - e;
                if ((void 0 === r || r > c) && (r = c), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                i || (i = "utf8");
                let l = !1;
                for (;;) switch (i) {
                    case "hex":
                        return Ht(this, t, e, r);
                    case "utf8":
                    case "utf-8":
                        return te(this, t, e, r);
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return ee(this, t, e, r);
                    case "base64":
                        return ne(this, t, e, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return It(this, t, e, r);
                    default:
                        if (l) throw new TypeError("Unknown encoding: " + i);
                        i = ("" + i).toLowerCase(), l = !0
                }
            }, a.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };
            const re = 4096;

            function ie(n, t, e) {
                let r = "";
                e = Math.min(n.length, e);
                for (let i = t; i < e; ++i) r += String.fromCharCode(127 & n[i]);
                return r
            }

            function Xt(n, t, e) {
                let r = "";
                e = Math.min(n.length, e);
                for (let i = t; i < e; ++i) r += String.fromCharCode(n[i]);
                return r
            }

            function ue(n, t, e) {
                const r = n.length;
                (!t || t < 0) && (t = 0), (!e || e < 0 || e > r) && (e = r);
                let i = "";
                for (let c = t; c < e; ++c) i += d[n[c]];
                return i
            }

            function ae(n, t, e) {
                const r = n.slice(t, e);
                let i = "";
                for (let c = 0; c < r.length - 1; c += 2) i += String.fromCharCode(r[c] + 256 * r[c + 1]);
                return i
            }

            function tt(n, t, e) {
                if (n % 1 != 0 || n < 0) throw new RangeError("offset is not uint");
                if (n + t > e) throw new RangeError("Trying to access beyond buffer length")
            }

            function Tt(n, t, e, r, i, c) {
                if (!a.isBuffer(n)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (t > i || t < c) throw new RangeError('"value" argument is out of bounds');
                if (e + r > n.length) throw new RangeError("Index out of range")
            }

            function wt(n, t, e, r, i) {
                Kt(t, r, i, n, e, 7);
                let c = Number(t & BigInt(4294967295));
                n[e++] = c, c >>= 8, n[e++] = c, c >>= 8, n[e++] = c, c >>= 8, n[e++] = c;
                let l = Number(t >> BigInt(32) & BigInt(4294967295));
                return n[e++] = l, l >>= 8, n[e++] = l, l >>= 8, n[e++] = l, l >>= 8, n[e++] = l, e
            }

            function qt(n, t, e, r, i) {
                Kt(t, r, i, n, e, 7);
                let c = Number(t & BigInt(4294967295));
                n[e + 7] = c, c >>= 8, n[e + 6] = c, c >>= 8, n[e + 5] = c, c >>= 8, n[e + 4] = c;
                let l = Number(t >> BigInt(32) & BigInt(4294967295));
                return n[e + 3] = l, l >>= 8, n[e + 2] = l, l >>= 8, n[e + 1] = l, l >>= 8, n[e] = l, e + 8
            }

            function Yt(n, t, e, r, i, c) {
                if (e + r > n.length) throw new RangeError("Index out of range");
                if (e < 0) throw new RangeError("Index out of range")
            }

            function zt(n, t, e, r, i) {
                return t = +t, e >>>= 0, i || Yt(n, 0, e, 4), dt.write(n, t, e, r, 23, 4), e + 4
            }

            function Jt(n, t, e, r, i) {
                return t = +t, e >>>= 0, i || Yt(n, 0, e, 8), dt.write(n, t, e, r, 52, 8), e + 8
            }
            a.prototype.slice = function(t, e) {
                const r = this.length;
                (t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t);
                const i = this.subarray(t, e);
                return Object.setPrototypeOf(i, a.prototype), i
            }, a.prototype.readUintLE = a.prototype.readUIntLE = function(t, e, r) {
                t >>>= 0, e >>>= 0, r || tt(t, e, this.length);
                let i = this[t],
                    c = 1,
                    l = 0;
                for (; ++l < e && (c *= 256);) i += this[t + l] * c;
                return i
            }, a.prototype.readUintBE = a.prototype.readUIntBE = function(t, e, r) {
                t >>>= 0, e >>>= 0, r || tt(t, e, this.length);
                let i = this[t + --e],
                    c = 1;
                for (; e > 0 && (c *= 256);) i += this[t + --e] * c;
                return i
            }, a.prototype.readUint8 = a.prototype.readUInt8 = function(t, e) {
                return t >>>= 0, e || tt(t, 1, this.length), this[t]
            }, a.prototype.readUint16LE = a.prototype.readUInt16LE = function(t, e) {
                return t >>>= 0, e || tt(t, 2, this.length), this[t] | this[t + 1] << 8
            }, a.prototype.readUint16BE = a.prototype.readUInt16BE = function(t, e) {
                return t >>>= 0, e || tt(t, 2, this.length), this[t] << 8 | this[t + 1]
            }, a.prototype.readUint32LE = a.prototype.readUInt32LE = function(t, e) {
                return t >>>= 0, e || tt(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
            }, a.prototype.readUint32BE = a.prototype.readUInt32BE = function(t, e) {
                return t >>>= 0, e || tt(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
            }, a.prototype.readBigUInt64LE = h(function(t) {
                Ft(t >>>= 0, "offset");
                const e = this[t],
                    r = this[t + 7];
                (void 0 === e || void 0 === r) && Dt(t, this.length - 8);
                const i = e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24,
                    c = this[++t] + 256 * this[++t] + 65536 * this[++t] + r * 2 ** 24;
                return BigInt(i) + (BigInt(c) << BigInt(32))
            }), a.prototype.readBigUInt64BE = h(function(t) {
                Ft(t >>>= 0, "offset");
                const e = this[t],
                    r = this[t + 7];
                (void 0 === e || void 0 === r) && Dt(t, this.length - 8);
                const i = e * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + this[++t],
                    c = this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r;
                return (BigInt(i) << BigInt(32)) + BigInt(c)
            }), a.prototype.readIntLE = function(t, e, r) {
                t >>>= 0, e >>>= 0, r || tt(t, e, this.length);
                let i = this[t],
                    c = 1,
                    l = 0;
                for (; ++l < e && (c *= 256);) i += this[t + l] * c;
                return c *= 128, i >= c && (i -= Math.pow(2, 8 * e)), i
            }, a.prototype.readIntBE = function(t, e, r) {
                t >>>= 0, e >>>= 0, r || tt(t, e, this.length);
                let i = e,
                    c = 1,
                    l = this[t + --i];
                for (; i > 0 && (c *= 256);) l += this[t + --i] * c;
                return c *= 128, l >= c && (l -= Math.pow(2, 8 * e)), l
            }, a.prototype.readInt8 = function(t, e) {
                return t >>>= 0, e || tt(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            }, a.prototype.readInt16LE = function(t, e) {
                t >>>= 0, e || tt(t, 2, this.length);
                const r = this[t] | this[t + 1] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, a.prototype.readInt16BE = function(t, e) {
                t >>>= 0, e || tt(t, 2, this.length);
                const r = this[t + 1] | this[t] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, a.prototype.readInt32LE = function(t, e) {
                return t >>>= 0, e || tt(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
            }, a.prototype.readInt32BE = function(t, e) {
                return t >>>= 0, e || tt(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
            }, a.prototype.readBigInt64LE = h(function(t) {
                Ft(t >>>= 0, "offset");
                const e = this[t],
                    r = this[t + 7];
                return (void 0 === e || void 0 === r) && Dt(t, this.length - 8), (BigInt(this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (r << 24)) << BigInt(32)) + BigInt(e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24)
            }), a.prototype.readBigInt64BE = h(function(t) {
                Ft(t >>>= 0, "offset");
                const e = this[t],
                    r = this[t + 7];
                (void 0 === e || void 0 === r) && Dt(t, this.length - 8);
                const i = (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t];
                return (BigInt(i) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r)
            }), a.prototype.readFloatLE = function(t, e) {
                return t >>>= 0, e || tt(t, 4, this.length), dt.read(this, t, !0, 23, 4)
            }, a.prototype.readFloatBE = function(t, e) {
                return t >>>= 0, e || tt(t, 4, this.length), dt.read(this, t, !1, 23, 4)
            }, a.prototype.readDoubleLE = function(t, e) {
                return t >>>= 0, e || tt(t, 8, this.length), dt.read(this, t, !0, 52, 8)
            }, a.prototype.readDoubleBE = function(t, e) {
                return t >>>= 0, e || tt(t, 8, this.length), dt.read(this, t, !1, 52, 8)
            }, a.prototype.writeUintLE = a.prototype.writeUIntLE = function(t, e, r, i) {
                t = +t, e >>>= 0, r >>>= 0, i || Tt(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                let c = 1,
                    l = 0;
                for (this[e] = 255 & t; ++l < r && (c *= 256);) this[e + l] = t / c & 255;
                return e + r
            }, a.prototype.writeUintBE = a.prototype.writeUIntBE = function(t, e, r, i) {
                t = +t, e >>>= 0, r >>>= 0, i || Tt(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                let c = r - 1,
                    l = 1;
                for (this[e + c] = 255 & t; --c >= 0 && (l *= 256);) this[e + c] = t / l & 255;
                return e + r
            }, a.prototype.writeUint8 = a.prototype.writeUInt8 = function(t, e, r) {
                return t = +t, e >>>= 0, r || Tt(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1
            }, a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function(t, e, r) {
                return t = +t, e >>>= 0, r || Tt(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
            }, a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function(t, e, r) {
                return t = +t, e >>>= 0, r || Tt(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
            }, a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function(t, e, r) {
                return t = +t, e >>>= 0, r || Tt(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4
            }, a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function(t, e, r) {
                return t = +t, e >>>= 0, r || Tt(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
            }, a.prototype.writeBigUInt64LE = h(function(t, e = 0) {
                return wt(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
            }), a.prototype.writeBigUInt64BE = h(function(t, e = 0) {
                return qt(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
            }), a.prototype.writeIntLE = function(t, e, r, i) {
                if (t = +t, e >>>= 0, !i) {
                    const w = Math.pow(2, 8 * r - 1);
                    Tt(this, t, e, r, w - 1, -w)
                }
                let c = 0,
                    l = 1,
                    m = 0;
                for (this[e] = 255 & t; ++c < r && (l *= 256);) t < 0 && 0 === m && 0 !== this[e + c - 1] && (m = 1), this[e + c] = (t / l >> 0) - m & 255;
                return e + r
            }, a.prototype.writeIntBE = function(t, e, r, i) {
                if (t = +t, e >>>= 0, !i) {
                    const w = Math.pow(2, 8 * r - 1);
                    Tt(this, t, e, r, w - 1, -w)
                }
                let c = r - 1,
                    l = 1,
                    m = 0;
                for (this[e + c] = 255 & t; --c >= 0 && (l *= 256);) t < 0 && 0 === m && 0 !== this[e + c + 1] && (m = 1), this[e + c] = (t / l >> 0) - m & 255;
                return e + r
            }, a.prototype.writeInt8 = function(t, e, r) {
                return t = +t, e >>>= 0, r || Tt(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
            }, a.prototype.writeInt16LE = function(t, e, r) {
                return t = +t, e >>>= 0, r || Tt(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
            }, a.prototype.writeInt16BE = function(t, e, r) {
                return t = +t, e >>>= 0, r || Tt(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
            }, a.prototype.writeInt32LE = function(t, e, r) {
                return t = +t, e >>>= 0, r || Tt(this, t, e, 4, 2147483647, -2147483648), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
            }, a.prototype.writeInt32BE = function(t, e, r) {
                return t = +t, e >>>= 0, r || Tt(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
            }, a.prototype.writeBigInt64LE = h(function(t, e = 0) {
                return wt(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            }), a.prototype.writeBigInt64BE = h(function(t, e = 0) {
                return qt(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            }), a.prototype.writeFloatLE = function(t, e, r) {
                return zt(this, t, e, !0, r)
            }, a.prototype.writeFloatBE = function(t, e, r) {
                return zt(this, t, e, !1, r)
            }, a.prototype.writeDoubleLE = function(t, e, r) {
                return Jt(this, t, e, !0, r)
            }, a.prototype.writeDoubleBE = function(t, e, r) {
                return Jt(this, t, e, !1, r)
            }, a.prototype.copy = function(t, e, r, i) {
                if (!a.isBuffer(t)) throw new TypeError("argument should be a Buffer");
                if (r || (r = 0), !i && 0 !== i && (i = this.length), e >= t.length && (e = t.length), e || (e = 0), i > 0 && i < r && (i = r), i === r || 0 === t.length || 0 === this.length) return 0;
                if (e < 0) throw new RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
                if (i < 0) throw new RangeError("sourceEnd out of bounds");
                i > this.length && (i = this.length), t.length - e < i - r && (i = t.length - e + r);
                const c = i - r;
                return this === t && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e, r, i) : Uint8Array.prototype.set.call(t, this.subarray(r, i), e), c
            }, a.prototype.fill = function(t, e, r, i) {
                if ("string" == typeof t) {
                    if ("string" == typeof e ? (i = e, e = 0, r = this.length) : "string" == typeof r && (i = r, r = this.length), void 0 !== i && "string" != typeof i) throw new TypeError("encoding must be a string");
                    if ("string" == typeof i && !a.isEncoding(i)) throw new TypeError("Unknown encoding: " + i);
                    if (1 === t.length) {
                        const l = t.charCodeAt(0);
                        ("utf8" === i && l < 128 || "latin1" === i) && (t = l)
                    }
                } else "number" == typeof t ? t &= 255 : "boolean" == typeof t && (t = Number(t));
                if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
                if (r <= e) return this;
                let c;
                if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t)
                    for (c = e; c < r; ++c) this[c] = t;
                else {
                    const l = a.isBuffer(t) ? t : a.from(t, i),
                        m = l.length;
                    if (0 === m) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
                    for (c = 0; c < r - e; ++c) this[c + e] = l[c % m]
                }
                return this
            };
            const Nt = {};

            function Gt(n, t, e) {
                Nt[n] = class extends e {
                    constructor() {
                        super(), Object.defineProperty(this, "message", {
                            value: t.apply(this, arguments),
                            writable: !0,
                            configurable: !0
                        }), this.name = `${this.name} [${n}]`, delete this.name
                    }
                    get code() {
                        return n
                    }
                    set code(i) {
                        Object.defineProperty(this, "code", {
                            configurable: !0,
                            enumerable: !0,
                            value: i,
                            writable: !0
                        })
                    }
                    toString() {
                        return `${this.name} [${n}]: ${this.message}`
                    }
                }
            }

            function oe(n) {
                let t = "",
                    e = n.length;
                const r = "-" === n[0] ? 1 : 0;
                for (; e >= r + 4; e -= 3) t = `_${n.slice(e-3,e)}${t}`;
                return `${n.slice(0,e)}${t}`
            }

            function Kt(n, t, e, r, i, c) {
                if (n > e || n < t) {
                    const l = "bigint" == typeof t ? "n" : "";
                    let m;
                    throw m = c > 3 ? 0 === t || t === BigInt(0) ? `>= 0${l} and < 2${l} ** ${8*(c+1)}${l}` : `>= -(2${l} ** ${8*(c+1)-1}${l}) and < 2 ** ${8*(c+1)-1}${l}` : `>= ${t}${l} and <= ${e}${l}`, new Nt.ERR_OUT_OF_RANGE("value", m, n)
                }! function le(n, t, e) {
                    Ft(t, "offset"), (void 0 === n[t] || void 0 === n[t + e]) && Dt(t, n.length - (e + 1))
                }(r, i, c)
            }

            function Ft(n, t) {
                if ("number" != typeof n) throw new Nt.ERR_INVALID_ARG_TYPE(t, "number", n)
            }

            function Dt(n, t, e) {
                throw Math.floor(n) !== n ? (Ft(n, e), new Nt.ERR_OUT_OF_RANGE(e || "offset", "an integer", n)) : t < 0 ? new Nt.ERR_BUFFER_OUT_OF_BOUNDS : new Nt.ERR_OUT_OF_RANGE(e || "offset", `>= ${e?1:0} and <= ${t}`, n)
            }
            Gt("ERR_BUFFER_OUT_OF_BOUNDS", function(n) {
                return n ? `${n} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
            }, RangeError), Gt("ERR_INVALID_ARG_TYPE", function(n, t) {
                return `The "${n}" argument must be of type number. Received type ${typeof t}`
            }, TypeError), Gt("ERR_OUT_OF_RANGE", function(n, t, e) {
                let r = `The value of "${n}" is out of range.`,
                    i = e;
                return Number.isInteger(e) && Math.abs(e) > 2 ** 32 ? i = oe(String(e)) : "bigint" == typeof e && (i = String(e), (e > BigInt(2) ** BigInt(32) || e < -(BigInt(2) ** BigInt(32))) && (i = oe(i)), i += "n"), r += ` It must be ${t}. Received ${i}`, r
            }, RangeError);
            const fe = /[^+/0-9A-Za-z-_]/g;

            function vt(n, t) {
                let e;
                t = t || 1 / 0;
                const r = n.length;
                let i = null;
                const c = [];
                for (let l = 0; l < r; ++l) {
                    if (e = n.charCodeAt(l), e > 55295 && e < 57344) {
                        if (!i) {
                            if (e > 56319) {
                                (t -= 3) > -1 && c.push(239, 191, 189);
                                continue
                            }
                            if (l + 1 === r) {
                                (t -= 3) > -1 && c.push(239, 191, 189);
                                continue
                            }
                            i = e;
                            continue
                        }
                        if (e < 56320) {
                            (t -= 3) > -1 && c.push(239, 191, 189), i = e;
                            continue
                        }
                        e = 65536 + (i - 55296 << 10 | e - 56320)
                    } else i && (t -= 3) > -1 && c.push(239, 191, 189);
                    if (i = null, e < 128) {
                        if ((t -= 1) < 0) break;
                        c.push(e)
                    } else if (e < 2048) {
                        if ((t -= 2) < 0) break;
                        c.push(e >> 6 | 192, 63 & e | 128)
                    } else if (e < 65536) {
                        if ((t -= 3) < 0) break;
                        c.push(e >> 12 | 224, e >> 6 & 63 | 128, 63 & e | 128)
                    } else {
                        if (!(e < 1114112)) throw new Error("Invalid code point");
                        if ((t -= 4) < 0) break;
                        c.push(e >> 18 | 240, e >> 12 & 63 | 128, e >> 6 & 63 | 128, 63 & e | 128)
                    }
                }
                return c
            }

            function se(n) {
                return v.toByteArray(function he(n) {
                    if ((n = (n = n.split("=")[0]).trim().replace(fe, "")).length < 2) return "";
                    for (; n.length % 4 != 0;) n += "=";
                    return n
                }(n))
            }

            function Vt(n, t, e, r) {
                let i;
                for (i = 0; i < r && !(i + e >= t.length || i >= n.length); ++i) t[i + e] = n[i];
                return i
            }

            function o(n, t) {
                return n instanceof t || null != n && null != n.constructor && null != n.constructor.name && n.constructor.name === t.name
            }

            function u(n) {
                return n != n
            }
            const d = function() {
                const n = "0123456789abcdef",
                    t = new Array(256);
                for (let e = 0; e < 16; ++e) {
                    const r = 16 * e;
                    for (let i = 0; i < 16; ++i) t[r + i] = n[e] + n[i]
                }
                return t
            }();

            function h(n) {
                return typeof BigInt > "u" ? y : n
            }

            function y() {
                throw new Error("BigInt not supported")
            }
        },
        22601: (Bt, at) => {
            at.read = function(X, v, dt, yt, Y) {
                var it, U, a = 8 * Y - yt - 1,
                    et = (1 << a) - 1,
                    Et = et >> 1,
                    nt = -7,
                    rt = dt ? Y - 1 : 0,
                    Z = dt ? -1 : 1,
                    b = X[v + rt];
                for (rt += Z, it = b & (1 << -nt) - 1, b >>= -nt, nt += a; nt > 0; it = 256 * it + X[v + rt], rt += Z, nt -= 8);
                for (U = it & (1 << -nt) - 1, it >>= -nt, nt += yt; nt > 0; U = 256 * U + X[v + rt], rt += Z, nt -= 8);
                if (0 === it) it = 1 - Et;
                else {
                    if (it === et) return U ? NaN : 1 / 0 * (b ? -1 : 1);
                    U += Math.pow(2, yt), it -= Et
                }
                return (b ? -1 : 1) * U * Math.pow(2, it - yt)
            }, at.write = function(X, v, dt, yt, Y, it) {
                var U, a, et, Et = 8 * it - Y - 1,
                    nt = (1 << Et) - 1,
                    rt = nt >> 1,
                    Z = 23 === Y ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    b = yt ? 0 : it - 1,
                    L = yt ? 1 : -1,
                    S = v < 0 || 0 === v && 1 / v < 0 ? 1 : 0;
                for (v = Math.abs(v), isNaN(v) || v === 1 / 0 ? (a = isNaN(v) ? 1 : 0, U = nt) : (U = Math.floor(Math.log(v) / Math.LN2), v * (et = Math.pow(2, -U)) < 1 && (U--, et *= 2), (v += U + rt >= 1 ? Z / et : Z * Math.pow(2, 1 - rt)) * et >= 2 && (U++, et /= 2), U + rt >= nt ? (a = 0, U = nt) : U + rt >= 1 ? (a = (v * et - 1) * Math.pow(2, Y), U += rt) : (a = v * Math.pow(2, rt - 1) * Math.pow(2, Y), U = 0)); Y >= 8; X[dt + b] = 255 & a, b += L, a /= 256, Y -= 8);
                for (U = U << Y | a, Et += Y; Et > 0; X[dt + b] = 255 & U, b += L, U /= 256, Et -= 8);
                X[dt + b - L] |= 128 * S
            }
        },
        48332: () => {
            "use strict";
            ! function(o) {
                const u = o.performance;

                function d($) {
                    u && u.mark && u.mark($)
                }

                function h($, I) {
                    u && u.measure && u.measure($, I)
                }
                d("Zone");
                const y = o.__Zone_symbol_prefix || "__zone_symbol__";

                function n($) {
                    return y + $
                }
                const t = !0 === o[n("forceDuplicateZoneCheck")];
                if (o.Zone) {
                    if (t || "function" != typeof o.Zone.__symbol__) throw new Error("Zone already loaded.");
                    return o.Zone
                }
                let e = (() => {
                    class $ {
                        static# t = this.__symbol__ = n;
                        static assertZonePatched() {
                            if (o.Promise !== At.ZoneAwarePromise) throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")
                        }
                        static get root() {
                            let s = $.current;
                            for (; s.parent;) s = s.parent;
                            return s
                        }
                        static get current() {
                            return ot.zone
                        }
                        static get currentTask() {
                            return Ct
                        }
                        static __load_patch(s, f, A = !1) {
                            if (At.hasOwnProperty(s)) {
                                if (!A && t) throw Error("Already loaded patch: " + s)
                            } else if (!o["__Zone_disable_" + s]) {
                                const M = "Zone:" + s;
                                d(M), At[s] = f(o, $, ht), h(M, M)
                            }
                        }
                        get parent() {
                            return this._parent
                        }
                        get name() {
                            return this._name
                        }
                        constructor(s, f) {
                            this._parent = s, this._name = f ? f.name || "unnamed" : "<root>", this._properties = f && f.properties || {}, this._zoneDelegate = new i(this, this._parent && this._parent._zoneDelegate, f)
                        }
                        get(s) {
                            const f = this.getZoneWith(s);
                            if (f) return f._properties[s]
                        }
                        getZoneWith(s) {
                            let f = this;
                            for (; f;) {
                                if (f._properties.hasOwnProperty(s)) return f;
                                f = f._parent
                            }
                            return null
                        }
                        fork(s) {
                            if (!s) throw new Error("ZoneSpec required!");
                            return this._zoneDelegate.fork(this, s)
                        }
                        wrap(s, f) {
                            if ("function" != typeof s) throw new Error("Expecting function got: " + s);
                            const A = this._zoneDelegate.intercept(this, s, f),
                                M = this;
                            return function() {
                                return M.runGuarded(A, this, arguments, f)
                            }
                        }
                        run(s, f, A, M) {
                            ot = {
                                parent: ot,
                                zone: this
                            };
                            try {
                                return this._zoneDelegate.invoke(this, s, f, A, M)
                            } finally {
                                ot = ot.parent
                            }
                        }
                        runGuarded(s, f = null, A, M) {
                            ot = {
                                parent: ot,
                                zone: this
                            };
                            try {
                                try {
                                    return this._zoneDelegate.invoke(this, s, f, A, M)
                                } catch (gt) {
                                    if (this._zoneDelegate.handleError(this, gt)) throw gt
                                }
                            } finally {
                                ot = ot.parent
                            }
                        }
                        runTask(s, f, A) {
                            if (s.zone != this) throw new Error("A task can only be run in the zone of creation! (Creation: " + (s.zone || mt).name + "; Execution: " + this.name + ")");
                            if (s.state === q && (s.type === kt || s.type === F)) return;
                            const M = s.state != x;
                            M && s._transitionTo(x, W), s.runCount++;
                            const gt = Ct;
                            Ct = s, ot = {
                                parent: ot,
                                zone: this
                            };
                            try {
                                s.type == F && s.data && !s.data.isPeriodic && (s.cancelFn = void 0);
                                try {
                                    return this._zoneDelegate.invokeTask(this, s, f, A)
                                } catch (E) {
                                    if (this._zoneDelegate.handleError(this, E)) throw E
                                }
                            } finally {
                                s.state !== q && s.state !== T && (s.type == kt || s.data && s.data.isPeriodic ? M && s._transitionTo(W, x) : (s.runCount = 0, this._updateTaskCount(s, -1), M && s._transitionTo(q, x, q))), ot = ot.parent, Ct = gt
                            }
                        }
                        scheduleTask(s) {
                            if (s.zone && s.zone !== this) {
                                let A = this;
                                for (; A;) {
                                    if (A === s.zone) throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${s.zone.name}`);
                                    A = A.parent
                                }
                            }
                            s._transitionTo(ft, q);
                            const f = [];
                            s._zoneDelegates = f, s._zone = this;
                            try {
                                s = this._zoneDelegate.scheduleTask(this, s)
                            } catch (A) {
                                throw s._transitionTo(T, ft, q), this._zoneDelegate.handleError(this, A), A
                            }
                            return s._zoneDelegates === f && this._updateTaskCount(s, 1), s.state == ft && s._transitionTo(W, ft), s
                        }
                        scheduleMicroTask(s, f, A, M) {
                            return this.scheduleTask(new c(V, s, f, A, M, void 0))
                        }
                        scheduleMacroTask(s, f, A, M, gt) {
                            return this.scheduleTask(new c(F, s, f, A, M, gt))
                        }
                        scheduleEventTask(s, f, A, M, gt) {
                            return this.scheduleTask(new c(kt, s, f, A, M, gt))
                        }
                        cancelTask(s) {
                            if (s.zone != this) throw new Error("A task can only be cancelled in the zone of creation! (Creation: " + (s.zone || mt).name + "; Execution: " + this.name + ")");
                            if (s.state === W || s.state === x) {
                                s._transitionTo(z, W, x);
                                try {
                                    this._zoneDelegate.cancelTask(this, s)
                                } catch (f) {
                                    throw s._transitionTo(T, z), this._zoneDelegate.handleError(this, f), f
                                }
                                return this._updateTaskCount(s, -1), s._transitionTo(q, z), s.runCount = 0, s
                            }
                        }
                        _updateTaskCount(s, f) {
                            const A = s._zoneDelegates; - 1 == f && (s._zoneDelegates = null);
                            for (let M = 0; M < A.length; M++) A[M]._updateTaskCount(s.type, f)
                        }
                    }
                    return $
                })();
                const r = {
                    name: "",
                    onHasTask: ($, I, s, f) => $.hasTask(s, f),
                    onScheduleTask: ($, I, s, f) => $.scheduleTask(s, f),
                    onInvokeTask: ($, I, s, f, A, M) => $.invokeTask(s, f, A, M),
                    onCancelTask: ($, I, s, f) => $.cancelTask(s, f)
                };
                class i {
                    constructor(I, s, f) {
                        this._taskCounts = {
                            microTask: 0,
                            macroTask: 0,
                            eventTask: 0
                        }, this.zone = I, this._parentDelegate = s, this._forkZS = f && (f && f.onFork ? f : s._forkZS), this._forkDlgt = f && (f.onFork ? s : s._forkDlgt), this._forkCurrZone = f && (f.onFork ? this.zone : s._forkCurrZone), this._interceptZS = f && (f.onIntercept ? f : s._interceptZS), this._interceptDlgt = f && (f.onIntercept ? s : s._interceptDlgt), this._interceptCurrZone = f && (f.onIntercept ? this.zone : s._interceptCurrZone), this._invokeZS = f && (f.onInvoke ? f : s._invokeZS), this._invokeDlgt = f && (f.onInvoke ? s : s._invokeDlgt), this._invokeCurrZone = f && (f.onInvoke ? this.zone : s._invokeCurrZone), this._handleErrorZS = f && (f.onHandleError ? f : s._handleErrorZS), this._handleErrorDlgt = f && (f.onHandleError ? s : s._handleErrorDlgt), this._handleErrorCurrZone = f && (f.onHandleError ? this.zone : s._handleErrorCurrZone), this._scheduleTaskZS = f && (f.onScheduleTask ? f : s._scheduleTaskZS), this._scheduleTaskDlgt = f && (f.onScheduleTask ? s : s._scheduleTaskDlgt), this._scheduleTaskCurrZone = f && (f.onScheduleTask ? this.zone : s._scheduleTaskCurrZone), this._invokeTaskZS = f && (f.onInvokeTask ? f : s._invokeTaskZS), this._invokeTaskDlgt = f && (f.onInvokeTask ? s : s._invokeTaskDlgt), this._invokeTaskCurrZone = f && (f.onInvokeTask ? this.zone : s._invokeTaskCurrZone), this._cancelTaskZS = f && (f.onCancelTask ? f : s._cancelTaskZS), this._cancelTaskDlgt = f && (f.onCancelTask ? s : s._cancelTaskDlgt), this._cancelTaskCurrZone = f && (f.onCancelTask ? this.zone : s._cancelTaskCurrZone), this._hasTaskZS = null, this._hasTaskDlgt = null, this._hasTaskDlgtOwner = null, this._hasTaskCurrZone = null;
                        const A = f && f.onHasTask;
                        (A || s && s._hasTaskZS) && (this._hasTaskZS = A ? f : r, this._hasTaskDlgt = s, this._hasTaskDlgtOwner = this, this._hasTaskCurrZone = I, f.onScheduleTask || (this._scheduleTaskZS = r, this._scheduleTaskDlgt = s, this._scheduleTaskCurrZone = this.zone), f.onInvokeTask || (this._invokeTaskZS = r, this._invokeTaskDlgt = s, this._invokeTaskCurrZone = this.zone), f.onCancelTask || (this._cancelTaskZS = r, this._cancelTaskDlgt = s, this._cancelTaskCurrZone = this.zone))
                    }
                    fork(I, s) {
                        return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, I, s) : new e(I, s)
                    }
                    intercept(I, s, f) {
                        return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, I, s, f) : s
                    }
                    invoke(I, s, f, A, M) {
                        return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, I, s, f, A, M) : s.apply(f, A)
                    }
                    handleError(I, s) {
                        return !this._handleErrorZS || this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, I, s)
                    }
                    scheduleTask(I, s) {
                        let f = s;
                        if (this._scheduleTaskZS) this._hasTaskZS && f._zoneDelegates.push(this._hasTaskDlgtOwner), f = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, I, s), f || (f = s);
                        else if (s.scheduleFn) s.scheduleFn(s);
                        else {
                            if (s.type != V) throw new Error("Task is missing scheduleFn.");
                            O(s)
                        }
                        return f
                    }
                    invokeTask(I, s, f, A) {
                        return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, I, s, f, A) : s.callback.apply(f, A)
                    }
                    cancelTask(I, s) {
                        let f;
                        if (this._cancelTaskZS) f = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, I, s);
                        else {
                            if (!s.cancelFn) throw Error("Task is not cancelable");
                            f = s.cancelFn(s)
                        }
                        return f
                    }
                    hasTask(I, s) {
                        try {
                            this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, I, s)
                        } catch (f) {
                            this.handleError(I, f)
                        }
                    }
                    _updateTaskCount(I, s) {
                        const f = this._taskCounts,
                            A = f[I],
                            M = f[I] = A + s;
                        if (M < 0) throw new Error("More tasks executed then were scheduled.");
                        0 != A && 0 != M || this.hasTask(this.zone, {
                            microTask: f.microTask > 0,
                            macroTask: f.macroTask > 0,
                            eventTask: f.eventTask > 0,
                            change: I
                        })
                    }
                }
                class c {
                    constructor(I, s, f, A, M, gt) {
                        if (this._zone = null, this.runCount = 0, this._zoneDelegates = null, this._state = "notScheduled", this.type = I, this.source = s, this.data = A, this.scheduleFn = M, this.cancelFn = gt, !f) throw new Error("callback is not defined");
                        this.callback = f;
                        const E = this;
                        this.invoke = I === kt && A && A.useG ? c.invokeTask : function() {
                            return c.invokeTask.call(o, E, this, arguments)
                        }
                    }
                    static invokeTask(I, s, f) {
                        I || (I = this), xt++;
                        try {
                            return I.runCount++, I.zone.runTask(I, s, f)
                        } finally {
                            1 == xt && k(), xt--
                        }
                    }
                    get zone() {
                        return this._zone
                    }
                    get state() {
                        return this._state
                    }
                    cancelScheduleRequest() {
                        this._transitionTo(q, ft)
                    }
                    _transitionTo(I, s, f) {
                        if (this._state !== s && this._state !== f) throw new Error(`${this.type} '${this.source}': can not transition to '${I}', expecting state '${s}'${f?" or '"+f+"'":""}, was '${this._state}'.`);
                        this._state = I, I == q && (this._zoneDelegates = null)
                    }
                    toString() {
                        return this.data && typeof this.data.handleId < "u" ? this.data.handleId.toString() : Object.prototype.toString.call(this)
                    }
                    toJSON() {
                        return {
                            type: this.type,
                            state: this.state,
                            source: this.source,
                            zone: this.zone.name,
                            runCount: this.runCount
                        }
                    }
                }
                const l = n("setTimeout"),
                    m = n("Promise"),
                    w = n("then");
                let D, P = [],
                    R = !1;

                function ut($) {
                    if (D || o[m] && (D = o[m].resolve(0)), D) {
                        let I = D[w];
                        I || (I = D.then), I.call(D, $)
                    } else o[l]($, 0)
                }

                function O($) {
                    0 === xt && 0 === P.length && ut(k), $ && P.push($)
                }

                function k() {
                    if (!R) {
                        for (R = !0; P.length;) {
                            const $ = P;
                            P = [];
                            for (let I = 0; I < $.length; I++) {
                                const s = $[I];
                                try {
                                    s.zone.runTask(s, null, null)
                                } catch (f) {
                                    ht.onUnhandledError(f)
                                }
                            }
                        }
                        ht.microtaskDrainDone(), R = !1
                    }
                }
                const mt = {
                        name: "NO ZONE"
                    },
                    q = "notScheduled",
                    ft = "scheduling",
                    W = "scheduled",
                    x = "running",
                    z = "canceling",
                    T = "unknown",
                    V = "microTask",
                    F = "macroTask",
                    kt = "eventTask",
                    At = {},
                    ht = {
                        symbol: n,
                        currentZoneFrame: () => ot,
                        onUnhandledError: st,
                        microtaskDrainDone: st,
                        scheduleMicroTask: O,
                        showUncaughtError: () => !e[n("ignoreConsoleErrorUncaughtError")],
                        patchEventTarget: () => [],
                        patchOnProperties: st,
                        patchMethod: () => st,
                        bindArguments: () => [],
                        patchThen: () => st,
                        patchMacroTask: () => st,
                        patchEventPrototype: () => st,
                        isIEOrEdge: () => !1,
                        getGlobalObjects: () => {},
                        ObjectDefineProperty: () => st,
                        ObjectGetOwnPropertyDescriptor: () => {},
                        ObjectCreate: () => {},
                        ArraySlice: () => [],
                        patchClass: () => st,
                        wrapWithCurrentZone: () => st,
                        filterProperties: () => [],
                        attachOriginToPatched: () => st,
                        _redefineProperty: () => st,
                        patchCallbacks: () => st,
                        nativeScheduleMicroTask: ut
                    };
                let ot = {
                        parent: null,
                        zone: new e(null, null)
                    },
                    Ct = null,
                    xt = 0;

                function st() {}
                h("Zone", "Zone"), o.Zone = e
            }(typeof window < "u" && window || typeof self < "u" && self || global);
            const Bt = Object.getOwnPropertyDescriptor,
                at = Object.defineProperty,
                X = Object.getPrototypeOf,
                v = Object.create,
                dt = Array.prototype.slice,
                yt = "addEventListener",
                Y = "removeEventListener",
                it = Zone.__symbol__(yt),
                U = Zone.__symbol__(Y),
                a = "true",
                et = "false",
                Et = Zone.__symbol__("");

            function nt(o, u) {
                return Zone.current.wrap(o, u)
            }

            function rt(o, u, d, h, y) {
                return Zone.current.scheduleMacroTask(o, u, d, h, y)
            }
            const Z = Zone.__symbol__,
                b = typeof window < "u",
                L = b ? window : void 0,
                S = b && L || "object" == typeof self && self || global,
                pt = "removeAttribute";

            function lt(o, u) {
                for (let d = o.length - 1; d >= 0; d--) "function" == typeof o[d] && (o[d] = nt(o[d], u + "_" + d));
                return o
            }

            function _t(o) {
                return !o || !1 !== o.writable && !("function" == typeof o.get && typeof o.set > "u")
            }
            const Pt = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope,
                Q = !("nw" in S) && typeof S.process < "u" && "[object process]" === {}.toString.call(S.process),
                jt = !Q && !Pt && !(!b || !L.HTMLElement),
                Wt = typeof S.process < "u" && "[object process]" === {}.toString.call(S.process) && !Pt && !(!b || !L.HTMLElement),
                Ht = {},
                te = function(o) {
                    if (!(o = o || S.event)) return;
                    let u = Ht[o.type];
                    u || (u = Ht[o.type] = Z("ON_PROPERTY" + o.type));
                    const d = this || o.target || S,
                        h = d[u];
                    let y;
                    return jt && d === L && "error" === o.type ? (y = h && h.call(this, o.message, o.filename, o.lineno, o.colno, o.error), !0 === y && o.preventDefault()) : (y = h && h.apply(this, arguments), null != y && !y && o.preventDefault()), y
                };

            function ee(o, u, d) {
                let h = Bt(o, u);
                if (!h && d && Bt(d, u) && (h = {
                        enumerable: !0,
                        configurable: !0
                    }), !h || !h.configurable) return;
                const y = Z("on" + u + "patched");
                if (o.hasOwnProperty(y) && o[y]) return;
                delete h.writable, delete h.value;
                const n = h.get,
                    t = h.set,
                    e = u.slice(2);
                let r = Ht[e];
                r || (r = Ht[e] = Z("ON_PROPERTY" + e)), h.set = function(i) {
                    let c = this;
                    !c && o === S && (c = S), c && ("function" == typeof c[r] && c.removeEventListener(e, te), t && t.call(c, null), c[r] = i, "function" == typeof i && c.addEventListener(e, te, !1))
                }, h.get = function() {
                    let i = this;
                    if (!i && o === S && (i = S), !i) return null;
                    const c = i[r];
                    if (c) return c;
                    if (n) {
                        let l = n.call(this);
                        if (l) return h.set.call(this, l), "function" == typeof i[pt] && i.removeAttribute(u), l
                    }
                    return null
                }, at(o, u, h), o[y] = !0
            }

            function ne(o, u, d) {
                if (u)
                    for (let h = 0; h < u.length; h++) ee(o, "on" + u[h], d);
                else {
                    const h = [];
                    for (const y in o) "on" == y.slice(0, 2) && h.push(y);
                    for (let y = 0; y < h.length; y++) ee(o, h[y], d)
                }
            }
            const It = Z("originalInstance");

            function Mt(o) {
                const u = S[o];
                if (!u) return;
                S[Z(o)] = u, S[o] = function() {
                    const y = lt(arguments, o);
                    switch (y.length) {
                        case 0:
                            this[It] = new u;
                            break;
                        case 1:
                            this[It] = new u(y[0]);
                            break;
                        case 2:
                            this[It] = new u(y[0], y[1]);
                            break;
                        case 3:
                            this[It] = new u(y[0], y[1], y[2]);
                            break;
                        case 4:
                            this[It] = new u(y[0], y[1], y[2], y[3]);
                            break;
                        default:
                            throw new Error("Arg list too long.")
                    }
                }, Rt(S[o], u);
                const d = new u(function() {});
                let h;
                for (h in d) "XMLHttpRequest" === o && "responseBlob" === h || function(y) {
                    "function" == typeof d[y] ? S[o].prototype[y] = function() {
                        return this[It][y].apply(this[It], arguments)
                    } : at(S[o].prototype, y, {
                        set: function(n) {
                            "function" == typeof n ? (this[It][y] = nt(n, o + "." + y), Rt(this[It][y], n)) : this[It][y] = n
                        },
                        get: function() {
                            return this[It][y]
                        }
                    })
                }(h);
                for (h in u) "prototype" !== h && u.hasOwnProperty(h) && (S[o][h] = u[h])
            }

            function bt(o, u, d) {
                let h = o;
                for (; h && !h.hasOwnProperty(u);) h = X(h);
                !h && o[u] && (h = o);
                const y = Z(u);
                let n = null;
                if (h && (!(n = h[y]) || !h.hasOwnProperty(y)) && (n = h[y] = h[u], _t(h && Bt(h, u)))) {
                    const e = d(n, y, u);
                    h[u] = function() {
                        return e(this, arguments)
                    }, Rt(h[u], n)
                }
                return n
            }

            function re(o, u, d) {
                let h = null;

                function y(n) {
                    const t = n.data;
                    return t.args[t.cbIdx] = function() {
                        n.invoke.apply(this, arguments)
                    }, h.apply(t.target, t.args), n
                }
                h = bt(o, u, n => function(t, e) {
                    const r = d(t, e);
                    return r.cbIdx >= 0 && "function" == typeof e[r.cbIdx] ? rt(r.name, e[r.cbIdx], r, y) : n.apply(t, e)
                })
            }

            function Rt(o, u) {
                o[Z("OriginalDelegate")] = u
            }
            let ie = !1,
                Xt = !1;

            function ae() {
                if (ie) return Xt;
                ie = !0;
                try {
                    const o = L.navigator.userAgent;
                    (-1 !== o.indexOf("MSIE ") || -1 !== o.indexOf("Trident/") || -1 !== o.indexOf("Edge/")) && (Xt = !0)
                } catch {}
                return Xt
            }
            Zone.__load_patch("ZoneAwarePromise", (o, u, d) => {
                const h = Object.getOwnPropertyDescriptor,
                    y = Object.defineProperty,
                    t = d.symbol,
                    e = [],
                    r = !0 === o[t("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],
                    i = t("Promise"),
                    c = t("then"),
                    l = "__creationTrace__";
                d.onUnhandledError = E => {
                    if (d.showUncaughtError()) {
                        const _ = E && E.rejection;
                        _ ? console.error("Unhandled Promise rejection:", _ instanceof Error ? _.message : _, "; Zone:", E.zone.name, "; Task:", E.task && E.task.source, "; Value:", _, _ instanceof Error ? _.stack : void 0) : console.error(E)
                    }
                }, d.microtaskDrainDone = () => {
                    for (; e.length;) {
                        const E = e.shift();
                        try {
                            E.zone.runGuarded(() => {
                                throw E.throwOriginal ? E.rejection : E
                            })
                        } catch (_) {
                            w(_)
                        }
                    }
                };
                const m = t("unhandledPromiseRejectionHandler");

                function w(E) {
                    d.onUnhandledError(E);
                    try {
                        const _ = u[m];
                        "function" == typeof _ && _.call(this, E)
                    } catch {}
                }

                function P(E) {
                    return E && E.then
                }

                function R(E) {
                    return E
                }

                function D(E) {
                    return s.reject(E)
                }
                const ut = t("state"),
                    O = t("value"),
                    k = t("finally"),
                    mt = t("parentPromiseValue"),
                    q = t("parentPromiseState"),
                    ft = "Promise.then",
                    W = null,
                    x = !0,
                    z = !1,
                    T = 0;

                function V(E, _) {
                    return p => {
                        try {
                            ht(E, _, p)
                        } catch (g) {
                            ht(E, !1, g)
                        }
                    }
                }
                const F = function() {
                        let E = !1;
                        return function(p) {
                            return function() {
                                E || (E = !0, p.apply(null, arguments))
                            }
                        }
                    },
                    kt = "Promise resolved with itself",
                    At = t("currentTaskTrace");

                function ht(E, _, p) {
                    const g = F();
                    if (E === p) throw new TypeError(kt);
                    if (E[ut] === W) {
                        let C = null;
                        try {
                            ("object" == typeof p || "function" == typeof p) && (C = p && p.then)
                        } catch (N) {
                            return g(() => {
                                ht(E, !1, N)
                            })(), E
                        }
                        if (_ !== z && p instanceof s && p.hasOwnProperty(ut) && p.hasOwnProperty(O) && p[ut] !== W) Ct(p), ht(E, p[ut], p[O]);
                        else if (_ !== z && "function" == typeof C) try {
                            C.call(p, g(V(E, _)), g(V(E, !1)))
                        } catch (N) {
                            g(() => {
                                ht(E, !1, N)
                            })()
                        } else {
                            E[ut] = _;
                            const N = E[O];
                            if (E[O] = p, E[k] === k && _ === x && (E[ut] = E[q], E[O] = E[mt]), _ === z && p instanceof Error) {
                                const B = u.currentTask && u.currentTask.data && u.currentTask.data[l];
                                B && y(p, At, {
                                    configurable: !0,
                                    enumerable: !1,
                                    writable: !0,
                                    value: B
                                })
                            }
                            for (let B = 0; B < N.length;) xt(E, N[B++], N[B++], N[B++], N[B++]);
                            if (0 == N.length && _ == z) {
                                E[ut] = T;
                                let B = p;
                                try {
                                    throw new Error("Uncaught (in promise): " + function n(E) {
                                        return E && E.toString === Object.prototype.toString ? (E.constructor && E.constructor.name || "") + ": " + JSON.stringify(E) : E ? E.toString() : Object.prototype.toString.call(E)
                                    }(p) + (p && p.stack ? "\n" + p.stack : ""))
                                } catch (j) {
                                    B = j
                                }
                                r && (B.throwOriginal = !0), B.rejection = p, B.promise = E, B.zone = u.current, B.task = u.currentTask, e.push(B), d.scheduleMicroTask()
                            }
                        }
                    }
                    return E
                }
                const ot = t("rejectionHandledHandler");

                function Ct(E) {
                    if (E[ut] === T) {
                        try {
                            const _ = u[ot];
                            _ && "function" == typeof _ && _.call(this, {
                                rejection: E[O],
                                promise: E
                            })
                        } catch {}
                        E[ut] = z;
                        for (let _ = 0; _ < e.length; _++) E === e[_].promise && e.splice(_, 1)
                    }
                }

                function xt(E, _, p, g, C) {
                    Ct(E);
                    const N = E[ut],
                        B = N ? "function" == typeof g ? g : R : "function" == typeof C ? C : D;
                    _.scheduleMicroTask(ft, () => {
                        try {
                            const j = E[O],
                                H = !!p && k === p[k];
                            H && (p[mt] = j, p[q] = N);
                            const G = _.run(B, void 0, H && B !== D && B !== R ? [] : [j]);
                            ht(p, !0, G)
                        } catch (j) {
                            ht(p, !1, j)
                        }
                    }, p)
                }
                const $ = function() {},
                    I = o.AggregateError;
                class s {
                    static toString() {
                        return "function ZoneAwarePromise() { [native code] }"
                    }
                    static resolve(_) {
                        return ht(new this(null), x, _)
                    }
                    static reject(_) {
                        return ht(new this(null), z, _)
                    }
                    static any(_) {
                        if (!_ || "function" != typeof _[Symbol.iterator]) return Promise.reject(new I([], "All promises were rejected"));
                        const p = [];
                        let g = 0;
                        try {
                            for (let B of _) g++, p.push(s.resolve(B))
                        } catch {
                            return Promise.reject(new I([], "All promises were rejected"))
                        }
                        if (0 === g) return Promise.reject(new I([], "All promises were rejected"));
                        let C = !1;
                        const N = [];
                        return new s((B, j) => {
                            for (let H = 0; H < p.length; H++) p[H].then(G => {
                                C || (C = !0, B(G))
                            }, G => {
                                N.push(G), g--, 0 === g && (C = !0, j(new I(N, "All promises were rejected")))
                            })
                        })
                    }
                    static race(_) {
                        let p, g, C = new this((j, H) => {
                            p = j, g = H
                        });

                        function N(j) {
                            p(j)
                        }

                        function B(j) {
                            g(j)
                        }
                        for (let j of _) P(j) || (j = this.resolve(j)), j.then(N, B);
                        return C
                    }
                    static all(_) {
                        return s.allWithCallback(_)
                    }
                    static allSettled(_) {
                        return (this && this.prototype instanceof s ? this : s).allWithCallback(_, {
                            thenCallback: g => ({
                                status: "fulfilled",
                                value: g
                            }),
                            errorCallback: g => ({
                                status: "rejected",
                                reason: g
                            })
                        })
                    }
                    static allWithCallback(_, p) {
                        let g, C, N = new this((G, J) => {
                                g = G, C = J
                            }),
                            B = 2,
                            j = 0;
                        const H = [];
                        for (let G of _) {
                            P(G) || (G = this.resolve(G));
                            const J = j;
                            try {
                                G.then(K => {
                                    H[J] = p ? p.thenCallback(K) : K, B--, 0 === B && g(H)
                                }, K => {
                                    p ? (H[J] = p.errorCallback(K), B--, 0 === B && g(H)) : C(K)
                                })
                            } catch (K) {
                                C(K)
                            }
                            B++, j++
                        }
                        return B -= 2, 0 === B && g(H), N
                    }
                    constructor(_) {
                        const p = this;
                        if (!(p instanceof s)) throw new Error("Must be an instanceof Promise.");
                        p[ut] = W, p[O] = [];
                        try {
                            const g = F();
                            _ && _(g(V(p, x)), g(V(p, z)))
                        } catch (g) {
                            ht(p, !1, g)
                        }
                    }
                    get[Symbol.toStringTag]() {
                        return "Promise"
                    }
                    get[Symbol.species]() {
                        return s
                    }
                    then(_, p) {
                        let g = this.constructor ? .[Symbol.species];
                        (!g || "function" != typeof g) && (g = this.constructor || s);
                        const C = new g($),
                            N = u.current;
                        return this[ut] == W ? this[O].push(N, C, _, p) : xt(this, N, C, _, p), C
                    } catch (_) {
                        return this.then(null, _)
                    } finally(_) {
                        let p = this.constructor ? .[Symbol.species];
                        (!p || "function" != typeof p) && (p = s);
                        const g = new p($);
                        g[k] = k;
                        const C = u.current;
                        return this[ut] == W ? this[O].push(C, g, _, _) : xt(this, C, g, _, _), g
                    }
                }
                s.resolve = s.resolve, s.reject = s.reject, s.race = s.race, s.all = s.all;
                const f = o[i] = o.Promise;
                o.Promise = s;
                const A = t("thenPatched");

                function M(E) {
                    const _ = E.prototype,
                        p = h(_, "then");
                    if (p && (!1 === p.writable || !p.configurable)) return;
                    const g = _.then;
                    _[c] = g, E.prototype.then = function(C, N) {
                        return new s((j, H) => {
                            g.call(this, j, H)
                        }).then(C, N)
                    }, E[A] = !0
                }
                return d.patchThen = M, f && (M(f), bt(o, "fetch", E => function gt(E) {
                    return function(_, p) {
                        let g = E.apply(_, p);
                        if (g instanceof s) return g;
                        let C = g.constructor;
                        return C[A] || M(C), g
                    }
                }(E))), Promise[u.__symbol__("uncaughtPromiseErrors")] = e, s
            }), Zone.__load_patch("toString", o => {
                const u = Function.prototype.toString,
                    d = Z("OriginalDelegate"),
                    h = Z("Promise"),
                    y = Z("Error"),
                    n = function() {
                        if ("function" == typeof this) {
                            const i = this[d];
                            if (i) return "function" == typeof i ? u.call(i) : Object.prototype.toString.call(i);
                            if (this === Promise) {
                                const c = o[h];
                                if (c) return u.call(c)
                            }
                            if (this === Error) {
                                const c = o[y];
                                if (c) return u.call(c)
                            }
                        }
                        return u.call(this)
                    };
                n[d] = u, Function.prototype.toString = n;
                const t = Object.prototype.toString;
                Object.prototype.toString = function() {
                    return "function" == typeof Promise && this instanceof Promise ? "[object Promise]" : t.call(this)
                }
            });
            let tt = !1;
            if (typeof window < "u") try {
                const o = Object.defineProperty({}, "passive", {
                    get: function() {
                        tt = !0
                    }
                });
                window.addEventListener("test", o, o), window.removeEventListener("test", o, o)
            } catch {
                tt = !1
            }
            const Tt = {
                    useG: !0
                },
                wt = {},
                qt = {},
                Yt = new RegExp("^" + Et + "(\\w+)(true|false)$"),
                zt = Z("propagationStopped");

            function Jt(o, u) {
                const d = (u ? u(o) : o) + et,
                    h = (u ? u(o) : o) + a,
                    y = Et + d,
                    n = Et + h;
                wt[o] = {}, wt[o][et] = y, wt[o][a] = n
            }

            function Nt(o, u, d, h) {
                const y = h && h.add || yt,
                    n = h && h.rm || Y,
                    t = h && h.listeners || "eventListeners",
                    e = h && h.rmAll || "removeAllListeners",
                    r = Z(y),
                    i = "." + y + ":",
                    c = "prependListener",
                    l = "." + c + ":",
                    m = function(O, k, mt) {
                        if (O.isRemoved) return;
                        const q = O.callback;
                        let ft;
                        "object" == typeof q && q.handleEvent && (O.callback = x => q.handleEvent(x), O.originalDelegate = q);
                        try {
                            O.invoke(O, k, [mt])
                        } catch (x) {
                            ft = x
                        }
                        const W = O.options;
                        return W && "object" == typeof W && W.once && k[n].call(k, mt.type, O.originalDelegate ? O.originalDelegate : O.callback, W), ft
                    };

                function w(O, k, mt) {
                    if (!(k = k || o.event)) return;
                    const q = O || k.target || o,
                        ft = q[wt[k.type][mt ? a : et]];
                    if (ft) {
                        const W = [];
                        if (1 === ft.length) {
                            const x = m(ft[0], q, k);
                            x && W.push(x)
                        } else {
                            const x = ft.slice();
                            for (let z = 0; z < x.length && (!k || !0 !== k[zt]); z++) {
                                const T = m(x[z], q, k);
                                T && W.push(T)
                            }
                        }
                        if (1 === W.length) throw W[0];
                        for (let x = 0; x < W.length; x++) {
                            const z = W[x];
                            u.nativeScheduleMicroTask(() => {
                                throw z
                            })
                        }
                    }
                }
                const P = function(O) {
                        return w(this, O, !1)
                    },
                    R = function(O) {
                        return w(this, O, !0)
                    };

                function D(O, k) {
                    if (!O) return !1;
                    let mt = !0;
                    k && void 0 !== k.useG && (mt = k.useG);
                    const q = k && k.vh;
                    let ft = !0;
                    k && void 0 !== k.chkDup && (ft = k.chkDup);
                    let W = !1;
                    k && void 0 !== k.rt && (W = k.rt);
                    let x = O;
                    for (; x && !x.hasOwnProperty(y);) x = X(x);
                    if (!x && O[y] && (x = O), !x || x[r]) return !1;
                    const z = k && k.eventNameToString,
                        T = {},
                        V = x[r] = x[y],
                        F = x[Z(n)] = x[n],
                        kt = x[Z(t)] = x[t],
                        At = x[Z(e)] = x[e];
                    let ht;
                    k && k.prepend && (ht = x[Z(k.prepend)] = x[k.prepend]);
                    const s = mt ? function(p) {
                            if (!T.isExisting) return V.call(T.target, T.eventName, T.capture ? R : P, T.options)
                        } : function(p) {
                            return V.call(T.target, T.eventName, p.invoke, T.options)
                        },
                        f = mt ? function(p) {
                            if (!p.isRemoved) {
                                const g = wt[p.eventName];
                                let C;
                                g && (C = g[p.capture ? a : et]);
                                const N = C && p.target[C];
                                if (N)
                                    for (let B = 0; B < N.length; B++)
                                        if (N[B] === p) {
                                            N.splice(B, 1), p.isRemoved = !0, 0 === N.length && (p.allRemoved = !0, p.target[C] = null);
                                            break
                                        }
                            }
                            if (p.allRemoved) return F.call(p.target, p.eventName, p.capture ? R : P, p.options)
                        } : function(p) {
                            return F.call(p.target, p.eventName, p.invoke, p.options)
                        },
                        M = k && k.diff ? k.diff : function(p, g) {
                            const C = typeof g;
                            return "function" === C && p.callback === g || "object" === C && p.originalDelegate === g
                        },
                        gt = Zone[Z("UNPATCHED_EVENTS")],
                        E = o[Z("PASSIVE_EVENTS")],
                        _ = function(p, g, C, N, B = !1, j = !1) {
                            return function() {
                                const H = this || o;
                                let G = arguments[0];
                                k && k.transferEventName && (G = k.transferEventName(G));
                                let J = arguments[1];
                                if (!J) return p.apply(this, arguments);
                                if (Q && "uncaughtException" === G) return p.apply(this, arguments);
                                let K = !1;
                                if ("function" != typeof J) {
                                    if (!J.handleEvent) return p.apply(this, arguments);
                                    K = !0
                                }
                                if (q && !q(p, J, H, arguments)) return;
                                const Ut = tt && !!E && -1 !== E.indexOf(G),
                                    St = function ot(p, g) {
                                        return !tt && "object" == typeof p && p ? !!p.capture : tt && g ? "boolean" == typeof p ? {
                                            capture: p,
                                            passive: !0
                                        } : p ? "object" == typeof p && !1 !== p.passive ? { ...p,
                                            passive: !0
                                        } : p : {
                                            passive: !0
                                        } : p
                                    }(arguments[2], Ut);
                                if (gt)
                                    for (let Zt = 0; Zt < gt.length; Zt++)
                                        if (G === gt[Zt]) return Ut ? p.call(H, G, J, St) : p.apply(this, arguments);
                                const de = !!St && ("boolean" == typeof St || St.capture),
                                    Ee = !(!St || "object" != typeof St) && St.once,
                                    we = Zone.current;
                                let ye = wt[G];
                                ye || (Jt(G, z), ye = wt[G]);
                                const _e = ye[de ? a : et];
                                let ce, $t = H[_e],
                                    ge = !1;
                                if ($t) {
                                    if (ge = !0, ft)
                                        for (let Zt = 0; Zt < $t.length; Zt++)
                                            if (M($t[Zt], J)) return
                                } else $t = H[_e] = [];
                                const me = H.constructor.name,
                                    Te = qt[me];
                                Te && (ce = Te[G]), ce || (ce = me + g + (z ? z(G) : G)), T.options = St, Ee && (T.options.once = !1), T.target = H, T.capture = de, T.eventName = G, T.isExisting = ge;
                                const Qt = mt ? Tt : void 0;
                                Qt && (Qt.taskData = T);
                                const Lt = we.scheduleEventTask(ce, J, Qt, C, N);
                                return T.target = null, Qt && (Qt.taskData = null), Ee && (St.once = !0), !tt && "boolean" == typeof Lt.options || (Lt.options = St), Lt.target = H, Lt.capture = de, Lt.eventName = G, K && (Lt.originalDelegate = J), j ? $t.unshift(Lt) : $t.push(Lt), B ? H : void 0
                            }
                        };
                    return x[y] = _(V, i, s, f, W), ht && (x[c] = _(ht, l, function(p) {
                        return ht.call(T.target, T.eventName, p.invoke, T.options)
                    }, f, W, !0)), x[n] = function() {
                        const p = this || o;
                        let g = arguments[0];
                        k && k.transferEventName && (g = k.transferEventName(g));
                        const C = arguments[2],
                            N = !!C && ("boolean" == typeof C || C.capture),
                            B = arguments[1];
                        if (!B) return F.apply(this, arguments);
                        if (q && !q(F, B, p, arguments)) return;
                        const j = wt[g];
                        let H;
                        j && (H = j[N ? a : et]);
                        const G = H && p[H];
                        if (G)
                            for (let J = 0; J < G.length; J++) {
                                const K = G[J];
                                if (M(K, B)) return G.splice(J, 1), K.isRemoved = !0, 0 === G.length && (K.allRemoved = !0, p[H] = null, "string" == typeof g) && (p[Et + "ON_PROPERTY" + g] = null), K.zone.cancelTask(K), W ? p : void 0
                            }
                        return F.apply(this, arguments)
                    }, x[t] = function() {
                        const p = this || o;
                        let g = arguments[0];
                        k && k.transferEventName && (g = k.transferEventName(g));
                        const C = [],
                            N = Gt(p, z ? z(g) : g);
                        for (let B = 0; B < N.length; B++) {
                            const j = N[B];
                            C.push(j.originalDelegate ? j.originalDelegate : j.callback)
                        }
                        return C
                    }, x[e] = function() {
                        const p = this || o;
                        let g = arguments[0];
                        if (g) {
                            k && k.transferEventName && (g = k.transferEventName(g));
                            const C = wt[g];
                            if (C) {
                                const j = p[C[et]],
                                    H = p[C[a]];
                                if (j) {
                                    const G = j.slice();
                                    for (let J = 0; J < G.length; J++) {
                                        const K = G[J];
                                        this[n].call(this, g, K.originalDelegate ? K.originalDelegate : K.callback, K.options)
                                    }
                                }
                                if (H) {
                                    const G = H.slice();
                                    for (let J = 0; J < G.length; J++) {
                                        const K = G[J];
                                        this[n].call(this, g, K.originalDelegate ? K.originalDelegate : K.callback, K.options)
                                    }
                                }
                            }
                        } else {
                            const C = Object.keys(p);
                            for (let N = 0; N < C.length; N++) {
                                const j = Yt.exec(C[N]);
                                let H = j && j[1];
                                H && "removeListener" !== H && this[e].call(this, H)
                            }
                            this[e].call(this, "removeListener")
                        }
                        if (W) return this
                    }, Rt(x[y], V), Rt(x[n], F), At && Rt(x[e], At), kt && Rt(x[t], kt), !0
                }
                let ut = [];
                for (let O = 0; O < d.length; O++) ut[O] = D(d[O], h);
                return ut
            }

            function Gt(o, u) {
                if (!u) {
                    const n = [];
                    for (let t in o) {
                        const e = Yt.exec(t);
                        let r = e && e[1];
                        if (r && (!u || r === u)) {
                            const i = o[t];
                            if (i)
                                for (let c = 0; c < i.length; c++) n.push(i[c])
                        }
                    }
                    return n
                }
                let d = wt[u];
                d || (Jt(u), d = wt[u]);
                const h = o[d[et]],
                    y = o[d[a]];
                return h ? y ? h.concat(y) : h.slice() : y ? y.slice() : []
            }

            function oe(o, u) {
                const d = o.Event;
                d && d.prototype && u.patchMethod(d.prototype, "stopImmediatePropagation", h => function(y, n) {
                    y[zt] = !0, h && h.apply(y, n)
                })
            }

            function le(o, u, d, h, y) {
                const n = Zone.__symbol__(h);
                if (u[n]) return;
                const t = u[n] = u[h];
                u[h] = function(e, r, i) {
                    return r && r.prototype && y.forEach(function(c) {
                        const l = `${d}.${h}::` + c,
                            m = r.prototype;
                        try {
                            if (m.hasOwnProperty(c)) {
                                const w = o.ObjectGetOwnPropertyDescriptor(m, c);
                                w && w.value ? (w.value = o.wrapWithCurrentZone(w.value, l), o._redefineProperty(r.prototype, c, w)) : m[c] && (m[c] = o.wrapWithCurrentZone(m[c], l))
                            } else m[c] && (m[c] = o.wrapWithCurrentZone(m[c], l))
                        } catch {}
                    }), t.call(u, e, r, i)
                }, o.attachOriginToPatched(u[h], t)
            }

            function Kt(o, u, d) {
                if (!d || 0 === d.length) return u;
                const h = d.filter(n => n.target === o);
                if (!h || 0 === h.length) return u;
                const y = h[0].ignoreProperties;
                return u.filter(n => -1 === y.indexOf(n))
            }

            function Ft(o, u, d, h) {
                o && ne(o, Kt(o, u, d), h)
            }

            function Dt(o) {
                return Object.getOwnPropertyNames(o).filter(u => u.startsWith("on") && u.length > 2).map(u => u.substring(2))
            }
            Zone.__load_patch("util", (o, u, d) => {
                const h = Dt(o);
                d.patchOnProperties = ne, d.patchMethod = bt, d.bindArguments = lt, d.patchMacroTask = re;
                const y = u.__symbol__("BLACK_LISTED_EVENTS"),
                    n = u.__symbol__("UNPATCHED_EVENTS");
                o[n] && (o[y] = o[n]), o[y] && (u[y] = u[n] = o[y]), d.patchEventPrototype = oe, d.patchEventTarget = Nt, d.isIEOrEdge = ae, d.ObjectDefineProperty = at, d.ObjectGetOwnPropertyDescriptor = Bt, d.ObjectCreate = v, d.ArraySlice = dt, d.patchClass = Mt, d.wrapWithCurrentZone = nt, d.filterProperties = Kt, d.attachOriginToPatched = Rt, d._redefineProperty = Object.defineProperty, d.patchCallbacks = le, d.getGlobalObjects = () => ({
                    globalSources: qt,
                    zoneSymbolEventNames: wt,
                    eventNames: h,
                    isBrowser: jt,
                    isMix: Wt,
                    isNode: Q,
                    TRUE_STR: a,
                    FALSE_STR: et,
                    ZONE_SYMBOL_PREFIX: Et,
                    ADD_EVENT_LISTENER_STR: yt,
                    REMOVE_EVENT_LISTENER_STR: Y
                })
            });
            const vt = Z("zoneTask");

            function Ot(o, u, d, h) {
                let y = null,
                    n = null;
                d += h;
                const t = {};

                function e(i) {
                    const c = i.data;
                    return c.args[0] = function() {
                        return i.invoke.apply(this, arguments)
                    }, c.handleId = y.apply(o, c.args), i
                }

                function r(i) {
                    return n.call(o, i.data.handleId)
                }
                y = bt(o, u += h, i => function(c, l) {
                    if ("function" == typeof l[0]) {
                        const m = {
                                isPeriodic: "Interval" === h,
                                delay: "Timeout" === h || "Interval" === h ? l[1] || 0 : void 0,
                                args: l
                            },
                            w = l[0];
                        l[0] = function() {
                            try {
                                return w.apply(this, arguments)
                            } finally {
                                m.isPeriodic || ("number" == typeof m.handleId ? delete t[m.handleId] : m.handleId && (m.handleId[vt] = null))
                            }
                        };
                        const P = rt(u, l[0], m, e, r);
                        if (!P) return P;
                        const R = P.data.handleId;
                        return "number" == typeof R ? t[R] = P : R && (R[vt] = P), R && R.ref && R.unref && "function" == typeof R.ref && "function" == typeof R.unref && (P.ref = R.ref.bind(R), P.unref = R.unref.bind(R)), "number" == typeof R || R ? R : P
                    }
                    return i.apply(o, l)
                }), n = bt(o, d, i => function(c, l) {
                    const m = l[0];
                    let w;
                    "number" == typeof m ? w = t[m] : (w = m && m[vt], w || (w = m)), w && "string" == typeof w.type ? "notScheduled" !== w.state && (w.cancelFn && w.data.isPeriodic || 0 === w.runCount) && ("number" == typeof m ? delete t[m] : m && (m[vt] = null), w.zone.cancelTask(w)) : i.apply(o, l)
                })
            }
            Zone.__load_patch("legacy", o => {
                const u = o[Zone.__symbol__("legacyPatch")];
                u && u()
            }), Zone.__load_patch("timers", o => {
                const u = "set",
                    d = "clear";
                Ot(o, u, d, "Timeout"), Ot(o, u, d, "Interval"), Ot(o, u, d, "Immediate")
            }), Zone.__load_patch("requestAnimationFrame", o => {
                Ot(o, "request", "cancel", "AnimationFrame"), Ot(o, "mozRequest", "mozCancel", "AnimationFrame"), Ot(o, "webkitRequest", "webkitCancel", "AnimationFrame")
            }), Zone.__load_patch("blocking", (o, u) => {
                const d = ["alert", "prompt", "confirm"];
                for (let h = 0; h < d.length; h++) bt(o, d[h], (n, t, e) => function(r, i) {
                    return u.current.run(n, o, i, e)
                })
            }), Zone.__load_patch("EventTarget", (o, u, d) => {
                (function Vt(o, u) {
                    u.patchEventPrototype(o, u)
                })(o, d),
                function se(o, u) {
                    if (Zone[u.symbol("patchEventTarget")]) return;
                    const {
                        eventNames: d,
                        zoneSymbolEventNames: h,
                        TRUE_STR: y,
                        FALSE_STR: n,
                        ZONE_SYMBOL_PREFIX: t
                    } = u.getGlobalObjects();
                    for (let r = 0; r < d.length; r++) {
                        const i = d[r],
                            m = t + (i + n),
                            w = t + (i + y);
                        h[i] = {}, h[i][n] = m, h[i][y] = w
                    }
                    const e = o.EventTarget;
                    e && e.prototype && u.patchEventTarget(o, u, [e && e.prototype])
                }(o, d);
                const h = o.XMLHttpRequestEventTarget;
                h && h.prototype && d.patchEventTarget(o, d, [h.prototype])
            }), Zone.__load_patch("MutationObserver", (o, u, d) => {
                Mt("MutationObserver"), Mt("WebKitMutationObserver")
            }), Zone.__load_patch("IntersectionObserver", (o, u, d) => {
                Mt("IntersectionObserver")
            }), Zone.__load_patch("FileReader", (o, u, d) => {
                Mt("FileReader")
            }), Zone.__load_patch("on_property", (o, u, d) => {
                ! function fe(o, u) {
                    if (Q && !Wt || Zone[o.symbol("patchEvents")]) return;
                    const d = u.__Zone_ignore_on_properties;
                    let h = [];
                    if (jt) {
                        const y = window;
                        h = h.concat(["Document", "SVGElement", "Element", "HTMLElement", "HTMLBodyElement", "HTMLMediaElement", "HTMLFrameSetElement", "HTMLFrameElement", "HTMLIFrameElement", "HTMLMarqueeElement", "Worker"]);
                        const n = function ue() {
                            try {
                                const o = L.navigator.userAgent;
                                if (-1 !== o.indexOf("MSIE ") || -1 !== o.indexOf("Trident/")) return !0
                            } catch {}
                            return !1
                        }() ? [{
                            target: y,
                            ignoreProperties: ["error"]
                        }] : [];
                        Ft(y, Dt(y), d && d.concat(n), X(y))
                    }
                    h = h.concat(["XMLHttpRequest", "XMLHttpRequestEventTarget", "IDBIndex", "IDBRequest", "IDBOpenDBRequest", "IDBDatabase", "IDBTransaction", "IDBCursor", "WebSocket"]);
                    for (let y = 0; y < h.length; y++) {
                        const n = u[h[y]];
                        n && n.prototype && Ft(n.prototype, Dt(n.prototype), d)
                    }
                }(d, o)
            }), Zone.__load_patch("customElements", (o, u, d) => {
                ! function pe(o, u) {
                    const {
                        isBrowser: d,
                        isMix: h
                    } = u.getGlobalObjects();
                    (d || h) && o.customElements && "customElements" in o && u.patchCallbacks(u, o.customElements, "customElements", "define", ["connectedCallback", "disconnectedCallback", "adoptedCallback", "attributeChangedCallback"])
                }(o, d)
            }), Zone.__load_patch("XHR", (o, u) => {
                ! function r(i) {
                    const c = i.XMLHttpRequest;
                    if (!c) return;
                    const l = c.prototype;
                    let w = l[it],
                        P = l[U];
                    if (!w) {
                        const T = i.XMLHttpRequestEventTarget;
                        if (T) {
                            const V = T.prototype;
                            w = V[it], P = V[U]
                        }
                    }
                    const R = "readystatechange",
                        D = "scheduled";

                    function ut(T) {
                        const V = T.data,
                            F = V.target;
                        F[n] = !1, F[e] = !1;
                        const kt = F[y];
                        w || (w = F[it], P = F[U]), kt && P.call(F, R, kt);
                        const At = F[y] = () => {
                            if (F.readyState === F.DONE)
                                if (!V.aborted && F[n] && T.state === D) {
                                    const ot = F[u.__symbol__("loadfalse")];
                                    if (0 !== F.status && ot && ot.length > 0) {
                                        const Ct = T.invoke;
                                        T.invoke = function() {
                                            const xt = F[u.__symbol__("loadfalse")];
                                            for (let st = 0; st < xt.length; st++) xt[st] === T && xt.splice(st, 1);
                                            !V.aborted && T.state === D && Ct.call(T)
                                        }, ot.push(T)
                                    } else T.invoke()
                                } else !V.aborted && !1 === F[n] && (F[e] = !0)
                        };
                        return w.call(F, R, At), F[d] || (F[d] = T), x.apply(F, V.args), F[n] = !0, T
                    }

                    function O() {}

                    function k(T) {
                        const V = T.data;
                        return V.aborted = !0, z.apply(V.target, V.args)
                    }
                    const mt = bt(l, "open", () => function(T, V) {
                            return T[h] = 0 == V[2], T[t] = V[1], mt.apply(T, V)
                        }),
                        ft = Z("fetchTaskAborting"),
                        W = Z("fetchTaskScheduling"),
                        x = bt(l, "send", () => function(T, V) {
                            if (!0 === u.current[W] || T[h]) return x.apply(T, V); {
                                const F = {
                                        target: T,
                                        url: T[t],
                                        isPeriodic: !1,
                                        args: V,
                                        aborted: !1
                                    },
                                    kt = rt("XMLHttpRequest.send", O, F, ut, k);
                                T && !0 === T[e] && !F.aborted && kt.state === D && kt.invoke()
                            }
                        }),
                        z = bt(l, "abort", () => function(T, V) {
                            const F = function m(T) {
                                return T[d]
                            }(T);
                            if (F && "string" == typeof F.type) {
                                if (null == F.cancelFn || F.data && F.data.aborted) return;
                                F.zone.cancelTask(F)
                            } else if (!0 === u.current[ft]) return z.apply(T, V)
                        })
                }(o);
                const d = Z("xhrTask"),
                    h = Z("xhrSync"),
                    y = Z("xhrListener"),
                    n = Z("xhrScheduled"),
                    t = Z("xhrURL"),
                    e = Z("xhrErrorBeforeScheduled")
            }), Zone.__load_patch("geolocation", o => {
                o.navigator && o.navigator.geolocation && function ct(o, u) {
                    const d = o.constructor.name;
                    for (let h = 0; h < u.length; h++) {
                        const y = u[h],
                            n = o[y];
                        if (n) {
                            if (!_t(Bt(o, y))) continue;
                            o[y] = (e => {
                                const r = function() {
                                    return e.apply(this, lt(arguments, d + "." + y))
                                };
                                return Rt(r, e), r
                            })(n)
                        }
                    }
                }(o.navigator.geolocation, ["getCurrentPosition", "watchPosition"])
            }), Zone.__load_patch("PromiseRejectionEvent", (o, u) => {
                function d(h) {
                    return function(y) {
                        Gt(o, h).forEach(t => {
                            const e = o.PromiseRejectionEvent;
                            if (e) {
                                const r = new e(h, {
                                    promise: y.promise,
                                    reason: y.rejection
                                });
                                t.invoke(r)
                            }
                        })
                    }
                }
                o.PromiseRejectionEvent && (u[Z("unhandledPromiseRejectionHandler")] = d("unhandledrejection"), u[Z("rejectionHandledHandler")] = d("rejectionhandled"))
            }), Zone.__load_patch("queueMicrotask", (o, u, d) => {
                ! function he(o, u) {
                    u.patchMethod(o, "queueMicrotask", d => function(h, y) {
                        Zone.current.scheduleMicroTask("queueMicrotask", y[0])
                    })
                }(o, d)
            })
        }
    },
    Bt => {
        var at = v => Bt(Bt.s = v);
        at(48332), at(55321)
    }
]);