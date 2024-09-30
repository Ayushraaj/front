"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-wrap-balancer";
exports.ids = ["vendor-chunks/react-wrap-balancer"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-wrap-balancer/dist/index.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/react-wrap-balancer/dist/index.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Balancer: () => (/* binding */ P),\n/* harmony export */   Provider: () => (/* binding */ Y),\n/* harmony export */   \"default\": () => (/* binding */ A)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* __next_internal_client_entry_do_not_use__ Balancer,Provider,default auto */ \n\nvar E = \"undefined\" == \"undefined\", m = E ? react__WEBPACK_IMPORTED_MODULE_0__.useEffect : react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect, B = 0, _ = ()=>++B, v = !1;\nfunction O() {\n    let [n, r] = react__WEBPACK_IMPORTED_MODULE_0__.useState(v ? _ : void 0);\n    return m(()=>{\n        n === void 0 && r(_()), v = !0;\n    }, []), n === void 0 ? n : `rwb-${n.toString(32)}`;\n}\nfunction R() {\n    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>\"useId\" in react__WEBPACK_IMPORTED_MODULE_0__ ? react__WEBPACK_IMPORTED_MODULE_0__.useId : O, [])();\n}\nvar y = \"__wrap_b\", f = \"__wrap_n\", S = \"__wrap_o\", T = (n, r, e)=>{\n    e = e || document.querySelector(`[data-br=\"${n}\"]`);\n    let t = e == null ? void 0 : e.parentElement;\n    if (!t) return;\n    let l = (u)=>e.style.maxWidth = u + \"px\";\n    e.style.maxWidth = \"\";\n    let i = t.clientWidth, d = t.clientHeight, o = i / 2 - .25, s = i + .5, c;\n    if (i) {\n        for(l(o), o = Math.max(e.scrollWidth, o); o + 1 < s;)c = Math.round((o + s) / 2), l(c), t.clientHeight === d ? s = c : o = c;\n        l(s * r + i * (1 - r));\n    }\n    e.__wrap_o || (typeof ResizeObserver != \"undefined\" ? (e.__wrap_o = new ResizeObserver(()=>{\n        self.__wrap_b(0, +e.dataset.brr, e);\n    })).observe(t) :  true && console.warn(\"The browser you are using does not support the ResizeObserver API. Please consider add polyfill for this API to avoid potential layout shifts or upgrade your browser. Read more: https://github.com/shuding/react-wrap-balancer#browser-support-information\"));\n}, I = T.toString(), w = '(self.CSS&&CSS.supports(\"text-wrap\",\"balance\")?1:2)', g = (n, r, e = \"\")=>(e && (e = `self.${f}!=1&&${e}`), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"script\", {\n        suppressHydrationWarning: !0,\n        dangerouslySetInnerHTML: {\n            __html: (n ? \"\" : `self.${f}=self.${f}||${w};self.${y}=${I};`) + e\n        },\n        nonce: r\n    })), h = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext({\n    preferNative: !0,\n    hasProvider: !1\n}), Y = ({ preferNative: n = !0, nonce: r, children: e })=>{\n    let t = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>({\n            preferNative: n,\n            hasProvider: !0\n        }), [\n        n\n    ]);\n    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(h.Provider, {\n        value: t\n    }, g(!1, r), e);\n}, P = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(({ ratio: n = 1, preferNative: r, nonce: e, children: t, as: l, ...i }, d)=>{\n    let o = R(), s = react__WEBPACK_IMPORTED_MODULE_0__.useRef(), c = react__WEBPACK_IMPORTED_MODULE_0__.useContext(h), u = r != null ? r : c.preferNative, x = l || \"span\";\n    return react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(d, ()=>s.current, []), m(()=>{\n        u && self[f] === 1 || s.current && (self[y] = T)(0, n, s.current);\n    }, [\n        t,\n        u,\n        n\n    ]), m(()=>{\n        if (!(u && self[f] === 1)) return ()=>{\n            if (!s.current) return;\n            let b = s.current[S];\n            b && (b.disconnect(), delete s.current[S]);\n        };\n    }, [\n        u\n    ]),  true && t && !Array.isArray(t) && typeof t == \"object\" && \"type\" in t && typeof t.type == \"string\" && t.type !== \"span\" && console.warn(`<Balancer> should not wrap <${t.type}> inside. Instead, it should directly wrap text or inline nodes.\n\nTry changing this:\n  <Balancer><${t.type}>content</${t.type}></Balancer>\nTo:\n  <${t.type}><Balancer>content</Balancer></${t.type}>`), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(x, {\n        ...i,\n        \"data-br\": o,\n        \"data-brr\": n,\n        ref: s,\n        style: {\n            display: \"inline-block\",\n            verticalAlign: \"top\",\n            textDecoration: \"inherit\",\n            textWrap: u ? \"balance\" : \"initial\"\n        },\n        suppressHydrationWarning: !0\n    }, t), g(c.hasProvider, e, `self.${y}(\"${o}\",${n})`));\n});\nif (!E && \"development\" !== \"production\") {\n    let n = document.querySelector(\"[data-next-hide-fouc]\");\n    if (n) {\n        let r = (t)=>{\n            for (let l of t)for (let i of Array.from(l.removedNodes)){\n                if (i !== n) continue;\n                e.disconnect();\n                let d = document.querySelectorAll(\"[data-br]\");\n                for (let o of Array.from(d))self[y](0, +o.dataset.brr, o);\n            }\n        }, e = new MutationObserver(r);\n        e.observe(document.head, {\n            childList: !0\n        });\n    }\n}\nvar A = P;\n //# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3Qtd3JhcC1iYWxhbmNlci9kaXN0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OytFQ0FBO0FBRU87QUFBQSxJQUFNQyxJQUFZLGVBQWtCLGFBQzlCQyxJQUE0QkQsSUFDckNELDRDQUFNLEdBQ05BLGtEQUFNLEVBRU5LLElBQUssR0FDSEMsSUFBUSxJQUFNLEVBQUVELEdBQ2xCRSxJQUF3QjtBQUU1QixTQUFTQztJQUNQLElBQU0sQ0FBQ0MsR0FBSUMsRUFBSyxHQUFJViwyQ0FBTSxDQUFTTyxJQUF3QkQsSUFBUTtJQVVuRSxPQVJBSixFQUEwQjtRQUNwQk8sTUFBTyxVQUNUQyxFQUFNSixNQUdSQyxJQUF3QjtJQUMxQixHQUFHLEVBQUUsR0FFREUsTUFBTyxTQUNGQSxJQUdGLE9BQU9BLEVBQUdHLFFBQUEsQ0FBUyxJQUFFLENBQzlCO0FBQUE7QUFhTyxTQUFTQztJQU1kLE9BTHVCYiwwQ0FBTSxDQUFRLElBQy9CLDZDQUFXQSxHQUFjQSx3Q0FBTSxHQUM1QlEsR0FDTixFQUFFO0FBR1A7QUQxQ0EsSUFBTU8sSUFBYSxZQUNiQyxJQUFvQixZQUNwQkMsSUFBc0IsWUF1QnRCQyxJQUF1QixDQUFDVCxHQUFJVSxHQUFPQztJQUN2Q0EsSUFDRUEsS0FBV0MsU0FBU0MsYUFBQSxDQUE4QixhQUFhYixFQUFBQSxFQUFBQSxDQUFNO0lBQ3ZFLElBQU1jLElBQVlILEtBQUEsZ0JBQUFBLEVBQVNJLGFBQUE7SUFFM0IsSUFBSSxDQUFDRCxHQUFhO0lBRWxCLElBQU1FLElBQVVDLENBQUFBLElBQW1CTixFQUFRTyxLQUFBLENBQU1DLFFBQUEsR0FBV0YsSUFBUTtJQUdwRU4sRUFBUU8sS0FBQSxDQUFNQyxRQUFBLEdBQVc7SUFHekIsSUFBTUYsSUFBUUgsRUFBVU0sV0FBQSxFQUNsQkMsSUFBU1AsRUFBVVEsWUFBQSxFQUdyQkMsSUFBZ0JOLElBQVEsSUFBSSxLQUM1Qk8sSUFBZ0JQLElBQVEsSUFDeEJRO0lBRUosSUFB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SUFBTWlCLElBQ0o1RSxTQUFTNkUsZ0JBQUEsQ0FBaUM7Z0JBRTVDLFNBQVdDLEtBQVdsQixNQUFNYSxJQUFBLENBQUtHLEdBQy9CeEQsSUFBQSxDQUFLMUIsRUFBVSxDQUFFLEdBQUcsQ0FBQ29GLEVBQVF4RCxPQUFBLENBQVFDLEdBQUEsRUFBS3VEO1lBQU87UUFJekQsR0FDTUgsSUFBVyxJQUFJSSxpQkFBaUJWO1FBQ3RDTSxFQUFTbkQsT0FBQSxDQUFReEIsU0FBU2dGLElBQUEsRUFBTTtZQUFFQyxXQUFXO1FBQUs7SUFBQztBQUFBO0FBSXZELElBQU9DLElBQVFwQztBQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xwLWZhc3QvLi4vc3JjL2luZGV4LnRzeD9kMGUwIiwid2VicGFjazovL2xwLWZhc3QvLi4vc3JjL3V0aWxzLnRzeD9iODczIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VJZCwgSVNfU0VSVkVSLCB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0IH0gZnJvbSAnLi91dGlscydcblxuY29uc3QgU1lNQk9MX0tFWSA9ICdfX3dyYXBfYidcbmNvbnN0IFNZTUJPTF9OQVRJVkVfS0VZID0gJ19fd3JhcF9uJ1xuY29uc3QgU1lNQk9MX09CU0VSVkVSX0tFWSA9ICdfX3dyYXBfbydcblxuaW50ZXJmYWNlIFdyYXBwZXJFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBbU1lNQk9MX09CU0VSVkVSX0tFWV0/OiBSZXNpemVPYnNlcnZlciB8IHVuZGVmaW5lZFxufVxuXG50eXBlIFJlbGF5b3V0Rm4gPSAoXG4gIGlkOiBzdHJpbmcgfCBudW1iZXIsXG4gIHJhdGlvOiBudW1iZXIsXG4gIHdyYXBwZXI/OiBXcmFwcGVyRWxlbWVudFxuKSA9PiB2b2lkXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgW1NZTUJPTF9LRVldOiBSZWxheW91dEZuXG4gICAgLy8gQSBmbGFnIHRvIGluZGljYXRlIHdoZXRoZXIgdGhlIGJyb3dzZXIgc3VwcG9ydHMgdGV4dC1iYWxhbmNpbmcgbmF0aXZlbHkuXG4gICAgLy8gdW5kZWZpbmVkOiBub3QgaW5qZWN0ZWRcbiAgICAvLyAxOiBpbmplY3RlZCBhbmQgc3VwcG9ydGVkXG4gICAgLy8gMjogaW5qZWN0ZWQgYnV0IG5vdCBzdXBwb3J0ZWRcbiAgICBbU1lNQk9MX05BVElWRV9LRVldPzogbnVtYmVyXG4gIH1cbn1cblxuY29uc3QgcmVsYXlvdXQ6IFJlbGF5b3V0Rm4gPSAoaWQsIHJhdGlvLCB3cmFwcGVyKSA9PiB7XG4gIHdyYXBwZXIgPVxuICAgIHdyYXBwZXIgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxXcmFwcGVyRWxlbWVudD4oYFtkYXRhLWJyPVwiJHtpZH1cIl1gKVxuICBjb25zdCBjb250YWluZXIgPSB3cmFwcGVyPy5wYXJlbnRFbGVtZW50XG5cbiAgaWYgKCFjb250YWluZXIpIHsgcmV0dXJuOyB9XG5cbiAgY29uc3QgdXBkYXRlID0gKHdpZHRoOiBudW1iZXIpID0+ICh3cmFwcGVyLnN0eWxlLm1heFdpZHRoID0gd2lkdGggKyAncHgnKVxuXG4gIC8vIFJlc2V0IHdyYXBwZXIgd2lkdGhcbiAgd3JhcHBlci5zdHlsZS5tYXhXaWR0aCA9ICcnXG5cbiAgLy8gR2V0IHRoZSBpbml0aWFsIGNvbnRhaW5lciBzaXplXG4gIGNvbnN0IHdpZHRoID0gY29udGFpbmVyLmNsaWVudFdpZHRoXG4gIGNvbnN0IGhlaWdodCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHRcblxuICAvLyBTeW5jaHJvbm91c2x5IGRvIGJpbmFyeSBzZWFyY2ggYW5kIGNhbGN1bGF0ZSB0aGUgbGF5b3V0XG4gIGxldCBsb3dlcjogbnVtYmVyID0gd2lkdGggLyAyIC0gMC4yNVxuICBsZXQgdXBwZXI6IG51bWJlciA9IHdpZHRoICsgMC41XG4gIGxldCBtaWRkbGU6IG51bWJlclxuXG4gIGlmICh3aWR0aCkge1xuICAgIC8vIEVuc3VyZSB3ZSBkb24ndCBzZWFyY2ggd2lkdGhzIGxvd2VyIHRoYW4gd2hlbiB0aGUgdGV4dCBvdmVyZmxvd3NcbiAgICB1cGRhdGUobG93ZXIpXG4gICAgbG93ZXIgPSBNYXRoLm1heCh3cmFwcGVyLnNjcm9sbFdpZHRoLCBsb3dlcilcblxuICAgIHdoaWxlIChsb3dlciArIDEgPCB1cHBlcikge1xuICAgICAgbWlkZGxlID0gTWF0aC5yb3VuZCgobG93ZXIgKyB1cHBlcikgLyAyKVxuICAgICAgdXBkYXRlKG1pZGRsZSlcbiAgICAgIGlmIChjb250YWluZXIuY2xpZW50SGVpZ2h0ID09PSBoZWlnaHQpIHtcbiAgICAgICAgdXBwZXIgPSBtaWRkbGVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvd2VyID0gbWlkZGxlXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHRoZSB3cmFwcGVyIHdpZHRoXG4gICAgdXBkYXRlKHVwcGVyICogcmF0aW8gKyB3aWR0aCAqICgxIC0gcmF0aW8pKVxuICB9XG5cbiAgLy8gQ3JlYXRlIGEgbmV3IG9ic2VydmVyIGlmIHdlIGRvbid0IGhhdmUgb25lLlxuICAvLyBOb3RlIHRoYXQgd2UgbXVzdCBpbmxpbmUgdGhlIGtleSBoZXJlIGFzIHdlIHVzZSBgdG9TdHJpbmcoKWAgdG8gc2VyaWFsaXplXG4gIC8vIHRoZSBmdW5jdGlvbi5cbiAgaWYgKCF3cmFwcGVyWydfX3dyYXBfbyddKSB7XG4gICAgaWYgKHR5cGVvZiBSZXNpemVPYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIDsod3JhcHBlclsnX193cmFwX28nXSA9IG5ldyBSZXNpemVPYnNlcnZlcigoKSA9PiB7XG4gICAgICAgIHNlbGYuX193cmFwX2IoMCwgK3dyYXBwZXIuZGF0YXNldC5icnIsIHdyYXBwZXIpXG4gICAgICB9KSkub2JzZXJ2ZShjb250YWluZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNpbGVudGx5IGlnbm9yZSBSZXNpemVPYnNlcnZlciBmb3IgcHJvZHVjdGlvbiBidWlsZHNcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ1RoZSBicm93c2VyIHlvdSBhcmUgdXNpbmcgZG9lcyBub3Qgc3VwcG9ydCB0aGUgUmVzaXplT2JzZXJ2ZXIgQVBJLiAnICtcbiAgICAgICAgICAgICdQbGVhc2UgY29uc2lkZXIgYWRkIHBvbHlmaWxsIGZvciB0aGlzIEFQSSB0byBhdm9pZCBwb3RlbnRpYWwgbGF5b3V0IHNoaWZ0cyBvciB1cGdyYWRlIHlvdXIgYnJvd3Nlci4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlOiBodHRwczovL2dpdGh1Yi5jb20vc2h1ZGluZy9yZWFjdC13cmFwLWJhbGFuY2VyI2Jyb3dzZXItc3VwcG9ydC1pbmZvcm1hdGlvbidcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBSRUxBWU9VVF9TVFIgPSByZWxheW91dC50b1N0cmluZygpXG5cbmNvbnN0IGlzVGV4dFdyYXBCYWxhbmNlU3VwcG9ydGVkID0gYChzZWxmLkNTUyYmQ1NTLnN1cHBvcnRzKFwidGV4dC13cmFwXCIsXCJiYWxhbmNlXCIpPzE6MilgXG5cbmNvbnN0IGNyZWF0ZVNjcmlwdEVsZW1lbnQgPSAoXG4gIGluamVjdGVkOiBib29sZWFuLFxuICBub25jZT86IHN0cmluZyxcbiAgc3VmZml4OiBzdHJpbmcgPSAnJ1xuKSA9PiB7XG4gIGlmIChzdWZmaXgpIHtcbiAgICBzdWZmaXggPSBgc2VsZi4ke1NZTUJPTF9OQVRJVkVfS0VZfSE9MSYmJHtzdWZmaXh9YFxuICB9XG4gIHJldHVybiAoXG4gICAgPHNjcmlwdFxuICAgICAgc3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nXG4gICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIGJhbGFuY2UgaW5pdGlhbGx5IGZvciBTU1JcbiAgICAgICAgX19odG1sOlxuICAgICAgICAgIChpbmplY3RlZFxuICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgOiBgc2VsZi4ke1NZTUJPTF9OQVRJVkVfS0VZfT1zZWxmLiR7U1lNQk9MX05BVElWRV9LRVl9fHwke2lzVGV4dFdyYXBCYWxhbmNlU3VwcG9ydGVkfTtzZWxmLiR7U1lNQk9MX0tFWX09JHtSRUxBWU9VVF9TVFJ9O2ApICtcbiAgICAgICAgICBzdWZmaXgsXG4gICAgICB9fVxuICAgICAgbm9uY2U9e25vbmNlfVxuICAgIC8+XG4gIClcbn1cblxuaW50ZXJmYWNlIEJhbGFuY2VyT3duUHJvcHM8XG4gIEVsZW1lbnRUeXBlIGV4dGVuZHMgUmVhY3QuRWxlbWVudFR5cGUgPSBSZWFjdC5FbGVtZW50VHlwZVxuPiBleHRlbmRzIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PiB7XG4gIC8qKlxuICAgKiBUaGUgSFRNTCB0YWcgdG8gdXNlIGZvciB0aGUgd3JhcHBlciBlbGVtZW50LlxuICAgKiBAZGVmYXVsdCAnc3BhbidcbiAgICovXG4gIGFzPzogRWxlbWVudFR5cGVcbiAgLyoqXG4gICAqIFRoZSBiYWxhbmNlIHJhdGlvIG9mIHRoZSB3cmFwcGVyIHdpZHRoICgwIDw9IHJhdGlvIDw9IDEpLlxuICAgKiAwIG1lYW5zIHRoZSB3cmFwcGVyIHdpZHRoIGlzIHRoZSBzYW1lIGFzIHRoZSBjb250YWluZXIgd2lkdGggKG5vIGJhbGFuY2UsIGJyb3dzZXIgZGVmYXVsdCkuXG4gICAqIDEgbWVhbnMgdGhlIHdyYXBwZXIgd2lkdGggaXMgdGhlIG1pbmltdW0gKGZ1bGwgYmFsYW5jZSwgbW9zdCBjb21wYWN0KS5cbiAgICogQGRlZmF1bHQgMVxuICAgKi9cbiAgcmF0aW8/OiBudW1iZXJcbiAgLyoqXG4gICAqIEFuIG9wdGlvbiB0byBza2lwIHRoZSByZS1iYWxhbmNlIGxvZ2ljXG4gICAqIGFuZCB1c2UgdGhlIG5hdGl2ZSBDU1MgdGV4dC1iYWxhbmNpbmcgaWYgc3VwcG9ydGVkLlxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqL1xuICBwcmVmZXJOYXRpdmU/OiBib29sZWFuXG4gIC8qKlxuICAgKiBUaGUgbm9uY2UgYXR0cmlidXRlIHRvIGFsbG93bGlzdCBpbmxpbmUgc2NyaXB0IGluamVjdGlvbiBieSB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgbm9uY2U/OiBzdHJpbmdcbn1cblxudHlwZSBCYWxhbmNlclByb3BzPEVsZW1lbnRUeXBlIGV4dGVuZHMgUmVhY3QuRWxlbWVudFR5cGU+ID1cbiAgQmFsYW5jZXJPd25Qcm9wczxFbGVtZW50VHlwZT4gJlxuICAgIE9taXQ8UmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPEVsZW1lbnRUeXBlPiwga2V5b2YgQmFsYW5jZXJPd25Qcm9wcz5cblxuLyoqXG4gKiBBbiBvcHRpb25hbCBwcm92aWRlciB0byBpbmplY3QgdGhlIGdsb2JhbCByZWxheW91dCBmdW5jdGlvbiwgc28gYWxsIGNoaWxkcmVuXG4gKiBCYWxhbmNlciBjb21wb25lbnRzIGNhbiBzaGFyZSBpdC5cbiAqL1xuY29uc3QgQmFsYW5jZXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDx7XG4gIHByZWZlck5hdGl2ZTogYm9vbGVhblxuICBoYXNQcm92aWRlcjogYm9vbGVhblxufT4oeyBwcmVmZXJOYXRpdmU6IHRydWUsIGhhc1Byb3ZpZGVyOiBmYWxzZSB9KVxuY29uc3QgUHJvdmlkZXI6IFJlYWN0LkZDPHtcbiAgLyoqXG4gICAqIEFuIG9wdGlvbiB0byBza2lwIHRoZSByZS1iYWxhbmNlIGxvZ2ljXG4gICAqIGFuZCB1c2UgdGhlIG5hdGl2ZSBDU1MgdGV4dC1iYWxhbmNpbmcgaWYgc3VwcG9ydGVkLlxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqL1xuICBwcmVmZXJOYXRpdmU/OiBib29sZWFuXG4gIC8qKlxuICAgKiBUaGUgbm9uY2UgYXR0cmlidXRlIHRvIGFsbG93bGlzdCBpbmxpbmUgc2NyaXB0IGluamVjdGlvbiBieSB0aGUgY29tcG9uZW50XG4gICAqL1xuICBub25jZT86IHN0cmluZ1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxufT4gPSAoeyBwcmVmZXJOYXRpdmUgPSB0cnVlLCBub25jZSwgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBjb250ZXh0VmFsdWUgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJlZmVyTmF0aXZlLFxuICAgICAgaGFzUHJvdmlkZXI6IHRydWUsXG4gICAgfVxuICB9LCBbcHJlZmVyTmF0aXZlXSlcbiAgcmV0dXJuIChcbiAgICA8QmFsYW5jZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0VmFsdWV9PlxuICAgICAge2NyZWF0ZVNjcmlwdEVsZW1lbnQoZmFsc2UsIG5vbmNlKX1cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0JhbGFuY2VyQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5jb25zdCBCYWxhbmNlciA9IFJlYWN0LmZvcndhcmRSZWYoXG4gIDxFbGVtZW50VHlwZSBleHRlbmRzIFJlYWN0LkVsZW1lbnRUeXBlID0gUmVhY3QuRWxlbWVudFR5cGU+KFxuICAgIHtcbiAgICAgIHJhdGlvID0gMSxcbiAgICAgIHByZWZlck5hdGl2ZSxcbiAgICAgIG5vbmNlLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBhcyxcbiAgICAgIC4uLnByb3BzXG4gICAgfTogQmFsYW5jZXJQcm9wczxFbGVtZW50VHlwZT4sXG4gICAgcmVmXG4gICkgPT4ge1xuICAgIGNvbnN0IGlkID0gdXNlSWQoKVxuICAgIGNvbnN0IHdyYXBwZXJSZWYgPSBSZWFjdC51c2VSZWY8V3JhcHBlckVsZW1lbnQ+KClcbiAgICBjb25zdCBjb250ZXh0VmFsdWUgPSBSZWFjdC51c2VDb250ZXh0KEJhbGFuY2VyQ29udGV4dClcbiAgICBjb25zdCBwcmVmZXJOYXRpdmVCYWxhbmNpbmcgPSBwcmVmZXJOYXRpdmUgPz8gY29udGV4dFZhbHVlLnByZWZlck5hdGl2ZVxuICAgIGNvbnN0IFdyYXBwZXI6IFJlYWN0LkVsZW1lbnRUeXBlID0gYXMgfHwgJ3NwYW4nXG5cbiAgICBSZWFjdC51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4gd3JhcHBlclJlZi5jdXJyZW50LCBbXSlcblxuICAgIC8vIFJlLWJhbGFuY2Ugb24gY29udGVudCBjaGFuZ2UgYW5kIG9uIG1vdW50L2h5ZHJhdGlvbi5cbiAgICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgIC8vIFNraXAgaWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgdGV4dC1iYWxhbmNpbmcgbmF0aXZlbHkuXG4gICAgICBpZiAocHJlZmVyTmF0aXZlQmFsYW5jaW5nICYmIHNlbGZbU1lNQk9MX05BVElWRV9LRVldID09PSAxKSByZXR1cm5cblxuICAgICAgaWYgKHdyYXBwZXJSZWYuY3VycmVudCkge1xuICAgICAgICAvLyBSZS1hc3NpZ24gdGhlIGZ1bmN0aW9uIGhlcmUgYXMgdGhlIGNvbXBvbmVudCBjYW4gYmUgZHluYW1pY2FsbHkgcmVuZGVyZWQsIGFuZCBzY3JpcHQgdGFnIHdvbid0IHdvcmsgaW4gdGhhdCBjYXNlLlxuICAgICAgICA7KHNlbGZbU1lNQk9MX0tFWV0gPSByZWxheW91dCkoMCwgcmF0aW8sIHdyYXBwZXJSZWYuY3VycmVudClcbiAgICAgIH1cbiAgICB9LCBbY2hpbGRyZW4sIHByZWZlck5hdGl2ZUJhbGFuY2luZywgcmF0aW9dKVxuXG4gICAgLy8gUmVtb3ZlIHRoZSBvYnNlcnZlciB3aGVuIHVubW91bnRpbmcuXG4gICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAvLyBTa2lwIGlmIHRoZSBicm93c2VyIHN1cHBvcnRzIHRleHQtYmFsYW5jaW5nIG5hdGl2ZWx5LlxuICAgICAgaWYgKHByZWZlck5hdGl2ZUJhbGFuY2luZyAmJiBzZWxmW1NZTUJPTF9OQVRJVkVfS0VZXSA9PT0gMSkgcmV0dXJuXG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmICghd3JhcHBlclJlZi5jdXJyZW50KSByZXR1cm5cblxuICAgICAgICBjb25zdCByZXNpemVPYnNlcnZlciA9IHdyYXBwZXJSZWYuY3VycmVudFtTWU1CT0xfT0JTRVJWRVJfS0VZXVxuICAgICAgICBpZiAoIXJlc2l6ZU9ic2VydmVyKSByZXR1cm5cblxuICAgICAgICByZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgICAgZGVsZXRlIHdyYXBwZXJSZWYuY3VycmVudFtTWU1CT0xfT0JTRVJWRVJfS0VZXVxuICAgICAgfVxuICAgIH0sIFtwcmVmZXJOYXRpdmVCYWxhbmNpbmddKVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAvLyBJbiBkZXZlbG9wbWVudCwgd2UgY2hlY2sgYGNoaWxkcmVuYCdzIHR5cGUgdG8gZW5zdXJlIHdlIGFyZSBub3Qgd3JhcHBpbmdcbiAgICAgIC8vIGVsZW1lbnRzIGxpa2UgPHA+IG9yIDxoMT4gaW5zaWRlLiBJbnN0ZWFkIDxCYWxhbmNlcj4gc2hvdWxkIGRpcmVjdGx5XG4gICAgICAvLyB3cmFwIHRleHQgbm9kZXMuXG4gICAgICBpZiAoXG4gICAgICAgIGNoaWxkcmVuICYmXG4gICAgICAgICFBcnJheS5pc0FycmF5KGNoaWxkcmVuKSAmJlxuICAgICAgICB0eXBlb2YgY2hpbGRyZW4gPT09ICdvYmplY3QnXG4gICAgICApIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICd0eXBlJyBpbiBjaGlsZHJlbiAmJlxuICAgICAgICAgIHR5cGVvZiBjaGlsZHJlbi50eXBlID09PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIGNoaWxkcmVuLnR5cGUgIT09ICdzcGFuJ1xuICAgICAgICApIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgPEJhbGFuY2VyPiBzaG91bGQgbm90IHdyYXAgPCR7Y2hpbGRyZW4udHlwZX0+IGluc2lkZS4gSW5zdGVhZCwgaXQgc2hvdWxkIGRpcmVjdGx5IHdyYXAgdGV4dCBvciBpbmxpbmUgbm9kZXMuXG5cblRyeSBjaGFuZ2luZyB0aGlzOlxuICA8QmFsYW5jZXI+PCR7Y2hpbGRyZW4udHlwZX0+Y29udGVudDwvJHtjaGlsZHJlbi50eXBlfT48L0JhbGFuY2VyPlxuVG86XG4gIDwke2NoaWxkcmVuLnR5cGV9PjxCYWxhbmNlcj5jb250ZW50PC9CYWxhbmNlcj48LyR7Y2hpbGRyZW4udHlwZX0+YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8V3JhcHBlclxuICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICBkYXRhLWJyPXtpZH1cbiAgICAgICAgICBkYXRhLWJycj17cmF0aW99XG4gICAgICAgICAgcmVmPXt3cmFwcGVyUmVmfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgICAgICAgdGV4dERlY29yYXRpb246ICdpbmhlcml0JyxcbiAgICAgICAgICAgIHRleHRXcmFwOiBwcmVmZXJOYXRpdmVCYWxhbmNpbmcgPyAnYmFsYW5jZScgOiAnaW5pdGlhbCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmdcbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9XcmFwcGVyPlxuICAgICAgICB7Y3JlYXRlU2NyaXB0RWxlbWVudChcbiAgICAgICAgICBjb250ZXh0VmFsdWUuaGFzUHJvdmlkZXIsXG4gICAgICAgICAgbm9uY2UsXG4gICAgICAgICAgYHNlbGYuJHtTWU1CT0xfS0VZfShcIiR7aWR9XCIsJHtyYXRpb30pYFxuICAgICAgICApfVxuICAgICAgPC8+XG4gICAgKVxuICB9XG4pXG5cbi8vIEFzIE5leHQuanMgYWRkcyBgZGlzcGxheTogbm9uZWAgdG8gYGJvZHlgIGZvciBkZXZlbG9wbWVudCwgd2UgbmVlZCB0byB0cmlnZ2VyXG4vLyBhIHJlLWJhbGFuY2UgcmlnaHQgYWZ0ZXIgdGhlIHN0eWxlIGlzIHJlbW92ZWQsIHN5bmNocm9ub3VzbHkuXG5pZiAoIUlTX1NFUlZFUiAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGNvbnN0IG5leHRfZGV2X3N0eWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXG4gICAgJ1tkYXRhLW5leHQtaGlkZS1mb3VjXSdcbiAgKVxuICBpZiAobmV4dF9kZXZfc3R5bGUpIHtcbiAgICBjb25zdCBjYWxsYmFjazogTXV0YXRpb25DYWxsYmFjayA9IChtdXRhdGlvbkxpc3QpID0+IHtcbiAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25MaXN0KSB7XG4gICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBBcnJheS5mcm9tKG11dGF0aW9uLnJlbW92ZWROb2RlcykpIHtcbiAgICAgICAgICBpZiAobm9kZSAhPT0gbmV4dF9kZXZfc3R5bGUpIGNvbnRpbnVlXG5cbiAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgICAgICBjb25zdCBlbGVtZW50cyA9XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPFdyYXBwZXJFbGVtZW50PignW2RhdGEtYnJdJylcblxuICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBBcnJheS5mcm9tKGVsZW1lbnRzKSkge1xuICAgICAgICAgICAgc2VsZltTWU1CT0xfS0VZXSgwLCArZWxlbWVudC5kYXRhc2V0LmJyciwgZWxlbWVudClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihjYWxsYmFjaylcbiAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmhlYWQsIHsgY2hpbGRMaXN0OiB0cnVlIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFsYW5jZXJcbmV4cG9ydCB7IFByb3ZpZGVyLCBCYWxhbmNlciwgQmFsYW5jZXJPd25Qcm9wcyB9XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBjb25zdCBJU19TRVJWRVIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgPSBJU19TRVJWRVJcbiAgPyBSZWFjdC51c2VFZmZlY3RcbiAgOiBSZWFjdC51c2VMYXlvdXRFZmZlY3RcblxubGV0IElEID0gMFxuY29uc3QgZ2VuSWQgPSAoKSA9PiArK0lEXG5sZXQgc2VydmVySGFuZG9mZkNvbXBsZXRlID0gZmFsc2VcblxuZnVuY3Rpb24gdXNlSWRQb2x5ZmlsbCgpIHtcbiAgY29uc3QgW2lkLCBzZXRJZF0gPSBSZWFjdC51c2VTdGF0ZShzZXJ2ZXJIYW5kb2ZmQ29tcGxldGUgPyBnZW5JZCA6IHVuZGVmaW5lZClcblxuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2V0SWQoZ2VuSWQoKSlcbiAgICB9XG5cbiAgICBzZXJ2ZXJIYW5kb2ZmQ29tcGxldGUgPSB0cnVlXG4gIH0sIFtdKVxuXG4gIGlmIChpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGlkXG4gIH1cblxuICByZXR1cm4gYHJ3Yi0ke2lkLnRvU3RyaW5nKDMyKX1gXG59XG5cbi8qKlxuICogQSBob29rIGZvciBnZW5lcmF0aW5nIHVuaXF1ZSBJRHMgdGhhdCBhcmUgc3RhYmxlIGFjcm9zcyB0aGUgc2VydmVyIGFuZCBjbGllbnQsXG4gKiB3aGlsZSBhdm9pZGluZyBoeWRyYXRpb24gbWlzbWF0Y2hlcy4gQ29tcGF0aWJsZSB3aXRoIFJlYWN0IDE2KyBieSB1c2luZ1xuICogW1JlYWN0IDE4J3MgdXNlSWRdKGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9ob29rcy1yZWZlcmVuY2UuaHRtbCN1c2VpZCkgaWZcbiAqIGl0J3MgYXZhaWxhYmxlLCBhbmQgYSBwb2x5ZmlsbCBpbXBsZW1lbnRhdGlvbiBpbnNwaXJlZCBieVxuICogW0BhY2Nlc3NpYmxlL3VzZS1pZF0oaHR0cHM6Ly9naXRodWIuY29tL2FjY2Vzc2libGUtdWkvdXNlLWlkKSBpZiBpdCBpcyBub3QuXG4gKlxuICogXCJyd2ItXCIgaXMgaGFyZC1jb2RlZCBhcyBhIHByZWZpeCBpbiB0aGUgcG9seWZpbGwuIFdoZW4gdXNpbmcgUmVhY3QgMTgrLFxuICogYSBwcmVmaXggY2FuIGJlIHByb3ZpZGVkIHdpdGggdGhlIGBpZGVudGlmaWVyUHJlZml4YCBvcHRpb24gaW5cbiAqIFtSZWFjdERPTUNsaWVudF0oaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWRvbS1jbGllbnQuaHRtbCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VJZCgpIHtcbiAgY29uc3QgaW1wbGVtZW50YXRpb24gPSBSZWFjdC51c2VNZW1vKCgpOiAoKCkgPT4gc3RyaW5nIHwgbnVtYmVyKSA9PiB7XG4gICAgaWYgKCd1c2VJZCcgaW4gUmVhY3QpIHJldHVybiBSZWFjdC51c2VJZFxuICAgIHJldHVybiB1c2VJZFBvbHlmaWxsXG4gIH0sIFtdKVxuXG4gIHJldHVybiBpbXBsZW1lbnRhdGlvbigpXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJU19TRVJWRVIiLCJ1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0IiwidXNlRWZmZWN0IiwidXNlTGF5b3V0RWZmZWN0IiwiSUQiLCJnZW5JZCIsInNlcnZlckhhbmRvZmZDb21wbGV0ZSIsInVzZUlkUG9seWZpbGwiLCJpZCIsInNldElkIiwidXNlU3RhdGUiLCJ0b1N0cmluZyIsInVzZUlkIiwidXNlTWVtbyIsIlNZTUJPTF9LRVkiLCJTWU1CT0xfTkFUSVZFX0tFWSIsIlNZTUJPTF9PQlNFUlZFUl9LRVkiLCJyZWxheW91dCIsInJhdGlvIiwid3JhcHBlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRhaW5lciIsInBhcmVudEVsZW1lbnQiLCJ1cGRhdGUiLCJ3aWR0aCIsInN0eWxlIiwibWF4V2lkdGgiLCJjbGllbnRXaWR0aCIsImhlaWdodCIsImNsaWVudEhlaWdodCIsImxvd2VyIiwidXBwZXIiLCJtaWRkbGUiLCJNYXRoIiwibWF4Iiwic2Nyb2xsV2lkdGgiLCJyb3VuZCIsIl9fd3JhcF9vIiwiUmVzaXplT2JzZXJ2ZXIiLCJzZWxmIiwiX193cmFwX2IiLCJkYXRhc2V0IiwiYnJyIiwib2JzZXJ2ZSIsInByb2Nlc3MiLCJjb25zb2xlIiwid2FybiIsIlJFTEFZT1VUX1NUUiIsImlzVGV4dFdyYXBCYWxhbmNlU3VwcG9ydGVkIiwiY3JlYXRlU2NyaXB0RWxlbWVudCIsImluamVjdGVkIiwibm9uY2UiLCJzdWZmaXgiLCJjcmVhdGVFbGVtZW50Iiwic3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJCYWxhbmNlckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwicHJlZmVyTmF0aXZlIiwiaGFzUHJvdmlkZXIiLCJQcm92aWRlciIsImNoaWxkcmVuIiwiY29udGV4dFZhbHVlIiwidmFsdWUiLCJCYWxhbmNlciIsImZvcndhcmRSZWYiLCJhcyIsInByb3BzIiwicmVmIiwid3JhcHBlclJlZiIsInVzZVJlZiIsInVzZUNvbnRleHQiLCJwcmVmZXJOYXRpdmVCYWxhbmNpbmciLCJXcmFwcGVyIiwidXNlSW1wZXJhdGl2ZUhhbmRsZSIsImN1cnJlbnQiLCJyZXNpemVPYnNlcnZlciIsImRpc2Nvbm5lY3QiLCJBcnJheSIsImlzQXJyYXkiLCJ0eXBlIiwiRnJhZ21lbnQiLCJkaXNwbGF5IiwidmVydGljYWxBbGlnbiIsInRleHREZWNvcmF0aW9uIiwidGV4dFdyYXAiLCJuZXh0X2Rldl9zdHlsZSIsImNhbGxiYWNrIiwibXV0YXRpb25MaXN0IiwibXV0YXRpb24iLCJub2RlIiwiZnJvbSIsInJlbW92ZWROb2RlcyIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudCIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJoZWFkIiwiY2hpbGRMaXN0Iiwic3JjX2RlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-wrap-balancer/dist/index.mjs\n");

/***/ }),

/***/ "(rsc)/./node_modules/react-wrap-balancer/dist/index.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/react-wrap-balancer/dist/index.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   Balancer: () => (/* binding */ e0),
/* harmony export */   Provider: () => (/* binding */ e1),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\ayush\Desktop\landing page\node_modules\react-wrap-balancer\dist\index.mjs`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\ayush\Desktop\landing page\node_modules\react-wrap-balancer\dist\index.mjs#Balancer`);

const e1 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\ayush\Desktop\landing page\node_modules\react-wrap-balancer\dist\index.mjs#Provider`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\ayush\Desktop\landing page\node_modules\react-wrap-balancer\dist\index.mjs#default`));


/***/ })

};
;