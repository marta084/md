import {
  Navigation
} from "/build/_shared/chunk-T3ZCL7F3.js";
import {
  Armchair,
  BookmarkPlus,
  CircleDot,
  Package,
  Sofa,
  Table2
} from "/build/_shared/chunk-DJRN5KMT.js";
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

// app/routes/_index.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1732616142737.7747";
}
var categories = [{
  name: "St\xFChle",
  icon: CircleDot,
  href: "/kategorien/stuehle",
  description: "Ergonomische und stilvolle St\xFChle"
}, {
  name: "Tische",
  icon: Table2,
  href: "/kategorien/tische",
  description: "Hochwertige Tische"
}, {
  name: "Sessel",
  icon: Armchair,
  href: "/kategorien/sessel",
  description: "Komfortable Sessel"
}, {
  name: "Schr\xE4nke",
  icon: BookmarkPlus,
  href: "/kategorien/schraenke",
  description: "Stilvolle Aufbewahrung"
}, {
  name: "Akustik",
  icon: Sofa,
  href: "/kategorien/akustik",
  description: "Optimale Raumakustik"
}, {
  name: "Zubeh\xF6r",
  icon: Package,
  href: "/kategorien/zubehoer",
  description: "Erg\xE4nzende Accessoires"
}];
var meta = () => {
  return [{
    title: "Premium M\xF6bel Store"
  }, {
    name: "description",
    content: "Willkommen in unserem Premium M\xF6bel Store"
  }];
};
function Index() {
  _s();
  const {
    leftColumn,
    middleColumn,
    rightColumn
  } = useLoaderData();
  const renderCard = (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.link, className: "group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300 w-full h-full block", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: item.image, alt: item.title, className: "absolute inset-0 w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 151,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 152,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute bottom-0 left-0 p-4 text-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-bold mb-1", children: item.title }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 154,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-white/90 line-clamp-2", children: item.description }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 155,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 153,
      columnNumber: 7
    }, this)
  ] }, item.id, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 150,
    columnNumber: 30
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigation, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 159,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "desktop:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-2xl px-4 py-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold text-gray-900 mb-6", children: "Shop by Category" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 164,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 gap-4", children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: category.href, className: "flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(category.icon, { className: "h-8 w-8 text-gray-900 mb-3" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 167,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-medium text-gray-900 text-center", children: category.name }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 168,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-xs text-gray-500 text-center", children: category.description }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 169,
          columnNumber: 17
        }, this)
      ] }, category.name, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 166,
        columnNumber: 41
      }, this)) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 165,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 163,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 162,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden desktop:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 h-auto lg:h-[800px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "md:col-span-1 lg:col-span-3 grid grid-rows-1 md:grid-rows-4 gap-4 h-[400px] md:h-[600px] lg:h-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "row-span-1 h-full md:h-auto", children: renderCard(leftColumn[0]) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 182,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden md:block row-span-2", children: renderCard(leftColumn[1]) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 186,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden md:block row-span-1", children: renderCard(leftColumn[2]) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 190,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 180,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "md:col-span-1 lg:col-span-6 grid grid-rows-2 md:grid-rows-8 gap-4 h-[600px] md:h-[600px] lg:h-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "row-span-1 md:row-span-3", children: renderCard(middleColumn[0]) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 198,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "row-span-1 md:row-span-3 grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full", children: renderCard(middleColumn[1]) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 203,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full", children: renderCard(middleColumn[2]) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 206,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 202,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden md:block md:row-span-2", children: renderCard(middleColumn[3]) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 211,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 196,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "md:col-span-2 lg:col-span-3 grid grid-cols-2 md:grid-rows-4 gap-4 h-auto lg:h-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-1 md:col-span-2 md:row-span-1 h-[200px] md:h-auto", children: renderCard(rightColumn[0]) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 219,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-1 md:col-span-2 md:row-span-1 h-[200px] md:h-auto", children: renderCard(rightColumn[1]) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 222,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-2 md:row-span-2 h-[250px] md:h-auto", children: renderCard(rightColumn[2]) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 225,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 217,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "md:hidden space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[250px]", children: renderCard(leftColumn[1]) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 232,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[200px]", children: renderCard(leftColumn[2]) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 235,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[200px]", children: renderCard(middleColumn[3]) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 238,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 231,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 178,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 177,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 176,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 158,
    columnNumber: 10
  }, this);
}
_s(Index, "mj7RQKgNhR+xshVH9Gfiv5dv9Xc=", false, function() {
  return [useLoaderData];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-K7M6YQLH.js.map
