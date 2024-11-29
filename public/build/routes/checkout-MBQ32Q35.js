import {
  ArrowLeft,
  useCart
} from "/build/_shared/chunk-DJRN5KMT.js";
import {
  Form,
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

// app/routes/checkout.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/checkout.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/checkout.tsx"
  );
  import.meta.hot.lastModified = "1732702959327.2583";
}
function Checkout() {
  _s2();
  var _s = $RefreshSig$();
  const {
    items,
    total,
    removeItem,
    updateQuantity
  } = useCart();
  const {
    countries
  } = useLoaderData();
  const subtotal = total;
  const shipping = 10;
  const tax = total * 0.1;
  const finalTotal = subtotal + shipping + tax;
  if (!items || items.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-7xl px-4 pt-16 pb-24 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl", children: "Your cart is empty" }, void 0, false, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 62,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4 text-gray-500", children: "Add some items to your cart to proceed with checkout." }, void 0, false, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 63,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700", children: "Continue Shopping" }, void 0, false, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 65,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 64,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/checkout.tsx",
      lineNumber: 61,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/checkout.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/checkout.tsx",
      lineNumber: 59,
      columnNumber: 12
    }, this);
  }
  function OrderSummary() {
    _s();
    const {
      items: items2,
      total: total2
    } = useCart();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10 lg:mt-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-medium text-gray-900", children: "Order summary" }, void 0, false, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 bg-white border border-gray-200 rounded-lg shadow-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "sr-only", children: "Items in your cart" }, void 0, false, {
          fileName: "app/routes/checkout.tsx",
          lineNumber: 83,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { role: "list", className: "divide-y divide-gray-200", children: items2.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex py-6 px-4 sm:px-6", children: [
          item.image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: item.image, alt: item.name, className: "w-20 h-20 rounded-md object-center object-cover" }, void 0, false, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 87,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 86,
            columnNumber: 32
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-6 flex-1 flex flex-col", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "font-medium text-gray-700 hover:text-gray-800", children: item.name }, void 0, false, {
                  fileName: "app/routes/checkout.tsx",
                  lineNumber: 93,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/checkout.tsx",
                  lineNumber: 92,
                  columnNumber: 23
                }, this),
                item.selectedOptions && Object.entries(item.selectedOptions).length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 text-sm text-gray-500", children: Object.entries(item.selectedOptions).map(([key, value]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-medium capitalize", children: [
                    key,
                    ":"
                  ] }, void 0, true, {
                    fileName: "app/routes/checkout.tsx",
                    lineNumber: 100,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: value }, void 0, false, {
                    fileName: "app/routes/checkout.tsx",
                    lineNumber: 101,
                    columnNumber: 31
                  }, this)
                ] }, key, true, {
                  fileName: "app/routes/checkout.tsx",
                  lineNumber: 99,
                  columnNumber: 87
                }, this)) }, void 0, false, {
                  fileName: "app/routes/checkout.tsx",
                  lineNumber: 98,
                  columnNumber: 99
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 91,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4 flex-shrink-0 flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-900", children: [
                "$",
                item.price * item.quantity
              ] }, void 0, true, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 106,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 105,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 90,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 pt-2 flex items-end justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm font-medium text-gray-500", children: [
              "Qty ",
              item.quantity
            ] }, void 0, true, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 110,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 109,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 89,
            columnNumber: 17
          }, this)
        ] }, item.id, true, {
          fileName: "app/routes/checkout.tsx",
          lineNumber: 85,
          columnNumber: 32
        }, this)) }, void 0, false, {
          fileName: "app/routes/checkout.tsx",
          lineNumber: 84,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { className: "border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "text-sm", children: "Subtotal" }, void 0, false, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 118,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "text-sm font-medium text-gray-900", children: [
              "$",
              subtotal.toFixed(2)
            ] }, void 0, true, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 119,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 117,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "text-sm", children: "Shipping" }, void 0, false, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 122,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "text-sm font-medium text-gray-900", children: [
              "$",
              shipping.toFixed(2)
            ] }, void 0, true, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 123,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 121,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between border-t border-gray-200 pt-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "text-base font-medium", children: "Total" }, void 0, false, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 126,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "text-base font-medium text-gray-900", children: [
              "$",
              finalTotal.toFixed(2)
            ] }, void 0, true, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 127,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 125,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/checkout.tsx",
          lineNumber: 116,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/checkout.tsx",
      lineNumber: 79,
      columnNumber: 12
    }, this);
  }
  _s(OrderSummary, "sulvaxeD6t5bDn/5jZPkkQ/WB0A=", false, function() {
    return [useCart];
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "inline-flex items-center text-sm font-medium text-gray-700 hover:text-indigo-600", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { className: "mr-2 h-4 w-4" }, void 0, false, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 141,
        columnNumber: 13
      }, this),
      "Back to shopping"
    ] }, void 0, true, {
      fileName: "app/routes/checkout.tsx",
      lineNumber: 140,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/checkout.tsx",
      lineNumber: 139,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 gap-x-16 lg:grid-cols-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:col-span-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrderSummary, {}, void 0, false, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 149,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 148,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10 lg:col-span-3 lg:mt-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-medium text-gray-900", children: "Contact information" }, void 0, false, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 157,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700", children: "Email address" }, void 0, false, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 159,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", id: "email", name: "email", autoComplete: "email", required: true, className: "block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base py-2 px-3" }, void 0, false, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 163,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 162,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 158,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/checkout.tsx",
          lineNumber: 156,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-medium text-gray-900", children: "Shipping information" }, void 0, false, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 169,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "firstName", className: "block text-sm font-medium text-gray-700", children: "First name" }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 172,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "firstName", name: "firstName", autoComplete: "given-name", required: true, className: "block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base py-2 px-3" }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 176,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 175,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 171,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "lastName", className: "block text-sm font-medium text-gray-700", children: "Last name" }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 181,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "lastName", name: "lastName", autoComplete: "family-name", required: true, className: "block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base py-2 px-3" }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 185,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 184,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 180,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:col-span-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "company", className: "block text-sm font-medium text-gray-700", children: "Company (optional)" }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 190,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "company", name: "company", className: "block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base py-2 px-3" }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 194,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 193,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 189,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:col-span-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "address", className: "block text-sm font-medium text-gray-700", children: "Address" }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 199,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "address", name: "address", autoComplete: "street-address", required: true, className: "block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base py-2 px-3" }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 203,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 202,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 198,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:col-span-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "apartment", className: "block text-sm font-medium text-gray-700", children: "Apartment, suite, etc." }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 208,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "apartment", name: "apartment", className: "block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base py-2 px-3" }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 212,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 211,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 207,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "city", className: "block text-sm font-medium text-gray-700", children: "City" }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 217,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "city", name: "city", autoComplete: "address-level2", required: true, className: "block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base py-2 px-3" }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 221,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 220,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 216,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "country", className: "block text-sm font-medium text-gray-700", children: "Country" }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 226,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { id: "country", name: "country", autoComplete: "country-name", required: true, className: "block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base py-2 px-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Select a country" }, void 0, false, {
                  fileName: "app/routes/checkout.tsx",
                  lineNumber: 231,
                  columnNumber: 27
                }, this),
                countries.map((country) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: country.code, children: country.name }, country.code, false, {
                  fileName: "app/routes/checkout.tsx",
                  lineNumber: 232,
                  columnNumber: 53
                }, this))
              ] }, void 0, true, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 230,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 229,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 225,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "state", className: "block text-sm font-medium text-gray-700", children: "State / Province" }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 240,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "state", name: "state", autoComplete: "address-level1", required: true, className: "block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base py-2 px-3" }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 244,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 243,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 239,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "postal-code", className: "block text-sm font-medium text-gray-700", children: "ZIP / Postal code" }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 249,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "postal-code", name: "postal-code", autoComplete: "postal-code", required: true, className: "block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base py-2 px-3" }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 253,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 252,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 248,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:col-span-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "phone", className: "block text-sm font-medium text-gray-700", children: "Phone" }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 258,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "tel", id: "phone", name: "phone", autoComplete: "tel", required: true, className: "block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base py-2 px-3" }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 262,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 261,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 257,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 170,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/checkout.tsx",
          lineNumber: 168,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2", children: "Complete order" }, void 0, false, {
          fileName: "app/routes/checkout.tsx",
          lineNumber: 269,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/checkout.tsx",
          lineNumber: 268,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 155,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 154,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 153,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/checkout.tsx",
      lineNumber: 146,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/checkout.tsx",
    lineNumber: 137,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/checkout.tsx",
    lineNumber: 136,
    columnNumber: 10
  }, this);
}
_s2(Checkout, "YYDLjyr8ZFgCU716qNjh2wCA25Y=", false, function() {
  return [useCart, useLoaderData];
});
_c = Checkout;
var _c;
$RefreshReg$(_c, "Checkout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Checkout as default
};
//# sourceMappingURL=/build/routes/checkout-MBQ32Q35.js.map
