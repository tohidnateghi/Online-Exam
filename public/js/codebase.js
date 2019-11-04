/*!
 * Codebase - v2.0.0
 * @author pixelcave
 * Copyright (c) 2018
 */
! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";

    function n(e, t) {
        var n = (t = t || te).createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }

    function i(e) {
        var t = !!e && "length" in e && e.length,
            n = pe.type(e);
        return "function" !== n && !pe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function r(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function o(e, t, n) {
        return pe.isFunction(t) ? pe.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        }) : t.nodeType ? pe.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? pe.grep(e, function(e) {
            return ae.call(t, e) > -1 !== n
        }) : Te.test(t) ? pe.filter(t, e, n) : (t = pe.filter(t, e), pe.grep(e, function(e) {
            return ae.call(t, e) > -1 !== n && 1 === e.nodeType
        }))
    }

    function a(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function s(e) {
        var t = {};
        return pe.each(e.match(Ae) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function l(e) {
        return e
    }

    function c(e) {
        throw e
    }

    function u(e, t, n, i) {
        var r;
        try {
            e && pe.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && pe.isFunction(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    function d() {
        te.removeEventListener("DOMContentLoaded", d), e.removeEventListener("load", d), pe.ready()
    }

    function f() {
        this.expando = pe.expando + f.uid++
    }

    function h(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Pe.test(e) ? JSON.parse(e) : e)
    }

    function p(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Qe, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = h(n)
                } catch (e) {}
                He.set(e, t, n)
            } else n = void 0;
        return n
    }

    function g(e, t, n, i) {
        var r, o = 1,
            a = 20,
            s = i ? function() {
                return i.cur()
            } : function() {
                return pe.css(e, t, "")
            },
            l = s(),
            c = n && n[3] || (pe.cssNumber[t] ? "" : "px"),
            u = (pe.cssNumber[t] || "px" !== c && +l) && Me.exec(pe.css(e, t));
        if (u && u[3] !== c) {
            c = c || u[3], n = n || [], u = +l || 1;
            do {
                o = o || ".5", u /= o, pe.style(e, t, u + c)
            } while (o !== (o = s() / l) && 1 !== o && --a)
        }
        return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
    }

    function m(e) {
        var t, n = e.ownerDocument,
            i = e.nodeName,
            r = Be[i];
        return r || (t = n.body.appendChild(n.createElement(i)), r = pe.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), Be[i] = r, r)
    }

    function v(e, t) {
        for (var n, i, r = [], o = 0, a = e.length; o < a; o++)(i = e[o]).style && (n = i.style.display, t ? ("none" === n && (r[o] = Le.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && We(i) && (r[o] = m(i))) : "none" !== n && (r[o] = "none", Le.set(i, "display", n)));
        for (o = 0; o < a; o++) null != r[o] && (e[o].style.display = r[o]);
        return e
    }

    function y(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && r(e, t) ? pe.merge([e], n) : n
    }

    function b(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Le.set(e[n], "globalEval", !t || Le.get(t[n], "globalEval"))
    }

    function _(e, t, n, i, r) {
        for (var o, a, s, l, c, u, d = t.createDocumentFragment(), f = [], h = 0, p = e.length; h < p; h++)
            if ((o = e[h]) || 0 === o)
                if ("object" === pe.type(o)) pe.merge(f, o.nodeType ? [o] : o);
                else if (Ke.test(o)) {
            for (a = a || d.appendChild(t.createElement("div")), s = (Ve.exec(o) || ["", ""])[1].toLowerCase(), l = Ye[s] || Ye._default, a.innerHTML = l[1] + pe.htmlPrefilter(o) + l[2], u = l[0]; u--;) a = a.lastChild;
            pe.merge(f, a.childNodes), (a = d.firstChild).textContent = ""
        } else f.push(t.createTextNode(o));
        for (d.textContent = "", h = 0; o = f[h++];)
            if (i && pe.inArray(o, i) > -1) r && r.push(o);
            else if (c = pe.contains(o.ownerDocument, o), a = y(d.appendChild(o), "script"), c && b(a), n)
            for (u = 0; o = a[u++];) $e.test(o.type || "") && n.push(o);
        return d
    }

    function C() {
        return !0
    }

    function w() {
        return !1
    }

    function E() {
        try {
            return te.activeElement
        } catch (e) {}
    }

    function T(e, t, n, i, r, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (s in t) T(e, s, n, i, t[s], o);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = w;
        else if (!r) return e;
        return 1 === o && (a = r, r = function(e) {
            return pe().off(e), a.apply(this, arguments)
        }, r.guid = a.guid || (a.guid = pe.guid++)), e.each(function() {
            pe.event.add(this, t, r, i, n)
        })
    }

    function k(e, t) {
        return r(e, "table") && r(11 !== t.nodeType ? t : t.firstChild, "tr") ? pe(">tbody", e)[0] || e : e
    }

    function x(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function j(e) {
        var t = nt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function S(e, t) {
        var n, i, r, o, a, s, l, c;
        if (1 === t.nodeType) {
            if (Le.hasData(e) && (o = Le.access(e), a = Le.set(t, o), c = o.events)) {
                delete a.handle, a.events = {};
                for (r in c)
                    for (n = 0, i = c[r].length; n < i; n++) pe.event.add(t, r, c[r][n])
            }
            He.hasData(e) && (s = He.access(e), l = pe.extend({}, s), He.set(t, l))
        }
    }

    function A(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ue.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function D(e, t, i, r) {
        t = re.apply([], t);
        var o, a, s, l, c, u, d = 0,
            f = e.length,
            h = f - 1,
            p = t[0],
            g = pe.isFunction(p);
        if (g || f > 1 && "string" == typeof p && !fe.checkClone && tt.test(p)) return e.each(function(n) {
            var o = e.eq(n);
            g && (t[0] = p.call(this, n, o.html())), D(o, t, i, r)
        });
        if (f && (o = _(t, e[0].ownerDocument, !1, e, r), a = o.firstChild, 1 === o.childNodes.length && (o = a), a || r)) {
            for (l = (s = pe.map(y(o, "script"), x)).length; d < f; d++) c = o, d !== h && (c = pe.clone(c, !0, !0), l && pe.merge(s, y(c, "script"))), i.call(e[d], c, d);
            if (l)
                for (u = s[s.length - 1].ownerDocument, pe.map(s, j), d = 0; d < l; d++) c = s[d], $e.test(c.type || "") && !Le.access(c, "globalEval") && pe.contains(u, c) && (c.src ? pe._evalUrl && pe._evalUrl(c.src) : n(c.textContent.replace(it, ""), u))
        }
        return e
    }

    function N(e, t, n) {
        for (var i, r = t ? pe.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || pe.cleanData(y(i)), i.parentNode && (n && pe.contains(i.ownerDocument, i) && b(y(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function I(e, t, n) {
        var i, r, o, a, s = e.style;
        return (n = n || at(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || pe.contains(e.ownerDocument, e) || (a = pe.style(e, t)), !fe.pixelMarginRight() && ot.test(a) && rt.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function O(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function L(e) {
        if (e in ft) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = dt.length; n--;)
            if ((e = dt[n] + t) in ft) return e
    }

    function H(e) {
        var t = pe.cssProps[e];
        return t || (t = pe.cssProps[e] = L(e) || e), t
    }

    function P(e, t, n) {
        var i = Me.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function Q(e, t, n, i, r) {
        var o, a = 0;
        for (o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (a += pe.css(e, n + Fe[o], !0, r)), i ? ("content" === n && (a -= pe.css(e, "padding" + Fe[o], !0, r)), "margin" !== n && (a -= pe.css(e, "border" + Fe[o] + "Width", !0, r))) : (a += pe.css(e, "padding" + Fe[o], !0, r), "padding" !== n && (a += pe.css(e, "border" + Fe[o] + "Width", !0, r)));
        return a
    }

    function R(e, t, n) {
        var i, r = at(e),
            o = I(e, t, r),
            a = "border-box" === pe.css(e, "boxSizing", !1, r);
        return ot.test(o) ? o : (i = a && (fe.boxSizingReliable() || o === e.style[t]), "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]), (o = parseFloat(o) || 0) + Q(e, t, n || (a ? "border" : "content"), i, r) + "px")
    }

    function M(e, t, n, i, r) {
        return new M.prototype.init(e, t, n, i, r)
    }

    function F() {
        pt && (!1 === te.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(F) : e.setTimeout(F, pe.fx.interval), pe.fx.tick())
    }

    function W() {
        return e.setTimeout(function() {
            ht = void 0
        }), ht = pe.now()
    }

    function q(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) n = Fe[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function B(e, t, n) {
        for (var i, r = (V.tweeners[t] || []).concat(V.tweeners["*"]), o = 0, a = r.length; o < a; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function U(e, t) {
        var n, i, r, o, a;
        for (n in e)
            if (i = pe.camelCase(n), r = t[i], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (a = pe.cssHooks[i]) && "expand" in a) {
                o = a.expand(o), delete e[i];
                for (n in o) n in e || (e[n] = o[n], t[n] = r)
            } else t[i] = r
    }

    function V(e, t, n) {
        var i, r, o = 0,
            a = V.prefilters.length,
            s = pe.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var t = ht || W(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), o = 0, a = c.tweens.length; o < a; o++) c.tweens[o].run(i);
                return s.notifyWith(e, [c, i, n]), i < 1 && a ? n : (a || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
            },
            c = s.promise({
                elem: e,
                props: pe.extend({}, t),
                opts: pe.extend(!0, {
                    specialEasing: {},
                    easing: pe.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: ht || W(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = pe.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) c.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (U(u, c.opts.specialEasing); o < a; o++)
            if (i = V.prefilters[o].call(c, e, u, c.opts)) return pe.isFunction(i.stop) && (pe._queueHooks(c.elem, c.opts.queue).stop = pe.proxy(i.stop, i)), i;
        return pe.map(u, B, c), pe.isFunction(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), pe.fx.timer(pe.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c
    }

    function $(e) {
        return (e.match(Ae) || []).join(" ")
    }

    function Y(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function K(e, t, n, i) {
        var r;
        if (Array.isArray(t)) pe.each(t, function(t, r) {
            n || xt.test(e) ? i(e, r) : K(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
        });
        else if (n || "object" !== pe.type(t)) i(e, t);
        else
            for (r in t) K(e + "[" + r + "]", t[r], n, i)
    }

    function z(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                o = t.toLowerCase().match(Ae) || [];
            if (pe.isFunction(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function G(e, t, n, i) {
        function r(s) {
            var l;
            return o[s] = !0, pe.each(e[s] || [], function(e, s) {
                var c = s(t, n, i);
                return "string" != typeof c || a || o[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
            }), l
        }
        var o = {},
            a = e === Rt;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }

    function X(e, t) {
        var n, i, r = pe.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && pe.extend(!0, e, i), e
    }

    function J(e, t, n) {
        for (var i, r, o, a, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (r in s)
                if (s[r] && s[r].test(i)) {
                    l.unshift(r);
                    break
                }
        if (l[0] in n) o = l[0];
        else {
            for (r in n) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    o = r;
                    break
                }
                a || (a = r)
            }
            o = o || a
        }
        if (o) return o !== l[0] && l.unshift(o), n[o]
    }

    function Z(e, t, n, i) {
        var r, o, a, s, l, c = {},
            u = e.dataTypes.slice();
        if (u[1])
            for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
        for (o = u.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (!(a = c[l + " " + o] || c["* " + o]))
                for (r in c)
                    if ((s = r.split(" "))[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                        !0 === a ? a = c[r] : !0 !== c[r] && (o = s[0], u.unshift(s[1]));
                        break
                    }
            if (!0 !== a)
                if (a && e.throws) t = a(t);
                else try {
                    t = a(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: a ? e : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }
    var ee = [],
        te = e.document,
        ne = Object.getPrototypeOf,
        ie = ee.slice,
        re = ee.concat,
        oe = ee.push,
        ae = ee.indexOf,
        se = {},
        le = se.toString,
        ce = se.hasOwnProperty,
        ue = ce.toString,
        de = ue.call(Object),
        fe = {},
        he = "3.2.1",
        pe = function(e, t) {
            return new pe.fn.init(e, t)
        },
        ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        me = /^-ms-/,
        ve = /-([a-z])/g,
        ye = function(e, t) {
            return t.toUpperCase()
        };
    pe.fn = pe.prototype = {
        jquery: he,
        constructor: pe,
        length: 0,
        toArray: function() {
            return ie.call(this)
        },
        get: function(e) {
            return null == e ? ie.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = pe.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return pe.each(this, e)
        },
        map: function(e) {
            return this.pushStack(pe.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(ie.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: oe,
        sort: ee.sort,
        splice: ee.splice
    }, pe.extend = pe.fn.extend = function() {
        var e, t, n, i, r, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || pe.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], i = e[t], a !== i && (c && i && (pe.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, o = n && Array.isArray(n) ? n : []) : o = n && pe.isPlainObject(n) ? n : {}, a[t] = pe.extend(c, o, i)) : void 0 !== i && (a[t] = i));
        return a
    }, pe.extend({
        expando: "jQuery" + (he + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === pe.type(e)
        },
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = pe.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== le.call(e) || (t = ne(e)) && ("function" != typeof(n = ce.call(t, "constructor") && t.constructor) || ue.call(n) !== de))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? se[le.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            n(e)
        },
        camelCase: function(e) {
            return e.replace(me, "ms-").replace(ve, ye)
        },
        each: function(e, t) {
            var n, r = 0;
            if (i(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ge, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? pe.merge(n, "string" == typeof e ? [e] : e) : oe.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : ae.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, o = e.length, a = !n; r < o; r++) !t(e[r], r) !== a && i.push(e[r]);
            return i
        },
        map: function(e, t, n) {
            var r, o, a = 0,
                s = [];
            if (i(e))
                for (r = e.length; a < r; a++) null != (o = t(e[a], a, n)) && s.push(o);
            else
                for (a in e) null != (o = t(e[a], a, n)) && s.push(o);
            return re.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, r;
            if ("string" == typeof t && (n = e[t], t = e, e = n), pe.isFunction(e)) return i = ie.call(arguments, 2), r = function() {
                return e.apply(t || this, i.concat(ie.call(arguments)))
            }, r.guid = e.guid = e.guid || pe.guid++, r
        },
        now: Date.now,
        support: fe
    }), "function" == typeof Symbol && (pe.fn[Symbol.iterator] = ee[Symbol.iterator]), pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        se["[object " + t + "]"] = t.toLowerCase()
    });
    var be = function(e) {
        function t(e, t, n, i) {
            var r, o, a, s, l, u, f, h = t && t.ownerDocument,
                p = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!i && ((t ? t.ownerDocument || t : M) !== N && D(t), t = t || N, O)) {
                if (11 !== p && (l = ge.exec(e)))
                    if (r = l[1]) {
                        if (9 === p) {
                            if (!(a = t.getElementById(r))) return n;
                            if (a.id === r) return n.push(a), n
                        } else if (h && (a = h.getElementById(r)) && Q(t, a) && a.id === r) return n.push(a), n
                    } else {
                        if (l[2]) return G.apply(n, t.getElementsByTagName(e)), n;
                        if ((r = l[3]) && _.getElementsByClassName && t.getElementsByClassName) return G.apply(n, t.getElementsByClassName(r)), n
                    }
                if (_.qsa && !U[e + " "] && (!L || !L.test(e))) {
                    if (1 !== p) h = t, f = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(be, _e) : t.setAttribute("id", s = R), o = (u = T(e)).length; o--;) u[o] = "#" + s + " " + d(u[o]);
                        f = u.join(","), h = me.test(e) && c(t.parentNode) || t
                    }
                    if (f) try {
                        return G.apply(n, h.querySelectorAll(f)), n
                    } catch (e) {} finally {
                        s === R && t.removeAttribute("id")
                    }
                }
            }
            return x(e.replace(oe, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[R] = !0, e
        }

        function r(e) {
            var t = N.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) C.attrHandle[n[i]] = t
        }

        function a(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && we(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function l(e) {
            return i(function(t) {
                return t = +t, i(function(n, i) {
                    for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function c(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        function u() {}

        function d(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function f(e, t, n) {
            var i = t.dir,
                r = t.next,
                o = r || i,
                a = n && "parentNode" === o,
                s = W++;
            return t.first ? function(t, n, r) {
                for (; t = t[i];)
                    if (1 === t.nodeType || a) return e(t, n, r);
                return !1
            } : function(t, n, l) {
                var c, u, d, f = [F, s];
                if (l) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || a) && e(t, n, l)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || a)
                            if (d = t[R] || (t[R] = {}), u = d[t.uniqueID] || (d[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
                            else {
                                if ((c = u[o]) && c[0] === F && c[1] === s) return f[2] = c[2];
                                if (u[o] = f, f[2] = e(t, n, l)) return !0
                            } return !1
            }
        }

        function h(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function p(e, n, i) {
            for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i);
            return i
        }

        function g(e, t, n, i, r) {
            for (var o, a = [], s = 0, l = e.length, c = null != t; s < l; s++)(o = e[s]) && (n && !n(o, i, r) || (a.push(o), c && t.push(s)));
            return a
        }

        function m(e, t, n, r, o, a) {
            return r && !r[R] && (r = m(r)), o && !o[R] && (o = m(o, a)), i(function(i, a, s, l) {
                var c, u, d, f = [],
                    h = [],
                    m = a.length,
                    v = i || p(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !i && t ? v : g(v, f, e, s, l),
                    b = n ? o || (i ? e : m || r) ? [] : a : y;
                if (n && n(y, b, s, l), r)
                    for (c = g(b, h), r(c, [], s, l), u = c.length; u--;)(d = c[u]) && (b[h[u]] = !(y[h[u]] = d));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (c = [], u = b.length; u--;)(d = b[u]) && c.push(y[u] = d);
                            o(null, b = [], c, l)
                        }
                        for (u = b.length; u--;)(d = b[u]) && (c = o ? J(i, d) : f[u]) > -1 && (i[c] = !(a[c] = d))
                    }
                } else b = g(b === a ? b.splice(m, b.length) : b), o ? o(null, a, b, l) : G.apply(a, b)
            })
        }

        function v(e) {
            for (var t, n, i, r = e.length, o = C.relative[e[0].type], a = o || C.relative[" "], s = o ? 1 : 0, l = f(function(e) {
                    return e === t
                }, a, !0), c = f(function(e) {
                    return J(t, e) > -1
                }, a, !0), u = [function(e, n, i) {
                    var r = !o && (i || n !== j) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                    return t = null, r
                }]; s < r; s++)
                if (n = C.relative[e[s].type]) u = [f(h(u), n)];
                else {
                    if ((n = C.filter[e[s].type].apply(null, e[s].matches))[R]) {
                        for (i = ++s; i < r && !C.relative[e[i].type]; i++);
                        return m(s > 1 && h(u), s > 1 && d(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(oe, "$1"), n, s < i && v(e.slice(s, i)), i < r && v(e = e.slice(i)), i < r && d(e))
                    }
                    u.push(n)
                }
            return h(u)
        }

        function y(e, n) {
            var r = n.length > 0,
                o = e.length > 0,
                a = function(i, a, s, l, c) {
                    var u, d, f, h = 0,
                        p = "0",
                        m = i && [],
                        v = [],
                        y = j,
                        b = i || o && C.find.TAG("*", c),
                        _ = F += null == y ? 1 : Math.random() || .1,
                        w = b.length;
                    for (c && (j = a === N || a || c); p !== w && null != (u = b[p]); p++) {
                        if (o && u) {
                            for (d = 0, a || u.ownerDocument === N || (D(u), s = !O); f = e[d++];)
                                if (f(u, a || N, s)) {
                                    l.push(u);
                                    break
                                }
                            c && (F = _)
                        }
                        r && ((u = !f && u) && h--, i && m.push(u))
                    }
                    if (h += p, r && p !== h) {
                        for (d = 0; f = n[d++];) f(m, v, a, s);
                        if (i) {
                            if (h > 0)
                                for (; p--;) m[p] || v[p] || (v[p] = K.call(l));
                            v = g(v)
                        }
                        G.apply(l, v), c && !i && v.length > 0 && h + n.length > 1 && t.uniqueSort(l)
                    }
                    return c && (F = _, j = y), m
                };
            return r ? i(a) : a
        }
        var b, _, C, w, E, T, k, x, j, S, A, D, N, I, O, L, H, P, Q, R = "sizzle" + 1 * new Date,
            M = e.document,
            F = 0,
            W = 0,
            q = n(),
            B = n(),
            U = n(),
            V = function(e, t) {
                return e === t && (A = !0), 0
            },
            $ = {}.hasOwnProperty,
            Y = [],
            K = Y.pop,
            z = Y.push,
            G = Y.push,
            X = Y.slice,
            J = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ee = "[\\x20\\t\\r\\n\\f]",
            te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
            ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
            re = new RegExp(ee + "+", "g"),
            oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
            ae = new RegExp("^" + ee + "*," + ee + "*"),
            se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
            le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
            ce = new RegExp(ie),
            ue = new RegExp("^" + te + "$"),
            de = {
                ID: new RegExp("^#(" + te + ")"),
                CLASS: new RegExp("^\\.(" + te + ")"),
                TAG: new RegExp("^(" + te + "|[*])"),
                ATTR: new RegExp("^" + ne),
                PSEUDO: new RegExp("^" + ie),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + Z + ")$", "i"),
                needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
            },
            fe = /^(?:input|select|textarea|button)$/i,
            he = /^h\d$/i,
            pe = /^[^{]+\{\s*\[native \w/,
            ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            me = /[+~]/,
            ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
            ye = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            _e = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            Ce = function() {
                D()
            },
            we = f(function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            G.apply(Y = X.call(M.childNodes), M.childNodes), Y[M.childNodes.length].nodeType
        } catch (e) {
            G = {
                apply: Y.length ? function(e, t) {
                    z.apply(e, X.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        _ = t.support = {}, E = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, D = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : M;
            return i !== N && 9 === i.nodeType && i.documentElement ? (N = i, I = N.documentElement, O = !E(N), M !== N && (n = N.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), _.attributes = r(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), _.getElementsByTagName = r(function(e) {
                return e.appendChild(N.createComment("")), !e.getElementsByTagName("*").length
            }), _.getElementsByClassName = pe.test(N.getElementsByClassName), _.getById = r(function(e) {
                return I.appendChild(e).id = R, !N.getElementsByName || !N.getElementsByName(R).length
            }), _.getById ? (C.filter.ID = function(e) {
                var t = e.replace(ve, ye);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }, C.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && O) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (C.filter.ID = function(e) {
                var t = e.replace(ve, ye);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, C.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && O) {
                    var n, i, r, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), C.find.TAG = _.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : _.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, C.find.CLASS = _.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && O) return t.getElementsByClassName(e)
            }, H = [], L = [], (_.qsa = pe.test(N.querySelectorAll)) && (r(function(e) {
                I.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || L.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + R + "-]").length || L.push("~="), e.querySelectorAll(":checked").length || L.push(":checked"), e.querySelectorAll("a#" + R + "+*").length || L.push(".#.+[+~]")
            }), r(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = N.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && L.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && L.push(":enabled", ":disabled"), I.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && L.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), L.push(",.*:")
            })), (_.matchesSelector = pe.test(P = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && r(function(e) {
                _.disconnectedMatch = P.call(e, "*"), P.call(e, "[s!='']:x"), H.push("!=", ie)
            }), L = L.length && new RegExp(L.join("|")), H = H.length && new RegExp(H.join("|")), t = pe.test(I.compareDocumentPosition), Q = t || pe.test(I.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, V = t ? function(e, t) {
                if (e === t) return A = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !_.sortDetached && t.compareDocumentPosition(e) === n ? e === N || e.ownerDocument === M && Q(M, e) ? -1 : t === N || t.ownerDocument === M && Q(M, t) ? 1 : S ? J(S, e) - J(S, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return A = !0, 0;
                var n, i = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    l = [t];
                if (!r || !o) return e === N ? -1 : t === N ? 1 : r ? -1 : o ? 1 : S ? J(S, e) - J(S, t) : 0;
                if (r === o) return a(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; s[i] === l[i];) i++;
                return i ? a(s[i], l[i]) : s[i] === M ? -1 : l[i] === M ? 1 : 0
            }, N) : N
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== N && D(e), n = n.replace(le, "='$1']"), _.matchesSelector && O && !U[n + " "] && (!H || !H.test(n)) && (!L || !L.test(n))) try {
                var i = P.call(e, n);
                if (i || _.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (e) {}
            return t(n, N, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== N && D(e), Q(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== N && D(e);
            var n = C.attrHandle[t.toLowerCase()],
                i = n && $.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
            return void 0 !== i ? i : _.attributes || !O ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.escape = function(e) {
            return (e + "").replace(be, _e)
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                i = 0,
                r = 0;
            if (A = !_.detectDuplicates, S = !_.sortStable && e.slice(0), e.sort(V), A) {
                for (; t = e[r++];) t === e[r] && (i = n.push(r));
                for (; i--;) e.splice(n[i], 1)
            }
            return S = null, e
        }, w = t.getText = function(e) {
            var t, n = "",
                i = 0,
                r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += w(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else
                for (; t = e[i++];) n += w(t);
            return n
        }, (C = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: de,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(ve, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(ve, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ve, ye).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = q[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && q(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(re, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var c, u, d, f, h, p, g = o !== a ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !l && !s,
                            b = !1;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (f = t; f = f[g];)
                                        if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                    p = g = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [a ? m.firstChild : m.lastChild], a && y) {
                                for (b = (h = (c = (u = (d = (f = m)[R] || (f[R] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === F && c[1]) && c[2], f = h && m.childNodes[h]; f = ++h && f && f[g] || (b = h = 0) || p.pop();)
                                    if (1 === f.nodeType && ++b && f === t) {
                                        u[e] = [F, h, b];
                                        break
                                    }
                            } else if (y && (f = t, d = f[R] || (f[R] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), c = u[e] || [], h = c[0] === F && c[1], b = h), !1 === b)
                                for (;
                                    (f = ++h && f && f[g] || (b = h = 0) || p.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && (d = f[R] || (f[R] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), u[e] = [F, b]), f !== t)););
                            return (b -= r) === i || b % i == 0 && b / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var r, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[R] ? o(n) : o.length > 1 ? (r = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, r = o(e, n), a = r.length; a--;) i = J(e, r[a]), e[i] = !(t[i] = r[a])
                    }) : function(e) {
                        return o(e, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                        n = [],
                        r = k(e.replace(oe, "$1"));
                    return r[R] ? i(function(e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return e = e.replace(ve, ye),
                        function(t) {
                            return (t.textContent || t.innerText || w(t)).indexOf(e) > -1
                        }
                }),
                lang: i(function(e) {
                    return ue.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ve, ye).toLowerCase(),
                        function(t) {
                            var n;
                            do {
                                if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === I
                },
                focus: function(e) {
                    return e === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: s(!1),
                disabled: s(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !C.pseudos.empty(e)
                },
                header: function(e) {
                    return he.test(e.nodeName)
                },
                input: function(e) {
                    return fe.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(e, t) {
                    return [t - 1]
                }),
                eq: l(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: l(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: l(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: l(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: l(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }).pseudos.nth = C.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) C.pseudos[b] = function(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }(b);
        for (b in {
                submit: !0,
                reset: !0
            }) C.pseudos[b] = function(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }(b);
        return u.prototype = C.filters = C.pseudos, C.setFilters = new u, T = t.tokenize = function(e, n) {
            var i, r, o, a, s, l, c, u = B[e + " "];
            if (u) return n ? 0 : u.slice(0);
            for (s = e, l = [], c = C.preFilter; s;) {
                i && !(r = ae.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(o = [])), i = !1, (r = se.exec(s)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(oe, " ")
                }), s = s.slice(i.length));
                for (a in C.filter) !(r = de[a].exec(s)) || c[a] && !(r = c[a](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: a,
                    matches: r
                }), s = s.slice(i.length));
                if (!i) break
            }
            return n ? s.length : s ? t.error(e) : B(e, l).slice(0)
        }, k = t.compile = function(e, t) {
            var n, i = [],
                r = [],
                o = U[e + " "];
            if (!o) {
                for (t || (t = T(e)), n = t.length; n--;) o = v(t[n]), o[R] ? i.push(o) : r.push(o);
                (o = U(e, y(r, i))).selector = e
            }
            return o
        }, x = t.select = function(e, t, n, i) {
            var r, o, a, s, l, u = "function" == typeof e && e,
                f = !i && T(e = u.selector || e);
            if (n = n || [], 1 === f.length) {
                if ((o = f[0] = f[0].slice(0)).length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && O && C.relative[o[1].type]) {
                    if (!(t = (C.find.ID(a.matches[0].replace(ve, ye), t) || [])[0])) return n;
                    u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (r = de.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !C.relative[s = a.type]);)
                    if ((l = C.find[s]) && (i = l(a.matches[0].replace(ve, ye), me.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(r, 1), !(e = i.length && d(o))) return G.apply(n, i), n;
                        break
                    }
            }
            return (u || k(e, f))(i, t, !O, n, !t || me.test(e) && c(t.parentNode) || t), n
        }, _.sortStable = R.split("").sort(V).join("") === R, _.detectDuplicates = !!A, D(), _.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition(N.createElement("fieldset"))
        }), r(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), _.attributes && r(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), r(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(Z, function(e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    pe.find = be, pe.expr = be.selectors, pe.expr[":"] = pe.expr.pseudos, pe.uniqueSort = pe.unique = be.uniqueSort, pe.text = be.getText, pe.isXMLDoc = be.isXML, pe.contains = be.contains, pe.escapeSelector = be.escape;
    var _e = function(e, t, n) {
            for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && pe(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        Ce = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        we = pe.expr.match.needsContext,
        Ee = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Te = /^.[^:#\[\.,]*$/;
    pe.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? pe.find.matchesSelector(i, e) ? [i] : [] : pe.find.matches(e, pe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, pe.fn.extend({
        find: function(e) {
            var t, n, i = this.length,
                r = this;
            if ("string" != typeof e) return this.pushStack(pe(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (pe.contains(r[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) pe.find(e, r[t], n);
            return i > 1 ? pe.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(o(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(o(this, e || [], !0))
        },
        is: function(e) {
            return !!o(this, "string" == typeof e && we.test(e) ? pe(e) : e || [], !1).length
        }
    });
    var ke, xe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (pe.fn.init = function(e, t, n) {
        var i, r;
        if (!e) return this;
        if (n = n || ke, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : xe.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof pe ? t[0] : t, pe.merge(this, pe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), Ee.test(i[1]) && pe.isPlainObject(t))
                    for (i in t) pe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (r = te.getElementById(i[2])) && (this[0] = r, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : pe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(pe) : pe.makeArray(e, this)
    }).prototype = pe.fn, ke = pe(te);
    var je = /^(?:parents|prev(?:Until|All))/,
        Se = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    pe.fn.extend({
        has: function(e) {
            var t = pe(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (pe.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0,
                r = this.length,
                o = [],
                a = "string" != typeof e && pe(e);
            if (!we.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && pe.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? pe.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? ae.call(pe(e), this[0]) : ae.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), pe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return _e(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return _e(e, "parentNode", n)
        },
        next: function(e) {
            return a(e, "nextSibling")
        },
        prev: function(e) {
            return a(e, "previousSibling")
        },
        nextAll: function(e) {
            return _e(e, "nextSibling")
        },
        prevAll: function(e) {
            return _e(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return _e(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return _e(e, "previousSibling", n)
        },
        siblings: function(e) {
            return Ce((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Ce(e.firstChild)
        },
        contents: function(e) {
            return r(e, "iframe") ? e.contentDocument : (r(e, "template") && (e = e.content || e), pe.merge([], e.childNodes))
        }
    }, function(e, t) {
        pe.fn[e] = function(n, i) {
            var r = pe.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = pe.filter(i, r)), this.length > 1 && (Se[e] || pe.uniqueSort(r), je.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var Ae = /[^\x20\t\r\n\f]+/g;
    pe.Callbacks = function(e) {
        e = "string" == typeof e ? s(e) : pe.extend({}, e);
        var t, n, i, r, o = [],
            a = [],
            l = -1,
            c = function() {
                for (r = r || e.once, i = t = !0; a.length; l = -1)
                    for (n = a.shift(); ++l < o.length;) !1 === o[l].apply(n[0], n[1]) && e.stopOnFalse && (l = o.length, n = !1);
                e.memory || (n = !1), t = !1, r && (o = n ? [] : "")
            },
            u = {
                add: function() {
                    return o && (n && !t && (l = o.length - 1, a.push(n)), function t(n) {
                        pe.each(n, function(n, i) {
                            pe.isFunction(i) ? e.unique && u.has(i) || o.push(i) : i && i.length && "string" !== pe.type(i) && t(i)
                        })
                    }(arguments), n && !t && c()), this
                },
                remove: function() {
                    return pe.each(arguments, function(e, t) {
                        for (var n;
                            (n = pe.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? pe.inArray(e, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []), this
                },
                disable: function() {
                    return r = a = [], o = n = "", this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return r = a = [], n || t || (o = n = ""), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(e, n) {
                    return r || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || c()), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return u
    }, pe.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", pe.Callbacks("memory"), pe.Callbacks("memory"), 2],
                    ["resolve", "done", pe.Callbacks("once memory"), pe.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", pe.Callbacks("once memory"), pe.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                r = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return r.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return pe.Deferred(function(t) {
                            pe.each(n, function(n, i) {
                                var r = pe.isFunction(e[i[4]]) && e[i[4]];
                                o[i[1]](function() {
                                    var e = r && r.apply(this, arguments);
                                    e && pe.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, i, r) {
                        function o(t, n, i, r) {
                            return function() {
                                var s = this,
                                    u = arguments,
                                    d = function() {
                                        var e, d;
                                        if (!(t < a)) {
                                            if ((e = i.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            d = e && ("object" == typeof e || "function" == typeof e) && e.then, pe.isFunction(d) ? r ? d.call(e, o(a, n, l, r), o(a, n, c, r)) : (a++, d.call(e, o(a, n, l, r), o(a, n, c, r), o(a, n, l, n.notifyWith))) : (i !== l && (s = void 0, u = [e]), (r || n.resolveWith)(s, u))
                                        }
                                    },
                                    f = r ? d : function() {
                                        try {
                                            d()
                                        } catch (e) {
                                            pe.Deferred.exceptionHook && pe.Deferred.exceptionHook(e, f.stackTrace), t + 1 >= a && (i !== c && (s = void 0, u = [e]), n.rejectWith(s, u))
                                        }
                                    };
                                t ? f() : (pe.Deferred.getStackHook && (f.stackTrace = pe.Deferred.getStackHook()), e.setTimeout(f))
                            }
                        }
                        var a = 0;
                        return pe.Deferred(function(e) {
                            n[0][3].add(o(0, e, pe.isFunction(r) ? r : l, e.notifyWith)), n[1][3].add(o(0, e, pe.isFunction(t) ? t : l)), n[2][3].add(o(0, e, pe.isFunction(i) ? i : c))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? pe.extend(e, r) : r
                    }
                },
                o = {};
            return pe.each(n, function(e, t) {
                var a = t[2],
                    s = t[5];
                r[t[1]] = a.add, s && a.add(function() {
                    i = s
                }, n[3 - e][2].disable, n[0][2].lock), a.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            }), r.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                i = Array(n),
                r = ie.call(arguments),
                o = pe.Deferred(),
                a = function(e) {
                    return function(n) {
                        i[e] = this, r[e] = arguments.length > 1 ? ie.call(arguments) : n, --t || o.resolveWith(i, r)
                    }
                };
            if (t <= 1 && (u(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || pe.isFunction(r[n] && r[n].then))) return o.then();
            for (; n--;) u(r[n], a(n), o.reject);
            return o.promise()
        }
    });
    var De = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    pe.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && De.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, pe.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var Ne = pe.Deferred();
    pe.fn.ready = function(e) {
        return Ne.then(e).catch(function(e) {
            pe.readyException(e)
        }), this
    }, pe.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --pe.readyWait : pe.isReady) || (pe.isReady = !0, !0 !== e && --pe.readyWait > 0 || Ne.resolveWith(te, [pe]))
        }
    }), pe.ready.then = Ne.then, "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(pe.ready) : (te.addEventListener("DOMContentLoaded", d), e.addEventListener("load", d));
    var Ie = function(e, t, n, i, r, o, a) {
            var s = 0,
                l = e.length,
                c = null == n;
            if ("object" === pe.type(n)) {
                r = !0;
                for (s in n) Ie(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== i && (r = !0, pe.isFunction(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                    return c.call(pe(e), n)
                })), t))
                for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
            return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
        },
        Oe = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    f.uid = 1, f.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, Oe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[pe.camelCase(t)] = n;
            else
                for (i in t) r[pe.camelCase(i)] = t[i];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][pe.camelCase(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    Array.isArray(t) ? t = t.map(pe.camelCase) : (t = pe.camelCase(t), t = t in i ? [t] : t.match(Ae) || []), n = t.length;
                    for (; n--;) delete i[t[n]]
                }(void 0 === t || pe.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !pe.isEmptyObject(t)
        }
    };
    var Le = new f,
        He = new f,
        Pe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Qe = /[A-Z]/g;
    pe.extend({
        hasData: function(e) {
            return He.hasData(e) || Le.hasData(e)
        },
        data: function(e, t, n) {
            return He.access(e, t, n)
        },
        removeData: function(e, t) {
            He.remove(e, t)
        },
        _data: function(e, t, n) {
            return Le.access(e, t, n)
        },
        _removeData: function(e, t) {
            Le.remove(e, t)
        }
    }), pe.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = He.get(o), 1 === o.nodeType && !Le.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && 0 === (i = a[n].name).indexOf("data-") && (i = pe.camelCase(i.slice(5)), p(o, i, r[i]));
                    Le.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                He.set(this, e)
            }) : Ie(this, function(t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = He.get(o, e))) return n;
                    if (void 0 !== (n = p(o, e))) return n
                } else this.each(function() {
                    He.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                He.remove(this, e)
            })
        }
    }), pe.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = Le.get(e, t), n && (!i || Array.isArray(n) ? i = Le.access(e, t, pe.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = pe.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = pe._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function() {
                pe.dequeue(e, t)
            }, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Le.get(e, n) || Le.access(e, n, {
                empty: pe.Callbacks("once memory").add(function() {
                    Le.remove(e, [t + "queue", n])
                })
            })
        }
    }), pe.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? pe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = pe.queue(this, e, t);
                pe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                pe.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                r = pe.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Le.get(o[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
            return s(), r.promise(t)
        }
    });
    var Re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Me = new RegExp("^(?:([+-])=|)(" + Re + ")([a-z%]*)$", "i"),
        Fe = ["Top", "Right", "Bottom", "Left"],
        We = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && pe.contains(e.ownerDocument, e) && "none" === pe.css(e, "display")
        },
        qe = function(e, t, n, i) {
            var r, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            r = n.apply(e, i || []);
            for (o in t) e.style[o] = a[o];
            return r
        },
        Be = {};
    pe.fn.extend({
        show: function() {
            return v(this, !0)
        },
        hide: function() {
            return v(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                We(this) ? pe(this).show() : pe(this).hide()
            })
        }
    });
    var Ue = /^(?:checkbox|radio)$/i,
        Ve = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        $e = /^$|\/(?:java|ecma)script/i,
        Ye = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ye.optgroup = Ye.option, Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead, Ye.th = Ye.td;
    var Ke = /<|&#?\w+;/;
    ! function() {
        var e = te.createDocumentFragment().appendChild(te.createElement("div")),
            t = te.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), fe.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", fe.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var ze = te.documentElement,
        Ge = /^key/,
        Xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Je = /^([^.]*)(?:\.(.+)|)/;
    pe.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, a, s, l, c, u, d, f, h, p, g, m = Le.get(e);
            if (m)
                for (n.handler && (o = n, n = o.handler, r = o.selector), r && pe.find.matchesSelector(ze, r), n.guid || (n.guid = pe.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function(t) {
                        return void 0 !== pe && pe.event.triggered !== t.type ? pe.event.dispatch.apply(e, arguments) : void 0
                    }), c = (t = (t || "").match(Ae) || [""]).length; c--;) s = Je.exec(t[c]) || [], h = g = s[1], p = (s[2] || "").split(".").sort(), h && (d = pe.event.special[h] || {}, h = (r ? d.delegateType : d.bindType) || h, d = pe.event.special[h] || {}, u = pe.extend({
                    type: h,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && pe.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, o), (f = l[h]) || (f = l[h] = [], f.delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, p, a) || e.addEventListener && e.addEventListener(h, a)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, u) : f.push(u), pe.event.global[h] = !0)
        },
        remove: function(e, t, n, i, r) {
            var o, a, s, l, c, u, d, f, h, p, g, m = Le.hasData(e) && Le.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match(Ae) || [""]).length; c--;)
                    if (s = Je.exec(t[c]) || [], h = g = s[1], p = (s[2] || "").split(".").sort(), h) {
                        for (d = pe.event.special[h] || {}, f = l[h = (i ? d.delegateType : d.bindType) || h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--;) u = f[o], !r && g !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(o, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
                        a && !f.length && (d.teardown && !1 !== d.teardown.call(e, p, m.handle) || pe.removeEvent(e, h, m.handle), delete l[h])
                    } else
                        for (h in l) pe.event.remove(e, h + t[c], n, i, !0);
                pe.isEmptyObject(l) && Le.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, r, o, a, s = pe.event.fix(e),
                l = new Array(arguments.length),
                c = (Le.get(this, "events") || {})[s.type] || [],
                u = pe.event.special[s.type] || {};
            for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (s.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, s)) {
                for (a = pe.event.handlers.call(this, s, c), t = 0;
                    (r = a[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (i = ((pe.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, a, s = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (o = [], a = {}, n = 0; n < l; n++) i = t[n], r = i.selector + " ", void 0 === a[r] && (a[r] = i.needsContext ? pe(r, this).index(c) > -1 : pe.find(r, this, null, [c]).length), a[r] && o.push(i);
                        o.length && s.push({
                            elem: c,
                            handlers: o
                        })
                    }
            return c = this, l < t.length && s.push({
                elem: c,
                handlers: t.slice(l)
            }), s
        },
        addProp: function(e, t) {
            Object.defineProperty(pe.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: pe.isFunction(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[pe.expando] ? e : new pe.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== E() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === E() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && r(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return r(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, pe.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, pe.Event = function(e, t) {
        return this instanceof pe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? C : w, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && pe.extend(this, t), this.timeStamp = e && e.timeStamp || pe.now(), void(this[pe.expando] = !0)) : new pe.Event(e, t)
    }, pe.Event.prototype = {
        constructor: pe.Event,
        isDefaultPrevented: w,
        isPropagationStopped: w,
        isImmediatePropagationStopped: w,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = C, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = C, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = C, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, pe.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Ge.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Xe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, pe.event.addProp), pe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        pe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                    r = e.relatedTarget,
                    o = e.handleObj;
                return r && (r === i || pe.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), pe.fn.extend({
        on: function(e, t, n, i) {
            return T(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return T(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, pe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = w), this.each(function() {
                pe.event.remove(this, e, n, t)
            })
        }
    });
    var Ze = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        et = /<script|<style|<link/i,
        tt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        nt = /^true\/(.*)/,
        it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    pe.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ze, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, r, o, a, s = e.cloneNode(!0),
                l = pe.contains(e.ownerDocument, e);
            if (!(fe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pe.isXMLDoc(e)))
                for (a = y(s), o = y(e), i = 0, r = o.length; i < r; i++) A(o[i], a[i]);
            if (t)
                if (n)
                    for (o = o || y(e), a = a || y(s), i = 0, r = o.length; i < r; i++) S(o[i], a[i]);
                else S(e, s);
            return (a = y(s, "script")).length > 0 && b(a, !l && y(e, "script")), s
        },
        cleanData: function(e) {
            for (var t, n, i, r = pe.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Oe(n)) {
                    if (t = n[Le.expando]) {
                        if (t.events)
                            for (i in t.events) r[i] ? pe.event.remove(n, i) : pe.removeEvent(n, i, t.handle);
                        n[Le.expando] = void 0
                    }
                    n[He.expando] && (n[He.expando] = void 0)
                }
        }
    }), pe.fn.extend({
        detach: function(e) {
            return N(this, e, !0)
        },
        remove: function(e) {
            return N(this, e)
        },
        text: function(e) {
            return Ie(this, function(e) {
                return void 0 === e ? pe.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return D(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || k(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return D(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = k(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return D(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return D(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (pe.cleanData(y(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return pe.clone(this, e, t)
            })
        },
        html: function(e) {
            return Ie(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !et.test(e) && !Ye[(Ve.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = pe.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (pe.cleanData(y(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return D(this, arguments, function(t) {
                var n = this.parentNode;
                pe.inArray(this, e) < 0 && (pe.cleanData(y(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), pe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        pe.fn[e] = function(e) {
            for (var n, i = [], r = pe(e), o = r.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), pe(r[a])[t](n), oe.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var rt = /^margin/,
        ot = new RegExp("^(" + Re + ")(?!px)[a-z%]+$", "i"),
        at = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        };
    ! function() {
        function t() {
            if (s) {
                s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", ze.appendChild(a);
                var t = e.getComputedStyle(s);
                n = "1%" !== t.top, o = "2px" === t.marginLeft, i = "4px" === t.width, s.style.marginRight = "50%", r = "4px" === t.marginRight, ze.removeChild(a), s = null
            }
        }
        var n, i, r, o, a = te.createElement("div"),
            s = te.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", fe.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), pe.extend(fe, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return t(), i
            },
            pixelMarginRight: function() {
                return t(), r
            },
            reliableMarginLeft: function() {
                return t(), o
            }
        }))
    }();
    var st = /^(none|table(?!-c[ea]).+)/,
        lt = /^--/,
        ct = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ut = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        dt = ["Webkit", "Moz", "ms"],
        ft = te.createElement("div").style;
    pe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = I(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, a, s = pe.camelCase(t),
                    l = lt.test(t),
                    c = e.style;
                return l || (t = H(s)), a = pe.cssHooks[t] || pe.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : c[t] : ("string" === (o = typeof n) && (r = Me.exec(n)) && r[1] && (n = g(e, t, r), o = "number"), void(null != n && n === n && ("number" === o && (n += r && r[3] || (pe.cssNumber[s] ? "" : "px")), fe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))))
            }
        },
        css: function(e, t, n, i) {
            var r, o, a, s = pe.camelCase(t);
            return lt.test(t) || (t = H(s)), (a = pe.cssHooks[t] || pe.cssHooks[s]) && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = I(e, t, i)), "normal" === r && t in ut && (r = ut[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }), pe.each(["height", "width"], function(e, t) {
        pe.cssHooks[t] = {
            get: function(e, n, i) {
                if (n) return !st.test(pe.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? R(e, t, i) : qe(e, ct, function() {
                    return R(e, t, i)
                })
            },
            set: function(e, n, i) {
                var r, o = i && at(e),
                    a = i && Q(e, t, i, "border-box" === pe.css(e, "boxSizing", !1, o), o);
                return a && (r = Me.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = pe.css(e, t)), P(e, n, a)
            }
        }
    }), pe.cssHooks.marginLeft = O(fe.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(I(e, "marginLeft")) || e.getBoundingClientRect().left - qe(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), pe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        pe.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + Fe[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, rt.test(e) || (pe.cssHooks[e + t].set = P)
    }), pe.fn.extend({
        css: function(e, t) {
            return Ie(this, function(e, t, n) {
                var i, r, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (i = at(e), r = t.length; a < r; a++) o[t[a]] = pe.css(e, t[a], !1, i);
                    return o
                }
                return void 0 !== n ? pe.style(e, t, n) : pe.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), pe.Tween = M, M.prototype = {
        constructor: M,
        init: function(e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || pe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (pe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = M.propHooks[this.prop];
            return e && e.get ? e.get(this) : M.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = M.propHooks[this.prop];
            return this.options.duration ? this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : M.propHooks._default.set(this), this
        }
    }, M.prototype.init.prototype = M.prototype, M.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = pe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                pe.fx.step[e.prop] ? pe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[pe.cssProps[e.prop]] && !pe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : pe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, pe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, pe.fx = M.prototype.init, pe.fx.step = {};
    var ht, pt, gt = /^(?:toggle|show|hide)$/,
        mt = /queueHooks$/;
    pe.Animation = pe.extend(V, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return g(n.elem, e, Me.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                pe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ae);
                for (var n, i = 0, r = e.length; i < r; i++) n = e[i], V.tweeners[n] = V.tweeners[n] || [], V.tweeners[n].unshift(t)
            },
            prefilters: [function(e, t, n) {
                var i, r, o, a, s, l, c, u, d = "width" in t || "height" in t,
                    f = this,
                    h = {},
                    p = e.style,
                    g = e.nodeType && We(e),
                    m = Le.get(e, "fxshow");
                n.queue || (null == (a = pe._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, f.always(function() {
                    f.always(function() {
                        a.unqueued--, pe.queue(e, "fx").length || a.empty.fire()
                    })
                }));
                for (i in t)
                    if (r = t[i], gt.test(r)) {
                        if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                            if ("show" !== r || !m || void 0 === m[i]) continue;
                            g = !0
                        }
                        h[i] = m && m[i] || pe.style(e, i)
                    }
                if ((l = !pe.isEmptyObject(t)) || !pe.isEmptyObject(h)) {
                    d && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = m && m.display) && (c = Le.get(e, "display")), "none" === (u = pe.css(e, "display")) && (c ? u = c : (v([e], !0), c = e.style.display || c, u = pe.css(e, "display"), v([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === pe.css(e, "float") && (l || (f.done(function() {
                        p.display = c
                    }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function() {
                        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                    })), l = !1;
                    for (i in h) l || (m ? "hidden" in m && (g = m.hidden) : m = Le.access(e, "fxshow", {
                        display: c
                    }), o && (m.hidden = !g), g && v([e], !0), f.done(function() {
                        g || v([e]), Le.remove(e, "fxshow");
                        for (i in h) pe.style(e, i, h[i])
                    })), l = B(g ? m[i] : 0, i, f), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
                }
            }],
            prefilter: function(e, t) {
                t ? V.prefilters.unshift(e) : V.prefilters.push(e)
            }
        }), pe.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? pe.extend({}, e) : {
                complete: n || !n && t || pe.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !pe.isFunction(t) && t
            };
            return pe.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in pe.fx.speeds ? i.duration = pe.fx.speeds[i.duration] : i.duration = pe.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                pe.isFunction(i.old) && i.old.call(this), i.queue && pe.dequeue(this, i.queue)
            }, i
        }, pe.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(We).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var r = pe.isEmptyObject(e),
                    o = pe.speed(t, n, i),
                    a = function() {
                        var t = V(this, pe.extend({}, e), o);
                        (r || Le.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        o = pe.timers,
                        a = Le.get(this);
                    if (r) a[r] && a[r].stop && i(a[r]);
                    else
                        for (r in a) a[r] && a[r].stop && mt.test(r) && i(a[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                    !t && n || pe.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, n = Le.get(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        o = pe.timers,
                        a = i ? i.length : 0;
                    for (n.finish = !0, pe.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), pe.each(["toggle", "show", "hide"], function(e, t) {
            var n = pe.fn[t];
            pe.fn[t] = function(e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(q(t, !0), e, i, r)
            }
        }), pe.each({
            slideDown: q("show"),
            slideUp: q("hide"),
            slideToggle: q("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            pe.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), pe.timers = [], pe.fx.tick = function() {
            var e, t = 0,
                n = pe.timers;
            for (ht = pe.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || pe.fx.stop(), ht = void 0
        }, pe.fx.timer = function(e) {
            pe.timers.push(e), pe.fx.start()
        }, pe.fx.interval = 13, pe.fx.start = function() {
            pt || (pt = !0, F())
        }, pe.fx.stop = function() {
            pt = null
        }, pe.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, pe.fn.delay = function(t, n) {
            return t = pe.fx ? pe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
                var r = e.setTimeout(n, t);
                i.stop = function() {
                    e.clearTimeout(r)
                }
            })
        },
        function() {
            var e = te.createElement("input"),
                t = te.createElement("select").appendChild(te.createElement("option"));
            e.type = "checkbox", fe.checkOn = "" !== e.value, fe.optSelected = t.selected, (e = te.createElement("input")).value = "t", e.type = "radio", fe.radioValue = "t" === e.value
        }();
    var vt, yt = pe.expr.attrHandle;
    pe.fn.extend({
        attr: function(e, t) {
            return Ie(this, pe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                pe.removeAttr(this, e)
            })
        }
    }), pe.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? pe.prop(e, t, n) : (1 === o && pe.isXMLDoc(e) || (r = pe.attrHooks[t.toLowerCase()] || (pe.expr.match.bool.test(t) ? vt : void 0)), void 0 !== n ? null === n ? void pe.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = pe.find.attr(e, t), null == i ? void 0 : i))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!fe.radioValue && "radio" === t && r(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0,
                r = t && t.match(Ae);
            if (r && 1 === e.nodeType)
                for (; n = r[i++];) e.removeAttribute(n)
        }
    }), vt = {
        set: function(e, t, n) {
            return !1 === t ? pe.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, pe.each(pe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = yt[t] || pe.find.attr;
        yt[t] = function(e, t, i) {
            var r, o, a = t.toLowerCase();
            return i || (o = yt[a], yt[a] = r, r = null != n(e, t, i) ? a : null, yt[a] = o), r
        }
    });
    var bt = /^(?:input|select|textarea|button)$/i,
        _t = /^(?:a|area)$/i;
    pe.fn.extend({
        prop: function(e, t) {
            return Ie(this, pe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[pe.propFix[e] || e]
            })
        }
    }), pe.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && pe.isXMLDoc(e) || (t = pe.propFix[t] || t, r = pe.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = pe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : bt.test(e.nodeName) || _t.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), fe.optSelected || (pe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), pe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        pe.propFix[this.toLowerCase()] = this
    }), pe.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, a, s, l = 0;
            if (pe.isFunction(e)) return this.each(function(t) {
                pe(this).addClass(e.call(this, t, Y(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(Ae) || []; n = this[l++];)
                    if (r = Y(n), i = 1 === n.nodeType && " " + $(r) + " ") {
                        for (a = 0; o = t[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (s = $(i)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, a, s, l = 0;
            if (pe.isFunction(e)) return this.each(function(t) {
                pe(this).removeClass(e.call(this, t, Y(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(Ae) || []; n = this[l++];)
                    if (r = Y(n), i = 1 === n.nodeType && " " + $(r) + " ") {
                        for (a = 0; o = t[a++];)
                            for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                        r !== (s = $(i)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : pe.isFunction(e) ? this.each(function(n) {
                pe(this).toggleClass(e.call(this, n, Y(this), t), t)
            }) : this.each(function() {
                var t, i, r, o;
                if ("string" === n)
                    for (i = 0, r = pe(this), o = e.match(Ae) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = Y(this)) && Le.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Le.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + $(Y(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var Ct = /\r/g;
    pe.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = pe.isFunction(e), this.each(function(n) {
                var r;
                1 === this.nodeType && (r = i ? e.call(this, n, pe(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = pe.map(r, function(e) {
                    return null == e ? "" : e + ""
                })), (t = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = pe.valHooks[r.type] || pe.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(Ct, "") : null == n ? "" : n)) : void 0
        }
    }), pe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = pe.find.attr(e, "value");
                    return null != t ? t : $(pe.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, o = e.options,
                        a = e.selectedIndex,
                        s = "select-one" === e.type,
                        l = s ? null : [],
                        c = s ? a + 1 : o.length;
                    for (i = a < 0 ? c : s ? a : 0; i < c; i++)
                        if (((n = o[i]).selected || i === a) && !n.disabled && (!n.parentNode.disabled || !r(n.parentNode, "optgroup"))) {
                            if (t = pe(n).val(), s) return t;
                            l.push(t)
                        }
                    return l
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = pe.makeArray(t), a = r.length; a--;) i = r[a], (i.selected = pe.inArray(pe.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), pe.each(["radio", "checkbox"], function() {
        pe.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = pe.inArray(pe(e).val(), t) > -1
            }
        }, fe.checkOn || (pe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var wt = /^(?:focusinfocus|focusoutblur)$/;
    pe.extend(pe.event, {
        trigger: function(t, n, i, r) {
            var o, a, s, l, c, u, d, f = [i || te],
                h = ce.call(t, "type") ? t.type : t,
                p = ce.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = i = i || te, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(h + pe.event.triggered) && (h.indexOf(".") > -1 && (p = h.split("."), h = p.shift(), p.sort()), c = h.indexOf(":") < 0 && "on" + h, t = t[pe.expando] ? t : new pe.Event(h, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : pe.makeArray(n, [t]), d = pe.event.special[h] || {}, r || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!r && !d.noBubble && !pe.isWindow(i)) {
                    for (l = d.delegateType || h, wt.test(l + h) || (a = a.parentNode); a; a = a.parentNode) f.push(a), s = a;
                    s === (i.ownerDocument || te) && f.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0;
                    (a = f[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? l : d.bindType || h, (u = (Le.get(a, "events") || {})[t.type] && Le.get(a, "handle")) && u.apply(a, n), (u = c && a[c]) && u.apply && Oe(a) && (t.result = u.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = h, r || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(f.pop(), n) || !Oe(i) || c && pe.isFunction(i[h]) && !pe.isWindow(i) && ((s = i[c]) && (i[c] = null), pe.event.triggered = h, i[h](), pe.event.triggered = void 0, s && (i[c] = s)), t.result
            }
        },
        simulate: function(e, t, n) {
            var i = pe.extend(new pe.Event, n, {
                type: e,
                isSimulated: !0
            });
            pe.event.trigger(i, null, t)
        }
    }), pe.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                pe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return pe.event.trigger(e, t, n, !0)
        }
    }), pe.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        pe.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), pe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), fe.focusin = "onfocusin" in e, fe.focusin || pe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            pe.event.simulate(t, e.target, pe.event.fix(e))
        };
        pe.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = Le.access(i, t);
                r || i.addEventListener(e, n, !0), Le.access(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = Le.access(i, t) - 1;
                r ? Le.access(i, t, r) : (i.removeEventListener(e, n, !0), Le.remove(i, t))
            }
        }
    });
    var Et = e.location,
        Tt = pe.now(),
        kt = /\?/;
    pe.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || pe.error("Invalid XML: " + t), n
    };
    var xt = /\[\]$/,
        jt = /\r?\n/g,
        St = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;
    pe.param = function(e, t) {
        var n, i = [],
            r = function(e, t) {
                var n = pe.isFunction(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !pe.isPlainObject(e)) pe.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (n in e) K(n, e[n], t, r);
        return i.join("&")
    }, pe.fn.extend({
        serialize: function() {
            return pe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = pe.prop(this, "elements");
                return e ? pe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !pe(this).is(":disabled") && At.test(this.nodeName) && !St.test(e) && (this.checked || !Ue.test(e))
            }).map(function(e, t) {
                var n = pe(this).val();
                return null == n ? null : Array.isArray(n) ? pe.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(jt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(jt, "\r\n")
                }
            }).get()
        }
    });
    var Dt = /%20/g,
        Nt = /#.*$/,
        It = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Lt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ht = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        Qt = {},
        Rt = {},
        Mt = "*/".concat("*"),
        Ft = te.createElement("a");
    Ft.href = Et.href, pe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Et.href,
            type: "GET",
            isLocal: Lt.test(Et.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Mt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": pe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? X(X(e, pe.ajaxSettings), t) : X(pe.ajaxSettings, e)
        },
        ajaxPrefilter: z(Qt),
        ajaxTransport: z(Rt),
        ajax: function(t, n) {
            function i(t, n, i, s) {
                var c, f, h, _, C, w = n;
                u || (u = !0, l && e.clearTimeout(l), r = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, i && (_ = J(p, E, i)), _ = Z(p, _, E, c), c ? (p.ifModified && ((C = E.getResponseHeader("Last-Modified")) && (pe.lastModified[o] = C), (C = E.getResponseHeader("etag")) && (pe.etag[o] = C)), 204 === t || "HEAD" === p.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = _.state, f = _.data, h = _.error, c = !h)) : (h = w, !t && w || (w = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || w) + "", c ? v.resolveWith(g, [f, w, E]) : v.rejectWith(g, [E, w, h]), E.statusCode(b), b = void 0, d && m.trigger(c ? "ajaxSuccess" : "ajaxError", [E, p, c ? f : h]), y.fireWith(g, [E, w]), d && (m.trigger("ajaxComplete", [E, p]), --pe.active || pe.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, o, a, s, l, c, u, d, f, h, p = pe.ajaxSetup({}, n),
                g = p.context || p,
                m = p.context && (g.nodeType || g.jquery) ? pe(g) : pe.event,
                v = pe.Deferred(),
                y = pe.Callbacks("once memory"),
                b = p.statusCode || {},
                _ = {},
                C = {},
                w = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (u) {
                            if (!s)
                                for (s = {}; t = Ot.exec(a);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return u ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == u && (e = C[e.toLowerCase()] = C[e.toLowerCase()] || e, _[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == u && (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (u) E.always(e[E.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return r && r.abort(t), i(0, t), this
                    }
                };
            if (v.promise(E), p.url = ((t || p.url || Et.href) + "").replace(Pt, Et.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(Ae) || [""], null == p.crossDomain) {
                c = te.createElement("a");
                try {
                    c.href = p.url, c.href = c.href, p.crossDomain = Ft.protocol + "//" + Ft.host != c.protocol + "//" + c.host
                } catch (e) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = pe.param(p.data, p.traditional)), G(Qt, p, n, E), u) return E;
            (d = pe.event && p.global) && 0 == pe.active++ && pe.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ht.test(p.type), o = p.url.replace(Nt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Dt, "+")) : (h = p.url.slice(o.length), p.data && (o += (kt.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(It, "$1"), h = (kt.test(o) ? "&" : "?") + "_=" + Tt++ + h), p.url = o + h), p.ifModified && (pe.lastModified[o] && E.setRequestHeader("If-Modified-Since", pe.lastModified[o]), pe.etag[o] && E.setRequestHeader("If-None-Match", pe.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && E.setRequestHeader("Content-Type", p.contentType), E.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Mt + "; q=0.01" : "") : p.accepts["*"]);
            for (f in p.headers) E.setRequestHeader(f, p.headers[f]);
            if (p.beforeSend && (!1 === p.beforeSend.call(g, E, p) || u)) return E.abort();
            if (w = "abort", y.add(p.complete), E.done(p.success), E.fail(p.error), r = G(Rt, p, n, E)) {
                if (E.readyState = 1, d && m.trigger("ajaxSend", [E, p]), u) return E;
                p.async && p.timeout > 0 && (l = e.setTimeout(function() {
                    E.abort("timeout")
                }, p.timeout));
                try {
                    u = !1, r.send(_, i)
                } catch (e) {
                    if (u) throw e;
                    i(-1, e)
                }
            } else i(-1, "No Transport");
            return E
        },
        getJSON: function(e, t, n) {
            return pe.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return pe.get(e, void 0, t, "script")
        }
    }), pe.each(["get", "post"], function(e, t) {
        pe[t] = function(e, n, i, r) {
            return pe.isFunction(n) && (r = r || i, i = n, n = void 0), pe.ajax(pe.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, pe.isPlainObject(e) && e))
        }
    }), pe._evalUrl = function(e) {
        return pe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, pe.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (pe.isFunction(e) && (e = e.call(this[0])), t = pe(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return pe.isFunction(e) ? this.each(function(t) {
                pe(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = pe(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = pe.isFunction(e);
            return this.each(function(n) {
                pe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                pe(this).replaceWith(this.childNodes)
            }), this
        }
    }), pe.expr.pseudos.hidden = function(e) {
        return !pe.expr.pseudos.visible(e)
    }, pe.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, pe.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Wt = {
            0: 200,
            1223: 204
        },
        qt = pe.ajaxSettings.xhr();
    fe.cors = !!qt && "withCredentials" in qt, fe.ajax = qt = !!qt, pe.ajaxTransport(function(t) {
        var n, i;
        if (fe.cors || qt && !t.crossDomain) return {
            send: function(r, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (a in r) s.setRequestHeader(a, r[a]);
                n = function(e) {
                    return function() {
                        n && (n = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Wt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), i = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout(function() {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), pe.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), pe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return pe.globalEval(e), e
            }
        }
    }), pe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), pe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, r) {
                    t = pe("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                    }), te.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Bt = [],
        Ut = /(=)\?(?=&|$)|\?\?/;
    pe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Bt.pop() || pe.expando + "_" + Tt++;
            return this[e] = !0, e
        }
    }), pe.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, o, a, s = !1 !== t.jsonp && (Ut.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = pe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Ut, "$1" + r) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
            return a || pe.error(r + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
            a = arguments
        }, i.always(function() {
            void 0 === o ? pe(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Bt.push(r)), a && pe.isFunction(o) && o(a[0]), a = o = void 0
        }), "script"
    }), fe.createHTMLDocument = function() {
        var e = te.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), pe.parseHTML = function(e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var i, r, o;
        return t || (fe.createHTMLDocument ? (t = te.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = te.location.href, t.head.appendChild(i)) : t = te), r = Ee.exec(e), o = !n && [], r ? [t.createElement(r[1])] : (r = _([e], t, o), o && o.length && pe(o).remove(), pe.merge([], r.childNodes))
    }, pe.fn.load = function(e, t, n) {
        var i, r, o, a = this,
            s = e.indexOf(" ");
        return s > -1 && (i = $(e.slice(s)), e = e.slice(0, s)), pe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && pe.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(i ? pe("<div>").append(pe.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, pe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        pe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), pe.expr.pseudos.animated = function(e) {
        return pe.grep(pe.timers, function(t) {
            return e === t.elem
        }).length
    }, pe.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, a, s, l, c = pe.css(e, "position"),
                u = pe(e),
                d = {};
            "static" === c && (e.style.position = "relative"), s = u.offset(), o = pe.css(e, "top"), l = pe.css(e, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (i = u.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + r), "using" in t ? t.using.call(e, d) : u.css(d)
        }
    }, pe.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                pe.offset.setOffset(this, e, t)
            });
            var t, n, i, r, o = this[0];
            return o ? o.getClientRects().length ? (i = o.getBoundingClientRect(), t = o.ownerDocument, n = t.documentElement, r = t.defaultView, {
                top: i.top + r.pageYOffset - n.clientTop,
                left: i.left + r.pageXOffset - n.clientLeft
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === pe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), r(e[0], "html") || (i = e.offset()), i = {
                    top: i.top + pe.css(e[0], "borderTopWidth", !0),
                    left: i.left + pe.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - i.top - pe.css(n, "marginTop", !0),
                    left: t.left - i.left - pe.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === pe.css(e, "position");) e = e.offsetParent;
                return e || ze
            })
        }
    }), pe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        pe.fn[e] = function(i) {
            return Ie(this, function(e, i, r) {
                var o;
                return pe.isWindow(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r ? o ? o[t] : e[i] : void(o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r)
            }, e, i, arguments.length)
        }
    }), pe.each(["top", "left"], function(e, t) {
        pe.cssHooks[t] = O(fe.pixelPosition, function(e, n) {
            if (n) return n = I(e, t), ot.test(n) ? pe(e).position()[t] + "px" : n
        })
    }), pe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        pe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            pe.fn[i] = function(r, o) {
                var a = arguments.length && (n || "boolean" != typeof r),
                    s = n || (!0 === r || !0 === o ? "margin" : "border");
                return Ie(this, function(t, n, r) {
                    var o;
                    return pe.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? pe.css(t, n, s) : pe.style(t, n, r, s)
                }, t, a ? r : void 0, a)
            }
        })
    }), pe.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), pe.holdReady = function(e) {
        e ? pe.readyWait++ : pe.ready(!0)
    }, pe.isArray = Array.isArray, pe.parseJSON = JSON.parse, pe.nodeName = r, "function" == typeof define && define.amd && define("jquery", [], function() {
        return pe
    });
    var Vt = e.jQuery,
        $t = e.$;
    return pe.noConflict = function(t) {
        return e.$ === pe && (e.$ = $t), t && e.jQuery === pe && (e.jQuery = Vt), pe
    }, t || (e.jQuery = e.$ = pe), pe
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], t) : t(e.bootstrap = {}, e.jQuery)
}(this, function(e, t) {
    "use strict";

    function n(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function i(e, t, i) {
        return t && n(e.prototype, t), i && n(e, i), e
    }

    function r() {
        return (r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        }).apply(this, arguments)
    }

    function o(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }

    function a(e, t) {
        if (1 !== e.nodeType) return [];
        var n = getComputedStyle(e, null);
        return t ? n[t] : n
    }

    function s(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }

    function l(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body
        }
        var t = a(e),
            n = t.overflow,
            i = t.overflowX,
            r = t.overflowY;
        return /(auto|scroll)/.test(n + r + i) ? e : l(s(e))
    }

    function c(e) {
        var t = e && e.offsetParent,
            n = t && t.nodeName;
        return n && "BODY" !== n && "HTML" !== n ? -1 !== ["TD", "TABLE"].indexOf(t.nodeName) && "static" === a(t, "position") ? c(t) : t : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function u(e) {
        return null !== e.parentNode ? u(e.parentNode) : e
    }

    function d(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? e : t,
            r = n ? t : e,
            o = document.createRange();
        o.setStart(i, 0), o.setEnd(r, 0);
        var a, s, l = o.commonAncestorContainer;
        if (e !== l && t !== l || i.contains(r)) return "BODY" === (s = (a = l).nodeName) || "HTML" !== s && c(a.firstElementChild) !== a ? c(l) : l;
        var f = u(e);
        return f.host ? d(f.host, t) : d(e, u(t).host)
    }

    function f(e) {
        var t = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = e.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var i = e.ownerDocument.documentElement;
            return (e.ownerDocument.scrollingElement || i)[t]
        }
        return e[t]
    }

    function h(e, t) {
        var n = "x" === t ? "Left" : "Top",
            i = "Left" === n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
    }

    function p(e, t, n, i) {
        return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], _e() ? n["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
    }

    function g() {
        var e = document.body,
            t = document.documentElement,
            n = _e() && getComputedStyle(t);
        return {
            height: p("Height", e, t, n),
            width: p("Width", e, t, n)
        }
    }

    function m(e) {
        return Te({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }

    function v(e) {
        var t = {};
        if (_e()) try {
            t = e.getBoundingClientRect();
            var n = f(e, "top"),
                i = f(e, "left");
            t.top += n, t.left += i, t.bottom += n, t.right += i
        } catch (e) {} else t = e.getBoundingClientRect();
        var r = {
                left: t.left,
                top: t.top,
                width: t.right - t.left,
                height: t.bottom - t.top
            },
            o = "HTML" === e.nodeName ? g() : {},
            s = o.width || e.clientWidth || r.right - r.left,
            l = o.height || e.clientHeight || r.bottom - r.top,
            c = e.offsetWidth - s,
            u = e.offsetHeight - l;
        if (c || u) {
            var d = a(e);
            c -= h(d, "x"), u -= h(d, "y"), r.width -= c, r.height -= u
        }
        return m(r)
    }

    function y(e, t) {
        var n = _e(),
            i = "HTML" === t.nodeName,
            r = v(e),
            o = v(t),
            s = l(e),
            c = a(t),
            u = parseFloat(c.borderTopWidth, 10),
            d = parseFloat(c.borderLeftWidth, 10),
            h = m({
                top: r.top - o.top - u,
                left: r.left - o.left - d,
                width: r.width,
                height: r.height
            });
        if (h.marginTop = 0, h.marginLeft = 0, !n && i) {
            var p = parseFloat(c.marginTop, 10),
                g = parseFloat(c.marginLeft, 10);
            h.top -= u - p, h.bottom -= u - p, h.left -= d - g, h.right -= d - g, h.marginTop = p, h.marginLeft = g
        }
        return (n ? t.contains(s) : t === s && "BODY" !== s.nodeName) && (h = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = f(t, "top"),
                r = f(t, "left"),
                o = n ? -1 : 1;
            return e.top += i * o, e.bottom += i * o, e.left += r * o, e.right += r * o, e
        }(h, t)), h
    }

    function b(e, t, n, i) {
        var r, o, c, u, h, p, v, b = {
                top: 0,
                left: 0
            },
            _ = d(e, t);
        if ("viewport" === i) o = (r = _).ownerDocument.documentElement, c = y(r, o), u = Math.max(o.clientWidth, window.innerWidth || 0), h = Math.max(o.clientHeight, window.innerHeight || 0), p = f(o), v = f(o, "left"), b = m({
            top: p - c.top + c.marginTop,
            left: v - c.left + c.marginLeft,
            width: u,
            height: h
        });
        else {
            var C = void 0;
            "scrollParent" === i ? "BODY" === (C = l(s(t))).nodeName && (C = e.ownerDocument.documentElement) : C = "window" === i ? e.ownerDocument.documentElement : i;
            var w = y(C, _);
            if ("HTML" !== C.nodeName || function e(t) {
                    var n = t.nodeName;
                    return "BODY" !== n && "HTML" !== n && ("fixed" === a(t, "position") || e(s(t)))
                }(_)) b = w;
            else {
                var E = g(),
                    T = E.height,
                    k = E.width;
                b.top += w.top - w.marginTop, b.bottom = T + w.top, b.left += w.left - w.marginLeft, b.right = k + w.left
            }
        }
        return b.left += n, b.top += n, b.right -= n, b.bottom -= n, b
    }

    function _(e, t, n, i, r) {
        var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var a = b(n, i, o, r),
            s = {
                top: {
                    width: a.width,
                    height: t.top - a.top
                },
                right: {
                    width: a.right - t.right,
                    height: a.height
                },
                bottom: {
                    width: a.width,
                    height: a.bottom - t.bottom
                },
                left: {
                    width: t.left - a.left,
                    height: a.height
                }
            },
            l = Object.keys(s).map(function(e) {
                return Te({
                    key: e
                }, s[e], {
                    area: (t = s[e]).width * t.height
                });
                var t
            }).sort(function(e, t) {
                return t.area - e.area
            }),
            c = l.filter(function(e) {
                var t = e.width,
                    i = e.height;
                return t >= n.clientWidth && i >= n.clientHeight
            }),
            u = c.length > 0 ? c[0].key : l[0].key,
            d = e.split("-")[1];
        return u + (d ? "-" + d : "")
    }

    function C(e, t, n) {
        return y(n, d(t, n))
    }

    function w(e) {
        var t = getComputedStyle(e),
            n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
        return {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        }
    }

    function E(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }

    function T(e, t, n) {
        n = n.split("-")[0];
        var i = w(e),
            r = {
                width: i.width,
                height: i.height
            },
            o = -1 !== ["right", "left"].indexOf(n),
            a = o ? "top" : "left",
            s = o ? "left" : "top",
            l = o ? "height" : "width",
            c = o ? "width" : "height";
        return r[a] = t[a] + t[l] / 2 - i[l] / 2, r[s] = n === s ? t[s] - i[c] : t[E(s)], r
    }

    function k(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function x(e, t, n) {
        return (void 0 === n ? e : e.slice(0, function(e, t, n) {
            if (Array.prototype.findIndex) return e.findIndex(function(e) {
                return e[t] === n
            });
            var i = k(e, function(e) {
                return e[t] === n
            });
            return e.indexOf(i)
        }(e, "name", n))).forEach(function(e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var n = e.function || e.fn;
            e.enabled && o(n) && (t.offsets.popper = m(t.offsets.popper), t.offsets.reference = m(t.offsets.reference), t = n(t, e))
        }), t
    }

    function j(e, t) {
        return e.some(function(e) {
            var n = e.name;
            return e.enabled && n === t
        })
    }

    function S(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length - 1; i++) {
            var r = t[i],
                o = r ? "" + r + n : e;
            if (void 0 !== document.body.style[o]) return o
        }
        return null
    }

    function A(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function D(e, t, n, i) {
        n.updateBound = i, A(e).addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var r = l(e);
        return function e(t, n, i, r) {
            var o = "BODY" === t.nodeName,
                a = o ? t.ownerDocument.defaultView : t;
            a.addEventListener(n, i, {
                passive: !0
            }), o || e(l(a.parentNode), n, i, r), r.push(a)
        }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
    }

    function N() {
        var e, t;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, A(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
            e.removeEventListener("scroll", t.updateBound)
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
    }

    function I(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function O(e, t) {
        Object.keys(t).forEach(function(n) {
            var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && I(t[n]) && (i = "px"), e.style[n] = t[n] + i
        })
    }

    function L(e, t, n) {
        var i = k(e, function(e) {
                return e.name === t
            }),
            r = !!i && e.some(function(e) {
                return e.name === n && e.enabled && e.order < i.order
            });
        if (!r) {
            var o = "`" + t + "`",
                a = "`" + n + "`";
            console.warn(a + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return r
    }

    function H(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = xe.indexOf(e),
            i = xe.slice(n + 1).concat(xe.slice(0, n));
        return t ? i.reverse() : i
    }

    function P(e, t, n, i) {
        var r = [0, 0],
            o = -1 !== ["right", "left"].indexOf(i),
            a = e.split(/(\+|\-)/).map(function(e) {
                return e.trim()
            }),
            s = a.indexOf(k(a, function(e) {
                return -1 !== e.search(/,|\s/)
            }));
        a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            c = -1 !== s ? [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))] : [a];
        return (c = c.map(function(e, i) {
            var r = (1 === i ? !o : o) ? "height" : "width",
                a = !1;
            return e.reduce(function(e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, a = !0, e) : a ? (e[e.length - 1] += t, a = !1, e) : e.concat(t)
            }, []).map(function(e) {
                return function(e, t, n, i) {
                    var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        o = +r[1],
                        a = r[2];
                    if (!o) return e;
                    if (0 === a.indexOf("%")) {
                        var s = void 0;
                        switch (a) {
                            case "%p":
                                s = n;
                                break;
                            case "%":
                            case "%r":
                            default:
                                s = i
                        }
                        return m(s)[t] / 100 * o
                    }
                    return "vh" === a || "vw" === a ? ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o : o
                }(e, r, t, n)
            })
        })).forEach(function(e, t) {
            e.forEach(function(n, i) {
                I(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1))
            })
        }), r
    }
    for (var Q, R, M, F, W, q, B, U, V, $, Y, K, z, G, X, J, Z, ee, te, ne, ie, re, oe, ae, se, le, ce = function(e) {
            var t = !1,
                n = {
                    TRANSITION_END: "bsTransitionEnd",
                    getUID: function(e) {
                        do {
                            e += ~~(1e6 * Math.random())
                        } while (document.getElementById(e));
                        return e
                    },
                    getSelectorFromElement: function(t) {
                        var n, i = t.getAttribute("data-target");
                        i && "#" !== i || (i = t.getAttribute("href") || ""), "#" === i.charAt(0) && (n = i, i = n = "function" == typeof e.escapeSelector ? e.escapeSelector(n).substr(1) : n.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1"));
                        try {
                            return e(document).find(i).length > 0 ? i : null
                        } catch (e) {
                            return null
                        }
                    },
                    reflow: function(e) {
                        return e.offsetHeight
                    },
                    triggerTransitionEnd: function(n) {
                        e(n).trigger(t.end)
                    },
                    supportsTransitionEnd: function() {
                        return Boolean(t)
                    },
                    isElement: function(e) {
                        return (e[0] || e).nodeType
                    },
                    typeCheckConfig: function(e, t, i) {
                        for (var r in i)
                            if (Object.prototype.hasOwnProperty.call(i, r)) {
                                var o = i[r],
                                    a = t[r],
                                    s = a && n.isElement(a) ? "element" : (l = a, {}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());
                                if (!new RegExp(o).test(s)) throw new Error(e.toUpperCase() + ': Option "' + r + '" provided type "' + s + '" but expected type "' + o + '".')
                            }
                        var l
                    }
                };
            return t = ("undefined" == typeof window || !window.QUnit) && {
                end: "transitionend"
            }, e.fn.emulateTransitionEnd = function(t) {
                var i = this,
                    r = !1;
                return e(this).one(n.TRANSITION_END, function() {
                    r = !0
                }), setTimeout(function() {
                    r || n.triggerTransitionEnd(i)
                }, t), this
            }, n.supportsTransitionEnd() && (e.event.special[n.TRANSITION_END] = {
                bindType: t.end,
                delegateType: t.end,
                handle: function(t) {
                    if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
                }
            }), n
        }(t = t && t.hasOwnProperty("default") ? t.default : t), ue = (R = "alert", F = "." + (M = "bs.alert"), W = (Q = t).fn[R], q = {
            CLOSE: "close" + F,
            CLOSED: "closed" + F,
            CLICK_DATA_API: "click" + F + ".data-api"
        }, B = "alert", U = "fade", V = "show", $ = function() {
            function e(e) {
                this._element = e
            }
            var t = e.prototype;
            return t.close = function(e) {
                e = e || this._element;
                var t = this._getRootElement(e);
                this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, t.dispose = function() {
                Q.removeData(this._element, M), this._element = null
            }, t._getRootElement = function(e) {
                var t = ce.getSelectorFromElement(e),
                    n = !1;
                return t && (n = Q(t)[0]), n || (n = Q(e).closest("." + B)[0]), n
            }, t._triggerCloseEvent = function(e) {
                var t = Q.Event(q.CLOSE);
                return Q(e).trigger(t), t
            }, t._removeElement = function(e) {
                var t = this;
                Q(e).removeClass(V), ce.supportsTransitionEnd() && Q(e).hasClass(U) ? Q(e).one(ce.TRANSITION_END, function(n) {
                    return t._destroyElement(e, n)
                }).emulateTransitionEnd(150) : this._destroyElement(e)
            }, t._destroyElement = function(e) {
                Q(e).detach().trigger(q.CLOSED).remove()
            }, e._jQueryInterface = function(t) {
                return this.each(function() {
                    var n = Q(this),
                        i = n.data(M);
                    i || (i = new e(this), n.data(M, i)), "close" === t && i[t](this)
                })
            }, e._handleDismiss = function(e) {
                return function(t) {
                    t && t.preventDefault(), e.close(this)
                }
            }, i(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0"
                }
            }]), e
        }(), Q(document).on(q.CLICK_DATA_API, '[data-dismiss="alert"]', $._handleDismiss(new $)), Q.fn[R] = $._jQueryInterface, Q.fn[R].Constructor = $, Q.fn[R].noConflict = function() {
            return Q.fn[R] = W, $._jQueryInterface
        }, $), de = (K = "button", G = "." + (z = "bs.button"), X = ".data-api", J = (Y = t).fn[K], Z = "active", ee = "btn", te = "focus", ne = '[data-toggle^="button"]', ie = '[data-toggle="buttons"]', re = "input", oe = ".active", ae = ".btn", se = {
            CLICK_DATA_API: "click" + G + X,
            FOCUS_BLUR_DATA_API: "focus" + G + X + " blur" + G + X
        }, le = function() {
            function e(e) {
                this._element = e
            }
            var t = e.prototype;
            return t.toggle = function() {
                var e = !0,
                    t = !0,
                    n = Y(this._element).closest(ie)[0];
                if (n) {
                    var i = Y(this._element).find(re)[0];
                    if (i) {
                        if ("radio" === i.type)
                            if (i.checked && Y(this._element).hasClass(Z)) e = !1;
                            else {
                                var r = Y(n).find(oe)[0];
                                r && Y(r).removeClass(Z)
                            }
                        if (e) {
                            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                            i.checked = !Y(this._element).hasClass(Z), Y(i).trigger("change")
                        }
                        i.focus(), t = !1
                    }
                }
                t && this._element.setAttribute("aria-pressed", !Y(this._element).hasClass(Z)), e && Y(this._element).toggleClass(Z)
            }, t.dispose = function() {
                Y.removeData(this._element, z), this._element = null
            }, e._jQueryInterface = function(t) {
                return this.each(function() {
                    var n = Y(this).data(z);
                    n || (n = new e(this), Y(this).data(z, n)), "toggle" === t && n[t]()
                })
            }, i(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0"
                }
            }]), e
        }(), Y(document).on(se.CLICK_DATA_API, ne, function(e) {
            e.preventDefault();
            var t = e.target;
            Y(t).hasClass("btn") || (t = Y(t).closest(ae)), le._jQueryInterface.call(Y(t), "toggle")
        }).on(se.FOCUS_BLUR_DATA_API, ne, function(e) {
            var t = Y(e.target).closest(ae)[0];
            Y(t).toggleClass(te, /^focus(in)?$/.test(e.type))
        }), Y.fn[K] = le._jQueryInterface, Y.fn[K].Constructor = le, Y.fn[K].noConflict = function() {
            return Y.fn[K] = J, le._jQueryInterface
        }, le), fe = (function(e) {
            var t = "carousel",
                n = "bs.carousel",
                o = "." + n,
                a = e.fn[t],
                s = {
                    interval: 5e3,
                    keyboard: !0,
                    slide: !1,
                    pause: "hover",
                    wrap: !0
                },
                l = {
                    interval: "(number|boolean)",
                    keyboard: "boolean",
                    slide: "(boolean|string)",
                    pause: "(string|boolean)",
                    wrap: "boolean"
                },
                c = "next",
                u = "prev",
                d = {
                    SLIDE: "slide" + o,
                    SLID: "slid" + o,
                    KEYDOWN: "keydown" + o,
                    MOUSEENTER: "mouseenter" + o,
                    MOUSELEAVE: "mouseleave" + o,
                    TOUCHEND: "touchend" + o,
                    LOAD_DATA_API: "load" + o + ".data-api",
                    CLICK_DATA_API: "click" + o + ".data-api"
                },
                f = "active",
                h = {
                    ACTIVE: ".active",
                    ACTIVE_ITEM: ".active.carousel-item",
                    ITEM: ".carousel-item",
                    NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                    INDICATORS: ".carousel-indicators",
                    DATA_SLIDE: "[data-slide], [data-slide-to]",
                    DATA_RIDE: '[data-ride="carousel"]'
                },
                p = function() {
                    function a(t, n) {
                        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = e(t)[0], this._indicatorsElement = e(this._element).find(h.INDICATORS)[0], this._addEventListeners()
                    }
                    var p = a.prototype;
                    return p.next = function() {
                        this._isSliding || this._slide(c)
                    }, p.nextWhenVisible = function() {
                        !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next()
                    }, p.prev = function() {
                        this._isSliding || this._slide(u)
                    }, p.pause = function(t) {
                        t || (this._isPaused = !0), e(this._element).find(h.NEXT_PREV)[0] && ce.supportsTransitionEnd() && (ce.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                    }, p.cycle = function(e) {
                        e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                    }, p.to = function(t) {
                        var n = this;
                        this._activeElement = e(this._element).find(h.ACTIVE_ITEM)[0];
                        var i = this._getItemIndex(this._activeElement);
                        if (!(t > this._items.length - 1 || t < 0))
                            if (this._isSliding) e(this._element).one(d.SLID, function() {
                                return n.to(t)
                            });
                            else {
                                if (i === t) return this.pause(), void this.cycle();
                                var r = t > i ? c : u;
                                this._slide(r, this._items[t])
                            }
                    }, p.dispose = function() {
                        e(this._element).off(o), e.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                    }, p._getConfig = function(e) {
                        return e = r({}, s, e), ce.typeCheckConfig(t, e, l), e
                    }, p._addEventListeners = function() {
                        var t = this;
                        this._config.keyboard && e(this._element).on(d.KEYDOWN, function(e) {
                            return t._keydown(e)
                        }), "hover" === this._config.pause && (e(this._element).on(d.MOUSEENTER, function(e) {
                            return t.pause(e)
                        }).on(d.MOUSELEAVE, function(e) {
                            return t.cycle(e)
                        }), "ontouchstart" in document.documentElement && e(this._element).on(d.TOUCHEND, function() {
                            t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function(e) {
                                return t.cycle(e)
                            }, 500 + t._config.interval)
                        }))
                    }, p._keydown = function(e) {
                        if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                            case 37:
                                e.preventDefault(), this.prev();
                                break;
                            case 39:
                                e.preventDefault(), this.next()
                        }
                    }, p._getItemIndex = function(t) {
                        return this._items = e.makeArray(e(t).parent().find(h.ITEM)), this._items.indexOf(t)
                    }, p._getItemByDirection = function(e, t) {
                        var n = e === c,
                            i = e === u,
                            r = this._getItemIndex(t),
                            o = this._items.length - 1;
                        if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
                        var a = (r + (e === u ? -1 : 1)) % this._items.length;
                        return -1 === a ? this._items[this._items.length - 1] : this._items[a]
                    }, p._triggerSlideEvent = function(t, n) {
                        var i = this._getItemIndex(t),
                            r = this._getItemIndex(e(this._element).find(h.ACTIVE_ITEM)[0]),
                            o = e.Event(d.SLIDE, {
                                relatedTarget: t,
                                direction: n,
                                from: r,
                                to: i
                            });
                        return e(this._element).trigger(o), o
                    }, p._setActiveIndicatorElement = function(t) {
                        if (this._indicatorsElement) {
                            e(this._indicatorsElement).find(h.ACTIVE).removeClass(f);
                            var n = this._indicatorsElement.children[this._getItemIndex(t)];
                            n && e(n).addClass(f)
                        }
                    }, p._slide = function(t, n) {
                        var i, r, o, a = this,
                            s = e(this._element).find(h.ACTIVE_ITEM)[0],
                            l = this._getItemIndex(s),
                            u = n || s && this._getItemByDirection(t, s),
                            p = this._getItemIndex(u),
                            g = Boolean(this._interval);
                        if (t === c ? (i = "carousel-item-left", r = "carousel-item-next", o = "left") : (i = "carousel-item-right", r = "carousel-item-prev", o = "right"), u && e(u).hasClass(f)) this._isSliding = !1;
                        else if (!this._triggerSlideEvent(u, o).isDefaultPrevented() && s && u) {
                            this._isSliding = !0, g && this.pause(), this._setActiveIndicatorElement(u);
                            var m = e.Event(d.SLID, {
                                relatedTarget: u,
                                direction: o,
                                from: l,
                                to: p
                            });
                            ce.supportsTransitionEnd() && e(this._element).hasClass("slide") ? (e(u).addClass(r), ce.reflow(u), e(s).addClass(i), e(u).addClass(i), e(s).one(ce.TRANSITION_END, function() {
                                e(u).removeClass(i + " " + r).addClass(f), e(s).removeClass(f + " " + r + " " + i), a._isSliding = !1, setTimeout(function() {
                                    return e(a._element).trigger(m)
                                }, 0)
                            }).emulateTransitionEnd(600)) : (e(s).removeClass(f), e(u).addClass(f), this._isSliding = !1, e(this._element).trigger(m)), g && this.cycle()
                        }
                    }, a._jQueryInterface = function(t) {
                        return this.each(function() {
                            var i = e(this).data(n),
                                o = r({}, s, e(this).data());
                            "object" == typeof t && (o = r({}, o, t));
                            var l = "string" == typeof t ? t : o.slide;
                            if (i || (i = new a(this, o), e(this).data(n, i)), "number" == typeof t) i.to(t);
                            else if ("string" == typeof l) {
                                if (void 0 === i[l]) throw new TypeError('No method named "' + l + '"');
                                i[l]()
                            } else o.interval && (i.pause(), i.cycle())
                        })
                    }, a._dataApiClickHandler = function(t) {
                        var i = ce.getSelectorFromElement(this);
                        if (i) {
                            var o = e(i)[0];
                            if (o && e(o).hasClass("carousel")) {
                                var s = r({}, e(o).data(), e(this).data()),
                                    l = this.getAttribute("data-slide-to");
                                l && (s.interval = !1), a._jQueryInterface.call(e(o), s), l && e(o).data(n).to(l), t.preventDefault()
                            }
                        }
                    }, i(a, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return s
                        }
                    }]), a
                }();
            return e(document).on(d.CLICK_DATA_API, h.DATA_SLIDE, p._dataApiClickHandler), e(window).on(d.LOAD_DATA_API, function() {
                e(h.DATA_RIDE).each(function() {
                    var t = e(this);
                    p._jQueryInterface.call(t, t.data())
                })
            }), e.fn[t] = p._jQueryInterface, e.fn[t].Constructor = p, e.fn[t].noConflict = function() {
                return e.fn[t] = a, p._jQueryInterface
            }, p
        }(t)), he = function(e) {
            var t = "collapse",
                n = "bs.collapse",
                o = "." + n,
                a = e.fn[t],
                s = {
                    toggle: !0,
                    parent: ""
                },
                l = {
                    toggle: "boolean",
                    parent: "(string|element)"
                },
                c = {
                    SHOW: "show" + o,
                    SHOWN: "shown" + o,
                    HIDE: "hide" + o,
                    HIDDEN: "hidden" + o,
                    CLICK_DATA_API: "click" + o + ".data-api"
                },
                u = "show",
                d = "collapse",
                f = "collapsing",
                h = "collapsed",
                p = "width",
                g = {
                    ACTIVES: ".show, .collapsing",
                    DATA_TOGGLE: '[data-toggle="collapse"]'
                },
                m = function() {
                    function o(t, n) {
                        this._isTransitioning = !1, this._element = t, this._config = this._getConfig(n), this._triggerArray = e.makeArray(e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                        for (var i = e(g.DATA_TOGGLE), r = 0; r < i.length; r++) {
                            var o = i[r],
                                a = ce.getSelectorFromElement(o);
                            null !== a && e(a).filter(t).length > 0 && (this._selector = a, this._triggerArray.push(o))
                        }
                        this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                    }
                    var a = o.prototype;
                    return a.toggle = function() {
                        e(this._element).hasClass(u) ? this.hide() : this.show()
                    }, a.show = function() {
                        var t, i, r = this;
                        if (!(this._isTransitioning || e(this._element).hasClass(u) || (this._parent && 0 === (t = e.makeArray(e(this._parent).find(g.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (t = null), t && (i = e(t).not(this._selector).data(n)) && i._isTransitioning))) {
                            var a = e.Event(c.SHOW);
                            if (e(this._element).trigger(a), !a.isDefaultPrevented()) {
                                t && (o._jQueryInterface.call(e(t).not(this._selector), "hide"), i || e(t).data(n, null));
                                var s = this._getDimension();
                                e(this._element).removeClass(d).addClass(f), this._element.style[s] = 0, this._triggerArray.length > 0 && e(this._triggerArray).removeClass(h).attr("aria-expanded", !0), this.setTransitioning(!0);
                                var l = function() {
                                    e(r._element).removeClass(f).addClass(d).addClass(u), r._element.style[s] = "", r.setTransitioning(!1), e(r._element).trigger(c.SHOWN)
                                };
                                if (ce.supportsTransitionEnd()) {
                                    var p = "scroll" + (s[0].toUpperCase() + s.slice(1));
                                    e(this._element).one(ce.TRANSITION_END, l).emulateTransitionEnd(600), this._element.style[s] = this._element[p] + "px"
                                } else l()
                            }
                        }
                    }, a.hide = function() {
                        var t = this;
                        if (!this._isTransitioning && e(this._element).hasClass(u)) {
                            var n = e.Event(c.HIDE);
                            if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
                                var i = this._getDimension();
                                if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", ce.reflow(this._element), e(this._element).addClass(f).removeClass(d).removeClass(u), this._triggerArray.length > 0)
                                    for (var r = 0; r < this._triggerArray.length; r++) {
                                        var o = this._triggerArray[r],
                                            a = ce.getSelectorFromElement(o);
                                        null !== a && (e(a).hasClass(u) || e(o).addClass(h).attr("aria-expanded", !1))
                                    }
                                this.setTransitioning(!0);
                                var s = function() {
                                    t.setTransitioning(!1), e(t._element).removeClass(f).addClass(d).trigger(c.HIDDEN)
                                };
                                this._element.style[i] = "", ce.supportsTransitionEnd() ? e(this._element).one(ce.TRANSITION_END, s).emulateTransitionEnd(600) : s()
                            }
                        }
                    }, a.setTransitioning = function(e) {
                        this._isTransitioning = e
                    }, a.dispose = function() {
                        e.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                    }, a._getConfig = function(e) {
                        return (e = r({}, s, e)).toggle = Boolean(e.toggle), ce.typeCheckConfig(t, e, l), e
                    }, a._getDimension = function() {
                        return e(this._element).hasClass(p) ? p : "height"
                    }, a._getParent = function() {
                        var t = this,
                            n = null;
                        ce.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = e(this._config.parent)[0];
                        var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                        return e(n).find(i).each(function(e, n) {
                            t._addAriaAndCollapsedClass(o._getTargetFromElement(n), [n])
                        }), n
                    }, a._addAriaAndCollapsedClass = function(t, n) {
                        if (t) {
                            var i = e(t).hasClass(u);
                            n.length > 0 && e(n).toggleClass(h, !i).attr("aria-expanded", i)
                        }
                    }, o._getTargetFromElement = function(t) {
                        var n = ce.getSelectorFromElement(t);
                        return n ? e(n)[0] : null
                    }, o._jQueryInterface = function(t) {
                        return this.each(function() {
                            var i = e(this),
                                a = i.data(n),
                                l = r({}, s, i.data(), "object" == typeof t && t);
                            if (!a && l.toggle && /show|hide/.test(t) && (l.toggle = !1), a || (a = new o(this, l), i.data(n, a)), "string" == typeof t) {
                                if (void 0 === a[t]) throw new TypeError('No method named "' + t + '"');
                                a[t]()
                            }
                        })
                    }, i(o, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return s
                        }
                    }]), o
                }();
            return e(document).on(c.CLICK_DATA_API, g.DATA_TOGGLE, function(t) {
                "A" === t.currentTarget.tagName && t.preventDefault();
                var i = e(this),
                    r = ce.getSelectorFromElement(this);
                e(r).each(function() {
                    var t = e(this),
                        r = t.data(n) ? "toggle" : i.data();
                    m._jQueryInterface.call(t, r)
                })
            }), e.fn[t] = m._jQueryInterface, e.fn[t].Constructor = m, e.fn[t].noConflict = function() {
                return e.fn[t] = a, m._jQueryInterface
            }, m
        }(t), pe = "undefined" != typeof window && "undefined" != typeof document, ge = ["Edge", "Trident", "Firefox"], me = 0, ve = 0; ve < ge.length; ve += 1)
        if (pe && navigator.userAgent.indexOf(ge[ve]) >= 0) {
            me = 1;
            break
        }
    var ye = pe && window.Promise ? function(e) {
            var t = !1;
            return function() {
                t || (t = !0, window.Promise.resolve().then(function() {
                    t = !1, e()
                }))
            }
        } : function(e) {
            var t = !1;
            return function() {
                t || (t = !0, setTimeout(function() {
                    t = !1, e()
                }, me))
            }
        },
        be = void 0,
        _e = function() {
            return void 0 === be && (be = -1 !== navigator.appVersion.indexOf("MSIE 10")), be
        },
        Ce = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        we = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        Ee = function(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        },
        Te = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        },
        ke = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        xe = ke.slice(3),
        je = {
            FLIP: "flip",
            CLOCKWISE: "clockwise",
            COUNTERCLOCKWISE: "counterclockwise"
        },
        Se = {
            placement: "bottom",
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function(e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            i = t.split("-")[1];
                        if (i) {
                            var r = e.offsets,
                                o = r.reference,
                                a = r.popper,
                                s = -1 !== ["bottom", "top"].indexOf(n),
                                l = s ? "left" : "top",
                                c = s ? "width" : "height",
                                u = {
                                    start: Ee({}, l, o[l]),
                                    end: Ee({}, l, o[l] + o[c] - a[c])
                                };
                            e.offsets.popper = Te({}, a, u[i])
                        }
                        return e
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function(e, t) {
                        var n = t.offset,
                            i = e.placement,
                            r = e.offsets,
                            o = r.popper,
                            a = r.reference,
                            s = i.split("-")[0],
                            l = void 0;
                        return l = I(+n) ? [+n, 0] : P(n, o, a, s), "left" === s ? (o.top += l[0], o.left -= l[1]) : "right" === s ? (o.top += l[0], o.left += l[1]) : "top" === s ? (o.left += l[0], o.top -= l[1]) : "bottom" === s && (o.left += l[0], o.top += l[1]), e.popper = o, e
                    },
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function(e, t) {
                        var n = t.boundariesElement || c(e.instance.popper);
                        e.instance.reference === n && (n = c(n));
                        var i = b(e.instance.popper, e.instance.reference, t.padding, n);
                        t.boundaries = i;
                        var r = t.priority,
                            o = e.offsets.popper,
                            a = {
                                primary: function(e) {
                                    var n = o[e];
                                    return o[e] < i[e] && !t.escapeWithReference && (n = Math.max(o[e], i[e])), Ee({}, e, n)
                                },
                                secondary: function(e) {
                                    var n = "right" === e ? "left" : "top",
                                        r = o[n];
                                    return o[e] > i[e] && !t.escapeWithReference && (r = Math.min(o[n], i[e] - ("right" === e ? o.width : o.height))), Ee({}, n, r)
                                }
                            };
                        return r.forEach(function(e) {
                            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                            o = Te({}, o, a[t](e))
                        }), e.offsets.popper = o, e
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function(e) {
                        var t = e.offsets,
                            n = t.popper,
                            i = t.reference,
                            r = e.placement.split("-")[0],
                            o = Math.floor,
                            a = -1 !== ["top", "bottom"].indexOf(r),
                            s = a ? "right" : "bottom",
                            l = a ? "left" : "top",
                            c = a ? "width" : "height";
                        return n[s] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[s]) && (e.offsets.popper[l] = o(i[s])), e
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function(e, t) {
                        var n;
                        if (!L(e.instance.modifiers, "arrow", "keepTogether")) return e;
                        var i = t.element;
                        if ("string" == typeof i) {
                            if (!(i = e.instance.popper.querySelector(i))) return e
                        } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                        var r = e.placement.split("-")[0],
                            o = e.offsets,
                            s = o.popper,
                            l = o.reference,
                            c = -1 !== ["left", "right"].indexOf(r),
                            u = c ? "height" : "width",
                            d = c ? "Top" : "Left",
                            f = d.toLowerCase(),
                            h = c ? "left" : "top",
                            p = c ? "bottom" : "right",
                            g = w(i)[u];
                        l[p] - g < s[f] && (e.offsets.popper[f] -= s[f] - (l[p] - g)), l[f] + g > s[p] && (e.offsets.popper[f] += l[f] + g - s[p]), e.offsets.popper = m(e.offsets.popper);
                        var v = l[f] + l[u] / 2 - g / 2,
                            y = a(e.instance.popper),
                            b = parseFloat(y["margin" + d], 10),
                            _ = parseFloat(y["border" + d + "Width"], 10),
                            C = v - e.offsets.popper[f] - b - _;
                        return C = Math.max(Math.min(s[u] - g, C), 0), e.arrowElement = i, e.offsets.arrow = (Ee(n = {}, f, Math.round(C)), Ee(n, h, ""), n), e
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function(e, t) {
                        if (j(e.instance.modifiers, "inner")) return e;
                        if (e.flipped && e.placement === e.originalPlacement) return e;
                        var n = b(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
                            i = e.placement.split("-")[0],
                            r = E(i),
                            o = e.placement.split("-")[1] || "",
                            a = [];
                        switch (t.behavior) {
                            case je.FLIP:
                                a = [i, r];
                                break;
                            case je.CLOCKWISE:
                                a = H(i);
                                break;
                            case je.COUNTERCLOCKWISE:
                                a = H(i, !0);
                                break;
                            default:
                                a = t.behavior
                        }
                        return a.forEach(function(s, l) {
                            if (i !== s || a.length === l + 1) return e;
                            i = e.placement.split("-")[0], r = E(i);
                            var c, u = e.offsets.popper,
                                d = e.offsets.reference,
                                f = Math.floor,
                                h = "left" === i && f(u.right) > f(d.left) || "right" === i && f(u.left) < f(d.right) || "top" === i && f(u.bottom) > f(d.top) || "bottom" === i && f(u.top) < f(d.bottom),
                                p = f(u.left) < f(n.left),
                                g = f(u.right) > f(n.right),
                                m = f(u.top) < f(n.top),
                                v = f(u.bottom) > f(n.bottom),
                                y = "left" === i && p || "right" === i && g || "top" === i && m || "bottom" === i && v,
                                b = -1 !== ["top", "bottom"].indexOf(i),
                                _ = !!t.flipVariations && (b && "start" === o && p || b && "end" === o && g || !b && "start" === o && m || !b && "end" === o && v);
                            (h || y || _) && (e.flipped = !0, (h || y) && (i = a[l + 1]), _ && (o = "end" === (c = o) ? "start" : "start" === c ? "end" : c), e.placement = i + (o ? "-" + o : ""), e.offsets.popper = Te({}, e.offsets.popper, T(e.instance.popper, e.offsets.reference, e.placement)), e = x(e.instance.modifiers, e, "flip"))
                        }), e
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport"
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function(e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            i = e.offsets,
                            r = i.popper,
                            o = i.reference,
                            a = -1 !== ["left", "right"].indexOf(n),
                            s = -1 === ["top", "left"].indexOf(n);
                        return r[a ? "left" : "top"] = o[n] - (s ? r[a ? "width" : "height"] : 0), e.placement = E(t), e.offsets.popper = m(r), e
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function(e) {
                        if (!L(e.instance.modifiers, "hide", "preventOverflow")) return e;
                        var t = e.offsets.reference,
                            n = k(e.instance.modifiers, function(e) {
                                return "preventOverflow" === e.name
                            }).boundaries;
                        if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                            if (!0 === e.hide) return e;
                            e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === e.hide) return e;
                            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                        }
                        return e
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function(e, t) {
                        var n = t.x,
                            i = t.y,
                            r = e.offsets.popper,
                            o = k(e.instance.modifiers, function(e) {
                                return "applyStyle" === e.name
                            }).gpuAcceleration;
                        void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var a = void 0 !== o ? o : t.gpuAcceleration,
                            s = v(c(e.instance.popper)),
                            l = {
                                position: r.position
                            },
                            u = {
                                left: Math.floor(r.left),
                                top: Math.floor(r.top),
                                bottom: Math.floor(r.bottom),
                                right: Math.floor(r.right)
                            },
                            d = "bottom" === n ? "top" : "bottom",
                            f = "right" === i ? "right" : "left",
                            h = S("transform"),
                            p = void 0,
                            g = void 0;
                        if (g = "bottom" === d ? -s.height + u.bottom : u.top, p = "right" === f ? -s.width + u.right : u.left, a && h) l[h] = "translate3d(" + p + "px, " + g + "px, 0)", l[d] = 0, l[f] = 0, l.willChange = "transform";
                        else {
                            var m = "bottom" === d ? -1 : 1,
                                y = "right" === f ? -1 : 1;
                            l[d] = g * m, l[f] = p * y, l.willChange = d + ", " + f
                        }
                        var b = {
                            "x-placement": e.placement
                        };
                        return e.attributes = Te({}, b, e.attributes), e.styles = Te({}, l, e.styles), e.arrowStyles = Te({}, e.offsets.arrow, e.arrowStyles), e
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function(e) {
                        var t, n;
                        return O(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function(e) {
                            !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                        }), e.arrowElement && Object.keys(e.arrowStyles).length && O(e.arrowElement, e.arrowStyles), e
                    },
                    onLoad: function(e, t, n, i, r) {
                        var o = C(0, t, e),
                            a = _(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return t.setAttribute("x-placement", a), O(t, {
                            position: "absolute"
                        }), n
                    },
                    gpuAcceleration: void 0
                }
            }
        },
        Ae = function() {
            function e(t, n) {
                var i = this,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                Ce(this, e), this.scheduleUpdate = function() {
                    return requestAnimationFrame(i.update)
                }, this.update = ye(this.update.bind(this)), this.options = Te({}, e.Defaults, r), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(Te({}, e.Defaults.modifiers, r.modifiers)).forEach(function(t) {
                    i.options.modifiers[t] = Te({}, e.Defaults.modifiers[t] || {}, r.modifiers ? r.modifiers[t] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                    return Te({
                        name: e
                    }, i.options.modifiers[e])
                }).sort(function(e, t) {
                    return e.order - t.order
                }), this.modifiers.forEach(function(e) {
                    e.enabled && o(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state)
                }), this.update();
                var a = this.options.eventsEnabled;
                a && this.enableEventListeners(), this.state.eventsEnabled = a
            }
            return we(e, [{
                key: "update",
                value: function() {
                    return function() {
                        if (!this.state.isDestroyed) {
                            var e = {
                                instance: this,
                                styles: {},
                                arrowStyles: {},
                                attributes: {},
                                flipped: !1,
                                offsets: {}
                            };
                            e.offsets.reference = C(this.state, this.popper, this.reference), e.placement = _(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = T(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = "absolute", e = x(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                        }
                    }.call(this)
                }
            }, {
                key: "destroy",
                value: function() {
                    return function() {
                        return this.state.isDestroyed = !0, j(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[S("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                    }.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function() {
                    return function() {
                        this.state.eventsEnabled || (this.state = D(this.reference, this.options, this.state, this.scheduleUpdate))
                    }.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function() {
                    return N.call(this)
                }
            }]), e
        }();
    Ae.Utils = ("undefined" != typeof window ? window : global).PopperUtils, Ae.placements = ke, Ae.Defaults = Se;
    var De = function(e) {
            var t = "dropdown",
                n = "bs.dropdown",
                o = "." + n,
                a = e.fn[t],
                s = new RegExp("38|40|27"),
                l = {
                    HIDE: "hide" + o,
                    HIDDEN: "hidden" + o,
                    SHOW: "show" + o,
                    SHOWN: "shown" + o,
                    CLICK: "click" + o,
                    CLICK_DATA_API: "click" + o + ".data-api",
                    KEYDOWN_DATA_API: "keydown" + o + ".data-api",
                    KEYUP_DATA_API: "keyup" + o + ".data-api"
                },
                c = "disabled",
                u = "show",
                d = "dropup",
                f = "dropdown-menu-right",
                h = '[data-toggle="dropdown"]',
                p = ".dropdown-menu",
                g = {
                    offset: 0,
                    flip: !0,
                    boundary: "scrollParent"
                },
                m = {
                    offset: "(number|string|function)",
                    flip: "boolean",
                    boundary: "(string|element)"
                },
                v = function() {
                    function a(e, t) {
                        this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                    }
                    var v = a.prototype;
                    return v.toggle = function() {
                        if (!this._element.disabled && !e(this._element).hasClass(c)) {
                            var t = a._getParentFromElement(this._element),
                                n = e(this._menu).hasClass(u);
                            if (a._clearMenus(), !n) {
                                var i = {
                                        relatedTarget: this._element
                                    },
                                    r = e.Event(l.SHOW, i);
                                if (e(t).trigger(r), !r.isDefaultPrevented()) {
                                    if (!this._inNavbar) {
                                        if (void 0 === Ae) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                        var o = this._element;
                                        e(t).hasClass(d) && (e(this._menu).hasClass("dropdown-menu-left") || e(this._menu).hasClass(f)) && (o = t), "scrollParent" !== this._config.boundary && e(t).addClass("position-static"), this._popper = new Ae(o, this._menu, this._getPopperConfig())
                                    }
                                    "ontouchstart" in document.documentElement && 0 === e(t).closest(".navbar-nav").length && e("body").children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass(u), e(t).toggleClass(u).trigger(e.Event(l.SHOWN, i))
                                }
                            }
                        }
                    }, v.dispose = function() {
                        e.removeData(this._element, n), e(this._element).off(o), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
                    }, v.update = function() {
                        this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                    }, v._addEventListeners = function() {
                        var t = this;
                        e(this._element).on(l.CLICK, function(e) {
                            e.preventDefault(), e.stopPropagation(), t.toggle()
                        })
                    }, v._getConfig = function(n) {
                        return n = r({}, this.constructor.Default, e(this._element).data(), n), ce.typeCheckConfig(t, n, this.constructor.DefaultType), n
                    }, v._getMenuElement = function() {
                        if (!this._menu) {
                            var t = a._getParentFromElement(this._element);
                            this._menu = e(t).find(p)[0]
                        }
                        return this._menu
                    }, v._getPlacement = function() {
                        var t = e(this._element).parent(),
                            n = "bottom-start";
                        return t.hasClass(d) ? (n = "top-start", e(this._menu).hasClass(f) && (n = "top-end")) : t.hasClass("dropright") ? n = "right-start" : t.hasClass("dropleft") ? n = "left-start" : e(this._menu).hasClass(f) && (n = "bottom-end"), n
                    }, v._detectNavbar = function() {
                        return e(this._element).closest(".navbar").length > 0
                    }, v._getPopperConfig = function() {
                        var e = this,
                            t = {};
                        return "function" == typeof this._config.offset ? t.fn = function(t) {
                            return t.offsets = r({}, t.offsets, e._config.offset(t.offsets) || {}), t
                        } : t.offset = this._config.offset, {
                            placement: this._getPlacement(),
                            modifiers: {
                                offset: t,
                                flip: {
                                    enabled: this._config.flip
                                },
                                preventOverflow: {
                                    boundariesElement: this._config.boundary
                                }
                            }
                        }
                    }, a._jQueryInterface = function(t) {
                        return this.each(function() {
                            var i = e(this).data(n);
                            if (i || (i = new a(this, "object" == typeof t ? t : null), e(this).data(n, i)), "string" == typeof t) {
                                if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                                i[t]()
                            }
                        })
                    }, a._clearMenus = function(t) {
                        if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                            for (var i = e.makeArray(e(h)), r = 0; r < i.length; r++) {
                                var o = a._getParentFromElement(i[r]),
                                    s = e(i[r]).data(n),
                                    c = {
                                        relatedTarget: i[r]
                                    };
                                if (s) {
                                    var d = s._menu;
                                    if (e(o).hasClass(u) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && e.contains(o, t.target))) {
                                        var f = e.Event(l.HIDE, c);
                                        e(o).trigger(f), f.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e("body").children().off("mouseover", null, e.noop), i[r].setAttribute("aria-expanded", "false"), e(d).removeClass(u), e(o).removeClass(u).trigger(e.Event(l.HIDDEN, c)))
                                    }
                                }
                            }
                    }, a._getParentFromElement = function(t) {
                        var n, i = ce.getSelectorFromElement(t);
                        return i && (n = e(i)[0]), n || t.parentNode
                    }, a._dataApiKeydownHandler = function(t) {
                        if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || e(t.target).closest(p).length)) : s.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !e(this).hasClass(c))) {
                            var n = a._getParentFromElement(this),
                                i = e(n).hasClass(u);
                            if ((i || 27 === t.which && 32 === t.which) && (!i || 27 !== t.which && 32 !== t.which)) {
                                var r = e(n).find(".dropdown-menu .dropdown-item:not(.disabled)").get();
                                if (0 !== r.length) {
                                    var o = r.indexOf(t.target);
                                    38 === t.which && o > 0 && o--, 40 === t.which && o < r.length - 1 && o++, o < 0 && (o = 0), r[o].focus()
                                }
                            } else {
                                if (27 === t.which) {
                                    var l = e(n).find(h)[0];
                                    e(l).trigger("focus")
                                }
                                e(this).trigger("click")
                            }
                        }
                    }, i(a, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return g
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return m
                        }
                    }]), a
                }();
            return e(document).on(l.KEYDOWN_DATA_API, h, v._dataApiKeydownHandler).on(l.KEYDOWN_DATA_API, p, v._dataApiKeydownHandler).on(l.CLICK_DATA_API + " " + l.KEYUP_DATA_API, v._clearMenus).on(l.CLICK_DATA_API, h, function(t) {
                t.preventDefault(), t.stopPropagation(), v._jQueryInterface.call(e(this), "toggle")
            }).on(l.CLICK_DATA_API, ".dropdown form", function(e) {
                e.stopPropagation()
            }), e.fn[t] = v._jQueryInterface, e.fn[t].Constructor = v, e.fn[t].noConflict = function() {
                return e.fn[t] = a, v._jQueryInterface
            }, v
        }(t),
        Ne = function(e) {
            var t = "bs.modal",
                n = "." + t,
                o = e.fn.modal,
                a = {
                    backdrop: !0,
                    keyboard: !0,
                    focus: !0,
                    show: !0
                },
                s = {
                    backdrop: "(boolean|string)",
                    keyboard: "boolean",
                    focus: "boolean",
                    show: "boolean"
                },
                l = {
                    HIDE: "hide" + n,
                    HIDDEN: "hidden" + n,
                    SHOW: "show" + n,
                    SHOWN: "shown" + n,
                    FOCUSIN: "focusin" + n,
                    RESIZE: "resize" + n,
                    CLICK_DISMISS: "click.dismiss" + n,
                    KEYDOWN_DISMISS: "keydown.dismiss" + n,
                    MOUSEUP_DISMISS: "mouseup.dismiss" + n,
                    MOUSEDOWN_DISMISS: "mousedown.dismiss" + n,
                    CLICK_DATA_API: "click.bs.modal.data-api"
                },
                c = "modal-open",
                u = "fade",
                d = "show",
                f = {
                    DIALOG: ".modal-dialog",
                    DATA_TOGGLE: '[data-toggle="modal"]',
                    DATA_DISMISS: '[data-dismiss="modal"]',
                    FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                    STICKY_CONTENT: ".sticky-top",
                    NAVBAR_TOGGLER: ".navbar-toggler"
                },
                h = function() {
                    function o(t, n) {
                        this._config = this._getConfig(n), this._element = t, this._dialog = e(t).find(f.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
                    }
                    var h = o.prototype;
                    return h.toggle = function(e) {
                        return this._isShown ? this.hide() : this.show(e)
                    }, h.show = function(t) {
                        var n = this;
                        if (!this._isTransitioning && !this._isShown) {
                            ce.supportsTransitionEnd() && e(this._element).hasClass(u) && (this._isTransitioning = !0);
                            var i = e.Event(l.SHOW, {
                                relatedTarget: t
                            });
                            e(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), e(document.body).addClass(c), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(l.CLICK_DISMISS, f.DATA_DISMISS, function(e) {
                                return n.hide(e)
                            }), e(this._dialog).on(l.MOUSEDOWN_DISMISS, function() {
                                e(n._element).one(l.MOUSEUP_DISMISS, function(t) {
                                    e(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
                                })
                            }), this._showBackdrop(function() {
                                return n._showElement(t)
                            }))
                        }
                    }, h.hide = function(t) {
                        var n = this;
                        if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
                            var i = e.Event(l.HIDE);
                            if (e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                                this._isShown = !1;
                                var r = ce.supportsTransitionEnd() && e(this._element).hasClass(u);
                                r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off(l.FOCUSIN), e(this._element).removeClass(d), e(this._element).off(l.CLICK_DISMISS), e(this._dialog).off(l.MOUSEDOWN_DISMISS), r ? e(this._element).one(ce.TRANSITION_END, function(e) {
                                    return n._hideModal(e)
                                }).emulateTransitionEnd(300) : this._hideModal()
                            }
                        }
                    }, h.dispose = function() {
                        e.removeData(this._element, t), e(window, document, this._element, this._backdrop).off(n), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
                    }, h.handleUpdate = function() {
                        this._adjustDialog()
                    }, h._getConfig = function(e) {
                        return e = r({}, a, e), ce.typeCheckConfig("modal", e, s), e
                    }, h._showElement = function(t) {
                        var n = this,
                            i = ce.supportsTransitionEnd() && e(this._element).hasClass(u);
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && ce.reflow(this._element), e(this._element).addClass(d), this._config.focus && this._enforceFocus();
                        var r = e.Event(l.SHOWN, {
                                relatedTarget: t
                            }),
                            o = function() {
                                n._config.focus && n._element.focus(), n._isTransitioning = !1, e(n._element).trigger(r)
                            };
                        i ? e(this._dialog).one(ce.TRANSITION_END, o).emulateTransitionEnd(300) : o()
                    }, h._enforceFocus = function() {
                        var t = this;
                        e(document).off(l.FOCUSIN).on(l.FOCUSIN, function(n) {
                            document !== n.target && t._element !== n.target && 0 === e(t._element).has(n.target).length && t._element.focus()
                        })
                    }, h._setEscapeEvent = function() {
                        var t = this;
                        this._isShown && this._config.keyboard ? e(this._element).on(l.KEYDOWN_DISMISS, function(e) {
                            27 === e.which && (e.preventDefault(), t.hide())
                        }) : this._isShown || e(this._element).off(l.KEYDOWN_DISMISS)
                    }, h._setResizeEvent = function() {
                        var t = this;
                        this._isShown ? e(window).on(l.RESIZE, function(e) {
                            return t.handleUpdate(e)
                        }) : e(window).off(l.RESIZE)
                    }, h._hideModal = function() {
                        var t = this;
                        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() {
                            e(document.body).removeClass(c), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(l.HIDDEN)
                        })
                    }, h._removeBackdrop = function() {
                        this._backdrop && (e(this._backdrop).remove(), this._backdrop = null)
                    }, h._showBackdrop = function(t) {
                        var n = this,
                            i = e(this._element).hasClass(u) ? u : "";
                        if (this._isShown && this._config.backdrop) {
                            var r = ce.supportsTransitionEnd() && i;
                            if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", i && e(this._backdrop).addClass(i), e(this._backdrop).appendTo(document.body), e(this._element).on(l.CLICK_DISMISS, function(e) {
                                    n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                                }), r && ce.reflow(this._backdrop), e(this._backdrop).addClass(d), !t) return;
                            if (!r) return void t();
                            e(this._backdrop).one(ce.TRANSITION_END, t).emulateTransitionEnd(150)
                        } else if (!this._isShown && this._backdrop) {
                            e(this._backdrop).removeClass(d);
                            var o = function() {
                                n._removeBackdrop(), t && t()
                            };
                            ce.supportsTransitionEnd() && e(this._element).hasClass(u) ? e(this._backdrop).one(ce.TRANSITION_END, o).emulateTransitionEnd(150) : o()
                        } else t && t()
                    }, h._adjustDialog = function() {
                        var e = this._element.scrollHeight > document.documentElement.clientHeight;
                        !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                    }, h._resetAdjustments = function() {
                        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                    }, h._checkScrollbar = function() {
                        var e = document.body.getBoundingClientRect();
                        this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                    }, h._setScrollbar = function() {
                        var t = this;
                        if (this._isBodyOverflowing) {
                            e(f.FIXED_CONTENT).each(function(n, i) {
                                var r = e(i)[0].style.paddingRight,
                                    o = e(i).css("padding-right");
                                e(i).data("padding-right", r).css("padding-right", parseFloat(o) + t._scrollbarWidth + "px")
                            }), e(f.STICKY_CONTENT).each(function(n, i) {
                                var r = e(i)[0].style.marginRight,
                                    o = e(i).css("margin-right");
                                e(i).data("margin-right", r).css("margin-right", parseFloat(o) - t._scrollbarWidth + "px")
                            }), e(f.NAVBAR_TOGGLER).each(function(n, i) {
                                var r = e(i)[0].style.marginRight,
                                    o = e(i).css("margin-right");
                                e(i).data("margin-right", r).css("margin-right", parseFloat(o) + t._scrollbarWidth + "px")
                            });
                            var n = document.body.style.paddingRight,
                                i = e("body").css("padding-right");
                            e("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                        }
                    }, h._resetScrollbar = function() {
                        e(f.FIXED_CONTENT).each(function(t, n) {
                            var i = e(n).data("padding-right");
                            void 0 !== i && e(n).css("padding-right", i).removeData("padding-right")
                        }), e(f.STICKY_CONTENT + ", " + f.NAVBAR_TOGGLER).each(function(t, n) {
                            var i = e(n).data("margin-right");
                            void 0 !== i && e(n).css("margin-right", i).removeData("margin-right")
                        });
                        var t = e("body").data("padding-right");
                        void 0 !== t && e("body").css("padding-right", t).removeData("padding-right")
                    }, h._getScrollbarWidth = function() {
                        var e = document.createElement("div");
                        e.className = "modal-scrollbar-measure", document.body.appendChild(e);
                        var t = e.getBoundingClientRect().width - e.clientWidth;
                        return document.body.removeChild(e), t
                    }, o._jQueryInterface = function(n, i) {
                        return this.each(function() {
                            var a = e(this).data(t),
                                s = r({}, o.Default, e(this).data(), "object" == typeof n && n);
                            if (a || (a = new o(this, s), e(this).data(t, a)), "string" == typeof n) {
                                if (void 0 === a[n]) throw new TypeError('No method named "' + n + '"');
                                a[n](i)
                            } else s.show && a.show(i)
                        })
                    }, i(o, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return a
                        }
                    }]), o
                }();
            return e(document).on(l.CLICK_DATA_API, f.DATA_TOGGLE, function(n) {
                var i, o = this,
                    a = ce.getSelectorFromElement(this);
                a && (i = e(a)[0]);
                var s = e(i).data(t) ? "toggle" : r({}, e(i).data(), e(this).data());
                "A" !== this.tagName && "AREA" !== this.tagName || n.preventDefault();
                var c = e(i).one(l.SHOW, function(t) {
                    t.isDefaultPrevented() || c.one(l.HIDDEN, function() {
                        e(o).is(":visible") && o.focus()
                    })
                });
                h._jQueryInterface.call(e(i), s, this)
            }), e.fn.modal = h._jQueryInterface, e.fn.modal.Constructor = h, e.fn.modal.noConflict = function() {
                return e.fn.modal = o, h._jQueryInterface
            }, h
        }(t),
        Ie = function(e) {
            var t = "tooltip",
                n = "bs.tooltip",
                o = "." + n,
                a = e.fn[t],
                s = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
                l = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "(number|string)",
                    container: "(string|element|boolean)",
                    fallbackPlacement: "(string|array)",
                    boundary: "(string|element)"
                },
                c = {
                    AUTO: "auto",
                    TOP: "top",
                    RIGHT: "right",
                    BOTTOM: "bottom",
                    LEFT: "left"
                },
                u = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    selector: !1,
                    placement: "top",
                    offset: 0,
                    container: !1,
                    fallbackPlacement: "flip",
                    boundary: "scrollParent"
                },
                d = "show",
                f = "out",
                h = {
                    HIDE: "hide" + o,
                    HIDDEN: "hidden" + o,
                    SHOW: "show" + o,
                    SHOWN: "shown" + o,
                    INSERTED: "inserted" + o,
                    CLICK: "click" + o,
                    FOCUSIN: "focusin" + o,
                    FOCUSOUT: "focusout" + o,
                    MOUSEENTER: "mouseenter" + o,
                    MOUSELEAVE: "mouseleave" + o
                },
                p = "fade",
                g = "show",
                m = "hover",
                v = "focus",
                y = function() {
                    function a(e, t) {
                        if (void 0 === Ae) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                        this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
                    }
                    var y = a.prototype;
                    return y.enable = function() {
                        this._isEnabled = !0
                    }, y.disable = function() {
                        this._isEnabled = !1
                    }, y.toggleEnabled = function() {
                        this._isEnabled = !this._isEnabled
                    }, y.toggle = function(t) {
                        if (this._isEnabled)
                            if (t) {
                                var n = this.constructor.DATA_KEY,
                                    i = e(t.currentTarget).data(n);
                                i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                            } else {
                                if (e(this.getTipElement()).hasClass(g)) return void this._leave(null, this);
                                this._enter(null, this)
                            }
                    }, y.dispose = function() {
                        clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal"), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                    }, y.show = function() {
                        var t = this;
                        if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");
                        var n = e.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                            e(this.element).trigger(n);
                            var i = e.contains(this.element.ownerDocument.documentElement, this.element);
                            if (n.isDefaultPrevented() || !i) return;
                            var r = this.getTipElement(),
                                o = ce.getUID(this.constructor.NAME);
                            r.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && e(r).addClass(p);
                            var s = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                                l = this._getAttachment(s);
                            this.addAttachmentClass(l);
                            var c = !1 === this.config.container ? document.body : e(this.config.container);
                            e(r).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(r).appendTo(c), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new Ae(this.element, r, {
                                placement: l,
                                modifiers: {
                                    offset: {
                                        offset: this.config.offset
                                    },
                                    flip: {
                                        behavior: this.config.fallbackPlacement
                                    },
                                    arrow: {
                                        element: ".arrow"
                                    },
                                    preventOverflow: {
                                        boundariesElement: this.config.boundary
                                    }
                                },
                                onCreate: function(e) {
                                    e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                                },
                                onUpdate: function(e) {
                                    t._handlePopperPlacementChange(e)
                                }
                            }), e(r).addClass(g), "ontouchstart" in document.documentElement && e("body").children().on("mouseover", null, e.noop);
                            var u = function() {
                                t.config.animation && t._fixTransition();
                                var n = t._hoverState;
                                t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), n === f && t._leave(null, t)
                            };
                            ce.supportsTransitionEnd() && e(this.tip).hasClass(p) ? e(this.tip).one(ce.TRANSITION_END, u).emulateTransitionEnd(a._TRANSITION_DURATION) : u()
                        }
                    }, y.hide = function(t) {
                        var n = this,
                            i = this.getTipElement(),
                            r = e.Event(this.constructor.Event.HIDE),
                            o = function() {
                                n._hoverState !== d && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), e(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t()
                            };
                        e(this.element).trigger(r), r.isDefaultPrevented() || (e(i).removeClass(g), "ontouchstart" in document.documentElement && e("body").children().off("mouseover", null, e.noop), this._activeTrigger.click = !1, this._activeTrigger[v] = !1, this._activeTrigger[m] = !1, ce.supportsTransitionEnd() && e(this.tip).hasClass(p) ? e(i).one(ce.TRANSITION_END, o).emulateTransitionEnd(150) : o(), this._hoverState = "")
                    }, y.update = function() {
                        null !== this._popper && this._popper.scheduleUpdate()
                    }, y.isWithContent = function() {
                        return Boolean(this.getTitle())
                    }, y.addAttachmentClass = function(t) {
                        e(this.getTipElement()).addClass("bs-tooltip-" + t)
                    }, y.getTipElement = function() {
                        return this.tip = this.tip || e(this.config.template)[0], this.tip
                    }, y.setContent = function() {
                        var t = e(this.getTipElement());
                        this.setElementContent(t.find(".tooltip-inner"), this.getTitle()), t.removeClass(p + " " + g)
                    }, y.setElementContent = function(t, n) {
                        var i = this.config.html;
                        "object" == typeof n && (n.nodeType || n.jquery) ? i ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text()) : t[i ? "html" : "text"](n)
                    }, y.getTitle = function() {
                        var e = this.element.getAttribute("data-original-title");
                        return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
                    }, y._getAttachment = function(e) {
                        return c[e.toUpperCase()]
                    }, y._setListeners = function() {
                        var t = this;
                        this.config.trigger.split(" ").forEach(function(n) {
                            if ("click" === n) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function(e) {
                                return t.toggle(e)
                            });
                            else if ("manual" !== n) {
                                var i = n === m ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                                    r = n === m ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                                e(t.element).on(i, t.config.selector, function(e) {
                                    return t._enter(e)
                                }).on(r, t.config.selector, function(e) {
                                    return t._leave(e)
                                })
                            }
                            e(t.element).closest(".modal").on("hide.bs.modal", function() {
                                return t.hide()
                            })
                        }), this.config.selector ? this.config = r({}, this.config, {
                            trigger: "manual",
                            selector: ""
                        }) : this._fixTitle()
                    }, y._fixTitle = function() {
                        var e = typeof this.element.getAttribute("data-original-title");
                        (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                    }, y._enter = function(t, n) {
                        var i = this.constructor.DATA_KEY;
                        (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusin" === t.type ? v : m] = !0), e(n.getTipElement()).hasClass(g) || n._hoverState === d ? n._hoverState = d : (clearTimeout(n._timeout), n._hoverState = d, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function() {
                            n._hoverState === d && n.show()
                        }, n.config.delay.show) : n.show())
                    }, y._leave = function(t, n) {
                        var i = this.constructor.DATA_KEY;
                        (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusout" === t.type ? v : m] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = f, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function() {
                            n._hoverState === f && n.hide()
                        }, n.config.delay.hide) : n.hide())
                    }, y._isWithActiveTrigger = function() {
                        for (var e in this._activeTrigger)
                            if (this._activeTrigger[e]) return !0;
                        return !1
                    }, y._getConfig = function(n) {
                        return "number" == typeof(n = r({}, this.constructor.Default, e(this.element).data(), n)).delay && (n.delay = {
                            show: n.delay,
                            hide: n.delay
                        }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), ce.typeCheckConfig(t, n, this.constructor.DefaultType), n
                    }, y._getDelegateConfig = function() {
                        var e = {};
                        if (this.config)
                            for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                        return e
                    }, y._cleanTipClass = function() {
                        var t = e(this.getTipElement()),
                            n = t.attr("class").match(s);
                        null !== n && n.length > 0 && t.removeClass(n.join(""))
                    }, y._handlePopperPlacementChange = function(e) {
                        this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
                    }, y._fixTransition = function() {
                        var t = this.getTipElement(),
                            n = this.config.animation;
                        null === t.getAttribute("x-placement") && (e(t).removeClass(p), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
                    }, a._jQueryInterface = function(t) {
                        return this.each(function() {
                            var i = e(this).data(n),
                                r = "object" == typeof t && t;
                            if ((i || !/dispose|hide/.test(t)) && (i || (i = new a(this, r), e(this).data(n, i)), "string" == typeof t)) {
                                if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                                i[t]()
                            }
                        })
                    }, i(a, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return u
                        }
                    }, {
                        key: "NAME",
                        get: function() {
                            return t
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function() {
                            return n
                        }
                    }, {
                        key: "Event",
                        get: function() {
                            return h
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function() {
                            return o
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return l
                        }
                    }]), a
                }();
            return e.fn[t] = y._jQueryInterface, e.fn[t].Constructor = y, e.fn[t].noConflict = function() {
                return e.fn[t] = a, y._jQueryInterface
            }, y
        }(t),
        Oe = function(e) {
            var t = "popover",
                n = "bs.popover",
                o = "." + n,
                a = e.fn[t],
                s = new RegExp("(^|\\s)bs-popover\\S+", "g"),
                l = r({}, Ie.Default, {
                    placement: "right",
                    trigger: "click",
                    content: "",
                    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                }),
                c = r({}, Ie.DefaultType, {
                    content: "(string|element|function)"
                }),
                u = {
                    HIDE: "hide" + o,
                    HIDDEN: "hidden" + o,
                    SHOW: "show" + o,
                    SHOWN: "shown" + o,
                    INSERTED: "inserted" + o,
                    CLICK: "click" + o,
                    FOCUSIN: "focusin" + o,
                    FOCUSOUT: "focusout" + o,
                    MOUSEENTER: "mouseenter" + o,
                    MOUSELEAVE: "mouseleave" + o
                },
                d = function(r) {
                    function a() {
                        return r.apply(this, arguments) || this
                    }
                    var d, f;
                    f = r, (d = a).prototype = Object.create(f.prototype), d.prototype.constructor = d, d.__proto__ = f;
                    var h = a.prototype;
                    return h.isWithContent = function() {
                        return this.getTitle() || this._getContent()
                    }, h.addAttachmentClass = function(t) {
                        e(this.getTipElement()).addClass("bs-popover-" + t)
                    }, h.getTipElement = function() {
                        return this.tip = this.tip || e(this.config.template)[0], this.tip
                    }, h.setContent = function() {
                        var t = e(this.getTipElement());
                        this.setElementContent(t.find(".popover-header"), this.getTitle());
                        var n = this._getContent();
                        "function" == typeof n && (n = n.call(this.element)), this.setElementContent(t.find(".popover-body"), n), t.removeClass("fade show")
                    }, h._getContent = function() {
                        return this.element.getAttribute("data-content") || this.config.content
                    }, h._cleanTipClass = function() {
                        var t = e(this.getTipElement()),
                            n = t.attr("class").match(s);
                        null !== n && n.length > 0 && t.removeClass(n.join(""))
                    }, a._jQueryInterface = function(t) {
                        return this.each(function() {
                            var i = e(this).data(n),
                                r = "object" == typeof t ? t : null;
                            if ((i || !/destroy|hide/.test(t)) && (i || (i = new a(this, r), e(this).data(n, i)), "string" == typeof t)) {
                                if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                                i[t]()
                            }
                        })
                    }, i(a, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return l
                        }
                    }, {
                        key: "NAME",
                        get: function() {
                            return t
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function() {
                            return n
                        }
                    }, {
                        key: "Event",
                        get: function() {
                            return u
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function() {
                            return o
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return c
                        }
                    }]), a
                }(Ie);
            return e.fn[t] = d._jQueryInterface, e.fn[t].Constructor = d, e.fn[t].noConflict = function() {
                return e.fn[t] = a, d._jQueryInterface
            }, d
        }(t),
        Le = function(e) {
            var t = "scrollspy",
                n = "bs.scrollspy",
                o = "." + n,
                a = e.fn[t],
                s = {
                    offset: 10,
                    method: "auto",
                    target: ""
                },
                l = {
                    offset: "number",
                    method: "string",
                    target: "(string|element)"
                },
                c = {
                    ACTIVATE: "activate" + o,
                    SCROLL: "scroll" + o,
                    LOAD_DATA_API: "load" + o + ".data-api"
                },
                u = "active",
                d = {
                    DATA_SPY: '[data-spy="scroll"]',
                    ACTIVE: ".active",
                    NAV_LIST_GROUP: ".nav, .list-group",
                    NAV_LINKS: ".nav-link",
                    NAV_ITEMS: ".nav-item",
                    LIST_ITEMS: ".list-group-item",
                    DROPDOWN: ".dropdown",
                    DROPDOWN_ITEMS: ".dropdown-item",
                    DROPDOWN_TOGGLE: ".dropdown-toggle"
                },
                f = "position",
                h = function() {
                    function a(t, n) {
                        var i = this;
                        this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(n), this._selector = this._config.target + " " + d.NAV_LINKS + "," + this._config.target + " " + d.LIST_ITEMS + "," + this._config.target + " " + d.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on(c.SCROLL, function(e) {
                            return i._process(e)
                        }), this.refresh(), this._process()
                    }
                    var h = a.prototype;
                    return h.refresh = function() {
                        var t = this,
                            n = this._scrollElement === this._scrollElement.window ? "offset" : f,
                            i = "auto" === this._config.method ? n : this._config.method,
                            r = i === f ? this._getScrollTop() : 0;
                        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), e.makeArray(e(this._selector)).map(function(t) {
                            var n, o = ce.getSelectorFromElement(t);
                            if (o && (n = e(o)[0]), n) {
                                var a = n.getBoundingClientRect();
                                if (a.width || a.height) return [e(n)[i]().top + r, o]
                            }
                            return null
                        }).filter(function(e) {
                            return e
                        }).sort(function(e, t) {
                            return e[0] - t[0]
                        }).forEach(function(e) {
                            t._offsets.push(e[0]), t._targets.push(e[1])
                        })
                    }, h.dispose = function() {
                        e.removeData(this._element, n), e(this._scrollElement).off(o), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                    }, h._getConfig = function(n) {
                        if ("string" != typeof(n = r({}, s, n)).target) {
                            var i = e(n.target).attr("id");
                            i || (i = ce.getUID(t), e(n.target).attr("id", i)), n.target = "#" + i
                        }
                        return ce.typeCheckConfig(t, n, l), n
                    }, h._getScrollTop = function() {
                        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                    }, h._getScrollHeight = function() {
                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                    }, h._getOffsetHeight = function() {
                        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                    }, h._process = function() {
                        var e = this._getScrollTop() + this._config.offset,
                            t = this._getScrollHeight(),
                            n = this._config.offset + t - this._getOffsetHeight();
                        if (this._scrollHeight !== t && this.refresh(), e >= n) {
                            var i = this._targets[this._targets.length - 1];
                            this._activeTarget !== i && this._activate(i)
                        } else {
                            if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                            for (var r = this._offsets.length; r--;) this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                        }
                    }, h._activate = function(t) {
                        this._activeTarget = t, this._clear();
                        var n = this._selector.split(",");
                        n = n.map(function(e) {
                            return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                        });
                        var i = e(n.join(","));
                        i.hasClass("dropdown-item") ? (i.closest(d.DROPDOWN).find(d.DROPDOWN_TOGGLE).addClass(u), i.addClass(u)) : (i.addClass(u), i.parents(d.NAV_LIST_GROUP).prev(d.NAV_LINKS + ", " + d.LIST_ITEMS).addClass(u), i.parents(d.NAV_LIST_GROUP).prev(d.NAV_ITEMS).children(d.NAV_LINKS).addClass(u)), e(this._scrollElement).trigger(c.ACTIVATE, {
                            relatedTarget: t
                        })
                    }, h._clear = function() {
                        e(this._selector).filter(d.ACTIVE).removeClass(u)
                    }, a._jQueryInterface = function(t) {
                        return this.each(function() {
                            var i = e(this).data(n);
                            if (i || (i = new a(this, "object" == typeof t && t), e(this).data(n, i)), "string" == typeof t) {
                                if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                                i[t]()
                            }
                        })
                    }, i(a, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return s
                        }
                    }]), a
                }();
            return e(window).on(c.LOAD_DATA_API, function() {
                for (var t = e.makeArray(e(d.DATA_SPY)), n = t.length; n--;) {
                    var i = e(t[n]);
                    h._jQueryInterface.call(i, i.data())
                }
            }), e.fn[t] = h._jQueryInterface, e.fn[t].Constructor = h, e.fn[t].noConflict = function() {
                return e.fn[t] = a, h._jQueryInterface
            }, h
        }(t),
        He = function(e) {
            var t = ".bs.tab",
                n = e.fn.tab,
                r = {
                    HIDE: "hide" + t,
                    HIDDEN: "hidden" + t,
                    SHOW: "show" + t,
                    SHOWN: "shown" + t,
                    CLICK_DATA_API: "click.bs.tab.data-api"
                },
                o = "active",
                a = "show",
                s = ".active",
                l = "> li > .active",
                c = function() {
                    function t(e) {
                        this._element = e
                    }
                    var n = t.prototype;
                    return n.show = function() {
                        var t = this;
                        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(o) || e(this._element).hasClass("disabled"))) {
                            var n, i, a = e(this._element).closest(".nav, .list-group")[0],
                                c = ce.getSelectorFromElement(this._element);
                            if (a) {
                                var u = "UL" === a.nodeName ? l : s;
                                i = (i = e.makeArray(e(a).find(u)))[i.length - 1]
                            }
                            var d = e.Event(r.HIDE, {
                                    relatedTarget: this._element
                                }),
                                f = e.Event(r.SHOW, {
                                    relatedTarget: i
                                });
                            if (i && e(i).trigger(d), e(this._element).trigger(f), !f.isDefaultPrevented() && !d.isDefaultPrevented()) {
                                c && (n = e(c)[0]), this._activate(this._element, a);
                                var h = function() {
                                    var n = e.Event(r.HIDDEN, {
                                            relatedTarget: t._element
                                        }),
                                        o = e.Event(r.SHOWN, {
                                            relatedTarget: i
                                        });
                                    e(i).trigger(n), e(t._element).trigger(o)
                                };
                                n ? this._activate(n, n.parentNode, h) : h()
                            }
                        }
                    }, n.dispose = function() {
                        e.removeData(this._element, "bs.tab"), this._element = null
                    }, n._activate = function(t, n, i) {
                        var r = this,
                            o = ("UL" === n.nodeName ? e(n).find(l) : e(n).children(s))[0],
                            a = i && ce.supportsTransitionEnd() && o && e(o).hasClass("fade"),
                            c = function() {
                                return r._transitionComplete(t, o, i)
                            };
                        o && a ? e(o).one(ce.TRANSITION_END, c).emulateTransitionEnd(150) : c()
                    }, n._transitionComplete = function(t, n, i) {
                        if (n) {
                            e(n).removeClass(a + " " + o);
                            var r = e(n.parentNode).find("> .dropdown-menu .active")[0];
                            r && e(r).removeClass(o), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                        }
                        if (e(t).addClass(o), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), ce.reflow(t), e(t).addClass(a), t.parentNode && e(t.parentNode).hasClass("dropdown-menu")) {
                            var s = e(t).closest(".dropdown")[0];
                            s && e(s).find(".dropdown-toggle").addClass(o), t.setAttribute("aria-expanded", !0)
                        }
                        i && i()
                    }, t._jQueryInterface = function(n) {
                        return this.each(function() {
                            var i = e(this),
                                r = i.data("bs.tab");
                            if (r || (r = new t(this), i.data("bs.tab", r)), "string" == typeof n) {
                                if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                                r[n]()
                            }
                        })
                    }, i(t, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0"
                        }
                    }]), t
                }();
            return e(document).on(r.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(t) {
                t.preventDefault(), c._jQueryInterface.call(e(this), "show")
            }), e.fn.tab = c._jQueryInterface, e.fn.tab.Constructor = c, e.fn.tab.noConflict = function() {
                return e.fn.tab = n, c._jQueryInterface
            }, c
        }(t);
    ! function(e) {
        if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var t = e.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(t), e.Util = ce, e.Alert = ue, e.Button = de, e.Carousel = fe, e.Collapse = he, e.Dropdown = De, e.Modal = Ne, e.Popover = Oe, e.Scrollspy = Le, e.Tab = He, e.Tooltip = Ie, Object.defineProperty(e, "__esModule", {
        value: !0
    })
}),
function(e) {
    e.fn.extend({
        slimScroll: function(n) {
            var i = e.extend({
                width: "auto",
                height: "250px",
                size: "7px",
                color: "#000",
                position: "right",
                distance: "1px",
                start: "top",
                opacity: .4,
                alwaysVisible: !1,
                disableFadeOut: !1,
                railVisible: !1,
                railColor: "#333",
                railOpacity: .2,
                railDraggable: !0,
                railClass: "slimScrollRail",
                barClass: "slimScrollBar",
                wrapperClass: "slimScrollDiv",
                allowPageScroll: !1,
                wheelStep: 20,
                touchScrollStep: 200,
                borderRadius: "7px",
                railBorderRadius: "7px"
            }, n);
            return this.each(function() {
                function r(t) {
                    if (c) {
                        var n = 0;
                        (t = t || window.event).wheelDelta && (n = -t.wheelDelta / 120), t.detail && (n = t.detail / 3), e(t.target || t.srcTarget || t.srcElement).closest("." + i.wrapperClass).is(y.parent()) && o(n, !0), t.preventDefault && !v && t.preventDefault(), v || (t.returnValue = !1)
                    }
                }

                function o(e, t, n) {
                    v = !1;
                    var r = y.outerHeight() - _.outerHeight();
                    t && (t = parseInt(_.css("top")) + e * parseInt(i.wheelStep) / 100 * _.outerHeight(), t = Math.min(Math.max(t, 0), r), t = 0 < e ? Math.ceil(t) : Math.floor(t), _.css({
                        top: t + "px"
                    })), t = (g = parseInt(_.css("top")) / (y.outerHeight() - _.outerHeight())) * (y[0].scrollHeight - y.outerHeight()), n && (t = e, e = t / y[0].scrollHeight * y.outerHeight(), e = Math.min(Math.max(e, 0), r), _.css({
                        top: e + "px"
                    })), y.scrollTop(t), y.trigger("slimscrolling", ~~t), s(), l()
                }

                function a() {
                    p = Math.max(y.outerHeight() / y[0].scrollHeight * y.outerHeight(), 30), _.css({
                        height: p + "px"
                    });
                    var e = p == y.outerHeight() ? "none" : "block";
                    _.css({
                        display: e
                    })
                }

                function s() {
                    a(), clearTimeout(f), g == ~~g ? (v = i.allowPageScroll, m != g && y.trigger("slimscroll", 0 == ~~g ? "top" : "bottom")) : v = !1, m = g, p >= y.outerHeight() ? v = !0 : (_.stop(!0, !0).fadeIn("fast"), i.railVisible && C.stop(!0, !0).fadeIn("fast"))
                }

                function l() {
                    i.alwaysVisible || (f = setTimeout(function() {
                        i.disableFadeOut && c || u || d || (_.fadeOut("slow"), C.fadeOut("slow"))
                    }, 1e3))
                }
                var c, u, d, f, h, p, g, m, v = !1,
                    y = e(this);
                if (y.parent().hasClass(i.wrapperClass)) {
                    var b = y.scrollTop(),
                        _ = y.siblings("." + i.barClass),
                        C = y.siblings("." + i.railClass);
                    if (a(), e.isPlainObject(n)) {
                        if ("height" in n && "auto" == n.height) {
                            y.parent().css("height", "auto"), y.css("height", "auto");
                            w = y.parent().parent().height();
                            y.parent().css("height", w), y.css("height", w)
                        } else "height" in n && (w = n.height, y.parent().css("height", w), y.css("height", w));
                        if ("scrollTo" in n) b = parseInt(i.scrollTo);
                        else if ("scrollBy" in n) b += parseInt(i.scrollBy);
                        else if ("destroy" in n) return _.remove(), C.remove(), void y.unwrap();
                        o(b, !1, !0)
                    }
                } else if (!(e.isPlainObject(n) && "destroy" in n)) {
                    i.height = "auto" == i.height ? y.parent().height() : i.height, b = e("<div></div>").addClass(i.wrapperClass).css({
                        position: "relative",
                        overflow: "hidden",
                        width: i.width,
                        height: i.height
                    }), y.css({
                        overflow: "hidden",
                        width: i.width,
                        height: i.height
                    });
                    var C = e("<div></div>").addClass(i.railClass).css({
                            width: i.size,
                            height: "100%",
                            position: "absolute",
                            top: 0,
                            display: i.alwaysVisible && i.railVisible ? "block" : "none",
                            "border-radius": i.railBorderRadius,
                            background: i.railColor,
                            opacity: i.railOpacity,
                            zIndex: 90
                        }),
                        _ = e("<div></div>").addClass(i.barClass).css({
                            background: i.color,
                            width: i.size,
                            position: "absolute",
                            top: 0,
                            opacity: i.opacity,
                            display: i.alwaysVisible ? "block" : "none",
                            "border-radius": i.borderRadius,
                            BorderRadius: i.borderRadius,
                            MozBorderRadius: i.borderRadius,
                            WebkitBorderRadius: i.borderRadius,
                            zIndex: 99
                        }),
                        w = "right" == i.position ? {
                            right: i.distance
                        } : {
                            left: i.distance
                        };
                    C.css(w), _.css(w), y.wrap(b), y.parent().append(_), y.parent().append(C), i.railDraggable && _.bind("mousedown", function(n) {
                        var i = e(document);
                        return d = !0, t = parseFloat(_.css("top")), pageY = n.pageY, i.bind("mousemove.slimscroll", function(e) {
                            currTop = t + e.pageY - pageY, _.css("top", currTop), o(0, _.position().top, !1)
                        }), i.bind("mouseup.slimscroll", function(e) {
                            d = !1, l(), i.unbind(".slimscroll")
                        }), !1
                    }).bind("selectstart.slimscroll", function(e) {
                        return e.stopPropagation(), e.preventDefault(), !1
                    }), C.hover(function() {
                        s()
                    }, function() {
                        l()
                    }), _.hover(function() {
                        u = !0
                    }, function() {
                        u = !1
                    }), y.hover(function() {
                        c = !0, s(), l()
                    }, function() {
                        c = !1, l()
                    }), y.bind("touchstart", function(e, t) {
                        e.originalEvent.touches.length && (h = e.originalEvent.touches[0].pageY)
                    }), y.bind("touchmove", function(e) {
                        v || e.originalEvent.preventDefault(), e.originalEvent.touches.length && (o((h - e.originalEvent.touches[0].pageY) / i.touchScrollStep, !0), h = e.originalEvent.touches[0].pageY)
                    }), a(), "bottom" === i.start ? (_.css({
                        top: y.outerHeight() - _.outerHeight()
                    }), o(0, !0)) : "top" !== i.start && (o(e(i.start).position().top, null, !0), i.alwaysVisible || _.hide()), window.addEventListener ? (this.addEventListener("DOMMouseScroll", r, !1), this.addEventListener("mousewheel", r, !1)) : document.attachEvent("onmousewheel", r)
                }
            }), this
        }
    }), e.fn.extend({
        slimscroll: e.fn.slimScroll
    })
}(jQuery),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(e) {
    "use strict";
    var t, n = {
            space: 32,
            pageup: 33,
            pagedown: 34,
            end: 35,
            home: 36,
            up: 38,
            down: 40
        },
        i = function(t, n) {
            var i, r, o, a = n.scrollTop(),
                s = n.prop("scrollHeight"),
                l = n.prop("clientHeight"),
                c = t.originalEvent.wheelDelta || -1 * t.originalEvent.detail || -1 * t.originalEvent.deltaY,
                u = 0;
            return "wheel" === t.type ? (i = n.height() / e(window).height(), u = t.originalEvent.deltaY * i) : this.options.touch && "touchmove" === t.type && (c = t.originalEvent.changedTouches[0].clientY - this.startClientY), o = (r = c > 0 && a + u <= 0) || c < 0 && a + u >= s - l, {
                prevent: o,
                top: r,
                scrollTop: a,
                deltaY: u
            }
        },
        r = function(e, t) {
            var i, r, o = t.scrollTop(),
                a = {
                    top: !1,
                    bottom: !1
                };
            return a.top = 0 === o && (e.keyCode === n.pageup || e.keyCode === n.home || e.keyCode === n.up), a.top || (i = t.prop("scrollHeight"), r = t.prop("clientHeight"), a.bottom = i === o + r && (e.keyCode === n.space || e.keyCode === n.pagedown || e.keyCode === n.end || e.keyCode === n.down)), a
        },
        o = function(t, n) {
            this.$element = t, this.options = e.extend({}, o.DEFAULTS, this.$element.data(), n), this.enabled = !0, this.startClientY = 0, this.options.unblock && this.$element.on(o.CORE.wheelEventName + o.NAMESPACE, this.options.unblock, e.proxy(o.CORE.unblockHandler, this)), this.$element.on(o.CORE.wheelEventName + o.NAMESPACE, this.options.selector, e.proxy(o.CORE.handler, this)), this.options.touch && (this.$element.on("touchstart" + o.NAMESPACE, this.options.selector, e.proxy(o.CORE.touchHandler, this)), this.$element.on("touchmove" + o.NAMESPACE, this.options.selector, e.proxy(o.CORE.handler, this)), this.options.unblock && this.$element.on("touchmove" + o.NAMESPACE, this.options.unblock, e.proxy(o.CORE.unblockHandler, this))), this.options.keyboard && (this.$element.attr("tabindex", this.options.keyboard.tabindex || 0), this.$element.on("keydown" + o.NAMESPACE, this.options.selector, e.proxy(o.CORE.keyboardHandler, this)), this.options.unblock && this.$element.on("keydown" + o.NAMESPACE, this.options.unblock, e.proxy(o.CORE.unblockHandler, this)))
        };
    o.NAME = "ScrollLock", o.VERSION = "3.1.2", o.NAMESPACE = ".scrollLock", o.ANIMATION_NAMESPACE = o.NAMESPACE + ".effect", o.DEFAULTS = {
        strict: !1,
        strictFn: function(e) {
            return e.prop("scrollHeight") > e.prop("clientHeight")
        },
        selector: !1,
        animation: !1,
        touch: "ontouchstart" in window,
        keyboard: !1,
        unblock: !1
    }, o.CORE = {
        wheelEventName: "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll",
        animationEventName: ["webkitAnimationEnd", "mozAnimationEnd", "MSAnimationEnd", "oanimationend", "animationend"].join(o.ANIMATION_NAMESPACE + " ") + o.ANIMATION_NAMESPACE,
        unblockHandler: function(e) {
            e.__currentTarget = e.currentTarget
        },
        handler: function(t) {
            var n, r, a;
            this.enabled && !t.ctrlKey && (n = e(t.currentTarget), (!0 !== this.options.strict || this.options.strictFn(n)) && (t.stopPropagation(), r = e.proxy(i, this)(t, n), t.__currentTarget && (r.prevent &= e.proxy(i, this)(t, e(t.__currentTarget)).prevent), r.prevent && (t.preventDefault(), r.deltaY && n.scrollTop(r.scrollTop + r.deltaY), a = r.top ? "top" : "bottom", this.options.animation && setTimeout(o.CORE.animationHandler.bind(this, n, a), 0), n.trigger(e.Event(a + o.NAMESPACE)))))
        },
        touchHandler: function(e) {
            this.startClientY = e.originalEvent.touches[0].clientY
        },
        animationHandler: function(e, t) {
            var n = this.options.animation[t],
                i = this.options.animation.top + " " + this.options.animation.bottom;
            e.off(o.ANIMATION_NAMESPACE).removeClass(i).addClass(n).one(o.CORE.animationEventName, function() {
                e.removeClass(n)
            })
        },
        keyboardHandler: function(t) {
            var n, i = e(t.currentTarget),
                a = (i.scrollTop(), r(t, i));
            return t.__currentTarget && (n = r(t, e(t.__currentTarget)), a.top &= n.top, a.bottom &= n.bottom), a.top ? (i.trigger(e.Event("top" + o.NAMESPACE)), this.options.animation && setTimeout(o.CORE.animationHandler.bind(this, i, "top"), 0), !1) : a.bottom ? (i.trigger(e.Event("bottom" + o.NAMESPACE)), this.options.animation && setTimeout(o.CORE.animationHandler.bind(this, i, "bottom"), 0), !1) : void 0
        }
    }, o.prototype.toggleStrict = function() {
        this.options.strict = !this.options.strict
    }, o.prototype.enable = function() {
        this.enabled = !0
    }, o.prototype.disable = function() {
        this.enabled = !1
    }, o.prototype.destroy = function() {
        this.disable(), this.$element.off(o.NAMESPACE), this.$element = null, this.options = null
    }, t = e.fn.scrollLock, e.fn.scrollLock = function(t) {
        return this.each(function() {
            var n = e(this),
                i = "object" == typeof t && t,
                r = n.data(o.NAME);
            (r || "destroy" !== t) && (r || n.data(o.NAME, r = new o(n, i)), "string" == typeof t && r[t]())
        })
    }, e.fn.scrollLock.defaults = o.DEFAULTS, e.fn.scrollLock.noConflict = function() {
        return e.fn.scrollLock = t, this
    }
}),
function(e) {
    e.fn.appear = function(t, n) {
        var i = e.extend({
            data: void 0,
            one: !0,
            accX: 0,
            accY: 0
        }, n);
        return this.each(function() {
            var n = e(this);
            if (n.appeared = !1, t) {
                var r = e(window),
                    o = function() {
                        if (n.is(":visible")) {
                            var e = r.scrollLeft(),
                                t = r.scrollTop(),
                                o = n.offset(),
                                a = o.left,
                                s = o.top,
                                l = i.accX,
                                c = i.accY,
                                u = n.height(),
                                d = r.height(),
                                f = n.width(),
                                h = r.width();
                            s + u + c >= t && t + d + c >= s && a + f + l >= e && e + h + l >= a ? n.appeared || n.trigger("appear", i.data) : n.appeared = !1
                        } else n.appeared = !1
                    },
                    a = function() {
                        if (n.appeared = !0, i.one) {
                            r.unbind("scroll", o);
                            var a = e.inArray(o, e.fn.appear.checks);
                            a >= 0 && e.fn.appear.checks.splice(a, 1)
                        }
                        t.apply(this, arguments)
                    };
                i.one ? n.one("appear", i.data, a) : n.bind("appear", i.data, a), r.scroll(o), e.fn.appear.checks.push(o), o()
            } else n.trigger("appear", i.data)
        })
    }, e.extend(e.fn.appear, {
        checks: [],
        timeout: null,
        checkAll: function() {
            var t = e.fn.appear.checks.length;
            if (t > 0)
                for (; t--;) e.fn.appear.checks[t]()
        },
        run: function() {
            e.fn.appear.timeout && clearTimeout(e.fn.appear.timeout), e.fn.appear.timeout = setTimeout(e.fn.appear.checkAll, 20)
        }
    }), e.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function(t, n) {
        var i = e.fn[n];
        i && (e.fn[n] = function() {
            var t = i.apply(this, arguments);
            return e.fn.appear.run(), t
        })
    })
}(jQuery),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function(e) {
    var t = function(n, i) {
        this.$element = e(n), this.options = e.extend({}, t.DEFAULTS, this.dataOptions(), i), this.init()
    };
    t.DEFAULTS = {
        from: 0,
        to: 0,
        speed: 1e3,
        refreshInterval: 100,
        decimals: 0,
        formatter: function(e, t) {
            return e.toFixed(t.decimals)
        },
        onUpdate: null,
        onComplete: null
    }, t.prototype.init = function() {
        this.value = this.options.from, this.loops = Math.ceil(this.options.speed / this.options.refreshInterval), this.loopCount = 0, this.increment = (this.options.to - this.options.from) / this.loops
    }, t.prototype.dataOptions = function() {
        var e = {
                from: this.$element.data("from"),
                to: this.$element.data("to"),
                speed: this.$element.data("speed"),
                refreshInterval: this.$element.data("refresh-interval"),
                decimals: this.$element.data("decimals")
            },
            t = Object.keys(e);
        for (var n in t) {
            var i = t[n];
            void 0 === e[i] && delete e[i]
        }
        return e
    }, t.prototype.update = function() {
        this.value += this.increment, this.loopCount++, this.render(), "function" == typeof this.options.onUpdate && this.options.onUpdate.call(this.$element, this.value), this.loopCount >= this.loops && (clearInterval(this.interval), this.value = this.options.to, "function" == typeof this.options.onComplete && this.options.onComplete.call(this.$element, this.value))
    }, t.prototype.render = function() {
        var e = this.options.formatter.call(this.$element, this.value, this.options);
        this.$element.text(e)
    }, t.prototype.restart = function() {
        this.stop(), this.init(), this.start()
    }, t.prototype.start = function() {
        this.stop(), this.render(), this.interval = setInterval(this.update.bind(this), this.options.refreshInterval)
    }, t.prototype.stop = function() {
        this.interval && clearInterval(this.interval)
    }, t.prototype.toggle = function() {
        this.interval ? this.stop() : this.start()
    }, e.fn.countTo = function(n) {
        return this.each(function() {
            var i = e(this),
                r = i.data("countTo"),
                o = !r || "object" == typeof n,
                a = "object" == typeof n ? n : {},
                s = "string" == typeof n ? n : "start";
            o && (r && r.stop(), i.data("countTo", r = new t(this, a))), r[s].call(r)
        })
    }
}),
function(e) {
    var t = !1;
    if ("function" == typeof define && define.amd && (define(e), t = !0), "object" == typeof exports && (module.exports = e(), t = !0), !t) {
        var n = window.Cookies,
            i = window.Cookies = e();
        i.noConflict = function() {
            return window.Cookies = n, i
        }
    }
}(function() {
    function e() {
        for (var e = 0, t = {}; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n) t[i] = n[i]
        }
        return t
    }

    function t(n) {
        function i(t, r, o) {
            var a;
            if ("undefined" != typeof document) {
                if (arguments.length > 1) {
                    if ("number" == typeof(o = e({
                            path: "/"
                        }, i.defaults, o)).expires) {
                        var s = new Date;
                        s.setMilliseconds(s.getMilliseconds() + 864e5 * o.expires), o.expires = s
                    }
                    o.expires = o.expires ? o.expires.toUTCString() : "";
                    try {
                        a = JSON.stringify(r), /^[\{\[]/.test(a) && (r = a)
                    } catch (e) {}
                    r = n.write ? n.write(r, t) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = (t = (t = encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                    var l = "";
                    for (var c in o) o[c] && (l += "; " + c, !0 !== o[c] && (l += "=" + o[c]));
                    return document.cookie = t + "=" + r + l
                }
                t || (a = {});
                for (var u = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, f = 0; f < u.length; f++) {
                    var h = u[f].split("="),
                        p = h.slice(1).join("=");
                    this.json || '"' !== p.charAt(0) || (p = p.slice(1, -1));
                    try {
                        var g = h[0].replace(d, decodeURIComponent);
                        if (p = n.read ? n.read(p, g) : n(p, g) || p.replace(d, decodeURIComponent), this.json) try {
                            p = JSON.parse(p)
                        } catch (e) {}
                        if (t === g) {
                            a = p;
                            break
                        }
                        t || (a[g] = p)
                    } catch (e) {}
                }
                return a
            }
        }
        return i.set = i, i.get = function(e) {
            return i.call(i, e)
        }, i.getJSON = function() {
            return i.apply({
                json: !0
            }, [].slice.call(arguments))
        }, i.defaults = {}, i.remove = function(t, n) {
            i(t, "", e(n, {
                expires: -1
            }))
        }, i.withConverter = t, i
    }
    return t(function() {})
});
var Codebase = function() {
    var e, t, n, i, r, o, a, s, l, c, u, d, f, h, p = function() {
            e = jQuery("html"), t = jQuery("body"), n = jQuery("#page-container"), i = jQuery("#sidebar"), r = jQuery("#sidebar-scroll"), o = jQuery("#side-overlay"), a = jQuery("#side-overlay-scroll"), s = jQuery("#page-header"), l = jQuery("#page-header-search"), c = jQuery("#page-header-search-input"), u = jQuery("#page-header-loader"), d = jQuery("#main-container"), f = jQuery("#page-footer")
        },
        g = function(e) {
            if (h = T(), "init" === e) {
                var t;
                jQuery(window).off("resize.cb.scroll orientationchange.cb.scroll"), jQuery(window).on("resize.cb.scroll orientationchange.cb.scroll", function() {
                    clearTimeout(t), t = setTimeout(function() {
                        g()
                    }, 150)
                }).triggerHandler("resize.cb.scroll")
            } else h > 991 && n.hasClass("side-scroll") ? (jQuery(i).add(o).scrollLock("disable"), r.length && !r.parent(".slimScrollDiv").length ? (r.slimScroll({
                height: i.outerHeight(),
                color: "#cdcdcd",
                size: "4px",
                opacity: .9,
                wheelStep: 15,
                distance: "0",
                railVisible: !1,
                railOpacity: 1
            }), r.mouseover()) : (r.add(r.parent()).css("height", i.outerHeight()), r.mouseover()), a.length && !a.parent(".slimScrollDiv").length ? a.slimScroll({
                height: o.outerHeight(),
                color: "#cdcdcd",
                size: "4px",
                opacity: .9,
                wheelStep: 15,
                distance: "0",
                railVisible: !1,
                railOpacity: 1
            }) : a.add(a.parent()).css("height", o.outerHeight())) : (jQuery(i).add(o).scrollLock("enable"), r.length && r.parent(".slimScrollDiv").length && (r.slimScroll({
                destroy: !0
            }), r.attr("style", "")), a.length && a.parent(".slimScrollDiv").length && (a.slimScroll({
                destroy: !0
            }), a.attr("style", "")))
        },
        m = function() {
            var e;
            jQuery(window).off("resize.cb.main orientationchange.cb.main"), d.length && jQuery(window).on("resize.cb.main orientationchange.cb.main", function() {
                clearTimeout(e), e = setTimeout(function() {
                    var e = jQuery(window).height(),
                        t = s.outerHeight() || 0,
                        i = f.outerHeight() || 0;
                    n.hasClass("page-header-fixed") || n.hasClass("page-header-glass") ? d.css("min-height", e - i) : d.css("min-height", e - t - i), f.fadeTo(1e3, 1)
                }, 150)
            }).triggerHandler("resize.cb.main"), n.addClass("side-trans-enabled")
        },
        v = function() {
            jQuery(window).off("scroll.cb.header"), n.hasClass("page-header-glass") && n.hasClass("page-header-fixed") && jQuery(window).on("scroll.cb.header", function() {
                jQuery(this).scrollTop() > 60 ? n.addClass("page-header-scroll") : n.removeClass("page-header-scroll")
            }).trigger("scroll.cb.header")
        },
        y = function() {
            n.off("click.cb.menu"), n.on("click.cb.menu", '[data-toggle="nav-submenu"]', function(t) {
                var n = jQuery(this),
                    i = n.parent("li");
                return i.hasClass("open") ? i.removeClass("open") : (n.closest("ul").children("li").removeClass("open"), i.addClass("open")), e.hasClass("no-focus") && n.blur(), !1
            })
        },
        b = function() {
            jQuery(".form-material.floating > .form-control").each(function() {
                var e = jQuery(this),
                    t = e.parent(".form-material");
                setTimeout(function() {
                    e.val() && t.addClass("open")
                }, 150), e.off("change.cb.inputs").on("change.cb.inputs", function() {
                    e.val() ? t.addClass("open") : t.removeClass("open")
                })
            })
        },
        _ = function() {
            var e = jQuery("#css-theme"),
                t = !!n.hasClass("enable-cookies");
            if (t) {
                var i = Cookies.get("cbThemeName") || !1;
                i && C(e, i), e = jQuery("#css-theme")
            }
            jQuery('[data-toggle="theme"][data-theme="' + (e.length ? e.attr("href") : "default") + '"]').parent("li").addClass("active"), n.off("click.cb.themes"), n.on("click.cb.themes", '[data-toggle="theme"]', function() {
                var n = jQuery(this).data("theme");
                jQuery('[data-toggle="theme"]').parent("li").removeClass("active"), jQuery('[data-toggle="theme"][data-theme="' + n + '"]').parent("li").addClass("active"), C(e, n), e = jQuery("#css-theme"), t && Cookies.set("cbThemeName", n, {
                    expires: 7
                })
            })
        },
        C = function(e, t) {
            "default" === t ? e.length && e.remove() : e.length ? e.attr("href", t) : jQuery("#css-main").after('<link rel="stylesheet" id="css-theme" href="' + t + '">')
        },
        w = function(t) {
            switch (h = T(), t) {
                case "init":
                    n.off("click.cb.layout"), n.on("click.cb.layout", '[data-toggle="layout"]', function() {
                        var t = jQuery(this);
                        w(t.data("action")), e.hasClass("no-focus") && t.blur()
                    });
                    break;
                case "sidebar_pos_toggle":
                    n.toggleClass("sidebar-r");
                    break;
                case "sidebar_pos_left":
                    n.removeClass("sidebar-r");
                    break;
                case "sidebar_pos_right":
                    n.addClass("sidebar-r");
                    break;
                case "sidebar_toggle":
                    h > 991 ? n.toggleClass("sidebar-o") : n.toggleClass("sidebar-o-xs");
                    break;
                case "sidebar_open":
                    h > 991 ? n.addClass("sidebar-o") : n.addClass("sidebar-o-xs");
                    break;
                case "sidebar_close":
                    h > 991 ? n.removeClass("sidebar-o") : n.removeClass("sidebar-o-xs");
                    break;
                case "sidebar_mini_toggle":
                    h > 991 && n.toggleClass("sidebar-mini");
                    break;
                case "sidebar_mini_on":
                    h > 991 && n.addClass("sidebar-mini");
                    break;
                case "sidebar_mini_off":
                    h > 991 && n.removeClass("sidebar-mini");
                    break;
                case "sidebar_style_inverse_toggle":
                    n.toggleClass("sidebar-inverse");
                    break;
                case "sidebar_style_inverse_on":
                    n.addClass("sidebar-inverse");
                    break;
                case "sidebar_style_inverse_off":
                    n.removeClass("sidebar-inverse");
                    break;
                case "side_overlay_toggle":
                    w(n.hasClass("side-overlay-o") ? "side_overlay_close" : "side_overlay_open");
                    break;
                case "side_overlay_open":
                    jQuery(document).on("keydown.cb.sideOverlay", function(e) {
                        27 === e.which && (e.preventDefault(), w("side_overlay_close"))
                    }), n.addClass("side-overlay-o");
                    break;
                case "side_overlay_close":
                    jQuery(document).off("keydown.cb.sideOverlay"), n.removeClass("side-overlay-o");
                    break;
                case "side_overlay_hoverable_toggle":
                    n.toggleClass("side-overlay-hover");
                    break;
                case "side_overlay_hoverable_on":
                    n.addClass("side-overlay-hover");
                    break;
                case "side_overlay_hoverable_off":
                    n.removeClass("side-overlay-hover");
                    break;
                case "header_fixed_toggle":
                    n.toggleClass("page-header-fixed"), v(), m();
                    break;
                case "header_fixed_on":
                    n.addClass("page-header-fixed"), v(), m();
                    break;
                case "header_fixed_off":
                    n.removeClass("page-header-fixed"), v(), m();
                    break;
                case "header_style_modern":
                    n.removeClass("page-header-glass page-header-inverse").addClass("page-header-modern"), v(), m();
                    break;
                case "header_style_classic":
                    n.removeClass("page-header-glass page-header-modern"), v(), m();
                    break;
                case "header_style_glass":
                    n.removeClass("page-header-modern").addClass("page-header-glass"), v(), m();
                    break;
                case "header_style_inverse_toggle":
                    n.hasClass("page-header-modern") || n.toggleClass("page-header-inverse");
                    break;
                case "header_style_inverse_on":
                    n.hasClass("page-header-modern") || n.addClass("page-header-inverse");
                    break;
                case "header_style_inverse_off":
                    n.hasClass("page-header-modern") || n.removeClass("page-header-inverse");
                    break;
                case "header_search_on":
                    l.addClass("show"), c.focus(), jQuery(document).on("keydown.cb.header.search", function(e) {
                        27 === e.which && (e.preventDefault(), console.log("test"), w("header_search_off"))
                    });
                    break;
                case "header_search_off":
                    l.removeClass("show"), c.blur(), jQuery(document).off("keydown.cb.header.search");
                    break;
                case "header_loader_on":
                    u.addClass("show");
                    break;
                case "header_loader_off":
                    u.removeClass("show");
                    break;
                case "side_scroll_toggle":
                    n.toggleClass("side-scroll"), g();
                    break;
                case "side_scroll_on":
                    n.addClass("side-scroll"), g();
                    break;
                case "side_scroll_off":
                    n.removeClass("side-scroll"), g();
                    break;
                case "content_layout_toggle":
                    w(n.hasClass("main-content-boxed") ? "content_layout_narrow" : n.hasClass("main-content-narrow") ? "content_layout_full_width" : "content_layout_boxed");
                    break;
                case "content_layout_boxed":
                    n.removeClass("main-content-narrow").addClass("main-content-boxed");
                    break;
                case "content_layout_narrow":
                    n.removeClass("main-content-boxed").addClass("main-content-narrow");
                    break;
                case "content_layout_full_width":
                    n.removeClass("main-content-boxed main-content-narrow");
                default:
                    return !1
            }
        },
        E = function(e, t) {
            var i = "si si-size-fullscreen";
            if ("init" === t) jQuery('[data-toggle="block-option"][data-action="fullscreen_toggle"]').each(function() {
                var e = jQuery(this);
                e.html('<i class="' + (jQuery(e).closest(".block").hasClass("block-mode-fullscreen") ? "si si-size-actual" : i) + '"></i>')
            }), jQuery('[data-toggle="block-option"][data-action="content_toggle"]').each(function() {
                var e = jQuery(this);
                e.html('<i class="' + (e.closest(".block").hasClass("block-mode-hidden") ? "si si-arrow-down" : "si si-arrow-up") + '"></i>')
            }), n.off("click.cb.blocks"), n.on("click.cb.blocks", '[data-toggle="block-option"]', function() {
                E(jQuery(this).closest(".block"), jQuery(this).data("action"))
            });
            else {
                var r = e instanceof jQuery ? e : jQuery(e);
                if (r.length) {
                    var o = jQuery('[data-toggle="block-option"][data-action="fullscreen_toggle"]', r),
                        a = jQuery('[data-toggle="block-option"][data-action="content_toggle"]', r);
                    switch (t) {
                        case "fullscreen_toggle":
                            r.removeClass("block-mode-pinned").toggleClass("block-mode-fullscreen"), r.hasClass("block-mode-fullscreen") ? jQuery(r).scrollLock("enable") : jQuery(r).scrollLock("disable"), o.length && (r.hasClass("block-mode-fullscreen") ? jQuery("i", o).removeClass(i).addClass("si si-size-actual") : jQuery("i", o).removeClass("si si-size-actual").addClass(i));
                            break;
                        case "fullscreen_on":
                            r.removeClass("block-mode-pinned").addClass("block-mode-fullscreen"), jQuery(r).scrollLock("enable"), o.length && jQuery("i", o).removeClass(i).addClass("si si-size-actual");
                            break;
                        case "fullscreen_off":
                            r.removeClass("block-mode-fullscreen"), jQuery(r).scrollLock("disable"), o.length && jQuery("i", o).removeClass("si si-size-actual").addClass(i);
                            break;
                        case "content_toggle":
                            r.toggleClass("block-mode-hidden"), a.length && (r.hasClass("block-mode-hidden") ? jQuery("i", a).removeClass("si si-arrow-up").addClass("si si-arrow-down") : jQuery("i", a).removeClass("si si-arrow-down").addClass("si si-arrow-up"));
                            break;
                        case "content_hide":
                            r.addClass("block-mode-hidden"), a.length && jQuery("i", a).removeClass("si si-arrow-up").addClass("si si-arrow-down");
                            break;
                        case "content_show":
                            r.removeClass("block-mode-hidden"), a.length && jQuery("i", a).removeClass("si si-arrow-down").addClass("si si-arrow-up");
                            break;
                        case "state_toggle":
                            r.toggleClass("block-mode-loading"), jQuery('[data-toggle="block-option"][data-action="state_toggle"][data-action-mode="demo"]', r).length && setTimeout(function() {
                                r.removeClass("block-mode-loading")
                            }, 2e3);
                            break;
                        case "state_loading":
                            r.addClass("block-mode-loading");
                            break;
                        case "state_normal":
                            r.removeClass("block-mode-loading");
                            break;
                        case "pinned_toggle":
                            r.removeClass("block-mode-fullscreen").toggleClass("block-mode-pinned");
                            break;
                        case "pinned_on":
                            r.removeClass("block-mode-fullscreen").addClass("block-mode-pinned");
                            break;
                        case "pinned_off":
                            r.removeClass("block-mode-pinned");
                            break;
                        case "close":
                            r.hide();
                            break;
                        case "open":
                            r.show();
                            break;
                        default:
                            return !1
                    }
                }
            }
        },
        T = function() {
            return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
        },
        k = function() {
            jQuery('[data-toggle="class-toggle"]:not(.js-class-toggle-enabled)').on("click.cb.helpers.core", function() {
                var t = jQuery(this);
                t.addClass("js-class-toggle-enabled"), jQuery(t.data("target").toString()).toggleClass(t.data("class").toString()), e.hasClass("no-focus") && t.blur()
            })
        },
        x = function() {
            jQuery('[data-toggle="scroll-to"]:not(.js-scroll-to-enabled)').on("click.cb.helpers.core", function(e) {
                e.stopPropagation();
                var t = jQuery(this),
                    i = t.data("target") || t.attr("href"),
                    r = t.data("speed") || 1e3,
                    o = s.length && n.hasClass("page-header-fixed") ? s.outerHeight() : 0;
                t.addClass("js-scroll-to-enabled"), jQuery("html, body").animate({
                    scrollTop: jQuery(i).offset().top - o
                }, r)
            })
        },
        j = function() {
            var e = jQuery(".js-year-copy");
            if (e.length > 0) {
                var t = (new Date).getFullYear(),
                    n = e.html().length > 0 ? e.html() : t;
                parseInt(n) >= t ? e.html(t) : e.html(n + "-" + t.toString().substr(2, 2))
            }
        },
        S = function() {
            jQuery('[data-toggle="tooltip"]:not(.js-tooltip-enabled)').add(".js-tooltip:not(.js-tooltip-enabled)").each(function() {
                var e = jQuery(this);
                e.addClass("js-tooltip-enabled"), e.tooltip({
                    container: e.data("container") || "body",
                    animation: e.data("animation") || !1
                })
            })
        },
        A = function() {
            jQuery('[data-toggle="popover"]:not(.js-popover-enabled)').add(".js-popover:not(.js-popover-enabled)").each(function() {
                var e = jQuery(this);
                e.addClass("js-popover-enabled"), e.popover({
                    container: e.data("container") || "body",
                    animation: e.data("animation") || !1,
                    trigger: e.data("trigger") || "hover focus"
                })
            })
        },
        D = function() {
            jQuery('[data-toggle="tabs"]:not(.js-tabs-enabled)').add(".js-tabs:not(.js-tabs-enabled)").each(function() {
                var e = jQuery(this);
                e.addClass("js-tabs-enabled"), e.find("a").on("click.cb.helpers.core", function(e) {
                    e.preventDefault(), jQuery(this).tab("show")
                })
            })
        },
        N = function() {
            jQuery('[data-toggle="appear"]:not(.js-appear-enabled)').each(function() {
                h = T();
                var t = jQuery(this),
                    n = t.data("class") || "animated fadeIn",
                    i = t.data("offset") || 0,
                    r = e.hasClass("ie9") || h < 992 ? 0 : t.data("timeout") ? t.data("timeout") : 0;
                t.addClass("js-appear-enabled"), t.appear(function() {
                    setTimeout(function() {
                        t.removeClass("invisible").addClass(n)
                    }, r)
                }, {
                    accY: i
                })
            })
        },
        I = function() {
            jQuery('[data-toggle="countTo"]:not(.js-count-to-enabled)').each(function() {
                var e = jQuery(this),
                    t = e.data("after"),
                    n = e.data("before");
                e.addClass("js-count-to-enabled"), e.appear(function() {
                    e.countTo({
                        speed: e.data("speed") || 1500,
                        refreshInterval: e.data("refresh-interval") || 15,
                        onComplete: function() {
                            t ? e.html(e.html() + t) : n && e.html(n + e.html())
                        }
                    })
                })
            })
        },
        O = function() {
            jQuery('[data-toggle="slimscroll"]:not(.js-slimscroll-enabled)').each(function() {
                var e = jQuery(this);
                e.addClass("js-slimscroll-enabled"), e.slimScroll({
                    height: e.data("height") || "200px",
                    size: e.data("size") || "5px",
                    position: e.data("position") || "right",
                    color: e.data("color") || "#000",
                    opacity: e.data("opacity") || ".25",
                    distance: e.data("distance") || "0",
                    alwaysVisible: !!e.data("always-visible"),
                    railVisible: !!e.data("rail-visible"),
                    railColor: e.data("rail-color") || "#999",
                    railOpacity: e.data("rail-opacity") || .3
                })
            })
        },
        L = function(e, n) {
            var i = jQuery("#page-loader");
            return "show" === e ? i.length ? (n && i.removeClass().addClass(n), i.addClass("show")) : n ? t.prepend('<div id="page-loader" class="show ' + n + '"></div>') : t.prepend('<div id="page-loader" class="show"></div>') : "hide" === e && i.length && i.removeClass("show"), !1
        },
        H = function() {
            jQuery('[data-toggle="click-ripple"]:not(.js-click-ripple-enabled)').each(function() {
                var e = jQuery(this);
                e.addClass("js-click-ripple-enabled"), e.css({
                    overflow: "hidden",
                    position: "relative",
                    "z-index": 1
                }), e.on("click.cb.helpers.core", function(t) {
                    var n, i, r, o;
                    0 === e.children(".click-ripple").length ? e.prepend('<span class="click-ripple"></span>') : e.children(".click-ripple").removeClass("animate"), (n = e.children(".click-ripple")).height() || n.width() || (i = Math.max(e.outerWidth(), e.outerHeight()), n.css({
                        height: i,
                        width: i
                    })), r = t.pageX - e.offset().left - n.width() / 2, o = t.pageY - e.offset().top - n.height() / 2, n.css({
                        top: o + "px",
                        left: r + "px"
                    }).addClass("animate")
                })
            })
        },
        P = function() {
            var e = n.prop("class");
            n.prop("class", ""), window.print(), n.prop("class", e)
        },
        Q = function() {
            jQuery(".js-table-sections:not(.js-table-sections-enabled)").each(function() {
                var e = jQuery(this);
                e.addClass("js-table-sections-enabled"), jQuery(".js-table-sections-header > tr", e).on("click.cb.helpers", function(t) {
                    if ("checkbox" !== t.target.type && "button" !== t.target.type && "a" !== t.target.tagName.toLowerCase() && !jQuery(t.target).parent("label").length) {
                        var n = jQuery(this).parent("tbody");
                        n.hasClass("show") || jQuery("tbody", e).removeClass("show table-active"), n.toggleClass("show table-active")
                    }
                })
            })
        },
        R = function() {
            jQuery(".js-table-checkable:not(.js-table-checkable-enabled)").each(function() {
                var e = jQuery(this);
                e.addClass("js-table-checkable-enabled"), jQuery("thead input:checkbox", e).on("click.cb.helpers", function() {
                    var t = jQuery(this).prop("checked");
                    jQuery("tbody input:checkbox", e).each(function() {
                        var e = jQuery(this);
                        e.prop("checked", t), M(e, t)
                    })
                }), jQuery("tbody input:checkbox", e).on("click.cb.helpers", function() {
                    var e = jQuery(this);
                    M(e, e.prop("checked"))
                }), jQuery("tbody > tr", e).on("click.cb.helpers", function(e) {
                    if ("checkbox" !== e.target.type && "button" !== e.target.type && "a" !== e.target.tagName.toLowerCase() && !jQuery(e.target).parent("label").length) {
                        var t = jQuery("input:checkbox", this),
                            n = t.prop("checked");
                        t.prop("checked", !n), M(t, !n)
                    }
                })
            })
        },
        M = function(e, t) {
            t ? e.closest("tr").addClass("table-active") : e.closest("tr").removeClass("table-active")
        },
        F = function() {
            jQuery(".js-filter:not(.js-filter-enabled)").each(function() {
                var e = jQuery(this),
                    t = jQuery(".nav-pills", e),
                    n = jQuery("a[data-category-link]", e),
                    i = jQuery("[data-category]", e),
                    r = e.data("speed") || 200;
                if (e.addClass("js-filter-enabled"), t.length) {
                    var o, a;
                    jQuery(window).on("resize.cb.helpers", function() {
                        clearTimeout(o), o = setTimeout(function() {
                            (a = T()) < 768 ? t.addClass("flex-column") : t.removeClass("flex-column")
                        }, 150)
                    }).trigger("resize.cb.helpers")
                }
                e.data("numbers") && n.each(function() {
                    var e = jQuery(this),
                        t = e.data("category-link");
                    "all" === t ? e.append(" (" + i.length + ")") : e.append(" (" + i.filter('[data-category="' + t + '"]').length + ")")
                }), n.on("click.cb.helpers", function() {
                    var e, t = jQuery(this);
                    return t.hasClass("active") || (n.removeClass("active"), t.addClass("active"), "all" === (e = t.data("category-link")) ? i.filter(":visible").length ? i.filter(":visible").fadeOut(r, function() {
                        i.fadeIn(r)
                    }) : i.fadeIn(r) : i.filter(":visible").length ? i.filter(":visible").fadeOut(r, function() {
                        i.filter('[data-category="' + e + '"]').fadeIn(r)
                    }) : i.filter('[data-category="' + e + '"]').fadeIn(r)), !1
                })
            })
        },
        W = function() {
            jQuery(".js-gallery:not(.js-gallery-enabled)").each(function() {
                var e = jQuery(this);
                e.addClass("js-gallery-enabled"), e.magnificPopup({
                    delegate: "a.img-lightbox",
                    type: "image",
                    gallery: {
                        enabled: !0
                    }
                })
            })
        },
        q = function() {
            jQuery("#js-ckeditor-inline:not(.js-ckeditor-inline-enabled)").length && (jQuery("#js-ckeditor-inline").attr("contenteditable", "true"), CKEDITOR.inline("js-ckeditor-inline"), jQuery("#js-ckeditor-inline").addClass("js-ckeditor-inline-enabled")), jQuery("#js-ckeditor:not(.js-ckeditor-enabled)").length && (CKEDITOR.replace("js-ckeditor"), jQuery("#js-ckeditor").addClass("js-ckeditor-enabled"))
        },
        B = function() {
            jQuery(".js-simplemde:not(.js-simplemde-enabled)").each(function() {
                var e = jQuery(this);
                e.addClass("js-simplemde-enabled"), new SimpleMDE({
                    element: e[0]
                })
            })
        },
        U = function() {
            jQuery(".js-slider:not(.js-slider-enabled)").each(function() {
                var e = jQuery(this);
                e.addClass("js-slider-enabled"), e.slick({
                    arrows: e.data("arrows") || !1,
                    dots: e.data("dots") || !1,
                    slidesToShow: e.data("slides-to-show") || 1,
                    slidesToScroll: e.data("slides-to-scroll") || 1,
                    centerMode: e.data("center-mode") || !1,
                    autoplay: e.data("autoplay") || !1,
                    autoplaySpeed: e.data("autoplay-speed") || 3e3
                })
            })
        },
        V = function() {
            jQuery(".js-datepicker:not(.js-datepicker-enabled)").add(".input-daterange:not(.js-datepicker-enabled)").each(function() {
                var e = jQuery(this);
                e.addClass("js-datepicker-enabled"), e.datepicker({
                    weekStart: e.data("week-start") || 0,
                    autoclose: e.data("autoclose") || !1,
                    todayHighlight: e.data("today-highlight") || !1,
                    orientation: "bottom"
                })
            })
        },
        $ = function() {
            jQuery(".js-colorpicker:not(.js-colorpicker-enabled)").each(function() {
                var e = jQuery(this);
                e.addClass("js-colorpicker-enabled"), e.colorpicker()
            })
        },
        Y = function() {
            jQuery(".js-masked-date:not(.js-masked-enabled)").mask("99/99/9999"), jQuery(".js-masked-date-dash:not(.js-masked-enabled)").mask("99-99-9999"), jQuery(".js-masked-phone:not(.js-masked-enabled)").mask("(999) 999-9999"), jQuery(".js-masked-phone-ext:not(.js-masked-enabled)").mask("(999) 999-9999? x99999"), jQuery(".js-masked-taxid:not(.js-masked-enabled)").mask("99-9999999"), jQuery(".js-masked-ssn:not(.js-masked-enabled)").mask("999-99-9999"), jQuery(".js-masked-pkey:not(.js-masked-enabled)").mask("a*-999-a999"), jQuery(".js-masked-time:not(.js-masked-enabled)").mask("99:99"), jQuery(".js-masked-date").add(".js-masked-date-dash").add(".js-masked-phone").add(".js-masked-phone-ext").add(".js-masked-taxid").add(".js-masked-ssn").add(".js-masked-pkey").add(".js-masked-time").addClass("js-masked-enabled")
        },
        K = function() {
            jQuery(".js-tags-input:not(.js-tags-input-enabled)").each(function() {
                var e = jQuery(this);
                e.addClass("js-tags-input-enabled"), e.tagsInput({
                    height: e.data("height") || !1,
                    width: e.data("width") || "100%",
                    defaultText: e.data("default-text") || "Add tag",
                    removeWithBackspace: e.data("remove-with-backspace") || !0,
                    delimiter: [","]
                })
            })
        },
        z = function() {
            jQuery(".js-select2:not(.js-select2-enabled)").each(function() {
                var e = jQuery(this);
                e.addClass("js-select2-enabled"), e.select2()
            })
        },
        G = function() {
            hljs.isHighlighted || hljs.initHighlighting()
        },
        X = function() {
            jQuery(".js-notify:not(.js-notify-enabled)").each(function() {
                var e = jQuery(this);
                e.addClass("js-notify-enabled"), e.on("click.cb.helpers", function() {
                    var e = jQuery(this);
                    jQuery.notify({
                        icon: e.data("icon") || "",
                        message: e.data("message"),
                        url: e.data("url") || ""
                    }, {
                        element: "body",
                        type: e.data("type") || "info",
                        allow_dismiss: !0,
                        newest_on_top: !0,
                        showProgressbar: !1,
                        placement: {
                            from: e.data("from") || "top",
                            align: e.data("align") || "right"
                        },
                        offset: 20,
                        spacing: 10,
                        z_index: 1033,
                        delay: 5e3,
                        timer: 1e3,
                        template: '<div data-notify="container" class="col-11 col-sm-3 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>',
                        animate: {
                            enter: "animated fadeIn",
                            exit: "animated fadeOutDown"
                        }
                    })
                })
            })
        },
        J = function() {
            jQuery(".js-draggable-items:not(.js-draggable-items-enabled)").each(function() {
                var e = jQuery(this);
                e.addClass("js-draggable-items-enabled"), e.children(".draggable-column").sortable({
                    connectWith: ".draggable-column",
                    items: ".draggable-item",
                    dropOnEmpty: !0,
                    opacity: .75,
                    handle: ".draggable-handler",
                    placeholder: "draggable-placeholder",
                    tolerance: "pointer",
                    start: function(e, t) {
                        t.placeholder.css({
                            height: t.item.outerHeight(),
                            "margin-bottom": t.item.css("margin-bottom")
                        })
                    }
                })
            })
        },
        Z = function() {
            jQuery(".js-pie-chart:not(.js-pie-chart-enabled)").each(function() {
                var e = jQuery(this);
                e.addClass("js-pie-chart-enabled"), e.easyPieChart({
                    barColor: e.data("bar-color") || "#777777",
                    trackColor: e.data("track-color") || "#eeeeee",
                    lineWidth: e.data("line-width") || 3,
                    size: e.data("size") || "80",
                    animate: e.data("animate") || 750,
                    scaleColor: e.data("scale-color") || !1
                })
            })
        },
        ee = function() {
            jQuery(".js-maxlength:not(.js-maxlength-enabled)").each(function() {
                var e = jQuery(this);
                e.addClass("js-maxlength-enabled"), e.maxlength({
                    alwaysShow: !!e.data("always-show"),
                    threshold: e.data("threshold") || 10,
                    warningClass: e.data("warning-class") || "badge badge-warning",
                    limitReachedClass: e.data("limit-reached-class") || "badge badge-danger",
                    placement: e.data("placement") || "bottom",
                    preText: e.data("pre-text") || "",
                    separator: e.data("separator") || "/",
                    postText: e.data("post-text") || ""
                })
            })
        },
        te = function() {
            jQuery(".js-rangeslider:not(.js-rangeslider-enabled)").each(function() {
                var e = jQuery(this);
                e.addClass("js-rangeslider-enabled"), e.ionRangeSlider({
                    input_values_separator: ";"
                })
            })
        },
        ne = function() {
            jQuery(".js-summernote-air:not(.js-summernote-air-enabled)").each(function() {
                var e = jQuery(this);
                e.addClass("js-summernote-air-enabled"), e.summernote({
                    airMode: !0,
                    tooltip: !1
                })
            }), jQuery(".js-summernote:not(.js-summernote-enabled)").each(function() {
                var e = jQuery(this);
                e.addClass("js-summernote-enabled"), e.summernote({
                    height: 350,
                    minHeight: null,
                    maxHeight: null
                })
            })
        };
    return {
        init: function() {
            p(), g("init"), m(), v(), y(), b(), _(), w("init"), E(!1, "init"), k(), x(), j(), S(), A(), D(), N(), I(), O(), L("hide"), H()
        },
        layout: function(e) {
            w(e)
        },
        blocks: function(e, t) {
            E(e, t)
        },
        loader: function(e, t) {
            L(e, t)
        },
        helper: function(e) {
            switch (e) {
                case "core-fn-uiInit":
                    p();
                    break;
                case "core-fn-uiHandleScrollInit":
                    g("init");
                    break;
                case "core-fn-uiHandleScroll":
                    g();
                    break;
                case "core-fn-uiHandleMain":
                    m();
                    break;
                case "core-fn-uiHandleHeader":
                    v();
                    break;
                case "core-fn-uiHandleNav":
                    y();
                    break;
                case "core-fn-uiHandleForms":
                    b();
                    break;
                case "core-fn-uiHandleTheme":
                    _();
                    break;
                case "core-fn-uiApiLayout":
                    w("init");
                    break;
                case "core-fn-uiApiBlocks":
                    E(!1, "init");
                    break;
                case "core-tooltip":
                    S();
                    break;
                case "core-popover":
                    A();
                    break;
                case "core-tab":
                    D();
                    break;
                case "core-scrollTo":
                    x();
                    break;
                case "core-toggle-class":
                    k();
                    break;
                case "core-year-copy":
                    j();
                    break;
                case "core-appear":
                    N();
                    break;
                case "core-appear-countTo":
                    I();
                    break;
                case "core-slimscroll":
                    O();
                    break;
                case "core-ripple":
                    H();
                    break;
                case "core-page-loader":
                    L("hide");
                    break;
                case "print-page":
                    P();
                    break;
                case "table-tools":
                    Q(), R();
                    break;
                case "content-filter":
                    F();
                    break;
                case "slimscroll":
                    uiHelperSlimscroll();
                    break;
                case "magnific-popup":
                    W();
                    break;
                case "ckeditor":
                    q();
                    break;
                case "simplemde":
                    B();
                    break;
                case "slick":
                    U();
                    break;
                case "datepicker":
                    V();
                    break;
                case "colorpicker":
                    $();
                    break;
                case "tags-inputs":
                    K();
                    break;
                case "masked-inputs":
                    Y();
                    break;
                case "select2":
                    z();
                    break;
                case "highlightjs":
                    G();
                    break;
                case "notify":
                    X();
                    break;
                case "draggable-items":
                    J();
                    break;
                case "easy-pie-chart":
                    Z();
                    break;
                case "maxlength":
                    ee();
                    break;
                case "rangeslider":
                    te();
                    break;
                case "summernote":
                    ne();
                    break;
                default:
                    return !1
            }
        },
        helpers: function(e) {
            if (e instanceof Array)
                for (var t in e) Codebase.helper(e[t]);
            else Codebase.helper(e)
        }
    }
}();
jQuery(function() {
    "undefined" == typeof angular && Codebase.init()
});

/* added by tohid nateghi */
function showMessage(message, type, url = "") {

    var icon = 'fa fa-times';

    switch (type) {
        case 'info':
            icon = 'fa fa-info-circle';
            break;
        case 'success':
            icon = 'fa fa-check';
            break;
        case 'warning':
            icon = 'fa fa-warning';
    }

    $.notify({
        icon: icon,
        message: message,
        url: url
    }, {
        element: "body",
        type: type,
        allow_dismiss: !0,
        newest_on_top: !0,
        showProgressbar: !1,
        placement: {
            from: "bottom",
            align: "left"
        },
        offset: 20,
        spacing: 10,
        z_index: 1033,
        delay: 5e3,
        timer: 1e3,
        template: '<div data-notify="container" class="col-11 col-sm-3 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>',
        animate: {
            enter: "animated fadeIn",
            exit: "animated fadeOutDown"
        }
    });

}