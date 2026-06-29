module.exports = [
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/components/ui/badge.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_ace9e6b1fee9bd89d608f1baf139bac6/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$4_$40$types$2b$react$40$19$2e$2$2e$14_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-slot@1.2.4_@types+react@19.2.14_react@19.2.0/node_modules/@radix-ui/react-slot/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$4_$40$types$2b$react$40$19$2e$2$2e$14_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/card.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_ace9e6b1fee9bd89d608f1baf139bac6/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-rsc] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/lib/services/catalog-fallback.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fallbackCars",
    ()=>fallbackCars,
    "fallbackCategories",
    ()=>fallbackCategories,
    "fallbackParts",
    ()=>fallbackParts
]);
const fallbackCategories = [
    {
        id: "c1",
        name: "Подвеска",
        slug: "suspension"
    },
    {
        id: "c2",
        name: "Фильтры",
        slug: "filters"
    },
    {
        id: "c3",
        name: "Двигатель",
        slug: "engine"
    },
    {
        id: "c4",
        name: "Электрика",
        slug: "electronics"
    },
    {
        id: "c5",
        name: "Кузов",
        slug: "body"
    },
    {
        id: "c6",
        name: "Тормозная система",
        slug: "brakes"
    },
    {
        id: "c7",
        name: "Трансмиссия",
        slug: "transmission"
    },
    {
        id: "c8",
        name: "Охлаждение",
        slug: "cooling"
    }
];
const fallbackCars = [
    {
        id: "car1",
        slug: "chery-tiggo-7-pro",
        model: "Tiggo 7",
        generation: "Pro",
        brand: {
            name: "Chery",
            slug: "chery"
        }
    },
    {
        id: "car2",
        slug: "geely-coolray",
        model: "Coolray",
        generation: null,
        brand: {
            name: "Geely",
            slug: "geely"
        }
    },
    {
        id: "car3",
        slug: "haval-jolion",
        model: "Jolion",
        generation: null,
        brand: {
            name: "Haval",
            slug: "haval"
        }
    },
    {
        id: "car4",
        slug: "changan-cs55-plus",
        model: "CS55 Plus",
        generation: null,
        brand: {
            name: "Changan",
            slug: "changan"
        }
    },
    {
        id: "car5",
        slug: "jac-js6",
        model: "JS6",
        generation: null,
        brand: {
            name: "JAC",
            slug: "jac"
        }
    },
    {
        id: "car6",
        slug: "geely-atlas-pro",
        model: "Atlas",
        generation: "Pro",
        brand: {
            name: "Geely",
            slug: "geely"
        }
    },
    {
        id: "car7",
        slug: "chery-tiggo-8-pro",
        model: "Tiggo 8",
        generation: "Pro",
        brand: {
            name: "Chery",
            slug: "chery"
        }
    },
    {
        id: "car8",
        slug: "haval-f7",
        model: "F7",
        generation: null,
        brand: {
            name: "Haval",
            slug: "haval"
        }
    }
];
const fallbackParts = [
    {
        id: "part1",
        slug: "front-shock-absorber-123-abc",
        title: "Амортизатор передний",
        oemNumber: "123-ABC",
        description: "Передний амортизатор подвески для Chery Tiggo 7 Pro.",
        category: fallbackCategories[0],
        priceFrom: 15000,
        inStock: true,
        imageUrl: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=80",
        carSlugs: [
            "chery-tiggo-7-pro"
        ]
    },
    {
        id: "part2",
        slug: "oil-filter-88722",
        title: "Фильтр масляный",
        oemNumber: "88722",
        description: "OEM масляный фильтр для Chery Tiggo 7 Pro и Geely Coolray.",
        category: fallbackCategories[1],
        priceFrom: 4500,
        inStock: true,
        imageUrl: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=1200&q=80",
        carSlugs: [
            "chery-tiggo-7-pro",
            "geely-coolray"
        ]
    },
    {
        id: "part3",
        slug: "air-filter-hvl-9911",
        title: "Фильтр воздушный",
        oemNumber: "HVL-9911",
        description: "Воздушный фильтр для Haval Jolion.",
        category: fallbackCategories[1],
        priceFrom: 5200,
        inStock: true,
        imageUrl: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
        carSlugs: [
            "haval-jolion"
        ]
    },
    {
        id: "part4",
        slug: "rear-brake-pads-gly-4471",
        title: "Колодки тормозные задние",
        oemNumber: "GLY-4471",
        description: "Комплект задних тормозных колодок для Geely Coolray и Atlas Pro.",
        category: fallbackCategories[5],
        priceFrom: 7800,
        inStock: true,
        imageUrl: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80",
        carSlugs: [
            "geely-coolray",
            "geely-atlas-pro"
        ]
    },
    {
        id: "part5",
        slug: "front-brake-disc-hvl-4410",
        title: "Диск тормозной передний",
        oemNumber: "HVL-4410",
        description: "Передний тормозной диск для Haval Jolion и Haval F7.",
        category: fallbackCategories[5],
        priceFrom: 12400,
        inStock: true,
        imageUrl: "https://images.unsplash.com/photo-1595716146228-378b558d46d9?auto=format&fit=crop&w=1200&q=80",
        carSlugs: [
            "haval-jolion",
            "haval-f7"
        ]
    },
    {
        id: "part6",
        slug: "radiator-chg-3201",
        title: "Радиатор охлаждения",
        oemNumber: "CHG-3201",
        description: "Радиатор двигателя для Changan CS55 Plus.",
        category: fallbackCategories[7],
        priceFrom: 26800,
        inStock: true,
        imageUrl: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?auto=format&fit=crop&w=1200&q=80",
        carSlugs: [
            "changan-cs55-plus"
        ]
    },
    {
        id: "part7",
        slug: "water-pump-chr-2100",
        title: "Помпа системы охлаждения",
        oemNumber: "CHR-2100",
        description: "Водяная помпа двигателя для Chery Tiggo 7 Pro и Tiggo 8 Pro.",
        category: fallbackCategories[7],
        priceFrom: 14600,
        inStock: false,
        imageUrl: "https://images.unsplash.com/photo-1635764703282-f4a56f6abf54?auto=format&fit=crop&w=1200&q=80",
        carSlugs: [
            "chery-tiggo-7-pro",
            "chery-tiggo-8-pro"
        ]
    },
    {
        id: "part8",
        slug: "ignition-coil-jac-8841",
        title: "Катушка зажигания",
        oemNumber: "JAC-8841",
        description: "Катушка зажигания для JAC JS6.",
        category: fallbackCategories[3],
        priceFrom: 6900,
        inStock: true,
        imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
        carSlugs: [
            "jac-js6"
        ]
    },
    {
        id: "part9",
        slug: "spark-plug-set-gee-1902",
        title: "Свечи зажигания (комплект)",
        oemNumber: "GEE-1902",
        description: "Комплект свечей зажигания для Geely Coolray и Atlas Pro.",
        category: fallbackCategories[2],
        priceFrom: 5600,
        inStock: true,
        imageUrl: "https://images.unsplash.com/photo-1613214149922-f1809c99f203?auto=format&fit=crop&w=1200&q=80",
        carSlugs: [
            "geely-coolray",
            "geely-atlas-pro"
        ]
    },
    {
        id: "part10",
        slug: "timing-belt-kit-hvl-7730",
        title: "Комплект ГРМ",
        oemNumber: "HVL-7730",
        description: "Комплект ремня ГРМ и роликов для Haval F7.",
        category: fallbackCategories[2],
        priceFrom: 23100,
        inStock: false,
        imageUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
        carSlugs: [
            "haval-f7"
        ]
    },
    {
        id: "part11",
        slug: "gearbox-mount-chr-5512",
        title: "Опора КПП",
        oemNumber: "CHR-5512",
        description: "Опора коробки передач для Chery Tiggo 8 Pro.",
        category: fallbackCategories[6],
        priceFrom: 9800,
        inStock: true,
        imageUrl: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=1200&q=80",
        carSlugs: [
            "chery-tiggo-8-pro"
        ]
    },
    {
        id: "part12",
        slug: "cv-joint-outer-chg-8820",
        title: "ШРУС наружный",
        oemNumber: "CHG-8820",
        description: "Наружный ШРУС привода для Changan CS55 Plus.",
        category: fallbackCategories[6],
        priceFrom: 17400,
        inStock: true,
        imageUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
        carSlugs: [
            "changan-cs55-plus"
        ]
    },
    {
        id: "part13",
        slug: "headlight-right-jac-7711",
        title: "Фара передняя правая",
        oemNumber: "JAC-7711",
        description: "Правая передняя фара для JAC JS6.",
        category: fallbackCategories[4],
        priceFrom: 39200,
        inStock: true,
        imageUrl: "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80",
        carSlugs: [
            "jac-js6"
        ]
    },
    {
        id: "part14",
        slug: "bumper-grille-chr-9042",
        title: "Решётка переднего бампера",
        oemNumber: "CHR-9042",
        description: "Решётка переднего бампера для Chery Tiggo 7 Pro.",
        category: fallbackCategories[4],
        priceFrom: 11800,
        inStock: true,
        imageUrl: "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&w=1200&q=80",
        carSlugs: [
            "chery-tiggo-7-pro"
        ]
    },
    {
        id: "part15",
        slug: "front-control-arm-gee-4208",
        title: "Рычаг передней подвески",
        oemNumber: "GEE-4208",
        description: "Рычаг передней подвески для Geely Atlas Pro.",
        category: fallbackCategories[0],
        priceFrom: 20800,
        inStock: true,
        imageUrl: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80",
        carSlugs: [
            "geely-atlas-pro"
        ]
    },
    {
        id: "part16",
        slug: "engine-mount-hvl-6102",
        title: "Подушка двигателя",
        oemNumber: "HVL-6102",
        description: "Опора двигателя для Haval Jolion.",
        category: fallbackCategories[2],
        priceFrom: 8700,
        inStock: true,
        imageUrl: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80",
        carSlugs: [
            "haval-jolion"
        ]
    }
];
}),
"[project]/lib/services/catalog.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCarBySlug",
    ()=>getCarBySlug,
    "getPartBySlug",
    ()=>getPartBySlug,
    "listCatalogBrands",
    ()=>listCatalogBrands,
    "listCatalogCars",
    ()=>listCatalogCars,
    "listCatalogCategories",
    ()=>listCatalogCategories,
    "listCatalogParts",
    ()=>listCatalogParts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/db/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$catalog$2d$fallback$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/catalog-fallback.ts [app-rsc] (ecmascript)");
;
;
function buildCarName(brand, model, generation) {
    return [
        brand,
        model,
        generation
    ].filter(Boolean).join(" ");
}
function mapFallbackPart(partSlug) {
    const part = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$catalog$2d$fallback$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fallbackParts"].find((entry)=>entry.slug === partSlug);
    if (!part) {
        return null;
    }
    return {
        id: part.id,
        slug: part.slug,
        title: part.title,
        description: part.description,
        category: {
            name: part.category.name,
            slug: part.category.slug
        },
        priceFrom: part.priceFrom,
        inStock: part.inStock,
        imageUrl: part.imageUrl,
        imageUrls: part.imageUrl ? [
            part.imageUrl
        ] : [],
        compatibleCars: part.carSlugs.map((slug)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$catalog$2d$fallback$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fallbackCars"].find((car)=>car.slug === slug)).filter((car)=>Boolean(car)).map((car)=>({
                slug: car.slug,
                fullName: buildCarName(car.brand.name, car.model, car.generation)
            }))
    };
}
function listFallbackParts(input = {}) {
    const normalizedQuery = input.query?.trim().toLowerCase() ?? "";
    let filtered = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$catalog$2d$fallback$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fallbackParts"];
    if (input.categorySlug) {
        filtered = filtered.filter((part)=>part.category.slug === input.categorySlug);
    }
    if (input.carSlug) {
        filtered = filtered.filter((part)=>part.carSlugs.includes(input.carSlug));
    }
    if (input.brandSlug) {
        filtered = filtered.filter((part)=>part.carSlugs.some((slug)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$catalog$2d$fallback$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fallbackCars"].find((car)=>car.slug === slug)?.brand.slug === input.brandSlug));
    }
    if (input.inStockOnly) {
        filtered = filtered.filter((part)=>part.inStock);
    }
    if (typeof input.minPrice === "number") {
        filtered = filtered.filter((part)=>typeof part.priceFrom === "number" && part.priceFrom >= input.minPrice);
    }
    if (typeof input.maxPrice === "number") {
        filtered = filtered.filter((part)=>typeof part.priceFrom === "number" && part.priceFrom <= input.maxPrice);
    }
    if (normalizedQuery) {
        filtered = filtered.filter((part)=>{
            const compatibleCars = part.carSlugs.map((slug)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$catalog$2d$fallback$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fallbackCars"].find((car)=>car.slug === slug)).filter((car)=>Boolean(car));
            return part.title.toLowerCase().includes(normalizedQuery) || part.description.toLowerCase().includes(normalizedQuery) || part.category.name.toLowerCase().includes(normalizedQuery) || compatibleCars.some((car)=>[
                    car.brand.name,
                    car.model,
                    car.generation ?? ""
                ].join(" ").toLowerCase().includes(normalizedQuery));
        });
    }
    switch(input.sort){
        case "price_asc":
            filtered = [
                ...filtered
            ].sort((a, b)=>(a.priceFrom ?? Number.MAX_SAFE_INTEGER) - (b.priceFrom ?? Number.MAX_SAFE_INTEGER));
            break;
        case "price_desc":
            filtered = [
                ...filtered
            ].sort((a, b)=>(b.priceFrom ?? 0) - (a.priceFrom ?? 0));
            break;
        case "title_asc":
            filtered = [
                ...filtered
            ].sort((a, b)=>a.title.localeCompare(b.title));
            break;
        default:
            break;
    }
    return filtered.map((part)=>mapFallbackPart(part.slug)).filter((part)=>Boolean(part));
}
function listFallbackCategories() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$catalog$2d$fallback$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fallbackCategories"].map((category)=>({
            id: category.id,
            name: category.name,
            slug: category.slug,
            partsCount: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$catalog$2d$fallback$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fallbackParts"].filter((part)=>part.category.slug === category.slug).length
        }));
}
function listFallbackCars(brandSlug) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$catalog$2d$fallback$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fallbackCars"].filter((car)=>brandSlug ? car.brand.slug === brandSlug : true).map((car)=>({
            id: car.id,
            slug: car.slug,
            fullName: buildCarName(car.brand.name, car.model, car.generation),
            brandName: car.brand.name,
            brandSlug: car.brand.slug
        }));
}
function listFallbackBrands() {
    const map = new Map();
    for (const car of __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$catalog$2d$fallback$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fallbackCars"]){
        const existing = map.get(car.brand.slug);
        if (existing) {
            existing.carsCount += 1;
            continue;
        }
        map.set(car.brand.slug, {
            slug: car.brand.slug,
            name: car.brand.name,
            carsCount: 1
        });
    }
    return Array.from(map.values()).sort((a, b)=>a.name.localeCompare(b.name));
}
async function listCatalogParts(input = {}) {
    const normalizedQuery = input.query?.trim() ?? "";
    const normalizedMinPrice = typeof input.minPrice === "number" && Number.isFinite(input.minPrice) ? input.minPrice : undefined;
    const normalizedMaxPrice = typeof input.maxPrice === "number" && Number.isFinite(input.maxPrice) ? input.maxPrice : undefined;
    const orderBy = input.sort === "price_asc" ? {
        priceFrom: "asc"
    } : input.sort === "price_desc" ? {
        priceFrom: "desc"
    } : input.sort === "title_asc" ? {
        title: "asc"
    } : {
        createdAt: "desc"
    };
    try {
        const compatibilityFilters = [];
        if (input.carSlug) {
            compatibilityFilters.push({
                compatibilities: {
                    some: {
                        car: {
                            slug: input.carSlug
                        }
                    }
                }
            });
        }
        if (input.brandSlug) {
            compatibilityFilters.push({
                compatibilities: {
                    some: {
                        car: {
                            brand: {
                                slug: input.brandSlug
                            }
                        }
                    }
                }
            });
        }
        const parts = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].part.findMany({
            where: {
                ...input.categorySlug ? {
                    category: {
                        slug: input.categorySlug
                    }
                } : {},
                ...compatibilityFilters.length ? {
                    AND: compatibilityFilters
                } : {},
                ...input.inStockOnly ? {
                    inStock: true
                } : {},
                ...typeof normalizedMinPrice === "number" || typeof normalizedMaxPrice === "number" ? {
                    priceFrom: {
                        ...typeof normalizedMinPrice === "number" ? {
                            gte: normalizedMinPrice
                        } : {},
                        ...typeof normalizedMaxPrice === "number" ? {
                            lte: normalizedMaxPrice
                        } : {}
                    }
                } : {},
                ...normalizedQuery ? {
                    OR: [
                        {
                            title: {
                                contains: normalizedQuery,
                                mode: "insensitive"
                            }
                        },
                        {
                            description: {
                                contains: normalizedQuery,
                                mode: "insensitive"
                            }
                        },
                        {
                            category: {
                                name: {
                                    contains: normalizedQuery,
                                    mode: "insensitive"
                                }
                            }
                        },
                        {
                            compatibilities: {
                                some: {
                                    car: {
                                        model: {
                                            contains: normalizedQuery,
                                            mode: "insensitive"
                                        }
                                    }
                                }
                            }
                        },
                        {
                            compatibilities: {
                                some: {
                                    car: {
                                        brand: {
                                            name: {
                                                contains: normalizedQuery,
                                                mode: "insensitive"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    ]
                } : {}
            },
            include: {
                category: true,
                images: {
                    orderBy: {
                        sortOrder: "asc"
                    },
                    take: 1
                },
                compatibilities: {
                    include: {
                        car: {
                            include: {
                                brand: true
                            }
                        }
                    }
                }
            },
            orderBy
        });
        return parts.map((part)=>({
                id: part.id,
                slug: part.slug,
                title: part.title,
                description: part.description,
                category: {
                    name: part.category.name,
                    slug: part.category.slug
                },
                priceFrom: part.priceFrom,
                inStock: part.inStock,
                imageUrl: part.images[0]?.url ?? null,
                imageUrls: part.images.map((image)=>image.url),
                compatibleCars: part.compatibilities.map((compatibility)=>({
                        slug: compatibility.car.slug,
                        fullName: buildCarName(compatibility.car.brand.name, compatibility.car.model, compatibility.car.generation)
                    }))
            }));
    } catch  {
        return listFallbackParts(input);
    }
}
async function listCatalogCategories() {
    try {
        const categories = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].category.findMany({
            include: {
                _count: {
                    select: {
                        parts: true
                    }
                }
            },
            orderBy: {
                name: "asc"
            }
        });
        return categories.map((category)=>({
                id: category.id,
                name: category.name,
                slug: category.slug,
                partsCount: category._count.parts
            }));
    } catch  {
        return listFallbackCategories();
    }
}
async function listCatalogCars(brandSlug) {
    try {
        const cars = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].model.findMany({
            where: brandSlug ? {
                brand: {
                    slug: brandSlug
                }
            } : undefined,
            include: {
                brand: true
            },
            orderBy: [
                {
                    brand: {
                        name: "asc"
                    }
                },
                {
                    model: "asc"
                }
            ]
        });
        return cars.map((car)=>({
                id: car.id,
                slug: car.slug,
                fullName: buildCarName(car.brand.name, car.model, car.generation),
                brandName: car.brand.name,
                brandSlug: car.brand.slug
            }));
    } catch  {
        return listFallbackCars(brandSlug);
    }
}
async function listCatalogBrands() {
    try {
        const brands = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].brand.findMany({
            include: {
                _count: {
                    select: {
                        models: true
                    }
                }
            },
            orderBy: {
                name: "asc"
            }
        });
        return brands.map((brand)=>({
                slug: brand.slug,
                name: brand.name,
                carsCount: brand._count.models
            }));
    } catch  {
        return listFallbackBrands();
    }
}
async function getPartBySlug(slug) {
    try {
        const part = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].part.findUnique({
            where: {
                slug
            },
            include: {
                category: true,
                images: {
                    orderBy: {
                        sortOrder: "asc"
                    }
                },
                compatibilities: {
                    include: {
                        car: {
                            include: {
                                brand: true
                            }
                        }
                    }
                }
            }
        });
        if (!part) {
            return null;
        }
        return {
            id: part.id,
            slug: part.slug,
            title: part.title,
            description: part.description,
            category: {
                name: part.category.name,
                slug: part.category.slug
            },
            priceFrom: part.priceFrom,
            inStock: part.inStock,
            imageUrl: part.images[0]?.url ?? null,
            imageUrls: part.images.map((image)=>image.url),
            compatibleCars: part.compatibilities.map((compatibility)=>({
                    slug: compatibility.car.slug,
                    fullName: buildCarName(compatibility.car.brand.name, compatibility.car.model, compatibility.car.generation)
                }))
        };
    } catch  {
        return mapFallbackPart(slug);
    }
}
async function getCarBySlug(slug) {
    try {
        const car = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].model.findFirst({
            where: {
                slug
            },
            include: {
                brand: true
            }
        });
        if (!car) {
            return null;
        }
        return {
            id: car.id,
            slug: car.slug,
            fullName: buildCarName(car.brand.name, car.model, car.generation),
            brandName: car.brand.name,
            brandSlug: car.brand.slug
        };
    } catch  {
        const fallbackCar = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$catalog$2d$fallback$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fallbackCars"].find((car)=>car.slug === slug);
        if (!fallbackCar) {
            return null;
        }
        return {
            id: fallbackCar.id,
            slug: fallbackCar.slug,
            fullName: buildCarName(fallbackCar.brand.name, fallbackCar.model, fallbackCar.generation),
            brandName: fallbackCar.brand.name,
            brandSlug: fallbackCar.brand.slug
        };
    }
}
}),
"[project]/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_ace9e6b1fee9bd89d608f1baf139bac6/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_ace9e6b1fee9bd89d608f1baf139bac6/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$catalog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/catalog.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$site$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/site-settings.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
async function HomePage() {
    const [cars, settings] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$catalog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listCatalogCars"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$site$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPublicSiteSettings"])()
    ]);
    const randomCars = [
        ...cars
    ].sort(()=>Math.random() - 0.5).slice(0, 6);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "space-y-5 rounded-2xl border border-primary/20 bg-linear-to-br from-primary/5 via-background to-background p-5 sm:p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Badge"], {
                        variant: "outline",
                        className: "w-fit uppercase tracking-wider",
                        children: "Chinalending"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-semibold leading-tight sm:text-4xl",
                            children: "Каталог запчастей для китайских авто с быстрым подбором по VIN"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2 sm:flex-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                asChild: true,
                                size: "lg",
                                className: "sm:min-w-48",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/catalog",
                                    children: "Открыть каталог"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                asChild: true,
                                size: "lg",
                                variant: "outline",
                                className: "sm:min-w-48",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildWhatsAppLink"])("Здравствуйте! Нужна помощь с подбором запчастей.", settings.orderWhatsAppPhone),
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: "Написать в WhatsApp"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid gap-4 sm:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-base",
                                    children: "OEM и аналоги"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "text-sm text-muted-foreground",
                                children: "Подбираем оригинальные номера и качественные замены по вашему бюджету."
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-base",
                                    children: "Проверка совместимости"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "text-sm text-muted-foreground",
                                children: "Учитываем поколение, модификацию и год выпуска по VIN и каталожным данным."
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-base",
                                    children: "Оперативная логистика"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "text-sm text-muted-foreground",
                                children: "Отправка по городам Казахстана, прозрачные сроки и сопровождение заказа."
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold",
                        children: "Популярные модели"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
                        children: randomCars.map((car)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/catalog?brand=${encodeURIComponent(car.brandSlug)}&car=${encodeURIComponent(car.slug)}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "h-full border-border/60 bg-card/90 transition-colors hover:border-primary/60",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "text-base",
                                                children: car.fullName
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 81,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex h-24 items-center justify-center rounded-lg border border-dashed border-border/70 bg-muted/40 text-xs text-muted-foreground",
                                                    children: [
                                                        "PNG модели: /public/placeholders/models/",
                                                        car.slug,
                                                        ".png"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: "Нажмите, чтобы открыть детали"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this)
                            }, car.id, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "rounded-xl border border-border/60 bg-card/80 p-5 text-center sm:p-7",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold",
                        children: "Нужна помощь менеджера прямо сейчас?"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                        asChild: true,
                        className: "mt-4",
                        size: "lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildWhatsAppLink"])("Здравствуйте! Проверьте, пожалуйста, наличие и цену по моему VIN.", settings.orderWhatsAppPhone),
                            target: "_blank",
                            rel: "noreferrer",
                            children: "Связаться в WhatsApp"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid gap-4 rounded-xl border border-border/60 bg-card/80 p-5 sm:grid-cols-2 sm:p-7",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold",
                                children: "Контакты"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            settings.displayPhones.length ? settings.displayPhones.map((phone, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: phone
                                }, `${phone}-${index}`, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 113,
                                    columnNumber: 15
                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: "—"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold",
                                children: "Карта"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            settings.mapIframeHtml ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-hidden rounded-lg border border-border/70 [&_iframe]:h-64 [&_iframe]:w-full [&_iframe]:border-0",
                                dangerouslySetInnerHTML: {
                                    __html: settings.mapIframeHtml
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-h-40 rounded-lg border border-dashed border-border/70"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b36212eb._.js.map