var Ru = (e) => {
  throw TypeError(e);
};
var Cs = (e, t, n) => t.has(e) || Ru("Cannot " + n);
var P = (e, t, n) => (
    Cs(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  G = (e, t, n) =>
    t.has(e)
      ? Ru("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, n),
  F = (e, t, n, r) => (
    Cs(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  ),
  ye = (e, t, n) => (Cs(e, t, "access private method"), n);
var Io = (e, t, n, r) => ({
  set _(o) {
    F(e, t, o, n);
  },
  get _() {
    return P(e, t, r);
  },
});
function Pm(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function Nd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Pd = { exports: {} },
  qi = {},
  Td = { exports: {} },
  W = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jo = Symbol.for("react.element"),
  Tm = Symbol.for("react.portal"),
  jm = Symbol.for("react.fragment"),
  Rm = Symbol.for("react.strict_mode"),
  bm = Symbol.for("react.profiler"),
  _m = Symbol.for("react.provider"),
  Am = Symbol.for("react.context"),
  Om = Symbol.for("react.forward_ref"),
  Lm = Symbol.for("react.suspense"),
  Mm = Symbol.for("react.memo"),
  Im = Symbol.for("react.lazy"),
  bu = Symbol.iterator;
function Dm(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (bu && e[bu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var jd = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Rd = Object.assign,
  bd = {};
function Nr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = bd),
    (this.updater = n || jd);
}
Nr.prototype.isReactComponent = {};
Nr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Nr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function _d() {}
_d.prototype = Nr.prototype;
function sa(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = bd),
    (this.updater = n || jd);
}
var la = (sa.prototype = new _d());
la.constructor = sa;
Rd(la, Nr.prototype);
la.isPureReactComponent = !0;
var _u = Array.isArray,
  Ad = Object.prototype.hasOwnProperty,
  aa = { current: null },
  Od = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ld(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Ad.call(t, r) && !Od.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: jo,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: aa.current,
  };
}
function Fm(e, t) {
  return {
    $$typeof: jo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ua(e) {
  return typeof e == "object" && e !== null && e.$$typeof === jo;
}
function zm(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Au = /\/+/g;
function Es(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? zm("" + e.key)
    : t.toString(36);
}
function oi(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case jo:
          case Tm:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + Es(s, 0) : r),
      _u(o)
        ? ((n = ""),
          e != null && (n = e.replace(Au, "$&/") + "/"),
          oi(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (ua(o) &&
            (o = Fm(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Au, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), _u(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var a = r + Es(i, l);
      s += oi(i, t, n, a, o);
    }
  else if (((a = Dm(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + Es(i, l++)), (s += oi(i, t, n, a, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function Do(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    oi(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function $m(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Pe = { current: null },
  ii = { transition: null },
  Um = {
    ReactCurrentDispatcher: Pe,
    ReactCurrentBatchConfig: ii,
    ReactCurrentOwner: aa,
  };
function Md() {
  throw Error("act(...) is not supported in production builds of React.");
}
W.Children = {
  map: Do,
  forEach: function (e, t, n) {
    Do(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Do(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Do(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ua(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
W.Component = Nr;
W.Fragment = jm;
W.Profiler = bm;
W.PureComponent = sa;
W.StrictMode = Rm;
W.Suspense = Lm;
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Um;
W.act = Md;
W.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Rd({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = aa.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Ad.call(t, a) &&
        !Od.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: jo, type: e.type, key: o, ref: i, props: r, _owner: s };
};
W.createContext = function (e) {
  return (
    (e = {
      $$typeof: Am,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: _m, _context: e }),
    (e.Consumer = e)
  );
};
W.createElement = Ld;
W.createFactory = function (e) {
  var t = Ld.bind(null, e);
  return (t.type = e), t;
};
W.createRef = function () {
  return { current: null };
};
W.forwardRef = function (e) {
  return { $$typeof: Om, render: e };
};
W.isValidElement = ua;
W.lazy = function (e) {
  return { $$typeof: Im, _payload: { _status: -1, _result: e }, _init: $m };
};
W.memo = function (e, t) {
  return { $$typeof: Mm, type: e, compare: t === void 0 ? null : t };
};
W.startTransition = function (e) {
  var t = ii.transition;
  ii.transition = {};
  try {
    e();
  } finally {
    ii.transition = t;
  }
};
W.unstable_act = Md;
W.useCallback = function (e, t) {
  return Pe.current.useCallback(e, t);
};
W.useContext = function (e) {
  return Pe.current.useContext(e);
};
W.useDebugValue = function () {};
W.useDeferredValue = function (e) {
  return Pe.current.useDeferredValue(e);
};
W.useEffect = function (e, t) {
  return Pe.current.useEffect(e, t);
};
W.useId = function () {
  return Pe.current.useId();
};
W.useImperativeHandle = function (e, t, n) {
  return Pe.current.useImperativeHandle(e, t, n);
};
W.useInsertionEffect = function (e, t) {
  return Pe.current.useInsertionEffect(e, t);
};
W.useLayoutEffect = function (e, t) {
  return Pe.current.useLayoutEffect(e, t);
};
W.useMemo = function (e, t) {
  return Pe.current.useMemo(e, t);
};
W.useReducer = function (e, t, n) {
  return Pe.current.useReducer(e, t, n);
};
W.useRef = function (e) {
  return Pe.current.useRef(e);
};
W.useState = function (e) {
  return Pe.current.useState(e);
};
W.useSyncExternalStore = function (e, t, n) {
  return Pe.current.useSyncExternalStore(e, t, n);
};
W.useTransition = function () {
  return Pe.current.useTransition();
};
W.version = "18.3.1";
Td.exports = W;
var x = Td.exports;
const Wt = Nd(x),
  Wm = Pm({ __proto__: null, default: Wt }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vm = x,
  Hm = Symbol.for("react.element"),
  Bm = Symbol.for("react.fragment"),
  Qm = Object.prototype.hasOwnProperty,
  Gm = Vm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Km = { key: !0, ref: !0, __self: !0, __source: !0 };
function Id(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Qm.call(t, r) && !Km.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Hm,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Gm.current,
  };
}
qi.Fragment = Bm;
qi.jsx = Id;
qi.jsxs = Id;
Pd.exports = qi;
var c = Pd.exports,
  Dd = { exports: {} },
  We = {},
  Fd = { exports: {} },
  zd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, b) {
    var I = T.length;
    T.push(b);
    e: for (; 0 < I; ) {
      var $ = (I - 1) >>> 1,
        J = T[$];
      if (0 < o(J, b)) (T[$] = b), (T[I] = J), (I = $);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var b = T[0],
      I = T.pop();
    if (I !== b) {
      T[0] = I;
      e: for (var $ = 0, J = T.length, Ze = J >>> 1; $ < Ze; ) {
        var He = 2 * ($ + 1) - 1,
          _r = T[He],
          Ct = He + 1,
          gn = T[Ct];
        if (0 > o(_r, I))
          Ct < J && 0 > o(gn, _r)
            ? ((T[$] = gn), (T[Ct] = I), ($ = Ct))
            : ((T[$] = _r), (T[He] = I), ($ = He));
        else if (Ct < J && 0 > o(gn, I)) (T[$] = gn), (T[Ct] = I), ($ = Ct);
        else break e;
      }
    }
    return b;
  }
  function o(T, b) {
    var I = T.sortIndex - b.sortIndex;
    return I !== 0 ? I : T.id - b.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    d = 1,
    p = null,
    m = 3,
    g = !1,
    w = !1,
    v = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(T) {
    for (var b = n(u); b !== null; ) {
      if (b.callback === null) r(u);
      else if (b.startTime <= T)
        r(u), (b.sortIndex = b.expirationTime), t(a, b);
      else break;
      b = n(u);
    }
  }
  function k(T) {
    if (((v = !1), y(T), !w))
      if (n(a) !== null) (w = !0), U(C);
      else {
        var b = n(u);
        b !== null && B(k, b.startTime - T);
      }
  }
  function C(T, b) {
    (w = !1), v && ((v = !1), h(j), (j = -1)), (g = !0);
    var I = m;
    try {
      for (
        y(b), p = n(a);
        p !== null && (!(p.expirationTime > b) || (T && !z()));

      ) {
        var $ = p.callback;
        if (typeof $ == "function") {
          (p.callback = null), (m = p.priorityLevel);
          var J = $(p.expirationTime <= b);
          (b = e.unstable_now()),
            typeof J == "function" ? (p.callback = J) : p === n(a) && r(a),
            y(b);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var Ze = !0;
      else {
        var He = n(u);
        He !== null && B(k, He.startTime - b), (Ze = !1);
      }
      return Ze;
    } finally {
      (p = null), (m = I), (g = !1);
    }
  }
  var E = !1,
    N = null,
    j = -1,
    L = 5,
    A = -1;
  function z() {
    return !(e.unstable_now() - A < L);
  }
  function M() {
    if (N !== null) {
      var T = e.unstable_now();
      A = T;
      var b = !0;
      try {
        b = N(!0, T);
      } finally {
        b ? V() : ((E = !1), (N = null));
      }
    } else E = !1;
  }
  var V;
  if (typeof f == "function")
    V = function () {
      f(M);
    };
  else if (typeof MessageChannel < "u") {
    var O = new MessageChannel(),
      Q = O.port2;
    (O.port1.onmessage = M),
      (V = function () {
        Q.postMessage(null);
      });
  } else
    V = function () {
      S(M, 0);
    };
  function U(T) {
    (N = T), E || ((E = !0), V());
  }
  function B(T, b) {
    j = S(function () {
      T(e.unstable_now());
    }, b);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || g || ((w = !0), U(C));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (L = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (T) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var b = 3;
          break;
        default:
          b = m;
      }
      var I = m;
      m = b;
      try {
        return T();
      } finally {
        m = I;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, b) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var I = m;
      m = T;
      try {
        return b();
      } finally {
        m = I;
      }
    }),
    (e.unstable_scheduleCallback = function (T, b, I) {
      var $ = e.unstable_now();
      switch (
        (typeof I == "object" && I !== null
          ? ((I = I.delay), (I = typeof I == "number" && 0 < I ? $ + I : $))
          : (I = $),
        T)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = I + J),
        (T = {
          id: d++,
          callback: b,
          priorityLevel: T,
          startTime: I,
          expirationTime: J,
          sortIndex: -1,
        }),
        I > $
          ? ((T.sortIndex = I),
            t(u, T),
            n(a) === null &&
              T === n(u) &&
              (v ? (h(j), (j = -1)) : (v = !0), B(k, I - $)))
          : ((T.sortIndex = J), t(a, T), w || g || ((w = !0), U(C))),
        T
      );
    }),
    (e.unstable_shouldYield = z),
    (e.unstable_wrapCallback = function (T) {
      var b = m;
      return function () {
        var I = m;
        m = b;
        try {
          return T.apply(this, arguments);
        } finally {
          m = I;
        }
      };
    });
})(zd);
Fd.exports = zd;
var qm = Fd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ym = x,
  Ue = qm;
function R(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var $d = new Set(),
  oo = {};
function Dn(e, t) {
  mr(e, t), mr(e + "Capture", t);
}
function mr(e, t) {
  for (oo[e] = t, e = 0; e < t.length; e++) $d.add(t[e]);
}
var _t = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ol = Object.prototype.hasOwnProperty,
  Xm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ou = {},
  Lu = {};
function Zm(e) {
  return ol.call(Lu, e)
    ? !0
    : ol.call(Ou, e)
    ? !1
    : Xm.test(e)
    ? (Lu[e] = !0)
    : ((Ou[e] = !0), !1);
}
function Jm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function ey(e, t, n, r) {
  if (t === null || typeof t > "u" || Jm(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Te(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var me = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    me[e] = new Te(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  me[t] = new Te(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  me[e] = new Te(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  me[e] = new Te(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    me[e] = new Te(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  me[e] = new Te(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  me[e] = new Te(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  me[e] = new Te(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  me[e] = new Te(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ca = /[\-:]([a-z])/g;
function da(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ca, da);
    me[t] = new Te(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ca, da);
    me[t] = new Te(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ca, da);
  me[t] = new Te(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  me[e] = new Te(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
me.xlinkHref = new Te(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  me[e] = new Te(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function fa(e, t, n, r) {
  var o = me.hasOwnProperty(t) ? me[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (ey(t, n, o, r) && (n = null),
    r || o === null
      ? Zm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Dt = Ym.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Fo = Symbol.for("react.element"),
  $n = Symbol.for("react.portal"),
  Un = Symbol.for("react.fragment"),
  pa = Symbol.for("react.strict_mode"),
  il = Symbol.for("react.profiler"),
  Ud = Symbol.for("react.provider"),
  Wd = Symbol.for("react.context"),
  ha = Symbol.for("react.forward_ref"),
  sl = Symbol.for("react.suspense"),
  ll = Symbol.for("react.suspense_list"),
  ma = Symbol.for("react.memo"),
  Ht = Symbol.for("react.lazy"),
  Vd = Symbol.for("react.offscreen"),
  Mu = Symbol.iterator;
function Or(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Mu && e[Mu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var re = Object.assign,
  Ns;
function Vr(e) {
  if (Ns === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ns = (t && t[1]) || "";
    }
  return (
    `
` +
    Ns +
    e
  );
}
var Ps = !1;
function Ts(e, t) {
  if (!e || Ps) return "";
  Ps = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          l = i.length - 1;
        1 <= s && 0 <= l && o[s] !== i[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (o[s] !== i[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || o[s] !== i[l])) {
                var a =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (Ps = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Vr(e) : "";
}
function ty(e) {
  switch (e.tag) {
    case 5:
      return Vr(e.type);
    case 16:
      return Vr("Lazy");
    case 13:
      return Vr("Suspense");
    case 19:
      return Vr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ts(e.type, !1)), e;
    case 11:
      return (e = Ts(e.type.render, !1)), e;
    case 1:
      return (e = Ts(e.type, !0)), e;
    default:
      return "";
  }
}
function al(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Un:
      return "Fragment";
    case $n:
      return "Portal";
    case il:
      return "Profiler";
    case pa:
      return "StrictMode";
    case sl:
      return "Suspense";
    case ll:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Wd:
        return (e.displayName || "Context") + ".Consumer";
      case Ud:
        return (e._context.displayName || "Context") + ".Provider";
      case ha:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ma:
        return (
          (t = e.displayName || null), t !== null ? t : al(e.type) || "Memo"
        );
      case Ht:
        (t = e._payload), (e = e._init);
        try {
          return al(e(t));
        } catch {}
    }
  return null;
}
function ny(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return al(t);
    case 8:
      return t === pa ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function cn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Hd(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function ry(e) {
  var t = Hd(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function zo(e) {
  e._valueTracker || (e._valueTracker = ry(e));
}
function Bd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Hd(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function xi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ul(e, t) {
  var n = t.checked;
  return re({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Iu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = cn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Qd(e, t) {
  (t = t.checked), t != null && fa(e, "checked", t, !1);
}
function cl(e, t) {
  Qd(e, t);
  var n = cn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? dl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && dl(e, t.type, cn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Du(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function dl(e, t, n) {
  (t !== "number" || xi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Hr = Array.isArray;
function Zn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + cn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function fl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return re({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Fu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(R(92));
      if (Hr(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: cn(n) };
}
function Gd(e, t) {
  var n = cn(t.value),
    r = cn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function zu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Kd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function pl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Kd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var $o,
  qd = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        $o = $o || document.createElement("div"),
          $o.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = $o.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function io(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Gr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  oy = ["Webkit", "ms", "Moz", "O"];
Object.keys(Gr).forEach(function (e) {
  oy.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Gr[t] = Gr[e]);
  });
});
function Yd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Gr.hasOwnProperty(e) && Gr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Xd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Yd(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var iy = re(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function hl(e, t) {
  if (t) {
    if (iy[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function ml(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var yl = null;
function ya(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var vl = null,
  Jn = null,
  er = null;
function $u(e) {
  if ((e = _o(e))) {
    if (typeof vl != "function") throw Error(R(280));
    var t = e.stateNode;
    t && ((t = es(t)), vl(e.stateNode, e.type, t));
  }
}
function Zd(e) {
  Jn ? (er ? er.push(e) : (er = [e])) : (Jn = e);
}
function Jd() {
  if (Jn) {
    var e = Jn,
      t = er;
    if (((er = Jn = null), $u(e), t)) for (e = 0; e < t.length; e++) $u(t[e]);
  }
}
function ef(e, t) {
  return e(t);
}
function tf() {}
var js = !1;
function nf(e, t, n) {
  if (js) return e(t, n);
  js = !0;
  try {
    return ef(e, t, n);
  } finally {
    (js = !1), (Jn !== null || er !== null) && (tf(), Jd());
  }
}
function so(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = es(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(R(231, t, typeof n));
  return n;
}
var gl = !1;
if (_t)
  try {
    var Lr = {};
    Object.defineProperty(Lr, "passive", {
      get: function () {
        gl = !0;
      },
    }),
      window.addEventListener("test", Lr, Lr),
      window.removeEventListener("test", Lr, Lr);
  } catch {
    gl = !1;
  }
function sy(e, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var Kr = !1,
  wi = null,
  Si = !1,
  xl = null,
  ly = {
    onError: function (e) {
      (Kr = !0), (wi = e);
    },
  };
function ay(e, t, n, r, o, i, s, l, a) {
  (Kr = !1), (wi = null), sy.apply(ly, arguments);
}
function uy(e, t, n, r, o, i, s, l, a) {
  if ((ay.apply(this, arguments), Kr)) {
    if (Kr) {
      var u = wi;
      (Kr = !1), (wi = null);
    } else throw Error(R(198));
    Si || ((Si = !0), (xl = u));
  }
}
function Fn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function rf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Uu(e) {
  if (Fn(e) !== e) throw Error(R(188));
}
function cy(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Fn(e)), t === null)) throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Uu(o), e;
        if (i === r) return Uu(o), t;
        i = i.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, l = o.child; l; ) {
        if (l === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (l === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = i.child; l; ) {
          if (l === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (l === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function of(e) {
  return (e = cy(e)), e !== null ? sf(e) : null;
}
function sf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = sf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var lf = Ue.unstable_scheduleCallback,
  Wu = Ue.unstable_cancelCallback,
  dy = Ue.unstable_shouldYield,
  fy = Ue.unstable_requestPaint,
  se = Ue.unstable_now,
  py = Ue.unstable_getCurrentPriorityLevel,
  va = Ue.unstable_ImmediatePriority,
  af = Ue.unstable_UserBlockingPriority,
  ki = Ue.unstable_NormalPriority,
  hy = Ue.unstable_LowPriority,
  uf = Ue.unstable_IdlePriority,
  Yi = null,
  vt = null;
function my(e) {
  if (vt && typeof vt.onCommitFiberRoot == "function")
    try {
      vt.onCommitFiberRoot(Yi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var it = Math.clz32 ? Math.clz32 : gy,
  yy = Math.log,
  vy = Math.LN2;
function gy(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((yy(e) / vy) | 0)) | 0;
}
var Uo = 64,
  Wo = 4194304;
function Br(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ci(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? (r = Br(l)) : ((i &= s), i !== 0 && (r = Br(i)));
  } else (s = n & ~o), s !== 0 ? (r = Br(s)) : i !== 0 && (r = Br(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - it(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function xy(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wy(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - it(i),
      l = 1 << s,
      a = o[s];
    a === -1
      ? (!(l & n) || l & r) && (o[s] = xy(l, t))
      : a <= t && (e.expiredLanes |= l),
      (i &= ~l);
  }
}
function wl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function cf() {
  var e = Uo;
  return (Uo <<= 1), !(Uo & 4194240) && (Uo = 64), e;
}
function Rs(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ro(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - it(t)),
    (e[t] = n);
}
function Sy(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - it(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function ga(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - it(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var K = 0;
function df(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ff,
  xa,
  pf,
  hf,
  mf,
  Sl = !1,
  Vo = [],
  tn = null,
  nn = null,
  rn = null,
  lo = new Map(),
  ao = new Map(),
  Qt = [],
  ky =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Vu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      tn = null;
      break;
    case "dragenter":
    case "dragleave":
      nn = null;
      break;
    case "mouseover":
    case "mouseout":
      rn = null;
      break;
    case "pointerover":
    case "pointerout":
      lo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ao.delete(t.pointerId);
  }
}
function Mr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = _o(t)), t !== null && xa(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Cy(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (tn = Mr(tn, e, t, n, r, o)), !0;
    case "dragenter":
      return (nn = Mr(nn, e, t, n, r, o)), !0;
    case "mouseover":
      return (rn = Mr(rn, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return lo.set(i, Mr(lo.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), ao.set(i, Mr(ao.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function yf(e) {
  var t = Sn(e.target);
  if (t !== null) {
    var n = Fn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = rf(n)), t !== null)) {
          (e.blockedOn = t),
            mf(e.priority, function () {
              pf(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function si(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = kl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (yl = r), n.target.dispatchEvent(r), (yl = null);
    } else return (t = _o(n)), t !== null && xa(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Hu(e, t, n) {
  si(e) && n.delete(t);
}
function Ey() {
  (Sl = !1),
    tn !== null && si(tn) && (tn = null),
    nn !== null && si(nn) && (nn = null),
    rn !== null && si(rn) && (rn = null),
    lo.forEach(Hu),
    ao.forEach(Hu);
}
function Ir(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Sl ||
      ((Sl = !0),
      Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority, Ey)));
}
function uo(e) {
  function t(o) {
    return Ir(o, e);
  }
  if (0 < Vo.length) {
    Ir(Vo[0], e);
    for (var n = 1; n < Vo.length; n++) {
      var r = Vo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    tn !== null && Ir(tn, e),
      nn !== null && Ir(nn, e),
      rn !== null && Ir(rn, e),
      lo.forEach(t),
      ao.forEach(t),
      n = 0;
    n < Qt.length;
    n++
  )
    (r = Qt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Qt.length && ((n = Qt[0]), n.blockedOn === null); )
    yf(n), n.blockedOn === null && Qt.shift();
}
var tr = Dt.ReactCurrentBatchConfig,
  Ei = !0;
function Ny(e, t, n, r) {
  var o = K,
    i = tr.transition;
  tr.transition = null;
  try {
    (K = 1), wa(e, t, n, r);
  } finally {
    (K = o), (tr.transition = i);
  }
}
function Py(e, t, n, r) {
  var o = K,
    i = tr.transition;
  tr.transition = null;
  try {
    (K = 4), wa(e, t, n, r);
  } finally {
    (K = o), (tr.transition = i);
  }
}
function wa(e, t, n, r) {
  if (Ei) {
    var o = kl(e, t, n, r);
    if (o === null) zs(e, t, r, Ni, n), Vu(e, r);
    else if (Cy(o, e, t, n, r)) r.stopPropagation();
    else if ((Vu(e, r), t & 4 && -1 < ky.indexOf(e))) {
      for (; o !== null; ) {
        var i = _o(o);
        if (
          (i !== null && ff(i),
          (i = kl(e, t, n, r)),
          i === null && zs(e, t, r, Ni, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else zs(e, t, r, null, n);
  }
}
var Ni = null;
function kl(e, t, n, r) {
  if (((Ni = null), (e = ya(r)), (e = Sn(e)), e !== null))
    if (((t = Fn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = rf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ni = e), null;
}
function vf(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (py()) {
        case va:
          return 1;
        case af:
          return 4;
        case ki:
        case hy:
          return 16;
        case uf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Jt = null,
  Sa = null,
  li = null;
function gf() {
  if (li) return li;
  var e,
    t = Sa,
    n = t.length,
    r,
    o = "value" in Jt ? Jt.value : Jt.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (li = o.slice(e, 1 < r ? 1 - r : void 0));
}
function ai(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ho() {
  return !0;
}
function Bu() {
  return !1;
}
function Ve(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Ho
        : Bu),
      (this.isPropagationStopped = Bu),
      this
    );
  }
  return (
    re(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ho));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ho));
      },
      persist: function () {},
      isPersistent: Ho,
    }),
    t
  );
}
var Pr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ka = Ve(Pr),
  bo = re({}, Pr, { view: 0, detail: 0 }),
  Ty = Ve(bo),
  bs,
  _s,
  Dr,
  Xi = re({}, bo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ca,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Dr &&
            (Dr && e.type === "mousemove"
              ? ((bs = e.screenX - Dr.screenX), (_s = e.screenY - Dr.screenY))
              : (_s = bs = 0),
            (Dr = e)),
          bs);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : _s;
    },
  }),
  Qu = Ve(Xi),
  jy = re({}, Xi, { dataTransfer: 0 }),
  Ry = Ve(jy),
  by = re({}, bo, { relatedTarget: 0 }),
  As = Ve(by),
  _y = re({}, Pr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ay = Ve(_y),
  Oy = re({}, Pr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Ly = Ve(Oy),
  My = re({}, Pr, { data: 0 }),
  Gu = Ve(My),
  Iy = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Dy = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Fy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function zy(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Fy[e]) ? !!t[e] : !1;
}
function Ca() {
  return zy;
}
var $y = re({}, bo, {
    key: function (e) {
      if (e.key) {
        var t = Iy[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ai(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Dy[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ca,
    charCode: function (e) {
      return e.type === "keypress" ? ai(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ai(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Uy = Ve($y),
  Wy = re({}, Xi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ku = Ve(Wy),
  Vy = re({}, bo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ca,
  }),
  Hy = Ve(Vy),
  By = re({}, Pr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Qy = Ve(By),
  Gy = re({}, Xi, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Ky = Ve(Gy),
  qy = [9, 13, 27, 32],
  Ea = _t && "CompositionEvent" in window,
  qr = null;
_t && "documentMode" in document && (qr = document.documentMode);
var Yy = _t && "TextEvent" in window && !qr,
  xf = _t && (!Ea || (qr && 8 < qr && 11 >= qr)),
  qu = " ",
  Yu = !1;
function wf(e, t) {
  switch (e) {
    case "keyup":
      return qy.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Sf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Wn = !1;
function Xy(e, t) {
  switch (e) {
    case "compositionend":
      return Sf(t);
    case "keypress":
      return t.which !== 32 ? null : ((Yu = !0), qu);
    case "textInput":
      return (e = t.data), e === qu && Yu ? null : e;
    default:
      return null;
  }
}
function Zy(e, t) {
  if (Wn)
    return e === "compositionend" || (!Ea && wf(e, t))
      ? ((e = gf()), (li = Sa = Jt = null), (Wn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return xf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Jy = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Xu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Jy[e.type] : t === "textarea";
}
function kf(e, t, n, r) {
  Zd(r),
    (t = Pi(t, "onChange")),
    0 < t.length &&
      ((n = new ka("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Yr = null,
  co = null;
function ev(e) {
  Of(e, 0);
}
function Zi(e) {
  var t = Bn(e);
  if (Bd(t)) return e;
}
function tv(e, t) {
  if (e === "change") return t;
}
var Cf = !1;
if (_t) {
  var Os;
  if (_t) {
    var Ls = "oninput" in document;
    if (!Ls) {
      var Zu = document.createElement("div");
      Zu.setAttribute("oninput", "return;"),
        (Ls = typeof Zu.oninput == "function");
    }
    Os = Ls;
  } else Os = !1;
  Cf = Os && (!document.documentMode || 9 < document.documentMode);
}
function Ju() {
  Yr && (Yr.detachEvent("onpropertychange", Ef), (co = Yr = null));
}
function Ef(e) {
  if (e.propertyName === "value" && Zi(co)) {
    var t = [];
    kf(t, co, e, ya(e)), nf(ev, t);
  }
}
function nv(e, t, n) {
  e === "focusin"
    ? (Ju(), (Yr = t), (co = n), Yr.attachEvent("onpropertychange", Ef))
    : e === "focusout" && Ju();
}
function rv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Zi(co);
}
function ov(e, t) {
  if (e === "click") return Zi(t);
}
function iv(e, t) {
  if (e === "input" || e === "change") return Zi(t);
}
function sv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var lt = typeof Object.is == "function" ? Object.is : sv;
function fo(e, t) {
  if (lt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!ol.call(t, o) || !lt(e[o], t[o])) return !1;
  }
  return !0;
}
function ec(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function tc(e, t) {
  var n = ec(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ec(n);
  }
}
function Nf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Nf(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Pf() {
  for (var e = window, t = xi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = xi(e.document);
  }
  return t;
}
function Na(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function lv(e) {
  var t = Pf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Nf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Na(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = tc(n, i));
        var s = tc(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var av = _t && "documentMode" in document && 11 >= document.documentMode,
  Vn = null,
  Cl = null,
  Xr = null,
  El = !1;
function nc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  El ||
    Vn == null ||
    Vn !== xi(r) ||
    ((r = Vn),
    "selectionStart" in r && Na(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Xr && fo(Xr, r)) ||
      ((Xr = r),
      (r = Pi(Cl, "onSelect")),
      0 < r.length &&
        ((t = new ka("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Vn))));
}
function Bo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Hn = {
    animationend: Bo("Animation", "AnimationEnd"),
    animationiteration: Bo("Animation", "AnimationIteration"),
    animationstart: Bo("Animation", "AnimationStart"),
    transitionend: Bo("Transition", "TransitionEnd"),
  },
  Ms = {},
  Tf = {};
_t &&
  ((Tf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Hn.animationend.animation,
    delete Hn.animationiteration.animation,
    delete Hn.animationstart.animation),
  "TransitionEvent" in window || delete Hn.transitionend.transition);
function Ji(e) {
  if (Ms[e]) return Ms[e];
  if (!Hn[e]) return e;
  var t = Hn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Tf) return (Ms[e] = t[n]);
  return e;
}
var jf = Ji("animationend"),
  Rf = Ji("animationiteration"),
  bf = Ji("animationstart"),
  _f = Ji("transitionend"),
  Af = new Map(),
  rc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function mn(e, t) {
  Af.set(e, t), Dn(t, [e]);
}
for (var Is = 0; Is < rc.length; Is++) {
  var Ds = rc[Is],
    uv = Ds.toLowerCase(),
    cv = Ds[0].toUpperCase() + Ds.slice(1);
  mn(uv, "on" + cv);
}
mn(jf, "onAnimationEnd");
mn(Rf, "onAnimationIteration");
mn(bf, "onAnimationStart");
mn("dblclick", "onDoubleClick");
mn("focusin", "onFocus");
mn("focusout", "onBlur");
mn(_f, "onTransitionEnd");
mr("onMouseEnter", ["mouseout", "mouseover"]);
mr("onMouseLeave", ["mouseout", "mouseover"]);
mr("onPointerEnter", ["pointerout", "pointerover"]);
mr("onPointerLeave", ["pointerout", "pointerover"]);
Dn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Dn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Dn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Dn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Dn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Dn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Qr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  dv = new Set("cancel close invalid load scroll toggle".split(" ").concat(Qr));
function oc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), uy(r, t, void 0, e), (e.currentTarget = null);
}
function Of(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== i && o.isPropagationStopped())) break e;
          oc(o, l, u), (i = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== i && o.isPropagationStopped())
          )
            break e;
          oc(o, l, u), (i = a);
        }
    }
  }
  if (Si) throw ((e = xl), (Si = !1), (xl = null), e);
}
function X(e, t) {
  var n = t[Rl];
  n === void 0 && (n = t[Rl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Lf(t, e, 2, !1), n.add(r));
}
function Fs(e, t, n) {
  var r = 0;
  t && (r |= 4), Lf(n, e, r, t);
}
var Qo = "_reactListening" + Math.random().toString(36).slice(2);
function po(e) {
  if (!e[Qo]) {
    (e[Qo] = !0),
      $d.forEach(function (n) {
        n !== "selectionchange" && (dv.has(n) || Fs(n, !1, e), Fs(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Qo] || ((t[Qo] = !0), Fs("selectionchange", !1, t));
  }
}
function Lf(e, t, n, r) {
  switch (vf(t)) {
    case 1:
      var o = Ny;
      break;
    case 4:
      o = Py;
      break;
    default:
      o = wa;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !gl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function zs(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = Sn(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = i = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  nf(function () {
    var u = i,
      d = ya(n),
      p = [];
    e: {
      var m = Af.get(e);
      if (m !== void 0) {
        var g = ka,
          w = e;
        switch (e) {
          case "keypress":
            if (ai(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Uy;
            break;
          case "focusin":
            (w = "focus"), (g = As);
            break;
          case "focusout":
            (w = "blur"), (g = As);
            break;
          case "beforeblur":
          case "afterblur":
            g = As;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Qu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Ry;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Hy;
            break;
          case jf:
          case Rf:
          case bf:
            g = Ay;
            break;
          case _f:
            g = Qy;
            break;
          case "scroll":
            g = Ty;
            break;
          case "wheel":
            g = Ky;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Ly;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Ku;
        }
        var v = (t & 4) !== 0,
          S = !v && e === "scroll",
          h = v ? (m !== null ? m + "Capture" : null) : m;
        v = [];
        for (var f = u, y; f !== null; ) {
          y = f;
          var k = y.stateNode;
          if (
            (y.tag === 5 &&
              k !== null &&
              ((y = k),
              h !== null && ((k = so(f, h)), k != null && v.push(ho(f, k, y)))),
            S)
          )
            break;
          f = f.return;
        }
        0 < v.length &&
          ((m = new g(m, w, null, n, d)), p.push({ event: m, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          m &&
            n !== yl &&
            (w = n.relatedTarget || n.fromElement) &&
            (Sn(w) || w[At]))
        )
          break e;
        if (
          (g || m) &&
          ((m =
            d.window === d
              ? d
              : (m = d.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          g
            ? ((w = n.relatedTarget || n.toElement),
              (g = u),
              (w = w ? Sn(w) : null),
              w !== null &&
                ((S = Fn(w)), w !== S || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((g = null), (w = u)),
          g !== w)
        ) {
          if (
            ((v = Qu),
            (k = "onMouseLeave"),
            (h = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Ku),
              (k = "onPointerLeave"),
              (h = "onPointerEnter"),
              (f = "pointer")),
            (S = g == null ? m : Bn(g)),
            (y = w == null ? m : Bn(w)),
            (m = new v(k, f + "leave", g, n, d)),
            (m.target = S),
            (m.relatedTarget = y),
            (k = null),
            Sn(d) === u &&
              ((v = new v(h, f + "enter", w, n, d)),
              (v.target = y),
              (v.relatedTarget = S),
              (k = v)),
            (S = k),
            g && w)
          )
            t: {
              for (v = g, h = w, f = 0, y = v; y; y = zn(y)) f++;
              for (y = 0, k = h; k; k = zn(k)) y++;
              for (; 0 < f - y; ) (v = zn(v)), f--;
              for (; 0 < y - f; ) (h = zn(h)), y--;
              for (; f--; ) {
                if (v === h || (h !== null && v === h.alternate)) break t;
                (v = zn(v)), (h = zn(h));
              }
              v = null;
            }
          else v = null;
          g !== null && ic(p, m, g, v, !1),
            w !== null && S !== null && ic(p, S, w, v, !0);
        }
      }
      e: {
        if (
          ((m = u ? Bn(u) : window),
          (g = m.nodeName && m.nodeName.toLowerCase()),
          g === "select" || (g === "input" && m.type === "file"))
        )
          var C = tv;
        else if (Xu(m))
          if (Cf) C = iv;
          else {
            C = rv;
            var E = nv;
          }
        else
          (g = m.nodeName) &&
            g.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (C = ov);
        if (C && (C = C(e, u))) {
          kf(p, C, n, d);
          break e;
        }
        E && E(e, m, u),
          e === "focusout" &&
            (E = m._wrapperState) &&
            E.controlled &&
            m.type === "number" &&
            dl(m, "number", m.value);
      }
      switch (((E = u ? Bn(u) : window), e)) {
        case "focusin":
          (Xu(E) || E.contentEditable === "true") &&
            ((Vn = E), (Cl = u), (Xr = null));
          break;
        case "focusout":
          Xr = Cl = Vn = null;
          break;
        case "mousedown":
          El = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (El = !1), nc(p, n, d);
          break;
        case "selectionchange":
          if (av) break;
        case "keydown":
        case "keyup":
          nc(p, n, d);
      }
      var N;
      if (Ea)
        e: {
          switch (e) {
            case "compositionstart":
              var j = "onCompositionStart";
              break e;
            case "compositionend":
              j = "onCompositionEnd";
              break e;
            case "compositionupdate":
              j = "onCompositionUpdate";
              break e;
          }
          j = void 0;
        }
      else
        Wn
          ? wf(e, n) && (j = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      j &&
        (xf &&
          n.locale !== "ko" &&
          (Wn || j !== "onCompositionStart"
            ? j === "onCompositionEnd" && Wn && (N = gf())
            : ((Jt = d),
              (Sa = "value" in Jt ? Jt.value : Jt.textContent),
              (Wn = !0))),
        (E = Pi(u, j)),
        0 < E.length &&
          ((j = new Gu(j, e, null, n, d)),
          p.push({ event: j, listeners: E }),
          N ? (j.data = N) : ((N = Sf(n)), N !== null && (j.data = N)))),
        (N = Yy ? Xy(e, n) : Zy(e, n)) &&
          ((u = Pi(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new Gu("onBeforeInput", "beforeinput", null, n, d)),
            p.push({ event: d, listeners: u }),
            (d.data = N)));
    }
    Of(p, t);
  });
}
function ho(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Pi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = so(e, n)),
      i != null && r.unshift(ho(e, i, o)),
      (i = so(e, t)),
      i != null && r.push(ho(e, i, o))),
      (e = e.return);
  }
  return r;
}
function zn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ic(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((a = so(n, i)), a != null && s.unshift(ho(n, a, l)))
        : o || ((a = so(n, i)), a != null && s.push(ho(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var fv = /\r\n?/g,
  pv = /\u0000|\uFFFD/g;
function sc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      fv,
      `
`
    )
    .replace(pv, "");
}
function Go(e, t, n) {
  if (((t = sc(t)), sc(e) !== t && n)) throw Error(R(425));
}
function Ti() {}
var Nl = null,
  Pl = null;
function Tl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var jl = typeof setTimeout == "function" ? setTimeout : void 0,
  hv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  lc = typeof Promise == "function" ? Promise : void 0,
  mv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof lc < "u"
      ? function (e) {
          return lc.resolve(null).then(e).catch(yv);
        }
      : jl;
function yv(e) {
  setTimeout(function () {
    throw e;
  });
}
function $s(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), uo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  uo(t);
}
function on(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ac(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Tr = Math.random().toString(36).slice(2),
  yt = "__reactFiber$" + Tr,
  mo = "__reactProps$" + Tr,
  At = "__reactContainer$" + Tr,
  Rl = "__reactEvents$" + Tr,
  vv = "__reactListeners$" + Tr,
  gv = "__reactHandles$" + Tr;
function Sn(e) {
  var t = e[yt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[At] || n[yt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ac(e); e !== null; ) {
          if ((n = e[yt])) return n;
          e = ac(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function _o(e) {
  return (
    (e = e[yt] || e[At]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Bn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function es(e) {
  return e[mo] || null;
}
var bl = [],
  Qn = -1;
function yn(e) {
  return { current: e };
}
function Z(e) {
  0 > Qn || ((e.current = bl[Qn]), (bl[Qn] = null), Qn--);
}
function q(e, t) {
  Qn++, (bl[Qn] = e.current), (e.current = t);
}
var dn = {},
  Se = yn(dn),
  be = yn(!1),
  bn = dn;
function yr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return dn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function _e(e) {
  return (e = e.childContextTypes), e != null;
}
function ji() {
  Z(be), Z(Se);
}
function uc(e, t, n) {
  if (Se.current !== dn) throw Error(R(168));
  q(Se, t), q(be, n);
}
function Mf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(R(108, ny(e) || "Unknown", o));
  return re({}, n, r);
}
function Ri(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || dn),
    (bn = Se.current),
    q(Se, e),
    q(be, be.current),
    !0
  );
}
function cc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n
    ? ((e = Mf(e, t, bn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Z(be),
      Z(Se),
      q(Se, e))
    : Z(be),
    q(be, n);
}
var Tt = null,
  ts = !1,
  Us = !1;
function If(e) {
  Tt === null ? (Tt = [e]) : Tt.push(e);
}
function xv(e) {
  (ts = !0), If(e);
}
function vn() {
  if (!Us && Tt !== null) {
    Us = !0;
    var e = 0,
      t = K;
    try {
      var n = Tt;
      for (K = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Tt = null), (ts = !1);
    } catch (o) {
      throw (Tt !== null && (Tt = Tt.slice(e + 1)), lf(va, vn), o);
    } finally {
      (K = t), (Us = !1);
    }
  }
  return null;
}
var Gn = [],
  Kn = 0,
  bi = null,
  _i = 0,
  Qe = [],
  Ge = 0,
  _n = null,
  jt = 1,
  Rt = "";
function xn(e, t) {
  (Gn[Kn++] = _i), (Gn[Kn++] = bi), (bi = e), (_i = t);
}
function Df(e, t, n) {
  (Qe[Ge++] = jt), (Qe[Ge++] = Rt), (Qe[Ge++] = _n), (_n = e);
  var r = jt;
  e = Rt;
  var o = 32 - it(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - it(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (jt = (1 << (32 - it(t) + o)) | (n << o) | r),
      (Rt = i + e);
  } else (jt = (1 << i) | (n << o) | r), (Rt = e);
}
function Pa(e) {
  e.return !== null && (xn(e, 1), Df(e, 1, 0));
}
function Ta(e) {
  for (; e === bi; )
    (bi = Gn[--Kn]), (Gn[Kn] = null), (_i = Gn[--Kn]), (Gn[Kn] = null);
  for (; e === _n; )
    (_n = Qe[--Ge]),
      (Qe[Ge] = null),
      (Rt = Qe[--Ge]),
      (Qe[Ge] = null),
      (jt = Qe[--Ge]),
      (Qe[Ge] = null);
}
var ze = null,
  Fe = null,
  ee = !1,
  ot = null;
function Ff(e, t) {
  var n = Ke(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function dc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ze = e), (Fe = on(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ze = e), (Fe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = _n !== null ? { id: jt, overflow: Rt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ke(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ze = e),
            (Fe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function _l(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Al(e) {
  if (ee) {
    var t = Fe;
    if (t) {
      var n = t;
      if (!dc(e, t)) {
        if (_l(e)) throw Error(R(418));
        t = on(n.nextSibling);
        var r = ze;
        t && dc(e, t)
          ? Ff(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ee = !1), (ze = e));
      }
    } else {
      if (_l(e)) throw Error(R(418));
      (e.flags = (e.flags & -4097) | 2), (ee = !1), (ze = e);
    }
  }
}
function fc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ze = e;
}
function Ko(e) {
  if (e !== ze) return !1;
  if (!ee) return fc(e), (ee = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Tl(e.type, e.memoizedProps))),
    t && (t = Fe))
  ) {
    if (_l(e)) throw (zf(), Error(R(418)));
    for (; t; ) Ff(e, t), (t = on(t.nextSibling));
  }
  if ((fc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Fe = on(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Fe = null;
    }
  } else Fe = ze ? on(e.stateNode.nextSibling) : null;
  return !0;
}
function zf() {
  for (var e = Fe; e; ) e = on(e.nextSibling);
}
function vr() {
  (Fe = ze = null), (ee = !1);
}
function ja(e) {
  ot === null ? (ot = [e]) : ot.push(e);
}
var wv = Dt.ReactCurrentBatchConfig;
function Fr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var l = o.refs;
            s === null ? delete l[i] : (l[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function qo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      R(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function pc(e) {
  var t = e._init;
  return t(e._payload);
}
function $f(e) {
  function t(h, f) {
    if (e) {
      var y = h.deletions;
      y === null ? ((h.deletions = [f]), (h.flags |= 16)) : y.push(f);
    }
  }
  function n(h, f) {
    if (!e) return null;
    for (; f !== null; ) t(h, f), (f = f.sibling);
    return null;
  }
  function r(h, f) {
    for (h = new Map(); f !== null; )
      f.key !== null ? h.set(f.key, f) : h.set(f.index, f), (f = f.sibling);
    return h;
  }
  function o(h, f) {
    return (h = un(h, f)), (h.index = 0), (h.sibling = null), h;
  }
  function i(h, f, y) {
    return (
      (h.index = y),
      e
        ? ((y = h.alternate),
          y !== null
            ? ((y = y.index), y < f ? ((h.flags |= 2), f) : y)
            : ((h.flags |= 2), f))
        : ((h.flags |= 1048576), f)
    );
  }
  function s(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function l(h, f, y, k) {
    return f === null || f.tag !== 6
      ? ((f = Ks(y, h.mode, k)), (f.return = h), f)
      : ((f = o(f, y)), (f.return = h), f);
  }
  function a(h, f, y, k) {
    var C = y.type;
    return C === Un
      ? d(h, f, y.props.children, k, y.key)
      : f !== null &&
        (f.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === Ht &&
            pc(C) === f.type))
      ? ((k = o(f, y.props)), (k.ref = Fr(h, f, y)), (k.return = h), k)
      : ((k = mi(y.type, y.key, y.props, null, h.mode, k)),
        (k.ref = Fr(h, f, y)),
        (k.return = h),
        k);
  }
  function u(h, f, y, k) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== y.containerInfo ||
      f.stateNode.implementation !== y.implementation
      ? ((f = qs(y, h.mode, k)), (f.return = h), f)
      : ((f = o(f, y.children || [])), (f.return = h), f);
  }
  function d(h, f, y, k, C) {
    return f === null || f.tag !== 7
      ? ((f = Rn(y, h.mode, k, C)), (f.return = h), f)
      : ((f = o(f, y)), (f.return = h), f);
  }
  function p(h, f, y) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = Ks("" + f, h.mode, y)), (f.return = h), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Fo:
          return (
            (y = mi(f.type, f.key, f.props, null, h.mode, y)),
            (y.ref = Fr(h, null, f)),
            (y.return = h),
            y
          );
        case $n:
          return (f = qs(f, h.mode, y)), (f.return = h), f;
        case Ht:
          var k = f._init;
          return p(h, k(f._payload), y);
      }
      if (Hr(f) || Or(f))
        return (f = Rn(f, h.mode, y, null)), (f.return = h), f;
      qo(h, f);
    }
    return null;
  }
  function m(h, f, y, k) {
    var C = f !== null ? f.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return C !== null ? null : l(h, f, "" + y, k);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Fo:
          return y.key === C ? a(h, f, y, k) : null;
        case $n:
          return y.key === C ? u(h, f, y, k) : null;
        case Ht:
          return (C = y._init), m(h, f, C(y._payload), k);
      }
      if (Hr(y) || Or(y)) return C !== null ? null : d(h, f, y, k, null);
      qo(h, y);
    }
    return null;
  }
  function g(h, f, y, k, C) {
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return (h = h.get(y) || null), l(f, h, "" + k, C);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case Fo:
          return (h = h.get(k.key === null ? y : k.key) || null), a(f, h, k, C);
        case $n:
          return (h = h.get(k.key === null ? y : k.key) || null), u(f, h, k, C);
        case Ht:
          var E = k._init;
          return g(h, f, y, E(k._payload), C);
      }
      if (Hr(k) || Or(k)) return (h = h.get(y) || null), d(f, h, k, C, null);
      qo(f, k);
    }
    return null;
  }
  function w(h, f, y, k) {
    for (
      var C = null, E = null, N = f, j = (f = 0), L = null;
      N !== null && j < y.length;
      j++
    ) {
      N.index > j ? ((L = N), (N = null)) : (L = N.sibling);
      var A = m(h, N, y[j], k);
      if (A === null) {
        N === null && (N = L);
        break;
      }
      e && N && A.alternate === null && t(h, N),
        (f = i(A, f, j)),
        E === null ? (C = A) : (E.sibling = A),
        (E = A),
        (N = L);
    }
    if (j === y.length) return n(h, N), ee && xn(h, j), C;
    if (N === null) {
      for (; j < y.length; j++)
        (N = p(h, y[j], k)),
          N !== null &&
            ((f = i(N, f, j)), E === null ? (C = N) : (E.sibling = N), (E = N));
      return ee && xn(h, j), C;
    }
    for (N = r(h, N); j < y.length; j++)
      (L = g(N, h, j, y[j], k)),
        L !== null &&
          (e && L.alternate !== null && N.delete(L.key === null ? j : L.key),
          (f = i(L, f, j)),
          E === null ? (C = L) : (E.sibling = L),
          (E = L));
    return (
      e &&
        N.forEach(function (z) {
          return t(h, z);
        }),
      ee && xn(h, j),
      C
    );
  }
  function v(h, f, y, k) {
    var C = Or(y);
    if (typeof C != "function") throw Error(R(150));
    if (((y = C.call(y)), y == null)) throw Error(R(151));
    for (
      var E = (C = null), N = f, j = (f = 0), L = null, A = y.next();
      N !== null && !A.done;
      j++, A = y.next()
    ) {
      N.index > j ? ((L = N), (N = null)) : (L = N.sibling);
      var z = m(h, N, A.value, k);
      if (z === null) {
        N === null && (N = L);
        break;
      }
      e && N && z.alternate === null && t(h, N),
        (f = i(z, f, j)),
        E === null ? (C = z) : (E.sibling = z),
        (E = z),
        (N = L);
    }
    if (A.done) return n(h, N), ee && xn(h, j), C;
    if (N === null) {
      for (; !A.done; j++, A = y.next())
        (A = p(h, A.value, k)),
          A !== null &&
            ((f = i(A, f, j)), E === null ? (C = A) : (E.sibling = A), (E = A));
      return ee && xn(h, j), C;
    }
    for (N = r(h, N); !A.done; j++, A = y.next())
      (A = g(N, h, j, A.value, k)),
        A !== null &&
          (e && A.alternate !== null && N.delete(A.key === null ? j : A.key),
          (f = i(A, f, j)),
          E === null ? (C = A) : (E.sibling = A),
          (E = A));
    return (
      e &&
        N.forEach(function (M) {
          return t(h, M);
        }),
      ee && xn(h, j),
      C
    );
  }
  function S(h, f, y, k) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === Un &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case Fo:
          e: {
            for (var C = y.key, E = f; E !== null; ) {
              if (E.key === C) {
                if (((C = y.type), C === Un)) {
                  if (E.tag === 7) {
                    n(h, E.sibling),
                      (f = o(E, y.props.children)),
                      (f.return = h),
                      (h = f);
                    break e;
                  }
                } else if (
                  E.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Ht &&
                    pc(C) === E.type)
                ) {
                  n(h, E.sibling),
                    (f = o(E, y.props)),
                    (f.ref = Fr(h, E, y)),
                    (f.return = h),
                    (h = f);
                  break e;
                }
                n(h, E);
                break;
              } else t(h, E);
              E = E.sibling;
            }
            y.type === Un
              ? ((f = Rn(y.props.children, h.mode, k, y.key)),
                (f.return = h),
                (h = f))
              : ((k = mi(y.type, y.key, y.props, null, h.mode, k)),
                (k.ref = Fr(h, f, y)),
                (k.return = h),
                (h = k));
          }
          return s(h);
        case $n:
          e: {
            for (E = y.key; f !== null; ) {
              if (f.key === E)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === y.containerInfo &&
                  f.stateNode.implementation === y.implementation
                ) {
                  n(h, f.sibling),
                    (f = o(f, y.children || [])),
                    (f.return = h),
                    (h = f);
                  break e;
                } else {
                  n(h, f);
                  break;
                }
              else t(h, f);
              f = f.sibling;
            }
            (f = qs(y, h.mode, k)), (f.return = h), (h = f);
          }
          return s(h);
        case Ht:
          return (E = y._init), S(h, f, E(y._payload), k);
      }
      if (Hr(y)) return w(h, f, y, k);
      if (Or(y)) return v(h, f, y, k);
      qo(h, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        f !== null && f.tag === 6
          ? (n(h, f.sibling), (f = o(f, y)), (f.return = h), (h = f))
          : (n(h, f), (f = Ks(y, h.mode, k)), (f.return = h), (h = f)),
        s(h))
      : n(h, f);
  }
  return S;
}
var gr = $f(!0),
  Uf = $f(!1),
  Ai = yn(null),
  Oi = null,
  qn = null,
  Ra = null;
function ba() {
  Ra = qn = Oi = null;
}
function _a(e) {
  var t = Ai.current;
  Z(Ai), (e._currentValue = t);
}
function Ol(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function nr(e, t) {
  (Oi = e),
    (Ra = qn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Re = !0), (e.firstContext = null));
}
function Ye(e) {
  var t = e._currentValue;
  if (Ra !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), qn === null)) {
      if (Oi === null) throw Error(R(308));
      (qn = e), (Oi.dependencies = { lanes: 0, firstContext: e });
    } else qn = qn.next = e;
  return t;
}
var kn = null;
function Aa(e) {
  kn === null ? (kn = [e]) : kn.push(e);
}
function Wf(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Aa(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Ot(e, r)
  );
}
function Ot(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Bt = !1;
function Oa(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Vf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function bt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function sn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), H & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Ot(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Aa(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Ot(e, n)
  );
}
function ui(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ga(e, n);
  }
}
function hc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Li(e, t, n, r) {
  var o = e.updateQueue;
  Bt = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (i = u) : (s.next = u), (s = a);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (l = d.lastBaseUpdate),
      l !== s &&
        (l === null ? (d.firstBaseUpdate = u) : (l.next = u),
        (d.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var p = o.baseState;
    (s = 0), (d = u = a = null), (l = i);
    do {
      var m = l.lane,
        g = l.eventTime;
      if ((r & m) === m) {
        d !== null &&
          (d = d.next =
            {
              eventTime: g,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var w = e,
            v = l;
          switch (((m = t), (g = n), v.tag)) {
            case 1:
              if (((w = v.payload), typeof w == "function")) {
                p = w.call(g, p, m);
                break e;
              }
              p = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = v.payload),
                (m = typeof w == "function" ? w.call(g, p, m) : w),
                m == null)
              )
                break e;
              p = re({}, p, m);
              break e;
            case 2:
              Bt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (m = o.effects),
          m === null ? (o.effects = [l]) : m.push(l));
      } else
        (g = {
          eventTime: g,
          lane: m,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          d === null ? ((u = d = g), (a = p)) : (d = d.next = g),
          (s |= m);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (m = l),
          (l = m.next),
          (m.next = null),
          (o.lastBaseUpdate = m),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (a = p),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (On |= s), (e.lanes = s), (e.memoizedState = p);
  }
}
function mc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(R(191, o));
        o.call(r);
      }
    }
}
var Ao = {},
  gt = yn(Ao),
  yo = yn(Ao),
  vo = yn(Ao);
function Cn(e) {
  if (e === Ao) throw Error(R(174));
  return e;
}
function La(e, t) {
  switch ((q(vo, t), q(yo, e), q(gt, Ao), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : pl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = pl(t, e));
  }
  Z(gt), q(gt, t);
}
function xr() {
  Z(gt), Z(yo), Z(vo);
}
function Hf(e) {
  Cn(vo.current);
  var t = Cn(gt.current),
    n = pl(t, e.type);
  t !== n && (q(yo, e), q(gt, n));
}
function Ma(e) {
  yo.current === e && (Z(gt), Z(yo));
}
var te = yn(0);
function Mi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ws = [];
function Ia() {
  for (var e = 0; e < Ws.length; e++)
    Ws[e]._workInProgressVersionPrimary = null;
  Ws.length = 0;
}
var ci = Dt.ReactCurrentDispatcher,
  Vs = Dt.ReactCurrentBatchConfig,
  An = 0,
  ne = null,
  ae = null,
  de = null,
  Ii = !1,
  Zr = !1,
  go = 0,
  Sv = 0;
function ve() {
  throw Error(R(321));
}
function Da(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!lt(e[n], t[n])) return !1;
  return !0;
}
function Fa(e, t, n, r, o, i) {
  if (
    ((An = i),
    (ne = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ci.current = e === null || e.memoizedState === null ? Nv : Pv),
    (e = n(r, o)),
    Zr)
  ) {
    i = 0;
    do {
      if (((Zr = !1), (go = 0), 25 <= i)) throw Error(R(301));
      (i += 1),
        (de = ae = null),
        (t.updateQueue = null),
        (ci.current = Tv),
        (e = n(r, o));
    } while (Zr);
  }
  if (
    ((ci.current = Di),
    (t = ae !== null && ae.next !== null),
    (An = 0),
    (de = ae = ne = null),
    (Ii = !1),
    t)
  )
    throw Error(R(300));
  return e;
}
function za() {
  var e = go !== 0;
  return (go = 0), e;
}
function ft() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return de === null ? (ne.memoizedState = de = e) : (de = de.next = e), de;
}
function Xe() {
  if (ae === null) {
    var e = ne.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ae.next;
  var t = de === null ? ne.memoizedState : de.next;
  if (t !== null) (de = t), (ae = e);
  else {
    if (e === null) throw Error(R(310));
    (ae = e),
      (e = {
        memoizedState: ae.memoizedState,
        baseState: ae.baseState,
        baseQueue: ae.baseQueue,
        queue: ae.queue,
        next: null,
      }),
      de === null ? (ne.memoizedState = de = e) : (de = de.next = e);
  }
  return de;
}
function xo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Hs(e) {
  var t = Xe(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = ae,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      u = i;
    do {
      var d = u.lane;
      if ((An & d) === d)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var p = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = p), (s = r)) : (a = a.next = p),
          (ne.lanes |= d),
          (On |= d);
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? (s = r) : (a.next = l),
      lt(r, t.memoizedState) || (Re = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (ne.lanes |= i), (On |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Bs(e) {
  var t = Xe(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    lt(i, t.memoizedState) || (Re = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Bf() {}
function Qf(e, t) {
  var n = ne,
    r = Xe(),
    o = t(),
    i = !lt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Re = !0)),
    (r = r.queue),
    $a(qf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (de !== null && de.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      wo(9, Kf.bind(null, n, r, o, t), void 0, null),
      fe === null)
    )
      throw Error(R(349));
    An & 30 || Gf(n, t, o);
  }
  return o;
}
function Gf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ne.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Kf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Yf(t) && Xf(e);
}
function qf(e, t, n) {
  return n(function () {
    Yf(t) && Xf(e);
  });
}
function Yf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !lt(e, n);
  } catch {
    return !0;
  }
}
function Xf(e) {
  var t = Ot(e, 1);
  t !== null && st(t, e, 1, -1);
}
function yc(e) {
  var t = ft();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: xo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Ev.bind(null, ne, e)),
    [t.memoizedState, e]
  );
}
function wo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ne.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Zf() {
  return Xe().memoizedState;
}
function di(e, t, n, r) {
  var o = ft();
  (ne.flags |= e),
    (o.memoizedState = wo(1 | t, n, void 0, r === void 0 ? null : r));
}
function ns(e, t, n, r) {
  var o = Xe();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ae !== null) {
    var s = ae.memoizedState;
    if (((i = s.destroy), r !== null && Da(r, s.deps))) {
      o.memoizedState = wo(t, n, i, r);
      return;
    }
  }
  (ne.flags |= e), (o.memoizedState = wo(1 | t, n, i, r));
}
function vc(e, t) {
  return di(8390656, 8, e, t);
}
function $a(e, t) {
  return ns(2048, 8, e, t);
}
function Jf(e, t) {
  return ns(4, 2, e, t);
}
function ep(e, t) {
  return ns(4, 4, e, t);
}
function tp(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function np(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ns(4, 4, tp.bind(null, t, e), n)
  );
}
function Ua() {}
function rp(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Da(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function op(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Da(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ip(e, t, n) {
  return An & 21
    ? (lt(n, t) || ((n = cf()), (ne.lanes |= n), (On |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Re = !0)), (e.memoizedState = n));
}
function kv(e, t) {
  var n = K;
  (K = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Vs.transition;
  Vs.transition = {};
  try {
    e(!1), t();
  } finally {
    (K = n), (Vs.transition = r);
  }
}
function sp() {
  return Xe().memoizedState;
}
function Cv(e, t, n) {
  var r = an(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    lp(e))
  )
    ap(t, n);
  else if (((n = Wf(e, t, n, r)), n !== null)) {
    var o = Ne();
    st(n, e, r, o), up(n, t, r);
  }
}
function Ev(e, t, n) {
  var r = an(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (lp(e)) ap(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), lt(l, s))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), Aa(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Wf(e, t, o, r)),
      n !== null && ((o = Ne()), st(n, e, r, o), up(n, t, r));
  }
}
function lp(e) {
  var t = e.alternate;
  return e === ne || (t !== null && t === ne);
}
function ap(e, t) {
  Zr = Ii = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function up(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ga(e, n);
  }
}
var Di = {
    readContext: Ye,
    useCallback: ve,
    useContext: ve,
    useEffect: ve,
    useImperativeHandle: ve,
    useInsertionEffect: ve,
    useLayoutEffect: ve,
    useMemo: ve,
    useReducer: ve,
    useRef: ve,
    useState: ve,
    useDebugValue: ve,
    useDeferredValue: ve,
    useTransition: ve,
    useMutableSource: ve,
    useSyncExternalStore: ve,
    useId: ve,
    unstable_isNewReconciler: !1,
  },
  Nv = {
    readContext: Ye,
    useCallback: function (e, t) {
      return (ft().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ye,
    useEffect: vc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        di(4194308, 4, tp.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return di(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return di(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ft();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = ft();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Cv.bind(null, ne, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ft();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: yc,
    useDebugValue: Ua,
    useDeferredValue: function (e) {
      return (ft().memoizedState = e);
    },
    useTransition: function () {
      var e = yc(!1),
        t = e[0];
      return (e = kv.bind(null, e[1])), (ft().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ne,
        o = ft();
      if (ee) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (((n = t()), fe === null)) throw Error(R(349));
        An & 30 || Gf(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        vc(qf.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        wo(9, Kf.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ft(),
        t = fe.identifierPrefix;
      if (ee) {
        var n = Rt,
          r = jt;
        (n = (r & ~(1 << (32 - it(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = go++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Sv++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Pv = {
    readContext: Ye,
    useCallback: rp,
    useContext: Ye,
    useEffect: $a,
    useImperativeHandle: np,
    useInsertionEffect: Jf,
    useLayoutEffect: ep,
    useMemo: op,
    useReducer: Hs,
    useRef: Zf,
    useState: function () {
      return Hs(xo);
    },
    useDebugValue: Ua,
    useDeferredValue: function (e) {
      var t = Xe();
      return ip(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = Hs(xo)[0],
        t = Xe().memoizedState;
      return [e, t];
    },
    useMutableSource: Bf,
    useSyncExternalStore: Qf,
    useId: sp,
    unstable_isNewReconciler: !1,
  },
  Tv = {
    readContext: Ye,
    useCallback: rp,
    useContext: Ye,
    useEffect: $a,
    useImperativeHandle: np,
    useInsertionEffect: Jf,
    useLayoutEffect: ep,
    useMemo: op,
    useReducer: Bs,
    useRef: Zf,
    useState: function () {
      return Bs(xo);
    },
    useDebugValue: Ua,
    useDeferredValue: function (e) {
      var t = Xe();
      return ae === null ? (t.memoizedState = e) : ip(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = Bs(xo)[0],
        t = Xe().memoizedState;
      return [e, t];
    },
    useMutableSource: Bf,
    useSyncExternalStore: Qf,
    useId: sp,
    unstable_isNewReconciler: !1,
  };
function et(e, t) {
  if (e && e.defaultProps) {
    (t = re({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ll(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : re({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var rs = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Fn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ne(),
      o = an(e),
      i = bt(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = sn(e, i, o)),
      t !== null && (st(t, e, o, r), ui(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ne(),
      o = an(e),
      i = bt(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = sn(e, i, o)),
      t !== null && (st(t, e, o, r), ui(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ne(),
      r = an(e),
      o = bt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = sn(e, o, r)),
      t !== null && (st(t, e, r, n), ui(t, e, r));
  },
};
function gc(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !fo(n, r) || !fo(o, i)
      : !0
  );
}
function cp(e, t, n) {
  var r = !1,
    o = dn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ye(i))
      : ((o = _e(t) ? bn : Se.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? yr(e, o) : dn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = rs),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function xc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && rs.enqueueReplaceState(t, t.state, null);
}
function Ml(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Oa(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Ye(i))
    : ((i = _e(t) ? bn : Se.current), (o.context = yr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Ll(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && rs.enqueueReplaceState(o, o.state, null),
      Li(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function wr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += ty(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Qs(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Il(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var jv = typeof WeakMap == "function" ? WeakMap : Map;
function dp(e, t, n) {
  (n = bt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      zi || ((zi = !0), (Ql = r)), Il(e, t);
    }),
    n
  );
}
function fp(e, t, n) {
  (n = bt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Il(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Il(e, t),
          typeof r != "function" &&
            (ln === null ? (ln = new Set([this])) : ln.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function wc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new jv();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Wv.bind(null, e, t, n)), t.then(e, e));
}
function Sc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function kc(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = bt(-1, 1)), (t.tag = 2), sn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Rv = Dt.ReactCurrentOwner,
  Re = !1;
function Ce(e, t, n, r) {
  t.child = e === null ? Uf(t, null, n, r) : gr(t, e.child, n, r);
}
function Cc(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    nr(t, o),
    (r = Fa(e, t, n, r, i, o)),
    (n = za()),
    e !== null && !Re
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Lt(e, t, o))
      : (ee && n && Pa(t), (t.flags |= 1), Ce(e, t, r, o), t.child)
  );
}
function Ec(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !qa(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), pp(e, t, i, r, o))
      : ((e = mi(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : fo), n(s, r) && e.ref === t.ref)
    )
      return Lt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = un(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function pp(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (fo(i, r) && e.ref === t.ref)
      if (((Re = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Re = !0);
      else return (t.lanes = e.lanes), Lt(e, t, o);
  }
  return Dl(e, t, n, r, o);
}
function hp(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        q(Xn, Ie),
        (Ie |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          q(Xn, Ie),
          (Ie |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        q(Xn, Ie),
        (Ie |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      q(Xn, Ie),
      (Ie |= r);
  return Ce(e, t, o, n), t.child;
}
function mp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Dl(e, t, n, r, o) {
  var i = _e(n) ? bn : Se.current;
  return (
    (i = yr(t, i)),
    nr(t, o),
    (n = Fa(e, t, n, r, i, o)),
    (r = za()),
    e !== null && !Re
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Lt(e, t, o))
      : (ee && r && Pa(t), (t.flags |= 1), Ce(e, t, n, o), t.child)
  );
}
function Nc(e, t, n, r, o) {
  if (_e(n)) {
    var i = !0;
    Ri(t);
  } else i = !1;
  if ((nr(t, o), t.stateNode === null))
    fi(e, t), cp(t, n, r), Ml(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Ye(u))
      : ((u = _e(n) ? bn : Se.current), (u = yr(t, u)));
    var d = n.getDerivedStateFromProps,
      p =
        typeof d == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && xc(t, s, r, u)),
      (Bt = !1);
    var m = t.memoizedState;
    (s.state = m),
      Li(t, r, s, o),
      (a = t.memoizedState),
      l !== r || m !== a || be.current || Bt
        ? (typeof d == "function" && (Ll(t, n, d, r), (a = t.memoizedState)),
          (l = Bt || gc(t, n, l, r, m, a, u))
            ? (p ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Vf(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : et(t.type, l)),
      (s.props = u),
      (p = t.pendingProps),
      (m = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Ye(a))
        : ((a = _e(n) ? bn : Se.current), (a = yr(t, a)));
    var g = n.getDerivedStateFromProps;
    (d =
      typeof g == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== p || m !== a) && xc(t, s, r, a)),
      (Bt = !1),
      (m = t.memoizedState),
      (s.state = m),
      Li(t, r, s, o);
    var w = t.memoizedState;
    l !== p || m !== w || be.current || Bt
      ? (typeof g == "function" && (Ll(t, n, g, r), (w = t.memoizedState)),
        (u = Bt || gc(t, n, u, r, m, w, a) || !1)
          ? (d ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, w, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, w, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (s.props = r),
        (s.state = w),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Fl(e, t, n, r, i, o);
}
function Fl(e, t, n, r, o, i) {
  mp(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && cc(t, n, !1), Lt(e, t, i);
  (r = t.stateNode), (Rv.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = gr(t, e.child, null, i)), (t.child = gr(t, null, l, i)))
      : Ce(e, t, l, i),
    (t.memoizedState = r.state),
    o && cc(t, n, !0),
    t.child
  );
}
function yp(e) {
  var t = e.stateNode;
  t.pendingContext
    ? uc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && uc(e, t.context, !1),
    La(e, t.containerInfo);
}
function Pc(e, t, n, r, o) {
  return vr(), ja(o), (t.flags |= 256), Ce(e, t, n, r), t.child;
}
var zl = { dehydrated: null, treeContext: null, retryLane: 0 };
function $l(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function vp(e, t, n) {
  var r = t.pendingProps,
    o = te.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    q(te, o & 1),
    e === null)
  )
    return (
      Al(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = ss(s, r, 0, null)),
              (e = Rn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = $l(n)),
              (t.memoizedState = zl),
              e)
            : Wa(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return bv(e, t, s, r, l, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (l = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = un(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = un(l, i)) : ((i = Rn(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? $l(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = zl),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = un(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Wa(e, t) {
  return (
    (t = ss({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Yo(e, t, n, r) {
  return (
    r !== null && ja(r),
    gr(t, e.child, null, n),
    (e = Wa(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function bv(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Qs(Error(R(422)))), Yo(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = ss({ mode: "visible", children: r.children }, o, 0, null)),
        (i = Rn(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && gr(t, e.child, null, s),
        (t.child.memoizedState = $l(s)),
        (t.memoizedState = zl),
        i);
  if (!(t.mode & 1)) return Yo(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error(R(419))), (r = Qs(i, r, void 0)), Yo(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), Re || l)) {
    if (((r = fe), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Ot(e, o), st(r, e, o, -1));
    }
    return Ka(), (r = Qs(Error(R(421)))), Yo(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Vv.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Fe = on(o.nextSibling)),
      (ze = t),
      (ee = !0),
      (ot = null),
      e !== null &&
        ((Qe[Ge++] = jt),
        (Qe[Ge++] = Rt),
        (Qe[Ge++] = _n),
        (jt = e.id),
        (Rt = e.overflow),
        (_n = t)),
      (t = Wa(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Tc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ol(e.return, t, n);
}
function Gs(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function gp(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Ce(e, t, r.children, n), (r = te.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Tc(e, n, t);
        else if (e.tag === 19) Tc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((q(te, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Mi(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Gs(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Mi(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Gs(t, !0, n, null, i);
        break;
      case "together":
        Gs(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function fi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Lt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (On |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (
      e = t.child, n = un(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = un(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function _v(e, t, n) {
  switch (t.tag) {
    case 3:
      yp(t), vr();
      break;
    case 5:
      Hf(t);
      break;
    case 1:
      _e(t.type) && Ri(t);
      break;
    case 4:
      La(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      q(Ai, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (q(te, te.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? vp(e, t, n)
          : (q(te, te.current & 1),
            (e = Lt(e, t, n)),
            e !== null ? e.sibling : null);
      q(te, te.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return gp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        q(te, te.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), hp(e, t, n);
  }
  return Lt(e, t, n);
}
var xp, Ul, wp, Sp;
xp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ul = function () {};
wp = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Cn(gt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = ul(e, o)), (r = ul(e, r)), (i = []);
        break;
      case "select":
        (o = re({}, o, { value: void 0 })),
          (r = re({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = fl(e, o)), (r = fl(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ti);
    }
    hl(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (oo.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (i = i || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (oo.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && X("scroll", e),
                  i || l === a || (i = []))
                : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Sp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function zr(e, t) {
  if (!ee)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ge(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Av(e, t, n) {
  var r = t.pendingProps;
  switch ((Ta(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ge(t), null;
    case 1:
      return _e(t.type) && ji(), ge(t), null;
    case 3:
      return (
        (r = t.stateNode),
        xr(),
        Z(be),
        Z(Se),
        Ia(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ko(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ot !== null && (ql(ot), (ot = null)))),
        Ul(e, t),
        ge(t),
        null
      );
    case 5:
      Ma(t);
      var o = Cn(vo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        wp(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return ge(t), null;
        }
        if (((e = Cn(gt.current)), Ko(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[yt] = t), (r[mo] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              X("cancel", r), X("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              X("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Qr.length; o++) X(Qr[o], r);
              break;
            case "source":
              X("error", r);
              break;
            case "img":
            case "image":
            case "link":
              X("error", r), X("load", r);
              break;
            case "details":
              X("toggle", r);
              break;
            case "input":
              Iu(r, i), X("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                X("invalid", r);
              break;
            case "textarea":
              Fu(r, i), X("invalid", r);
          }
          hl(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var l = i[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      Go(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      Go(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : oo.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  X("scroll", r);
            }
          switch (n) {
            case "input":
              zo(r), Du(r, i, !0);
              break;
            case "textarea":
              zo(r), zu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ti);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Kd(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[yt] = t),
            (e[mo] = r),
            xp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = ml(n, r)), n)) {
              case "dialog":
                X("cancel", e), X("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                X("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Qr.length; o++) X(Qr[o], e);
                o = r;
                break;
              case "source":
                X("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                X("error", e), X("load", e), (o = r);
                break;
              case "details":
                X("toggle", e), (o = r);
                break;
              case "input":
                Iu(e, r), (o = ul(e, r)), X("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = re({}, r, { value: void 0 })),
                  X("invalid", e);
                break;
              case "textarea":
                Fu(e, r), (o = fl(e, r)), X("invalid", e);
                break;
              default:
                o = r;
            }
            hl(n, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var a = l[i];
                i === "style"
                  ? Xd(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && qd(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && io(e, a)
                    : typeof a == "number" && io(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (oo.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && X("scroll", e)
                      : a != null && fa(e, i, a, s));
              }
            switch (n) {
              case "input":
                zo(e), Du(e, r, !1);
                break;
              case "textarea":
                zo(e), zu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + cn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Zn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Zn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Ti);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ge(t), null;
    case 6:
      if (e && t.stateNode != null) Sp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
        if (((n = Cn(vo.current)), Cn(gt.current), Ko(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[yt] = t),
            (i = r.nodeValue !== n) && ((e = ze), e !== null))
          )
            switch (e.tag) {
              case 3:
                Go(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Go(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[yt] = t),
            (t.stateNode = r);
      }
      return ge(t), null;
    case 13:
      if (
        (Z(te),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ee && Fe !== null && t.mode & 1 && !(t.flags & 128))
          zf(), vr(), (t.flags |= 98560), (i = !1);
        else if (((i = Ko(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(R(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(R(317));
            i[yt] = t;
          } else
            vr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ge(t), (i = !1);
        } else ot !== null && (ql(ot), (ot = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || te.current & 1 ? ce === 0 && (ce = 3) : Ka())),
          t.updateQueue !== null && (t.flags |= 4),
          ge(t),
          null);
    case 4:
      return (
        xr(), Ul(e, t), e === null && po(t.stateNode.containerInfo), ge(t), null
      );
    case 10:
      return _a(t.type._context), ge(t), null;
    case 17:
      return _e(t.type) && ji(), ge(t), null;
    case 19:
      if ((Z(te), (i = t.memoizedState), i === null)) return ge(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) zr(i, !1);
        else {
          if (ce !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Mi(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    zr(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return q(te, (te.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            se() > Sr &&
            ((t.flags |= 128), (r = !0), zr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Mi(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              zr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !ee)
            )
              return ge(t), null;
          } else
            2 * se() - i.renderingStartTime > Sr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), zr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = se()),
          (t.sibling = null),
          (n = te.current),
          q(te, r ? (n & 1) | 2 : n & 1),
          t)
        : (ge(t), null);
    case 22:
    case 23:
      return (
        Ga(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ie & 1073741824 && (ge(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ge(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function Ov(e, t) {
  switch ((Ta(t), t.tag)) {
    case 1:
      return (
        _e(t.type) && ji(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        xr(),
        Z(be),
        Z(Se),
        Ia(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ma(t), null;
    case 13:
      if ((Z(te), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(R(340));
        vr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Z(te), null;
    case 4:
      return xr(), null;
    case 10:
      return _a(t.type._context), null;
    case 22:
    case 23:
      return Ga(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Xo = !1,
  we = !1,
  Lv = typeof WeakSet == "function" ? WeakSet : Set,
  _ = null;
function Yn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ie(e, t, r);
      }
    else n.current = null;
}
function Wl(e, t, n) {
  try {
    n();
  } catch (r) {
    ie(e, t, r);
  }
}
var jc = !1;
function Mv(e, t) {
  if (((Nl = Ei), (e = Pf()), Na(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            d = 0,
            p = e,
            m = null;
          t: for (;;) {
            for (
              var g;
              p !== n || (o !== 0 && p.nodeType !== 3) || (l = s + o),
                p !== i || (r !== 0 && p.nodeType !== 3) || (a = s + r),
                p.nodeType === 3 && (s += p.nodeValue.length),
                (g = p.firstChild) !== null;

            )
              (m = p), (p = g);
            for (;;) {
              if (p === e) break t;
              if (
                (m === n && ++u === o && (l = s),
                m === i && ++d === r && (a = s),
                (g = p.nextSibling) !== null)
              )
                break;
              (p = m), (m = p.parentNode);
            }
            p = g;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Pl = { focusedElem: e, selectionRange: n }, Ei = !1, _ = t; _ !== null; )
    if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (_ = e);
    else
      for (; _ !== null; ) {
        t = _;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var v = w.memoizedProps,
                    S = w.memoizedState,
                    h = t.stateNode,
                    f = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : et(t.type, v),
                      S
                    );
                  h.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (k) {
          ie(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (_ = e);
          break;
        }
        _ = t.return;
      }
  return (w = jc), (jc = !1), w;
}
function Jr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Wl(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function os(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Vl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function kp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), kp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[yt], delete t[mo], delete t[Rl], delete t[vv], delete t[gv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Cp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Rc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Cp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Hl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ti));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Hl(e, t, n), e = e.sibling; e !== null; ) Hl(e, t, n), (e = e.sibling);
}
function Bl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Bl(e, t, n), e = e.sibling; e !== null; ) Bl(e, t, n), (e = e.sibling);
}
var pe = null,
  rt = !1;
function zt(e, t, n) {
  for (n = n.child; n !== null; ) Ep(e, t, n), (n = n.sibling);
}
function Ep(e, t, n) {
  if (vt && typeof vt.onCommitFiberUnmount == "function")
    try {
      vt.onCommitFiberUnmount(Yi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      we || Yn(n, t);
    case 6:
      var r = pe,
        o = rt;
      (pe = null),
        zt(e, t, n),
        (pe = r),
        (rt = o),
        pe !== null &&
          (rt
            ? ((e = pe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : pe.removeChild(n.stateNode));
      break;
    case 18:
      pe !== null &&
        (rt
          ? ((e = pe),
            (n = n.stateNode),
            e.nodeType === 8
              ? $s(e.parentNode, n)
              : e.nodeType === 1 && $s(e, n),
            uo(e))
          : $s(pe, n.stateNode));
      break;
    case 4:
      (r = pe),
        (o = rt),
        (pe = n.stateNode.containerInfo),
        (rt = !0),
        zt(e, t, n),
        (pe = r),
        (rt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !we &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && Wl(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      zt(e, t, n);
      break;
    case 1:
      if (
        !we &&
        (Yn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          ie(n, t, l);
        }
      zt(e, t, n);
      break;
    case 21:
      zt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((we = (r = we) || n.memoizedState !== null), zt(e, t, n), (we = r))
        : zt(e, t, n);
      break;
    default:
      zt(e, t, n);
  }
}
function bc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Lv()),
      t.forEach(function (r) {
        var o = Hv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Je(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (pe = l.stateNode), (rt = !1);
              break e;
            case 3:
              (pe = l.stateNode.containerInfo), (rt = !0);
              break e;
            case 4:
              (pe = l.stateNode.containerInfo), (rt = !0);
              break e;
          }
          l = l.return;
        }
        if (pe === null) throw Error(R(160));
        Ep(i, s, o), (pe = null), (rt = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        ie(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Np(t, e), (t = t.sibling);
}
function Np(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Je(t, e), dt(e), r & 4)) {
        try {
          Jr(3, e, e.return), os(3, e);
        } catch (v) {
          ie(e, e.return, v);
        }
        try {
          Jr(5, e, e.return);
        } catch (v) {
          ie(e, e.return, v);
        }
      }
      break;
    case 1:
      Je(t, e), dt(e), r & 512 && n !== null && Yn(n, n.return);
      break;
    case 5:
      if (
        (Je(t, e),
        dt(e),
        r & 512 && n !== null && Yn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          io(o, "");
        } catch (v) {
          ie(e, e.return, v);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && i.type === "radio" && i.name != null && Qd(o, i),
              ml(l, s);
            var u = ml(l, i);
            for (s = 0; s < a.length; s += 2) {
              var d = a[s],
                p = a[s + 1];
              d === "style"
                ? Xd(o, p)
                : d === "dangerouslySetInnerHTML"
                ? qd(o, p)
                : d === "children"
                ? io(o, p)
                : fa(o, d, p, u);
            }
            switch (l) {
              case "input":
                cl(o, i);
                break;
              case "textarea":
                Gd(o, i);
                break;
              case "select":
                var m = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? Zn(o, !!i.multiple, g, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Zn(o, !!i.multiple, i.defaultValue, !0)
                      : Zn(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[mo] = i;
          } catch (v) {
            ie(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Je(t, e), dt(e), r & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (v) {
          ie(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Je(t, e), dt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          uo(t.containerInfo);
        } catch (v) {
          ie(e, e.return, v);
        }
      break;
    case 4:
      Je(t, e), dt(e);
      break;
    case 13:
      Je(t, e),
        dt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Ba = se())),
        r & 4 && bc(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((we = (u = we) || d), Je(t, e), (we = u)) : Je(t, e),
        dt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (_ = e, d = e.child; d !== null; ) {
            for (p = _ = d; _ !== null; ) {
              switch (((m = _), (g = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Jr(4, m, m.return);
                  break;
                case 1:
                  Yn(m, m.return);
                  var w = m.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (v) {
                      ie(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Yn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Ac(p);
                    continue;
                  }
              }
              g !== null ? ((g.return = m), (_ = g)) : Ac(p);
            }
            d = d.sibling;
          }
        e: for (d = null, p = e; ; ) {
          if (p.tag === 5) {
            if (d === null) {
              d = p;
              try {
                (o = p.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = p.stateNode),
                      (a = p.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = Yd("display", s)));
              } catch (v) {
                ie(e, e.return, v);
              }
            }
          } else if (p.tag === 6) {
            if (d === null)
              try {
                p.stateNode.nodeValue = u ? "" : p.memoizedProps;
              } catch (v) {
                ie(e, e.return, v);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            d === p && (d = null), (p = p.return);
          }
          d === p && (d = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      Je(t, e), dt(e), r & 4 && bc(e);
      break;
    case 21:
      break;
    default:
      Je(t, e), dt(e);
  }
}
function dt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Cp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (io(o, ""), (r.flags &= -33));
          var i = Rc(e);
          Bl(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = Rc(e);
          Hl(e, l, s);
          break;
        default:
          throw Error(R(161));
      }
    } catch (a) {
      ie(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Iv(e, t, n) {
  (_ = e), Pp(e);
}
function Pp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var o = _,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Xo;
      if (!s) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || we;
        l = Xo;
        var u = we;
        if (((Xo = s), (we = a) && !u))
          for (_ = o; _ !== null; )
            (s = _),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Oc(o)
                : a !== null
                ? ((a.return = s), (_ = a))
                : Oc(o);
        for (; i !== null; ) (_ = i), Pp(i), (i = i.sibling);
        (_ = o), (Xo = l), (we = u);
      }
      _c(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (_ = i)) : _c(e);
  }
}
function _c(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              we || os(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !we)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : et(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && mc(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                mc(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var p = d.dehydrated;
                    p !== null && uo(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(R(163));
          }
        we || (t.flags & 512 && Vl(t));
      } catch (m) {
        ie(t, t.return, m);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function Ac(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function Oc(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            os(4, t);
          } catch (a) {
            ie(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              ie(t, o, a);
            }
          }
          var i = t.return;
          try {
            Vl(t);
          } catch (a) {
            ie(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Vl(t);
          } catch (a) {
            ie(t, s, a);
          }
      }
    } catch (a) {
      ie(t, t.return, a);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (_ = l);
      break;
    }
    _ = t.return;
  }
}
var Dv = Math.ceil,
  Fi = Dt.ReactCurrentDispatcher,
  Va = Dt.ReactCurrentOwner,
  qe = Dt.ReactCurrentBatchConfig,
  H = 0,
  fe = null,
  le = null,
  he = 0,
  Ie = 0,
  Xn = yn(0),
  ce = 0,
  So = null,
  On = 0,
  is = 0,
  Ha = 0,
  eo = null,
  je = null,
  Ba = 0,
  Sr = 1 / 0,
  Pt = null,
  zi = !1,
  Ql = null,
  ln = null,
  Zo = !1,
  en = null,
  $i = 0,
  to = 0,
  Gl = null,
  pi = -1,
  hi = 0;
function Ne() {
  return H & 6 ? se() : pi !== -1 ? pi : (pi = se());
}
function an(e) {
  return e.mode & 1
    ? H & 2 && he !== 0
      ? he & -he
      : wv.transition !== null
      ? (hi === 0 && (hi = cf()), hi)
      : ((e = K),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : vf(e.type))),
        e)
    : 1;
}
function st(e, t, n, r) {
  if (50 < to) throw ((to = 0), (Gl = null), Error(R(185)));
  Ro(e, n, r),
    (!(H & 2) || e !== fe) &&
      (e === fe && (!(H & 2) && (is |= n), ce === 4 && Gt(e, he)),
      Ae(e, r),
      n === 1 && H === 0 && !(t.mode & 1) && ((Sr = se() + 500), ts && vn()));
}
function Ae(e, t) {
  var n = e.callbackNode;
  wy(e, t);
  var r = Ci(e, e === fe ? he : 0);
  if (r === 0)
    n !== null && Wu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Wu(n), t === 1))
      e.tag === 0 ? xv(Lc.bind(null, e)) : If(Lc.bind(null, e)),
        mv(function () {
          !(H & 6) && vn();
        }),
        (n = null);
    else {
      switch (df(r)) {
        case 1:
          n = va;
          break;
        case 4:
          n = af;
          break;
        case 16:
          n = ki;
          break;
        case 536870912:
          n = uf;
          break;
        default:
          n = ki;
      }
      n = Lp(n, Tp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Tp(e, t) {
  if (((pi = -1), (hi = 0), H & 6)) throw Error(R(327));
  var n = e.callbackNode;
  if (rr() && e.callbackNode !== n) return null;
  var r = Ci(e, e === fe ? he : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ui(e, r);
  else {
    t = r;
    var o = H;
    H |= 2;
    var i = Rp();
    (fe !== e || he !== t) && ((Pt = null), (Sr = se() + 500), jn(e, t));
    do
      try {
        $v();
        break;
      } catch (l) {
        jp(e, l);
      }
    while (!0);
    ba(),
      (Fi.current = i),
      (H = o),
      le !== null ? (t = 0) : ((fe = null), (he = 0), (t = ce));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = wl(e)), o !== 0 && ((r = o), (t = Kl(e, o)))), t === 1)
    )
      throw ((n = So), jn(e, 0), Gt(e, r), Ae(e, se()), n);
    if (t === 6) Gt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Fv(o) &&
          ((t = Ui(e, r)),
          t === 2 && ((i = wl(e)), i !== 0 && ((r = i), (t = Kl(e, i)))),
          t === 1))
      )
        throw ((n = So), jn(e, 0), Gt(e, r), Ae(e, se()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          wn(e, je, Pt);
          break;
        case 3:
          if (
            (Gt(e, r), (r & 130023424) === r && ((t = Ba + 500 - se()), 10 < t))
          ) {
            if (Ci(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Ne(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = jl(wn.bind(null, e, je, Pt), t);
            break;
          }
          wn(e, je, Pt);
          break;
        case 4:
          if ((Gt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - it(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = se() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Dv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = jl(wn.bind(null, e, je, Pt), r);
            break;
          }
          wn(e, je, Pt);
          break;
        case 5:
          wn(e, je, Pt);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return Ae(e, se()), e.callbackNode === n ? Tp.bind(null, e) : null;
}
function Kl(e, t) {
  var n = eo;
  return (
    e.current.memoizedState.isDehydrated && (jn(e, t).flags |= 256),
    (e = Ui(e, t)),
    e !== 2 && ((t = je), (je = n), t !== null && ql(t)),
    e
  );
}
function ql(e) {
  je === null ? (je = e) : je.push.apply(je, e);
}
function Fv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!lt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Gt(e, t) {
  for (
    t &= ~Ha,
      t &= ~is,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - it(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Lc(e) {
  if (H & 6) throw Error(R(327));
  rr();
  var t = Ci(e, 0);
  if (!(t & 1)) return Ae(e, se()), null;
  var n = Ui(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = wl(e);
    r !== 0 && ((t = r), (n = Kl(e, r)));
  }
  if (n === 1) throw ((n = So), jn(e, 0), Gt(e, t), Ae(e, se()), n);
  if (n === 6) throw Error(R(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    wn(e, je, Pt),
    Ae(e, se()),
    null
  );
}
function Qa(e, t) {
  var n = H;
  H |= 1;
  try {
    return e(t);
  } finally {
    (H = n), H === 0 && ((Sr = se() + 500), ts && vn());
  }
}
function Ln(e) {
  en !== null && en.tag === 0 && !(H & 6) && rr();
  var t = H;
  H |= 1;
  var n = qe.transition,
    r = K;
  try {
    if (((qe.transition = null), (K = 1), e)) return e();
  } finally {
    (K = r), (qe.transition = n), (H = t), !(H & 6) && vn();
  }
}
function Ga() {
  (Ie = Xn.current), Z(Xn);
}
function jn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), hv(n)), le !== null))
    for (n = le.return; n !== null; ) {
      var r = n;
      switch ((Ta(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ji();
          break;
        case 3:
          xr(), Z(be), Z(Se), Ia();
          break;
        case 5:
          Ma(r);
          break;
        case 4:
          xr();
          break;
        case 13:
          Z(te);
          break;
        case 19:
          Z(te);
          break;
        case 10:
          _a(r.type._context);
          break;
        case 22:
        case 23:
          Ga();
      }
      n = n.return;
    }
  if (
    ((fe = e),
    (le = e = un(e.current, null)),
    (he = Ie = t),
    (ce = 0),
    (So = null),
    (Ha = is = On = 0),
    (je = eo = null),
    kn !== null)
  ) {
    for (t = 0; t < kn.length; t++)
      if (((n = kn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    kn = null;
  }
  return e;
}
function jp(e, t) {
  do {
    var n = le;
    try {
      if ((ba(), (ci.current = Di), Ii)) {
        for (var r = ne.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Ii = !1;
      }
      if (
        ((An = 0),
        (de = ae = ne = null),
        (Zr = !1),
        (go = 0),
        (Va.current = null),
        n === null || n.return === null)
      ) {
        (ce = 1), (So = t), (le = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = he),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            d = l,
            p = d.tag;
          if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = d.alternate;
            m
              ? ((d.updateQueue = m.updateQueue),
                (d.memoizedState = m.memoizedState),
                (d.lanes = m.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var g = Sc(s);
          if (g !== null) {
            (g.flags &= -257),
              kc(g, s, l, i, t),
              g.mode & 1 && wc(i, u, t),
              (t = g),
              (a = u);
            var w = t.updateQueue;
            if (w === null) {
              var v = new Set();
              v.add(a), (t.updateQueue = v);
            } else w.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              wc(i, u, t), Ka();
              break e;
            }
            a = Error(R(426));
          }
        } else if (ee && l.mode & 1) {
          var S = Sc(s);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              kc(S, s, l, i, t),
              ja(wr(a, l));
            break e;
          }
        }
        (i = a = wr(a, l)),
          ce !== 4 && (ce = 2),
          eo === null ? (eo = [i]) : eo.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var h = dp(i, a, t);
              hc(i, h);
              break e;
            case 1:
              l = a;
              var f = i.type,
                y = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (ln === null || !ln.has(y))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var k = fp(i, l, t);
                hc(i, k);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      _p(n);
    } catch (C) {
      (t = C), le === n && n !== null && (le = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Rp() {
  var e = Fi.current;
  return (Fi.current = Di), e === null ? Di : e;
}
function Ka() {
  (ce === 0 || ce === 3 || ce === 2) && (ce = 4),
    fe === null || (!(On & 268435455) && !(is & 268435455)) || Gt(fe, he);
}
function Ui(e, t) {
  var n = H;
  H |= 2;
  var r = Rp();
  (fe !== e || he !== t) && ((Pt = null), jn(e, t));
  do
    try {
      zv();
      break;
    } catch (o) {
      jp(e, o);
    }
  while (!0);
  if ((ba(), (H = n), (Fi.current = r), le !== null)) throw Error(R(261));
  return (fe = null), (he = 0), ce;
}
function zv() {
  for (; le !== null; ) bp(le);
}
function $v() {
  for (; le !== null && !dy(); ) bp(le);
}
function bp(e) {
  var t = Op(e.alternate, e, Ie);
  (e.memoizedProps = e.pendingProps),
    t === null ? _p(e) : (le = t),
    (Va.current = null);
}
function _p(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Ov(n, t)), n !== null)) {
        (n.flags &= 32767), (le = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ce = 6), (le = null);
        return;
      }
    } else if (((n = Av(n, t, Ie)), n !== null)) {
      le = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      le = t;
      return;
    }
    le = t = e;
  } while (t !== null);
  ce === 0 && (ce = 5);
}
function wn(e, t, n) {
  var r = K,
    o = qe.transition;
  try {
    (qe.transition = null), (K = 1), Uv(e, t, n, r);
  } finally {
    (qe.transition = o), (K = r);
  }
  return null;
}
function Uv(e, t, n, r) {
  do rr();
  while (en !== null);
  if (H & 6) throw Error(R(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(R(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Sy(e, i),
    e === fe && ((le = fe = null), (he = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Zo ||
      ((Zo = !0),
      Lp(ki, function () {
        return rr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = qe.transition), (qe.transition = null);
    var s = K;
    K = 1;
    var l = H;
    (H |= 4),
      (Va.current = null),
      Mv(e, n),
      Np(n, e),
      lv(Pl),
      (Ei = !!Nl),
      (Pl = Nl = null),
      (e.current = n),
      Iv(n),
      fy(),
      (H = l),
      (K = s),
      (qe.transition = i);
  } else e.current = n;
  if (
    (Zo && ((Zo = !1), (en = e), ($i = o)),
    (i = e.pendingLanes),
    i === 0 && (ln = null),
    my(n.stateNode),
    Ae(e, se()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (zi) throw ((zi = !1), (e = Ql), (Ql = null), e);
  return (
    $i & 1 && e.tag !== 0 && rr(),
    (i = e.pendingLanes),
    i & 1 ? (e === Gl ? to++ : ((to = 0), (Gl = e))) : (to = 0),
    vn(),
    null
  );
}
function rr() {
  if (en !== null) {
    var e = df($i),
      t = qe.transition,
      n = K;
    try {
      if (((qe.transition = null), (K = 16 > e ? 16 : e), en === null))
        var r = !1;
      else {
        if (((e = en), (en = null), ($i = 0), H & 6)) throw Error(R(331));
        var o = H;
        for (H |= 4, _ = e.current; _ !== null; ) {
          var i = _,
            s = i.child;
          if (_.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (_ = u; _ !== null; ) {
                  var d = _;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Jr(8, d, i);
                  }
                  var p = d.child;
                  if (p !== null) (p.return = d), (_ = p);
                  else
                    for (; _ !== null; ) {
                      d = _;
                      var m = d.sibling,
                        g = d.return;
                      if ((kp(d), d === u)) {
                        _ = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = g), (_ = m);
                        break;
                      }
                      _ = g;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var v = w.child;
                if (v !== null) {
                  w.child = null;
                  do {
                    var S = v.sibling;
                    (v.sibling = null), (v = S);
                  } while (v !== null);
                }
              }
              _ = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (_ = s);
          else
            e: for (; _ !== null; ) {
              if (((i = _), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Jr(9, i, i.return);
                }
              var h = i.sibling;
              if (h !== null) {
                (h.return = i.return), (_ = h);
                break e;
              }
              _ = i.return;
            }
        }
        var f = e.current;
        for (_ = f; _ !== null; ) {
          s = _;
          var y = s.child;
          if (s.subtreeFlags & 2064 && y !== null) (y.return = s), (_ = y);
          else
            e: for (s = f; _ !== null; ) {
              if (((l = _), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      os(9, l);
                  }
                } catch (C) {
                  ie(l, l.return, C);
                }
              if (l === s) {
                _ = null;
                break e;
              }
              var k = l.sibling;
              if (k !== null) {
                (k.return = l.return), (_ = k);
                break e;
              }
              _ = l.return;
            }
        }
        if (
          ((H = o), vn(), vt && typeof vt.onPostCommitFiberRoot == "function")
        )
          try {
            vt.onPostCommitFiberRoot(Yi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (K = n), (qe.transition = t);
    }
  }
  return !1;
}
function Mc(e, t, n) {
  (t = wr(n, t)),
    (t = dp(e, t, 1)),
    (e = sn(e, t, 1)),
    (t = Ne()),
    e !== null && (Ro(e, 1, t), Ae(e, t));
}
function ie(e, t, n) {
  if (e.tag === 3) Mc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Mc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ln === null || !ln.has(r)))
        ) {
          (e = wr(n, e)),
            (e = fp(t, e, 1)),
            (t = sn(t, e, 1)),
            (e = Ne()),
            t !== null && (Ro(t, 1, e), Ae(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Wv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ne()),
    (e.pingedLanes |= e.suspendedLanes & n),
    fe === e &&
      (he & n) === n &&
      (ce === 4 || (ce === 3 && (he & 130023424) === he && 500 > se() - Ba)
        ? jn(e, 0)
        : (Ha |= n)),
    Ae(e, t);
}
function Ap(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Wo), (Wo <<= 1), !(Wo & 130023424) && (Wo = 4194304))
      : (t = 1));
  var n = Ne();
  (e = Ot(e, t)), e !== null && (Ro(e, t, n), Ae(e, n));
}
function Vv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ap(e, n);
}
function Hv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  r !== null && r.delete(t), Ap(e, n);
}
var Op;
Op = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || be.current) Re = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Re = !1), _v(e, t, n);
      Re = !!(e.flags & 131072);
    }
  else (Re = !1), ee && t.flags & 1048576 && Df(t, _i, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      fi(e, t), (e = t.pendingProps);
      var o = yr(t, Se.current);
      nr(t, n), (o = Fa(null, t, r, e, o, n));
      var i = za();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            _e(r) ? ((i = !0), Ri(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Oa(t),
            (o.updater = rs),
            (t.stateNode = o),
            (o._reactInternals = t),
            Ml(t, r, e, n),
            (t = Fl(null, t, r, !0, i, n)))
          : ((t.tag = 0), ee && i && Pa(t), Ce(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (fi(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Qv(r)),
          (e = et(r, e)),
          o)
        ) {
          case 0:
            t = Dl(null, t, r, e, n);
            break e;
          case 1:
            t = Nc(null, t, r, e, n);
            break e;
          case 11:
            t = Cc(null, t, r, e, n);
            break e;
          case 14:
            t = Ec(null, t, r, et(r.type, e), n);
            break e;
        }
        throw Error(R(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : et(r, o)),
        Dl(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : et(r, o)),
        Nc(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((yp(t), e === null)) throw Error(R(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Vf(e, t),
          Li(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = wr(Error(R(423)), t)), (t = Pc(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = wr(Error(R(424)), t)), (t = Pc(e, t, r, n, o));
            break e;
          } else
            for (
              Fe = on(t.stateNode.containerInfo.firstChild),
                ze = t,
                ee = !0,
                ot = null,
                n = Uf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((vr(), r === o)) {
            t = Lt(e, t, n);
            break e;
          }
          Ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Hf(t),
        e === null && Al(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        Tl(r, o) ? (s = null) : i !== null && Tl(r, i) && (t.flags |= 32),
        mp(e, t),
        Ce(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Al(t), null;
    case 13:
      return vp(e, t, n);
    case 4:
      return (
        La(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = gr(t, null, r, n)) : Ce(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : et(r, o)),
        Cc(e, t, r, o, n)
      );
    case 7:
      return Ce(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ce(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ce(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          q(Ai, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (lt(i.value, s)) {
            if (i.children === o.children && !be.current) {
              t = Lt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                s = i.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = bt(-1, n & -n)), (a.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (a.next = a)
                          : ((a.next = d.next), (d.next = a)),
                          (u.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      Ol(i.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(R(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  Ol(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        Ce(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        nr(t, n),
        (o = Ye(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ce(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = et(r, t.pendingProps)),
        (o = et(r.type, o)),
        Ec(e, t, r, o, n)
      );
    case 15:
      return pp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : et(r, o)),
        fi(e, t),
        (t.tag = 1),
        _e(r) ? ((e = !0), Ri(t)) : (e = !1),
        nr(t, n),
        cp(t, r, o),
        Ml(t, r, o, n),
        Fl(null, t, r, !0, e, n)
      );
    case 19:
      return gp(e, t, n);
    case 22:
      return hp(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function Lp(e, t) {
  return lf(e, t);
}
function Bv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ke(e, t, n, r) {
  return new Bv(e, t, n, r);
}
function qa(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Qv(e) {
  if (typeof e == "function") return qa(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ha)) return 11;
    if (e === ma) return 14;
  }
  return 2;
}
function un(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ke(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function mi(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) qa(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Un:
        return Rn(n.children, o, i, t);
      case pa:
        (s = 8), (o |= 8);
        break;
      case il:
        return (
          (e = Ke(12, n, t, o | 2)), (e.elementType = il), (e.lanes = i), e
        );
      case sl:
        return (e = Ke(13, n, t, o)), (e.elementType = sl), (e.lanes = i), e;
      case ll:
        return (e = Ke(19, n, t, o)), (e.elementType = ll), (e.lanes = i), e;
      case Vd:
        return ss(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ud:
              s = 10;
              break e;
            case Wd:
              s = 9;
              break e;
            case ha:
              s = 11;
              break e;
            case ma:
              s = 14;
              break e;
            case Ht:
              (s = 16), (r = null);
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ke(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Rn(e, t, n, r) {
  return (e = Ke(7, e, r, t)), (e.lanes = n), e;
}
function ss(e, t, n, r) {
  return (
    (e = Ke(22, e, r, t)),
    (e.elementType = Vd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ks(e, t, n) {
  return (e = Ke(6, e, null, t)), (e.lanes = n), e;
}
function qs(e, t, n) {
  return (
    (t = Ke(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Gv(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Rs(0)),
    (this.expirationTimes = Rs(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Rs(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Ya(e, t, n, r, o, i, s, l, a) {
  return (
    (e = new Gv(e, t, n, l, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ke(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Oa(i),
    e
  );
}
function Kv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: $n,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Mp(e) {
  if (!e) return dn;
  e = e._reactInternals;
  e: {
    if (Fn(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (_e(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (_e(n)) return Mf(e, n, t);
  }
  return t;
}
function Ip(e, t, n, r, o, i, s, l, a) {
  return (
    (e = Ya(n, r, !0, e, o, i, s, l, a)),
    (e.context = Mp(null)),
    (n = e.current),
    (r = Ne()),
    (o = an(n)),
    (i = bt(r, o)),
    (i.callback = t ?? null),
    sn(n, i, o),
    (e.current.lanes = o),
    Ro(e, o, r),
    Ae(e, r),
    e
  );
}
function ls(e, t, n, r) {
  var o = t.current,
    i = Ne(),
    s = an(o);
  return (
    (n = Mp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = bt(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = sn(o, t, s)),
    e !== null && (st(e, o, s, i), ui(e, o, s)),
    s
  );
}
function Wi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ic(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Xa(e, t) {
  Ic(e, t), (e = e.alternate) && Ic(e, t);
}
function qv() {
  return null;
}
var Dp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Za(e) {
  this._internalRoot = e;
}
as.prototype.render = Za.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  ls(e, t, null, null);
};
as.prototype.unmount = Za.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ln(function () {
      ls(null, e, null, null);
    }),
      (t[At] = null);
  }
};
function as(e) {
  this._internalRoot = e;
}
as.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = hf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Qt.length && t !== 0 && t < Qt[n].priority; n++);
    Qt.splice(n, 0, e), n === 0 && yf(e);
  }
};
function Ja(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function us(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Dc() {}
function Yv(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Wi(s);
        i.call(u);
      };
    }
    var s = Ip(t, r, e, 0, null, !1, !1, "", Dc);
    return (
      (e._reactRootContainer = s),
      (e[At] = s.current),
      po(e.nodeType === 8 ? e.parentNode : e),
      Ln(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = Wi(a);
      l.call(u);
    };
  }
  var a = Ya(e, 0, !1, null, null, !1, !1, "", Dc);
  return (
    (e._reactRootContainer = a),
    (e[At] = a.current),
    po(e.nodeType === 8 ? e.parentNode : e),
    Ln(function () {
      ls(t, a, n, r);
    }),
    a
  );
}
function cs(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var a = Wi(s);
        l.call(a);
      };
    }
    ls(t, s, e, o);
  } else s = Yv(n, t, e, o, r);
  return Wi(s);
}
ff = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Br(t.pendingLanes);
        n !== 0 &&
          (ga(t, n | 1), Ae(t, se()), !(H & 6) && ((Sr = se() + 500), vn()));
      }
      break;
    case 13:
      Ln(function () {
        var r = Ot(e, 1);
        if (r !== null) {
          var o = Ne();
          st(r, e, 1, o);
        }
      }),
        Xa(e, 1);
  }
};
xa = function (e) {
  if (e.tag === 13) {
    var t = Ot(e, 134217728);
    if (t !== null) {
      var n = Ne();
      st(t, e, 134217728, n);
    }
    Xa(e, 134217728);
  }
};
pf = function (e) {
  if (e.tag === 13) {
    var t = an(e),
      n = Ot(e, t);
    if (n !== null) {
      var r = Ne();
      st(n, e, t, r);
    }
    Xa(e, t);
  }
};
hf = function () {
  return K;
};
mf = function (e, t) {
  var n = K;
  try {
    return (K = e), t();
  } finally {
    K = n;
  }
};
vl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((cl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = es(r);
            if (!o) throw Error(R(90));
            Bd(r), cl(r, o);
          }
        }
      }
      break;
    case "textarea":
      Gd(e, n);
      break;
    case "select":
      (t = n.value), t != null && Zn(e, !!n.multiple, t, !1);
  }
};
ef = Qa;
tf = Ln;
var Xv = { usingClientEntryPoint: !1, Events: [_o, Bn, es, Zd, Jd, Qa] },
  $r = {
    findFiberByHostInstance: Sn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Zv = {
    bundleType: $r.bundleType,
    version: $r.version,
    rendererPackageName: $r.rendererPackageName,
    rendererConfig: $r.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Dt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = of(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: $r.findFiberByHostInstance || qv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Jo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Jo.isDisabled && Jo.supportsFiber)
    try {
      (Yi = Jo.inject(Zv)), (vt = Jo);
    } catch {}
}
We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xv;
We.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ja(t)) throw Error(R(200));
  return Kv(e, t, null, n);
};
We.createRoot = function (e, t) {
  if (!Ja(e)) throw Error(R(299));
  var n = !1,
    r = "",
    o = Dp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Ya(e, 1, !1, null, null, n, !1, r, o)),
    (e[At] = t.current),
    po(e.nodeType === 8 ? e.parentNode : e),
    new Za(t)
  );
};
We.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(R(188))
      : ((e = Object.keys(e).join(",")), Error(R(268, e)));
  return (e = of(t)), (e = e === null ? null : e.stateNode), e;
};
We.flushSync = function (e) {
  return Ln(e);
};
We.hydrate = function (e, t, n) {
  if (!us(t)) throw Error(R(200));
  return cs(null, e, t, !0, n);
};
We.hydrateRoot = function (e, t, n) {
  if (!Ja(e)) throw Error(R(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = Dp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Ip(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[At] = t.current),
    po(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new as(t);
};
We.render = function (e, t, n) {
  if (!us(t)) throw Error(R(200));
  return cs(null, e, t, !1, n);
};
We.unmountComponentAtNode = function (e) {
  if (!us(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (Ln(function () {
        cs(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[At] = null);
        });
      }),
      !0)
    : !1;
};
We.unstable_batchedUpdates = Qa;
We.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!us(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return cs(e, t, n, !1, r);
};
We.version = "18.3.1-next-f1338f8080-20240426";
function Fp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fp);
    } catch (e) {
      console.error(e);
    }
}
Fp(), (Dd.exports = We);
var Oo = Dd.exports;
const Jv = Nd(Oo);
var zp,
  Fc = Oo;
(zp = Fc.createRoot), Fc.hydrateRoot;
function eg(e, t) {
  if (e instanceof RegExp) return { keys: !1, pattern: e };
  var n,
    r,
    o,
    i,
    s = [],
    l = "",
    a = e.split("/");
  for (a[0] || a.shift(); (o = a.shift()); )
    (n = o[0]),
      n === "*"
        ? (s.push(n), (l += o[1] === "?" ? "(?:/(.*))?" : "/(.*)"))
        : n === ":"
        ? ((r = o.indexOf("?", 1)),
          (i = o.indexOf(".", 1)),
          s.push(o.substring(1, ~r ? r : ~i ? i : o.length)),
          (l += ~r && !~i ? "(?:/([^/]+?))?" : "/([^/]+?)"),
          ~i && (l += (~r ? "?" : "") + "\\" + o.substring(i)))
        : (l += "/" + o);
  return {
    keys: s,
    pattern: new RegExp("^" + l + (t ? "(?=$|/)" : "/?$"), "i"),
  };
}
var $p = { exports: {} },
  Up = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kr = x;
function tg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ng = typeof Object.is == "function" ? Object.is : tg,
  rg = kr.useState,
  og = kr.useEffect,
  ig = kr.useLayoutEffect,
  sg = kr.useDebugValue;
function lg(e, t) {
  var n = t(),
    r = rg({ inst: { value: n, getSnapshot: t } }),
    o = r[0].inst,
    i = r[1];
  return (
    ig(
      function () {
        (o.value = n), (o.getSnapshot = t), Ys(o) && i({ inst: o });
      },
      [e, n, t]
    ),
    og(
      function () {
        return (
          Ys(o) && i({ inst: o }),
          e(function () {
            Ys(o) && i({ inst: o });
          })
        );
      },
      [e]
    ),
    sg(n),
    n
  );
}
function Ys(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ng(e, n);
  } catch {
    return !0;
  }
}
function ag(e, t) {
  return t();
}
var ug =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? ag
    : lg;
Up.useSyncExternalStore =
  kr.useSyncExternalStore !== void 0 ? kr.useSyncExternalStore : ug;
$p.exports = Up;
var cg = $p.exports;
const dg = Wm.useInsertionEffect,
  fg =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  pg = fg ? x.useLayoutEffect : x.useEffect,
  hg = dg || pg,
  Wp = (e) => {
    const t = x.useRef([e, (...n) => t[0](...n)]).current;
    return (
      hg(() => {
        t[0] = e;
      }),
      t[1]
    );
  },
  mg = "popstate",
  eu = "pushState",
  tu = "replaceState",
  yg = "hashchange",
  zc = [mg, eu, tu, yg],
  vg = (e) => {
    for (const t of zc) addEventListener(t, e);
    return () => {
      for (const t of zc) removeEventListener(t, e);
    };
  },
  Vp = (e, t) => cg.useSyncExternalStore(vg, e, t),
  gg = () => location.search,
  xg = ({ ssrSearch: e = "" } = {}) => Vp(gg, () => e),
  $c = () => location.pathname,
  wg = ({ ssrPath: e } = {}) => Vp($c, e ? () => e : $c),
  Sg = (e, { replace: t = !1, state: n = null } = {}) =>
    history[t ? tu : eu](n, "", e),
  kg = (e = {}) => [wg(e), Sg],
  Uc = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[Uc] > "u") {
  for (const e of [eu, tu]) {
    const t = history[e];
    history[e] = function () {
      const n = t.apply(this, arguments),
        r = new Event(e);
      return (r.arguments = arguments), dispatchEvent(r), n;
    };
  }
  Object.defineProperty(window, Uc, { value: !0 });
}
const Cg = (e, t) =>
    t.toLowerCase().indexOf(e.toLowerCase())
      ? "~" + t
      : t.slice(e.length) || "/",
  Hp = (e = "") => (e === "/" ? "" : e),
  Eg = (e, t) => (e[0] === "~" ? e.slice(1) : Hp(t) + e),
  Ng = (e = "", t) => Cg(Wc(Hp(e)), Wc(t)),
  Wc = (e) => {
    try {
      return decodeURI(e);
    } catch {
      return e;
    }
  },
  Bp = {
    hook: kg,
    searchHook: xg,
    parser: eg,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    hrefs: (e) => e,
  },
  Qp = x.createContext(Bp),
  ds = () => x.useContext(Qp),
  Gp = {},
  Kp = x.createContext(Gp),
  Pg = () => x.useContext(Kp),
  nu = (e) => {
    const [t, n] = e.hook(e);
    return [Ng(e.base, t), Wp((r, o) => n(Eg(r, e.base), o))];
  },
  qp = (e, t, n, r) => {
    const { pattern: o, keys: i } =
        t instanceof RegExp ? { keys: !1, pattern: t } : e(t || "*", r),
      s = o.exec(n) || [],
      [l, ...a] = s;
    return l !== void 0
      ? [
          !0,
          (() => {
            const u =
              i !== !1
                ? Object.fromEntries(i.map((p, m) => [p, a[m]]))
                : s.groups;
            let d = { ...a };
            return u && Object.assign(d, u), d;
          })(),
          ...(r ? [l] : []),
        ]
      : [!1, null];
  },
  Tg = ({ children: e, ...t }) => {
    var d, p;
    const n = ds(),
      r = t.hook ? Bp : n;
    let o = r;
    const [i, s] = ((d = t.ssrPath) == null ? void 0 : d.split("?")) ?? [];
    s && ((t.ssrSearch = s), (t.ssrPath = i)),
      (t.hrefs = t.hrefs ?? ((p = t.hook) == null ? void 0 : p.hrefs));
    let l = x.useRef({}),
      a = l.current,
      u = a;
    for (let m in r) {
      const g = m === "base" ? r[m] + (t[m] || "") : t[m] || r[m];
      a === u && g !== u[m] && (l.current = u = { ...u }),
        (u[m] = g),
        g !== r[m] && (o = u);
    }
    return x.createElement(Qp.Provider, { value: o, children: e });
  },
  Vc = ({ children: e, component: t }, n) =>
    t ? x.createElement(t, { params: n }) : typeof e == "function" ? e(n) : e,
  jg = (e) => {
    let t = x.useRef(Gp),
      n = t.current;
    for (const r in e) e[r] !== n[r] && (n = e);
    return Object.keys(e).length === 0 && (n = e), (t.current = n);
  },
  Hc = ({ path: e, nest: t, match: n, ...r }) => {
    const o = ds(),
      [i] = nu(o),
      [s, l, a] = n ?? qp(o.parser, e, i, t),
      u = jg({ ...Pg(), ...l });
    if (!s) return null;
    const d = a ? x.createElement(Tg, { base: a }, Vc(r, u)) : Vc(r, u);
    return x.createElement(Kp.Provider, { value: u, children: d });
  };
x.forwardRef((e, t) => {
  const n = ds(),
    [r, o] = nu(n),
    {
      to: i = "",
      href: s = i,
      onClick: l,
      asChild: a,
      children: u,
      className: d,
      replace: p,
      state: m,
      ...g
    } = e,
    w = Wp((S) => {
      S.ctrlKey ||
        S.metaKey ||
        S.altKey ||
        S.shiftKey ||
        S.button !== 0 ||
        (l == null || l(S),
        S.defaultPrevented || (S.preventDefault(), o(s, e)));
    }),
    v = n.hrefs(s[0] === "~" ? s.slice(1) : n.base + s, n);
  return a && x.isValidElement(u)
    ? x.cloneElement(u, { onClick: w, href: v })
    : x.createElement("a", {
        ...g,
        onClick: w,
        href: v,
        className: d != null && d.call ? d(r === s) : d,
        children: u,
        ref: t,
      });
});
const Yp = (e) =>
    Array.isArray(e)
      ? e.flatMap((t) => Yp(t && t.type === x.Fragment ? t.props.children : t))
      : [e],
  Rg = ({ children: e, location: t }) => {
    const n = ds(),
      [r] = nu(n);
    for (const o of Yp(e)) {
      let i = 0;
      if (
        x.isValidElement(o) &&
        (i = qp(n.parser, o.props.path, t || r, o.props.nest))[0]
      )
        return x.cloneElement(o, { match: i });
    }
    return null;
  };
var fs = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  ps = typeof window > "u" || "Deno" in globalThis;
function tt() {}
function bg(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function _g(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Ag(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Bc(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Og(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Qc(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: o,
    predicate: i,
    queryKey: s,
    stale: l,
  } = e;
  if (s) {
    if (r) {
      if (t.queryHash !== ru(s, t.options)) return !1;
    } else if (!Co(t.queryKey, s)) return !1;
  }
  if (n !== "all") {
    const a = t.isActive();
    if ((n === "active" && !a) || (n === "inactive" && a)) return !1;
  }
  return !(
    (typeof l == "boolean" && t.isStale() !== l) ||
    (o && o !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function Gc(e, t) {
  const { exact: n, status: r, predicate: o, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (ko(t.options.mutationKey) !== ko(i)) return !1;
    } else if (!Co(t.options.mutationKey, i)) return !1;
  }
  return !((r && t.state.status !== r) || (o && !o(t)));
}
function ru(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || ko)(e);
}
function ko(e) {
  return JSON.stringify(e, (t, n) =>
    Yl(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, o) => ((r[o] = n[o]), r), {})
      : n
  );
}
function Co(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? !Object.keys(t).some((n) => !Co(e[n], t[n]))
    : !1;
}
function Xp(e, t) {
  if (e === t) return e;
  const n = Kc(e) && Kc(t);
  if (n || (Yl(e) && Yl(t))) {
    const r = n ? e : Object.keys(e),
      o = r.length,
      i = n ? t : Object.keys(t),
      s = i.length,
      l = n ? [] : {};
    let a = 0;
    for (let u = 0; u < s; u++) {
      const d = n ? u : i[u];
      ((!n && r.includes(d)) || n) && e[d] === void 0 && t[d] === void 0
        ? ((l[d] = void 0), a++)
        : ((l[d] = Xp(e[d], t[d])), l[d] === e[d] && e[d] !== void 0 && a++);
    }
    return o === s && a === o ? e : l;
  }
  return t;
}
function Kc(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Yl(e) {
  if (!qc(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !qc(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function qc(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Lg(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Mg(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
    ? Xp(e, t)
    : t;
}
function Ig(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function Dg(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var ou = Symbol();
function Zp(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === ou
    ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
    : e.queryFn;
}
var En,
  Kt,
  sr,
  vd,
  Fg =
    ((vd = class extends fs {
      constructor() {
        super();
        G(this, En);
        G(this, Kt);
        G(this, sr);
        F(this, sr, (t) => {
          if (!ps && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        P(this, Kt) || this.setEventListener(P(this, sr));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = P(this, Kt)) == null || t.call(this), F(this, Kt, void 0));
      }
      setEventListener(t) {
        var n;
        F(this, sr, t),
          (n = P(this, Kt)) == null || n.call(this),
          F(
            this,
            Kt,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        P(this, En) !== t && (F(this, En, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof P(this, En) == "boolean"
          ? P(this, En)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (En = new WeakMap()),
    (Kt = new WeakMap()),
    (sr = new WeakMap()),
    vd),
  Jp = new Fg(),
  lr,
  qt,
  ar,
  gd,
  zg =
    ((gd = class extends fs {
      constructor() {
        super();
        G(this, lr, !0);
        G(this, qt);
        G(this, ar);
        F(this, ar, (t) => {
          if (!ps && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                window.removeEventListener("online", n),
                  window.removeEventListener("offline", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        P(this, qt) || this.setEventListener(P(this, ar));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = P(this, qt)) == null || t.call(this), F(this, qt, void 0));
      }
      setEventListener(t) {
        var n;
        F(this, ar, t),
          (n = P(this, qt)) == null || n.call(this),
          F(this, qt, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        P(this, lr) !== t &&
          (F(this, lr, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return P(this, lr);
      }
    }),
    (lr = new WeakMap()),
    (qt = new WeakMap()),
    (ar = new WeakMap()),
    gd),
  Vi = new zg();
function $g() {
  let e, t;
  const n = new Promise((o, i) => {
    (e = o), (t = i);
  });
  (n.status = "pending"), n.catch(() => {});
  function r(o) {
    Object.assign(n, o), delete n.resolve, delete n.reject;
  }
  return (
    (n.resolve = (o) => {
      r({ status: "fulfilled", value: o }), e(o);
    }),
    (n.reject = (o) => {
      r({ status: "rejected", reason: o }), t(o);
    }),
    n
  );
}
function Ug(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function eh(e) {
  return (e ?? "online") === "online" ? Vi.isOnline() : !0;
}
var th = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function Xs(e) {
  return e instanceof th;
}
function nh(e) {
  let t = !1,
    n = 0,
    r = !1,
    o;
  const i = $g(),
    s = (v) => {
      var S;
      r || (m(new th(v)), (S = e.abort) == null || S.call(e));
    },
    l = () => {
      t = !0;
    },
    a = () => {
      t = !1;
    },
    u = () =>
      Jp.isFocused() &&
      (e.networkMode === "always" || Vi.isOnline()) &&
      e.canRun(),
    d = () => eh(e.networkMode) && e.canRun(),
    p = (v) => {
      var S;
      r ||
        ((r = !0),
        (S = e.onSuccess) == null || S.call(e, v),
        o == null || o(),
        i.resolve(v));
    },
    m = (v) => {
      var S;
      r ||
        ((r = !0),
        (S = e.onError) == null || S.call(e, v),
        o == null || o(),
        i.reject(v));
    },
    g = () =>
      new Promise((v) => {
        var S;
        (o = (h) => {
          (r || u()) && v(h);
        }),
          (S = e.onPause) == null || S.call(e);
      }).then(() => {
        var v;
        (o = void 0), r || (v = e.onContinue) == null || v.call(e);
      }),
    w = () => {
      if (r) return;
      let v;
      const S = n === 0 ? e.initialPromise : void 0;
      try {
        v = S ?? e.fn();
      } catch (h) {
        v = Promise.reject(h);
      }
      Promise.resolve(v)
        .then(p)
        .catch((h) => {
          var E;
          if (r) return;
          const f = e.retry ?? (ps ? 0 : 3),
            y = e.retryDelay ?? Ug,
            k = typeof y == "function" ? y(n, h) : y,
            C =
              f === !0 ||
              (typeof f == "number" && n < f) ||
              (typeof f == "function" && f(n, h));
          if (t || !C) {
            m(h);
            return;
          }
          n++,
            (E = e.onFail) == null || E.call(e, n, h),
            Lg(k)
              .then(() => (u() ? void 0 : g()))
              .then(() => {
                t ? m(h) : w();
              });
        });
    };
  return {
    promise: i,
    cancel: s,
    continue: () => (o == null || o(), i),
    cancelRetry: l,
    continueRetry: a,
    canStart: d,
    start: () => (d() ? w() : g().then(w), i),
  };
}
function Wg() {
  let e = [],
    t = 0,
    n = (l) => {
      l();
    },
    r = (l) => {
      l();
    },
    o = (l) => setTimeout(l, 0);
  const i = (l) => {
      t
        ? e.push(l)
        : o(() => {
            n(l);
          });
    },
    s = () => {
      const l = e;
      (e = []),
        l.length &&
          o(() => {
            r(() => {
              l.forEach((a) => {
                n(a);
              });
            });
          });
    };
  return {
    batch: (l) => {
      let a;
      t++;
      try {
        a = l();
      } finally {
        t--, t || s();
      }
      return a;
    },
    batchCalls:
      (l) =>
      (...a) => {
        i(() => {
          l(...a);
        });
      },
    schedule: i,
    setNotifyFunction: (l) => {
      n = l;
    },
    setBatchNotifyFunction: (l) => {
      r = l;
    },
    setScheduler: (l) => {
      o = l;
    },
  };
}
var Ee = Wg(),
  Nn,
  xd,
  rh =
    ((xd = class {
      constructor() {
        G(this, Nn);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          _g(this.gcTime) &&
            F(
              this,
              Nn,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (ps ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        P(this, Nn) && (clearTimeout(P(this, Nn)), F(this, Nn, void 0));
      }
    }),
    (Nn = new WeakMap()),
    xd),
  ur,
  cr,
  Be,
  xe,
  Po,
  Pn,
  nt,
  Nt,
  wd,
  Vg =
    ((wd = class extends rh {
      constructor(t) {
        super();
        G(this, nt);
        G(this, ur);
        G(this, cr);
        G(this, Be);
        G(this, xe);
        G(this, Po);
        G(this, Pn);
        F(this, Pn, !1),
          F(this, Po, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          F(this, Be, t.cache),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          F(this, ur, Bg(this.options)),
          (this.state = t.state ?? P(this, ur)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = P(this, xe)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...P(this, Po), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          P(this, Be).remove(this);
      }
      setData(t, n) {
        const r = Mg(this.state.data, t, this.options);
        return (
          ye(this, nt, Nt).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        ye(this, nt, Nt).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, o;
        const n = (r = P(this, xe)) == null ? void 0 : r.promise;
        return (
          (o = P(this, xe)) == null || o.cancel(t),
          n ? n.then(tt).catch(tt) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(P(this, ur));
      }
      isActive() {
        return this.observers.some((t) => Og(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === ou ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0;
      }
      isStaleByTime(t = 0) {
        return (
          this.state.isInvalidated ||
          this.state.data === void 0 ||
          !Ag(this.state.dataUpdatedAt, t)
        );
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = P(this, xe)) == null || n.continue();
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = P(this, xe)) == null || n.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          P(this, Be).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (P(this, xe) &&
              (P(this, Pn)
                ? P(this, xe).cancel({ revert: !0 })
                : P(this, xe).cancelRetry()),
            this.scheduleGc()),
          P(this, Be).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          ye(this, nt, Nt).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var a, u, d;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (P(this, xe))
            return P(this, xe).continueRetry(), P(this, xe).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const p = this.observers.find((m) => m.options.queryFn);
          p && this.setOptions(p.options);
        }
        const r = new AbortController(),
          o = (p) => {
            Object.defineProperty(p, "signal", {
              enumerable: !0,
              get: () => (F(this, Pn, !0), r.signal),
            });
          },
          i = () => {
            const p = Zp(this.options, n),
              m = { queryKey: this.queryKey, meta: this.meta };
            return (
              o(m),
              F(this, Pn, !1),
              this.options.persister ? this.options.persister(p, m, this) : p(m)
            );
          },
          s = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: i,
          };
        o(s),
          (a = this.options.behavior) == null || a.onFetch(s, this),
          F(this, cr, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((u = s.fetchOptions) == null ? void 0 : u.meta)) &&
            ye(this, nt, Nt).call(this, {
              type: "fetch",
              meta: (d = s.fetchOptions) == null ? void 0 : d.meta,
            });
        const l = (p) => {
          var m, g, w, v;
          (Xs(p) && p.silent) ||
            ye(this, nt, Nt).call(this, { type: "error", error: p }),
            Xs(p) ||
              ((g = (m = P(this, Be).config).onError) == null ||
                g.call(m, p, this),
              (v = (w = P(this, Be).config).onSettled) == null ||
                v.call(w, this.state.data, p, this)),
            this.scheduleGc();
        };
        return (
          F(
            this,
            xe,
            nh({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: s.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (p) => {
                var m, g, w, v;
                if (p === void 0) {
                  l(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(p);
                } catch (S) {
                  l(S);
                  return;
                }
                (g = (m = P(this, Be).config).onSuccess) == null ||
                  g.call(m, p, this),
                  (v = (w = P(this, Be).config).onSettled) == null ||
                    v.call(w, p, this.state.error, this),
                  this.scheduleGc();
              },
              onError: l,
              onFail: (p, m) => {
                ye(this, nt, Nt).call(this, {
                  type: "failed",
                  failureCount: p,
                  error: m,
                });
              },
              onPause: () => {
                ye(this, nt, Nt).call(this, { type: "pause" });
              },
              onContinue: () => {
                ye(this, nt, Nt).call(this, { type: "continue" });
              },
              retry: s.options.retry,
              retryDelay: s.options.retryDelay,
              networkMode: s.options.networkMode,
              canRun: () => !0,
            })
          ),
          P(this, xe).start()
        );
      }
    }),
    (ur = new WeakMap()),
    (cr = new WeakMap()),
    (Be = new WeakMap()),
    (xe = new WeakMap()),
    (Po = new WeakMap()),
    (Pn = new WeakMap()),
    (nt = new WeakSet()),
    (Nt = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...Hg(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return {
              ...r,
              data: t.data,
              dataUpdateCount: r.dataUpdateCount + 1,
              dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!t.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case "error":
            const o = t.error;
            return Xs(o) && o.revert && P(this, cr)
              ? { ...P(this, cr), fetchStatus: "idle" }
              : {
                  ...r,
                  error: o,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: o,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      (this.state = n(this.state)),
        Ee.batch(() => {
          this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            P(this, Be).notify({ query: this, type: "updated", action: t });
        });
    }),
    wd);
function Hg(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: eh(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function Bg(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var pt,
  Sd,
  Qg =
    ((Sd = class extends fs {
      constructor(t = {}) {
        super();
        G(this, pt);
        (this.config = t), F(this, pt, new Map());
      }
      build(t, n, r) {
        const o = n.queryKey,
          i = n.queryHash ?? ru(o, n);
        let s = this.get(i);
        return (
          s ||
            ((s = new Vg({
              cache: this,
              queryKey: o,
              queryHash: i,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(o),
            })),
            this.add(s)),
          s
        );
      }
      add(t) {
        P(this, pt).has(t.queryHash) ||
          (P(this, pt).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = P(this, pt).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && P(this, pt).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        Ee.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return P(this, pt).get(t);
      }
      getAll() {
        return [...P(this, pt).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Qc(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => Qc(t, r)) : n;
      }
      notify(t) {
        Ee.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        Ee.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        Ee.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (pt = new WeakMap()),
    Sd),
  ht,
  ke,
  Tn,
  mt,
  Vt,
  kd,
  Gg =
    ((kd = class extends rh {
      constructor(t) {
        super();
        G(this, mt);
        G(this, ht);
        G(this, ke);
        G(this, Tn);
        (this.mutationId = t.mutationId),
          F(this, ke, t.mutationCache),
          F(this, ht, []),
          (this.state = t.state || Kg()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        P(this, ht).includes(t) ||
          (P(this, ht).push(t),
          this.clearGcTimeout(),
          P(this, ke).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        F(
          this,
          ht,
          P(this, ht).filter((n) => n !== t)
        ),
          this.scheduleGc(),
          P(this, ke).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        P(this, ht).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : P(this, ke).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = P(this, Tn)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var o, i, s, l, a, u, d, p, m, g, w, v, S, h, f, y, k, C, E, N;
        F(
          this,
          Tn,
          nh({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (j, L) => {
              ye(this, mt, Vt).call(this, {
                type: "failed",
                failureCount: j,
                error: L,
              });
            },
            onPause: () => {
              ye(this, mt, Vt).call(this, { type: "pause" });
            },
            onContinue: () => {
              ye(this, mt, Vt).call(this, { type: "continue" });
            },
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => P(this, ke).canRun(this),
          })
        );
        const n = this.state.status === "pending",
          r = !P(this, Tn).canStart();
        try {
          if (!n) {
            ye(this, mt, Vt).call(this, {
              type: "pending",
              variables: t,
              isPaused: r,
            }),
              await ((i = (o = P(this, ke).config).onMutate) == null
                ? void 0
                : i.call(o, t, this));
            const L = await ((l = (s = this.options).onMutate) == null
              ? void 0
              : l.call(s, t));
            L !== this.state.context &&
              ye(this, mt, Vt).call(this, {
                type: "pending",
                context: L,
                variables: t,
                isPaused: r,
              });
          }
          const j = await P(this, Tn).start();
          return (
            await ((u = (a = P(this, ke).config).onSuccess) == null
              ? void 0
              : u.call(a, j, t, this.state.context, this)),
            await ((p = (d = this.options).onSuccess) == null
              ? void 0
              : p.call(d, j, t, this.state.context)),
            await ((g = (m = P(this, ke).config).onSettled) == null
              ? void 0
              : g.call(
                  m,
                  j,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                )),
            await ((v = (w = this.options).onSettled) == null
              ? void 0
              : v.call(w, j, null, t, this.state.context)),
            ye(this, mt, Vt).call(this, { type: "success", data: j }),
            j
          );
        } catch (j) {
          try {
            throw (
              (await ((h = (S = P(this, ke).config).onError) == null
                ? void 0
                : h.call(S, j, t, this.state.context, this)),
              await ((y = (f = this.options).onError) == null
                ? void 0
                : y.call(f, j, t, this.state.context)),
              await ((C = (k = P(this, ke).config).onSettled) == null
                ? void 0
                : C.call(
                    k,
                    void 0,
                    j,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((N = (E = this.options).onSettled) == null
                ? void 0
                : N.call(E, void 0, j, t, this.state.context)),
              j)
            );
          } finally {
            ye(this, mt, Vt).call(this, { type: "error", error: j });
          }
        } finally {
          P(this, ke).runNext(this);
        }
      }
    }),
    (ht = new WeakMap()),
    (ke = new WeakMap()),
    (Tn = new WeakMap()),
    (mt = new WeakSet()),
    (Vt = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = n(this.state)),
        Ee.batch(() => {
          P(this, ht).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            P(this, ke).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    kd);
function Kg() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var Me,
  To,
  Cd,
  qg =
    ((Cd = class extends fs {
      constructor(t = {}) {
        super();
        G(this, Me);
        G(this, To);
        (this.config = t), F(this, Me, new Map()), F(this, To, Date.now());
      }
      build(t, n, r) {
        const o = new Gg({
          mutationCache: this,
          mutationId: ++Io(this, To)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return this.add(o), o;
      }
      add(t) {
        const n = ei(t),
          r = P(this, Me).get(n) ?? [];
        r.push(t),
          P(this, Me).set(n, r),
          this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        var r;
        const n = ei(t);
        if (P(this, Me).has(n)) {
          const o =
            (r = P(this, Me).get(n)) == null
              ? void 0
              : r.filter((i) => i !== t);
          o && (o.length === 0 ? P(this, Me).delete(n) : P(this, Me).set(n, o));
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        var r;
        const n =
          (r = P(this, Me).get(ei(t))) == null
            ? void 0
            : r.find((o) => o.state.status === "pending");
        return !n || n === t;
      }
      runNext(t) {
        var r;
        const n =
          (r = P(this, Me).get(ei(t))) == null
            ? void 0
            : r.find((o) => o !== t && o.state.isPaused);
        return (n == null ? void 0 : n.continue()) ?? Promise.resolve();
      }
      clear() {
        Ee.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      getAll() {
        return [...P(this, Me).values()].flat();
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Gc(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => Gc(t, n));
      }
      notify(t) {
        Ee.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return Ee.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(tt)))
        );
      }
    }),
    (Me = new WeakMap()),
    (To = new WeakMap()),
    Cd);
function ei(e) {
  var t;
  return (
    ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId)
  );
}
function Yc(e) {
  return {
    onFetch: (t, n) => {
      var d, p, m, g, w;
      const r = t.options,
        o =
          (m =
            (p = (d = t.fetchOptions) == null ? void 0 : d.meta) == null
              ? void 0
              : p.fetchMore) == null
            ? void 0
            : m.direction,
        i = ((g = t.state.data) == null ? void 0 : g.pages) || [],
        s = ((w = t.state.data) == null ? void 0 : w.pageParams) || [];
      let l = { pages: [], pageParams: [] },
        a = 0;
      const u = async () => {
        let v = !1;
        const S = (y) => {
            Object.defineProperty(y, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (v = !0)
                  : t.signal.addEventListener("abort", () => {
                      v = !0;
                    }),
                t.signal
              ),
            });
          },
          h = Zp(t.options, t.fetchOptions),
          f = async (y, k, C) => {
            if (v) return Promise.reject();
            if (k == null && y.pages.length) return Promise.resolve(y);
            const E = {
              queryKey: t.queryKey,
              pageParam: k,
              direction: C ? "backward" : "forward",
              meta: t.options.meta,
            };
            S(E);
            const N = await h(E),
              { maxPages: j } = t.options,
              L = C ? Dg : Ig;
            return {
              pages: L(y.pages, N, j),
              pageParams: L(y.pageParams, k, j),
            };
          };
        if (o && i.length) {
          const y = o === "backward",
            k = y ? Yg : Xc,
            C = { pages: i, pageParams: s },
            E = k(r, C);
          l = await f(C, E, y);
        } else {
          const y = e ?? i.length;
          do {
            const k = a === 0 ? s[0] ?? r.initialPageParam : Xc(r, l);
            if (a > 0 && k == null) break;
            (l = await f(l, k)), a++;
          } while (a < y);
        }
        return l;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var v, S;
            return (S = (v = t.options).persister) == null
              ? void 0
              : S.call(
                  v,
                  u,
                  {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n
                );
          })
        : (t.fetchFn = u);
    },
  };
}
function Xc(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function Yg(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var oe,
  Yt,
  Xt,
  dr,
  fr,
  Zt,
  pr,
  hr,
  Ed,
  Xg =
    ((Ed = class {
      constructor(e = {}) {
        G(this, oe);
        G(this, Yt);
        G(this, Xt);
        G(this, dr);
        G(this, fr);
        G(this, Zt);
        G(this, pr);
        G(this, hr);
        F(this, oe, e.queryCache || new Qg()),
          F(this, Yt, e.mutationCache || new qg()),
          F(this, Xt, e.defaultOptions || {}),
          F(this, dr, new Map()),
          F(this, fr, new Map()),
          F(this, Zt, 0);
      }
      mount() {
        Io(this, Zt)._++,
          P(this, Zt) === 1 &&
            (F(
              this,
              pr,
              Jp.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), P(this, oe).onFocus());
              })
            ),
            F(
              this,
              hr,
              Vi.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), P(this, oe).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        Io(this, Zt)._--,
          P(this, Zt) === 0 &&
            ((e = P(this, pr)) == null || e.call(this),
            F(this, pr, void 0),
            (t = P(this, hr)) == null || t.call(this),
            F(this, hr, void 0));
      }
      isFetching(e) {
        return P(this, oe).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return P(this, Yt).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = P(this, oe).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey);
        if (t === void 0) return this.fetchQuery(e);
        {
          const n = this.defaultQueryOptions(e),
            r = P(this, oe).build(this, n);
          return (
            e.revalidateIfStale &&
              r.isStaleByTime(Bc(n.staleTime, r)) &&
              this.prefetchQuery(n),
            Promise.resolve(t)
          );
        }
      }
      getQueriesData(e) {
        return P(this, oe)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          o = P(this, oe).get(r.queryHash),
          i = o == null ? void 0 : o.state.data,
          s = bg(t, i);
        if (s !== void 0)
          return P(this, oe)
            .build(this, r)
            .setData(s, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return Ee.batch(() =>
          P(this, oe)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = P(this, oe).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = P(this, oe);
        Ee.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = P(this, oe),
          r = { type: "active", ...e };
        return Ee.batch(
          () => (
            n.findAll(e).forEach((o) => {
              o.reset();
            }),
            this.refetchQueries(r, t)
          )
        );
      }
      cancelQueries(e = {}, t = {}) {
        const n = { revert: !0, ...t },
          r = Ee.batch(() =>
            P(this, oe)
              .findAll(e)
              .map((o) => o.cancel(n))
          );
        return Promise.all(r).then(tt).catch(tt);
      }
      invalidateQueries(e = {}, t = {}) {
        return Ee.batch(() => {
          if (
            (P(this, oe)
              .findAll(e)
              .forEach((r) => {
                r.invalidate();
              }),
            e.refetchType === "none")
          )
            return Promise.resolve();
          const n = { ...e, type: e.refetchType ?? e.type ?? "active" };
          return this.refetchQueries(n, t);
        });
      }
      refetchQueries(e = {}, t) {
        const n = {
            ...t,
            cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0,
          },
          r = Ee.batch(() =>
            P(this, oe)
              .findAll(e)
              .filter((o) => !o.isDisabled())
              .map((o) => {
                let i = o.fetch(void 0, n);
                return (
                  n.throwOnError || (i = i.catch(tt)),
                  o.state.fetchStatus === "paused" ? Promise.resolve() : i
                );
              })
          );
        return Promise.all(r).then(tt);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = P(this, oe).build(this, t);
        return n.isStaleByTime(Bc(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(tt).catch(tt);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = Yc(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(tt).catch(tt);
      }
      ensureInfiniteQueryData(e) {
        return (e.behavior = Yc(e.pages)), this.ensureQueryData(e);
      }
      resumePausedMutations() {
        return Vi.isOnline()
          ? P(this, Yt).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return P(this, oe);
      }
      getMutationCache() {
        return P(this, Yt);
      }
      getDefaultOptions() {
        return P(this, Xt);
      }
      setDefaultOptions(e) {
        F(this, Xt, e);
      }
      setQueryDefaults(e, t) {
        P(this, dr).set(ko(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...P(this, dr).values()];
        let n = {};
        return (
          t.forEach((r) => {
            Co(e, r.queryKey) && (n = { ...n, ...r.defaultOptions });
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        P(this, fr).set(ko(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...P(this, fr).values()];
        let n = {};
        return (
          t.forEach((r) => {
            Co(e, r.mutationKey) && (n = { ...n, ...r.defaultOptions });
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...P(this, Xt).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = ru(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.enabled !== !0 && t.queryFn === ou && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...P(this, Xt).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        P(this, oe).clear(), P(this, Yt).clear();
      }
    }),
    (oe = new WeakMap()),
    (Yt = new WeakMap()),
    (Xt = new WeakMap()),
    (dr = new WeakMap()),
    (fr = new WeakMap()),
    (Zt = new WeakMap()),
    (pr = new WeakMap()),
    (hr = new WeakMap()),
    Ed),
  Zg = x.createContext(void 0),
  Jg = ({ client: e, children: t }) => (
    x.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    c.jsx(Zg.Provider, { value: e, children: t })
  );
async function e0(e) {
  if (!e.ok) {
    const t = (await e.text()) || e.statusText;
    throw new Error(`${e.status}: ${t}`);
  }
}
const t0 =
    ({ on401: e }) =>
    async ({ queryKey: t }) => {
      const n = await fetch(t[0], { credentials: "include" });
      return e === "returnNull" && n.status === 401
        ? null
        : (await e0(n), await n.json());
    },
  n0 = new Xg({
    defaultOptions: {
      queries: {
        queryFn: t0({ on401: "throw" }),
        refetchInterval: !1,
        refetchOnWindowFocus: !1,
        staleTime: 1 / 0,
        retry: !1,
      },
      mutations: { retry: !1 },
    },
  }),
  r0 = 1,
  o0 = 1e6;
let Zs = 0;
function i0() {
  return (Zs = (Zs + 1) % Number.MAX_SAFE_INTEGER), Zs.toString();
}
const Js = new Map(),
  Zc = (e) => {
    if (Js.has(e)) return;
    const t = setTimeout(() => {
      Js.delete(e), no({ type: "REMOVE_TOAST", toastId: e });
    }, o0);
    Js.set(e, t);
  },
  s0 = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, r0) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? Zc(n)
            : e.toasts.forEach((r) => {
                Zc(r.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  yi = [];
let vi = { toasts: [] };
function no(e) {
  (vi = s0(vi, e)),
    yi.forEach((t) => {
      t(vi);
    });
}
function l0({ ...e }) {
  const t = i0(),
    n = (o) => no({ type: "UPDATE_TOAST", toast: { ...o, id: t } }),
    r = () => no({ type: "DISMISS_TOAST", toastId: t });
  return (
    no({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (o) => {
          o || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function oh() {
  const [e, t] = x.useState(vi);
  return (
    x.useEffect(
      () => (
        yi.push(t),
        () => {
          const n = yi.indexOf(t);
          n > -1 && yi.splice(n, 1);
        }
      ),
      [e]
    ),
    {
      ...e,
      toast: l0,
      dismiss: (n) => no({ type: "DISMISS_TOAST", toastId: n }),
    }
  );
}
function ue(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function Jc(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function ih(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = Jc(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : Jc(e[o], null);
        }
      };
  };
}
function at(...e) {
  return x.useCallback(ih(...e), e);
}
function hs(e, t = []) {
  let n = [];
  function r(i, s) {
    const l = x.createContext(s),
      a = n.length;
    n = [...n, s];
    const u = (p) => {
      var h;
      const { scope: m, children: g, ...w } = p,
        v = ((h = m == null ? void 0 : m[e]) == null ? void 0 : h[a]) || l,
        S = x.useMemo(() => w, Object.values(w));
      return c.jsx(v.Provider, { value: S, children: g });
    };
    u.displayName = i + "Provider";
    function d(p, m) {
      var v;
      const g = ((v = m == null ? void 0 : m[e]) == null ? void 0 : v[a]) || l,
        w = x.useContext(g);
      if (w) return w;
      if (s !== void 0) return s;
      throw new Error(`\`${p}\` must be used within \`${i}\``);
    }
    return [u, d];
  }
  const o = () => {
    const i = n.map((s) => x.createContext(s));
    return function (l) {
      const a = (l == null ? void 0 : l[e]) || i;
      return x.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: a } }), [l, a]);
    };
  };
  return (o.scopeName = e), [r, a0(o, ...t)];
}
function a0(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((l, { useScope: a, scopeName: u }) => {
        const p = a(i)[`__scope${u}`];
        return { ...l, ...p };
      }, {});
      return x.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function Hi(e) {
  const t = c0(e),
    n = x.forwardRef((r, o) => {
      const { children: i, ...s } = r,
        l = x.Children.toArray(i),
        a = l.find(f0);
      if (a) {
        const u = a.props.children,
          d = l.map((p) =>
            p === a
              ? x.Children.count(u) > 1
                ? x.Children.only(null)
                : x.isValidElement(u)
                ? u.props.children
                : null
              : p
          );
        return c.jsx(t, {
          ...s,
          ref: o,
          children: x.isValidElement(u) ? x.cloneElement(u, void 0, d) : null,
        });
      }
      return c.jsx(t, { ...s, ref: o, children: i });
    });
  return (n.displayName = `${e}.Slot`), n;
}
var u0 = Hi("Slot");
function c0(e) {
  const t = x.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (x.isValidElement(o)) {
      const s = h0(o),
        l = p0(i, o.props);
      return (
        o.type !== x.Fragment && (l.ref = r ? ih(r, s) : s),
        x.cloneElement(o, l)
      );
    }
    return x.Children.count(o) > 1 ? x.Children.only(null) : null;
  });
  return (t.displayName = `${e}.SlotClone`), t;
}
var sh = Symbol("radix.slottable");
function d0(e) {
  const t = ({ children: n }) => c.jsx(c.Fragment, { children: n });
  return (t.displayName = `${e}.Slottable`), (t.__radixId = sh), t;
}
function f0(e) {
  return (
    x.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === sh
  );
}
function p0(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...l) => {
            i(...l), o(...l);
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...i })
      : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function h0(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function m0(e) {
  const t = e + "CollectionProvider",
    [n, r] = hs(t),
    [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (v) => {
      const { scope: S, children: h } = v,
        f = Wt.useRef(null),
        y = Wt.useRef(new Map()).current;
      return c.jsx(o, { scope: S, itemMap: y, collectionRef: f, children: h });
    };
  s.displayName = t;
  const l = e + "CollectionSlot",
    a = Hi(l),
    u = Wt.forwardRef((v, S) => {
      const { scope: h, children: f } = v,
        y = i(l, h),
        k = at(S, y.collectionRef);
      return c.jsx(a, { ref: k, children: f });
    });
  u.displayName = l;
  const d = e + "CollectionItemSlot",
    p = "data-radix-collection-item",
    m = Hi(d),
    g = Wt.forwardRef((v, S) => {
      const { scope: h, children: f, ...y } = v,
        k = Wt.useRef(null),
        C = at(S, k),
        E = i(d, h);
      return (
        Wt.useEffect(
          () => (
            E.itemMap.set(k, { ref: k, ...y }), () => void E.itemMap.delete(k)
          )
        ),
        c.jsx(m, { [p]: "", ref: C, children: f })
      );
    });
  g.displayName = d;
  function w(v) {
    const S = i(e + "CollectionConsumer", v);
    return Wt.useCallback(() => {
      const f = S.collectionRef.current;
      if (!f) return [];
      const y = Array.from(f.querySelectorAll(`[${p}]`));
      return Array.from(S.itemMap.values()).sort(
        (E, N) => y.indexOf(E.ref.current) - y.indexOf(N.ref.current)
      );
    }, [S.collectionRef, S.itemMap]);
  }
  return [{ Provider: s, Slot: u, ItemSlot: g }, w, r];
}
var y0 = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  Oe = y0.reduce((e, t) => {
    const n = Hi(`Primitive.${t}`),
      r = x.forwardRef((o, i) => {
        const { asChild: s, ...l } = o,
          a = s ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          c.jsx(a, { ...l, ref: i })
        );
      });
    return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
  }, {});
function lh(e, t) {
  e && Oo.flushSync(() => e.dispatchEvent(t));
}
function wt(e) {
  const t = x.useRef(e);
  return (
    x.useEffect(() => {
      t.current = e;
    }),
    x.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
function v0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = wt(e);
  x.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var g0 = "DismissableLayer",
  Xl = "dismissableLayer.update",
  x0 = "dismissableLayer.pointerDownOutside",
  w0 = "dismissableLayer.focusOutside",
  ed,
  ah = x.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  iu = x.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: i,
        onInteractOutside: s,
        onDismiss: l,
        ...a
      } = e,
      u = x.useContext(ah),
      [d, p] = x.useState(null),
      m =
        (d == null ? void 0 : d.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, g] = x.useState({}),
      w = at(t, (N) => p(N)),
      v = Array.from(u.layers),
      [S] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      h = v.indexOf(S),
      f = d ? v.indexOf(d) : -1,
      y = u.layersWithOutsidePointerEventsDisabled.size > 0,
      k = f >= h,
      C = k0((N) => {
        const j = N.target,
          L = [...u.branches].some((A) => A.contains(j));
        !k ||
          L ||
          (o == null || o(N),
          s == null || s(N),
          N.defaultPrevented || l == null || l());
      }, m),
      E = C0((N) => {
        const j = N.target;
        [...u.branches].some((A) => A.contains(j)) ||
          (i == null || i(N),
          s == null || s(N),
          N.defaultPrevented || l == null || l());
      }, m);
    return (
      v0((N) => {
        f === u.layers.size - 1 &&
          (r == null || r(N),
          !N.defaultPrevented && l && (N.preventDefault(), l()));
      }, m),
      x.useEffect(() => {
        if (d)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((ed = m.body.style.pointerEvents),
                (m.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(d)),
            u.layers.add(d),
            td(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (m.body.style.pointerEvents = ed);
            }
          );
      }, [d, m, n, u]),
      x.useEffect(
        () => () => {
          d &&
            (u.layers.delete(d),
            u.layersWithOutsidePointerEventsDisabled.delete(d),
            td());
        },
        [d, u]
      ),
      x.useEffect(() => {
        const N = () => g({});
        return (
          document.addEventListener(Xl, N),
          () => document.removeEventListener(Xl, N)
        );
      }, []),
      c.jsx(Oe.div, {
        ...a,
        ref: w,
        style: {
          pointerEvents: y ? (k ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: ue(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: ue(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: ue(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        ),
      })
    );
  });
iu.displayName = g0;
var S0 = "DismissableLayerBranch",
  uh = x.forwardRef((e, t) => {
    const n = x.useContext(ah),
      r = x.useRef(null),
      o = at(t, r);
    return (
      x.useEffect(() => {
        const i = r.current;
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i);
            }
          );
      }, [n.branches]),
      c.jsx(Oe.div, { ...e, ref: o })
    );
  });
uh.displayName = S0;
function k0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = wt(e),
    r = x.useRef(!1),
    o = x.useRef(() => {});
  return (
    x.useEffect(() => {
      const i = (l) => {
          if (l.target && !r.current) {
            let a = function () {
              ch(x0, n, u, { discrete: !0 });
            };
            const u = { originalEvent: l };
            l.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = a),
                t.addEventListener("click", o.current, { once: !0 }))
              : a();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        window.clearTimeout(s),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function C0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = wt(e),
    r = x.useRef(!1);
  return (
    x.useEffect(() => {
      const o = (i) => {
        i.target &&
          !r.current &&
          ch(w0, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function td() {
  const e = new CustomEvent(Xl);
  document.dispatchEvent(e);
}
function ch(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? lh(o, i) : o.dispatchEvent(i);
}
var E0 = iu,
  N0 = uh,
  Mn = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {},
  P0 = "Portal",
  dh = x.forwardRef((e, t) => {
    var l;
    const { container: n, ...r } = e,
      [o, i] = x.useState(!1);
    Mn(() => i(!0), []);
    const s =
      n ||
      (o &&
        ((l = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : l.body));
    return s ? Jv.createPortal(c.jsx(Oe.div, { ...r, ref: t }), s) : null;
  });
dh.displayName = P0;
function T0(e, t) {
  return x.useReducer((n, r) => t[n][r] ?? n, e);
}
var su = (e) => {
  const { present: t, children: n } = e,
    r = j0(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : x.Children.only(n),
    i = at(r.ref, R0(o));
  return typeof n == "function" || r.isPresent
    ? x.cloneElement(o, { ref: i })
    : null;
};
su.displayName = "Presence";
function j0(e) {
  const [t, n] = x.useState(),
    r = x.useRef({}),
    o = x.useRef(e),
    i = x.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [l, a] = T0(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    x.useEffect(() => {
      const u = ti(r.current);
      i.current = l === "mounted" ? u : "none";
    }, [l]),
    Mn(() => {
      const u = r.current,
        d = o.current;
      if (d !== e) {
        const m = i.current,
          g = ti(u);
        e
          ? a("MOUNT")
          : g === "none" || (u == null ? void 0 : u.display) === "none"
          ? a("UNMOUNT")
          : a(d && m !== g ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, a]),
    Mn(() => {
      if (t) {
        let u;
        const d = t.ownerDocument.defaultView ?? window,
          p = (g) => {
            const v = ti(r.current).includes(g.animationName);
            if (g.target === t && v && (a("ANIMATION_END"), !o.current)) {
              const S = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (u = d.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = S);
                }));
            }
          },
          m = (g) => {
            g.target === t && (i.current = ti(r.current));
          };
        return (
          t.addEventListener("animationstart", m),
          t.addEventListener("animationcancel", p),
          t.addEventListener("animationend", p),
          () => {
            d.clearTimeout(u),
              t.removeEventListener("animationstart", m),
              t.removeEventListener("animationcancel", p),
              t.removeEventListener("animationend", p);
          }
        );
      } else a("ANIMATION_END");
    }, [t, a]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(l),
      ref: x.useCallback((u) => {
        u && (r.current = getComputedStyle(u)), n(u);
      }, []),
    }
  );
}
function ti(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function R0(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function b0({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = _0({ defaultProp: t, onChange: n }),
    i = e !== void 0,
    s = i ? e : r,
    l = wt(n),
    a = x.useCallback(
      (u) => {
        if (i) {
          const p = typeof u == "function" ? u(e) : u;
          p !== e && l(p);
        } else o(u);
      },
      [i, e, o, l]
    );
  return [s, a];
}
function _0({ defaultProp: e, onChange: t }) {
  const n = x.useState(e),
    [r] = n,
    o = x.useRef(r),
    i = wt(t);
  return (
    x.useEffect(() => {
      o.current !== r && (i(r), (o.current = r));
    }, [r, o, i]),
    n
  );
}
var A0 = "VisuallyHidden",
  ms = x.forwardRef((e, t) =>
    c.jsx(Oe.span, {
      ...e,
      ref: t,
      style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style,
      },
    })
  );
ms.displayName = A0;
var O0 = ms,
  lu = "ToastProvider",
  [au, L0, M0] = m0("Toast"),
  [fh, V1] = hs("Toast", [M0]),
  [I0, ys] = fh(lu),
  ph = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: o = "right",
        swipeThreshold: i = 50,
        children: s,
      } = e,
      [l, a] = x.useState(null),
      [u, d] = x.useState(0),
      p = x.useRef(!1),
      m = x.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${lu}\`. Expected non-empty \`string\`.`
        ),
      c.jsx(au.Provider, {
        scope: t,
        children: c.jsx(I0, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: o,
          swipeThreshold: i,
          toastCount: u,
          viewport: l,
          onViewportChange: a,
          onToastAdd: x.useCallback(() => d((g) => g + 1), []),
          onToastRemove: x.useCallback(() => d((g) => g - 1), []),
          isFocusedToastEscapeKeyDownRef: p,
          isClosePausedRef: m,
          children: s,
        }),
      })
    );
  };
ph.displayName = lu;
var hh = "ToastViewport",
  D0 = ["F8"],
  Zl = "toast.viewportPause",
  Jl = "toast.viewportResume",
  mh = x.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = D0,
        label: o = "Notifications ({hotkey})",
        ...i
      } = e,
      s = ys(hh, n),
      l = L0(n),
      a = x.useRef(null),
      u = x.useRef(null),
      d = x.useRef(null),
      p = x.useRef(null),
      m = at(t, p, s.onViewportChange),
      g = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      w = s.toastCount > 0;
    x.useEffect(() => {
      const S = (h) => {
        var y;
        r.length !== 0 &&
          r.every((k) => h[k] || h.code === k) &&
          ((y = p.current) == null || y.focus());
      };
      return (
        document.addEventListener("keydown", S),
        () => document.removeEventListener("keydown", S)
      );
    }, [r]),
      x.useEffect(() => {
        const S = a.current,
          h = p.current;
        if (w && S && h) {
          const f = () => {
              if (!s.isClosePausedRef.current) {
                const E = new CustomEvent(Zl);
                h.dispatchEvent(E), (s.isClosePausedRef.current = !0);
              }
            },
            y = () => {
              if (s.isClosePausedRef.current) {
                const E = new CustomEvent(Jl);
                h.dispatchEvent(E), (s.isClosePausedRef.current = !1);
              }
            },
            k = (E) => {
              !S.contains(E.relatedTarget) && y();
            },
            C = () => {
              S.contains(document.activeElement) || y();
            };
          return (
            S.addEventListener("focusin", f),
            S.addEventListener("focusout", k),
            S.addEventListener("pointermove", f),
            S.addEventListener("pointerleave", C),
            window.addEventListener("blur", f),
            window.addEventListener("focus", y),
            () => {
              S.removeEventListener("focusin", f),
                S.removeEventListener("focusout", k),
                S.removeEventListener("pointermove", f),
                S.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", f),
                window.removeEventListener("focus", y);
            }
          );
        }
      }, [w, s.isClosePausedRef]);
    const v = x.useCallback(
      ({ tabbingDirection: S }) => {
        const f = l().map((y) => {
          const k = y.ref.current,
            C = [k, ...Y0(k)];
          return S === "forwards" ? C : C.reverse();
        });
        return (S === "forwards" ? f.reverse() : f).flat();
      },
      [l]
    );
    return (
      x.useEffect(() => {
        const S = p.current;
        if (S) {
          const h = (f) => {
            var C, E, N;
            const y = f.altKey || f.ctrlKey || f.metaKey;
            if (f.key === "Tab" && !y) {
              const j = document.activeElement,
                L = f.shiftKey;
              if (f.target === S && L) {
                (C = u.current) == null || C.focus();
                return;
              }
              const M = v({ tabbingDirection: L ? "backwards" : "forwards" }),
                V = M.findIndex((O) => O === j);
              el(M.slice(V + 1))
                ? f.preventDefault()
                : L
                ? (E = u.current) == null || E.focus()
                : (N = d.current) == null || N.focus();
            }
          };
          return (
            S.addEventListener("keydown", h),
            () => S.removeEventListener("keydown", h)
          );
        }
      }, [l, v]),
      c.jsxs(N0, {
        ref: a,
        role: "region",
        "aria-label": o.replace("{hotkey}", g),
        tabIndex: -1,
        style: { pointerEvents: w ? void 0 : "none" },
        children: [
          w &&
            c.jsx(ea, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const S = v({ tabbingDirection: "forwards" });
                el(S);
              },
            }),
          c.jsx(au.Slot, {
            scope: n,
            children: c.jsx(Oe.ol, { tabIndex: -1, ...i, ref: m }),
          }),
          w &&
            c.jsx(ea, {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const S = v({ tabbingDirection: "backwards" });
                el(S);
              },
            }),
        ],
      })
    );
  });
mh.displayName = hh;
var yh = "ToastFocusProxy",
  ea = x.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
      i = ys(yh, n);
    return c.jsx(ms, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...o,
      ref: t,
      style: { position: "fixed" },
      onFocus: (s) => {
        var u;
        const l = s.relatedTarget;
        !((u = i.viewport) != null && u.contains(l)) && r();
      },
    });
  });
ea.displayName = yh;
var vs = "Toast",
  F0 = "toast.swipeStart",
  z0 = "toast.swipeMove",
  $0 = "toast.swipeCancel",
  U0 = "toast.swipeEnd",
  vh = x.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s } = e,
      [l = !0, a] = b0({ prop: r, defaultProp: o, onChange: i });
    return c.jsx(su, {
      present: n || l,
      children: c.jsx(H0, {
        open: l,
        ...s,
        ref: t,
        onClose: () => a(!1),
        onPause: wt(e.onPause),
        onResume: wt(e.onResume),
        onSwipeStart: ue(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: ue(e.onSwipeMove, (u) => {
          const { x: d, y: p } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${d}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${p}px`
            );
        }),
        onSwipeCancel: ue(e.onSwipeCancel, (u) => {
          u.currentTarget.setAttribute("data-swipe", "cancel"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: ue(e.onSwipeEnd, (u) => {
          const { x: d, y: p } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${d}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${p}px`
            ),
            a(!1);
        }),
      }),
    });
  });
vh.displayName = vs;
var [W0, V0] = fh(vs, { onClose() {} }),
  H0 = x.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: i,
        onClose: s,
        onEscapeKeyDown: l,
        onPause: a,
        onResume: u,
        onSwipeStart: d,
        onSwipeMove: p,
        onSwipeCancel: m,
        onSwipeEnd: g,
        ...w
      } = e,
      v = ys(vs, n),
      [S, h] = x.useState(null),
      f = at(t, (O) => h(O)),
      y = x.useRef(null),
      k = x.useRef(null),
      C = o || v.duration,
      E = x.useRef(0),
      N = x.useRef(C),
      j = x.useRef(0),
      { onToastAdd: L, onToastRemove: A } = v,
      z = wt(() => {
        var Q;
        (S == null ? void 0 : S.contains(document.activeElement)) &&
          ((Q = v.viewport) == null || Q.focus()),
          s();
      }),
      M = x.useCallback(
        (O) => {
          !O ||
            O === 1 / 0 ||
            (window.clearTimeout(j.current),
            (E.current = new Date().getTime()),
            (j.current = window.setTimeout(z, O)));
        },
        [z]
      );
    x.useEffect(() => {
      const O = v.viewport;
      if (O) {
        const Q = () => {
            M(N.current), u == null || u();
          },
          U = () => {
            const B = new Date().getTime() - E.current;
            (N.current = N.current - B),
              window.clearTimeout(j.current),
              a == null || a();
          };
        return (
          O.addEventListener(Zl, U),
          O.addEventListener(Jl, Q),
          () => {
            O.removeEventListener(Zl, U), O.removeEventListener(Jl, Q);
          }
        );
      }
    }, [v.viewport, C, a, u, M]),
      x.useEffect(() => {
        i && !v.isClosePausedRef.current && M(C);
      }, [i, C, v.isClosePausedRef, M]),
      x.useEffect(() => (L(), () => A()), [L, A]);
    const V = x.useMemo(() => (S ? Eh(S) : null), [S]);
    return v.viewport
      ? c.jsxs(c.Fragment, {
          children: [
            V &&
              c.jsx(B0, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: V,
              }),
            c.jsx(W0, {
              scope: n,
              onClose: z,
              children: Oo.createPortal(
                c.jsx(au.ItemSlot, {
                  scope: n,
                  children: c.jsx(E0, {
                    asChild: !0,
                    onEscapeKeyDown: ue(l, () => {
                      v.isFocusedToastEscapeKeyDownRef.current || z(),
                        (v.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: c.jsx(Oe.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": i ? "open" : "closed",
                      "data-swipe-direction": v.swipeDirection,
                      ...w,
                      ref: f,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: ue(e.onKeyDown, (O) => {
                        O.key === "Escape" &&
                          (l == null || l(O.nativeEvent),
                          O.nativeEvent.defaultPrevented ||
                            ((v.isFocusedToastEscapeKeyDownRef.current = !0),
                            z()));
                      }),
                      onPointerDown: ue(e.onPointerDown, (O) => {
                        O.button === 0 &&
                          (y.current = { x: O.clientX, y: O.clientY });
                      }),
                      onPointerMove: ue(e.onPointerMove, (O) => {
                        if (!y.current) return;
                        const Q = O.clientX - y.current.x,
                          U = O.clientY - y.current.y,
                          B = !!k.current,
                          T = ["left", "right"].includes(v.swipeDirection),
                          b = ["left", "up"].includes(v.swipeDirection)
                            ? Math.min
                            : Math.max,
                          I = T ? b(0, Q) : 0,
                          $ = T ? 0 : b(0, U),
                          J = O.pointerType === "touch" ? 10 : 2,
                          Ze = { x: I, y: $ },
                          He = { originalEvent: O, delta: Ze };
                        B
                          ? ((k.current = Ze), ni(z0, p, He, { discrete: !1 }))
                          : nd(Ze, v.swipeDirection, J)
                          ? ((k.current = Ze),
                            ni(F0, d, He, { discrete: !1 }),
                            O.target.setPointerCapture(O.pointerId))
                          : (Math.abs(Q) > J || Math.abs(U) > J) &&
                            (y.current = null);
                      }),
                      onPointerUp: ue(e.onPointerUp, (O) => {
                        const Q = k.current,
                          U = O.target;
                        if (
                          (U.hasPointerCapture(O.pointerId) &&
                            U.releasePointerCapture(O.pointerId),
                          (k.current = null),
                          (y.current = null),
                          Q)
                        ) {
                          const B = O.currentTarget,
                            T = { originalEvent: O, delta: Q };
                          nd(Q, v.swipeDirection, v.swipeThreshold)
                            ? ni(U0, g, T, { discrete: !0 })
                            : ni($0, m, T, { discrete: !0 }),
                            B.addEventListener(
                              "click",
                              (b) => b.preventDefault(),
                              { once: !0 }
                            );
                        }
                      }),
                    }),
                  }),
                }),
                v.viewport
              ),
            }),
          ],
        })
      : null;
  }),
  B0 = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      o = ys(vs, t),
      [i, s] = x.useState(!1),
      [l, a] = x.useState(!1);
    return (
      K0(() => s(!0)),
      x.useEffect(() => {
        const u = window.setTimeout(() => a(!0), 1e3);
        return () => window.clearTimeout(u);
      }, []),
      l
        ? null
        : c.jsx(dh, {
            asChild: !0,
            children: c.jsx(ms, {
              ...r,
              children:
                i && c.jsxs(c.Fragment, { children: [o.label, " ", n] }),
            }),
          })
    );
  },
  Q0 = "ToastTitle",
  gh = x.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return c.jsx(Oe.div, { ...r, ref: t });
  });
gh.displayName = Q0;
var G0 = "ToastDescription",
  xh = x.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return c.jsx(Oe.div, { ...r, ref: t });
  });
xh.displayName = G0;
var wh = "ToastAction",
  Sh = x.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? c.jsx(Ch, {
          altText: n,
          asChild: !0,
          children: c.jsx(uu, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${wh}\`. Expected non-empty \`string\`.`
        ),
        null);
  });
Sh.displayName = wh;
var kh = "ToastClose",
  uu = x.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      o = V0(kh, n);
    return c.jsx(Ch, {
      asChild: !0,
      children: c.jsx(Oe.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: ue(e.onClick, o.onClose),
      }),
    });
  });
uu.displayName = kh;
var Ch = x.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return c.jsx(Oe.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...o,
    ref: t,
  });
});
function Eh(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        q0(r))
      ) {
        const o = r.ariaHidden || r.hidden || r.style.display === "none",
          i = r.dataset.radixToastAnnounceExclude === "";
        if (!o)
          if (i) {
            const s = r.dataset.radixToastAnnounceAlt;
            s && t.push(s);
          } else t.push(...Eh(r));
      }
    }),
    t
  );
}
function ni(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget,
    i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? lh(o, i) : o.dispatchEvent(i);
}
var nd = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    o = Math.abs(e.y),
    i = r > o;
  return t === "left" || t === "right" ? i && r > n : !i && o > n;
};
function K0(e = () => {}) {
  const t = wt(e);
  Mn(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t))
      )),
      () => {
        window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
      }
    );
  }, [t]);
}
function q0(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Y0(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function el(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t)
  );
}
var X0 = ph,
  Nh = mh,
  Ph = vh,
  Th = gh,
  jh = xh,
  Rh = Sh,
  bh = uu;
function _h(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = _h(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function Ah() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = _h(e)) && (r && (r += " "), (r += t));
  return r;
}
const rd = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  od = Ah,
  Oh = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return od(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: o, defaultVariants: i } = t,
      s = Object.keys(o).map((u) => {
        const d = n == null ? void 0 : n[u],
          p = i == null ? void 0 : i[u];
        if (d === null) return null;
        const m = rd(d) || rd(p);
        return o[u][m];
      }),
      l =
        n &&
        Object.entries(n).reduce((u, d) => {
          let [p, m] = d;
          return m === void 0 || (u[p] = m), u;
        }, {}),
      a =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, d) => {
              let { class: p, className: m, ...g } = d;
              return Object.entries(g).every((w) => {
                let [v, S] = w;
                return Array.isArray(S)
                  ? S.includes({ ...i, ...l }[v])
                  : { ...i, ...l }[v] === S;
              })
                ? [...u, p, m]
                : u;
            }, []);
    return od(
      e,
      s,
      a,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  };
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Z0 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Lh = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var J0 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ex = x.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: i,
      iconNode: s,
      ...l
    },
    a
  ) =>
    x.createElement(
      "svg",
      {
        ref: a,
        ...J0,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: Lh("lucide", o),
        ...l,
      },
      [
        ...s.map(([u, d]) => x.createElement(u, d)),
        ...(Array.isArray(i) ? i : [i]),
      ]
    )
);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ft = (e, t) => {
  const n = x.forwardRef(({ className: r, ...o }, i) =>
    x.createElement(ex, {
      ref: i,
      iconNode: t,
      className: Lh(`lucide-${Z0(e)}`, r),
      ...o,
    })
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tx = Ft("Chrome", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["line", { x1: "21.17", x2: "12", y1: "8", y2: "8", key: "a0cw5f" }],
  ["line", { x1: "3.95", x2: "8.54", y1: "6.06", y2: "14", key: "1kftof" }],
  ["line", { x1: "10.88", x2: "15.46", y1: "21.94", y2: "14", key: "1ymyh8" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nx = Ft("Copy", [
  [
    "rect",
    {
      width: "14",
      height: "14",
      x: "8",
      y: "8",
      rx: "2",
      ry: "2",
      key: "17jyea",
    },
  ],
  [
    "path",
    {
      d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
      key: "zix9uf",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ro = Ft("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  [
    "path",
    {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rx = Ft("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ox = Ft("Lock", [
  [
    "rect",
    {
      width: "18",
      height: "11",
      x: "3",
      y: "11",
      rx: "2",
      ry: "2",
      key: "1w4ew1",
    },
  ],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ix = Ft("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sx = Ft("Rocket", [
  [
    "path",
    {
      d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
      key: "m3kijz",
    },
  ],
  [
    "path",
    {
      d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
      key: "1fmvmk",
    },
  ],
  ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" }],
  ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lx = Ft("Smartphone", [
  [
    "rect",
    {
      width: "14",
      height: "20",
      x: "5",
      y: "2",
      rx: "2",
      ry: "2",
      key: "1yt0o3",
    },
  ],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mh = Ft("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  cu = "-",
  ax = (e) => {
    const t = cx(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (s) => {
        const l = s.split(cu);
        return l[0] === "" && l.length !== 1 && l.shift(), Ih(l, t) || ux(s);
      },
      getConflictingClassGroupIds: (s, l) => {
        const a = n[s] || [];
        return l && r[s] ? [...a, ...r[s]] : a;
      },
    };
  },
  Ih = (e, t) => {
    var s;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? Ih(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const i = e.join(cu);
    return (s = t.validators.find(({ validator: l }) => l(i))) == null
      ? void 0
      : s.classGroupId;
  },
  id = /^\[(.+)\]$/,
  ux = (e) => {
    if (id.test(e)) {
      const t = id.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  cx = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      fx(Object.entries(e.classGroups), n).forEach(([i, s]) => {
        ta(s, r, i, t);
      }),
      r
    );
  },
  ta = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const i = o === "" ? t : sd(t, o);
        i.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (dx(o)) {
          ta(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([i, s]) => {
        ta(s, sd(t, i), n, r);
      });
    });
  },
  sd = (e, t) => {
    let n = e;
    return (
      t.split(cu).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  dx = (e) => e.isThemeGetter,
  fx = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((i) =>
            typeof i == "string"
              ? t + i
              : typeof i == "object"
              ? Object.fromEntries(
                  Object.entries(i).map(([s, l]) => [t + s, l])
                )
              : i
          );
          return [n, o];
        })
      : e,
  px = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (i, s) => {
      n.set(i, s), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(i) {
        let s = n.get(i);
        if (s !== void 0) return s;
        if ((s = r.get(i)) !== void 0) return o(i, s), s;
      },
      set(i, s) {
        n.has(i) ? n.set(i, s) : o(i, s);
      },
    };
  },
  Dh = "!",
  hx = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      i = t.length,
      s = (l) => {
        const a = [];
        let u = 0,
          d = 0,
          p;
        for (let S = 0; S < l.length; S++) {
          let h = l[S];
          if (u === 0) {
            if (h === o && (r || l.slice(S, S + i) === t)) {
              a.push(l.slice(d, S)), (d = S + i);
              continue;
            }
            if (h === "/") {
              p = S;
              continue;
            }
          }
          h === "[" ? u++ : h === "]" && u--;
        }
        const m = a.length === 0 ? l : l.substring(d),
          g = m.startsWith(Dh),
          w = g ? m.substring(1) : m,
          v = p && p > d ? p - d : void 0;
        return {
          modifiers: a,
          hasImportantModifier: g,
          baseClassName: w,
          maybePostfixModifierPosition: v,
        };
      };
    return n ? (l) => n({ className: l, parseClassName: s }) : s;
  },
  mx = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  yx = (e) => ({ cache: px(e.cacheSize), parseClassName: hx(e), ...ax(e) }),
  vx = /\s+/,
  gx = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      i = [],
      s = e.trim().split(vx);
    let l = "";
    for (let a = s.length - 1; a >= 0; a -= 1) {
      const u = s[a],
        {
          modifiers: d,
          hasImportantModifier: p,
          baseClassName: m,
          maybePostfixModifierPosition: g,
        } = n(u);
      let w = !!g,
        v = r(w ? m.substring(0, g) : m);
      if (!v) {
        if (!w) {
          l = u + (l.length > 0 ? " " + l : l);
          continue;
        }
        if (((v = r(m)), !v)) {
          l = u + (l.length > 0 ? " " + l : l);
          continue;
        }
        w = !1;
      }
      const S = mx(d).join(":"),
        h = p ? S + Dh : S,
        f = h + v;
      if (i.includes(f)) continue;
      i.push(f);
      const y = o(v, w);
      for (let k = 0; k < y.length; ++k) {
        const C = y[k];
        i.push(h + C);
      }
      l = u + (l.length > 0 ? " " + l : l);
    }
    return l;
  };
function xx() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Fh(t)) && (r && (r += " "), (r += n));
  return r;
}
const Fh = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Fh(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function wx(e, ...t) {
  let n,
    r,
    o,
    i = s;
  function s(a) {
    const u = t.reduce((d, p) => p(d), e());
    return (n = yx(u)), (r = n.cache.get), (o = n.cache.set), (i = l), l(a);
  }
  function l(a) {
    const u = r(a);
    if (u) return u;
    const d = gx(a, n);
    return o(a, d), d;
  }
  return function () {
    return i(xx.apply(null, arguments));
  };
}
const Y = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  zh = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Sx = /^\d+\/\d+$/,
  kx = new Set(["px", "full", "screen"]),
  Cx = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Ex =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Nx = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Px = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Tx =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Et = (e) => or(e) || kx.has(e) || Sx.test(e),
  $t = (e) => jr(e, "length", Mx),
  or = (e) => !!e && !Number.isNaN(Number(e)),
  tl = (e) => jr(e, "number", or),
  Ur = (e) => !!e && Number.isInteger(Number(e)),
  jx = (e) => e.endsWith("%") && or(e.slice(0, -1)),
  D = (e) => zh.test(e),
  Ut = (e) => Cx.test(e),
  Rx = new Set(["length", "size", "percentage"]),
  bx = (e) => jr(e, Rx, $h),
  _x = (e) => jr(e, "position", $h),
  Ax = new Set(["image", "url"]),
  Ox = (e) => jr(e, Ax, Dx),
  Lx = (e) => jr(e, "", Ix),
  Wr = () => !0,
  jr = (e, t, n) => {
    const r = zh.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  Mx = (e) => Ex.test(e) && !Nx.test(e),
  $h = () => !1,
  Ix = (e) => Px.test(e),
  Dx = (e) => Tx.test(e),
  Fx = () => {
    const e = Y("colors"),
      t = Y("spacing"),
      n = Y("blur"),
      r = Y("brightness"),
      o = Y("borderColor"),
      i = Y("borderRadius"),
      s = Y("borderSpacing"),
      l = Y("borderWidth"),
      a = Y("contrast"),
      u = Y("grayscale"),
      d = Y("hueRotate"),
      p = Y("invert"),
      m = Y("gap"),
      g = Y("gradientColorStops"),
      w = Y("gradientColorStopPositions"),
      v = Y("inset"),
      S = Y("margin"),
      h = Y("opacity"),
      f = Y("padding"),
      y = Y("saturate"),
      k = Y("scale"),
      C = Y("sepia"),
      E = Y("skew"),
      N = Y("space"),
      j = Y("translate"),
      L = () => ["auto", "contain", "none"],
      A = () => ["auto", "hidden", "clip", "visible", "scroll"],
      z = () => ["auto", D, t],
      M = () => [D, t],
      V = () => ["", Et, $t],
      O = () => ["auto", or, D],
      Q = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      U = () => ["solid", "dashed", "dotted", "double", "none"],
      B = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      T = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      b = () => ["", "0", D],
      I = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      $ = () => [or, D];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Wr],
        spacing: [Et, $t],
        blur: ["none", "", Ut, D],
        brightness: $(),
        borderColor: [e],
        borderRadius: ["none", "", "full", Ut, D],
        borderSpacing: M(),
        borderWidth: V(),
        contrast: $(),
        grayscale: b(),
        hueRotate: $(),
        invert: b(),
        gap: M(),
        gradientColorStops: [e],
        gradientColorStopPositions: [jx, $t],
        inset: z(),
        margin: z(),
        opacity: $(),
        padding: M(),
        saturate: $(),
        scale: $(),
        sepia: b(),
        skew: $(),
        space: M(),
        translate: M(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", D] }],
        container: ["container"],
        columns: [{ columns: [Ut] }],
        "break-after": [{ "break-after": I() }],
        "break-before": [{ "break-before": I() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...Q(), D] }],
        overflow: [{ overflow: A() }],
        "overflow-x": [{ "overflow-x": A() }],
        "overflow-y": [{ "overflow-y": A() }],
        overscroll: [{ overscroll: L() }],
        "overscroll-x": [{ "overscroll-x": L() }],
        "overscroll-y": [{ "overscroll-y": L() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [v] }],
        "inset-x": [{ "inset-x": [v] }],
        "inset-y": [{ "inset-y": [v] }],
        start: [{ start: [v] }],
        end: [{ end: [v] }],
        top: [{ top: [v] }],
        right: [{ right: [v] }],
        bottom: [{ bottom: [v] }],
        left: [{ left: [v] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", Ur, D] }],
        basis: [{ basis: z() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", D] }],
        grow: [{ grow: b() }],
        shrink: [{ shrink: b() }],
        order: [{ order: ["first", "last", "none", Ur, D] }],
        "grid-cols": [{ "grid-cols": [Wr] }],
        "col-start-end": [{ col: ["auto", { span: ["full", Ur, D] }, D] }],
        "col-start": [{ "col-start": O() }],
        "col-end": [{ "col-end": O() }],
        "grid-rows": [{ "grid-rows": [Wr] }],
        "row-start-end": [{ row: ["auto", { span: [Ur, D] }, D] }],
        "row-start": [{ "row-start": O() }],
        "row-end": [{ "row-end": O() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", D] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", D] }],
        gap: [{ gap: [m] }],
        "gap-x": [{ "gap-x": [m] }],
        "gap-y": [{ "gap-y": [m] }],
        "justify-content": [{ justify: ["normal", ...T()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...T(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...T(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [f] }],
        px: [{ px: [f] }],
        py: [{ py: [f] }],
        ps: [{ ps: [f] }],
        pe: [{ pe: [f] }],
        pt: [{ pt: [f] }],
        pr: [{ pr: [f] }],
        pb: [{ pb: [f] }],
        pl: [{ pl: [f] }],
        m: [{ m: [S] }],
        mx: [{ mx: [S] }],
        my: [{ my: [S] }],
        ms: [{ ms: [S] }],
        me: [{ me: [S] }],
        mt: [{ mt: [S] }],
        mr: [{ mr: [S] }],
        mb: [{ mb: [S] }],
        ml: [{ ml: [S] }],
        "space-x": [{ "space-x": [N] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [N] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", D, t] }],
        "min-w": [{ "min-w": [D, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              D,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [Ut] },
              Ut,
            ],
          },
        ],
        h: [{ h: [D, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [D, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [D, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [D, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Ut, $t] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              tl,
            ],
          },
        ],
        "font-family": [{ font: [Wr] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              D,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", or, tl] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              Et,
              D,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", D] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", D] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [h] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [h] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...U(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", Et, $t] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", Et, D] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: M() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              D,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", D] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [h] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...Q(), _x] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", bx] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              Ox,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [w] }],
        "gradient-via-pos": [{ via: [w] }],
        "gradient-to-pos": [{ to: [w] }],
        "gradient-from": [{ from: [g] }],
        "gradient-via": [{ via: [g] }],
        "gradient-to": [{ to: [g] }],
        rounded: [{ rounded: [i] }],
        "rounded-s": [{ "rounded-s": [i] }],
        "rounded-e": [{ "rounded-e": [i] }],
        "rounded-t": [{ "rounded-t": [i] }],
        "rounded-r": [{ "rounded-r": [i] }],
        "rounded-b": [{ "rounded-b": [i] }],
        "rounded-l": [{ "rounded-l": [i] }],
        "rounded-ss": [{ "rounded-ss": [i] }],
        "rounded-se": [{ "rounded-se": [i] }],
        "rounded-ee": [{ "rounded-ee": [i] }],
        "rounded-es": [{ "rounded-es": [i] }],
        "rounded-tl": [{ "rounded-tl": [i] }],
        "rounded-tr": [{ "rounded-tr": [i] }],
        "rounded-br": [{ "rounded-br": [i] }],
        "rounded-bl": [{ "rounded-bl": [i] }],
        "border-w": [{ border: [l] }],
        "border-w-x": [{ "border-x": [l] }],
        "border-w-y": [{ "border-y": [l] }],
        "border-w-s": [{ "border-s": [l] }],
        "border-w-e": [{ "border-e": [l] }],
        "border-w-t": [{ "border-t": [l] }],
        "border-w-r": [{ "border-r": [l] }],
        "border-w-b": [{ "border-b": [l] }],
        "border-w-l": [{ "border-l": [l] }],
        "border-opacity": [{ "border-opacity": [h] }],
        "border-style": [{ border: [...U(), "hidden"] }],
        "divide-x": [{ "divide-x": [l] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [l] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [h] }],
        "divide-style": [{ divide: U() }],
        "border-color": [{ border: [o] }],
        "border-color-x": [{ "border-x": [o] }],
        "border-color-y": [{ "border-y": [o] }],
        "border-color-s": [{ "border-s": [o] }],
        "border-color-e": [{ "border-e": [o] }],
        "border-color-t": [{ "border-t": [o] }],
        "border-color-r": [{ "border-r": [o] }],
        "border-color-b": [{ "border-b": [o] }],
        "border-color-l": [{ "border-l": [o] }],
        "divide-color": [{ divide: [o] }],
        "outline-style": [{ outline: ["", ...U()] }],
        "outline-offset": [{ "outline-offset": [Et, D] }],
        "outline-w": [{ outline: [Et, $t] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: V() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [h] }],
        "ring-offset-w": [{ "ring-offset": [Et, $t] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", Ut, Lx] }],
        "shadow-color": [{ shadow: [Wr] }],
        opacity: [{ opacity: [h] }],
        "mix-blend": [{ "mix-blend": [...B(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": B() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [a] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Ut, D] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [d] }],
        invert: [{ invert: [p] }],
        saturate: [{ saturate: [y] }],
        sepia: [{ sepia: [C] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [a] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
        "backdrop-invert": [{ "backdrop-invert": [p] }],
        "backdrop-opacity": [{ "backdrop-opacity": [h] }],
        "backdrop-saturate": [{ "backdrop-saturate": [y] }],
        "backdrop-sepia": [{ "backdrop-sepia": [C] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [s] }],
        "border-spacing-x": [{ "border-spacing-x": [s] }],
        "border-spacing-y": [{ "border-spacing-y": [s] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              D,
            ],
          },
        ],
        duration: [{ duration: $() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", D] }],
        delay: [{ delay: $() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", D] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [k] }],
        "scale-x": [{ "scale-x": [k] }],
        "scale-y": [{ "scale-y": [k] }],
        rotate: [{ rotate: [Ur, D] }],
        "translate-x": [{ "translate-x": [j] }],
        "translate-y": [{ "translate-y": [j] }],
        "skew-x": [{ "skew-x": [E] }],
        "skew-y": [{ "skew-y": [E] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              D,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              D,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": M() }],
        "scroll-mx": [{ "scroll-mx": M() }],
        "scroll-my": [{ "scroll-my": M() }],
        "scroll-ms": [{ "scroll-ms": M() }],
        "scroll-me": [{ "scroll-me": M() }],
        "scroll-mt": [{ "scroll-mt": M() }],
        "scroll-mr": [{ "scroll-mr": M() }],
        "scroll-mb": [{ "scroll-mb": M() }],
        "scroll-ml": [{ "scroll-ml": M() }],
        "scroll-p": [{ "scroll-p": M() }],
        "scroll-px": [{ "scroll-px": M() }],
        "scroll-py": [{ "scroll-py": M() }],
        "scroll-ps": [{ "scroll-ps": M() }],
        "scroll-pe": [{ "scroll-pe": M() }],
        "scroll-pt": [{ "scroll-pt": M() }],
        "scroll-pr": [{ "scroll-pr": M() }],
        "scroll-pb": [{ "scroll-pb": M() }],
        "scroll-pl": [{ "scroll-pl": M() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", D] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [Et, $t, tl] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  zx = wx(Fx);
function Le(...e) {
  return zx(Ah(e));
}
const $x = X0,
  Uh = x.forwardRef(({ className: e, ...t }, n) =>
    c.jsx(Nh, {
      ref: n,
      className: Le(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e
      ),
      ...t,
    })
  );
Uh.displayName = Nh.displayName;
const Ux = Oh(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  Wh = x.forwardRef(({ className: e, variant: t, ...n }, r) =>
    c.jsx(Ph, { ref: r, className: Le(Ux({ variant: t }), e), ...n })
  );
Wh.displayName = Ph.displayName;
const Wx = x.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Rh, {
    ref: n,
    className: Le(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e
    ),
    ...t,
  })
);
Wx.displayName = Rh.displayName;
const Vh = x.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(bh, {
    ref: n,
    className: Le(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: c.jsx(Mh, { className: "h-4 w-4" }),
  })
);
Vh.displayName = bh.displayName;
const Hh = x.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Th, { ref: n, className: Le("text-sm font-semibold", e), ...t })
);
Hh.displayName = Th.displayName;
const Bh = x.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(jh, { ref: n, className: Le("text-sm opacity-90", e), ...t })
);
Bh.displayName = jh.displayName;
function Vx() {
  const { toasts: e } = oh();
  return c.jsxs($x, {
    children: [
      e.map(function ({ id: t, title: n, description: r, action: o, ...i }) {
        return c.jsxs(
          Wh,
          {
            ...i,
            children: [
              c.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && c.jsx(Hh, { children: n }),
                  r && c.jsx(Bh, { children: r }),
                ],
              }),
              o,
              c.jsx(Vh, {}),
            ],
          },
          t
        );
      }),
      c.jsx(Uh, {}),
    ],
  });
}
const Hx = ["top", "right", "bottom", "left"],
  fn = Math.min,
  De = Math.max,
  Bi = Math.round,
  ri = Math.floor,
  xt = (e) => ({ x: e, y: e }),
  Bx = { left: "right", right: "left", bottom: "top", top: "bottom" },
  Qx = { start: "end", end: "start" };
function na(e, t, n) {
  return De(e, fn(t, n));
}
function Mt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function It(e) {
  return e.split("-")[0];
}
function Rr(e) {
  return e.split("-")[1];
}
function du(e) {
  return e === "x" ? "y" : "x";
}
function fu(e) {
  return e === "y" ? "height" : "width";
}
function pn(e) {
  return ["top", "bottom"].includes(It(e)) ? "y" : "x";
}
function pu(e) {
  return du(pn(e));
}
function Gx(e, t, n) {
  n === void 0 && (n = !1);
  const r = Rr(e),
    o = pu(e),
    i = fu(o);
  let s =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[i] > t.floating[i] && (s = Qi(s)), [s, Qi(s)];
}
function Kx(e) {
  const t = Qi(e);
  return [ra(e), t, ra(t)];
}
function ra(e) {
  return e.replace(/start|end/g, (t) => Qx[t]);
}
function qx(e, t, n) {
  const r = ["left", "right"],
    o = ["right", "left"],
    i = ["top", "bottom"],
    s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? o : r) : t ? r : o;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function Yx(e, t, n, r) {
  const o = Rr(e);
  let i = qx(It(e), n === "start", r);
  return (
    o && ((i = i.map((s) => s + "-" + o)), t && (i = i.concat(i.map(ra)))), i
  );
}
function Qi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Bx[t]);
}
function Xx(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Qh(e) {
  return typeof e != "number"
    ? Xx(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Gi(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function ld(e, t, n) {
  let { reference: r, floating: o } = e;
  const i = pn(t),
    s = pu(t),
    l = fu(s),
    a = It(t),
    u = i === "y",
    d = r.x + r.width / 2 - o.width / 2,
    p = r.y + r.height / 2 - o.height / 2,
    m = r[l] / 2 - o[l] / 2;
  let g;
  switch (a) {
    case "top":
      g = { x: d, y: r.y - o.height };
      break;
    case "bottom":
      g = { x: d, y: r.y + r.height };
      break;
    case "right":
      g = { x: r.x + r.width, y: p };
      break;
    case "left":
      g = { x: r.x - o.width, y: p };
      break;
    default:
      g = { x: r.x, y: r.y };
  }
  switch (Rr(t)) {
    case "start":
      g[s] -= m * (n && u ? -1 : 1);
      break;
    case "end":
      g[s] += m * (n && u ? -1 : 1);
      break;
  }
  return g;
}
const Zx = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: i = [],
      platform: s,
    } = n,
    l = i.filter(Boolean),
    a = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: d, y: p } = ld(u, r, a),
    m = r,
    g = {},
    w = 0;
  for (let v = 0; v < l.length; v++) {
    const { name: S, fn: h } = l[v],
      {
        x: f,
        y,
        data: k,
        reset: C,
      } = await h({
        x: d,
        y: p,
        initialPlacement: r,
        placement: m,
        strategy: o,
        middlewareData: g,
        rects: u,
        platform: s,
        elements: { reference: e, floating: t },
      });
    (d = f ?? d),
      (p = y ?? p),
      (g = { ...g, [S]: { ...g[S], ...k } }),
      C &&
        w <= 50 &&
        (w++,
        typeof C == "object" &&
          (C.placement && (m = C.placement),
          C.rects &&
            (u =
              C.rects === !0
                ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : C.rects),
          ({ x: d, y: p } = ld(u, m, a))),
        (v = -1));
  }
  return { x: d, y: p, placement: m, strategy: o, middlewareData: g };
};
async function Eo(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: i, rects: s, elements: l, strategy: a } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: d = "viewport",
      elementContext: p = "floating",
      altBoundary: m = !1,
      padding: g = 0,
    } = Mt(t, e),
    w = Qh(g),
    S = l[m ? (p === "floating" ? "reference" : "floating") : p],
    h = Gi(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(S))) == null ||
          n
            ? S
            : S.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(l.floating))),
        boundary: u,
        rootBoundary: d,
        strategy: a,
      })
    ),
    f =
      p === "floating"
        ? { x: r, y: o, width: s.floating.width, height: s.floating.height }
        : s.reference,
    y = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(l.floating)),
    k = (await (i.isElement == null ? void 0 : i.isElement(y)))
      ? (await (i.getScale == null ? void 0 : i.getScale(y))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    C = Gi(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: l,
            rect: f,
            offsetParent: y,
            strategy: a,
          })
        : f
    );
  return {
    top: (h.top - C.top + w.top) / k.y,
    bottom: (C.bottom - h.bottom + w.bottom) / k.y,
    left: (h.left - C.left + w.left) / k.x,
    right: (C.right - h.right + w.right) / k.x,
  };
}
const Jx = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: i,
          platform: s,
          elements: l,
          middlewareData: a,
        } = t,
        { element: u, padding: d = 0 } = Mt(e, t) || {};
      if (u == null) return {};
      const p = Qh(d),
        m = { x: n, y: r },
        g = pu(o),
        w = fu(g),
        v = await s.getDimensions(u),
        S = g === "y",
        h = S ? "top" : "left",
        f = S ? "bottom" : "right",
        y = S ? "clientHeight" : "clientWidth",
        k = i.reference[w] + i.reference[g] - m[g] - i.floating[w],
        C = m[g] - i.reference[g],
        E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
      let N = E ? E[y] : 0;
      (!N || !(await (s.isElement == null ? void 0 : s.isElement(E)))) &&
        (N = l.floating[y] || i.floating[w]);
      const j = k / 2 - C / 2,
        L = N / 2 - v[w] / 2 - 1,
        A = fn(p[h], L),
        z = fn(p[f], L),
        M = A,
        V = N - v[w] - z,
        O = N / 2 - v[w] / 2 + j,
        Q = na(M, O, V),
        U =
          !a.arrow &&
          Rr(o) != null &&
          O !== Q &&
          i.reference[w] / 2 - (O < M ? A : z) - v[w] / 2 < 0,
        B = U ? (O < M ? O - M : O - V) : 0;
      return {
        [g]: m[g] + B,
        data: {
          [g]: Q,
          centerOffset: O - Q - B,
          ...(U && { alignmentOffset: B }),
        },
        reset: U,
      };
    },
  }),
  ew = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: i,
              rects: s,
              initialPlacement: l,
              platform: a,
              elements: u,
            } = t,
            {
              mainAxis: d = !0,
              crossAxis: p = !0,
              fallbackPlacements: m,
              fallbackStrategy: g = "bestFit",
              fallbackAxisSideDirection: w = "none",
              flipAlignment: v = !0,
              ...S
            } = Mt(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const h = It(o),
            f = pn(l),
            y = It(l) === l,
            k = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)),
            C = m || (y || !v ? [Qi(l)] : Kx(l)),
            E = w !== "none";
          !m && E && C.push(...Yx(l, v, w, k));
          const N = [l, ...C],
            j = await Eo(t, S),
            L = [];
          let A = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((d && L.push(j[h]), p)) {
            const O = Gx(o, s, k);
            L.push(j[O[0]], j[O[1]]);
          }
          if (
            ((A = [...A, { placement: o, overflows: L }]),
            !L.every((O) => O <= 0))
          ) {
            var z, M;
            const O = (((z = i.flip) == null ? void 0 : z.index) || 0) + 1,
              Q = N[O];
            if (Q)
              return {
                data: { index: O, overflows: A },
                reset: { placement: Q },
              };
            let U =
              (M = A.filter((B) => B.overflows[0] <= 0).sort(
                (B, T) => B.overflows[1] - T.overflows[1]
              )[0]) == null
                ? void 0
                : M.placement;
            if (!U)
              switch (g) {
                case "bestFit": {
                  var V;
                  const B =
                    (V = A.filter((T) => {
                      if (E) {
                        const b = pn(T.placement);
                        return b === f || b === "y";
                      }
                      return !0;
                    })
                      .map((T) => [
                        T.placement,
                        T.overflows
                          .filter((b) => b > 0)
                          .reduce((b, I) => b + I, 0),
                      ])
                      .sort((T, b) => T[1] - b[1])[0]) == null
                      ? void 0
                      : V[0];
                  B && (U = B);
                  break;
                }
                case "initialPlacement":
                  U = l;
                  break;
              }
            if (o !== U) return { reset: { placement: U } };
          }
          return {};
        },
      }
    );
  };
function ad(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function ud(e) {
  return Hx.some((t) => e[t] >= 0);
}
const tw = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...o } = Mt(e, t);
        switch (r) {
          case "referenceHidden": {
            const i = await Eo(t, { ...o, elementContext: "reference" }),
              s = ad(i, n.reference);
            return {
              data: { referenceHiddenOffsets: s, referenceHidden: ud(s) },
            };
          }
          case "escaped": {
            const i = await Eo(t, { ...o, altBoundary: !0 }),
              s = ad(i, n.floating);
            return { data: { escapedOffsets: s, escaped: ud(s) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function nw(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    s = It(n),
    l = Rr(n),
    a = pn(n) === "y",
    u = ["left", "top"].includes(s) ? -1 : 1,
    d = i && a ? -1 : 1,
    p = Mt(t, e);
  let {
    mainAxis: m,
    crossAxis: g,
    alignmentAxis: w,
  } = typeof p == "number"
    ? { mainAxis: p, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: p.mainAxis || 0,
        crossAxis: p.crossAxis || 0,
        alignmentAxis: p.alignmentAxis,
      };
  return (
    l && typeof w == "number" && (g = l === "end" ? w * -1 : w),
    a ? { x: g * d, y: m * u } : { x: m * u, y: g * d }
  );
}
const rw = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: i, placement: s, middlewareData: l } = t,
            a = await nw(t, e);
          return s === ((n = l.offset) == null ? void 0 : n.placement) &&
            (r = l.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + a.x, y: i + a.y, data: { ...a, placement: s } };
        },
      }
    );
  },
  ow = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: i = !0,
              crossAxis: s = !1,
              limiter: l = {
                fn: (S) => {
                  let { x: h, y: f } = S;
                  return { x: h, y: f };
                },
              },
              ...a
            } = Mt(e, t),
            u = { x: n, y: r },
            d = await Eo(t, a),
            p = pn(It(o)),
            m = du(p);
          let g = u[m],
            w = u[p];
          if (i) {
            const S = m === "y" ? "top" : "left",
              h = m === "y" ? "bottom" : "right",
              f = g + d[S],
              y = g - d[h];
            g = na(f, g, y);
          }
          if (s) {
            const S = p === "y" ? "top" : "left",
              h = p === "y" ? "bottom" : "right",
              f = w + d[S],
              y = w - d[h];
            w = na(f, w, y);
          }
          const v = l.fn({ ...t, [m]: g, [p]: w });
          return {
            ...v,
            data: { x: v.x - n, y: v.y - r, enabled: { [m]: i, [p]: s } },
          };
        },
      }
    );
  },
  iw = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: i, middlewareData: s } = t,
            { offset: l = 0, mainAxis: a = !0, crossAxis: u = !0 } = Mt(e, t),
            d = { x: n, y: r },
            p = pn(o),
            m = du(p);
          let g = d[m],
            w = d[p];
          const v = Mt(l, t),
            S =
              typeof v == "number"
                ? { mainAxis: v, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...v };
          if (a) {
            const y = m === "y" ? "height" : "width",
              k = i.reference[m] - i.floating[y] + S.mainAxis,
              C = i.reference[m] + i.reference[y] - S.mainAxis;
            g < k ? (g = k) : g > C && (g = C);
          }
          if (u) {
            var h, f;
            const y = m === "y" ? "width" : "height",
              k = ["top", "left"].includes(It(o)),
              C =
                i.reference[p] -
                i.floating[y] +
                ((k && ((h = s.offset) == null ? void 0 : h[p])) || 0) +
                (k ? 0 : S.crossAxis),
              E =
                i.reference[p] +
                i.reference[y] +
                (k ? 0 : ((f = s.offset) == null ? void 0 : f[p]) || 0) -
                (k ? S.crossAxis : 0);
            w < C ? (w = C) : w > E && (w = E);
          }
          return { [m]: g, [p]: w };
        },
      }
    );
  },
  sw = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, rects: i, platform: s, elements: l } = t,
            { apply: a = () => {}, ...u } = Mt(e, t),
            d = await Eo(t, u),
            p = It(o),
            m = Rr(o),
            g = pn(o) === "y",
            { width: w, height: v } = i.floating;
          let S, h;
          p === "top" || p === "bottom"
            ? ((S = p),
              (h =
                m ===
                ((await (s.isRTL == null ? void 0 : s.isRTL(l.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((h = p), (S = m === "end" ? "top" : "bottom"));
          const f = v - d.top - d.bottom,
            y = w - d.left - d.right,
            k = fn(v - d[S], f),
            C = fn(w - d[h], y),
            E = !t.middlewareData.shift;
          let N = k,
            j = C;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (j = y),
            (r = t.middlewareData.shift) != null && r.enabled.y && (N = f),
            E && !m)
          ) {
            const A = De(d.left, 0),
              z = De(d.right, 0),
              M = De(d.top, 0),
              V = De(d.bottom, 0);
            g
              ? (j = w - 2 * (A !== 0 || z !== 0 ? A + z : De(d.left, d.right)))
              : (N =
                  v - 2 * (M !== 0 || V !== 0 ? M + V : De(d.top, d.bottom)));
          }
          await a({ ...t, availableWidth: j, availableHeight: N });
          const L = await s.getDimensions(l.floating);
          return w !== L.width || v !== L.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function gs() {
  return typeof window < "u";
}
function br(e) {
  return Gh(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function $e(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function kt(e) {
  var t;
  return (t = (Gh(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Gh(e) {
  return gs() ? e instanceof Node || e instanceof $e(e).Node : !1;
}
function ut(e) {
  return gs() ? e instanceof Element || e instanceof $e(e).Element : !1;
}
function St(e) {
  return gs() ? e instanceof HTMLElement || e instanceof $e(e).HTMLElement : !1;
}
function cd(e) {
  return !gs() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof $e(e).ShadowRoot;
}
function Lo(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = ct(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(o)
  );
}
function lw(e) {
  return ["table", "td", "th"].includes(br(e));
}
function xs(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function hu(e) {
  const t = mu(),
    n = ut(e) ? ct(e) : e;
  return (
    ["transform", "translate", "scale", "rotate", "perspective"].some((r) =>
      n[r] ? n[r] !== "none" : !1
    ) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(
      (r) => (n.willChange || "").includes(r)
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r)
    )
  );
}
function aw(e) {
  let t = hn(e);
  for (; St(t) && !Cr(t); ) {
    if (hu(t)) return t;
    if (xs(t)) return null;
    t = hn(t);
  }
  return null;
}
function mu() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function Cr(e) {
  return ["html", "body", "#document"].includes(br(e));
}
function ct(e) {
  return $e(e).getComputedStyle(e);
}
function ws(e) {
  return ut(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function hn(e) {
  if (br(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (cd(e) && e.host) || kt(e);
  return cd(t) ? t.host : t;
}
function Kh(e) {
  const t = hn(e);
  return Cr(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : St(t) && Lo(t)
    ? t
    : Kh(t);
}
function No(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Kh(e),
    i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = $e(o);
  if (i) {
    const l = oa(s);
    return t.concat(
      s,
      s.visualViewport || [],
      Lo(o) ? o : [],
      l && n ? No(l) : []
    );
  }
  return t.concat(o, No(o, [], n));
}
function oa(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function qh(e) {
  const t = ct(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = St(e),
    i = o ? e.offsetWidth : n,
    s = o ? e.offsetHeight : r,
    l = Bi(n) !== i || Bi(r) !== s;
  return l && ((n = i), (r = s)), { width: n, height: r, $: l };
}
function yu(e) {
  return ut(e) ? e : e.contextElement;
}
function ir(e) {
  const t = yu(e);
  if (!St(t)) return xt(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = qh(t);
  let s = (i ? Bi(n.width) : n.width) / r,
    l = (i ? Bi(n.height) : n.height) / o;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    { x: s, y: l }
  );
}
const uw = xt(0);
function Yh(e) {
  const t = $e(e);
  return !mu() || !t.visualViewport
    ? uw
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function cw(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== $e(e)) ? !1 : t;
}
function In(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    i = yu(e);
  let s = xt(1);
  t && (r ? ut(r) && (s = ir(r)) : (s = ir(e)));
  const l = cw(i, n, r) ? Yh(i) : xt(0);
  let a = (o.left + l.x) / s.x,
    u = (o.top + l.y) / s.y,
    d = o.width / s.x,
    p = o.height / s.y;
  if (i) {
    const m = $e(i),
      g = r && ut(r) ? $e(r) : r;
    let w = m,
      v = oa(w);
    for (; v && r && g !== w; ) {
      const S = ir(v),
        h = v.getBoundingClientRect(),
        f = ct(v),
        y = h.left + (v.clientLeft + parseFloat(f.paddingLeft)) * S.x,
        k = h.top + (v.clientTop + parseFloat(f.paddingTop)) * S.y;
      (a *= S.x),
        (u *= S.y),
        (d *= S.x),
        (p *= S.y),
        (a += y),
        (u += k),
        (w = $e(v)),
        (v = oa(w));
    }
  }
  return Gi({ width: d, height: p, x: a, y: u });
}
function vu(e, t) {
  const n = ws(e).scrollLeft;
  return t ? t.left + n : In(kt(e)).left + n;
}
function Xh(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    o = r.left + t.scrollLeft - (n ? 0 : vu(e, r)),
    i = r.top + t.scrollTop;
  return { x: o, y: i };
}
function dw(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const i = o === "fixed",
    s = kt(r),
    l = t ? xs(t.floating) : !1;
  if (r === s || (l && i)) return n;
  let a = { scrollLeft: 0, scrollTop: 0 },
    u = xt(1);
  const d = xt(0),
    p = St(r);
  if (
    (p || (!p && !i)) &&
    ((br(r) !== "body" || Lo(s)) && (a = ws(r)), St(r))
  ) {
    const g = In(r);
    (u = ir(r)), (d.x = g.x + r.clientLeft), (d.y = g.y + r.clientTop);
  }
  const m = s && !p && !i ? Xh(s, a, !0) : xt(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - a.scrollLeft * u.x + d.x + m.x,
    y: n.y * u.y - a.scrollTop * u.y + d.y + m.y,
  };
}
function fw(e) {
  return Array.from(e.getClientRects());
}
function pw(e) {
  const t = kt(e),
    n = ws(e),
    r = e.ownerDocument.body,
    o = De(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = De(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + vu(e);
  const l = -n.scrollTop;
  return (
    ct(r).direction === "rtl" && (s += De(t.clientWidth, r.clientWidth) - o),
    { width: o, height: i, x: s, y: l }
  );
}
function hw(e, t) {
  const n = $e(e),
    r = kt(e),
    o = n.visualViewport;
  let i = r.clientWidth,
    s = r.clientHeight,
    l = 0,
    a = 0;
  if (o) {
    (i = o.width), (s = o.height);
    const u = mu();
    (!u || (u && t === "fixed")) && ((l = o.offsetLeft), (a = o.offsetTop));
  }
  return { width: i, height: s, x: l, y: a };
}
function mw(e, t) {
  const n = In(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = St(e) ? ir(e) : xt(1),
    s = e.clientWidth * i.x,
    l = e.clientHeight * i.y,
    a = o * i.x,
    u = r * i.y;
  return { width: s, height: l, x: a, y: u };
}
function dd(e, t, n) {
  let r;
  if (t === "viewport") r = hw(e, n);
  else if (t === "document") r = pw(kt(e));
  else if (ut(t)) r = mw(t, n);
  else {
    const o = Yh(e);
    r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
  }
  return Gi(r);
}
function Zh(e, t) {
  const n = hn(e);
  return n === t || !ut(n) || Cr(n)
    ? !1
    : ct(n).position === "fixed" || Zh(n, t);
}
function yw(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = No(e, [], !1).filter((l) => ut(l) && br(l) !== "body"),
    o = null;
  const i = ct(e).position === "fixed";
  let s = i ? hn(e) : e;
  for (; ut(s) && !Cr(s); ) {
    const l = ct(s),
      a = hu(s);
    !a && l.position === "fixed" && (o = null),
      (
        i
          ? !a && !o
          : (!a &&
              l.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (Lo(s) && !a && Zh(e, s))
      )
        ? (r = r.filter((d) => d !== s))
        : (o = l),
      (s = hn(s));
  }
  return t.set(e, r), r;
}
function vw(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const s = [
      ...(n === "clippingAncestors"
        ? xs(t)
          ? []
          : yw(t, this._c)
        : [].concat(n)),
      r,
    ],
    l = s[0],
    a = s.reduce((u, d) => {
      const p = dd(t, d, o);
      return (
        (u.top = De(p.top, u.top)),
        (u.right = fn(p.right, u.right)),
        (u.bottom = fn(p.bottom, u.bottom)),
        (u.left = De(p.left, u.left)),
        u
      );
    }, dd(t, l, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top,
  };
}
function gw(e) {
  const { width: t, height: n } = qh(e);
  return { width: t, height: n };
}
function xw(e, t, n) {
  const r = St(t),
    o = kt(t),
    i = n === "fixed",
    s = In(e, !0, i, t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const a = xt(0);
  if (r || (!r && !i))
    if (((br(t) !== "body" || Lo(o)) && (l = ws(t)), r)) {
      const m = In(t, !0, i, t);
      (a.x = m.x + t.clientLeft), (a.y = m.y + t.clientTop);
    } else o && (a.x = vu(o));
  const u = o && !r && !i ? Xh(o, l) : xt(0),
    d = s.left + l.scrollLeft - a.x - u.x,
    p = s.top + l.scrollTop - a.y - u.y;
  return { x: d, y: p, width: s.width, height: s.height };
}
function nl(e) {
  return ct(e).position === "static";
}
function fd(e, t) {
  if (!St(e) || ct(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return kt(e) === n && (n = n.ownerDocument.body), n;
}
function Jh(e, t) {
  const n = $e(e);
  if (xs(e)) return n;
  if (!St(e)) {
    let o = hn(e);
    for (; o && !Cr(o); ) {
      if (ut(o) && !nl(o)) return o;
      o = hn(o);
    }
    return n;
  }
  let r = fd(e, t);
  for (; r && lw(r) && nl(r); ) r = fd(r, t);
  return r && Cr(r) && nl(r) && !hu(r) ? n : r || aw(e) || n;
}
const ww = async function (e) {
  const t = this.getOffsetParent || Jh,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: xw(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function Sw(e) {
  return ct(e).direction === "rtl";
}
const kw = {
  convertOffsetParentRelativeRectToViewportRelativeRect: dw,
  getDocumentElement: kt,
  getClippingRect: vw,
  getOffsetParent: Jh,
  getElementRects: ww,
  getClientRects: fw,
  getDimensions: gw,
  getScale: ir,
  isElement: ut,
  isRTL: Sw,
};
function em(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function Cw(e, t) {
  let n = null,
    r;
  const o = kt(e);
  function i() {
    var l;
    clearTimeout(r), (l = n) == null || l.disconnect(), (n = null);
  }
  function s(l, a) {
    l === void 0 && (l = !1), a === void 0 && (a = 1), i();
    const u = e.getBoundingClientRect(),
      { left: d, top: p, width: m, height: g } = u;
    if ((l || t(), !m || !g)) return;
    const w = ri(p),
      v = ri(o.clientWidth - (d + m)),
      S = ri(o.clientHeight - (p + g)),
      h = ri(d),
      y = {
        rootMargin: -w + "px " + -v + "px " + -S + "px " + -h + "px",
        threshold: De(0, fn(1, a)) || 1,
      };
    let k = !0;
    function C(E) {
      const N = E[0].intersectionRatio;
      if (N !== a) {
        if (!k) return s();
        N
          ? s(!1, N)
          : (r = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      N === 1 && !em(u, e.getBoundingClientRect()) && s(), (k = !1);
    }
    try {
      n = new IntersectionObserver(C, { ...y, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(C, y);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function Ew(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: l = typeof IntersectionObserver == "function",
      animationFrame: a = !1,
    } = r,
    u = yu(e),
    d = o || i ? [...(u ? No(u) : []), ...No(t)] : [];
  d.forEach((h) => {
    o && h.addEventListener("scroll", n, { passive: !0 }),
      i && h.addEventListener("resize", n);
  });
  const p = u && l ? Cw(u, n) : null;
  let m = -1,
    g = null;
  s &&
    ((g = new ResizeObserver((h) => {
      let [f] = h;
      f &&
        f.target === u &&
        g &&
        (g.unobserve(t),
        cancelAnimationFrame(m),
        (m = requestAnimationFrame(() => {
          var y;
          (y = g) == null || y.observe(t);
        }))),
        n();
    })),
    u && !a && g.observe(u),
    g.observe(t));
  let w,
    v = a ? In(e) : null;
  a && S();
  function S() {
    const h = In(e);
    v && !em(v, h) && n(), (v = h), (w = requestAnimationFrame(S));
  }
  return (
    n(),
    () => {
      var h;
      d.forEach((f) => {
        o && f.removeEventListener("scroll", n),
          i && f.removeEventListener("resize", n);
      }),
        p == null || p(),
        (h = g) == null || h.disconnect(),
        (g = null),
        a && cancelAnimationFrame(w);
    }
  );
}
const Nw = rw,
  Pw = ow,
  Tw = ew,
  jw = sw,
  Rw = tw,
  pd = Jx,
  bw = iw,
  _w = (e, t, n) => {
    const r = new Map(),
      o = { platform: kw, ...n },
      i = { ...o.platform, _c: r };
    return Zx(e, t, { ...o, platform: i });
  };
var gi = typeof document < "u" ? x.useLayoutEffect : x.useEffect;
function Ki(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Ki(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !Ki(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function tm(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function hd(e, t) {
  const n = tm(e);
  return Math.round(t * n) / n;
}
function rl(e) {
  const t = x.useRef(e);
  return (
    gi(() => {
      t.current = e;
    }),
    t
  );
}
function Aw(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: i, floating: s } = {},
      transform: l = !0,
      whileElementsMounted: a,
      open: u,
    } = e,
    [d, p] = x.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [m, g] = x.useState(r);
  Ki(m, r) || g(r);
  const [w, v] = x.useState(null),
    [S, h] = x.useState(null),
    f = x.useCallback((T) => {
      T !== E.current && ((E.current = T), v(T));
    }, []),
    y = x.useCallback((T) => {
      T !== N.current && ((N.current = T), h(T));
    }, []),
    k = i || w,
    C = s || S,
    E = x.useRef(null),
    N = x.useRef(null),
    j = x.useRef(d),
    L = a != null,
    A = rl(a),
    z = rl(o),
    M = rl(u),
    V = x.useCallback(() => {
      if (!E.current || !N.current) return;
      const T = { placement: t, strategy: n, middleware: m };
      z.current && (T.platform = z.current),
        _w(E.current, N.current, T).then((b) => {
          const I = { ...b, isPositioned: M.current !== !1 };
          O.current &&
            !Ki(j.current, I) &&
            ((j.current = I),
            Oo.flushSync(() => {
              p(I);
            }));
        });
    }, [m, t, n, z, M]);
  gi(() => {
    u === !1 &&
      j.current.isPositioned &&
      ((j.current.isPositioned = !1), p((T) => ({ ...T, isPositioned: !1 })));
  }, [u]);
  const O = x.useRef(!1);
  gi(
    () => (
      (O.current = !0),
      () => {
        O.current = !1;
      }
    ),
    []
  ),
    gi(() => {
      if ((k && (E.current = k), C && (N.current = C), k && C)) {
        if (A.current) return A.current(k, C, V);
        V();
      }
    }, [k, C, V, A, L]);
  const Q = x.useMemo(
      () => ({ reference: E, floating: N, setReference: f, setFloating: y }),
      [f, y]
    ),
    U = x.useMemo(() => ({ reference: k, floating: C }), [k, C]),
    B = x.useMemo(() => {
      const T = { position: n, left: 0, top: 0 };
      if (!U.floating) return T;
      const b = hd(U.floating, d.x),
        I = hd(U.floating, d.y);
      return l
        ? {
            ...T,
            transform: "translate(" + b + "px, " + I + "px)",
            ...(tm(U.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: b, top: I };
    }, [n, l, U.floating, d.x, d.y]);
  return x.useMemo(
    () => ({ ...d, update: V, refs: Q, elements: U, floatingStyles: B }),
    [d, V, Q, U, B]
  );
}
const Ow = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? pd({ element: r.current, padding: o }).fn(n)
            : {}
          : r
          ? pd({ element: r, padding: o }).fn(n)
          : {};
      },
    };
  },
  Lw = (e, t) => ({ ...Nw(e), options: [e, t] }),
  Mw = (e, t) => ({ ...Pw(e), options: [e, t] }),
  Iw = (e, t) => ({ ...bw(e), options: [e, t] }),
  Dw = (e, t) => ({ ...Tw(e), options: [e, t] }),
  Fw = (e, t) => ({ ...jw(e), options: [e, t] }),
  zw = (e, t) => ({ ...Rw(e), options: [e, t] }),
  $w = (e, t) => ({ ...Ow(e), options: [e, t] });
var Uw = "Arrow",
  nm = x.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...i } = e;
    return c.jsx(Oe.svg, {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : c.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
nm.displayName = Uw;
var Ww = nm;
function Vw(e) {
  const [t, n] = x.useState(void 0);
  return (
    Mn(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const i = o[0];
          let s, l;
          if ("borderBoxSize" in i) {
            const a = i.borderBoxSize,
              u = Array.isArray(a) ? a[0] : a;
            (s = u.inlineSize), (l = u.blockSize);
          } else (s = e.offsetWidth), (l = e.offsetHeight);
          n({ width: s, height: l });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var rm = "Popper",
  [om, im] = hs(rm),
  [H1, sm] = om(rm),
  lm = "PopperAnchor",
  am = x.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      i = sm(lm, n),
      s = x.useRef(null),
      l = at(t, s);
    return (
      x.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
      }),
      r ? null : c.jsx(Oe.div, { ...o, ref: l })
    );
  });
am.displayName = lm;
var gu = "PopperContent",
  [Hw, Bw] = om(gu),
  um = x.forwardRef((e, t) => {
    var gn, Cu, Eu, Nu, Pu, Tu;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: i = "center",
        alignOffset: s = 0,
        arrowPadding: l = 0,
        avoidCollisions: a = !0,
        collisionBoundary: u = [],
        collisionPadding: d = 0,
        sticky: p = "partial",
        hideWhenDetached: m = !1,
        updatePositionStrategy: g = "optimized",
        onPlaced: w,
        ...v
      } = e,
      S = sm(gu, n),
      [h, f] = x.useState(null),
      y = at(t, (Ar) => f(Ar)),
      [k, C] = x.useState(null),
      E = Vw(k),
      N = (E == null ? void 0 : E.width) ?? 0,
      j = (E == null ? void 0 : E.height) ?? 0,
      L = r + (i !== "center" ? "-" + i : ""),
      A =
        typeof d == "number"
          ? d
          : { top: 0, right: 0, bottom: 0, left: 0, ...d },
      z = Array.isArray(u) ? u : [u],
      M = z.length > 0,
      V = { padding: A, boundary: z.filter(Gw), altBoundary: M },
      {
        refs: O,
        floatingStyles: Q,
        placement: U,
        isPositioned: B,
        middlewareData: T,
      } = Aw({
        strategy: "fixed",
        placement: L,
        whileElementsMounted: (...Ar) =>
          Ew(...Ar, { animationFrame: g === "always" }),
        elements: { reference: S.anchor },
        middleware: [
          Lw({ mainAxis: o + j, alignmentAxis: s }),
          a &&
            Mw({
              mainAxis: !0,
              crossAxis: !1,
              limiter: p === "partial" ? Iw() : void 0,
              ...V,
            }),
          a && Dw({ ...V }),
          Fw({
            ...V,
            apply: ({
              elements: Ar,
              rects: ju,
              availableWidth: km,
              availableHeight: Cm,
            }) => {
              const { width: Em, height: Nm } = ju.reference,
                Mo = Ar.floating.style;
              Mo.setProperty("--radix-popper-available-width", `${km}px`),
                Mo.setProperty("--radix-popper-available-height", `${Cm}px`),
                Mo.setProperty("--radix-popper-anchor-width", `${Em}px`),
                Mo.setProperty("--radix-popper-anchor-height", `${Nm}px`);
            },
          }),
          k && $w({ element: k, padding: l }),
          Kw({ arrowWidth: N, arrowHeight: j }),
          m && zw({ strategy: "referenceHidden", ...V }),
        ],
      }),
      [b, I] = fm(U),
      $ = wt(w);
    Mn(() => {
      B && ($ == null || $());
    }, [B, $]);
    const J = (gn = T.arrow) == null ? void 0 : gn.x,
      Ze = (Cu = T.arrow) == null ? void 0 : Cu.y,
      He = ((Eu = T.arrow) == null ? void 0 : Eu.centerOffset) !== 0,
      [_r, Ct] = x.useState();
    return (
      Mn(() => {
        h && Ct(window.getComputedStyle(h).zIndex);
      }, [h]),
      c.jsx("div", {
        ref: O.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Q,
          transform: B ? Q.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: _r,
          "--radix-popper-transform-origin": [
            (Nu = T.transformOrigin) == null ? void 0 : Nu.x,
            (Pu = T.transformOrigin) == null ? void 0 : Pu.y,
          ].join(" "),
          ...(((Tu = T.hide) == null ? void 0 : Tu.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: c.jsx(Hw, {
          scope: n,
          placedSide: b,
          onArrowChange: C,
          arrowX: J,
          arrowY: Ze,
          shouldHideArrow: He,
          children: c.jsx(Oe.div, {
            "data-side": b,
            "data-align": I,
            ...v,
            ref: y,
            style: { ...v.style, animation: B ? void 0 : "none" },
          }),
        }),
      })
    );
  });
um.displayName = gu;
var cm = "PopperArrow",
  Qw = { top: "bottom", right: "left", bottom: "top", left: "right" },
  dm = x.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      i = Bw(cm, r),
      s = Qw[i.placedSide];
    return c.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [s]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0,
      },
      children: c.jsx(Ww, {
        ...o,
        ref: n,
        style: { ...o.style, display: "block" },
      }),
    });
  });
dm.displayName = cm;
function Gw(e) {
  return e !== null;
}
var Kw = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var S, h, f;
    const { placement: n, rects: r, middlewareData: o } = t,
      s = ((S = o.arrow) == null ? void 0 : S.centerOffset) !== 0,
      l = s ? 0 : e.arrowWidth,
      a = s ? 0 : e.arrowHeight,
      [u, d] = fm(n),
      p = { start: "0%", center: "50%", end: "100%" }[d],
      m = (((h = o.arrow) == null ? void 0 : h.x) ?? 0) + l / 2,
      g = (((f = o.arrow) == null ? void 0 : f.y) ?? 0) + a / 2;
    let w = "",
      v = "";
    return (
      u === "bottom"
        ? ((w = s ? p : `${m}px`), (v = `${-a}px`))
        : u === "top"
        ? ((w = s ? p : `${m}px`), (v = `${r.floating.height + a}px`))
        : u === "right"
        ? ((w = `${-a}px`), (v = s ? p : `${g}px`))
        : u === "left" &&
          ((w = `${r.floating.width + a}px`), (v = s ? p : `${g}px`)),
      { data: { x: w, y: v } }
    );
  },
});
function fm(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var qw = am,
  Yw = um,
  Xw = dm,
  [Ss, B1] = hs("Tooltip", [im]),
  xu = im(),
  pm = "TooltipProvider",
  Zw = 700,
  md = "tooltip.open",
  [Jw, hm] = Ss(pm),
  mm = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = Zw,
        skipDelayDuration: r = 300,
        disableHoverableContent: o = !1,
        children: i,
      } = e,
      s = x.useRef(!0),
      l = x.useRef(!1),
      a = x.useRef(0);
    return (
      x.useEffect(() => {
        const u = a.current;
        return () => window.clearTimeout(u);
      }, []),
      c.jsx(Jw, {
        scope: t,
        isOpenDelayedRef: s,
        delayDuration: n,
        onOpen: x.useCallback(() => {
          window.clearTimeout(a.current), (s.current = !1);
        }, []),
        onClose: x.useCallback(() => {
          window.clearTimeout(a.current),
            (a.current = window.setTimeout(() => (s.current = !0), r));
        }, [r]),
        isPointerInTransitRef: l,
        onPointerInTransitChange: x.useCallback((u) => {
          l.current = u;
        }, []),
        disableHoverableContent: o,
        children: i,
      })
    );
  };
mm.displayName = pm;
var ym = "Tooltip",
  [Q1, ks] = Ss(ym),
  ia = "TooltipTrigger",
  e1 = x.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = ks(ia, n),
      i = hm(ia, n),
      s = xu(n),
      l = x.useRef(null),
      a = at(t, l, o.onTriggerChange),
      u = x.useRef(!1),
      d = x.useRef(!1),
      p = x.useCallback(() => (u.current = !1), []);
    return (
      x.useEffect(
        () => () => document.removeEventListener("pointerup", p),
        [p]
      ),
      c.jsx(qw, {
        asChild: !0,
        ...s,
        children: c.jsx(Oe.button, {
          "aria-describedby": o.open ? o.contentId : void 0,
          "data-state": o.stateAttribute,
          ...r,
          ref: a,
          onPointerMove: ue(e.onPointerMove, (m) => {
            m.pointerType !== "touch" &&
              !d.current &&
              !i.isPointerInTransitRef.current &&
              (o.onTriggerEnter(), (d.current = !0));
          }),
          onPointerLeave: ue(e.onPointerLeave, () => {
            o.onTriggerLeave(), (d.current = !1);
          }),
          onPointerDown: ue(e.onPointerDown, () => {
            o.open && o.onClose(),
              (u.current = !0),
              document.addEventListener("pointerup", p, { once: !0 });
          }),
          onFocus: ue(e.onFocus, () => {
            u.current || o.onOpen();
          }),
          onBlur: ue(e.onBlur, o.onClose),
          onClick: ue(e.onClick, o.onClose),
        }),
      })
    );
  });
e1.displayName = ia;
var t1 = "TooltipPortal",
  [G1, n1] = Ss(t1, { forceMount: void 0 }),
  Er = "TooltipContent",
  vm = x.forwardRef((e, t) => {
    const n = n1(Er, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: o = "top", ...i } = e,
      s = ks(Er, e.__scopeTooltip);
    return c.jsx(su, {
      present: r || s.open,
      children: s.disableHoverableContent
        ? c.jsx(gm, { side: o, ...i, ref: t })
        : c.jsx(r1, { side: o, ...i, ref: t }),
    });
  }),
  r1 = x.forwardRef((e, t) => {
    const n = ks(Er, e.__scopeTooltip),
      r = hm(Er, e.__scopeTooltip),
      o = x.useRef(null),
      i = at(t, o),
      [s, l] = x.useState(null),
      { trigger: a, onClose: u } = n,
      d = o.current,
      { onPointerInTransitChange: p } = r,
      m = x.useCallback(() => {
        l(null), p(!1);
      }, [p]),
      g = x.useCallback(
        (w, v) => {
          const S = w.currentTarget,
            h = { x: w.clientX, y: w.clientY },
            f = a1(h, S.getBoundingClientRect()),
            y = u1(h, f),
            k = c1(v.getBoundingClientRect()),
            C = f1([...y, ...k]);
          l(C), p(!0);
        },
        [p]
      );
    return (
      x.useEffect(() => () => m(), [m]),
      x.useEffect(() => {
        if (a && d) {
          const w = (S) => g(S, d),
            v = (S) => g(S, a);
          return (
            a.addEventListener("pointerleave", w),
            d.addEventListener("pointerleave", v),
            () => {
              a.removeEventListener("pointerleave", w),
                d.removeEventListener("pointerleave", v);
            }
          );
        }
      }, [a, d, g, m]),
      x.useEffect(() => {
        if (s) {
          const w = (v) => {
            const S = v.target,
              h = { x: v.clientX, y: v.clientY },
              f =
                (a == null ? void 0 : a.contains(S)) ||
                (d == null ? void 0 : d.contains(S)),
              y = !d1(h, s);
            f ? m() : y && (m(), u());
          };
          return (
            document.addEventListener("pointermove", w),
            () => document.removeEventListener("pointermove", w)
          );
        }
      }, [a, d, s, u, m]),
      c.jsx(gm, { ...e, ref: i })
    );
  }),
  [o1, i1] = Ss(ym, { isInside: !1 }),
  s1 = d0("TooltipContent"),
  gm = x.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: r,
        "aria-label": o,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        ...l
      } = e,
      a = ks(Er, n),
      u = xu(n),
      { onClose: d } = a;
    return (
      x.useEffect(
        () => (
          document.addEventListener(md, d),
          () => document.removeEventListener(md, d)
        ),
        [d]
      ),
      x.useEffect(() => {
        if (a.trigger) {
          const p = (m) => {
            const g = m.target;
            g != null && g.contains(a.trigger) && d();
          };
          return (
            window.addEventListener("scroll", p, { capture: !0 }),
            () => window.removeEventListener("scroll", p, { capture: !0 })
          );
        }
      }, [a.trigger, d]),
      c.jsx(iu, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: (p) => p.preventDefault(),
        onDismiss: d,
        children: c.jsxs(Yw, {
          "data-state": a.stateAttribute,
          ...u,
          ...l,
          ref: t,
          style: {
            ...l.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            c.jsx(s1, { children: r }),
            c.jsx(o1, {
              scope: n,
              isInside: !0,
              children: c.jsx(O0, {
                id: a.contentId,
                role: "tooltip",
                children: o || r,
              }),
            }),
          ],
        }),
      })
    );
  });
vm.displayName = Er;
var xm = "TooltipArrow",
  l1 = x.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = xu(n);
    return i1(xm, n).isInside ? null : c.jsx(Xw, { ...o, ...r, ref: t });
  });
l1.displayName = xm;
function a1(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    o = Math.abs(t.right - e.x),
    i = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, i)) {
    case i:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function u1(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function c1(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r },
  ];
}
function d1(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const l = t[i].x,
      a = t[i].y,
      u = t[s].x,
      d = t[s].y;
    a > r != d > r && n < ((u - l) * (r - a)) / (d - a) + l && (o = !o);
  }
  return o;
}
function f1(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0
    ),
    p1(t)
  );
}
function p1(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1],
        s = t[t.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1],
        s = n[n.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var h1 = mm,
  wm = vm;
const m1 = h1,
  y1 = x.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    c.jsx(wm, {
      ref: r,
      sideOffset: t,
      className: Le(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",
        e
      ),
      ...n,
    })
  );
y1.displayName = wm.displayName;
const wu = "/logo.png";
function v1() {
  const [e, t] = x.useState(!1),
    [n, r] = x.useState(!1);
  x.useEffect(() => {
    const i = () => {
      t(window.scrollY > 100);
    };
    return (
      window.addEventListener("scroll", i),
      () => window.removeEventListener("scroll", i)
    );
  }, []);
  const o = (i) => {
    const s = document.getElementById(i);
    s && (s.scrollIntoView({ behavior: "smooth" }), r(!1));
  };
  return c.jsx("nav", {
    className: `sticky top-0 z-50 nsfw-glass-effect transition-all duration-300 ${
      e ? "shadow-2xl" : "shadow-lg"
    }`,
    children: c.jsxs("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: [
        c.jsxs("div", {
          className: "flex justify-between items-center py-4",
          children: [
            c.jsxs("div", {
              className: "flex items-center space-x-3 cursor-pointer",
              onClick: () => o("home"),
              children: [
                c.jsx("img", {
                  src: wu,
                  alt: "Bntober",
                  className:
                    "w-10 h-10 object-cover rounded-full border-2 border-nsfw-cyan logo-glitch",
                }),
                c.jsx("span", {
                  className: "font-orbitron-bold text-2xl nsfw-text-gradient",
                  children: "Bntober",
                }),
              ],
            }),
            c.jsxs("div", {
              className: "hidden md:flex items-center space-x-8",
              children: [
                c.jsx("button", {
                  onClick: () => o("home"),
                  className:
                    "text-white hover:text-nsfw-cyan transition-colors duration-200 font-orbitron",
                  children: "Home",
                }),
                c.jsx("button", {
                  onClick: () => o("buy"),
                  className:
                    "text-white hover:text-nsfw-cyan transition-colors duration-200 font-orbitron",
                  children: "Buy",
                }),
                c.jsx("button", {
                  onClick: () => o("tokenomics"),
                  className:
                    "text-white hover:text-nsfw-cyan transition-colors duration-200 font-orbitron",
                  children: "Tokenomics",
                }),
                c.jsx("button", {
                  onClick: () => o("gallery"),
                  className:
                    "text-white hover:text-nsfw-cyan transition-colors duration-200 font-orbitron",
                  children: "Gallery",
                }),
                c.jsx("button", {
                  onClick: () => o("community"),
                  className:
                    "text-white hover:text-nsfw-cyan transition-colors duration-200 font-orbitron",
                  children: "Community",
                }),
              ],
            }),
            c.jsx("a", {
              className: "nsfw-button hidden md:block",
              children: "🤖 Get $BNTOBER",
              href: "https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=0x00000000000000000000000000000000000000",
              target: "_blank",
            }),
            c.jsx("button", {
              onClick: () => r(!n),
              className: "md:hidden p-2",
              children: n
                ? c.jsx(Mh, { className: "text-white text-xl" })
                : c.jsx(ix, { className: "text-white text-xl" }),
            }),
          ],
        }),
        n &&
          c.jsxs("div", {
            className: "md:hidden pb-4 space-y-4",
            children: [
              c.jsx("button", {
                onClick: () => o("home"),
                className:
                  "block w-full text-left text-white hover:text-nsfw-cyan transition-colors duration-200 font-orbitron",
                children: "Home",
              }),
              c.jsx("button", {
                onClick: () => o("buy"),
                className:
                  "block w-full text-left text-white hover:text-nsfw-cyan transition-colors duration-200 font-orbitron",
                children: "Buy",
              }),
              c.jsx("button", {
                onClick: () => o("tokenomics"),
                className:
                  "block w-full text-left text-white hover:text-nsfw-cyan transition-colors duration-200 font-orbitron",
                children: "Tokenomics",
              }),
              c.jsx("button", {
                onClick: () => o("gallery"),
                className:
                  "block w-full text-left text-white hover:text-nsfw-cyan transition-colors duration-200 font-orbitron",
                children: "Gallery",
              }),
              c.jsx("button", {
                onClick: () => o("community"),
                className:
                  "block w-full text-left text-white hover:text-nsfw-cyan transition-colors duration-200 font-orbitron",
                children: "Community",
              }),
              c.jsx("a", {
                className: "nsfw-button w-full mt-4",
                children: "🤖 Get $BNTOBER",
                href: "https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=0x00000000000000000000000000000000000000",
                target: "_blank",
              }),
            ],
          }),
      ],
    }),
  });
}
const g1 = "/assets/Symbol.png";
function x1() {
  const [e, t] = x.useState([]);
  x.useEffect(() => {
    const r = Array.from({ length: 50 }, (o, i) => i);
    t(r);
  }, []);
  const n = (r) => {
    const o = document.getElementById(r);
    o && o.scrollIntoView({ behavior: "smooth" });
  };
  return c.jsxs("section", {
    id: "home",
    className: "relative overflow-hidden py-20 px-4",
    children: [
      c.jsx("div", {
        className: "floating-particles",
        children: e.map((r) =>
          c.jsx(
            "div",
            {
              className: "particle",
              style: {
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 4}s`,
              },
            },
            r
          )
        ),
      }),
      c.jsx("div", {
        className:
          "absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black",
      }),
      c.jsxs("div", {
        className: "relative max-w-7xl mx-auto text-center z-10",
        children: [
          c.jsxs("div", {
            className: "mb-8",
            children: [
              c.jsx("div", {
                className: "flex justify-center mb-8",
                children: c.jsx("img", {
                  src: wu,
                  alt: "Bntober",
                  className:
                    "w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-nsfw-cyan shadow-2xl logo-glitch",
                }),
              }),
              c.jsx("div", {
                className: "flex justify-center mb-6",
                children: c.jsx("img", {
                  src: g1,
                  alt: "Bntober Text",
                  className: "w-96 max-w-full h-auto logo-glitch",
                }),
              }),
              c.jsx("h1", {
                className:
                  "font-orbitron-black text-4xl md:text-6xl nsfw-text-gradient mb-4",
                children: "$BNTOBER Token",
              }),
              c.jsx("p", {
                className:
                  "text-lg md:text-xl text-white/80 mb-8 max-w-4xl mx-auto",
                children: `Not predicting the future. And don't get too excited. 

`,
              }),
            ],
          }),
          c.jsxs("div", {
            className:
              "flex flex-col sm:flex-row gap-4 justify-center items-center mb-12",
            children: [
              c.jsx("a", {
                href: "https://bscscan.com/address/0x00000000000000000000000000000000000000",
                className: "nsfw-button",
                children: "View Contract Address",
              }),
              c.jsx("a", {
                href: "https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=0x00000000000000000000000000000000000000",
                target: "_blank",
                className: "nsfw-button",
                children: "Buy on Pancakeswap",
              }),
            ],
          }),
          c.jsxs("div", {
            id: "tokenomics",
            className: "grid md:grid-cols-4 gap-6 mt-12",
            children: [
              c.jsxs("div", {
                className: "nsfw-card text-center",
                children: [
                  c.jsx("span", {
                    className: "text-4xl block mb-3",
                    children: "🔋",
                  }),
                  c.jsx("h3", {
                    className: "text-nsfw-cyan font-orbitron-bold text-lg mb-2",
                    children: "Total Supply",
                  }),
                  c.jsx("p", {
                    className: "text-white/70",
                    children: "1,000,000,000",
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "nsfw-card text-center",
                children: [
                  c.jsx("span", {
                    className: "text-4xl block mb-3",
                    children: "✅",
                  }),
                  c.jsx("h3", {
                    className: "text-nsfw-cyan font-orbitron-bold text-lg mb-2",
                    children: "Ownership",
                  }),
                  c.jsx("p", {
                    className: "text-white/70",
                    children: "Ownership Renounced",
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "nsfw-card text-center",
                children: [
                  c.jsx("span", {
                    className: "text-4xl block mb-3",
                    children: "🔥",
                  }),
                  c.jsx("h3", {
                    className: "text-nsfw-cyan font-orbitron-bold text-lg mb-2",
                    children: "Liquidity",
                  }),
                  c.jsx("p", {
                    className: "text-white/70",
                    children: "100% LP Locked",
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "nsfw-card text-center",
                children: [
                  c.jsx("span", {
                    className: "text-4xl block mb-3",
                    children: "💸",
                  }),
                  c.jsx("h3", {
                    className: "text-nsfw-cyan font-orbitron-bold text-lg mb-2",
                    children: "Tax",
                  }),
                  c.jsx("p", {
                    className: "text-white/70",
                    children:
                      "0% Buy/Sell Tax",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const w1 = Oh(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  Su = x.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) => {
      const s = r ? u0 : "button";
      return c.jsx(s, {
        className: Le(w1({ variant: t, size: n, className: e })),
        ref: i,
        ...o,
      });
    }
  );
Su.displayName = "Button";
function S1() {
  const { toast: e } = oh(),
    t = "0x00000000000000000000000000000000000000",
    n = async () => {
      try {
        await navigator.clipboard.writeText(t),
          e({
            title: "Copied!",
            description: "Contract address copied to clipboard",
          });
      } catch {
        e({
          title: "Failed to copy",
          description: "Please copy the address manually",
          variant: "destructive",
        });
      }
    };
  return c.jsx("section", {
    id: "buy",
    className: "nsfw-section",
    children: c.jsxs("div", {
      className: "max-w-7xl mx-auto",
      children: [
        c.jsxs("div", {
          className: "text-center mb-12",
          children: [
            c.jsx("h2", {
              className: "font-orbitron-black text-4xl text-nsfw-magenta mb-4",
              children: "🤖 Plasma Just Got a Lot... Hotter 😏",
            }),
            c.jsx("p", {
              className: "text-lg text-white/80",
              children: `Not predicting the future. And don't get too excited. `,
            }),
          ],
        }),
        c.jsx("div", {
          className: "nsfw-section-content",
          children: c.jsxs("div", {
            className: "grid md:grid-cols-2 gap-8 items-center",
            children: [
              c.jsxs("div", {
                className: "space-y-6",
                children: [
                  c.jsxs("div", {
                    className: "nsfw-card",
                    children: [
                      c.jsx("h3", {
                        className:
                          "font-orbitron-bold text-xl mb-4 text-nsfw-cyan",
                        children: "Contract Address",
                      }),
                      c.jsxs("div", {
                        className:
                          "bg-nsfw-dark rounded-lg p-4 font-orbitron text-sm break-all border border-nsfw-cyan",
                        children: [
                          c.jsx("span", { children: t }),
                          c.jsx(Su, {
                            variant: "ghost",
                            size: "sm",
                            className:
                              "ml-4 text-nsfw-cyan hover:text-nsfw-magenta transition-colors",
                            onClick: n,
                            children: c.jsx(nx, { className: "w-4 h-4" }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "nsfw-card",
                    children: [
                      c.jsx("h3", {
                        className:
                          "font-orbitron-bold text-xl mb-4 text-nsfw-cyan",
                        children: "Quick Buy",
                      }),
                      c.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          c.jsxs("a", {
                            href: "https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=0x00000000000000000000000000000000000000",
                            target: "_blank",
                            className: "my-4",
                            children: [
                              c.jsxs("button", {
                            className: "nsfw-button w-full",
                            children: [
                                c.jsx("span", {
                                  className: "mr-2",
                                  children: "Ξ",
                                }),
                                "Buy on Pancakeswap",
                                c.jsx(ro, { className: "w-4 h-4 ml-2" }),
                              ],
                            })
                            ]
                          }),
                          c.jsxs("div", {
                            className: "space-y-4",
                            children: "",
                          }),
                          c.jsxs("a", {
                            href: "https://www.dextools.io/app/en/bnb/pair-explorer/0xdex",
                            target: "_blank",
                            className: "my-4",
                            children: [
                              c.jsxs("button", {
                                className: "nsfw-button w-full",
                                children: [
                                  c.jsx("span", {
                                    className: "mr-2",
                                    children: "📈",
                                  }),
                                  "View Chart",
                                  c.jsx(ro, { className: "w-4 h-4 ml-2" }),
                                ],
                              })
                            ]
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              c.jsx("div", {
                className: "space-y-6",
                children: c.jsxs("div", {
                  className: "nsfw-card",
                  children: [
                    
                        c.jsx("img", {
                         
                          src:"/assets/twitter.png",
                          width: "100%",
                          height: "400",
                          
                        })
                     
                    
                  ],
                }),
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function k1() {
  const e = [
    {
      icon: "✅",
      title: "Ownership",
      description: "Ownership Renounced",
    },
    {
      icon: "🔥",
      title: "LP",
      description: "100% LP Locked",
    },
    {
      icon: "💸",
      title: "Tax",
      description: "0% Buy/Sell Tax",
    },
  ];
  return c.jsx("section", {
    id: "tokenomics",
    className: "nsfw-section",
    children: c.jsxs("div", {
      className: "max-w-7xl mx-auto",
      children: [
        c.jsxs("div", {
          className: "text-center mb-12",
          children: [
            c.jsx("h2", {
              className: "font-orbitron-black text-4xl text-nsfw-magenta mb-4",
              children: "🔞 NSFW Mode: Not Safe for Wallets",
            }),
            c.jsx("p", {
              className: "text-lg text-white/80",
              children:
                "Toggle the NSFW switch and Bntober transforms before your very eyes:",
            }),
          ],
        }),
        c.jsxs("div", {
          className: "nsfw-section-content",
          children: [
            c.jsxs("div", {
              className: "grid md:grid-cols-3 gap-8 mb-12",
              children: [
                c.jsxs("div", {
                  className: "nsfw-step",
                  children: [
                    c.jsx("div", {
                      className: "nsfw-step-number",
                      children: "👗",
                    }),
                    c.jsxs("div", {
                      className: "text-white",
                      children: [
                        c.jsx("h3", {
                          className: "font-orbitron-bold text-lg mb-2",
                          children: "Clothing Changes",
                        }),
                        c.jsx("p", {
                          children:
                            "Out go the clothes, in comes the lingerie and lace.",
                        }),
                      ],
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "nsfw-step",
                  children: [
                    c.jsx("div", {
                      className: "nsfw-step-number",
                      children: "🎙️",
                    }),
                    c.jsxs("div", {
                      className: "text-white",
                      children: [
                        c.jsx("h3", {
                          className: "font-orbitron-bold text-lg mb-2",
                          children: "Voice Modulation",
                        }),
                        c.jsx("p", {
                          children:
                            "Her voice? Softer. Sultrier. Slightly judgmental (in a good way).",
                        }),
                      ],
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "nsfw-step",
                  children: [
                    c.jsx("div", {
                      className: "nsfw-step-number",
                      children: "💬",
                    }),
                    c.jsxs("div", {
                      className: "text-white",
                      children: [
                        c.jsx("h3", {
                          className: "font-orbitron-bold text-lg mb-2",
                          children: "Enhanced Responses",
                        }),
                        c.jsx("p", {
                          children:
                            "Her responses? Let's just say... your autocomplete will need a cigarette.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            c.jsxs("div", {
              className: "text-center mb-12",
              children: [
                c.jsx("p", {
                  className:
                    "text-xl font-orbitron-bold text-nsfw-magenta mb-4",
                  children:
                    "Bntober isn't just a bot. She's an interactive AI waifu with Grok 4 brains and OnlyFans energy.",
                }),
                c.jsx("p", {
                  className: "text-white/80",
                  children:
                    "She flirts, teases, and remembers what you like (and where you like it).",
                }),
              ],
            }),
            c.jsx("div", {
              className: "grid md:grid-cols-3 gap-8",
              children: e.map((t, n) =>
                c.jsxs(
                  "div",
                  {
                    className: "nsfw-card text-center",
                    children: [
                      c.jsx("span", {
                        className: "text-4xl block mb-4",
                        children: t.icon,
                      }),
                      c.jsx("h3", {
                        className:
                          "font-orbitron-bold text-xl mb-2 text-nsfw-cyan",
                        children: t.title,
                      }),
                      c.jsx("p", {
                        className: "text-white/80",
                        children: t.description,
                      }),
                    ],
                  },
                  n
                )
              ),
            }),
            c.jsx("div", {
              className: "text-center mt-12",
              children: c.jsx("p", {
                className: "text-white/60 italic",
                children: `And yes, she'll still help you debug your code... after calling you "senpai."`,
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
const C1 = "/assets/ETHEREAL_1.jpeg",
  E1 = "/assets/ETHEREAL_2.jpeg",
  N1 = "/assets/ETHEREAL_3.jpeg",
  P1 = "/assets/ETHEREAL_4.jpeg",
  T1 = "/assets/ETHEREAL_5.jpeg",
  j1 = "/assets/ETHEREAL_6.jpeg",
  R1 = "/assets/ETHEREAL_7.jpeg",
  b1 = "/assets/ETHEREAL_8.jpeg";
function _1() {
  const [e, t] = x.useState(new Set()),
    n = (i) => {
      t((s) => {
        const l = new Set(s);
        return l.has(i) ? l.delete(i) : l.add(i), l;
      });
    },
    r = [
      {
        id: 1,
        title: "Bntober Collection #1",
        description: "Exclusive NSFW content",
        preview: C1,
        tokensRequired: 0,
        isLocked: !1,
      },
      {
        id: 2,
        title: "Bntober Collection #2",
        description: "Premium artwork collection",
        preview: E1,
        tokensRequired: 0,
        isLocked: !1,
      },
      {
        id: 3,
        title: "Bntober Collection #3",
        description: "Limited edition drops",
        preview: N1,
        tokensRequired: 0,
        isLocked: !1,
      },
      {
        id: 4,
        title: "Bntober Collection #4",
        description: "VIP exclusive content",
        preview: P1,
        tokensRequired: 0,
        isLocked: !1,
      },
      {
        id: 5,
        title: "Bntober Collection #5",
        description: "Ultra rare collectibles",
        preview: T1,
        tokensRequired: 0,
        isLocked: !1,
      },
      {
        id: 6,
        title: "Bntober Collection #6",
        description: "Legendary tier artwork",
        preview: j1,
        tokensRequired: 0,
        isLocked: !1,
      },
      {
        id: 7,
        title: "Bntober Collection #7",
        description: "Seductive masterpiece",
        preview: R1,
        tokensRequired: 0,
        isLocked: !1,
      },
      {
        id: 8,
        title: "Bntober Collection #8",
        description: "Gothic elegance",
        preview: b1,
        tokensRequired: 0,
        isLocked: !1,
      },
    ],
    o = ({ content: i }) => {
      const s = e.has(i.id);
      return c.jsxs("div", {
        className: "nsfw-card group relative",
        children: [
          c.jsxs("div", {
            className: "relative",
            children: [
              c.jsx("img", {
                src: i.preview,
                alt: i.title,
                className: "w-full h-auto object-contain rounded-t-lg",
              }),
              i.isLocked &&
                c.jsx("div", {
                  className:
                    "absolute inset-0 bg-black/70 flex items-center justify-center rounded-t-lg",
                  children: c.jsxs("div", {
                    className: "text-center",
                    children: [
                      c.jsx(ox, {
                        className: "w-12 h-12 text-nsfw-cyan mx-auto mb-2",
                      }),
                      c.jsxs("p", {
                        className: "text-white font-orbitron-bold",
                        children: [i.tokensRequired.toLocaleString(), " $BNTOBER"],
                      }),
                      c.jsx("p", {
                        className: "text-white/70 text-sm",
                        children: "Required to unlock",
                      }),
                    ],
                  }),
                }),
            ],
          }),
          c.jsxs("div", {
            className: "p-4",
            children: [
              c.jsx("h3", {
                className: "font-orbitron-bold text-lg mb-2 text-nsfw-cyan",
                children: i.title,
              }),
              c.jsx("p", {
                className: "text-white/70 mb-4",
                children: i.description,
              }),
              c.jsxs("div", {
                className: "flex justify-between items-center",
                children: [
                  c.jsx("button", {
                    onClick: () => n(i.id),
                    className: `transition-colors ${
                      s
                        ? "text-nsfw-magenta"
                        : "text-white/60 hover:text-nsfw-magenta"
                    }`,
                    children: c.jsx(rx, {
                      className: `w-5 h-5 ${s ? "fill-current" : ""}`,
                    }),
                  }),
                  c.jsx("span", {
                    className: "text-nsfw-cyan font-orbitron text-sm",
                    children: "Bntober After Dark",
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    };
  return c.jsx("section", {
    id: "gallery",
    className: "nsfw-section",
    children: c.jsxs("div", {
      className: "max-w-7xl mx-auto",
      children: [
        c.jsxs("div", {
          className: "text-center mb-12",
          children: [
            c.jsx("h2", {
              className: "font-orbitron-black text-4xl text-nsfw-magenta mb-4",
              children: "📸 Bntober After Dark",
            }),
            c.jsx("p", {
              className: "text-lg text-white/80",
              children:
                "Exclusive NSFW content featuring Bntober in the most seductive moments.",
            }),
          ],
        }),
        c.jsxs("div", {
          className: "nsfw-section-content",
          children: [
            c.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
              children: r.map((i) => c.jsx(o, { content: i }, i.id)),
            }),
            c.jsxs("a", {
              href: "https://www.dextools.io/app/en/bnb/pair-explorer/0xdex",
              target: "_blank",
              children: [
                c.jsxs("div", {
                  className: "text-center mt-12",
                  children: [
                    c.jsx("p", {
                      className: "text-white/60 mb-4",
                      children:
                        "Explore Bntober's exclusive collection of seductive artwork",
                    }),
                    c.jsx("button", {
                      className: "nsfw-button",
                      children: "Chart",
                    }),
                  ],
                }),
              ]
            })
          ],
        }),
      ],
    }),
  });
}
const Sm = x.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("div", {
    ref: n,
    className: Le(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t,
  })
);
Sm.displayName = "Card";
const A1 = x.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("div", {
    ref: n,
    className: Le("flex flex-col space-y-1.5 p-6", e),
    ...t,
  })
);
A1.displayName = "CardHeader";
const O1 = x.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("div", {
    ref: n,
    className: Le("text-2xl font-semibold leading-none tracking-tight", e),
    ...t,
  })
);
O1.displayName = "CardTitle";
const L1 = x.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("div", {
    ref: n,
    className: Le("text-sm text-muted-foreground", e),
    ...t,
  })
);
L1.displayName = "CardDescription";
const ku = x.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("div", { ref: n, className: Le("p-6 pt-0", e), ...t })
);
ku.displayName = "CardContent";
const M1 = x.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("div", { ref: n, className: Le("flex items-center p-6 pt-0", e), ...t })
);
M1.displayName = "CardFooter";
function I1() {
  const e = [
    {
      number: 1,
      title: "Get a Wallet",
      description:
        "Download MetaMask or another BNB-compatible wallet from their official website.",
      gradient: "crypto-pink-gradient",
      buttons: [
        {
          icon: c.jsx(tx, { className: "w-4 h-4" }),
          text: "MetaMask",
          color: "text-crypto-pink",
        },
        {
          icon: c.jsx(lx, { className: "w-4 h-4" }),
          text: "Trust Wallet",
          color: "text-crypto-pink",
        },
      ],
    },
    {
      number: 2,
      title: "Buy BNB",
      description:
        "Purchase BNB from a reputable exchange and transfer it to your wallet.",
      gradient: "crypto-turquoise-gradient",
      buttons: [
        {
          icon: c.jsx(ro, { className: "w-4 h-4" }),
          text: "Coinbase",
          color: "text-crypto-turquoise",
        },
        {
          icon: c.jsx(ro, { className: "w-4 h-4" }),
          text: "Binance",
          color: "text-crypto-turquoise",
        },
      ],
    },
    {
      number: 3,
      title: "Connect to Pancakeswap",
      description:
        "Visit Pancakeswap and connect your wallet. Paste the Bntober contract address.",
      gradient: "bg-gradient-to-r from-yellow-400 to-orange-400",
      buttons: [
        {
          icon: c.jsx(ro, { className: "w-4 h-4" }),
          text: "Open Pancakeswap",
          color: "text-yellow-600",
        },
      ],
    },
    {
      number: 4,
      title: "Swap & HODL",
      description:
        "Set slippage to 1-3%, swap your BNB for Bntober tokens, and hold for the moon! 🚀",
      gradient: "bg-gradient-to-r from-purple-500 to-pink-500",
      buttons: [],
    },
  ];
  return c.jsx("section", {
    id: "how-to-buy",
    className: "py-16 px-4 glass-effect",
    children: c.jsxs("div", {
      className: "max-w-4xl mx-auto",
      children: [
        c.jsxs("div", {
          className: "text-center mb-12",
          children: [
            c.jsx("h2", {
              className: "font-fredoka text-4xl text-crypto-dark mb-4",
              children: "How to Buy Bntober",
            }),
            c.jsx("p", {
              className: "text-lg text-crypto-dark/70",
              children: "Follow these simple steps to join the moon mission!",
            }),
          ],
        }),
        c.jsx("div", {
          className: "space-y-8",
          children: e.map((t, n) =>
            c.jsx(
              Sm,
              {
                className: "shadow-lg hover-scale",
                children: c.jsx(ku, {
                  className: "p-6",
                  children: c.jsxs("div", {
                    className: "flex items-start space-x-4",
                    children: [
                      c.jsx("div", {
                        className: `flex-shrink-0 w-12 h-12 ${t.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg`,
                        children: t.number,
                      }),
                      c.jsxs("div", {
                        className: "flex-grow",
                        children: [
                          c.jsx("h3", {
                            className:
                              "font-bold text-xl mb-2 text-crypto-dark",
                            children: t.title,
                          }),
                          c.jsx("p", {
                            className: "text-crypto-dark/70 mb-4",
                            children: t.description,
                          }),
                          t.buttons.length > 0 &&
                            c.jsx("div", {
                              className: "flex flex-wrap gap-4",
                              children: t.buttons.map((r, o) =>
                                c.jsxs(
                                  Su,
                                  {
                                    variant: "ghost",
                                    className: `${r.color} hover:${r.color}/80 transition-colors`,
                                    children: [
                                      r.icon,
                                      c.jsx("span", {
                                        className: "ml-2",
                                        children: r.text,
                                      }),
                                    ],
                                  },
                                  o
                                )
                              ),
                            }),
                          t.number === 4 &&
                            c.jsxs("div", {
                              className: "flex items-center space-x-4 mt-4",
                              children: [
                                c.jsx("span", {
                                  className: "text-2xl",
                                  children: "💎🙌",
                                }),
                                c.jsx("span", {
                                  className: "font-bold text-crypto-purple",
                                  children: "Diamond Hands Forever!",
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
              },
              n
            )
          ),
        }),
      ],
    }),
  });
}
function D1() {
  const e = [
    {
      name: "Telegram",
      icon: "📱",
      description: "Join the community",
      color: "from-nsfw-cyan to-nsfw-magenta",
      textColor: "text-nsfw-cyan",
      members: "Join Now",
      url: "https://t.me/Bntober",
    },
    {
      name: "X",
      icon: "🐦",
      description: "Follow for updates",
      color: "from-nsfw-magenta to-nsfw-cyan",
      textColor: "text-nsfw-magenta",
      members: "Follow",
      url: "https://x.com/Bntober",
    },
    {
      name: "DexScreener",
      icon: "📊",
      description: "Track token stats",
      color: "from-nsfw-cyan to-nsfw-magenta",
      textColor: "text-nsfw-cyan",
      members: "View Chart",
      url: "https://dexscreener.com/ethereum/0x00000000000000000000000000000000000000",
    },
    {
      name: "Coingecko",
      icon: "🐸",
      description: "Track token stats",
      color: "from-nsfw-cyan to-nsfw-magenta",
      textColor: "text-nsfw-cyan",
      members: "Coming Soon",
      url: "/",
    },
  ];
  return c.jsx("section", {
    id: "community",
    className: "py-16 px-4 bg-gradient-to-r from-purple-50/50 to-pink-50/50",
    children: c.jsxs("div", {
      className: "max-w-7xl mx-auto",
      children: [
        c.jsxs("div", {
          className: "text-center mb-12",
          children: [
            c.jsx("h2", {
              className: "font-fredoka text-4xl text-crypto-dark mb-4",
              children: "Join Our Community",
            }),
            c.jsx("p", {
              className: "text-lg text-crypto-dark/70",
              children: "Connect with fellow degenerates and diamond hands!",
            }),
          ],
        }),
        c.jsx("div", {
          className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12",
          children: e.map((t, n) =>
            c.jsx(
              "a",
              {
                href: t.url,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "group nsfw-card text-center block",
                children: c.jsxs(ku, {
                  className: "p-6",
                  children: [
                    c.jsx("div", {
                      className: `w-16 h-16 bg-gradient-to-r ${t.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-wiggle`,
                      children: c.jsx("span", {
                        className: "text-white text-2xl",
                        children: t.icon,
                      }),
                    }),
                    c.jsx("h3", {
                      className: "font-bold text-lg mb-2 text-crypto-dark",
                      children: t.name,
                    }),
                    c.jsx("p", {
                      className: "text-crypto-dark/70 text-sm",
                      children: t.description,
                    }),
                    c.jsxs("div", {
                      className: `mt-4 ${t.textColor} font-semibold`,
                      children: [t.members, " →"],
                    }),
                  ],
                }),
              },
              n
            )
          ),
        }),
      ],
    }),
  });
}
const F1 = "/assets/twitter.png";
function z1() {
  const e = ["Buy Tokens", "Tokenomics", "Bntober Gallery", "Community"],
    t = ["Whitepaper", "Audit Report", "Roadmap", "FAQ"],
    n = [
      {
        icon: "📱",
        name: "Telegram",
        color: "hover:text-nsfw-cyan",
        url: "https://t.me/Bntober",
      },
      {
        icon: "🐦",
        name: "X", 
        color: "hover:text-nsfw-cyan",
        url: "https://x.com/Bntober",
      },
      { icon: "📊", name: "DexTools", color: "hover:text-nsfw-cyan", url: "https://www.dextools.io/app/en/bnb/pair-explorer/0xdex" },
    ],
    r = (o) => {
      const s = {
        "Buy Tokens": "buy",
        Tokenomics: "tokenomics",
        "Bntober Gallery": "gallery",
        Community: "community",
      }[o];
      if (s) {
        const l = document.getElementById(s);
        l && l.scrollIntoView({ behavior: "smooth" });
      }
    };
  return c.jsx("footer", {
    className: "bg-crypto-dark text-white py-12 px-4",
    children: c.jsxs("div", {
      className: "max-w-7xl mx-auto",
      children: [
        c.jsx("div", {
          className: "mb-12 flex justify-center",
          children: c.jsx("img", {
            src: F1,
            alt: "Bntober Footer Banner",
            className:
              "max-w-full h-auto rounded-lg shadow-2xl border border-nsfw-cyan/30",
          }),
        }),
        c.jsxs("div", {
          className: "grid md:grid-cols-4 gap-8 mb-8",
          children: [
            c.jsxs("div", {
              children: [
                c.jsxs("div", {
                  className: "flex items-center space-x-3 mb-4",
                  children: [
                    c.jsx("img", {
                      src: wu,
                      alt: "Bntober",
                      className:
                        "w-10 h-10 object-cover rounded-full border-2 border-nsfw-cyan logo-glitch",
                    }),
                    c.jsx("span", {
                      className:
                        "font-orbitron-bold text-2xl nsfw-text-gradient",
                      children: "Bntober",
                    }),
                  ],
                }),
                c.jsx("p", {
                  className: "text-gray-300 mb-4",
                  children:
                    "Not predicting the future. And don't get too excited. ",
                }),
                c.jsx("div", {
                  className: "flex space-x-4",
                  children: n.map((o, i) =>
                    c.jsx(
                      "a",
                      {
                        href: o.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: `text-gray-400 ${o.color} transition-colors text-xl`,
                        children: o.icon,
                      },
                      i
                    )
                  ),
                }),
              ],
            }),
            c.jsxs("div", {
              children: [
                c.jsx("h4", {
                  className: "font-bold text-lg mb-4",
                  children: "Quick Links",
                }),
                c.jsx("ul", {
                  className: "space-y-2",
                  children: e.map((o, i) =>
                    c.jsx(
                      "li",
                      {
                        children: c.jsx("button", {
                          onClick: () => r(o),
                          className:
                            "text-gray-300 hover:text-crypto-pink transition-colors text-left",
                          children: o,
                        }),
                      },
                      i
                    )
                  ),
                }),
              ],
            }),
            c.jsxs("div", {
              children: [
                c.jsx("h4", {
                  className: "font-bold text-lg mb-4",
                  children: "",
                }),
              ],
            }),
            c.jsxs("div", {
              children: [
                c.jsx("h4", {
                  className: "font-bold text-lg mb-4",
                  children: "Contract Info",
                }),
                c.jsxs("div", {
                  className: "space-y-2 text-sm",
                  children: [
                    c.jsx("div", {
                      className: "text-gray-300",
                      children: "Network: Binance Smart Chain",
                    }),
                    c.jsx("div", {
                      className: "text-gray-300",
                      children: "Symbol: BNTOBER",
                    }),
                    c.jsx("div", {
                      className: "text-gray-300 break-all font-space",
                      children:
                        "Contract: 0x00000000000000000000000000000000000000",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        c.jsxs("div", {
          className: "border-t border-gray-700 pt-8 text-center",
          children: [
            c.jsx("p", {
              className: "text-gray-400 mb-2",
              children:
                "© 2025 Bntober. Made with 🤖 and 💎 by degenerates for degenerates.",
            }),
            c.jsx("p", {
              className: "text-xs text-gray-500",
              children:
                "Disclaimer: Cryptocurrency investments carry high risk. Always do your own research.",
            }),
          ],
        }),
      ],
    }),
  });
}
function yd() {
  const [e, t] = x.useState(!1);
  x.useEffect(() => {
    const r = setTimeout(() => t(!0), 100);
    return () => clearTimeout(r);
  }, []);
  const n = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return c.jsxs("div", {
    className: "min-h-screen nsfw-gradient-bg",
    children: [
      c.jsx(v1, {}),
      c.jsxs("main", {
        className: `transition-opacity duration-700 ${
          e ? "opacity-100" : "opacity-0"
        }`,
        children: [
          c.jsx(x1, {}),
          c.jsx(S1, {}),
          
          c.jsx(_1, {}),
          c.jsx(I1, {}),
          c.jsx(D1, {}),
        ],
      }),
      c.jsx(z1, {}),
      c.jsx("div", {
        className: "fixed bottom-6 right-6 z-40",
        children: c.jsx("button", {
          onClick: n,
          className:
            "nsfw-cyan-gradient text-black w-14 h-14 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 nsfw-pulse",
          children: c.jsx(sx, { className: "w-5 h-5 mx-auto" }),
        }),
      }),
    ],
  });
}
function $1() {
  return c.jsxs(Rg, {
    children: [
      c.jsx(Hc, { path: "/", component: yd }),
      c.jsx(Hc, { path: "/home", component: yd }),
    ],
  });
}
function U1() {
  return c.jsx(Jg, {
    client: n0,
    children: c.jsxs(m1, { children: [c.jsx(Vx, {}), c.jsx($1, {})] }),
  });
}
zp(document.getElementById("root")).render(c.jsx(U1, {}));
