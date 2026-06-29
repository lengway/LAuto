(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/cart/add-to-cart-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddToCartButton",
    ()=>AddToCartButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_ace9e6b1fee9bd89d608f1baf139bac6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_ace9e6b1fee9bd89d608f1baf139bac6/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cart$2f$cart$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/cart/cart-provider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AddToCartButton(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "865df7d2d9ae85c7db1b4090426d45132be1dac99f95266b9d23aa7aa20f10ce") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "865df7d2d9ae85c7db1b4090426d45132be1dac99f95266b9d23aa7aa20f10ce";
    }
    const { part, className, size: t1 } = t0;
    const size = t1 === undefined ? "sm" : t1;
    const { addItem } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cart$2f$cart$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    let t2;
    if ($[1] !== addItem || $[2] !== part) {
        t2 = ({
            "AddToCartButton[<Button>.onClick]": ()=>{
                addItem(part);
            }
        })["AddToCartButton[<Button>.onClick]"];
        $[1] = addItem;
        $[2] = part;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const t3 = `Добавить ${part.title} в корзину`;
    let t4;
    if ($[4] !== className || $[5] !== size || $[6] !== t2 || $[7] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            size: size,
            className: className,
            onClick: t2,
            "aria-label": t3,
            children: "В корзину"
        }, void 0, false, {
            fileName: "[project]/components/cart/add-to-cart-button.tsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[4] = className;
        $[5] = size;
        $[6] = t2;
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    return t4;
}
_s(AddToCartButton, "ZhtpDchQC2Oo9DFCwDSWKDCWW88=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cart$2f$cart$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = AddToCartButton;
var _c;
__turbopack_context__.k.register(_c, "AddToCartButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_cart_add-to-cart-button_tsx_39e0faf4._.js.map