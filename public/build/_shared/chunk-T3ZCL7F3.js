import {
  Armchair,
  BookmarkPlus,
  CircleDot,
  Menu,
  Minus,
  Package,
  Phone,
  Plus,
  ShoppingCart,
  Sofa,
  Table2,
  X,
  useCart,
  useHydrated
} from "/build/_shared/chunk-DJRN5KMT.js";
import {
  Link
} from "/build/_shared/chunk-IHE4W47Y.js";
import {
  require_react_dom
} from "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-O5PSYTNO.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/Navigation.tsx
var import_react37 = __toESM(require_react(), 1);

// app/utils/formatPrice.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/formatPrice.ts"
  );
  import.meta.hot.lastModified = "1732594629772.436";
}
function formatPrice(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(amount);
}

// app/components/CartSidebar.tsx
var import_react33 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/env.js
var i = Object.defineProperty;
var d = (t9, e5, n10) => e5 in t9 ? i(t9, e5, { enumerable: true, configurable: true, writable: true, value: n10 }) : t9[e5] = n10;
var r = (t9, e5, n10) => (d(t9, typeof e5 != "symbol" ? e5 + "" : e5, n10), n10);
var o = class {
  constructor() {
    r(this, "current", this.detect());
    r(this, "handoffState", "pending");
    r(this, "currentId", 0);
  }
  set(e5) {
    this.current !== e5 && (this.handoffState = "pending", this.currentId = 0, this.current = e5);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
var s = new o();

// node_modules/@headlessui/react/dist/utils/owner.js
function u(r11) {
  return s.isServer ? null : r11 instanceof Node ? r11.ownerDocument : r11 != null && r11.hasOwnProperty("current") && r11.current instanceof Node ? r11.current.ownerDocument : document;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
var import_react = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/micro-task.js
function t(e5) {
  typeof queueMicrotask == "function" ? queueMicrotask(e5) : Promise.resolve().then(e5).catch((o9) => setTimeout(() => {
    throw o9;
  }));
}

// node_modules/@headlessui/react/dist/utils/disposables.js
function o2() {
  let n10 = [], r11 = { addEventListener(e5, t9, s9, a14) {
    return e5.addEventListener(t9, s9, a14), r11.add(() => e5.removeEventListener(t9, s9, a14));
  }, requestAnimationFrame(...e5) {
    let t9 = requestAnimationFrame(...e5);
    return r11.add(() => cancelAnimationFrame(t9));
  }, nextFrame(...e5) {
    return r11.requestAnimationFrame(() => r11.requestAnimationFrame(...e5));
  }, setTimeout(...e5) {
    let t9 = setTimeout(...e5);
    return r11.add(() => clearTimeout(t9));
  }, microTask(...e5) {
    let t9 = { current: true };
    return t(() => {
      t9.current && e5[0]();
    }), r11.add(() => {
      t9.current = false;
    });
  }, style(e5, t9, s9) {
    let a14 = e5.style.getPropertyValue(t9);
    return Object.assign(e5.style, { [t9]: s9 }), this.add(() => {
      Object.assign(e5.style, { [t9]: a14 });
    });
  }, group(e5) {
    let t9 = o2();
    return e5(t9), this.add(() => t9.dispose());
  }, add(e5) {
    return n10.includes(e5) || n10.push(e5), () => {
      let t9 = n10.indexOf(e5);
      if (t9 >= 0)
        for (let s9 of n10.splice(t9, 1))
          s9();
    };
  }, dispose() {
    for (let e5 of n10.splice(0))
      e5();
  } };
  return r11;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
function p() {
  let [e5] = (0, import_react.useState)(o2);
  return (0, import_react.useEffect)(() => () => e5.dispose(), [e5]), e5;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var import_react4 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var import_react3 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var import_react2 = __toESM(require_react(), 1);
var n = (e5, t9) => {
  s.isServer ? (0, import_react2.useEffect)(e5, t9) : (0, import_react2.useLayoutEffect)(e5, t9);
};

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
function s3(e5) {
  let r11 = (0, import_react3.useRef)(e5);
  return n(() => {
    r11.current = e5;
  }, [e5]), r11;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var o4 = function(t9) {
  let e5 = s3(t9);
  return import_react4.default.useCallback((...r11) => e5.current(...r11), [e5]);
};

// node_modules/@headlessui/react/dist/internal/disabled.js
var import_react5 = __toESM(require_react(), 1);
var e = (0, import_react5.createContext)(void 0);
function a2() {
  return (0, import_react5.useContext)(e);
}

// node_modules/@headlessui/react/dist/utils/render.js
var import_react6 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/class-names.js
function t3(...r11) {
  return Array.from(new Set(r11.flatMap((n10) => typeof n10 == "string" ? n10.split(" ") : []))).filter(Boolean).join(" ");
}

// node_modules/@headlessui/react/dist/utils/match.js
function u2(r11, n10, ...a14) {
  if (r11 in n10) {
    let e5 = n10[r11];
    return typeof e5 == "function" ? e5(...a14) : e5;
  }
  let t9 = new Error(`Tried to handle "${r11}" but there is no handler defined. Only defined handlers are: ${Object.keys(n10).map((e5) => `"${e5}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t9, u2), t9;
}

// node_modules/@headlessui/react/dist/utils/render.js
var O = ((a14) => (a14[a14.None = 0] = "None", a14[a14.RenderStrategy = 1] = "RenderStrategy", a14[a14.Static = 2] = "Static", a14))(O || {});
var A = ((e5) => (e5[e5.Unmount = 0] = "Unmount", e5[e5.Hidden = 1] = "Hidden", e5))(A || {});
function L() {
  let n10 = U();
  return (0, import_react6.useCallback)((r11) => C({ mergeRefs: n10, ...r11 }), [n10]);
}
function C({ ourProps: n10, theirProps: r11, slot: e5, defaultTag: a14, features: s9, visible: t9 = true, name: l6, mergeRefs: i9 }) {
  i9 = i9 != null ? i9 : $;
  let o9 = P(r11, n10);
  if (t9)
    return F(o9, e5, a14, l6, i9);
  let y5 = s9 != null ? s9 : 0;
  if (y5 & 2) {
    let { static: f12 = false, ...u9 } = o9;
    if (f12)
      return F(u9, e5, a14, l6, i9);
  }
  if (y5 & 1) {
    let { unmount: f12 = true, ...u9 } = o9;
    return u2(f12 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return F({ ...u9, hidden: true, style: { display: "none" } }, e5, a14, l6, i9);
    } });
  }
  return F(o9, e5, a14, l6, i9);
}
function F(n10, r11 = {}, e5, a14, s9) {
  let { as: t9 = e5, children: l6, refName: i9 = "ref", ...o9 } = h(n10, ["unmount", "static"]), y5 = n10.ref !== void 0 ? { [i9]: n10.ref } : {}, f12 = typeof l6 == "function" ? l6(r11) : l6;
  "className" in o9 && o9.className && typeof o9.className == "function" && (o9.className = o9.className(r11)), o9["aria-labelledby"] && o9["aria-labelledby"] === o9.id && (o9["aria-labelledby"] = void 0);
  let u9 = {};
  if (r11) {
    let d8 = false, p4 = [];
    for (let [c10, T7] of Object.entries(r11))
      typeof T7 == "boolean" && (d8 = true), T7 === true && p4.push(c10.replace(/([A-Z])/g, (g2) => `-${g2.toLowerCase()}`));
    if (d8) {
      u9["data-headlessui-state"] = p4.join(" ");
      for (let c10 of p4)
        u9[`data-${c10}`] = "";
    }
  }
  if (t9 === import_react6.Fragment && (Object.keys(m(o9)).length > 0 || Object.keys(m(u9)).length > 0))
    if (!(0, import_react6.isValidElement)(f12) || Array.isArray(f12) && f12.length > 1) {
      if (Object.keys(m(o9)).length > 0)
        throw new Error(['Passing props on "Fragment"!', "", `The current component <${a14} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(m(o9)).concat(Object.keys(m(u9))).map((d8) => `  - ${d8}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d8) => `  - ${d8}`).join(`
`)].join(`
`));
    } else {
      let d8 = f12.props, p4 = d8 == null ? void 0 : d8.className, c10 = typeof p4 == "function" ? (...R5) => t3(p4(...R5), o9.className) : t3(p4, o9.className), T7 = c10 ? { className: c10 } : {}, g2 = P(f12.props, m(h(o9, ["ref"])));
      for (let R5 in u9)
        R5 in g2 && delete u9[R5];
      return (0, import_react6.cloneElement)(f12, Object.assign({}, g2, u9, y5, { ref: s9(H(f12), y5.ref) }, T7));
    }
  return (0, import_react6.createElement)(t9, Object.assign({}, h(o9, ["ref"]), t9 !== import_react6.Fragment && y5, t9 !== import_react6.Fragment && u9), f12);
}
function U() {
  let n10 = (0, import_react6.useRef)([]), r11 = (0, import_react6.useCallback)((e5) => {
    for (let a14 of n10.current)
      a14 != null && (typeof a14 == "function" ? a14(e5) : a14.current = e5);
  }, []);
  return (...e5) => {
    if (!e5.every((a14) => a14 == null))
      return n10.current = e5, r11;
  };
}
function $(...n10) {
  return n10.every((r11) => r11 == null) ? void 0 : (r11) => {
    for (let e5 of n10)
      e5 != null && (typeof e5 == "function" ? e5(r11) : e5.current = r11);
  };
}
function P(...n10) {
  var a14;
  if (n10.length === 0)
    return {};
  if (n10.length === 1)
    return n10[0];
  let r11 = {}, e5 = {};
  for (let s9 of n10)
    for (let t9 in s9)
      t9.startsWith("on") && typeof s9[t9] == "function" ? ((a14 = e5[t9]) != null || (e5[t9] = []), e5[t9].push(s9[t9])) : r11[t9] = s9[t9];
  if (r11.disabled || r11["aria-disabled"])
    for (let s9 in e5)
      /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(s9) && (e5[s9] = [(t9) => {
        var l6;
        return (l6 = t9 == null ? void 0 : t9.preventDefault) == null ? void 0 : l6.call(t9);
      }]);
  for (let s9 in e5)
    Object.assign(r11, { [s9](t9, ...l6) {
      let i9 = e5[s9];
      for (let o9 of i9) {
        if ((t9 instanceof Event || (t9 == null ? void 0 : t9.nativeEvent) instanceof Event) && t9.defaultPrevented)
          return;
        o9(t9, ...l6);
      }
    } });
  return r11;
}
function K(n10) {
  var r11;
  return Object.assign((0, import_react6.forwardRef)(n10), { displayName: (r11 = n10.displayName) != null ? r11 : n10.name });
}
function m(n10) {
  let r11 = Object.assign({}, n10);
  for (let e5 in r11)
    r11[e5] === void 0 && delete r11[e5];
  return r11;
}
function h(n10, r11 = []) {
  let e5 = Object.assign({}, n10);
  for (let a14 of r11)
    a14 in e5 && delete e5[a14];
  return e5;
}
function H(n10) {
  return import_react6.default.version.split(".")[0] >= "19" ? n10.props.ref : n10.ref;
}

// node_modules/@headlessui/react/dist/hooks/use-id.js
var import_react7 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/internal/hidden.js
var a3 = "span";
var s4 = ((e5) => (e5[e5.None = 1] = "None", e5[e5.Focusable = 2] = "Focusable", e5[e5.Hidden = 4] = "Hidden", e5))(s4 || {});
function l(t9, r11) {
  var n10;
  let { features: d8 = 1, ...e5 } = t9, o9 = { ref: r11, "aria-hidden": (d8 & 2) === 2 ? true : (n10 = e5["aria-hidden"]) != null ? n10 : void 0, hidden: (d8 & 4) === 4 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(d8 & 4) === 4 && (d8 & 2) !== 2 && { display: "none" } } };
  return L()({ ourProps: o9, theirProps: e5, slot: {}, defaultTag: a3, name: "Hidden" });
}
var f2 = K(l);

// node_modules/@headlessui/react/dist/components/description/description.js
var import_react9 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var import_react8 = __toESM(require_react(), 1);
var u3 = Symbol();
function T(t9, n10 = true) {
  return Object.assign(t9, { [u3]: n10 });
}
function y(...t9) {
  let n10 = (0, import_react8.useRef)(t9);
  (0, import_react8.useEffect)(() => {
    n10.current = t9;
  }, [t9]);
  let c10 = o4((e5) => {
    for (let o9 of n10.current)
      o9 != null && (typeof o9 == "function" ? o9(e5) : o9.current = e5);
  });
  return t9.every((e5) => e5 == null || (e5 == null ? void 0 : e5[u3])) ? void 0 : c10;
}

// node_modules/@headlessui/react/dist/components/description/description.js
"use client";
var a4 = (0, import_react9.createContext)(null);
a4.displayName = "DescriptionContext";
function f3() {
  let r11 = (0, import_react9.useContext)(a4);
  if (r11 === null) {
    let e5 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(e5, f3), e5;
  }
  return r11;
}
function w2() {
  let [r11, e5] = (0, import_react9.useState)([]);
  return [r11.length > 0 ? r11.join(" ") : void 0, (0, import_react9.useMemo)(() => function(t9) {
    let i9 = o4((n10) => (e5((s9) => [...s9, n10]), () => e5((s9) => {
      let o9 = s9.slice(), p4 = o9.indexOf(n10);
      return p4 !== -1 && o9.splice(p4, 1), o9;
    }))), l6 = (0, import_react9.useMemo)(() => ({ register: i9, slot: t9.slot, name: t9.name, props: t9.props, value: t9.value }), [i9, t9.slot, t9.name, t9.props, t9.value]);
    return import_react9.default.createElement(a4.Provider, { value: l6 }, t9.children);
  }, [e5])];
}
var S2 = "p";
function C2(r11, e5) {
  let d8 = (0, import_react7.useId)(), t9 = a2(), { id: i9 = `headlessui-description-${d8}`, ...l6 } = r11, n10 = f3(), s9 = y(e5);
  n(() => n10.register(i9), [i9, n10.register]);
  let o9 = t9 || false, p4 = (0, import_react9.useMemo)(() => ({ ...n10.slot, disabled: o9 }), [n10.slot, o9]), D2 = { ref: s9, ...n10.props, id: i9 };
  return L()({ ourProps: D2, theirProps: l6, slot: p4, defaultTag: S2, name: n10.name || "Description" });
}
var _ = K(C2);
var H2 = Object.assign(_, {});

// node_modules/@headlessui/react/dist/components/keyboard.js
var o5 = ((r11) => (r11.Space = " ", r11.Enter = "Enter", r11.Escape = "Escape", r11.Backspace = "Backspace", r11.Delete = "Delete", r11.ArrowLeft = "ArrowLeft", r11.ArrowUp = "ArrowUp", r11.ArrowRight = "ArrowRight", r11.ArrowDown = "ArrowDown", r11.Home = "Home", r11.End = "End", r11.PageUp = "PageUp", r11.PageDown = "PageDown", r11.Tab = "Tab", r11))(o5 || {});

// node_modules/@headlessui/react/dist/internal/close-provider.js
var import_react10 = __toESM(require_react(), 1);
"use client";
var e2 = (0, import_react10.createContext)(() => {
});
function C3({ value: t9, children: o9 }) {
  return import_react10.default.createElement(e2.Provider, { value: t9 }, o9);
}

// node_modules/@headlessui/react/dist/hooks/use-is-top-layer.js
var import_react12 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/default-map.js
var a5 = class extends Map {
  constructor(t9) {
    super();
    this.factory = t9;
  }
  get(t9) {
    let e5 = super.get(t9);
    return e5 === void 0 && (e5 = this.factory(t9), this.set(t9, e5)), e5;
  }
};

// node_modules/@headlessui/react/dist/utils/store.js
function a6(o9, r11) {
  let t9 = o9(), n10 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t9;
  }, subscribe(e5) {
    return n10.add(e5), () => n10.delete(e5);
  }, dispatch(e5, ...s9) {
    let i9 = r11[e5].call(t9, ...s9);
    i9 && (t9 = i9, n10.forEach((c10) => c10()));
  } };
}

// node_modules/@headlessui/react/dist/hooks/use-store.js
var import_react11 = __toESM(require_react(), 1);
function o6(t9) {
  return (0, import_react11.useSyncExternalStore)(t9.subscribe, t9.getSnapshot, t9.getSnapshot);
}

// node_modules/@headlessui/react/dist/hooks/use-is-top-layer.js
var p2 = new a5(() => a6(() => [], { ADD(r11) {
  return this.includes(r11) ? this : [...this, r11];
}, REMOVE(r11) {
  let e5 = this.indexOf(r11);
  if (e5 === -1)
    return this;
  let t9 = this.slice();
  return t9.splice(e5, 1), t9;
} }));
function x2(r11, e5) {
  let t9 = p2.get(e5), i9 = (0, import_react12.useId)(), h4 = o6(t9);
  if (n(() => {
    if (r11)
      return t9.dispatch("ADD", i9), () => t9.dispatch("REMOVE", i9);
  }, [t9, r11]), !r11)
    return false;
  let s9 = h4.indexOf(i9), o9 = h4.length;
  return s9 === -1 && (s9 = o9, o9 += 1), s9 === o9 - 1;
}

// node_modules/@headlessui/react/dist/hooks/use-inert-others.js
var f4 = /* @__PURE__ */ new Map();
var u5 = /* @__PURE__ */ new Map();
function h2(t9) {
  var e5;
  let r11 = (e5 = u5.get(t9)) != null ? e5 : 0;
  return u5.set(t9, r11 + 1), r11 !== 0 ? () => m3(t9) : (f4.set(t9, { "aria-hidden": t9.getAttribute("aria-hidden"), inert: t9.inert }), t9.setAttribute("aria-hidden", "true"), t9.inert = true, () => m3(t9));
}
function m3(t9) {
  var i9;
  let r11 = (i9 = u5.get(t9)) != null ? i9 : 1;
  if (r11 === 1 ? u5.delete(t9) : u5.set(t9, r11 - 1), r11 !== 1)
    return;
  let e5 = f4.get(t9);
  e5 && (e5["aria-hidden"] === null ? t9.removeAttribute("aria-hidden") : t9.setAttribute("aria-hidden", e5["aria-hidden"]), t9.inert = e5.inert, f4.delete(t9));
}
function y2(t9, { allowed: r11, disallowed: e5 } = {}) {
  let i9 = x2(t9, "inert-others");
  n(() => {
    var d8, c10;
    if (!i9)
      return;
    let a14 = o2();
    for (let n10 of (d8 = e5 == null ? void 0 : e5()) != null ? d8 : [])
      n10 && a14.add(h2(n10));
    let s9 = (c10 = r11 == null ? void 0 : r11()) != null ? c10 : [];
    for (let n10 of s9) {
      if (!n10)
        continue;
      let l6 = u(n10);
      if (!l6)
        continue;
      let o9 = n10.parentElement;
      for (; o9 && o9 !== l6.body; ) {
        for (let p4 of o9.children)
          s9.some((E6) => p4.contains(E6)) || a14.add(h2(p4));
        o9 = o9.parentElement;
      }
    }
    return a14.dispose;
  }, [i9, r11, e5]);
}

// node_modules/@headlessui/react/dist/hooks/use-on-disappear.js
var import_react13 = __toESM(require_react(), 1);
function m4(s9, n10, l6) {
  let i9 = s3((t9) => {
    let e5 = t9.getBoundingClientRect();
    e5.x === 0 && e5.y === 0 && e5.width === 0 && e5.height === 0 && l6();
  });
  (0, import_react13.useEffect)(() => {
    if (!s9)
      return;
    let t9 = n10 === null ? null : n10 instanceof HTMLElement ? n10 : n10.current;
    if (!t9)
      return;
    let e5 = o2();
    if (typeof ResizeObserver != "undefined") {
      let r11 = new ResizeObserver(() => i9.current(t9));
      r11.observe(t9), e5.add(() => r11.disconnect());
    }
    if (typeof IntersectionObserver != "undefined") {
      let r11 = new IntersectionObserver(() => i9.current(t9));
      r11.observe(t9), e5.add(() => r11.disconnect());
    }
    return () => e5.dispose();
  }, [n10, i9, s9]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var import_react16 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/focus-management.js
var f5 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e5) => `${e5}:not([tabindex='-1'])`).join(",");
var p3 = ["[data-autofocus]"].map((e5) => `${e5}:not([tabindex='-1'])`).join(",");
var F2 = ((n10) => (n10[n10.First = 1] = "First", n10[n10.Previous = 2] = "Previous", n10[n10.Next = 4] = "Next", n10[n10.Last = 8] = "Last", n10[n10.WrapAround = 16] = "WrapAround", n10[n10.NoScroll = 32] = "NoScroll", n10[n10.AutoFocus = 64] = "AutoFocus", n10))(F2 || {});
var T3 = ((o9) => (o9[o9.Error = 0] = "Error", o9[o9.Overflow = 1] = "Overflow", o9[o9.Success = 2] = "Success", o9[o9.Underflow = 3] = "Underflow", o9))(T3 || {});
var y3 = ((t9) => (t9[t9.Previous = -1] = "Previous", t9[t9.Next = 1] = "Next", t9))(y3 || {});
function b2(e5 = document.body) {
  return e5 == null ? [] : Array.from(e5.querySelectorAll(f5)).sort((r11, t9) => Math.sign((r11.tabIndex || Number.MAX_SAFE_INTEGER) - (t9.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function S3(e5 = document.body) {
  return e5 == null ? [] : Array.from(e5.querySelectorAll(p3)).sort((r11, t9) => Math.sign((r11.tabIndex || Number.MAX_SAFE_INTEGER) - (t9.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var h3 = ((t9) => (t9[t9.Strict = 0] = "Strict", t9[t9.Loose = 1] = "Loose", t9))(h3 || {});
function A2(e5, r11 = 0) {
  var t9;
  return e5 === ((t9 = u(e5)) == null ? void 0 : t9.body) ? false : u2(r11, { [0]() {
    return e5.matches(f5);
  }, [1]() {
    let u9 = e5;
    for (; u9 !== null; ) {
      if (u9.matches(f5))
        return true;
      u9 = u9.parentElement;
    }
    return false;
  } });
}
var H3 = ((t9) => (t9[t9.Keyboard = 0] = "Keyboard", t9[t9.Mouse = 1] = "Mouse", t9))(H3 || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e5) => {
  e5.metaKey || e5.altKey || e5.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e5) => {
  e5.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e5.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
function I(e5) {
  e5 == null || e5.focus({ preventScroll: true });
}
var w3 = ["textarea", "input"].join(",");
function O2(e5) {
  var r11, t9;
  return (t9 = (r11 = e5 == null ? void 0 : e5.matches) == null ? void 0 : r11.call(e5, w3)) != null ? t9 : false;
}
function _2(e5, r11 = (t9) => t9) {
  return e5.slice().sort((t9, u9) => {
    let o9 = r11(t9), c10 = r11(u9);
    if (o9 === null || c10 === null)
      return 0;
    let l6 = o9.compareDocumentPosition(c10);
    return l6 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l6 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function P3(e5, r11, { sorted: t9 = true, relativeTo: u9 = null, skipElements: o9 = [] } = {}) {
  let c10 = Array.isArray(e5) ? e5.length > 0 ? e5[0].ownerDocument : document : e5.ownerDocument, l6 = Array.isArray(e5) ? t9 ? _2(e5) : e5 : r11 & 64 ? S3(e5) : b2(e5);
  o9.length > 0 && l6.length > 1 && (l6 = l6.filter((s9) => !o9.some((a14) => a14 != null && "current" in a14 ? (a14 == null ? void 0 : a14.current) === s9 : a14 === s9))), u9 = u9 != null ? u9 : c10.activeElement;
  let n10 = (() => {
    if (r11 & 5)
      return 1;
    if (r11 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x5 = (() => {
    if (r11 & 1)
      return 0;
    if (r11 & 2)
      return Math.max(0, l6.indexOf(u9)) - 1;
    if (r11 & 4)
      return Math.max(0, l6.indexOf(u9)) + 1;
    if (r11 & 8)
      return l6.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), M6 = r11 & 32 ? { preventScroll: true } : {}, m8 = 0, d8 = l6.length, i9;
  do {
    if (m8 >= d8 || m8 + d8 <= 0)
      return 0;
    let s9 = x5 + m8;
    if (r11 & 16)
      s9 = (s9 + d8) % d8;
    else {
      if (s9 < 0)
        return 3;
      if (s9 >= d8)
        return 1;
    }
    i9 = l6[s9], i9 == null || i9.focus(M6), m8 += n10;
  } while (i9 !== c10.activeElement);
  return r11 & 6 && O2(i9) && i9.select(), 2;
}

// node_modules/@headlessui/react/dist/utils/platform.js
function t4() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function i5() {
  return /Android/gi.test(window.navigator.userAgent);
}
function n5() {
  return t4() || i5();
}

// node_modules/@headlessui/react/dist/hooks/use-document-event.js
var import_react14 = __toESM(require_react(), 1);
function i6(t9, e5, o9, n10) {
  let u9 = s3(o9);
  (0, import_react14.useEffect)(() => {
    if (!t9)
      return;
    function r11(m8) {
      u9.current(m8);
    }
    return document.addEventListener(e5, r11, n10), () => document.removeEventListener(e5, r11, n10);
  }, [t9, e5, n10]);
}

// node_modules/@headlessui/react/dist/hooks/use-window-event.js
var import_react15 = __toESM(require_react(), 1);
function s5(t9, e5, o9, n10) {
  let i9 = s3(o9);
  (0, import_react15.useEffect)(() => {
    if (!t9)
      return;
    function r11(d8) {
      i9.current(d8);
    }
    return window.addEventListener(e5, r11, n10), () => window.removeEventListener(e5, r11, n10);
  }, [t9, e5, n10]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var E2 = 30;
function R(p4, f12, C5) {
  let u9 = x2(p4, "outside-click"), m8 = s3(C5), s9 = (0, import_react16.useCallback)(function(e5, n10) {
    if (e5.defaultPrevented)
      return;
    let r11 = n10(e5);
    if (r11 === null || !r11.getRootNode().contains(r11) || !r11.isConnected)
      return;
    let h4 = function l6(o9) {
      return typeof o9 == "function" ? l6(o9()) : Array.isArray(o9) || o9 instanceof Set ? o9 : [o9];
    }(f12);
    for (let l6 of h4)
      if (l6 !== null && (l6.contains(r11) || e5.composed && e5.composedPath().includes(l6)))
        return;
    return !A2(r11, h3.Loose) && r11.tabIndex !== -1 && e5.preventDefault(), m8.current(e5, r11);
  }, [m8, f12]), i9 = (0, import_react16.useRef)(null);
  i6(u9, "pointerdown", (t9) => {
    var e5, n10;
    i9.current = ((n10 = (e5 = t9.composedPath) == null ? void 0 : e5.call(t9)) == null ? void 0 : n10[0]) || t9.target;
  }, true), i6(u9, "mousedown", (t9) => {
    var e5, n10;
    i9.current = ((n10 = (e5 = t9.composedPath) == null ? void 0 : e5.call(t9)) == null ? void 0 : n10[0]) || t9.target;
  }, true), i6(u9, "click", (t9) => {
    n5() || i9.current && (s9(t9, () => i9.current), i9.current = null);
  }, true);
  let a14 = (0, import_react16.useRef)({ x: 0, y: 0 });
  i6(u9, "touchstart", (t9) => {
    a14.current.x = t9.touches[0].clientX, a14.current.y = t9.touches[0].clientY;
  }, true), i6(u9, "touchend", (t9) => {
    let e5 = { x: t9.changedTouches[0].clientX, y: t9.changedTouches[0].clientY };
    if (!(Math.abs(e5.x - a14.current.x) >= E2 || Math.abs(e5.y - a14.current.y) >= E2))
      return s9(t9, () => t9.target instanceof HTMLElement ? t9.target : null);
  }, true), s5(u9, "blur", (t9) => s9(t9, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

// node_modules/@headlessui/react/dist/hooks/use-owner.js
var import_react17 = __toESM(require_react(), 1);
function n6(...e5) {
  return (0, import_react17.useMemo)(() => u(...e5), [...e5]);
}

// node_modules/@headlessui/react/dist/hooks/use-event-listener.js
var import_react18 = __toESM(require_react(), 1);
function E3(n10, e5, a14, t9) {
  let i9 = s3(a14);
  (0, import_react18.useEffect)(() => {
    n10 = n10 != null ? n10 : window;
    function r11(o9) {
      i9.current(o9);
    }
    return n10.addEventListener(e5, r11, t9), () => n10.removeEventListener(e5, r11, t9);
  }, [n10, e5, t9]);
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js
function d4() {
  let r11;
  return { before({ doc: e5 }) {
    var l6;
    let o9 = e5.documentElement, t9 = (l6 = e5.defaultView) != null ? l6 : window;
    r11 = Math.max(0, t9.innerWidth - o9.clientWidth);
  }, after({ doc: e5, d: o9 }) {
    let t9 = e5.documentElement, l6 = Math.max(0, t9.clientWidth - t9.offsetWidth), n10 = Math.max(0, r11 - l6);
    o9.style(t9, "paddingRight", `${n10}px`);
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js
function d5() {
  return t4() ? { before({ doc: r11, d: n10, meta: c10 }) {
    function o9(a14) {
      return c10.containers.flatMap((l6) => l6()).some((l6) => l6.contains(a14));
    }
    n10.microTask(() => {
      var s9;
      if (window.getComputedStyle(r11.documentElement).scrollBehavior !== "auto") {
        let t9 = o2();
        t9.style(r11.documentElement, "scrollBehavior", "auto"), n10.add(() => n10.microTask(() => t9.dispose()));
      }
      let a14 = (s9 = window.scrollY) != null ? s9 : window.pageYOffset, l6 = null;
      n10.addEventListener(r11, "click", (t9) => {
        if (t9.target instanceof HTMLElement)
          try {
            let e5 = t9.target.closest("a");
            if (!e5)
              return;
            let { hash: f12 } = new URL(e5.href), i9 = r11.querySelector(f12);
            i9 && !o9(i9) && (l6 = i9);
          } catch {
          }
      }, true), n10.addEventListener(r11, "touchstart", (t9) => {
        if (t9.target instanceof HTMLElement)
          if (o9(t9.target)) {
            let e5 = t9.target;
            for (; e5.parentElement && o9(e5.parentElement); )
              e5 = e5.parentElement;
            n10.style(e5, "overscrollBehavior", "contain");
          } else
            n10.style(t9.target, "touchAction", "none");
      }), n10.addEventListener(r11, "touchmove", (t9) => {
        if (t9.target instanceof HTMLElement) {
          if (t9.target.tagName === "INPUT")
            return;
          if (o9(t9.target)) {
            let e5 = t9.target;
            for (; e5.parentElement && e5.dataset.headlessuiPortal !== "" && !(e5.scrollHeight > e5.clientHeight || e5.scrollWidth > e5.clientWidth); )
              e5 = e5.parentElement;
            e5.dataset.headlessuiPortal === "" && t9.preventDefault();
          } else
            t9.preventDefault();
        }
      }, { passive: false }), n10.add(() => {
        var e5;
        let t9 = (e5 = window.scrollY) != null ? e5 : window.pageYOffset;
        a14 !== t9 && window.scrollTo(0, a14), l6 && l6.isConnected && (l6.scrollIntoView({ block: "nearest" }), l6 = null);
      });
    });
  } } : {};
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js
function r5() {
  return { before({ doc: e5, d: o9 }) {
    o9.style(e5.documentElement, "overflow", "hidden");
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js
function m5(e5) {
  let n10 = {};
  for (let t9 of e5)
    Object.assign(n10, t9(n10));
  return n10;
}
var a8 = a6(() => /* @__PURE__ */ new Map(), { PUSH(e5, n10) {
  var o9;
  let t9 = (o9 = this.get(e5)) != null ? o9 : { doc: e5, count: 0, d: o2(), meta: /* @__PURE__ */ new Set() };
  return t9.count++, t9.meta.add(n10), this.set(e5, t9), this;
}, POP(e5, n10) {
  let t9 = this.get(e5);
  return t9 && (t9.count--, t9.meta.delete(n10)), this;
}, SCROLL_PREVENT({ doc: e5, d: n10, meta: t9 }) {
  let o9 = { doc: e5, d: n10, meta: m5(t9) }, c10 = [d5(), d4(), r5()];
  c10.forEach(({ before: r11 }) => r11 == null ? void 0 : r11(o9)), c10.forEach(({ after: r11 }) => r11 == null ? void 0 : r11(o9));
}, SCROLL_ALLOW({ d: e5 }) {
  e5.dispose();
}, TEARDOWN({ doc: e5 }) {
  this.delete(e5);
} });
a8.subscribe(() => {
  let e5 = a8.getSnapshot(), n10 = /* @__PURE__ */ new Map();
  for (let [t9] of e5)
    n10.set(t9, t9.documentElement.style.overflow);
  for (let t9 of e5.values()) {
    let o9 = n10.get(t9.doc) === "hidden", c10 = t9.count !== 0;
    (c10 && !o9 || !c10 && o9) && a8.dispatch(t9.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t9), t9.count === 0 && a8.dispatch("TEARDOWN", t9);
  }
});

// node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js
function a9(r11, e5, n10 = () => ({ containers: [] })) {
  let f12 = o6(a8), o9 = e5 ? f12.get(e5) : void 0, i9 = o9 ? o9.count > 0 : false;
  return n(() => {
    if (!(!e5 || !r11))
      return a8.dispatch("PUSH", e5, n10), () => a8.dispatch("POP", e5, n10);
  }, [r11, e5]), i9;
}

// node_modules/@headlessui/react/dist/hooks/use-scroll-lock.js
function f6(e5, c10, n10 = () => [document.body]) {
  let r11 = x2(e5, "scroll-lock");
  a9(r11, c10, (t9) => {
    var o9;
    return { containers: [...(o9 = t9.containers) != null ? o9 : [], n10] };
  });
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
var import_react20 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-flags.js
var import_react19 = __toESM(require_react(), 1);
function c4(u9 = 0) {
  let [t9, l6] = (0, import_react19.useState)(u9), g2 = (0, import_react19.useCallback)((e5) => l6(e5), [t9]), s9 = (0, import_react19.useCallback)((e5) => l6((a14) => a14 | e5), [t9]), m8 = (0, import_react19.useCallback)((e5) => (t9 & e5) === e5, [t9]), n10 = (0, import_react19.useCallback)((e5) => l6((a14) => a14 & ~e5), [l6]), F3 = (0, import_react19.useCallback)((e5) => l6((a14) => a14 ^ e5), [l6]);
  return { flags: t9, setFlag: g2, addFlag: s9, hasFlag: m8, removeFlag: n10, toggleFlag: F3 };
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
var T5;
var b4;
typeof process != "undefined" && typeof globalThis != "undefined" && typeof Element != "undefined" && ((T5 = process == null ? void 0 : process.env) == null ? void 0 : T5["NODE_ENV"]) === "test" && typeof ((b4 = Element == null ? void 0 : Element.prototype) == null ? void 0 : b4.getAnimations) == "undefined" && (Element.prototype.getAnimations = function() {
  return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join(`
`)), [];
});
var L2 = ((r11) => (r11[r11.None = 0] = "None", r11[r11.Closed = 1] = "Closed", r11[r11.Enter = 2] = "Enter", r11[r11.Leave = 4] = "Leave", r11))(L2 || {});
function R2(t9) {
  let n10 = {};
  for (let e5 in t9)
    t9[e5] === true && (n10[`data-${e5}`] = "");
  return n10;
}
function x3(t9, n10, e5, i9) {
  let [r11, o9] = (0, import_react20.useState)(e5), { hasFlag: s9, addFlag: a14, removeFlag: l6 } = c4(t9 && r11 ? 3 : 0), u9 = (0, import_react20.useRef)(false), f12 = (0, import_react20.useRef)(false), E6 = p();
  return n(() => {
    var d8;
    if (t9) {
      if (e5 && o9(true), !n10) {
        e5 && a14(3);
        return;
      }
      return (d8 = i9 == null ? void 0 : i9.start) == null || d8.call(i9, e5), C4(n10, { inFlight: u9, prepare() {
        f12.current ? f12.current = false : f12.current = u9.current, u9.current = true, !f12.current && (e5 ? (a14(3), l6(4)) : (a14(4), l6(2)));
      }, run() {
        f12.current ? e5 ? (l6(3), a14(4)) : (l6(4), a14(3)) : e5 ? l6(1) : a14(1);
      }, done() {
        var p4;
        f12.current && typeof n10.getAnimations == "function" && n10.getAnimations().length > 0 || (u9.current = false, l6(7), e5 || o9(false), (p4 = i9 == null ? void 0 : i9.end) == null || p4.call(i9, e5));
      } });
    }
  }, [t9, e5, n10, E6]), t9 ? [r11, { closed: s9(1), enter: s9(2), leave: s9(4), transition: s9(2) || s9(4) }] : [e5, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function C4(t9, { prepare: n10, run: e5, done: i9, inFlight: r11 }) {
  let o9 = o2();
  return j2(t9, { prepare: n10, inFlight: r11 }), o9.nextFrame(() => {
    e5(), o9.requestAnimationFrame(() => {
      o9.add(M(t9, i9));
    });
  }), o9.dispose;
}
function M(t9, n10) {
  var o9, s9;
  let e5 = o2();
  if (!t9)
    return e5.dispose;
  let i9 = false;
  e5.add(() => {
    i9 = true;
  });
  let r11 = (s9 = (o9 = t9.getAnimations) == null ? void 0 : o9.call(t9).filter((a14) => a14 instanceof CSSTransition)) != null ? s9 : [];
  return r11.length === 0 ? (n10(), e5.dispose) : (Promise.allSettled(r11.map((a14) => a14.finished)).then(() => {
    i9 || n10();
  }), e5.dispose);
}
function j2(t9, { inFlight: n10, prepare: e5 }) {
  if (n10 != null && n10.current) {
    e5();
    return;
  }
  let i9 = t9.style.transition;
  t9.style.transition = "none", e5(), t9.offsetHeight, t9.style.transition = i9;
}

// node_modules/@headlessui/react/dist/hooks/use-watch.js
var import_react21 = __toESM(require_react(), 1);
function m6(u9, t9) {
  let e5 = (0, import_react21.useRef)([]), r11 = o4(u9);
  (0, import_react21.useEffect)(() => {
    let o9 = [...e5.current];
    for (let [a14, l6] of t9.entries())
      if (e5.current[a14] !== l6) {
        let n10 = r11(t9, o9);
        return e5.current = t9, n10;
      }
  }, [r11, ...t9]);
}

// node_modules/@headlessui/react/dist/internal/open-closed.js
var import_react22 = __toESM(require_react(), 1);
var n7 = (0, import_react22.createContext)(null);
n7.displayName = "OpenClosedContext";
var i7 = ((e5) => (e5[e5.Open = 1] = "Open", e5[e5.Closed = 2] = "Closed", e5[e5.Closing = 4] = "Closing", e5[e5.Opening = 8] = "Opening", e5))(i7 || {});
function u6() {
  return (0, import_react22.useContext)(n7);
}
function c6({ value: o9, children: t9 }) {
  return import_react22.default.createElement(n7.Provider, { value: o9 }, t9);
}
function s7({ children: o9 }) {
  return import_react22.default.createElement(n7.Provider, { value: null }, o9);
}

// node_modules/@headlessui/react/dist/utils/document-ready.js
function t6(n10) {
  function e5() {
    document.readyState !== "loading" && (n10(), document.removeEventListener("DOMContentLoaded", e5));
  }
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", e5), e5());
}

// node_modules/@headlessui/react/dist/utils/active-element-history.js
var r8 = [];
t6(() => {
  function e5(t9) {
    if (!(t9.target instanceof HTMLElement) || t9.target === document.body || r8[0] === t9.target)
      return;
    let n10 = t9.target;
    n10 = n10.closest(f5), r8.unshift(n10 != null ? n10 : t9.target), r8 = r8.filter((o9) => o9 != null && o9.isConnected), r8.splice(10);
  }
  window.addEventListener("click", e5, { capture: true }), window.addEventListener("mousedown", e5, { capture: true }), window.addEventListener("focus", e5, { capture: true }), document.body.addEventListener("click", e5, { capture: true }), document.body.addEventListener("mousedown", e5, { capture: true }), document.body.addEventListener("focus", e5, { capture: true });
});

// node_modules/@headlessui/react/dist/components/portal/portal.js
var import_react25 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/hooks/use-on-unmount.js
var import_react23 = __toESM(require_react(), 1);
function c7(t9) {
  let r11 = o4(t9), e5 = (0, import_react23.useRef)(false);
  (0, import_react23.useEffect)(() => (e5.current = false, () => {
    e5.current = true, t(() => {
      e5.current && r11();
    });
  }), [r11]);
}

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var t7 = __toESM(require_react(), 1);
function s8() {
  let r11 = typeof document == "undefined";
  return "useSyncExternalStore" in t7 ? ((o9) => o9.useSyncExternalStore)(t7)(() => () => {
  }, () => false, () => !r11) : false;
}
function l4() {
  let r11 = s8(), [e5, n10] = t7.useState(s.isHandoffComplete);
  return e5 && s.isHandoffComplete === false && n10(false), t7.useEffect(() => {
    e5 !== true && n10(true);
  }, [e5]), t7.useEffect(() => s.handoff(), []), r11 ? false : e5;
}

// node_modules/@headlessui/react/dist/internal/portal-force-root.js
var import_react24 = __toESM(require_react(), 1);
var e4 = (0, import_react24.createContext)(false);
function a10() {
  return (0, import_react24.useContext)(e4);
}
function l5(o9) {
  return import_react24.default.createElement(e4.Provider, { value: o9.force }, o9.children);
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
"use client";
function N(u9) {
  let r11 = a10(), n10 = (0, import_react25.useContext)(v2), e5 = n6(u9), [o9, l6] = (0, import_react25.useState)(() => {
    var t9;
    if (!r11 && n10 !== null)
      return (t9 = n10.current) != null ? t9 : null;
    if (s.isServer)
      return null;
    let p4 = e5 == null ? void 0 : e5.getElementById("headlessui-portal-root");
    if (p4)
      return p4;
    if (e5 === null)
      return null;
    let a14 = e5.createElement("div");
    return a14.setAttribute("id", "headlessui-portal-root"), e5.body.appendChild(a14);
  });
  return (0, import_react25.useEffect)(() => {
    o9 !== null && (e5 != null && e5.body.contains(o9) || e5 == null || e5.body.appendChild(o9));
  }, [o9, e5]), (0, import_react25.useEffect)(() => {
    r11 || n10 !== null && l6(n10.current);
  }, [n10, l6, r11]), o9;
}
var M2 = import_react25.Fragment;
var S5 = K(function(r11, n10) {
  let e5 = r11, o9 = (0, import_react25.useRef)(null), l6 = y(T((i9) => {
    o9.current = i9;
  }), n10), p4 = n6(o9), a14 = N(o9), [t9] = (0, import_react25.useState)(() => {
    var i9;
    return s.isServer ? null : (i9 = p4 == null ? void 0 : p4.createElement("div")) != null ? i9 : null;
  }), s9 = (0, import_react25.useContext)(y4), b7 = l4();
  n(() => {
    !a14 || !t9 || a14.contains(t9) || (t9.setAttribute("data-headlessui-portal", ""), a14.appendChild(t9));
  }, [a14, t9]), n(() => {
    if (t9 && s9)
      return s9.register(t9);
  }, [s9, t9]), c7(() => {
    var i9;
    !a14 || !t9 || (t9 instanceof Node && a14.contains(t9) && a14.removeChild(t9), a14.childNodes.length <= 0 && ((i9 = a14.parentElement) == null || i9.removeChild(a14)));
  });
  let H5 = L();
  return b7 ? !a14 || !t9 ? null : (0, import_react_dom.createPortal)(H5({ ourProps: { ref: l6 }, theirProps: e5, slot: {}, defaultTag: M2, name: "Portal" }), t9) : null;
});
function j3(u9, r11) {
  let n10 = y(r11), { enabled: e5 = true, ...o9 } = u9, l6 = L();
  return e5 ? import_react25.default.createElement(S5, { ...o9, ref: n10 }) : l6({ ourProps: { ref: n10 }, theirProps: o9, slot: {}, defaultTag: M2, name: "Portal" });
}
var W = import_react25.Fragment;
var v2 = (0, import_react25.createContext)(null);
function I2(u9, r11) {
  let { target: n10, ...e5 } = u9, l6 = { ref: y(r11) }, p4 = L();
  return import_react25.default.createElement(v2.Provider, { value: n10 }, p4({ ourProps: l6, theirProps: e5, defaultTag: W, name: "Popover.Group" }));
}
var y4 = (0, import_react25.createContext)(null);
function te() {
  let u9 = (0, import_react25.useContext)(y4), r11 = (0, import_react25.useRef)([]), n10 = o4((l6) => (r11.current.push(l6), u9 && u9.register(l6), () => e5(l6))), e5 = o4((l6) => {
    let p4 = r11.current.indexOf(l6);
    p4 !== -1 && r11.current.splice(p4, 1), u9 && u9.unregister(l6);
  }), o9 = (0, import_react25.useMemo)(() => ({ register: n10, unregister: e5, portals: r11 }), [n10, e5, r11]);
  return [r11, (0, import_react25.useMemo)(() => function({ children: p4 }) {
    return import_react25.default.createElement(y4.Provider, { value: o9 }, p4);
  }, [o9])];
}
var J = K(j3);
var X2 = K(I2);
var re = Object.assign(J, { Group: X2 });

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var import_react32 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-escape.js
function a11(o9, r11 = typeof document != "undefined" ? document.defaultView : null, t9) {
  let n10 = x2(o9, "escape");
  E3(r11, "keydown", (e5) => {
    n10 && (e5.defaultPrevented || e5.key === o5.Escape && t9(e5));
  });
}

// node_modules/@headlessui/react/dist/hooks/use-is-touch-device.js
var import_react26 = __toESM(require_react(), 1);
function f9() {
  var t9;
  let [e5] = (0, import_react26.useState)(() => typeof window != "undefined" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [o9, c10] = (0, import_react26.useState)((t9 = e5 == null ? void 0 : e5.matches) != null ? t9 : false);
  return n(() => {
    if (!e5)
      return;
    function n10(r11) {
      c10(r11.matches);
    }
    return e5.addEventListener("change", n10), () => e5.removeEventListener("change", n10);
  }, [e5]), o9;
}

// node_modules/@headlessui/react/dist/hooks/use-root-containers.js
var import_react27 = __toESM(require_react(), 1);
function R4({ defaultContainers: l6 = [], portals: n10, mainTreeNode: o9 } = {}) {
  let r11 = n6(o9), u9 = o4(() => {
    var i9, c10;
    let t9 = [];
    for (let e5 of l6)
      e5 !== null && (e5 instanceof HTMLElement ? t9.push(e5) : "current" in e5 && e5.current instanceof HTMLElement && t9.push(e5.current));
    if (n10 != null && n10.current)
      for (let e5 of n10.current)
        t9.push(e5);
    for (let e5 of (i9 = r11 == null ? void 0 : r11.querySelectorAll("html > *, body > *")) != null ? i9 : [])
      e5 !== document.body && e5 !== document.head && e5 instanceof HTMLElement && e5.id !== "headlessui-portal-root" && (o9 && (e5.contains(o9) || e5.contains((c10 = o9 == null ? void 0 : o9.getRootNode()) == null ? void 0 : c10.host)) || t9.some((m8) => e5.contains(m8)) || t9.push(e5));
    return t9;
  });
  return { resolveContainers: u9, contains: o4((t9) => u9().some((i9) => i9.contains(t9))) };
}
var a12 = (0, import_react27.createContext)(null);
function O4({ children: l6, node: n10 }) {
  let [o9, r11] = (0, import_react27.useState)(null), u9 = b5(n10 != null ? n10 : o9);
  return import_react27.default.createElement(a12.Provider, { value: u9 }, l6, u9 === null && import_react27.default.createElement(f2, { features: s4.Hidden, ref: (t9) => {
    var i9, c10;
    if (t9) {
      for (let e5 of (c10 = (i9 = u(t9)) == null ? void 0 : i9.querySelectorAll("html > *, body > *")) != null ? c10 : [])
        if (e5 !== document.body && e5 !== document.head && e5 instanceof HTMLElement && e5 != null && e5.contains(t9)) {
          r11(e5);
          break;
        }
    }
  } }));
}
function b5(l6 = null) {
  var n10;
  return (n10 = (0, import_react27.useContext)(a12)) != null ? n10 : l6;
}

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
var import_react30 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var import_react28 = __toESM(require_react(), 1);
function f11() {
  let e5 = (0, import_react28.useRef)(false);
  return n(() => (e5.current = true, () => {
    e5.current = false;
  }), []), e5;
}

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var import_react29 = __toESM(require_react(), 1);
var a13 = ((r11) => (r11[r11.Forwards = 0] = "Forwards", r11[r11.Backwards = 1] = "Backwards", r11))(a13 || {});
function u8() {
  let e5 = (0, import_react29.useRef)(0);
  return s5(true, "keydown", (r11) => {
    r11.key === "Tab" && (e5.current = r11.shiftKey ? 1 : 0);
  }, true), e5;
}

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
"use client";
function U2(o9) {
  if (!o9)
    return /* @__PURE__ */ new Set();
  if (typeof o9 == "function")
    return new Set(o9());
  let e5 = /* @__PURE__ */ new Set();
  for (let t9 of o9.current)
    t9.current instanceof HTMLElement && e5.add(t9.current);
  return e5;
}
var Z = "div";
var x4 = ((n10) => (n10[n10.None = 0] = "None", n10[n10.InitialFocus = 1] = "InitialFocus", n10[n10.TabLock = 2] = "TabLock", n10[n10.FocusLock = 4] = "FocusLock", n10[n10.RestoreFocus = 8] = "RestoreFocus", n10[n10.AutoFocus = 16] = "AutoFocus", n10))(x4 || {});
function $2(o9, e5) {
  let t9 = (0, import_react30.useRef)(null), r11 = y(t9, e5), { initialFocus: s9, initialFocusFallback: a14, containers: n10, features: u9 = 15, ...f12 } = o9;
  l4() || (u9 = 0);
  let l6 = n6(t9);
  ee(u9, { ownerDocument: l6 });
  let i9 = te2(u9, { ownerDocument: l6, container: t9, initialFocus: s9, initialFocusFallback: a14 });
  re2(u9, { ownerDocument: l6, container: t9, containers: n10, previousActiveElement: i9 });
  let R5 = u8(), g2 = o4((c10) => {
    let m8 = t9.current;
    if (!m8)
      return;
    ((G2) => G2())(() => {
      u2(R5.current, { [a13.Forwards]: () => {
        P3(m8, F2.First, { skipElements: [c10.relatedTarget, a14] });
      }, [a13.Backwards]: () => {
        P3(m8, F2.Last, { skipElements: [c10.relatedTarget, a14] });
      } });
    });
  }), v3 = x2(!!(u9 & 2), "focus-trap#tab-lock"), N3 = p(), F3 = (0, import_react30.useRef)(false), k3 = { ref: r11, onKeyDown(c10) {
    c10.key == "Tab" && (F3.current = true, N3.requestAnimationFrame(() => {
      F3.current = false;
    }));
  }, onBlur(c10) {
    if (!(u9 & 4))
      return;
    let m8 = U2(n10);
    t9.current instanceof HTMLElement && m8.add(t9.current);
    let d8 = c10.relatedTarget;
    d8 instanceof HTMLElement && d8.dataset.headlessuiFocusGuard !== "true" && (I3(m8, d8) || (F3.current ? P3(t9.current, u2(R5.current, { [a13.Forwards]: () => F2.Next, [a13.Backwards]: () => F2.Previous }) | F2.WrapAround, { relativeTo: c10.target }) : c10.target instanceof HTMLElement && I(c10.target)));
  } }, B = L();
  return import_react30.default.createElement(import_react30.default.Fragment, null, v3 && import_react30.default.createElement(f2, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: g2, features: s4.Focusable }), B({ ourProps: k3, theirProps: f12, defaultTag: Z, name: "FocusTrap" }), v3 && import_react30.default.createElement(f2, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: g2, features: s4.Focusable }));
}
var D = K($2);
var ye = Object.assign(D, { features: x4 });
function w4(o9 = true) {
  let e5 = (0, import_react30.useRef)(r8.slice());
  return m6(([t9], [r11]) => {
    r11 === true && t9 === false && t(() => {
      e5.current.splice(0);
    }), r11 === false && t9 === true && (e5.current = r8.slice());
  }, [o9, r8, e5]), o4(() => {
    var t9;
    return (t9 = e5.current.find((r11) => r11 != null && r11.isConnected)) != null ? t9 : null;
  });
}
function ee(o9, { ownerDocument: e5 }) {
  let t9 = !!(o9 & 8), r11 = w4(t9);
  m6(() => {
    t9 || (e5 == null ? void 0 : e5.activeElement) === (e5 == null ? void 0 : e5.body) && I(r11());
  }, [t9]), c7(() => {
    t9 && I(r11());
  });
}
function te2(o9, { ownerDocument: e5, container: t9, initialFocus: r11, initialFocusFallback: s9 }) {
  let a14 = (0, import_react30.useRef)(null), n10 = x2(!!(o9 & 1), "focus-trap#initial-focus"), u9 = f11();
  return m6(() => {
    if (o9 === 0)
      return;
    if (!n10) {
      s9 != null && s9.current && I(s9.current);
      return;
    }
    let f12 = t9.current;
    f12 && t(() => {
      if (!u9.current)
        return;
      let l6 = e5 == null ? void 0 : e5.activeElement;
      if (r11 != null && r11.current) {
        if ((r11 == null ? void 0 : r11.current) === l6) {
          a14.current = l6;
          return;
        }
      } else if (f12.contains(l6)) {
        a14.current = l6;
        return;
      }
      if (r11 != null && r11.current)
        I(r11.current);
      else {
        if (o9 & 16) {
          if (P3(f12, F2.First | F2.AutoFocus) !== T3.Error)
            return;
        } else if (P3(f12, F2.First) !== T3.Error)
          return;
        if (s9 != null && s9.current && (I(s9.current), (e5 == null ? void 0 : e5.activeElement) === s9.current))
          return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      a14.current = e5 == null ? void 0 : e5.activeElement;
    });
  }, [s9, n10, o9]), a14;
}
function re2(o9, { ownerDocument: e5, container: t9, containers: r11, previousActiveElement: s9 }) {
  let a14 = f11(), n10 = !!(o9 & 4);
  E3(e5 == null ? void 0 : e5.defaultView, "focus", (u9) => {
    if (!n10 || !a14.current)
      return;
    let f12 = U2(r11);
    t9.current instanceof HTMLElement && f12.add(t9.current);
    let l6 = s9.current;
    if (!l6)
      return;
    let i9 = u9.target;
    i9 && i9 instanceof HTMLElement ? I3(f12, i9) ? (s9.current = i9, I(i9)) : (u9.preventDefault(), u9.stopPropagation(), I(l6)) : I(s9.current);
  }, true);
}
function I3(o9, e5) {
  for (let t9 of o9)
    if (t9.contains(e5))
      return true;
  return false;
}

// node_modules/@headlessui/react/dist/components/transition/transition.js
var import_react31 = __toESM(require_react(), 1);
"use client";
function ue(e5) {
  var t9;
  return !!(e5.enter || e5.enterFrom || e5.enterTo || e5.leave || e5.leaveFrom || e5.leaveTo) || ((t9 = e5.as) != null ? t9 : de) !== import_react31.Fragment || import_react31.default.Children.count(e5.children) === 1;
}
var w5 = (0, import_react31.createContext)(null);
w5.displayName = "TransitionContext";
var _e = ((n10) => (n10.Visible = "visible", n10.Hidden = "hidden", n10))(_e || {});
function De() {
  let e5 = (0, import_react31.useContext)(w5);
  if (e5 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e5;
}
function He() {
  let e5 = (0, import_react31.useContext)(M5);
  if (e5 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e5;
}
var M5 = (0, import_react31.createContext)(null);
M5.displayName = "NestingContext";
function U3(e5) {
  return "children" in e5 ? U3(e5.children) : e5.current.filter(({ el: t9 }) => t9.current !== null).filter(({ state: t9 }) => t9 === "visible").length > 0;
}
function Te(e5, t9) {
  let n10 = s3(e5), l6 = (0, import_react31.useRef)([]), S6 = f11(), R5 = p(), d8 = o4((o9, i9 = A.Hidden) => {
    let a14 = l6.current.findIndex(({ el: s9 }) => s9 === o9);
    a14 !== -1 && (u2(i9, { [A.Unmount]() {
      l6.current.splice(a14, 1);
    }, [A.Hidden]() {
      l6.current[a14].state = "hidden";
    } }), R5.microTask(() => {
      var s9;
      !U3(l6) && S6.current && ((s9 = n10.current) == null || s9.call(n10));
    }));
  }), y5 = o4((o9) => {
    let i9 = l6.current.find(({ el: a14 }) => a14 === o9);
    return i9 ? i9.state !== "visible" && (i9.state = "visible") : l6.current.push({ el: o9, state: "visible" }), () => d8(o9, A.Unmount);
  }), p4 = (0, import_react31.useRef)([]), c10 = (0, import_react31.useRef)(Promise.resolve()), C5 = (0, import_react31.useRef)({ enter: [], leave: [] }), h4 = o4((o9, i9, a14) => {
    p4.current.splice(0), t9 && (t9.chains.current[i9] = t9.chains.current[i9].filter(([s9]) => s9 !== o9)), t9 == null || t9.chains.current[i9].push([o9, new Promise((s9) => {
      p4.current.push(s9);
    })]), t9 == null || t9.chains.current[i9].push([o9, new Promise((s9) => {
      Promise.all(C5.current[i9].map(([r11, f12]) => f12)).then(() => s9());
    })]), i9 === "enter" ? c10.current = c10.current.then(() => t9 == null ? void 0 : t9.wait.current).then(() => a14(i9)) : a14(i9);
  }), g2 = o4((o9, i9, a14) => {
    Promise.all(C5.current[i9].splice(0).map(([s9, r11]) => r11)).then(() => {
      var s9;
      (s9 = p4.current.shift()) == null || s9();
    }).then(() => a14(i9));
  });
  return (0, import_react31.useMemo)(() => ({ children: l6, register: y5, unregister: d8, onStart: h4, onStop: g2, wait: c10, chains: C5 }), [y5, d8, l6, h4, g2, C5, c10]);
}
var de = import_react31.Fragment;
var fe = O.RenderStrategy;
function Ae(e5, t9) {
  var ee2, te3;
  let { transition: n10 = true, beforeEnter: l6, afterEnter: S6, beforeLeave: R5, afterLeave: d8, enter: y5, enterFrom: p4, enterTo: c10, entered: C5, leave: h4, leaveFrom: g2, leaveTo: o9, ...i9 } = e5, [a14, s9] = (0, import_react31.useState)(null), r11 = (0, import_react31.useRef)(null), f12 = ue(e5), j4 = y(...f12 ? [r11, t9, s9] : t9 === null ? [] : [t9]), H5 = (ee2 = i9.unmount) == null || ee2 ? A.Unmount : A.Hidden, { show: u9, appear: z, initial: K2 } = De(), [v3, G2] = (0, import_react31.useState)(u9 ? "visible" : "hidden"), Q = He(), { register: A4, unregister: I4 } = Q;
  n(() => A4(r11), [A4, r11]), n(() => {
    if (H5 === A.Hidden && r11.current) {
      if (u9 && v3 !== "visible") {
        G2("visible");
        return;
      }
      return u2(v3, { ["hidden"]: () => I4(r11), ["visible"]: () => A4(r11) });
    }
  }, [v3, r11, A4, I4, u9, H5]);
  let B = l4();
  n(() => {
    if (f12 && B && v3 === "visible" && r11.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [r11, v3, B, f12]);
  let ce = K2 && !z, Y = z && u9 && K2, W3 = (0, import_react31.useRef)(false), L4 = Te(() => {
    W3.current || (G2("hidden"), I4(r11));
  }, Q), Z2 = o4((k3) => {
    W3.current = true;
    let F3 = k3 ? "enter" : "leave";
    L4.onStart(r11, F3, (_3) => {
      _3 === "enter" ? l6 == null || l6() : _3 === "leave" && (R5 == null || R5());
    });
  }), $3 = o4((k3) => {
    let F3 = k3 ? "enter" : "leave";
    W3.current = false, L4.onStop(r11, F3, (_3) => {
      _3 === "enter" ? S6 == null || S6() : _3 === "leave" && (d8 == null || d8());
    }), F3 === "leave" && !U3(L4) && (G2("hidden"), I4(r11));
  });
  (0, import_react31.useEffect)(() => {
    f12 && n10 || (Z2(u9), $3(u9));
  }, [u9, f12, n10]);
  let pe2 = (() => !(!n10 || !f12 || !B || ce))(), [, T7] = x3(pe2, a14, u9, { start: Z2, end: $3 }), Ce = m({ ref: j4, className: ((te3 = t3(i9.className, Y && y5, Y && p4, T7.enter && y5, T7.enter && T7.closed && p4, T7.enter && !T7.closed && c10, T7.leave && h4, T7.leave && !T7.closed && g2, T7.leave && T7.closed && o9, !T7.transition && u9 && C5)) == null ? void 0 : te3.trim()) || void 0, ...R2(T7) }), N3 = 0;
  v3 === "visible" && (N3 |= i7.Open), v3 === "hidden" && (N3 |= i7.Closed), T7.enter && (N3 |= i7.Opening), T7.leave && (N3 |= i7.Closing);
  let he2 = L();
  return import_react31.default.createElement(M5.Provider, { value: L4 }, import_react31.default.createElement(c6, { value: N3 }, he2({ ourProps: Ce, theirProps: i9, defaultTag: de, features: fe, visible: v3 === "visible", name: "Transition.Child" })));
}
function Ie(e5, t9) {
  let { show: n10, appear: l6 = false, unmount: S6 = true, ...R5 } = e5, d8 = (0, import_react31.useRef)(null), y5 = ue(e5), p4 = y(...y5 ? [d8, t9] : t9 === null ? [] : [t9]);
  l4();
  let c10 = u6();
  if (n10 === void 0 && c10 !== null && (n10 = (c10 & i7.Open) === i7.Open), n10 === void 0)
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [C5, h4] = (0, import_react31.useState)(n10 ? "visible" : "hidden"), g2 = Te(() => {
    n10 || h4("hidden");
  }), [o9, i9] = (0, import_react31.useState)(true), a14 = (0, import_react31.useRef)([n10]);
  n(() => {
    o9 !== false && a14.current[a14.current.length - 1] !== n10 && (a14.current.push(n10), i9(false));
  }, [a14, n10]);
  let s9 = (0, import_react31.useMemo)(() => ({ show: n10, appear: l6, initial: o9 }), [n10, l6, o9]);
  n(() => {
    n10 ? h4("visible") : !U3(g2) && d8.current !== null && h4("hidden");
  }, [n10, g2]);
  let r11 = { unmount: S6 }, f12 = o4(() => {
    var u9;
    o9 && i9(false), (u9 = e5.beforeEnter) == null || u9.call(e5);
  }), j4 = o4(() => {
    var u9;
    o9 && i9(false), (u9 = e5.beforeLeave) == null || u9.call(e5);
  }), H5 = L();
  return import_react31.default.createElement(M5.Provider, { value: g2 }, import_react31.default.createElement(w5.Provider, { value: s9 }, H5({ ourProps: { ...r11, as: import_react31.Fragment, children: import_react31.default.createElement(me, { ref: p4, ...r11, ...R5, beforeEnter: f12, beforeLeave: j4 }) }, theirProps: {}, defaultTag: import_react31.Fragment, features: fe, visible: C5 === "visible", name: "Transition" })));
}
function Le(e5, t9) {
  let n10 = (0, import_react31.useContext)(w5) !== null, l6 = u6() !== null;
  return import_react31.default.createElement(import_react31.default.Fragment, null, !n10 && l6 ? import_react31.default.createElement(X3, { ref: t9, ...e5 }) : import_react31.default.createElement(me, { ref: t9, ...e5 }));
}
var X3 = K(Ie);
var me = K(Ae);
var Fe = K(Le);
var ze = Object.assign(X3, { Child: Fe, Root: X3 });

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
"use client";
var Oe = ((o9) => (o9[o9.Open = 0] = "Open", o9[o9.Closed = 1] = "Closed", o9))(Oe || {});
var he = ((t9) => (t9[t9.SetTitleId = 0] = "SetTitleId", t9))(he || {});
var Se = { [0](e5, t9) {
  return e5.titleId === t9.id ? e5 : { ...e5, titleId: t9.id };
} };
var k2 = (0, import_react32.createContext)(null);
k2.displayName = "DialogContext";
function O6(e5) {
  let t9 = (0, import_react32.useContext)(k2);
  if (t9 === null) {
    let o9 = new Error(`<${e5} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o9, O6), o9;
  }
  return t9;
}
function Ie2(e5, t9) {
  return u2(t9.type, Se, e5, t9);
}
var V2 = K(function(t9, o9) {
  let a14 = (0, import_react7.useId)(), { id: l6 = `headlessui-dialog-${a14}`, open: i9, onClose: p4, initialFocus: d8, role: s9 = "dialog", autoFocus: f12 = true, __demoMode: u9 = false, unmount: P4 = false, ...h4 } = t9, R5 = (0, import_react32.useRef)(false);
  s9 = function() {
    return s9 === "dialog" || s9 === "alertdialog" ? s9 : (R5.current || (R5.current = true, console.warn(`Invalid role [${s9}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let c10 = u6();
  i9 === void 0 && c10 !== null && (i9 = (c10 & i7.Open) === i7.Open);
  let T7 = (0, import_react32.useRef)(null), S6 = y(T7, o9), F3 = n6(T7), g2 = i9 ? 0 : 1, [b7, q2] = (0, import_react32.useReducer)(Ie2, { titleId: null, descriptionId: null, panelRef: (0, import_react32.createRef)() }), m8 = o4(() => p4(false)), w6 = o4((r11) => q2({ type: 0, id: r11 })), D2 = l4() ? g2 === 0 : false, [z, Q] = te(), Z2 = { get current() {
    var r11;
    return (r11 = b7.panelRef.current) != null ? r11 : T7.current;
  } }, v3 = b5(), { resolveContainers: I4 } = R4({ mainTreeNode: v3, portals: z, defaultContainers: [Z2] }), B = c10 !== null ? (c10 & i7.Closing) === i7.Closing : false;
  y2(u9 || B ? false : D2, { allowed: o4(() => {
    var r11, H5;
    return [(H5 = (r11 = T7.current) == null ? void 0 : r11.closest("[data-headlessui-portal]")) != null ? H5 : null];
  }), disallowed: o4(() => {
    var r11;
    return [(r11 = v3 == null ? void 0 : v3.closest("body > *:not(#headlessui-portal-root)")) != null ? r11 : null];
  }) }), R(D2, I4, (r11) => {
    r11.preventDefault(), m8();
  }), a11(D2, F3 == null ? void 0 : F3.defaultView, (r11) => {
    r11.preventDefault(), r11.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), m8();
  }), f6(u9 || B ? false : D2, F3, I4), m4(D2, T7, m8);
  let [ee2, te3] = w2(), oe = (0, import_react32.useMemo)(() => [{ dialogState: g2, close: m8, setTitleId: w6, unmount: P4 }, b7], [g2, b7, m8, w6, P4]), U4 = (0, import_react32.useMemo)(() => ({ open: g2 === 0 }), [g2]), ne2 = { ref: S6, id: l6, role: s9, tabIndex: -1, "aria-modal": u9 ? void 0 : g2 === 0 ? true : void 0, "aria-labelledby": b7.titleId, "aria-describedby": ee2, unmount: P4 }, re3 = !f9(), y5 = x4.None;
  D2 && !u9 && (y5 |= x4.RestoreFocus, y5 |= x4.TabLock, f12 && (y5 |= x4.AutoFocus), re3 && (y5 |= x4.InitialFocus));
  let le = L();
  return import_react32.default.createElement(s7, null, import_react32.default.createElement(l5, { force: true }, import_react32.default.createElement(re, null, import_react32.default.createElement(k2.Provider, { value: oe }, import_react32.default.createElement(X2, { target: T7 }, import_react32.default.createElement(l5, { force: false }, import_react32.default.createElement(te3, { slot: U4 }, import_react32.default.createElement(Q, null, import_react32.default.createElement(ye, { initialFocus: d8, initialFocusFallback: T7, containers: I4, features: y5 }, import_react32.default.createElement(C3, { value: m8 }, le({ ourProps: ne2, theirProps: h4, slot: U4, defaultTag: Me, features: Ge, visible: g2 === 0, name: "Dialog" })))))))))));
});
var Me = "div";
var Ge = O.RenderStrategy | O.Static;
function ke(e5, t9) {
  let { transition: o9 = false, open: a14, ...l6 } = e5, i9 = u6(), p4 = e5.hasOwnProperty("open") || i9 !== null, d8 = e5.hasOwnProperty("onClose");
  if (!p4 && !d8)
    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!p4)
    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!d8)
    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!i9 && typeof e5.open != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e5.open}`);
  if (typeof e5.onClose != "function")
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e5.onClose}`);
  return (a14 !== void 0 || o9) && !l6.static ? import_react32.default.createElement(O4, null, import_react32.default.createElement(ze, { show: a14, transition: o9, unmount: l6.unmount }, import_react32.default.createElement(V2, { ref: t9, ...l6 }))) : import_react32.default.createElement(O4, null, import_react32.default.createElement(V2, { ref: t9, open: a14, ...l6 }));
}
var we = "div";
function Be(e5, t9) {
  let o9 = (0, import_react7.useId)(), { id: a14 = `headlessui-dialog-panel-${o9}`, transition: l6 = false, ...i9 } = e5, [{ dialogState: p4, unmount: d8 }, s9] = O6("Dialog.Panel"), f12 = y(t9, s9.panelRef), u9 = (0, import_react32.useMemo)(() => ({ open: p4 === 0 }), [p4]), P4 = o4((S6) => {
    S6.stopPropagation();
  }), h4 = { ref: f12, id: a14, onClick: P4 }, R5 = l6 ? Fe : import_react32.Fragment, c10 = l6 ? { unmount: d8 } : {}, T7 = L();
  return import_react32.default.createElement(R5, { ...c10 }, T7({ ourProps: h4, theirProps: i9, slot: u9, defaultTag: we, name: "Dialog.Panel" }));
}
var Ue = "div";
function He2(e5, t9) {
  let { transition: o9 = false, ...a14 } = e5, [{ dialogState: l6, unmount: i9 }] = O6("Dialog.Backdrop"), p4 = (0, import_react32.useMemo)(() => ({ open: l6 === 0 }), [l6]), d8 = { ref: t9, "aria-hidden": true }, s9 = o9 ? Fe : import_react32.Fragment, f12 = o9 ? { unmount: i9 } : {}, u9 = L();
  return import_react32.default.createElement(s9, { ...f12 }, u9({ ourProps: d8, theirProps: a14, slot: p4, defaultTag: Ue, name: "Dialog.Backdrop" }));
}
var Ne = "h2";
function We(e5, t9) {
  let o9 = (0, import_react7.useId)(), { id: a14 = `headlessui-dialog-title-${o9}`, ...l6 } = e5, [{ dialogState: i9, setTitleId: p4 }] = O6("Dialog.Title"), d8 = y(t9);
  (0, import_react32.useEffect)(() => (p4(a14), () => p4(null)), [a14, p4]);
  let s9 = (0, import_react32.useMemo)(() => ({ open: i9 === 0 }), [i9]), f12 = { ref: d8, id: a14 };
  return L()({ ourProps: f12, theirProps: l6, slot: s9, defaultTag: Ne, name: "Dialog.Title" });
}
var $e = K(ke);
var je = K(Be);
var Dt = K(He2);
var Ye = K(We);
var yt = Object.assign($e, { Panel: je, Title: Ye, Description: H2 });

// app/components/CartSidebar.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/CartSidebar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/CartSidebar.tsx"
  );
  import.meta.hot.lastModified = "1732701893306.343";
}
function formatOptionName(key) {
  const optionDisplayNames = {
    "farbe": "Farbe",
    "tischhoehe": "Tischh\xF6he",
    "tischplattengr\xF6\xDFe": "Tischplattengr\xF6\xDFe",
    "tischplattengroesse": "Tischplattengr\xF6\xDFe",
    "sitzhoehe": "Sitzh\xF6he"
  };
  return optionDisplayNames[key.toLowerCase()] || key.charAt(0).toUpperCase() + key.slice(1);
}
function formatOptionValue(key, value) {
  if (key.toLowerCase().includes("hoehe") || key.toLowerCase().includes("groesse") || key.toLowerCase().includes("gr\xF6\xDFe")) {
    if (!value.toLowerCase().includes("cm")) {
      return `${value} cm`;
    }
  }
  return value;
}
function CartItem({
  item,
  onUpdateQuantity,
  onRemove
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex py-6", children: [
    item.image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: item.image, alt: item.name, className: "h-full w-full object-cover object-center" }, void 0, false, {
      fileName: "app/components/CartSidebar.tsx",
      lineNumber: 59,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/CartSidebar.tsx",
      lineNumber: 58,
      columnNumber: 22
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4 flex flex-1 flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between text-base font-medium text-gray-900", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: item.name }, void 0, false, {
            fileName: "app/components/CartSidebar.tsx",
            lineNumber: 65,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "ml-4", children: formatPrice(item.price) }, void 0, false, {
            fileName: "app/components/CartSidebar.tsx",
            lineNumber: 66,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/CartSidebar.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, this),
        item.selectedOptions && Object.keys(item.selectedOptions).length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { className: "mt-2 space-y-1 text-sm text-gray-500", children: Object.entries(item.selectedOptions).map(([key, value]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "font-medium text-gray-700", children: [
            formatOptionName(key),
            ":"
          ] }, void 0, true, {
            fileName: "app/components/CartSidebar.tsx",
            lineNumber: 72,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "ml-2", children: formatOptionValue(key, value) }, void 0, false, {
            fileName: "app/components/CartSidebar.tsx",
            lineNumber: 73,
            columnNumber: 19
          }, this)
        ] }, key, true, {
          fileName: "app/components/CartSidebar.tsx",
          lineNumber: 71,
          columnNumber: 75
        }, this)) }, void 0, false, {
          fileName: "app/components/CartSidebar.tsx",
          lineNumber: 70,
          columnNumber: 84
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/CartSidebar.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 items-end justify-between text-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "rounded-md bg-white p-1 text-gray-400 hover:text-gray-500", onClick: () => onUpdateQuantity(Math.max(1, item.quantity - 1)), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Minus, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/components/CartSidebar.tsx",
            lineNumber: 81,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/CartSidebar.tsx",
            lineNumber: 80,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-500", children: item.quantity }, void 0, false, {
            fileName: "app/components/CartSidebar.tsx",
            lineNumber: 83,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "rounded-md bg-white p-1 text-gray-400 hover:text-gray-500", onClick: () => onUpdateQuantity(item.quantity + 1), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/components/CartSidebar.tsx",
            lineNumber: 85,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/CartSidebar.tsx",
            lineNumber: 84,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/CartSidebar.tsx",
          lineNumber: 79,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "font-medium text-indigo-600 hover:text-indigo-500", onClick: onRemove, children: "Entfernen" }, void 0, false, {
          fileName: "app/components/CartSidebar.tsx",
          lineNumber: 88,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/CartSidebar.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/CartSidebar.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this)
  ] }, item.id, true, {
    fileName: "app/components/CartSidebar.tsx",
    lineNumber: 57,
    columnNumber: 10
  }, this);
}
_c = CartItem;
function CartSidebar({
  isOpen,
  onClose
}) {
  _s();
  const {
    items,
    updateQuantity,
    removeItem,
    total
  } = useCart();
  const isHydrated = useHydrated();
  if (typeof window === "undefined") {
    return null;
  }
  (0, import_react33.useEffect)(() => {
    console.log("[CartSidebar] Component mounted");
    return () => console.log("[CartSidebar] Component unmounted");
  }, []);
  (0, import_react33.useEffect)(() => {
    console.log("[CartSidebar] Cart items:", items);
  }, [items]);
  const handleQuantityChange = (id, selectedOptions, quantity) => {
    if (!isHydrated)
      return;
    console.log("[CartSidebar] Updating quantity:", {
      id,
      selectedOptions,
      quantity
    });
    updateQuantity(id, selectedOptions, quantity);
  };
  const handleRemoveItem = (id, selectedOptions) => {
    if (!isHydrated)
      return;
    console.log("[CartSidebar] Removing item:", {
      id,
      selectedOptions
    });
    removeItem(id, selectedOptions);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ze.Root, { show: isOpen, as: import_react33.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(yt, { as: "div", className: "relative z-50", onClose, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ze.Child, { as: import_react33.Fragment, enter: "ease-in-out duration-500", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in-out duration-500", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }, void 0, false, {
      fileName: "app/components/CartSidebar.tsx",
      lineNumber: 140,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/CartSidebar.tsx",
      lineNumber: 139,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ze.Child, { as: import_react33.Fragment, enter: "transform transition ease-in-out duration-500 sm:duration-700", enterFrom: "translate-x-full", enterTo: "translate-x-0", leave: "transform transition ease-in-out duration-500 sm:duration-700", leaveFrom: "translate-x-0", leaveTo: "translate-x-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(yt.Panel, { className: "pointer-events-auto w-screen max-w-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-full flex-col overflow-y-scroll bg-white shadow-xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 overflow-y-auto px-4 py-6 sm:px-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(yt.Title, { className: "text-lg font-medium text-gray-900", children: "Shopping cart" }, void 0, false, {
            fileName: "app/components/CartSidebar.tsx",
            lineNumber: 151,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3 flex h-7 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "relative -m-2 p-2 text-gray-400 hover:text-gray-500", onClick: onClose, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute -inset-0.5" }, void 0, false, {
              fileName: "app/components/CartSidebar.tsx",
              lineNumber: 156,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Close panel" }, void 0, false, {
              fileName: "app/components/CartSidebar.tsx",
              lineNumber: 157,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/components/CartSidebar.tsx",
              lineNumber: 158,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/CartSidebar.tsx",
            lineNumber: 155,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/components/CartSidebar.tsx",
            lineNumber: 154,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/CartSidebar.tsx",
          lineNumber: 150,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8", children: !items || items.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center justify-center text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShoppingCart, { className: "h-12 w-12 text-gray-400 mb-4" }, void 0, false, {
            fileName: "app/components/CartSidebar.tsx",
            lineNumber: 165,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-medium text-gray-900", children: "Your cart is empty" }, void 0, false, {
            fileName: "app/components/CartSidebar.tsx",
            lineNumber: 166,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500", children: "Start adding some items to your cart!" }, void 0, false, {
            fileName: "app/components/CartSidebar.tsx",
            lineNumber: 169,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/CartSidebar.tsx",
          lineNumber: 164,
          columnNumber: 57
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "divide-y divide-gray-200", children: items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartItem, { item, onUpdateQuantity: (newQuantity) => handleQuantityChange(item.id, item.selectedOptions, newQuantity), onRemove: () => handleRemoveItem(item.id, item.selectedOptions) }, `${item.id}-${JSON.stringify(item.selectedOptions)}`, false, {
          fileName: "app/components/CartSidebar.tsx",
          lineNumber: 173,
          columnNumber: 48
        }, this)) }, void 0, false, {
          fileName: "app/components/CartSidebar.tsx",
          lineNumber: 172,
          columnNumber: 36
        }, this) }, void 0, false, {
          fileName: "app/components/CartSidebar.tsx",
          lineNumber: 163,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/CartSidebar.tsx",
        lineNumber: 149,
        columnNumber: 21
      }, this),
      items && items.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-t border-gray-200 px-4 py-6 sm:px-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between text-base font-medium text-gray-900", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Subtotal" }, void 0, false, {
            fileName: "app/components/CartSidebar.tsx",
            lineNumber: 180,
            columnNumber: 27
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: formatPrice(total) }, void 0, false, {
            fileName: "app/components/CartSidebar.tsx",
            lineNumber: 181,
            columnNumber: 27
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/CartSidebar.tsx",
          lineNumber: 179,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-0.5 text-sm text-gray-500", children: "Shipping and taxes calculated at checkout." }, void 0, false, {
          fileName: "app/components/CartSidebar.tsx",
          lineNumber: 183,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/checkout", onClick: onClose, className: "flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700", children: "Checkout" }, void 0, false, {
          fileName: "app/components/CartSidebar.tsx",
          lineNumber: 187,
          columnNumber: 27
        }, this) }, void 0, false, {
          fileName: "app/components/CartSidebar.tsx",
          lineNumber: 186,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 flex justify-center text-center text-sm text-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "or",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "font-medium text-indigo-600 hover:text-indigo-500", onClick: onClose, children: [
            "Continue Shopping",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { "aria-hidden": "true", children: " \u2192" }, void 0, false, {
              fileName: "app/components/CartSidebar.tsx",
              lineNumber: 196,
              columnNumber: 31
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/CartSidebar.tsx",
            lineNumber: 194,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/CartSidebar.tsx",
          lineNumber: 192,
          columnNumber: 27
        }, this) }, void 0, false, {
          fileName: "app/components/CartSidebar.tsx",
          lineNumber: 191,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/CartSidebar.tsx",
        lineNumber: 178,
        columnNumber: 51
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/CartSidebar.tsx",
      lineNumber: 148,
      columnNumber: 19
    }, this) }, void 0, false, {
      fileName: "app/components/CartSidebar.tsx",
      lineNumber: 147,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/CartSidebar.tsx",
      lineNumber: 146,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/CartSidebar.tsx",
      lineNumber: 145,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/CartSidebar.tsx",
      lineNumber: 144,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/CartSidebar.tsx",
      lineNumber: 143,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/CartSidebar.tsx",
    lineNumber: 138,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/CartSidebar.tsx",
    lineNumber: 137,
    columnNumber: 10
  }, this);
}
_s(CartSidebar, "BjdOgG6ZiQqguDOjyO2Yaznc4a0=", false, function() {
  return [useCart, useHydrated];
});
_c2 = CartSidebar;
var _c;
var _c2;
$RefreshReg$(_c, "CartItem");
$RefreshReg$(_c2, "CartSidebar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Navigation.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Navigation.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Navigation.tsx"
  );
  import.meta.hot.lastModified = "1732710465839.7144";
}
var menuItems = [{
  name: "St\xFChle",
  icon: CircleDot,
  href: "/kategorien/stuehle"
}, {
  name: "Tische",
  icon: Table2,
  href: "/kategorien/tische"
}, {
  name: "Sessel",
  icon: Armchair,
  href: "/kategorien/sessel"
}, {
  name: "Schr\xE4nke",
  icon: BookmarkPlus,
  href: "/kategorien/schraenke"
}, {
  name: "Akustik",
  icon: Sofa,
  href: "/kategorien/akustik"
}, {
  name: "Zubeh\xF6r",
  icon: Package,
  href: "/kategorien/zubehoer"
}];
function Navigation() {
  _s2();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, import_react37.useState)(false);
  const [isCartOpen, setIsCartOpen] = (0, import_react37.useState)(false);
  const {
    items
  } = useCart();
  (0, import_react37.useEffect)(() => {
    return () => {
    };
  }, []);
  (0, import_react37.useEffect)(() => {
  }, [isMobileMenuOpen]);
  (0, import_react37.useEffect)(() => {
  }, [isCartOpen]);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  const closeAll = () => {
    setIsMobileMenuOpen(false);
    setIsCartOpen(false);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "fixed top-0 left-0 right-0 bg-white shadow-lg z-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full mx-auto px-4 sm:px-6 desktop:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between h-16 desktop:grid desktop:grid-cols-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { onClick: toggleMobileMenu, className: "desktop:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500", children: isMobileMenuOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(X, { className: "block h-6 w-6" }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 80,
          columnNumber: 35
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Menu, { className: "block h-6 w-6" }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 80,
          columnNumber: 69
        }, this) }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 79,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/", className: "hidden desktop:flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "/images/logo.svg", alt: "Logo", className: "h-8" }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 83,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 82,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/", className: "desktop:hidden flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "/images/logo.svg", alt: "Logo", className: "h-8" }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 90,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 89,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden desktop:flex items-center justify-center gap-6", children: menuItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: item.href, className: "flex items-center text-gray-700 hover:text-gray-900 px-2 py-2 rounded-md text-sm font-medium whitespace-nowrap", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(item.icon, { className: "h-5 w-5 mr-1.5 flex-shrink-0" }, void 0, false, {
            fileName: "app/components/Navigation.tsx",
            lineNumber: 94,
            columnNumber: 19
          }, this),
          item.name
        ] }, item.name, true, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 93,
          columnNumber: 38
        }, this)) }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 92,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 88,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-end gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "tel:+49-30-123456789", className: "hidden desktop:flex items-center text-gray-700 hover:text-gray-900 whitespace-nowrap", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Phone, { className: "h-5 w-5 mr-2 flex-shrink-0" }, void 0, false, {
            fileName: "app/components/Navigation.tsx",
            lineNumber: 103,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-sm font-medium", children: "+49 30 123456789" }, void 0, false, {
            fileName: "app/components/Navigation.tsx",
            lineNumber: 104,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 102,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { onClick: toggleCart, className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShoppingCart, { className: "h-6 w-6 text-gray-700 hover:text-gray-900", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/components/Navigation.tsx",
            lineNumber: 107,
            columnNumber: 15
          }, this),
          items && items.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "ml-2 text-sm font-medium text-blue-600 group-hover:text-blue-800", children: items.length }, void 0, false, {
            fileName: "app/components/Navigation.tsx",
            lineNumber: 108,
            columnNumber: 45
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 106,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 101,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 76,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this),
    isMobileMenuOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "fixed inset-0 z-40", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "fixed inset-0 bg-black bg-opacity-25", onClick: closeAll }, void 0, false, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 118,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "fixed inset-y-0 left-0 max-w-xs w-full bg-white shadow-lg z-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col h-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between h-14 px-4 border-b border-gray-200", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-lg sm:text-xl font-bold text-gray-900", children: "Kategorien" }, void 0, false, {
            fileName: "app/components/Navigation.tsx",
            lineNumber: 122,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { onClick: closeAll, className: "inline-flex items-center justify-center p-1 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(X, { className: "block h-5 w-5" }, void 0, false, {
            fileName: "app/components/Navigation.tsx",
            lineNumber: 124,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/Navigation.tsx",
            lineNumber: 123,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 121,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-1 pt-2 pb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "px-4 space-y-1", children: [
          menuItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: item.href, className: "flex items-center px-2 py-2 rounded-md text-sm sm:text-base font-medium text-gray-900 hover:bg-gray-100", onClick: closeAll, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(item.icon, { className: "h-4 w-4 mr-2" }, void 0, false, {
              fileName: "app/components/Navigation.tsx",
              lineNumber: 130,
              columnNumber: 23
            }, this),
            item.name
          ] }, item.name, true, {
            fileName: "app/components/Navigation.tsx",
            lineNumber: 129,
            columnNumber: 42
          }, this)),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-4 px-2 py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "tel:+49-30-123456789", className: "flex items-center text-gray-700 hover:text-gray-900", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Phone, { className: "h-4 w-4 mr-2" }, void 0, false, {
              fileName: "app/components/Navigation.tsx",
              lineNumber: 135,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-sm sm:text-base font-medium", children: "+49 30 123456789" }, void 0, false, {
              fileName: "app/components/Navigation.tsx",
              lineNumber: 136,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Navigation.tsx",
            lineNumber: 134,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/components/Navigation.tsx",
            lineNumber: 133,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 128,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 127,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 120,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 119,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 117,
      columnNumber: 28
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CartSidebar, { isOpen: isCartOpen, onClose: closeAll }, void 0, false, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 146,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Navigation.tsx",
    lineNumber: 74,
    columnNumber: 10
  }, this);
}
_s2(Navigation, "AFnzb81Ng/j4uY1/iY4WNvFiZnM=", false, function() {
  return [useCart];
});
_c3 = Navigation;
var _c3;
$RefreshReg$(_c3, "Navigation");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Navigation
};
//# sourceMappingURL=/build/_shared/chunk-T3ZCL7F3.js.map
