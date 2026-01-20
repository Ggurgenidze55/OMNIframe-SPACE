module.exports = [
"[project]/TEST ANIMATION LANDING/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/TEST ANIMATION LANDING/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/TEST ANIMATION LANDING/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/TEST ANIMATION LANDING/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/TEST ANIMATION LANDING/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
"[project]/TEST ANIMATION LANDING/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/TEST ANIMATION LANDING/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxRuntime; //# sourceMappingURL=react-jsx-runtime.js.map
}),
"[project]/TEST ANIMATION LANDING/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "production" !== ("TURBOPACK compile-time value", "development") && function() {
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
        useLayoutEffect(function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            checkIfSnapshotChanged(inst) && forceUpdate({
                inst: inst
            });
        }, [
            subscribe,
            value,
            getSnapshot
        ]);
        useEffect(function() {
            checkIfSnapshotChanged(inst) && forceUpdate({
                inst: inst
            });
            return subscribe(function() {
                checkIfSnapshotChanged(inst) && forceUpdate({
                    inst: inst
                });
            });
        }, [
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
    var React = __turbopack_context__.r("[project]/TEST ANIMATION LANDING/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue, didWarnOld18Alpha = !1, didWarnUncachedGetSnapshot = !1, shim = ("TURBOPACK compile-time truthy", 1) ? useSyncExternalStore$1 : "TURBOPACK unreachable";
    exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/TEST ANIMATION LANDING/node_modules/use-sync-external-store/shim/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/TEST ANIMATION LANDING/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-ssr] (ecmascript)");
}
}),
"[project]/TEST ANIMATION LANDING/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_context__.r("[project]/TEST ANIMATION LANDING/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"), shim = __turbopack_context__.r("[project]/TEST ANIMATION LANDING/node_modules/use-sync-external-store/shim/index.js [app-ssr] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = shim.useSyncExternalStore, useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue;
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
"[project]/TEST ANIMATION LANDING/node_modules/use-sync-external-store/shim/with-selector.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/TEST ANIMATION LANDING/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js [app-ssr] (ecmascript)");
}
}),
"[project]/TEST ANIMATION LANDING/node_modules/zustand/esm/vanilla.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/TEST ANIMATION LANDING/node_modules/zustand/esm/traditional.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWithEqualityFn",
    ()=>createWithEqualityFn,
    "useStoreWithEqualityFn",
    ()=>useStoreWithEqualityFn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/use-sync-external-store/shim/with-selector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/zustand/esm/vanilla.mjs [app-ssr] (ecmascript)");
;
;
;
const { useSyncExternalStoreWithSelector } = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
const identity = (arg)=>arg;
function useStoreWithEqualityFn(api, selector = identity, equalityFn) {
    const slice = useSyncExternalStoreWithSelector(api.subscribe, api.getState, api.getInitialState, selector, equalityFn);
    __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useDebugValue(slice);
    return slice;
}
const createWithEqualityFnImpl = (createState, defaultEqualityFn)=>{
    const api = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStore"])(createState);
    const useBoundStoreWithEqualityFn = (selector, equalityFn = defaultEqualityFn)=>useStoreWithEqualityFn(api, selector, equalityFn);
    Object.assign(useBoundStoreWithEqualityFn, api);
    return useBoundStoreWithEqualityFn;
};
const createWithEqualityFn = (createState, defaultEqualityFn)=>createState ? createWithEqualityFnImpl(createState, defaultEqualityFn) : createWithEqualityFnImpl;
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/suspend-react/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/TEST ANIMATION LANDING/node_modules/scheduler/cjs/scheduler.development.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "production" !== ("TURBOPACK compile-time value", "development") && function() {
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
"[project]/TEST ANIMATION LANDING/node_modules/scheduler/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/TEST ANIMATION LANDING/node_modules/scheduler/cjs/scheduler.development.js [app-ssr] (ecmascript)");
}
}),
"[project]/TEST ANIMATION LANDING/node_modules/its-fine/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const f = /* @__PURE__ */ (()=>{
    var e, t;
    return ("TURBOPACK compile-time value", "undefined") != "undefined" && (((e = window.document) == null ? void 0 : e.createElement) || ((t = window.navigator) == null ? void 0 : t.product) === "ReactNative");
})() ? __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"];
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
const a = /* @__PURE__ */ l(/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](null));
class m extends __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Component"] {
    render() {
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](a.Provider, {
            value: this._reactInternals
        }, this.props.children);
    }
}
function c() {
    const e = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](a);
    if (e === null) throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"]();
    return __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        for (const n of [
            e,
            e == null ? void 0 : e.alternate
        ]){
            if (!n) continue;
            const u = i(n, !1, (d)=>{
                let s = d.memoizedState;
                for(; s;){
                    if (s.memoizedState === t) return !0;
                    s = s.next;
                }
            });
            if (u) return u;
        }
    }, [
        e,
        t
    ]);
}
function w() {
    const e = c(), t = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>i(e, !0, (r)=>{
            var n;
            return ((n = r.stateNode) == null ? void 0 : n.containerInfo) != null;
        }), [
        e
    ]);
    return t == null ? void 0 : t.stateNode.containerInfo;
}
function v(e) {
    const t = c(), r = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](void 0);
    return f(()=>{
        var n;
        r.current = (n = i(t, !1, (u)=>typeof u.type == "string" && (e === void 0 || u.type === e))) == null ? void 0 : n.stateNode;
    }, [
        t
    ]), r;
}
function y(e) {
    const t = c(), r = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](void 0);
    return f(()=>{
        var n;
        r.current = (n = i(t, !0, (u)=>typeof u.type == "string" && (e === void 0 || u.type === e))) == null ? void 0 : n.stateNode;
    }, [
        t
    ]), r;
}
const p = Symbol.for("react.context"), b = (e)=>e !== null && typeof e == "object" && "$$typeof" in e && e.$$typeof === p;
function h() {
    const e = c(), [t] = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>/* @__PURE__ */ new Map());
    t.clear();
    let r = e;
    for(; r;){
        const n = r.type;
        b(n) && n !== a && !t.has(n) && t.set(n, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"](l(n))), r = r.return;
    }
    return t;
}
function x() {
    const e = h();
    return __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>Array.from(e.keys()).reduce((t, r)=>(n)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](t, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](r.Provider, {
                    ...n,
                    value: e.get(r)
                })), (t)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](m, {
                ...t
            })), [
        e
    ]);
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/TEST ANIMATION LANDING/node_modules/react-use-measure/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>j
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
    const a = o || (("TURBOPACK compile-time truthy", 1) ? class {
    } : "TURBOPACK unreachable");
    if (!a) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
    const [c, h] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        bottom: 0,
        right: 0,
        x: 0,
        y: 0
    }), e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        element: null,
        scrollContainers: null,
        resizeObserver: null,
        lastBounds: c,
        orientationHandler: null
    }), d = n ? typeof n == "number" ? n : n.scroll : null, f = n ? typeof n == "number" ? n : n.resize : null, w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(!1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>(w.current = !0, ()=>void (w.current = !1)));
    const [z, m, s] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
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
    return X(s, !!t), W(m), (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        v(), b();
    }, [
        t,
        s,
        m
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>v, []), [
        L,
        c,
        z
    ];
}
function W(n) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const t = n;
        return window.addEventListener("resize", t), ()=>void window.removeEventListener("resize", t);
    }, [
        n
    ]);
}
function X(n, t) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
"[project]/TEST ANIMATION LANDING/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/TEST ANIMATION LANDING/node_modules/@react-three/drei/core/Points.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Point",
    ()=>Point,
    "Points",
    ()=>Points,
    "PointsBuffer",
    ()=>PointsBuffer,
    "PositionPoint",
    ()=>PositionPoint
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-ssr] (ecmascript) <export e as extend>");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-ssr] (ecmascript) <export D as useFrame>");
;
;
;
;
const _inverseMatrix = /* @__PURE__ */ new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix4"]();
const _ray = /* @__PURE__ */ new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Ray"]();
const _sphere = /* @__PURE__ */ new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sphere"]();
const _position = /* @__PURE__ */ new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
class PositionPoint extends __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"] {
    constructor(){
        super();
        this.size = 0;
        this.color = new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"]('white');
        this.instance = {
            current: undefined
        };
        this.instanceKey = {
            current: undefined
        };
    }
    // This will allow the virtual instance have bounds
    get geometry() {
        var _this$instance$curren;
        return (_this$instance$curren = this.instance.current) == null ? void 0 : _this$instance$curren.geometry;
    }
    raycast(raycaster, intersects) {
        var _raycaster$params$Poi, _raycaster$params$Poi2;
        const parent = this.instance.current;
        if (!parent || !parent.geometry) return;
        const instanceId = parent.userData.instances.indexOf(this.instanceKey);
        // If the instance wasn't found or exceeds the parents draw range, bail out
        if (instanceId === -1 || instanceId > parent.geometry.drawRange.count) return;
        const threshold = (_raycaster$params$Poi = (_raycaster$params$Poi2 = raycaster.params.Points) == null ? void 0 : _raycaster$params$Poi2.threshold) !== null && _raycaster$params$Poi !== void 0 ? _raycaster$params$Poi : 1;
        _sphere.set(this.getWorldPosition(_position), threshold);
        if (raycaster.ray.intersectsSphere(_sphere) === false) return;
        _inverseMatrix.copy(parent.matrixWorld).invert();
        _ray.copy(raycaster.ray).applyMatrix4(_inverseMatrix);
        const localThreshold = threshold / ((this.scale.x + this.scale.y + this.scale.z) / 3);
        const localThresholdSq = localThreshold * localThreshold;
        const rayPointDistanceSq = _ray.distanceSqToPoint(this.position);
        if (rayPointDistanceSq < localThresholdSq) {
            const intersectPoint = new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
            _ray.closestPointToPoint(this.position, intersectPoint);
            intersectPoint.applyMatrix4(this.matrixWorld);
            const distance = raycaster.ray.origin.distanceTo(intersectPoint);
            if (distance < raycaster.near || distance > raycaster.far) return;
            intersects.push({
                distance: distance,
                distanceToRay: Math.sqrt(rayPointDistanceSq),
                point: intersectPoint,
                index: instanceId,
                face: null,
                object: this
            });
        }
    }
}
let i, positionRef;
const context = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](null);
const parentMatrix = /* @__PURE__ */ new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix4"]();
const position = /* @__PURE__ */ new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
/**
 * Instance implementation, relies on react + context to update the attributes based on the children of this component
 */ const PointsInstances = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ children, range, limit = 1000, ...props }, ref)=>{
    const parentRef = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, ()=>parentRef.current, []);
    const [refs, setRefs] = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]([]);
    const [[positions, colors, sizes]] = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>[
            new Float32Array(limit * 3),
            Float32Array.from({
                length: limit * 3
            }, ()=>1),
            Float32Array.from({
                length: limit
            }, ()=>1)
        ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        // We might be a frame too late? 🤷‍♂️
        parentRef.current.geometry.attributes.position.needsUpdate = true;
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])(()=>{
        parentRef.current.updateMatrix();
        parentRef.current.updateMatrixWorld();
        parentMatrix.copy(parentRef.current.matrixWorld).invert();
        parentRef.current.geometry.drawRange.count = Math.min(limit, range !== undefined ? range : limit, refs.length);
        for(i = 0; i < refs.length; i++){
            positionRef = refs[i].current;
            positionRef.getWorldPosition(position).applyMatrix4(parentMatrix);
            position.toArray(positions, i * 3);
            parentRef.current.geometry.attributes.position.needsUpdate = true;
            positionRef.matrixWorldNeedsUpdate = true;
            positionRef.color.toArray(colors, i * 3);
            parentRef.current.geometry.attributes.color.needsUpdate = true;
            sizes.set([
                positionRef.size
            ], i);
            parentRef.current.geometry.attributes.size.needsUpdate = true;
        }
    });
    const api = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            getParent: ()=>parentRef,
            subscribe: (ref)=>{
                setRefs((refs)=>[
                        ...refs,
                        ref
                    ]);
                return ()=>setRefs((refs)=>refs.filter((item)=>item.current !== ref.current));
            }
        }), []);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("points", (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        userData: {
            instances: refs
        },
        matrixAutoUpdate: false,
        ref: parentRef,
        raycast: ()=>null
    }, props), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("bufferGeometry", null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("bufferAttribute", {
        attach: "attributes-position",
        args: [
            positions,
            3
        ],
        usage: __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicDrawUsage"]
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("bufferAttribute", {
        attach: "attributes-color",
        args: [
            colors,
            3
        ],
        usage: __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicDrawUsage"]
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("bufferAttribute", {
        attach: "attributes-size",
        args: [
            sizes,
            1
        ],
        usage: __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicDrawUsage"]
    })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](context.Provider, {
        value: api
    }, children));
});
const Point = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ children, ...props }, ref)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__["extend"])({
            PositionPoint
        }), []);
    const group = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, ()=>group.current, []);
    const { subscribe, getParent } = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](context);
    __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"](()=>subscribe(group), []);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("positionPoint", (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        instance: getParent(),
        instanceKey: group,
        ref: group
    }, props), children);
});
/**
 * Buffer implementation, relies on complete buffers of the correct number, leaves it to the user to update them
 */ const PointsBuffer = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ children, positions, colors, sizes, stride = 3, ...props }, forwardedRef)=>{
    const pointsRef = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"](forwardedRef, ()=>pointsRef.current, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])(()=>{
        const attr = pointsRef.current.geometry.attributes;
        attr.position.needsUpdate = true;
        if (colors) attr.color.needsUpdate = true;
        if (sizes) attr.size.needsUpdate = true;
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("points", (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        ref: pointsRef
    }, props), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("bufferGeometry", null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("bufferAttribute", {
        attach: "attributes-position",
        args: [
            positions,
            stride
        ],
        usage: __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicDrawUsage"]
    }), colors && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("bufferAttribute", {
        attach: "attributes-color",
        args: [
            colors,
            stride
        ],
        count: colors.length / stride,
        usage: __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicDrawUsage"]
    }), sizes && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("bufferAttribute", {
        attach: "attributes-size",
        args: [
            sizes,
            1
        ],
        count: sizes.length / stride,
        usage: __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicDrawUsage"]
    })), children);
});
const Points = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    if (props.positions instanceof Float32Array) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](PointsBuffer, (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, {
            ref: forwardedRef
        }));
    } else return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](PointsInstances, (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: forwardedRef
    }));
});
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/@react-three/drei/helpers/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "version",
    ()=>version
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
;
const getVersion = ()=>parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REVISION"].replace(/\D+/g, ''));
const version = /* @__PURE__ */ getVersion();
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/@react-three/drei/core/PointMaterial.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PointMaterial",
    ()=>PointMaterial,
    "PointMaterialImpl",
    ()=>PointMaterialImpl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/@react-three/drei/helpers/constants.js [app-ssr] (ecmascript)");
;
;
;
;
const opaque_fragment = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"] >= 154 ? 'opaque_fragment' : 'output_fragment';
class PointMaterialImpl extends __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointsMaterial"] {
    constructor(props){
        super(props);
        this.onBeforeCompile = (shader, renderer)=>{
            const { isWebGL2 } = renderer.capabilities;
            shader.fragmentShader = shader.fragmentShader.replace(`#include <${opaque_fragment}>`, `
        ${!isWebGL2 ? `#extension GL_OES_standard_derivatives : enable\n#include <${opaque_fragment}>` : `#include <${opaque_fragment}>`}
      vec2 cxy = 2.0 * gl_PointCoord - 1.0;
      float r = dot(cxy, cxy);
      float delta = fwidth(r);     
      float mask = 1.0 - smoothstep(1.0 - delta, 1.0 + delta, r);
      gl_FragColor = vec4(gl_FragColor.rgb, mask * gl_FragColor.a );
      #include <tonemapping_fragment>
      #include <${__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"] >= 154 ? 'colorspace_fragment' : 'encodings_fragment'}>
      `);
        };
    }
}
const PointMaterial = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const [material] = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>new PointMaterialImpl(null));
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("primitive", (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, {
        object: material,
        ref: ref,
        attach: "material"
    }));
});
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/@react-three/drei/core/Float.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Float",
    ()=>Float
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-ssr] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
;
;
;
const Float = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ children, enabled = true, speed = 1, rotationIntensity = 1, floatIntensity = 1, floatingRange = [
    -0.1,
    0.1
], autoInvalidate = false, ...props }, forwardRef)=>{
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"](forwardRef, ()=>ref.current, []);
    const offset = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](Math.random() * 10000);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])((state)=>{
        var _floatingRange$, _floatingRange$2;
        if (!enabled || speed === 0) return;
        if (autoInvalidate) state.invalidate();
        const t = offset.current + state.clock.elapsedTime;
        ref.current.rotation.x = Math.cos(t / 4 * speed) / 8 * rotationIntensity;
        ref.current.rotation.y = Math.sin(t / 4 * speed) / 8 * rotationIntensity;
        ref.current.rotation.z = Math.sin(t / 4 * speed) / 20 * rotationIntensity;
        let yPosition = Math.sin(t / 4 * speed) / 10;
        yPosition = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].mapLinear(yPosition, -0.1, 0.1, (_floatingRange$ = floatingRange == null ? void 0 : floatingRange[0]) !== null && _floatingRange$ !== void 0 ? _floatingRange$ : -0.1, (_floatingRange$2 = floatingRange == null ? void 0 : floatingRange[1]) !== null && _floatingRange$2 !== void 0 ? _floatingRange$2 : 0.1);
        ref.current.position.y = yPosition * floatIntensity;
        ref.current.updateMatrix();
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("group", props, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("group", {
        ref: ref,
        matrixAutoUpdate: false
    }, children));
});
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/@react-three/drei/core/Stars.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Stars",
    ()=>Stars
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-ssr] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/@react-three/drei/helpers/constants.js [app-ssr] (ecmascript)");
;
;
;
;
class StarfieldMaterial extends __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMaterial"] {
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
	      #include <${__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"] >= 154 ? 'colorspace_fragment' : 'encodings_fragment'}>
      }`
        });
    }
}
const genStar = (r)=>{
    return new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]().setFromSpherical(new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Spherical"](r, Math.acos(1 - Math.random() * 2), Math.random() * 2 * Math.PI));
};
const Stars = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ radius = 100, depth = 50, count = 5000, saturation = 0, factor = 4, fade = false, speed = 1 }, ref)=>{
    const material = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const [position, color, size] = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const positions = [];
        const colors = [];
        const sizes = Array.from({
            length: count
        }, ()=>(0.5 + 0.5 * Math.random()) * factor);
        const color = new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"]();
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
    }, [
        count,
        depth,
        factor,
        radius,
        saturation
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])((state)=>material.current && (material.current.uniforms.time.value = state.clock.elapsedTime * speed));
    const [starfieldMaterial] = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>new StarfieldMaterial());
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("points", {
        ref: ref
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("bufferGeometry", null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("bufferAttribute", {
        attach: "attributes-position",
        args: [
            position,
            3
        ]
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("bufferAttribute", {
        attach: "attributes-color",
        args: [
            color,
            3
        ]
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("bufferAttribute", {
        attach: "attributes-size",
        args: [
            size,
            1
        ]
    })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("primitive", {
        ref: material,
        object: starfieldMaterial,
        attach: "material",
        blending: __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdditiveBlending"],
        "uniforms-fade-value": fade,
        depthWrite: false,
        transparent: true,
        vertexColors: true
    }));
});
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/@react-three/drei/core/Fbo.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Fbo",
    ()=>Fbo,
    "useFBO",
    ()=>useFBO
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-ssr] (ecmascript) <export C as useThree>");
;
;
;
;
// 👇 uncomment when TS version supports function overloads
// export function useFBO(settings?: FBOSettings)
function useFBO(/** Width in pixels, or settings (will render fullscreen by default) */ width, /** Height in pixels */ height, /**Settings */ settings) {
    const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])((state)=>state.size);
    const viewport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])((state)=>state.viewport);
    const _width = typeof width === 'number' ? width : size.width * viewport.dpr;
    const _height = typeof height === 'number' ? height : size.height * viewport.dpr;
    const _settings = (typeof width === 'number' ? settings : width) || {};
    const { samples = 0, depth, ...targetSettings } = _settings;
    const depthBuffer = depth !== null && depth !== void 0 ? depth : _settings.depthBuffer; // backwards compatibility for deprecated `depth` prop
    const target = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const target = new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebGLRenderTarget"](_width, _height, {
            minFilter: __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinearFilter"],
            magFilter: __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinearFilter"],
            type: __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HalfFloatType"],
            ...targetSettings
        });
        if (depthBuffer) {
            target.depthTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DepthTexture"](_width, _height, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FloatType"]);
        }
        target.samples = samples;
        return target;
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"](()=>{
        target.setSize(_width, _height);
        if (samples) target.samples = samples;
    }, [
        samples,
        target,
        _width,
        _height
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        return ()=>target.dispose();
    }, []);
    return target;
}
//
// Fbo component
//
const Fbo = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ children, width, height, ...settings }, fref)=>{
    const target = useFBO(width, height, settings);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(fref, ()=>target, [
        target
    ]); // expose target through ref
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, children == null ? void 0 : children(target));
});
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/@react-three/drei/core/PerspectiveCamera.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PerspectiveCamera",
    ()=>PerspectiveCamera
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-ssr] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-ssr] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Fbo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/@react-three/drei/core/Fbo.js [app-ssr] (ecmascript)");
;
;
;
;
const isFunction = (node)=>typeof node === 'function';
const PerspectiveCamera = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ envMap, resolution = 256, frames = Infinity, makeDefault, children, ...props }, ref)=>{
    const set = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])(({ set })=>set);
    const camera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])(({ camera })=>camera);
    const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])(({ size })=>size);
    const cameraRef = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, ()=>cameraRef.current, []);
    const groupRef = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const fbo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Fbo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFBO"])(resolution);
    __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"](()=>{
        if (!props.manual) {
            cameraRef.current.aspect = size.width / size.height;
        }
    }, [
        size,
        props
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"](()=>{
        cameraRef.current.updateProjectionMatrix();
    });
    let count = 0;
    let oldEnvMap = null;
    const functional = isFunction(children);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])((state)=>{
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
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"](()=>{
        if (makeDefault) {
            const oldCam = camera;
            set(()=>({
                    camera: cameraRef.current
                }));
            return ()=>set(()=>({
                        camera: oldCam
                    }));
        }
    // The camera should not be part of the dependency list because this components camera is a stable reference
    // that must exchange the default, and clean up after itself on unmount.
    }, [
        cameraRef,
        makeDefault,
        set
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("perspectiveCamera", (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        ref: cameraRef
    }, props), !functional && children), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("group", {
        ref: groupRef
    }, functional && children(fbo.texture)));
});
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/@react-three/drei/core/Text.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Text",
    ()=>Text
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$troika$2d$three$2d$text$2f$dist$2f$troika$2d$three$2d$text$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/troika-three-text/dist/troika-three-text.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-ssr] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$suspend$2d$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/suspend-react/index.js [app-ssr] (ecmascript)");
;
;
;
;
;
const Text = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ sdfGlyphSize = 64, anchorX = 'center', anchorY = 'middle', font, fontSize = 1, children, characters, onSync, ...props }, ref)=>{
    const invalidate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])(({ invalidate })=>invalidate);
    const [troikaMesh] = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$troika$2d$three$2d$text$2f$dist$2f$troika$2d$three$2d$text$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"]());
    const [nodes, text] = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const n = [];
        let t = '';
        __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].forEach(children, (child)=>{
            if (typeof child === 'string' || typeof child === 'number') {
                t += child;
            } else {
                n.push(child);
            }
        });
        return [
            n,
            t
        ];
    }, [
        children
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$suspend$2d$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["suspend"])(()=>new Promise((res)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$troika$2d$three$2d$text$2f$dist$2f$troika$2d$three$2d$text$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["preloadFont"])({
                font,
                characters
            }, res)), [
        'troika-text',
        font,
        characters
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"](()=>void troikaMesh.sync(()=>{
            invalidate();
            if (onSync) onSync(troikaMesh);
        }));
    __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        return ()=>troikaMesh.dispose();
    }, [
        troikaMesh
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("primitive", (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        object: troikaMesh,
        ref: ref,
        font: font,
        text: text,
        anchorX: anchorX,
        anchorY: anchorY,
        fontSize: fontSize,
        sdfGlyphSize: sdfGlyphSize
    }, props), nodes);
});
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/troika-worker-utils/dist/troika-worker-utils.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defineWorkerModule",
    ()=>defineWorkerModule,
    "stringifyFunction",
    ()=>stringifyFunction,
    "terminateWorker",
    ()=>terminateWorker
]);
/**
 * Main content for the worker that handles the loading and execution of
 * modules within it.
 */ function workerBootstrap() {
    var modules = Object.create(null);
    // Handle messages for registering a module
    function registerModule(ref, callback) {
        var id = ref.id;
        var name = ref.name;
        var dependencies = ref.dependencies;
        if (dependencies === void 0) dependencies = [];
        var init = ref.init;
        if (init === void 0) init = function() {};
        var getTransferables = ref.getTransferables;
        if (getTransferables === void 0) getTransferables = null;
        // Only register once
        if (modules[id]) {
            return;
        }
        try {
            // If any dependencies are modules, ensure they're registered and grab their value
            dependencies = dependencies.map(function(dep) {
                if (dep && dep.isWorkerModule) {
                    registerModule(dep, function(depResult) {
                        if (depResult instanceof Error) {
                            throw depResult;
                        }
                    });
                    dep = modules[dep.id].value;
                }
                return dep;
            });
            // Rehydrate functions
            init = rehydrate("<" + name + ">.init", init);
            if (getTransferables) {
                getTransferables = rehydrate("<" + name + ">.getTransferables", getTransferables);
            }
            // Initialize the module and store its value
            var value = null;
            if (typeof init === 'function') {
                value = init.apply(void 0, dependencies);
            } else {
                console.error('worker module init function failed to rehydrate');
            }
            modules[id] = {
                id: id,
                value: value,
                getTransferables: getTransferables
            };
            callback(value);
        } catch (err) {
            if (!(err && err.noLog)) {
                console.error(err);
            }
            callback(err);
        }
    }
    // Handle messages for calling a registered module's result function
    function callModule(ref, callback) {
        var ref$1;
        var id = ref.id;
        var args = ref.args;
        if (!modules[id] || typeof modules[id].value !== 'function') {
            callback(new Error("Worker module " + id + ": not found or its 'init' did not return a function"));
        }
        try {
            var result = (ref$1 = modules[id]).value.apply(ref$1, args);
            if (result && typeof result.then === 'function') {
                result.then(handleResult, function(rej) {
                    return callback(rej instanceof Error ? rej : new Error('' + rej));
                });
            } else {
                handleResult(result);
            }
        } catch (err) {
            callback(err);
        }
        function handleResult(result) {
            try {
                var tx = modules[id].getTransferables && modules[id].getTransferables(result);
                if (!tx || !Array.isArray(tx) || !tx.length) {
                    tx = undefined; //postMessage is very picky about not passing null or empty transferables
                }
                callback(result, tx);
            } catch (err) {
                console.error(err);
                callback(err);
            }
        }
    }
    function rehydrate(name, str) {
        var result = void 0;
        self.troikaDefine = function(r) {
            return result = r;
        };
        var url = URL.createObjectURL(new Blob([
            "/** " + name.replace(/\*/g, '') + " **/\n\ntroikaDefine(\n" + str + "\n)"
        ], {
            type: 'application/javascript'
        }));
        try {
            importScripts(url);
        } catch (err) {
            console.error(err);
        }
        URL.revokeObjectURL(url);
        delete self.troikaDefine;
        return result;
    }
    // Handler for all messages within the worker
    self.addEventListener('message', function(e) {
        var ref = e.data;
        var messageId = ref.messageId;
        var action = ref.action;
        var data = ref.data;
        try {
            // Module registration
            if (action === 'registerModule') {
                registerModule(data, function(result) {
                    if (result instanceof Error) {
                        postMessage({
                            messageId: messageId,
                            success: false,
                            error: result.message
                        });
                    } else {
                        postMessage({
                            messageId: messageId,
                            success: true,
                            result: {
                                isCallable: typeof result === 'function'
                            }
                        });
                    }
                });
            }
            // Invocation
            if (action === 'callModule') {
                callModule(data, function(result, transferables) {
                    if (result instanceof Error) {
                        postMessage({
                            messageId: messageId,
                            success: false,
                            error: result.message
                        });
                    } else {
                        postMessage({
                            messageId: messageId,
                            success: true,
                            result: result
                        }, transferables || undefined);
                    }
                });
            }
        } catch (err) {
            postMessage({
                messageId: messageId,
                success: false,
                error: err.stack
            });
        }
    });
}
/**
 * Fallback for `defineWorkerModule` that behaves identically but runs in the main
 * thread, for when the execution environment doesn't support web workers or they
 * are disallowed due to e.g. CSP security restrictions.
 */ function defineMainThreadModule(options) {
    var moduleFunc = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        return moduleFunc._getInitResult().then(function(initResult) {
            if (typeof initResult === 'function') {
                return initResult.apply(void 0, args);
            } else {
                throw new Error('Worker module function was called but `init` did not return a callable function');
            }
        });
    };
    moduleFunc._getInitResult = function() {
        // We can ignore getTransferables in main thread. TODO workerId?
        var dependencies = options.dependencies;
        var init = options.init;
        // Resolve dependencies
        dependencies = Array.isArray(dependencies) ? dependencies.map(function(dep) {
            if (dep) {
                // If it's a worker module, use its main thread impl
                dep = dep.onMainThread || dep;
                // If it's a main thread worker module, use its init return value
                if (dep._getInitResult) {
                    dep = dep._getInitResult();
                }
            }
            return dep;
        }) : [];
        // Invoke init with the resolved dependencies
        var initPromise = Promise.all(dependencies).then(function(deps) {
            return init.apply(null, deps);
        });
        // Cache the resolved promise for subsequent calls
        moduleFunc._getInitResult = function() {
            return initPromise;
        };
        return initPromise;
    };
    return moduleFunc;
}
var supportsWorkers = function() {
    var supported = false;
    // Only attempt worker initialization in browsers; elsewhere it would just be
    // noise e.g. loading into a Node environment for SSR.
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    {
        // TODO additional checks for things like importScripts within the worker?
        //  Would need to be an async check.
        var worker;
    }
    // Cached result
    supportsWorkers = function() {
        return supported;
    };
    return supported;
};
var _workerModuleId = 0;
var _messageId = 0;
var _allowInitAsString = false;
var workers = Object.create(null);
var registeredModules = Object.create(null); //workerId -> Set<unregisterFn>
var openRequests = Object.create(null);
/**
 * Define a module of code that will be executed with a web worker. This provides a simple
 * interface for moving chunks of logic off the main thread, and managing their dependencies
 * among one another.
 *
 * @param {object} options
 * @param {function} options.init
 * @param {array} [options.dependencies]
 * @param {function} [options.getTransferables]
 * @param {string} [options.name]
 * @param {string} [options.workerId]
 * @return {function(...[*]): {then}}
 */ function defineWorkerModule(options) {
    if ((!options || typeof options.init !== 'function') && !_allowInitAsString) {
        throw new Error('requires `options.init` function');
    }
    var dependencies = options.dependencies;
    var init = options.init;
    var getTransferables = options.getTransferables;
    var workerId = options.workerId;
    var onMainThread = defineMainThreadModule(options);
    if (workerId == null) {
        workerId = '#default';
    }
    var id = "workerModule" + ++_workerModuleId;
    var name = options.name || id;
    var registrationPromise = null;
    dependencies = dependencies && dependencies.map(function(dep) {
        // Wrap raw functions as worker modules with no dependencies
        if (typeof dep === 'function' && !dep.workerModuleData) {
            _allowInitAsString = true;
            dep = defineWorkerModule({
                workerId: workerId,
                name: "<" + name + "> function dependency: " + dep.name,
                init: "function(){return (\n" + stringifyFunction(dep) + "\n)}"
            });
            _allowInitAsString = false;
        }
        // Grab postable data for worker modules
        if (dep && dep.workerModuleData) {
            dep = dep.workerModuleData;
        }
        return dep;
    });
    function moduleFunc() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        if (!supportsWorkers()) {
            return onMainThread.apply(void 0, args);
        }
        // Register this module if needed
        if (!registrationPromise) {
            registrationPromise = callWorker(workerId, 'registerModule', moduleFunc.workerModuleData);
            var unregister = function() {
                registrationPromise = null;
                registeredModules[workerId].delete(unregister);
            };
            (registeredModules[workerId] || (registeredModules[workerId] = new Set())).add(unregister);
        }
        // Invoke the module, returning a promise
        return registrationPromise.then(function(ref) {
            var isCallable = ref.isCallable;
            if (isCallable) {
                return callWorker(workerId, 'callModule', {
                    id: id,
                    args: args
                });
            } else {
                throw new Error('Worker module function was called but `init` did not return a callable function');
            }
        });
    }
    moduleFunc.workerModuleData = {
        isWorkerModule: true,
        id: id,
        name: name,
        dependencies: dependencies,
        init: stringifyFunction(init),
        getTransferables: getTransferables && stringifyFunction(getTransferables)
    };
    moduleFunc.onMainThread = onMainThread;
    return moduleFunc;
}
/**
 * Terminate an active Worker by a workerId that was passed to defineWorkerModule.
 * This only terminates the Worker itself; the worker module will remain available
 * and if you call it again its Worker will be respawned.
 * @param {string} workerId
 */ function terminateWorker(workerId) {
    // Unregister all modules that were registered in that worker
    if (registeredModules[workerId]) {
        registeredModules[workerId].forEach(function(unregister) {
            unregister();
        });
    }
    // Terminate the Worker object
    if (workers[workerId]) {
        workers[workerId].terminate();
        delete workers[workerId];
    }
}
/**
 * Stringifies a function into a form that can be deserialized in the worker
 * @param fn
 */ function stringifyFunction(fn) {
    var str = fn.toString();
    // If it was defined in object method/property format, it needs to be modified
    if (!/^function/.test(str) && /^\w+\s*\(/.test(str)) {
        str = 'function ' + str;
    }
    return str;
}
function getWorker(workerId) {
    var worker = workers[workerId];
    if (!worker) {
        // Bootstrap the worker's content
        var bootstrap = stringifyFunction(workerBootstrap);
        // Create the worker from the bootstrap function content
        worker = workers[workerId] = new Worker(URL.createObjectURL(new Blob([
            "/** Worker Module Bootstrap: " + workerId.replace(/\*/g, '') + " **/\n\n;(" + bootstrap + ")()"
        ], {
            type: 'application/javascript'
        })));
        // Single handler for response messages from the worker
        worker.onmessage = function(e) {
            var response = e.data;
            var msgId = response.messageId;
            var callback = openRequests[msgId];
            if (!callback) {
                throw new Error('WorkerModule response with empty or unknown messageId');
            }
            delete openRequests[msgId];
            callback(response);
        };
    }
    return worker;
}
// Issue a call to the worker with a callback to handle the response
function callWorker(workerId, action, data) {
    return new Promise(function(resolve, reject) {
        var messageId = ++_messageId;
        openRequests[messageId] = function(response) {
            if (response.success) {
                resolve(response.result);
            } else {
                reject(new Error("Error in worker " + action + " call: " + response.error));
            }
        };
        getWorker(workerId).postMessage({
            messageId: messageId,
            action: action,
            data: data
        });
    });
}
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/webgl-sdf-generator/dist/webgl-sdf-generator.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SDFGenerator
]);
function SDFGenerator() {
    var exports = function(exports) {
        /**
   * Find the point on a quadratic bezier curve at t where t is in the range [0, 1]
   */ function pointOnQuadraticBezier(x0, y0, x1, y1, x2, y2, t, pointOut) {
            var t2 = 1 - t;
            pointOut.x = t2 * t2 * x0 + 2 * t2 * t * x1 + t * t * x2;
            pointOut.y = t2 * t2 * y0 + 2 * t2 * t * y1 + t * t * y2;
        }
        /**
   * Find the point on a cubic bezier curve at t where t is in the range [0, 1]
   */ function pointOnCubicBezier(x0, y0, x1, y1, x2, y2, x3, y3, t, pointOut) {
            var t2 = 1 - t;
            pointOut.x = t2 * t2 * t2 * x0 + 3 * t2 * t2 * t * x1 + 3 * t2 * t * t * x2 + t * t * t * x3;
            pointOut.y = t2 * t2 * t2 * y0 + 3 * t2 * t2 * t * y1 + 3 * t2 * t * t * y2 + t * t * t * y3;
        }
        /**
   * Parse a path string into its constituent line/curve commands, invoking a callback for each.
   * @param {string} pathString - An SVG-like path string to parse; should only contain commands: M/L/Q/C/Z
   * @param {function(
   *   command: 'L'|'Q'|'C',
   *   startX: number,
   *   startY: number,
   *   endX: number,
   *   endY: number,
   *   ctrl1X?: number,
   *   ctrl1Y?: number,
   *   ctrl2X?: number,
   *   ctrl2Y?: number
   * )} commandCallback - A callback function that will be called once for each parsed path command, passing the
   *                      command identifier (only L/Q/C commands) and its numeric arguments.
   */ function forEachPathCommand(pathString, commandCallback) {
            var segmentRE = /([MLQCZ])([^MLQCZ]*)/g;
            var match, firstX, firstY, prevX, prevY;
            while(match = segmentRE.exec(pathString)){
                var args = match[2].replace(/^\s*|\s*$/g, '').split(/[,\s]+/).map(function(v) {
                    return parseFloat(v);
                });
                switch(match[1]){
                    case 'M':
                        prevX = firstX = args[0];
                        prevY = firstY = args[1];
                        break;
                    case 'L':
                        if (args[0] !== prevX || args[1] !== prevY) {
                            commandCallback('L', prevX, prevY, prevX = args[0], prevY = args[1]);
                        }
                        break;
                    case 'Q':
                        {
                            commandCallback('Q', prevX, prevY, prevX = args[2], prevY = args[3], args[0], args[1]);
                            break;
                        }
                    case 'C':
                        {
                            commandCallback('C', prevX, prevY, prevX = args[4], prevY = args[5], args[0], args[1], args[2], args[3]);
                            break;
                        }
                    case 'Z':
                        if (prevX !== firstX || prevY !== firstY) {
                            commandCallback('L', prevX, prevY, firstX, firstY);
                        }
                        break;
                }
            }
        }
        /**
   * Convert a path string to a series of straight line segments
   * @param {string} pathString - An SVG-like path string to parse; should only contain commands: M/L/Q/C/Z
   * @param {function(x1:number, y1:number, x2:number, y2:number)} segmentCallback - A callback
   *        function that will be called once for every line segment
   * @param {number} [curvePoints] - How many straight line segments to use when approximating a
   *        bezier curve in the path. Defaults to 16.
   */ function pathToLineSegments(pathString, segmentCallback, curvePoints) {
            if (curvePoints === void 0) curvePoints = 16;
            var tempPoint = {
                x: 0,
                y: 0
            };
            forEachPathCommand(pathString, function(command, startX, startY, endX, endY, ctrl1X, ctrl1Y, ctrl2X, ctrl2Y) {
                switch(command){
                    case 'L':
                        segmentCallback(startX, startY, endX, endY);
                        break;
                    case 'Q':
                        {
                            var prevCurveX = startX;
                            var prevCurveY = startY;
                            for(var i = 1; i < curvePoints; i++){
                                pointOnQuadraticBezier(startX, startY, ctrl1X, ctrl1Y, endX, endY, i / (curvePoints - 1), tempPoint);
                                segmentCallback(prevCurveX, prevCurveY, tempPoint.x, tempPoint.y);
                                prevCurveX = tempPoint.x;
                                prevCurveY = tempPoint.y;
                            }
                            break;
                        }
                    case 'C':
                        {
                            var prevCurveX$1 = startX;
                            var prevCurveY$1 = startY;
                            for(var i$1 = 1; i$1 < curvePoints; i$1++){
                                pointOnCubicBezier(startX, startY, ctrl1X, ctrl1Y, ctrl2X, ctrl2Y, endX, endY, i$1 / (curvePoints - 1), tempPoint);
                                segmentCallback(prevCurveX$1, prevCurveY$1, tempPoint.x, tempPoint.y);
                                prevCurveX$1 = tempPoint.x;
                                prevCurveY$1 = tempPoint.y;
                            }
                            break;
                        }
                }
            });
        }
        var viewportQuadVertex = "precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}";
        var copyTexFragment = "precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}";
        var cache = new WeakMap();
        var glContextParams = {
            premultipliedAlpha: false,
            preserveDrawingBuffer: true,
            antialias: false,
            depth: false
        };
        /**
   * This is a little helper library for WebGL. It assists with state management for a GL context.
   * It's pretty tightly wrapped to the needs of this package, not very general-purpose.
   *
   * @param { WebGLRenderingContext | HTMLCanvasElement | OffscreenCanvas } glOrCanvas - the GL context to wrap
   * @param { ({gl, getExtension, withProgram, withTexture, withTextureFramebuffer, handleContextLoss}) => void } callback
   */ function withWebGLContext(glOrCanvas, callback) {
            var gl = glOrCanvas.getContext ? glOrCanvas.getContext('webgl', glContextParams) : glOrCanvas;
            var wrapper = cache.get(gl);
            if (!wrapper) {
                var isWebGL2 = typeof WebGL2RenderingContext !== 'undefined' && gl instanceof WebGL2RenderingContext;
                var extensions = {};
                var programs = {};
                var textures = {};
                var textureUnit = -1;
                var framebufferStack = [];
                gl.canvas.addEventListener('webglcontextlost', function(e) {
                    handleContextLoss();
                    e.preventDefault();
                }, false);
                function getExtension(name) {
                    var ext = extensions[name];
                    if (!ext) {
                        ext = extensions[name] = gl.getExtension(name);
                        if (!ext) {
                            throw new Error(name + " not supported");
                        }
                    }
                    return ext;
                }
                function compileShader(src, type) {
                    var shader = gl.createShader(type);
                    gl.shaderSource(shader, src);
                    gl.compileShader(shader);
                    // const status = gl.getShaderParameter(shader, gl.COMPILE_STATUS)
                    // if (!status && !gl.isContextLost()) {
                    //   throw new Error(gl.getShaderInfoLog(shader).trim())
                    // }
                    return shader;
                }
                function withProgram(name, vert, frag, func) {
                    if (!programs[name]) {
                        var attributes = {};
                        var uniforms = {};
                        var program = gl.createProgram();
                        gl.attachShader(program, compileShader(vert, gl.VERTEX_SHADER));
                        gl.attachShader(program, compileShader(frag, gl.FRAGMENT_SHADER));
                        gl.linkProgram(program);
                        programs[name] = {
                            program: program,
                            transaction: function transaction(func) {
                                gl.useProgram(program);
                                func({
                                    setUniform: function setUniform(type, name) {
                                        var values = [], len = arguments.length - 2;
                                        while(len-- > 0)values[len] = arguments[len + 2];
                                        var uniformLoc = uniforms[name] || (uniforms[name] = gl.getUniformLocation(program, name));
                                        gl["uniform" + type].apply(gl, [
                                            uniformLoc
                                        ].concat(values));
                                    },
                                    setAttribute: function setAttribute(name, size, usage, instancingDivisor, data) {
                                        var attr = attributes[name];
                                        if (!attr) {
                                            attr = attributes[name] = {
                                                buf: gl.createBuffer(),
                                                loc: gl.getAttribLocation(program, name),
                                                data: null
                                            };
                                        }
                                        gl.bindBuffer(gl.ARRAY_BUFFER, attr.buf);
                                        gl.vertexAttribPointer(attr.loc, size, gl.FLOAT, false, 0, 0);
                                        gl.enableVertexAttribArray(attr.loc);
                                        if (isWebGL2) {
                                            gl.vertexAttribDivisor(attr.loc, instancingDivisor);
                                        } else {
                                            getExtension('ANGLE_instanced_arrays').vertexAttribDivisorANGLE(attr.loc, instancingDivisor);
                                        }
                                        if (data !== attr.data) {
                                            gl.bufferData(gl.ARRAY_BUFFER, data, usage);
                                            attr.data = data;
                                        }
                                    }
                                });
                            }
                        };
                    }
                    programs[name].transaction(func);
                }
                function withTexture(name, func) {
                    textureUnit++;
                    try {
                        gl.activeTexture(gl.TEXTURE0 + textureUnit);
                        var texture = textures[name];
                        if (!texture) {
                            texture = textures[name] = gl.createTexture();
                            gl.bindTexture(gl.TEXTURE_2D, texture);
                            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
                            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
                        }
                        gl.bindTexture(gl.TEXTURE_2D, texture);
                        func(texture, textureUnit);
                    } finally{
                        textureUnit--;
                    }
                }
                function withTextureFramebuffer(texture, textureUnit, func) {
                    var framebuffer = gl.createFramebuffer();
                    framebufferStack.push(framebuffer);
                    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
                    gl.activeTexture(gl.TEXTURE0 + textureUnit);
                    gl.bindTexture(gl.TEXTURE_2D, texture);
                    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
                    try {
                        func(framebuffer);
                    } finally{
                        gl.deleteFramebuffer(framebuffer);
                        gl.bindFramebuffer(gl.FRAMEBUFFER, framebufferStack[--framebufferStack.length - 1] || null);
                    }
                }
                function handleContextLoss() {
                    extensions = {};
                    programs = {};
                    textures = {};
                    textureUnit = -1;
                    framebufferStack.length = 0;
                }
                cache.set(gl, wrapper = {
                    gl: gl,
                    isWebGL2: isWebGL2,
                    getExtension: getExtension,
                    withProgram: withProgram,
                    withTexture: withTexture,
                    withTextureFramebuffer: withTextureFramebuffer,
                    handleContextLoss: handleContextLoss
                });
            }
            callback(wrapper);
        }
        function renderImageData(glOrCanvas, imageData, x, y, width, height, channels, framebuffer) {
            if (channels === void 0) channels = 15;
            if (framebuffer === void 0) framebuffer = null;
            withWebGLContext(glOrCanvas, function(ref) {
                var gl = ref.gl;
                var withProgram = ref.withProgram;
                var withTexture = ref.withTexture;
                withTexture('copy', function(tex, texUnit) {
                    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, imageData);
                    withProgram('copy', viewportQuadVertex, copyTexFragment, function(ref) {
                        var setUniform = ref.setUniform;
                        var setAttribute = ref.setAttribute;
                        setAttribute('aUV', 2, gl.STATIC_DRAW, 0, new Float32Array([
                            0,
                            0,
                            2,
                            0,
                            0,
                            2
                        ]));
                        setUniform('1i', 'image', texUnit);
                        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer || null);
                        gl.disable(gl.BLEND);
                        gl.colorMask(channels & 8, channels & 4, channels & 2, channels & 1);
                        gl.viewport(x, y, width, height);
                        gl.scissor(x, y, width, height);
                        gl.drawArrays(gl.TRIANGLES, 0, 3);
                    });
                });
            });
        }
        /**
   * Resizing a canvas clears its contents; this utility copies the previous contents over.
   * @param canvas
   * @param newWidth
   * @param newHeight
   */ function resizeWebGLCanvasWithoutClearing(canvas, newWidth, newHeight) {
            var width = canvas.width;
            var height = canvas.height;
            withWebGLContext(canvas, function(ref) {
                var gl = ref.gl;
                var data = new Uint8Array(width * height * 4);
                gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, data);
                canvas.width = newWidth;
                canvas.height = newHeight;
                renderImageData(gl, data, 0, 0, width, height);
            });
        }
        var webglUtils = /*#__PURE__*/ Object.freeze({
            __proto__: null,
            withWebGLContext: withWebGLContext,
            renderImageData: renderImageData,
            resizeWebGLCanvasWithoutClearing: resizeWebGLCanvasWithoutClearing
        });
        function generate$2(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent) {
            if (sdfExponent === void 0) sdfExponent = 1;
            var textureData = new Uint8Array(sdfWidth * sdfHeight);
            var viewBoxWidth = viewBox[2] - viewBox[0];
            var viewBoxHeight = viewBox[3] - viewBox[1];
            // Decompose all paths into straight line segments and add them to an index
            var segments = [];
            pathToLineSegments(path, function(x1, y1, x2, y2) {
                segments.push({
                    x1: x1,
                    y1: y1,
                    x2: x2,
                    y2: y2,
                    minX: Math.min(x1, x2),
                    minY: Math.min(y1, y2),
                    maxX: Math.max(x1, x2),
                    maxY: Math.max(y1, y2)
                });
            });
            // Sort segments by maxX, this will let us short-circuit some loops below
            segments.sort(function(a, b) {
                return a.maxX - b.maxX;
            });
            // For each target SDF texel, find the distance from its center to its nearest line segment,
            // map that distance to an alpha value, and write that alpha to the texel
            for(var sdfX = 0; sdfX < sdfWidth; sdfX++){
                for(var sdfY = 0; sdfY < sdfHeight; sdfY++){
                    var signedDist = findNearestSignedDistance(viewBox[0] + viewBoxWidth * (sdfX + 0.5) / sdfWidth, viewBox[1] + viewBoxHeight * (sdfY + 0.5) / sdfHeight);
                    // Use an exponential scale to ensure the texels very near the glyph path have adequate
                    // precision, while allowing the distance field to cover the entire texture, given that
                    // there are only 8 bits available. Formula visualized: https://www.desmos.com/calculator/uiaq5aqiam
                    var alpha = Math.pow(1 - Math.abs(signedDist) / maxDistance, sdfExponent) / 2;
                    if (signedDist < 0) {
                        alpha = 1 - alpha;
                    }
                    alpha = Math.max(0, Math.min(255, Math.round(alpha * 255))); //clamp
                    textureData[sdfY * sdfWidth + sdfX] = alpha;
                }
            }
            return textureData;
            //TURBOPACK unreachable
            ;
            /**
     * For a given x/y, search the index for the closest line segment and return
     * its signed distance. Negative = inside, positive = outside, zero = on edge
     * @param x
     * @param y
     * @returns {number}
     */ function findNearestSignedDistance(x, y) {
                var closestDistSq = Infinity;
                var closestDist = Infinity;
                for(var i = segments.length; i--;){
                    var seg = segments[i];
                    if (seg.maxX + closestDist <= x) {
                        break;
                    } //sorting by maxX means no more can be closer, so we can short-circuit
                    if (x + closestDist > seg.minX && y - closestDist < seg.maxY && y + closestDist > seg.minY) {
                        var distSq = absSquareDistanceToLineSegment(x, y, seg.x1, seg.y1, seg.x2, seg.y2);
                        if (distSq < closestDistSq) {
                            closestDistSq = distSq;
                            closestDist = Math.sqrt(closestDistSq);
                        }
                    }
                }
                // Flip to negative distance if inside the poly
                if (isPointInPoly(x, y)) {
                    closestDist = -closestDist;
                }
                return closestDist;
            }
            /**
     * Determine whether the given point lies inside or outside the glyph. Uses a simple
     * winding-number ray casting algorithm using a ray pointing east from the point.
     */ function isPointInPoly(x, y) {
                var winding = 0;
                for(var i = segments.length; i--;){
                    var seg = segments[i];
                    if (seg.maxX <= x) {
                        break;
                    } //sorting by maxX means no more can cross, so we can short-circuit
                    var intersects = seg.y1 > y !== seg.y2 > y && x < (seg.x2 - seg.x1) * (y - seg.y1) / (seg.y2 - seg.y1) + seg.x1;
                    if (intersects) {
                        winding += seg.y1 < seg.y2 ? 1 : -1;
                    }
                }
                return winding !== 0;
            }
        }
        function generateIntoCanvas$2(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, canvas, x, y, channel) {
            if (sdfExponent === void 0) sdfExponent = 1;
            if (x === void 0) x = 0;
            if (y === void 0) y = 0;
            if (channel === void 0) channel = 0;
            generateIntoFramebuffer$1(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, canvas, null, x, y, channel);
        }
        function generateIntoFramebuffer$1(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, glOrCanvas, framebuffer, x, y, channel) {
            if (sdfExponent === void 0) sdfExponent = 1;
            if (x === void 0) x = 0;
            if (y === void 0) y = 0;
            if (channel === void 0) channel = 0;
            var data = generate$2(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent);
            // Expand single-channel data to rbga
            var rgbaData = new Uint8Array(data.length * 4);
            for(var i = 0; i < data.length; i++){
                rgbaData[i * 4 + channel] = data[i];
            }
            renderImageData(glOrCanvas, rgbaData, x, y, sdfWidth, sdfHeight, 1 << 3 - channel, framebuffer);
        }
        /**
   * Find the absolute distance from a point to a line segment at closest approach
   */ function absSquareDistanceToLineSegment(x, y, lineX0, lineY0, lineX1, lineY1) {
            var ldx = lineX1 - lineX0;
            var ldy = lineY1 - lineY0;
            var lengthSq = ldx * ldx + ldy * ldy;
            var t = lengthSq ? Math.max(0, Math.min(1, ((x - lineX0) * ldx + (y - lineY0) * ldy) / lengthSq)) : 0;
            var dx = x - (lineX0 + t * ldx);
            var dy = y - (lineY0 + t * ldy);
            return dx * dx + dy * dy;
        }
        var javascript = /*#__PURE__*/ Object.freeze({
            __proto__: null,
            generate: generate$2,
            generateIntoCanvas: generateIntoCanvas$2,
            generateIntoFramebuffer: generateIntoFramebuffer$1
        });
        var mainVertex = "precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}";
        var mainFragment = "precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}";
        var postFragment = "precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}";
        // Single triangle covering viewport
        var viewportUVs = new Float32Array([
            0,
            0,
            2,
            0,
            0,
            2
        ]);
        var implicitContext = null;
        var isTestingSupport = false;
        var NULL_OBJECT = {};
        var supportByCanvas = new WeakMap(); // canvas -> bool
        function validateSupport(glOrCanvas) {
            if (!isTestingSupport && !isSupported(glOrCanvas)) {
                throw new Error('WebGL generation not supported');
            }
        }
        function generate$1(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, glOrCanvas) {
            if (sdfExponent === void 0) sdfExponent = 1;
            if (glOrCanvas === void 0) glOrCanvas = null;
            if (!glOrCanvas) {
                glOrCanvas = implicitContext;
                if (!glOrCanvas) {
                    var canvas = typeof OffscreenCanvas === 'function' ? new OffscreenCanvas(1, 1) : typeof document !== 'undefined' ? document.createElement('canvas') : null;
                    if (!canvas) {
                        throw new Error('OffscreenCanvas or DOM canvas not supported');
                    }
                    glOrCanvas = implicitContext = canvas.getContext('webgl', {
                        depth: false
                    });
                }
            }
            validateSupport(glOrCanvas);
            var rgbaData = new Uint8Array(sdfWidth * sdfHeight * 4); //not Uint8ClampedArray, cuz Safari
            // Render into a background texture framebuffer
            withWebGLContext(glOrCanvas, function(ref) {
                var gl = ref.gl;
                var withTexture = ref.withTexture;
                var withTextureFramebuffer = ref.withTextureFramebuffer;
                withTexture('readable', function(texture, textureUnit) {
                    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, sdfWidth, sdfHeight, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
                    withTextureFramebuffer(texture, textureUnit, function(framebuffer) {
                        generateIntoFramebuffer(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, gl, framebuffer, 0, 0, 0 // red channel
                        );
                        gl.readPixels(0, 0, sdfWidth, sdfHeight, gl.RGBA, gl.UNSIGNED_BYTE, rgbaData);
                    });
                });
            });
            // Throw away all but the red channel
            var data = new Uint8Array(sdfWidth * sdfHeight);
            for(var i = 0, j = 0; i < rgbaData.length; i += 4){
                data[j++] = rgbaData[i];
            }
            return data;
        }
        function generateIntoCanvas$1(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, canvas, x, y, channel) {
            if (sdfExponent === void 0) sdfExponent = 1;
            if (x === void 0) x = 0;
            if (y === void 0) y = 0;
            if (channel === void 0) channel = 0;
            generateIntoFramebuffer(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, canvas, null, x, y, channel);
        }
        function generateIntoFramebuffer(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, glOrCanvas, framebuffer, x, y, channel) {
            if (sdfExponent === void 0) sdfExponent = 1;
            if (x === void 0) x = 0;
            if (y === void 0) y = 0;
            if (channel === void 0) channel = 0;
            // Verify support
            validateSupport(glOrCanvas);
            // Compute path segments
            var lineSegmentCoords = [];
            pathToLineSegments(path, function(x1, y1, x2, y2) {
                lineSegmentCoords.push(x1, y1, x2, y2);
            });
            lineSegmentCoords = new Float32Array(lineSegmentCoords);
            withWebGLContext(glOrCanvas, function(ref) {
                var gl = ref.gl;
                var isWebGL2 = ref.isWebGL2;
                var getExtension = ref.getExtension;
                var withProgram = ref.withProgram;
                var withTexture = ref.withTexture;
                var withTextureFramebuffer = ref.withTextureFramebuffer;
                var handleContextLoss = ref.handleContextLoss;
                withTexture('rawDistances', function(intermediateTexture, intermediateTextureUnit) {
                    if (sdfWidth !== intermediateTexture._lastWidth || sdfHeight !== intermediateTexture._lastHeight) {
                        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, intermediateTexture._lastWidth = sdfWidth, intermediateTexture._lastHeight = sdfHeight, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
                    }
                    // Unsigned distance pass
                    withProgram('main', mainVertex, mainFragment, function(ref) {
                        var setAttribute = ref.setAttribute;
                        var setUniform = ref.setUniform;
                        // Init extensions
                        var instancingExtension = !isWebGL2 && getExtension('ANGLE_instanced_arrays');
                        var blendMinMaxExtension = !isWebGL2 && getExtension('EXT_blend_minmax');
                        // Init/update attributes
                        setAttribute('aUV', 2, gl.STATIC_DRAW, 0, viewportUVs);
                        setAttribute('aLineSegment', 4, gl.DYNAMIC_DRAW, 1, lineSegmentCoords);
                        // Init/update uniforms
                        setUniform.apply(void 0, [
                            '4f',
                            'uGlyphBounds'
                        ].concat(viewBox));
                        setUniform('1f', 'uMaxDistance', maxDistance);
                        setUniform('1f', 'uExponent', sdfExponent);
                        // Render initial unsigned distance / winding number info to a texture
                        withTextureFramebuffer(intermediateTexture, intermediateTextureUnit, function(framebuffer) {
                            gl.enable(gl.BLEND);
                            gl.colorMask(true, true, true, true);
                            gl.viewport(0, 0, sdfWidth, sdfHeight);
                            gl.scissor(0, 0, sdfWidth, sdfHeight);
                            gl.blendFunc(gl.ONE, gl.ONE);
                            // Red+Green channels are incremented (FUNC_ADD) for segment-ray crossings to give a "winding number".
                            // Alpha holds the closest (MAX) unsigned distance.
                            gl.blendEquationSeparate(gl.FUNC_ADD, isWebGL2 ? gl.MAX : blendMinMaxExtension.MAX_EXT);
                            gl.clear(gl.COLOR_BUFFER_BIT);
                            if (isWebGL2) {
                                gl.drawArraysInstanced(gl.TRIANGLES, 0, 3, lineSegmentCoords.length / 4);
                            } else {
                                instancingExtension.drawArraysInstancedANGLE(gl.TRIANGLES, 0, 3, lineSegmentCoords.length / 4);
                            }
                        // Debug
                        // const debug = new Uint8Array(sdfWidth * sdfHeight * 4)
                        // gl.readPixels(0, 0, sdfWidth, sdfHeight, gl.RGBA, gl.UNSIGNED_BYTE, debug)
                        // console.log('intermediate texture data: ', debug)
                        });
                    });
                    // Use the data stored in the texture to apply inside/outside and write to the output framebuffer rect+channel.
                    withProgram('post', viewportQuadVertex, postFragment, function(program) {
                        program.setAttribute('aUV', 2, gl.STATIC_DRAW, 0, viewportUVs);
                        program.setUniform('1i', 'tex', intermediateTextureUnit);
                        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
                        gl.disable(gl.BLEND);
                        gl.colorMask(channel === 0, channel === 1, channel === 2, channel === 3);
                        gl.viewport(x, y, sdfWidth, sdfHeight);
                        gl.scissor(x, y, sdfWidth, sdfHeight);
                        gl.drawArrays(gl.TRIANGLES, 0, 3);
                    });
                });
                // Handle context loss occurring during any of the above calls
                if (gl.isContextLost()) {
                    handleContextLoss();
                    throw new Error('webgl context lost');
                }
            });
        }
        function isSupported(glOrCanvas) {
            var key = !glOrCanvas || glOrCanvas === implicitContext ? NULL_OBJECT : glOrCanvas.canvas || glOrCanvas;
            var supported = supportByCanvas.get(key);
            if (supported === undefined) {
                isTestingSupport = true;
                var failReason = null;
                try {
                    // Since we can't detect all failure modes up front, let's just do a trial run of a
                    // simple path and compare what we get back to the correct expected result. This will
                    // also serve to prime the shader compilation.
                    var expectedResult = [
                        97,
                        106,
                        97,
                        61,
                        99,
                        137,
                        118,
                        80,
                        80,
                        118,
                        137,
                        99,
                        61,
                        97,
                        106,
                        97
                    ];
                    var testResult = generate$1(4, 4, 'M8,8L16,8L24,24L16,24Z', [
                        0,
                        0,
                        32,
                        32
                    ], 24, 1, glOrCanvas);
                    supported = testResult && expectedResult.length === testResult.length && testResult.every(function(val, i) {
                        return val === expectedResult[i];
                    });
                    if (!supported) {
                        failReason = 'bad trial run results';
                        console.info(expectedResult, testResult);
                    }
                } catch (err) {
                    // TODO if it threw due to webgl context loss, should we maybe leave isSupported as null and try again later?
                    supported = false;
                    failReason = err.message;
                }
                if (failReason) {
                    console.warn('WebGL SDF generation not supported:', failReason);
                }
                isTestingSupport = false;
                supportByCanvas.set(key, supported);
            }
            return supported;
        }
        var webgl = /*#__PURE__*/ Object.freeze({
            __proto__: null,
            generate: generate$1,
            generateIntoCanvas: generateIntoCanvas$1,
            generateIntoFramebuffer: generateIntoFramebuffer,
            isSupported: isSupported
        });
        /**
   * Generate an SDF texture image for a 2D path.
   *
   * @param {number} sdfWidth - width of the SDF output image in pixels.
   * @param {number} sdfHeight - height of the SDF output image in pixels.
   * @param {string} path - an SVG-like path string describing the glyph; should only contain commands: M/L/Q/C/Z.
   * @param {number[]} viewBox - [minX, minY, maxX, maxY] in font units aligning with the texture's edges.
   * @param {number} maxDistance - the maximum distance from the glyph path in font units that will be encoded; defaults
   *        to half the maximum viewBox dimension.
   * @param {number} [sdfExponent] - specifies an exponent for encoding the SDF's distance values; higher exponents
   *        will give greater precision nearer the glyph's path.
   * @return {Uint8Array}
   */ function generate(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent) {
            if (maxDistance === void 0) maxDistance = Math.max(viewBox[2] - viewBox[0], viewBox[3] - viewBox[1]) / 2;
            if (sdfExponent === void 0) sdfExponent = 1;
            try {
                return generate$1.apply(webgl, arguments);
            } catch (e) {
                console.info('WebGL SDF generation failed, falling back to JS', e);
                return generate$2.apply(javascript, arguments);
            }
        }
        /**
   * Generate an SDF texture image for a 2D path, inserting the result into a WebGL `canvas` at a given x/y position
   * and color channel. This is generally much faster than calling `generate` because it does not require reading pixels
   * back from the GPU->CPU -- the `canvas` can be used directly as a WebGL texture image, so it all stays on the GPU.
   *
   * @param {number} sdfWidth - width of the SDF output image in pixels.
   * @param {number} sdfHeight - height of the SDF output image in pixels.
   * @param {string} path - an SVG-like path string describing the glyph; should only contain commands: M/L/Q/C/Z.
   * @param {number[]} viewBox - [minX, minY, maxX, maxY] in font units aligning with the texture's edges.
   * @param {number} maxDistance - the maximum distance from the glyph path in font units that will be encoded; defaults
   *        to half the maximum viewBox dimension.
   * @param {number} [sdfExponent] - specifies an exponent for encoding the SDF's distance values; higher exponents
   *        will give greater precision nearer the glyph's path.
   * @param {HTMLCanvasElement|OffscreenCanvas} canvas - a WebGL-enabled canvas into which the SDF will be rendered.
   *        Only the relevant rect/channel will be modified, the rest will be preserved. To avoid unpredictable results
   *        due to shared GL context state, this canvas should be dedicated to use by this library alone.
   * @param {number} x - the x position at which to render the SDF.
   * @param {number} y - the y position at which to render the SDF.
   * @param {number} channel - the color channel index (0-4) into which the SDF will be rendered.
   * @return {Uint8Array}
   */ function generateIntoCanvas(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, canvas, x, y, channel) {
            if (maxDistance === void 0) maxDistance = Math.max(viewBox[2] - viewBox[0], viewBox[3] - viewBox[1]) / 2;
            if (sdfExponent === void 0) sdfExponent = 1;
            if (x === void 0) x = 0;
            if (y === void 0) y = 0;
            if (channel === void 0) channel = 0;
            try {
                return generateIntoCanvas$1.apply(webgl, arguments);
            } catch (e) {
                console.info('WebGL SDF generation failed, falling back to JS', e);
                return generateIntoCanvas$2.apply(javascript, arguments);
            }
        }
        exports.forEachPathCommand = forEachPathCommand;
        exports.generate = generate;
        exports.generateIntoCanvas = generateIntoCanvas;
        exports.javascript = javascript;
        exports.pathToLineSegments = pathToLineSegments;
        exports.webgl = webgl;
        exports.webglUtils = webglUtils;
        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        return exports;
    }({});
    return exports;
}
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/bidi-js/dist/bidi.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function bidiFactory() {
    var bidi = function(exports) {
        // Bidi character types data, auto generated
        var DATA = {
            "R": "13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",
            "EN": "1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",
            "ES": "17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",
            "ET": "z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",
            "AN": "16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",
            "CS": "18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",
            "B": "a,3,f+2,2v,690",
            "S": "9,2,k",
            "WS": "c,k,4f4,1vk+a,u,1j,335",
            "ON": "x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",
            "BN": "0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",
            "NSM": "lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",
            "AL": "16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",
            "LRO": "6ct",
            "RLO": "6cu",
            "LRE": "6cq",
            "RLE": "6cr",
            "PDF": "6cs",
            "LRI": "6ee",
            "RLI": "6ef",
            "FSI": "6eg",
            "PDI": "6eh"
        };
        var TYPES = {};
        var TYPES_TO_NAMES = {};
        TYPES.L = 1; //L is the default
        TYPES_TO_NAMES[1] = 'L';
        Object.keys(DATA).forEach(function(type, i) {
            TYPES[type] = 1 << i + 1;
            TYPES_TO_NAMES[TYPES[type]] = type;
        });
        Object.freeze(TYPES);
        var ISOLATE_INIT_TYPES = TYPES.LRI | TYPES.RLI | TYPES.FSI;
        var STRONG_TYPES = TYPES.L | TYPES.R | TYPES.AL;
        var NEUTRAL_ISOLATE_TYPES = TYPES.B | TYPES.S | TYPES.WS | TYPES.ON | TYPES.FSI | TYPES.LRI | TYPES.RLI | TYPES.PDI;
        var BN_LIKE_TYPES = TYPES.BN | TYPES.RLE | TYPES.LRE | TYPES.RLO | TYPES.LRO | TYPES.PDF;
        var TRAILING_TYPES = TYPES.S | TYPES.WS | TYPES.B | ISOLATE_INIT_TYPES | TYPES.PDI | BN_LIKE_TYPES;
        var map = null;
        function parseData() {
            if (!map) {
                //const start = performance.now()
                map = new Map();
                var loop = function(type) {
                    if (DATA.hasOwnProperty(type)) {
                        var lastCode = 0;
                        DATA[type].split(',').forEach(function(range) {
                            var ref = range.split('+');
                            var skip = ref[0];
                            var step = ref[1];
                            skip = parseInt(skip, 36);
                            step = step ? parseInt(step, 36) : 0;
                            map.set(lastCode += skip, TYPES[type]);
                            for(var i = 0; i < step; i++){
                                map.set(++lastCode, TYPES[type]);
                            }
                        });
                    }
                };
                for(var type in DATA)loop(type);
            //console.log(`char types parsed in ${performance.now() - start}ms`)
            }
        }
        /**
   * @param {string} char
   * @return {number}
   */ function getBidiCharType(char) {
            parseData();
            return map.get(char.codePointAt(0)) || TYPES.L;
        }
        function getBidiCharTypeName(char) {
            return TYPES_TO_NAMES[getBidiCharType(char)];
        }
        // Bidi bracket pairs data, auto generated
        var data$1 = {
            "pairs": "14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",
            "canonical": "6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"
        };
        /**
   * Parses an string that holds encoded codepoint mappings, e.g. for bracket pairs or
   * mirroring characters, as encoded by scripts/generateBidiData.js. Returns an object
   * holding the `map`, and optionally a `reverseMap` if `includeReverse:true`.
   * @param {string} encodedString
   * @param {boolean} includeReverse - true if you want reverseMap in the output
   * @return {{map: Map<number, number>, reverseMap?: Map<number, number>}}
   */ function parseCharacterMap(encodedString, includeReverse) {
            var radix = 36;
            var lastCode = 0;
            var map = new Map();
            var reverseMap = includeReverse && new Map();
            var prevPair;
            encodedString.split(',').forEach(function visit(entry) {
                if (entry.indexOf('+') !== -1) {
                    for(var i = +entry; i--;){
                        visit(prevPair);
                    }
                } else {
                    prevPair = entry;
                    var ref = entry.split('>');
                    var a = ref[0];
                    var b = ref[1];
                    a = String.fromCodePoint(lastCode += parseInt(a, radix));
                    b = String.fromCodePoint(lastCode += parseInt(b, radix));
                    map.set(a, b);
                    includeReverse && reverseMap.set(b, a);
                }
            });
            return {
                map: map,
                reverseMap: reverseMap
            };
        }
        var openToClose, closeToOpen, canonical;
        function parse$1() {
            if (!openToClose) {
                //const start = performance.now()
                var ref = parseCharacterMap(data$1.pairs, true);
                var map = ref.map;
                var reverseMap = ref.reverseMap;
                openToClose = map;
                closeToOpen = reverseMap;
                canonical = parseCharacterMap(data$1.canonical, false).map;
            //console.log(`brackets parsed in ${performance.now() - start}ms`)
            }
        }
        function openingToClosingBracket(char) {
            parse$1();
            return openToClose.get(char) || null;
        }
        function closingToOpeningBracket(char) {
            parse$1();
            return closeToOpen.get(char) || null;
        }
        function getCanonicalBracket(char) {
            parse$1();
            return canonical.get(char) || null;
        }
        // Local type aliases
        var TYPE_L = TYPES.L;
        var TYPE_R = TYPES.R;
        var TYPE_EN = TYPES.EN;
        var TYPE_ES = TYPES.ES;
        var TYPE_ET = TYPES.ET;
        var TYPE_AN = TYPES.AN;
        var TYPE_CS = TYPES.CS;
        var TYPE_B = TYPES.B;
        var TYPE_S = TYPES.S;
        var TYPE_ON = TYPES.ON;
        var TYPE_BN = TYPES.BN;
        var TYPE_NSM = TYPES.NSM;
        var TYPE_AL = TYPES.AL;
        var TYPE_LRO = TYPES.LRO;
        var TYPE_RLO = TYPES.RLO;
        var TYPE_LRE = TYPES.LRE;
        var TYPE_RLE = TYPES.RLE;
        var TYPE_PDF = TYPES.PDF;
        var TYPE_LRI = TYPES.LRI;
        var TYPE_RLI = TYPES.RLI;
        var TYPE_FSI = TYPES.FSI;
        var TYPE_PDI = TYPES.PDI;
        /**
   * @typedef {object} GetEmbeddingLevelsResult
   * @property {{start, end, level}[]} paragraphs
   * @property {Uint8Array} levels
   */ /**
   * This function applies the Bidirectional Algorithm to a string, returning the resolved embedding levels
   * in a single Uint8Array plus a list of objects holding each paragraph's start and end indices and resolved
   * base embedding level.
   *
   * @param {string} string - The input string
   * @param {"ltr"|"rtl"|"auto"} [baseDirection] - Use "ltr" or "rtl" to force a base paragraph direction,
   *        otherwise a direction will be chosen automatically from each paragraph's contents.
   * @return {GetEmbeddingLevelsResult}
   */ function getEmbeddingLevels(string, baseDirection) {
            var MAX_DEPTH = 125;
            // Start by mapping all characters to their unicode type, as a bitmask integer
            var charTypes = new Uint32Array(string.length);
            for(var i = 0; i < string.length; i++){
                charTypes[i] = getBidiCharType(string[i]);
            }
            var charTypeCounts = new Map(); //will be cleared at start of each paragraph
            function changeCharType(i, type) {
                var oldType = charTypes[i];
                charTypes[i] = type;
                charTypeCounts.set(oldType, charTypeCounts.get(oldType) - 1);
                if (oldType & NEUTRAL_ISOLATE_TYPES) {
                    charTypeCounts.set(NEUTRAL_ISOLATE_TYPES, charTypeCounts.get(NEUTRAL_ISOLATE_TYPES) - 1);
                }
                charTypeCounts.set(type, (charTypeCounts.get(type) || 0) + 1);
                if (type & NEUTRAL_ISOLATE_TYPES) {
                    charTypeCounts.set(NEUTRAL_ISOLATE_TYPES, (charTypeCounts.get(NEUTRAL_ISOLATE_TYPES) || 0) + 1);
                }
            }
            var embedLevels = new Uint8Array(string.length);
            var isolationPairs = new Map(); //init->pdi and pdi->init
            // === 3.3.1 The Paragraph Level ===
            // 3.3.1 P1: Split the text into paragraphs
            var paragraphs = []; // [{start, end, level}, ...]
            var paragraph = null;
            for(var i$1 = 0; i$1 < string.length; i$1++){
                if (!paragraph) {
                    paragraphs.push(paragraph = {
                        start: i$1,
                        end: string.length - 1,
                        // 3.3.1 P2-P3: Determine the paragraph level
                        level: baseDirection === 'rtl' ? 1 : baseDirection === 'ltr' ? 0 : determineAutoEmbedLevel(i$1, false)
                    });
                }
                if (charTypes[i$1] & TYPE_B) {
                    paragraph.end = i$1;
                    paragraph = null;
                }
            }
            var FORMATTING_TYPES = TYPE_RLE | TYPE_LRE | TYPE_RLO | TYPE_LRO | ISOLATE_INIT_TYPES | TYPE_PDI | TYPE_PDF | TYPE_B;
            var nextEven = function(n) {
                return n + (n & 1 ? 1 : 2);
            };
            var nextOdd = function(n) {
                return n + (n & 1 ? 2 : 1);
            };
            // Everything from here on will operate per paragraph.
            for(var paraIdx = 0; paraIdx < paragraphs.length; paraIdx++){
                paragraph = paragraphs[paraIdx];
                var statusStack = [
                    {
                        _level: paragraph.level,
                        _override: 0,
                        _isolate: 0 //bool
                    }
                ];
                var stackTop = void 0;
                var overflowIsolateCount = 0;
                var overflowEmbeddingCount = 0;
                var validIsolateCount = 0;
                charTypeCounts.clear();
                // === 3.3.2 Explicit Levels and Directions ===
                for(var i$2 = paragraph.start; i$2 <= paragraph.end; i$2++){
                    var charType = charTypes[i$2];
                    stackTop = statusStack[statusStack.length - 1];
                    // Set initial counts
                    charTypeCounts.set(charType, (charTypeCounts.get(charType) || 0) + 1);
                    if (charType & NEUTRAL_ISOLATE_TYPES) {
                        charTypeCounts.set(NEUTRAL_ISOLATE_TYPES, (charTypeCounts.get(NEUTRAL_ISOLATE_TYPES) || 0) + 1);
                    }
                    // Explicit Embeddings: 3.3.2 X2 - X3
                    if (charType & FORMATTING_TYPES) {
                        if (charType & (TYPE_RLE | TYPE_LRE)) {
                            embedLevels[i$2] = stackTop._level; // 5.2
                            var level = (charType === TYPE_RLE ? nextOdd : nextEven)(stackTop._level);
                            if (level <= MAX_DEPTH && !overflowIsolateCount && !overflowEmbeddingCount) {
                                statusStack.push({
                                    _level: level,
                                    _override: 0,
                                    _isolate: 0
                                });
                            } else if (!overflowIsolateCount) {
                                overflowEmbeddingCount++;
                            }
                        } else if (charType & (TYPE_RLO | TYPE_LRO)) {
                            embedLevels[i$2] = stackTop._level; // 5.2
                            var level$1 = (charType === TYPE_RLO ? nextOdd : nextEven)(stackTop._level);
                            if (level$1 <= MAX_DEPTH && !overflowIsolateCount && !overflowEmbeddingCount) {
                                statusStack.push({
                                    _level: level$1,
                                    _override: charType & TYPE_RLO ? TYPE_R : TYPE_L,
                                    _isolate: 0
                                });
                            } else if (!overflowIsolateCount) {
                                overflowEmbeddingCount++;
                            }
                        } else if (charType & ISOLATE_INIT_TYPES) {
                            // X5c - FSI becomes either RLI or LRI
                            if (charType & TYPE_FSI) {
                                charType = determineAutoEmbedLevel(i$2 + 1, true) === 1 ? TYPE_RLI : TYPE_LRI;
                            }
                            embedLevels[i$2] = stackTop._level;
                            if (stackTop._override) {
                                changeCharType(i$2, stackTop._override);
                            }
                            var level$2 = (charType === TYPE_RLI ? nextOdd : nextEven)(stackTop._level);
                            if (level$2 <= MAX_DEPTH && overflowIsolateCount === 0 && overflowEmbeddingCount === 0) {
                                validIsolateCount++;
                                statusStack.push({
                                    _level: level$2,
                                    _override: 0,
                                    _isolate: 1,
                                    _isolInitIndex: i$2
                                });
                            } else {
                                overflowIsolateCount++;
                            }
                        } else if (charType & TYPE_PDI) {
                            if (overflowIsolateCount > 0) {
                                overflowIsolateCount--;
                            } else if (validIsolateCount > 0) {
                                overflowEmbeddingCount = 0;
                                while(!statusStack[statusStack.length - 1]._isolate){
                                    statusStack.pop();
                                }
                                // Add to isolation pairs bidirectional mapping:
                                var isolInitIndex = statusStack[statusStack.length - 1]._isolInitIndex;
                                if (isolInitIndex != null) {
                                    isolationPairs.set(isolInitIndex, i$2);
                                    isolationPairs.set(i$2, isolInitIndex);
                                }
                                statusStack.pop();
                                validIsolateCount--;
                            }
                            stackTop = statusStack[statusStack.length - 1];
                            embedLevels[i$2] = stackTop._level;
                            if (stackTop._override) {
                                changeCharType(i$2, stackTop._override);
                            }
                        } else if (charType & TYPE_PDF) {
                            if (overflowIsolateCount === 0) {
                                if (overflowEmbeddingCount > 0) {
                                    overflowEmbeddingCount--;
                                } else if (!stackTop._isolate && statusStack.length > 1) {
                                    statusStack.pop();
                                    stackTop = statusStack[statusStack.length - 1];
                                }
                            }
                            embedLevels[i$2] = stackTop._level; // 5.2
                        } else if (charType & TYPE_B) {
                            embedLevels[i$2] = paragraph.level;
                        }
                    } else {
                        embedLevels[i$2] = stackTop._level;
                        // NOTE: This exclusion of BN seems to go against what section 5.2 says, but is required for test passage
                        if (stackTop._override && charType !== TYPE_BN) {
                            changeCharType(i$2, stackTop._override);
                        }
                    }
                }
                // === 3.3.3 Preparations for Implicit Processing ===
                // Remove all RLE, LRE, RLO, LRO, PDF, and BN characters: 3.3.3 X9
                // Note: Due to section 5.2, we won't remove them, but we'll use the BN_LIKE_TYPES bitset to
                // easily ignore them all from here on out.
                // 3.3.3 X10
                // Compute the set of isolating run sequences as specified by BD13
                var levelRuns = [];
                var currentRun = null;
                for(var i$3 = paragraph.start; i$3 <= paragraph.end; i$3++){
                    var charType$1 = charTypes[i$3];
                    if (!(charType$1 & BN_LIKE_TYPES)) {
                        var lvl = embedLevels[i$3];
                        var isIsolInit = charType$1 & ISOLATE_INIT_TYPES;
                        var isPDI = charType$1 === TYPE_PDI;
                        if (currentRun && lvl === currentRun._level) {
                            currentRun._end = i$3;
                            currentRun._endsWithIsolInit = isIsolInit;
                        } else {
                            levelRuns.push(currentRun = {
                                _start: i$3,
                                _end: i$3,
                                _level: lvl,
                                _startsWithPDI: isPDI,
                                _endsWithIsolInit: isIsolInit
                            });
                        }
                    }
                }
                var isolatingRunSeqs = []; // [{seqIndices: [], sosType: L|R, eosType: L|R}]
                for(var runIdx = 0; runIdx < levelRuns.length; runIdx++){
                    var run = levelRuns[runIdx];
                    if (!run._startsWithPDI || run._startsWithPDI && !isolationPairs.has(run._start)) {
                        var seqRuns = [
                            currentRun = run
                        ];
                        for(var pdiIndex = void 0; currentRun && currentRun._endsWithIsolInit && (pdiIndex = isolationPairs.get(currentRun._end)) != null;){
                            for(var i$4 = runIdx + 1; i$4 < levelRuns.length; i$4++){
                                if (levelRuns[i$4]._start === pdiIndex) {
                                    seqRuns.push(currentRun = levelRuns[i$4]);
                                    break;
                                }
                            }
                        }
                        // build flat list of indices across all runs:
                        var seqIndices = [];
                        for(var i$5 = 0; i$5 < seqRuns.length; i$5++){
                            var run$1 = seqRuns[i$5];
                            for(var j = run$1._start; j <= run$1._end; j++){
                                seqIndices.push(j);
                            }
                        }
                        // determine the sos/eos types:
                        var firstLevel = embedLevels[seqIndices[0]];
                        var prevLevel = paragraph.level;
                        for(var i$6 = seqIndices[0] - 1; i$6 >= 0; i$6--){
                            if (!(charTypes[i$6] & BN_LIKE_TYPES)) {
                                prevLevel = embedLevels[i$6];
                                break;
                            }
                        }
                        var lastIndex = seqIndices[seqIndices.length - 1];
                        var lastLevel = embedLevels[lastIndex];
                        var nextLevel = paragraph.level;
                        if (!(charTypes[lastIndex] & ISOLATE_INIT_TYPES)) {
                            for(var i$7 = lastIndex + 1; i$7 <= paragraph.end; i$7++){
                                if (!(charTypes[i$7] & BN_LIKE_TYPES)) {
                                    nextLevel = embedLevels[i$7];
                                    break;
                                }
                            }
                        }
                        isolatingRunSeqs.push({
                            _seqIndices: seqIndices,
                            _sosType: Math.max(prevLevel, firstLevel) % 2 ? TYPE_R : TYPE_L,
                            _eosType: Math.max(nextLevel, lastLevel) % 2 ? TYPE_R : TYPE_L
                        });
                    }
                }
                // The next steps are done per isolating run sequence
                for(var seqIdx = 0; seqIdx < isolatingRunSeqs.length; seqIdx++){
                    var ref = isolatingRunSeqs[seqIdx];
                    var seqIndices$1 = ref._seqIndices;
                    var sosType = ref._sosType;
                    var eosType = ref._eosType;
                    /**
         * All the level runs in an isolating run sequence have the same embedding level.
         * 
         * DO NOT change any `embedLevels[i]` within the current scope.
         */ var embedDirection = embedLevels[seqIndices$1[0]] & 1 ? TYPE_R : TYPE_L;
                    // === 3.3.4 Resolving Weak Types ===
                    // W1 + 5.2. Search backward from each NSM to the first character in the isolating run sequence whose
                    // bidirectional type is not BN, and set the NSM to ON if it is an isolate initiator or PDI, and to its
                    // type otherwise. If the NSM is the first non-BN character, change the NSM to the type of sos.
                    if (charTypeCounts.get(TYPE_NSM)) {
                        for(var si = 0; si < seqIndices$1.length; si++){
                            var i$8 = seqIndices$1[si];
                            if (charTypes[i$8] & TYPE_NSM) {
                                var prevType = sosType;
                                for(var sj = si - 1; sj >= 0; sj--){
                                    if (!(charTypes[seqIndices$1[sj]] & BN_LIKE_TYPES)) {
                                        prevType = charTypes[seqIndices$1[sj]];
                                        break;
                                    }
                                }
                                changeCharType(i$8, prevType & (ISOLATE_INIT_TYPES | TYPE_PDI) ? TYPE_ON : prevType);
                            }
                        }
                    }
                    // W2. Search backward from each instance of a European number until the first strong type (R, L, AL, or sos)
                    // is found. If an AL is found, change the type of the European number to Arabic number.
                    if (charTypeCounts.get(TYPE_EN)) {
                        for(var si$1 = 0; si$1 < seqIndices$1.length; si$1++){
                            var i$9 = seqIndices$1[si$1];
                            if (charTypes[i$9] & TYPE_EN) {
                                for(var sj$1 = si$1 - 1; sj$1 >= -1; sj$1--){
                                    var prevCharType = sj$1 === -1 ? sosType : charTypes[seqIndices$1[sj$1]];
                                    if (prevCharType & STRONG_TYPES) {
                                        if (prevCharType === TYPE_AL) {
                                            changeCharType(i$9, TYPE_AN);
                                        }
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    // W3. Change all ALs to R
                    if (charTypeCounts.get(TYPE_AL)) {
                        for(var si$2 = 0; si$2 < seqIndices$1.length; si$2++){
                            var i$10 = seqIndices$1[si$2];
                            if (charTypes[i$10] & TYPE_AL) {
                                changeCharType(i$10, TYPE_R);
                            }
                        }
                    }
                    // W4. A single European separator between two European numbers changes to a European number. A single common
                    // separator between two numbers of the same type changes to that type.
                    if (charTypeCounts.get(TYPE_ES) || charTypeCounts.get(TYPE_CS)) {
                        for(var si$3 = 1; si$3 < seqIndices$1.length - 1; si$3++){
                            var i$11 = seqIndices$1[si$3];
                            if (charTypes[i$11] & (TYPE_ES | TYPE_CS)) {
                                var prevType$1 = 0, nextType = 0;
                                for(var sj$2 = si$3 - 1; sj$2 >= 0; sj$2--){
                                    prevType$1 = charTypes[seqIndices$1[sj$2]];
                                    if (!(prevType$1 & BN_LIKE_TYPES)) {
                                        break;
                                    }
                                }
                                for(var sj$3 = si$3 + 1; sj$3 < seqIndices$1.length; sj$3++){
                                    nextType = charTypes[seqIndices$1[sj$3]];
                                    if (!(nextType & BN_LIKE_TYPES)) {
                                        break;
                                    }
                                }
                                if (prevType$1 === nextType && (charTypes[i$11] === TYPE_ES ? prevType$1 === TYPE_EN : prevType$1 & (TYPE_EN | TYPE_AN))) {
                                    changeCharType(i$11, prevType$1);
                                }
                            }
                        }
                    }
                    // W5. A sequence of European terminators adjacent to European numbers changes to all European numbers.
                    if (charTypeCounts.get(TYPE_EN)) {
                        for(var si$4 = 0; si$4 < seqIndices$1.length; si$4++){
                            var i$12 = seqIndices$1[si$4];
                            if (charTypes[i$12] & TYPE_EN) {
                                for(var sj$4 = si$4 - 1; sj$4 >= 0 && charTypes[seqIndices$1[sj$4]] & (TYPE_ET | BN_LIKE_TYPES); sj$4--){
                                    changeCharType(seqIndices$1[sj$4], TYPE_EN);
                                }
                                for(si$4++; si$4 < seqIndices$1.length && charTypes[seqIndices$1[si$4]] & (TYPE_ET | BN_LIKE_TYPES | TYPE_EN); si$4++){
                                    if (charTypes[seqIndices$1[si$4]] !== TYPE_EN) {
                                        changeCharType(seqIndices$1[si$4], TYPE_EN);
                                    }
                                }
                            }
                        }
                    }
                    // W6. Otherwise, separators and terminators change to Other Neutral.
                    if (charTypeCounts.get(TYPE_ET) || charTypeCounts.get(TYPE_ES) || charTypeCounts.get(TYPE_CS)) {
                        for(var si$5 = 0; si$5 < seqIndices$1.length; si$5++){
                            var i$13 = seqIndices$1[si$5];
                            if (charTypes[i$13] & (TYPE_ET | TYPE_ES | TYPE_CS)) {
                                changeCharType(i$13, TYPE_ON);
                                // 5.2 transform adjacent BNs too:
                                for(var sj$5 = si$5 - 1; sj$5 >= 0 && charTypes[seqIndices$1[sj$5]] & BN_LIKE_TYPES; sj$5--){
                                    changeCharType(seqIndices$1[sj$5], TYPE_ON);
                                }
                                for(var sj$6 = si$5 + 1; sj$6 < seqIndices$1.length && charTypes[seqIndices$1[sj$6]] & BN_LIKE_TYPES; sj$6++){
                                    changeCharType(seqIndices$1[sj$6], TYPE_ON);
                                }
                            }
                        }
                    }
                    // W7. Search backward from each instance of a European number until the first strong type (R, L, or sos)
                    // is found. If an L is found, then change the type of the European number to L.
                    // NOTE: implemented in single forward pass for efficiency
                    if (charTypeCounts.get(TYPE_EN)) {
                        for(var si$6 = 0, prevStrongType = sosType; si$6 < seqIndices$1.length; si$6++){
                            var i$14 = seqIndices$1[si$6];
                            var type = charTypes[i$14];
                            if (type & TYPE_EN) {
                                if (prevStrongType === TYPE_L) {
                                    changeCharType(i$14, TYPE_L);
                                }
                            } else if (type & STRONG_TYPES) {
                                prevStrongType = type;
                            }
                        }
                    }
                    // === 3.3.5 Resolving Neutral and Isolate Formatting Types ===
                    if (charTypeCounts.get(NEUTRAL_ISOLATE_TYPES)) {
                        // N0. Process bracket pairs in an isolating run sequence sequentially in the logical order of the text
                        // positions of the opening paired brackets using the logic given below. Within this scope, bidirectional
                        // types EN and AN are treated as R.
                        var R_TYPES_FOR_N_STEPS = TYPE_R | TYPE_EN | TYPE_AN;
                        var STRONG_TYPES_FOR_N_STEPS = R_TYPES_FOR_N_STEPS | TYPE_L;
                        // * Identify the bracket pairs in the current isolating run sequence according to BD16.
                        var bracketPairs = [];
                        {
                            var openerStack = [];
                            for(var si$7 = 0; si$7 < seqIndices$1.length; si$7++){
                                // NOTE: for any potential bracket character we also test that it still carries a NI
                                // type, as that may have been changed earlier. This doesn't seem to be explicitly
                                // called out in the spec, but is required for passage of certain tests.
                                if (charTypes[seqIndices$1[si$7]] & NEUTRAL_ISOLATE_TYPES) {
                                    var char = string[seqIndices$1[si$7]];
                                    var oppositeBracket = void 0;
                                    // Opening bracket
                                    if (openingToClosingBracket(char) !== null) {
                                        if (openerStack.length < 63) {
                                            openerStack.push({
                                                char: char,
                                                seqIndex: si$7
                                            });
                                        } else {
                                            break;
                                        }
                                    } else if ((oppositeBracket = closingToOpeningBracket(char)) !== null) {
                                        for(var stackIdx = openerStack.length - 1; stackIdx >= 0; stackIdx--){
                                            var stackChar = openerStack[stackIdx].char;
                                            if (stackChar === oppositeBracket || stackChar === closingToOpeningBracket(getCanonicalBracket(char)) || openingToClosingBracket(getCanonicalBracket(stackChar)) === char) {
                                                bracketPairs.push([
                                                    openerStack[stackIdx].seqIndex,
                                                    si$7
                                                ]);
                                                openerStack.length = stackIdx; //pop the matching bracket and all following
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                            bracketPairs.sort(function(a, b) {
                                return a[0] - b[0];
                            });
                        }
                        // * For each bracket-pair element in the list of pairs of text positions
                        for(var pairIdx = 0; pairIdx < bracketPairs.length; pairIdx++){
                            var ref$1 = bracketPairs[pairIdx];
                            var openSeqIdx = ref$1[0];
                            var closeSeqIdx = ref$1[1];
                            // a. Inspect the bidirectional types of the characters enclosed within the bracket pair.
                            // b. If any strong type (either L or R) matching the embedding direction is found, set the type for both
                            // brackets in the pair to match the embedding direction.
                            var foundStrongType = false;
                            var useStrongType = 0;
                            for(var si$8 = openSeqIdx + 1; si$8 < closeSeqIdx; si$8++){
                                var i$15 = seqIndices$1[si$8];
                                if (charTypes[i$15] & STRONG_TYPES_FOR_N_STEPS) {
                                    foundStrongType = true;
                                    var lr = charTypes[i$15] & R_TYPES_FOR_N_STEPS ? TYPE_R : TYPE_L;
                                    if (lr === embedDirection) {
                                        useStrongType = lr;
                                        break;
                                    }
                                }
                            }
                            // c. Otherwise, if there is a strong type it must be opposite the embedding direction. Therefore, test
                            // for an established context with a preceding strong type by checking backwards before the opening paired
                            // bracket until the first strong type (L, R, or sos) is found.
                            //    1. If the preceding strong type is also opposite the embedding direction, context is established, so
                            //    set the type for both brackets in the pair to that direction.
                            //    2. Otherwise set the type for both brackets in the pair to the embedding direction.
                            if (foundStrongType && !useStrongType) {
                                useStrongType = sosType;
                                for(var si$9 = openSeqIdx - 1; si$9 >= 0; si$9--){
                                    var i$16 = seqIndices$1[si$9];
                                    if (charTypes[i$16] & STRONG_TYPES_FOR_N_STEPS) {
                                        var lr$1 = charTypes[i$16] & R_TYPES_FOR_N_STEPS ? TYPE_R : TYPE_L;
                                        if (lr$1 !== embedDirection) {
                                            useStrongType = lr$1;
                                        } else {
                                            useStrongType = embedDirection;
                                        }
                                        break;
                                    }
                                }
                            }
                            if (useStrongType) {
                                charTypes[seqIndices$1[openSeqIdx]] = charTypes[seqIndices$1[closeSeqIdx]] = useStrongType;
                                // * Any number of characters that had original bidirectional character type NSM prior to the application
                                // of W1 that immediately follow a paired bracket which changed to L or R under N0 should change to match
                                // the type of their preceding bracket.
                                if (useStrongType !== embedDirection) {
                                    for(var si$10 = openSeqIdx + 1; si$10 < seqIndices$1.length; si$10++){
                                        if (!(charTypes[seqIndices$1[si$10]] & BN_LIKE_TYPES)) {
                                            if (getBidiCharType(string[seqIndices$1[si$10]]) & TYPE_NSM) {
                                                charTypes[seqIndices$1[si$10]] = useStrongType;
                                            }
                                            break;
                                        }
                                    }
                                }
                                if (useStrongType !== embedDirection) {
                                    for(var si$11 = closeSeqIdx + 1; si$11 < seqIndices$1.length; si$11++){
                                        if (!(charTypes[seqIndices$1[si$11]] & BN_LIKE_TYPES)) {
                                            if (getBidiCharType(string[seqIndices$1[si$11]]) & TYPE_NSM) {
                                                charTypes[seqIndices$1[si$11]] = useStrongType;
                                            }
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                        // N1. A sequence of NIs takes the direction of the surrounding strong text if the text on both sides has the
                        // same direction.
                        // N2. Any remaining NIs take the embedding direction.
                        for(var si$12 = 0; si$12 < seqIndices$1.length; si$12++){
                            if (charTypes[seqIndices$1[si$12]] & NEUTRAL_ISOLATE_TYPES) {
                                var niRunStart = si$12, niRunEnd = si$12;
                                var prevType$2 = sosType; //si === 0 ? sosType : (charTypes[seqIndices[si - 1]] & R_TYPES_FOR_N_STEPS) ? TYPE_R : TYPE_L
                                for(var si2 = si$12 - 1; si2 >= 0; si2--){
                                    if (charTypes[seqIndices$1[si2]] & BN_LIKE_TYPES) {
                                        niRunStart = si2; //5.2 treat BNs adjacent to NIs as NIs
                                    } else {
                                        prevType$2 = charTypes[seqIndices$1[si2]] & R_TYPES_FOR_N_STEPS ? TYPE_R : TYPE_L;
                                        break;
                                    }
                                }
                                var nextType$1 = eosType;
                                for(var si2$1 = si$12 + 1; si2$1 < seqIndices$1.length; si2$1++){
                                    if (charTypes[seqIndices$1[si2$1]] & (NEUTRAL_ISOLATE_TYPES | BN_LIKE_TYPES)) {
                                        niRunEnd = si2$1;
                                    } else {
                                        nextType$1 = charTypes[seqIndices$1[si2$1]] & R_TYPES_FOR_N_STEPS ? TYPE_R : TYPE_L;
                                        break;
                                    }
                                }
                                for(var sj$7 = niRunStart; sj$7 <= niRunEnd; sj$7++){
                                    charTypes[seqIndices$1[sj$7]] = prevType$2 === nextType$1 ? prevType$2 : embedDirection;
                                }
                                si$12 = niRunEnd;
                            }
                        }
                    }
                }
                // === 3.3.6 Resolving Implicit Levels ===
                for(var i$17 = paragraph.start; i$17 <= paragraph.end; i$17++){
                    var level$3 = embedLevels[i$17];
                    var type$1 = charTypes[i$17];
                    // I2. For all characters with an odd (right-to-left) embedding level, those of type L, EN or AN go up one level.
                    if (level$3 & 1) {
                        if (type$1 & (TYPE_L | TYPE_EN | TYPE_AN)) {
                            embedLevels[i$17]++;
                        }
                    } else {
                        if (type$1 & TYPE_R) {
                            embedLevels[i$17]++;
                        } else if (type$1 & (TYPE_AN | TYPE_EN)) {
                            embedLevels[i$17] += 2;
                        }
                    }
                    // 5.2: Resolve any LRE, RLE, LRO, RLO, PDF, or BN to the level of the preceding character if there is one,
                    // and otherwise to the base level.
                    if (type$1 & BN_LIKE_TYPES) {
                        embedLevels[i$17] = i$17 === 0 ? paragraph.level : embedLevels[i$17 - 1];
                    }
                    // 3.4 L1.1-4: Reset the embedding level of segment/paragraph separators, and any sequence of whitespace or
                    // isolate formatting characters preceding them or the end of the paragraph, to the paragraph level.
                    // NOTE: this will also need to be applied to each individual line ending after line wrapping occurs.
                    if (i$17 === paragraph.end || getBidiCharType(string[i$17]) & (TYPE_S | TYPE_B)) {
                        for(var j$1 = i$17; j$1 >= 0 && getBidiCharType(string[j$1]) & TRAILING_TYPES; j$1--){
                            embedLevels[j$1] = paragraph.level;
                        }
                    }
                }
            }
            // DONE! The resolved levels can then be used, after line wrapping, to flip runs of characters
            // according to section 3.4 Reordering Resolved Levels
            return {
                levels: embedLevels,
                paragraphs: paragraphs
            };
            //TURBOPACK unreachable
            ;
            function determineAutoEmbedLevel(start, isFSI) {
                // 3.3.1 P2 - P3
                for(var i = start; i < string.length; i++){
                    var charType = charTypes[i];
                    if (charType & (TYPE_R | TYPE_AL)) {
                        return 1;
                    }
                    if (charType & (TYPE_B | TYPE_L) || isFSI && charType === TYPE_PDI) {
                        return 0;
                    }
                    if (charType & ISOLATE_INIT_TYPES) {
                        var pdi = indexOfMatchingPDI(i);
                        i = pdi === -1 ? string.length : pdi;
                    }
                }
                return 0;
            }
            function indexOfMatchingPDI(isolateStart) {
                // 3.1.2 BD9
                var isolationLevel = 1;
                for(var i = isolateStart + 1; i < string.length; i++){
                    var charType = charTypes[i];
                    if (charType & TYPE_B) {
                        break;
                    }
                    if (charType & TYPE_PDI) {
                        if (--isolationLevel === 0) {
                            return i;
                        }
                    } else if (charType & ISOLATE_INIT_TYPES) {
                        isolationLevel++;
                    }
                }
                return -1;
            }
        }
        // Bidi mirrored chars data, auto generated
        var data = "14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1";
        var mirrorMap;
        function parse() {
            if (!mirrorMap) {
                //const start = performance.now()
                var ref = parseCharacterMap(data, true);
                var map = ref.map;
                var reverseMap = ref.reverseMap;
                // Combine both maps into one
                reverseMap.forEach(function(value, key) {
                    map.set(key, value);
                });
                mirrorMap = map;
            //console.log(`mirrored chars parsed in ${performance.now() - start}ms`)
            }
        }
        function getMirroredCharacter(char) {
            parse();
            return mirrorMap.get(char) || null;
        }
        /**
   * Given a string and its resolved embedding levels, build a map of indices to replacement chars
   * for any characters in right-to-left segments that have defined mirrored characters.
   * @param string
   * @param embeddingLevels
   * @param [start]
   * @param [end]
   * @return {Map<number, string>}
   */ function getMirroredCharactersMap(string, embeddingLevels, start, end) {
            var strLen = string.length;
            start = Math.max(0, start == null ? 0 : +start);
            end = Math.min(strLen - 1, end == null ? strLen - 1 : +end);
            var map = new Map();
            for(var i = start; i <= end; i++){
                if (embeddingLevels[i] & 1) {
                    var mirror = getMirroredCharacter(string[i]);
                    if (mirror !== null) {
                        map.set(i, mirror);
                    }
                }
            }
            return map;
        }
        /**
   * Given a start and end denoting a single line within a string, and a set of precalculated
   * bidi embedding levels, produce a list of segments whose ordering should be flipped, in sequence.
   * @param {string} string - the full input string
   * @param {GetEmbeddingLevelsResult} embeddingLevelsResult - the result object from getEmbeddingLevels
   * @param {number} [start] - first character in a subset of the full string
   * @param {number} [end] - last character in a subset of the full string
   * @return {number[][]} - the list of start/end segments that should be flipped, in order.
   */ function getReorderSegments(string, embeddingLevelsResult, start, end) {
            var strLen = string.length;
            start = Math.max(0, start == null ? 0 : +start);
            end = Math.min(strLen - 1, end == null ? strLen - 1 : +end);
            var segments = [];
            embeddingLevelsResult.paragraphs.forEach(function(paragraph) {
                var lineStart = Math.max(start, paragraph.start);
                var lineEnd = Math.min(end, paragraph.end);
                if (lineStart < lineEnd) {
                    // Local slice for mutation
                    var lineLevels = embeddingLevelsResult.levels.slice(lineStart, lineEnd + 1);
                    // 3.4 L1.4: Reset any sequence of whitespace characters and/or isolate formatting characters at the
                    // end of the line to the paragraph level.
                    for(var i = lineEnd; i >= lineStart && getBidiCharType(string[i]) & TRAILING_TYPES; i--){
                        lineLevels[i] = paragraph.level;
                    }
                    // L2. From the highest level found in the text to the lowest odd level on each line, including intermediate levels
                    // not actually present in the text, reverse any contiguous sequence of characters that are at that level or higher.
                    var maxLevel = paragraph.level;
                    var minOddLevel = Infinity;
                    for(var i$1 = 0; i$1 < lineLevels.length; i$1++){
                        var level = lineLevels[i$1];
                        if (level > maxLevel) {
                            maxLevel = level;
                        }
                        if (level < minOddLevel) {
                            minOddLevel = level | 1;
                        }
                    }
                    for(var lvl = maxLevel; lvl >= minOddLevel; lvl--){
                        for(var i$2 = 0; i$2 < lineLevels.length; i$2++){
                            if (lineLevels[i$2] >= lvl) {
                                var segStart = i$2;
                                while(i$2 + 1 < lineLevels.length && lineLevels[i$2 + 1] >= lvl){
                                    i$2++;
                                }
                                if (i$2 > segStart) {
                                    segments.push([
                                        segStart + lineStart,
                                        i$2 + lineStart
                                    ]);
                                }
                            }
                        }
                    }
                }
            });
            return segments;
        }
        /**
   * @param {string} string
   * @param {GetEmbeddingLevelsResult} embedLevelsResult
   * @param {number} [start]
   * @param {number} [end]
   * @return {string} the new string with bidi segments reordered
   */ function getReorderedString(string, embedLevelsResult, start, end) {
            var indices = getReorderedIndices(string, embedLevelsResult, start, end);
            var chars = [].concat(string);
            indices.forEach(function(charIndex, i) {
                chars[i] = (embedLevelsResult.levels[charIndex] & 1 ? getMirroredCharacter(string[charIndex]) : null) || string[charIndex];
            });
            return chars.join('');
        }
        /**
   * @param {string} string
   * @param {GetEmbeddingLevelsResult} embedLevelsResult
   * @param {number} [start]
   * @param {number} [end]
   * @return {number[]} an array with character indices in their new bidi order
   */ function getReorderedIndices(string, embedLevelsResult, start, end) {
            var segments = getReorderSegments(string, embedLevelsResult, start, end);
            // Fill an array with indices
            var indices = [];
            for(var i = 0; i < string.length; i++){
                indices[i] = i;
            }
            // Reverse each segment in order
            segments.forEach(function(ref) {
                var start = ref[0];
                var end = ref[1];
                var slice = indices.slice(start, end + 1);
                for(var i = slice.length; i--;){
                    indices[end - i] = slice[i];
                }
            });
            return indices;
        }
        exports.closingToOpeningBracket = closingToOpeningBracket;
        exports.getBidiCharType = getBidiCharType;
        exports.getBidiCharTypeName = getBidiCharTypeName;
        exports.getCanonicalBracket = getCanonicalBracket;
        exports.getEmbeddingLevels = getEmbeddingLevels;
        exports.getMirroredCharacter = getMirroredCharacter;
        exports.getMirroredCharactersMap = getMirroredCharactersMap;
        exports.getReorderSegments = getReorderSegments;
        exports.getReorderedIndices = getReorderedIndices;
        exports.getReorderedString = getReorderedString;
        exports.openingToClosingBracket = openingToClosingBracket;
        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        return exports;
    }({});
    return bidi;
}
const __TURBOPACK__default__export__ = bidiFactory;
}),
"[project]/TEST ANIMATION LANDING/node_modules/troika-three-utils/dist/troika-three-utils.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BezierMesh",
    ()=>BezierMesh,
    "createDerivedMaterial",
    ()=>createDerivedMaterial,
    "expandShaderIncludes",
    ()=>expandShaderIncludes,
    "getShaderUniformTypes",
    ()=>getShaderUniformTypes,
    "getShadersForMaterial",
    ()=>getShadersForMaterial,
    "invertMatrix4",
    ()=>invertMatrix4,
    "voidMainRegExp",
    ()=>voidMainRegExp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/three/build/three.module.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
;
/**
 * Regular expression for matching the `void main() {` opener line in GLSL.
 * @type {RegExp}
 */ const voidMainRegExp = /\bvoid\s+main\s*\(\s*\)\s*{/g;
/**
 * Recursively expands all `#include <xyz>` statements within string of shader code.
 * Copied from three's WebGLProgram#parseIncludes for external use.
 *
 * @param {string} source - The GLSL source code to evaluate
 * @return {string} The GLSL code with all includes expanded
 */ function expandShaderIncludes(source) {
    const pattern = /^[ \t]*#include +<([\w\d./]+)>/gm;
    function replace(match, include) {
        let chunk = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ShaderChunk"][include];
        return chunk ? expandShaderIncludes(chunk) : match;
    }
    return source.replace(pattern, replace);
}
/*
 * This is a direct copy of MathUtils.generateUUID from Three.js, to preserve compatibility with three
 * versions before 0.113.0 as it was changed from Math to MathUtils in that version.
 * https://github.com/mrdoob/three.js/blob/dd8b5aa3b270c17096b90945cd2d6d1b13aaec53/src/math/MathUtils.js#L16
 */ const _lut = [];
for(let i = 0; i < 256; i++){
    _lut[i] = (i < 16 ? '0' : '') + i.toString(16);
}
function generateUUID() {
    // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
    const d0 = Math.random() * 0xffffffff | 0;
    const d1 = Math.random() * 0xffffffff | 0;
    const d2 = Math.random() * 0xffffffff | 0;
    const d3 = Math.random() * 0xffffffff | 0;
    const uuid = _lut[d0 & 0xff] + _lut[d0 >> 8 & 0xff] + _lut[d0 >> 16 & 0xff] + _lut[d0 >> 24 & 0xff] + '-' + _lut[d1 & 0xff] + _lut[d1 >> 8 & 0xff] + '-' + _lut[d1 >> 16 & 0x0f | 0x40] + _lut[d1 >> 24 & 0xff] + '-' + _lut[d2 & 0x3f | 0x80] + _lut[d2 >> 8 & 0xff] + '-' + _lut[d2 >> 16 & 0xff] + _lut[d2 >> 24 & 0xff] + _lut[d3 & 0xff] + _lut[d3 >> 8 & 0xff] + _lut[d3 >> 16 & 0xff] + _lut[d3 >> 24 & 0xff];
    // .toUpperCase() here flattens concatenated strings to save heap memory space.
    return uuid.toUpperCase();
}
// Local assign polyfill to avoid importing troika-core
const assign = Object.assign || function() {
    let target = arguments[0];
    for(let i = 1, len = arguments.length; i < len; i++){
        let source = arguments[i];
        if (source) {
            for(let prop in source){
                if (Object.prototype.hasOwnProperty.call(source, prop)) {
                    target[prop] = source[prop];
                }
            }
        }
    }
    return target;
};
const epoch = Date.now();
const CONSTRUCTOR_CACHE = new WeakMap();
const SHADER_UPGRADE_CACHE = new Map();
// Material ids must be integers, but we can't access the increment from Three's `Material` module,
// so let's choose a sufficiently large starting value that should theoretically never collide.
let materialInstanceId = 1e10;
/**
 * A utility for creating a custom shader material derived from another material's
 * shaders. This allows you to inject custom shader logic and transforms into the
 * builtin ThreeJS materials without having to recreate them from scratch.
 *
 * @param {THREE.Material} baseMaterial - the original material to derive from
 *
 * @param {Object} options - How the base material should be modified.
 * @param {Object=} options.defines - Custom `defines` for the material
 * @param {Object=} options.extensions - Custom `extensions` for the material, e.g. `{derivatives: true}`
 * @param {Object=} options.uniforms - Custom `uniforms` for use in the modified shader. These can
 *        be accessed and manipulated via the resulting material's `uniforms` property, just like
 *        in a ShaderMaterial. You do not need to repeat the base material's own uniforms here.
 * @param {String=} options.timeUniform - If specified, a uniform of this name will be injected into
 *        both shaders, and it will automatically be updated on each render frame with a number of
 *        elapsed milliseconds. The "zero" epoch time is not significant so don't rely on this as a
 *        true calendar time.
 * @param {String=} options.vertexDefs - Custom GLSL code to inject into the vertex shader's top-level
 *        definitions, above the `void main()` function.
 * @param {String=} options.vertexMainIntro - Custom GLSL code to inject at the top of the vertex
 *        shader's `void main` function.
 * @param {String=} options.vertexMainOutro - Custom GLSL code to inject at the end of the vertex
 *        shader's `void main` function.
 * @param {String=} options.vertexTransform - Custom GLSL code to manipulate the `position`, `normal`,
 *        and/or `uv` vertex attributes. This code will be wrapped within a standalone function with
 *        those attributes exposed by their normal names as read/write values.
 * @param {String=} options.fragmentDefs - Custom GLSL code to inject into the fragment shader's top-level
 *        definitions, above the `void main()` function.
 * @param {String=} options.fragmentMainIntro - Custom GLSL code to inject at the top of the fragment
 *        shader's `void main` function.
 * @param {String=} options.fragmentMainOutro - Custom GLSL code to inject at the end of the fragment
 *        shader's `void main` function. You can manipulate `gl_FragColor` here but keep in mind it goes
 *        after any of ThreeJS's color postprocessing shader chunks (tonemapping, fog, etc.), so if you
 *        want those to apply to your changes use `fragmentColorTransform` instead.
 * @param {String=} options.fragmentColorTransform - Custom GLSL code to manipulate the `gl_FragColor`
 *        output value. Will be injected near the end of the `void main` function, but before any
 *        of ThreeJS's color postprocessing shader chunks (tonemapping, fog, etc.), and before the
 *        `fragmentMainOutro`.
 * @param {function({fragmentShader: string, vertexShader:string}):
 *        {fragmentShader: string, vertexShader:string}} options.customRewriter - A function
 *        for performing custom rewrites of the full shader code. Useful if you need to do something
 *        special that's not covered by the other builtin options. This function will be executed before
 *        any other transforms are applied.
 * @param {boolean=} options.chained - Set to `true` to prototype-chain the derived material to the base
 *        material, rather than the default behavior of copying it. This allows the derived material to
 *        automatically pick up changes made to the base material and its properties. This can be useful
 *        where the derived material is hidden from the user as an implementation detail, allowing them
 *        to work with the original material like normal. But it can result in unexpected behavior if not
 *        handled carefully.
 *
 * @return {THREE.Material}
 *
 * The returned material will also have two new methods, `getDepthMaterial()` and `getDistanceMaterial()`,
 * which can be called to get a variant of the derived material for use in shadow casting. If the
 * target mesh is expected to cast shadows, then you can assign these to the mesh's `customDepthMaterial`
 * (for directional and spot lights) and/or `customDistanceMaterial` (for point lights) properties to
 * allow the cast shadow to honor your derived shader's vertex transforms and discarded fragments. These
 * will also set a custom `#define IS_DEPTH_MATERIAL` or `#define IS_DISTANCE_MATERIAL` that you can look
 * for in your derived shaders with `#ifdef` to customize their behavior for the depth or distance
 * scenarios, e.g. skipping antialiasing or expensive shader logic.
 */ function createDerivedMaterial(baseMaterial, options) {
    // Generate a key that is unique to the content of these `options`. We'll use this
    // throughout for caching and for generating the upgraded shader code. This increases
    // the likelihood that the resulting shaders will line up across multiple calls so
    // their GL programs can be shared and cached.
    const optionsKey = getKeyForOptions(options);
    // First check to see if we've already derived from this baseMaterial using this
    // unique set of options, and if so reuse the constructor to avoid some allocations.
    let ctorsByDerivation = CONSTRUCTOR_CACHE.get(baseMaterial);
    if (!ctorsByDerivation) {
        CONSTRUCTOR_CACHE.set(baseMaterial, ctorsByDerivation = Object.create(null));
    }
    if (ctorsByDerivation[optionsKey]) {
        return new ctorsByDerivation[optionsKey]();
    }
    const privateBeforeCompileProp = `_onBeforeCompile${optionsKey}`;
    // Private onBeforeCompile handler that injects the modified shaders and uniforms when
    // the renderer switches to this material's program
    const onBeforeCompile = function(shaderInfo, renderer) {
        baseMaterial.onBeforeCompile.call(this, shaderInfo, renderer);
        // Upgrade the shaders, caching the result by incoming source code
        const cacheKey = this.customProgramCacheKey() + '|' + shaderInfo.vertexShader + '|' + shaderInfo.fragmentShader;
        let upgradedShaders = SHADER_UPGRADE_CACHE[cacheKey];
        if (!upgradedShaders) {
            const upgraded = upgradeShaders(this, shaderInfo, options, optionsKey);
            upgradedShaders = SHADER_UPGRADE_CACHE[cacheKey] = upgraded;
        }
        // Inject upgraded shaders and uniforms into the program
        shaderInfo.vertexShader = upgradedShaders.vertexShader;
        shaderInfo.fragmentShader = upgradedShaders.fragmentShader;
        assign(shaderInfo.uniforms, this.uniforms);
        // Inject auto-updating time uniform if requested
        if (options.timeUniform) {
            shaderInfo.uniforms[options.timeUniform] = {
                get value () {
                    return Date.now() - epoch;
                }
            };
        }
        // Users can still add their own handlers on top of ours
        if (this[privateBeforeCompileProp]) {
            this[privateBeforeCompileProp](shaderInfo);
        }
    };
    const DerivedMaterial = function DerivedMaterial() {
        return derive(options.chained ? baseMaterial : baseMaterial.clone());
    };
    const derive = function(base) {
        // Prototype chain to the base material
        const derived = Object.create(base, descriptor);
        // Store the baseMaterial for reference; this is always the original even when cloning
        Object.defineProperty(derived, 'baseMaterial', {
            value: baseMaterial
        });
        // Needs its own ids
        Object.defineProperty(derived, 'id', {
            value: materialInstanceId++
        });
        derived.uuid = generateUUID();
        // Merge uniforms, defines, and extensions
        derived.uniforms = assign({}, base.uniforms, options.uniforms);
        derived.defines = assign({}, base.defines, options.defines);
        derived.defines[`TROIKA_DERIVED_MATERIAL_${optionsKey}`] = ''; //force a program change from the base material
        derived.extensions = assign({}, base.extensions, options.extensions);
        // Don't inherit EventDispatcher listeners
        derived._listeners = undefined;
        return derived;
    };
    const descriptor = {
        constructor: {
            value: DerivedMaterial
        },
        isDerivedMaterial: {
            value: true
        },
        type: {
            get: ()=>baseMaterial.type,
            set: (value)=>{
                baseMaterial.type = value;
            }
        },
        isDerivedFrom: {
            writable: true,
            configurable: true,
            value: function(testMaterial) {
                const base = this.baseMaterial;
                return testMaterial === base || base.isDerivedMaterial && base.isDerivedFrom(testMaterial) || false;
            }
        },
        customProgramCacheKey: {
            writable: true,
            configurable: true,
            value: function() {
                return baseMaterial.customProgramCacheKey() + '|' + optionsKey;
            }
        },
        onBeforeCompile: {
            get () {
                return onBeforeCompile;
            },
            set (fn) {
                this[privateBeforeCompileProp] = fn;
            }
        },
        copy: {
            writable: true,
            configurable: true,
            value: function(source) {
                baseMaterial.copy.call(this, source);
                if (!baseMaterial.isShaderMaterial && !baseMaterial.isDerivedMaterial) {
                    assign(this.extensions, source.extensions);
                    assign(this.defines, source.defines);
                    assign(this.uniforms, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UniformsUtils"].clone(source.uniforms));
                }
                return this;
            }
        },
        clone: {
            writable: true,
            configurable: true,
            value: function() {
                const newBase = new baseMaterial.constructor();
                return derive(newBase).copy(this);
            }
        },
        /**
     * Utility to get a MeshDepthMaterial that will honor this derived material's vertex
     * transformations and discarded fragments.
     */ getDepthMaterial: {
            writable: true,
            configurable: true,
            value: function() {
                let depthMaterial = this._depthMaterial;
                if (!depthMaterial) {
                    depthMaterial = this._depthMaterial = createDerivedMaterial(baseMaterial.isDerivedMaterial ? baseMaterial.getDepthMaterial() : new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshDepthMaterial"]({
                        depthPacking: __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RGBADepthPacking"]
                    }), options);
                    depthMaterial.defines.IS_DEPTH_MATERIAL = '';
                    depthMaterial.uniforms = this.uniforms; //automatically recieve same uniform values
                }
                return depthMaterial;
            }
        },
        /**
     * Utility to get a MeshDistanceMaterial that will honor this derived material's vertex
     * transformations and discarded fragments.
     */ getDistanceMaterial: {
            writable: true,
            configurable: true,
            value: function() {
                let distanceMaterial = this._distanceMaterial;
                if (!distanceMaterial) {
                    distanceMaterial = this._distanceMaterial = createDerivedMaterial(baseMaterial.isDerivedMaterial ? baseMaterial.getDistanceMaterial() : new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshDistanceMaterial"](), options);
                    distanceMaterial.defines.IS_DISTANCE_MATERIAL = '';
                    distanceMaterial.uniforms = this.uniforms; //automatically recieve same uniform values
                }
                return distanceMaterial;
            }
        },
        dispose: {
            writable: true,
            configurable: true,
            value () {
                const { _depthMaterial, _distanceMaterial } = this;
                if (_depthMaterial) _depthMaterial.dispose();
                if (_distanceMaterial) _distanceMaterial.dispose();
                baseMaterial.dispose.call(this);
            }
        }
    };
    ctorsByDerivation[optionsKey] = DerivedMaterial;
    return new DerivedMaterial();
}
function upgradeShaders(material, { vertexShader, fragmentShader }, options, key) {
    let { vertexDefs, vertexMainIntro, vertexMainOutro, vertexTransform, fragmentDefs, fragmentMainIntro, fragmentMainOutro, fragmentColorTransform, customRewriter, timeUniform } = options;
    vertexDefs = vertexDefs || '';
    vertexMainIntro = vertexMainIntro || '';
    vertexMainOutro = vertexMainOutro || '';
    fragmentDefs = fragmentDefs || '';
    fragmentMainIntro = fragmentMainIntro || '';
    fragmentMainOutro = fragmentMainOutro || '';
    // Expand includes if needed
    if (vertexTransform || customRewriter) {
        vertexShader = expandShaderIncludes(vertexShader);
    }
    if (fragmentColorTransform || customRewriter) {
        // We need to be able to find postprocessing chunks after include expansion in order to
        // put them after the fragmentColorTransform, so mark them with comments first. Even if
        // this particular derivation doesn't have a fragmentColorTransform, other derivations may,
        // so we still mark them.
        fragmentShader = fragmentShader.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm, '\n//!BEGIN_POST_CHUNK $1\n$&\n//!END_POST_CHUNK\n');
        fragmentShader = expandShaderIncludes(fragmentShader);
    }
    // Apply custom rewriter function
    if (customRewriter) {
        let res = customRewriter({
            vertexShader,
            fragmentShader
        });
        vertexShader = res.vertexShader;
        fragmentShader = res.fragmentShader;
    }
    // The fragmentColorTransform needs to go before any postprocessing chunks, so extract
    // those and re-insert them into the outro in the correct place:
    if (fragmentColorTransform) {
        let postChunks = [];
        fragmentShader = fragmentShader.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm, (match)=>{
            postChunks.push(match);
            return '';
        });
        fragmentMainOutro = `${fragmentColorTransform}\n${postChunks.join('\n')}\n${fragmentMainOutro}`;
    }
    // Inject auto-updating time uniform if requested
    if (timeUniform) {
        const code = `\nuniform float ${timeUniform};\n`;
        vertexDefs = code + vertexDefs;
        fragmentDefs = code + fragmentDefs;
    }
    // Inject a function for the vertexTransform and rename all usages of position/normal/uv
    if (vertexTransform) {
        // Hoist these defs to the very top so they work in other function defs
        vertexShader = `vec3 troika_position_${key};
vec3 troika_normal_${key};
vec2 troika_uv_${key};
${vertexShader}
`;
        vertexDefs = `${vertexDefs}
void troikaVertexTransform${key}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${vertexTransform}
}
`;
        vertexMainIntro = `
troika_position_${key} = vec3(position);
troika_normal_${key} = vec3(normal);
troika_uv_${key} = vec2(uv);
troikaVertexTransform${key}(troika_position_${key}, troika_normal_${key}, troika_uv_${key});
${vertexMainIntro}
`;
        vertexShader = vertexShader.replace(/\b(position|normal|uv)\b/g, (match, match1, index, fullStr)=>{
            return /\battribute\s+vec[23]\s+$/.test(fullStr.substr(0, index)) ? match1 : `troika_${match1}_${key}`;
        });
        // Three r152 introduced the MAP_UV token, replace it too if it's pointing to the main 'uv'
        // Perhaps the other textures too going forward?
        if (!(material.map && material.map.channel > 0)) {
            vertexShader = vertexShader.replace(/\bMAP_UV\b/g, `troika_uv_${key}`);
        }
    }
    // Inject defs and intro/outro snippets
    vertexShader = injectIntoShaderCode(vertexShader, key, vertexDefs, vertexMainIntro, vertexMainOutro);
    fragmentShader = injectIntoShaderCode(fragmentShader, key, fragmentDefs, fragmentMainIntro, fragmentMainOutro);
    return {
        vertexShader,
        fragmentShader
    };
}
function injectIntoShaderCode(shaderCode, id, defs, intro, outro) {
    if (intro || outro || defs) {
        shaderCode = shaderCode.replace(voidMainRegExp, `
${defs}
void troikaOrigMain${id}() {`);
        shaderCode += `
void main() {
  ${intro}
  troikaOrigMain${id}();
  ${outro}
}`;
    }
    return shaderCode;
}
function optionsJsonReplacer(key, value) {
    return key === 'uniforms' ? undefined : typeof value === 'function' ? value.toString() : value;
}
let _idCtr = 0;
const optionsHashesToIds = new Map();
function getKeyForOptions(options) {
    const optionsHash = JSON.stringify(options, optionsJsonReplacer);
    let id = optionsHashesToIds.get(optionsHash);
    if (id == null) {
        optionsHashesToIds.set(optionsHash, id = ++_idCtr);
    }
    return id;
}
// Copied from threejs WebGLPrograms.js so we can resolve builtin materials to their shaders
// TODO how can we keep this from getting stale?
const MATERIAL_TYPES_TO_SHADERS = {
    MeshDepthMaterial: 'depth',
    MeshDistanceMaterial: 'distanceRGBA',
    MeshNormalMaterial: 'normal',
    MeshBasicMaterial: 'basic',
    MeshLambertMaterial: 'lambert',
    MeshPhongMaterial: 'phong',
    MeshToonMaterial: 'toon',
    MeshStandardMaterial: 'physical',
    MeshPhysicalMaterial: 'physical',
    MeshMatcapMaterial: 'matcap',
    LineBasicMaterial: 'basic',
    LineDashedMaterial: 'dashed',
    PointsMaterial: 'points',
    ShadowMaterial: 'shadow',
    SpriteMaterial: 'sprite'
};
/**
 * Given a Three.js `Material` instance, find the shaders/uniforms that will be
 * used to render that material.
 *
 * @param material - the Material instance
 * @return {object} - the material's shader info: `{uniforms:{}, fragmentShader:'', vertexShader:''}`
 */ function getShadersForMaterial(material) {
    let builtinType = MATERIAL_TYPES_TO_SHADERS[material.type];
    return builtinType ? __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ShaderLib"][builtinType] : material //TODO fallback for unknown type?
    ;
}
/**
 * Find all uniforms and their types within a shader code string.
 *
 * @param {string} shader - The shader code to parse
 * @return {object} mapping of uniform names to their glsl type
 */ function getShaderUniformTypes(shader) {
    let uniformRE = /\buniform\s+(int|float|vec[234]|mat[34])\s+([A-Za-z_][\w]*)/g;
    let uniforms = Object.create(null);
    let match;
    while((match = uniformRE.exec(shader)) !== null){
        uniforms[match[2]] = match[1];
    }
    return uniforms;
}
/**
 * Helper for smoothing out the `m.getInverse(x)` --> `m.copy(x).invert()` conversion
 * that happened in ThreeJS r123.
 * @param {Matrix4} srcMatrix
 * @param {Matrix4} [tgtMatrix]
 */ function invertMatrix4(srcMatrix, tgtMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix4"]()) {
    if (typeof tgtMatrix.invert === 'function') {
        tgtMatrix.copy(srcMatrix).invert();
    } else {
        tgtMatrix.getInverse(srcMatrix);
    }
    return tgtMatrix;
}
/*
Input geometry is a cylinder with r=1, height in y dimension from 0 to 1,
divided into a reasonable number of height segments.
*/ const vertexDefs = `
uniform vec3 pointA;
uniform vec3 controlA;
uniform vec3 controlB;
uniform vec3 pointB;
uniform float radius;
varying float bezierT;

vec3 cubicBezier(vec3 p1, vec3 c1, vec3 c2, vec3 p2, float t) {
  float t2 = 1.0 - t;
  float b0 = t2 * t2 * t2;
  float b1 = 3.0 * t * t2 * t2;
  float b2 = 3.0 * t * t * t2;
  float b3 = t * t * t;
  return b0 * p1 + b1 * c1 + b2 * c2 + b3 * p2;
}

vec3 cubicBezierDerivative(vec3 p1, vec3 c1, vec3 c2, vec3 p2, float t) {
  float t2 = 1.0 - t;
  return -3.0 * p1 * t2 * t2 +
    c1 * (3.0 * t2 * t2 - 6.0 * t2 * t) +
    c2 * (6.0 * t2 * t - 3.0 * t * t) +
    3.0 * p2 * t * t;
}
`;
const vertexTransform = `
float t = position.y;
bezierT = t;
vec3 bezierCenterPos = cubicBezier(pointA, controlA, controlB, pointB, t);
vec3 bezierDir = normalize(cubicBezierDerivative(pointA, controlA, controlB, pointB, t));

// Make "sideways" always perpendicular to the camera ray; this ensures that any twists
// in the cylinder occur where you won't see them: 
vec3 viewDirection = normalMatrix * vec3(0.0, 0.0, 1.0);
if (bezierDir == viewDirection) {
  bezierDir = normalize(cubicBezierDerivative(pointA, controlA, controlB, pointB, t == 1.0 ? t - 0.0001 : t + 0.0001));
}
vec3 sideways = normalize(cross(bezierDir, viewDirection));
vec3 upish = normalize(cross(sideways, bezierDir));

// Build a matrix for transforming this disc in the cylinder:
mat4 discTx;
discTx[0].xyz = sideways * radius;
discTx[1].xyz = bezierDir * radius;
discTx[2].xyz = upish * radius;
discTx[3].xyz = bezierCenterPos;
discTx[3][3] = 1.0;

// Apply transform, ignoring original y
position = (discTx * vec4(position.x, 0.0, position.z, 1.0)).xyz;
normal = normalize(mat3(discTx) * normal);
`;
const fragmentDefs = `
uniform vec3 dashing;
varying float bezierT;
`;
const fragmentMainIntro = `
if (dashing.x + dashing.y > 0.0) {
  float dashFrac = mod(bezierT - dashing.z, dashing.x + dashing.y);
  if (dashFrac > dashing.x) {
    discard;
  }
}
`;
// Debugging: separate color for each of the 6 sides:
// const fragmentColorTransform = `
// float sideNum = floor(vUV.x * 6.0);
// vec3 mixColor = sideNum < 1.0 ? vec3(1.0, 0.0, 0.0) :
//   sideNum < 2.0 ? vec3(0.0, 1.0, 1.0) :
//   sideNum < 3.0 ? vec3(1.0, 1.0, 0.0) :
//   sideNum < 4.0 ? vec3(0.0, 0.0, 1.0) :
//   sideNum < 5.0 ? vec3(0.0, 1.0, 0.0) :
//   vec3(1.0, 0.0, 1.0);
// gl_FragColor.xyz = mix(gl_FragColor.xyz, mixColor, 0.5);
// `
function createBezierMeshMaterial(baseMaterial) {
    return createDerivedMaterial(baseMaterial, {
        chained: true,
        uniforms: {
            pointA: {
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]()
            },
            controlA: {
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]()
            },
            controlB: {
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]()
            },
            pointB: {
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]()
            },
            radius: {
                value: 0.01
            },
            dashing: {
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]()
            } //on, off, offset
        },
        vertexDefs,
        vertexTransform,
        fragmentDefs,
        fragmentMainIntro
    });
}
let geometry = null;
const defaultBaseMaterial = /*#__PURE__*/ new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
    color: 0xffffff,
    side: __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DoubleSide"]
});
/**
 * A ThreeJS `Mesh` that bends a tube shape along a 3D cubic bezier path. The bending is done
 * by deforming a straight cylindrical geometry in the vertex shader based on a set of four
 * control point uniforms. It patches the necessary GLSL into the mesh's assigned `material`
 * automatically.
 *
 * The cubiz bezier path is determined by its four `Vector3` properties:
 * - `pointA`
 * - `controlA`
 * - `controlB`
 * - `pointB`
 *
 * The tube's radius is controlled by its `radius` property, which defaults to `0.01`.
 *
 * You can also give the tube a dashed appearance with two properties:
 *
 * - `dashArray` - an array of two numbers, defining the length of "on" and "off" parts of
 *   the dash. Each is a 0-1 ratio of the entire path's length. (Actually this is the `t` length
 *   used as input to the cubic bezier function, not its visible length.)
 * - `dashOffset` - offset of where the dash starts. You can animate this to make the dashes move.
 *
 * Note that the dashes will appear like a hollow tube, not solid. This will be more apparent on
 * thicker tubes.
 *
 * TODO: proper geometry bounding sphere and raycasting
 * TODO: allow control of the geometry's segment counts
 */ class BezierMesh extends __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"] {
    static getGeometry() {
        return geometry || (geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CylinderGeometry"](1, 1, 1, 6, 64).translate(0, 0.5, 0));
    }
    constructor(){
        super(BezierMesh.getGeometry(), defaultBaseMaterial);
        this.pointA = new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        this.controlA = new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        this.controlB = new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        this.pointB = new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        this.radius = 0.01;
        this.dashArray = new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]();
        this.dashOffset = 0;
        // TODO - disabling frustum culling until I figure out how to customize the
        //  geometry's bounding sphere that gets used
        this.frustumCulled = false;
    }
    // Handler for automatically wrapping the base material with our upgrades. We do the wrapping
    // lazily on _read_ rather than write to avoid unnecessary wrapping on transient values.
    get material() {
        let derivedMaterial = this._derivedMaterial;
        const baseMaterial = this._baseMaterial || this._defaultMaterial || (this._defaultMaterial = defaultBaseMaterial.clone());
        if (!derivedMaterial || derivedMaterial.baseMaterial !== baseMaterial) {
            derivedMaterial = this._derivedMaterial = createBezierMeshMaterial(baseMaterial);
            // dispose the derived material when its base material is disposed:
            baseMaterial.addEventListener('dispose', function onDispose() {
                baseMaterial.removeEventListener('dispose', onDispose);
                derivedMaterial.dispose();
            });
        }
        return derivedMaterial;
    }
    set material(baseMaterial) {
        this._baseMaterial = baseMaterial;
    }
    // Create and update material for shadows upon request:
    get customDepthMaterial() {
        return this.material.getDepthMaterial();
    }
    set customDepthMaterial(m) {
    // future: let the user override with their own?
    }
    get customDistanceMaterial() {
        return this.material.getDistanceMaterial();
    }
    set customDistanceMaterial(m) {
    // future: let the user override with their own?
    }
    onBeforeRender() {
        const { uniforms } = this.material;
        const { pointA, controlA, controlB, pointB, radius, dashArray, dashOffset } = this;
        uniforms.pointA.value.copy(pointA);
        uniforms.controlA.value.copy(controlA);
        uniforms.controlB.value.copy(controlB);
        uniforms.pointB.value.copy(pointB);
        uniforms.radius.value = radius;
        uniforms.dashing.value.set(dashArray.x, dashArray.y, dashOffset || 0);
    }
    raycast() {
    // TODO - just fail for now
    }
}
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/@react-three/postprocessing/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-ssr] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-ssr] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-ssr] (ecmascript) <export e as extend>");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__o__as__createPortal$3e$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-ssr] (ecmascript) <export o as createPortal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__G__as__useLoader$3e$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-ssr] (ecmascript) <export G as useLoader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__s__as__applyProps$3e$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-ssr] (ecmascript) <export s as applyProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/postprocessing/build/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$maath$2f$dist$2f$maath$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/@react-three/postprocessing/node_modules/maath/dist/maath.esm.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$maath$2f$dist$2f$easing$2d$3be59c6d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__easing$3e$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/@react-three/postprocessing/node_modules/maath/dist/easing-3be59c6d.esm.js [app-ssr] (ecmascript) <export e as easing>");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$n8ao$2f$dist$2f$N8AO$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/n8ao/dist/N8AO.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
const H = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function pt({ children: e, enabled: t = !0 }) {
    const [o, r] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            selected: o,
            select: r,
            enabled: t
        }), [
        o,
        r,
        t
    ]);
    return /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(H.Provider, {
        value: a,
        children: e
    });
}
function mt({ enabled: e = !1, children: t, ...o }) {
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(H);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    ]), /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("group", {
        ref: r,
        ...o,
        children: t
    });
}
const D = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null), ie = (e)=>(e.getAttributes() & 2) === 2, dt = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(/*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ children: e, camera: t, scene: o, resolutionScale: r, enabled: a = !0, renderPriority: n = 1, autoClear: i = !0, depthBuffer: s, enableNormalPass: l, stencilBuffer: p, multisampling: _ = 8, frameBufferType: S = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HalfFloatType"] }, g)=>{
    const { gl: d, scene: m, camera: v, size: x } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])(), f = o || m, u = t || v, [c, U, b] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const C = new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EffectComposer"](d, {
            depthBuffer: s,
            stencilBuffer: p,
            multisampling: _,
            frameBufferType: S
        });
        C.addPass(new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RenderPass"](f, u));
        let R = null, E = null;
        return l && (E = new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NormalPass"](f, u), E.enabled = !1, C.addPass(E), r !== void 0 && (R = new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DepthDownsamplingPass"]({
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>c?.setSize(x.width, x.height), [
        c,
        x
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])((C, R)=>{
        if (a) {
            const E = d.autoClear;
            d.autoClear = i, p && !i && d.clearStencil(), c.render(R), d.autoClear = E;
        }
    }, a ? n : 0);
    const F = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        const C = [], R = F.current.__r3f;
        if (R && c) {
            const E = R.children;
            for(let T = 0; T < E.length; T++){
                const N = E[T].object;
                if (N instanceof __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Effect"]) {
                    const q = [
                        N
                    ];
                    if (!ie(N)) {
                        let G = null;
                        for(; (G = E[T + 1]?.object) instanceof __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Effect"] && !ie(G);)q.push(G), T++;
                    }
                    const $ = new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EffectPass"](u, ...q);
                    C.push($);
                } else N instanceof __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pass"] && C.push(N);
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
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const C = d.toneMapping;
        return d.toneMapping = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoToneMapping"], ()=>{
            d.toneMapping = C;
        };
    }, [
        d
    ]);
    const X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(g, ()=>c, [
        c
    ]), /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(D.Provider, {
        value: X,
        children: /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("group", {
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
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__["extend"])({
                [l]: e
            }), le.set(e, n = l);
        }
        const i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])((l)=>l.camera), s = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>[
                ...t?.args ?? [],
                ...a.args ?? [
                    {
                        ...t,
                        ...a
                    }
                ]
            ], [
            JSON.stringify(a)
        ]);
        return /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(n, {
            camera: i,
            "blendMode-blendFunction": o,
            "blendMode-opacity-value": r,
            ...a,
            args: s
        });
    }, Z = (e, t)=>{
    const o = e[t];
    return __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>typeof o == "number" ? new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](o, o) : o ? new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](...o) : new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"], [
        o
    ]);
}, ce = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function({ blendFunction: e, worldFocusDistance: t, worldFocusRange: o, focusDistance: r, focusRange: a, focalLength: n, bokehScale: i, resolutionScale: s, resolutionX: l, resolutionY: p, width: _, height: S, target: g, depthTexture: d, ...m }, v) {
    const { camera: x } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(D), f = g != null, u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const c = new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DepthOfFieldEffect"](x, {
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
        f && (c.target = new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]), d && c.setDepthTexture(d.texture, d.packing);
        const U = c.maskPass;
        return U.maskFunction = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaskFunction"].MULTIPLY_RGB_SET_ALPHA, c;
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>{
            u.dispose();
        }, [
        u
    ]), /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("primitive", {
        ...m,
        ref: v,
        object: u,
        target: g
    });
}), ht = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ target: e = void 0, mouse: t = !1, debug: o = void 0, manual: r = !1, smoothTime: a = .25, ...n }, i)=>{
    const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])(({ scene: b })=>b), S = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])(({ pointer: b })=>b), { composer: g, camera: d } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(D), [m] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DepthPickingPass"]), [v] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CopyPass"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>(g.addPass(m), g.addPass(v), ()=>{
            g.removePass(m), g.removePass(v);
        }), [
        g,
        m,
        v
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>{
            m.dispose(), v.dispose();
        }, [
        m,
        v
    ]);
    const [x] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0)), [f] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0)), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (b, F)=>(f.x = b, f.y = F, f.z = await m.readDepth(f), f.z = f.z * 2 - 1, 1 - f.z > 1e-7 ? f.unproject(d) : !1), [
        f,
        m,
        d
    ]), c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (b, F = !0)=>{
        if (e) x.set(...e);
        else {
            const { x: X, y: C } = t ? S : {
                x: 0,
                y: 0
            }, R = await u(X, C);
            R && x.copy(R);
        }
        F && s.current?.target && (a > 0 && b > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$maath$2f$dist$2f$easing$2d$3be59c6d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__easing$3e$__["easing"].damp3(s.current.target, x, a, b) : s.current.target.copy(x));
    }, [
        e,
        x,
        t,
        u,
        a,
        S
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])(async (b, F)=>{
        r || c(F), l.current && l.current.position.copy(x), p.current && s.current?.target && p.current.position.copy(s.current.target);
    });
    const U = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            dofRef: s,
            hitpoint: x,
            update: c
        }), [
        x,
        c
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(i, ()=>U, [
        U
    ]), /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            o ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__o__as__createPortal$3e$__["createPortal"])(/*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("mesh", {
                        ref: l,
                        children: [
                            /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("sphereGeometry", {
                                args: [
                                    o,
                                    16,
                                    16
                                ]
                            }),
                            /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("meshBasicMaterial", {
                                color: "#00ff00",
                                opacity: 1,
                                transparent: !0,
                                depthWrite: !1
                            })
                        ]
                    }),
                    /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("mesh", {
                        ref: p,
                        children: [
                            /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("sphereGeometry", {
                                args: [
                                    o / 2,
                                    16,
                                    16
                                ]
                            }),
                            /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("meshBasicMaterial", {
                                color: "#00ff00",
                                opacity: .5,
                                transparent: !0,
                                depthWrite: !1
                            })
                        ]
                    })
                ]
            }), _) : null,
            /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ce, {
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
class fe extends __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Effect"] {
    constructor({ blendFunction: t, enabled: o, glareSize: r, lensPosition: a, screenRes: n, starPoints: i, flareSize: s, flareSpeed: l, flareShape: p, animated: _, anamorphic: S, colorGain: g, lensDirtTexture: d, haloScale: m, secondaryGhosts: v, aditionalStreaks: x, ghostScale: f, opacity: u, starBurst: c }){
        super("LensFlareEffect", _t.fragmentShader, {
            blendFunction: t,
            uniforms: /*@__PURE__*/ new Map([
                [
                    "enabled",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Uniform"](o)
                ],
                [
                    "glareSize",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Uniform"](r)
                ],
                [
                    "lensPosition",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Uniform"](a)
                ],
                [
                    "time",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Uniform"](0)
                ],
                [
                    "screenRes",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Uniform"](n)
                ],
                [
                    "starPoints",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Uniform"](i)
                ],
                [
                    "flareSize",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Uniform"](s)
                ],
                [
                    "flareSpeed",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Uniform"](l)
                ],
                [
                    "flareShape",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Uniform"](p)
                ],
                [
                    "animated",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Uniform"](_)
                ],
                [
                    "anamorphic",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Uniform"](S)
                ],
                [
                    "colorGain",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Uniform"](g)
                ],
                [
                    "lensDirtTexture",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Uniform"](d)
                ],
                [
                    "haloScale",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Uniform"](m)
                ],
                [
                    "secondaryGhosts",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Uniform"](v)
                ],
                [
                    "aditionalStreaks",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Uniform"](x)
                ],
                [
                    "ghostScale",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Uniform"](f)
                ],
                [
                    "starBurst",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Uniform"](c)
                ],
                [
                    "opacity",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Uniform"](u)
                ]
            ])
        });
    }
    update(t, o, r) {
        const a = this.uniforms.get("time");
        a && (a.value += r);
    }
}
const xt = /*@__PURE__*/ P(fe), gt = ({ smoothTime: e = .07, blendFunction: t = 23, enabled: o = !0, glareSize: r = .2, lensPosition: a = new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](-25, 6, -60), screenRes: n = new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](0, 0), starPoints: i = 6, flareSize: s = .01, flareSpeed: l = .01, flareShape: p = .01, animated: _ = !0, anamorphic: S = !1, colorGain: g = new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](20, 20, 20), lensDirtTexture: d = null, haloScale: m = .5, secondaryGhosts: v = !0, aditionalStreaks: x = !0, ghostScale: f = 0, opacity: u = 1, starBurst: c = !1 })=>{
    const U = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])(({ viewport: T })=>T), b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])(({ raycaster: T })=>T), { scene: F, camera: X } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(D), [C] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]), [R] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]), E = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])((T, N)=>{
        if (!E?.current) return;
        const q = E.current.uniforms.get("lensPosition"), $ = E.current.uniforms.get("opacity");
        if (!q || !$) return;
        let G = 1;
        if (R.copy(a).project(X), R.z > 1) return;
        q.value.x = R.x, q.value.y = R.y, C.x = R.x, C.y = R.y, b.setFromCamera(C, X);
        const ve = b.intersectObjects(F.children, !0), { object: I } = ve[0] || {};
        I && (I.userData?.lensflare === "no-occlusion" ? G = 0 : I instanceof __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"] && (I.material.uniforms?._transmission?.value > .2 || I.material._transmission && I.material._transmission > .2 ? G = .2 : I.material.transparent && (G = I.material.opacity))), __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$maath$2f$dist$2f$easing$2d$3be59c6d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__easing$3e$__["easing"].damp($, "value", G, e, N);
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!E?.current) return;
        const T = E.current.uniforms.get("screenRes");
        T && (T.value.x = U.width, T.value.y = U.height);
    }, [
        U
    ]), /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(xt, {
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
}, wt = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BloomEffect"], {
    blendFunction: 0
}), St = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BrightnessContrastEffect"]), yt = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChromaticAberrationEffect"]), Pt = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function({ blendFunction: e = 23 }, t) {
    const o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ColorAverageEffect"](e), [
        e
    ]);
    return /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("primitive", {
        ref: t,
        object: o,
        dispose: null
    });
}), bt = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ColorDepthEffect"]), Et = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DepthEffect"]), Rt = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DotScreenEffect"]), Ut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function({ active: e = !0, ...t }, o) {
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])((p)=>p.invalidate), a = Z(t, "delay"), n = Z(t, "duration"), i = Z(t, "strength"), s = Z(t, "chromaticAberrationOffset"), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlitchEffect"]({
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        l.mode = e ? t.mode || __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlitchMode"].SPORADIC : __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlitchMode"].DISABLED, r();
    }, [
        e,
        l,
        r,
        t.mode
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>{
            l.dispose?.();
        }, [
        l
    ]), /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("primitive", {
        ref: o,
        object: l,
        dispose: null
    });
}), Ct = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function(e, t) {
    const { camera: o } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(D), r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GodRaysEffect"](o, k(e.sun), e), [
        o,
        e
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>void (r.lightSource = k(e.sun)), [
        r,
        e.sun
    ]), /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("primitive", {
        ref: t,
        object: r,
        dispose: null
    });
}), zt = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function({ size: e, ...t }, o) {
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])((n)=>n.invalidate), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GridEffect"](t), [
        t
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        e && a.setSize(e.width, e.height), r();
    }, [
        a,
        e,
        r
    ]), /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("primitive", {
        ref: o,
        object: a,
        dispose: null
    });
}), Tt = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HueSaturationEffect"]), At = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoiseEffect"], {
    blendFunction: 5
}), Bt = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function({ selection: e = [], selectionLayer: t = 10, blendFunction: o, patternTexture: r, edgeStrength: a, pulseSpeed: n, visibleEdgeColor: i, hiddenEdgeColor: s, width: l, height: p, kernelSize: _, blur: S, xRay: g, ...d }, m) {
    const v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])((U)=>U.invalidate), { scene: x, camera: f } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(D), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OutlineEffect"](x, f, {
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
    ]), c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(H);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        u.selectionLayer = t, v();
    }, [
        u,
        v,
        t
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (c && c.enabled && c.selected?.length) return u.selection.set(c.selected), v(), ()=>{
            u.selection.clear(), v();
        };
    }, [
        c,
        u.selection,
        v
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>{
            u.dispose();
        }, [
        u
    ]), /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("primitive", {
        ref: m,
        object: u
    });
}), Vt = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function({ granularity: e = 5 }, t) {
    const o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PixelationEffect"](e), [
        e
    ]);
    return /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("primitive", {
        ref: t,
        object: o,
        dispose: null
    });
}), Ft = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScanlineEffect"], {
    blendFunction: 24,
    density: 1.25
}), Mt = (e, t)=>e.layers.enable(t.selection.layer), Dt = (e, t)=>e.layers.disable(t.selection.layer), kt = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function({ selection: e = [], selectionLayer: t = 10, lights: o = [], inverted: r = !1, ignoreBackground: a = !1, luminanceThreshold: n, luminanceSmoothing: i, intensity: s, width: l, height: p, kernelSize: _, mipmapBlur: S, ...g }, d) {
    o.length === 0 && console.warn("SelectiveBloom requires lights to work.");
    const m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])((c)=>c.invalidate), { scene: v, camera: x } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(D), f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const c = new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectiveBloomEffect"](v, x, {
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
    ]), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(H);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        f.selection.layer = t, m();
    }, [
        f,
        m,
        t
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (o && o.length > 0) return o.forEach((c)=>Mt(k(c), f)), m(), ()=>{
            o.forEach((c)=>Dt(k(c), f)), m();
        };
    }, [
        f,
        m,
        o,
        t
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (u && u.enabled && u.selected?.length) return f.selection.set(u.selected), m(), ()=>{
            f.selection.clear(), m();
        };
    }, [
        u,
        f.selection,
        m
    ]), /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("primitive", {
        ref: d,
        object: f,
        dispose: null
    });
}), Gt = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SepiaEffect"]), It = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function(e, t) {
    const { camera: o, normalPass: r, downSamplingPass: a, resolutionScale: n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(D), i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>r === null && a === null ? (console.error("Please enable the NormalPass in the EffectComposer in order to use SSAO."), {}) : new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SSAOEffect"](o, r && !a ? r.texture : null, {
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
    return /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("primitive", {
        ref: t,
        object: i,
        dispose: null
    });
}), Lt = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SMAAEffect"]), Nt = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FXAAEffect"]), jt = {
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
class pe extends __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Effect"] {
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
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Uniform"](t)
                ],
                [
                    "rampStart",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Uniform"](o)
                ],
                [
                    "rampEnd",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Uniform"](r)
                ],
                [
                    "startColor",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Uniform"](a)
                ],
                [
                    "endColor",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Uniform"](n)
                ],
                [
                    "rampBias",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Uniform"](i)
                ],
                [
                    "rampGain",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Uniform"](s)
                ],
                [
                    "rampMask",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Uniform"](l)
                ],
                [
                    "rampInvert",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Uniform"](p)
                ]
            ])
        });
    }
}
const Ot = /*@__PURE__*/ P(pe), Wt = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function({ textureSrc: e, texture: t, opacity: o = 1, ...r }, a) {
    const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__G__as__useLoader$3e$__["useLoader"])(__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextureLoader"], e);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        n.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"], n.wrapS = n.wrapT = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RepeatWrapping"];
    }, [
        n
    ]);
    const i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextureEffect"]({
            ...r,
            texture: n || t
        }), [
        r,
        n,
        t
    ]);
    return /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("primitive", {
        ref: a,
        object: i,
        "blendMode-opacity-value": o,
        dispose: null
    });
}), Xt = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToneMappingEffect"]), qt = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VignetteEffect"]), Ht = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShockWaveEffect"]), Zt = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function({ lut: e, tetrahedralInterpolation: t, ...o }, r) {
    const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LUT3DEffect"](e, o), [
        e,
        o
    ]), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])((i)=>i.invalidate);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        t && (a.tetrahedralInterpolation = t), e && (a.lut = e), n();
    }, [
        a,
        n,
        e,
        t
    ]), /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("primitive", {
        ref: r,
        object: a,
        dispose: null
    });
}), $t = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TiltShiftEffect"], {
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
class me extends __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Effect"] {
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
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Uniform"](o)
                ],
                [
                    "taper",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Uniform"](r)
                ],
                [
                    "start",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Uniform"](a)
                ],
                [
                    "end",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Uniform"](n)
                ],
                [
                    "samples",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Uniform"](i)
                ],
                [
                    "direction",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Uniform"](s)
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
class Qt extends __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Effect"] {
    constructor({ font: t = "arial", characters: o = " .:,'-^=*+?!|0#X%WM@", fontSize: r = 54, cellSize: a = 16, color: n = "#ffffff", invert: i = !1 } = {}){
        const s = /*@__PURE__*/ new Map([
            [
                "uCharacters",
                new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Uniform"](new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"])
            ],
            [
                "uCellSize",
                new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Uniform"](a)
            ],
            [
                "uCharactersCount",
                new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Uniform"](o.length)
            ],
            [
                "uColor",
                new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Uniform"](new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](n))
            ],
            [
                "uInvert",
                new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Uniform"](i)
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
        const l = new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CanvasTexture"](a, void 0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RepeatWrapping"], __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RepeatWrapping"], __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NearestFilter"], __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NearestFilter"]), p = a.getContext("2d");
        if (!p) throw new Error("Context not available");
        p.clearRect(0, 0, n, n), p.font = `${r}px ${o}`, p.textAlign = "center", p.textBaseline = "middle", p.fillStyle = "#fff";
        for(let _ = 0; _ < t.length; _++){
            const S = t[_], g = _ % i, d = Math.floor(_ / i);
            p.fillText(S, g * s + s / 2, d * s + s / 2);
        }
        return l.needsUpdate = !0, l;
    }
}
const eo = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ font: e = "arial", characters: t = " .:,'-^=*+?!|0#X%WM@", fontSize: o = 54, cellSize: r = 16, color: a = "#ffffff", invert: n = !1 }, i)=>{
    const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>new Qt({
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
    return /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("primitive", {
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
class de extends __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Effect"] {
    constructor({ blendFunction: t = 23, factor: o = 0 } = {}){
        super("WaterEffect", to.fragmentShader, {
            blendFunction: t,
            attributes: 2,
            uniforms: /*@__PURE__*/ new Map([
                [
                    "factor",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Uniform"](o)
                ]
            ])
        });
    }
}
const oo = /*@__PURE__*/ P(de, {
    blendFunction: 23
}), ao = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ halfRes: e, screenSpaceRadius: t, quality: o, depthAwareUpsampling: r = !0, aoRadius: a = 5, aoSamples: n = 16, denoiseSamples: i = 4, denoiseRadius: s = 12, distanceFalloff: l = 1, intensity: p = 1, color: _, renderMode: S = 0 }, g)=>{
    const { camera: d, scene: m } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])(), v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$n8ao$2f$dist$2f$N8AO$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["N8AOPostPass"](m, d), [
        d,
        m
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__s__as__applyProps$3e$__["applyProps"])(v.configuration, {
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
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        o && v.setQualityMode(o.charAt(0).toUpperCase() + o.slice(1));
    }, [
        v,
        o
    ]), /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("primitive", {
        ref: g,
        object: v
    });
});
;
 //# sourceMappingURL=index.js.map
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-utils/dist/es/noop.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "noop",
    ()=>noop
]);
/*#__NO_SIDE_EFFECTS__*/ const noop = (any)=>any;
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-utils/dist/es/errors.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "invariant",
    ()=>invariant,
    "warning",
    ()=>warning
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-utils/dist/es/noop.mjs [app-ssr] (ecmascript)");
;
let warning = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"];
let invariant = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"];
if ("TURBOPACK compile-time truthy", 1) {
    warning = (check, message)=>{
        if (!check && typeof console !== "undefined") {
            console.warn(message);
        }
    };
    invariant = (check, message)=>{
        if (!check) {
            throw new Error(message);
        }
    };
}
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-utils/dist/es/memo.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "memo",
    ()=>memo
]);
/*#__NO_SIDE_EFFECTS__*/ function memo(callback) {
    let result;
    return ()=>{
        if (result === undefined) result = callback();
        return result;
    };
}
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-utils/dist/es/progress.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "progress",
    ()=>progress
]);
/*
  Progress within given range

  Given a lower limit and an upper limit, we return the progress
  (expressed as a number 0-1) represented by the given value, and
  limit that progress to within 0-1.

  @param [number]: Lower limit
  @param [number]: Upper limit
  @param [number]: Value to find progress within given range
  @return [number]: Progress of value within range as expressed 0-1
*/ /*#__NO_SIDE_EFFECTS__*/ const progress = (from, to, value)=>{
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-utils/dist/es/time-conversion.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "millisecondsToSeconds",
    ()=>millisecondsToSeconds,
    "secondsToMilliseconds",
    ()=>secondsToMilliseconds
]);
/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */ /*#__NO_SIDE_EFFECTS__*/ const secondsToMilliseconds = (seconds)=>seconds * 1000;
/*#__NO_SIDE_EFFECTS__*/ const millisecondsToSeconds = (milliseconds)=>milliseconds / 1000;
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-utils/dist/es/index.mjs [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-utils/dist/es/errors.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$memo$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-utils/dist/es/memo.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-utils/dist/es/noop.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-utils/dist/es/progress.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-utils/dist/es/time-conversion.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supportsScrollTimeline",
    ()=>supportsScrollTimeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-utils/dist/es/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$memo$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-utils/dist/es/memo.mjs [app-ssr] (ecmascript)");
;
const supportsScrollTimeline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$memo$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(()=>window.ScrollTimeline !== undefined);
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/animation/controls/BaseGroup.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseGroupPlaybackControls",
    ()=>BaseGroupPlaybackControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$scroll$2d$timeline$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs [app-ssr] (ecmascript)");
;
class BaseGroupPlaybackControls {
    constructor(animations){
        // Bound to accomodate common `return animation.stop` pattern
        this.stop = ()=>this.runAll("stop");
        this.animations = animations.filter(Boolean);
    }
    get finished() {
        // Support for new finished Promise and legacy thennable API
        return Promise.all(this.animations.map((animation)=>"finished" in animation ? animation.finished : animation));
    }
    /**
     * TODO: Filter out cancelled or stopped animations before returning
     */ getAll(propName) {
        return this.animations[0][propName];
    }
    setAll(propName, newValue) {
        for(let i = 0; i < this.animations.length; i++){
            this.animations[i][propName] = newValue;
        }
    }
    attachTimeline(timeline, fallback) {
        const subscriptions = this.animations.map((animation)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$scroll$2d$timeline$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supportsScrollTimeline"])() && animation.attachTimeline) {
                return animation.attachTimeline(timeline);
            } else if (typeof fallback === "function") {
                return fallback(animation);
            }
        });
        return ()=>{
            subscriptions.forEach((cancel, i)=>{
                cancel && cancel();
                this.animations[i].stop();
            });
        };
    }
    get time() {
        return this.getAll("time");
    }
    set time(time) {
        this.setAll("time", time);
    }
    get speed() {
        return this.getAll("speed");
    }
    set speed(speed) {
        this.setAll("speed", speed);
    }
    get startTime() {
        return this.getAll("startTime");
    }
    get duration() {
        let max = 0;
        for(let i = 0; i < this.animations.length; i++){
            max = Math.max(max, this.animations[i].duration);
        }
        return max;
    }
    runAll(methodName) {
        this.animations.forEach((controls)=>controls[methodName]());
    }
    flatten() {
        this.runAll("flatten");
    }
    play() {
        this.runAll("play");
    }
    pause() {
        this.runAll("pause");
    }
    cancel() {
        this.runAll("cancel");
    }
    complete() {
        this.runAll("complete");
    }
}
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/animation/controls/Group.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GroupPlaybackControls",
    ()=>GroupPlaybackControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$controls$2f$BaseGroup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/animation/controls/BaseGroup.mjs [app-ssr] (ecmascript)");
;
/**
 * TODO: This is a temporary class to support the legacy
 * thennable API
 */ class GroupPlaybackControls extends __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$controls$2f$BaseGroup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseGroupPlaybackControls"] {
    then(onResolve, onReject) {
        return Promise.all(this.animations).then(onResolve).catch(onReject);
    }
}
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getValueTransition",
    ()=>getValueTransition
]);
function getValueTransition(transition, key) {
    return transition ? transition[key] || transition["default"] || transition : undefined;
}
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/animation/generators/utils/calc-duration.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calcGeneratorDuration",
    ()=>calcGeneratorDuration,
    "maxGeneratorDuration",
    ()=>maxGeneratorDuration
]);
/**
 * Implement a practical max duration for keyframe generation
 * to prevent infinite loops
 */ const maxGeneratorDuration = 20000;
function calcGeneratorDuration(generator) {
    let duration = 0;
    const timeStep = 50;
    let state = generator.next(duration);
    while(!state.done && duration < maxGeneratorDuration){
        duration += timeStep;
        state = generator.next(duration);
    }
    return duration >= maxGeneratorDuration ? Infinity : duration;
}
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createGeneratorEasing",
    ()=>createGeneratorEasing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-utils/dist/es/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-utils/dist/es/time-conversion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$calc$2d$duration$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/animation/generators/utils/calc-duration.mjs [app-ssr] (ecmascript)");
;
;
/**
 * Create a progress => progress easing function from a generator.
 */ function createGeneratorEasing(options, scale = 100, createGenerator) {
    const generator = createGenerator({
        ...options,
        keyframes: [
            0,
            scale
        ]
    });
    const duration = Math.min((0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$calc$2d$duration$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcGeneratorDuration"])(generator), __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$calc$2d$duration$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maxGeneratorDuration"]);
    return {
        type: "keyframes",
        ease: (progress)=>{
            return generator.next(duration * progress).value / scale;
        },
        duration: (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsToSeconds"])(duration)
    };
}
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isGenerator",
    ()=>isGenerator
]);
function isGenerator(type) {
    return typeof type === "function";
}
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/animation/waapi/utils/attach-timeline.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "attachTimeline",
    ()=>attachTimeline
]);
function attachTimeline(animation, timeline) {
    animation.timeline = timeline;
    animation.onfinish = null;
}
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/animation/waapi/NativeAnimationControls.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeAnimationControls",
    ()=>NativeAnimationControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-utils/dist/es/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-utils/dist/es/time-conversion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-utils/dist/es/noop.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$attach$2d$timeline$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/animation/waapi/utils/attach-timeline.mjs [app-ssr] (ecmascript)");
;
;
class NativeAnimationControls {
    constructor(animation){
        this.animation = animation;
    }
    get duration() {
        var _a, _b, _c;
        const durationInMs = ((_b = (_a = this.animation) === null || _a === void 0 ? void 0 : _a.effect) === null || _b === void 0 ? void 0 : _b.getComputedTiming().duration) || ((_c = this.options) === null || _c === void 0 ? void 0 : _c.duration) || 300;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsToSeconds"])(Number(durationInMs));
    }
    get time() {
        var _a;
        if (this.animation) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsToSeconds"])(((_a = this.animation) === null || _a === void 0 ? void 0 : _a.currentTime) || 0);
        }
        return 0;
    }
    set time(newTime) {
        if (this.animation) {
            this.animation.currentTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])(newTime);
        }
    }
    get speed() {
        return this.animation ? this.animation.playbackRate : 1;
    }
    set speed(newSpeed) {
        if (this.animation) {
            this.animation.playbackRate = newSpeed;
        }
    }
    get state() {
        return this.animation ? this.animation.playState : "finished";
    }
    get startTime() {
        return this.animation ? this.animation.startTime : null;
    }
    get finished() {
        return this.animation ? this.animation.finished : Promise.resolve();
    }
    play() {
        this.animation && this.animation.play();
    }
    pause() {
        this.animation && this.animation.pause();
    }
    stop() {
        if (!this.animation || this.state === "idle" || this.state === "finished") {
            return;
        }
        if (this.animation.commitStyles) {
            this.animation.commitStyles();
        }
        this.cancel();
    }
    flatten() {
        var _a;
        if (!this.animation) return;
        (_a = this.animation.effect) === null || _a === void 0 ? void 0 : _a.updateTiming({
            easing: "linear"
        });
    }
    attachTimeline(timeline) {
        if (this.animation) (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$attach$2d$timeline$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["attachTimeline"])(this.animation, timeline);
        return __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"];
    }
    complete() {
        this.animation && this.animation.finish();
    }
    cancel() {
        try {
            this.animation && this.animation.cancel();
        } catch (e) {}
    }
}
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/utils/is-bezier-definition.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isBezierDefinition",
    ()=>isBezierDefinition
]);
const isBezierDefinition = (easing)=>Array.isArray(easing) && typeof easing[0] === "number";
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/utils/supports/flags.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supportsFlags",
    ()=>supportsFlags
]);
/**
 * Add the ability for test suites to manually set support flags
 * to better test more environments.
 */ const supportsFlags = {
    linearEasing: undefined
};
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/utils/supports/memo.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "memoSupports",
    ()=>memoSupports
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-utils/dist/es/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$memo$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-utils/dist/es/memo.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$flags$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/utils/supports/flags.mjs [app-ssr] (ecmascript)");
;
;
function memoSupports(callback, supportsFlag) {
    const memoized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$memo$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(callback);
    return ()=>{
        var _a;
        return (_a = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$flags$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supportsFlags"][supportsFlag]) !== null && _a !== void 0 ? _a : memoized();
    };
}
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/utils/supports/linear-easing.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supportsLinearEasing",
    ()=>supportsLinearEasing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$memo$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/utils/supports/memo.mjs [app-ssr] (ecmascript)");
;
const supportsLinearEasing = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$memo$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memoSupports"])(()=>{
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        });
    } catch (e) {
        return false;
    }
    return true;
}, "linearEasing");
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/animation/waapi/utils/linear.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateLinearEasing",
    ()=>generateLinearEasing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-utils/dist/es/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-utils/dist/es/progress.mjs [app-ssr] (ecmascript)");
;
const generateLinearEasing = (easing, duration, resolution = 10 // as milliseconds
)=>{
    let points = "";
    const numPoints = Math.max(Math.round(duration / resolution), 2);
    for(let i = 0; i < numPoints; i++){
        points += easing((0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["progress"])(0, numPoints - 1, i)) + ", ";
    }
    return `linear(${points.substring(0, points.length - 2)})`;
};
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/animation/waapi/utils/easing.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cubicBezierAsString",
    ()=>cubicBezierAsString,
    "isWaapiSupportedEasing",
    ()=>isWaapiSupportedEasing,
    "mapEasingToNativeEasing",
    ()=>mapEasingToNativeEasing,
    "supportedWaapiEasing",
    ()=>supportedWaapiEasing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/utils/is-bezier-definition.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$linear$2d$easing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/utils/supports/linear-easing.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$linear$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/animation/waapi/utils/linear.mjs [app-ssr] (ecmascript)");
;
;
;
function isWaapiSupportedEasing(easing) {
    return Boolean(typeof easing === "function" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$linear$2d$easing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supportsLinearEasing"])() || !easing || typeof easing === "string" && (easing in supportedWaapiEasing || (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$linear$2d$easing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supportsLinearEasing"])()) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBezierDefinition"])(easing) || Array.isArray(easing) && easing.every(isWaapiSupportedEasing));
}
const cubicBezierAsString = ([a, b, c, d])=>`cubic-bezier(${a}, ${b}, ${c}, ${d})`;
const supportedWaapiEasing = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: /*@__PURE__*/ cubicBezierAsString([
        0,
        0.65,
        0.55,
        1
    ]),
    circOut: /*@__PURE__*/ cubicBezierAsString([
        0.55,
        0,
        1,
        0.45
    ]),
    backIn: /*@__PURE__*/ cubicBezierAsString([
        0.31,
        0.01,
        0.66,
        -0.59
    ]),
    backOut: /*@__PURE__*/ cubicBezierAsString([
        0.33,
        1.53,
        0.69,
        0.99
    ])
};
function mapEasingToNativeEasing(easing, duration) {
    if (!easing) {
        return undefined;
    } else if (typeof easing === "function" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$linear$2d$easing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supportsLinearEasing"])()) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$linear$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateLinearEasing"])(easing, duration);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBezierDefinition"])(easing)) {
        return cubicBezierAsString(easing);
    } else if (Array.isArray(easing)) {
        return easing.map((segmentEasing)=>mapEasingToNativeEasing(segmentEasing, duration) || supportedWaapiEasing.easeOut);
    } else {
        return supportedWaapiEasing[easing];
    }
}
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isDragActive",
    ()=>isDragActive,
    "isDragging",
    ()=>isDragging
]);
const isDragging = {
    x: false,
    y: false
};
function isDragActive() {
    return isDragging.x || isDragging.y;
}
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveElements",
    ()=>resolveElements
]);
function resolveElements(elementOrSelector, scope, selectorCache) {
    var _a;
    if (elementOrSelector instanceof Element) {
        return [
            elementOrSelector
        ];
    } else if (typeof elementOrSelector === "string") {
        let root = document;
        if (scope) {
            // TODO: Refactor to utils package
            // invariant(
            //     Boolean(scope.current),
            //     "Scope provided, but no element detected."
            // )
            root = scope.current;
        }
        const elements = (_a = selectorCache === null || selectorCache === void 0 ? void 0 : selectorCache[elementOrSelector]) !== null && _a !== void 0 ? _a : root.querySelectorAll(elementOrSelector);
        return elements ? Array.from(elements) : [];
    }
    return Array.from(elementOrSelector);
}
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/gestures/utils/setup.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setupGesture",
    ()=>setupGesture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs [app-ssr] (ecmascript)");
;
function setupGesture(elementOrSelector, options) {
    const elements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveElements"])(elementOrSelector);
    const gestureAbortController = new AbortController();
    const eventOptions = {
        passive: true,
        ...options,
        signal: gestureAbortController.signal
    };
    const cancel = ()=>gestureAbortController.abort();
    return [
        elements,
        eventOptions,
        cancel
    ];
}
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/gestures/hover.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hover",
    ()=>hover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$setup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/gestures/utils/setup.mjs [app-ssr] (ecmascript)");
;
;
/**
 * Filter out events that are not pointer events, or are triggering
 * while a Motion gesture is active.
 */ function filterEvents(callback) {
    return (event)=>{
        if (event.pointerType === "touch" || (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDragActive"])()) return;
        callback(event);
    };
}
/**
 * Create a hover gesture. hover() is different to .addEventListener("pointerenter")
 * in that it has an easier syntax, filters out polyfilled touch events, interoperates
 * with drag gestures, and automatically removes the "pointerennd" event listener when the hover ends.
 *
 * @public
 */ function hover(elementOrSelector, onHoverStart, options = {}) {
    const [elements, eventOptions, cancel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$setup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupGesture"])(elementOrSelector, options);
    const onPointerEnter = filterEvents((enterEvent)=>{
        const { target } = enterEvent;
        const onHoverEnd = onHoverStart(enterEvent);
        if (typeof onHoverEnd !== "function" || !target) return;
        const onPointerLeave = filterEvents((leaveEvent)=>{
            onHoverEnd(leaveEvent);
            target.removeEventListener("pointerleave", onPointerLeave);
        });
        target.addEventListener("pointerleave", onPointerLeave, eventOptions);
    });
    elements.forEach((element)=>{
        element.addEventListener("pointerenter", onPointerEnter, eventOptions);
    });
    return cancel;
}
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isNodeOrChild",
    ()=>isNodeOrChild
]);
/**
 * Recursively traverse up the tree to check whether the provided child node
 * is the parent or a descendant of it.
 *
 * @param parent - Element to find
 * @param child - Element to test against parent
 */ const isNodeOrChild = (parent, child)=>{
    if (!child) {
        return false;
    } else if (parent === child) {
        return true;
    } else {
        return isNodeOrChild(parent, child.parentElement);
    }
};
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/gestures/utils/is-primary-pointer.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isPrimaryPointer",
    ()=>isPrimaryPointer
]);
const isPrimaryPointer = (event)=>{
    if (event.pointerType === "mouse") {
        return typeof event.button !== "number" || event.button <= 0;
    } else {
        /**
         * isPrimary is true for all mice buttons, whereas every touch point
         * is regarded as its own input. So subsequent concurrent touch points
         * will be false.
         *
         * Specifically match against false here as incomplete versions of
         * PointerEvents in very old browser might have it set as undefined.
         */ return event.isPrimary !== false;
    }
};
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/gestures/press/utils/is-keyboard-accessible.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isElementKeyboardAccessible",
    ()=>isElementKeyboardAccessible
]);
const focusableElements = new Set([
    "BUTTON",
    "INPUT",
    "SELECT",
    "TEXTAREA",
    "A"
]);
function isElementKeyboardAccessible(element) {
    return focusableElements.has(element.tagName) || element.tabIndex !== -1;
}
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/gestures/press/utils/state.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isPressing",
    ()=>isPressing
]);
const isPressing = new WeakSet();
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/gestures/press/utils/keyboard.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "enableKeyboardPress",
    ()=>enableKeyboardPress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$state$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/gestures/press/utils/state.mjs [app-ssr] (ecmascript)");
;
/**
 * Filter out events that are not "Enter" keys.
 */ function filterEvents(callback) {
    return (event)=>{
        if (event.key !== "Enter") return;
        callback(event);
    };
}
function firePointerEvent(target, type) {
    target.dispatchEvent(new PointerEvent("pointer" + type, {
        isPrimary: true,
        bubbles: true
    }));
}
const enableKeyboardPress = (focusEvent, eventOptions)=>{
    const element = focusEvent.currentTarget;
    if (!element) return;
    const handleKeydown = filterEvents(()=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$state$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPressing"].has(element)) return;
        firePointerEvent(element, "down");
        const handleKeyup = filterEvents(()=>{
            firePointerEvent(element, "up");
        });
        const handleBlur = ()=>firePointerEvent(element, "cancel");
        element.addEventListener("keyup", handleKeyup, eventOptions);
        element.addEventListener("blur", handleBlur, eventOptions);
    });
    element.addEventListener("keydown", handleKeydown, eventOptions);
    /**
     * Add an event listener that fires on blur to remove the keydown events.
     */ element.addEventListener("blur", ()=>element.removeEventListener("keydown", handleKeydown), eventOptions);
};
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/gestures/press/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "press",
    ()=>press
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$is$2d$node$2d$or$2d$child$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$is$2d$primary$2d$pointer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/gestures/utils/is-primary-pointer.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$setup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/gestures/utils/setup.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$is$2d$keyboard$2d$accessible$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/gestures/press/utils/is-keyboard-accessible.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$keyboard$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/gestures/press/utils/keyboard.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$state$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/gestures/press/utils/state.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
/**
 * Filter out events that are not primary pointer events, or are triggering
 * while a Motion gesture is active.
 */ function isValidPressEvent(event) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$is$2d$primary$2d$pointer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPrimaryPointer"])(event) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDragActive"])();
}
/**
 * Create a press gesture.
 *
 * Press is different to `"pointerdown"`, `"pointerup"` in that it
 * automatically filters out secondary pointer events like right
 * click and multitouch.
 *
 * It also adds accessibility support for keyboards, where
 * an element with a press gesture will receive focus and
 *  trigger on Enter `"keydown"` and `"keyup"` events.
 *
 * This is different to a browser's `"click"` event, which does
 * respond to keyboards but only for the `"click"` itself, rather
 * than the press start and end/cancel. The element also needs
 * to be focusable for this to work, whereas a press gesture will
 * make an element focusable by default.
 *
 * @public
 */ function press(elementOrSelector, onPressStart, options = {}) {
    const [elements, eventOptions, cancelEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$setup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupGesture"])(elementOrSelector, options);
    const startPress = (startEvent)=>{
        const element = startEvent.currentTarget;
        if (!isValidPressEvent(startEvent) || __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$state$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPressing"].has(element)) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$state$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPressing"].add(element);
        const onPressEnd = onPressStart(startEvent);
        const onPointerEnd = (endEvent, success)=>{
            window.removeEventListener("pointerup", onPointerUp);
            window.removeEventListener("pointercancel", onPointerCancel);
            if (!isValidPressEvent(endEvent) || !__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$state$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPressing"].has(element)) {
                return;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$state$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPressing"].delete(element);
            if (typeof onPressEnd === "function") {
                onPressEnd(endEvent, {
                    success
                });
            }
        };
        const onPointerUp = (upEvent)=>{
            onPointerEnd(upEvent, options.useGlobalTarget || (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$is$2d$node$2d$or$2d$child$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNodeOrChild"])(element, upEvent.target));
        };
        const onPointerCancel = (cancelEvent)=>{
            onPointerEnd(cancelEvent, false);
        };
        window.addEventListener("pointerup", onPointerUp, eventOptions);
        window.addEventListener("pointercancel", onPointerCancel, eventOptions);
    };
    elements.forEach((element)=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$is$2d$keyboard$2d$accessible$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isElementKeyboardAccessible"])(element) && element.getAttribute("tabindex") === null) {
            element.tabIndex = 0;
        }
        const target = options.useGlobalTarget ? window : element;
        target.addEventListener("pointerdown", startPress, eventOptions);
        element.addEventListener("focus", (event)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$keyboard$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enableKeyboardPress"])(event, eventOptions), eventOptions);
    });
    return cancelEvents;
}
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/animation/waapi/utils/convert-options.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyGeneratorOptions",
    ()=>applyGeneratorOptions,
    "convertMotionOptionsToNative",
    ()=>convertMotionOptionsToNative
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-utils/dist/es/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-utils/dist/es/time-conversion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$linear$2d$easing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/utils/supports/linear-easing.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$create$2d$generator$2d$easing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$is$2d$generator$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$easing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/animation/waapi/utils/easing.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
const defaultEasing = "easeOut";
function applyGeneratorOptions(options) {
    var _a;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$is$2d$generator$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isGenerator"])(options.type)) {
        const generatorOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$create$2d$generator$2d$easing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createGeneratorEasing"])(options, 100, options.type);
        options.ease = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$linear$2d$easing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supportsLinearEasing"])() ? generatorOptions.ease : defaultEasing;
        options.duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])(generatorOptions.duration);
        options.type = "keyframes";
    } else {
        options.duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])((_a = options.duration) !== null && _a !== void 0 ? _a : 0.3);
        options.ease = options.ease || defaultEasing;
    }
}
// TODO: Reuse for NativeAnimation
function convertMotionOptionsToNative(valueName, keyframes, options) {
    var _a;
    const nativeKeyframes = {};
    const nativeOptions = {
        fill: "both",
        easing: "linear",
        composite: "replace"
    };
    nativeOptions.delay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])((_a = options.delay) !== null && _a !== void 0 ? _a : 0);
    applyGeneratorOptions(options);
    nativeOptions.duration = options.duration;
    const { ease, times } = options;
    if (times) nativeKeyframes.offset = times;
    nativeKeyframes[valueName] = keyframes;
    const easing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$easing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapEasingToNativeEasing"])(ease, options.duration);
    /**
     * If this is an easing array, apply to keyframes, not animation as a whole
     */ if (Array.isArray(easing)) {
        nativeKeyframes.easing = easing;
    } else {
        nativeOptions.easing = easing;
    }
    return {
        keyframes: nativeKeyframes,
        options: nativeOptions
    };
}
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/animation/waapi/PseudoAnimation.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PseudoAnimation",
    ()=>PseudoAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$NativeAnimationControls$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/animation/waapi/NativeAnimationControls.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$convert$2d$options$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/animation/waapi/utils/convert-options.mjs [app-ssr] (ecmascript)");
;
;
class PseudoAnimation extends __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$NativeAnimationControls$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeAnimationControls"] {
    constructor(target, pseudoElement, valueName, keyframes, options){
        const animationOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$convert$2d$options$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertMotionOptionsToNative"])(valueName, keyframes, options);
        const animation = target.animate(animationOptions.keyframes, {
            pseudoElement,
            ...animationOptions.options
        });
        super(animation);
    }
}
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/view/utils/choose-layer-type.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "chooseLayerType",
    ()=>chooseLayerType
]);
function chooseLayerType(valueName) {
    if (valueName === "layout") return "group";
    if (valueName === "enter" || valueName === "new") return "new";
    if (valueName === "exit" || valueName === "old") return "old";
    return "group";
}
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/view/utils/css.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "css",
    ()=>css
]);
let pendingRules = {};
let style = null;
const css = {
    set: (selector, values)=>{
        pendingRules[selector] = values;
    },
    commit: ()=>{
        if (!style) {
            style = document.createElement("style");
            style.id = "motion-view";
        }
        let cssText = "";
        for(const selector in pendingRules){
            const rule = pendingRules[selector];
            cssText += `${selector} {\n`;
            for (const [property, value] of Object.entries(rule)){
                cssText += `  ${property}: ${value};\n`;
            }
            cssText += "}\n";
        }
        style.textContent = cssText;
        document.head.appendChild(style);
        pendingRules = {};
    },
    remove: ()=>{
        if (style && style.parentElement) {
            style.parentElement.removeChild(style);
        }
    }
};
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/view/utils/get-layer-name.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLayerName",
    ()=>getLayerName
]);
function getLayerName(pseudoElement) {
    const match = pseudoElement.match(/::view-transition-(old|new|group|image-pair)\((.*?)\)/);
    if (!match) return null;
    return {
        layer: match[2],
        type: match[1]
    };
}
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/view/utils/get-view-animations.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getViewAnimations",
    ()=>getViewAnimations
]);
function filterViewAnimations(animation) {
    var _a;
    const { effect } = animation;
    if (!effect) return false;
    return effect.target === document.documentElement && ((_a = effect.pseudoElement) === null || _a === void 0 ? void 0 : _a.startsWith("::view-transition"));
}
function getViewAnimations() {
    return document.getAnimations().filter(filterViewAnimations);
}
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/view/utils/has-target.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasTarget",
    ()=>hasTarget
]);
function hasTarget(target, targets) {
    return targets.has(target) && Object.keys(targets.get(target)).length > 0;
}
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/view/start.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "startViewAnimation",
    ()=>startViewAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-utils/dist/es/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-utils/dist/es/time-conversion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$controls$2f$BaseGroup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/animation/controls/BaseGroup.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$value$2d$transition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$NativeAnimationControls$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/animation/waapi/NativeAnimationControls.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$PseudoAnimation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/animation/waapi/PseudoAnimation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$convert$2d$options$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/animation/waapi/utils/convert-options.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$easing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/animation/waapi/utils/easing.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$choose$2d$layer$2d$type$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/view/utils/choose-layer-type.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/view/utils/css.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$get$2d$layer$2d$name$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/view/utils/get-layer-name.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$get$2d$view$2d$animations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/view/utils/get-view-animations.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$has$2d$target$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/view/utils/has-target.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
const definitionNames = [
    "layout",
    "enter",
    "exit",
    "new",
    "old"
];
function startViewAnimation(update, defaultOptions, targets) {
    if (!document.startViewTransition) {
        return new Promise(async (resolve)=>{
            await update();
            resolve(new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$controls$2f$BaseGroup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseGroupPlaybackControls"]([]));
        });
    }
    // TODO: Go over existing targets and ensure they all have ids
    /**
     * If we don't have any animations defined for the root target,
     * remove it from being captured.
     */ if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$has$2d$target$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasTarget"])("root", targets)) {
        __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"].set(":root", {
            "view-transition-name": "none"
        });
    }
    /**
     * Set the timing curve to linear for all view transition layers.
     * This gets baked into the keyframes, which can't be changed
     * without breaking the generated animation.
     *
     * This allows us to set easing via updateTiming - which can be changed.
     */ __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"].set("::view-transition-group(*), ::view-transition-old(*), ::view-transition-new(*)", {
        "animation-timing-function": "linear !important"
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"].commit(); // Write
    const transition = document.startViewTransition(async ()=>{
        await update();
    // TODO: Go over new targets and ensure they all have ids
    });
    transition.finished.finally(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"].remove(); // Write
    });
    return new Promise((resolve)=>{
        transition.ready.then(()=>{
            var _a;
            const generatedViewAnimations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$get$2d$view$2d$animations$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getViewAnimations"])();
            const animations = [];
            /**
             * Create animations for our definitions
             */ targets.forEach((definition, target)=>{
                // TODO: If target is not "root", resolve elements
                // and iterate over each
                for (const key of definitionNames){
                    if (!definition[key]) continue;
                    const { keyframes, options } = definition[key];
                    for (let [valueName, valueKeyframes] of Object.entries(keyframes)){
                        if (!valueKeyframes) continue;
                        const valueOptions = {
                            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$value$2d$transition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getValueTransition"])(defaultOptions, valueName),
                            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$value$2d$transition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getValueTransition"])(options, valueName)
                        };
                        const type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$choose$2d$layer$2d$type$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chooseLayerType"])(key);
                        /**
                         * If this is an opacity animation, and keyframes are not an array,
                         * we need to convert them into an array and set an initial value.
                         */ if (valueName === "opacity" && !Array.isArray(valueKeyframes)) {
                            const initialValue = type === "new" ? 0 : 1;
                            valueKeyframes = [
                                initialValue,
                                valueKeyframes
                            ];
                        }
                        /**
                         * Resolve stagger function if provided.
                         */ if (typeof valueOptions.delay === "function") {
                            valueOptions.delay = valueOptions.delay(0, 1);
                        }
                        const animation = new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$PseudoAnimation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PseudoAnimation"](document.documentElement, `::view-transition-${type}(${target})`, valueName, valueKeyframes, valueOptions);
                        animations.push(animation);
                    }
                }
            });
            /**
             * Handle browser generated animations
             */ for (const animation of generatedViewAnimations){
                if (animation.playState === "finished") continue;
                const { effect } = animation;
                if (!effect || !(effect instanceof KeyframeEffect)) continue;
                const { pseudoElement } = effect;
                if (!pseudoElement) continue;
                const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$get$2d$layer$2d$name$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLayerName"])(pseudoElement);
                if (!name) continue;
                const targetDefinition = targets.get(name.layer);
                if (!targetDefinition) {
                    /**
                     * If transition name is group then update the timing of the animation
                     * whereas if it's old or new then we could possibly replace it using
                     * the above method.
                     */ const transitionName = name.type === "group" ? "layout" : "";
                    const animationTransition = {
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$value$2d$transition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getValueTransition"])(defaultOptions, transitionName)
                    };
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$convert$2d$options$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyGeneratorOptions"])(animationTransition);
                    const easing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$easing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapEasingToNativeEasing"])(animationTransition.ease, animationTransition.duration);
                    effect.updateTiming({
                        delay: (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])((_a = animationTransition.delay) !== null && _a !== void 0 ? _a : 0),
                        duration: animationTransition.duration,
                        easing
                    });
                    animations.push(new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$NativeAnimationControls$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeAnimationControls"](animation));
                } else if (hasOpacity(targetDefinition, "enter") && hasOpacity(targetDefinition, "exit") && effect.getKeyframes().some((keyframe)=>keyframe.mixBlendMode)) {
                    animations.push(new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$NativeAnimationControls$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeAnimationControls"](animation));
                } else {
                    animation.cancel();
                }
            }
            resolve(new __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$controls$2f$BaseGroup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseGroupPlaybackControls"](animations));
        });
    });
}
function hasOpacity(target, key) {
    var _a;
    return (_a = target === null || target === void 0 ? void 0 : target[key]) === null || _a === void 0 ? void 0 : _a.keyframes.opacity;
}
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/view/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ViewTransitionBuilder",
    ()=>ViewTransitionBuilder,
    "view",
    ()=>view
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-utils/dist/es/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-utils/dist/es/noop.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$start$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/view/start.mjs [app-ssr] (ecmascript)");
;
;
/**
 * TODO:
 * - Create view transition on next tick
 * - Replace animations with Motion animations
 * - Return GroupAnimation on next tick
 */ class ViewTransitionBuilder {
    constructor(update, options = {}){
        this.currentTarget = "root";
        this.targets = new Map();
        this.notifyReady = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"];
        this.readyPromise = new Promise((resolve)=>{
            this.notifyReady = resolve;
        });
        queueMicrotask(()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$start$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startViewAnimation"])(update, options, this.targets).then((animation)=>this.notifyReady(animation));
        });
    }
    get(selector) {
        this.currentTarget = selector;
        return this;
    }
    layout(keyframes, options) {
        this.updateTarget("layout", keyframes, options);
        return this;
    }
    new(keyframes, options) {
        this.updateTarget("new", keyframes, options);
        return this;
    }
    old(keyframes, options) {
        this.updateTarget("old", keyframes, options);
        return this;
    }
    enter(keyframes, options) {
        this.updateTarget("enter", keyframes, options);
        return this;
    }
    exit(keyframes, options) {
        this.updateTarget("exit", keyframes, options);
        return this;
    }
    crossfade(options) {
        this.updateTarget("enter", {
            opacity: 1
        }, options);
        this.updateTarget("exit", {
            opacity: 0
        }, options);
        return this;
    }
    updateTarget(target, keyframes, options = {}) {
        const { currentTarget, targets } = this;
        if (!targets.has(currentTarget)) {
            targets.set(currentTarget, {});
        }
        const targetData = targets.get(currentTarget);
        targetData[target] = {
            keyframes,
            options
        };
    }
    then(resolve, reject) {
        return this.readyPromise.then(resolve, reject);
    }
}
function view(update, defaultOptions = {}) {
    return new ViewTransitionBuilder(update, defaultOptions);
}
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setDragLock",
    ()=>setDragLock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs [app-ssr] (ecmascript)");
;
function setDragLock(axis) {
    if (axis === "x" || axis === "y") {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDragging"][axis]) {
            return null;
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDragging"][axis] = true;
            return ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDragging"][axis] = false;
            };
        }
    } else {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDragging"].x || __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDragging"].y) {
            return null;
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDragging"].x = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDragging"].y = true;
            return ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDragging"].x = __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDragging"].y = false;
            };
        }
    }
}
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/index.mjs [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$controls$2f$Group$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/animation/controls/Group.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$value$2d$transition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$calc$2d$duration$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/animation/generators/utils/calc-duration.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$create$2d$generator$2d$easing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$is$2d$generator$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$NativeAnimationControls$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/animation/waapi/NativeAnimationControls.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$attach$2d$timeline$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/animation/waapi/utils/attach-timeline.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$easing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/animation/waapi/utils/easing.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$linear$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/animation/waapi/utils/linear.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$hover$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/gestures/hover.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/gestures/press/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/utils/is-bezier-definition.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$flags$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/utils/supports/flags.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$linear$2d$easing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/utils/supports/linear-easing.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$scroll$2d$timeline$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/view/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$set$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$is$2d$node$2d$or$2d$child$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$is$2d$primary$2d$pointer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/motion-dom/dist/es/gestures/utils/is-primary-pointer.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/TEST ANIMATION LANDING/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeClasses",
    ()=>mergeClasses,
    "toKebabCase",
    ()=>toKebabCase
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/TEST ANIMATION LANDING/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/TEST ANIMATION LANDING/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Icon
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/TEST ANIMATION LANDING/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toKebabCase"])(iconName)}`, className),
            ...props
        }));
    Component.displayName = `${iconName}`;
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/TEST ANIMATION LANDING/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>X
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("X", [
    [
        "path",
        {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }
    ],
    [
        "path",
        {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }
    ]
]);
;
 //# sourceMappingURL=x.js.map
}),
"[project]/TEST ANIMATION LANDING/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "X",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$TEST__ANIMATION__LANDING$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/TEST ANIMATION LANDING/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=39b6b_4142fdf9._.js.map