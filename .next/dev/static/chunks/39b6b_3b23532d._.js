(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/TEST ANIMATION LANDING/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/TEST ANIMATION LANDING/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/TEST ANIMATION LANDING/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/TEST ANIMATION LANDING/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/TEST ANIMATION LANDING/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    function useSyncExternalStore$2(subscribe, getSnapshot) {
        didWarnOld18Alpha || void 0 === React.startTransition || (didWarnOld18Alpha = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
        var value = getSnapshot();
        if (!didWarnUncachedGetSnapshot) {
            var cachedValue = getSnapshot();
            objectIs(value, cachedValue) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), didWarnUncachedGetSnapshot = !0);
        }
        cachedValue = useState({
            inst: {
                value: value,
                getSnapshot: getSnapshot
            }
        });
        var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
        useLayoutEffect({
            "useSyncExternalStore$2.useLayoutEffect": function() {
                inst.value = value;
                inst.getSnapshot = getSnapshot;
                checkIfSnapshotChanged(inst) && forceUpdate({
                    inst: inst
                });
            }
        }["useSyncExternalStore$2.useLayoutEffect"], [
            subscribe,
            value,
            getSnapshot
        ]);
        useEffect({
            "useSyncExternalStore$2.useEffect": function() {
                checkIfSnapshotChanged(inst) && forceUpdate({
                    inst: inst
                });
                return subscribe({
                    "useSyncExternalStore$2.useEffect": function() {
                        checkIfSnapshotChanged(inst) && forceUpdate({
                            inst: inst
                        });
                    }
                }["useSyncExternalStore$2.useEffect"]);
            }
        }["useSyncExternalStore$2.useEffect"], [
            subscribe
        ]);
        useDebugValue(value);
        return value;
    }
    function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
            var nextValue = latestGetSnapshot();
            return !objectIs(inst, nextValue);
        } catch (error) {
            return !0;
        }
    }
    function useSyncExternalStore$1(subscribe, getSnapshot) {
        return getSnapshot();
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_context__.r("[project]/TEST ANIMATION LANDING/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue, didWarnOld18Alpha = !1, didWarnUncachedGetSnapshot = !1, shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
    exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/TEST ANIMATION LANDING/node_modules/use-sync-external-store/shim/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/TEST ANIMATION LANDING/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-client] (ecmascript)");
}
}),
"[project]/TEST ANIMATION LANDING/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_context__.r("[project]/TEST ANIMATION LANDING/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), shim = __turbopack_context__.r("[project]/TEST ANIMATION LANDING/node_modules/use-sync-external-store/shim/index.js [app-client] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = shim.useSyncExternalStore, useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue;
    exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
        var instRef = useRef(null);
        if (null === instRef.current) {
            var inst = {
                hasValue: !1,
                value: null
            };
            instRef.current = inst;
        } else inst = instRef.current;
        instRef = useMemo(function() {
            function memoizedSelector(nextSnapshot) {
                if (!hasMemo) {
                    hasMemo = !0;
                    memoizedSnapshot = nextSnapshot;
                    nextSnapshot = selector(nextSnapshot);
                    if (void 0 !== isEqual && inst.hasValue) {
                        var currentSelection = inst.value;
                        if (isEqual(currentSelection, nextSnapshot)) return memoizedSelection = currentSelection;
                    }
                    return memoizedSelection = nextSnapshot;
                }
                currentSelection = memoizedSelection;
                if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
                var nextSelection = selector(nextSnapshot);
                if (void 0 !== isEqual && isEqual(currentSelection, nextSelection)) return memoizedSnapshot = nextSnapshot, currentSelection;
                memoizedSnapshot = nextSnapshot;
                return memoizedSelection = nextSelection;
            }
            var hasMemo = !1, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
            return [
                function() {
                    return memoizedSelector(getSnapshot());
                },
                null === maybeGetServerSnapshot ? void 0 : function() {
                    return memoizedSelector(maybeGetServerSnapshot());
                }
            ];
        }, [
            getSnapshot,
            getServerSnapshot,
            selector,
            isEqual
        ]);
        var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
        useEffect(function() {
            inst.hasValue = !0;
            inst.value = value;
        }, [
            value
        ]);
        useDebugValue(value);
        return value;
    };
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/TEST ANIMATION LANDING/node_modules/use-sync-external-store/shim/with-selector.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/TEST ANIMATION LANDING/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js [app-client] (ecmascript)");
}
}),
"[project]/TEST ANIMATION LANDING/node_modules/zustand/esm/vanilla.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createStore",
    ()=>createStore
]);
const createStoreImpl = (createState)=>{
    let state;
    const listeners = /* @__PURE__ */ new Set();
    const setState = (partial, replace)=>{
        const nextState = typeof partial === "function" ? partial(state) : partial;
        if (!Object.is(nextState, state)) {
            const previousState = state;
            state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
            listeners.forEach((listener)=>listener(state, previousState));
        }
    };
    const getState = ()=>state;
    const getInitialState = ()=>initialState;
    const subscribe = (listener)=>{
        listeners.add(listener);
        return ()=>listeners.delete(listener);
    };
    const api = {
        setState,
        getState,
        getInitialState,
        subscribe
    };
    const initialState = state = createState(setState, getState, api);
    return api;
};
const createStore = (createState)=>createState ? createStoreImpl(createState) : createStoreImpl;
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/zustand/esm/traditional.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWithEqualityFn",
    ()=>createWithEqualityFn,
    "useStoreWithEqualityFn",
    ()=>useStoreWithEqualityFn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/use-sync-external-store/shim/with-selector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/zustand/esm/vanilla.mjs [app-client] (ecmascript)");
;
;
;
const { useSyncExternalStoreWithSelector } = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const identity = (arg)=>arg;
function useStoreWithEqualityFn(api, selector = identity, equalityFn) {
    const slice = useSyncExternalStoreWithSelector(api.subscribe, api.getState, api.getInitialState, selector, equalityFn);
    __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useDebugValue(slice);
    return slice;
}
const createWithEqualityFnImpl = (createState, defaultEqualityFn)=>{
    const api = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStore"])(createState);
    const useBoundStoreWithEqualityFn = (selector, equalityFn = defaultEqualityFn)=>useStoreWithEqualityFn(api, selector, equalityFn);
    Object.assign(useBoundStoreWithEqualityFn, api);
    return useBoundStoreWithEqualityFn;
};
const createWithEqualityFn = (createState, defaultEqualityFn)=>createState ? createWithEqualityFnImpl(createState, defaultEqualityFn) : createWithEqualityFnImpl;
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/suspend-react/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clear",
    ()=>clear,
    "peek",
    ()=>peek,
    "preload",
    ()=>preload,
    "suspend",
    ()=>suspend
]);
const isPromise = (promise)=>typeof promise === 'object' && typeof promise.then === 'function';
const globalCache = [];
function shallowEqualArrays(arrA, arrB, equal = (a, b)=>a === b) {
    if (arrA === arrB) return true;
    if (!arrA || !arrB) return false;
    const len = arrA.length;
    if (arrB.length !== len) return false;
    for(let i = 0; i < len; i++)if (!equal(arrA[i], arrB[i])) return false;
    return true;
}
function query(fn, keys = null, preload = false, config = {}) {
    // If no keys were given, the function is the key
    if (keys === null) keys = [
        fn
    ];
    for (const entry of globalCache){
        // Find a match
        if (shallowEqualArrays(keys, entry.keys, entry.equal)) {
            // If we're pre-loading and the element is present, just return
            if (preload) return undefined; // If an error occurred, throw
            if (Object.prototype.hasOwnProperty.call(entry, 'error')) throw entry.error; // If a response was successful, return
            if (Object.prototype.hasOwnProperty.call(entry, 'response')) {
                if (config.lifespan && config.lifespan > 0) {
                    if (entry.timeout) clearTimeout(entry.timeout);
                    entry.timeout = setTimeout(entry.remove, config.lifespan);
                }
                return entry.response;
            } // If the promise is still unresolved, throw
            if (!preload) throw entry.promise;
        }
    } // The request is new or has changed.
    const entry = {
        keys,
        equal: config.equal,
        remove: ()=>{
            const index = globalCache.indexOf(entry);
            if (index !== -1) globalCache.splice(index, 1);
        },
        promise: (isPromise(fn) ? fn : fn(...keys) // When it resolves, store its value
        ).then((response)=>{
            entry.response = response; // Remove the entry in time if a lifespan was given
            if (config.lifespan && config.lifespan > 0) {
                entry.timeout = setTimeout(entry.remove, config.lifespan);
            }
        }) // Store caught errors, they will be thrown in the render-phase to bubble into an error-bound
        .catch((error)=>entry.error = error)
    }; // Register the entry
    globalCache.push(entry); // And throw the promise, this yields control back to React
    if (!preload) throw entry.promise;
    return undefined;
}
const suspend = (fn, keys, config)=>query(fn, keys, false, config);
const preload = (fn, keys, config)=>void query(fn, keys, true, config);
const peek = (keys)=>{
    var _globalCache$find;
    return (_globalCache$find = globalCache.find((entry)=>shallowEqualArrays(keys, entry.keys, entry.equal))) == null ? void 0 : _globalCache$find.response;
};
const clear = (keys)=>{
    if (keys === undefined || keys.length === 0) globalCache.splice(0, globalCache.length);
    else {
        const entry = globalCache.find((entry)=>shallowEqualArrays(keys, entry.keys, entry.equal));
        if (entry) entry.remove();
    }
};
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/scheduler/cjs/scheduler.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function performWorkUntilDeadline() {
        needsPaint = !1;
        if (isMessageLoopRunning) {
            var currentTime = exports.unstable_now();
            startTime = currentTime;
            var hasMoreWork = !0;
            try {
                a: {
                    isHostCallbackScheduled = !1;
                    isHostTimeoutScheduled && (isHostTimeoutScheduled = !1, localClearTimeout(taskTimeoutID), taskTimeoutID = -1);
                    isPerformingWork = !0;
                    var previousPriorityLevel = currentPriorityLevel;
                    try {
                        b: {
                            advanceTimers(currentTime);
                            for(currentTask = peek(taskQueue); null !== currentTask && !(currentTask.expirationTime > currentTime && shouldYieldToHost());){
                                var callback = currentTask.callback;
                                if ("function" === typeof callback) {
                                    currentTask.callback = null;
                                    currentPriorityLevel = currentTask.priorityLevel;
                                    var continuationCallback = callback(currentTask.expirationTime <= currentTime);
                                    currentTime = exports.unstable_now();
                                    if ("function" === typeof continuationCallback) {
                                        currentTask.callback = continuationCallback;
                                        advanceTimers(currentTime);
                                        hasMoreWork = !0;
                                        break b;
                                    }
                                    currentTask === peek(taskQueue) && pop(taskQueue);
                                    advanceTimers(currentTime);
                                } else pop(taskQueue);
                                currentTask = peek(taskQueue);
                            }
                            if (null !== currentTask) hasMoreWork = !0;
                            else {
                                var firstTimer = peek(timerQueue);
                                null !== firstTimer && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
                                hasMoreWork = !1;
                            }
                        }
                        break a;
                    } finally{
                        currentTask = null, currentPriorityLevel = previousPriorityLevel, isPerformingWork = !1;
                    }
                    hasMoreWork = void 0;
                }
            } finally{
                hasMoreWork ? schedulePerformWorkUntilDeadline() : isMessageLoopRunning = !1;
            }
        }
    }
    function push(heap, node) {
        var index = heap.length;
        heap.push(node);
        a: for(; 0 < index;){
            var parentIndex = index - 1 >>> 1, parent = heap[parentIndex];
            if (0 < compare(parent, node)) heap[parentIndex] = node, heap[index] = parent, index = parentIndex;
            else break a;
        }
    }
    function peek(heap) {
        return 0 === heap.length ? null : heap[0];
    }
    function pop(heap) {
        if (0 === heap.length) return null;
        var first = heap[0], last = heap.pop();
        if (last !== first) {
            heap[0] = last;
            a: for(var index = 0, length = heap.length, halfLength = length >>> 1; index < halfLength;){
                var leftIndex = 2 * (index + 1) - 1, left = heap[leftIndex], rightIndex = leftIndex + 1, right = heap[rightIndex];
                if (0 > compare(left, last)) rightIndex < length && 0 > compare(right, left) ? (heap[index] = right, heap[rightIndex] = last, index = rightIndex) : (heap[index] = left, heap[leftIndex] = last, index = leftIndex);
                else if (rightIndex < length && 0 > compare(right, last)) heap[index] = right, heap[rightIndex] = last, index = rightIndex;
                else break a;
            }
        }
        return first;
    }
    function compare(a, b) {
        var diff = a.sortIndex - b.sortIndex;
        return 0 !== diff ? diff : a.id - b.id;
    }
    function advanceTimers(currentTime) {
        for(var timer = peek(timerQueue); null !== timer;){
            if (null === timer.callback) pop(timerQueue);
            else if (timer.startTime <= currentTime) pop(timerQueue), timer.sortIndex = timer.expirationTime, push(taskQueue, timer);
            else break;
            timer = peek(timerQueue);
        }
    }
    function handleTimeout(currentTime) {
        isHostTimeoutScheduled = !1;
        advanceTimers(currentTime);
        if (!isHostCallbackScheduled) if (null !== peek(taskQueue)) isHostCallbackScheduled = !0, isMessageLoopRunning || (isMessageLoopRunning = !0, schedulePerformWorkUntilDeadline());
        else {
            var firstTimer = peek(timerQueue);
            null !== firstTimer && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
        }
    }
    function shouldYieldToHost() {
        return needsPaint ? !0 : exports.unstable_now() - startTime < frameInterval ? !1 : !0;
    }
    function requestHostTimeout(callback, ms) {
        taskTimeoutID = localSetTimeout(function() {
            callback(exports.unstable_now());
        }, ms);
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    exports.unstable_now = void 0;
    if ("object" === typeof performance && "function" === typeof performance.now) {
        var localPerformance = performance;
        exports.unstable_now = function() {
            return localPerformance.now();
        };
    } else {
        var localDate = Date, initialTime = localDate.now();
        exports.unstable_now = function() {
            return localDate.now() - initialTime;
        };
    }
    var taskQueue = [], timerQueue = [], taskIdCounter = 1, currentTask = null, currentPriorityLevel = 3, isPerformingWork = !1, isHostCallbackScheduled = !1, isHostTimeoutScheduled = !1, needsPaint = !1, localSetTimeout = "function" === typeof setTimeout ? setTimeout : null, localClearTimeout = "function" === typeof clearTimeout ? clearTimeout : null, localSetImmediate = "undefined" !== typeof setImmediate ? setImmediate : null, isMessageLoopRunning = !1, taskTimeoutID = -1, frameInterval = 5, startTime = -1;
    if ("function" === typeof localSetImmediate) var schedulePerformWorkUntilDeadline = function() {
        localSetImmediate(performWorkUntilDeadline);
    };
    else if ("undefined" !== typeof MessageChannel) {
        var channel = new MessageChannel(), port = channel.port2;
        channel.port1.onmessage = performWorkUntilDeadline;
        schedulePerformWorkUntilDeadline = function() {
            port.postMessage(null);
        };
    } else schedulePerformWorkUntilDeadline = function() {
        localSetTimeout(performWorkUntilDeadline, 0);
    };
    exports.unstable_IdlePriority = 5;
    exports.unstable_ImmediatePriority = 1;
    exports.unstable_LowPriority = 4;
    exports.unstable_NormalPriority = 3;
    exports.unstable_Profiling = null;
    exports.unstable_UserBlockingPriority = 2;
    exports.unstable_cancelCallback = function(task) {
        task.callback = null;
    };
    exports.unstable_forceFrameRate = function(fps) {
        0 > fps || 125 < fps ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : frameInterval = 0 < fps ? Math.floor(1e3 / fps) : 5;
    };
    exports.unstable_getCurrentPriorityLevel = function() {
        return currentPriorityLevel;
    };
    exports.unstable_next = function(eventHandler) {
        switch(currentPriorityLevel){
            case 1:
            case 2:
            case 3:
                var priorityLevel = 3;
                break;
            default:
                priorityLevel = currentPriorityLevel;
        }
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;
        try {
            return eventHandler();
        } finally{
            currentPriorityLevel = previousPriorityLevel;
        }
    };
    exports.unstable_requestPaint = function() {
        needsPaint = !0;
    };
    exports.unstable_runWithPriority = function(priorityLevel, eventHandler) {
        switch(priorityLevel){
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                priorityLevel = 3;
        }
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;
        try {
            return eventHandler();
        } finally{
            currentPriorityLevel = previousPriorityLevel;
        }
    };
    exports.unstable_scheduleCallback = function(priorityLevel, callback, options) {
        var currentTime = exports.unstable_now();
        "object" === typeof options && null !== options ? (options = options.delay, options = "number" === typeof options && 0 < options ? currentTime + options : currentTime) : options = currentTime;
        switch(priorityLevel){
            case 1:
                var timeout = -1;
                break;
            case 2:
                timeout = 250;
                break;
            case 5:
                timeout = 1073741823;
                break;
            case 4:
                timeout = 1e4;
                break;
            default:
                timeout = 5e3;
        }
        timeout = options + timeout;
        priorityLevel = {
            id: taskIdCounter++,
            callback: callback,
            priorityLevel: priorityLevel,
            startTime: options,
            expirationTime: timeout,
            sortIndex: -1
        };
        options > currentTime ? (priorityLevel.sortIndex = options, push(timerQueue, priorityLevel), null === peek(taskQueue) && priorityLevel === peek(timerQueue) && (isHostTimeoutScheduled ? (localClearTimeout(taskTimeoutID), taskTimeoutID = -1) : isHostTimeoutScheduled = !0, requestHostTimeout(handleTimeout, options - currentTime))) : (priorityLevel.sortIndex = timeout, push(taskQueue, priorityLevel), isHostCallbackScheduled || isPerformingWork || (isHostCallbackScheduled = !0, isMessageLoopRunning || (isMessageLoopRunning = !0, schedulePerformWorkUntilDeadline())));
        return priorityLevel;
    };
    exports.unstable_shouldYield = shouldYieldToHost;
    exports.unstable_wrapCallback = function(callback) {
        var parentPriorityLevel = currentPriorityLevel;
        return function() {
            var previousPriorityLevel = currentPriorityLevel;
            currentPriorityLevel = parentPriorityLevel;
            try {
                return callback.apply(this, arguments);
            } finally{
                currentPriorityLevel = previousPriorityLevel;
            }
        };
    };
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/TEST ANIMATION LANDING/node_modules/scheduler/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/TEST ANIMATION LANDING/node_modules/scheduler/cjs/scheduler.development.js [app-client] (ecmascript)");
}
}),
"[project]/TEST ANIMATION LANDING/node_modules/its-fine/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FiberProvider",
    ()=>m,
    "traverseFiber",
    ()=>i,
    "useContainer",
    ()=>w,
    "useContextBridge",
    ()=>x,
    "useContextMap",
    ()=>h,
    "useFiber",
    ()=>c,
    "useNearestChild",
    ()=>v,
    "useNearestParent",
    ()=>y
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const f = /* @__PURE__ */ (()=>{
    var e, t;
    return typeof window != "undefined" && (((e = window.document) == null ? void 0 : e.createElement) || ((t = window.navigator) == null ? void 0 : t.product) === "ReactNative");
})() ? __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
function i(e, t, r) {
    if (!e) return;
    if (r(e) === !0) return e;
    let n = t ? e.return : e.child;
    for(; n;){
        const u = i(n, t, r);
        if (u) return u;
        n = t ? null : n.sibling;
    }
}
function l(e) {
    try {
        return Object.defineProperties(e, {
            _currentRenderer: {
                get () {
                    return null;
                },
                set () {}
            },
            _currentRenderer2: {
                get () {
                    return null;
                },
                set () {}
            }
        });
    } catch (t) {
        return e;
    }
}
const a = /* @__PURE__ */ l(/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null));
class m extends __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    render() {
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](a.Provider, {
            value: this._reactInternals
        }, this.props.children);
    }
}
function c() {
    const e = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](a);
    if (e === null) throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]();
    return __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "c.useMemo": ()=>{
            for (const n of [
                e,
                e == null ? void 0 : e.alternate
            ]){
                if (!n) continue;
                const u = i(n, !1, {
                    "c.useMemo.u": (d)=>{
                        let s = d.memoizedState;
                        for(; s;){
                            if (s.memoizedState === t) return !0;
                            s = s.next;
                        }
                    }
                }["c.useMemo.u"]);
                if (u) return u;
            }
        }
    }["c.useMemo"], [
        e,
        t
    ]);
}
function w() {
    const e = c(), t = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "w.useMemo[t]": ()=>i(e, !0, {
                "w.useMemo[t]": (r)=>{
                    var n;
                    return ((n = r.stateNode) == null ? void 0 : n.containerInfo) != null;
                }
            }["w.useMemo[t]"])
    }["w.useMemo[t]"], [
        e
    ]);
    return t == null ? void 0 : t.stateNode.containerInfo;
}
function v(e) {
    const t = c(), r = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](void 0);
    return f(()=>{
        var n;
        r.current = (n = i(t, !1, (u)=>typeof u.type == "string" && (e === void 0 || u.type === e))) == null ? void 0 : n.stateNode;
    }, [
        t
    ]), r;
}
function y(e) {
    const t = c(), r = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](void 0);
    return f(()=>{
        var n;
        r.current = (n = i(t, !0, (u)=>typeof u.type == "string" && (e === void 0 || u.type === e))) == null ? void 0 : n.stateNode;
    }, [
        t
    ]), r;
}
const p = Symbol.for("react.context"), b = (e)=>e !== null && typeof e == "object" && "$$typeof" in e && e.$$typeof === p;
function h() {
    const e = c(), [t] = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "h.useState": ()=>/* @__PURE__ */ new Map()
    }["h.useState"]);
    t.clear();
    let r = e;
    for(; r;){
        const n = r.type;
        b(n) && n !== a && !t.has(n) && t.set(n, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"](l(n))), r = r.return;
    }
    return t;
}
function x() {
    const e = h();
    return __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "x.useMemo": ()=>Array.from(e.keys()).reduce({
                "x.useMemo": (t, r)=>({
                        "x.useMemo": (n)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](t, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](r.Provider, {
                                ...n,
                                value: e.get(r)
                            }))
                    })["x.useMemo"]
            }["x.useMemo"], {
                "x.useMemo": (t)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](m, {
                        ...t
                    })
            }["x.useMemo"])
    }["x.useMemo"], [
        e
    ]);
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/TEST ANIMATION LANDING/node_modules/react-use-measure/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>j
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function g(n, t) {
    let o;
    return (...i)=>{
        window.clearTimeout(o), o = window.setTimeout(()=>n(...i), t);
    };
}
function j({ debounce: n, scroll: t, polyfill: o, offsetSize: i } = {
    debounce: 0,
    scroll: !1,
    offsetSize: !1
}) {
    const a = o || (typeof window == "undefined" ? class {
    } : window.ResizeObserver);
    if (!a) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
    const [c, h] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        bottom: 0,
        right: 0,
        x: 0,
        y: 0
    }), e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        element: null,
        scrollContainers: null,
        resizeObserver: null,
        lastBounds: c,
        orientationHandler: null
    }), d = n ? typeof n == "number" ? n : n.scroll : null, f = n ? typeof n == "number" ? n : n.resize : null, w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(!1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>(w.current = !0, ()=>void (w.current = !1)));
    const [z, m, s] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const r = ()=>{
            if (!e.current.element) return;
            const { left: y, top: C, width: H, height: O, bottom: S, right: x, x: B, y: R } = e.current.element.getBoundingClientRect(), l = {
                left: y,
                top: C,
                width: H,
                height: O,
                bottom: S,
                right: x,
                x: B,
                y: R
            };
            e.current.element instanceof HTMLElement && i && (l.height = e.current.element.offsetHeight, l.width = e.current.element.offsetWidth), Object.freeze(l), w.current && !D(e.current.lastBounds, l) && h(e.current.lastBounds = l);
        };
        return [
            r,
            f ? g(r, f) : r,
            d ? g(r, d) : r
        ];
    }, [
        h,
        i,
        d,
        f
    ]);
    function v() {
        e.current.scrollContainers && (e.current.scrollContainers.forEach((r)=>r.removeEventListener("scroll", s, !0)), e.current.scrollContainers = null), e.current.resizeObserver && (e.current.resizeObserver.disconnect(), e.current.resizeObserver = null), e.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", e.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", e.current.orientationHandler));
    }
    function b() {
        e.current.element && (e.current.resizeObserver = new a(s), e.current.resizeObserver.observe(e.current.element), t && e.current.scrollContainers && e.current.scrollContainers.forEach((r)=>r.addEventListener("scroll", s, {
                capture: !0,
                passive: !0
            })), e.current.orientationHandler = ()=>{
            s();
        }, "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", e.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", e.current.orientationHandler));
    }
    const L = (r)=>{
        !r || r === e.current.element || (v(), e.current.element = r, e.current.scrollContainers = E(r), b());
    };
    return X(s, !!t), W(m), (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        v(), b();
    }, [
        t,
        s,
        m
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>v, []), [
        L,
        c,
        z
    ];
}
function W(n) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const t = n;
        return window.addEventListener("resize", t), ()=>void window.removeEventListener("resize", t);
    }, [
        n
    ]);
}
function X(n, t) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (t) {
            const o = n;
            return window.addEventListener("scroll", o, {
                capture: !0,
                passive: !0
            }), ()=>void window.removeEventListener("scroll", o, !0);
        }
    }, [
        n,
        t
    ]);
}
function E(n) {
    const t = [];
    if (!n || n === document.body) return t;
    const { overflow: o, overflowX: i, overflowY: a } = window.getComputedStyle(n);
    return [
        o,
        i,
        a
    ].some((c)=>c === "auto" || c === "scroll") && t.push(n), [
        ...t,
        ...E(n.parentElement)
    ];
}
const k = [
    "x",
    "y",
    "top",
    "bottom",
    "left",
    "right",
    "width",
    "height"
], D = (n, t)=>k.every((o)=>n[o] === t[o]);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/TEST ANIMATION LANDING/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_extends
]);
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/@react-three/drei/core/Fbo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Fbo",
    ()=>Fbo,
    "useFBO",
    ()=>useFBO
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export C as useThree>");
;
;
;
;
// 👇 uncomment when TS version supports function overloads
// export function useFBO(settings?: FBOSettings)
function useFBO(/** Width in pixels, or settings (will render fullscreen by default) */ width, /** Height in pixels */ height, /**Settings */ settings) {
    const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "useFBO.useThree[size]": (state)=>state.size
    }["useFBO.useThree[size]"]);
    const viewport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "useFBO.useThree[viewport]": (state)=>state.viewport
    }["useFBO.useThree[viewport]"]);
    const _width = typeof width === 'number' ? width : size.width * viewport.dpr;
    const _height = typeof height === 'number' ? height : size.height * viewport.dpr;
    const _settings = (typeof width === 'number' ? settings : width) || {};
    const { samples = 0, depth, ...targetSettings } = _settings;
    const depthBuffer = depth !== null && depth !== void 0 ? depth : _settings.depthBuffer; // backwards compatibility for deprecated `depth` prop
    const target = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useFBO.useMemo[target]": ()=>{
            const target = new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGLRenderTarget"](_width, _height, {
                minFilter: __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"],
                magFilter: __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"],
                type: __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HalfFloatType"],
                ...targetSettings
            });
            if (depthBuffer) {
                target.depthTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DepthTexture"](_width, _height, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatType"]);
            }
            target.samples = samples;
            return target;
        }
    }["useFBO.useMemo[target]"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "useFBO.useLayoutEffect": ()=>{
            target.setSize(_width, _height);
            if (samples) target.samples = samples;
        }
    }["useFBO.useLayoutEffect"], [
        samples,
        target,
        _width,
        _height
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useFBO.useEffect": ()=>{
            return ({
                "useFBO.useEffect": ()=>target.dispose()
            })["useFBO.useEffect"];
        }
    }["useFBO.useEffect"], []);
    return target;
}
//
// Fbo component
//
const Fbo = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ children, width, height, ...settings }, fref)=>{
    const target = useFBO(width, height, settings);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(fref, {
        "Fbo.useImperativeHandle": ()=>target
    }["Fbo.useImperativeHandle"], [
        target
    ]); // expose target through ref
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, children == null ? void 0 : children(target));
});
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/@react-three/drei/core/PerspectiveCamera.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PerspectiveCamera",
    ()=>PerspectiveCamera
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Fbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/@react-three/drei/core/Fbo.js [app-client] (ecmascript)");
;
;
;
;
const isFunction = (node)=>typeof node === 'function';
const PerspectiveCamera = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ envMap, resolution = 256, frames = Infinity, makeDefault, children, ...props }, ref)=>{
    const set = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "PerspectiveCamera.useThree[set]": ({ set })=>set
    }["PerspectiveCamera.useThree[set]"]);
    const camera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "PerspectiveCamera.useThree[camera]": ({ camera })=>camera
    }["PerspectiveCamera.useThree[camera]"]);
    const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "PerspectiveCamera.useThree[size]": ({ size })=>size
    }["PerspectiveCamera.useThree[size]"]);
    const cameraRef = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "PerspectiveCamera.useImperativeHandle": ()=>cameraRef.current
    }["PerspectiveCamera.useImperativeHandle"], []);
    const groupRef = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const fbo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Fbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFBO"])(resolution);
    __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "PerspectiveCamera.useLayoutEffect": ()=>{
            if (!props.manual) {
                cameraRef.current.aspect = size.width / size.height;
            }
        }
    }["PerspectiveCamera.useLayoutEffect"], [
        size,
        props
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "PerspectiveCamera.useLayoutEffect": ()=>{
            cameraRef.current.updateProjectionMatrix();
        }
    }["PerspectiveCamera.useLayoutEffect"]);
    let count = 0;
    let oldEnvMap = null;
    const functional = isFunction(children);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "PerspectiveCamera.useFrame": (state)=>{
            if (functional && (frames === Infinity || count < frames)) {
                groupRef.current.visible = false;
                state.gl.setRenderTarget(fbo);
                oldEnvMap = state.scene.background;
                if (envMap) state.scene.background = envMap;
                state.gl.render(state.scene, cameraRef.current);
                state.scene.background = oldEnvMap;
                state.gl.setRenderTarget(null);
                groupRef.current.visible = true;
                count++;
            }
        }
    }["PerspectiveCamera.useFrame"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "PerspectiveCamera.useLayoutEffect": ()=>{
            if (makeDefault) {
                const oldCam = camera;
                set({
                    "PerspectiveCamera.useLayoutEffect": ()=>({
                            camera: cameraRef.current
                        })
                }["PerspectiveCamera.useLayoutEffect"]);
                return ({
                    "PerspectiveCamera.useLayoutEffect": ()=>set({
                            "PerspectiveCamera.useLayoutEffect": ()=>({
                                    camera: oldCam
                                })
                        }["PerspectiveCamera.useLayoutEffect"])
                })["PerspectiveCamera.useLayoutEffect"];
            }
        // The camera should not be part of the dependency list because this components camera is a stable reference
        // that must exchange the default, and clean up after itself on unmount.
        }
    }["PerspectiveCamera.useLayoutEffect"], [
        cameraRef,
        makeDefault,
        set
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("perspectiveCamera", (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ref: cameraRef
    }, props), !functional && children), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("group", {
        ref: groupRef
    }, functional && children(fbo.texture)));
});
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/@react-three/drei/helpers/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "version",
    ()=>version
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
const getVersion = ()=>parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REVISION"].replace(/\D+/g, ''));
const version = /* @__PURE__ */ getVersion();
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/@react-three/drei/core/Stars.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Stars",
    ()=>Stars
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/@react-three/drei/helpers/constants.js [app-client] (ecmascript)");
;
;
;
;
class StarfieldMaterial extends __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"] {
    constructor(){
        super({
            uniforms: {
                time: {
                    value: 0.0
                },
                fade: {
                    value: 1.0
                }
            },
            vertexShader: /* glsl */ `
      uniform float time;
      attribute float size;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 0.5);
        gl_PointSize = size * (30.0 / -mvPosition.z) * (3.0 + sin(time + 100.0));
        gl_Position = projectionMatrix * mvPosition;
      }`,
            fragmentShader: /* glsl */ `
      uniform sampler2D pointTexture;
      uniform float fade;
      varying vec3 vColor;
      void main() {
        float opacity = 1.0;
        if (fade == 1.0) {
          float d = distance(gl_PointCoord, vec2(0.5, 0.5));
          opacity = 1.0 / (1.0 + exp(16.0 * (d - 0.25)));
        }
        gl_FragColor = vec4(vColor, opacity);

        #include <tonemapping_fragment>
	      #include <${__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"] >= 154 ? 'colorspace_fragment' : 'encodings_fragment'}>
      }`
        });
    }
}
const genStar = (r)=>{
    return new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().setFromSpherical(new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Spherical"](r, Math.acos(1 - Math.random() * 2), Math.random() * 2 * Math.PI));
};
const Stars = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ radius = 100, depth = 50, count = 5000, saturation = 0, factor = 4, fade = false, speed = 1 }, ref)=>{
    const material = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const [position, color, size] = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Stars.useMemo": ()=>{
            const positions = [];
            const colors = [];
            const sizes = Array.from({
                length: count
            }, {
                "Stars.useMemo.sizes": ()=>(0.5 + 0.5 * Math.random()) * factor
            }["Stars.useMemo.sizes"]);
            const color = new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]();
            let r = radius + depth;
            const increment = depth / count;
            for(let i = 0; i < count; i++){
                r -= increment * Math.random();
                positions.push(...genStar(r).toArray());
                color.setHSL(i / count, saturation, 0.9);
                colors.push(color.r, color.g, color.b);
            }
            return [
                new Float32Array(positions),
                new Float32Array(colors),
                new Float32Array(sizes)
            ];
        }
    }["Stars.useMemo"], [
        count,
        depth,
        factor,
        radius,
        saturation
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "Stars.useFrame": (state)=>material.current && (material.current.uniforms.time.value = state.clock.elapsedTime * speed)
    }["Stars.useFrame"]);
    const [starfieldMaterial] = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "Stars.useState": ()=>new StarfieldMaterial()
    }["Stars.useState"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("points", {
        ref: ref
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("bufferGeometry", null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("bufferAttribute", {
        attach: "attributes-position",
        args: [
            position,
            3
        ]
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("bufferAttribute", {
        attach: "attributes-color",
        args: [
            color,
            3
        ]
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("bufferAttribute", {
        attach: "attributes-size",
        args: [
            size,
            1
        ]
    })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("primitive", {
        ref: material,
        object: starfieldMaterial,
        attach: "material",
        blending: __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"],
        "uniforms-fade-value": fade,
        depthWrite: false,
        transparent: true,
        vertexColors: true
    }));
});
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/@react-three/postprocessing/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ASCII",
    ()=>eo,
    "Autofocus",
    ()=>ht,
    "Bloom",
    ()=>wt,
    "BrightnessContrast",
    ()=>St,
    "ChromaticAberration",
    ()=>yt,
    "ColorAverage",
    ()=>Pt,
    "ColorDepth",
    ()=>bt,
    "Depth",
    ()=>Et,
    "DepthOfField",
    ()=>ce,
    "DotScreen",
    ()=>Rt,
    "EffectComposer",
    ()=>dt,
    "EffectComposerContext",
    ()=>D,
    "FXAA",
    ()=>Nt,
    "Glitch",
    ()=>Ut,
    "GodRays",
    ()=>Ct,
    "Grid",
    ()=>zt,
    "HueSaturation",
    ()=>Tt,
    "LUT",
    ()=>Zt,
    "LensFlare",
    ()=>gt,
    "LensFlareEffect",
    ()=>fe,
    "N8AO",
    ()=>ao,
    "Noise",
    ()=>At,
    "Outline",
    ()=>Bt,
    "Pixelation",
    ()=>Vt,
    "Ramp",
    ()=>Ot,
    "RampEffect",
    ()=>pe,
    "RampType",
    ()=>ue,
    "SMAA",
    ()=>Lt,
    "SSAO",
    ()=>It,
    "Scanline",
    ()=>Ft,
    "Select",
    ()=>mt,
    "Selection",
    ()=>pt,
    "SelectiveBloom",
    ()=>kt,
    "Sepia",
    ()=>Gt,
    "ShockWave",
    ()=>Ht,
    "Texture",
    ()=>Wt,
    "TiltShift",
    ()=>$t,
    "TiltShift2",
    ()=>Yt,
    "TiltShiftEffect",
    ()=>me,
    "ToneMapping",
    ()=>Xt,
    "Vignette",
    ()=>qt,
    "WaterEffect",
    ()=>oo,
    "WaterEffectImpl",
    ()=>de,
    "resolveRef",
    ()=>k,
    "selectionContext",
    ()=>H,
    "useVector2",
    ()=>Z,
    "wrapEffect",
    ()=>P
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export e as extend>");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__o__as__createPortal$3e$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export o as createPortal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__G__as__useLoader$3e$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export G as useLoader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__applyProps$3e$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export s as applyProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/postprocessing/build/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$maath$2f$dist$2f$maath$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/@react-three/postprocessing/node_modules/maath/dist/maath.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$maath$2f$dist$2f$easing$2d$3be59c6d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__easing$3e$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/@react-three/postprocessing/node_modules/maath/dist/easing-3be59c6d.esm.js [app-client] (ecmascript) <export e as easing>");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$n8ao$2f$dist$2f$N8AO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/n8ao/dist/N8AO.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const H = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function pt({ children: e, enabled: t = !0 }) {
    const [o, r] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            selected: o,
            select: r,
            enabled: t
        }), [
        o,
        r,
        t
    ]);
    return /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(H.Provider, {
        value: a,
        children: e
    });
}
function mt({ enabled: e = !1, children: t, ...o }) {
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(H);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (a && e) {
            let n = !1;
            const i = [];
            if (r.current.traverse((s)=>{
                s.type === "Mesh" && i.push(s), a.selected.indexOf(s) === -1 && (n = !0);
            }), n) return a.select((s)=>[
                    ...s,
                    ...i
                ]), ()=>{
                a.select((s)=>s.filter((l)=>!i.includes(l)));
            };
        }
    }, [
        e,
        t,
        a
    ]), /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("group", {
        ref: r,
        ...o,
        children: t
    });
}
const D = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null), ie = (e)=>(e.getAttributes() & 2) === 2, dt = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(/*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ children: e, camera: t, scene: o, resolutionScale: r, enabled: a = !0, renderPriority: n = 1, autoClear: i = !0, depthBuffer: s, enableNormalPass: l, stencilBuffer: p, multisampling: _ = 8, frameBufferType: S = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HalfFloatType"] }, g)=>{
    const { gl: d, scene: m, camera: v, size: x } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])(), f = o || m, u = t || v, [c, U, b] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const C = new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectComposer"](d, {
            depthBuffer: s,
            stencilBuffer: p,
            multisampling: _,
            frameBufferType: S
        });
        C.addPass(new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderPass"](f, u));
        let R = null, E = null;
        return l && (E = new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NormalPass"](f, u), E.enabled = !1, C.addPass(E), r !== void 0 && (R = new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DepthDownsamplingPass"]({
            normalBuffer: E.texture,
            resolutionScale: r
        }), R.enabled = !1, C.addPass(R))), [
            C,
            E,
            R
        ];
    }, [
        u,
        d,
        s,
        p,
        _,
        S,
        f,
        l,
        r
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>c?.setSize(x.width, x.height), [
        c,
        x
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])((C, R)=>{
        if (a) {
            const E = d.autoClear;
            d.autoClear = i, p && !i && d.clearStencil(), c.render(R), d.autoClear = E;
        }
    }, a ? n : 0);
    const F = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        const C = [], R = F.current.__r3f;
        if (R && c) {
            const E = R.children;
            for(let T = 0; T < E.length; T++){
                const N = E[T].object;
                if (N instanceof __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Effect"]) {
                    const q = [
                        N
                    ];
                    if (!ie(N)) {
                        let G = null;
                        for(; (G = E[T + 1]?.object) instanceof __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Effect"] && !ie(G);)q.push(G), T++;
                    }
                    const $ = new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectPass"](u, ...q);
                    C.push($);
                } else N instanceof __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pass"] && C.push(N);
            }
            for (const T of C)c?.addPass(T);
            U && (U.enabled = !0), b && (b.enabled = !0);
        }
        return ()=>{
            for (const E of C)c?.removePass(E);
            U && (U.enabled = !1), b && (b.enabled = !1);
        };
    }, [
        c,
        e,
        u,
        U,
        b
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const C = d.toneMapping;
        return d.toneMapping = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoToneMapping"], ()=>{
            d.toneMapping = C;
        };
    }, [
        d
    ]);
    const X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            composer: c,
            normalPass: U,
            downSamplingPass: b,
            resolutionScale: r,
            camera: u,
            scene: f
        }), [
        c,
        U,
        b,
        r,
        u,
        f
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(g, ()=>c, [
        c
    ]), /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(D.Provider, {
        value: X,
        children: /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("group", {
            ref: F,
            children: e
        })
    });
})), k = (e)=>typeof e == "object" && e != null && "current" in e ? e.current : e;
let vt = 0;
const le = /*@__PURE__*/ new WeakMap, P = (e, t)=>function({ blendFunction: o = t?.blendFunction, opacity: r = t?.opacity, ...a }) {
        let n = le.get(e);
        if (!n) {
            const l = `@react-three/postprocessing/${e.name}-${vt++}`;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__["extend"])({
                [l]: e
            }), le.set(e, n = l);
        }
        const i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])((l)=>l.camera), s = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
            "P.useMemo[s]": ()=>[
                    ...t?.args ?? [],
                    ...a.args ?? [
                        {
                            ...t,
                            ...a
                        }
                    ]
                ]
        }["P.useMemo[s]"], [
            JSON.stringify(a)
        ]);
        return /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(n, {
            camera: i,
            "blendMode-blendFunction": o,
            "blendMode-opacity-value": r,
            ...a,
            args: s
        });
    }, Z = (e, t)=>{
    const o = e[t];
    return __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Z.useMemo": ()=>typeof o == "number" ? new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](o, o) : o ? new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](...o) : new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"]
    }["Z.useMemo"], [
        o
    ]);
}, ce = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function({ blendFunction: e, worldFocusDistance: t, worldFocusRange: o, focusDistance: r, focusRange: a, focalLength: n, bokehScale: i, resolutionScale: s, resolutionX: l, resolutionY: p, width: _, height: S, target: g, depthTexture: d, ...m }, v) {
    const { camera: x } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(D), f = g != null, u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const c = new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DepthOfFieldEffect"](x, {
            blendFunction: e,
            worldFocusDistance: t,
            worldFocusRange: o,
            focusDistance: r,
            focusRange: a,
            focalLength: n,
            bokehScale: i,
            resolutionScale: s,
            resolutionX: l,
            resolutionY: p,
            width: _,
            height: S
        });
        f && (c.target = new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]), d && c.setDepthTexture(d.texture, d.packing);
        const U = c.maskPass;
        return U.maskFunction = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MaskFunction"].MULTIPLY_RGB_SET_ALPHA, c;
    }, [
        x,
        e,
        t,
        o,
        r,
        a,
        n,
        i,
        s,
        l,
        p,
        _,
        S,
        f,
        d
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>{
            u.dispose();
        }, [
        u
    ]), /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("primitive", {
        ...m,
        ref: v,
        object: u,
        target: g
    });
}), ht = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ target: e = void 0, mouse: t = !1, debug: o = void 0, manual: r = !1, smoothTime: a = .25, ...n }, i)=>{
    const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])(({ scene: b })=>b), S = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])(({ pointer: b })=>b), { composer: g, camera: d } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(D), [m] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DepthPickingPass"]), [v] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CopyPass"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>(g.addPass(m), g.addPass(v), ()=>{
            g.removePass(m), g.removePass(v);
        }), [
        g,
        m,
        v
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>{
            m.dispose(), v.dispose();
        }, [
        m,
        v
    ]);
    const [x] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0)), [f] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0)), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(async (b, F)=>(f.x = b, f.y = F, f.z = await m.readDepth(f), f.z = f.z * 2 - 1, 1 - f.z > 1e-7 ? f.unproject(d) : !1), [
        f,
        m,
        d
    ]), c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(async (b, F = !0)=>{
        if (e) x.set(...e);
        else {
            const { x: X, y: C } = t ? S : {
                x: 0,
                y: 0
            }, R = await u(X, C);
            R && x.copy(R);
        }
        F && s.current?.target && (a > 0 && b > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$maath$2f$dist$2f$easing$2d$3be59c6d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__easing$3e$__["easing"].damp3(s.current.target, x, a, b) : s.current.target.copy(x));
    }, [
        e,
        x,
        t,
        u,
        a,
        S
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])(async (b, F)=>{
        r || c(F), l.current && l.current.position.copy(x), p.current && s.current?.target && p.current.position.copy(s.current.target);
    });
    const U = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            dofRef: s,
            hitpoint: x,
            update: c
        }), [
        x,
        c
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(i, ()=>U, [
        U
    ]), /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            o ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__o__as__createPortal$3e$__["createPortal"])(/*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("mesh", {
                        ref: l,
                        children: [
                            /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("sphereGeometry", {
                                args: [
                                    o,
                                    16,
                                    16
                                ]
                            }),
                            /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("meshBasicMaterial", {
                                color: "#00ff00",
                                opacity: 1,
                                transparent: !0,
                                depthWrite: !1
                            })
                        ]
                    }),
                    /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("mesh", {
                        ref: p,
                        children: [
                            /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("sphereGeometry", {
                                args: [
                                    o / 2,
                                    16,
                                    16
                                ]
                            }),
                            /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("meshBasicMaterial", {
                                color: "#00ff00",
                                opacity: .5,
                                transparent: !0,
                                depthWrite: !1
                            })
                        ]
                    })
                ]
            }), _) : null,
            /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ce, {
                ref: s,
                ...n,
                target: x
            })
        ]
    });
}), _t = {
    fragmentShader: `
    uniform float time;
    uniform vec2 lensPosition;
    uniform vec2 screenRes;
    uniform vec3 colorGain;
    uniform float starPoints;
    uniform float glareSize;
    uniform float flareSize;
    uniform float flareSpeed;
    uniform float flareShape;
    uniform float haloScale;
    uniform float opacity;
    uniform bool animated;
    uniform bool anamorphic;
    uniform bool enabled;
    uniform bool secondaryGhosts;
    uniform bool starBurst;
    uniform float ghostScale;
    uniform bool aditionalStreaks;
    uniform sampler2D lensDirtTexture;
    vec2 vTexCoord;
    
    float rand(float n){return fract(sin(n) * 43758.5453123);}

    float noise(float p){
      float fl = floor(p);
      float fc = fract(p);
      return mix(rand(fl),rand(fl + 1.0), fc);
    }

    vec3 hsv2rgb(vec3 c)
    {
      vec4 k = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
      vec3 p = abs(fract(c.xxx + k.xyz) * 6.0 - k.www);
      return c.z * mix(k.xxx, clamp(p - k.xxx, 0.0, 1.0), c.y);
    }

    float saturate(float x)
    {
      return clamp(x, 0.,1.);
    }

    vec2 rotateUV(vec2 uv, float rotation)
    {
      return vec2(
          cos(rotation) * uv.x + sin(rotation) * uv.y,
          cos(rotation) * uv.y - sin(rotation) * uv.x
      );
    }

    // Based on https://www.shadertoy.com/view/XtKfRV
    vec3 drawflare(vec2 p, float intensity, float rnd, float speed, int id)
    {
      float flarehueoffset = (1. / 32.) * float(id) * 0.1;
      float lingrad = distance(vec2(0.), p);
      float expgrad = 1. / exp(lingrad * (fract(rnd) * 0.66 + 0.33));
      vec3 colgrad = hsv2rgb(vec3( fract( (expgrad * 8.) + speed * flareSpeed + flarehueoffset), pow(1.-abs(expgrad*2.-1.), 0.45), 20.0 * expgrad * intensity)); //rainbow spectrum effect

      float internalStarPoints;

      if(anamorphic){
        internalStarPoints = 1.0;
      } else{
        internalStarPoints = starPoints;
      }
      
      float blades = length(p * flareShape * sin(internalStarPoints * atan(p.x, p.y)));
      
      float comp = pow(1.-saturate(blades), ( anamorphic ? 100. : 12.));
      comp += saturate(expgrad-0.9) * 3.;
      comp = pow(comp * expgrad, 8. + (1.-intensity) * 5.);
      
      if(flareSpeed > 0.0){
        return vec3(comp) * colgrad;
      } else{
        return vec3(comp) * flareSize * 15.;
      }
    }

    float dist(vec3 a, vec3 b) { return abs(a.x - b.x) + abs(a.y - b.y) + abs(a.z - b.z); }

    vec3 saturate(vec3 x)
    {
      return clamp(x, vec3(0.0), vec3(1.0));
    }

    // Based on https://www.shadertoy.com/view/XtKfRV
    float glare(vec2 uv, vec2 pos, float size)
    {
      vec2 main;

      if(animated){
        main = rotateUV(uv-pos, time * 0.1);      
      } else{
        main = uv-pos;     
      }
      
      float ang = atan(main.y, main.x) * (anamorphic ? 1.0 : starPoints);
      float dist = length(main); 
      dist = pow(dist, .9);
      
      float f0 = 1.0/(length(uv-pos)*(1.0/size*16.0)+.2);

      return f0+f0*(sin((ang))*.2 +.3);
    }

    float sdHex(vec2 p){
      p = abs(p);
      vec2 q = vec2(p.x*2.0*0.5773503, p.y + p.x*0.5773503);
      return dot(step(q.xy,q.yx), 1.0-q.yx);
    }

    //Based on https://www.shadertoy.com/view/dllSRX
    float fpow(float x, float k){
      return x > k ? pow((x-k)/(1.0-k),2.0) : 0.0;
    }

    vec3 renderhex(vec2 uv, vec2 p, float s, vec3 col){
      uv -= p;
      if (abs(uv.x) < 0.2*s && abs(uv.y) < 0.2*s){
          return mix(vec3(0),mix(vec3(0),col,0.1 + fpow(length(uv/s),0.1)*10.0),smoothstep(0.0,0.1,sdHex(uv*20.0/s)));
      }
      return vec3(0);
    }

    // Based on https://www.shadertoy.com/view/4sX3Rs
    vec3 LensFlare(vec2 uv, vec2 pos)
    {
      vec2 main = uv-pos;
      vec2 uvd = uv*(length(uv));
      
      float ang = atan(main.x,main.y);
      
      float f0 = .3/(length(uv-pos)*16.0+1.0);
      
      f0 = f0*(sin(noise(sin(ang*3.9-(animated ? time : 0.0) * 0.3) * starPoints))*.2 );
      
      float f1 = max(0.01-pow(length(uv+1.2*pos),1.9),.0)*7.0;

      float f2 = max(.9/(10.0+32.0*pow(length(uvd+0.99*pos),2.0)),.0)*0.35;
      float f22 = max(.9/(11.0+32.0*pow(length(uvd+0.85*pos),2.0)),.0)*0.23;
      float f23 = max(.9/(12.0+32.0*pow(length(uvd+0.95*pos),2.0)),.0)*0.6;
      
      vec2 uvx = mix(uv,uvd, 0.1);
      
      float f4 = max(0.01-pow(length(uvx+0.4*pos),2.9),.0)*4.02;
      float f42 = max(0.0-pow(length(uvx+0.45*pos),2.9),.0)*4.1;
      float f43 = max(0.01-pow(length(uvx+0.5*pos),2.9),.0)*4.6;
      
      uvx = mix(uv,uvd,-.4);
      
      float f5 = max(0.01-pow(length(uvx+0.1*pos),5.5),.0)*2.0;
      float f52 = max(0.01-pow(length(uvx+0.2*pos),5.5),.0)*2.0;
      float f53 = max(0.01-pow(length(uvx+0.1*pos),5.5),.0)*2.0;
      
      uvx = mix(uv,uvd, 2.1);
      
      float f6 = max(0.01-pow(length(uvx-0.3*pos),1.61),.0)*3.159;
      float f62 = max(0.01-pow(length(uvx-0.325*pos),1.614),.0)*3.14;
      float f63 = max(0.01-pow(length(uvx-0.389*pos),1.623),.0)*3.12;
      
      vec3 c = vec3(glare(uv,pos, glareSize));

      vec2 prot;

      if(animated){
        prot = rotateUV(uv - pos, (time * 0.1));  
      } else if(anamorphic){
        prot = rotateUV(uv - pos, 1.570796);     
      } else {
        prot = uv - pos;
      }

      c += drawflare(prot, (anamorphic ? flareSize * 10. : flareSize), 0.1, time, 1);
      
      c.r+=f1+f2+f4+f5+f6; c.g+=f1+f22+f42+f52+f62; c.b+=f1+f23+f43+f53+f63;
      c = c*1.3 * vec3(length(uvd)+.09);
      c+=vec3(f0);
      
      return c;
    }

    vec3 cc(vec3 color, float factor,float factor2)
    {
      float w = color.x+color.y+color.z;
      return mix(color,vec3(w)*factor,w*factor2);
    }    

    float rnd(vec2 p)
    {
      float f = fract(sin(dot(p, vec2(12.1234, 72.8392) )*45123.2));
      return f;   
    }

    float rnd(float w)
    {
      float f = fract(sin(w)*1000.);
      return f;   
    }

    float regShape(vec2 p, int N)
    {
      float f;
      
      float a=atan(p.x,p.y)+.2;
      float b=6.28319/float(N);
      f=smoothstep(.5,.51, cos(floor(.5+a/b)*b-a)*length(p.xy)* 2.0  -ghostScale);
          
      return f;
    }

    // Based on https://www.shadertoy.com/view/Xlc3D2
    vec3 circle(vec2 p, float size, float decay, vec3 color, vec3 color2, float dist, vec2 position)
    {
      float l = length(p + position*(dist*2.))+size/2.;
      float l2 = length(p + position*(dist*4.))+size/3.;
      
      float c = max(0.01-pow(length(p + position*dist), size*ghostScale), 0.0)*10.;
      float c1 = max(0.001-pow(l-0.3, 1./40.)+sin(l*20.), 0.0)*3.;
      float c2 =  max(0.09/pow(length(p-position*dist/.5)*1., .95), 0.0)/20.;
      float s = max(0.02-pow(regShape(p*5. + position*dist*5. + decay, 6) , 1.), 0.0)*1.5;
      
      color = cos(vec3(0.44, .24, .2)*16. + dist/8.)*0.5+.5;
      vec3 f = c*color;
      f += c1*color;
      f += c2*color;  
      f +=  s*color;
      return f;
    }

    vec4 getLensColor(float x){
      return vec4(vec3(mix(mix(mix(mix(mix(mix(mix(mix(mix(mix(mix(mix(mix(mix(mix(vec3(0., 0., 0.),
        vec3(0., 0., 0.), smoothstep(0.0, 0.063, x)),
        vec3(0., 0., 0.), smoothstep(0.063, 0.125, x)),
        vec3(0.0, 0., 0.), smoothstep(0.125, 0.188, x)),
        vec3(0.188, 0.131, 0.116), smoothstep(0.188, 0.227, x)),
        vec3(0.31, 0.204, 0.537), smoothstep(0.227, 0.251, x)),
        vec3(0.192, 0.106, 0.286), smoothstep(0.251, 0.314, x)),
        vec3(0.102, 0.008, 0.341), smoothstep(0.314, 0.392, x)),
        vec3(0.086, 0.0, 0.141), smoothstep(0.392, 0.502, x)),
        vec3(1.0, 0.31, 0.0), smoothstep(0.502, 0.604, x)),
        vec3(.1, 0.1, 0.1), smoothstep(0.604, 0.643, x)),
        vec3(1.0, 0.929, 0.0), smoothstep(0.643, 0.761, x)),
        vec3(1.0, 0.086, 0.424), smoothstep(0.761, 0.847, x)),
        vec3(1.0, 0.49, 0.0), smoothstep(0.847, 0.89, x)),
        vec3(0.945, 0.275, 0.475), smoothstep(0.89, 0.941, x)),
        vec3(0.251, 0.275, 0.796), smoothstep(0.941, 1.0, x))),
      1.0);
    }

    float dirtNoise(vec2 p){
      vec2 f = fract(p);
      f = (f * f) * (3.0 - (2.0 * f));    
      float n = dot(floor(p), vec2(1.0, 157.0));
      vec4 a = fract(sin(vec4(n + 0.0, n + 1.0, n + 157.0, n + 158.0)) * 43758.5453123);
      return mix(mix(a.x, a.y, f.x), mix(a.z, a.w, f.x), f.y);
    } 

    float fbm(vec2 p){
      const mat2 m = mat2(0.80, -0.60, 0.60, 0.80);
      float f = 0.0;
      f += 0.5000*dirtNoise(p); p = m*p*2.02;
      f += 0.2500*dirtNoise(p); p = m*p*2.03;
      f += 0.1250*dirtNoise(p); p = m*p*2.01;
      f += 0.0625*dirtNoise(p);
      return f/0.9375;
    }

    vec4 getLensStar(vec2 p){
      vec2 pp = (p - vec2(0.5)) * 2.0;
      float a = atan(pp.y, pp.x);
      vec4 cp = vec4(sin(a * 1.0), length(pp), sin(a * 13.0), sin(a * 53.0));
      float d = sin(clamp(pow(length(vec2(0.5) - p) * 0.5 + haloScale /2., 5.0), 0.0, 1.0) * 3.14159);
      vec3 c = vec3(d) * vec3(fbm(cp.xy * 16.0) * fbm(cp.zw * 9.0) * max(max(max(max(0.5, sin(a * 1.0)), sin(a * 3.0) * 0.8), sin(a * 7.0) * 0.8), sin(a * 9.0) * 10.6));
      c *= vec3(mix(2.0, (sin(length(pp.xy) * 256.0) * 0.5) + 0.5, sin((clamp((length(pp.xy) - 0.875) / 0.1, 0.0, 1.0) + 0.0) * 2.0 * 3.14159) * 1.5) + 0.5) * 0.3275;
      return vec4(vec3(c * 1.0), d);	
    }

    vec4 getLensDirt(vec2 p){
      p.xy += vec2(fbm(p.yx * 3.0), fbm(p.yx * 2.0)) * 0.0825;
      vec3 o = vec3(mix(0.125, 0.25, max(max(smoothstep(0.1, 0.0, length(p - vec2(0.25))),
                                            smoothstep(0.4, 0.0, length(p - vec2(0.75)))),
                                            smoothstep(0.8, 0.0, length(p - vec2(0.875, 0.125))))));
      o += vec3(max(fbm(p * 1.0) - 0.5, 0.0)) * 0.5;
      o += vec3(max(fbm(p * 2.0) - 0.5, 0.0)) * 0.5;
      o += vec3(max(fbm(p * 4.0) - 0.5, 0.0)) * 0.25;
      o += vec3(max(fbm(p * 8.0) - 0.75, 0.0)) * 1.0;
      o += vec3(max(fbm(p * 16.0) - 0.75, 0.0)) * 0.75;
      o += vec3(max(fbm(p * 64.0) - 0.75, 0.0)) * 0.5;
      return vec4(clamp(o, vec3(0.15), vec3(1.0)), 1.0);	
    }

    vec4 textureLimited(sampler2D tex, vec2 texCoord){
      if(((texCoord.x < 0.) || (texCoord.y < 0.)) || ((texCoord.x > 1.) || (texCoord.y > 1.))){
        return vec4(0.0);
      }else{
        return texture(tex, texCoord); 
      }
    }

    vec4 textureDistorted(sampler2D tex, vec2 texCoord, vec2 direction, vec3 distortion) {
      return vec4(textureLimited(tex, (texCoord + (direction * distortion.r))).r,
                  textureLimited(tex, (texCoord + (direction * distortion.g))).g,
                  textureLimited(tex, (texCoord + (direction * distortion.b))).b,
                  1.0);
    }

    // Based on https://www.shadertoy.com/view/4sK3W3
    vec4 getStartBurst(){
      vec2 aspectTexCoord = vec2(1.0) - (((vTexCoord - vec2(0.5)) * vec2(1.0)) + vec2(0.5)); 
      vec2 texCoord = vec2(1.0) - vTexCoord; 
      vec2 ghostVec = (vec2(0.5) - texCoord) * 0.3 - lensPosition;
      vec2 ghostVecAspectNormalized = normalize(ghostVec * vec2(1.0)) * vec2(1.0);
      vec2 haloVec = normalize(ghostVec) * 0.6;
      vec2 haloVecAspectNormalized = ghostVecAspectNormalized * 0.6;
      vec2 texelSize = vec2(1.0) / vec2(screenRes.xy);
      vec3 distortion = vec3(-(texelSize.x * 1.5), 0.2, texelSize.x * 1.5);
      vec4 c = vec4(0.0);
      for (int i = 0; i < 8; i++) {
        vec2 offset = texCoord + (ghostVec * float(i));
        c += textureDistorted(lensDirtTexture, offset, ghostVecAspectNormalized, distortion) * pow(max(0.0, 1.0 - (length(vec2(0.5) - offset) / length(vec2(0.5)))), 10.0);
      }                       
      vec2 haloOffset = texCoord + haloVecAspectNormalized; 
      return (c * getLensColor((length(vec2(0.5) - aspectTexCoord) / length(vec2(haloScale))))) + 
            (textureDistorted(lensDirtTexture, haloOffset, ghostVecAspectNormalized, distortion) * pow(max(0.0, 1.0 - (length(vec2(0.5) - haloOffset) / length(vec2(0.5)))), 10.0));
    } 

    void mainImage(vec4 inputColor, vec2 uv, out vec4 outputColor)
    {
      vec2 myUV = uv -0.5;
      myUV.y *= screenRes.y/screenRes.x;
      vec2 finalLensPosition = lensPosition * 0.5;
      finalLensPosition.y *= screenRes.y/screenRes.x;
      
      //First Lens flare pass
      vec3 finalColor = LensFlare(myUV, finalLensPosition) * 20.0 * colorGain / 256.;

      //Aditional streaks
      if(aditionalStreaks){
        vec3 circColor = vec3(0.9, 0.2, 0.1);
        vec3 circColor2 = vec3(0.3, 0.1, 0.9);

        for(float i=0.;i<10.;i++){
          finalColor += circle(myUV, pow(rnd(i*2000.)*2.8, .1)+1.41, 0.0, circColor+i , circColor2+i, rnd(i*20.)*3.+0.2-.5, lensPosition);
        }
      }

      //Alternative ghosts
      if(secondaryGhosts){
        vec3 altGhosts = vec3(0);
        altGhosts += renderhex(myUV, -lensPosition*0.25, ghostScale * 1.4, vec3(0.25,0.35,0));
        altGhosts += renderhex(myUV, lensPosition*0.25, ghostScale * 0.5, vec3(1,0.5,0.5));
        altGhosts += renderhex(myUV, lensPosition*0.1, ghostScale * 1.6, vec3(1,1,1));
        altGhosts += renderhex(myUV, lensPosition*1.8, ghostScale * 2.0, vec3(0,0.5,0.75));
        altGhosts += renderhex(myUV, lensPosition*1.25, ghostScale * 0.8, vec3(1,1,0.5));
        altGhosts += renderhex(myUV, -lensPosition*1.25, ghostScale * 5.0, vec3(0.5,0.5,0.25));
        
        //Circular ghosts
        altGhosts += fpow(1.0 - abs(distance(lensPosition*0.8,myUV) - 0.7),0.985)*colorGain / 2100.;
        finalColor += altGhosts;
      }
      

      //Starburst                     
      if(starBurst){
        vTexCoord = myUV + 0.5;
        vec4 lensMod = getLensDirt(myUV);
        float tooBright = 1.0 - (clamp(0.5, 0.0, 0.5) * 2.0); 
        float tooDark = clamp(0.5 - 0.5, 0.0, 0.5) * 2.0;
        lensMod += mix(lensMod, pow(lensMod * 2.0, vec4(2.0)) * 0.5, tooBright);
        float lensStarRotationAngle = ((myUV.x + myUV.y)) * (1.0 / 6.0);
        vec2 lensStarTexCoord = (mat2(cos(lensStarRotationAngle), -sin(lensStarRotationAngle), sin(lensStarRotationAngle), cos(lensStarRotationAngle)) * vTexCoord);
        lensMod += getLensStar(lensStarTexCoord) * 2.;
        
        finalColor += clamp((lensMod.rgb * getStartBurst().rgb ), 0.01, 1.0);
      }

      //Final composed output
      if(enabled){
        outputColor = vec4(mix(finalColor, vec3(.0), opacity) + inputColor.rgb, inputColor.a);
      } else {
        outputColor = vec4(inputColor);
      }
    }
  `
};
class fe extends __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Effect"] {
    constructor({ blendFunction: t, enabled: o, glareSize: r, lensPosition: a, screenRes: n, starPoints: i, flareSize: s, flareSpeed: l, flareShape: p, animated: _, anamorphic: S, colorGain: g, lensDirtTexture: d, haloScale: m, secondaryGhosts: v, aditionalStreaks: x, ghostScale: f, opacity: u, starBurst: c }){
        super("LensFlareEffect", _t.fragmentShader, {
            blendFunction: t,
            uniforms: /*@__PURE__*/ new Map([
                [
                    "enabled",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](o)
                ],
                [
                    "glareSize",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](r)
                ],
                [
                    "lensPosition",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](a)
                ],
                [
                    "time",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](0)
                ],
                [
                    "screenRes",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](n)
                ],
                [
                    "starPoints",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](i)
                ],
                [
                    "flareSize",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](s)
                ],
                [
                    "flareSpeed",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](l)
                ],
                [
                    "flareShape",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](p)
                ],
                [
                    "animated",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](_)
                ],
                [
                    "anamorphic",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](S)
                ],
                [
                    "colorGain",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](g)
                ],
                [
                    "lensDirtTexture",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](d)
                ],
                [
                    "haloScale",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](m)
                ],
                [
                    "secondaryGhosts",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](v)
                ],
                [
                    "aditionalStreaks",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](x)
                ],
                [
                    "ghostScale",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](f)
                ],
                [
                    "starBurst",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](c)
                ],
                [
                    "opacity",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](u)
                ]
            ])
        });
    }
    update(t, o, r) {
        const a = this.uniforms.get("time");
        a && (a.value += r);
    }
}
const xt = /*@__PURE__*/ P(fe), gt = ({ smoothTime: e = .07, blendFunction: t = 23, enabled: o = !0, glareSize: r = .2, lensPosition: a = new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-25, 6, -60), screenRes: n = new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](0, 0), starPoints: i = 6, flareSize: s = .01, flareSpeed: l = .01, flareShape: p = .01, animated: _ = !0, anamorphic: S = !1, colorGain: g = new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](20, 20, 20), lensDirtTexture: d = null, haloScale: m = .5, secondaryGhosts: v = !0, aditionalStreaks: x = !0, ghostScale: f = 0, opacity: u = 1, starBurst: c = !1 })=>{
    const U = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])(({ viewport: T })=>T), b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])(({ raycaster: T })=>T), { scene: F, camera: X } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(D), [C] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"]), [R] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]), E = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])((T, N)=>{
        if (!E?.current) return;
        const q = E.current.uniforms.get("lensPosition"), $ = E.current.uniforms.get("opacity");
        if (!q || !$) return;
        let G = 1;
        if (R.copy(a).project(X), R.z > 1) return;
        q.value.x = R.x, q.value.y = R.y, C.x = R.x, C.y = R.y, b.setFromCamera(C, X);
        const ve = b.intersectObjects(F.children, !0), { object: I } = ve[0] || {};
        I && (I.userData?.lensflare === "no-occlusion" ? G = 0 : I instanceof __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"] && (I.material.uniforms?._transmission?.value > .2 || I.material._transmission && I.material._transmission > .2 ? G = .2 : I.material.transparent && (G = I.material.opacity))), __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$maath$2f$dist$2f$easing$2d$3be59c6d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__easing$3e$__["easing"].damp($, "value", G, e, N);
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!E?.current) return;
        const T = E.current.uniforms.get("screenRes");
        T && (T.value.x = U.width, T.value.y = U.height);
    }, [
        U
    ]), /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(xt, {
        ref: E,
        blendFunction: t,
        enabled: o,
        glareSize: r,
        lensPosition: a,
        screenRes: n,
        starPoints: i,
        flareSize: s,
        flareSpeed: l,
        flareShape: p,
        animated: _,
        anamorphic: S,
        colorGain: g,
        lensDirtTexture: d,
        haloScale: m,
        secondaryGhosts: v,
        aditionalStreaks: x,
        ghostScale: f,
        opacity: u,
        starBurst: c
    });
}, wt = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BloomEffect"], {
    blendFunction: 0
}), St = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrightnessContrastEffect"]), yt = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChromaticAberrationEffect"]), Pt = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function({ blendFunction: e = 23 }, t) {
    const o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorAverageEffect"](e), [
        e
    ]);
    return /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("primitive", {
        ref: t,
        object: o,
        dispose: null
    });
}), bt = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorDepthEffect"]), Et = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DepthEffect"]), Rt = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DotScreenEffect"]), Ut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function({ active: e = !0, ...t }, o) {
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])((p)=>p.invalidate), a = Z(t, "delay"), n = Z(t, "duration"), i = Z(t, "strength"), s = Z(t, "chromaticAberrationOffset"), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlitchEffect"]({
            ...t,
            delay: a,
            duration: n,
            strength: i,
            chromaticAberrationOffset: s
        }), [
        a,
        n,
        t,
        i,
        s
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        l.mode = e ? t.mode || __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlitchMode"].SPORADIC : __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlitchMode"].DISABLED, r();
    }, [
        e,
        l,
        r,
        t.mode
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>{
            l.dispose?.();
        }, [
        l
    ]), /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("primitive", {
        ref: o,
        object: l,
        dispose: null
    });
}), Ct = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(e, t) {
    const { camera: o } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(D), r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GodRaysEffect"](o, k(e.sun), e), [
        o,
        e
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>void (r.lightSource = k(e.sun)), [
        r,
        e.sun
    ]), /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("primitive", {
        ref: t,
        object: r,
        dispose: null
    });
}), zt = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function({ size: e, ...t }, o) {
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])((n)=>n.invalidate), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GridEffect"](t), [
        t
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        e && a.setSize(e.width, e.height), r();
    }, [
        a,
        e,
        r
    ]), /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("primitive", {
        ref: o,
        object: a,
        dispose: null
    });
}), Tt = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HueSaturationEffect"]), At = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoiseEffect"], {
    blendFunction: 5
}), Bt = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function({ selection: e = [], selectionLayer: t = 10, blendFunction: o, patternTexture: r, edgeStrength: a, pulseSpeed: n, visibleEdgeColor: i, hiddenEdgeColor: s, width: l, height: p, kernelSize: _, blur: S, xRay: g, ...d }, m) {
    const v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])((U)=>U.invalidate), { scene: x, camera: f } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(D), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutlineEffect"](x, f, {
            blendFunction: o,
            patternTexture: r,
            edgeStrength: a,
            pulseSpeed: n,
            visibleEdgeColor: i,
            hiddenEdgeColor: s,
            width: l,
            height: p,
            kernelSize: _,
            blur: S,
            xRay: g,
            ...d
        }), [
        o,
        S,
        f,
        a,
        p,
        s,
        _,
        r,
        n,
        x,
        i,
        l,
        g
    ]), c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(H);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!c && e) return u.selection.set(Array.isArray(e) ? e.map(k) : [
            k(e)
        ]), v(), ()=>{
            u.selection.clear(), v();
        };
    }, [
        u,
        e,
        c,
        v
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        u.selectionLayer = t, v();
    }, [
        u,
        v,
        t
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (c && c.enabled && c.selected?.length) return u.selection.set(c.selected), v(), ()=>{
            u.selection.clear(), v();
        };
    }, [
        c,
        u.selection,
        v
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>{
            u.dispose();
        }, [
        u
    ]), /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("primitive", {
        ref: m,
        object: u
    });
}), Vt = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function({ granularity: e = 5 }, t) {
    const o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PixelationEffect"](e), [
        e
    ]);
    return /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("primitive", {
        ref: t,
        object: o,
        dispose: null
    });
}), Ft = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScanlineEffect"], {
    blendFunction: 24,
    density: 1.25
}), Mt = (e, t)=>e.layers.enable(t.selection.layer), Dt = (e, t)=>e.layers.disable(t.selection.layer), kt = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function({ selection: e = [], selectionLayer: t = 10, lights: o = [], inverted: r = !1, ignoreBackground: a = !1, luminanceThreshold: n, luminanceSmoothing: i, intensity: s, width: l, height: p, kernelSize: _, mipmapBlur: S, ...g }, d) {
    o.length === 0 && console.warn("SelectiveBloom requires lights to work.");
    const m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])((c)=>c.invalidate), { scene: v, camera: x } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(D), f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const c = new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectiveBloomEffect"](v, x, {
            blendFunction: 0,
            luminanceThreshold: n,
            luminanceSmoothing: i,
            intensity: s,
            width: l,
            height: p,
            kernelSize: _,
            mipmapBlur: S,
            ...g
        });
        return c.inverted = r, c.ignoreBackground = a, c;
    }, [
        v,
        x,
        n,
        i,
        s,
        l,
        p,
        _,
        S,
        r,
        a,
        g
    ]), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(H);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!u && e) return f.selection.set(Array.isArray(e) ? e.map(k) : [
            k(e)
        ]), m(), ()=>{
            f.selection.clear(), m();
        };
    }, [
        f,
        e,
        u,
        m
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        f.selection.layer = t, m();
    }, [
        f,
        m,
        t
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (o && o.length > 0) return o.forEach((c)=>Mt(k(c), f)), m(), ()=>{
            o.forEach((c)=>Dt(k(c), f)), m();
        };
    }, [
        f,
        m,
        o,
        t
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (u && u.enabled && u.selected?.length) return f.selection.set(u.selected), m(), ()=>{
            f.selection.clear(), m();
        };
    }, [
        u,
        f.selection,
        m
    ]), /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("primitive", {
        ref: d,
        object: f,
        dispose: null
    });
}), Gt = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SepiaEffect"]), It = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(e, t) {
    const { camera: o, normalPass: r, downSamplingPass: a, resolutionScale: n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(D), i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>r === null && a === null ? (console.error("Please enable the NormalPass in the EffectComposer in order to use SSAO."), {}) : new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SSAOEffect"](o, r && !a ? r.texture : null, {
            blendFunction: 21,
            samples: 30,
            rings: 4,
            distanceThreshold: 1,
            distanceFalloff: 0,
            rangeThreshold: .5,
            rangeFalloff: .1,
            luminanceInfluence: .9,
            radius: 20,
            bias: .5,
            intensity: 1,
            color: void 0,
            normalDepthBuffer: a ? a.texture : null,
            resolutionScale: n ?? 1,
            depthAwareUpsampling: !0,
            ...e
        }), [
        o,
        a,
        r,
        n
    ]);
    return /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("primitive", {
        ref: t,
        object: i,
        dispose: null
    });
}), Lt = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SMAAEffect"]), Nt = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FXAAEffect"]), jt = {
    fragmentShader: `
    uniform int rampType;

    uniform vec2 rampStart;
    uniform vec2 rampEnd;

    uniform vec4 startColor;
    uniform vec4 endColor;

    uniform float rampBias;
    uniform float rampGain;

    uniform bool rampMask;
    uniform bool rampInvert;

    float getBias(float time, float bias) {
      return time / (((1.0 / bias) - 2.0) * (1.0 - time) + 1.0);
    }

    float getGain(float time, float gain) {
      if (time < 0.5)
        return getBias(time * 2.0, gain) / 2.0;
      else
        return getBias(time * 2.0 - 1.0, 1.0 - gain) / 2.0 + 0.5;
    }

    void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
      vec2 centerPixel = uv * resolution;
      vec2 startPixel = rampStart * resolution;
      vec2 endPixel = rampEnd * resolution;

      float rampAlpha;

      if (rampType == 1) {
        vec2 fuv = centerPixel / resolution.y;
        vec2 suv = startPixel / resolution.y;
        vec2 euv = endPixel / resolution.y;

        float radius = length(suv - euv);
        float falloff = length(fuv - suv);
        rampAlpha = smoothstep(0.0, radius, falloff);
      } else {
        float radius = length(startPixel - endPixel);
        vec2 direction = normalize(vec2(endPixel.x - startPixel.x, -(startPixel.y - endPixel.y)));

        float fade = dot(centerPixel - startPixel, direction);
        if (rampType == 2) fade = abs(fade);

        rampAlpha = smoothstep(0.0, 1.0, fade / radius);
      }

      rampAlpha = abs((rampInvert ? 1.0 : 0.0) - getBias(rampAlpha, rampBias) * getGain(rampAlpha, rampGain));

      if (rampMask) {
        vec4 inputBuff = texture2D(inputBuffer, uv);
        outputColor = mix(inputBuff, inputColor, rampAlpha);
      } else {
        outputColor = mix(startColor, endColor, rampAlpha);
      }
    }
  `
};
var ue = /*@__PURE__*/ ((e)=>(e[e.Linear = 0] = "Linear", e[e.Radial = 1] = "Radial", e[e.MirroredLinear = 2] = "MirroredLinear", e))(ue || {});
class pe extends __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Effect"] {
    constructor({ rampType: t = 0, rampStart: o = [
        .5,
        .5
    ], rampEnd: r = [
        1,
        1
    ], startColor: a = [
        0,
        0,
        0,
        1
    ], endColor: n = [
        1,
        1,
        1,
        1
    ], rampBias: i = .5, rampGain: s = .5, rampMask: l = !1, rampInvert: p = !1, ..._ } = {}){
        super("RampEffect", jt.fragmentShader, {
            ..._,
            uniforms: /*@__PURE__*/ new Map([
                [
                    "rampType",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](t)
                ],
                [
                    "rampStart",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](o)
                ],
                [
                    "rampEnd",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](r)
                ],
                [
                    "startColor",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](a)
                ],
                [
                    "endColor",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](n)
                ],
                [
                    "rampBias",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](i)
                ],
                [
                    "rampGain",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](s)
                ],
                [
                    "rampMask",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](l)
                ],
                [
                    "rampInvert",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](p)
                ]
            ])
        });
    }
}
const Ot = /*@__PURE__*/ P(pe), Wt = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function({ textureSrc: e, texture: t, opacity: o = 1, ...r }, a) {
    const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__G__as__useLoader$3e$__["useLoader"])(__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureLoader"], e);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        n.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"], n.wrapS = n.wrapT = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepeatWrapping"];
    }, [
        n
    ]);
    const i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureEffect"]({
            ...r,
            texture: n || t
        }), [
        r,
        n,
        t
    ]);
    return /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("primitive", {
        ref: a,
        object: i,
        "blendMode-opacity-value": o,
        dispose: null
    });
}), Xt = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToneMappingEffect"]), qt = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VignetteEffect"]), Ht = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShockWaveEffect"]), Zt = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function({ lut: e, tetrahedralInterpolation: t, ...o }, r) {
    const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LUT3DEffect"](e, o), [
        e,
        o
    ]), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])((i)=>i.invalidate);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        t && (a.tetrahedralInterpolation = t), e && (a.lut = e), n();
    }, [
        a,
        n,
        e,
        t
    ]), /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("primitive", {
        ref: r,
        object: a,
        dispose: null
    });
}), $t = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiltShiftEffect"], {
    blendFunction: 0
}), Kt = {
    fragmentShader: `

    // original shader by Evan Wallace

    #define MAX_ITERATIONS 100

    uniform float blur;
    uniform float taper;
    uniform vec2 start;
    uniform vec2 end;
    uniform vec2 direction;
    uniform int samples;

    float random(vec3 scale, float seed) {
        /* use the fragment position for a different seed per-pixel */
        return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
    }

    void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
        vec4 color = vec4(0.0);
        float total = 0.0;
        vec2 startPixel = vec2(start.x * resolution.x, start.y * resolution.y);
        vec2 endPixel = vec2(end.x * resolution.x, end.y * resolution.y);
        float f_samples = float(samples);
        float half_samples = f_samples / 2.0;

        // use screen diagonal to normalize blur radii
        float maxScreenDistance = distance(vec2(0.0), resolution); // diagonal distance
        float gradientRadius = taper * (maxScreenDistance);
        float blurRadius = blur * (maxScreenDistance / 16.0);

        /* randomize the lookup values to hide the fixed number of samples */
        float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
        vec2 normal = normalize(vec2(startPixel.y - endPixel.y, endPixel.x - startPixel.x));
        float radius = smoothstep(0.0, 1.0, abs(dot(uv * resolution - startPixel, normal)) / gradientRadius) * blurRadius;

        #pragma unroll_loop_start
        for (int i = 0; i <= MAX_ITERATIONS; i++) {
            if (i >= samples) { break; } // return early if over sample count
            float f_i = float(i);
            float s_i = -half_samples + f_i;
            float percent = (s_i + offset - 0.5) / half_samples;
            float weight = 1.0 - abs(percent);
            vec4 sample_i = texture2D(inputBuffer, uv + normalize(direction) / resolution * percent * radius);
            /* switch to pre-multiplied alpha to correctly blur transparent images */
            sample_i.rgb *= sample_i.a;
            color += sample_i * weight;
            total += weight;
        }
        #pragma unroll_loop_end

        outputColor = color / total;

        /* switch back from pre-multiplied alpha */
        outputColor.rgb /= outputColor.a + 0.00001;
    }
    `
};
class me extends __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Effect"] {
    constructor({ blendFunction: t = 23, blur: o = .15, taper: r = .5, start: a = [
        .5,
        0
    ], end: n = [
        .5,
        1
    ], samples: i = 10, direction: s = [
        1,
        1
    ] } = {}){
        super("TiltShiftEffect", Kt.fragmentShader, {
            blendFunction: t,
            attributes: 2,
            uniforms: /*@__PURE__*/ new Map([
                [
                    "blur",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](o)
                ],
                [
                    "taper",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](r)
                ],
                [
                    "start",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](a)
                ],
                [
                    "end",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](n)
                ],
                [
                    "samples",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](i)
                ],
                [
                    "direction",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](s)
                ]
            ])
        });
    }
}
const Yt = /*@__PURE__*/ P(me, {
    blendFunction: 23
}), Jt = `
uniform sampler2D uCharacters;
uniform float uCharactersCount;
uniform float uCellSize;
uniform bool uInvert;
uniform vec3 uColor;

const vec2 SIZE = vec2(16.);

vec3 greyscale(vec3 color, float strength) {
    float g = dot(color, vec3(0.299, 0.587, 0.114));
    return mix(color, vec3(g), strength);
}

vec3 greyscale(vec3 color) {
    return greyscale(color, 1.0);
}

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    vec2 cell = resolution / uCellSize;
    vec2 grid = 1.0 / cell;
    vec2 pixelizedUV = grid * (0.5 + floor(uv / grid));
    vec4 pixelized = texture2D(inputBuffer, pixelizedUV);
    float greyscaled = greyscale(pixelized.rgb).r;

    if (uInvert) {
        greyscaled = 1.0 - greyscaled;
    }

    float characterIndex = floor((uCharactersCount - 1.0) * greyscaled);
    vec2 characterPosition = vec2(mod(characterIndex, SIZE.x), floor(characterIndex / SIZE.y));
    vec2 offset = vec2(characterPosition.x, -characterPosition.y) / SIZE;
    vec2 charUV = mod(uv * (cell / SIZE), 1.0 / SIZE) - vec2(0., 1.0 / SIZE) + offset;
    vec4 asciiCharacter = texture2D(uCharacters, charUV);

    asciiCharacter.rgb = uColor * asciiCharacter.r;
    asciiCharacter.a = pixelized.a;
    outputColor = asciiCharacter;
}
`;
class Qt extends __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Effect"] {
    constructor({ font: t = "arial", characters: o = " .:,'-^=*+?!|0#X%WM@", fontSize: r = 54, cellSize: a = 16, color: n = "#ffffff", invert: i = !1 } = {}){
        const s = /*@__PURE__*/ new Map([
            [
                "uCharacters",
                new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"])
            ],
            [
                "uCellSize",
                new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](a)
            ],
            [
                "uCharactersCount",
                new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](o.length)
            ],
            [
                "uColor",
                new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](n))
            ],
            [
                "uInvert",
                new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](i)
            ]
        ]);
        super("ASCIIEffect", Jt, {
            uniforms: s
        });
        const l = this.uniforms.get("uCharacters");
        l && (l.value = this.createCharactersTexture(o, t, r));
    }
    createCharactersTexture(t, o, r) {
        const a = document.createElement("canvas"), n = 1024, i = 16, s = n / i;
        a.width = a.height = n;
        const l = new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](a, void 0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepeatWrapping"], __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepeatWrapping"], __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NearestFilter"], __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NearestFilter"]), p = a.getContext("2d");
        if (!p) throw new Error("Context not available");
        p.clearRect(0, 0, n, n), p.font = `${r}px ${o}`, p.textAlign = "center", p.textBaseline = "middle", p.fillStyle = "#fff";
        for(let _ = 0; _ < t.length; _++){
            const S = t[_], g = _ % i, d = Math.floor(_ / i);
            p.fillText(S, g * s + s / 2, d * s + s / 2);
        }
        return l.needsUpdate = !0, l;
    }
}
const eo = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ font: e = "arial", characters: t = " .:,'-^=*+?!|0#X%WM@", fontSize: o = 54, cellSize: r = 16, color: a = "#ffffff", invert: n = !1 }, i)=>{
    const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>new Qt({
            characters: t,
            font: e,
            fontSize: o,
            cellSize: r,
            color: a,
            invert: n
        }), [
        t,
        o,
        r,
        a,
        n,
        e
    ]);
    return /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("primitive", {
        ref: i,
        object: s
    });
}), to = {
    fragmentShader: `
    uniform float factor;

    void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
      vec2 vUv = uv;
      float frequency = 6.0 * factor;
      float amplitude = 0.015 * factor;
      float x = vUv.y * frequency + time * 0.7; 
      float y = vUv.x * frequency + time * 0.3;
      vUv.x += cos(x + y) * amplitude * cos(y);
      vUv.y += sin(x - y) * amplitude * cos(y);
      vec4 rgba = texture(inputBuffer, vUv);
      outputColor = rgba;
    }
  `
};
class de extends __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Effect"] {
    constructor({ blendFunction: t = 23, factor: o = 0 } = {}){
        super("WaterEffect", to.fragmentShader, {
            blendFunction: t,
            attributes: 2,
            uniforms: /*@__PURE__*/ new Map([
                [
                    "factor",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](o)
                ]
            ])
        });
    }
}
const oo = /*@__PURE__*/ P(de, {
    blendFunction: 23
}), ao = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ halfRes: e, screenSpaceRadius: t, quality: o, depthAwareUpsampling: r = !0, aoRadius: a = 5, aoSamples: n = 16, denoiseSamples: i = 4, denoiseRadius: s = 12, distanceFalloff: l = 1, intensity: p = 1, color: _, renderMode: S = 0 }, g)=>{
    const { camera: d, scene: m } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])(), v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$n8ao$2f$dist$2f$N8AO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["N8AOPostPass"](m, d), [
        d,
        m
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__applyProps$3e$__["applyProps"])(v.configuration, {
            color: _,
            aoRadius: a,
            distanceFalloff: l,
            intensity: p,
            aoSamples: n,
            denoiseSamples: i,
            denoiseRadius: s,
            screenSpaceRadius: t,
            renderMode: S,
            halfRes: e,
            depthAwareUpsampling: r
        });
    }, [
        t,
        _,
        a,
        l,
        p,
        n,
        i,
        s,
        S,
        e,
        r,
        v
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        o && v.setQualityMode(o.charAt(0).toUpperCase() + o.slice(1));
    }, [
        v,
        o
    ]), /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("primitive", {
        ref: g,
        object: v
    });
});
;
 //# sourceMappingURL=index.js.map
}),
]);

//# sourceMappingURL=39b6b_3b23532d._.js.map