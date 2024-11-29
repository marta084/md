import {
  Link,
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

// app/routes/kategorien.$slug.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/kategorien.$slug.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/kategorien.$slug.tsx"
  );
  import.meta.hot.lastModified = "1732709207627.2612";
}
var meta = ({
  data
}) => {
  if (!data) {
    return [{
      title: "Kategorie nicht gefunden | M\xF6bel Store"
    }, {
      name: "description",
      content: "Die gesuchte Kategorie wurde nicht gefunden."
    }];
  }
  return [{
    title: `${data.category.Kategoriename} | M\xF6bel Store`
  }, {
    name: "description",
    content: data.category.Kategoriebeschreibung
  }];
};
function CategoryPage() {
  _s();
  const {
    category,
    products
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gradient-to-b from-gray-50 to-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight", children: category.Kategoriename }, void 0, false, {
        fileName: "app/routes/kategorien.$slug.tsx",
        lineNumber: 102,
        columnNumber: 11
      }, this),
      category.Kategoriebeschreibung && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed", children: category.Kategoriebeschreibung }, void 0, false, {
        fileName: "app/routes/kategorien.$slug.tsx",
        lineNumber: 105,
        columnNumber: 46
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-40 h-1 bg-blue-600 mx-auto mt-8 rounded-full" }, void 0, false, {
        fileName: "app/routes/kategorien.$slug.tsx",
        lineNumber: 108,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/kategorien.$slug.tsx",
      lineNumber: 101,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 gap-y-12 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: products?.filter((item) => item?.Produkte_id).map((item) => {
      if (!item?.Produkte_id)
        return null;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/product/${item.Produkte_id.Slug || "unnamed-product"}`, className: "group relative flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "aspect-w-1 aspect-h-1 w-full bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 relative", children: item.Produkte_id.Medien?.[0]?.Medien_id?.Bild?.id ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: `https://directus.meineapp.uk/assets/${item.Produkte_id.Medien[0].Medien_id.Bild.id}`, alt: item.Produkte_id.Produkttitel || "Produktbild", className: "h-full w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300" }, void 0, false, {
          fileName: "app/routes/kategorien.$slug.tsx",
          lineNumber: 118,
          columnNumber: 72
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full w-full flex items-center justify-center bg-gray-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-16 h-16 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" }, void 0, false, {
          fileName: "app/routes/kategorien.$slug.tsx",
          lineNumber: 120,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/kategorien.$slug.tsx",
          lineNumber: 119,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/kategorien.$slug.tsx",
          lineNumber: 118,
          columnNumber: 346
        }, this) }, void 0, false, {
          fileName: "app/routes/kategorien.$slug.tsx",
          lineNumber: 117,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200", children: item.Produkte_id.Produkttitel || "Unbenanntes Produkt" }, void 0, false, {
            fileName: "app/routes/kategorien.$slug.tsx",
            lineNumber: 127,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 flex items-center justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl font-bold text-blue-600", children: new Intl.NumberFormat("de-DE", {
              style: "currency",
              currency: "EUR"
            }).format(item.Produkte_id.Preis || 0) }, void 0, false, {
              fileName: "app/routes/kategorien.$slug.tsx",
              lineNumber: 132,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200", children: "Details" }, void 0, false, {
              fileName: "app/routes/kategorien.$slug.tsx",
              lineNumber: 138,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/kategorien.$slug.tsx",
            lineNumber: 131,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/kategorien.$slug.tsx",
          lineNumber: 126,
          columnNumber: 17
        }, this)
      ] }, item.Produkte_id.Produkttitel || "unnamed-product", true, {
        fileName: "app/routes/kategorien.$slug.tsx",
        lineNumber: 115,
        columnNumber: 18
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/kategorien.$slug.tsx",
      lineNumber: 112,
      columnNumber: 9
    }, this),
    (!products || products.length === 0) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center py-16 bg-gray-50 rounded-2xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "mx-auto h-12 w-12 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" }, void 0, false, {
        fileName: "app/routes/kategorien.$slug.tsx",
        lineNumber: 150,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/kategorien.$slug.tsx",
        lineNumber: 149,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mt-4 text-lg font-medium text-gray-900", children: "Keine Produkte gefunden" }, void 0, false, {
        fileName: "app/routes/kategorien.$slug.tsx",
        lineNumber: 152,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-gray-600", children: "In dieser Kategorie sind derzeit keine Produkte verf\xFCgbar." }, void 0, false, {
        fileName: "app/routes/kategorien.$slug.tsx",
        lineNumber: 153,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/kategorien.$slug.tsx",
      lineNumber: 148,
      columnNumber: 50
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/kategorien.$slug.tsx",
    lineNumber: 99,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/kategorien.$slug.tsx",
    lineNumber: 98,
    columnNumber: 10
  }, this);
}
_s(CategoryPage, "QuBmgysSdpdLohUbX8OGorb7E3g=", false, function() {
  return [useLoaderData];
});
_c = CategoryPage;
var _c;
$RefreshReg$(_c, "CategoryPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  CategoryPage as default,
  meta
};
//# sourceMappingURL=/build/routes/kategorien.$slug-C2XM6UJ7.js.map
