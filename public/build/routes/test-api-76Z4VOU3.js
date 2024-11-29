import {
  useLoaderData
} from "/build/_shared/chunk-IHE4W47Y.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-O5PSYTNO.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/test-api.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/test-api.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/test-api.tsx"
  );
  import.meta.hot.lastModified = "1732681692797.3796";
}
function TestApi() {
  _s();
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold mb-4", children: "API Test Results" }, void 0, false, {
      fileName: "app/routes/test-api.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this),
    data.success ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold mb-2", children: [
        "Response Status: ",
        data.responseStatus
      ] }, void 0, true, {
        fileName: "app/routes/test-api.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold mb-2", children: "Response Headers:" }, void 0, false, {
        fileName: "app/routes/test-api.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", { className: "bg-gray-100 p-4 rounded mb-4", children: JSON.stringify(data.responseHeaders, null, 2) }, void 0, false, {
        fileName: "app/routes/test-api.tsx",
        lineNumber: 75,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold mb-2", children: "Data:" }, void 0, false, {
        fileName: "app/routes/test-api.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", { className: "bg-gray-100 p-4 rounded", children: JSON.stringify(data.data, null, 2) }, void 0, false, {
        fileName: "app/routes/test-api.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/test-api.tsx",
      lineNumber: 72,
      columnNumber: 23
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-red-600", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold mb-2", children: "Error:" }, void 0, false, {
        fileName: "app/routes/test-api.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", { className: "bg-red-50 p-4 rounded mb-4", children: data.error }, void 0, false, {
        fileName: "app/routes/test-api.tsx",
        lineNumber: 84,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold mb-2", children: "Stack Trace:" }, void 0, false, {
        fileName: "app/routes/test-api.tsx",
        lineNumber: 87,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", { className: "bg-red-50 p-4 rounded text-sm", children: data.errorStack }, void 0, false, {
        fileName: "app/routes/test-api.tsx",
        lineNumber: 88,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/test-api.tsx",
      lineNumber: 82,
      columnNumber: 15
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/test-api.tsx",
    lineNumber: 69,
    columnNumber: 10
  }, this);
}
_s(TestApi, "5thj+e1edPyRpKif1JmVRC6KArE=", false, function() {
  return [useLoaderData];
});
_c = TestApi;
var _c;
$RefreshReg$(_c, "TestApi");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  TestApi as default
};
//# sourceMappingURL=/build/routes/test-api-76Z4VOU3.js.map
