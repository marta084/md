import {
  Navigation
} from "/build/_shared/chunk-T3ZCL7F3.js";
import {
  CartProvider,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube
} from "/build/_shared/chunk-DJRN5KMT.js";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation
} from "/build/_shared/chunk-IHE4W47Y.js";
import "/build/_shared/chunk-U4FRFQSK.js";
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

// css-bundle-plugin-ns:@remix-run/css-bundle
var cssBundleHref = void 0;

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-ZAWBWTOM.css";

// app/components/Footer.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Footer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Footer.tsx"
  );
  import.meta.hot.lastModified = "1732705457909.4749";
}
var footerLinks = {
  shop: [{
    name: "St\xFChle",
    href: "/kategorien/stuehle"
  }, {
    name: "Tische",
    href: "/kategorien/tische"
  }, {
    name: "Sessel",
    href: "/kategorien/sessel"
  }, {
    name: "Schr\xE4nke",
    href: "/kategorien/schraenke"
  }, {
    name: "Akustik",
    href: "/kategorien/akustik"
  }, {
    name: "Zubeh\xF6r",
    href: "/kategorien/zubehoer"
  }],
  company: [{
    name: "\xDCber uns",
    href: "/ueber-uns"
  }, {
    name: "Karriere",
    href: "/karriere"
  }, {
    name: "Filialen",
    href: "/filialen"
  }, {
    name: "Unser Blog",
    href: "/blog"
  }],
  support: [{
    name: "Kontakt",
    href: "/kontakt"
  }, {
    name: "FAQ",
    href: "/faq"
  }, {
    name: "Versand",
    href: "/versand"
  }, {
    name: "Retouren",
    href: "/retouren"
  }, {
    name: "Garantie",
    href: "/garantie"
  }],
  legal: [{
    name: "Impressum",
    href: "/impressum"
  }, {
    name: "Datenschutz",
    href: "/datenschutz"
  }, {
    name: "AGB",
    href: "/agb"
  }, {
    name: "Cookie-Richtlinie",
    href: "/cookies"
  }]
};
var socialLinks = [{
  name: "Facebook",
  icon: Facebook,
  href: "https://facebook.com"
}, {
  name: "Instagram",
  icon: Instagram,
  href: "https://instagram.com"
}, {
  name: "Twitter",
  icon: Twitter,
  href: "https://twitter.com"
}, {
  name: "YouTube",
  icon: Youtube,
  href: "https://youtube.com"
}];
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", { className: "bg-gray-900 text-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "inline-block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-2xl font-bold text-white", children: "M\xF6bel Store" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 110,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 109,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4 text-sm text-gray-400 max-w-md", children: "Ihr Premium-M\xF6belhaus f\xFCr hochwertige Einrichtung. Wir bieten Ihnen ausgew\xE4hlte Designerm\xF6bel aus aller Welt." }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 112,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 space-y-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Phone, { className: "h-5 w-5 mr-3 text-blue-500" }, void 0, false, {
              fileName: "app/components/Footer.tsx",
              lineNumber: 118,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "+49 30 123456789" }, void 0, false, {
              fileName: "app/components/Footer.tsx",
              lineNumber: 119,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 117,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "h-5 w-5 mr-3 text-blue-500" }, void 0, false, {
              fileName: "app/components/Footer.tsx",
              lineNumber: 122,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "mailto:kontakt@moebelstore.de", className: "hover:text-white", children: "kontakt@moebelstore.de" }, void 0, false, {
              fileName: "app/components/Footer.tsx",
              lineNumber: 123,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 121,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "h-5 w-5 mr-3 text-blue-500" }, void 0, false, {
              fileName: "app/components/Footer.tsx",
              lineNumber: 128,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "M\xF6belstra\xDFe 123, 10115 Berlin" }, void 0, false, {
              fileName: "app/components/Footer.tsx",
              lineNumber: 129,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 127,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 116,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 108,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-white font-semibold mb-4", children: "Shop" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 136,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "space-y-2", children: footerLinks.shop.map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: link.href, className: "text-sm hover:text-white", children: link.name }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 139,
          columnNumber: 19
        }, this) }, link.name, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 138,
          columnNumber: 45
        }, this)) }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 137,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 135,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-white font-semibold mb-4", children: "Unternehmen" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 148,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "space-y-2", children: footerLinks.company.map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: link.href, className: "text-sm hover:text-white", children: link.name }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 151,
          columnNumber: 19
        }, this) }, link.name, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 150,
          columnNumber: 48
        }, this)) }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 149,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-white font-semibold mt-8 mb-4", children: "Support" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 156,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "space-y-2", children: footerLinks.support.map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: link.href, className: "text-sm hover:text-white", children: link.name }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 159,
          columnNumber: 19
        }, this) }, link.name, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 158,
          columnNumber: 48
        }, this)) }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 157,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 147,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-white font-semibold mb-4", children: "Rechtliches" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 168,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "space-y-2", children: footerLinks.legal.map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: link.href, className: "text-sm hover:text-white", children: link.name }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 171,
          columnNumber: 19
        }, this) }, link.name, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 170,
          columnNumber: 46
        }, this)) }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 169,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-white font-semibold mt-8 mb-4", children: "Social Media" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 176,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-4", children: socialLinks.map((link) => {
          const Icon = link.icon;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: link.href, className: "text-gray-400 hover:text-white", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "h-6 w-6" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 181,
            columnNumber: 21
          }, this) }, link.name, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 180,
            columnNumber: 22
          }, this);
        }) }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 177,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 167,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 106,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-12 border-t border-gray-800 pt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-400 text-center", children: [
      (/* @__PURE__ */ new Date()).getFullYear(),
      " M\xF6bel Store. Alle Rechte vorbehalten."
    ] }, void 0, true, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 189,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 188,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 105,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 104,
    columnNumber: 10
  }, this);
}
_c = Footer;
var _c;
$RefreshReg$(_c, "Footer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: tailwind_default
}, ...cssBundleHref ? [{
  rel: "stylesheet",
  href: cssBundleHref
}] : []];
function App() {
  _s();
  const location = useLocation();
  const isCheckoutPage = location.pathname === "/checkout";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", className: "h-full bg-gray-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { className: "h-full flex flex-col", children: [
      !isCheckoutPage && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Navigation, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { className: `flex-1 ${!isCheckoutPage ? "pt-16" : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      !isCheckoutPage && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Footer, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_s(App, "pkHmaVRPskBaU4tMJuJJpV42k1I=", false, function() {
  return [useLocation];
});
_c2 = App;
function AppWithProviders() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CartProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(App, {}, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 63,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 62,
    columnNumber: 10
  }, this);
}
_c22 = AppWithProviders;
var _c2;
var _c22;
$RefreshReg$(_c2, "App");
$RefreshReg$(_c22, "AppWithProviders");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AppWithProviders as default,
  links
};
//# sourceMappingURL=/build/root-POEMVPVJ.js.map
