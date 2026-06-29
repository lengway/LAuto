module.exports = [
"[project]/lib/actions/admin-site-settings.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"404271ca5ddfc9029e0dff47b45da2efa274c2ed48":"deleteContactPhoneAction","4049cd7c5617ef415453cfa5b45429744af1bd9bef":"updateSiteSettingsAction","406598c0c620c61b3adbc93a0538527e034fa3895d":"updateContactPhoneAction","40772713648ab14c24ec1f1ec4312e28779f716bbf":"addContactPhoneAction"},"",""] */ __turbopack_context__.s([
    "addContactPhoneAction",
    ()=>addContactPhoneAction,
    "deleteContactPhoneAction",
    ()=>deleteContactPhoneAction,
    "updateContactPhoneAction",
    ()=>updateContactPhoneAction,
    "updateSiteSettingsAction",
    ()=>updateSiteSettingsAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_ace9e6b1fee9bd89d608f1baf139bac6/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_ace9e6b1fee9bd89d608f1baf139bac6/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$site$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/site-settings.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_ace9e6b1fee9bd89d608f1baf139bac6/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
function revalidatePublicAndAdminSettings() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/catalog");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/settings");
}
async function updateSiteSettingsAction(formData) {
    const orderWhatsAppPhone = String(formData.get("orderWhatsAppPhone") ?? "").trim();
    const mapUrl = String(formData.get("mapUrl") ?? "");
    if (!orderWhatsAppPhone) {
        throw new Error("Введите номер WhatsApp для заказов");
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$site$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["upsertSiteSettings"])({
        orderWhatsAppPhone,
        mapUrl
    });
    revalidatePublicAndAdminSettings();
}
async function addContactPhoneAction(formData) {
    const phone = String(formData.get("phone") ?? "").trim();
    if (!phone) {
        throw new Error("Введите номер телефона");
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$site$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addContactPhone"])(phone);
    revalidatePublicAndAdminSettings();
}
async function deleteContactPhoneAction(formData) {
    const phoneId = String(formData.get("phoneId") ?? "").trim();
    if (!phoneId) {
        throw new Error("phoneId is required");
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$site$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteContactPhone"])(phoneId);
    revalidatePublicAndAdminSettings();
}
async function updateContactPhoneAction(formData) {
    const phoneId = String(formData.get("phoneId") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    if (!phoneId) {
        throw new Error("phoneId is required");
    }
    if (!phone) {
        throw new Error("Введите номер телефона");
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$site$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateContactPhone"])(phoneId, phone);
    revalidatePublicAndAdminSettings();
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    updateSiteSettingsAction,
    addContactPhoneAction,
    deleteContactPhoneAction,
    updateContactPhoneAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateSiteSettingsAction, "4049cd7c5617ef415453cfa5b45429744af1bd9bef", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addContactPhoneAction, "40772713648ab14c24ec1f1ec4312e28779f716bbf", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteContactPhoneAction, "404271ca5ddfc9029e0dff47b45da2efa274c2ed48", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateContactPhoneAction, "406598c0c620c61b3adbc93a0538527e034fa3895d", null);
}),
"[project]/.next-internal/server/app/admin/settings/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/actions/admin-site-settings.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$admin$2d$site$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/admin-site-settings.ts [app-rsc] (ecmascript)");
;
;
;
;
}),
"[project]/.next-internal/server/app/admin/settings/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/actions/admin-site-settings.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "404271ca5ddfc9029e0dff47b45da2efa274c2ed48",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$admin$2d$site$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteContactPhoneAction"],
    "4049cd7c5617ef415453cfa5b45429744af1bd9bef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$admin$2d$site$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateSiteSettingsAction"],
    "406598c0c620c61b3adbc93a0538527e034fa3895d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$admin$2d$site$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateContactPhoneAction"],
    "40772713648ab14c24ec1f1ec4312e28779f716bbf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$admin$2d$site$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addContactPhoneAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$settings$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$admin$2d$site$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/admin/settings/page/actions.js { ACTIONS_MODULE0 => "[project]/lib/actions/admin-site-settings.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$admin$2d$site$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/admin-site-settings.ts [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_ace9e6b1fee9bd89d608f1baf139bac6/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable import/no-extraneous-dependencies */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "registerServerReference", {
    enumerable: true,
    get: function() {
        return _server.registerServerReference;
    }
});
const _server = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_ace9e6b1fee9bd89d608f1baf139bac6/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)"); //# sourceMappingURL=server-reference.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_ace9e6b1fee9bd89d608f1baf139bac6/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This function ensures that all the exported values are valid server actions,
// during the runtime. By definition all actions are required to be async
// functions, but here we can only check that they are functions.
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureServerEntryExports", {
    enumerable: true,
    get: function() {
        return ensureServerEntryExports;
    }
});
function ensureServerEntryExports(actions) {
    for(let i = 0; i < actions.length; i++){
        const action = actions[i];
        if (typeof action !== 'function') {
            throw Object.defineProperty(new Error(`A "use server" file can only export async functions, found ${typeof action}.\nRead more: https://nextjs.org/docs/messages/invalid-use-server-value`), "__NEXT_ERROR_CODE", {
                value: "E352",
                enumerable: false,
                configurable: true
            });
        }
    }
} //# sourceMappingURL=action-validate.js.map
}),
];

//# sourceMappingURL=_03a81ce6._.js.map