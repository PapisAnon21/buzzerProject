/*!
 * Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2023 Fonticons, Inc.
 */
! function() {
    "use strict";
    var c = {},
        l = {};
    try {
        "undefined" != typeof window && (c = window), "undefined" != typeof document && (l = document)
    } catch (c) {}
    var s = (c.navigator || {}).userAgent,
        a = void 0 === s ? "" : s,
        z = c,
        e = l;
    z.document, e.documentElement && e.head && "function" == typeof e.addEventListener && e.createElement, ~a.indexOf("MSIE") || a.indexOf("Trident/");

    function H(l, c) {
        var s, a = Object.keys(l);
        return Object.getOwnPropertySymbols && (s = Object.getOwnPropertySymbols(l), c && (s = s.filter(function(c) {
            return Object.getOwnPropertyDescriptor(l, c).enumerable
        })), a.push.apply(a, s)), a
    }

    function t(l) {
        for (var c = 1; c < arguments.length; c++) {
            var s = null != arguments[c] ? arguments[c] : {};
            c % 2 ? H(Object(s), !0).forEach(function(c) {
                V(l, c, s[c])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s)) : H(Object(s)).forEach(function(c) {
                Object.defineProperty(l, c, Object.getOwnPropertyDescriptor(s, c))
            })
        }
        return l
    }

    function V(c, l, s) {
        return l in c ? Object.defineProperty(c, l, {
            value: s,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : c[l] = s, c
    }

    function r(c, l) {
        (null == l || l > c.length) && (l = c.length);
        for (var s = 0, a = new Array(l); s < l; s++) a[s] = c[s];
        return a
    }
    var M = "___FONT_AWESOME___",
        h = function() {
            try {
                return !0
            } catch (c) {
                return !1
            }
        }(),
        n = "classic",
        i = "sharp",
        m = [n, i];

    function o(c) {
        return new Proxy(c, {
            get: function(c, l) {
                return l in c ? c[l] : c[n]
            }
        })
    }
    o((V(v = {}, n, {
        fa: "solid",
        fas: "solid",
        "fa-solid": "solid",
        far: "regular",
        "fa-regular": "regular",
        fal: "light",
        "fa-light": "light",
        fat: "thin",
        "fa-thin": "thin",
        fad: "duotone",
        "fa-duotone": "duotone",
        fab: "brands",
        "fa-brands": "brands",
        fak: "kit",
        "fa-kit": "kit"
    }), V(v, i, {
        fa: "solid",
        fass: "solid",
        "fa-solid": "solid",
        fasr: "regular",
        "fa-regular": "regular",
        fasl: "light",
        "fa-light": "light"
    }), v));
    var f = o((V(C = {}, n, {
            solid: "fas",
            regular: "far",
            light: "fal",
            thin: "fat",
            duotone: "fad",
            brands: "fab",
            kit: "fak"
        }), V(C, i, {
            solid: "fass",
            regular: "fasr",
            light: "fasl"
        }), C)),
        e = (o((V(s = {}, n, {
            fab: "fa-brands",
            fad: "fa-duotone",
            fak: "fa-kit",
            fal: "fa-light",
            far: "fa-regular",
            fas: "fa-solid",
            fat: "fa-thin"
        }), V(s, i, {
            fass: "fa-solid",
            fasr: "fa-regular",
            fasl: "fa-light"
        }), s)), o((V(c = {}, n, {
            "fa-brands": "fab",
            "fa-duotone": "fad",
            "fa-kit": "fak",
            "fa-light": "fal",
            "fa-regular": "far",
            "fa-solid": "fas",
            "fa-thin": "fat"
        }), V(c, i, {
            "fa-solid": "fass",
            "fa-regular": "fasr",
            "fa-light": "fasl"
        }), c)), o((V(l = {}, n, {
            900: "fas",
            400: "far",
            normal: "far",
            300: "fal",
            100: "fat"
        }), V(l, i, {
            900: "fass",
            400: "fasr",
            300: "fasl"
        }), l)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
        a = e.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
        v = "duotone-group",
        C = "swap-opacity",
        s = "primary",
        c = "secondary",
        l = new Set;
    Object.keys(f[n]).map(l.add.bind(l)), Object.keys(f[i]).map(l.add.bind(l));
    [].concat(m, function(c) {
        if (Array.isArray(c)) return r(c)
    }(l = l) || function(c) {
        if ("undefined" != typeof Symbol && null != c[Symbol.iterator] || null != c["@@iterator"]) return Array.from(c)
    }(l) || function(c, l) {
        if (c) {
            if ("string" == typeof c) return r(c, l);
            var s = Object.prototype.toString.call(c).slice(8, -1);
            return "Map" === (s = "Object" === s && c.constructor ? c.constructor.name : s) || "Set" === s ? Array.from(c) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? r(c, l) : void 0
        }
    }(l) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }(), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", v, C, s, c]).concat(e.map(function(c) {
        return "".concat(c, "x")
    })).concat(a.map(function(c) {
        return "w-".concat(c)
    }));
    z = z || {};
    z[M] || (z[M] = {}), z[M].styles || (z[M].styles = {}), z[M].hooks || (z[M].hooks = {}), z[M].shims || (z[M].shims = []);
    var L = z[M];

    function u(a) {
        return Object.keys(a).reduce(function(c, l) {
            var s = a[l];
            return !!s.icon ? c[s.iconName] = s.icon : c[l] = s, c
        }, {})
    }

    function d(c, l, s) {
        var a = (2 < arguments.length && void 0 !== s ? s : {}).skipHooks,
            s = void 0 !== a && a,
            a = u(l);
        "function" != typeof L.hooks.addPack || s ? L.styles[c] = t(t({}, L.styles[c] || {}), a) : L.hooks.addPack(c, u(l)), "fas" === c && d("fa", l)
    }
    var p = {
        monero: [496, 512, [], "f3d0", "M352 384h108.4C417 455.9 338.1 504 248 504S79 455.9 35.6 384H144V256.2L248 361l104-105v128zM88 336V128l159.4 159.4L408 128v208h74.8c8.5-25.1 13.2-52 13.2-80C496 119 385 8 248 8S0 119 0 256c0 28 4.6 54.9 13.2 80H88z"],
        zhihu: [640, 512, [], "f63f", "M170.54 148.13v217.54l23.43.01 7.71 26.37 42.01-26.37h49.53V148.13H170.54zm97.75 193.93h-27.94l-27.9 17.51-5.08-17.47-11.9-.04V171.75h72.82v170.31zm-118.46-94.39H97.5c1.74-27.1 2.2-51.59 2.2-73.46h51.16s1.97-22.56-8.58-22.31h-88.5c3.49-13.12 7.87-26.66 13.12-40.67 0 0-24.07 0-32.27 21.57-3.39 8.9-13.21 43.14-30.7 78.12 5.89-.64 25.37-1.18 36.84-22.21 2.11-5.89 2.51-6.66 5.14-14.53h28.87c0 10.5-1.2 66.88-1.68 73.44H20.83c-11.74 0-15.56 23.62-15.56 23.62h65.58C66.45 321.1 42.83 363.12 0 396.34c20.49 5.85 40.91-.93 51-9.9 0 0 22.98-20.9 35.59-69.25l53.96 64.94s7.91-26.89-1.24-39.99c-7.58-8.92-28.06-33.06-36.79-41.81L87.9 311.95c4.36-13.98 6.99-27.55 7.87-40.67h61.65s-.09-23.62-7.59-23.62v.01zm412.02-1.6c20.83-25.64 44.98-58.57 44.98-58.57s-18.65-14.8-27.38-4.06c-6 8.15-36.83 48.2-36.83 48.2l19.23 14.43zm-150.09-59.09c-9.01-8.25-25.91 2.13-25.91 2.13s39.52 55.04 41.12 57.45l19.46-13.73s-25.67-37.61-34.66-45.86h-.01zM640 258.35c-19.78 0-130.91.93-131.06.93v-101c4.81 0 12.42-.4 22.85-1.2 40.88-2.41 70.13-4 87.77-4.81 0 0 12.22-27.19-.59-33.44-3.07-1.18-23.17 4.58-23.17 4.58s-165.22 16.49-232.36 18.05c1.6 8.82 7.62 17.08 15.78 19.55 13.31 3.48 22.69 1.7 49.15.89 24.83-1.6 43.68-2.43 56.51-2.43v99.81H351.41s2.82 22.31 25.51 22.85h107.94v70.92c0 13.97-11.19 21.99-24.48 21.12-14.08.11-26.08-1.15-41.69-1.81 1.99 3.97 6.33 14.39 19.31 21.84 9.88 4.81 16.17 6.57 26.02 6.57 29.56 0 45.67-17.28 44.89-45.31v-73.32h122.36c9.68 0 8.7-23.78 8.7-23.78l.03-.01z"],
        korvue: [446, 512, [], "f42f", "M386.5 34h-327C26.8 34 0 60.8 0 93.5v327.1C0 453.2 26.8 480 59.5 480h327.1c33 0 59.5-26.8 59.5-59.5v-327C446 60.8 419.2 34 386.5 34zM87.1 120.8h96v116l61.8-116h110.9l-81.2 132H87.1v-132zm161.8 272.1l-65.7-113.6v113.6h-96V262.1h191.5l88.6 130.8H248.9z"],
        pix: [512, 512, [], "e43a", "M242.4 292.5C247.8 287.1 257.1 287.1 262.5 292.5L339.5 369.5C353.7 383.7 372.6 391.5 392.6 391.5H407.7L310.6 488.6C280.3 518.1 231.1 518.1 200.8 488.6L103.3 391.2H112.6C132.6 391.2 151.5 383.4 165.7 369.2L242.4 292.5zM262.5 218.9C256.1 224.4 247.9 224.5 242.4 218.9L165.7 142.2C151.5 127.1 132.6 120.2 112.6 120.2H103.3L200.7 22.76C231.1-7.586 280.3-7.586 310.6 22.76L407.8 119.9H392.6C372.6 119.9 353.7 127.7 339.5 141.9L262.5 218.9zM112.6 142.7C126.4 142.7 139.1 148.3 149.7 158.1L226.4 234.8C233.6 241.1 243 245.6 252.5 245.6C261.9 245.6 271.3 241.1 278.5 234.8L355.5 157.8C365.3 148.1 378.8 142.5 392.6 142.5H430.3L488.6 200.8C518.9 231.1 518.9 280.3 488.6 310.6L430.3 368.9H392.6C378.8 368.9 365.3 363.3 355.5 353.5L278.5 276.5C264.6 262.6 240.3 262.6 226.4 276.6L149.7 353.2C139.1 363 126.4 368.6 112.6 368.6H80.78L22.76 310.6C-7.586 280.3-7.586 231.1 22.76 200.8L80.78 142.7H112.6z"],
        "steam-symbol": [448, 512, [], "f3f6", "M395.5 177.5c0 33.8-27.5 61-61 61-33.8 0-61-27.3-61-61s27.3-61 61-61c33.5 0 61 27.2 61 61zm52.5.2c0 63-51 113.8-113.7 113.8L225 371.3c-4 43-40.5 76.8-84.5 76.8-40.5 0-74.7-28.8-83-67L0 358V250.7L97.2 290c15.1-9.2 32.2-13.3 52-11.5l71-101.7c.5-62.3 51.5-112.8 114-112.8C397 64 448 115 448 177.7zM203 363c0-34.7-27.8-62.5-62.5-62.5-4.5 0-9 .5-13.5 1.5l26 10.5c25.5 10.2 38 39 27.7 64.5-10.2 25.5-39.2 38-64.7 27.5-10.2-4-20.5-8.3-30.7-12.2 10.5 19.7 31.2 33.2 55.2 33.2 34.7 0 62.5-27.8 62.5-62.5zm207.5-185.3c0-42-34.3-76.2-76.2-76.2-42.3 0-76.5 34.2-76.5 76.2 0 42.2 34.3 76.2 76.5 76.2 41.9.1 76.2-33.9 76.2-76.2z"]
    };
    ! function(c) {
        try {
            for (var l = arguments.length, s = new Array(1 < l ? l - 1 : 0), a = 1; a < l; a++) s[a - 1] = arguments[a];
            c.apply(void 0, s)
        } catch (c) {
            if (!h) throw c
        }
    }(function() {
        d("fab", p), d("fa-brands", p)
    })
}(),
function() {
    "use strict";
    var c = {},
        l = {};
    try {
        "undefined" != typeof window && (c = window), "undefined" != typeof document && (l = document)
    } catch (c) {}
    var s = (c.navigator || {}).userAgent,
        a = void 0 === s ? "" : s,
        z = c,
        e = l;
    z.document, e.documentElement && e.head && "function" == typeof e.addEventListener && e.createElement, ~a.indexOf("MSIE") || a.indexOf("Trident/");

    function H(l, c) {
        var s, a = Object.keys(l);
        return Object.getOwnPropertySymbols && (s = Object.getOwnPropertySymbols(l), c && (s = s.filter(function(c) {
            return Object.getOwnPropertyDescriptor(l, c).enumerable
        })), a.push.apply(a, s)), a
    }

    function t(l) {
        for (var c = 1; c < arguments.length; c++) {
            var s = null != arguments[c] ? arguments[c] : {};
            c % 2 ? H(Object(s), !0).forEach(function(c) {
                V(l, c, s[c])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s)) : H(Object(s)).forEach(function(c) {
                Object.defineProperty(l, c, Object.getOwnPropertyDescriptor(s, c))
            })
        }
        return l
    }

    function V(c, l, s) {
        return l in c ? Object.defineProperty(c, l, {
            value: s,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : c[l] = s, c
    }

    function r(c, l) {
        (null == l || l > c.length) && (l = c.length);
        for (var s = 0, a = new Array(l); s < l; s++) a[s] = c[s];
        return a
    }
    var M = "___FONT_AWESOME___",
        h = function() {
            try {
                return !0
            } catch (c) {
                return !1
            }
        }(),
        n = "classic",
        i = "sharp",
        m = [n, i];

    function o(c) {
        return new Proxy(c, {
            get: function(c, l) {
                return l in c ? c[l] : c[n]
            }
        })
    }
    o((V(v = {}, n, {
        fa: "solid",
        fas: "solid",
        "fa-solid": "solid",
        far: "regular",
        "fa-regular": "regular",
        fal: "light",
        "fa-light": "light",
        fat: "thin",
        "fa-thin": "thin",
        fad: "duotone",
        "fa-duotone": "duotone",
        fab: "brands",
        "fa-brands": "brands",
        fak: "kit",
        "fa-kit": "kit"
    }), V(v, i, {
        fa: "solid",
        fass: "solid",
        "fa-solid": "solid",
        fasr: "regular",
        "fa-regular": "regular",
        fasl: "light",
        "fa-light": "light"
    }), v));
    var f = o((V(C = {}, n, {
            solid: "fas",
            regular: "far",
            light: "fal",
            thin: "fat",
            duotone: "fad",
            brands: "fab",
            kit: "fak"
        }), V(C, i, {
            solid: "fass",
            regular: "fasr",
            light: "fasl"
        }), C)),
        e = (o((V(s = {}, n, {
            fab: "fa-brands",
            fad: "fa-duotone",
            fak: "fa-kit",
            fal: "fa-light",
            far: "fa-regular",
            fas: "fa-solid",
            fat: "fa-thin"
        }), V(s, i, {
            fass: "fa-solid",
            fasr: "fa-regular",
            fasl: "fa-light"
        }), s)), o((V(c = {}, n, {
            "fa-brands": "fab",
            "fa-duotone": "fad",
            "fa-kit": "fak",
            "fa-light": "fal",
            "fa-regular": "far",
            "fa-solid": "fas",
            "fa-thin": "fat"
        }), V(c, i, {
            "fa-solid": "fass",
            "fa-regular": "fasr",
            "fa-light": "fasl"
        }), c)), o((V(l = {}, n, {
            900: "fas",
            400: "far",
            normal: "far",
            300: "fal",
            100: "fat"
        }), V(l, i, {
            900: "fass",
            400: "fasr",
            300: "fasl"
        }), l)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
        a = e.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
        v = "duotone-group",
        C = "swap-opacity",
        s = "primary",
        c = "secondary",
        l = new Set;
    Object.keys(f[n]).map(l.add.bind(l)), Object.keys(f[i]).map(l.add.bind(l));
    [].concat(m, function(c) {
        if (Array.isArray(c)) return r(c)
    }(l = l) || function(c) {
        if ("undefined" != typeof Symbol && null != c[Symbol.iterator] || null != c["@@iterator"]) return Array.from(c)
    }(l) || function(c, l) {
        if (c) {
            if ("string" == typeof c) return r(c, l);
            var s = Object.prototype.toString.call(c).slice(8, -1);
            return "Map" === (s = "Object" === s && c.constructor ? c.constructor.name : s) || "Set" === s ? Array.from(c) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? r(c, l) : void 0
        }
    }(l) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }(), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", v, C, s, c]).concat(e.map(function(c) {
        return "".concat(c, "x")
    })).concat(a.map(function(c) {
        return "w-".concat(c)
    }));
    z = z || {};
    z[M] || (z[M] = {}), z[M].styles || (z[M].styles = {}), z[M].hooks || (z[M].hooks = {}), z[M].shims || (z[M].shims = []);
    var L = z[M];

    function u(a) {
        return Object.keys(a).reduce(function(c, l) {
            var s = a[l];
            return !!s.icon ? c[s.iconName] = s.icon : c[l] = s, c
        }, {})
    }

    function d(c, l, s) {
        var a = (2 < arguments.length && void 0 !== s ? s : {}).skipHooks,
            s = void 0 !== a && a,
            a = u(l);
        "function" != typeof L.hooks.addPack || s ? L.styles[c] = t(t({}, L.styles[c] || {}), a) : L.hooks.addPack(c, u(l)), "fas" === c && d("fa", l)
    }
    var p = {
        "trash-can": [448, 512, [61460, "trash-alt"], "f2ed", "M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"],
        message: [512, 512, ["comment-alt"], "f27a", "M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z"],
        "file-lines": [384, 512, [128441, 128462, 61686, "file-alt", "file-text"], "f15c", "M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z"],
        "calendar-days": [448, 512, ["calendar-alt"], "f073", "M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z"],
        "hand-point-right": [512, 512, [], "f0a4", "M448 128l-177.6 0c1 5.2 1.6 10.5 1.6 16l0 16 32 0 144 0c8.8 0 16-7.2 16-16s-7.2-16-16-16zM224 144c0-17.7-14.3-32-32-32c0 0 0 0 0 0l-24 0c-66.3 0-120 53.7-120 120l0 48c0 52.5 33.7 97.1 80.7 113.4c-.5-3.1-.7-6.2-.7-9.4c0-20 9.2-37.9 23.6-49.7c-4.9-9-7.6-19.4-7.6-30.3c0-15.1 5.3-29 14-40c-8.8-11-14-24.9-14-40l0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40c0 8.8 7.2 16 16 16s16-7.2 16-16l0-40 0-40zM192 64s0 0 0 0c18 0 34.6 6 48 16l208 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-82 0c1.3 5.1 2 10.5 2 16c0 25.3-14.7 47.2-36 57.6c2.6 7 4 14.5 4 22.4c0 20-9.2 37.9-23.6 49.7c4.9 9 7.6 19.4 7.6 30.3c0 35.3-28.7 64-64 64l-64 0-24 0C75.2 448 0 372.8 0 280l0-48C0 139.2 75.2 64 168 64l24 0zm64 336c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0zm16-176c0 5.5-.7 10.9-2 16l2 0 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0 16zm-24 64l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-24 0z"],
        "face-smile-beam": [512, 512, [128522, "smile-beam"], "f5b8", "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zm40-89.3l0 0 0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0zm160 0l0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0 0 0z"],
        "face-grin-stars": [512, 512, [129321, "grin-stars"], "f587", "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM183.2 132.6c-1.3-2.8-4.1-4.6-7.2-4.6s-5.9 1.8-7.2 4.6l-16.6 34.7-38.1 5c-3.1 .4-5.6 2.5-6.6 5.5s-.1 6.2 2.1 8.3l27.9 26.5-7 37.8c-.6 3 .7 6.1 3.2 7.9s5.8 2 8.5 .6L176 240.5l33.8 18.3c2.7 1.5 6 1.3 8.5-.6s3.7-4.9 3.2-7.9l-7-37.8L242.4 186c2.2-2.1 3.1-5.3 2.1-8.3s-3.5-5.1-6.6-5.5l-38.1-5-16.6-34.7zm160 0c-1.3-2.8-4.1-4.6-7.2-4.6s-5.9 1.8-7.2 4.6l-16.6 34.7-38.1 5c-3.1 .4-5.6 2.5-6.6 5.5s-.1 6.2 2.1 8.3l27.9 26.5-7 37.8c-.6 3 .7 6.1 3.2 7.9s5.8 2 8.5 .6L336 240.5l33.8 18.3c2.7 1.5 6 1.3 8.5-.6s3.7-4.9 3.2-7.9l-7-37.8L402.4 186c2.2-2.1 3.1-5.3 2.1-8.3s-3.5-5.1-6.6-5.5l-38.1-5-16.6-34.7zm6.3 175.8c-28.9 6.8-60.5 10.5-93.6 10.5s-64.7-3.7-93.6-10.5c-18.7-4.4-35.9 12-25.5 28.1c24.6 38.1 68.7 63.5 119.1 63.5s94.5-25.4 119.1-63.5c10.4-16.1-6.8-32.5-25.5-28.1z"],
        "address-book": [512, 512, [62138, "contact-book"], "f2b9", "M384 48c8.8 0 16 7.2 16 16V448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H384zM96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM240 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H208zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z"],
        folder: [512, 512, [128193, 128447, 61716, "folder-blank"], "f07b", "M0 96C0 60.7 28.7 32 64 32H196.1c19.1 0 37.4 7.6 50.9 21.1L289.9 96H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16H286.6c-10.6 0-20.8-4.2-28.3-11.7L213.1 87c-4.5-4.5-10.6-7-17-7H64z"],
        user: [448, 512, [128100, 62144], "f007", "M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"],
        "square-caret-left": [448, 512, ["caret-square-left"], "f191", "M48 416c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80c-8.8 0-16 7.2-16 16l0 320zm16 64c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480zm64-224c0-6.7 2.8-13 7.7-17.6l112-104c7-6.5 17.2-8.2 25.9-4.4s14.4 12.5 14.4 22l0 208c0 9.5-5.7 18.2-14.4 22s-18.9 2.1-25.9-4.4l-112-104c-4.9-4.5-7.7-10.9-7.7-17.6z"],
        users: [640, 512, [], "f0c0", "M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"],
        bell: [448, 512, [128276, 61602], "f0f3", "M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"],
        star: [576, 512, [11088, 61446], "f005", "M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"],
        "chess-knight": [448, 512, [9822], "f441", "M226.6 48H117.3l17.1 12.8c6 4.5 9.6 11.6 9.6 19.2s-3.6 14.7-9.6 19.2l-6.5 4.9c-10 7.5-16 19.3-16 31.9l-.3 91c0 10.2 4.9 19.9 13.2 25.8l1.9 1.3c9.9 7.1 23.3 7 33.2-.1l49.9-36.3c10.7-7.8 25.7-5.4 33.5 5.3s5.4 25.7-5.3 33.5l-49.9 36.3-53.8 39.1c-7.3 5.3-13 12.2-16.9 20.1H66.8c5.3-22.1 17.8-41.9 35.9-56.3c-1.3-.8-2.6-1.7-3.8-2.6L97 291.8c-21-15-33.4-39.2-33.3-65l.3-91c.1-19.8 6.7-38.7 18.6-53.9l-.4-.3C70.7 73 64 59.6 64 45.3C64 20.3 84.3 0 109.3 0H226.6C331.2 0 416 84.8 416 189.4c0 11.1-1 22.2-2.9 33.2L390.1 352H341.3l24.5-137.8c1.5-8.2 2.2-16.5 2.2-24.8C368 111.3 304.7 48 226.6 48zM85.2 432L68.7 464H379.3l-16.6-32H85.2zm315.7-30.7l26.5 51.2c3 5.8 4.6 12.2 4.6 18.7c0 22.5-18.2 40.8-40.8 40.8H56.8C34.2 512 16 493.8 16 471.2c0-6.5 1.6-12.9 4.6-18.7l26.5-51.2C52.5 390.7 63.5 384 75.5 384h297c12 0 22.9 6.7 28.4 17.3zM172 128a20 20 0 1 1 0 40 20 20 0 1 1 0-40z"],
        "face-laugh-squint": [512, 512, ["laugh-squint"], "f59b", "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm130.7 57.9c-4.2-13.6 7.1-25.9 21.3-25.9H364.5c14.2 0 25.5 12.4 21.3 25.9C369 368.4 318.2 408 258.2 408s-110.8-39.6-127.5-94.1zm2.8-183.3l89.9 47.9c10.7 5.7 10.7 21.1 0 26.8l-89.9 47.9c-7.9 4.2-17.5-1.5-17.5-10.5c0-2.8 1-5.5 2.8-7.6l36-43.2-36-43.2c-1.8-2.1-2.8-4.8-2.8-7.6c0-9 9.6-14.7 17.5-10.5zM396 141.1c0 2.8-1 5.5-2.8 7.6l-36 43.2 36 43.2c1.8 2.1 2.8 4.8 2.8 7.6c0 9-9.6 14.7-17.5 10.5l-89.9-47.9c-10.7-5.7-10.7-21.1 0-26.8l89.9-47.9c7.9-4.2 17.5 1.5 17.5 10.5z"],
        "face-laugh": [512, 512, ["laugh"], "f599", "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm130.7 57.9c-4.2-13.6 7.1-25.9 21.3-25.9H364.5c14.2 0 25.5 12.4 21.3 25.9C369 368.4 318.2 408 258.2 408s-110.8-39.6-127.5-94.1zM144.4 192a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"],
        "folder-open": [576, 512, [128194, 128449, 61717], "f07c", "M384 480h48c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224H144c-11.4 0-21.9 6-27.6 15.9L48 357.1V96c0-8.8 7.2-16 16-16H181.5c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8H416c8.8 0 16 7.2 16 16v32h48V160c0-35.3-28.7-64-64-64H298.5c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H87.7 384z"],
        "hand-point-left": [512, 512, [], "f0a5", "M64 128l177.6 0c-1 5.2-1.6 10.5-1.6 16l0 16-32 0L64 160c-8.8 0-16-7.2-16-16s7.2-16 16-16zm224 16c0-17.7 14.3-32 32-32c0 0 0 0 0 0l24 0c66.3 0 120 53.7 120 120l0 48c0 52.5-33.7 97.1-80.7 113.4c.5-3.1 .7-6.2 .7-9.4c0-20-9.2-37.9-23.6-49.7c4.9-9 7.6-19.4 7.6-30.3c0-15.1-5.3-29-14-40c8.8-11 14-24.9 14-40l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-40 0-40zm32-80s0 0 0 0c-18 0-34.6 6-48 16L64 80C28.7 80 0 108.7 0 144s28.7 64 64 64l82 0c-1.3 5.1-2 10.5-2 16c0 25.3 14.7 47.2 36 57.6c-2.6 7-4 14.5-4 22.4c0 20 9.2 37.9 23.6 49.7c-4.9 9-7.6 19.4-7.6 30.3c0 35.3 28.7 64 64 64l64 0 24 0c92.8 0 168-75.2 168-168l0-48c0-92.8-75.2-168-168-168l-24 0zM256 400c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0 16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0zM240 224c0 5.5 .7 10.9 2 16l-2 0-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l32 0 0 16zm24 64l40 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0-16 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l24 0z"]
    };
    ! function(c) {
        try {
            for (var l = arguments.length, s = new Array(1 < l ? l - 1 : 0), a = 1; a < l; a++) s[a - 1] = arguments[a];
            c.apply(void 0, s)
        } catch (c) {
            if (!h) throw c
        }
    }(function() {
        d("far", p), d("fa-regular", p)
    })
}(),
function() {
    "use strict";
    var c = {},
        l = {};
    try {
        "undefined" != typeof window && (c = window), "undefined" != typeof document && (l = document)
    } catch (c) {}
    var s = (c.navigator || {}).userAgent,
        a = void 0 === s ? "" : s,
        z = c,
        e = l;
    z.document, e.documentElement && e.head && "function" == typeof e.addEventListener && e.createElement, ~a.indexOf("MSIE") || a.indexOf("Trident/");

    function H(l, c) {
        var s, a = Object.keys(l);
        return Object.getOwnPropertySymbols && (s = Object.getOwnPropertySymbols(l), c && (s = s.filter(function(c) {
            return Object.getOwnPropertyDescriptor(l, c).enumerable
        })), a.push.apply(a, s)), a
    }

    function t(l) {
        for (var c = 1; c < arguments.length; c++) {
            var s = null != arguments[c] ? arguments[c] : {};
            c % 2 ? H(Object(s), !0).forEach(function(c) {
                V(l, c, s[c])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s)) : H(Object(s)).forEach(function(c) {
                Object.defineProperty(l, c, Object.getOwnPropertyDescriptor(s, c))
            })
        }
        return l
    }

    function V(c, l, s) {
        return l in c ? Object.defineProperty(c, l, {
            value: s,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : c[l] = s, c
    }

    function r(c, l) {
        (null == l || l > c.length) && (l = c.length);
        for (var s = 0, a = new Array(l); s < l; s++) a[s] = c[s];
        return a
    }
    var M = "___FONT_AWESOME___",
        h = function() {
            try {
                return !0
            } catch (c) {
                return !1
            }
        }(),
        n = "classic",
        i = "sharp",
        m = [n, i];

    function o(c) {
        return new Proxy(c, {
            get: function(c, l) {
                return l in c ? c[l] : c[n]
            }
        })
    }
    o((V(v = {}, n, {
        fa: "solid",
        fas: "solid",
        "fa-solid": "solid",
        far: "regular",
        "fa-regular": "regular",
        fal: "light",
        "fa-light": "light",
        fat: "thin",
        "fa-thin": "thin",
        fad: "duotone",
        "fa-duotone": "duotone",
        fab: "brands",
        "fa-brands": "brands",
        fak: "kit",
        "fa-kit": "kit"
    }), V(v, i, {
        fa: "solid",
        fass: "solid",
        "fa-solid": "solid",
        fasr: "regular",
        "fa-regular": "regular",
        fasl: "light",
        "fa-light": "light"
    }), v));
    var f = o((V(C = {}, n, {
            solid: "fas",
            regular: "far",
            light: "fal",
            thin: "fat",
            duotone: "fad",
            brands: "fab",
            kit: "fak"
        }), V(C, i, {
            solid: "fass",
            regular: "fasr",
            light: "fasl"
        }), C)),
        e = (o((V(s = {}, n, {
            fab: "fa-brands",
            fad: "fa-duotone",
            fak: "fa-kit",
            fal: "fa-light",
            far: "fa-regular",
            fas: "fa-solid",
            fat: "fa-thin"
        }), V(s, i, {
            fass: "fa-solid",
            fasr: "fa-regular",
            fasl: "fa-light"
        }), s)), o((V(c = {}, n, {
            "fa-brands": "fab",
            "fa-duotone": "fad",
            "fa-kit": "fak",
            "fa-light": "fal",
            "fa-regular": "far",
            "fa-solid": "fas",
            "fa-thin": "fat"
        }), V(c, i, {
            "fa-solid": "fass",
            "fa-regular": "fasr",
            "fa-light": "fasl"
        }), c)), o((V(l = {}, n, {
            900: "fas",
            400: "far",
            normal: "far",
            300: "fal",
            100: "fat"
        }), V(l, i, {
            900: "fass",
            400: "fasr",
            300: "fasl"
        }), l)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
        a = e.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
        v = "duotone-group",
        C = "swap-opacity",
        s = "primary",
        c = "secondary",
        l = new Set;
    Object.keys(f[n]).map(l.add.bind(l)), Object.keys(f[i]).map(l.add.bind(l));
    [].concat(m, function(c) {
        if (Array.isArray(c)) return r(c)
    }(l = l) || function(c) {
        if ("undefined" != typeof Symbol && null != c[Symbol.iterator] || null != c["@@iterator"]) return Array.from(c)
    }(l) || function(c, l) {
        if (c) {
            if ("string" == typeof c) return r(c, l);
            var s = Object.prototype.toString.call(c).slice(8, -1);
            return "Map" === (s = "Object" === s && c.constructor ? c.constructor.name : s) || "Set" === s ? Array.from(c) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? r(c, l) : void 0
        }
    }(l) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }(), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", v, C, s, c]).concat(e.map(function(c) {
        return "".concat(c, "x")
    })).concat(a.map(function(c) {
        return "w-".concat(c)
    }));
    z = z || {};
    z[M] || (z[M] = {}), z[M].styles || (z[M].styles = {}), z[M].hooks || (z[M].hooks = {}), z[M].shims || (z[M].shims = []);
    var L = z[M];

    function u(a) {
        return Object.keys(a).reduce(function(c, l) {
            var s = a[l];
            return !!s.icon ? c[s.iconName] = s.icon : c[l] = s, c
        }, {})
    }

    function d(c, l, s) {
        var a = (2 < arguments.length && void 0 !== s ? s : {}).skipHooks,
            s = void 0 !== a && a,
            a = u(l);
        "function" != typeof L.hooks.addPack || s ? L.styles[c] = t(t({}, L.styles[c] || {}), a) : L.hooks.addPack(c, u(l)), "fas" === c && d("fa", l)
    }
    var p = {
        0: [320, 512, [], "30", "M0 192C0 103.6 71.6 32 160 32s160 71.6 160 160V320c0 88.4-71.6 160-160 160S0 408.4 0 320V192zM160 96c-53 0-96 43-96 96V320c0 53 43 96 96 96s96-43 96-96V192c0-53-43-96-96-96z"],
        1: [256, 512, [], "31", "M160 64c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.8 1.6l-96 64C-.5 111.2-4.4 131 5.4 145.8s29.7 18.7 44.4 8.9L96 123.8V416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160V64z"],
        2: [320, 512, [], "32", "M142.9 96c-21.5 0-42.2 8.5-57.4 23.8L54.6 150.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L40.2 74.5C67.5 47.3 104.4 32 142.9 32C223 32 288 97 288 177.1c0 38.5-15.3 75.4-42.5 102.6L109.3 416H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L200.2 234.5c15.2-15.2 23.8-35.9 23.8-57.4c0-44.8-36.3-81.1-81.1-81.1z"],
        3: [320, 512, [], "33", "M0 64C0 46.3 14.3 32 32 32H272c13.2 0 25 8.1 29.8 20.4s1.5 26.3-8.2 35.2L162.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H105.4C63 480 24.2 456 5.3 418.1l-1.9-3.8c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l1.9 3.8c8.1 16.3 24.8 26.5 42.9 26.5H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H80c-13.2 0-25-8.1-29.8-20.4s-1.5-26.3 8.2-35.2L189.7 96H32C14.3 96 0 81.7 0 64z"],
        4: [384, 512, [], "34", "M189 77.6c7.5-16 .7-35.1-15.3-42.6s-35.1-.7-42.6 15.3L3 322.4c-4.7 9.9-3.9 21.5 1.9 30.8S21 368 32 368H256v80c0 17.7 14.3 32 32 32s32-14.3 32-32V368h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H320V160c0-17.7-14.3-32-32-32s-32 14.3-32 32V304H82.4L189 77.6z"],
        5: [320, 512, [], "35", "M32.5 58.3C35.3 43.1 48.5 32 64 32H256c17.7 0 32 14.3 32 32s-14.3 32-32 32H90.7L70.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H100.5c-39.4 0-75.4-22.3-93-57.5l-4.1-8.2c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l4.1 8.2c6.8 13.6 20.6 22.1 35.8 22.1H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H32c-9.5 0-18.5-4.2-24.6-11.5s-8.6-16.9-6.9-26.2l32-176z"],
        6: [320, 512, [], "36", "M232.4 84.7c11.4-13.5 9.7-33.7-3.8-45.1s-33.7-9.7-45.1 3.8L38.6 214.7C14.7 242.9 1.1 278.4 .1 315.2c0 1.4-.1 2.9-.1 4.3c0 .2 0 .3 0 .5c0 88.4 71.6 160 160 160s160-71.6 160-160c0-85.5-67.1-155.4-151.5-159.8l63.9-75.6zM256 320A96 96 0 1 1 64 320a96 96 0 1 1 192 0z"],
        7: [320, 512, [], "37", "M0 64C0 46.3 14.3 32 32 32H288c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-224 384c-8.9 15.3-28.5 20.4-43.8 11.5s-20.4-28.5-11.5-43.8L232.3 96H32C14.3 96 0 81.7 0 64z"],
        8: [320, 512, [], "38", "M304 160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 34.6 13.7 66 36 89C20.5 272.3 0 309.8 0 352c0 70.7 57.3 128 128 128h64c70.7 0 128-57.3 128-128c0-42.2-20.5-79.7-52-103c22.3-23 36-54.4 36-89zM176.1 288H192c35.3 0 64 28.7 64 64s-28.7 64-64 64H128c-35.3 0-64-28.7-64-64s28.7-64 64-64h15.9c0 0 .1 0 .1 0h32c0 0 .1 0 .1 0zm0-64c0 0 0 0 0 0H144c0 0 0 0 0 0c-35.3 0-64-28.7-64-64c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64c0 35.3-28.6 64-64 64z"],
        9: [320, 512, [], "39", "M64 192a96 96 0 1 0 192 0A96 96 0 1 0 64 192zm87.5 159.8C67.1 347.4 0 277.5 0 192C0 103.6 71.6 32 160 32s160 71.6 160 160c0 2.6-.1 5.3-.2 7.9c-1.7 35.7-15.2 70-38.4 97.4l-145 171.4c-11.4 13.5-31.6 15.2-45.1 3.8s-15.2-31.6-3.8-45.1l63.9-75.6z"],
        paintbrush: [576, 512, [128396, "paint-brush"], "f1fc", "M339.3 367.1c27.3-3.9 51.9-19.4 67.2-42.9L568.2 74.1c12.6-19.5 9.4-45.3-7.6-61.2S517.7-4.4 499.1 9.6L262.4 187.2c-24 18-38.2 46.1-38.4 76.1L339.3 367.1zm-19.6 25.4l-116-104.4C143.9 290.3 96 339.6 96 400c0 3.9 .2 7.8 .6 11.6C98.4 429.1 86.4 448 68.8 448H64c-17.7 0-32 14.3-32 32s14.3 32 32 32H208c61.9 0 112-50.1 112-112c0-2.5-.1-5-.2-7.5z"],
        lock: [448, 512, [128274], "f023", "M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"],
        "gas-pump": [512, 512, [9981], "f52f", "M32 64C32 28.7 60.7 0 96 0H256c35.3 0 64 28.7 64 64V256h8c48.6 0 88 39.4 88 88v32c0 13.3 10.7 24 24 24s24-10.7 24-24V222c-27.6-7.1-48-32.2-48-62V96L384 64c-8.8-8.8-8.8-23.2 0-32s23.2-8.8 32 0l77.3 77.3c12 12 18.7 28.3 18.7 45.3V168v24 32V376c0 39.8-32.2 72-72 72s-72-32.2-72-72V344c0-22.1-17.9-40-40-40h-8V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64zM96 80v96c0 8.8 7.2 16 16 16H240c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16z"],
        "hot-tub-person": [512, 512, ["hot-tub"], "f593", "M272 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v5.2c0 34 14.4 66.4 39.7 89.2l16.4 14.8c15.2 13.7 23.8 33.1 23.8 53.5V200c0 13.3 10.7 24 24 24s24-10.7 24-24V186.8c0-34-14.4-66.4-39.7-89.2L295.8 82.8C280.7 69.1 272 49.7 272 29.2V24zM0 320v16V448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64H277.3c-13.8 0-27.3-4.5-38.4-12.8l-85.3-64C137 166.7 116.8 160 96 160c-53 0-96 43-96 96v64zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V336c0-8.8 7.2-16 16-16s16 7.2 16 16zm80-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm112 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V336c0-8.8 7.2-16 16-16s16 7.2 16 16zm80-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V336c0-8.8 7.2-16 16-16zM360 0c-13.3 0-24 10.7-24 24v5.2c0 34 14.4 66.4 39.7 89.2l16.4 14.8c15.2 13.7 23.8 33.1 23.8 53.5V200c0 13.3 10.7 24 24 24s24-10.7 24-24V186.8c0-34-14.4-66.4-39.7-89.2L407.8 82.8C392.7 69.1 384 49.7 384 29.2V24c0-13.3-10.7-24-24-24zM64 128A64 64 0 1 0 64 0a64 64 0 1 0 0 128z"],
        "map-location": [576, 512, ["map-marked"], "f59f", "M302.8 312C334.9 271.9 408 174.6 408 120C408 53.7 354.3 0 288 0S168 53.7 168 120c0 54.6 73.1 151.9 105.2 192c7.7 9.6 22 9.6 29.6 0zM416 503l144.9-58c9.1-3.6 15.1-12.5 15.1-22.3V152c0-17-17.1-28.6-32.9-22.3l-116 46.4c-.5 1.2-1 2.5-1.5 3.7c-2.9 6.8-6.1 13.7-9.6 20.6V503zM15.1 187.3C6 191 0 199.8 0 209.6V480.4c0 17 17.1 28.6 32.9 22.3L160 451.8V200.4c-3.5-6.9-6.7-13.8-9.6-20.6c-5.6-13.2-10.4-27.4-12.8-41.5l-122.6 49zM384 255c-20.5 31.3-42.3 59.6-56.2 77c-20.5 25.6-59.1 25.6-79.6 0c-13.9-17.4-35.7-45.7-56.2-77V449.4l192 54.9V255z"],
        "house-flood-water": [576, 512, [], "e50e", "M306.8 6.1C295.6-2 280.4-2 269.2 6.1l-176 128c-11.2 8.2-15.9 22.6-11.6 35.8S98.1 192 112 192h16v73c1.7 1 3.3 2 4.9 3.1c18 12.4 40.1 20.3 59.2 20.3c21.1 0 42-8.5 59.2-20.3c22.1-15.5 51.6-15.5 73.7 0c18.4 12.7 39.6 20.3 59.2 20.3c19 0 41.2-7.9 59.2-20.3c1.5-1 3-2 4.5-2.9l-.3-73.2H464c13.9 0 26.1-8.9 30.4-22.1s-.4-27.6-11.6-35.8l-176-128zM269.5 309.9C247 325.4 219.5 336 192 336c-26.9 0-55.3-10.8-77.4-26.1l0 0c-11.9-8.5-28.1-7.8-39.2 1.7c-14.4 11.9-32.5 21-50.6 25.2c-17.2 4-27.9 21.2-23.9 38.4s21.2 27.9 38.4 23.9c24.5-5.7 44.9-16.5 58.2-25C126.5 389.7 159 400 192 400c31.9 0 60.6-9.9 80.4-18.9c5.8-2.7 11.1-5.3 15.6-7.7c4.5 2.4 9.7 5.1 15.6 7.7c19.8 9 48.5 18.9 80.4 18.9c33 0 65.5-10.3 94.5-25.8c13.4 8.4 33.7 19.3 58.2 25c17.2 4 34.4-6.7 38.4-23.9s-6.7-34.4-23.9-38.4c-18.1-4.2-36.2-13.3-50.6-25.2c-11.1-9.5-27.3-10.1-39.2-1.7l0 0C439.4 325.2 410.9 336 384 336c-27.5 0-55-10.6-77.5-26.1c-11.1-7.9-25.9-7.9-37 0zM384 448c-27.5 0-55-10.6-77.5-26.1c-11.1-7.9-25.9-7.9-37 0C247 437.4 219.5 448 192 448c-26.9 0-55.3-10.8-77.4-26.1l0 0c-11.9-8.5-28.1-7.8-39.2 1.7c-14.4 11.9-32.5 21-50.6 25.2c-17.2 4-27.9 21.2-23.9 38.4s21.2 27.9 38.4 23.9c24.5-5.7 44.9-16.5 58.2-25C126.5 501.7 159 512 192 512c31.9 0 60.6-9.9 80.4-18.9c5.8-2.7 11.1-5.3 15.6-7.7c4.5 2.4 9.7 5.1 15.6 7.7c19.8 9 48.5 18.9 80.4 18.9c33 0 65.5-10.3 94.5-25.8c13.4 8.4 33.7 19.3 58.2 25c17.2 4 34.4-6.7 38.4-23.9s-6.7-34.4-23.9-38.4c-18.1-4.2-36.2-13.3-50.6-25.2c-11.1-9.4-27.3-10.1-39.2-1.7l0 0C439.4 437.2 410.9 448 384 448z"],
        wheelchair: [512, 512, [], "f193", "M192 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM120.5 247.2c12.4-4.7 18.7-18.5 14-30.9s-18.5-18.7-30.9-14C43.1 225.1 0 283.5 0 352c0 88.4 71.6 160 160 160c61.2 0 114.3-34.3 141.2-84.7c6.2-11.7 1.8-26.2-9.9-32.5s-26.2-1.8-32.5 9.9C240 440 202.8 464 160 464C98.1 464 48 413.9 48 352c0-47.9 30.1-88.8 72.5-104.8zM259.8 176l-1.9-9.7c-4.5-22.3-24-38.3-46.8-38.3c-30.1 0-52.7 27.5-46.8 57l23.1 115.5c6 29.9 32.2 51.4 62.8 51.4h5.1c.4 0 .8 0 1.3 0h94.1c6.7 0 12.6 4.1 15 10.4L402 459.2c6 16.1 23.8 24.6 40.1 19.1l48-16c16.8-5.6 25.8-23.7 20.2-40.5s-23.7-25.8-40.5-20.2l-18.7 6.2-25.5-68c-11.7-31.2-41.6-51.9-74.9-51.9H282.2l-9.6-48H336c17.7 0 32-14.3 32-32s-14.3-32-32-32H259.8z"],
        "circle-arrow-up": [512, 512, ["arrow-circle-up"], "f0aa", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM385 231c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-71-71V376c0 13.3-10.7 24-24 24s-24-10.7-24-24V193.9l-71 71c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 119c9.4-9.4 24.6-9.4 33.9 0L385 231z"],
        "toggle-on": [576, 512, [], "f205", "M192 64C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192s-86-192-192-192H192zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"],
        "person-walking": [320, 512, [128694, "walking"], "f554", "M160 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM126.5 199.3c-1 .4-1.9 .8-2.9 1.2l-8 3.5c-16.4 7.3-29 21.2-34.7 38.2l-2.6 7.8c-5.6 16.8-23.7 25.8-40.5 20.2s-25.8-23.7-20.2-40.5l2.6-7.8c11.4-34.1 36.6-61.9 69.4-76.5l8-3.5c20.8-9.2 43.3-14 66.1-14c44.6 0 84.8 26.8 101.9 67.9L281 232.7l21.4 10.7c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3L247 287.3c-10.3-5.2-18.4-13.8-22.8-24.5l-9.6-23-19.3 65.5 49.5 54c5.4 5.9 9.2 13 11.2 20.8l23 92.1c4.3 17.1-6.1 34.5-23.3 38.8s-34.5-6.1-38.8-23.3l-22-88.1-70.7-77.1c-14.8-16.1-20.3-38.6-14.7-59.7l16.9-63.5zM68.7 398l25-62.4c2.1 3 4.5 5.8 7 8.6l40.7 44.4-14.5 36.2c-2.4 6-6 11.5-10.6 16.1L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L68.7 398z"],
        gear: [512, 512, [9881, "cog"], "f013", "M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"],
        "droplet-slash": [640, 512, ["tint-slash"], "f5c7", "M320 512c53.2 0 101.4-21.6 136.1-56.6l-298.3-235C140 257.1 128 292.3 128 320c0 106 86 192 192 192zM505.2 370.7c4.4-16.1 6.8-33.1 6.8-50.7c0-91.2-130.2-262.3-166.6-308.3C339.4 4.2 330.5 0 320.9 0h-1.8c-9.6 0-18.5 4.2-24.5 11.7C277.8 33 240.7 81.3 205.8 136L38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L505.2 370.7zM224 336c0 44.2 35.8 80 80 80c8.8 0 16 7.2 16 16s-7.2 16-16 16c-61.9 0-112-50.1-112-112c0-8.8 7.2-16 16-16s16 7.2 16 16z"],
        mosque: [640, 512, [128332], "f678", "M400 0c5 0 9.8 2.4 12.8 6.4c34.7 46.3 78.1 74.9 133.5 111.5l0 0 0 0c5.2 3.4 10.5 7 16 10.6c28.9 19.2 45.7 51.7 45.7 86.1c0 28.6-11.3 54.5-29.8 73.4H221.8c-18.4-19-29.8-44.9-29.8-73.4c0-34.4 16.7-66.9 45.7-86.1c5.4-3.6 10.8-7.1 16-10.6l0 0 0 0C309.1 81.3 352.5 52.7 387.2 6.4c3-4 7.8-6.4 12.8-6.4zM288 512V440c0-13.3-10.7-24-24-24s-24 10.7-24 24v72H192c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32H608c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32H560V440c0-13.3-10.7-24-24-24s-24 10.7-24 24v72H448V454c0-19-8.4-37-23-49.2L400 384l-25 20.8C360.4 417 352 435 352 454v58H288zM70.4 5.2c5.7-4.3 13.5-4.3 19.2 0l16 12C139.8 42.9 160 83.2 160 126v2H0v-2C0 83.2 20.2 42.9 54.4 17.2l16-12zM0 160H160V296.6c-19.1 11.1-32 31.7-32 55.4V480c0 9.6 2.1 18.6 5.8 26.8c-6.6 3.4-14 5.2-21.8 5.2H48c-26.5 0-48-21.5-48-48V176 160z"],
        ship: [576, 512, [128674], "f21a", "M192 32c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32V64h48c26.5 0 48 21.5 48 48V240l44.4 14.8c23.1 7.7 29.5 37.5 11.5 53.9l-101 92.6c-16.2 9.4-34.7 15.1-50.9 15.1c-19.6 0-40.8-7.7-59.2-20.3c-22.1-15.5-51.6-15.5-73.7 0c-17.1 11.8-38 20.3-59.2 20.3c-16.2 0-34.7-5.7-50.9-15.1l-101-92.6c-18-16.5-11.6-46.2 11.5-53.9L96 240V112c0-26.5 21.5-48 48-48h48V32zM160 218.7l107.8-35.9c13.1-4.4 27.3-4.4 40.5 0L416 218.7V128H160v90.7zM306.5 421.9C329 437.4 356.5 448 384 448c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 501.7 417 512 384 512c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7l0 0C136.7 437.2 165.1 448 192 448c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z"],
        "arrows-down-to-line": [576, 512, [], "e4b8", "M544 416L32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l512 0c17.7 0 32-14.3 32-32s-14.3-32-32-32zm22.6-137.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L480 274.7 480 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96zm-320-45.3c-12.5-12.5-32.8-12.5-45.3 0L160 274.7 160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7L54.6 233.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3z"],
        user: [448, 512, [128100, 62144], "f007", "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"],
        download: [512, 512, [], "f019", "M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"],
        "face-grin": [512, 512, [128512, "grin"], "f580", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM388.1 312.8c12.3-3.8 24.3 6.9 19.3 18.7C382.4 390.6 324.2 432 256.3 432s-126.2-41.4-151.1-100.5c-5-11.8 7-22.5 19.3-18.7c39.7 12.2 84.5 19 131.8 19s92.1-6.8 131.8-19zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"],
        "delete-left": [576, 512, [9003, "backspace"], "f55a", "M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"],
        "eye-dropper": [512, 512, ["eye-dropper-empty", "eyedropper"], "f1fb", "M341.6 29.2L240.1 130.8l-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4L482.8 170.4c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6v42.4L5.4 462.2c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4L89.7 480h42.4c21.2 0 41.6-8.4 56.6-23.4L309.4 335.9l-45.3-45.3L143.4 411.3c-3 3-7.1 4.7-11.3 4.7H96V379.9c0-4.2 1.7-8.3 4.7-11.3L221.4 247.9l-45.3-45.3L55.4 323.3z"],
        "file-circle-check": [576, 512, [], "e5a0", "M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384v38.6C310.1 219.5 256 287.4 256 368c0 59.1 29.1 111.3 73.7 143.3c-3.2 .5-6.4 .7-9.7 .7H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm211.3-43.3c-6.2-6.2-16.4-6.2-22.6 0L416 385.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6z"],
        forward: [512, 512, [9193], "f04e", "M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z"],
        bell: [448, 512, [128276, 61602], "f0f3", "M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"],
        house: [576, 512, [127968, 63498, 63500, "home", "home-alt", "home-lg-alt"], "f015", "M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"],
        "calendar-week": [448, 512, [], "f784", "M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16H368c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z"],
        "laptop-medical": [640, 512, [], "f812", "M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM288 160c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H352v48c0 8.8-7.2 16-16 16H304c-8.8 0-16-7.2-16-16V272H240c-8.8 0-16-7.2-16-16V224c0-8.8 7.2-16 16-16h48V160z"],
        b: [320, 512, [98], "42", "M64 32C28.7 32 0 60.7 0 96V256 416c0 35.3 28.7 64 64 64H192c70.7 0 128-57.3 128-128c0-46.5-24.8-87.3-62-109.7c18.7-22.3 30-51 30-82.3c0-70.7-57.3-128-128-128H64zm96 192H64V96h96c35.3 0 64 28.7 64 64s-28.7 64-64 64zM64 288h96 32c35.3 0 64 28.7 64 64s-28.7 64-64 64H64V288z"],
        "file-medical": [384, 512, [], "f477", "M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM160 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H224v48c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V352H112c-8.8 0-16-7.2-16-16V304c0-8.8 7.2-16 16-16h48V240z"],
        "dice-one": [448, 512, [9856], "f525", "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM224 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"],
        "kiwi-bird": [576, 512, [], "f535", "M291.2 388.4c31.2-18.8 64.7-36.4 101.1-36.4H448c4.6 0 9.1-.2 13.6-.7l85.3 121.9c4 5.7 11.3 8.2 17.9 6.1s11.2-8.3 11.2-15.3V224c0-70.7-57.3-128-128-128H392.3c-36.4 0-69.9-17.6-101.1-36.4C262.3 42.1 228.3 32 192 32C86 32 0 118 0 224c0 71.1 38.6 133.1 96 166.3V456c0 13.3 10.7 24 24 24s24-10.7 24-24V410c15.3 3.9 31.4 6 48 6c5.4 0 10.7-.2 16-.7V456c0 13.3 10.7 24 24 24s24-10.7 24-24V405.1c12.4-4.4 24.2-10 35.2-16.7zM448 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"],
        "arrow-right-arrow-left": [448, 512, [8644, "exchange"], "f0ec", "M438.6 150.6c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96 32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l306.7 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96zm-333.3 352c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 416 416 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96z"],
        "rotate-right": [512, 512, ["redo-alt", "rotate-forward"], "f2f9", "M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z"],
        };
    ! function(c) {
        try {
            for (var l = arguments.length, s = new Array(1 < l ? l - 1 : 0), a = 1; a < l; a++) s[a - 1] = arguments[a];
            c.apply(void 0, s)
        } catch (c) {
            if (!h) throw c
        }
    }(function() {
        d("fas", p), d("fa-solid", p)
    })
}(),
function() {
    "use strict";

    function a(l, c) {
        var s, a = Object.keys(l);
        return Object.getOwnPropertySymbols && (s = Object.getOwnPropertySymbols(l), c && (s = s.filter(function(c) {
            return Object.getOwnPropertyDescriptor(l, c).enumerable
        })), a.push.apply(a, s)), a
    }

    function u(l) {
        for (var c = 1; c < arguments.length; c++) {
            var s = null != arguments[c] ? arguments[c] : {};
            c % 2 ? a(Object(s), !0).forEach(function(c) {
                t(l, c, s[c])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s)) : a(Object(s)).forEach(function(c) {
                Object.defineProperty(l, c, Object.getOwnPropertyDescriptor(s, c))
            })
        }
        return l
    }

    function z(c) {
        return (z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(c) {
            return typeof c
        } : function(c) {
            return c && "function" == typeof Symbol && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c
        })(c)
    }

    function e(c, l) {
        for (var s = 0; s < l.length; s++) {
            var a = l[s];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(c, a.key, a)
        }
    }

    function t(c, l, s) {
        return l in c ? Object.defineProperty(c, l, {
            value: s,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : c[l] = s, c
    }

    function n(c, l) {
        return function(c) {
            if (Array.isArray(c)) return c
        }(c) || function(c, l) {
            var s = null == c ? null : "undefined" != typeof Symbol && c[Symbol.iterator] || c["@@iterator"];
            if (null != s) {
                var a, z, e = [],
                    H = !0,
                    t = !1;
                try {
                    for (s = s.call(c); !(H = (a = s.next()).done) && (e.push(a.value), !l || e.length !== l); H = !0);
                } catch (c) {
                    t = !0, z = c
                } finally {
                    try {
                        H || null == s.return || s.return()
                    } finally {
                        if (t) throw z
                    }
                }
                return e
            }
        }(c, l) || s(c, l) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function M(c) {
        return function(c) {
            if (Array.isArray(c)) return H(c)
        }(c) || function(c) {
            if ("undefined" != typeof Symbol && null != c[Symbol.iterator] || null != c["@@iterator"]) return Array.from(c)
        }(c) || s(c) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function s(c, l) {
        if (c) {
            if ("string" == typeof c) return H(c, l);
            var s = Object.prototype.toString.call(c).slice(8, -1);
            return "Map" === (s = "Object" === s && c.constructor ? c.constructor.name : s) || "Set" === s ? Array.from(c) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? H(c, l) : void 0
        }
    }

    function H(c, l) {
        (null == l || l > c.length) && (l = c.length);
        for (var s = 0, a = new Array(l); s < l; s++) a[s] = c[s];
        return a
    }

    function c() {}
    var l = {},
        V = {},
        r = null,
        h = {
            mark: c,
            measure: c
        };
    try {
        "undefined" != typeof window && (l = window), "undefined" != typeof document && (V = document), "undefined" != typeof MutationObserver && (r = MutationObserver), "undefined" != typeof performance && (h = performance)
    } catch (c) {}
    var i = (l.navigator || {}).userAgent,
        m = void 0 === i ? "" : i,
        v = l,
        C = V,
        o = r,
        i = h,
        f = !!v.document,
        L = !!C.documentElement && !!C.head && "function" == typeof C.addEventListener && "function" == typeof C.createElement,
        d = ~m.indexOf("MSIE") || ~m.indexOf("Trident/"),
        l = "___FONT_AWESOME___",
        p = 16,
        b = "svg-inline--fa",
        g = "data-fa-i2svg",
        y = "data-fa-pseudo-element",
        w = "data-fa-pseudo-element-pending",
        k = "data-prefix",
        S = "data-icon",
        A = "fontawesome-i2svg",
        x = "async",
        q = ["HTML", "HEAD", "STYLE", "SCRIPT"],
        Z = function() {
            try {
                return !0
            } catch (c) {
                return !1
            }
        }(),
        O = "classic",
        j = "sharp",
        P = [O, j];

    function N(c) {
        return new Proxy(c, {
            get: function(c, l) {
                return l in c ? c[l] : c[O]
            }
        })
    }
    var E = N((t(V = {}, O, {
            fa: "solid",
            fas: "solid",
            "fa-solid": "solid",
            far: "regular",
            "fa-regular": "regular",
            fal: "light",
            "fa-light": "light",
            fat: "thin",
            "fa-thin": "thin",
            fad: "duotone",
            "fa-duotone": "duotone",
            fab: "brands",
            "fa-brands": "brands",
            fak: "kit",
            "fa-kit": "kit"
        }), t(V, j, {
            fa: "solid",
            fass: "solid",
            "fa-solid": "solid",
            fasr: "regular",
            "fa-regular": "regular",
            fasl: "light",
            "fa-light": "light"
        }), V)),
        I = N((t(r = {}, O, {
            solid: "fas",
            regular: "far",
            light: "fal",
            thin: "fat",
            duotone: "fad",
            brands: "fab",
            kit: "fak"
        }), t(r, j, {
            solid: "fass",
            regular: "fasr",
            light: "fasl"
        }), r)),
        T = N((t(h = {}, O, {
            fab: "fa-brands",
            fad: "fa-duotone",
            fak: "fa-kit",
            fal: "fa-light",
            far: "fa-regular",
            fas: "fa-solid",
            fat: "fa-thin"
        }), t(h, j, {
            fass: "fa-solid",
            fasr: "fa-regular",
            fasl: "fa-light"
        }), h)),
        D = N((t(m = {}, O, {
            "fa-brands": "fab",
            "fa-duotone": "fad",
            "fa-kit": "fak",
            "fa-light": "fal",
            "fa-regular": "far",
            "fa-solid": "fas",
            "fa-thin": "fat"
        }), t(m, j, {
            "fa-solid": "fass",
            "fa-regular": "fasr",
            "fa-light": "fasl"
        }), m)),
        Y = /fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,
        R = "fa-layers-text",
        F = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
        _ = N((t(V = {}, O, {
            900: "fas",
            400: "far",
            normal: "far",
            300: "fal",
            100: "fat"
        }), t(V, j, {
            900: "fass",
            400: "fasr",
            300: "fasl"
        }), V)),
        r = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        h = r.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
        W = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"],
        U = {
            GROUP: "duotone-group",
            SWAP_OPACITY: "swap-opacity",
            PRIMARY: "primary",
            SECONDARY: "secondary"
        },
        m = new Set;
    Object.keys(I[O]).map(m.add.bind(m)), Object.keys(I[j]).map(m.add.bind(m));
    var X = [].concat(P, M(m), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", U.GROUP, U.SWAP_OPACITY, U.PRIMARY, U.SECONDARY]).concat(r.map(function(c) {
            return "".concat(c, "x")
        })).concat(h.map(function(c) {
            return "w-".concat(c)
        })),
        B = v.FontAwesomeConfig || {};
    C && "function" == typeof C.querySelector && [
        ["data-family-prefix", "familyPrefix"],
        ["data-css-prefix", "cssPrefix"],
        ["data-family-default", "familyDefault"],
        ["data-style-default", "styleDefault"],
        ["data-replacement-class", "replacementClass"],
        ["data-auto-replace-svg", "autoReplaceSvg"],
        ["data-auto-add-css", "autoAddCss"],
        ["data-auto-a11y", "autoA11y"],
        ["data-search-pseudo-elements", "searchPseudoElements"],
        ["data-observe-mutations", "observeMutations"],
        ["data-mutate-approach", "mutateApproach"],
        ["data-keep-original-source", "keepOriginalSource"],
        ["data-measure-performance", "measurePerformance"],
        ["data-show-missing-icons", "showMissingIcons"]
    ].forEach(function(c) {
        var l = n(c, 2),
            c = l[0],
            l = l[1],
            c = "" === (c = function(c) {
                var l = C.querySelector("script[" + c + "]");
                if (l) return l.getAttribute(c)
            }(c)) || "false" !== c && ("true" === c || c);
        null != c && (B[l] = c)
    });
    V = {
        styleDefault: "solid",
        familyDefault: "classic",
        cssPrefix: "fa",
        replacementClass: b,
        autoReplaceSvg: !0,
        autoAddCss: !0,
        autoA11y: !0,
        searchPseudoElements: !1,
        observeMutations: !0,
        mutateApproach: "async",
        keepOriginalSource: !0,
        measurePerformance: !1,
        showMissingIcons: !0
    };
    B.familyPrefix && (B.cssPrefix = B.familyPrefix);
    var G = u(u({}, V), B);
    G.autoReplaceSvg || (G.observeMutations = !1);
    var Q = {};
    Object.keys(V).forEach(function(l) {
        Object.defineProperty(Q, l, {
            enumerable: !0,
            set: function(c) {
                G[l] = c, K.forEach(function(c) {
                    return c(Q)
                })
            },
            get: function() {
                return G[l]
            }
        })
    }), Object.defineProperty(Q, "familyPrefix", {
        enumerable: !0,
        set: function(c) {
            G.cssPrefix = c, K.forEach(function(c) {
                return c(Q)
            })
        },
        get: function() {
            return G.cssPrefix
        }
    }), v.FontAwesomeConfig = Q;
    var K = [];
    var $ = p,
        J = {
            size: 16,
            x: 0,
            y: 0,
            rotate: 0,
            flipX: !1,
            flipY: !1
        };
    var c1 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    function l1() {
        for (var c = 12, l = ""; 0 < c--;) l += c1[62 * Math.random() | 0];
        return l
    }

    function s1(c) {
        for (var l = [], s = (c || []).length >>> 0; s--;) l[s] = c[s];
        return l
    }

    function a1(c) {
        return c.classList ? s1(c.classList) : (c.getAttribute("class") || "").split(" ").filter(function(c) {
            return c
        })
    }

    function z1(c) {
        return "".concat(c).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function e1(s) {
        return Object.keys(s || {}).reduce(function(c, l) {
            return c + "".concat(l, ": ").concat(s[l].trim(), ";")
        }, "")
    }

    function H1(c) {
        return c.size !== J.size || c.x !== J.x || c.y !== J.y || c.rotate !== J.rotate || c.flipX || c.flipY
    }

    function t1() {
        var c, l, s = b,
            a = Q.cssPrefix,
            z = Q.replacementClass,
            e = ':host,:root{--fa-font-solid:normal 900 1em/1 "Font Awesome 6 Solid";--fa-font-regular:normal 400 1em/1 "Font Awesome 6 Regular";--fa-font-light:normal 300 1em/1 "Font Awesome 6 Light";--fa-font-thin:normal 100 1em/1 "Font Awesome 6 Thin";--fa-font-duotone:normal 900 1em/1 "Font Awesome 6 Duotone";--fa-font-sharp-solid:normal 900 1em/1 "Font Awesome 6 Sharp";--fa-font-sharp-regular:normal 400 1em/1 "Font Awesome 6 Sharp";--fa-font-sharp-light:normal 300 1em/1 "Font Awesome 6 Sharp";--fa-font-brands:normal 400 1em/1 "Font Awesome 6 Brands"}svg:not(:host).svg-inline--fa,svg:not(:root).svg-inline--fa{overflow:visible;box-sizing:content-box}.svg-inline--fa{display:var(--fa-display,inline-block);height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-2xs{vertical-align:.1em}.svg-inline--fa.fa-xs{vertical-align:0}.svg-inline--fa.fa-sm{vertical-align:-.0714285705em}.svg-inline--fa.fa-lg{vertical-align:-.2em}.svg-inline--fa.fa-xl{vertical-align:-.25em}.svg-inline--fa.fa-2xl{vertical-align:-.3125em}.svg-inline--fa.fa-pull-left{margin-right:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-pull-right{margin-left:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-li{width:var(--fa-li-width,2em);top:.25em}.svg-inline--fa.fa-fw{width:var(--fa-fw-width,1.25em)}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:var(--fa-counter-background-color,#ff253a);border-radius:var(--fa-counter-border-radius,1em);box-sizing:border-box;color:var(--fa-inverse,#fff);line-height:var(--fa-counter-line-height,1);max-width:var(--fa-counter-max-width,5em);min-width:var(--fa-counter-min-width,1.5em);overflow:hidden;padding:var(--fa-counter-padding,.25em .5em);right:var(--fa-right,0);text-overflow:ellipsis;top:var(--fa-top,0);-webkit-transform:scale(var(--fa-counter-scale,.25));transform:scale(var(--fa-counter-scale,.25));-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:var(--fa-bottom,0);right:var(--fa-right,0);top:auto;-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:var(--fa-bottom,0);left:var(--fa-left,0);right:auto;top:auto;-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{top:var(--fa-top,0);right:var(--fa-right,0);-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:var(--fa-left,0);right:auto;top:var(--fa-top,0);-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:top left;transform-origin:top left}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-2xs{font-size:.625em;line-height:.1em;vertical-align:.225em}.fa-xs{font-size:.75em;line-height:.0833333337em;vertical-align:.125em}.fa-sm{font-size:.875em;line-height:.0714285718em;vertical-align:.0535714295em}.fa-lg{font-size:1.25em;line-height:.05em;vertical-align:-.075em}.fa-xl{font-size:1.5em;line-height:.0416666682em;vertical-align:-.125em}.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-.1875em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:var(--fa-li-margin,2.5em);padding-left:0}.fa-ul>li{position:relative}.fa-li{left:calc(var(--fa-li-width,2em) * -1);position:absolute;text-align:center;width:var(--fa-li-width,2em);line-height:inherit}.fa-border{border-color:var(--fa-border-color,#eee);border-radius:var(--fa-border-radius,.1em);border-style:var(--fa-border-style,solid);border-width:var(--fa-border-width,.08em);padding:var(--fa-border-padding,.2em .25em .15em)}.fa-pull-left{float:left;margin-right:var(--fa-pull-margin,.3em)}.fa-pull-right{float:right;margin-left:var(--fa-pull-margin,.3em)}.fa-beat{-webkit-animation-name:fa-beat;animation-name:fa-beat;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-bounce{-webkit-animation-name:fa-bounce;animation-name:fa-bounce;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1))}.fa-fade{-webkit-animation-name:fa-fade;animation-name:fa-fade;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-beat-fade{-webkit-animation-name:fa-beat-fade;animation-name:fa-beat-fade;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-flip{-webkit-animation-name:fa-flip;animation-name:fa-flip;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-shake{-webkit-animation-name:fa-shake;animation-name:fa-shake;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,2s);animation-duration:var(--fa-animation-duration,2s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin-reverse{--fa-animation-direction:reverse}.fa-pulse,.fa-spin-pulse{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,steps(8));animation-timing-function:var(--fa-animation-timing,steps(8))}@media (prefers-reduced-motion:reduce){.fa-beat,.fa-beat-fade,.fa-bounce,.fa-fade,.fa-flip,.fa-pulse,.fa-shake,.fa-spin,.fa-spin-pulse{-webkit-animation-delay:-1ms;animation-delay:-1ms;-webkit-animation-duration:1ms;animation-duration:1ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-transition-delay:0s;transition-delay:0s;-webkit-transition-duration:0s;transition-duration:0s}}@-webkit-keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@-webkit-keyframes fa-bounce{0%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{-webkit-transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em));transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em))}64%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}100%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}}@keyframes fa-bounce{0%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{-webkit-transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em));transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em))}64%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}100%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}}@-webkit-keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@-webkit-keyframes fa-beat-fade{0%,100%{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}@keyframes fa-beat-fade{0%,100%{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}@-webkit-keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@-webkit-keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}24%,8%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}100%,40%{-webkit-transform:rotate(0);transform:rotate(0)}}@keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}24%,8%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}100%,40%{-webkit-transform:rotate(0);transform:rotate(0)}}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}.fa-rotate-by{-webkit-transform:rotate(var(--fa-rotate-angle,none));transform:rotate(var(--fa-rotate-angle,none))}.fa-stack{display:inline-block;vertical-align:middle;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;z-index:var(--fa-stack-z-index,auto)}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:var(--fa-inverse,#fff)}.fa-sr-only,.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.fa-sr-only-focusable:not(:focus),.sr-only-focusable:not(:focus){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fa-duotone.fa-inverse,.fad.fa-inverse{color:var(--fa-inverse,#fff)}';
        return "fa" === a && z === s || (c = new RegExp("\\.".concat("fa", "\\-"), "g"), l = new RegExp("\\--".concat("fa", "\\-"), "g"), s = new RegExp("\\.".concat(s), "g"), e = e.replace(c, ".".concat(a, "-")).replace(l, "--".concat(a, "-")).replace(s, ".".concat(z))), e
    }
    var V1 = !1;

    function r1() {
        Q.autoAddCss && !V1 && (function(c) {
            if (c && L) {
                var l = C.createElement("style");
                l.setAttribute("type", "text/css"), l.innerHTML = c;
                for (var s = C.head.childNodes, a = null, z = s.length - 1; - 1 < z; z--) {
                    var e = s[z],
                        H = (e.tagName || "").toUpperCase(); - 1 < ["STYLE", "LINK"].indexOf(H) && (a = e)
                }
                C.head.insertBefore(l, a)
            }
        }(t1()), V1 = !0)
    }
    m = {
        mixout: function() {
            return {
                dom: {
                    css: t1,
                    insertCss: r1
                }
            }
        },
        hooks: function() {
            return {
                beforeDOMElementCreation: function() {
                    r1()
                },
                beforeI2svg: function() {
                    r1()
                }
            }
        }
    }, r = v || {};
    r[l] || (r[l] = {}), r[l].styles || (r[l].styles = {}), r[l].hooks || (r[l].hooks = {}), r[l].shims || (r[l].shims = []);

    function M1() {
        C.removeEventListener("DOMContentLoaded", M1), i1 = 1, n1.map(function(c) {
            return c()
        })
    }
    var h1 = r[l],
        n1 = [],
        i1 = !1;

    function m1(c) {
        L && (i1 ? setTimeout(c, 0) : n1.push(c))
    }

    function o1(c) {
        var s, l = c.tag,
            a = c.attributes,
            z = void 0 === a ? {} : a,
            a = c.children,
            a = void 0 === a ? [] : a;
        return "string" == typeof c ? z1(c) : "<".concat(l, " ").concat((s = z, Object.keys(s || {}).reduce(function(c, l) {
            return c + "".concat(l, '="').concat(z1(s[l]), '" ')
        }, "").trim()), ">").concat(a.map(o1).join(""), "</").concat(l, ">")
    }

    function f1(c, l, s) {
        if (c && c[l] && c[l][s]) return {
            prefix: l,
            iconName: s,
            icon: c[l][s]
        }
    }
    L && ((i1 = (C.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(C.readyState)) || C.addEventListener("DOMContentLoaded", M1));

    function v1(c, l, s, a) {
        for (var z, e, H = Object.keys(c), t = H.length, V = void 0 !== a ? C1(l, a) : l, r = void 0 === s ? (z = 1, c[H[0]]) : (z = 0, s); z < t; z++) r = V(r, c[e = H[z]], e, c);
        return r
    }
    var C1 = function(z, e) {
        return function(c, l, s, a) {
            return z.call(e, c, l, s, a)
        }
    };

    function L1(c) {
        c = function(c) {
            for (var l = [], s = 0, a = c.length; s < a;) {
                var z, e = c.charCodeAt(s++);
                55296 <= e && e <= 56319 && s < a ? 56320 == (64512 & (z = c.charCodeAt(s++))) ? l.push(((1023 & e) << 10) + (1023 & z) + 65536) : (l.push(e), s--) : l.push(e)
            }
            return l
        }(c);
        return 1 === c.length ? c[0].toString(16) : null
    }

    function u1(a) {
        return Object.keys(a).reduce(function(c, l) {
            var s = a[l];
            return !!s.icon ? c[s.iconName] = s.icon : c[l] = s, c
        }, {})
    }

    function d1(c, l, s) {
        var a = (2 < arguments.length && void 0 !== s ? s : {}).skipHooks,
            s = void 0 !== a && a,
            a = u1(l);
        "function" != typeof h1.hooks.addPack || s ? h1.styles[c] = u(u({}, h1.styles[c] || {}), a) : h1.hooks.addPack(c, u1(l)), "fas" === c && d1("fa", l)
    }
    var p1 = h1.styles,
        b1 = h1.shims,
        g1 = (t(h = {}, O, Object.values(T[O])), t(h, j, Object.values(T[j])), h),
        y1 = null,
        w1 = {},
        k1 = {},
        S1 = {},
        A1 = {},
        x1 = {},
        q1 = (t(V = {}, O, Object.keys(E[O])), t(V, j, Object.keys(E[j])), V);

    function Z1(c, l) {
        var s = l.split("-"),
            l = s[0],
            s = s.slice(1).join("-");
        return l !== c || "" === s || ~X.indexOf(s) ? null : s
    }

    function O1() {
        function c(a) {
            return v1(p1, function(c, l, s) {
                return c[s] = v1(l, a, {}), c
            }, {})
        }
        w1 = c(function(l, c, s) {
            return c[3] && (l[c[3]] = s), c[2] && c[2].filter(function(c) {
                return "number" == typeof c
            }).forEach(function(c) {
                l[c.toString(16)] = s
            }), l
        }), k1 = c(function(l, c, s) {
            return l[s] = s, c[2] && c[2].filter(function(c) {
                return "string" == typeof c
            }).forEach(function(c) {
                l[c] = s
            }), l
        }), x1 = c(function(l, c, s) {
            c = c[2];
            return l[s] = s, c.forEach(function(c) {
                l[c] = s
            }), l
        });
        var z = "far" in p1 || Q.autoFetchSvg,
            l = v1(b1, function(c, l) {
                var s = l[0],
                    a = l[1],
                    l = l[2];
                return "far" !== a || z || (a = "fas"), "string" == typeof s && (c.names[s] = {
                    prefix: a,
                    iconName: l
                }), "number" == typeof s && (c.unicodes[s.toString(16)] = {
                    prefix: a,
                    iconName: l
                }), c
            }, {
                names: {},
                unicodes: {}
            });
        S1 = l.names, A1 = l.unicodes, y1 = I1(Q.styleDefault, {
            family: Q.familyDefault
        })
    }

    function j1(c, l) {
        return (w1[c] || {})[l]
    }

    function P1(c, l) {
        return (x1[c] || {})[l]
    }

    function N1(c) {
        return S1[c] || {
            prefix: null,
            iconName: null
        }
    }
    r = function(c) {
        y1 = I1(c.styleDefault, {
            family: Q.familyDefault
        })
    }, K.push(r), O1();

    function E1() {
        return {
            prefix: null,
            iconName: null,
            rest: []
        }
    }

    function I1(c, l) {
        var s = (1 < arguments.length && void 0 !== l ? l : {}).family,
            l = void 0 === s ? O : s,
            s = E[l][c],
            s = I[l][c] || I[l][s],
            c = c in h1.styles ? c : null;
        return s || c || null
    }
    var T1 = (t(l = {}, O, Object.keys(T[O])), t(l, j, Object.keys(T[j])), l);

    function D1(c, l) {
        var l = (1 < arguments.length && void 0 !== l ? l : {}).skipLookups,
            a = void 0 !== l && l,
            z = (t(l = {}, O, "".concat(Q.cssPrefix, "-").concat(O)), t(l, j, "".concat(Q.cssPrefix, "-").concat(j)), l),
            e = null,
            H = O;
        (c.includes(z[O]) || c.some(function(c) {
            return T1[O].includes(c)
        })) && (H = O), (c.includes(z[j]) || c.some(function(c) {
            return T1[j].includes(c)
        })) && (H = j);
        l = c.reduce(function(c, l) {
            var s = Z1(Q.cssPrefix, l);
            return p1[l] ? (l = g1[H].includes(l) ? D[H][l] : l, e = l, c.prefix = l) : -1 < q1[H].indexOf(l) ? (e = l, c.prefix = I1(l, {
                family: H
            })) : s ? c.iconName = s : l !== Q.replacementClass && l !== z[O] && l !== z[j] && c.rest.push(l), !a && c.prefix && c.iconName && (s = "fa" === e ? N1(c.iconName) : {}, l = P1(c.prefix, c.iconName), s.prefix && (e = null), c.iconName = s.iconName || l || c.iconName, c.prefix = s.prefix || c.prefix, "far" !== c.prefix || p1.far || !p1.fas || Q.autoFetchSvg || (c.prefix = "fas")), c
        }, E1());
        return (c.includes("fa-brands") || c.includes("fab")) && (l.prefix = "fab"), (c.includes("fa-duotone") || c.includes("fad")) && (l.prefix = "fad"), l.prefix || H !== j || !p1.fass && !Q.autoFetchSvg || (l.prefix = "fass", l.iconName = P1(l.prefix, l.iconName) || l.iconName), "fa" !== l.prefix && "fa" !== e || (l.prefix = y1 || "fas"), l
    }
    var h = function() {
            function c() {
                ! function(c, l) {
                    if (!(c instanceof l)) throw new TypeError("Cannot call a class as a function")
                }(this, c), this.definitions = {}
            }
            var l, s, a;
            return l = c, (s = [{
                key: "add",
                value: function() {
                    for (var s = this, c = arguments.length, l = new Array(c), a = 0; a < c; a++) l[a] = arguments[a];
                    var z = l.reduce(this._pullDefinitions, {});
                    Object.keys(z).forEach(function(c) {
                        s.definitions[c] = u(u({}, s.definitions[c] || {}), z[c]), d1(c, z[c]);
                        var l = T[O][c];
                        l && d1(l, z[c]), O1()
                    })
                }
            }, {
                key: "reset",
                value: function() {
                    this.definitions = {}
                }
            }, {
                key: "_pullDefinitions",
                value: function(z, c) {
                    var e = c.prefix && c.iconName && c.icon ? {
                        0: c
                    } : c;
                    return Object.keys(e).map(function(c) {
                        var l = e[c],
                            s = l.prefix,
                            c = l.iconName,
                            a = l.icon,
                            l = a[2];
                        z[s] || (z[s] = {}), 0 < l.length && l.forEach(function(c) {
                            "string" == typeof c && (z[s][c] = a)
                        }), z[s][c] = a
                    }), z
                }
            }]) && e(l.prototype, s), a && e(l, a), Object.defineProperty(l, "prototype", {
                writable: !1
            }), c
        }(),
        V = [],
        Y1 = {},
        R1 = {},
        F1 = Object.keys(R1);

    function _1(c, l) {
        for (var s = arguments.length, a = new Array(2 < s ? s - 2 : 0), z = 2; z < s; z++) a[z - 2] = arguments[z];
        return (Y1[c] || []).forEach(function(c) {
            l = c.apply(null, [l].concat(a))
        }), l
    }

    function W1(c) {
        for (var l = arguments.length, s = new Array(1 < l ? l - 1 : 0), a = 1; a < l; a++) s[a - 1] = arguments[a];
        (Y1[c] || []).forEach(function(c) {
            c.apply(null, s)
        })
    }

    function U1(c) {
        var l = c,
            c = Array.prototype.slice.call(arguments, 1);
        return R1[l] ? R1[l].apply(null, c) : void 0
    }

    function X1(c) {
        "fa" === c.prefix && (c.prefix = "fas");
        var l = c.iconName,
            c = c.prefix || y1;
        if (l) return l = P1(c, l) || l, f1(B1.definitions, c, l) || f1(h1.styles, c, l)
    }
    var B1 = new h,
        G1 = {
            noAuto: function() {
                Q.autoReplaceSvg = !1, Q.observeMutations = !1, W1("noAuto")
            },
            config: Q,
            dom: {
                i2svg: function() {
                    var c = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    return L ? (W1("beforeI2svg", c), U1("pseudoElements2svg", c), U1("i2svg", c)) : Promise.reject("Operation requires a DOM of some kind.")
                },
                watch: function() {
                    var c = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                        l = c.autoReplaceSvgRoot;
                    !1 === Q.autoReplaceSvg && (Q.autoReplaceSvg = !0), Q.observeMutations = !0, m1(function() {
                        Q1({
                            autoReplaceSvgRoot: l
                        }), W1("watch", c)
                    })
                }
            },
            parse: {
                icon: function(c) {
                    if (null === c) return null;
                    if ("object" === z(c) && c.prefix && c.iconName) return {
                        prefix: c.prefix,
                        iconName: P1(c.prefix, c.iconName) || c.iconName
                    };
                    if (Array.isArray(c) && 2 === c.length) {
                        var l = 0 === c[1].indexOf("fa-") ? c[1].slice(3) : c[1],
                            s = I1(c[0]);
                        return {
                            prefix: s,
                            iconName: P1(s, l) || l
                        }
                    }
                    if ("string" == typeof c && (-1 < c.indexOf("".concat(Q.cssPrefix, "-")) || c.match(Y))) {
                        l = D1(c.split(" "), {
                            skipLookups: !0
                        });
                        return {
                            prefix: l.prefix || y1,
                            iconName: P1(l.prefix, l.iconName) || l.iconName
                        }
                    }
                    return "string" == typeof c ? {
                        prefix: y1,
                        iconName: P1(y1, c) || c
                    } : void 0
                }
            },
            library: B1,
            findIconDefinition: X1,
            toHtml: o1
        },
        Q1 = function() {
            var c = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
                c = void 0 === c ? C : c;
            (0 < Object.keys(h1.styles).length || Q.autoFetchSvg) && L && Q.autoReplaceSvg && G1.dom.i2svg({
                node: c
            })
        };

    function K1(l, c) {
        return Object.defineProperty(l, "abstract", {
            get: c
        }), Object.defineProperty(l, "html", {
            get: function() {
                return l.abstract.map(o1)
            }
        }), Object.defineProperty(l, "node", {
            get: function() {
                if (L) {
                    var c = C.createElement("div");
                    return c.innerHTML = l.html, c.children
                }
            }
        }), l
    }

    function $1(c) {
        var l = c.icons,
            s = l.main,
            a = l.mask,
            z = c.prefix,
            e = c.iconName,
            H = c.transform,
            t = c.symbol,
            V = c.title,
            r = c.maskId,
            M = c.titleId,
            h = c.extra,
            n = c.watchable,
            i = void 0 !== n && n,
            m = a.found ? a : s,
            l = m.width,
            c = m.height,
            n = "fak" === z,
            m = [Q.replacementClass, e ? "".concat(Q.cssPrefix, "-").concat(e) : ""].filter(function(c) {
                return -1 === h.classes.indexOf(c)
            }).filter(function(c) {
                return "" !== c || !!c
            }).concat(h.classes).join(" "),
            m = {
                children: [],
                attributes: u(u({}, h.attributes), {}, {
                    "data-prefix": z,
                    "data-icon": e,
                    class: m,
                    role: h.attributes.role || "img",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 ".concat(l, " ").concat(c)
                })
            },
            c = n && !~h.classes.indexOf("fa-fw") ? {
                width: "".concat(l / c * 16 * .0625, "em")
            } : {};
        i && (m.attributes[g] = ""), V && (m.children.push({
            tag: "title",
            attributes: {
                id: m.attributes["aria-labelledby"] || "title-".concat(M || l1())
            },
            children: [V]
        }), delete m.attributes.title);
        var o, f, v, C, L, c = u(u({}, m), {}, {
                prefix: z,
                iconName: e,
                main: s,
                mask: a,
                maskId: r,
                transform: H,
                symbol: t,
                styles: u(u({}, c), h.styles)
            }),
            a = a.found && s.found ? U1("generateAbstractMask", c) || {
                children: [],
                attributes: {}
            } : U1("generateAbstractIcon", c) || {
                children: [],
                attributes: {}
            },
            s = a.children,
            a = a.attributes;
        return c.children = s, c.attributes = a, t ? (f = (o = c).prefix, v = o.iconName, C = o.children, L = o.attributes, o = !0 === (o = o.symbol) ? "".concat(f, "-").concat(Q.cssPrefix, "-").concat(v) : o, [{
            tag: "svg",
            attributes: {
                style: "display: none;"
            },
            children: [{
                tag: "symbol",
                attributes: u(u({}, L), {}, {
                    id: o
                }),
                children: C
            }]
        }]) : (v = (f = c).children, L = f.main, o = f.mask, C = f.attributes, c = f.styles, H1(f = f.transform) && L.found && !o.found && (o = L.width / L.height / 2, L = .5, C.style = e1(u(u({}, c), {}, {
            "transform-origin": "".concat(o + f.x / 16, "em ").concat(L + f.y / 16, "em")
        }))), [{
            tag: "svg",
            attributes: C,
            children: v
        }])
    }

    function J1(c) {
        var l = c.content,
            s = c.width,
            a = c.height,
            z = c.transform,
            e = c.title,
            H = c.extra,
            t = c.watchable,
            V = void 0 !== t && t,
            c = u(u(u({}, H.attributes), e ? {
                title: e
            } : {}), {}, {
                class: H.classes.join(" ")
            });
        V && (c[g] = "");
        t = u({}, H.styles);
        H1(z) && (t.transform = (H = (V = {
            transform: z,
            startCentered: !0,
            width: s,
            height: a
        }).transform, z = V.width, a = void 0 === (s = V.height) ? p : s, V = void 0 !== (s = V.startCentered) && s, s = "", s += V && d ? "translate(".concat(H.x / $ - (void 0 === z ? p : z) / 2, "em, ").concat(H.y / $ - a / 2, "em) ") : V ? "translate(calc(-50% + ".concat(H.x / $, "em), calc(-50% + ").concat(H.y / $, "em)) ") : "translate(".concat(H.x / $, "em, ").concat(H.y / $, "em) "), s += "scale(".concat(H.size / $ * (H.flipX ? -1 : 1), ", ").concat(H.size / $ * (H.flipY ? -1 : 1), ") "), s += "rotate(".concat(H.rotate, "deg) ")), t["-webkit-transform"] = t.transform);
        t = e1(t);
        0 < t.length && (c.style = t);
        t = [];
        return t.push({
            tag: "span",
            attributes: c,
            children: [l]
        }), e && t.push({
            tag: "span",
            attributes: {
                class: "sr-only"
            },
            children: [e]
        }), t
    }
    var c2 = h1.styles;

    function l2(c) {
        var l = c[0],
            s = c[1],
            c = n(c.slice(4), 1)[0];
        return {
            found: !0,
            width: l,
            height: s,
            icon: Array.isArray(c) ? {
                tag: "g",
                attributes: {
                    class: "".concat(Q.cssPrefix, "-").concat(U.GROUP)
                },
                children: [{
                    tag: "path",
                    attributes: {
                        class: "".concat(Q.cssPrefix, "-").concat(U.SECONDARY),
                        fill: "currentColor",
                        d: c[0]
                    }
                }, {
                    tag: "path",
                    attributes: {
                        class: "".concat(Q.cssPrefix, "-").concat(U.PRIMARY),
                        fill: "currentColor",
                        d: c[1]
                    }
                }]
            } : {
                tag: "path",
                attributes: {
                    fill: "currentColor",
                    d: c
                }
            }
        }
    }
    var s2 = {
        found: !1,
        width: 512,
        height: 512
    };

    function a2(z, e) {
        var H = e;
        return "fa" === e && null !== Q.styleDefault && (e = y1), new Promise(function(c, l) {
            var s, a;
            U1("missingIconAbstract");
            if ("fa" === H && (a = N1(z) || {}, z = a.iconName || z, e = a.prefix || e), z && e && c2[e] && c2[e][z]) return c(l2(c2[e][z]));
            s = z, a = e, Z || Q.showMissingIcons || !s || console.error('Icon with name "'.concat(s, '" and prefix "').concat(a, '" is missing.')), c(u(u({}, s2), {}, {
                icon: Q.showMissingIcons && z && U1("missingIconAbstract") || {}
            }))
        })
    }

    function z2() {}

    function e2(c) {
        H2.mark("".concat(t2, " ").concat(c, " ends")), H2.measure("".concat(t2, " ").concat(c), "".concat(t2, " ").concat(c, " begins"), "".concat(t2, " ").concat(c, " ends"))
    }
    var H2 = Q.measurePerformance && i && i.mark && i.measure ? i : {
            mark: z2,
            measure: z2
        },
        t2 = 'FA "6.4.0"',
        V2 = {
            begin: function(c) {
                return H2.mark("".concat(t2, " ").concat(c, " begins")),
                    function() {
                        return e2(c)
                    }
            },
            end: e2
        },
        r2 = function() {};

    function M2(c) {
        return "string" == typeof(c.getAttribute ? c.getAttribute(g) : null)
    }

    function h2(c) {
        return C.createElementNS("http://www.w3.org/2000/svg", c)
    }

    function n2(c) {
        return C.createElement(c)
    }
    var i2 = {
        replace: function(c) {
            var l = c[0];
            l.parentNode && (c[1].forEach(function(c) {
                l.parentNode.insertBefore(function l(s, c) {
                    var c = (1 < arguments.length && void 0 !== c ? c : {}).ceFn,
                        a = void 0 === c ? "svg" === s.tag ? h2 : n2 : c;
                    if ("string" == typeof s) return C.createTextNode(s);
                    var z = a(s.tag);
                    return Object.keys(s.attributes || []).forEach(function(c) {
                        z.setAttribute(c, s.attributes[c])
                    }), (s.children || []).forEach(function(c) {
                        z.appendChild(l(c, {
                            ceFn: a
                        }))
                    }), z
                }(c), l)
            }), null === l.getAttribute(g) && Q.keepOriginalSource ? (c = C.createComment((c = " ".concat((c = l).outerHTML, " "), c = "".concat(c, "Font Awesome fontawesome.com "))), l.parentNode.replaceChild(c, l)) : l.remove())
        },
        nest: function(c) {
            var l = c[0],
                s = c[1];
            if (~a1(l).indexOf(Q.replacementClass)) return i2.replace(c);
            var a = new RegExp("".concat(Q.cssPrefix, "-.*"));
            delete s[0].attributes.id, s[0].attributes.class && (c = s[0].attributes.class.split(" ").reduce(function(c, l) {
                return (l === Q.replacementClass || l.match(a) ? c.toSvg : c.toNode).push(l), c
            }, {
                toNode: [],
                toSvg: []
            }), s[0].attributes.class = c.toSvg.join(" "), 0 === c.toNode.length ? l.removeAttribute("class") : l.setAttribute("class", c.toNode.join(" ")));
            s = s.map(o1).join("\n");
            l.setAttribute(g, ""), l.innerHTML = s
        }
    };

    function m2(c) {
        c()
    }

    function o2(s, c) {
        var a = "function" == typeof c ? c : r2;
        0 === s.length ? a() : (Q.mutateApproach === x ? v.requestAnimationFrame || m2 : m2)(function() {
            var c = !0 !== Q.autoReplaceSvg && i2[Q.autoReplaceSvg] || i2.replace,
                l = V2.begin("mutate");
            s.map(c), l(), a()
        })
    }
    var f2 = !1;

    function v2() {
        f2 = !0
    }

    function C2() {
        f2 = !1
    }
    var L2 = null;

    function u2(c) {
        var e, H, l, t;
        o && Q.observeMutations && (l = c.treeCallback, e = void 0 === l ? r2 : l, l = c.nodeCallback, H = void 0 === l ? r2 : l, l = c.pseudoElementsCallback, t = void 0 === l ? r2 : l, c = void 0 === (c = c.observeMutationsRoot) ? C : c, L2 = new o(function(c) {
            var z;
            f2 || (z = y1, s1(c).forEach(function(c) {
                var l, s, a;
                "childList" === c.type && 0 < c.addedNodes.length && !M2(c.addedNodes[0]) && (Q.searchPseudoElements && t(c.target), e(c.target)), "attributes" === c.type && c.target.parentNode && Q.searchPseudoElements && t(c.target.parentNode), "attributes" === c.type && M2(c.target) && ~W.indexOf(c.attributeName) && ("class" === c.attributeName && (s = c.target, a = s.getAttribute ? s.getAttribute(k) : null, s = s.getAttribute ? s.getAttribute(S) : null, a && s) ? (s = (l = D1(a1(c.target))).prefix, l = l.iconName, c.target.setAttribute(k, s || z), l && c.target.setAttribute(S, l)) : (l = c.target) && l.classList && l.classList.contains && l.classList.contains(Q.replacementClass) && H(c.target))
            }))
        }), L && L2.observe(c, {
            childList: !0,
            attributes: !0,
            characterData: !0,
            subtree: !0
        }))
    }

    function d2(c) {
        var l = c.getAttribute("data-prefix"),
            s = c.getAttribute("data-icon"),
            a = void 0 !== c.innerText ? c.innerText.trim() : "",
            z = D1(a1(c));
        return z.prefix || (z.prefix = y1), l && s && (z.prefix = l, z.iconName = s), z.iconName && z.prefix || (z.prefix && 0 < a.length && (z.iconName = (s = z.prefix, a = c.innerText, (k1[s] || {})[a] || j1(z.prefix, L1(c.innerText)))), !z.iconName && Q.autoFetchSvg && c.firstChild && c.firstChild.nodeType === Node.TEXT_NODE && (z.iconName = c.firstChild.data)), z
    }

    function p2(c, l) {
        var s = 1 < arguments.length && void 0 !== l ? l : {
                styleParser: !0
            },
            a = d2(c),
            z = a.iconName,
            e = a.prefix,
            H = a.rest,
            t = (l = s1((t = c).attributes).reduce(function(c, l) {
                return "class" !== c.name && "style" !== c.name && (c[l.name] = l.value), c
            }, {}), a = t.getAttribute("title"), t = t.getAttribute("data-fa-title-id"), Q.autoA11y && (a ? l["aria-labelledby"] = "".concat(Q.replacementClass, "-title-").concat(t || l1()) : (l["aria-hidden"] = "true", l.focusable = "false")), l),
            l = _1("parseNodeAttributes", {}, c),
            V = s.styleParser ? (s = (V = c).getAttribute("style"), V = [], V = s ? s.split(";").reduce(function(c, l) {
                var s = l.split(":"),
                    l = s[0],
                    s = s.slice(1);
                return l && 0 < s.length && (c[l] = s.join(":").trim()), c
            }, {}) : V) : [];
        return u({
            iconName: z,
            title: c.getAttribute("title"),
            titleId: c.getAttribute("data-fa-title-id"),
            prefix: e,
            transform: J,
            mask: {
                iconName: null,
                prefix: null,
                rest: []
            },
            maskId: null,
            symbol: !1,
            extra: {
                classes: H,
                styles: V,
                attributes: t
            }
        }, l)
    }
    var b2 = h1.styles;

    function g2(c) {
        var l = "nest" === Q.autoReplaceSvg ? p2(c, {
            styleParser: !1
        }) : p2(c);
        return ~l.extra.classes.indexOf(R) ? U1("generateLayersText", c, l) : U1("generateSvgReplacementMutation", c, l)
    }
    var y2 = new Set;

    function w2(c) {
        var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
        if (!L) return Promise.resolve();

        function z(c) {
            return l.add("".concat(A, "-").concat(c))
        }

        function e(c) {
            return l.remove("".concat(A, "-").concat(c))
        }
        var l = C.documentElement.classList,
            s = Q.autoFetchSvg ? y2 : P.map(function(c) {
                return "fa-".concat(c)
            }).concat(Object.keys(b2));
        s.includes("fa") || s.push("fa");
        var H = [".".concat(R, ":not([").concat(g, "])")].concat(s.map(function(c) {
            return ".".concat(c, ":not([").concat(g, "])")
        })).join(", ");
        if (0 === H.length) return Promise.resolve();
        s = [];
        try {
            s = s1(c.querySelectorAll(H))
        } catch (c) {}
        if (!(0 < s.length)) return Promise.resolve();
        z("pending"), e("complete");
        var t = V2.begin("onTree"),
            V = s.reduce(function(c, l) {
                try {
                    var s = g2(l);
                    s && c.push(s)
                } catch (c) {
                    Z || "MissingIcon" === c.name && console.error(c)
                }
                return c
            }, []);
        return new Promise(function(l, s) {
            Promise.all(V).then(function(c) {
                o2(c, function() {
                    z("active"), z("complete"), e("pending"), "function" == typeof a && a(), t(), l()
                })
            }).catch(function(c) {
                t(), s(c)
            })
        })
    }

    function k2(c) {
        var l = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
        g2(c).then(function(c) {
            c && o2([c], l)
        })
    }
    P.map(function(c) {
        y2.add("fa-".concat(c))
    }), Object.keys(E[O]).map(y2.add.bind(y2)), Object.keys(E[j]).map(y2.add.bind(y2));

    function S2(c) {
        var l = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
            s = l.transform,
            a = void 0 === s ? J : s,
            z = void 0 !== (s = l.symbol) && s,
            e = void 0 === (s = l.mask) ? null : s,
            H = void 0 === (s = l.maskId) ? null : s,
            t = void 0 === (s = l.title) ? null : s,
            V = void 0 === (s = l.titleId) ? null : s,
            r = void 0 === (s = l.classes) ? [] : s,
            M = void 0 === (s = l.attributes) ? {} : s,
            h = void 0 === (s = l.styles) ? {} : s;
        if (c) {
            var n = c.prefix,
                i = c.iconName,
                m = c.icon;
            return K1(u({
                type: "icon"
            }, c), function() {
                return W1("beforeDOMElementCreation", {
                    iconDefinition: c,
                    params: l
                }), Q.autoA11y && (t ? M["aria-labelledby"] = "".concat(Q.replacementClass, "-title-").concat(V || l1()) : (M["aria-hidden"] = "true", M.focusable = "false")), $1({
                    icons: {
                        main: l2(m),
                        mask: e ? l2(e.icon) : {
                            found: !1,
                            width: null,
                            height: null,
                            icon: {}
                        }
                    },
                    prefix: n,
                    iconName: i,
                    transform: u(u({}, J), a),
                    symbol: z,
                    title: t,
                    maskId: H,
                    titleId: V,
                    extra: {
                        attributes: M,
                        styles: h,
                        classes: r
                    }
                })
            })
        }
    }
    var y2 = M(y2),
        r = {
            mixout: function() {
                return {
                    icon: (a = S2, function(c) {
                        var l = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                            s = (c || {}).icon ? c : X1(c || {}),
                            c = (c = l.mask) && ((c || {}).icon ? c : X1(c || {}));
                        return a(s, u(u({}, l), {}, {
                            mask: c
                        }))
                    })
                };
                var a
            },
            hooks: function() {
                return {
                    mutationObserverCallbacks: function(c) {
                        return c.treeCallback = w2, c.nodeCallback = k2, c
                    }
                }
            },
            provides: function(c) {
                c.i2svg = function(c) {
                    var l = c.node,
                        c = c.callback;
                    return w2(void 0 === l ? C : l, void 0 === c ? function() {} : c)
                }, c.generateSvgReplacementMutation = function(a, c) {
                    var z = c.iconName,
                        e = c.title,
                        H = c.titleId,
                        t = c.prefix,
                        V = c.transform,
                        r = c.symbol,
                        l = c.mask,
                        M = c.maskId,
                        h = c.extra;
                    return new Promise(function(s, c) {
                        Promise.all([a2(z, t), l.iconName ? a2(l.iconName, l.prefix) : Promise.resolve({
                            found: !1,
                            width: 512,
                            height: 512,
                            icon: {}
                        })]).then(function(c) {
                            var l = n(c, 2),
                                c = l[0],
                                l = l[1];
                            s([a, $1({
                                icons: {
                                    main: c,
                                    mask: l
                                },
                                prefix: t,
                                iconName: z,
                                transform: V,
                                symbol: r,
                                maskId: M,
                                title: e,
                                titleId: H,
                                extra: h,
                                watchable: !0
                            })])
                        }).catch(c)
                    })
                }, c.generateAbstractIcon = function(c) {
                    var l, s = c.children,
                        a = c.attributes,
                        z = c.main,
                        e = c.transform,
                        c = e1(c.styles);
                    return 0 < c.length && (a.style = c), H1(e) && (l = U1("generateAbstractTransformGrouping", {
                        main: z,
                        transform: e,
                        containerWidth: z.width,
                        iconWidth: z.width
                    })), s.push(l || z.icon), {
                        children: s,
                        attributes: a
                    }
                }
            }
        },
        l = {
            mixout: function() {
                return {
                    layer: function(c) {
                        var s = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                            l = s.classes,
                            a = void 0 === l ? [] : l;
                        return K1({
                            type: "layer"
                        }, function() {
                            W1("beforeDOMElementCreation", {
                                assembler: c,
                                params: s
                            });
                            var l = [];
                            return c(function(c) {
                                Array.isArray(c) ? c.map(function(c) {
                                    l = l.concat(c.abstract)
                                }) : l = l.concat(c.abstract)
                            }), [{
                                tag: "span",
                                attributes: {
                                    class: ["".concat(Q.cssPrefix, "-layers")].concat(M(a)).join(" ")
                                },
                                children: l
                            }]
                        })
                    }
                }
            }
        },
        h = {
            mixout: function() {
                return {
                    counter: function(z) {
                        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                            c = e.title,
                            H = void 0 === c ? null : c,
                            c = e.classes,
                            t = void 0 === c ? [] : c,
                            c = e.attributes,
                            V = void 0 === c ? {} : c,
                            c = e.styles,
                            r = void 0 === c ? {} : c;
                        return K1({
                            type: "counter",
                            content: z
                        }, function() {
                            return W1("beforeDOMElementCreation", {
                                content: z,
                                params: e
                            }), c = {
                                content: z.toString(),
                                title: H,
                                extra: {
                                    attributes: V,
                                    styles: r,
                                    classes: ["".concat(Q.cssPrefix, "-layers-counter")].concat(M(t))
                                }
                            }, l = c.content, s = c.title, a = c.extra, c = u(u(u({}, a.attributes), s ? {
                                title: s
                            } : {}), {}, {
                                class: a.classes.join(" ")
                            }), 0 < (a = e1(a.styles)).length && (c.style = a), (a = []).push({
                                tag: "span",
                                attributes: c,
                                children: [l]
                            }), s && a.push({
                                tag: "span",
                                attributes: {
                                    class: "sr-only"
                                },
                                children: [s]
                            }), a;
                            var c, l, s, a
                        })
                    }
                }
            }
        },
        i = {
            mixout: function() {
                return {
                    text: function(c) {
                        var l = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                            s = l.transform,
                            a = void 0 === s ? J : s,
                            s = l.title,
                            z = void 0 === s ? null : s,
                            s = l.classes,
                            e = void 0 === s ? [] : s,
                            s = l.attributes,
                            H = void 0 === s ? {} : s,
                            s = l.styles,
                            t = void 0 === s ? {} : s;
                        return K1({
                            type: "text",
                            content: c
                        }, function() {
                            return W1("beforeDOMElementCreation", {
                                content: c,
                                params: l
                            }), J1({
                                content: c,
                                transform: u(u({}, J), a),
                                title: z,
                                extra: {
                                    attributes: H,
                                    styles: t,
                                    classes: ["".concat(Q.cssPrefix, "-layers-text")].concat(M(e))
                                }
                            })
                        })
                    }
                }
            },
            provides: function(c) {
                c.generateLayersText = function(c, l) {
                    var s, a = l.title,
                        z = l.transform,
                        e = l.extra,
                        H = null,
                        t = null;
                    return d && (s = parseInt(getComputedStyle(c).fontSize, 10), H = (l = c.getBoundingClientRect()).width / s, t = l.height / s), Q.autoA11y && !a && (e.attributes["aria-hidden"] = "true"), Promise.resolve([c, J1({
                        content: c.innerHTML,
                        width: H,
                        height: t,
                        transform: z,
                        title: a,
                        extra: e,
                        watchable: !0
                    })])
                }
            }
        },
        A2 = new RegExp('"', "ug"),
        x2 = [1105920, 1112319];

    function q2(m, o) {
        var f = "".concat(w).concat(o.replace(":", "-"));
        return new Promise(function(s, c) {
            if (null !== m.getAttribute(f)) return s();
            var a, z, e, H, l, t, V, r = s1(m.children).filter(function(c) {
                    return c.getAttribute(y) === o
                })[0],
                M = v.getComputedStyle(m, o),
                h = M.getPropertyValue("font-family").match(F),
                n = M.getPropertyValue("font-weight"),
                i = M.getPropertyValue("content");
            if (r && !h) return m.removeChild(r), s();
            h && "none" !== i && "" !== i ? (t = M.getPropertyValue("content"), l = ~["Sharp"].indexOf(h[2]) ? j : O, a = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(h[2]) ? I[l][h[2].toLowerCase()] : _[l][n], i = (M = (M = (i = t).replace(A2, ""), l = 0, t = (n = M).length, V = 55296 <= (i = n.charCodeAt(l)) && i <= 56319 && l + 1 < t && 56320 <= (V = n.charCodeAt(l + 1)) && V <= 57343 ? 1024 * (i - 55296) + V - 56320 + 65536 : i, i = x2[0] <= V && V <= x2[1], {
                value: L1((V = 2 === M.length && M[0] === M[1]) ? M[0] : M),
                isSecondary: i || V
            })).value, V = M.isSecondary, M = h[0].startsWith("FontAwesome"), h = j1(a, i), z = h, M && (i = A1[M = i], M = j1("fas", M), (M = i || (M ? {
                prefix: "fas",
                iconName: M
            } : null) || {
                prefix: null,
                iconName: null
            }).iconName && M.prefix && (h = M.iconName, a = M.prefix)), !h || V || r && r.getAttribute(k) === a && r.getAttribute(S) === z ? s() : (m.setAttribute(f, z), r && m.removeChild(r), (H = (e = {
                iconName: null,
                title: null,
                titleId: null,
                prefix: null,
                transform: J,
                symbol: !1,
                mask: {
                    iconName: null,
                    prefix: null,
                    rest: []
                },
                maskId: null,
                extra: {
                    classes: [],
                    styles: {},
                    attributes: {}
                }
            }).extra).attributes[y] = o, a2(h, a).then(function(c) {
                var l = $1(u(u({}, e), {}, {
                        icons: {
                            main: c,
                            mask: E1()
                        },
                        prefix: a,
                        iconName: z,
                        extra: H,
                        watchable: !0
                    })),
                    c = C.createElement("svg");
                "::before" === o ? m.insertBefore(c, m.firstChild) : m.appendChild(c), c.outerHTML = l.map(o1).join("\n"), m.removeAttribute(f), s()
            }).catch(c))) : s()
        })
    }

    function Z2(c) {
        return Promise.all([q2(c, "::before"), q2(c, "::after")])
    }

    function O2(c) {
        return !(c.parentNode === document.head || ~q.indexOf(c.tagName.toUpperCase()) || c.getAttribute(y) || c.parentNode && "svg" === c.parentNode.tagName)
    }

    function j2(z) {
        if (L) return new Promise(function(c, l) {
            var s = s1(z.querySelectorAll("*")).filter(O2).map(Z2),
                a = V2.begin("searchPseudoElements");
            v2(), Promise.all(s).then(function() {
                a(), C2(), c()
            }).catch(function() {
                a(), C2(), l()
            })
        })
    }

    function P2(c) {
        return c.toLowerCase().split(" ").reduce(function(c, l) {
            var s = l.toLowerCase().split("-"),
                l = s[0],
                a = s.slice(1).join("-");
            if (l && "h" === a) return c.flipX = !0, c;
            if (l && "v" === a) return c.flipY = !0, c;
            if (a = parseFloat(a), isNaN(a)) return c;
            switch (l) {
                case "grow":
                    c.size = c.size + a;
                    break;
                case "shrink":
                    c.size = c.size - a;
                    break;
                case "left":
                    c.x = c.x - a;
                    break;
                case "right":
                    c.x = c.x + a;
                    break;
                case "up":
                    c.y = c.y - a;
                    break;
                case "down":
                    c.y = c.y + a;
                    break;
                case "rotate":
                    c.rotate = c.rotate + a
            }
            return c
        }, {
            size: 16,
            x: 0,
            y: 0,
            flipX: !1,
            flipY: !1,
            rotate: 0
        })
    }
    var N2 = !1,
        E2 = {
            x: 0,
            y: 0,
            width: "100%",
            height: "100%"
        };

    function I2(c) {
        return c.attributes && (c.attributes.fill || (!(1 < arguments.length && void 0 !== arguments[1]) || arguments[1])) && (c.attributes.fill = "black"), c
    }
    var T2;
    T2 = {
            mixoutsTo: G1
        }.mixoutsTo, V = [m, r, l, h, i, {
            hooks: function() {
                return {
                    mutationObserverCallbacks: function(c) {
                        return c.pseudoElementsCallback = j2, c
                    }
                }
            },
            provides: function(c) {
                c.pseudoElements2svg = function(c) {
                    c = c.node;
                    Q.searchPseudoElements && j2(void 0 === c ? C : c)
                }
            }
        }, {
            mixout: function() {
                return {
                    dom: {
                        unwatch: function() {
                            v2(), N2 = !0
                        }
                    }
                }
            },
            hooks: function() {
                return {
                    bootstrap: function() {
                        u2(_1("mutationObserverCallbacks", {}))
                    },
                    noAuto: function() {
                        L2 && L2.disconnect()
                    },
                    watch: function(c) {
                        c = c.observeMutationsRoot;
                        N2 ? C2() : u2(_1("mutationObserverCallbacks", {
                            observeMutationsRoot: c
                        }))
                    }
                }
            }
        }, {
            mixout: function() {
                return {
                    parse: {
                        transform: P2
                    }
                }
            },
            hooks: function() {
                return {
                    parseNodeAttributes: function(c, l) {
                        l = l.getAttribute("data-fa-transform");
                        return l && (c.transform = P2(l)), c
                    }
                }
            },
            provides: function(c) {
                c.generateAbstractTransformGrouping = function(c) {
                    var l = c.main,
                        s = c.transform,
                        a = c.containerWidth,
                        z = c.iconWidth,
                        e = {
                            transform: "translate(".concat(a / 2, " 256)")
                        },
                        c = "translate(".concat(32 * s.x, ", ").concat(32 * s.y, ") "),
                        a = "scale(".concat(s.size / 16 * (s.flipX ? -1 : 1), ", ").concat(s.size / 16 * (s.flipY ? -1 : 1), ") "),
                        s = "rotate(".concat(s.rotate, " 0 0)"),
                        z = {
                            outer: e,
                            inner: {
                                transform: "".concat(c, " ").concat(a, " ").concat(s)
                            },
                            path: {
                                transform: "translate(".concat(z / 2 * -1, " -256)")
                            }
                        };
                    return {
                        tag: "g",
                        attributes: u({}, z.outer),
                        children: [{
                            tag: "g",
                            attributes: u({}, z.inner),
                            children: [{
                                tag: l.icon.tag,
                                children: l.icon.children,
                                attributes: u(u({}, l.icon.attributes), z.path)
                            }]
                        }]
                    }
                }
            }
        }, {
            hooks: function() {
                return {
                    parseNodeAttributes: function(c, l) {
                        var s = l.getAttribute("data-fa-mask"),
                            s = s ? D1(s.split(" ").map(function(c) {
                                return c.trim()
                            })) : E1();
                        return s.prefix || (s.prefix = y1), c.mask = s, c.maskId = l.getAttribute("data-fa-mask-id"), c
                    }
                }
            },
            provides: function(c) {
                c.generateAbstractMask = function(c) {
                    var l = c.children,
                        s = c.attributes,
                        a = c.main,
                        z = c.mask,
                        e = c.maskId,
                        H = c.transform,
                        t = a.width,
                        V = a.icon,
                        r = z.width,
                        c = z.icon,
                        H = (z = (a = {
                            transform: H,
                            containerWidth: r,
                            iconWidth: t
                        }).transform, H = a.containerWidth, r = a.iconWidth, t = {
                            transform: "translate(".concat(H / 2, " 256)")
                        }, a = "translate(".concat(32 * z.x, ", ").concat(32 * z.y, ") "), H = "scale(".concat(z.size / 16 * (z.flipX ? -1 : 1), ", ").concat(z.size / 16 * (z.flipY ? -1 : 1), ") "), z = "rotate(".concat(z.rotate, " 0 0)"), {
                            outer: t,
                            inner: {
                                transform: "".concat(a, " ").concat(H, " ").concat(z)
                            },
                            path: {
                                transform: "translate(".concat(r / 2 * -1, " -256)")
                            }
                        }),
                        z = {
                            tag: "rect",
                            attributes: u(u({}, E2), {}, {
                                fill: "white"
                            })
                        },
                        r = V.children ? {
                            children: V.children.map(I2)
                        } : {},
                        r = {
                            tag: "g",
                            attributes: u({}, H.inner),
                            children: [I2(u({
                                tag: V.tag,
                                attributes: u(u({}, V.attributes), H.path)
                            }, r))]
                        },
                        H = {
                            tag: "g",
                            attributes: u({}, H.outer),
                            children: [r]
                        },
                        r = "mask-".concat(e || l1()),
                        e = "clip-".concat(e || l1()),
                        H = {
                            tag: "mask",
                            attributes: u(u({}, E2), {}, {
                                id: r,
                                maskUnits: "userSpaceOnUse",
                                maskContentUnits: "userSpaceOnUse"
                            }),
                            children: [z, H]
                        },
                        H = {
                            tag: "defs",
                            children: [{
                                tag: "clipPath",
                                attributes: {
                                    id: e
                                },
                                children: "g" === (c = c).tag ? c.children : [c]
                            }, H]
                        };
                    return l.push(H, {
                        tag: "rect",
                        attributes: u({
                            fill: "currentColor",
                            "clip-path": "url(#".concat(e, ")"),
                            mask: "url(#".concat(r, ")")
                        }, E2)
                    }), {
                        children: l,
                        attributes: s
                    }
                }
            }
        }, {
            provides: function(c) {
                var e = !1;
                v.matchMedia && (e = v.matchMedia("(prefers-reduced-motion: reduce)").matches), c.missingIconAbstract = function() {
                    var c = [],
                        l = {
                            fill: "currentColor"
                        },
                        s = {
                            attributeType: "XML",
                            repeatCount: "indefinite",
                            dur: "2s"
                        };
                    c.push({
                        tag: "path",
                        attributes: u(u({}, l), {}, {
                            d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
                        })
                    });
                    var a = u(u({}, s), {}, {
                            attributeName: "opacity"
                        }),
                        z = {
                            tag: "circle",
                            attributes: u(u({}, l), {}, {
                                cx: "256",
                                cy: "364",
                                r: "28"
                            }),
                            children: []
                        };
                    return e || z.children.push({
                        tag: "animate",
                        attributes: u(u({}, s), {}, {
                            attributeName: "r",
                            values: "28;14;28;28;14;28;"
                        })
                    }, {
                        tag: "animate",
                        attributes: u(u({}, a), {}, {
                            values: "1;0;1;1;0;1;"
                        })
                    }), c.push(z), c.push({
                        tag: "path",
                        attributes: u(u({}, l), {}, {
                            opacity: "1",
                            d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
                        }),
                        children: e ? [] : [{
                            tag: "animate",
                            attributes: u(u({}, a), {}, {
                                values: "1;0;0;0;0;1;"
                            })
                        }]
                    }), e || c.push({
                        tag: "path",
                        attributes: u(u({}, l), {}, {
                            opacity: "0",
                            d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
                        }),
                        children: [{
                            tag: "animate",
                            attributes: u(u({}, a), {}, {
                                values: "0;0;1;1;0;0;"
                            })
                        }]
                    }), {
                        tag: "g",
                        attributes: {
                            class: "missing"
                        },
                        children: c
                    }
                }
            }
        }, {
            hooks: function() {
                return {
                    parseNodeAttributes: function(c, l) {
                        l = l.getAttribute("data-fa-symbol");
                        return c.symbol = null !== l && ("" === l || l), c
                    }
                }
            }
        }], Y1 = {}, Object.keys(R1).forEach(function(c) {
            -1 === F1.indexOf(c) && delete R1[c]
        }), V.forEach(function(c) {
            var l, s = c.mixout ? c.mixout() : {};
            Object.keys(s).forEach(function(l) {
                "function" == typeof s[l] && (T2[l] = s[l]), "object" === z(s[l]) && Object.keys(s[l]).forEach(function(c) {
                    T2[l] || (T2[l] = {}), T2[l][c] = s[l][c]
                })
            }), c.hooks && (l = c.hooks(), Object.keys(l).forEach(function(c) {
                Y1[c] || (Y1[c] = []), Y1[c].push(l[c])
            })), c.provides && c.provides(R1)
        }),
        function(c) {
            try {
                for (var l = arguments.length, s = new Array(1 < l ? l - 1 : 0), a = 1; a < l; a++) s[a - 1] = arguments[a];
                c.apply(void 0, s)
            } catch (c) {
                if (!Z) throw c
            }
        }(function(c) {
            f && (v.FontAwesome || (v.FontAwesome = G1), m1(function() {
                Q1(), W1("bootstrap")
            })), h1.hooks = u(u({}, h1.hooks), {}, {
                addPack: function(c, l) {
                    h1.styles[c] = u(u({}, h1.styles[c] || {}), l), O1(), Q1()
                },
                addPacks: function(c) {
                    c.forEach(function(c) {
                        var l = n(c, 2),
                            c = l[0],
                            l = l[1];
                        h1.styles[c] = u(u({}, h1.styles[c] || {}), l)
                    }), O1(), Q1()
                },
                addShims: function(c) {
                    var l;
                    (l = h1.shims).push.apply(l, M(c)), O1(), Q1()
                }
            })
        })
}();