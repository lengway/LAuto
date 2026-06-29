(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/admin/layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_ace9e6b1fee9bd89d608f1baf139bac6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_ace9e6b1fee9bd89d608f1baf139bac6/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_ace9e6b1fee9bd89d608f1baf139bac6/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_ace9e6b1fee9bd89d608f1baf139bac6/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AdminLayout(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "9c79d68673e771b3e0e266f89548303b19b588c2a1bf4d369da4d9043606fc44") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9c79d68673e771b3e0e266f89548303b19b588c2a1bf4d369da4d9043606fc44";
    }
    const { children } = t0;
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    if ($[1] !== pathname) {
        const navItems = [
            {
                href: "/admin/brands",
                label: "\u041C\u0430\u0440\u043A\u0438"
            },
            {
                href: "/admin/models",
                label: "\u041C\u043E\u0434\u0435\u043B\u0438"
            },
            {
                href: "/admin/parts",
                label: "\u0417\u0430\u043F\u0447\u0430\u0441\u0442\u0438"
            },
            {
                href: "/admin/ai-import",
                label: "AI-\u0438\u043C\u043F\u043E\u0440\u0442"
            },
            {
                href: "/admin/settings",
                label: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
            }
        ];
        t6 = "mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-10";
        t3 = "space-y-3";
        if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                variant: "outline",
                children: "Админ-панель"
            }, void 0, false, {
                fileName: "[project]/app/admin/layout.tsx",
                lineNumber: 45,
                columnNumber: 12
            }, this);
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-semibold sm:text-3xl",
                children: "Управление Chinalending"
            }, void 0, false, {
                fileName: "[project]/app/admin/layout.tsx",
                lineNumber: 46,
                columnNumber: 12
            }, this);
            $[8] = t4;
            $[9] = t5;
        } else {
            t4 = $[8];
            t5 = $[9];
        }
        t1 = "flex flex-wrap gap-2 text-sm";
        t2 = navItems.map({
            "AdminLayout[navItems.map()]": (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: item.href,
                    className: `rounded-lg border px-3 py-1.5 ${pathname?.startsWith(item.href) ? "border-primary/60 bg-accent" : "border-border/60 hover:bg-accent"}`,
                    children: item.label
                }, item.href, false, {
                    fileName: "[project]/app/admin/layout.tsx",
                    lineNumber: 55,
                    columnNumber: 46
                }, this)
        }["AdminLayout[navItems.map()]"]);
        $[1] = pathname;
        $[2] = t1;
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
        $[6] = t5;
        $[7] = t6;
    } else {
        t1 = $[2];
        t2 = $[3];
        t3 = $[4];
        t4 = $[5];
        t5 = $[6];
        t6 = $[7];
    }
    let t7;
    if ($[10] !== t1 || $[11] !== t2) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: t1,
            children: t2
        }, void 0, false, {
            fileName: "[project]/app/admin/layout.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[10] = t1;
        $[11] = t2;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== t3 || $[14] !== t4 || $[15] !== t5 || $[16] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: t3,
            children: [
                t4,
                t5,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/layout.tsx",
            lineNumber: 83,
            columnNumber: 10
        }, this);
        $[13] = t3;
        $[14] = t4;
        $[15] = t5;
        $[16] = t7;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== children || $[19] !== t6 || $[20] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            children: [
                t8,
                children
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/layout.tsx",
            lineNumber: 94,
            columnNumber: 10
        }, this);
        $[18] = children;
        $[19] = t6;
        $[20] = t8;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    return t9;
}
_s(AdminLayout, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = AdminLayout;
var _c;
__turbopack_context__.k.register(_c, "AdminLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_ace9e6b1fee9bd89d608f1baf139bac6/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_ace9e6b1fee9bd89d608f1baf139bac6/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_c7a77041._.js.map