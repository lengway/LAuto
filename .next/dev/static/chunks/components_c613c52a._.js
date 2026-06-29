(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/admin/car-model-chips-input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CarModelChipsInput",
    ()=>CarModelChipsInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_ace9e6b1fee9bd89d608f1baf139bac6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_ace9e6b1fee9bd89d608f1baf139bac6/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_ace9e6b1fee9bd89d608f1baf139bac6/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function parseInitialValue(value) {
    if (!value) {
        return [];
    }
    return Array.from(new Set(value.split(",").map((entry)=>entry.trim()).filter(Boolean)));
}
function CarModelChipsInput(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(37);
    if ($[0] !== "94b7fe34284a11a4151b0a9d2869468cfe23ec3723f1775b09485d99394d2aa1") {
        for(let $i = 0; $i < 37; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "94b7fe34284a11a4151b0a9d2869468cfe23ec3723f1775b09485d99394d2aa1";
    }
    const { name, options, defaultValue, placeholder, className } = t0;
    let t1;
    if ($[1] !== defaultValue) {
        t1 = ({
            "CarModelChipsInput[useState()]": ()=>parseInitialValue(defaultValue)
        })["CarModelChipsInput[useState()]"];
        $[1] = defaultValue;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t2;
    if ($[3] !== selected) {
        t2 = new Set(selected.map(_CarModelChipsInputSelectedMap));
        $[3] = selected;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const normalizedSelected = t2;
    let t3;
    if ($[5] !== normalizedSelected || $[6] !== options || $[7] !== query) {
        bb0: {
            const normalizedQuery = query.trim().toLowerCase();
            if (!normalizedQuery) {
                let t4;
                if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
                    t4 = [];
                    $[9] = t4;
                } else {
                    t4 = $[9];
                }
                t3 = t4;
                break bb0;
            }
            t3 = options.filter({
                "CarModelChipsInput[options.filter()]": (option)=>{
                    const normalized = option.toLowerCase();
                    return normalized.includes(normalizedQuery) && !normalizedSelected.has(normalized);
                }
            }["CarModelChipsInput[options.filter()]"]).slice(0, 8);
        }
        $[5] = normalizedSelected;
        $[6] = options;
        $[7] = query;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    const suggestions = t3;
    let t4;
    if ($[10] !== normalizedSelected) {
        t4 = function addValue(rawValue) {
            const value = rawValue.trim();
            if (!value) {
                return;
            }
            const key = value.toLowerCase();
            if (normalizedSelected.has(key)) {
                setQuery("");
                return;
            }
            setSelected({
                "CarModelChipsInput[addValue > setSelected()]": (prev)=>[
                        ...prev,
                        value
                    ]
            }["CarModelChipsInput[addValue > setSelected()]"]);
            setQuery("");
        };
        $[10] = normalizedSelected;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    const addValue = t4;
    let t5;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = function removeValue(value_0) {
            const target = value_0.toLowerCase();
            setSelected({
                "CarModelChipsInput[removeValue > setSelected()]": (prev_0)=>prev_0.filter({
                        "CarModelChipsInput[removeValue > setSelected() > prev_0.filter()]": (entry_0)=>entry_0.toLowerCase() !== target
                    }["CarModelChipsInput[removeValue > setSelected() > prev_0.filter()]"])
            }["CarModelChipsInput[removeValue > setSelected()]"]);
        };
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    const removeValue = t5;
    const t6 = `min-w-0 space-y-2 sm:col-span-2 lg:col-span-3 ${className ?? ""}`;
    let t7;
    if ($[13] !== selected) {
        t7 = selected.join(", ");
        $[13] = selected;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== name || $[16] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "hidden",
            name: name,
            value: t7
        }, void 0, false, {
            fileName: "[project]/components/admin/car-model-chips-input.tsx",
            lineNumber: 135,
            columnNumber: 10
        }, this);
        $[15] = name;
        $[16] = t7;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "CarModelChipsInput[<input>.onChange]": (event)=>setQuery(event.target.value)
        })["CarModelChipsInput[<input>.onChange]"];
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    if ($[19] !== addValue || $[20] !== query) {
        t10 = ({
            "CarModelChipsInput[<input>.onKeyDown]": (event_0)=>{
                if (event_0.key === "Enter" || event_0.key === ",") {
                    event_0.preventDefault();
                    addValue(query);
                }
            }
        })["CarModelChipsInput[<input>.onKeyDown]"];
        $[19] = addValue;
        $[20] = query;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    let t11;
    if ($[22] !== placeholder || $[23] !== query || $[24] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: query,
            onChange: t9,
            onKeyDown: t10,
            placeholder: placeholder,
            className: "h-9 w-full rounded-md border border-border/60 bg-background px-3 text-sm"
        }, void 0, false, {
            fileName: "[project]/components/admin/car-model-chips-input.tsx",
            lineNumber: 169,
            columnNumber: 11
        }, this);
        $[22] = placeholder;
        $[23] = query;
        $[24] = t10;
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    let t12;
    if ($[26] !== addValue || $[27] !== suggestions) {
        t12 = suggestions.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-h-36 overflow-y-auto rounded-md border border-border/60 bg-background p-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-1",
                children: suggestions.map({
                    "CarModelChipsInput[suggestions.map()]": (suggestion)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            size: "sm",
                            variant: "outline",
                            className: "h-auto max-w-full px-2 py-1 text-left text-xs whitespace-normal wrap-break-word",
                            onClick: {
                                "CarModelChipsInput[suggestions.map() > <Button>.onClick]": ()=>addValue(suggestion)
                            }["CarModelChipsInput[suggestions.map() > <Button>.onClick]"],
                            children: suggestion
                        }, suggestion, false, {
                            fileName: "[project]/components/admin/car-model-chips-input.tsx",
                            lineNumber: 180,
                            columnNumber: 66
                        }, this)
                }["CarModelChipsInput[suggestions.map()]"])
            }, void 0, false, {
                fileName: "[project]/components/admin/car-model-chips-input.tsx",
                lineNumber: 179,
                columnNumber: 127
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/admin/car-model-chips-input.tsx",
            lineNumber: 179,
            columnNumber: 32
        }, this) : null;
        $[26] = addValue;
        $[27] = suggestions;
        $[28] = t12;
    } else {
        t12 = $[28];
    }
    let t13;
    if ($[29] !== selected) {
        t13 = selected.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-2 overflow-hidden",
            children: selected.map({
                "CarModelChipsInput[selected.map()]": (value_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                        variant: "secondary",
                        className: "max-w-full gap-2 py-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "max-w-full whitespace-normal wrap-break-word",
                                children: value_1
                            }, void 0, false, {
                                fileName: "[project]/components/admin/car-model-chips-input.tsx",
                                lineNumber: 193,
                                columnNumber: 133
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: {
                                    "CarModelChipsInput[selected.map() > <button>.onClick]": ()=>removeValue(value_1)
                                }["CarModelChipsInput[selected.map() > <button>.onClick]"],
                                className: "text-xs",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/components/admin/car-model-chips-input.tsx",
                                lineNumber: 193,
                                columnNumber: 212
                            }, this)
                        ]
                    }, value_1, true, {
                        fileName: "[project]/components/admin/car-model-chips-input.tsx",
                        lineNumber: 193,
                        columnNumber: 58
                    }, this)
            }["CarModelChipsInput[selected.map()]"])
        }, void 0, false, {
            fileName: "[project]/components/admin/car-model-chips-input.tsx",
            lineNumber: 192,
            columnNumber: 29
        }, this) : null;
        $[29] = selected;
        $[30] = t13;
    } else {
        t13 = $[30];
    }
    let t14;
    if ($[31] !== t11 || $[32] !== t12 || $[33] !== t13 || $[34] !== t6 || $[35] !== t8) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            children: [
                t8,
                t11,
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/components/admin/car-model-chips-input.tsx",
            lineNumber: 204,
            columnNumber: 11
        }, this);
        $[31] = t11;
        $[32] = t12;
        $[33] = t13;
        $[34] = t6;
        $[35] = t8;
        $[36] = t14;
    } else {
        t14 = $[36];
    }
    return t14;
}
_s(CarModelChipsInput, "IdfszYuCPHy3hXyXZKpEFNNpQGQ=");
_c = CarModelChipsInput;
function _CarModelChipsInputSelectedMap(entry) {
    return entry.toLowerCase();
}
var _c;
__turbopack_context__.k.register(_c, "CarModelChipsInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/admin/category-select-with-create.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategorySelectWithCreate",
    ()=>CategorySelectWithCreate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_ace9e6b1fee9bd89d608f1baf139bac6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_ace9e6b1fee9bd89d608f1baf139bac6/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_ace9e6b1fee9bd89d608f1baf139bac6/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CategorySelectWithCreate(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(56);
    if ($[0] !== "9a603169156de87fe6b99dde0c1415459db9d63ea21c662cb06b3726561a5456") {
        for(let $i = 0; $i < 56; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9a603169156de87fe6b99dde0c1415459db9d63ea21c662cb06b3726561a5456";
    }
    const { categories, selectionName: t1, defaultSelection: t2, selectPlaceholder: t3, className } = t0;
    const selectionName = t1 === undefined ? "categorySelection" : t1;
    let t4;
    if ($[1] !== t2) {
        t4 = t2 === undefined ? [] : t2;
        $[1] = t2;
        $[2] = t4;
    } else {
        t4 = $[2];
    }
    const defaultSelection = t4;
    const selectPlaceholder = t3 === undefined ? "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E" : t3;
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t5;
    if ($[3] !== defaultSelection) {
        t5 = ({
            "CategorySelectWithCreate[useState()]": ()=>defaultSelection.map(_CategorySelectWithCreateUseStateDefaultSelectionMap)
        })["CategorySelectWithCreate[useState()]"];
        $[3] = defaultSelection;
        $[4] = t5;
    } else {
        t5 = $[4];
    }
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t5);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t6;
    if ($[5] !== query) {
        t6 = query.trim().toLowerCase();
        $[5] = query;
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    const normalizedQuery = t6;
    let t7;
    if ($[7] !== selected) {
        t7 = new Set(selected.map(_CategorySelectWithCreateSelectedMap));
        $[7] = selected;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    const selectedKeySet = t7;
    let t8;
    bb0: {
        if (!normalizedQuery) {
            let t9;
            if ($[9] !== categories || $[10] !== selected) {
                let t10;
                if ($[12] !== selected) {
                    t10 = ({
                        "CategorySelectWithCreate[categories.filter()]": (category)=>!selected.some({
                                "CategorySelectWithCreate[categories.filter() > selected.some()]": (item_1)=>!item_1.isNew && item_1.id === category.id
                            }["CategorySelectWithCreate[categories.filter() > selected.some()]"])
                    })["CategorySelectWithCreate[categories.filter()]"];
                    $[12] = selected;
                    $[13] = t10;
                } else {
                    t10 = $[13];
                }
                t9 = categories.filter(t10).slice(0, 8);
                $[9] = categories;
                $[10] = selected;
                $[11] = t9;
            } else {
                t9 = $[11];
            }
            t8 = t9;
            break bb0;
        }
        let t9;
        if ($[14] !== categories || $[15] !== normalizedQuery || $[16] !== selected) {
            let t10;
            if ($[18] !== normalizedQuery || $[19] !== selected) {
                t10 = ({
                    "CategorySelectWithCreate[categories.filter()]": (category_0)=>category_0.name.toLowerCase().includes(normalizedQuery) && !selected.some({
                            "CategorySelectWithCreate[categories.filter() > selected.some()]": (item_2)=>!item_2.isNew && item_2.id === category_0.id
                        }["CategorySelectWithCreate[categories.filter() > selected.some()]"])
                })["CategorySelectWithCreate[categories.filter()]"];
                $[18] = normalizedQuery;
                $[19] = selected;
                $[20] = t10;
            } else {
                t10 = $[20];
            }
            t9 = categories.filter(t10).slice(0, 8);
            $[14] = categories;
            $[15] = normalizedQuery;
            $[16] = selected;
            $[17] = t9;
        } else {
            t9 = $[17];
        }
        t8 = t9;
    }
    const filtered = t8;
    let t9;
    bb1: {
        if (!normalizedQuery) {
            t9 = false;
            break bb1;
        }
        let t10;
        if ($[21] !== categories || $[22] !== normalizedQuery) {
            let t11;
            if ($[24] !== normalizedQuery) {
                t11 = ({
                    "CategorySelectWithCreate[categories.some()]": (category_1)=>category_1.name.toLowerCase() === normalizedQuery
                })["CategorySelectWithCreate[categories.some()]"];
                $[24] = normalizedQuery;
                $[25] = t11;
            } else {
                t11 = $[25];
            }
            t10 = categories.some(t11);
            $[21] = categories;
            $[22] = normalizedQuery;
            $[23] = t10;
        } else {
            t10 = $[23];
        }
        t9 = t10;
    }
    const hasExact = t9;
    let t10;
    if ($[26] !== selected) {
        t10 = JSON.stringify(selected);
        $[26] = selected;
        $[27] = t10;
    } else {
        t10 = $[27];
    }
    let t11;
    if ($[28] !== selectionName || $[29] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "hidden",
            name: selectionName,
            value: t10
        }, void 0, false, {
            fileName: "[project]/components/admin/category-select-with-create.tsx",
            lineNumber: 168,
            columnNumber: 11
        }, this);
        $[28] = selectionName;
        $[29] = t10;
        $[30] = t11;
    } else {
        t11 = $[30];
    }
    let t12;
    let t13;
    let t14;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = ({
            "CategorySelectWithCreate[<input>.onChange]": (event)=>{
                setQuery(event.target.value);
                setIsOpen(true);
            }
        })["CategorySelectWithCreate[<input>.onChange]"];
        t13 = ({
            "CategorySelectWithCreate[<input>.onFocus]": ()=>setIsOpen(true)
        })["CategorySelectWithCreate[<input>.onFocus]"];
        t14 = ({
            "CategorySelectWithCreate[<input>.onBlur]": ()=>{
                setTimeout({
                    "CategorySelectWithCreate[<input>.onBlur > setTimeout()]": ()=>setIsOpen(false)
                }["CategorySelectWithCreate[<input>.onBlur > setTimeout()]"], 120);
            }
        })["CategorySelectWithCreate[<input>.onBlur]"];
        $[31] = t12;
        $[32] = t13;
        $[33] = t14;
    } else {
        t12 = $[31];
        t13 = $[32];
        t14 = $[33];
    }
    let t15;
    if ($[34] !== query || $[35] !== selectPlaceholder) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: query,
            onChange: t12,
            onFocus: t13,
            onBlur: t14,
            placeholder: selectPlaceholder,
            className: "h-full flex-1 bg-transparent outline-none"
        }, void 0, false, {
            fileName: "[project]/components/admin/category-select-with-create.tsx",
            lineNumber: 205,
            columnNumber: 11
        }, this);
        $[34] = query;
        $[35] = selectPlaceholder;
        $[36] = t15;
    } else {
        t15 = $[36];
    }
    let t16;
    if ($[37] !== selected) {
        t16 = selected.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "ml-2 flex max-w-[70%] items-center gap-1 overflow-x-auto",
            children: selected.map({
                "CategorySelectWithCreate[selected.map()]": (item_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                        variant: item_3.isNew ? "secondary" : "outline",
                        className: "shrink-0 gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "max-w-36 truncate",
                                children: item_3.name
                            }, void 0, false, {
                                fileName: "[project]/components/admin/category-select-with-create.tsx",
                                lineNumber: 215,
                                columnNumber: 219
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: {
                                    "CategorySelectWithCreate[selected.map() > <button>.onClick]": ()=>{
                                        setSelected({
                                            "CategorySelectWithCreate[selected.map() > <button>.onClick > setSelected()]": (prev)=>prev.filter({
                                                    "CategorySelectWithCreate[selected.map() > <button>.onClick > setSelected() > prev.filter()]": (entry)=>!(entry.id === item_3.id && entry.name === item_3.name && entry.isNew === item_3.isNew)
                                                }["CategorySelectWithCreate[selected.map() > <button>.onClick > setSelected() > prev.filter()]"])
                                        }["CategorySelectWithCreate[selected.map() > <button>.onClick > setSelected()]"]);
                                    }
                                }["CategorySelectWithCreate[selected.map() > <button>.onClick]"],
                                className: "text-xs",
                                "aria-label": "\u0423\u0431\u0440\u0430\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/components/admin/category-select-with-create.tsx",
                                lineNumber: 215,
                                columnNumber: 275
                            }, this)
                        ]
                    }, `${item_3.isNew ? "new" : "existing"}:${item_3.id || item_3.name}`, true, {
                        fileName: "[project]/components/admin/category-select-with-create.tsx",
                        lineNumber: 215,
                        columnNumber: 63
                    }, this)
            }["CategorySelectWithCreate[selected.map()]"])
        }, void 0, false, {
            fileName: "[project]/components/admin/category-select-with-create.tsx",
            lineNumber: 214,
            columnNumber: 29
        }, this) : null;
        $[37] = selected;
        $[38] = t16;
    } else {
        t16 = $[38];
    }
    let t17;
    if ($[39] !== t15 || $[40] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-9 items-center rounded-md border border-border/60 bg-background pl-3 pr-2 text-sm",
            children: [
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/components/admin/category-select-with-create.tsx",
            lineNumber: 232,
            columnNumber: 11
        }, this);
        $[39] = t15;
        $[40] = t16;
        $[41] = t17;
    } else {
        t17 = $[41];
    }
    let t18;
    if ($[42] !== filtered || $[43] !== hasExact || $[44] !== isOpen || $[45] !== normalizedQuery || $[46] !== query || $[47] !== selectedKeySet) {
        t18 = isOpen && (filtered.length > 0 || !!normalizedQuery && !hasExact) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute z-20 mt-1 max-h-52 w-full overflow-y-auto rounded-md border border-border/60 bg-popover p-1 shadow-sm",
            children: [
                filtered.map({
                    "CategorySelectWithCreate[filtered.map()]": (category_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm hover:bg-accent",
                            onMouseDown: _CategorySelectWithCreateFilteredMapButtonOnMouseDown,
                            onClick: {
                                "CategorySelectWithCreate[filtered.map() > <button>.onClick]": ()=>{
                                    const candidate = {
                                        id: category_2.id,
                                        name: category_2.name,
                                        isNew: false
                                    };
                                    const key = `existing:${candidate.id}`;
                                    if (!selectedKeySet.has(key)) {
                                        setSelected({
                                            "CategorySelectWithCreate[filtered.map() > <button>.onClick > setSelected()]": (prev_0)=>[
                                                    ...prev_0,
                                                    candidate
                                                ]
                                        }["CategorySelectWithCreate[filtered.map() > <button>.onClick > setSelected()]"]);
                                    }
                                    setQuery("");
                                    setIsOpen(false);
                                }
                            }["CategorySelectWithCreate[filtered.map() > <button>.onClick]"],
                            children: category_2.name
                        }, category_2.id, false, {
                            fileName: "[project]/components/admin/category-select-with-create.tsx",
                            lineNumber: 242,
                            columnNumber: 67
                        }, this)
                }["CategorySelectWithCreate[filtered.map()]"]),
                !!normalizedQuery && !hasExact ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm hover:bg-accent",
                    onMouseDown: _CategorySelectWithCreateButtonOnMouseDown,
                    onClick: {
                        "CategorySelectWithCreate[<button>.onClick]": ()=>{
                            const candidate_0 = {
                                id: "",
                                name: query.trim(),
                                isNew: true
                            };
                            const key_0 = `new:${candidate_0.name.toLowerCase()}`;
                            if (!selectedKeySet.has(key_0)) {
                                setSelected({
                                    "CategorySelectWithCreate[<button>.onClick > setSelected()]": (prev_1)=>[
                                            ...prev_1,
                                            candidate_0
                                        ]
                                }["CategorySelectWithCreate[<button>.onClick > setSelected()]"]);
                            }
                            setQuery("");
                            setIsOpen(false);
                        }
                    }["CategorySelectWithCreate[<button>.onClick]"],
                    children: [
                        'Создать "',
                        query.trim(),
                        '"'
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/category-select-with-create.tsx",
                    lineNumber: 259,
                    columnNumber: 88
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/components/admin/category-select-with-create.tsx",
            lineNumber: 241,
            columnNumber: 79
        }, this) : null;
        $[42] = filtered;
        $[43] = hasExact;
        $[44] = isOpen;
        $[45] = normalizedQuery;
        $[46] = query;
        $[47] = selectedKeySet;
        $[48] = t18;
    } else {
        t18 = $[48];
    }
    let t19;
    if ($[49] !== t17 || $[50] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/components/admin/category-select-with-create.tsx",
            lineNumber: 288,
            columnNumber: 11
        }, this);
        $[49] = t17;
        $[50] = t18;
        $[51] = t19;
    } else {
        t19 = $[51];
    }
    let t20;
    if ($[52] !== className || $[53] !== t11 || $[54] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: className,
            children: [
                t11,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/components/admin/category-select-with-create.tsx",
            lineNumber: 297,
            columnNumber: 11
        }, this);
        $[52] = className;
        $[53] = t11;
        $[54] = t19;
        $[55] = t20;
    } else {
        t20 = $[55];
    }
    return t20;
}
_s(CategorySelectWithCreate, "F941rt0rSGYKR6UJ1sMkzM/2KrU=");
_c = CategorySelectWithCreate;
function _CategorySelectWithCreateButtonOnMouseDown(event_1) {
    return event_1.preventDefault();
}
function _CategorySelectWithCreateFilteredMapButtonOnMouseDown(event_0) {
    return event_0.preventDefault();
}
function _CategorySelectWithCreateSelectedMap(item_0) {
    return `${item_0.isNew ? "new" : "existing"}:${item_0.id || item_0.name.toLowerCase()}`;
}
function _CategorySelectWithCreateUseStateDefaultSelectionMap(item) {
    return {
        id: item.id,
        name: item.name,
        isNew: false
    };
}
var _c;
__turbopack_context__.k.register(_c, "CategorySelectWithCreate");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/admin/file-upload-input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileUploadInput",
    ()=>FileUploadInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_ace9e6b1fee9bd89d608f1baf139bac6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_ace9e6b1fee9bd89d608f1baf139bac6/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_ace9e6b1fee9bd89d608f1baf139bac6/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function FileUploadInput(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "604eca8aefa79d2909649792782999fd6cc4aaff5e57a3ddd732340345ea371b") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "604eca8aefa79d2909649792782999fd6cc4aaff5e57a3ddd732340345ea371b";
    }
    const { name, accept: t1, className, buttonLabel: t2, emptyText: t3, multiple: t4 } = t0;
    const accept = t1 === undefined ? "image/*" : t1;
    const buttonLabel = t2 === undefined ? "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u0430\u0439\u043B" : t2;
    const emptyText = t3 === undefined ? "\u0424\u0430\u0439\u043B \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D" : t3;
    const multiple = t4 === undefined ? false : t4;
    const inputId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const [fileLabel, setFileLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t5;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "FileUploadInput[<input>.onChange]": (event)=>{
                const files = Array.from(event.target.files ?? []);
                if (!files.length) {
                    setFileLabel("");
                    return;
                }
                if (files.length === 1) {
                    setFileLabel(files[0].name);
                    return;
                }
                setFileLabel(`Выбрано файлов: ${files.length}`);
            }
        })["FileUploadInput[<input>.onChange]"];
        $[1] = t5;
    } else {
        t5 = $[1];
    }
    let t6;
    if ($[2] !== accept || $[3] !== inputId || $[4] !== multiple || $[5] !== name) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            id: inputId,
            type: "file",
            name: name,
            accept: accept,
            multiple: multiple,
            className: "hidden",
            onChange: t5
        }, void 0, false, {
            fileName: "[project]/components/admin/file-upload-input.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[2] = accept;
        $[3] = inputId;
        $[4] = multiple;
        $[5] = name;
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    let t7;
    if ($[7] !== buttonLabel || $[8] !== inputId) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            asChild: true,
            type: "button",
            size: "sm",
            variant: "outline",
            className: "h-7 px-2 text-xs",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: inputId,
                className: "cursor-pointer",
                children: buttonLabel
            }, void 0, false, {
                fileName: "[project]/components/admin/file-upload-input.tsx",
                lineNumber: 69,
                columnNumber: 104
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/admin/file-upload-input.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[7] = buttonLabel;
        $[8] = inputId;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    const t8 = fileLabel || emptyText;
    let t9;
    if ($[10] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "truncate text-xs text-muted-foreground",
            children: t8
        }, void 0, false, {
            fileName: "[project]/components/admin/file-upload-input.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        $[10] = t8;
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    let t10;
    if ($[12] !== t7 || $[13] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-9 items-center gap-2 rounded-md border border-border/60 bg-background px-2",
            children: [
                t7,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/components/admin/file-upload-input.tsx",
            lineNumber: 87,
            columnNumber: 11
        }, this);
        $[12] = t7;
        $[13] = t9;
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] !== className || $[16] !== t10 || $[17] !== t6) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: className,
            children: [
                t6,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/components/admin/file-upload-input.tsx",
            lineNumber: 96,
            columnNumber: 11
        }, this);
        $[15] = className;
        $[16] = t10;
        $[17] = t6;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    return t11;
}
_s(FileUploadInput, "0CjqL5CI1+0J2M98uM4WVRRbFXQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = FileUploadInput;
var _c;
__turbopack_context__.k.register(_c, "FileUploadInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_ace9e6b1fee9bd89d608f1baf139bac6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_ace9e6b1fee9bd89d608f1baf139bac6/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_d2e35b4e9cd736a6c0d432073bda47fa$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-dialog@1.1._d2e35b4e9cd736a6c0d432073bda47fa/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$555$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.555.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function Dialog(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "343a166dbdaf60637e486cdb27a7687bd35d8a825c47a504414e228c602d47b0") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "343a166dbdaf60637e486cdb27a7687bd35d8a825c47a504414e228c602d47b0";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_d2e35b4e9cd736a6c0d432073bda47fa$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            "data-slot": "dialog",
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/dialog.tsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c = Dialog;
function DialogTrigger(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "343a166dbdaf60637e486cdb27a7687bd35d8a825c47a504414e228c602d47b0") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "343a166dbdaf60637e486cdb27a7687bd35d8a825c47a504414e228c602d47b0";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_d2e35b4e9cd736a6c0d432073bda47fa$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
            "data-slot": "dialog-trigger",
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/dialog.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c1 = DialogTrigger;
function DialogPortal(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "343a166dbdaf60637e486cdb27a7687bd35d8a825c47a504414e228c602d47b0") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "343a166dbdaf60637e486cdb27a7687bd35d8a825c47a504414e228c602d47b0";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_d2e35b4e9cd736a6c0d432073bda47fa$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
            "data-slot": "dialog-portal",
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/dialog.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c2 = DialogPortal;
function DialogClose(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "343a166dbdaf60637e486cdb27a7687bd35d8a825c47a504414e228c602d47b0") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "343a166dbdaf60637e486cdb27a7687bd35d8a825c47a504414e228c602d47b0";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_d2e35b4e9cd736a6c0d432073bda47fa$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
            "data-slot": "dialog-close",
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/dialog.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c3 = DialogClose;
function DialogOverlay(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "343a166dbdaf60637e486cdb27a7687bd35d8a825c47a504414e228c602d47b0") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "343a166dbdaf60637e486cdb27a7687bd35d8a825c47a504414e228c602d47b0";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_d2e35b4e9cd736a6c0d432073bda47fa$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
            "data-slot": "dialog-overlay",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/dialog.tsx",
            lineNumber: 152,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c4 = DialogOverlay;
function DialogContent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "343a166dbdaf60637e486cdb27a7687bd35d8a825c47a504414e228c602d47b0") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "343a166dbdaf60637e486cdb27a7687bd35d8a825c47a504414e228c602d47b0";
    }
    let children;
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, children, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
    }
    let t1;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
            fileName: "[project]/components/ui/dialog.tsx",
            lineNumber: 189,
            columnNumber: 10
        }, this);
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== className) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed top-[50%] left-[50%] z-50 grid w-[95vw] max-w-2xl translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-5 shadow-lg duration-200 sm:w-full", className);
        $[6] = className;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_d2e35b4e9cd736a6c0d432073bda47fa$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
            className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$555$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {
                    className: "size-4"
                }, void 0, false, {
                    fileName: "[project]/components/ui/dialog.tsx",
                    lineNumber: 204,
                    columnNumber: 280
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "sr-only",
                    children: "Close"
                }, void 0, false, {
                    fileName: "[project]/components/ui/dialog.tsx",
                    lineNumber: 204,
                    columnNumber: 308
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/dialog.tsx",
            lineNumber: 204,
            columnNumber: 10
        }, this);
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== children || $[10] !== props || $[11] !== t2) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_d2e35b4e9cd736a6c0d432073bda47fa$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                    "data-slot": "dialog-content",
                    className: t2,
                    ...props,
                    children: [
                        children,
                        t3
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/dialog.tsx",
                    lineNumber: 211,
                    columnNumber: 28
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/dialog.tsx",
            lineNumber: 211,
            columnNumber: 10
        }, this);
        $[9] = children;
        $[10] = props;
        $[11] = t2;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    return t4;
}
_c5 = DialogContent;
function DialogHeader(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "343a166dbdaf60637e486cdb27a7687bd35d8a825c47a504414e228c602d47b0") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "343a166dbdaf60637e486cdb27a7687bd35d8a825c47a504414e228c602d47b0";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-1.5", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "dialog-header",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/dialog.tsx",
            lineNumber: 253,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c6 = DialogHeader;
function DialogFooter(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "343a166dbdaf60637e486cdb27a7687bd35d8a825c47a504414e228c602d47b0") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "343a166dbdaf60637e486cdb27a7687bd35d8a825c47a504414e228c602d47b0";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "dialog-footer",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/dialog.tsx",
            lineNumber: 294,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c7 = DialogFooter;
function DialogTitle(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "343a166dbdaf60637e486cdb27a7687bd35d8a825c47a504414e228c602d47b0") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "343a166dbdaf60637e486cdb27a7687bd35d8a825c47a504414e228c602d47b0";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_d2e35b4e9cd736a6c0d432073bda47fa$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
            "data-slot": "dialog-title",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/dialog.tsx",
            lineNumber: 335,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c8 = DialogTitle;
function DialogDescription(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "343a166dbdaf60637e486cdb27a7687bd35d8a825c47a504414e228c602d47b0") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "343a166dbdaf60637e486cdb27a7687bd35d8a825c47a504414e228c602d47b0";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_d2e35b4e9cd736a6c0d432073bda47fa$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
            "data-slot": "dialog-description",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/dialog.tsx",
            lineNumber: 376,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_c613c52a._.js.map