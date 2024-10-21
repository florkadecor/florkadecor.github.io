(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const a of o.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
var dm =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function ga(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function Eb(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      if (this instanceof r) {
        var i = [null];
        i.push.apply(i, arguments);
        var o = Function.bind.apply(t, i);
        return new o();
      }
      return t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var i = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        i.get
          ? i
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var fm = { exports: {} },
  os = {},
  pm = { exports: {} },
  we = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var va = Symbol.for("react.element"),
  _b = Symbol.for("react.portal"),
  Cb = Symbol.for("react.fragment"),
  kb = Symbol.for("react.strict_mode"),
  Tb = Symbol.for("react.profiler"),
  Pb = Symbol.for("react.provider"),
  Ob = Symbol.for("react.context"),
  Nb = Symbol.for("react.forward_ref"),
  Rb = Symbol.for("react.suspense"),
  Lb = Symbol.for("react.memo"),
  Mb = Symbol.for("react.lazy"),
  Zf = Symbol.iterator;
function jb(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Zf && e[Zf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var hm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  mm = Object.assign,
  gm = {};
function co(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = gm),
    (this.updater = n || hm);
}
co.prototype.isReactComponent = {};
co.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
co.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function vm() {}
vm.prototype = co.prototype;
function sd(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = gm),
    (this.updater = n || hm);
}
var ud = (sd.prototype = new vm());
ud.constructor = sd;
mm(ud, co.prototype);
ud.isPureReactComponent = !0;
var ep = Array.isArray,
  ym = Object.prototype.hasOwnProperty,
  cd = { current: null },
  bm = { key: !0, ref: !0, __self: !0, __source: !0 };
function wm(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      ym.call(t, r) && !bm.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var s = Array(l), u = 0; u < l; u++) s[u] = arguments[u + 2];
    i.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: va,
    type: e,
    key: o,
    ref: a,
    props: i,
    _owner: cd.current,
  };
}
function Ab(e, t) {
  return {
    $$typeof: va,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function dd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === va;
}
function Db(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var tp = /\/+/g;
function Js(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Db("" + e.key)
    : t.toString(36);
}
function il(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (o) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case va:
          case _b:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (i = i(a)),
      (e = r === "" ? "." + Js(a, 0) : r),
      ep(i)
        ? ((n = ""),
          e != null && (n = e.replace(tp, "$&/") + "/"),
          il(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (dd(i) &&
            (i = Ab(
              i,
              n +
                (!i.key || (a && a.key === i.key)
                  ? ""
                  : ("" + i.key).replace(tp, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), ep(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var s = r + Js(o, l);
      a += il(o, t, n, s, i);
    }
  else if (((s = jb(e)), typeof s == "function"))
    for (e = s.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + Js(o, l++)), (a += il(o, t, n, s, i));
  else if (o === "object")
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
  return a;
}
function Ia(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    il(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function Ib(e) {
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
var Pt = { current: null },
  ol = { transition: null },
  Fb = {
    ReactCurrentDispatcher: Pt,
    ReactCurrentBatchConfig: ol,
    ReactCurrentOwner: cd,
  };
we.Children = {
  map: Ia,
  forEach: function (e, t, n) {
    Ia(
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
      Ia(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ia(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!dd(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
we.Component = co;
we.Fragment = Cb;
we.Profiler = Tb;
we.PureComponent = sd;
we.StrictMode = kb;
we.Suspense = Rb;
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fb;
we.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = mm({}, e.props),
    i = e.key,
    o = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (a = cd.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (s in t)
      ym.call(t, s) &&
        !bm.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    l = Array(s);
    for (var u = 0; u < s; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: va, type: e.type, key: i, ref: o, props: r, _owner: a };
};
we.createContext = function (e) {
  return (
    (e = {
      $$typeof: Ob,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Pb, _context: e }),
    (e.Consumer = e)
  );
};
we.createElement = wm;
we.createFactory = function (e) {
  var t = wm.bind(null, e);
  return (t.type = e), t;
};
we.createRef = function () {
  return { current: null };
};
we.forwardRef = function (e) {
  return { $$typeof: Nb, render: e };
};
we.isValidElement = dd;
we.lazy = function (e) {
  return { $$typeof: Mb, _payload: { _status: -1, _result: e }, _init: Ib };
};
we.memo = function (e, t) {
  return { $$typeof: Lb, type: e, compare: t === void 0 ? null : t };
};
we.startTransition = function (e) {
  var t = ol.transition;
  ol.transition = {};
  try {
    e();
  } finally {
    ol.transition = t;
  }
};
we.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
we.useCallback = function (e, t) {
  return Pt.current.useCallback(e, t);
};
we.useContext = function (e) {
  return Pt.current.useContext(e);
};
we.useDebugValue = function () {};
we.useDeferredValue = function (e) {
  return Pt.current.useDeferredValue(e);
};
we.useEffect = function (e, t) {
  return Pt.current.useEffect(e, t);
};
we.useId = function () {
  return Pt.current.useId();
};
we.useImperativeHandle = function (e, t, n) {
  return Pt.current.useImperativeHandle(e, t, n);
};
we.useInsertionEffect = function (e, t) {
  return Pt.current.useInsertionEffect(e, t);
};
we.useLayoutEffect = function (e, t) {
  return Pt.current.useLayoutEffect(e, t);
};
we.useMemo = function (e, t) {
  return Pt.current.useMemo(e, t);
};
we.useReducer = function (e, t, n) {
  return Pt.current.useReducer(e, t, n);
};
we.useRef = function (e) {
  return Pt.current.useRef(e);
};
we.useState = function (e) {
  return Pt.current.useState(e);
};
we.useSyncExternalStore = function (e, t, n) {
  return Pt.current.useSyncExternalStore(e, t, n);
};
we.useTransition = function () {
  return Pt.current.useTransition();
};
we.version = "18.2.0";
pm.exports = we;
var C = pm.exports;
const J = ga(C);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $b = C,
  zb = Symbol.for("react.element"),
  Bb = Symbol.for("react.fragment"),
  Ub = Object.prototype.hasOwnProperty,
  Hb = $b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Vb = { key: !0, ref: !0, __self: !0, __source: !0 };
function xm(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) Ub.call(t, r) && !Vb.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: zb,
    type: e,
    key: o,
    ref: a,
    props: i,
    _owner: Hb.current,
  };
}
os.Fragment = Bb;
os.jsx = xm;
os.jsxs = xm;
fm.exports = os;
var y = fm.exports,
  Ku = {},
  Sm = { exports: {} },
  Ht = {},
  Em = { exports: {} },
  _m = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(D, B) {
    var W = D.length;
    D.push(B);
    e: for (; 0 < W; ) {
      var G = (W - 1) >>> 1,
        te = D[G];
      if (0 < i(te, B)) (D[G] = B), (D[W] = te), (W = G);
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0) return null;
    var B = D[0],
      W = D.pop();
    if (W !== B) {
      D[0] = W;
      e: for (var G = 0, te = D.length, de = te >>> 1; G < de; ) {
        var se = 2 * (G + 1) - 1,
          ve = D[se],
          Ce = se + 1,
          Le = D[Ce];
        if (0 > i(ve, W))
          Ce < te && 0 > i(Le, ve)
            ? ((D[G] = Le), (D[Ce] = W), (G = Ce))
            : ((D[G] = ve), (D[se] = W), (G = se));
        else if (Ce < te && 0 > i(Le, W)) (D[G] = Le), (D[Ce] = W), (G = Ce);
        else break e;
      }
    }
    return B;
  }
  function i(D, B) {
    var W = D.sortIndex - B.sortIndex;
    return W !== 0 ? W : D.id - B.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var a = Date,
      l = a.now();
    e.unstable_now = function () {
      return a.now() - l;
    };
  }
  var s = [],
    u = [],
    c = 1,
    d = null,
    h = 3,
    g = !1,
    v = !1,
    b = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(D) {
    for (var B = n(u); B !== null; ) {
      if (B.callback === null) r(u);
      else if (B.startTime <= D)
        r(u), (B.sortIndex = B.expirationTime), t(s, B);
      else break;
      B = n(u);
    }
  }
  function w(D) {
    if (((b = !1), m(D), !v))
      if (n(s) !== null) (v = !0), K(_);
      else {
        var B = n(u);
        B !== null && U(w, B.startTime - D);
      }
  }
  function _(D, B) {
    (v = !1), b && ((b = !1), f(N), (N = -1)), (g = !0);
    var W = h;
    try {
      for (
        m(B), d = n(s);
        d !== null && (!(d.expirationTime > B) || (D && !j()));

      ) {
        var G = d.callback;
        if (typeof G == "function") {
          (d.callback = null), (h = d.priorityLevel);
          var te = G(d.expirationTime <= B);
          (B = e.unstable_now()),
            typeof te == "function" ? (d.callback = te) : d === n(s) && r(s),
            m(B);
        } else r(s);
        d = n(s);
      }
      if (d !== null) var de = !0;
      else {
        var se = n(u);
        se !== null && U(w, se.startTime - B), (de = !1);
      }
      return de;
    } finally {
      (d = null), (h = W), (g = !1);
    }
  }
  var T = !1,
    k = null,
    N = -1,
    S = 5,
    F = -1;
  function j() {
    return !(e.unstable_now() - F < S);
  }
  function I() {
    if (k !== null) {
      var D = e.unstable_now();
      F = D;
      var B = !0;
      try {
        B = k(!0, D);
      } finally {
        B ? O() : ((T = !1), (k = null));
      }
    } else T = !1;
  }
  var O;
  if (typeof p == "function")
    O = function () {
      p(I);
    };
  else if (typeof MessageChannel < "u") {
    var R = new MessageChannel(),
      z = R.port2;
    (R.port1.onmessage = I),
      (O = function () {
        z.postMessage(null);
      });
  } else
    O = function () {
      E(I, 0);
    };
  function K(D) {
    (k = D), T || ((T = !0), O());
  }
  function U(D, B) {
    N = E(function () {
      D(e.unstable_now());
    }, B);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (D) {
      D.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || g || ((v = !0), K(_));
    }),
    (e.unstable_forceFrameRate = function (D) {
      0 > D || 125 < D
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (S = 0 < D ? Math.floor(1e3 / D) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (D) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = h;
      }
      var W = h;
      h = B;
      try {
        return D();
      } finally {
        h = W;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (D, B) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var W = h;
      h = D;
      try {
        return B();
      } finally {
        h = W;
      }
    }),
    (e.unstable_scheduleCallback = function (D, B, W) {
      var G = e.unstable_now();
      switch (
        (typeof W == "object" && W !== null
          ? ((W = W.delay), (W = typeof W == "number" && 0 < W ? G + W : G))
          : (W = G),
        D)
      ) {
        case 1:
          var te = -1;
          break;
        case 2:
          te = 250;
          break;
        case 5:
          te = 1073741823;
          break;
        case 4:
          te = 1e4;
          break;
        default:
          te = 5e3;
      }
      return (
        (te = W + te),
        (D = {
          id: c++,
          callback: B,
          priorityLevel: D,
          startTime: W,
          expirationTime: te,
          sortIndex: -1,
        }),
        W > G
          ? ((D.sortIndex = W),
            t(u, D),
            n(s) === null &&
              D === n(u) &&
              (b ? (f(N), (N = -1)) : (b = !0), U(w, W - G)))
          : ((D.sortIndex = te), t(s, D), v || g || ((v = !0), K(_))),
        D
      );
    }),
    (e.unstable_shouldYield = j),
    (e.unstable_wrapCallback = function (D) {
      var B = h;
      return function () {
        var W = h;
        h = B;
        try {
          return D.apply(this, arguments);
        } finally {
          h = W;
        }
      };
    });
})(_m);
Em.exports = _m;
var Wb = Em.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cm = C,
  Ut = Wb;
function Q(e) {
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
var km = new Set(),
  Ko = {};
function ci(e, t) {
  Xi(e, t), Xi(e + "Capture", t);
}
function Xi(e, t) {
  for (Ko[e] = t, e = 0; e < t.length; e++) km.add(t[e]);
}
var Kn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Qu = Object.prototype.hasOwnProperty,
  Gb =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  np = {},
  rp = {};
function qb(e) {
  return Qu.call(rp, e)
    ? !0
    : Qu.call(np, e)
    ? !1
    : Gb.test(e)
    ? (rp[e] = !0)
    : ((np[e] = !0), !1);
}
function Kb(e, t, n, r) {
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
function Qb(e, t, n, r) {
  if (t === null || typeof t > "u" || Kb(e, t, n, r)) return !0;
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
function Ot(e, t, n, r, i, o, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = a);
}
var yt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    yt[e] = new Ot(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  yt[t] = new Ot(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  yt[e] = new Ot(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  yt[e] = new Ot(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    yt[e] = new Ot(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  yt[e] = new Ot(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  yt[e] = new Ot(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  yt[e] = new Ot(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  yt[e] = new Ot(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var fd = /[\-:]([a-z])/g;
function pd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(fd, pd);
    yt[t] = new Ot(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(fd, pd);
    yt[t] = new Ot(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(fd, pd);
  yt[t] = new Ot(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  yt[e] = new Ot(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
yt.xlinkHref = new Ot(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  yt[e] = new Ot(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function hd(e, t, n, r) {
  var i = yt.hasOwnProperty(t) ? yt[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Qb(t, n, i, r) && (n = null),
    r || i === null
      ? qb(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Jn = Cm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Fa = Symbol.for("react.element"),
  Pi = Symbol.for("react.portal"),
  Oi = Symbol.for("react.fragment"),
  md = Symbol.for("react.strict_mode"),
  Yu = Symbol.for("react.profiler"),
  Tm = Symbol.for("react.provider"),
  Pm = Symbol.for("react.context"),
  gd = Symbol.for("react.forward_ref"),
  Xu = Symbol.for("react.suspense"),
  Ju = Symbol.for("react.suspense_list"),
  vd = Symbol.for("react.memo"),
  sr = Symbol.for("react.lazy"),
  Om = Symbol.for("react.offscreen"),
  ip = Symbol.iterator;
function vo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ip && e[ip]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ge = Object.assign,
  Zs;
function No(e) {
  if (Zs === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Zs = (t && t[1]) || "";
    }
  return (
    `
` +
    Zs +
    e
  );
}
var eu = !1;
function tu(e, t) {
  if (!e || eu) return "";
  eu = !0;
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
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          a = i.length - 1,
          l = o.length - 1;
        1 <= a && 0 <= l && i[a] !== o[l];

      )
        l--;
      for (; 1 <= a && 0 <= l; a--, l--)
        if (i[a] !== o[l]) {
          if (a !== 1 || l !== 1)
            do
              if ((a--, l--, 0 > l || i[a] !== o[l])) {
                var s =
                  `
` + i[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= a && 0 <= l);
          break;
        }
    }
  } finally {
    (eu = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? No(e) : "";
}
function Yb(e) {
  switch (e.tag) {
    case 5:
      return No(e.type);
    case 16:
      return No("Lazy");
    case 13:
      return No("Suspense");
    case 19:
      return No("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = tu(e.type, !1)), e;
    case 11:
      return (e = tu(e.type.render, !1)), e;
    case 1:
      return (e = tu(e.type, !0)), e;
    default:
      return "";
  }
}
function Zu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Oi:
      return "Fragment";
    case Pi:
      return "Portal";
    case Yu:
      return "Profiler";
    case md:
      return "StrictMode";
    case Xu:
      return "Suspense";
    case Ju:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Pm:
        return (e.displayName || "Context") + ".Consumer";
      case Tm:
        return (e._context.displayName || "Context") + ".Provider";
      case gd:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case vd:
        return (
          (t = e.displayName || null), t !== null ? t : Zu(e.type) || "Memo"
        );
      case sr:
        (t = e._payload), (e = e._init);
        try {
          return Zu(e(t));
        } catch {}
    }
  return null;
}
function Xb(e) {
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
      return Zu(t);
    case 8:
      return t === md ? "StrictMode" : "Mode";
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
function Cr(e) {
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
function Nm(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Jb(e) {
  var t = Nm(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (a) {
          (r = "" + a), o.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function $a(e) {
  e._valueTracker || (e._valueTracker = Jb(e));
}
function Rm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Nm(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Sl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ec(e, t) {
  var n = t.checked;
  return Ge({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function op(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Cr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Lm(e, t) {
  (t = t.checked), t != null && hd(e, "checked", t, !1);
}
function tc(e, t) {
  Lm(e, t);
  var n = Cr(t.value),
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
    ? nc(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && nc(e, t.type, Cr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ap(e, t, n) {
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
function nc(e, t, n) {
  (t !== "number" || Sl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ro = Array.isArray;
function Ui(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Cr(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function rc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(Q(91));
  return Ge({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function lp(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(Q(92));
      if (Ro(n)) {
        if (1 < n.length) throw Error(Q(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Cr(n) };
}
function Mm(e, t) {
  var n = Cr(t.value),
    r = Cr(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function sp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function jm(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ic(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? jm(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var za,
  Am = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        za = za || document.createElement("div"),
          za.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = za.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Qo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Io = {
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
  Zb = ["Webkit", "ms", "Moz", "O"];
Object.keys(Io).forEach(function (e) {
  Zb.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Io[t] = Io[e]);
  });
});
function Dm(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Io.hasOwnProperty(e) && Io[e])
    ? ("" + t).trim()
    : t + "px";
}
function Im(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Dm(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var e0 = Ge(
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
function oc(e, t) {
  if (t) {
    if (e0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(Q(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(Q(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(Q(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(Q(62));
  }
}
function ac(e, t) {
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
var lc = null;
function yd(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var sc = null,
  Hi = null,
  Vi = null;
function up(e) {
  if ((e = wa(e))) {
    if (typeof sc != "function") throw Error(Q(280));
    var t = e.stateNode;
    t && ((t = cs(t)), sc(e.stateNode, e.type, t));
  }
}
function Fm(e) {
  Hi ? (Vi ? Vi.push(e) : (Vi = [e])) : (Hi = e);
}
function $m() {
  if (Hi) {
    var e = Hi,
      t = Vi;
    if (((Vi = Hi = null), up(e), t)) for (e = 0; e < t.length; e++) up(t[e]);
  }
}
function zm(e, t) {
  return e(t);
}
function Bm() {}
var nu = !1;
function Um(e, t, n) {
  if (nu) return e(t, n);
  nu = !0;
  try {
    return zm(e, t, n);
  } finally {
    (nu = !1), (Hi !== null || Vi !== null) && (Bm(), $m());
  }
}
function Yo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = cs(n);
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
  if (n && typeof n != "function") throw Error(Q(231, t, typeof n));
  return n;
}
var uc = !1;
if (Kn)
  try {
    var yo = {};
    Object.defineProperty(yo, "passive", {
      get: function () {
        uc = !0;
      },
    }),
      window.addEventListener("test", yo, yo),
      window.removeEventListener("test", yo, yo);
  } catch {
    uc = !1;
  }
function t0(e, t, n, r, i, o, a, l, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Fo = !1,
  El = null,
  _l = !1,
  cc = null,
  n0 = {
    onError: function (e) {
      (Fo = !0), (El = e);
    },
  };
function r0(e, t, n, r, i, o, a, l, s) {
  (Fo = !1), (El = null), t0.apply(n0, arguments);
}
function i0(e, t, n, r, i, o, a, l, s) {
  if ((r0.apply(this, arguments), Fo)) {
    if (Fo) {
      var u = El;
      (Fo = !1), (El = null);
    } else throw Error(Q(198));
    _l || ((_l = !0), (cc = u));
  }
}
function di(e) {
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
function Hm(e) {
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
function cp(e) {
  if (di(e) !== e) throw Error(Q(188));
}
function o0(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = di(e)), t === null)) throw Error(Q(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return cp(i), e;
        if (o === r) return cp(i), t;
        o = o.sibling;
      }
      throw Error(Q(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var a = !1, l = i.child; l; ) {
        if (l === n) {
          (a = !0), (n = i), (r = o);
          break;
        }
        if (l === r) {
          (a = !0), (r = i), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!a) {
        for (l = o.child; l; ) {
          if (l === n) {
            (a = !0), (n = o), (r = i);
            break;
          }
          if (l === r) {
            (a = !0), (r = o), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!a) throw Error(Q(189));
      }
    }
    if (n.alternate !== r) throw Error(Q(190));
  }
  if (n.tag !== 3) throw Error(Q(188));
  return n.stateNode.current === n ? e : t;
}
function Vm(e) {
  return (e = o0(e)), e !== null ? Wm(e) : null;
}
function Wm(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Wm(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Gm = Ut.unstable_scheduleCallback,
  dp = Ut.unstable_cancelCallback,
  a0 = Ut.unstable_shouldYield,
  l0 = Ut.unstable_requestPaint,
  Je = Ut.unstable_now,
  s0 = Ut.unstable_getCurrentPriorityLevel,
  bd = Ut.unstable_ImmediatePriority,
  qm = Ut.unstable_UserBlockingPriority,
  Cl = Ut.unstable_NormalPriority,
  u0 = Ut.unstable_LowPriority,
  Km = Ut.unstable_IdlePriority,
  as = null,
  En = null;
function c0(e) {
  if (En && typeof En.onCommitFiberRoot == "function")
    try {
      En.onCommitFiberRoot(as, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var fn = Math.clz32 ? Math.clz32 : p0,
  d0 = Math.log,
  f0 = Math.LN2;
function p0(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((d0(e) / f0) | 0)) | 0;
}
var Ba = 64,
  Ua = 4194304;
function Lo(e) {
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
function kl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var l = a & ~i;
    l !== 0 ? (r = Lo(l)) : ((o &= a), o !== 0 && (r = Lo(o)));
  } else (a = n & ~i), a !== 0 ? (r = Lo(a)) : o !== 0 && (r = Lo(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - fn(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function h0(e, t) {
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
function m0(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var a = 31 - fn(o),
      l = 1 << a,
      s = i[a];
    s === -1
      ? (!(l & n) || l & r) && (i[a] = h0(l, t))
      : s <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function dc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Qm() {
  var e = Ba;
  return (Ba <<= 1), !(Ba & 4194240) && (Ba = 64), e;
}
function ru(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ya(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - fn(t)),
    (e[t] = n);
}
function g0(e, t) {
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
    var i = 31 - fn(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function wd(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - fn(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var Pe = 0;
function Ym(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Xm,
  xd,
  Jm,
  Zm,
  eg,
  fc = !1,
  Ha = [],
  vr = null,
  yr = null,
  br = null,
  Xo = new Map(),
  Jo = new Map(),
  fr = [],
  v0 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function fp(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      vr = null;
      break;
    case "dragenter":
    case "dragleave":
      yr = null;
      break;
    case "mouseover":
    case "mouseout":
      br = null;
      break;
    case "pointerover":
    case "pointerout":
      Xo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Jo.delete(t.pointerId);
  }
}
function bo(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = wa(t)), t !== null && xd(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function y0(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (vr = bo(vr, e, t, n, r, i)), !0;
    case "dragenter":
      return (yr = bo(yr, e, t, n, r, i)), !0;
    case "mouseover":
      return (br = bo(br, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Xo.set(o, bo(Xo.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Jo.set(o, bo(Jo.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function tg(e) {
  var t = Wr(e.target);
  if (t !== null) {
    var n = di(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Hm(n)), t !== null)) {
          (e.blockedOn = t),
            eg(e.priority, function () {
              Jm(n);
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
function al(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = pc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (lc = r), n.target.dispatchEvent(r), (lc = null);
    } else return (t = wa(n)), t !== null && xd(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function pp(e, t, n) {
  al(e) && n.delete(t);
}
function b0() {
  (fc = !1),
    vr !== null && al(vr) && (vr = null),
    yr !== null && al(yr) && (yr = null),
    br !== null && al(br) && (br = null),
    Xo.forEach(pp),
    Jo.forEach(pp);
}
function wo(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    fc ||
      ((fc = !0),
      Ut.unstable_scheduleCallback(Ut.unstable_NormalPriority, b0)));
}
function Zo(e) {
  function t(i) {
    return wo(i, e);
  }
  if (0 < Ha.length) {
    wo(Ha[0], e);
    for (var n = 1; n < Ha.length; n++) {
      var r = Ha[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    vr !== null && wo(vr, e),
      yr !== null && wo(yr, e),
      br !== null && wo(br, e),
      Xo.forEach(t),
      Jo.forEach(t),
      n = 0;
    n < fr.length;
    n++
  )
    (r = fr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < fr.length && ((n = fr[0]), n.blockedOn === null); )
    tg(n), n.blockedOn === null && fr.shift();
}
var Wi = Jn.ReactCurrentBatchConfig,
  Tl = !0;
function w0(e, t, n, r) {
  var i = Pe,
    o = Wi.transition;
  Wi.transition = null;
  try {
    (Pe = 1), Sd(e, t, n, r);
  } finally {
    (Pe = i), (Wi.transition = o);
  }
}
function x0(e, t, n, r) {
  var i = Pe,
    o = Wi.transition;
  Wi.transition = null;
  try {
    (Pe = 4), Sd(e, t, n, r);
  } finally {
    (Pe = i), (Wi.transition = o);
  }
}
function Sd(e, t, n, r) {
  if (Tl) {
    var i = pc(e, t, n, r);
    if (i === null) pu(e, t, r, Pl, n), fp(e, r);
    else if (y0(i, e, t, n, r)) r.stopPropagation();
    else if ((fp(e, r), t & 4 && -1 < v0.indexOf(e))) {
      for (; i !== null; ) {
        var o = wa(i);
        if (
          (o !== null && Xm(o),
          (o = pc(e, t, n, r)),
          o === null && pu(e, t, r, Pl, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else pu(e, t, r, null, n);
  }
}
var Pl = null;
function pc(e, t, n, r) {
  if (((Pl = null), (e = yd(r)), (e = Wr(e)), e !== null))
    if (((t = di(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Hm(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Pl = e), null;
}
function ng(e) {
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
      switch (s0()) {
        case bd:
          return 1;
        case qm:
          return 4;
        case Cl:
        case u0:
          return 16;
        case Km:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var hr = null,
  Ed = null,
  ll = null;
function rg() {
  if (ll) return ll;
  var e,
    t = Ed,
    n = t.length,
    r,
    i = "value" in hr ? hr.value : hr.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === i[o - r]; r++);
  return (ll = i.slice(e, 1 < r ? 1 - r : void 0));
}
function sl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Va() {
  return !0;
}
function hp() {
  return !1;
}
function Vt(e) {
  function t(n, r, i, o, a) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = a),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Va
        : hp),
      (this.isPropagationStopped = hp),
      this
    );
  }
  return (
    Ge(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Va));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Va));
      },
      persist: function () {},
      isPersistent: Va,
    }),
    t
  );
}
var fo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  _d = Vt(fo),
  ba = Ge({}, fo, { view: 0, detail: 0 }),
  S0 = Vt(ba),
  iu,
  ou,
  xo,
  ls = Ge({}, ba, {
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
    getModifierState: Cd,
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
        : (e !== xo &&
            (xo && e.type === "mousemove"
              ? ((iu = e.screenX - xo.screenX), (ou = e.screenY - xo.screenY))
              : (ou = iu = 0),
            (xo = e)),
          iu);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ou;
    },
  }),
  mp = Vt(ls),
  E0 = Ge({}, ls, { dataTransfer: 0 }),
  _0 = Vt(E0),
  C0 = Ge({}, ba, { relatedTarget: 0 }),
  au = Vt(C0),
  k0 = Ge({}, fo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  T0 = Vt(k0),
  P0 = Ge({}, fo, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  O0 = Vt(P0),
  N0 = Ge({}, fo, { data: 0 }),
  gp = Vt(N0),
  R0 = {
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
  L0 = {
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
  M0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function j0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = M0[e]) ? !!t[e] : !1;
}
function Cd() {
  return j0;
}
var A0 = Ge({}, ba, {
    key: function (e) {
      if (e.key) {
        var t = R0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = sl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? L0[e.keyCode] || "Unidentified"
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
    getModifierState: Cd,
    charCode: function (e) {
      return e.type === "keypress" ? sl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? sl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  D0 = Vt(A0),
  I0 = Ge({}, ls, {
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
  vp = Vt(I0),
  F0 = Ge({}, ba, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Cd,
  }),
  $0 = Vt(F0),
  z0 = Ge({}, fo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  B0 = Vt(z0),
  U0 = Ge({}, ls, {
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
  H0 = Vt(U0),
  V0 = [9, 13, 27, 32],
  kd = Kn && "CompositionEvent" in window,
  $o = null;
Kn && "documentMode" in document && ($o = document.documentMode);
var W0 = Kn && "TextEvent" in window && !$o,
  ig = Kn && (!kd || ($o && 8 < $o && 11 >= $o)),
  yp = String.fromCharCode(32),
  bp = !1;
function og(e, t) {
  switch (e) {
    case "keyup":
      return V0.indexOf(t.keyCode) !== -1;
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
function ag(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Ni = !1;
function G0(e, t) {
  switch (e) {
    case "compositionend":
      return ag(t);
    case "keypress":
      return t.which !== 32 ? null : ((bp = !0), yp);
    case "textInput":
      return (e = t.data), e === yp && bp ? null : e;
    default:
      return null;
  }
}
function q0(e, t) {
  if (Ni)
    return e === "compositionend" || (!kd && og(e, t))
      ? ((e = rg()), (ll = Ed = hr = null), (Ni = !1), e)
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
      return ig && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var K0 = {
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
function wp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!K0[e.type] : t === "textarea";
}
function lg(e, t, n, r) {
  Fm(r),
    (t = Ol(t, "onChange")),
    0 < t.length &&
      ((n = new _d("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var zo = null,
  ea = null;
function Q0(e) {
  yg(e, 0);
}
function ss(e) {
  var t = Mi(e);
  if (Rm(t)) return e;
}
function Y0(e, t) {
  if (e === "change") return t;
}
var sg = !1;
if (Kn) {
  var lu;
  if (Kn) {
    var su = "oninput" in document;
    if (!su) {
      var xp = document.createElement("div");
      xp.setAttribute("oninput", "return;"),
        (su = typeof xp.oninput == "function");
    }
    lu = su;
  } else lu = !1;
  sg = lu && (!document.documentMode || 9 < document.documentMode);
}
function Sp() {
  zo && (zo.detachEvent("onpropertychange", ug), (ea = zo = null));
}
function ug(e) {
  if (e.propertyName === "value" && ss(ea)) {
    var t = [];
    lg(t, ea, e, yd(e)), Um(Q0, t);
  }
}
function X0(e, t, n) {
  e === "focusin"
    ? (Sp(), (zo = t), (ea = n), zo.attachEvent("onpropertychange", ug))
    : e === "focusout" && Sp();
}
function J0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ss(ea);
}
function Z0(e, t) {
  if (e === "click") return ss(t);
}
function ew(e, t) {
  if (e === "input" || e === "change") return ss(t);
}
function tw(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var gn = typeof Object.is == "function" ? Object.is : tw;
function ta(e, t) {
  if (gn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Qu.call(t, i) || !gn(e[i], t[i])) return !1;
  }
  return !0;
}
function Ep(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function _p(e, t) {
  var n = Ep(e);
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
    n = Ep(n);
  }
}
function cg(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? cg(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function dg() {
  for (var e = window, t = Sl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Sl(e.document);
  }
  return t;
}
function Td(e) {
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
function nw(e) {
  var t = dg(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    cg(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Td(n)) {
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
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = _p(n, o));
        var a = _p(n, r);
        i &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
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
var rw = Kn && "documentMode" in document && 11 >= document.documentMode,
  Ri = null,
  hc = null,
  Bo = null,
  mc = !1;
function Cp(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  mc ||
    Ri == null ||
    Ri !== Sl(r) ||
    ((r = Ri),
    "selectionStart" in r && Td(r)
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
    (Bo && ta(Bo, r)) ||
      ((Bo = r),
      (r = Ol(hc, "onSelect")),
      0 < r.length &&
        ((t = new _d("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ri))));
}
function Wa(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Li = {
    animationend: Wa("Animation", "AnimationEnd"),
    animationiteration: Wa("Animation", "AnimationIteration"),
    animationstart: Wa("Animation", "AnimationStart"),
    transitionend: Wa("Transition", "TransitionEnd"),
  },
  uu = {},
  fg = {};
Kn &&
  ((fg = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Li.animationend.animation,
    delete Li.animationiteration.animation,
    delete Li.animationstart.animation),
  "TransitionEvent" in window || delete Li.transitionend.transition);
function us(e) {
  if (uu[e]) return uu[e];
  if (!Li[e]) return e;
  var t = Li[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in fg) return (uu[e] = t[n]);
  return e;
}
var pg = us("animationend"),
  hg = us("animationiteration"),
  mg = us("animationstart"),
  gg = us("transitionend"),
  vg = new Map(),
  kp =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Or(e, t) {
  vg.set(e, t), ci(t, [e]);
}
for (var cu = 0; cu < kp.length; cu++) {
  var du = kp[cu],
    iw = du.toLowerCase(),
    ow = du[0].toUpperCase() + du.slice(1);
  Or(iw, "on" + ow);
}
Or(pg, "onAnimationEnd");
Or(hg, "onAnimationIteration");
Or(mg, "onAnimationStart");
Or("dblclick", "onDoubleClick");
Or("focusin", "onFocus");
Or("focusout", "onBlur");
Or(gg, "onTransitionEnd");
Xi("onMouseEnter", ["mouseout", "mouseover"]);
Xi("onMouseLeave", ["mouseout", "mouseover"]);
Xi("onPointerEnter", ["pointerout", "pointerover"]);
Xi("onPointerLeave", ["pointerout", "pointerover"]);
ci(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
ci(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
ci("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ci(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
ci(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
ci(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Mo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  aw = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mo));
function Tp(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), i0(r, t, void 0, e), (e.currentTarget = null);
}
function yg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var l = r[a],
            s = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), s !== o && i.isPropagationStopped())) break e;
          Tp(i, l, u), (o = s);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((l = r[a]),
            (s = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            s !== o && i.isPropagationStopped())
          )
            break e;
          Tp(i, l, u), (o = s);
        }
    }
  }
  if (_l) throw ((e = cc), (_l = !1), (cc = null), e);
}
function Fe(e, t) {
  var n = t[wc];
  n === void 0 && (n = t[wc] = new Set());
  var r = e + "__bubble";
  n.has(r) || (bg(t, e, 2, !1), n.add(r));
}
function fu(e, t, n) {
  var r = 0;
  t && (r |= 4), bg(n, e, r, t);
}
var Ga = "_reactListening" + Math.random().toString(36).slice(2);
function na(e) {
  if (!e[Ga]) {
    (e[Ga] = !0),
      km.forEach(function (n) {
        n !== "selectionchange" && (aw.has(n) || fu(n, !1, e), fu(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ga] || ((t[Ga] = !0), fu("selectionchange", !1, t));
  }
}
function bg(e, t, n, r) {
  switch (ng(t)) {
    case 1:
      var i = w0;
      break;
    case 4:
      i = x0;
      break;
    default:
      i = Sd;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !uc ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function pu(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var s = a.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = a.stateNode.containerInfo),
              s === i || (s.nodeType === 8 && s.parentNode === i))
            )
              return;
            a = a.return;
          }
        for (; l !== null; ) {
          if (((a = Wr(l)), a === null)) return;
          if (((s = a.tag), s === 5 || s === 6)) {
            r = o = a;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Um(function () {
    var u = o,
      c = yd(n),
      d = [];
    e: {
      var h = vg.get(e);
      if (h !== void 0) {
        var g = _d,
          v = e;
        switch (e) {
          case "keypress":
            if (sl(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = D0;
            break;
          case "focusin":
            (v = "focus"), (g = au);
            break;
          case "focusout":
            (v = "blur"), (g = au);
            break;
          case "beforeblur":
          case "afterblur":
            g = au;
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
            g = mp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = _0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = $0;
            break;
          case pg:
          case hg:
          case mg:
            g = T0;
            break;
          case gg:
            g = B0;
            break;
          case "scroll":
            g = S0;
            break;
          case "wheel":
            g = H0;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = O0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = vp;
        }
        var b = (t & 4) !== 0,
          E = !b && e === "scroll",
          f = b ? (h !== null ? h + "Capture" : null) : h;
        b = [];
        for (var p = u, m; p !== null; ) {
          m = p;
          var w = m.stateNode;
          if (
            (m.tag === 5 &&
              w !== null &&
              ((m = w),
              f !== null && ((w = Yo(p, f)), w != null && b.push(ra(p, w, m)))),
            E)
          )
            break;
          p = p.return;
        }
        0 < b.length &&
          ((h = new g(h, v, null, n, c)), d.push({ event: h, listeners: b }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          h &&
            n !== lc &&
            (v = n.relatedTarget || n.fromElement) &&
            (Wr(v) || v[Qn]))
        )
          break e;
        if (
          (g || h) &&
          ((h =
            c.window === c
              ? c
              : (h = c.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          g
            ? ((v = n.relatedTarget || n.toElement),
              (g = u),
              (v = v ? Wr(v) : null),
              v !== null &&
                ((E = di(v)), v !== E || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((g = null), (v = u)),
          g !== v)
        ) {
          if (
            ((b = mp),
            (w = "onMouseLeave"),
            (f = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((b = vp),
              (w = "onPointerLeave"),
              (f = "onPointerEnter"),
              (p = "pointer")),
            (E = g == null ? h : Mi(g)),
            (m = v == null ? h : Mi(v)),
            (h = new b(w, p + "leave", g, n, c)),
            (h.target = E),
            (h.relatedTarget = m),
            (w = null),
            Wr(c) === u &&
              ((b = new b(f, p + "enter", v, n, c)),
              (b.target = m),
              (b.relatedTarget = E),
              (w = b)),
            (E = w),
            g && v)
          )
            t: {
              for (b = g, f = v, p = 0, m = b; m; m = Ei(m)) p++;
              for (m = 0, w = f; w; w = Ei(w)) m++;
              for (; 0 < p - m; ) (b = Ei(b)), p--;
              for (; 0 < m - p; ) (f = Ei(f)), m--;
              for (; p--; ) {
                if (b === f || (f !== null && b === f.alternate)) break t;
                (b = Ei(b)), (f = Ei(f));
              }
              b = null;
            }
          else b = null;
          g !== null && Pp(d, h, g, b, !1),
            v !== null && E !== null && Pp(d, E, v, b, !0);
        }
      }
      e: {
        if (
          ((h = u ? Mi(u) : window),
          (g = h.nodeName && h.nodeName.toLowerCase()),
          g === "select" || (g === "input" && h.type === "file"))
        )
          var _ = Y0;
        else if (wp(h))
          if (sg) _ = ew;
          else {
            _ = J0;
            var T = X0;
          }
        else
          (g = h.nodeName) &&
            g.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (_ = Z0);
        if (_ && (_ = _(e, u))) {
          lg(d, _, n, c);
          break e;
        }
        T && T(e, h, u),
          e === "focusout" &&
            (T = h._wrapperState) &&
            T.controlled &&
            h.type === "number" &&
            nc(h, "number", h.value);
      }
      switch (((T = u ? Mi(u) : window), e)) {
        case "focusin":
          (wp(T) || T.contentEditable === "true") &&
            ((Ri = T), (hc = u), (Bo = null));
          break;
        case "focusout":
          Bo = hc = Ri = null;
          break;
        case "mousedown":
          mc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (mc = !1), Cp(d, n, c);
          break;
        case "selectionchange":
          if (rw) break;
        case "keydown":
        case "keyup":
          Cp(d, n, c);
      }
      var k;
      if (kd)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        Ni
          ? og(e, n) && (N = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (ig &&
          n.locale !== "ko" &&
          (Ni || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && Ni && (k = rg())
            : ((hr = c),
              (Ed = "value" in hr ? hr.value : hr.textContent),
              (Ni = !0))),
        (T = Ol(u, N)),
        0 < T.length &&
          ((N = new gp(N, e, null, n, c)),
          d.push({ event: N, listeners: T }),
          k ? (N.data = k) : ((k = ag(n)), k !== null && (N.data = k)))),
        (k = W0 ? G0(e, n) : q0(e, n)) &&
          ((u = Ol(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new gp("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = k)));
    }
    yg(d, t);
  });
}
function ra(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ol(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Yo(e, n)),
      o != null && r.unshift(ra(e, o, i)),
      (o = Yo(e, t)),
      o != null && r.push(ra(e, o, i))),
      (e = e.return);
  }
  return r;
}
function Ei(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Pp(e, t, n, r, i) {
  for (var o = t._reactName, a = []; n !== null && n !== r; ) {
    var l = n,
      s = l.alternate,
      u = l.stateNode;
    if (s !== null && s === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((s = Yo(n, o)), s != null && a.unshift(ra(n, s, l)))
        : i || ((s = Yo(n, o)), s != null && a.push(ra(n, s, l)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var lw = /\r\n?/g,
  sw = /\u0000|\uFFFD/g;
function Op(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      lw,
      `
`
    )
    .replace(sw, "");
}
function qa(e, t, n) {
  if (((t = Op(t)), Op(e) !== t && n)) throw Error(Q(425));
}
function Nl() {}
var gc = null,
  vc = null;
function yc(e, t) {
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
var bc = typeof setTimeout == "function" ? setTimeout : void 0,
  uw = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Np = typeof Promise == "function" ? Promise : void 0,
  cw =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Np < "u"
      ? function (e) {
          return Np.resolve(null).then(e).catch(dw);
        }
      : bc;
function dw(e) {
  setTimeout(function () {
    throw e;
  });
}
function hu(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Zo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Zo(t);
}
function wr(e) {
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
function Rp(e) {
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
var po = Math.random().toString(36).slice(2),
  wn = "__reactFiber$" + po,
  ia = "__reactProps$" + po,
  Qn = "__reactContainer$" + po,
  wc = "__reactEvents$" + po,
  fw = "__reactListeners$" + po,
  pw = "__reactHandles$" + po;
function Wr(e) {
  var t = e[wn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Qn] || n[wn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Rp(e); e !== null; ) {
          if ((n = e[wn])) return n;
          e = Rp(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function wa(e) {
  return (
    (e = e[wn] || e[Qn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Mi(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(Q(33));
}
function cs(e) {
  return e[ia] || null;
}
var xc = [],
  ji = -1;
function Nr(e) {
  return { current: e };
}
function $e(e) {
  0 > ji || ((e.current = xc[ji]), (xc[ji] = null), ji--);
}
function Ae(e, t) {
  ji++, (xc[ji] = e.current), (e.current = t);
}
var kr = {},
  Et = Nr(kr),
  jt = Nr(!1),
  ni = kr;
function Ji(e, t) {
  var n = e.type.contextTypes;
  if (!n) return kr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function At(e) {
  return (e = e.childContextTypes), e != null;
}
function Rl() {
  $e(jt), $e(Et);
}
function Lp(e, t, n) {
  if (Et.current !== kr) throw Error(Q(168));
  Ae(Et, t), Ae(jt, n);
}
function wg(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(Q(108, Xb(e) || "Unknown", i));
  return Ge({}, n, r);
}
function Ll(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || kr),
    (ni = Et.current),
    Ae(Et, e),
    Ae(jt, jt.current),
    !0
  );
}
function Mp(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(Q(169));
  n
    ? ((e = wg(e, t, ni)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      $e(jt),
      $e(Et),
      Ae(Et, e))
    : $e(jt),
    Ae(jt, n);
}
var Fn = null,
  ds = !1,
  mu = !1;
function xg(e) {
  Fn === null ? (Fn = [e]) : Fn.push(e);
}
function hw(e) {
  (ds = !0), xg(e);
}
function Rr() {
  if (!mu && Fn !== null) {
    mu = !0;
    var e = 0,
      t = Pe;
    try {
      var n = Fn;
      for (Pe = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Fn = null), (ds = !1);
    } catch (i) {
      throw (Fn !== null && (Fn = Fn.slice(e + 1)), Gm(bd, Rr), i);
    } finally {
      (Pe = t), (mu = !1);
    }
  }
  return null;
}
var Ai = [],
  Di = 0,
  Ml = null,
  jl = 0,
  Xt = [],
  Jt = 0,
  ri = null,
  zn = 1,
  Bn = "";
function zr(e, t) {
  (Ai[Di++] = jl), (Ai[Di++] = Ml), (Ml = e), (jl = t);
}
function Sg(e, t, n) {
  (Xt[Jt++] = zn), (Xt[Jt++] = Bn), (Xt[Jt++] = ri), (ri = e);
  var r = zn;
  e = Bn;
  var i = 32 - fn(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - fn(t) + i;
  if (30 < o) {
    var a = i - (i % 5);
    (o = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (i -= a),
      (zn = (1 << (32 - fn(t) + i)) | (n << i) | r),
      (Bn = o + e);
  } else (zn = (1 << o) | (n << i) | r), (Bn = e);
}
function Pd(e) {
  e.return !== null && (zr(e, 1), Sg(e, 1, 0));
}
function Od(e) {
  for (; e === Ml; )
    (Ml = Ai[--Di]), (Ai[Di] = null), (jl = Ai[--Di]), (Ai[Di] = null);
  for (; e === ri; )
    (ri = Xt[--Jt]),
      (Xt[Jt] = null),
      (Bn = Xt[--Jt]),
      (Xt[Jt] = null),
      (zn = Xt[--Jt]),
      (Xt[Jt] = null);
}
var Bt = null,
  zt = null,
  Be = !1,
  dn = null;
function Eg(e, t) {
  var n = Zt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function jp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Bt = e), (zt = wr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Bt = e), (zt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = ri !== null ? { id: zn, overflow: Bn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Zt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Bt = e),
            (zt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Sc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ec(e) {
  if (Be) {
    var t = zt;
    if (t) {
      var n = t;
      if (!jp(e, t)) {
        if (Sc(e)) throw Error(Q(418));
        t = wr(n.nextSibling);
        var r = Bt;
        t && jp(e, t)
          ? Eg(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Be = !1), (Bt = e));
      }
    } else {
      if (Sc(e)) throw Error(Q(418));
      (e.flags = (e.flags & -4097) | 2), (Be = !1), (Bt = e);
    }
  }
}
function Ap(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Bt = e;
}
function Ka(e) {
  if (e !== Bt) return !1;
  if (!Be) return Ap(e), (Be = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !yc(e.type, e.memoizedProps))),
    t && (t = zt))
  ) {
    if (Sc(e)) throw (_g(), Error(Q(418)));
    for (; t; ) Eg(e, t), (t = wr(t.nextSibling));
  }
  if ((Ap(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(Q(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              zt = wr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      zt = null;
    }
  } else zt = Bt ? wr(e.stateNode.nextSibling) : null;
  return !0;
}
function _g() {
  for (var e = zt; e; ) e = wr(e.nextSibling);
}
function Zi() {
  (zt = Bt = null), (Be = !1);
}
function Nd(e) {
  dn === null ? (dn = [e]) : dn.push(e);
}
var mw = Jn.ReactCurrentBatchConfig;
function sn(e, t) {
  if (e && e.defaultProps) {
    (t = Ge({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Al = Nr(null),
  Dl = null,
  Ii = null,
  Rd = null;
function Ld() {
  Rd = Ii = Dl = null;
}
function Md(e) {
  var t = Al.current;
  $e(Al), (e._currentValue = t);
}
function _c(e, t, n) {
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
function Gi(e, t) {
  (Dl = e),
    (Rd = Ii = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Mt = !0), (e.firstContext = null));
}
function nn(e) {
  var t = e._currentValue;
  if (Rd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ii === null)) {
      if (Dl === null) throw Error(Q(308));
      (Ii = e), (Dl.dependencies = { lanes: 0, firstContext: e });
    } else Ii = Ii.next = e;
  return t;
}
var Gr = null;
function jd(e) {
  Gr === null ? (Gr = [e]) : Gr.push(e);
}
function Cg(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), jd(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Yn(e, r)
  );
}
function Yn(e, t) {
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
var ur = !1;
function Ad(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function kg(e, t) {
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
function Wn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function xr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), _e & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Yn(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), jd(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Yn(e, n)
  );
}
function ul(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), wd(e, n);
  }
}
function Dp(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = a) : (o = o.next = a), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
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
function Il(e, t, n, r) {
  var i = e.updateQueue;
  ur = !1;
  var o = i.firstBaseUpdate,
    a = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var s = l,
      u = s.next;
    (s.next = null), a === null ? (o = u) : (a.next = u), (a = s);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== a &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var d = i.baseState;
    (a = 0), (c = u = s = null), (l = o);
    do {
      var h = l.lane,
        g = l.eventTime;
      if ((r & h) === h) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var v = e,
            b = l;
          switch (((h = t), (g = n), b.tag)) {
            case 1:
              if (((v = b.payload), typeof v == "function")) {
                d = v.call(g, d, h);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = b.payload),
                (h = typeof v == "function" ? v.call(g, d, h) : v),
                h == null)
              )
                break e;
              d = Ge({}, d, h);
              break e;
            case 2:
              ur = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (h = i.effects),
          h === null ? (i.effects = [l]) : h.push(l));
      } else
        (g = {
          eventTime: g,
          lane: h,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (s = d)) : (c = c.next = g),
          (a |= h);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (h = l),
          (l = h.next),
          (h.next = null),
          (i.lastBaseUpdate = h),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (s = d),
      (i.baseState = s),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (a |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (oi |= a), (e.lanes = a), (e.memoizedState = d);
  }
}
function Ip(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(Q(191, i));
        i.call(r);
      }
    }
}
var Tg = new Cm.Component().refs;
function Cc(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Ge({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var fs = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? di(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Tt(),
      i = Er(e),
      o = Wn(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = xr(e, o, i)),
      t !== null && (pn(t, e, i, r), ul(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Tt(),
      i = Er(e),
      o = Wn(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = xr(e, o, i)),
      t !== null && (pn(t, e, i, r), ul(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Tt(),
      r = Er(e),
      i = Wn(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = xr(e, i, r)),
      t !== null && (pn(t, e, r, n), ul(t, e, r));
  },
};
function Fp(e, t, n, r, i, o, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ta(n, r) || !ta(i, o)
      : !0
  );
}
function Pg(e, t, n) {
  var r = !1,
    i = kr,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = nn(o))
      : ((i = At(t) ? ni : Et.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Ji(e, i) : kr)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = fs),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function $p(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && fs.enqueueReplaceState(t, t.state, null);
}
function kc(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Tg), Ad(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = nn(o))
    : ((o = At(t) ? ni : Et.current), (i.context = Ji(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Cc(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && fs.enqueueReplaceState(i, i.state, null),
      Il(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function So(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(Q(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(Q(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (a) {
            var l = i.refs;
            l === Tg && (l = i.refs = {}),
              a === null ? delete l[o] : (l[o] = a);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(Q(284));
    if (!n._owner) throw Error(Q(290, e));
  }
  return e;
}
function Qa(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      Q(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function zp(e) {
  var t = e._init;
  return t(e._payload);
}
function Og(e) {
  function t(f, p) {
    if (e) {
      var m = f.deletions;
      m === null ? ((f.deletions = [p]), (f.flags |= 16)) : m.push(p);
    }
  }
  function n(f, p) {
    if (!e) return null;
    for (; p !== null; ) t(f, p), (p = p.sibling);
    return null;
  }
  function r(f, p) {
    for (f = new Map(); p !== null; )
      p.key !== null ? f.set(p.key, p) : f.set(p.index, p), (p = p.sibling);
    return f;
  }
  function i(f, p) {
    return (f = _r(f, p)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, p, m) {
    return (
      (f.index = m),
      e
        ? ((m = f.alternate),
          m !== null
            ? ((m = m.index), m < p ? ((f.flags |= 2), p) : m)
            : ((f.flags |= 2), p))
        : ((f.flags |= 1048576), p)
    );
  }
  function a(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function l(f, p, m, w) {
    return p === null || p.tag !== 6
      ? ((p = Su(m, f.mode, w)), (p.return = f), p)
      : ((p = i(p, m)), (p.return = f), p);
  }
  function s(f, p, m, w) {
    var _ = m.type;
    return _ === Oi
      ? c(f, p, m.props.children, w, m.key)
      : p !== null &&
        (p.elementType === _ ||
          (typeof _ == "object" &&
            _ !== null &&
            _.$$typeof === sr &&
            zp(_) === p.type))
      ? ((w = i(p, m.props)), (w.ref = So(f, p, m)), (w.return = f), w)
      : ((w = ml(m.type, m.key, m.props, null, f.mode, w)),
        (w.ref = So(f, p, m)),
        (w.return = f),
        w);
  }
  function u(f, p, m, w) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== m.containerInfo ||
      p.stateNode.implementation !== m.implementation
      ? ((p = Eu(m, f.mode, w)), (p.return = f), p)
      : ((p = i(p, m.children || [])), (p.return = f), p);
  }
  function c(f, p, m, w, _) {
    return p === null || p.tag !== 7
      ? ((p = Zr(m, f.mode, w, _)), (p.return = f), p)
      : ((p = i(p, m)), (p.return = f), p);
  }
  function d(f, p, m) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = Su("" + p, f.mode, m)), (p.return = f), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Fa:
          return (
            (m = ml(p.type, p.key, p.props, null, f.mode, m)),
            (m.ref = So(f, null, p)),
            (m.return = f),
            m
          );
        case Pi:
          return (p = Eu(p, f.mode, m)), (p.return = f), p;
        case sr:
          var w = p._init;
          return d(f, w(p._payload), m);
      }
      if (Ro(p) || vo(p))
        return (p = Zr(p, f.mode, m, null)), (p.return = f), p;
      Qa(f, p);
    }
    return null;
  }
  function h(f, p, m, w) {
    var _ = p !== null ? p.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return _ !== null ? null : l(f, p, "" + m, w);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Fa:
          return m.key === _ ? s(f, p, m, w) : null;
        case Pi:
          return m.key === _ ? u(f, p, m, w) : null;
        case sr:
          return (_ = m._init), h(f, p, _(m._payload), w);
      }
      if (Ro(m) || vo(m)) return _ !== null ? null : c(f, p, m, w, null);
      Qa(f, m);
    }
    return null;
  }
  function g(f, p, m, w, _) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (f = f.get(m) || null), l(p, f, "" + w, _);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Fa:
          return (f = f.get(w.key === null ? m : w.key) || null), s(p, f, w, _);
        case Pi:
          return (f = f.get(w.key === null ? m : w.key) || null), u(p, f, w, _);
        case sr:
          var T = w._init;
          return g(f, p, m, T(w._payload), _);
      }
      if (Ro(w) || vo(w)) return (f = f.get(m) || null), c(p, f, w, _, null);
      Qa(p, w);
    }
    return null;
  }
  function v(f, p, m, w) {
    for (
      var _ = null, T = null, k = p, N = (p = 0), S = null;
      k !== null && N < m.length;
      N++
    ) {
      k.index > N ? ((S = k), (k = null)) : (S = k.sibling);
      var F = h(f, k, m[N], w);
      if (F === null) {
        k === null && (k = S);
        break;
      }
      e && k && F.alternate === null && t(f, k),
        (p = o(F, p, N)),
        T === null ? (_ = F) : (T.sibling = F),
        (T = F),
        (k = S);
    }
    if (N === m.length) return n(f, k), Be && zr(f, N), _;
    if (k === null) {
      for (; N < m.length; N++)
        (k = d(f, m[N], w)),
          k !== null &&
            ((p = o(k, p, N)), T === null ? (_ = k) : (T.sibling = k), (T = k));
      return Be && zr(f, N), _;
    }
    for (k = r(f, k); N < m.length; N++)
      (S = g(k, f, N, m[N], w)),
        S !== null &&
          (e && S.alternate !== null && k.delete(S.key === null ? N : S.key),
          (p = o(S, p, N)),
          T === null ? (_ = S) : (T.sibling = S),
          (T = S));
    return (
      e &&
        k.forEach(function (j) {
          return t(f, j);
        }),
      Be && zr(f, N),
      _
    );
  }
  function b(f, p, m, w) {
    var _ = vo(m);
    if (typeof _ != "function") throw Error(Q(150));
    if (((m = _.call(m)), m == null)) throw Error(Q(151));
    for (
      var T = (_ = null), k = p, N = (p = 0), S = null, F = m.next();
      k !== null && !F.done;
      N++, F = m.next()
    ) {
      k.index > N ? ((S = k), (k = null)) : (S = k.sibling);
      var j = h(f, k, F.value, w);
      if (j === null) {
        k === null && (k = S);
        break;
      }
      e && k && j.alternate === null && t(f, k),
        (p = o(j, p, N)),
        T === null ? (_ = j) : (T.sibling = j),
        (T = j),
        (k = S);
    }
    if (F.done) return n(f, k), Be && zr(f, N), _;
    if (k === null) {
      for (; !F.done; N++, F = m.next())
        (F = d(f, F.value, w)),
          F !== null &&
            ((p = o(F, p, N)), T === null ? (_ = F) : (T.sibling = F), (T = F));
      return Be && zr(f, N), _;
    }
    for (k = r(f, k); !F.done; N++, F = m.next())
      (F = g(k, f, N, F.value, w)),
        F !== null &&
          (e && F.alternate !== null && k.delete(F.key === null ? N : F.key),
          (p = o(F, p, N)),
          T === null ? (_ = F) : (T.sibling = F),
          (T = F));
    return (
      e &&
        k.forEach(function (I) {
          return t(f, I);
        }),
      Be && zr(f, N),
      _
    );
  }
  function E(f, p, m, w) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === Oi &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Fa:
          e: {
            for (var _ = m.key, T = p; T !== null; ) {
              if (T.key === _) {
                if (((_ = m.type), _ === Oi)) {
                  if (T.tag === 7) {
                    n(f, T.sibling),
                      (p = i(T, m.props.children)),
                      (p.return = f),
                      (f = p);
                    break e;
                  }
                } else if (
                  T.elementType === _ ||
                  (typeof _ == "object" &&
                    _ !== null &&
                    _.$$typeof === sr &&
                    zp(_) === T.type)
                ) {
                  n(f, T.sibling),
                    (p = i(T, m.props)),
                    (p.ref = So(f, T, m)),
                    (p.return = f),
                    (f = p);
                  break e;
                }
                n(f, T);
                break;
              } else t(f, T);
              T = T.sibling;
            }
            m.type === Oi
              ? ((p = Zr(m.props.children, f.mode, w, m.key)),
                (p.return = f),
                (f = p))
              : ((w = ml(m.type, m.key, m.props, null, f.mode, w)),
                (w.ref = So(f, p, m)),
                (w.return = f),
                (f = w));
          }
          return a(f);
        case Pi:
          e: {
            for (T = m.key; p !== null; ) {
              if (p.key === T)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === m.containerInfo &&
                  p.stateNode.implementation === m.implementation
                ) {
                  n(f, p.sibling),
                    (p = i(p, m.children || [])),
                    (p.return = f),
                    (f = p);
                  break e;
                } else {
                  n(f, p);
                  break;
                }
              else t(f, p);
              p = p.sibling;
            }
            (p = Eu(m, f.mode, w)), (p.return = f), (f = p);
          }
          return a(f);
        case sr:
          return (T = m._init), E(f, p, T(m._payload), w);
      }
      if (Ro(m)) return v(f, p, m, w);
      if (vo(m)) return b(f, p, m, w);
      Qa(f, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        p !== null && p.tag === 6
          ? (n(f, p.sibling), (p = i(p, m)), (p.return = f), (f = p))
          : (n(f, p), (p = Su(m, f.mode, w)), (p.return = f), (f = p)),
        a(f))
      : n(f, p);
  }
  return E;
}
var eo = Og(!0),
  Ng = Og(!1),
  xa = {},
  _n = Nr(xa),
  oa = Nr(xa),
  aa = Nr(xa);
function qr(e) {
  if (e === xa) throw Error(Q(174));
  return e;
}
function Dd(e, t) {
  switch ((Ae(aa, t), Ae(oa, e), Ae(_n, xa), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ic(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ic(t, e));
  }
  $e(_n), Ae(_n, t);
}
function to() {
  $e(_n), $e(oa), $e(aa);
}
function Rg(e) {
  qr(aa.current);
  var t = qr(_n.current),
    n = ic(t, e.type);
  t !== n && (Ae(oa, e), Ae(_n, n));
}
function Id(e) {
  oa.current === e && ($e(_n), $e(oa));
}
var Ve = Nr(0);
function Fl(e) {
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
var gu = [];
function Fd() {
  for (var e = 0; e < gu.length; e++)
    gu[e]._workInProgressVersionPrimary = null;
  gu.length = 0;
}
var cl = Jn.ReactCurrentDispatcher,
  vu = Jn.ReactCurrentBatchConfig,
  ii = 0,
  We = null,
  it = null,
  ut = null,
  $l = !1,
  Uo = !1,
  la = 0,
  gw = 0;
function bt() {
  throw Error(Q(321));
}
function $d(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!gn(e[n], t[n])) return !1;
  return !0;
}
function zd(e, t, n, r, i, o) {
  if (
    ((ii = o),
    (We = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (cl.current = e === null || e.memoizedState === null ? ww : xw),
    (e = n(r, i)),
    Uo)
  ) {
    o = 0;
    do {
      if (((Uo = !1), (la = 0), 25 <= o)) throw Error(Q(301));
      (o += 1),
        (ut = it = null),
        (t.updateQueue = null),
        (cl.current = Sw),
        (e = n(r, i));
    } while (Uo);
  }
  if (
    ((cl.current = zl),
    (t = it !== null && it.next !== null),
    (ii = 0),
    (ut = it = We = null),
    ($l = !1),
    t)
  )
    throw Error(Q(300));
  return e;
}
function Bd() {
  var e = la !== 0;
  return (la = 0), e;
}
function bn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ut === null ? (We.memoizedState = ut = e) : (ut = ut.next = e), ut;
}
function rn() {
  if (it === null) {
    var e = We.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = it.next;
  var t = ut === null ? We.memoizedState : ut.next;
  if (t !== null) (ut = t), (it = e);
  else {
    if (e === null) throw Error(Q(310));
    (it = e),
      (e = {
        memoizedState: it.memoizedState,
        baseState: it.baseState,
        baseQueue: it.baseQueue,
        queue: it.queue,
        next: null,
      }),
      ut === null ? (We.memoizedState = ut = e) : (ut = ut.next = e);
  }
  return ut;
}
function sa(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function yu(e) {
  var t = rn(),
    n = t.queue;
  if (n === null) throw Error(Q(311));
  n.lastRenderedReducer = e;
  var r = it,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var a = i.next;
      (i.next = o.next), (o.next = a);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var l = (a = null),
      s = null,
      u = o;
    do {
      var c = u.lane;
      if ((ii & c) === c)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((l = s = d), (a = r)) : (s = s.next = d),
          (We.lanes |= c),
          (oi |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    s === null ? (a = r) : (s.next = l),
      gn(r, t.memoizedState) || (Mt = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (We.lanes |= o), (oi |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function bu(e) {
  var t = rn(),
    n = t.queue;
  if (n === null) throw Error(Q(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var a = (i = i.next);
    do (o = e(o, a.action)), (a = a.next);
    while (a !== i);
    gn(o, t.memoizedState) || (Mt = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Lg() {}
function Mg(e, t) {
  var n = We,
    r = rn(),
    i = t(),
    o = !gn(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Mt = !0)),
    (r = r.queue),
    Ud(Dg.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ut !== null && ut.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ua(9, Ag.bind(null, n, r, i, t), void 0, null),
      ft === null)
    )
      throw Error(Q(349));
    ii & 30 || jg(n, t, i);
  }
  return i;
}
function jg(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = We.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (We.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ag(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ig(t) && Fg(e);
}
function Dg(e, t, n) {
  return n(function () {
    Ig(t) && Fg(e);
  });
}
function Ig(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !gn(e, n);
  } catch {
    return !0;
  }
}
function Fg(e) {
  var t = Yn(e, 1);
  t !== null && pn(t, e, 1, -1);
}
function Bp(e) {
  var t = bn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: sa,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = bw.bind(null, We, e)),
    [t.memoizedState, e]
  );
}
function ua(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = We.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (We.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function $g() {
  return rn().memoizedState;
}
function dl(e, t, n, r) {
  var i = bn();
  (We.flags |= e),
    (i.memoizedState = ua(1 | t, n, void 0, r === void 0 ? null : r));
}
function ps(e, t, n, r) {
  var i = rn();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (it !== null) {
    var a = it.memoizedState;
    if (((o = a.destroy), r !== null && $d(r, a.deps))) {
      i.memoizedState = ua(t, n, o, r);
      return;
    }
  }
  (We.flags |= e), (i.memoizedState = ua(1 | t, n, o, r));
}
function Up(e, t) {
  return dl(8390656, 8, e, t);
}
function Ud(e, t) {
  return ps(2048, 8, e, t);
}
function zg(e, t) {
  return ps(4, 2, e, t);
}
function Bg(e, t) {
  return ps(4, 4, e, t);
}
function Ug(e, t) {
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
function Hg(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ps(4, 4, Ug.bind(null, t, e), n)
  );
}
function Hd() {}
function Vg(e, t) {
  var n = rn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $d(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Wg(e, t) {
  var n = rn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $d(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Gg(e, t, n) {
  return ii & 21
    ? (gn(n, t) || ((n = Qm()), (We.lanes |= n), (oi |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Mt = !0)), (e.memoizedState = n));
}
function vw(e, t) {
  var n = Pe;
  (Pe = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = vu.transition;
  vu.transition = {};
  try {
    e(!1), t();
  } finally {
    (Pe = n), (vu.transition = r);
  }
}
function qg() {
  return rn().memoizedState;
}
function yw(e, t, n) {
  var r = Er(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Kg(e))
  )
    Qg(t, n);
  else if (((n = Cg(e, t, n, r)), n !== null)) {
    var i = Tt();
    pn(n, e, r, i), Yg(n, t, r);
  }
}
function bw(e, t, n) {
  var r = Er(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Kg(e)) Qg(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var a = t.lastRenderedState,
          l = o(a, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), gn(l, a))) {
          var s = t.interleaved;
          s === null
            ? ((i.next = i), jd(t))
            : ((i.next = s.next), (s.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Cg(e, t, i, r)),
      n !== null && ((i = Tt()), pn(n, e, r, i), Yg(n, t, r));
  }
}
function Kg(e) {
  var t = e.alternate;
  return e === We || (t !== null && t === We);
}
function Qg(e, t) {
  Uo = $l = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Yg(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), wd(e, n);
  }
}
var zl = {
    readContext: nn,
    useCallback: bt,
    useContext: bt,
    useEffect: bt,
    useImperativeHandle: bt,
    useInsertionEffect: bt,
    useLayoutEffect: bt,
    useMemo: bt,
    useReducer: bt,
    useRef: bt,
    useState: bt,
    useDebugValue: bt,
    useDeferredValue: bt,
    useTransition: bt,
    useMutableSource: bt,
    useSyncExternalStore: bt,
    useId: bt,
    unstable_isNewReconciler: !1,
  },
  ww = {
    readContext: nn,
    useCallback: function (e, t) {
      return (bn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: nn,
    useEffect: Up,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        dl(4194308, 4, Ug.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return dl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return dl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = bn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = bn();
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
        (e = e.dispatch = yw.bind(null, We, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = bn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Bp,
    useDebugValue: Hd,
    useDeferredValue: function (e) {
      return (bn().memoizedState = e);
    },
    useTransition: function () {
      var e = Bp(!1),
        t = e[0];
      return (e = vw.bind(null, e[1])), (bn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = We,
        i = bn();
      if (Be) {
        if (n === void 0) throw Error(Q(407));
        n = n();
      } else {
        if (((n = t()), ft === null)) throw Error(Q(349));
        ii & 30 || jg(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Up(Dg.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        ua(9, Ag.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = bn(),
        t = ft.identifierPrefix;
      if (Be) {
        var n = Bn,
          r = zn;
        (n = (r & ~(1 << (32 - fn(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = la++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = gw++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  xw = {
    readContext: nn,
    useCallback: Vg,
    useContext: nn,
    useEffect: Ud,
    useImperativeHandle: Hg,
    useInsertionEffect: zg,
    useLayoutEffect: Bg,
    useMemo: Wg,
    useReducer: yu,
    useRef: $g,
    useState: function () {
      return yu(sa);
    },
    useDebugValue: Hd,
    useDeferredValue: function (e) {
      var t = rn();
      return Gg(t, it.memoizedState, e);
    },
    useTransition: function () {
      var e = yu(sa)[0],
        t = rn().memoizedState;
      return [e, t];
    },
    useMutableSource: Lg,
    useSyncExternalStore: Mg,
    useId: qg,
    unstable_isNewReconciler: !1,
  },
  Sw = {
    readContext: nn,
    useCallback: Vg,
    useContext: nn,
    useEffect: Ud,
    useImperativeHandle: Hg,
    useInsertionEffect: zg,
    useLayoutEffect: Bg,
    useMemo: Wg,
    useReducer: bu,
    useRef: $g,
    useState: function () {
      return bu(sa);
    },
    useDebugValue: Hd,
    useDeferredValue: function (e) {
      var t = rn();
      return it === null ? (t.memoizedState = e) : Gg(t, it.memoizedState, e);
    },
    useTransition: function () {
      var e = bu(sa)[0],
        t = rn().memoizedState;
      return [e, t];
    },
    useMutableSource: Lg,
    useSyncExternalStore: Mg,
    useId: qg,
    unstable_isNewReconciler: !1,
  };
function no(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Yb(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function wu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Tc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Ew = typeof WeakMap == "function" ? WeakMap : Map;
function Xg(e, t, n) {
  (n = Wn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ul || ((Ul = !0), (Ic = r)), Tc(e, t);
    }),
    n
  );
}
function Jg(e, t, n) {
  (n = Wn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Tc(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Tc(e, t),
          typeof r != "function" &&
            (Sr === null ? (Sr = new Set([this])) : Sr.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function Hp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Ew();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Iw.bind(null, e, t, n)), t.then(e, e));
}
function Vp(e) {
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
function Wp(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Wn(-1, 1)), (t.tag = 2), xr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var _w = Jn.ReactCurrentOwner,
  Mt = !1;
function Ct(e, t, n, r) {
  t.child = e === null ? Ng(t, null, n, r) : eo(t, e.child, n, r);
}
function Gp(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Gi(t, i),
    (r = zd(e, t, n, r, o, i)),
    (n = Bd()),
    e !== null && !Mt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Xn(e, t, i))
      : (Be && n && Pd(t), (t.flags |= 1), Ct(e, t, r, i), t.child)
  );
}
function qp(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Xd(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Zg(e, t, o, r, i))
      : ((e = ml(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var a = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ta), n(a, r) && e.ref === t.ref)
    )
      return Xn(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = _r(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Zg(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (ta(o, r) && e.ref === t.ref)
      if (((Mt = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Mt = !0);
      else return (t.lanes = e.lanes), Xn(e, t, i);
  }
  return Pc(e, t, n, r, i);
}
function ev(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Ae($i, Ft),
        (Ft |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Ae($i, Ft),
          (Ft |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        Ae($i, Ft),
        (Ft |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Ae($i, Ft),
      (Ft |= r);
  return Ct(e, t, i, n), t.child;
}
function tv(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Pc(e, t, n, r, i) {
  var o = At(n) ? ni : Et.current;
  return (
    (o = Ji(t, o)),
    Gi(t, i),
    (n = zd(e, t, n, r, o, i)),
    (r = Bd()),
    e !== null && !Mt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Xn(e, t, i))
      : (Be && r && Pd(t), (t.flags |= 1), Ct(e, t, n, i), t.child)
  );
}
function Kp(e, t, n, r, i) {
  if (At(n)) {
    var o = !0;
    Ll(t);
  } else o = !1;
  if ((Gi(t, i), t.stateNode === null))
    fl(e, t), Pg(t, n, r), kc(t, n, r, i), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      l = t.memoizedProps;
    a.props = l;
    var s = a.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = nn(u))
      : ((u = At(n) ? ni : Et.current), (u = Ji(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== r || s !== u) && $p(t, a, r, u)),
      (ur = !1);
    var h = t.memoizedState;
    (a.state = h),
      Il(t, r, a, i),
      (s = t.memoizedState),
      l !== r || h !== s || jt.current || ur
        ? (typeof c == "function" && (Cc(t, n, c, r), (s = t.memoizedState)),
          (l = ur || Fp(t, n, l, r, h, s, u))
            ? (d ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (a.props = r),
          (a.state = s),
          (a.context = u),
          (r = l))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      kg(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : sn(t.type, l)),
      (a.props = u),
      (d = t.pendingProps),
      (h = a.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = nn(s))
        : ((s = At(n) ? ni : Et.current), (s = Ji(t, s)));
    var g = n.getDerivedStateFromProps;
    (c =
      typeof g == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== d || h !== s) && $p(t, a, r, s)),
      (ur = !1),
      (h = t.memoizedState),
      (a.state = h),
      Il(t, r, a, i);
    var v = t.memoizedState;
    l !== d || h !== v || jt.current || ur
      ? (typeof g == "function" && (Cc(t, n, g, r), (v = t.memoizedState)),
        (u = ur || Fp(t, n, u, r, h, v, s) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, v, s),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, v, s)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (a.props = r),
        (a.state = v),
        (a.context = s),
        (r = u))
      : (typeof a.componentDidUpdate != "function" ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Oc(e, t, n, r, o, i);
}
function Oc(e, t, n, r, i, o) {
  tv(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return i && Mp(t, n, !1), Xn(e, t, o);
  (r = t.stateNode), (_w.current = t);
  var l =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = eo(t, e.child, null, o)), (t.child = eo(t, null, l, o)))
      : Ct(e, t, l, o),
    (t.memoizedState = r.state),
    i && Mp(t, n, !0),
    t.child
  );
}
function nv(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Lp(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Lp(e, t.context, !1),
    Dd(e, t.containerInfo);
}
function Qp(e, t, n, r, i) {
  return Zi(), Nd(i), (t.flags |= 256), Ct(e, t, n, r), t.child;
}
var Nc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Rc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function rv(e, t, n) {
  var r = t.pendingProps,
    i = Ve.current,
    o = !1,
    a = (t.flags & 128) !== 0,
    l;
  if (
    ((l = a) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    Ae(Ve, i & 1),
    e === null)
  )
    return (
      Ec(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = a))
                : (o = gs(a, r, 0, null)),
              (e = Zr(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Rc(n)),
              (t.memoizedState = Nc),
              e)
            : Vd(t, a))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return Cw(e, t, a, r, l, i, n);
  if (o) {
    (o = r.fallback), (a = t.mode), (i = e.child), (l = i.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = _r(i, s)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = _r(l, o)) : ((o = Zr(o, a, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Rc(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (o.memoizedState = a),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Nc),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = _r(o, { mode: "visible", children: r.children })),
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
function Vd(e, t) {
  return (
    (t = gs({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ya(e, t, n, r) {
  return (
    r !== null && Nd(r),
    eo(t, e.child, null, n),
    (e = Vd(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Cw(e, t, n, r, i, o, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = wu(Error(Q(422)))), Ya(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = gs({ mode: "visible", children: r.children }, i, 0, null)),
        (o = Zr(o, i, a, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && eo(t, e.child, null, a),
        (t.child.memoizedState = Rc(a)),
        (t.memoizedState = Nc),
        o);
  if (!(t.mode & 1)) return Ya(e, t, a, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(Q(419))), (r = wu(o, r, void 0)), Ya(e, t, a, r);
  }
  if (((l = (a & e.childLanes) !== 0), Mt || l)) {
    if (((r = ft), r !== null)) {
      switch (a & -a) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | a) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), Yn(e, i), pn(r, e, i, -1));
    }
    return Yd(), (r = wu(Error(Q(421)))), Ya(e, t, a, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Fw.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (zt = wr(i.nextSibling)),
      (Bt = t),
      (Be = !0),
      (dn = null),
      e !== null &&
        ((Xt[Jt++] = zn),
        (Xt[Jt++] = Bn),
        (Xt[Jt++] = ri),
        (zn = e.id),
        (Bn = e.overflow),
        (ri = t)),
      (t = Vd(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Yp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), _c(e.return, t, n);
}
function xu(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function iv(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Ct(e, t, r.children, n), (r = Ve.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Yp(e, n, t);
        else if (e.tag === 19) Yp(e, n, t);
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
  if ((Ae(Ve, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Fl(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          xu(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Fl(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        xu(t, !0, n, null, o);
        break;
      case "together":
        xu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function fl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Xn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (oi |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(Q(153));
  if (t.child !== null) {
    for (
      e = t.child, n = _r(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = _r(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function kw(e, t, n) {
  switch (t.tag) {
    case 3:
      nv(t), Zi();
      break;
    case 5:
      Rg(t);
      break;
    case 1:
      At(t.type) && Ll(t);
      break;
    case 4:
      Dd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      Ae(Al, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Ae(Ve, Ve.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? rv(e, t, n)
          : (Ae(Ve, Ve.current & 1),
            (e = Xn(e, t, n)),
            e !== null ? e.sibling : null);
      Ae(Ve, Ve.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return iv(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        Ae(Ve, Ve.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), ev(e, t, n);
  }
  return Xn(e, t, n);
}
var ov, Lc, av, lv;
ov = function (e, t) {
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
Lc = function () {};
av = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), qr(_n.current);
    var o = null;
    switch (n) {
      case "input":
        (i = ec(e, i)), (r = ec(e, r)), (o = []);
        break;
      case "select":
        (i = Ge({}, i, { value: void 0 })),
          (r = Ge({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = rc(e, i)), (r = rc(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Nl);
    }
    oc(n, r);
    var a;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (a in l) l.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Ko.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && s !== l && (s != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (a in l)
              !l.hasOwnProperty(a) ||
                (s && s.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in s)
              s.hasOwnProperty(a) &&
                l[a] !== s[a] &&
                (n || (n = {}), (n[a] = s[a]));
          } else n || (o || (o = []), o.push(u, n)), (n = s);
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (l = l ? l.__html : void 0),
              s != null && l !== s && (o = o || []).push(u, s))
            : u === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(u, "" + s)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Ko.hasOwnProperty(u)
                ? (s != null && u === "onScroll" && Fe("scroll", e),
                  o || l === s || (o = []))
                : (o = o || []).push(u, s));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
lv = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Eo(e, t) {
  if (!Be)
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
function wt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Tw(e, t, n) {
  var r = t.pendingProps;
  switch ((Od(t), t.tag)) {
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
      return wt(t), null;
    case 1:
      return At(t.type) && Rl(), wt(t), null;
    case 3:
      return (
        (r = t.stateNode),
        to(),
        $e(jt),
        $e(Et),
        Fd(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ka(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), dn !== null && (zc(dn), (dn = null)))),
        Lc(e, t),
        wt(t),
        null
      );
    case 5:
      Id(t);
      var i = qr(aa.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        av(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(Q(166));
          return wt(t), null;
        }
        if (((e = qr(_n.current)), Ka(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[wn] = t), (r[ia] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Fe("cancel", r), Fe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Fe("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Mo.length; i++) Fe(Mo[i], r);
              break;
            case "source":
              Fe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Fe("error", r), Fe("load", r);
              break;
            case "details":
              Fe("toggle", r);
              break;
            case "input":
              op(r, o), Fe("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                Fe("invalid", r);
              break;
            case "textarea":
              lp(r, o), Fe("invalid", r);
          }
          oc(n, o), (i = null);
          for (var a in o)
            if (o.hasOwnProperty(a)) {
              var l = o[a];
              a === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      qa(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      qa(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : Ko.hasOwnProperty(a) &&
                  l != null &&
                  a === "onScroll" &&
                  Fe("scroll", r);
            }
          switch (n) {
            case "input":
              $a(r), ap(r, o, !0);
              break;
            case "textarea":
              $a(r), sp(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Nl);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = jm(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[wn] = t),
            (e[ia] = r),
            ov(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = ac(n, r)), n)) {
              case "dialog":
                Fe("cancel", e), Fe("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Fe("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Mo.length; i++) Fe(Mo[i], e);
                i = r;
                break;
              case "source":
                Fe("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                Fe("error", e), Fe("load", e), (i = r);
                break;
              case "details":
                Fe("toggle", e), (i = r);
                break;
              case "input":
                op(e, r), (i = ec(e, r)), Fe("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Ge({}, r, { value: void 0 })),
                  Fe("invalid", e);
                break;
              case "textarea":
                lp(e, r), (i = rc(e, r)), Fe("invalid", e);
                break;
              default:
                i = r;
            }
            oc(n, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var s = l[o];
                o === "style"
                  ? Im(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Am(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Qo(e, s)
                    : typeof s == "number" && Qo(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Ko.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && Fe("scroll", e)
                      : s != null && hd(e, o, s, a));
              }
            switch (n) {
              case "input":
                $a(e), ap(e, r, !1);
                break;
              case "textarea":
                $a(e), sp(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Cr(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Ui(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Ui(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Nl);
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
      return wt(t), null;
    case 6:
      if (e && t.stateNode != null) lv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(Q(166));
        if (((n = qr(aa.current)), qr(_n.current), Ka(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[wn] = t),
            (o = r.nodeValue !== n) && ((e = Bt), e !== null))
          )
            switch (e.tag) {
              case 3:
                qa(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  qa(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[wn] = t),
            (t.stateNode = r);
      }
      return wt(t), null;
    case 13:
      if (
        ($e(Ve),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Be && zt !== null && t.mode & 1 && !(t.flags & 128))
          _g(), Zi(), (t.flags |= 98560), (o = !1);
        else if (((o = Ka(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(Q(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(Q(317));
            o[wn] = t;
          } else
            Zi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          wt(t), (o = !1);
        } else dn !== null && (zc(dn), (dn = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Ve.current & 1 ? ot === 0 && (ot = 3) : Yd())),
          t.updateQueue !== null && (t.flags |= 4),
          wt(t),
          null);
    case 4:
      return (
        to(), Lc(e, t), e === null && na(t.stateNode.containerInfo), wt(t), null
      );
    case 10:
      return Md(t.type._context), wt(t), null;
    case 17:
      return At(t.type) && Rl(), wt(t), null;
    case 19:
      if (($e(Ve), (o = t.memoizedState), o === null)) return wt(t), null;
      if (((r = (t.flags & 128) !== 0), (a = o.rendering), a === null))
        if (r) Eo(o, !1);
        else {
          if (ot !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = Fl(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Eo(o, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (a = o.alternate),
                    a === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = a.childLanes),
                        (o.lanes = a.lanes),
                        (o.child = a.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = a.memoizedProps),
                        (o.memoizedState = a.memoizedState),
                        (o.updateQueue = a.updateQueue),
                        (o.type = a.type),
                        (e = a.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Ae(Ve, (Ve.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Je() > ro &&
            ((t.flags |= 128), (r = !0), Eo(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Fl(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Eo(o, !0),
              o.tail === null && o.tailMode === "hidden" && !a.alternate && !Be)
            )
              return wt(t), null;
          } else
            2 * Je() - o.renderingStartTime > ro &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Eo(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = o.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (o.last = a));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Je()),
          (t.sibling = null),
          (n = Ve.current),
          Ae(Ve, r ? (n & 1) | 2 : n & 1),
          t)
        : (wt(t), null);
    case 22:
    case 23:
      return (
        Qd(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ft & 1073741824 && (wt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : wt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(Q(156, t.tag));
}
function Pw(e, t) {
  switch ((Od(t), t.tag)) {
    case 1:
      return (
        At(t.type) && Rl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        to(),
        $e(jt),
        $e(Et),
        Fd(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Id(t), null;
    case 13:
      if (
        ($e(Ve), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(Q(340));
        Zi();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return $e(Ve), null;
    case 4:
      return to(), null;
    case 10:
      return Md(t.type._context), null;
    case 22:
    case 23:
      return Qd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Xa = !1,
  xt = !1,
  Ow = typeof WeakSet == "function" ? WeakSet : Set,
  oe = null;
function Fi(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ke(e, t, r);
      }
    else n.current = null;
}
function Mc(e, t, n) {
  try {
    n();
  } catch (r) {
    Ke(e, t, r);
  }
}
var Xp = !1;
function Nw(e, t) {
  if (((gc = Tl), (e = dg()), Td(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            l = -1,
            s = -1,
            u = 0,
            c = 0,
            d = e,
            h = null;
          t: for (;;) {
            for (
              var g;
              d !== n || (i !== 0 && d.nodeType !== 3) || (l = a + i),
                d !== o || (r !== 0 && d.nodeType !== 3) || (s = a + r),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (g = d.firstChild) !== null;

            )
              (h = d), (d = g);
            for (;;) {
              if (d === e) break t;
              if (
                (h === n && ++u === i && (l = a),
                h === o && ++c === r && (s = a),
                (g = d.nextSibling) !== null)
              )
                break;
              (d = h), (h = d.parentNode);
            }
            d = g;
          }
          n = l === -1 || s === -1 ? null : { start: l, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (
    vc = { focusedElem: e, selectionRange: n }, Tl = !1, oe = t;
    oe !== null;

  )
    if (((t = oe), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (oe = e);
    else
      for (; oe !== null; ) {
        t = oe;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var b = v.memoizedProps,
                    E = v.memoizedState,
                    f = t.stateNode,
                    p = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? b : sn(t.type, b),
                      E
                    );
                  f.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(Q(163));
            }
        } catch (w) {
          Ke(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (oe = e);
          break;
        }
        oe = t.return;
      }
  return (v = Xp), (Xp = !1), v;
}
function Ho(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Mc(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function hs(e, t) {
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
function jc(e) {
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
function sv(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), sv(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[wn], delete t[ia], delete t[wc], delete t[fw], delete t[pw])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function uv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Jp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || uv(e.return)) return null;
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
function Ac(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Nl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ac(e, t, n), e = e.sibling; e !== null; ) Ac(e, t, n), (e = e.sibling);
}
function Dc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Dc(e, t, n), e = e.sibling; e !== null; ) Dc(e, t, n), (e = e.sibling);
}
var gt = null,
  cn = !1;
function rr(e, t, n) {
  for (n = n.child; n !== null; ) cv(e, t, n), (n = n.sibling);
}
function cv(e, t, n) {
  if (En && typeof En.onCommitFiberUnmount == "function")
    try {
      En.onCommitFiberUnmount(as, n);
    } catch {}
  switch (n.tag) {
    case 5:
      xt || Fi(n, t);
    case 6:
      var r = gt,
        i = cn;
      (gt = null),
        rr(e, t, n),
        (gt = r),
        (cn = i),
        gt !== null &&
          (cn
            ? ((e = gt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : gt.removeChild(n.stateNode));
      break;
    case 18:
      gt !== null &&
        (cn
          ? ((e = gt),
            (n = n.stateNode),
            e.nodeType === 8
              ? hu(e.parentNode, n)
              : e.nodeType === 1 && hu(e, n),
            Zo(e))
          : hu(gt, n.stateNode));
      break;
    case 4:
      (r = gt),
        (i = cn),
        (gt = n.stateNode.containerInfo),
        (cn = !0),
        rr(e, t, n),
        (gt = r),
        (cn = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !xt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            a = o.destroy;
          (o = o.tag),
            a !== void 0 && (o & 2 || o & 4) && Mc(n, t, a),
            (i = i.next);
        } while (i !== r);
      }
      rr(e, t, n);
      break;
    case 1:
      if (
        !xt &&
        (Fi(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Ke(n, t, l);
        }
      rr(e, t, n);
      break;
    case 21:
      rr(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((xt = (r = xt) || n.memoizedState !== null), rr(e, t, n), (xt = r))
        : rr(e, t, n);
      break;
    default:
      rr(e, t, n);
  }
}
function Zp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ow()),
      t.forEach(function (r) {
        var i = $w.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function ln(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          a = t,
          l = a;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (gt = l.stateNode), (cn = !1);
              break e;
            case 3:
              (gt = l.stateNode.containerInfo), (cn = !0);
              break e;
            case 4:
              (gt = l.stateNode.containerInfo), (cn = !0);
              break e;
          }
          l = l.return;
        }
        if (gt === null) throw Error(Q(160));
        cv(o, a, i), (gt = null), (cn = !1);
        var s = i.alternate;
        s !== null && (s.return = null), (i.return = null);
      } catch (u) {
        Ke(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) dv(t, e), (t = t.sibling);
}
function dv(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ln(t, e), yn(e), r & 4)) {
        try {
          Ho(3, e, e.return), hs(3, e);
        } catch (b) {
          Ke(e, e.return, b);
        }
        try {
          Ho(5, e, e.return);
        } catch (b) {
          Ke(e, e.return, b);
        }
      }
      break;
    case 1:
      ln(t, e), yn(e), r & 512 && n !== null && Fi(n, n.return);
      break;
    case 5:
      if (
        (ln(t, e),
        yn(e),
        r & 512 && n !== null && Fi(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Qo(i, "");
        } catch (b) {
          Ke(e, e.return, b);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          a = n !== null ? n.memoizedProps : o,
          l = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            l === "input" && o.type === "radio" && o.name != null && Lm(i, o),
              ac(l, a);
            var u = ac(l, o);
            for (a = 0; a < s.length; a += 2) {
              var c = s[a],
                d = s[a + 1];
              c === "style"
                ? Im(i, d)
                : c === "dangerouslySetInnerHTML"
                ? Am(i, d)
                : c === "children"
                ? Qo(i, d)
                : hd(i, c, d, u);
            }
            switch (l) {
              case "input":
                tc(i, o);
                break;
              case "textarea":
                Mm(i, o);
                break;
              case "select":
                var h = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? Ui(i, !!o.multiple, g, !1)
                  : h !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Ui(i, !!o.multiple, o.defaultValue, !0)
                      : Ui(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[ia] = o;
          } catch (b) {
            Ke(e, e.return, b);
          }
      }
      break;
    case 6:
      if ((ln(t, e), yn(e), r & 4)) {
        if (e.stateNode === null) throw Error(Q(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (b) {
          Ke(e, e.return, b);
        }
      }
      break;
    case 3:
      if (
        (ln(t, e), yn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Zo(t.containerInfo);
        } catch (b) {
          Ke(e, e.return, b);
        }
      break;
    case 4:
      ln(t, e), yn(e);
      break;
    case 13:
      ln(t, e),
        yn(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (qd = Je())),
        r & 4 && Zp(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((xt = (u = xt) || c), ln(t, e), (xt = u)) : ln(t, e),
        yn(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (oe = e, c = e.child; c !== null; ) {
            for (d = oe = c; oe !== null; ) {
              switch (((h = oe), (g = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ho(4, h, h.return);
                  break;
                case 1:
                  Fi(h, h.return);
                  var v = h.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (b) {
                      Ke(r, n, b);
                    }
                  }
                  break;
                case 5:
                  Fi(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    th(d);
                    continue;
                  }
              }
              g !== null ? ((g.return = h), (oe = g)) : th(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (i = d.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((l = d.stateNode),
                      (s = d.memoizedProps.style),
                      (a =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (l.style.display = Dm("display", a)));
              } catch (b) {
                Ke(e, e.return, b);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (b) {
                Ke(e, e.return, b);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      ln(t, e), yn(e), r & 4 && Zp(e);
      break;
    case 21:
      break;
    default:
      ln(t, e), yn(e);
  }
}
function yn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (uv(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(Q(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Qo(i, ""), (r.flags &= -33));
          var o = Jp(e);
          Dc(e, o, i);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            l = Jp(e);
          Ac(e, l, a);
          break;
        default:
          throw Error(Q(161));
      }
    } catch (s) {
      Ke(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Rw(e, t, n) {
  (oe = e), fv(e);
}
function fv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; oe !== null; ) {
    var i = oe,
      o = i.child;
    if (i.tag === 22 && r) {
      var a = i.memoizedState !== null || Xa;
      if (!a) {
        var l = i.alternate,
          s = (l !== null && l.memoizedState !== null) || xt;
        l = Xa;
        var u = xt;
        if (((Xa = a), (xt = s) && !u))
          for (oe = i; oe !== null; )
            (a = oe),
              (s = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? nh(i)
                : s !== null
                ? ((s.return = a), (oe = s))
                : nh(i);
        for (; o !== null; ) (oe = o), fv(o), (o = o.sibling);
        (oe = i), (Xa = l), (xt = u);
      }
      eh(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (oe = o)) : eh(e);
  }
}
function eh(e) {
  for (; oe !== null; ) {
    var t = oe;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              xt || hs(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !xt)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : sn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Ip(t, o, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ip(t, a, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
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
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Zo(d);
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
              throw Error(Q(163));
          }
        xt || (t.flags & 512 && jc(t));
      } catch (h) {
        Ke(t, t.return, h);
      }
    }
    if (t === e) {
      oe = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (oe = n);
      break;
    }
    oe = t.return;
  }
}
function th(e) {
  for (; oe !== null; ) {
    var t = oe;
    if (t === e) {
      oe = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (oe = n);
      break;
    }
    oe = t.return;
  }
}
function nh(e) {
  for (; oe !== null; ) {
    var t = oe;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            hs(4, t);
          } catch (s) {
            Ke(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Ke(t, i, s);
            }
          }
          var o = t.return;
          try {
            jc(t);
          } catch (s) {
            Ke(t, o, s);
          }
          break;
        case 5:
          var a = t.return;
          try {
            jc(t);
          } catch (s) {
            Ke(t, a, s);
          }
      }
    } catch (s) {
      Ke(t, t.return, s);
    }
    if (t === e) {
      oe = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (oe = l);
      break;
    }
    oe = t.return;
  }
}
var Lw = Math.ceil,
  Bl = Jn.ReactCurrentDispatcher,
  Wd = Jn.ReactCurrentOwner,
  en = Jn.ReactCurrentBatchConfig,
  _e = 0,
  ft = null,
  tt = null,
  vt = 0,
  Ft = 0,
  $i = Nr(0),
  ot = 0,
  ca = null,
  oi = 0,
  ms = 0,
  Gd = 0,
  Vo = null,
  Lt = null,
  qd = 0,
  ro = 1 / 0,
  Dn = null,
  Ul = !1,
  Ic = null,
  Sr = null,
  Ja = !1,
  mr = null,
  Hl = 0,
  Wo = 0,
  Fc = null,
  pl = -1,
  hl = 0;
function Tt() {
  return _e & 6 ? Je() : pl !== -1 ? pl : (pl = Je());
}
function Er(e) {
  return e.mode & 1
    ? _e & 2 && vt !== 0
      ? vt & -vt
      : mw.transition !== null
      ? (hl === 0 && (hl = Qm()), hl)
      : ((e = Pe),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ng(e.type))),
        e)
    : 1;
}
function pn(e, t, n, r) {
  if (50 < Wo) throw ((Wo = 0), (Fc = null), Error(Q(185)));
  ya(e, n, r),
    (!(_e & 2) || e !== ft) &&
      (e === ft && (!(_e & 2) && (ms |= n), ot === 4 && pr(e, vt)),
      Dt(e, r),
      n === 1 && _e === 0 && !(t.mode & 1) && ((ro = Je() + 500), ds && Rr()));
}
function Dt(e, t) {
  var n = e.callbackNode;
  m0(e, t);
  var r = kl(e, e === ft ? vt : 0);
  if (r === 0)
    n !== null && dp(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && dp(n), t === 1))
      e.tag === 0 ? hw(rh.bind(null, e)) : xg(rh.bind(null, e)),
        cw(function () {
          !(_e & 6) && Rr();
        }),
        (n = null);
    else {
      switch (Ym(r)) {
        case 1:
          n = bd;
          break;
        case 4:
          n = qm;
          break;
        case 16:
          n = Cl;
          break;
        case 536870912:
          n = Km;
          break;
        default:
          n = Cl;
      }
      n = wv(n, pv.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function pv(e, t) {
  if (((pl = -1), (hl = 0), _e & 6)) throw Error(Q(327));
  var n = e.callbackNode;
  if (qi() && e.callbackNode !== n) return null;
  var r = kl(e, e === ft ? vt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Vl(e, r);
  else {
    t = r;
    var i = _e;
    _e |= 2;
    var o = mv();
    (ft !== e || vt !== t) && ((Dn = null), (ro = Je() + 500), Jr(e, t));
    do
      try {
        Aw();
        break;
      } catch (l) {
        hv(e, l);
      }
    while (1);
    Ld(),
      (Bl.current = o),
      (_e = i),
      tt !== null ? (t = 0) : ((ft = null), (vt = 0), (t = ot));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = dc(e)), i !== 0 && ((r = i), (t = $c(e, i)))), t === 1)
    )
      throw ((n = ca), Jr(e, 0), pr(e, r), Dt(e, Je()), n);
    if (t === 6) pr(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Mw(i) &&
          ((t = Vl(e, r)),
          t === 2 && ((o = dc(e)), o !== 0 && ((r = o), (t = $c(e, o)))),
          t === 1))
      )
        throw ((n = ca), Jr(e, 0), pr(e, r), Dt(e, Je()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(Q(345));
        case 2:
          Br(e, Lt, Dn);
          break;
        case 3:
          if (
            (pr(e, r), (r & 130023424) === r && ((t = qd + 500 - Je()), 10 < t))
          ) {
            if (kl(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Tt(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = bc(Br.bind(null, e, Lt, Dn), t);
            break;
          }
          Br(e, Lt, Dn);
          break;
        case 4:
          if ((pr(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var a = 31 - fn(r);
            (o = 1 << a), (a = t[a]), a > i && (i = a), (r &= ~o);
          }
          if (
            ((r = i),
            (r = Je() - r),
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
                : 1960 * Lw(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = bc(Br.bind(null, e, Lt, Dn), r);
            break;
          }
          Br(e, Lt, Dn);
          break;
        case 5:
          Br(e, Lt, Dn);
          break;
        default:
          throw Error(Q(329));
      }
    }
  }
  return Dt(e, Je()), e.callbackNode === n ? pv.bind(null, e) : null;
}
function $c(e, t) {
  var n = Vo;
  return (
    e.current.memoizedState.isDehydrated && (Jr(e, t).flags |= 256),
    (e = Vl(e, t)),
    e !== 2 && ((t = Lt), (Lt = n), t !== null && zc(t)),
    e
  );
}
function zc(e) {
  Lt === null ? (Lt = e) : Lt.push.apply(Lt, e);
}
function Mw(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!gn(o(), i)) return !1;
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
function pr(e, t) {
  for (
    t &= ~Gd,
      t &= ~ms,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - fn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function rh(e) {
  if (_e & 6) throw Error(Q(327));
  qi();
  var t = kl(e, 0);
  if (!(t & 1)) return Dt(e, Je()), null;
  var n = Vl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = dc(e);
    r !== 0 && ((t = r), (n = $c(e, r)));
  }
  if (n === 1) throw ((n = ca), Jr(e, 0), pr(e, t), Dt(e, Je()), n);
  if (n === 6) throw Error(Q(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Br(e, Lt, Dn),
    Dt(e, Je()),
    null
  );
}
function Kd(e, t) {
  var n = _e;
  _e |= 1;
  try {
    return e(t);
  } finally {
    (_e = n), _e === 0 && ((ro = Je() + 500), ds && Rr());
  }
}
function ai(e) {
  mr !== null && mr.tag === 0 && !(_e & 6) && qi();
  var t = _e;
  _e |= 1;
  var n = en.transition,
    r = Pe;
  try {
    if (((en.transition = null), (Pe = 1), e)) return e();
  } finally {
    (Pe = r), (en.transition = n), (_e = t), !(_e & 6) && Rr();
  }
}
function Qd() {
  (Ft = $i.current), $e($i);
}
function Jr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), uw(n)), tt !== null))
    for (n = tt.return; n !== null; ) {
      var r = n;
      switch ((Od(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Rl();
          break;
        case 3:
          to(), $e(jt), $e(Et), Fd();
          break;
        case 5:
          Id(r);
          break;
        case 4:
          to();
          break;
        case 13:
          $e(Ve);
          break;
        case 19:
          $e(Ve);
          break;
        case 10:
          Md(r.type._context);
          break;
        case 22:
        case 23:
          Qd();
      }
      n = n.return;
    }
  if (
    ((ft = e),
    (tt = e = _r(e.current, null)),
    (vt = Ft = t),
    (ot = 0),
    (ca = null),
    (Gd = ms = oi = 0),
    (Lt = Vo = null),
    Gr !== null)
  ) {
    for (t = 0; t < Gr.length; t++)
      if (((n = Gr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var a = o.next;
          (o.next = i), (r.next = a);
        }
        n.pending = r;
      }
    Gr = null;
  }
  return e;
}
function hv(e, t) {
  do {
    var n = tt;
    try {
      if ((Ld(), (cl.current = zl), $l)) {
        for (var r = We.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        $l = !1;
      }
      if (
        ((ii = 0),
        (ut = it = We = null),
        (Uo = !1),
        (la = 0),
        (Wd.current = null),
        n === null || n.return === null)
      ) {
        (ot = 1), (ca = t), (tt = null);
        break;
      }
      e: {
        var o = e,
          a = n.return,
          l = n,
          s = t;
        if (
          ((t = vt),
          (l.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var u = s,
            c = l,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var h = c.alternate;
            h
              ? ((c.updateQueue = h.updateQueue),
                (c.memoizedState = h.memoizedState),
                (c.lanes = h.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = Vp(a);
          if (g !== null) {
            (g.flags &= -257),
              Wp(g, a, l, o, t),
              g.mode & 1 && Hp(o, u, t),
              (t = g),
              (s = u);
            var v = t.updateQueue;
            if (v === null) {
              var b = new Set();
              b.add(s), (t.updateQueue = b);
            } else v.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Hp(o, u, t), Yd();
              break e;
            }
            s = Error(Q(426));
          }
        } else if (Be && l.mode & 1) {
          var E = Vp(a);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              Wp(E, a, l, o, t),
              Nd(no(s, l));
            break e;
          }
        }
        (o = s = no(s, l)),
          ot !== 4 && (ot = 2),
          Vo === null ? (Vo = [o]) : Vo.push(o),
          (o = a);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = Xg(o, s, t);
              Dp(o, f);
              break e;
            case 1:
              l = s;
              var p = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (Sr === null || !Sr.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var w = Jg(o, l, t);
                Dp(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      vv(n);
    } catch (_) {
      (t = _), tt === n && n !== null && (tt = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function mv() {
  var e = Bl.current;
  return (Bl.current = zl), e === null ? zl : e;
}
function Yd() {
  (ot === 0 || ot === 3 || ot === 2) && (ot = 4),
    ft === null || (!(oi & 268435455) && !(ms & 268435455)) || pr(ft, vt);
}
function Vl(e, t) {
  var n = _e;
  _e |= 2;
  var r = mv();
  (ft !== e || vt !== t) && ((Dn = null), Jr(e, t));
  do
    try {
      jw();
      break;
    } catch (i) {
      hv(e, i);
    }
  while (1);
  if ((Ld(), (_e = n), (Bl.current = r), tt !== null)) throw Error(Q(261));
  return (ft = null), (vt = 0), ot;
}
function jw() {
  for (; tt !== null; ) gv(tt);
}
function Aw() {
  for (; tt !== null && !a0(); ) gv(tt);
}
function gv(e) {
  var t = bv(e.alternate, e, Ft);
  (e.memoizedProps = e.pendingProps),
    t === null ? vv(e) : (tt = t),
    (Wd.current = null);
}
function vv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Pw(n, t)), n !== null)) {
        (n.flags &= 32767), (tt = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ot = 6), (tt = null);
        return;
      }
    } else if (((n = Tw(n, t, Ft)), n !== null)) {
      tt = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      tt = t;
      return;
    }
    tt = t = e;
  } while (t !== null);
  ot === 0 && (ot = 5);
}
function Br(e, t, n) {
  var r = Pe,
    i = en.transition;
  try {
    (en.transition = null), (Pe = 1), Dw(e, t, n, r);
  } finally {
    (en.transition = i), (Pe = r);
  }
  return null;
}
function Dw(e, t, n, r) {
  do qi();
  while (mr !== null);
  if (_e & 6) throw Error(Q(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(Q(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (g0(e, o),
    e === ft && ((tt = ft = null), (vt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ja ||
      ((Ja = !0),
      wv(Cl, function () {
        return qi(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = en.transition), (en.transition = null);
    var a = Pe;
    Pe = 1;
    var l = _e;
    (_e |= 4),
      (Wd.current = null),
      Nw(e, n),
      dv(n, e),
      nw(vc),
      (Tl = !!gc),
      (vc = gc = null),
      (e.current = n),
      Rw(n),
      l0(),
      (_e = l),
      (Pe = a),
      (en.transition = o);
  } else e.current = n;
  if (
    (Ja && ((Ja = !1), (mr = e), (Hl = i)),
    (o = e.pendingLanes),
    o === 0 && (Sr = null),
    c0(n.stateNode),
    Dt(e, Je()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Ul) throw ((Ul = !1), (e = Ic), (Ic = null), e);
  return (
    Hl & 1 && e.tag !== 0 && qi(),
    (o = e.pendingLanes),
    o & 1 ? (e === Fc ? Wo++ : ((Wo = 0), (Fc = e))) : (Wo = 0),
    Rr(),
    null
  );
}
function qi() {
  if (mr !== null) {
    var e = Ym(Hl),
      t = en.transition,
      n = Pe;
    try {
      if (((en.transition = null), (Pe = 16 > e ? 16 : e), mr === null))
        var r = !1;
      else {
        if (((e = mr), (mr = null), (Hl = 0), _e & 6)) throw Error(Q(331));
        var i = _e;
        for (_e |= 4, oe = e.current; oe !== null; ) {
          var o = oe,
            a = o.child;
          if (oe.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var s = 0; s < l.length; s++) {
                var u = l[s];
                for (oe = u; oe !== null; ) {
                  var c = oe;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ho(8, c, o);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (oe = d);
                  else
                    for (; oe !== null; ) {
                      c = oe;
                      var h = c.sibling,
                        g = c.return;
                      if ((sv(c), c === u)) {
                        oe = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = g), (oe = h);
                        break;
                      }
                      oe = g;
                    }
                }
              }
              var v = o.alternate;
              if (v !== null) {
                var b = v.child;
                if (b !== null) {
                  v.child = null;
                  do {
                    var E = b.sibling;
                    (b.sibling = null), (b = E);
                  } while (b !== null);
                }
              }
              oe = o;
            }
          }
          if (o.subtreeFlags & 2064 && a !== null) (a.return = o), (oe = a);
          else
            e: for (; oe !== null; ) {
              if (((o = oe), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ho(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (oe = f);
                break e;
              }
              oe = o.return;
            }
        }
        var p = e.current;
        for (oe = p; oe !== null; ) {
          a = oe;
          var m = a.child;
          if (a.subtreeFlags & 2064 && m !== null) (m.return = a), (oe = m);
          else
            e: for (a = p; oe !== null; ) {
              if (((l = oe), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hs(9, l);
                  }
                } catch (_) {
                  Ke(l, l.return, _);
                }
              if (l === a) {
                oe = null;
                break e;
              }
              var w = l.sibling;
              if (w !== null) {
                (w.return = l.return), (oe = w);
                break e;
              }
              oe = l.return;
            }
        }
        if (
          ((_e = i), Rr(), En && typeof En.onPostCommitFiberRoot == "function")
        )
          try {
            En.onPostCommitFiberRoot(as, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Pe = n), (en.transition = t);
    }
  }
  return !1;
}
function ih(e, t, n) {
  (t = no(n, t)),
    (t = Xg(e, t, 1)),
    (e = xr(e, t, 1)),
    (t = Tt()),
    e !== null && (ya(e, 1, t), Dt(e, t));
}
function Ke(e, t, n) {
  if (e.tag === 3) ih(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ih(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Sr === null || !Sr.has(r)))
        ) {
          (e = no(n, e)),
            (e = Jg(t, e, 1)),
            (t = xr(t, e, 1)),
            (e = Tt()),
            t !== null && (ya(t, 1, e), Dt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Iw(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Tt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ft === e &&
      (vt & n) === n &&
      (ot === 4 || (ot === 3 && (vt & 130023424) === vt && 500 > Je() - qd)
        ? Jr(e, 0)
        : (Gd |= n)),
    Dt(e, t);
}
function yv(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ua), (Ua <<= 1), !(Ua & 130023424) && (Ua = 4194304))
      : (t = 1));
  var n = Tt();
  (e = Yn(e, t)), e !== null && (ya(e, t, n), Dt(e, n));
}
function Fw(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), yv(e, n);
}
function $w(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(Q(314));
  }
  r !== null && r.delete(t), yv(e, n);
}
var bv;
bv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || jt.current) Mt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Mt = !1), kw(e, t, n);
      Mt = !!(e.flags & 131072);
    }
  else (Mt = !1), Be && t.flags & 1048576 && Sg(t, jl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      fl(e, t), (e = t.pendingProps);
      var i = Ji(t, Et.current);
      Gi(t, n), (i = zd(null, t, r, e, i, n));
      var o = Bd();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            At(r) ? ((o = !0), Ll(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Ad(t),
            (i.updater = fs),
            (t.stateNode = i),
            (i._reactInternals = t),
            kc(t, r, e, n),
            (t = Oc(null, t, r, !0, o, n)))
          : ((t.tag = 0), Be && o && Pd(t), Ct(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (fl(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Bw(r)),
          (e = sn(r, e)),
          i)
        ) {
          case 0:
            t = Pc(null, t, r, e, n);
            break e;
          case 1:
            t = Kp(null, t, r, e, n);
            break e;
          case 11:
            t = Gp(null, t, r, e, n);
            break e;
          case 14:
            t = qp(null, t, r, sn(r.type, e), n);
            break e;
        }
        throw Error(Q(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : sn(r, i)),
        Pc(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : sn(r, i)),
        Kp(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((nv(t), e === null)) throw Error(Q(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          kg(e, t),
          Il(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = no(Error(Q(423)), t)), (t = Qp(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = no(Error(Q(424)), t)), (t = Qp(e, t, r, n, i));
            break e;
          } else
            for (
              zt = wr(t.stateNode.containerInfo.firstChild),
                Bt = t,
                Be = !0,
                dn = null,
                n = Ng(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Zi(), r === i)) {
            t = Xn(e, t, n);
            break e;
          }
          Ct(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Rg(t),
        e === null && Ec(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (a = i.children),
        yc(r, i) ? (a = null) : o !== null && yc(r, o) && (t.flags |= 32),
        tv(e, t),
        Ct(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && Ec(t), null;
    case 13:
      return rv(e, t, n);
    case 4:
      return (
        Dd(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = eo(t, null, r, n)) : Ct(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : sn(r, i)),
        Gp(e, t, r, i, n)
      );
    case 7:
      return Ct(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ct(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ct(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (a = i.value),
          Ae(Al, r._currentValue),
          (r._currentValue = a),
          o !== null)
        )
          if (gn(o.value, a)) {
            if (o.children === i.children && !jt.current) {
              t = Xn(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                a = o.child;
                for (var s = l.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = Wn(-1, n & -n)), (s.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (s.next = s)
                          : ((s.next = c.next), (c.next = s)),
                          (u.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      _c(o.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) a = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((a = o.return), a === null)) throw Error(Q(341));
                (a.lanes |= n),
                  (l = a.alternate),
                  l !== null && (l.lanes |= n),
                  _c(a, n, t),
                  (a = o.sibling);
              } else a = o.child;
              if (a !== null) a.return = o;
              else
                for (a = o; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((o = a.sibling), o !== null)) {
                    (o.return = a.return), (a = o);
                    break;
                  }
                  a = a.return;
                }
              o = a;
            }
        Ct(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Gi(t, n),
        (i = nn(i)),
        (r = r(i)),
        (t.flags |= 1),
        Ct(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = sn(r, t.pendingProps)),
        (i = sn(r.type, i)),
        qp(e, t, r, i, n)
      );
    case 15:
      return Zg(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : sn(r, i)),
        fl(e, t),
        (t.tag = 1),
        At(r) ? ((e = !0), Ll(t)) : (e = !1),
        Gi(t, n),
        Pg(t, r, i),
        kc(t, r, i, n),
        Oc(null, t, r, !0, e, n)
      );
    case 19:
      return iv(e, t, n);
    case 22:
      return ev(e, t, n);
  }
  throw Error(Q(156, t.tag));
};
function wv(e, t) {
  return Gm(e, t);
}
function zw(e, t, n, r) {
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
function Zt(e, t, n, r) {
  return new zw(e, t, n, r);
}
function Xd(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Bw(e) {
  if (typeof e == "function") return Xd(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === gd)) return 11;
    if (e === vd) return 14;
  }
  return 2;
}
function _r(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Zt(e.tag, t, e.key, e.mode)),
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
function ml(e, t, n, r, i, o) {
  var a = 2;
  if (((r = e), typeof e == "function")) Xd(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case Oi:
        return Zr(n.children, i, o, t);
      case md:
        (a = 8), (i |= 8);
        break;
      case Yu:
        return (
          (e = Zt(12, n, t, i | 2)), (e.elementType = Yu), (e.lanes = o), e
        );
      case Xu:
        return (e = Zt(13, n, t, i)), (e.elementType = Xu), (e.lanes = o), e;
      case Ju:
        return (e = Zt(19, n, t, i)), (e.elementType = Ju), (e.lanes = o), e;
      case Om:
        return gs(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Tm:
              a = 10;
              break e;
            case Pm:
              a = 9;
              break e;
            case gd:
              a = 11;
              break e;
            case vd:
              a = 14;
              break e;
            case sr:
              (a = 16), (r = null);
              break e;
          }
        throw Error(Q(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Zt(a, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Zr(e, t, n, r) {
  return (e = Zt(7, e, r, t)), (e.lanes = n), e;
}
function gs(e, t, n, r) {
  return (
    (e = Zt(22, e, r, t)),
    (e.elementType = Om),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Su(e, t, n) {
  return (e = Zt(6, e, null, t)), (e.lanes = n), e;
}
function Eu(e, t, n) {
  return (
    (t = Zt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Uw(e, t, n, r, i) {
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
    (this.eventTimes = ru(0)),
    (this.expirationTimes = ru(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ru(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Jd(e, t, n, r, i, o, a, l, s) {
  return (
    (e = new Uw(e, t, n, l, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Zt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ad(o),
    e
  );
}
function Hw(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Pi,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function xv(e) {
  if (!e) return kr;
  e = e._reactInternals;
  e: {
    if (di(e) !== e || e.tag !== 1) throw Error(Q(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (At(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(Q(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (At(n)) return wg(e, n, t);
  }
  return t;
}
function Sv(e, t, n, r, i, o, a, l, s) {
  return (
    (e = Jd(n, r, !0, e, i, o, a, l, s)),
    (e.context = xv(null)),
    (n = e.current),
    (r = Tt()),
    (i = Er(n)),
    (o = Wn(r, i)),
    (o.callback = t ?? null),
    xr(n, o, i),
    (e.current.lanes = i),
    ya(e, i, r),
    Dt(e, r),
    e
  );
}
function vs(e, t, n, r) {
  var i = t.current,
    o = Tt(),
    a = Er(i);
  return (
    (n = xv(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Wn(o, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = xr(i, t, a)),
    e !== null && (pn(e, i, a, o), ul(e, i, a)),
    a
  );
}
function Wl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function oh(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Zd(e, t) {
  oh(e, t), (e = e.alternate) && oh(e, t);
}
function Vw() {
  return null;
}
var Ev =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ef(e) {
  this._internalRoot = e;
}
ys.prototype.render = ef.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(Q(409));
  vs(e, t, null, null);
};
ys.prototype.unmount = ef.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ai(function () {
      vs(null, e, null, null);
    }),
      (t[Qn] = null);
  }
};
function ys(e) {
  this._internalRoot = e;
}
ys.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Zm();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < fr.length && t !== 0 && t < fr[n].priority; n++);
    fr.splice(n, 0, e), n === 0 && tg(e);
  }
};
function tf(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function bs(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ah() {}
function Ww(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = Wl(a);
        o.call(u);
      };
    }
    var a = Sv(t, r, e, 0, null, !1, !1, "", ah);
    return (
      (e._reactRootContainer = a),
      (e[Qn] = a.current),
      na(e.nodeType === 8 ? e.parentNode : e),
      ai(),
      a
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = Wl(s);
      l.call(u);
    };
  }
  var s = Jd(e, 0, !1, null, null, !1, !1, "", ah);
  return (
    (e._reactRootContainer = s),
    (e[Qn] = s.current),
    na(e.nodeType === 8 ? e.parentNode : e),
    ai(function () {
      vs(t, s, n, r);
    }),
    s
  );
}
function ws(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var a = o;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var s = Wl(a);
        l.call(s);
      };
    }
    vs(t, a, e, i);
  } else a = Ww(n, t, e, i, r);
  return Wl(a);
}
Xm = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Lo(t.pendingLanes);
        n !== 0 &&
          (wd(t, n | 1), Dt(t, Je()), !(_e & 6) && ((ro = Je() + 500), Rr()));
      }
      break;
    case 13:
      ai(function () {
        var r = Yn(e, 1);
        if (r !== null) {
          var i = Tt();
          pn(r, e, 1, i);
        }
      }),
        Zd(e, 1);
  }
};
xd = function (e) {
  if (e.tag === 13) {
    var t = Yn(e, 134217728);
    if (t !== null) {
      var n = Tt();
      pn(t, e, 134217728, n);
    }
    Zd(e, 134217728);
  }
};
Jm = function (e) {
  if (e.tag === 13) {
    var t = Er(e),
      n = Yn(e, t);
    if (n !== null) {
      var r = Tt();
      pn(n, e, t, r);
    }
    Zd(e, t);
  }
};
Zm = function () {
  return Pe;
};
eg = function (e, t) {
  var n = Pe;
  try {
    return (Pe = e), t();
  } finally {
    Pe = n;
  }
};
sc = function (e, t, n) {
  switch (t) {
    case "input":
      if ((tc(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var i = cs(r);
            if (!i) throw Error(Q(90));
            Rm(r), tc(r, i);
          }
        }
      }
      break;
    case "textarea":
      Mm(e, n);
      break;
    case "select":
      (t = n.value), t != null && Ui(e, !!n.multiple, t, !1);
  }
};
zm = Kd;
Bm = ai;
var Gw = { usingClientEntryPoint: !1, Events: [wa, Mi, cs, Fm, $m, Kd] },
  _o = {
    findFiberByHostInstance: Wr,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  qw = {
    bundleType: _o.bundleType,
    version: _o.version,
    rendererPackageName: _o.rendererPackageName,
    rendererConfig: _o.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Jn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Vm(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: _o.findFiberByHostInstance || Vw,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Za = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Za.isDisabled && Za.supportsFiber)
    try {
      (as = Za.inject(qw)), (En = Za);
    } catch {}
}
Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gw;
Ht.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!tf(t)) throw Error(Q(200));
  return Hw(e, t, null, n);
};
Ht.createRoot = function (e, t) {
  if (!tf(e)) throw Error(Q(299));
  var n = !1,
    r = "",
    i = Ev;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Jd(e, 1, !1, null, null, n, !1, r, i)),
    (e[Qn] = t.current),
    na(e.nodeType === 8 ? e.parentNode : e),
    new ef(t)
  );
};
Ht.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(Q(188))
      : ((e = Object.keys(e).join(",")), Error(Q(268, e)));
  return (e = Vm(t)), (e = e === null ? null : e.stateNode), e;
};
Ht.flushSync = function (e) {
  return ai(e);
};
Ht.hydrate = function (e, t, n) {
  if (!bs(t)) throw Error(Q(200));
  return ws(null, e, t, !0, n);
};
Ht.hydrateRoot = function (e, t, n) {
  if (!tf(e)) throw Error(Q(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    a = Ev;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Sv(t, null, e, 1, n ?? null, i, !1, o, a)),
    (e[Qn] = t.current),
    na(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new ys(t);
};
Ht.render = function (e, t, n) {
  if (!bs(t)) throw Error(Q(200));
  return ws(null, e, t, !1, n);
};
Ht.unmountComponentAtNode = function (e) {
  if (!bs(e)) throw Error(Q(40));
  return e._reactRootContainer
    ? (ai(function () {
        ws(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Qn] = null);
        });
      }),
      !0)
    : !1;
};
Ht.unstable_batchedUpdates = Kd;
Ht.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!bs(n)) throw Error(Q(200));
  if (e == null || e._reactInternals === void 0) throw Error(Q(38));
  return ws(e, t, n, !1, r);
};
Ht.version = "18.2.0-next-9e3b772b8-20220608";
function _v() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_v);
    } catch (e) {
      console.error(e);
    }
}
_v(), (Sm.exports = Ht);
var nf = Sm.exports;
const el = ga(nf);
var lh = nf;
(Ku.createRoot = lh.createRoot), (Ku.hydrateRoot = lh.hydrateRoot);
/**
 * @remix-run/router v1.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Te() {
  return (
    (Te = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Te.apply(this, arguments)
  );
}
var Ze;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Ze || (Ze = {}));
const sh = "popstate";
function Kw(e) {
  e === void 0 && (e = {});
  function t(i, o) {
    let {
      pathname: a = "/",
      search: l = "",
      hash: s = "",
    } = Tn(i.location.hash.substr(1));
    return da(
      "",
      { pathname: a, search: l, hash: s },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(i, o) {
    let a = i.document.querySelector("base"),
      l = "";
    if (a && a.getAttribute("href")) {
      let s = i.location.href,
        u = s.indexOf("#");
      l = u === -1 ? s : s.slice(0, u);
    }
    return l + "#" + (typeof o == "string" ? o : si(o));
  }
  function r(i, o) {
    li(
      i.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" +
        JSON.stringify(o) +
        ")"
    );
  }
  return Yw(t, n, r, e);
}
function be(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function li(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Qw() {
  return Math.random().toString(36).substr(2, 8);
}
function uh(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function da(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Te(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Tn(t) : t,
      { state: n, key: (t && t.key) || r || Qw() }
    )
  );
}
function si(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Tn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Yw(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    a = i.history,
    l = Ze.Pop,
    s = null,
    u = c();
  u == null && ((u = 0), a.replaceState(Te({}, a.state, { idx: u }), ""));
  function c() {
    return (a.state || { idx: null }).idx;
  }
  function d() {
    l = Ze.Pop;
    let E = c(),
      f = E == null ? null : E - u;
    (u = E), s && s({ action: l, location: b.location, delta: f });
  }
  function h(E, f) {
    l = Ze.Push;
    let p = da(b.location, E, f);
    n && n(p, E), (u = c() + 1);
    let m = uh(p, u),
      w = b.createHref(p);
    try {
      a.pushState(m, "", w);
    } catch {
      i.location.assign(w);
    }
    o && s && s({ action: l, location: b.location, delta: 1 });
  }
  function g(E, f) {
    l = Ze.Replace;
    let p = da(b.location, E, f);
    n && n(p, E), (u = c());
    let m = uh(p, u),
      w = b.createHref(p);
    a.replaceState(m, "", w),
      o && s && s({ action: l, location: b.location, delta: 0 });
  }
  function v(E) {
    let f = i.location.origin !== "null" ? i.location.origin : i.location.href,
      p = typeof E == "string" ? E : si(E);
    return (
      be(
        f,
        "No window.location.(origin|href) available to create URL for href: " +
          p
      ),
      new URL(p, f)
    );
  }
  let b = {
    get action() {
      return l;
    },
    get location() {
      return e(i, a);
    },
    listen(E) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(sh, d),
        (s = E),
        () => {
          i.removeEventListener(sh, d), (s = null);
        }
      );
    },
    createHref(E) {
      return t(i, E);
    },
    createURL: v,
    encodeLocation(E) {
      let f = v(E);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: h,
    replace: g,
    go(E) {
      return a.go(E);
    },
  };
  return b;
}
var rt;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(rt || (rt = {}));
const Xw = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function Jw(e) {
  return e.index === !0;
}
function Cv(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((i, o) => {
      let a = [...n, o],
        l = typeof i.id == "string" ? i.id : a.join("-");
      if (
        (be(
          i.index !== !0 || !i.children,
          "Cannot specify children on an index route"
        ),
        be(
          !r[l],
          'Found a route id collision on id "' +
            l +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        Jw(i))
      ) {
        let s = Te({}, i, t(i), { id: l });
        return (r[l] = s), s;
      } else {
        let s = Te({}, i, t(i), { id: l, children: void 0 });
        return (
          (r[l] = s), i.children && (s.children = Cv(i.children, t, a, r)), s
        );
      }
    })
  );
}
function zi(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Tn(t) : t,
    i = Sa(r.pathname || "/", n);
  if (i == null) return null;
  let o = kv(e);
  Zw(o);
  let a = null;
  for (let l = 0; a == null && l < o.length; ++l) a = sx(o[l], dx(i));
  return a;
}
function kv(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, a, l) => {
    let s = {
      relativePath: l === void 0 ? o.path || "" : l,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: a,
      route: o,
    };
    s.relativePath.startsWith("/") &&
      (be(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let u = Gn([r, s.relativePath]),
      c = n.concat(s);
    o.children &&
      o.children.length > 0 &&
      (be(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      kv(o.children, t, c, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: ax(u, o.index), routesMeta: c });
  };
  return (
    e.forEach((o, a) => {
      var l;
      if (o.path === "" || !((l = o.path) != null && l.includes("?"))) i(o, a);
      else for (let s of Tv(o.path)) i(o, a, s);
    }),
    t
  );
}
function Tv(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let a = Tv(r.join("/")),
    l = [];
  return (
    l.push(...a.map((s) => (s === "" ? o : [o, s].join("/")))),
    i && l.push(...a),
    l.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function Zw(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : lx(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const ex = /^:\w+$/,
  tx = 3,
  nx = 2,
  rx = 1,
  ix = 10,
  ox = -2,
  ch = (e) => e === "*";
function ax(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(ch) && (r += ox),
    t && (r += nx),
    n
      .filter((i) => !ch(i))
      .reduce((i, o) => i + (ex.test(o) ? tx : o === "" ? rx : ix), r)
  );
}
function lx(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function sx(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    o = [];
  for (let a = 0; a < n.length; ++a) {
    let l = n[a],
      s = a === n.length - 1,
      u = i === "/" ? t : t.slice(i.length) || "/",
      c = ux(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: s },
        u
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let d = l.route;
    o.push({
      params: r,
      pathname: Gn([i, c.pathname]),
      pathnameBase: mx(Gn([i, c.pathnameBase])),
      route: d,
    }),
      c.pathnameBase !== "/" && (i = Gn([i, c.pathnameBase]));
  }
  return o;
}
function ux(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = cx(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    a = o.replace(/(.)\/+$/, "$1"),
    l = i.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      if (c === "*") {
        let h = l[d] || "";
        a = o.slice(0, o.length - h.length).replace(/(.)\/+$/, "$1");
      }
      return (u[c] = fx(l[d] || "", c)), u;
    }, {}),
    pathname: o,
    pathnameBase: a,
    pattern: e,
  };
}
function cx(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    li(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (a, l) => (r.push(l), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function dx(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      li(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function fx(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      li(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function Sa(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function px(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? Tn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : hx(n, t)) : t,
    search: gx(r),
    hash: vx(i),
  };
}
function hx(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function _u(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function xs(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function rf(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = Tn(e))
    : ((i = Te({}, e)),
      be(
        !i.pathname || !i.pathname.includes("?"),
        _u("?", "pathname", "search", i)
      ),
      be(
        !i.pathname || !i.pathname.includes("#"),
        _u("#", "pathname", "hash", i)
      ),
      be(!i.search || !i.search.includes("#"), _u("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    a = o ? "/" : i.pathname,
    l;
  if (r || a == null) l = n;
  else {
    let d = t.length - 1;
    if (a.startsWith("..")) {
      let h = a.split("/");
      for (; h[0] === ".."; ) h.shift(), (d -= 1);
      i.pathname = h.join("/");
    }
    l = d >= 0 ? t[d] : "/";
  }
  let s = px(i, l),
    u = a && a !== "/" && a.endsWith("/"),
    c = (o || a === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (u || c) && (s.pathname += "/"), s;
}
const Gn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  mx = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  gx = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  vx = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class of {
  constructor(t, n, r, i) {
    i === void 0 && (i = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = i),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function Pv(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Ov = ["post", "put", "patch", "delete"],
  yx = new Set(Ov),
  bx = ["get", ...Ov],
  wx = new Set(bx),
  xx = new Set([301, 302, 303, 307, 308]),
  Sx = new Set([307, 308]),
  Cu = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  Ex = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  dh = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Nv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Rv =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  _x = !Rv,
  Cx = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary });
function kx(e) {
  be(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let t;
  if (e.mapRouteProperties) t = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let x = e.detectErrorBoundary;
    t = (P) => ({ hasErrorBoundary: x(P) });
  } else t = Cx;
  let n = {},
    r = Cv(e.routes, t, void 0, n),
    i,
    o = e.basename || "/",
    a = Te({ v7_normalizeFormMethod: !1, v7_prependBasename: !1 }, e.future),
    l = null,
    s = new Set(),
    u = null,
    c = null,
    d = null,
    h = e.hydrationData != null,
    g = zi(r, e.history.location, o),
    v = null;
  if (g == null) {
    let x = un(404, { pathname: e.history.location.pathname }),
      { matches: P, route: L } = yh(r);
    (g = P), (v = { [L.id]: x });
  }
  let b =
      !g.some((x) => x.route.lazy) &&
      (!g.some((x) => x.route.loader) || e.hydrationData != null),
    E,
    f = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: g,
      initialized: b,
      navigation: Cu,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || v,
      fetchers: new Map(),
      blockers: new Map(),
    },
    p = Ze.Pop,
    m = !1,
    w,
    _ = !1,
    T = !1,
    k = [],
    N = [],
    S = new Map(),
    F = 0,
    j = -1,
    I = new Map(),
    O = new Set(),
    R = new Map(),
    z = new Map(),
    K = new Map(),
    U = !1;
  function D() {
    return (
      (l = e.history.listen((x) => {
        let { action: P, location: L, delta: Z } = x;
        if (U) {
          U = !1;
          return;
        }
        li(
          K.size === 0 || Z != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let ne = On({
          currentLocation: f.location,
          nextLocation: L,
          historyAction: P,
        });
        if (ne && Z != null) {
          (U = !0),
            e.history.go(Z * -1),
            pt(ne, {
              state: "blocked",
              location: L,
              proceed() {
                pt(ne, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: L,
                }),
                  e.history.go(Z);
              },
              reset() {
                Ye(ne), G({ blockers: new Map(E.state.blockers) });
              },
            });
          return;
        }
        return ve(P, L);
      })),
      f.initialized || ve(Ze.Pop, f.location),
      E
    );
  }
  function B() {
    l && l(),
      s.clear(),
      w && w.abort(),
      f.fetchers.forEach((x, P) => Gt(P)),
      f.blockers.forEach((x, P) => Ye(P));
  }
  function W(x) {
    return s.add(x), () => s.delete(x);
  }
  function G(x) {
    (f = Te({}, f, x)), s.forEach((P) => P(f));
  }
  function te(x, P) {
    var L, Z;
    let ne =
        f.actionData != null &&
        f.navigation.formMethod != null &&
        In(f.navigation.formMethod) &&
        f.navigation.state === "loading" &&
        ((L = x.state) == null ? void 0 : L._isRedirect) !== !0,
      ee;
    P.actionData
      ? Object.keys(P.actionData).length > 0
        ? (ee = P.actionData)
        : (ee = null)
      : ne
      ? (ee = f.actionData)
      : (ee = null);
    let A = P.loaderData
      ? vh(f.loaderData, P.loaderData, P.matches || [], P.errors)
      : f.loaderData;
    for (let [H] of K) Ye(H);
    let $ =
      m === !0 ||
      (f.navigation.formMethod != null &&
        In(f.navigation.formMethod) &&
        ((Z = x.state) == null ? void 0 : Z._isRedirect) !== !0);
    i && ((r = i), (i = void 0)),
      G(
        Te({}, P, {
          actionData: ee,
          loaderData: A,
          historyAction: p,
          location: x,
          initialized: !0,
          navigation: Cu,
          revalidation: "idle",
          restoreScrollPosition: hi(x, P.matches || f.matches),
          preventScrollReset: $,
          blockers: new Map(f.blockers),
        })
      ),
      _ ||
        p === Ze.Pop ||
        (p === Ze.Push
          ? e.history.push(x, x.state)
          : p === Ze.Replace && e.history.replace(x, x.state)),
      (p = Ze.Pop),
      (m = !1),
      (_ = !1),
      (T = !1),
      (k = []),
      (N = []);
  }
  async function de(x, P) {
    if (typeof x == "number") {
      e.history.go(x);
      return;
    }
    let L = Bc(
        f.location,
        f.matches,
        o,
        a.v7_prependBasename,
        x,
        P == null ? void 0 : P.fromRouteId,
        P == null ? void 0 : P.relative
      ),
      {
        path: Z,
        submission: ne,
        error: ee,
      } = fh(a.v7_normalizeFormMethod, !1, L, P),
      A = f.location,
      $ = da(f.location, Z, P && P.state);
    $ = Te({}, $, e.history.encodeLocation($));
    let H = P && P.replace != null ? P.replace : void 0,
      Y = Ze.Push;
    H === !0
      ? (Y = Ze.Replace)
      : H === !1 ||
        (ne != null &&
          In(ne.formMethod) &&
          ne.formAction === f.location.pathname + f.location.search &&
          (Y = Ze.Replace));
    let ie =
        P && "preventScrollReset" in P ? P.preventScrollReset === !0 : void 0,
      pe = On({ currentLocation: A, nextLocation: $, historyAction: Y });
    if (pe) {
      pt(pe, {
        state: "blocked",
        location: $,
        proceed() {
          pt(pe, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: $,
          }),
            de(x, P);
        },
        reset() {
          Ye(pe), G({ blockers: new Map(f.blockers) });
        },
      });
      return;
    }
    return await ve(Y, $, {
      submission: ne,
      pendingError: ee,
      preventScrollReset: ie,
      replace: P && P.replace,
    });
  }
  function se() {
    if (
      (on(),
      G({ revalidation: "loading" }),
      f.navigation.state !== "submitting")
    ) {
      if (f.navigation.state === "idle") {
        ve(f.historyAction, f.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      ve(p || f.historyAction, f.navigation.location, {
        overrideNavigation: f.navigation,
      });
    }
  }
  async function ve(x, P, L) {
    w && w.abort(),
      (w = null),
      (p = x),
      (_ = (L && L.startUninterruptedRevalidation) === !0),
      jr(f.location, f.matches),
      (m = (L && L.preventScrollReset) === !0);
    let Z = i || r,
      ne = L && L.overrideNavigation,
      ee = zi(Z, P, o);
    if (!ee) {
      let he = un(404, { pathname: P.pathname }),
        { matches: ue, route: me } = yh(Z);
      nr(), te(P, { matches: ue, loaderData: {}, errors: { [me.id]: he } });
      return;
    }
    if (
      Rx(f.location, P) &&
      !(L && L.submission && In(L.submission.formMethod))
    ) {
      te(P, { matches: ee });
      return;
    }
    w = new AbortController();
    let A = ko(e.history, P, w.signal, L && L.submission),
      $,
      H;
    if (L && L.pendingError) H = { [Bi(ee).route.id]: L.pendingError };
    else if (L && L.submission && In(L.submission.formMethod)) {
      let he = await Ce(A, P, L.submission, ee, { replace: L.replace });
      if (he.shortCircuited) return;
      ($ = he.pendingActionData),
        (H = he.pendingActionError),
        (ne = Te({ state: "loading", location: P }, L.submission)),
        (A = new Request(A.url, { signal: A.signal }));
    }
    let {
      shortCircuited: Y,
      loaderData: ie,
      errors: pe,
    } = await Le(
      A,
      P,
      ee,
      ne,
      L && L.submission,
      L && L.fetcherSubmission,
      L && L.replace,
      $,
      H
    );
    Y ||
      ((w = null),
      te(
        P,
        Te({ matches: ee }, $ ? { actionData: $ } : {}, {
          loaderData: ie,
          errors: pe,
        })
      ));
  }
  async function Ce(x, P, L, Z, ne) {
    on();
    let ee = Te({ state: "submitting", location: P }, L);
    G({ navigation: ee });
    let A,
      $ = Uc(Z, P);
    if (!$.route.action && !$.route.lazy)
      A = {
        type: rt.error,
        error: un(405, {
          method: x.method,
          pathname: P.pathname,
          routeId: $.route.id,
        }),
      };
    else if (((A = await Co("action", x, $, Z, n, t, o)), x.signal.aborted))
      return { shortCircuited: !0 };
    if (Ki(A)) {
      let H;
      return (
        ne && ne.replace != null
          ? (H = ne.replace)
          : (H = A.location === f.location.pathname + f.location.search),
        await ze(f, A, { submission: L, replace: H }),
        { shortCircuited: !0 }
      );
    }
    if (Go(A)) {
      let H = Bi(Z, $.route.id);
      return (
        (ne && ne.replace) !== !0 && (p = Ze.Push),
        { pendingActionData: {}, pendingActionError: { [H.route.id]: A.error } }
      );
    }
    if (Kr(A)) throw un(400, { type: "defer-action" });
    return { pendingActionData: { [$.route.id]: A.data } };
  }
  async function Le(x, P, L, Z, ne, ee, A, $, H) {
    let Y = Z;
    Y ||
      (Y = Te(
        {
          state: "loading",
          location: P,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        },
        ne
      ));
    let ie =
        ne || ee
          ? ne || ee
          : Y.formMethod && Y.formAction && Y.formData && Y.formEncType
          ? {
              formMethod: Y.formMethod,
              formAction: Y.formAction,
              formData: Y.formData,
              formEncType: Y.formEncType,
            }
          : void 0,
      pe = i || r,
      [he, ue] = ph(e.history, f, L, ie, P, T, k, N, R, pe, o, $, H);
    if (
      (nr(
        (ge) =>
          !(L && L.some((_t) => _t.route.id === ge)) ||
          (he && he.some((_t) => _t.route.id === ge))
      ),
      he.length === 0 && ue.length === 0)
    ) {
      let ge = ke();
      return (
        te(
          P,
          Te(
            { matches: L, loaderData: {}, errors: H || null },
            $ ? { actionData: $ } : {},
            ge ? { fetchers: new Map(f.fetchers) } : {}
          )
        ),
        { shortCircuited: !0 }
      );
    }
    if (!_) {
      ue.forEach((_t) => {
        let Ne = f.fetchers.get(_t.key),
          Ln = {
            state: "loading",
            data: Ne && Ne.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            " _hasFetcherDoneAnything ": !0,
          };
        f.fetchers.set(_t.key, Ln);
      });
      let ge = $ || f.actionData;
      G(
        Te(
          { navigation: Y },
          ge
            ? Object.keys(ge).length === 0
              ? { actionData: null }
              : { actionData: ge }
            : {},
          ue.length > 0 ? { fetchers: new Map(f.fetchers) } : {}
        )
      );
    }
    (j = ++F),
      ue.forEach((ge) => {
        ge.controller && S.set(ge.key, ge.controller);
      });
    let me = () => ue.forEach((ge) => ye(ge.key));
    w && w.signal.addEventListener("abort", me);
    let {
      results: je,
      loaderResults: Oe,
      fetcherResults: Ue,
    } = await It(f.matches, L, he, ue, x);
    if (x.signal.aborted) return { shortCircuited: !0 };
    w && w.signal.removeEventListener("abort", me),
      ue.forEach((ge) => S.delete(ge.key));
    let ht = bh(je);
    if (ht) return await ze(f, ht, { replace: A }), { shortCircuited: !0 };
    let { loaderData: Rt, errors: an } = gh(f, L, he, Oe, H, ue, Ue, z);
    z.forEach((ge, _t) => {
      ge.subscribe((Ne) => {
        (Ne || ge.done) && z.delete(_t);
      });
    });
    let Rn = ke(),
      Ie = xe(j),
      Ar = Rn || Ie || ue.length > 0;
    return Te(
      { loaderData: Rt, errors: an },
      Ar ? { fetchers: new Map(f.fetchers) } : {}
    );
  }
  function nt(x) {
    return f.fetchers.get(x) || Ex;
  }
  function Me(x, P, L, Z) {
    if (_x)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    S.has(x) && ye(x);
    let ne = i || r,
      ee = Bc(
        f.location,
        f.matches,
        o,
        a.v7_prependBasename,
        L,
        P,
        Z == null ? void 0 : Z.relative
      ),
      A = zi(ne, ee, o);
    if (!A) {
      Nt(x, P, un(404, { pathname: ee }));
      return;
    }
    let { path: $, submission: H } = fh(a.v7_normalizeFormMethod, !0, ee, Z),
      Y = Uc(A, $);
    if (((m = (Z && Z.preventScrollReset) === !0), H && In(H.formMethod))) {
      Se(x, P, $, Y, A, H);
      return;
    }
    R.set(x, { routeId: P, path: $ }), De(x, P, $, Y, A, H);
  }
  async function Se(x, P, L, Z, ne, ee) {
    if ((on(), R.delete(x), !Z.route.action && !Z.route.lazy)) {
      let mt = un(405, { method: ee.formMethod, pathname: L, routeId: P });
      Nt(x, P, mt);
      return;
    }
    let A = f.fetchers.get(x),
      $ = Te({ state: "submitting" }, ee, {
        data: A && A.data,
        " _hasFetcherDoneAnything ": !0,
      });
    f.fetchers.set(x, $), G({ fetchers: new Map(f.fetchers) });
    let H = new AbortController(),
      Y = ko(e.history, L, H.signal, ee);
    S.set(x, H);
    let ie = await Co("action", Y, Z, ne, n, t, o);
    if (Y.signal.aborted) {
      S.get(x) === H && S.delete(x);
      return;
    }
    if (Ki(ie)) {
      S.delete(x), O.add(x);
      let mt = Te({ state: "loading" }, ee, {
        data: void 0,
        " _hasFetcherDoneAnything ": !0,
      });
      return (
        f.fetchers.set(x, mt),
        G({ fetchers: new Map(f.fetchers) }),
        ze(f, ie, { submission: ee, isFetchActionRedirect: !0 })
      );
    }
    if (Go(ie)) {
      Nt(x, P, ie.error);
      return;
    }
    if (Kr(ie)) throw un(400, { type: "defer-action" });
    let pe = f.navigation.location || f.location,
      he = ko(e.history, pe, H.signal),
      ue = i || r,
      me =
        f.navigation.state !== "idle"
          ? zi(ue, f.navigation.location, o)
          : f.matches;
    be(me, "Didn't find any matches after fetcher action");
    let je = ++F;
    I.set(x, je);
    let Oe = Te({ state: "loading", data: ie.data }, ee, {
      " _hasFetcherDoneAnything ": !0,
    });
    f.fetchers.set(x, Oe);
    let [Ue, ht] = ph(
      e.history,
      f,
      me,
      ee,
      pe,
      T,
      k,
      N,
      R,
      ue,
      o,
      { [Z.route.id]: ie.data },
      void 0
    );
    ht
      .filter((mt) => mt.key !== x)
      .forEach((mt) => {
        let mi = mt.key,
          gi = f.fetchers.get(mi),
          Na = {
            state: "loading",
            data: gi && gi.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            " _hasFetcherDoneAnything ": !0,
          };
        f.fetchers.set(mi, Na), mt.controller && S.set(mi, mt.controller);
      }),
      G({ fetchers: new Map(f.fetchers) });
    let Rt = () => ht.forEach((mt) => ye(mt.key));
    H.signal.addEventListener("abort", Rt);
    let {
      results: an,
      loaderResults: Rn,
      fetcherResults: Ie,
    } = await It(f.matches, me, Ue, ht, he);
    if (H.signal.aborted) return;
    H.signal.removeEventListener("abort", Rt),
      I.delete(x),
      S.delete(x),
      ht.forEach((mt) => S.delete(mt.key));
    let Ar = bh(an);
    if (Ar) return ze(f, Ar);
    let { loaderData: ge, errors: _t } = gh(
        f,
        f.matches,
        Ue,
        Rn,
        void 0,
        ht,
        Ie,
        z
      ),
      Ne = {
        state: "idle",
        data: ie.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        " _hasFetcherDoneAnything ": !0,
      };
    f.fetchers.set(x, Ne);
    let Ln = xe(je);
    f.navigation.state === "loading" && je > j
      ? (be(p, "Expected pending action"),
        w && w.abort(),
        te(f.navigation.location, {
          matches: me,
          loaderData: ge,
          errors: _t,
          fetchers: new Map(f.fetchers),
        }))
      : (G(
          Te(
            { errors: _t, loaderData: vh(f.loaderData, ge, me, _t) },
            Ln ? { fetchers: new Map(f.fetchers) } : {}
          )
        ),
        (T = !1));
  }
  async function De(x, P, L, Z, ne, ee) {
    let A = f.fetchers.get(x),
      $ = Te(
        {
          state: "loading",
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        },
        ee,
        { data: A && A.data, " _hasFetcherDoneAnything ": !0 }
      );
    f.fetchers.set(x, $), G({ fetchers: new Map(f.fetchers) });
    let H = new AbortController(),
      Y = ko(e.history, L, H.signal);
    S.set(x, H);
    let ie = await Co("loader", Y, Z, ne, n, t, o);
    if (
      (Kr(ie) && (ie = (await Av(ie, Y.signal, !0)) || ie),
      S.get(x) === H && S.delete(x),
      Y.signal.aborted)
    )
      return;
    if (Ki(ie)) {
      O.add(x), await ze(f, ie);
      return;
    }
    if (Go(ie)) {
      let he = Bi(f.matches, P);
      f.fetchers.delete(x),
        G({
          fetchers: new Map(f.fetchers),
          errors: { [he.route.id]: ie.error },
        });
      return;
    }
    be(!Kr(ie), "Unhandled fetcher deferred data");
    let pe = {
      state: "idle",
      data: ie.data,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      " _hasFetcherDoneAnything ": !0,
    };
    f.fetchers.set(x, pe), G({ fetchers: new Map(f.fetchers) });
  }
  async function ze(x, P, L) {
    var Z;
    let {
      submission: ne,
      replace: ee,
      isFetchActionRedirect: A,
    } = L === void 0 ? {} : L;
    P.revalidate && (T = !0);
    let $ = da(
      x.location,
      P.location,
      Te({ _isRedirect: !0 }, A ? { _isFetchActionRedirect: !0 } : {})
    );
    if (
      (be($, "Expected a location on the redirect navigation"),
      Nv.test(P.location) &&
        Rv &&
        typeof ((Z = window) == null ? void 0 : Z.location) < "u")
    ) {
      let ue = e.history.createURL(P.location),
        me = Sa(ue.pathname, o) == null;
      if (window.location.origin !== ue.origin || me) {
        ee
          ? window.location.replace(P.location)
          : window.location.assign(P.location);
        return;
      }
    }
    w = null;
    let H = ee === !0 ? Ze.Replace : Ze.Push,
      {
        formMethod: Y,
        formAction: ie,
        formEncType: pe,
        formData: he,
      } = x.navigation;
    !ne &&
      Y &&
      ie &&
      he &&
      pe &&
      (ne = { formMethod: Y, formAction: ie, formEncType: pe, formData: he }),
      Sx.has(P.status) && ne && In(ne.formMethod)
        ? await ve(H, $, {
            submission: Te({}, ne, { formAction: P.location }),
            preventScrollReset: m,
          })
        : A
        ? await ve(H, $, {
            overrideNavigation: {
              state: "loading",
              location: $,
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0,
            },
            fetcherSubmission: ne,
            preventScrollReset: m,
          })
        : await ve(H, $, {
            overrideNavigation: {
              state: "loading",
              location: $,
              formMethod: ne ? ne.formMethod : void 0,
              formAction: ne ? ne.formAction : void 0,
              formEncType: ne ? ne.formEncType : void 0,
              formData: ne ? ne.formData : void 0,
            },
            preventScrollReset: m,
          });
  }
  async function It(x, P, L, Z, ne) {
    let ee = await Promise.all([
        ...L.map((H) => Co("loader", ne, H, P, n, t, o)),
        ...Z.map((H) =>
          H.matches && H.match && H.controller
            ? Co(
                "loader",
                ko(e.history, H.path, H.controller.signal),
                H.match,
                H.matches,
                n,
                t,
                o
              )
            : { type: rt.error, error: un(404, { pathname: H.path }) }
        ),
      ]),
      A = ee.slice(0, L.length),
      $ = ee.slice(L.length);
    return (
      await Promise.all([
        wh(
          x,
          L,
          A,
          A.map(() => ne.signal),
          !1,
          f.loaderData
        ),
        wh(
          x,
          Z.map((H) => H.match),
          $,
          Z.map((H) => (H.controller ? H.controller.signal : null)),
          !0
        ),
      ]),
      { results: ee, loaderResults: A, fetcherResults: $ }
    );
  }
  function on() {
    (T = !0),
      k.push(...nr()),
      R.forEach((x, P) => {
        S.has(P) && (N.push(P), ye(P));
      });
  }
  function Nt(x, P, L) {
    let Z = Bi(f.matches, P);
    Gt(x), G({ errors: { [Z.route.id]: L }, fetchers: new Map(f.fetchers) });
  }
  function Gt(x) {
    S.has(x) && ye(x),
      R.delete(x),
      I.delete(x),
      O.delete(x),
      f.fetchers.delete(x);
  }
  function ye(x) {
    let P = S.get(x);
    be(P, "Expected fetch controller: " + x), P.abort(), S.delete(x);
  }
  function ae(x) {
    for (let P of x) {
      let Z = {
        state: "idle",
        data: nt(P).data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        " _hasFetcherDoneAnything ": !0,
      };
      f.fetchers.set(P, Z);
    }
  }
  function ke() {
    let x = [],
      P = !1;
    for (let L of O) {
      let Z = f.fetchers.get(L);
      be(Z, "Expected fetcher: " + L),
        Z.state === "loading" && (O.delete(L), x.push(L), (P = !0));
    }
    return ae(x), P;
  }
  function xe(x) {
    let P = [];
    for (let [L, Z] of I)
      if (Z < x) {
        let ne = f.fetchers.get(L);
        be(ne, "Expected fetcher: " + L),
          ne.state === "loading" && (ye(L), I.delete(L), P.push(L));
      }
    return ae(P), P.length > 0;
  }
  function qe(x, P) {
    let L = f.blockers.get(x) || dh;
    return K.get(x) !== P && K.set(x, P), L;
  }
  function Ye(x) {
    f.blockers.delete(x), K.delete(x);
  }
  function pt(x, P) {
    let L = f.blockers.get(x) || dh;
    be(
      (L.state === "unblocked" && P.state === "blocked") ||
        (L.state === "blocked" && P.state === "blocked") ||
        (L.state === "blocked" && P.state === "proceeding") ||
        (L.state === "blocked" && P.state === "unblocked") ||
        (L.state === "proceeding" && P.state === "unblocked"),
      "Invalid blocker state transition: " + L.state + " -> " + P.state
    ),
      f.blockers.set(x, P),
      G({ blockers: new Map(f.blockers) });
  }
  function On(x) {
    let { currentLocation: P, nextLocation: L, historyAction: Z } = x;
    if (K.size === 0) return;
    K.size > 1 && li(!1, "A router only supports one blocker at a time");
    let ne = Array.from(K.entries()),
      [ee, A] = ne[ne.length - 1],
      $ = f.blockers.get(ee);
    if (
      !($ && $.state === "proceeding") &&
      A({ currentLocation: P, nextLocation: L, historyAction: Z })
    )
      return ee;
  }
  function nr(x) {
    let P = [];
    return (
      z.forEach((L, Z) => {
        (!x || x(Z)) && (L.cancel(), P.push(Z), z.delete(Z));
      }),
      P
    );
  }
  function Nn(x, P, L) {
    if (
      ((u = x), (d = P), (c = L || ((Z) => Z.key)), !h && f.navigation === Cu)
    ) {
      h = !0;
      let Z = hi(f.location, f.matches);
      Z != null && G({ restoreScrollPosition: Z });
    }
    return () => {
      (u = null), (d = null), (c = null);
    };
  }
  function jr(x, P) {
    if (u && c && d) {
      let L = P.map((ne) => xh(ne, f.loaderData)),
        Z = c(x, L) || x.key;
      u[Z] = d();
    }
  }
  function hi(x, P) {
    if (u && c && d) {
      let L = P.map((ee) => xh(ee, f.loaderData)),
        Z = c(x, L) || x.key,
        ne = u[Z];
      if (typeof ne == "number") return ne;
    }
    return null;
  }
  function q(x) {
    i = x;
  }
  return (
    (E = {
      get basename() {
        return o;
      },
      get state() {
        return f;
      },
      get routes() {
        return r;
      },
      initialize: D,
      subscribe: W,
      enableScrollRestoration: Nn,
      navigate: de,
      fetch: Me,
      revalidate: se,
      createHref: (x) => e.history.createHref(x),
      encodeLocation: (x) => e.history.encodeLocation(x),
      getFetcher: nt,
      deleteFetcher: Gt,
      dispose: B,
      getBlocker: qe,
      deleteBlocker: Ye,
      _internalFetchControllers: S,
      _internalActiveDeferreds: z,
      _internalSetRoutes: q,
    }),
    E
  );
}
function Tx(e) {
  return e != null && "formData" in e;
}
function Bc(e, t, n, r, i, o, a) {
  let l, s;
  if (o != null && a !== "path") {
    l = [];
    for (let c of t)
      if ((l.push(c), c.route.id === o)) {
        s = c;
        break;
      }
  } else (l = t), (s = t[t.length - 1]);
  let u = rf(
    i || ".",
    xs(l).map((c) => c.pathnameBase),
    e.pathname,
    a === "path"
  );
  return (
    i == null && ((u.search = e.search), (u.hash = e.hash)),
    (i == null || i === "" || i === ".") &&
      s &&
      s.route.index &&
      !af(u.search) &&
      (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (u.pathname = u.pathname === "/" ? n : Gn([n, u.pathname])),
    si(u)
  );
}
function fh(e, t, n, r) {
  if (!r || !Tx(r)) return { path: n };
  if (r.formMethod && !jx(r.formMethod))
    return { path: n, error: un(405, { method: r.formMethod }) };
  let i;
  if (r.formData) {
    let l = r.formMethod || "get";
    if (
      ((i = {
        formMethod: e ? l.toUpperCase() : l.toLowerCase(),
        formAction: jv(n),
        formEncType:
          (r && r.formEncType) || "application/x-www-form-urlencoded",
        formData: r.formData,
      }),
      In(i.formMethod))
    )
      return { path: n, submission: i };
  }
  let o = Tn(n),
    a = Mv(r.formData);
  return (
    t && o.search && af(o.search) && a.append("index", ""),
    (o.search = "?" + a),
    { path: si(o), submission: i }
  );
}
function Px(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((i) => i.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function ph(e, t, n, r, i, o, a, l, s, u, c, d, h) {
  let g = h ? Object.values(h)[0] : d ? Object.values(d)[0] : void 0,
    v = e.createURL(t.location),
    b = e.createURL(i),
    E = h ? Object.keys(h)[0] : void 0,
    p = Px(n, E).filter((w, _) => {
      if (w.route.lazy) return !0;
      if (w.route.loader == null) return !1;
      if (Ox(t.loaderData, t.matches[_], w) || a.some((N) => N === w.route.id))
        return !0;
      let T = t.matches[_],
        k = w;
      return hh(
        w,
        Te(
          {
            currentUrl: v,
            currentParams: T.params,
            nextUrl: b,
            nextParams: k.params,
          },
          r,
          {
            actionResult: g,
            defaultShouldRevalidate:
              o ||
              v.toString() === b.toString() ||
              v.search !== b.search ||
              Lv(T, k),
          }
        )
      );
    }),
    m = [];
  return (
    s.forEach((w, _) => {
      if (!n.some((S) => S.route.id === w.routeId)) return;
      let T = zi(u, w.path, c);
      if (!T) {
        m.push({
          key: _,
          routeId: w.routeId,
          path: w.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let k = Uc(T, w.path);
      if (l.includes(_)) {
        m.push({
          key: _,
          routeId: w.routeId,
          path: w.path,
          matches: T,
          match: k,
          controller: new AbortController(),
        });
        return;
      }
      hh(
        k,
        Te(
          {
            currentUrl: v,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: b,
            nextParams: n[n.length - 1].params,
          },
          r,
          { actionResult: g, defaultShouldRevalidate: o }
        )
      ) &&
        m.push({
          key: _,
          routeId: w.routeId,
          path: w.path,
          matches: T,
          match: k,
          controller: new AbortController(),
        });
    }),
    [p, m]
  );
}
function Ox(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    i = e[n.route.id] === void 0;
  return r || i;
}
function Lv(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function hh(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function mh(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let i = n[e.id];
  be(i, "No route found in manifest");
  let o = {};
  for (let a in r) {
    let s = i[a] !== void 0 && a !== "hasErrorBoundary";
    li(
      !s,
      'Route "' +
        i.id +
        '" has a static property "' +
        a +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + a + '" will be ignored.')
    ),
      !s && !Xw.has(a) && (o[a] = r[a]);
  }
  Object.assign(i, o), Object.assign(i, Te({}, t(i), { lazy: void 0 }));
}
async function Co(e, t, n, r, i, o, a, l, s, u) {
  l === void 0 && (l = !1), s === void 0 && (s = !1);
  let c,
    d,
    h,
    g = (E) => {
      let f,
        p = new Promise((m, w) => (f = w));
      return (
        (h = () => f()),
        t.signal.addEventListener("abort", h),
        Promise.race([E({ request: t, params: n.params, context: u }), p])
      );
    };
  try {
    let E = n.route[e];
    if (n.route.lazy)
      if (E) d = (await Promise.all([g(E), mh(n.route, o, i)]))[0];
      else if ((await mh(n.route, o, i), (E = n.route[e]), E)) d = await g(E);
      else if (e === "action") {
        let f = new URL(t.url),
          p = f.pathname + f.search;
        throw un(405, { method: t.method, pathname: p, routeId: n.route.id });
      } else return { type: rt.data, data: void 0 };
    else if (E) d = await g(E);
    else {
      let f = new URL(t.url),
        p = f.pathname + f.search;
      throw un(404, { pathname: p });
    }
    be(
      d !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (E) {
    (c = rt.error), (d = E);
  } finally {
    h && t.signal.removeEventListener("abort", h);
  }
  if (Mx(d)) {
    let E = d.status;
    if (xx.has(E)) {
      let m = d.headers.get("Location");
      if (
        (be(
          m,
          "Redirects returned/thrown from loaders/actions must have a Location header"
        ),
        !Nv.test(m))
      )
        m = Bc(new URL(t.url), r.slice(0, r.indexOf(n) + 1), a, !0, m);
      else if (!l) {
        let w = new URL(t.url),
          _ = m.startsWith("//") ? new URL(w.protocol + m) : new URL(m),
          T = Sa(_.pathname, a) != null;
        _.origin === w.origin && T && (m = _.pathname + _.search + _.hash);
      }
      if (l) throw (d.headers.set("Location", m), d);
      return {
        type: rt.redirect,
        status: E,
        location: m,
        revalidate: d.headers.get("X-Remix-Revalidate") !== null,
      };
    }
    if (s) throw { type: c || rt.data, response: d };
    let f,
      p = d.headers.get("Content-Type");
    return (
      p && /\bapplication\/json\b/.test(p)
        ? (f = await d.json())
        : (f = await d.text()),
      c === rt.error
        ? { type: c, error: new of(E, d.statusText, f), headers: d.headers }
        : { type: rt.data, data: f, statusCode: d.status, headers: d.headers }
    );
  }
  if (c === rt.error) return { type: c, error: d };
  if (Lx(d)) {
    var v, b;
    return {
      type: rt.deferred,
      deferredData: d,
      statusCode: (v = d.init) == null ? void 0 : v.status,
      headers:
        ((b = d.init) == null ? void 0 : b.headers) &&
        new Headers(d.init.headers),
    };
  }
  return { type: rt.data, data: d };
}
function ko(e, t, n, r) {
  let i = e.createURL(jv(t)).toString(),
    o = { signal: n };
  if (r && In(r.formMethod)) {
    let { formMethod: a, formEncType: l, formData: s } = r;
    (o.method = a.toUpperCase()),
      (o.body = l === "application/x-www-form-urlencoded" ? Mv(s) : s);
  }
  return new Request(i, o);
}
function Mv(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries()) t.append(n, r instanceof File ? r.name : r);
  return t;
}
function Nx(e, t, n, r, i) {
  let o = {},
    a = null,
    l,
    s = !1,
    u = {};
  return (
    n.forEach((c, d) => {
      let h = t[d].route.id;
      if (
        (be(!Ki(c), "Cannot handle redirect results in processLoaderData"),
        Go(c))
      ) {
        let g = Bi(e, h),
          v = c.error;
        r && ((v = Object.values(r)[0]), (r = void 0)),
          (a = a || {}),
          a[g.route.id] == null && (a[g.route.id] = v),
          (o[h] = void 0),
          s || ((s = !0), (l = Pv(c.error) ? c.error.status : 500)),
          c.headers && (u[h] = c.headers);
      } else
        Kr(c)
          ? (i.set(h, c.deferredData), (o[h] = c.deferredData.data))
          : (o[h] = c.data),
          c.statusCode != null &&
            c.statusCode !== 200 &&
            !s &&
            (l = c.statusCode),
          c.headers && (u[h] = c.headers);
    }),
    r && ((a = r), (o[Object.keys(r)[0]] = void 0)),
    { loaderData: o, errors: a, statusCode: l || 200, loaderHeaders: u }
  );
}
function gh(e, t, n, r, i, o, a, l) {
  let { loaderData: s, errors: u } = Nx(t, n, r, i, l);
  for (let c = 0; c < o.length; c++) {
    let { key: d, match: h, controller: g } = o[c];
    be(
      a !== void 0 && a[c] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let v = a[c];
    if (!(g && g.signal.aborted))
      if (Go(v)) {
        let b = Bi(e.matches, h == null ? void 0 : h.route.id);
        (u && u[b.route.id]) || (u = Te({}, u, { [b.route.id]: v.error })),
          e.fetchers.delete(d);
      } else if (Ki(v)) be(!1, "Unhandled fetcher revalidation redirect");
      else if (Kr(v)) be(!1, "Unhandled fetcher deferred data");
      else {
        let b = {
          state: "idle",
          data: v.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          " _hasFetcherDoneAnything ": !0,
        };
        e.fetchers.set(d, b);
      }
  }
  return { loaderData: s, errors: u };
}
function vh(e, t, n, r) {
  let i = Te({}, t);
  for (let o of n) {
    let a = o.route.id;
    if (
      (t.hasOwnProperty(a)
        ? t[a] !== void 0 && (i[a] = t[a])
        : e[a] !== void 0 && o.route.loader && (i[a] = e[a]),
      r && r.hasOwnProperty(a))
    )
      break;
  }
  return i;
}
function Bi(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function yh(e) {
  let t = e.find((n) => n.index || !n.path || n.path === "/") || {
    id: "__shim-error-route__",
  };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function un(e, t) {
  let { pathname: n, routeId: r, method: i, type: o } = t === void 0 ? {} : t,
    a = "Unknown Server Error",
    l = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((a = "Bad Request"),
        i && n && r
          ? (l =
              "You made a " +
              i +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o === "defer-action" && (l = "defer() is not supported in actions"))
      : e === 403
      ? ((a = "Forbidden"),
        (l = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((a = "Not Found"), (l = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((a = "Method Not Allowed"),
        i && n && r
          ? (l =
              "You made a " +
              i.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i && (l = 'Invalid request method "' + i.toUpperCase() + '"')),
    new of(e || 500, a, new Error(l), !0)
  );
}
function bh(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Ki(n)) return n;
  }
}
function jv(e) {
  let t = typeof e == "string" ? Tn(e) : e;
  return si(Te({}, t, { hash: "" }));
}
function Rx(e, t) {
  return (
    e.pathname === t.pathname && e.search === t.search && e.hash !== t.hash
  );
}
function Kr(e) {
  return e.type === rt.deferred;
}
function Go(e) {
  return e.type === rt.error;
}
function Ki(e) {
  return (e && e.type) === rt.redirect;
}
function Lx(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function Mx(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function jx(e) {
  return wx.has(e.toLowerCase());
}
function In(e) {
  return yx.has(e.toLowerCase());
}
async function wh(e, t, n, r, i, o) {
  for (let a = 0; a < n.length; a++) {
    let l = n[a],
      s = t[a];
    if (!s) continue;
    let u = e.find((d) => d.route.id === s.route.id),
      c = u != null && !Lv(u, s) && (o && o[s.route.id]) !== void 0;
    if (Kr(l) && (i || c)) {
      let d = r[a];
      be(d, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await Av(l, d, i).then((h) => {
          h && (n[a] = h || n[a]);
        });
    }
  }
}
async function Av(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: rt.data, data: e.deferredData.unwrappedData };
      } catch (i) {
        return { type: rt.error, error: i };
      }
    return { type: rt.data, data: e.deferredData.data };
  }
}
function af(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function xh(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle };
}
function Uc(e, t) {
  let n = typeof t == "string" ? Tn(t).search : t.search;
  if (e[e.length - 1].route.index && af(n || "")) return e[e.length - 1];
  let r = xs(e);
  return r[r.length - 1];
}
/**
 * React Router v6.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Gl() {
  return (
    (Gl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Gl.apply(this, arguments)
  );
}
const Ss = C.createContext(null),
  lf = C.createContext(null),
  fi = C.createContext(null),
  Es = C.createContext(null),
  Lr = C.createContext({ outlet: null, matches: [] }),
  Dv = C.createContext(null);
function Ax(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Ea() || be(!1);
  let { basename: r, navigator: i } = C.useContext(fi),
    { hash: o, pathname: a, search: l } = sf(e, { relative: n }),
    s = a;
  return (
    r !== "/" && (s = a === "/" ? r : Gn([r, a])),
    i.createHref({ pathname: s, search: l, hash: o })
  );
}
function Ea() {
  return C.useContext(Es) != null;
}
function Zn() {
  return Ea() || be(!1), C.useContext(Es).location;
}
function Iv(e) {
  C.useContext(fi).static || C.useLayoutEffect(e);
}
function _a() {
  return C.useContext(Ss) != null ? Qx() : Dx();
}
function Dx() {
  Ea() || be(!1);
  let { basename: e, navigator: t } = C.useContext(fi),
    { matches: n } = C.useContext(Lr),
    { pathname: r } = Zn(),
    i = JSON.stringify(xs(n).map((l) => l.pathnameBase)),
    o = C.useRef(!1);
  return (
    Iv(() => {
      o.current = !0;
    }),
    C.useCallback(
      function (l, s) {
        if ((s === void 0 && (s = {}), !o.current)) return;
        if (typeof l == "number") {
          t.go(l);
          return;
        }
        let u = rf(l, JSON.parse(i), r, s.relative === "path");
        e !== "/" &&
          (u.pathname = u.pathname === "/" ? e : Gn([e, u.pathname])),
          (s.replace ? t.replace : t.push)(u, s.state, s);
      },
      [e, t, i, r]
    )
  );
}
const Ix = C.createContext(null);
function Fx(e) {
  let t = C.useContext(Lr).outlet;
  return t && C.createElement(Ix.Provider, { value: e }, t);
}
function Fv() {
  let { matches: e } = C.useContext(Lr),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function sf(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = C.useContext(Lr),
    { pathname: i } = Zn(),
    o = JSON.stringify(xs(r).map((a) => a.pathnameBase));
  return C.useMemo(() => rf(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function $x(e, t, n) {
  Ea() || be(!1);
  let { navigator: r } = C.useContext(fi),
    { matches: i } = C.useContext(Lr),
    o = i[i.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let l = o ? o.pathnameBase : "/";
  o && o.route;
  let s = Zn(),
    u;
  if (t) {
    var c;
    let b = typeof t == "string" ? Tn(t) : t;
    l === "/" || ((c = b.pathname) != null && c.startsWith(l)) || be(!1),
      (u = b);
  } else u = s;
  let d = u.pathname || "/",
    h = l === "/" ? d : d.slice(l.length) || "/",
    g = zi(e, { pathname: h }),
    v = Vx(
      g &&
        g.map((b) =>
          Object.assign({}, b, {
            params: Object.assign({}, a, b.params),
            pathname: Gn([
              l,
              r.encodeLocation
                ? r.encodeLocation(b.pathname).pathname
                : b.pathname,
            ]),
            pathnameBase:
              b.pathnameBase === "/"
                ? l
                : Gn([
                    l,
                    r.encodeLocation
                      ? r.encodeLocation(b.pathnameBase).pathname
                      : b.pathnameBase,
                  ]),
          })
        ),
      i,
      n
    );
  return t && v
    ? C.createElement(
        Es.Provider,
        {
          value: {
            location: Gl(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: Ze.Pop,
          },
        },
        v
      )
    : v;
}
function zx() {
  let e = Kx(),
    t = Pv(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return C.createElement(
    C.Fragment,
    null,
    C.createElement("h2", null, "Unexpected Application Error!"),
    C.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? C.createElement("pre", { style: i }, n) : null,
    o
  );
}
const Bx = C.createElement(zx, null);
class Ux extends C.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? C.createElement(
          Lr.Provider,
          { value: this.props.routeContext },
          C.createElement(Dv.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Hx(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = C.useContext(Ss);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    C.createElement(Lr.Provider, { value: t }, r)
  );
}
function Vx(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let o = e,
    a = (r = n) == null ? void 0 : r.errors;
  if (a != null) {
    let l = o.findIndex(
      (s) => s.route.id && (a == null ? void 0 : a[s.route.id])
    );
    l >= 0 || be(!1), (o = o.slice(0, Math.min(o.length, l + 1)));
  }
  return o.reduceRight((l, s, u) => {
    let c = s.route.id ? (a == null ? void 0 : a[s.route.id]) : null,
      d = null;
    n && (d = s.route.errorElement || Bx);
    let h = t.concat(o.slice(0, u + 1)),
      g = () => {
        let v;
        return (
          c ? (v = d) : s.route.element ? (v = s.route.element) : (v = l),
          C.createElement(Hx, {
            match: s,
            routeContext: { outlet: l, matches: h },
            children: v,
          })
        );
      };
    return n && (s.route.ErrorBoundary || s.route.errorElement || u === 0)
      ? C.createElement(Ux, {
          location: n.location,
          revalidation: n.revalidation,
          component: d,
          error: c,
          children: g(),
          routeContext: { outlet: null, matches: h },
        })
      : g();
  }, null);
}
var Hc;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate");
})(Hc || (Hc = {}));
var fa;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId");
})(fa || (fa = {}));
function Wx(e) {
  let t = C.useContext(Ss);
  return t || be(!1), t;
}
function Gx(e) {
  let t = C.useContext(lf);
  return t || be(!1), t;
}
function qx(e) {
  let t = C.useContext(Lr);
  return t || be(!1), t;
}
function $v(e) {
  let t = qx(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || be(!1), n.route.id;
}
function Kx() {
  var e;
  let t = C.useContext(Dv),
    n = Gx(fa.UseRouteError),
    r = $v(fa.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Qx() {
  let { router: e } = Wx(Hc.UseNavigateStable),
    t = $v(fa.UseNavigateStable),
    n = C.useRef(!1);
  return (
    Iv(() => {
      n.current = !0;
    }),
    C.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, Gl({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function Yx(e) {
  let { fallbackElement: t, router: n } = e,
    [r, i] = C.useState(n.state);
  C.useLayoutEffect(() => n.subscribe(i), [n, i]);
  let o = C.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (s) => n.navigate(s),
        push: (s, u, c) =>
          n.navigate(s, {
            state: u,
            preventScrollReset: c == null ? void 0 : c.preventScrollReset,
          }),
        replace: (s, u, c) =>
          n.navigate(s, {
            replace: !0,
            state: u,
            preventScrollReset: c == null ? void 0 : c.preventScrollReset,
          }),
      }),
      [n]
    ),
    a = n.basename || "/",
    l = C.useMemo(
      () => ({ router: n, navigator: o, static: !1, basename: a }),
      [n, o, a]
    );
  return C.createElement(
    C.Fragment,
    null,
    C.createElement(
      Ss.Provider,
      { value: l },
      C.createElement(
        lf.Provider,
        { value: r },
        C.createElement(
          Zx,
          {
            basename: n.basename,
            location: n.state.location,
            navigationType: n.state.historyAction,
            navigator: o,
          },
          n.state.initialized
            ? C.createElement(Xx, { routes: n.routes, state: r })
            : t
        )
      )
    ),
    null
  );
}
function Xx(e) {
  let { routes: t, state: n } = e;
  return $x(t, void 0, n);
}
function Jx(e) {
  return Fx(e.context);
}
function Zx(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Ze.Pop,
    navigator: o,
    static: a = !1,
  } = e;
  Ea() && be(!1);
  let l = t.replace(/^\/*/, "/"),
    s = C.useMemo(() => ({ basename: l, navigator: o, static: a }), [l, o, a]);
  typeof r == "string" && (r = Tn(r));
  let {
      pathname: u = "/",
      search: c = "",
      hash: d = "",
      state: h = null,
      key: g = "default",
    } = r,
    v = C.useMemo(() => {
      let b = Sa(u, l);
      return b == null
        ? null
        : {
            location: { pathname: b, search: c, hash: d, state: h, key: g },
            navigationType: i,
          };
    }, [l, u, c, d, h, g, i]);
  return v == null
    ? null
    : C.createElement(
        fi.Provider,
        { value: s },
        C.createElement(Es.Provider, { children: n, value: v })
      );
}
var Sh;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(Sh || (Sh = {}));
new Promise(() => {});
function eS(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: C.createElement(e.Component),
        Component: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: C.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function io() {
  return (
    (io = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    io.apply(this, arguments)
  );
}
function zv(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function tS(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function nS(e, t) {
  return e.button === 0 && (!t || t === "_self") && !tS(e);
}
function pa(e) {
  return (
    e === void 0 && (e = ""),
    new URLSearchParams(
      typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams
        ? e
        : Object.keys(e).reduce((t, n) => {
            let r = e[n];
            return t.concat(Array.isArray(r) ? r.map((i) => [n, i]) : [[n, r]]);
          }, [])
    )
  );
}
function rS(e, t) {
  let n = pa(e);
  if (t)
    for (let r of t.keys())
      n.has(r) ||
        t.getAll(r).forEach((i) => {
          n.append(r, i);
        });
  return n;
}
const iS = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
  ],
  oS = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "children",
  ];
function aS(e, t) {
  return kx({
    basename: t == null ? void 0 : t.basename,
    future: io({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: Kw({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || lS(),
    routes: e,
    mapRouteProperties: eS,
  }).initialize();
}
function lS() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = io({}, t, { errors: sS(t.errors) })), t;
}
function sS(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, i] of t)
    if (i && i.__type === "RouteErrorResponse")
      n[r] = new of(i.status, i.statusText, i.data, i.internal === !0);
    else if (i && i.__type === "Error") {
      let o = new Error(i.message);
      (o.stack = ""), (n[r] = o);
    } else n[r] = i;
  return n;
}
const uS =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  cS = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Cn = C.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: a,
        state: l,
        target: s,
        to: u,
        preventScrollReset: c,
      } = t,
      d = zv(t, iS),
      { basename: h } = C.useContext(fi),
      g,
      v = !1;
    if (typeof u == "string" && cS.test(u) && ((g = u), uS))
      try {
        let p = new URL(window.location.href),
          m = u.startsWith("//") ? new URL(p.protocol + u) : new URL(u),
          w = Sa(m.pathname, h);
        m.origin === p.origin && w != null
          ? (u = w + m.search + m.hash)
          : (v = !0);
      } catch {}
    let b = Ax(u, { relative: i }),
      E = dS(u, {
        replace: a,
        state: l,
        target: s,
        preventScrollReset: c,
        relative: i,
      });
    function f(p) {
      r && r(p), p.defaultPrevented || E(p);
    }
    return C.createElement(
      "a",
      io({}, d, { href: g || b, onClick: v || o ? r : f, ref: n, target: s })
    );
  }),
  hn = C.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: i = !1,
        className: o = "",
        end: a = !1,
        style: l,
        to: s,
        children: u,
      } = t,
      c = zv(t, oS),
      d = sf(s, { relative: c.relative }),
      h = Zn(),
      g = C.useContext(lf),
      { navigator: v } = C.useContext(fi),
      b = v.encodeLocation ? v.encodeLocation(d).pathname : d.pathname,
      E = h.pathname,
      f =
        g && g.navigation && g.navigation.location
          ? g.navigation.location.pathname
          : null;
    i ||
      ((E = E.toLowerCase()),
      (f = f ? f.toLowerCase() : null),
      (b = b.toLowerCase()));
    let p = E === b || (!a && E.startsWith(b) && E.charAt(b.length) === "/"),
      m =
        f != null &&
        (f === b || (!a && f.startsWith(b) && f.charAt(b.length) === "/")),
      w = p ? r : void 0,
      _;
    typeof o == "function"
      ? (_ = o({ isActive: p, isPending: m }))
      : (_ = [o, p ? "active" : null, m ? "pending" : null]
          .filter(Boolean)
          .join(" "));
    let T = typeof l == "function" ? l({ isActive: p, isPending: m }) : l;
    return C.createElement(
      Cn,
      io({}, c, { "aria-current": w, className: _, ref: n, style: T, to: s }),
      typeof u == "function" ? u({ isActive: p, isPending: m }) : u
    );
  });
var Eh;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmitImpl = "useSubmitImpl"),
    (e.UseFetcher = "useFetcher");
})(Eh || (Eh = {}));
var _h;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(_h || (_h = {}));
function dS(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: a,
    } = t === void 0 ? {} : t,
    l = _a(),
    s = Zn(),
    u = sf(e, { relative: a });
  return C.useCallback(
    (c) => {
      if (nS(c, n)) {
        c.preventDefault();
        let d = r !== void 0 ? r : si(s) === si(u);
        l(e, { replace: d, state: i, preventScrollReset: o, relative: a });
      }
    },
    [s, l, u, r, i, n, e, o, a]
  );
}
function Ca(e) {
  let t = C.useRef(pa(e)),
    n = C.useRef(!1),
    r = Zn(),
    i = C.useMemo(() => rS(r.search, n.current ? null : t.current), [r.search]),
    o = _a(),
    a = C.useCallback(
      (l, s) => {
        const u = pa(typeof l == "function" ? l(i) : l);
        (n.current = !0), o("?" + u, s);
      },
      [o, i]
    );
  return [i, a];
}
class ka {
  constructor() {
    (this.listeners = []), (this.subscribe = this.subscribe.bind(this));
  }
  subscribe(t) {
    return (
      this.listeners.push(t),
      this.onSubscribe(),
      () => {
        (this.listeners = this.listeners.filter((n) => n !== t)),
          this.onUnsubscribe();
      }
    );
  }
  hasListeners() {
    return this.listeners.length > 0;
  }
  onSubscribe() {}
  onUnsubscribe() {}
}
const ha = typeof window > "u" || "Deno" in window;
function Kt() {}
function fS(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Vc(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Bv(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function jo(e, t, n) {
  return _s(e)
    ? typeof t == "function"
      ? { ...n, queryKey: e, queryFn: t }
      : { ...t, queryKey: e }
    : e;
}
function cr(e, t, n) {
  return _s(e) ? [{ ...t, queryKey: e }, n] : [e || {}, t];
}
function Ch(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: i,
    predicate: o,
    queryKey: a,
    stale: l,
  } = e;
  if (_s(a)) {
    if (r) {
      if (t.queryHash !== uf(a, t.options)) return !1;
    } else if (!ql(t.queryKey, a)) return !1;
  }
  if (n !== "all") {
    const s = t.isActive();
    if ((n === "active" && !s) || (n === "inactive" && s)) return !1;
  }
  return !(
    (typeof l == "boolean" && t.isStale() !== l) ||
    (typeof i < "u" && i !== t.state.fetchStatus) ||
    (o && !o(t))
  );
}
function kh(e, t) {
  const { exact: n, fetching: r, predicate: i, mutationKey: o } = e;
  if (_s(o)) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Qr(t.options.mutationKey) !== Qr(o)) return !1;
    } else if (!ql(t.options.mutationKey, o)) return !1;
  }
  return !(
    (typeof r == "boolean" && (t.state.status === "loading") !== r) ||
    (i && !i(t))
  );
}
function uf(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Qr)(e);
}
function Qr(e) {
  return JSON.stringify(e, (t, n) =>
    Wc(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, i) => ((r[i] = n[i]), r), {})
      : n
  );
}
function ql(e, t) {
  return Uv(e, t);
}
function Uv(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? !Object.keys(t).some((n) => !Uv(e[n], t[n]))
    : !1;
}
function Hv(e, t) {
  if (e === t) return e;
  const n = Ph(e) && Ph(t);
  if (n || (Wc(e) && Wc(t))) {
    const r = n ? e.length : Object.keys(e).length,
      i = n ? t : Object.keys(t),
      o = i.length,
      a = n ? [] : {};
    let l = 0;
    for (let s = 0; s < o; s++) {
      const u = n ? s : i[s];
      (a[u] = Hv(e[u], t[u])), a[u] === e[u] && l++;
    }
    return r === o && l === r ? e : a;
  }
  return t;
}
function Th(e, t) {
  if ((e && !t) || (t && !e)) return !1;
  for (const n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function Ph(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Wc(e) {
  if (!Oh(e)) return !1;
  const t = e.constructor;
  if (typeof t > "u") return !0;
  const n = t.prototype;
  return !(!Oh(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function Oh(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function _s(e) {
  return Array.isArray(e);
}
function Vv(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Nh(e) {
  Vv(0).then(e);
}
function pS() {
  if (typeof AbortController == "function") return new AbortController();
}
function Gc(e, t, n) {
  return n.isDataEqual != null && n.isDataEqual(e, t)
    ? e
    : typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
    ? Hv(e, t)
    : t;
}
class hS extends ka {
  constructor() {
    super(),
      (this.setup = (t) => {
        if (!ha && window.addEventListener) {
          const n = () => t();
          return (
            window.addEventListener("visibilitychange", n, !1),
            window.addEventListener("focus", n, !1),
            () => {
              window.removeEventListener("visibilitychange", n),
                window.removeEventListener("focus", n);
            }
          );
        }
      });
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var t;
      (t = this.cleanup) == null || t.call(this), (this.cleanup = void 0);
    }
  }
  setEventListener(t) {
    var n;
    (this.setup = t),
      (n = this.cleanup) == null || n.call(this),
      (this.cleanup = t((r) => {
        typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
      }));
  }
  setFocused(t) {
    (this.focused = t), t && this.onFocus();
  }
  onFocus() {
    this.listeners.forEach((t) => {
      t();
    });
  }
  isFocused() {
    return typeof this.focused == "boolean"
      ? this.focused
      : typeof document > "u"
      ? !0
      : [void 0, "visible", "prerender"].includes(document.visibilityState);
  }
}
const Kl = new hS();
class mS extends ka {
  constructor() {
    super(),
      (this.setup = (t) => {
        if (!ha && window.addEventListener) {
          const n = () => t();
          return (
            window.addEventListener("online", n, !1),
            window.addEventListener("offline", n, !1),
            () => {
              window.removeEventListener("online", n),
                window.removeEventListener("offline", n);
            }
          );
        }
      });
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var t;
      (t = this.cleanup) == null || t.call(this), (this.cleanup = void 0);
    }
  }
  setEventListener(t) {
    var n;
    (this.setup = t),
      (n = this.cleanup) == null || n.call(this),
      (this.cleanup = t((r) => {
        typeof r == "boolean" ? this.setOnline(r) : this.onOnline();
      }));
  }
  setOnline(t) {
    (this.online = t), t && this.onOnline();
  }
  onOnline() {
    this.listeners.forEach((t) => {
      t();
    });
  }
  isOnline() {
    return typeof this.online == "boolean"
      ? this.online
      : typeof navigator > "u" || typeof navigator.onLine > "u"
      ? !0
      : navigator.onLine;
  }
}
const Ql = new mS();
function gS(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Cs(e) {
  return (e ?? "online") === "online" ? Ql.isOnline() : !0;
}
class Wv {
  constructor(t) {
    (this.revert = t == null ? void 0 : t.revert),
      (this.silent = t == null ? void 0 : t.silent);
  }
}
function gl(e) {
  return e instanceof Wv;
}
function Gv(e) {
  let t = !1,
    n = 0,
    r = !1,
    i,
    o,
    a;
  const l = new Promise((E, f) => {
      (o = E), (a = f);
    }),
    s = (E) => {
      r || (g(new Wv(E)), e.abort == null || e.abort());
    },
    u = () => {
      t = !0;
    },
    c = () => {
      t = !1;
    },
    d = () => !Kl.isFocused() || (e.networkMode !== "always" && !Ql.isOnline()),
    h = (E) => {
      r ||
        ((r = !0),
        e.onSuccess == null || e.onSuccess(E),
        i == null || i(),
        o(E));
    },
    g = (E) => {
      r ||
        ((r = !0), e.onError == null || e.onError(E), i == null || i(), a(E));
    },
    v = () =>
      new Promise((E) => {
        (i = (f) => {
          const p = r || !d();
          return p && E(f), p;
        }),
          e.onPause == null || e.onPause();
      }).then(() => {
        (i = void 0), r || e.onContinue == null || e.onContinue();
      }),
    b = () => {
      if (r) return;
      let E;
      try {
        E = e.fn();
      } catch (f) {
        E = Promise.reject(f);
      }
      Promise.resolve(E)
        .then(h)
        .catch((f) => {
          var p, m;
          if (r) return;
          const w = (p = e.retry) != null ? p : 3,
            _ = (m = e.retryDelay) != null ? m : gS,
            T = typeof _ == "function" ? _(n, f) : _,
            k =
              w === !0 ||
              (typeof w == "number" && n < w) ||
              (typeof w == "function" && w(n, f));
          if (t || !k) {
            g(f);
            return;
          }
          n++,
            e.onFail == null || e.onFail(n, f),
            Vv(T)
              .then(() => {
                if (d()) return v();
              })
              .then(() => {
                t ? g(f) : b();
              });
        });
    };
  return (
    Cs(e.networkMode) ? b() : v().then(b),
    {
      promise: l,
      cancel: s,
      continue: () => ((i == null ? void 0 : i()) ? l : Promise.resolve()),
      cancelRetry: u,
      continueRetry: c,
    }
  );
}
const cf = console;
function vS() {
  let e = [],
    t = 0,
    n = (c) => {
      c();
    },
    r = (c) => {
      c();
    };
  const i = (c) => {
      let d;
      t++;
      try {
        d = c();
      } finally {
        t--, t || l();
      }
      return d;
    },
    o = (c) => {
      t
        ? e.push(c)
        : Nh(() => {
            n(c);
          });
    },
    a =
      (c) =>
      (...d) => {
        o(() => {
          c(...d);
        });
      },
    l = () => {
      const c = e;
      (e = []),
        c.length &&
          Nh(() => {
            r(() => {
              c.forEach((d) => {
                n(d);
              });
            });
          });
    };
  return {
    batch: i,
    batchCalls: a,
    schedule: o,
    setNotifyFunction: (c) => {
      n = c;
    },
    setBatchNotifyFunction: (c) => {
      r = c;
    },
  };
}
const et = vS();
class qv {
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(),
      Vc(this.cacheTime) &&
        (this.gcTimeout = setTimeout(() => {
          this.optionalRemove();
        }, this.cacheTime));
  }
  updateCacheTime(t) {
    this.cacheTime = Math.max(
      this.cacheTime || 0,
      t ?? (ha ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    this.gcTimeout && (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
  }
}
class yS extends qv {
  constructor(t) {
    super(),
      (this.abortSignalConsumed = !1),
      (this.defaultOptions = t.defaultOptions),
      this.setOptions(t.options),
      (this.observers = []),
      (this.cache = t.cache),
      (this.logger = t.logger || cf),
      (this.queryKey = t.queryKey),
      (this.queryHash = t.queryHash),
      (this.initialState = t.state || bS(this.options)),
      (this.state = this.initialState),
      this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  setOptions(t) {
    (this.options = { ...this.defaultOptions, ...t }),
      this.updateCacheTime(this.options.cacheTime);
  }
  optionalRemove() {
    !this.observers.length &&
      this.state.fetchStatus === "idle" &&
      this.cache.remove(this);
  }
  setData(t, n) {
    const r = Gc(this.state.data, t, this.options);
    return (
      this.dispatch({
        data: r,
        type: "success",
        dataUpdatedAt: n == null ? void 0 : n.updatedAt,
        manual: n == null ? void 0 : n.manual,
      }),
      r
    );
  }
  setState(t, n) {
    this.dispatch({ type: "setState", state: t, setStateOptions: n });
  }
  cancel(t) {
    var n;
    const r = this.promise;
    return (
      (n = this.retryer) == null || n.cancel(t),
      r ? r.then(Kt).catch(Kt) : Promise.resolve()
    );
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(this.initialState);
  }
  isActive() {
    return this.observers.some((t) => t.options.enabled !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return (
      this.state.isInvalidated ||
      !this.state.dataUpdatedAt ||
      this.observers.some((t) => t.getCurrentResult().isStale)
    );
  }
  isStaleByTime(t = 0) {
    return (
      this.state.isInvalidated ||
      !this.state.dataUpdatedAt ||
      !Bv(this.state.dataUpdatedAt, t)
    );
  }
  onFocus() {
    var t;
    const n = this.observers.find((r) => r.shouldFetchOnWindowFocus());
    n && n.refetch({ cancelRefetch: !1 }),
      (t = this.retryer) == null || t.continue();
  }
  onOnline() {
    var t;
    const n = this.observers.find((r) => r.shouldFetchOnReconnect());
    n && n.refetch({ cancelRefetch: !1 }),
      (t = this.retryer) == null || t.continue();
  }
  addObserver(t) {
    this.observers.indexOf(t) === -1 &&
      (this.observers.push(t),
      this.clearGcTimeout(),
      this.cache.notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    this.observers.indexOf(t) !== -1 &&
      ((this.observers = this.observers.filter((n) => n !== t)),
      this.observers.length ||
        (this.retryer &&
          (this.abortSignalConsumed
            ? this.retryer.cancel({ revert: !0 })
            : this.retryer.cancelRetry()),
        this.scheduleGc()),
      this.cache.notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || this.dispatch({ type: "invalidate" });
  }
  fetch(t, n) {
    var r, i;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.dataUpdatedAt && n != null && n.cancelRefetch)
        this.cancel({ silent: !0 });
      else if (this.promise) {
        var o;
        return (o = this.retryer) == null || o.continueRetry(), this.promise;
      }
    }
    if ((t && this.setOptions(t), !this.options.queryFn)) {
      const g = this.observers.find((v) => v.options.queryFn);
      g && this.setOptions(g.options);
    }
    Array.isArray(this.options.queryKey);
    const a = pS(),
      l = { queryKey: this.queryKey, pageParam: void 0, meta: this.meta },
      s = (g) => {
        Object.defineProperty(g, "signal", {
          enumerable: !0,
          get: () => {
            if (a) return (this.abortSignalConsumed = !0), a.signal;
          },
        });
      };
    s(l);
    const u = () =>
        this.options.queryFn
          ? ((this.abortSignalConsumed = !1), this.options.queryFn(l))
          : Promise.reject("Missing queryFn"),
      c = {
        fetchOptions: n,
        options: this.options,
        queryKey: this.queryKey,
        state: this.state,
        fetchFn: u,
      };
    if (
      (s(c),
      (r = this.options.behavior) == null || r.onFetch(c),
      (this.revertState = this.state),
      this.state.fetchStatus === "idle" ||
        this.state.fetchMeta !==
          ((i = c.fetchOptions) == null ? void 0 : i.meta))
    ) {
      var d;
      this.dispatch({
        type: "fetch",
        meta: (d = c.fetchOptions) == null ? void 0 : d.meta,
      });
    }
    const h = (g) => {
      if (
        ((gl(g) && g.silent) || this.dispatch({ type: "error", error: g }),
        !gl(g))
      ) {
        var v, b, E, f;
        (v = (b = this.cache.config).onError) == null || v.call(b, g, this),
          (E = (f = this.cache.config).onSettled) == null ||
            E.call(f, this.state.data, g, this);
      }
      this.isFetchingOptimistic || this.scheduleGc(),
        (this.isFetchingOptimistic = !1);
    };
    return (
      (this.retryer = Gv({
        fn: c.fetchFn,
        abort: a == null ? void 0 : a.abort.bind(a),
        onSuccess: (g) => {
          var v, b, E, f;
          if (typeof g > "u") {
            h(new Error(this.queryHash + " data is undefined"));
            return;
          }
          this.setData(g),
            (v = (b = this.cache.config).onSuccess) == null ||
              v.call(b, g, this),
            (E = (f = this.cache.config).onSettled) == null ||
              E.call(f, g, this.state.error, this),
            this.isFetchingOptimistic || this.scheduleGc(),
            (this.isFetchingOptimistic = !1);
        },
        onError: h,
        onFail: (g, v) => {
          this.dispatch({ type: "failed", failureCount: g, error: v });
        },
        onPause: () => {
          this.dispatch({ type: "pause" });
        },
        onContinue: () => {
          this.dispatch({ type: "continue" });
        },
        retry: c.options.retry,
        retryDelay: c.options.retryDelay,
        networkMode: c.options.networkMode,
      })),
      (this.promise = this.retryer.promise),
      this.promise
    );
  }
  dispatch(t) {
    const n = (r) => {
      var i, o;
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
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchMeta: (i = t.meta) != null ? i : null,
            fetchStatus: Cs(this.options.networkMode) ? "fetching" : "paused",
            ...(!r.dataUpdatedAt && { error: null, status: "loading" }),
          };
        case "success":
          return {
            ...r,
            data: t.data,
            dataUpdateCount: r.dataUpdateCount + 1,
            dataUpdatedAt: (o = t.dataUpdatedAt) != null ? o : Date.now(),
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
          const a = t.error;
          return gl(a) && a.revert && this.revertState
            ? { ...this.revertState }
            : {
                ...r,
                error: a,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: a,
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
      et.batch(() => {
        this.observers.forEach((r) => {
          r.onQueryUpdate(t);
        }),
          this.cache.notify({ query: this, type: "updated", action: t });
      });
  }
}
function bS(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = typeof t < "u",
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
    status: n ? "success" : "loading",
    fetchStatus: "idle",
  };
}
class wS extends ka {
  constructor(t) {
    super(),
      (this.config = t || {}),
      (this.queries = []),
      (this.queriesMap = {});
  }
  build(t, n, r) {
    var i;
    const o = n.queryKey,
      a = (i = n.queryHash) != null ? i : uf(o, n);
    let l = this.get(a);
    return (
      l ||
        ((l = new yS({
          cache: this,
          logger: t.getLogger(),
          queryKey: o,
          queryHash: a,
          options: t.defaultQueryOptions(n),
          state: r,
          defaultOptions: t.getQueryDefaults(o),
        })),
        this.add(l)),
      l
    );
  }
  add(t) {
    this.queriesMap[t.queryHash] ||
      ((this.queriesMap[t.queryHash] = t),
      this.queries.push(t),
      this.notify({ type: "added", query: t }));
  }
  remove(t) {
    const n = this.queriesMap[t.queryHash];
    n &&
      (t.destroy(),
      (this.queries = this.queries.filter((r) => r !== t)),
      n === t && delete this.queriesMap[t.queryHash],
      this.notify({ type: "removed", query: t }));
  }
  clear() {
    et.batch(() => {
      this.queries.forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return this.queriesMap[t];
  }
  getAll() {
    return this.queries;
  }
  find(t, n) {
    const [r] = cr(t, n);
    return (
      typeof r.exact > "u" && (r.exact = !0), this.queries.find((i) => Ch(r, i))
    );
  }
  findAll(t, n) {
    const [r] = cr(t, n);
    return Object.keys(r).length > 0
      ? this.queries.filter((i) => Ch(r, i))
      : this.queries;
  }
  notify(t) {
    et.batch(() => {
      this.listeners.forEach((n) => {
        n(t);
      });
    });
  }
  onFocus() {
    et.batch(() => {
      this.queries.forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    et.batch(() => {
      this.queries.forEach((t) => {
        t.onOnline();
      });
    });
  }
}
class xS extends qv {
  constructor(t) {
    super(),
      (this.defaultOptions = t.defaultOptions),
      (this.mutationId = t.mutationId),
      (this.mutationCache = t.mutationCache),
      (this.logger = t.logger || cf),
      (this.observers = []),
      (this.state = t.state || SS()),
      this.setOptions(t.options),
      this.scheduleGc();
  }
  setOptions(t) {
    (this.options = { ...this.defaultOptions, ...t }),
      this.updateCacheTime(this.options.cacheTime);
  }
  get meta() {
    return this.options.meta;
  }
  setState(t) {
    this.dispatch({ type: "setState", state: t });
  }
  addObserver(t) {
    this.observers.indexOf(t) === -1 &&
      (this.observers.push(t),
      this.clearGcTimeout(),
      this.mutationCache.notify({
        type: "observerAdded",
        mutation: this,
        observer: t,
      }));
  }
  removeObserver(t) {
    (this.observers = this.observers.filter((n) => n !== t)),
      this.scheduleGc(),
      this.mutationCache.notify({
        type: "observerRemoved",
        mutation: this,
        observer: t,
      });
  }
  optionalRemove() {
    this.observers.length ||
      (this.state.status === "loading"
        ? this.scheduleGc()
        : this.mutationCache.remove(this));
  }
  continue() {
    var t, n;
    return (t = (n = this.retryer) == null ? void 0 : n.continue()) != null
      ? t
      : this.execute();
  }
  async execute() {
    const t = () => {
        var k;
        return (
          (this.retryer = Gv({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(this.state.variables)
                : Promise.reject("No mutationFn found"),
            onFail: (N, S) => {
              this.dispatch({ type: "failed", failureCount: N, error: S });
            },
            onPause: () => {
              this.dispatch({ type: "pause" });
            },
            onContinue: () => {
              this.dispatch({ type: "continue" });
            },
            retry: (k = this.options.retry) != null ? k : 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
          })),
          this.retryer.promise
        );
      },
      n = this.state.status === "loading";
    try {
      var r, i, o, a, l, s, u, c;
      if (!n) {
        var d, h, g, v;
        this.dispatch({ type: "loading", variables: this.options.variables }),
          await ((d = (h = this.mutationCache.config).onMutate) == null
            ? void 0
            : d.call(h, this.state.variables, this));
        const N = await ((g = (v = this.options).onMutate) == null
          ? void 0
          : g.call(v, this.state.variables));
        N !== this.state.context &&
          this.dispatch({
            type: "loading",
            context: N,
            variables: this.state.variables,
          });
      }
      const k = await t();
      return (
        await ((r = (i = this.mutationCache.config).onSuccess) == null
          ? void 0
          : r.call(i, k, this.state.variables, this.state.context, this)),
        await ((o = (a = this.options).onSuccess) == null
          ? void 0
          : o.call(a, k, this.state.variables, this.state.context)),
        await ((l = (s = this.mutationCache.config).onSettled) == null
          ? void 0
          : l.call(s, k, null, this.state.variables, this.state.context, this)),
        await ((u = (c = this.options).onSettled) == null
          ? void 0
          : u.call(c, k, null, this.state.variables, this.state.context)),
        this.dispatch({ type: "success", data: k }),
        k
      );
    } catch (k) {
      try {
        var b, E, f, p, m, w, _, T;
        throw (
          (await ((b = (E = this.mutationCache.config).onError) == null
            ? void 0
            : b.call(E, k, this.state.variables, this.state.context, this)),
          await ((f = (p = this.options).onError) == null
            ? void 0
            : f.call(p, k, this.state.variables, this.state.context)),
          await ((m = (w = this.mutationCache.config).onSettled) == null
            ? void 0
            : m.call(
                w,
                void 0,
                k,
                this.state.variables,
                this.state.context,
                this
              )),
          await ((_ = (T = this.options).onSettled) == null
            ? void 0
            : _.call(T, void 0, k, this.state.variables, this.state.context)),
          k)
        );
      } finally {
        this.dispatch({ type: "error", error: k });
      }
    }
  }
  dispatch(t) {
    const n = (r) => {
      switch (t.type) {
        case "failed":
          return { ...r, failureCount: t.failureCount, failureReason: t.error };
        case "pause":
          return { ...r, isPaused: !0 };
        case "continue":
          return { ...r, isPaused: !1 };
        case "loading":
          return {
            ...r,
            context: t.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: !Cs(this.options.networkMode),
            status: "loading",
            variables: t.variables,
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
        case "setState":
          return { ...r, ...t.state };
      }
    };
    (this.state = n(this.state)),
      et.batch(() => {
        this.observers.forEach((r) => {
          r.onMutationUpdate(t);
        }),
          this.mutationCache.notify({
            mutation: this,
            type: "updated",
            action: t,
          });
      });
  }
}
function SS() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
  };
}
class ES extends ka {
  constructor(t) {
    super(),
      (this.config = t || {}),
      (this.mutations = []),
      (this.mutationId = 0);
  }
  build(t, n, r) {
    const i = new xS({
      mutationCache: this,
      logger: t.getLogger(),
      mutationId: ++this.mutationId,
      options: t.defaultMutationOptions(n),
      state: r,
      defaultOptions: n.mutationKey
        ? t.getMutationDefaults(n.mutationKey)
        : void 0,
    });
    return this.add(i), i;
  }
  add(t) {
    this.mutations.push(t), this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    (this.mutations = this.mutations.filter((n) => n !== t)),
      this.notify({ type: "removed", mutation: t });
  }
  clear() {
    et.batch(() => {
      this.mutations.forEach((t) => {
        this.remove(t);
      });
    });
  }
  getAll() {
    return this.mutations;
  }
  find(t) {
    return (
      typeof t.exact > "u" && (t.exact = !0),
      this.mutations.find((n) => kh(t, n))
    );
  }
  findAll(t) {
    return this.mutations.filter((n) => kh(t, n));
  }
  notify(t) {
    et.batch(() => {
      this.listeners.forEach((n) => {
        n(t);
      });
    });
  }
  resumePausedMutations() {
    var t;
    return (
      (this.resuming = ((t = this.resuming) != null ? t : Promise.resolve())
        .then(() => {
          const n = this.mutations.filter((r) => r.state.isPaused);
          return et.batch(() =>
            n.reduce(
              (r, i) => r.then(() => i.continue().catch(Kt)),
              Promise.resolve()
            )
          );
        })
        .then(() => {
          this.resuming = void 0;
        })),
      this.resuming
    );
  }
}
function _S() {
  return {
    onFetch: (e) => {
      e.fetchFn = () => {
        var t, n, r, i, o, a;
        const l =
            (t = e.fetchOptions) == null || (n = t.meta) == null
              ? void 0
              : n.refetchPage,
          s =
            (r = e.fetchOptions) == null || (i = r.meta) == null
              ? void 0
              : i.fetchMore,
          u = s == null ? void 0 : s.pageParam,
          c = (s == null ? void 0 : s.direction) === "forward",
          d = (s == null ? void 0 : s.direction) === "backward",
          h = ((o = e.state.data) == null ? void 0 : o.pages) || [],
          g = ((a = e.state.data) == null ? void 0 : a.pageParams) || [];
        let v = g,
          b = !1;
        const E = (T) => {
            Object.defineProperty(T, "signal", {
              enumerable: !0,
              get: () => {
                var k;
                if ((k = e.signal) != null && k.aborted) b = !0;
                else {
                  var N;
                  (N = e.signal) == null ||
                    N.addEventListener("abort", () => {
                      b = !0;
                    });
                }
                return e.signal;
              },
            });
          },
          f = e.options.queryFn || (() => Promise.reject("Missing queryFn")),
          p = (T, k, N, S) => (
            (v = S ? [k, ...v] : [...v, k]), S ? [N, ...T] : [...T, N]
          ),
          m = (T, k, N, S) => {
            if (b) return Promise.reject("Cancelled");
            if (typeof N > "u" && !k && T.length) return Promise.resolve(T);
            const F = {
              queryKey: e.queryKey,
              pageParam: N,
              meta: e.options.meta,
            };
            E(F);
            const j = f(F);
            return Promise.resolve(j).then((O) => p(T, N, O, S));
          };
        let w;
        if (!h.length) w = m([]);
        else if (c) {
          const T = typeof u < "u",
            k = T ? u : Rh(e.options, h);
          w = m(h, T, k);
        } else if (d) {
          const T = typeof u < "u",
            k = T ? u : CS(e.options, h);
          w = m(h, T, k, !0);
        } else {
          v = [];
          const T = typeof e.options.getNextPageParam > "u";
          w = (l && h[0] ? l(h[0], 0, h) : !0)
            ? m([], T, g[0])
            : Promise.resolve(p([], g[0], h[0]));
          for (let N = 1; N < h.length; N++)
            w = w.then((S) => {
              if (l && h[N] ? l(h[N], N, h) : !0) {
                const j = T ? g[N] : Rh(e.options, S);
                return m(S, T, j);
              }
              return Promise.resolve(p(S, g[N], h[N]));
            });
        }
        return w.then((T) => ({ pages: T, pageParams: v }));
      };
    },
  };
}
function Rh(e, t) {
  return e.getNextPageParam == null
    ? void 0
    : e.getNextPageParam(t[t.length - 1], t);
}
function CS(e, t) {
  return e.getPreviousPageParam == null
    ? void 0
    : e.getPreviousPageParam(t[0], t);
}
class kS {
  constructor(t = {}) {
    (this.queryCache = t.queryCache || new wS()),
      (this.mutationCache = t.mutationCache || new ES()),
      (this.logger = t.logger || cf),
      (this.defaultOptions = t.defaultOptions || {}),
      (this.queryDefaults = []),
      (this.mutationDefaults = []),
      (this.mountCount = 0);
  }
  mount() {
    this.mountCount++,
      this.mountCount === 1 &&
        ((this.unsubscribeFocus = Kl.subscribe(() => {
          Kl.isFocused() &&
            (this.resumePausedMutations(), this.queryCache.onFocus());
        })),
        (this.unsubscribeOnline = Ql.subscribe(() => {
          Ql.isOnline() &&
            (this.resumePausedMutations(), this.queryCache.onOnline());
        })));
  }
  unmount() {
    var t, n;
    this.mountCount--,
      this.mountCount === 0 &&
        ((t = this.unsubscribeFocus) == null || t.call(this),
        (this.unsubscribeFocus = void 0),
        (n = this.unsubscribeOnline) == null || n.call(this),
        (this.unsubscribeOnline = void 0));
  }
  isFetching(t, n) {
    const [r] = cr(t, n);
    return (r.fetchStatus = "fetching"), this.queryCache.findAll(r).length;
  }
  isMutating(t) {
    return this.mutationCache.findAll({ ...t, fetching: !0 }).length;
  }
  getQueryData(t, n) {
    var r;
    return (r = this.queryCache.find(t, n)) == null ? void 0 : r.state.data;
  }
  ensureQueryData(t, n, r) {
    const i = jo(t, n, r),
      o = this.getQueryData(i.queryKey);
    return o ? Promise.resolve(o) : this.fetchQuery(i);
  }
  getQueriesData(t) {
    return this.getQueryCache()
      .findAll(t)
      .map(({ queryKey: n, state: r }) => {
        const i = r.data;
        return [n, i];
      });
  }
  setQueryData(t, n, r) {
    const i = this.queryCache.find(t),
      o = i == null ? void 0 : i.state.data,
      a = fS(n, o);
    if (typeof a > "u") return;
    const l = jo(t),
      s = this.defaultQueryOptions(l);
    return this.queryCache.build(this, s).setData(a, { ...r, manual: !0 });
  }
  setQueriesData(t, n, r) {
    return et.batch(() =>
      this.getQueryCache()
        .findAll(t)
        .map(({ queryKey: i }) => [i, this.setQueryData(i, n, r)])
    );
  }
  getQueryState(t, n) {
    var r;
    return (r = this.queryCache.find(t, n)) == null ? void 0 : r.state;
  }
  removeQueries(t, n) {
    const [r] = cr(t, n),
      i = this.queryCache;
    et.batch(() => {
      i.findAll(r).forEach((o) => {
        i.remove(o);
      });
    });
  }
  resetQueries(t, n, r) {
    const [i, o] = cr(t, n, r),
      a = this.queryCache,
      l = { type: "active", ...i };
    return et.batch(
      () => (
        a.findAll(i).forEach((s) => {
          s.reset();
        }),
        this.refetchQueries(l, o)
      )
    );
  }
  cancelQueries(t, n, r) {
    const [i, o = {}] = cr(t, n, r);
    typeof o.revert > "u" && (o.revert = !0);
    const a = et.batch(() =>
      this.queryCache.findAll(i).map((l) => l.cancel(o))
    );
    return Promise.all(a).then(Kt).catch(Kt);
  }
  invalidateQueries(t, n, r) {
    const [i, o] = cr(t, n, r);
    return et.batch(() => {
      var a, l;
      if (
        (this.queryCache.findAll(i).forEach((u) => {
          u.invalidate();
        }),
        i.refetchType === "none")
      )
        return Promise.resolve();
      const s = {
        ...i,
        type:
          (a = (l = i.refetchType) != null ? l : i.type) != null ? a : "active",
      };
      return this.refetchQueries(s, o);
    });
  }
  refetchQueries(t, n, r) {
    const [i, o] = cr(t, n, r),
      a = et.batch(() =>
        this.queryCache
          .findAll(i)
          .filter((s) => !s.isDisabled())
          .map((s) => {
            var u;
            return s.fetch(void 0, {
              ...o,
              cancelRefetch:
                (u = o == null ? void 0 : o.cancelRefetch) != null ? u : !0,
              meta: { refetchPage: i.refetchPage },
            });
          })
      );
    let l = Promise.all(a).then(Kt);
    return (o != null && o.throwOnError) || (l = l.catch(Kt)), l;
  }
  fetchQuery(t, n, r) {
    const i = jo(t, n, r),
      o = this.defaultQueryOptions(i);
    typeof o.retry > "u" && (o.retry = !1);
    const a = this.queryCache.build(this, o);
    return a.isStaleByTime(o.staleTime)
      ? a.fetch(o)
      : Promise.resolve(a.state.data);
  }
  prefetchQuery(t, n, r) {
    return this.fetchQuery(t, n, r).then(Kt).catch(Kt);
  }
  fetchInfiniteQuery(t, n, r) {
    const i = jo(t, n, r);
    return (i.behavior = _S()), this.fetchQuery(i);
  }
  prefetchInfiniteQuery(t, n, r) {
    return this.fetchInfiniteQuery(t, n, r).then(Kt).catch(Kt);
  }
  resumePausedMutations() {
    return this.mutationCache.resumePausedMutations();
  }
  getQueryCache() {
    return this.queryCache;
  }
  getMutationCache() {
    return this.mutationCache;
  }
  getLogger() {
    return this.logger;
  }
  getDefaultOptions() {
    return this.defaultOptions;
  }
  setDefaultOptions(t) {
    this.defaultOptions = t;
  }
  setQueryDefaults(t, n) {
    const r = this.queryDefaults.find((i) => Qr(t) === Qr(i.queryKey));
    r
      ? (r.defaultOptions = n)
      : this.queryDefaults.push({ queryKey: t, defaultOptions: n });
  }
  getQueryDefaults(t) {
    if (!t) return;
    const n = this.queryDefaults.find((r) => ql(t, r.queryKey));
    return n == null ? void 0 : n.defaultOptions;
  }
  setMutationDefaults(t, n) {
    const r = this.mutationDefaults.find((i) => Qr(t) === Qr(i.mutationKey));
    r
      ? (r.defaultOptions = n)
      : this.mutationDefaults.push({ mutationKey: t, defaultOptions: n });
  }
  getMutationDefaults(t) {
    if (!t) return;
    const n = this.mutationDefaults.find((r) => ql(t, r.mutationKey));
    return n == null ? void 0 : n.defaultOptions;
  }
  defaultQueryOptions(t) {
    if (t != null && t._defaulted) return t;
    const n = {
      ...this.defaultOptions.queries,
      ...this.getQueryDefaults(t == null ? void 0 : t.queryKey),
      ...t,
      _defaulted: !0,
    };
    return (
      !n.queryHash && n.queryKey && (n.queryHash = uf(n.queryKey, n)),
      typeof n.refetchOnReconnect > "u" &&
        (n.refetchOnReconnect = n.networkMode !== "always"),
      typeof n.useErrorBoundary > "u" && (n.useErrorBoundary = !!n.suspense),
      n
    );
  }
  defaultMutationOptions(t) {
    return t != null && t._defaulted
      ? t
      : {
          ...this.defaultOptions.mutations,
          ...this.getMutationDefaults(t == null ? void 0 : t.mutationKey),
          ...t,
          _defaulted: !0,
        };
  }
  clear() {
    this.queryCache.clear(), this.mutationCache.clear();
  }
}
class TS extends ka {
  constructor(t, n) {
    super(),
      (this.client = t),
      (this.options = n),
      (this.trackedProps = new Set()),
      (this.selectError = null),
      this.bindMethods(),
      this.setOptions(n);
  }
  bindMethods() {
    (this.remove = this.remove.bind(this)),
      (this.refetch = this.refetch.bind(this));
  }
  onSubscribe() {
    this.listeners.length === 1 &&
      (this.currentQuery.addObserver(this),
      Lh(this.currentQuery, this.options) && this.executeFetch(),
      this.updateTimers());
  }
  onUnsubscribe() {
    this.listeners.length || this.destroy();
  }
  shouldFetchOnReconnect() {
    return qc(this.currentQuery, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return qc(
      this.currentQuery,
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    (this.listeners = []),
      this.clearStaleTimeout(),
      this.clearRefetchInterval(),
      this.currentQuery.removeObserver(this);
  }
  setOptions(t, n) {
    const r = this.options,
      i = this.currentQuery;
    if (
      ((this.options = this.client.defaultQueryOptions(t)),
      Th(r, this.options) ||
        this.client
          .getQueryCache()
          .notify({
            type: "observerOptionsUpdated",
            query: this.currentQuery,
            observer: this,
          }),
      typeof this.options.enabled < "u" &&
        typeof this.options.enabled != "boolean")
    )
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = r.queryKey),
      this.updateQuery();
    const o = this.hasListeners();
    o && Mh(this.currentQuery, i, this.options, r) && this.executeFetch(),
      this.updateResult(n),
      o &&
        (this.currentQuery !== i ||
          this.options.enabled !== r.enabled ||
          this.options.staleTime !== r.staleTime) &&
        this.updateStaleTimeout();
    const a = this.computeRefetchInterval();
    o &&
      (this.currentQuery !== i ||
        this.options.enabled !== r.enabled ||
        a !== this.currentRefetchInterval) &&
      this.updateRefetchInterval(a);
  }
  getOptimisticResult(t) {
    const n = this.client.getQueryCache().build(this.client, t);
    return this.createResult(n, t);
  }
  getCurrentResult() {
    return this.currentResult;
  }
  trackResult(t) {
    const n = {};
    return (
      Object.keys(t).forEach((r) => {
        Object.defineProperty(n, r, {
          configurable: !1,
          enumerable: !0,
          get: () => (this.trackedProps.add(r), t[r]),
        });
      }),
      n
    );
  }
  getCurrentQuery() {
    return this.currentQuery;
  }
  remove() {
    this.client.getQueryCache().remove(this.currentQuery);
  }
  refetch({ refetchPage: t, ...n } = {}) {
    return this.fetch({ ...n, meta: { refetchPage: t } });
  }
  fetchOptimistic(t) {
    const n = this.client.defaultQueryOptions(t),
      r = this.client.getQueryCache().build(this.client, n);
    return (
      (r.isFetchingOptimistic = !0),
      r.fetch().then(() => this.createResult(r, n))
    );
  }
  fetch(t) {
    var n;
    return this.executeFetch({
      ...t,
      cancelRefetch: (n = t.cancelRefetch) != null ? n : !0,
    }).then(() => (this.updateResult(), this.currentResult));
  }
  executeFetch(t) {
    this.updateQuery();
    let n = this.currentQuery.fetch(this.options, t);
    return (t != null && t.throwOnError) || (n = n.catch(Kt)), n;
  }
  updateStaleTimeout() {
    if (
      (this.clearStaleTimeout(),
      ha || this.currentResult.isStale || !Vc(this.options.staleTime))
    )
      return;
    const n = Bv(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
    this.staleTimeoutId = setTimeout(() => {
      this.currentResult.isStale || this.updateResult();
    }, n);
  }
  computeRefetchInterval() {
    var t;
    return typeof this.options.refetchInterval == "function"
      ? this.options.refetchInterval(this.currentResult.data, this.currentQuery)
      : (t = this.options.refetchInterval) != null
      ? t
      : !1;
  }
  updateRefetchInterval(t) {
    this.clearRefetchInterval(),
      (this.currentRefetchInterval = t),
      !(
        ha ||
        this.options.enabled === !1 ||
        !Vc(this.currentRefetchInterval) ||
        this.currentRefetchInterval === 0
      ) &&
        (this.refetchIntervalId = setInterval(() => {
          (this.options.refetchIntervalInBackground || Kl.isFocused()) &&
            this.executeFetch();
        }, this.currentRefetchInterval));
  }
  updateTimers() {
    this.updateStaleTimeout(),
      this.updateRefetchInterval(this.computeRefetchInterval());
  }
  clearStaleTimeout() {
    this.staleTimeoutId &&
      (clearTimeout(this.staleTimeoutId), (this.staleTimeoutId = void 0));
  }
  clearRefetchInterval() {
    this.refetchIntervalId &&
      (clearInterval(this.refetchIntervalId),
      (this.refetchIntervalId = void 0));
  }
  createResult(t, n) {
    const r = this.currentQuery,
      i = this.options,
      o = this.currentResult,
      a = this.currentResultState,
      l = this.currentResultOptions,
      s = t !== r,
      u = s ? t.state : this.currentQueryInitialState,
      c = s ? this.currentResult : this.previousQueryResult,
      { state: d } = t;
    let {
        dataUpdatedAt: h,
        error: g,
        errorUpdatedAt: v,
        fetchStatus: b,
        status: E,
      } = d,
      f = !1,
      p = !1,
      m;
    if (n._optimisticResults) {
      const N = this.hasListeners(),
        S = !N && Lh(t, n),
        F = N && Mh(t, r, n, i);
      (S || F) &&
        ((b = Cs(t.options.networkMode) ? "fetching" : "paused"),
        h || (E = "loading")),
        n._optimisticResults === "isRestoring" && (b = "idle");
    }
    if (
      n.keepPreviousData &&
      !d.dataUpdatedAt &&
      c != null &&
      c.isSuccess &&
      E !== "error"
    )
      (m = c.data), (h = c.dataUpdatedAt), (E = c.status), (f = !0);
    else if (n.select && typeof d.data < "u")
      if (
        o &&
        d.data === (a == null ? void 0 : a.data) &&
        n.select === this.selectFn
      )
        m = this.selectResult;
      else
        try {
          (this.selectFn = n.select),
            (m = n.select(d.data)),
            (m = Gc(o == null ? void 0 : o.data, m, n)),
            (this.selectResult = m),
            (this.selectError = null);
        } catch (N) {
          this.selectError = N;
        }
    else m = d.data;
    if (typeof n.placeholderData < "u" && typeof m > "u" && E === "loading") {
      let N;
      if (
        o != null &&
        o.isPlaceholderData &&
        n.placeholderData === (l == null ? void 0 : l.placeholderData)
      )
        N = o.data;
      else if (
        ((N =
          typeof n.placeholderData == "function"
            ? n.placeholderData()
            : n.placeholderData),
        n.select && typeof N < "u")
      )
        try {
          (N = n.select(N)), (this.selectError = null);
        } catch (S) {
          this.selectError = S;
        }
      typeof N < "u" &&
        ((E = "success"),
        (m = Gc(o == null ? void 0 : o.data, N, n)),
        (p = !0));
    }
    this.selectError &&
      ((g = this.selectError),
      (m = this.selectResult),
      (v = Date.now()),
      (E = "error"));
    const w = b === "fetching",
      _ = E === "loading",
      T = E === "error";
    return {
      status: E,
      fetchStatus: b,
      isLoading: _,
      isSuccess: E === "success",
      isError: T,
      isInitialLoading: _ && w,
      data: m,
      dataUpdatedAt: h,
      error: g,
      errorUpdatedAt: v,
      failureCount: d.fetchFailureCount,
      failureReason: d.fetchFailureReason,
      errorUpdateCount: d.errorUpdateCount,
      isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
      isFetchedAfterMount:
        d.dataUpdateCount > u.dataUpdateCount ||
        d.errorUpdateCount > u.errorUpdateCount,
      isFetching: w,
      isRefetching: w && !_,
      isLoadingError: T && d.dataUpdatedAt === 0,
      isPaused: b === "paused",
      isPlaceholderData: p,
      isPreviousData: f,
      isRefetchError: T && d.dataUpdatedAt !== 0,
      isStale: df(t, n),
      refetch: this.refetch,
      remove: this.remove,
    };
  }
  updateResult(t) {
    const n = this.currentResult,
      r = this.createResult(this.currentQuery, this.options);
    if (
      ((this.currentResultState = this.currentQuery.state),
      (this.currentResultOptions = this.options),
      Th(r, n))
    )
      return;
    this.currentResult = r;
    const i = { cache: !0 },
      o = () => {
        if (!n) return !0;
        const { notifyOnChangeProps: a } = this.options;
        if (a === "all" || (!a && !this.trackedProps.size)) return !0;
        const l = new Set(a ?? this.trackedProps);
        return (
          this.options.useErrorBoundary && l.add("error"),
          Object.keys(this.currentResult).some((s) => {
            const u = s;
            return this.currentResult[u] !== n[u] && l.has(u);
          })
        );
      };
    (t == null ? void 0 : t.listeners) !== !1 && o() && (i.listeners = !0),
      this.notify({ ...i, ...t });
  }
  updateQuery() {
    const t = this.client.getQueryCache().build(this.client, this.options);
    if (t === this.currentQuery) return;
    const n = this.currentQuery;
    (this.currentQuery = t),
      (this.currentQueryInitialState = t.state),
      (this.previousQueryResult = this.currentResult),
      this.hasListeners() &&
        (n == null || n.removeObserver(this), t.addObserver(this));
  }
  onQueryUpdate(t) {
    const n = {};
    t.type === "success"
      ? (n.onSuccess = !t.manual)
      : t.type === "error" && !gl(t.error) && (n.onError = !0),
      this.updateResult(n),
      this.hasListeners() && this.updateTimers();
  }
  notify(t) {
    et.batch(() => {
      if (t.onSuccess) {
        var n, r, i, o;
        (n = (r = this.options).onSuccess) == null ||
          n.call(r, this.currentResult.data),
          (i = (o = this.options).onSettled) == null ||
            i.call(o, this.currentResult.data, null);
      } else if (t.onError) {
        var a, l, s, u;
        (a = (l = this.options).onError) == null ||
          a.call(l, this.currentResult.error),
          (s = (u = this.options).onSettled) == null ||
            s.call(u, void 0, this.currentResult.error);
      }
      t.listeners &&
        this.listeners.forEach((c) => {
          c(this.currentResult);
        }),
        t.cache &&
          this.client
            .getQueryCache()
            .notify({
              query: this.currentQuery,
              type: "observerResultsUpdated",
            });
    });
  }
}
function PS(e, t) {
  return (
    t.enabled !== !1 &&
    !e.state.dataUpdatedAt &&
    !(e.state.status === "error" && t.retryOnMount === !1)
  );
}
function Lh(e, t) {
  return PS(e, t) || (e.state.dataUpdatedAt > 0 && qc(e, t, t.refetchOnMount));
}
function qc(e, t, n) {
  if (t.enabled !== !1) {
    const r = typeof n == "function" ? n(e) : n;
    return r === "always" || (r !== !1 && df(e, t));
  }
  return !1;
}
function Mh(e, t, n, r) {
  return (
    n.enabled !== !1 &&
    (e !== t || r.enabled === !1) &&
    (!n.suspense || e.state.status !== "error") &&
    df(e, n)
  );
}
function df(e, t) {
  return e.isStaleByTime(t.staleTime);
}
var Kv = { exports: {} },
  Qv = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var oo = C;
function OS(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var NS = typeof Object.is == "function" ? Object.is : OS,
  RS = oo.useState,
  LS = oo.useEffect,
  MS = oo.useLayoutEffect,
  jS = oo.useDebugValue;
function AS(e, t) {
  var n = t(),
    r = RS({ inst: { value: n, getSnapshot: t } }),
    i = r[0].inst,
    o = r[1];
  return (
    MS(
      function () {
        (i.value = n), (i.getSnapshot = t), ku(i) && o({ inst: i });
      },
      [e, n, t]
    ),
    LS(
      function () {
        return (
          ku(i) && o({ inst: i }),
          e(function () {
            ku(i) && o({ inst: i });
          })
        );
      },
      [e]
    ),
    jS(n),
    n
  );
}
function ku(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !NS(e, n);
  } catch {
    return !0;
  }
}
function DS(e, t) {
  return t();
}
var IS =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? DS
    : AS;
Qv.useSyncExternalStore =
  oo.useSyncExternalStore !== void 0 ? oo.useSyncExternalStore : IS;
Kv.exports = Qv;
var FS = Kv.exports;
const $S = FS.useSyncExternalStore,
  jh = C.createContext(void 0),
  Yv = C.createContext(!1);
function Xv(e, t) {
  return (
    e ||
    (t && typeof window < "u"
      ? (window.ReactQueryClientContext ||
          (window.ReactQueryClientContext = jh),
        window.ReactQueryClientContext)
      : jh)
  );
}
const zS = ({ context: e } = {}) => {
    const t = C.useContext(Xv(e, C.useContext(Yv)));
    if (!t)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  },
  BS = ({ client: e, children: t, context: n, contextSharing: r = !1 }) => {
    C.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    );
    const i = Xv(n, r);
    return C.createElement(
      Yv.Provider,
      { value: !n && r },
      C.createElement(i.Provider, { value: e }, t)
    );
  },
  Jv = C.createContext(!1),
  US = () => C.useContext(Jv);
Jv.Provider;
function HS() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e,
  };
}
const VS = C.createContext(HS()),
  WS = () => C.useContext(VS);
function GS(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
const qS = (e, t) => {
    (e.suspense || e.useErrorBoundary) &&
      (t.isReset() || (e.retryOnMount = !1));
  },
  KS = (e) => {
    C.useEffect(() => {
      e.clearReset();
    }, [e]);
  },
  QS = ({ result: e, errorResetBoundary: t, useErrorBoundary: n, query: r }) =>
    e.isError && !t.isReset() && !e.isFetching && GS(n, [e.error, r]),
  YS = (e) => {
    e.suspense && typeof e.staleTime != "number" && (e.staleTime = 1e3);
  },
  XS = (e, t) => e.isLoading && e.isFetching && !t,
  JS = (e, t, n) => (e == null ? void 0 : e.suspense) && XS(t, n),
  ZS = (e, t, n) =>
    t
      .fetchOptimistic(e)
      .then(({ data: r }) => {
        e.onSuccess == null || e.onSuccess(r),
          e.onSettled == null || e.onSettled(r, null);
      })
      .catch((r) => {
        n.clearReset(),
          e.onError == null || e.onError(r),
          e.onSettled == null || e.onSettled(void 0, r);
      });
function e1(e, t) {
  const n = zS({ context: e.context }),
    r = US(),
    i = WS(),
    o = n.defaultQueryOptions(e);
  (o._optimisticResults = r ? "isRestoring" : "optimistic"),
    o.onError && (o.onError = et.batchCalls(o.onError)),
    o.onSuccess && (o.onSuccess = et.batchCalls(o.onSuccess)),
    o.onSettled && (o.onSettled = et.batchCalls(o.onSettled)),
    YS(o),
    qS(o, i),
    KS(i);
  const [a] = C.useState(() => new t(n, o)),
    l = a.getOptimisticResult(o);
  if (
    ($S(
      C.useCallback(
        (s) => (r ? () => {} : a.subscribe(et.batchCalls(s))),
        [a, r]
      ),
      () => a.getCurrentResult(),
      () => a.getCurrentResult()
    ),
    C.useEffect(() => {
      a.setOptions(o, { listeners: !1 });
    }, [o, a]),
    JS(o, l, r))
  )
    throw ZS(o, a, i);
  if (
    QS({
      result: l,
      errorResetBoundary: i,
      useErrorBoundary: o.useErrorBoundary,
      query: a.getCurrentQuery(),
    })
  )
    throw l.error;
  return o.notifyOnChangeProps ? l : a.trackResult(l);
}
function pi(e, t, n) {
  const r = jo(e, t, n);
  return e1(r, TS);
}
const t1 =
    "https://www.bca.co.id/-/media/Files/2023/bangga-lokal/web/assets/footer-3d.png",
  n1 = "_btn__purple_1lwgb_1",
  r1 = "_btn__purple_outline_1lwgb_16",
  Ao = { btn__purple: n1, btn__purple_outline: r1 };
var Zv = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], i = 0; i < arguments.length; i++) {
        var o = arguments[i];
        if (o) {
          var a = typeof o;
          if (a === "string" || a === "number") r.push(o);
          else if (Array.isArray(o)) {
            if (o.length) {
              var l = n.apply(null, o);
              l && r.push(l);
            }
          } else if (a === "object") {
            if (
              o.toString !== Object.prototype.toString &&
              !o.toString.toString().includes("[native code]")
            ) {
              r.push(o.toString());
              continue;
            }
            for (var s in o) t.call(o, s) && o[s] && r.push(s);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(Zv);
var i1 = Zv.exports;
const ce = ga(i1);
function ao({ title: e, link: t, externalLink: n, classes: r, onClick: i }) {
  const o = ce(Ao.btn__purple, "text-[14px] text-poppins", r);
  return n
    ? y.jsx("a", {
        href: n,
        className: o,
        target: "_blank",
        referrerPolicy: "no-referrer",
        children: e,
      })
    : y.jsx(Cn, { to: t || "", className: o, onClick: i, children: e });
}
function o1() {
  return y.jsxs("div", {
    className: "bl-flex bl-flex-col lg:bl-flex-row bl-items-center",
    children: [
      y.jsxs("div", {
        className:
          "bl-bg-white bl-rounded-[20px] bl-px-[30px] bl-pt-[10px] bl-pb-[50px] bl-relative lg:bl-order-2  bl-mb-[50px]",
        children: [
          y.jsxs("h3", {
            className:
              "bl-text-[#442052] bl-font-bold bl-text-[24px] md:bl-text-[48px] text-poppins bl-leading-[1.2]",
            children: [
              "Ayo tumbuh bersama dengan komunitas ",
              y.jsx("span", {
                className: "bl-text-[#EE2530] bl-text-[24px] md:bl-text-[48px]",
                children: "Bangga Lokal",
              }),
            ],
          }),
          y.jsx("div", {
            className:
              "bl-absolute -bl-bottom-[20px] bl-left-1/2 -bl-translate-x-1/2",
            children: y.jsx(ao, {
              title: "Daftar Sekarang",
              externalLink: "https://webform.bca.co.id/marketers/bangga-lokal",
            }),
          }),
        ],
      }),
      y.jsx("img", {
        src: t1,
        alt: "Asset",
        className: "bl-w-full bl-max-w-[440px]",
      }),
    ],
  });
}
const Ah = [
    { title: "Home", url: "/" },
    { title: "Promo", url: "/promo" },
    { title: "Gabung Jadi Merchant", url: "/merchant" },
  ],
  ct = (e) => {
    var t;
    (t = window.dataLayer) == null || t.push({ ...e });
  };
function a1() {
  const [e] = Ca(),
    t = _a(),
    n = Zn(),
    [r, i] = C.useState(!1),
    [o, a] = C.useState(e.get("search") || ""),
    [l, s] = C.useState(o !== ""),
    [u, c] = C.useState(!1),
    d = () => {
      window.scrollY > 100 ? i(!0) : i(!1);
    };
  return (
    C.useEffect(() => {
      window.addEventListener("scroll", d);
    }, [r]),
    C.useEffect(() => {
      c(!1);
    }, [n.pathname]),
    C.useEffect(() => {
      o !== "" && ct({ event: "caripromo", search_query: o });
    }, [o]),
    C.useEffect(() => {
      const h = document.getElementById("main-nav"),
        g = document.getElementById("main-content"),
        v = document.querySelector(".nav__search"),
        b = (E) => {
          v && !v.contains(E.target) && h && !h.contains(E.target) && s(!1);
        };
      return (
        g && g.addEventListener("click", b),
        () => {
          g && g.removeEventListener("click", b);
        }
      );
    }, []),
    y.jsx("div", {
      className: ce(
        "bl-sticky bl-top-0 bl-z-[100] bl-transition-all bl-ease-in-out bl-duration-300 bl-mb-[20px] bl-bg-[#0C1137]  bl-bg-gradient-to-b bl-from-[#0C1137] bl-to-transparent",
        r ? "bl-bg-[#0C1137] bl-bg-opacity-90" : "lg:bl-bg-transparent"
      ),
      children: y.jsxs("div", {
        className: "bl-container",
        children: [
          y.jsxs("nav", {
            id: "main-nav",
            className:
              "bl-relative bl-flex bl-justify-between bl-items-center text-poppins bl-py-[20px]",
            children: [
              y.jsx("figure", {
                className: "bl-mr-[50px]",
                children: y.jsx(hn, {
                  to: "/",
                  children: y.jsx("img", {
                    src: "https://www.bca.co.id/-/media/Files/2023/bangga-lokal/web/images/logo-bca-white.svg",
                    className: "bl-w-[80px] lg:bl-w-[120px] bl-w-block",
                  }),
                }),
              }),
              y.jsx("div", {
                className:
                  "bl-hidden md:bl-flex bl-text-[16px] bl-justify-between bl-grow bl-mr-[20px] bl-max-w-[400px]",
                children: Ah.map((h, g) =>
                  y.jsx(
                    hn,
                    {
                      to: h.url,
                      className: ({ isActive: v }) =>
                        v ? "bl-font-bold bl-text-white" : "bl-text-white",
                      children: h.title,
                    },
                    g
                  )
                ),
              }),
              y.jsx("div", {
                className: "bl-ml-[50px] bl-hidden xl:bl-block",
                children: y.jsx(ao, {
                  title: "Daftarkan Brand Kamu Sekarang",
                  externalLink:
                    "https://webform.bca.co.id/marketers/bangga-lokal",
                  onClick: () =>
                    ct({
                      event: "leadsengagement",
                      leads_action: "Daftar Brand Kamu Sekarang",
                      leads_detail: "Not Available",
                    }),
                }),
              }),
              y.jsx("div", {
                className:
                  "bl-ml-[50px] bl-relative bl-z-40 bl-hidden lg:bl-block",
                children: y.jsx("button", {
                  className: ce("bl-text-[25px] bl-px-[10px]"),
                  onClick: () => (l ? t(`/promo?search=${o}`) : s(!0)),
                  children: y.jsx("i", {
                    className: ce(
                      "a-system-icon icon-search",
                      l ? "bl-text-[#6F2989]" : "bl-text-white"
                    ),
                  }),
                }),
              }),
              y.jsx("div", {
                className:
                  "bl-ml-[50px] bl-relative bl-z-40 bl-block lg:bl-hidden",
                children: y.jsx("button", {
                  className: ce(
                    "bl-text-[25px] bl-px-[10px]",
                    l ? "bl-text-[#6F2989]" : "bl-text-white"
                  ),
                  onClick: () => c(!u),
                  children: y.jsx("i", {
                    className: ce(
                      "a-system-icon",
                      u
                        ? "icon-exit bl-text-[16px] bl-text-white"
                        : "icon-menu bl-text-white"
                    ),
                  }),
                }),
              }),
              y.jsx("form", {
                onSubmit: () => t(`/promo?search=${o}`),
                className: ce(
                  "nav__search bl-absolute bl-top-[15px] bl-left-0 bl-w-full bl-z-20",
                  l ? "bl-block" : "bl-hidden"
                ),
                children: y.jsx("input", {
                  type: "text",
                  required: !0,
                  value: o,
                  onChange: (h) => a(h.target.value),
                  className:
                    "bl-bg-white bl-h-[50px] bl-rounded-[5px] bl-w-full bl-p-[10px]",
                  placeholder: "Cari Promo....",
                }),
              }),
            ],
          }),
          y.jsxs("nav", {
            id: "mobile-nav",
            className: ce(
              "bl-flex-col bl-pb-[20px] bl-w-full bl-px-[20px]bl-overflow-hidden",
              u ? "bl-flex bl-h-screen" : "bl-hidden bl-h-0"
            ),
            children: [
              y.jsx("div", {
                className: "bl-mb-[20px] bl-flex bl-flex-col",
                children: Ah.map((h, g) =>
                  y.jsx(
                    hn,
                    {
                      to: h.url,
                      className: ({ isActive: v }) =>
                        v
                          ? "bl-text-[20px] bl-font-bold bl-mb-[15px] bl-text-white"
                          : "bl-text-[20px] bl-mb-[15px] bl-text-white",
                      children: h.title,
                    },
                    g
                  )
                ),
              }),
              y.jsx(ao, {
                title: "Daftarkan Brand Kamu Sekarang",
                externalLink:
                  "https://webform.bca.co.id/marketers/bangga-lokal",
                onClick: () =>
                  ct({
                    event: "leadsengagement",
                    leads_action: "Daftar Brand Kamu Sekarang",
                    leads_detail: "Not Available",
                  }),
              }),
              y.jsx("form", {
                onSubmit: () => t(`/promo?search=${o}`),
                className: ce("bl-mt-[30px] bl-w-full bl-z-20"),
                children: y.jsx("input", {
                  type: "text",
                  required: !0,
                  value: o,
                  onChange: (h) => a(h.target.value),
                  className:
                    "bl-bg-white bl-h-[40px] bl-rounded-[5px] bl-w-full bl-p-[5px]",
                  placeholder: "Cari Promo....",
                }),
              }),
            ],
          }),
        ],
      }),
    })
  );
}
function l1() {
  const e = Zn();
  return (
    C.useEffect(() => {
      window.scrollTo(0, 0);
    }, [e.pathname]),
    y.jsxs(y.Fragment, {
      children: [
        y.jsx(a1, {}),
        y.jsxs("main", {
          id: "main-content",
          children: [
            y.jsx(Jx, {}),
            y.jsx("footer", {
              className: "bl-container bl-mt-[50px] bl-relative bl-z-50",
              children: y.jsx(o1, {}),
            }),
          ],
        }),
      ],
    })
  );
}
const s1 = "_typography__3d_1uu0k_6",
  u1 = { typography__3d: s1 };
function Dh({ title: e }) {
  const n = ce(
    "bl-text-[60px] lg:bl-text-[160px] bl-font-[900] text-poppins bl-text-[#ffb13f] bl-mb-[20px] bl-leading-[1]",
    "bl-relative bl-z-10",
    u1.typography__3d
  );
  return y.jsx("div", {
    className: "bl-relative",
    children: y.jsx("h3", { className: n, children: e }),
  });
}
const c1 = "_bg__yellow_1u33i_1",
  d1 = { bg__yellow: c1 };
function Ih(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  );
}
function ff(e, t) {
  e === void 0 && (e = {}),
    t === void 0 && (t = {}),
    Object.keys(t).forEach((n) => {
      typeof e[n] > "u"
        ? (e[n] = t[n])
        : Ih(t[n]) &&
          Ih(e[n]) &&
          Object.keys(t[n]).length > 0 &&
          ff(e[n], t[n]);
    });
}
const ey = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function kn() {
  const e = typeof document < "u" ? document : {};
  return ff(e, ey), e;
}
const f1 = {
  document: ey,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  },
};
function Wt() {
  const e = typeof window < "u" ? window : {};
  return ff(e, f1), e;
}
function p1(e) {
  const t = e;
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null;
    } catch {}
    try {
      delete t[n];
    } catch {}
  });
}
function Kc(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t);
}
function Yl() {
  return Date.now();
}
function h1(e) {
  const t = Wt();
  let n;
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  );
}
function m1(e, t) {
  t === void 0 && (t = "x");
  const n = Wt();
  let r, i, o;
  const a = h1(e);
  return (
    n.WebKitCSSMatrix
      ? ((i = a.transform || a.webkitTransform),
        i.split(",").length > 6 &&
          (i = i
            .split(", ")
            .map((l) => l.replace(",", "."))
            .join(", ")),
        (o = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
      : ((o =
          a.MozTransform ||
          a.OTransform ||
          a.MsTransform ||
          a.msTransform ||
          a.transform ||
          a
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (r = o.toString().split(","))),
    t === "x" &&
      (n.WebKitCSSMatrix
        ? (i = o.m41)
        : r.length === 16
        ? (i = parseFloat(r[12]))
        : (i = parseFloat(r[4]))),
    t === "y" &&
      (n.WebKitCSSMatrix
        ? (i = o.m42)
        : r.length === 16
        ? (i = parseFloat(r[13]))
        : (i = parseFloat(r[5]))),
    i || 0
  );
}
function tl(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function g1(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function $t() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let n = 1; n < arguments.length; n += 1) {
    const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    if (r != null && !g1(r)) {
      const i = Object.keys(Object(r)).filter((o) => t.indexOf(o) < 0);
      for (let o = 0, a = i.length; o < a; o += 1) {
        const l = i[o],
          s = Object.getOwnPropertyDescriptor(r, l);
        s !== void 0 &&
          s.enumerable &&
          (tl(e[l]) && tl(r[l])
            ? r[l].__swiper__
              ? (e[l] = r[l])
              : $t(e[l], r[l])
            : !tl(e[l]) && tl(r[l])
            ? ((e[l] = {}), r[l].__swiper__ ? (e[l] = r[l]) : $t(e[l], r[l]))
            : (e[l] = r[l]));
      }
    }
  }
  return e;
}
function nl(e, t, n) {
  e.style.setProperty(t, n);
}
function ty(e) {
  let { swiper: t, targetPosition: n, side: r } = e;
  const i = Wt(),
    o = -t.translate;
  let a = null,
    l;
  const s = t.params.speed;
  (t.wrapperEl.style.scrollSnapType = "none"),
    i.cancelAnimationFrame(t.cssModeFrameID);
  const u = n > o ? "next" : "prev",
    c = (h, g) => (u === "next" && h >= g) || (u === "prev" && h <= g),
    d = () => {
      (l = new Date().getTime()), a === null && (a = l);
      const h = Math.max(Math.min((l - a) / s, 1), 0),
        g = 0.5 - Math.cos(h * Math.PI) / 2;
      let v = o + g * (n - o);
      if ((c(v, n) && (v = n), t.wrapperEl.scrollTo({ [r]: v }), c(v, n))) {
        (t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [r]: v });
          }),
          i.cancelAnimationFrame(t.cssModeFrameID);
        return;
      }
      t.cssModeFrameID = i.requestAnimationFrame(d);
    };
  d();
}
function xn(e, t) {
  return t === void 0 && (t = ""), [...e.children].filter((n) => n.matches(t));
}
function ny(e, t) {
  t === void 0 && (t = []);
  const n = document.createElement(e);
  return n.classList.add(...(Array.isArray(t) ? t : [t])), n;
}
function v1(e, t) {
  const n = [];
  for (; e.previousElementSibling; ) {
    const r = e.previousElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function y1(e, t) {
  const n = [];
  for (; e.nextElementSibling; ) {
    const r = e.nextElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function gr(e, t) {
  return Wt().getComputedStyle(e, null).getPropertyValue(t);
}
function Xl(e) {
  let t = e,
    n;
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (n += 1);
    return n;
  }
}
function ry(e, t) {
  const n = [];
  let r = e.parentElement;
  for (; r; ) t ? r.matches(t) && n.push(r) : n.push(r), (r = r.parentElement);
  return n;
}
function Qc(e, t, n) {
  const r = Wt();
  return n
    ? e[t === "width" ? "offsetWidth" : "offsetHeight"] +
        parseFloat(
          r
            .getComputedStyle(e, null)
            .getPropertyValue(t === "width" ? "margin-right" : "margin-top")
        ) +
        parseFloat(
          r
            .getComputedStyle(e, null)
            .getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")
        )
    : e.offsetWidth;
}
let Tu;
function b1() {
  const e = Wt(),
    t = kn();
  return {
    smoothScroll:
      t.documentElement &&
      t.documentElement.style &&
      "scrollBehavior" in t.documentElement.style,
    touch: !!(
      "ontouchstart" in e ||
      (e.DocumentTouch && t instanceof e.DocumentTouch)
    ),
  };
}
function iy() {
  return Tu || (Tu = b1()), Tu;
}
let Pu;
function w1(e) {
  let { userAgent: t } = e === void 0 ? {} : e;
  const n = iy(),
    r = Wt(),
    i = r.navigator.platform,
    o = t || r.navigator.userAgent,
    a = { ios: !1, android: !1 },
    l = r.screen.width,
    s = r.screen.height,
    u = o.match(/(Android);?[\s\/]+([\d.]+)?/);
  let c = o.match(/(iPad).*OS\s([\d_]+)/);
  const d = o.match(/(iPod)(.*OS\s([\d_]+))?/),
    h = !c && o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    g = i === "Win32";
  let v = i === "MacIntel";
  const b = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !c &&
      v &&
      n.touch &&
      b.indexOf(`${l}x${s}`) >= 0 &&
      ((c = o.match(/(Version)\/([\d.]+)/)),
      c || (c = [0, 1, "13_0_0"]),
      (v = !1)),
    u && !g && ((a.os = "android"), (a.android = !0)),
    (c || h || d) && ((a.os = "ios"), (a.ios = !0)),
    a
  );
}
function x1(e) {
  return e === void 0 && (e = {}), Pu || (Pu = w1(e)), Pu;
}
let Ou;
function S1() {
  const e = Wt();
  let t = !1;
  function n() {
    const r = e.navigator.userAgent.toLowerCase();
    return (
      r.indexOf("safari") >= 0 &&
      r.indexOf("chrome") < 0 &&
      r.indexOf("android") < 0
    );
  }
  if (n()) {
    const r = String(e.navigator.userAgent);
    if (r.includes("Version/")) {
      const [i, o] = r
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((a) => Number(a));
      t = i < 16 || (i === 16 && o < 2);
    }
  }
  return {
    isSafari: t || n(),
    needPerspectiveFix: t,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent
    ),
  };
}
function E1() {
  return Ou || (Ou = S1()), Ou;
}
function _1(e) {
  let { swiper: t, on: n, emit: r } = e;
  const i = Wt();
  let o = null,
    a = null;
  const l = () => {
      !t || t.destroyed || !t.initialized || (r("beforeResize"), r("resize"));
    },
    s = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((o = new ResizeObserver((d) => {
          a = i.requestAnimationFrame(() => {
            const { width: h, height: g } = t;
            let v = h,
              b = g;
            d.forEach((E) => {
              let { contentBoxSize: f, contentRect: p, target: m } = E;
              (m && m !== t.el) ||
                ((v = p ? p.width : (f[0] || f).inlineSize),
                (b = p ? p.height : (f[0] || f).blockSize));
            }),
              (v !== h || b !== g) && l();
          });
        })),
        o.observe(t.el));
    },
    u = () => {
      a && i.cancelAnimationFrame(a),
        o && o.unobserve && t.el && (o.unobserve(t.el), (o = null));
    },
    c = () => {
      !t || t.destroyed || !t.initialized || r("orientationchange");
    };
  n("init", () => {
    if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
      s();
      return;
    }
    i.addEventListener("resize", l), i.addEventListener("orientationchange", c);
  }),
    n("destroy", () => {
      u(),
        i.removeEventListener("resize", l),
        i.removeEventListener("orientationchange", c);
    });
}
function C1(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  const o = [],
    a = Wt(),
    l = function (c, d) {
      d === void 0 && (d = {});
      const h = a.MutationObserver || a.WebkitMutationObserver,
        g = new h((v) => {
          if (t.__preventObserver__) return;
          if (v.length === 1) {
            i("observerUpdate", v[0]);
            return;
          }
          const b = function () {
            i("observerUpdate", v[0]);
          };
          a.requestAnimationFrame
            ? a.requestAnimationFrame(b)
            : a.setTimeout(b, 0);
        });
      g.observe(c, {
        attributes: typeof d.attributes > "u" ? !0 : d.attributes,
        childList: typeof d.childList > "u" ? !0 : d.childList,
        characterData: typeof d.characterData > "u" ? !0 : d.characterData,
      }),
        o.push(g);
    },
    s = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const c = ry(t.hostEl);
          for (let d = 0; d < c.length; d += 1) l(c[d]);
        }
        l(t.hostEl, { childList: t.params.observeSlideChildren }),
          l(t.wrapperEl, { attributes: !1 });
      }
    },
    u = () => {
      o.forEach((c) => {
        c.disconnect();
      }),
        o.splice(0, o.length);
    };
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    r("init", s),
    r("destroy", u);
}
var k1 = {
  on(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    const i = n ? "unshift" : "push";
    return (
      e.split(" ").forEach((o) => {
        r.eventsListeners[o] || (r.eventsListeners[o] = []),
          r.eventsListeners[o][i](t);
      }),
      r
    );
  },
  once(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    function i() {
      r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
      for (var o = arguments.length, a = new Array(o), l = 0; l < o; l++)
        a[l] = arguments[l];
      t.apply(r, a);
    }
    return (i.__emitterProxy = t), r.on(e, i, n);
  },
  onAny(e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    const r = t ? "unshift" : "push";
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
  },
  off(e, t) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(" ").forEach((r) => {
          typeof t > "u"
            ? (n.eventsListeners[r] = [])
            : n.eventsListeners[r] &&
              n.eventsListeners[r].forEach((i, o) => {
                (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                  n.eventsListeners[r].splice(o, 1);
              });
        }),
      n
    );
  },
  emit() {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let t, n, r;
    for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++)
      o[a] = arguments[a];
    return (
      typeof o[0] == "string" || Array.isArray(o[0])
        ? ((t = o[0]), (n = o.slice(1, o.length)), (r = e))
        : ((t = o[0].events), (n = o[0].data), (r = o[0].context || e)),
      n.unshift(r),
      (Array.isArray(t) ? t : t.split(" ")).forEach((s) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((u) => {
            u.apply(r, [s, ...n]);
          }),
          e.eventsListeners &&
            e.eventsListeners[s] &&
            e.eventsListeners[s].forEach((u) => {
              u.apply(r, n);
            });
      }),
      e
    );
  },
};
function T1() {
  const e = this;
  let t, n;
  const r = e.el;
  typeof e.params.width < "u" && e.params.width !== null
    ? (t = e.params.width)
    : (t = r.clientWidth),
    typeof e.params.height < "u" && e.params.height !== null
      ? (n = e.params.height)
      : (n = r.clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(gr(r, "padding-left") || 0, 10) -
        parseInt(gr(r, "padding-right") || 0, 10)),
      (n =
        n -
        parseInt(gr(r, "padding-top") || 0, 10) -
        parseInt(gr(r, "padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, {
        width: t,
        height: n,
        size: e.isHorizontal() ? t : n,
      }));
}
function P1() {
  const e = this;
  function t(j) {
    return e.isHorizontal()
      ? j
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[j];
  }
  function n(j, I) {
    return parseFloat(j.getPropertyValue(t(I)) || 0);
  }
  const r = e.params,
    { wrapperEl: i, slidesEl: o, size: a, rtlTranslate: l, wrongRTL: s } = e,
    u = e.virtual && r.virtual.enabled,
    c = u ? e.virtual.slides.length : e.slides.length,
    d = xn(o, `.${e.params.slideClass}, swiper-slide`),
    h = u ? e.virtual.slides.length : d.length;
  let g = [];
  const v = [],
    b = [];
  let E = r.slidesOffsetBefore;
  typeof E == "function" && (E = r.slidesOffsetBefore.call(e));
  let f = r.slidesOffsetAfter;
  typeof f == "function" && (f = r.slidesOffsetAfter.call(e));
  const p = e.snapGrid.length,
    m = e.slidesGrid.length;
  let w = r.spaceBetween,
    _ = -E,
    T = 0,
    k = 0;
  if (typeof a > "u") return;
  typeof w == "string" && w.indexOf("%") >= 0
    ? (w = (parseFloat(w.replace("%", "")) / 100) * a)
    : typeof w == "string" && (w = parseFloat(w)),
    (e.virtualSize = -w),
    d.forEach((j) => {
      l ? (j.style.marginLeft = "") : (j.style.marginRight = ""),
        (j.style.marginBottom = ""),
        (j.style.marginTop = "");
    }),
    r.centeredSlides &&
      r.cssMode &&
      (nl(i, "--swiper-centered-offset-before", ""),
      nl(i, "--swiper-centered-offset-after", ""));
  const N = r.grid && r.grid.rows > 1 && e.grid;
  N && e.grid.initSlides(h);
  let S;
  const F =
    r.slidesPerView === "auto" &&
    r.breakpoints &&
    Object.keys(r.breakpoints).filter(
      (j) => typeof r.breakpoints[j].slidesPerView < "u"
    ).length > 0;
  for (let j = 0; j < h; j += 1) {
    S = 0;
    let I;
    if (
      (d[j] && (I = d[j]),
      N && e.grid.updateSlide(j, I, h, t),
      !(d[j] && gr(I, "display") === "none"))
    ) {
      if (r.slidesPerView === "auto") {
        F && (d[j].style[t("width")] = "");
        const O = getComputedStyle(I),
          R = I.style.transform,
          z = I.style.webkitTransform;
        if (
          (R && (I.style.transform = "none"),
          z && (I.style.webkitTransform = "none"),
          r.roundLengths)
        )
          S = e.isHorizontal() ? Qc(I, "width", !0) : Qc(I, "height", !0);
        else {
          const K = n(O, "width"),
            U = n(O, "padding-left"),
            D = n(O, "padding-right"),
            B = n(O, "margin-left"),
            W = n(O, "margin-right"),
            G = O.getPropertyValue("box-sizing");
          if (G && G === "border-box") S = K + B + W;
          else {
            const { clientWidth: te, offsetWidth: de } = I;
            S = K + U + D + B + W + (de - te);
          }
        }
        R && (I.style.transform = R),
          z && (I.style.webkitTransform = z),
          r.roundLengths && (S = Math.floor(S));
      } else
        (S = (a - (r.slidesPerView - 1) * w) / r.slidesPerView),
          r.roundLengths && (S = Math.floor(S)),
          d[j] && (d[j].style[t("width")] = `${S}px`);
      d[j] && (d[j].swiperSlideSize = S),
        b.push(S),
        r.centeredSlides
          ? ((_ = _ + S / 2 + T / 2 + w),
            T === 0 && j !== 0 && (_ = _ - a / 2 - w),
            j === 0 && (_ = _ - a / 2 - w),
            Math.abs(_) < 1 / 1e3 && (_ = 0),
            r.roundLengths && (_ = Math.floor(_)),
            k % r.slidesPerGroup === 0 && g.push(_),
            v.push(_))
          : (r.roundLengths && (_ = Math.floor(_)),
            (k - Math.min(e.params.slidesPerGroupSkip, k)) %
              e.params.slidesPerGroup ===
              0 && g.push(_),
            v.push(_),
            (_ = _ + S + w)),
        (e.virtualSize += S + w),
        (T = S),
        (k += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, a) + f),
    l &&
      s &&
      (r.effect === "slide" || r.effect === "coverflow") &&
      (i.style.width = `${e.virtualSize + w}px`),
    r.setWrapperSize && (i.style[t("width")] = `${e.virtualSize + w}px`),
    N && e.grid.updateWrapperSize(S, g, t),
    !r.centeredSlides)
  ) {
    const j = [];
    for (let I = 0; I < g.length; I += 1) {
      let O = g[I];
      r.roundLengths && (O = Math.floor(O)),
        g[I] <= e.virtualSize - a && j.push(O);
    }
    (g = j),
      Math.floor(e.virtualSize - a) - Math.floor(g[g.length - 1]) > 1 &&
        g.push(e.virtualSize - a);
  }
  if (u && r.loop) {
    const j = b[0] + w;
    if (r.slidesPerGroup > 1) {
      const I = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / r.slidesPerGroup
        ),
        O = j * r.slidesPerGroup;
      for (let R = 0; R < I; R += 1) g.push(g[g.length - 1] + O);
    }
    for (let I = 0; I < e.virtual.slidesBefore + e.virtual.slidesAfter; I += 1)
      r.slidesPerGroup === 1 && g.push(g[g.length - 1] + j),
        v.push(v[v.length - 1] + j),
        (e.virtualSize += j);
  }
  if ((g.length === 0 && (g = [0]), w !== 0)) {
    const j = e.isHorizontal() && l ? "marginLeft" : t("marginRight");
    d.filter((I, O) =>
      !r.cssMode || r.loop ? !0 : O !== d.length - 1
    ).forEach((I) => {
      I.style[j] = `${w}px`;
    });
  }
  if (r.centeredSlides && r.centeredSlidesBounds) {
    let j = 0;
    b.forEach((O) => {
      j += O + (w || 0);
    }),
      (j -= w);
    const I = j - a;
    g = g.map((O) => (O <= 0 ? -E : O > I ? I + f : O));
  }
  if (r.centerInsufficientSlides) {
    let j = 0;
    if (
      (b.forEach((I) => {
        j += I + (w || 0);
      }),
      (j -= w),
      j < a)
    ) {
      const I = (a - j) / 2;
      g.forEach((O, R) => {
        g[R] = O - I;
      }),
        v.forEach((O, R) => {
          v[R] = O + I;
        });
    }
  }
  if (
    (Object.assign(e, {
      slides: d,
      snapGrid: g,
      slidesGrid: v,
      slidesSizesGrid: b,
    }),
    r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
  ) {
    nl(i, "--swiper-centered-offset-before", `${-g[0]}px`),
      nl(
        i,
        "--swiper-centered-offset-after",
        `${e.size / 2 - b[b.length - 1] / 2}px`
      );
    const j = -e.snapGrid[0],
      I = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map((O) => O + j)),
      (e.slidesGrid = e.slidesGrid.map((O) => O + I));
  }
  if (
    (h !== c && e.emit("slidesLengthChange"),
    g.length !== p &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    v.length !== m && e.emit("slidesGridLengthChange"),
    r.watchSlidesProgress && e.updateSlidesOffset(),
    !u && !r.cssMode && (r.effect === "slide" || r.effect === "fade"))
  ) {
    const j = `${r.containerModifierClass}backface-hidden`,
      I = e.el.classList.contains(j);
    h <= r.maxBackfaceHiddenSlides
      ? I || e.el.classList.add(j)
      : I && e.el.classList.remove(j);
  }
}
function O1(e) {
  const t = this,
    n = [],
    r = t.virtual && t.params.virtual.enabled;
  let i = 0,
    o;
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed);
  const a = (l) => (r ? t.slides[t.getSlideIndexByData(l)] : t.slides[l]);
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((l) => {
        n.push(l);
      });
    else
      for (o = 0; o < Math.ceil(t.params.slidesPerView); o += 1) {
        const l = t.activeIndex + o;
        if (l > t.slides.length && !r) break;
        n.push(a(l));
      }
  else n.push(a(t.activeIndex));
  for (o = 0; o < n.length; o += 1)
    if (typeof n[o] < "u") {
      const l = n[o].offsetHeight;
      i = l > i ? l : i;
    }
  (i || i === 0) && (t.wrapperEl.style.height = `${i}px`);
}
function N1() {
  const e = this,
    t = e.slides,
    n = e.isElement
      ? e.isHorizontal()
        ? e.wrapperEl.offsetLeft
        : e.wrapperEl.offsetTop
      : 0;
  for (let r = 0; r < t.length; r += 1)
    t[r].swiperSlideOffset =
      (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) -
      n -
      e.cssOverflowAdjustment();
}
function R1(e) {
  e === void 0 && (e = (this && this.translate) || 0);
  const t = this,
    n = t.params,
    { slides: r, rtlTranslate: i, snapGrid: o } = t;
  if (r.length === 0) return;
  typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let a = -e;
  i && (a = e),
    r.forEach((s) => {
      s.classList.remove(n.slideVisibleClass);
    }),
    (t.visibleSlidesIndexes = []),
    (t.visibleSlides = []);
  let l = n.spaceBetween;
  typeof l == "string" && l.indexOf("%") >= 0
    ? (l = (parseFloat(l.replace("%", "")) / 100) * t.size)
    : typeof l == "string" && (l = parseFloat(l));
  for (let s = 0; s < r.length; s += 1) {
    const u = r[s];
    let c = u.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (c -= r[0].swiperSlideOffset);
    const d =
        (a + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (u.swiperSlideSize + l),
      h =
        (a - o[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (u.swiperSlideSize + l),
      g = -(a - c),
      v = g + t.slidesSizesGrid[s];
    ((g >= 0 && g < t.size - 1) ||
      (v > 1 && v <= t.size) ||
      (g <= 0 && v >= t.size)) &&
      (t.visibleSlides.push(u),
      t.visibleSlidesIndexes.push(s),
      r[s].classList.add(n.slideVisibleClass)),
      (u.progress = i ? -d : d),
      (u.originalProgress = i ? -h : h);
  }
}
function L1(e) {
  const t = this;
  if (typeof e > "u") {
    const c = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * c) || 0;
  }
  const n = t.params,
    r = t.maxTranslate() - t.minTranslate();
  let { progress: i, isBeginning: o, isEnd: a, progressLoop: l } = t;
  const s = o,
    u = a;
  if (r === 0) (i = 0), (o = !0), (a = !0);
  else {
    i = (e - t.minTranslate()) / r;
    const c = Math.abs(e - t.minTranslate()) < 1,
      d = Math.abs(e - t.maxTranslate()) < 1;
    (o = c || i <= 0), (a = d || i >= 1), c && (i = 0), d && (i = 1);
  }
  if (n.loop) {
    const c = t.getSlideIndexByData(0),
      d = t.getSlideIndexByData(t.slides.length - 1),
      h = t.slidesGrid[c],
      g = t.slidesGrid[d],
      v = t.slidesGrid[t.slidesGrid.length - 1],
      b = Math.abs(e);
    b >= h ? (l = (b - h) / v) : (l = (b + v - g) / v), l > 1 && (l -= 1);
  }
  Object.assign(t, { progress: i, progressLoop: l, isBeginning: o, isEnd: a }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    o && !s && t.emit("reachBeginning toEdge"),
    a && !u && t.emit("reachEnd toEdge"),
    ((s && !o) || (u && !a)) && t.emit("fromEdge"),
    t.emit("progress", i);
}
function M1() {
  const e = this,
    { slides: t, params: n, slidesEl: r, activeIndex: i } = e,
    o = e.virtual && n.virtual.enabled,
    a = (s) => xn(r, `.${n.slideClass}${s}, swiper-slide${s}`)[0];
  t.forEach((s) => {
    s.classList.remove(n.slideActiveClass, n.slideNextClass, n.slidePrevClass);
  });
  let l;
  if (o)
    if (n.loop) {
      let s = i - e.virtual.slidesBefore;
      s < 0 && (s = e.virtual.slides.length + s),
        s >= e.virtual.slides.length && (s -= e.virtual.slides.length),
        (l = a(`[data-swiper-slide-index="${s}"]`));
    } else l = a(`[data-swiper-slide-index="${i}"]`);
  else l = t[i];
  if (l) {
    l.classList.add(n.slideActiveClass);
    let s = y1(l, `.${n.slideClass}, swiper-slide`)[0];
    n.loop && !s && (s = t[0]), s && s.classList.add(n.slideNextClass);
    let u = v1(l, `.${n.slideClass}, swiper-slide`)[0];
    n.loop && !u === 0 && (u = t[t.length - 1]),
      u && u.classList.add(n.slidePrevClass);
  }
  e.emitSlidesClasses();
}
const vl = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const n = () => (e.isElement ? "swiper-slide" : `.${e.params.slideClass}`),
      r = t.closest(n());
    if (r) {
      const i = r.querySelector(`.${e.params.lazyPreloaderClass}`);
      i && i.remove();
    }
  },
  Nu = (e, t) => {
    if (!e.slides[t]) return;
    const n = e.slides[t].querySelector('[loading="lazy"]');
    n && n.removeAttribute("loading");
  },
  Yc = (e) => {
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const n = e.slides.length;
    if (!n || !t || t < 0) return;
    t = Math.min(t, n);
    const r =
        e.params.slidesPerView === "auto"
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      i = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
      const a = i,
        l = [a - t];
      l.push(...Array.from({ length: t }).map((s, u) => a + r + u)),
        e.slides.forEach((s, u) => {
          l.includes(s.column) && Nu(e, u);
        });
      return;
    }
    const o = i + r - 1;
    if (e.params.rewind || e.params.loop)
      for (let a = i - t; a <= o + t; a += 1) {
        const l = ((a % n) + n) % n;
        (l < i || l > o) && Nu(e, l);
      }
    else
      for (let a = Math.max(i - t, 0); a <= Math.min(o + t, n - 1); a += 1)
        a !== i && (a > o || a < i) && Nu(e, a);
  };
function j1(e) {
  const { slidesGrid: t, params: n } = e,
    r = e.rtlTranslate ? e.translate : -e.translate;
  let i;
  for (let o = 0; o < t.length; o += 1)
    typeof t[o + 1] < "u"
      ? r >= t[o] && r < t[o + 1] - (t[o + 1] - t[o]) / 2
        ? (i = o)
        : r >= t[o] && r < t[o + 1] && (i = o + 1)
      : r >= t[o] && (i = o);
  return n.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i;
}
function A1(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: r, params: i, activeIndex: o, realIndex: a, snapIndex: l } = t;
  let s = e,
    u;
  const c = (h) => {
    let g = h - t.virtual.slidesBefore;
    return (
      g < 0 && (g = t.virtual.slides.length + g),
      g >= t.virtual.slides.length && (g -= t.virtual.slides.length),
      g
    );
  };
  if ((typeof s > "u" && (s = j1(t)), r.indexOf(n) >= 0)) u = r.indexOf(n);
  else {
    const h = Math.min(i.slidesPerGroupSkip, s);
    u = h + Math.floor((s - h) / i.slidesPerGroup);
  }
  if ((u >= r.length && (u = r.length - 1), s === o)) {
    u !== l && ((t.snapIndex = u), t.emit("snapIndexChange")),
      t.params.loop &&
        t.virtual &&
        t.params.virtual.enabled &&
        (t.realIndex = c(s));
    return;
  }
  let d;
  t.virtual && i.virtual.enabled && i.loop
    ? (d = c(s))
    : t.slides[s]
    ? (d = parseInt(
        t.slides[s].getAttribute("data-swiper-slide-index") || s,
        10
      ))
    : (d = s),
    Object.assign(t, {
      previousSnapIndex: l,
      snapIndex: u,
      previousRealIndex: a,
      realIndex: d,
      previousIndex: o,
      activeIndex: s,
    }),
    t.initialized && Yc(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    a !== d && t.emit("realIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
}
function D1(e) {
  const t = this,
    n = t.params,
    r = e.closest(`.${n.slideClass}, swiper-slide`);
  let i = !1,
    o;
  if (r) {
    for (let a = 0; a < t.slides.length; a += 1)
      if (t.slides[a] === r) {
        (i = !0), (o = a);
        break;
      }
  }
  if (r && i)
    (t.clickedSlide = r),
      t.virtual && t.params.virtual.enabled
        ? (t.clickedIndex = parseInt(
            r.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (t.clickedIndex = o);
  else {
    (t.clickedSlide = void 0), (t.clickedIndex = void 0);
    return;
  }
  n.slideToClickedSlide &&
    t.clickedIndex !== void 0 &&
    t.clickedIndex !== t.activeIndex &&
    t.slideToClickedSlide();
}
var I1 = {
  updateSize: T1,
  updateSlides: P1,
  updateAutoHeight: O1,
  updateSlidesOffset: N1,
  updateSlidesProgress: R1,
  updateProgress: L1,
  updateSlidesClasses: M1,
  updateActiveIndex: A1,
  updateClickedSlide: D1,
};
function F1(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y");
  const t = this,
    { params: n, rtlTranslate: r, translate: i, wrapperEl: o } = t;
  if (n.virtualTranslate) return r ? -i : i;
  if (n.cssMode) return i;
  let a = m1(o, e);
  return (a += t.cssOverflowAdjustment()), r && (a = -a), a || 0;
}
function $1(e, t) {
  const n = this,
    { rtlTranslate: r, params: i, wrapperEl: o, progress: a } = n;
  let l = 0,
    s = 0;
  const u = 0;
  n.isHorizontal() ? (l = r ? -e : e) : (s = e),
    i.roundLengths && ((l = Math.floor(l)), (s = Math.floor(s))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? l : s),
    i.cssMode
      ? (o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -l
          : -s)
      : i.virtualTranslate ||
        (n.isHorizontal()
          ? (l -= n.cssOverflowAdjustment())
          : (s -= n.cssOverflowAdjustment()),
        (o.style.transform = `translate3d(${l}px, ${s}px, ${u}px)`));
  let c;
  const d = n.maxTranslate() - n.minTranslate();
  d === 0 ? (c = 0) : (c = (e - n.minTranslate()) / d),
    c !== a && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t);
}
function z1() {
  return -this.snapGrid[0];
}
function B1() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function U1(e, t, n, r, i) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    r === void 0 && (r = !0);
  const o = this,
    { params: a, wrapperEl: l } = o;
  if (o.animating && a.preventInteractionOnTransition) return !1;
  const s = o.minTranslate(),
    u = o.maxTranslate();
  let c;
  if (
    (r && e > s ? (c = s) : r && e < u ? (c = u) : (c = e),
    o.updateProgress(c),
    a.cssMode)
  ) {
    const d = o.isHorizontal();
    if (t === 0) l[d ? "scrollLeft" : "scrollTop"] = -c;
    else {
      if (!o.support.smoothScroll)
        return (
          ty({ swiper: o, targetPosition: -c, side: d ? "left" : "top" }), !0
        );
      l.scrollTo({ [d ? "left" : "top"]: -c, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (o.setTransition(0),
        o.setTranslate(c),
        n && (o.emit("beforeTransitionStart", t, i), o.emit("transitionEnd")))
      : (o.setTransition(t),
        o.setTranslate(c),
        n && (o.emit("beforeTransitionStart", t, i), o.emit("transitionStart")),
        o.animating ||
          ((o.animating = !0),
          o.onTranslateToWrapperTransitionEnd ||
            (o.onTranslateToWrapperTransitionEnd = function (h) {
              !o ||
                o.destroyed ||
                (h.target === this &&
                  (o.wrapperEl.removeEventListener(
                    "transitionend",
                    o.onTranslateToWrapperTransitionEnd
                  ),
                  (o.onTranslateToWrapperTransitionEnd = null),
                  delete o.onTranslateToWrapperTransitionEnd,
                  n && o.emit("transitionEnd")));
            }),
          o.wrapperEl.addEventListener(
            "transitionend",
            o.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
var H1 = {
  getTranslate: F1,
  setTranslate: $1,
  minTranslate: z1,
  maxTranslate: B1,
  translateTo: U1,
};
function V1(e, t) {
  const n = this;
  n.params.cssMode || (n.wrapperEl.style.transitionDuration = `${e}ms`),
    n.emit("setTransition", e, t);
}
function oy(e) {
  let { swiper: t, runCallbacks: n, direction: r, step: i } = e;
  const { activeIndex: o, previousIndex: a } = t;
  let l = r;
  if (
    (l || (o > a ? (l = "next") : o < a ? (l = "prev") : (l = "reset")),
    t.emit(`transition${i}`),
    n && o !== a)
  ) {
    if (l === "reset") {
      t.emit(`slideResetTransition${i}`);
      return;
    }
    t.emit(`slideChangeTransition${i}`),
      l === "next"
        ? t.emit(`slideNextTransition${i}`)
        : t.emit(`slidePrevTransition${i}`);
  }
}
function W1(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  r.cssMode ||
    (r.autoHeight && n.updateAutoHeight(),
    oy({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
}
function G1(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  (n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0),
      oy({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
}
var q1 = { setTransition: V1, transitionStart: W1, transitionEnd: G1 };
function K1(e, t, n, r, i) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const o = this;
  let a = e;
  a < 0 && (a = 0);
  const {
    params: l,
    snapGrid: s,
    slidesGrid: u,
    previousIndex: c,
    activeIndex: d,
    rtlTranslate: h,
    wrapperEl: g,
    enabled: v,
  } = o;
  if ((o.animating && l.preventInteractionOnTransition) || (!v && !r && !i))
    return !1;
  const b = Math.min(o.params.slidesPerGroupSkip, a);
  let E = b + Math.floor((a - b) / o.params.slidesPerGroup);
  E >= s.length && (E = s.length - 1);
  const f = -s[E];
  if (l.normalizeSlideIndex)
    for (let m = 0; m < u.length; m += 1) {
      const w = -Math.floor(f * 100),
        _ = Math.floor(u[m] * 100),
        T = Math.floor(u[m + 1] * 100);
      typeof u[m + 1] < "u"
        ? w >= _ && w < T - (T - _) / 2
          ? (a = m)
          : w >= _ && w < T && (a = m + 1)
        : w >= _ && (a = m);
    }
  if (
    o.initialized &&
    a !== d &&
    ((!o.allowSlideNext &&
      (h
        ? f > o.translate && f > o.minTranslate()
        : f < o.translate && f < o.minTranslate())) ||
      (!o.allowSlidePrev &&
        f > o.translate &&
        f > o.maxTranslate() &&
        (d || 0) !== a))
  )
    return !1;
  a !== (c || 0) && n && o.emit("beforeSlideChangeStart"), o.updateProgress(f);
  let p;
  if (
    (a > d ? (p = "next") : a < d ? (p = "prev") : (p = "reset"),
    (h && -f === o.translate) || (!h && f === o.translate))
  )
    return (
      o.updateActiveIndex(a),
      l.autoHeight && o.updateAutoHeight(),
      o.updateSlidesClasses(),
      l.effect !== "slide" && o.setTranslate(f),
      p !== "reset" && (o.transitionStart(n, p), o.transitionEnd(n, p)),
      !1
    );
  if (l.cssMode) {
    const m = o.isHorizontal(),
      w = h ? f : -f;
    if (t === 0) {
      const _ = o.virtual && o.params.virtual.enabled;
      _ &&
        ((o.wrapperEl.style.scrollSnapType = "none"),
        (o._immediateVirtual = !0)),
        _ && !o._cssModeVirtualInitialSet && o.params.initialSlide > 0
          ? ((o._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              g[m ? "scrollLeft" : "scrollTop"] = w;
            }))
          : (g[m ? "scrollLeft" : "scrollTop"] = w),
        _ &&
          requestAnimationFrame(() => {
            (o.wrapperEl.style.scrollSnapType = ""), (o._immediateVirtual = !1);
          });
    } else {
      if (!o.support.smoothScroll)
        return (
          ty({ swiper: o, targetPosition: w, side: m ? "left" : "top" }), !0
        );
      g.scrollTo({ [m ? "left" : "top"]: w, behavior: "smooth" });
    }
    return !0;
  }
  return (
    o.setTransition(t),
    o.setTranslate(f),
    o.updateActiveIndex(a),
    o.updateSlidesClasses(),
    o.emit("beforeTransitionStart", t, r),
    o.transitionStart(n, p),
    t === 0
      ? o.transitionEnd(n, p)
      : o.animating ||
        ((o.animating = !0),
        o.onSlideToWrapperTransitionEnd ||
          (o.onSlideToWrapperTransitionEnd = function (w) {
            !o ||
              o.destroyed ||
              (w.target === this &&
                (o.wrapperEl.removeEventListener(
                  "transitionend",
                  o.onSlideToWrapperTransitionEnd
                ),
                (o.onSlideToWrapperTransitionEnd = null),
                delete o.onSlideToWrapperTransitionEnd,
                o.transitionEnd(n, p)));
          }),
        o.wrapperEl.addEventListener(
          "transitionend",
          o.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function Q1(e, t, n, r) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const i = this;
  let o = e;
  return (
    i.params.loop &&
      (i.virtual && i.params.virtual.enabled
        ? (o = o + i.virtual.slidesBefore)
        : (o = i.getSlideIndexByData(o))),
    i.slideTo(o, t, n, r)
  );
}
function Y1(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const r = this,
    { enabled: i, params: o, animating: a } = r;
  if (!i) return r;
  let l = o.slidesPerGroup;
  o.slidesPerView === "auto" &&
    o.slidesPerGroup === 1 &&
    o.slidesPerGroupAuto &&
    (l = Math.max(r.slidesPerViewDynamic("current", !0), 1));
  const s = r.activeIndex < o.slidesPerGroupSkip ? 1 : l,
    u = r.virtual && o.virtual.enabled;
  if (o.loop) {
    if (a && !u && o.loopPreventsSliding) return !1;
    r.loopFix({ direction: "next" }), (r._clientLeft = r.wrapperEl.clientLeft);
  }
  return o.rewind && r.isEnd
    ? r.slideTo(0, e, t, n)
    : r.slideTo(r.activeIndex + s, e, t, n);
}
function X1(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const r = this,
    {
      params: i,
      snapGrid: o,
      slidesGrid: a,
      rtlTranslate: l,
      enabled: s,
      animating: u,
    } = r;
  if (!s) return r;
  const c = r.virtual && i.virtual.enabled;
  if (i.loop) {
    if (u && !c && i.loopPreventsSliding) return !1;
    r.loopFix({ direction: "prev" }), (r._clientLeft = r.wrapperEl.clientLeft);
  }
  const d = l ? r.translate : -r.translate;
  function h(f) {
    return f < 0 ? -Math.floor(Math.abs(f)) : Math.floor(f);
  }
  const g = h(d),
    v = o.map((f) => h(f));
  let b = o[v.indexOf(g) - 1];
  if (typeof b > "u" && i.cssMode) {
    let f;
    o.forEach((p, m) => {
      g >= p && (f = m);
    }),
      typeof f < "u" && (b = o[f > 0 ? f - 1 : f]);
  }
  let E = 0;
  if (
    (typeof b < "u" &&
      ((E = a.indexOf(b)),
      E < 0 && (E = r.activeIndex - 1),
      i.slidesPerView === "auto" &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((E = E - r.slidesPerViewDynamic("previous", !0) + 1),
        (E = Math.max(E, 0)))),
    i.rewind && r.isBeginning)
  ) {
    const f =
      r.params.virtual && r.params.virtual.enabled && r.virtual
        ? r.virtual.slides.length - 1
        : r.slides.length - 1;
    return r.slideTo(f, e, t, n);
  }
  return r.slideTo(E, e, t, n);
}
function J1(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const r = this;
  return r.slideTo(r.activeIndex, e, t, n);
}
function Z1(e, t, n, r) {
  e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0),
    r === void 0 && (r = 0.5);
  const i = this;
  let o = i.activeIndex;
  const a = Math.min(i.params.slidesPerGroupSkip, o),
    l = a + Math.floor((o - a) / i.params.slidesPerGroup),
    s = i.rtlTranslate ? i.translate : -i.translate;
  if (s >= i.snapGrid[l]) {
    const u = i.snapGrid[l],
      c = i.snapGrid[l + 1];
    s - u > (c - u) * r && (o += i.params.slidesPerGroup);
  } else {
    const u = i.snapGrid[l - 1],
      c = i.snapGrid[l];
    s - u <= (c - u) * r && (o -= i.params.slidesPerGroup);
  }
  return (
    (o = Math.max(o, 0)),
    (o = Math.min(o, i.slidesGrid.length - 1)),
    i.slideTo(o, e, t, n)
  );
}
function eE() {
  const e = this,
    { params: t, slidesEl: n } = e,
    r = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let i = e.clickedIndex,
    o;
  const a = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
  if (t.loop) {
    if (e.animating) return;
    (o = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? i < e.loopedSlides - r / 2 ||
          i > e.slides.length - e.loopedSlides + r / 2
          ? (e.loopFix(),
            (i = e.getSlideIndex(
              xn(n, `${a}[data-swiper-slide-index="${o}"]`)[0]
            )),
            Kc(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i)
        : i > e.slides.length - r
        ? (e.loopFix(),
          (i = e.getSlideIndex(
            xn(n, `${a}[data-swiper-slide-index="${o}"]`)[0]
          )),
          Kc(() => {
            e.slideTo(i);
          }))
        : e.slideTo(i);
  } else e.slideTo(i);
}
var tE = {
  slideTo: K1,
  slideToLoop: Q1,
  slideNext: Y1,
  slidePrev: X1,
  slideReset: J1,
  slideToClosest: Z1,
  slideToClickedSlide: eE,
};
function nE(e) {
  const t = this,
    { params: n, slidesEl: r } = t;
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
  xn(r, `.${n.slideClass}, swiper-slide`).forEach((o, a) => {
    o.setAttribute("data-swiper-slide-index", a);
  }),
    t.loopFix({
      slideRealIndex: e,
      direction: n.centeredSlides ? void 0 : "next",
    });
}
function rE(e) {
  let {
    slideRealIndex: t,
    slideTo: n = !0,
    direction: r,
    setTranslate: i,
    activeSlideIndex: o,
    byController: a,
    byMousewheel: l,
  } = e === void 0 ? {} : e;
  const s = this;
  if (!s.params.loop) return;
  s.emit("beforeLoopFix");
  const {
    slides: u,
    allowSlidePrev: c,
    allowSlideNext: d,
    slidesEl: h,
    params: g,
  } = s;
  if (
    ((s.allowSlidePrev = !0),
    (s.allowSlideNext = !0),
    s.virtual && g.virtual.enabled)
  ) {
    n &&
      (!g.centeredSlides && s.snapIndex === 0
        ? s.slideTo(s.virtual.slides.length, 0, !1, !0)
        : g.centeredSlides && s.snapIndex < g.slidesPerView
        ? s.slideTo(s.virtual.slides.length + s.snapIndex, 0, !1, !0)
        : s.snapIndex === s.snapGrid.length - 1 &&
          s.slideTo(s.virtual.slidesBefore, 0, !1, !0)),
      (s.allowSlidePrev = c),
      (s.allowSlideNext = d),
      s.emit("loopFix");
    return;
  }
  const v =
    g.slidesPerView === "auto"
      ? s.slidesPerViewDynamic()
      : Math.ceil(parseFloat(g.slidesPerView, 10));
  let b = g.loopedSlides || v;
  b % g.slidesPerGroup !== 0 &&
    (b += g.slidesPerGroup - (b % g.slidesPerGroup)),
    (s.loopedSlides = b);
  const E = [],
    f = [];
  let p = s.activeIndex;
  typeof o > "u"
    ? (o = s.getSlideIndex(
        s.slides.filter((k) => k.classList.contains(g.slideActiveClass))[0]
      ))
    : (p = o);
  const m = r === "next" || !r,
    w = r === "prev" || !r;
  let _ = 0,
    T = 0;
  if (o < b) {
    _ = Math.max(b - o, g.slidesPerGroup);
    for (let k = 0; k < b - o; k += 1) {
      const N = k - Math.floor(k / u.length) * u.length;
      E.push(u.length - N - 1);
    }
  } else if (o > s.slides.length - b * 2) {
    T = Math.max(o - (s.slides.length - b * 2), g.slidesPerGroup);
    for (let k = 0; k < T; k += 1) {
      const N = k - Math.floor(k / u.length) * u.length;
      f.push(N);
    }
  }
  if (
    (w &&
      E.forEach((k) => {
        (s.slides[k].swiperLoopMoveDOM = !0),
          h.prepend(s.slides[k]),
          (s.slides[k].swiperLoopMoveDOM = !1);
      }),
    m &&
      f.forEach((k) => {
        (s.slides[k].swiperLoopMoveDOM = !0),
          h.append(s.slides[k]),
          (s.slides[k].swiperLoopMoveDOM = !1);
      }),
    s.recalcSlides(),
    g.slidesPerView === "auto" && s.updateSlides(),
    g.watchSlidesProgress && s.updateSlidesOffset(),
    n)
  ) {
    if (E.length > 0 && w)
      if (typeof t > "u") {
        const k = s.slidesGrid[p],
          S = s.slidesGrid[p + _] - k;
        l
          ? s.setTranslate(s.translate - S)
          : (s.slideTo(p + _, 0, !1, !0),
            i &&
              ((s.touches[s.isHorizontal() ? "startX" : "startY"] += S),
              (s.touchEventsData.currentTranslate = s.translate)));
      } else
        i &&
          (s.slideToLoop(t, 0, !1, !0),
          (s.touchEventsData.currentTranslate = s.translate));
    else if (f.length > 0 && m)
      if (typeof t > "u") {
        const k = s.slidesGrid[p],
          S = s.slidesGrid[p - T] - k;
        l
          ? s.setTranslate(s.translate - S)
          : (s.slideTo(p - T, 0, !1, !0),
            i &&
              ((s.touches[s.isHorizontal() ? "startX" : "startY"] += S),
              (s.touchEventsData.currentTranslate = s.translate)));
      } else s.slideToLoop(t, 0, !1, !0);
  }
  if (
    ((s.allowSlidePrev = c),
    (s.allowSlideNext = d),
    s.controller && s.controller.control && !a)
  ) {
    const k = {
      slideRealIndex: t,
      slideTo: !1,
      direction: r,
      setTranslate: i,
      activeSlideIndex: o,
      byController: !0,
    };
    Array.isArray(s.controller.control)
      ? s.controller.control.forEach((N) => {
          !N.destroyed && N.params.loop && N.loopFix(k);
        })
      : s.controller.control instanceof s.constructor &&
        s.controller.control.params.loop &&
        s.controller.control.loopFix(k);
  }
  s.emit("loopFix");
}
function iE() {
  const e = this,
    { params: t, slidesEl: n } = e;
  if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
  e.recalcSlides();
  const r = [];
  e.slides.forEach((i) => {
    const o =
      typeof i.swiperSlideIndex > "u"
        ? i.getAttribute("data-swiper-slide-index") * 1
        : i.swiperSlideIndex;
    r[o] = i;
  }),
    e.slides.forEach((i) => {
      i.removeAttribute("data-swiper-slide-index");
    }),
    r.forEach((i) => {
      n.append(i);
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0);
}
var oE = { loopCreate: nE, loopFix: rE, loopDestroy: iE };
function aE(e) {
  const t = this;
  if (
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0),
    (n.style.cursor = "move"),
    (n.style.cursor = e ? "grabbing" : "grab"),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      });
}
function lE() {
  const e = this;
  (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[
      e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      }));
}
var sE = { setGrabCursor: aE, unsetGrabCursor: lE };
function uE(e, t) {
  t === void 0 && (t = this);
  function n(r) {
    if (!r || r === kn() || r === Wt()) return null;
    r.assignedSlot && (r = r.assignedSlot);
    const i = r.closest(e);
    return !i && !r.getRootNode ? null : i || n(r.getRootNode().host);
  }
  return n(t);
}
function cE(e) {
  const t = this,
    n = kn(),
    r = Wt(),
    i = t.touchEventsData;
  i.evCache.push(e);
  const { params: o, touches: a, enabled: l } = t;
  if (
    !l ||
    (!o.simulateTouch && e.pointerType === "mouse") ||
    (t.animating && o.preventInteractionOnTransition)
  )
    return;
  !t.animating && o.cssMode && o.loop && t.loopFix();
  let s = e;
  s.originalEvent && (s = s.originalEvent);
  let u = s.target;
  if (
    (o.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(u)) ||
    ("which" in s && s.which === 3) ||
    ("button" in s && s.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return;
  const c = !!o.noSwipingClass && o.noSwipingClass !== "",
    d = e.composedPath ? e.composedPath() : e.path;
  c && s.target && s.target.shadowRoot && d && (u = d[0]);
  const h = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`,
    g = !!(s.target && s.target.shadowRoot);
  if (o.noSwiping && (g ? uE(h, u) : u.closest(h))) {
    t.allowClick = !0;
    return;
  }
  if (o.swipeHandler && !u.closest(o.swipeHandler)) return;
  (a.currentX = s.pageX), (a.currentY = s.pageY);
  const v = a.currentX,
    b = a.currentY,
    E = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
    f = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
  if (E && (v <= f || v >= r.innerWidth - f))
    if (E === "prevent") e.preventDefault();
    else return;
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (a.startX = v),
    (a.startY = b),
    (i.touchStartTime = Yl()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    o.threshold > 0 && (i.allowThresholdMove = !1);
  let p = !0;
  u.matches(i.focusableElements) &&
    ((p = !1), u.nodeName === "SELECT" && (i.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(i.focusableElements) &&
      n.activeElement !== u &&
      n.activeElement.blur();
  const m = p && t.allowTouchMove && o.touchStartPreventDefault;
  (o.touchStartForcePreventDefault || m) &&
    !u.isContentEditable &&
    s.preventDefault(),
    o.freeMode &&
      o.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !o.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit("touchStart", s);
}
function dE(e) {
  const t = kn(),
    n = this,
    r = n.touchEventsData,
    { params: i, touches: o, rtlTranslate: a, enabled: l } = n;
  if (!l || (!i.simulateTouch && e.pointerType === "mouse")) return;
  let s = e;
  if ((s.originalEvent && (s = s.originalEvent), !r.isTouched)) {
    r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", s);
    return;
  }
  const u = r.evCache.findIndex((T) => T.pointerId === s.pointerId);
  u >= 0 && (r.evCache[u] = s);
  const c = r.evCache.length > 1 ? r.evCache[0] : s,
    d = c.pageX,
    h = c.pageY;
  if (s.preventedByNestedSwiper) {
    (o.startX = d), (o.startY = h);
    return;
  }
  if (!n.allowTouchMove) {
    s.target.matches(r.focusableElements) || (n.allowClick = !1),
      r.isTouched &&
        (Object.assign(o, {
          startX: d,
          startY: h,
          prevX: n.touches.currentX,
          prevY: n.touches.currentY,
          currentX: d,
          currentY: h,
        }),
        (r.touchStartTime = Yl()));
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop) {
    if (n.isVertical()) {
      if (
        (h < o.startY && n.translate <= n.maxTranslate()) ||
        (h > o.startY && n.translate >= n.minTranslate())
      ) {
        (r.isTouched = !1), (r.isMoved = !1);
        return;
      }
    } else if (
      (d < o.startX && n.translate <= n.maxTranslate()) ||
      (d > o.startX && n.translate >= n.minTranslate())
    )
      return;
  }
  if (
    t.activeElement &&
    s.target === t.activeElement &&
    s.target.matches(r.focusableElements)
  ) {
    (r.isMoved = !0), (n.allowClick = !1);
    return;
  }
  if (
    (r.allowTouchCallbacks && n.emit("touchMove", s),
    s.targetTouches && s.targetTouches.length > 1)
  )
    return;
  (o.currentX = d), (o.currentY = h);
  const g = o.currentX - o.startX,
    v = o.currentY - o.startY;
  if (n.params.threshold && Math.sqrt(g ** 2 + v ** 2) < n.params.threshold)
    return;
  if (typeof r.isScrolling > "u") {
    let T;
    (n.isHorizontal() && o.currentY === o.startY) ||
    (n.isVertical() && o.currentX === o.startX)
      ? (r.isScrolling = !1)
      : g * g + v * v >= 25 &&
        ((T = (Math.atan2(Math.abs(v), Math.abs(g)) * 180) / Math.PI),
        (r.isScrolling = n.isHorizontal()
          ? T > i.touchAngle
          : 90 - T > i.touchAngle));
  }
  if (
    (r.isScrolling && n.emit("touchMoveOpposite", s),
    typeof r.startMoving > "u" &&
      (o.currentX !== o.startX || o.currentY !== o.startY) &&
      (r.startMoving = !0),
    r.isScrolling ||
      (n.zoom &&
        n.params.zoom &&
        n.params.zoom.enabled &&
        r.evCache.length > 1))
  ) {
    r.isTouched = !1;
    return;
  }
  if (!r.startMoving) return;
  (n.allowClick = !1),
    !i.cssMode && s.cancelable && s.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && s.stopPropagation();
  let b = n.isHorizontal() ? g : v,
    E = n.isHorizontal() ? o.currentX - o.previousX : o.currentY - o.previousY;
  i.oneWayMovement &&
    ((b = Math.abs(b) * (a ? 1 : -1)), (E = Math.abs(E) * (a ? 1 : -1))),
    (o.diff = b),
    (b *= i.touchRatio),
    a && ((b = -b), (E = -E));
  const f = n.touchesDirection;
  (n.swipeDirection = b > 0 ? "prev" : "next"),
    (n.touchesDirection = E > 0 ? "prev" : "next");
  const p = n.params.loop && !i.cssMode;
  if (!r.isMoved) {
    if (
      (p && n.loopFix({ direction: n.swipeDirection }),
      (r.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const T = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
      });
      n.wrapperEl.dispatchEvent(T);
    }
    (r.allowMomentumBounce = !1),
      i.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", s);
  }
  let m;
  r.isMoved &&
    f !== n.touchesDirection &&
    p &&
    Math.abs(b) >= 1 &&
    (n.loopFix({ direction: n.swipeDirection, setTranslate: !0 }), (m = !0)),
    n.emit("sliderMove", s),
    (r.isMoved = !0),
    (r.currentTranslate = b + r.startTranslate);
  let w = !0,
    _ = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (_ = 0),
    b > 0
      ? (p &&
          !m &&
          r.currentTranslate >
            (i.centeredSlides
              ? n.minTranslate() - n.size / 2
              : n.minTranslate()) &&
          n.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        r.currentTranslate > n.minTranslate() &&
          ((w = !1),
          i.resistance &&
            (r.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + r.startTranslate + b) ** _)))
      : b < 0 &&
        (p &&
          !m &&
          r.currentTranslate <
            (i.centeredSlides
              ? n.maxTranslate() + n.size / 2
              : n.maxTranslate()) &&
          n.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (i.slidesPerView === "auto"
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(i.slidesPerView, 10))),
          }),
        r.currentTranslate < n.maxTranslate() &&
          ((w = !1),
          i.resistance &&
            (r.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - r.startTranslate - b) ** _))),
    w && (s.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === "next" &&
      r.currentTranslate < r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === "prev" &&
      r.currentTranslate > r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (r.currentTranslate = r.startTranslate),
    i.threshold > 0)
  )
    if (Math.abs(b) > i.threshold || r.allowThresholdMove) {
      if (!r.allowThresholdMove) {
        (r.allowThresholdMove = !0),
          (o.startX = o.currentX),
          (o.startY = o.currentY),
          (r.currentTranslate = r.startTranslate),
          (o.diff = n.isHorizontal()
            ? o.currentX - o.startX
            : o.currentY - o.startY);
        return;
      }
    } else {
      r.currentTranslate = r.startTranslate;
      return;
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
      i.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    i.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(r.currentTranslate),
    n.setTranslate(r.currentTranslate));
}
function fE(e) {
  const t = this,
    n = t.touchEventsData,
    r = n.evCache.findIndex((m) => m.pointerId === e.pointerId);
  if (
    (r >= 0 && n.evCache.splice(r, 1),
    ["pointercancel", "pointerout", "pointerleave"].includes(e.type) &&
      !(
        e.type === "pointercancel" &&
        (t.browser.isSafari || t.browser.isWebView)
      ))
  )
    return;
  const {
    params: i,
    touches: o,
    rtlTranslate: a,
    slidesGrid: l,
    enabled: s,
  } = t;
  if (!s || (!i.simulateTouch && e.pointerType === "mouse")) return;
  let u = e;
  if (
    (u.originalEvent && (u = u.originalEvent),
    n.allowTouchCallbacks && t.emit("touchEnd", u),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && i.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1);
    return;
  }
  i.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const c = Yl(),
    d = c - n.touchStartTime;
  if (t.allowClick) {
    const m = u.path || (u.composedPath && u.composedPath());
    t.updateClickedSlide((m && m[0]) || u.target),
      t.emit("tap click", u),
      d < 300 &&
        c - n.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", u);
  }
  if (
    ((n.lastClickTime = Yl()),
    Kc(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      o.diff === 0 ||
      n.currentTranslate === n.startTranslate)
  ) {
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
  let h;
  if (
    (i.followFinger
      ? (h = a ? t.translate : -t.translate)
      : (h = -n.currentTranslate),
    i.cssMode)
  )
    return;
  if (i.freeMode && i.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: h });
    return;
  }
  let g = 0,
    v = t.slidesSizesGrid[0];
  for (
    let m = 0;
    m < l.length;
    m += m < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
  ) {
    const w = m < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    typeof l[m + w] < "u"
      ? h >= l[m] && h < l[m + w] && ((g = m), (v = l[m + w] - l[m]))
      : h >= l[m] && ((g = m), (v = l[l.length - 1] - l[l.length - 2]));
  }
  let b = null,
    E = null;
  i.rewind &&
    (t.isBeginning
      ? (E =
          i.virtual && i.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (b = 0));
  const f = (h - l[g]) / v,
    p = g < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
  if (d > i.longSwipesMs) {
    if (!i.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" &&
      (f >= i.longSwipesRatio
        ? t.slideTo(i.rewind && t.isEnd ? b : g + p)
        : t.slideTo(g)),
      t.swipeDirection === "prev" &&
        (f > 1 - i.longSwipesRatio
          ? t.slideTo(g + p)
          : E !== null && f < 0 && Math.abs(f) > i.longSwipesRatio
          ? t.slideTo(E)
          : t.slideTo(g));
  } else {
    if (!i.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (u.target === t.navigation.nextEl || u.target === t.navigation.prevEl)
      ? u.target === t.navigation.nextEl
        ? t.slideTo(g + p)
        : t.slideTo(g)
      : (t.swipeDirection === "next" && t.slideTo(b !== null ? b : g + p),
        t.swipeDirection === "prev" && t.slideTo(E !== null ? E : g));
  }
}
function Fh() {
  const e = this,
    { params: t, el: n } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: r, allowSlidePrev: i, snapGrid: o } = e,
    a = e.virtual && e.params.virtual.enabled;
  (e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses();
  const l = a && t.loop;
  (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !l
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !a
    ? e.slideToLoop(e.realIndex, 0, !1, !0)
    : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(e.autoplay.resizeTimeout),
      (e.autoplay.resizeTimeout = setTimeout(() => {
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.resume();
      }, 500))),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = r),
    e.params.watchOverflow && o !== e.snapGrid && e.checkOverflow();
}
function pE(e) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())));
}
function hE() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
  if (!r) return;
  (e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  let i;
  const o = e.maxTranslate() - e.minTranslate();
  o === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / o),
    i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1);
}
function mE(e) {
  const t = this;
  vl(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== "auto" && !t.params.autoHeight)
    ) && t.update();
}
let $h = !1;
function gE() {}
const ay = (e, t) => {
  const n = kn(),
    { params: r, el: i, wrapperEl: o, device: a } = e,
    l = !!r.nested,
    s = t === "on" ? "addEventListener" : "removeEventListener",
    u = t;
  i[s]("pointerdown", e.onTouchStart, { passive: !1 }),
    n[s]("pointermove", e.onTouchMove, { passive: !1, capture: l }),
    n[s]("pointerup", e.onTouchEnd, { passive: !0 }),
    n[s]("pointercancel", e.onTouchEnd, { passive: !0 }),
    n[s]("pointerout", e.onTouchEnd, { passive: !0 }),
    n[s]("pointerleave", e.onTouchEnd, { passive: !0 }),
    (r.preventClicks || r.preventClicksPropagation) &&
      i[s]("click", e.onClick, !0),
    r.cssMode && o[s]("scroll", e.onScroll),
    r.updateOnWindowResize
      ? e[u](
          a.ios || a.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          Fh,
          !0
        )
      : e[u]("observerUpdate", Fh, !0),
    i[s]("load", e.onLoad, { capture: !0 });
};
function vE() {
  const e = this,
    t = kn(),
    { params: n } = e;
  (e.onTouchStart = cE.bind(e)),
    (e.onTouchMove = dE.bind(e)),
    (e.onTouchEnd = fE.bind(e)),
    n.cssMode && (e.onScroll = hE.bind(e)),
    (e.onClick = pE.bind(e)),
    (e.onLoad = mE.bind(e)),
    $h || (t.addEventListener("touchstart", gE), ($h = !0)),
    ay(e, "on");
}
function yE() {
  ay(this, "off");
}
var bE = { attachEvents: vE, detachEvents: yE };
const zh = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function wE() {
  const e = this,
    { realIndex: t, initialized: n, params: r, el: i } = e,
    o = r.breakpoints;
  if (!o || (o && Object.keys(o).length === 0)) return;
  const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
  if (!a || e.currentBreakpoint === a) return;
  const s = (a in o ? o[a] : void 0) || e.originalParams,
    u = zh(e, r),
    c = zh(e, s),
    d = r.enabled;
  u && !c
    ? (i.classList.remove(
        `${r.containerModifierClass}grid`,
        `${r.containerModifierClass}grid-column`
      ),
      e.emitContainerClasses())
    : !u &&
      c &&
      (i.classList.add(`${r.containerModifierClass}grid`),
      ((s.grid.fill && s.grid.fill === "column") ||
        (!s.grid.fill && r.grid.fill === "column")) &&
        i.classList.add(`${r.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach((b) => {
      if (typeof s[b] > "u") return;
      const E = r[b] && r[b].enabled,
        f = s[b] && s[b].enabled;
      E && !f && e[b].disable(), !E && f && e[b].enable();
    });
  const h = s.direction && s.direction !== r.direction,
    g = r.loop && (s.slidesPerView !== r.slidesPerView || h);
  h && n && e.changeDirection(), $t(e.params, s);
  const v = e.params.enabled;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    d && !v ? e.disable() : !d && v && e.enable(),
    (e.currentBreakpoint = a),
    e.emit("_beforeBreakpoint", s),
    g && n && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
    e.emit("breakpoint", s);
}
function xE(e, t, n) {
  if ((t === void 0 && (t = "window"), !e || (t === "container" && !n))) return;
  let r = !1;
  const i = Wt(),
    o = t === "window" ? i.innerHeight : n.clientHeight,
    a = Object.keys(e).map((l) => {
      if (typeof l == "string" && l.indexOf("@") === 0) {
        const s = parseFloat(l.substr(1));
        return { value: o * s, point: l };
      }
      return { value: l, point: l };
    });
  a.sort((l, s) => parseInt(l.value, 10) - parseInt(s.value, 10));
  for (let l = 0; l < a.length; l += 1) {
    const { point: s, value: u } = a[l];
    t === "window"
      ? i.matchMedia(`(min-width: ${u}px)`).matches && (r = s)
      : u <= n.clientWidth && (r = s);
  }
  return r || "max";
}
var SE = { setBreakpoint: wE, getBreakpoint: xE };
function EE(e, t) {
  const n = [];
  return (
    e.forEach((r) => {
      typeof r == "object"
        ? Object.keys(r).forEach((i) => {
            r[i] && n.push(t + i);
          })
        : typeof r == "string" && n.push(t + r);
    }),
    n
  );
}
function _E() {
  const e = this,
    { classNames: t, params: n, rtl: r, el: i, device: o } = e,
    a = EE(
      [
        "initialized",
        n.direction,
        { "free-mode": e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: r },
        { grid: n.grid && n.grid.rows > 1 },
        {
          "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column",
        },
        { android: o.android },
        { ios: o.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass
    );
  t.push(...a), i.classList.add(...t), e.emitContainerClasses();
}
function CE() {
  const e = this,
    { el: t, classNames: n } = e;
  t.classList.remove(...n), e.emitContainerClasses();
}
var kE = { addClasses: _E, removeClasses: CE };
function TE() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: r } = n;
  if (r) {
    const i = e.slides.length - 1,
      o = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
    e.isLocked = e.size > o;
  } else e.isLocked = e.snapGrid.length === 1;
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var PE = { checkOverflow: TE },
  Xc = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopedSlides: null,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function OE(e, t) {
  return function (r) {
    r === void 0 && (r = {});
    const i = Object.keys(r)[0],
      o = r[i];
    if (typeof o != "object" || o === null) {
      $t(t, r);
      return;
    }
    if (
      (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
        e[i] === !0 &&
        (e[i] = { auto: !0 }),
      !(i in e && "enabled" in o))
    ) {
      $t(t, r);
      return;
    }
    e[i] === !0 && (e[i] = { enabled: !0 }),
      typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0),
      e[i] || (e[i] = { enabled: !1 }),
      $t(t, r);
  };
}
const Ru = {
    eventsEmitter: k1,
    update: I1,
    translate: H1,
    transition: q1,
    slide: tE,
    loop: oE,
    grabCursor: sE,
    events: bE,
    breakpoints: SE,
    checkOverflow: PE,
    classes: kE,
  },
  Lu = {};
let pf = class An {
  constructor() {
    let t, n;
    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
      i[o] = arguments[o];
    i.length === 1 &&
    i[0].constructor &&
    Object.prototype.toString.call(i[0]).slice(8, -1) === "Object"
      ? (n = i[0])
      : ([t, n] = i),
      n || (n = {}),
      (n = $t({}, n)),
      t && !n.el && (n.el = t);
    const a = kn();
    if (
      n.el &&
      typeof n.el == "string" &&
      a.querySelectorAll(n.el).length > 1
    ) {
      const c = [];
      return (
        a.querySelectorAll(n.el).forEach((d) => {
          const h = $t({}, n, { el: d });
          c.push(new An(h));
        }),
        c
      );
    }
    const l = this;
    (l.__swiper__ = !0),
      (l.support = iy()),
      (l.device = x1({ userAgent: n.userAgent })),
      (l.browser = E1()),
      (l.eventsListeners = {}),
      (l.eventsAnyListeners = []),
      (l.modules = [...l.__modules__]),
      n.modules && Array.isArray(n.modules) && l.modules.push(...n.modules);
    const s = {};
    l.modules.forEach((c) => {
      c({
        params: n,
        swiper: l,
        extendParams: OE(n, s),
        on: l.on.bind(l),
        once: l.once.bind(l),
        off: l.off.bind(l),
        emit: l.emit.bind(l),
      });
    });
    const u = $t({}, Xc, s);
    return (
      (l.params = $t({}, u, Lu, n)),
      (l.originalParams = $t({}, l.params)),
      (l.passedParams = $t({}, n)),
      l.params &&
        l.params.on &&
        Object.keys(l.params.on).forEach((c) => {
          l.on(c, l.params.on[c]);
        }),
      l.params && l.params.onAny && l.onAny(l.params.onAny),
      Object.assign(l, {
        enabled: l.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return l.params.direction === "horizontal";
        },
        isVertical() {
          return l.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: l.params.allowSlideNext,
        allowSlidePrev: l.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: l.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          evCache: [],
        },
        allowClick: !0,
        allowTouchMove: l.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      l.emit("_swiper"),
      l.params.init && l.init(),
      l
    );
  }
  getSlideIndex(t) {
    const { slidesEl: n, params: r } = this,
      i = xn(n, `.${r.slideClass}, swiper-slide`),
      o = Xl(i[0]);
    return Xl(t) - o;
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(
      this.slides.filter(
        (n) => n.getAttribute("data-swiper-slide-index") * 1 === t
      )[0]
    );
  }
  recalcSlides() {
    const t = this,
      { slidesEl: n, params: r } = t;
    t.slides = xn(n, `.${r.slideClass}, swiper-slide`);
  }
  enable() {
    const t = this;
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit("disable"));
  }
  setProgress(t, n) {
    const r = this;
    t = Math.min(Math.max(t, 0), 1);
    const i = r.minTranslate(),
      a = (r.maxTranslate() - i) * t + i;
    r.translateTo(a, typeof n > "u" ? 0 : n),
      r.updateActiveIndex(),
      r.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = t.el.className
      .split(" ")
      .filter(
        (r) =>
          r.indexOf("swiper") === 0 ||
          r.indexOf(t.params.containerModifierClass) === 0
      );
    t.emit("_containerClasses", n.join(" "));
  }
  getSlideClasses(t) {
    const n = this;
    return n.destroyed
      ? ""
      : t.className
          .split(" ")
          .filter(
            (r) =>
              r.indexOf("swiper-slide") === 0 ||
              r.indexOf(n.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = [];
    t.slides.forEach((r) => {
      const i = t.getSlideClasses(r);
      n.push({ slideEl: r, classNames: i }), t.emit("_slideClass", r, i);
    }),
      t.emit("_slideClasses", n);
  }
  slidesPerViewDynamic(t, n) {
    t === void 0 && (t = "current"), n === void 0 && (n = !1);
    const r = this,
      {
        params: i,
        slides: o,
        slidesGrid: a,
        slidesSizesGrid: l,
        size: s,
        activeIndex: u,
      } = r;
    let c = 1;
    if (i.centeredSlides) {
      let d = o[u] ? o[u].swiperSlideSize : 0,
        h;
      for (let g = u + 1; g < o.length; g += 1)
        o[g] &&
          !h &&
          ((d += o[g].swiperSlideSize), (c += 1), d > s && (h = !0));
      for (let g = u - 1; g >= 0; g -= 1)
        o[g] &&
          !h &&
          ((d += o[g].swiperSlideSize), (c += 1), d > s && (h = !0));
    } else if (t === "current")
      for (let d = u + 1; d < o.length; d += 1)
        (n ? a[d] + l[d] - a[u] < s : a[d] - a[u] < s) && (c += 1);
    else for (let d = u - 1; d >= 0; d -= 1) a[u] - a[d] < s && (c += 1);
    return c;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: n, params: r } = t;
    r.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((a) => {
        a.complete && vl(t, a);
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function i() {
      const a = t.rtlTranslate ? t.translate * -1 : t.translate,
        l = Math.min(Math.max(a, t.maxTranslate()), t.minTranslate());
      t.setTranslate(l), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let o;
    if (r.freeMode && r.freeMode.enabled && !r.cssMode)
      i(), r.autoHeight && t.updateAutoHeight();
    else {
      if (
        (r.slidesPerView === "auto" || r.slidesPerView > 1) &&
        t.isEnd &&
        !r.centeredSlides
      ) {
        const a = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
        o = t.slideTo(a.length - 1, 0, !1, !0);
      } else o = t.slideTo(t.activeIndex, 0, !1, !0);
      o || i();
    }
    r.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update");
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0);
    const r = this,
      i = r.params.direction;
    return (
      t || (t = i === "horizontal" ? "vertical" : "horizontal"),
      t === i ||
        (t !== "horizontal" && t !== "vertical") ||
        (r.el.classList.remove(`${r.params.containerModifierClass}${i}`),
        r.el.classList.add(`${r.params.containerModifierClass}${t}`),
        r.emitContainerClasses(),
        (r.params.direction = t),
        r.slides.forEach((o) => {
          t === "vertical" ? (o.style.width = "") : (o.style.height = "");
        }),
        r.emit("changeDirection"),
        n && r.update()),
      r
    );
  }
  changeLanguageDirection(t) {
    const n = this;
    (n.rtl && t === "rtl") ||
      (!n.rtl && t === "ltr") ||
      ((n.rtl = t === "rtl"),
      (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "rtl"))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "ltr")),
      n.update());
  }
  mount(t) {
    const n = this;
    if (n.mounted) return !0;
    let r = t || n.params.el;
    if ((typeof r == "string" && (r = document.querySelector(r)), !r))
      return !1;
    (r.swiper = n),
      r.parentNode &&
        r.parentNode.host &&
        r.parentNode.host.nodeName === "SWIPER-CONTAINER" &&
        (n.isElement = !0);
    const i = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let a = (() =>
      r && r.shadowRoot && r.shadowRoot.querySelector
        ? r.shadowRoot.querySelector(i())
        : xn(r, i())[0])();
    return (
      !a &&
        n.params.createElements &&
        ((a = ny("div", n.params.wrapperClass)),
        r.append(a),
        xn(r, `.${n.params.slideClass}`).forEach((l) => {
          a.append(l);
        })),
      Object.assign(n, {
        el: r,
        wrapperEl: a,
        slidesEl:
          n.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : a,
        hostEl: n.isElement ? r.parentNode.host : r,
        mounted: !0,
        rtl: r.dir.toLowerCase() === "rtl" || gr(r, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (r.dir.toLowerCase() === "rtl" || gr(r, "direction") === "rtl"),
        wrongRTL: gr(a, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const n = this;
    return (
      n.initialized ||
        n.mount(t) === !1 ||
        (n.emit("beforeInit"),
        n.params.breakpoints && n.setBreakpoint(),
        n.addClasses(),
        n.updateSize(),
        n.updateSlides(),
        n.params.watchOverflow && n.checkOverflow(),
        n.params.grabCursor && n.enabled && n.setGrabCursor(),
        n.params.loop && n.virtual && n.params.virtual.enabled
          ? n.slideTo(
              n.params.initialSlide + n.virtual.slidesBefore,
              0,
              n.params.runCallbacksOnInit,
              !1,
              !0
            )
          : n.slideTo(
              n.params.initialSlide,
              0,
              n.params.runCallbacksOnInit,
              !1,
              !0
            ),
        n.params.loop && n.loopCreate(),
        n.attachEvents(),
        [...n.el.querySelectorAll('[loading="lazy"]')].forEach((i) => {
          i.complete
            ? vl(n, i)
            : i.addEventListener("load", (o) => {
                vl(n, o.target);
              });
        }),
        Yc(n),
        (n.initialized = !0),
        Yc(n),
        n.emit("init"),
        n.emit("afterInit")),
      n
    );
  }
  destroy(t, n) {
    t === void 0 && (t = !0), n === void 0 && (n = !0);
    const r = this,
      { params: i, el: o, wrapperEl: a, slides: l } = r;
    return (
      typeof r.params > "u" ||
        r.destroyed ||
        (r.emit("beforeDestroy"),
        (r.initialized = !1),
        r.detachEvents(),
        i.loop && r.loopDestroy(),
        n &&
          (r.removeClasses(),
          o.removeAttribute("style"),
          a.removeAttribute("style"),
          l &&
            l.length &&
            l.forEach((s) => {
              s.classList.remove(
                i.slideVisibleClass,
                i.slideActiveClass,
                i.slideNextClass,
                i.slidePrevClass
              ),
                s.removeAttribute("style"),
                s.removeAttribute("data-swiper-slide-index");
            })),
        r.emit("destroy"),
        Object.keys(r.eventsListeners).forEach((s) => {
          r.off(s);
        }),
        t !== !1 && ((r.el.swiper = null), p1(r)),
        (r.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    $t(Lu, t);
  }
  static get extendedDefaults() {
    return Lu;
  }
  static get defaults() {
    return Xc;
  }
  static installModule(t) {
    An.prototype.__modules__ || (An.prototype.__modules__ = []);
    const n = An.prototype.__modules__;
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => An.installModule(n)), An)
      : (An.installModule(t), An);
  }
};
Object.keys(Ru).forEach((e) => {
  Object.keys(Ru[e]).forEach((t) => {
    pf.prototype[t] = Ru[e][t];
  });
});
pf.use([_1, C1]);
const ly = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopedSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
];
function ui(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function ei(e, t) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(t)
    .filter((r) => n.indexOf(r) < 0)
    .forEach((r) => {
      typeof e[r] > "u"
        ? (e[r] = t[r])
        : ui(t[r]) && ui(e[r]) && Object.keys(t[r]).length > 0
        ? t[r].__swiper__
          ? (e[r] = t[r])
          : ei(e[r], t[r])
        : (e[r] = t[r]);
    });
}
function sy(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > "u" &&
      typeof e.navigation.prevEl > "u"
  );
}
function uy(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u";
}
function cy(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u";
}
function dy(e) {
  e === void 0 && (e = "");
  const t = e
      .split(" ")
      .map((r) => r.trim())
      .filter((r) => !!r),
    n = [];
  return (
    t.forEach((r) => {
      n.indexOf(r) < 0 && n.push(r);
    }),
    n.join(" ")
  );
}
function NE(e) {
  return (
    e === void 0 && (e = ""),
    e
      ? e.includes("swiper-wrapper")
        ? e
        : `swiper-wrapper ${e}`
      : "swiper-wrapper"
  );
}
function RE(e) {
  let {
    swiper: t,
    slides: n,
    passedParams: r,
    changedParams: i,
    nextEl: o,
    prevEl: a,
    scrollbarEl: l,
    paginationEl: s,
  } = e;
  const u = i.filter(
      (S) => S !== "children" && S !== "direction" && S !== "wrapperClass"
    ),
    {
      params: c,
      pagination: d,
      navigation: h,
      scrollbar: g,
      virtual: v,
      thumbs: b,
    } = t;
  let E, f, p, m, w, _, T, k;
  i.includes("thumbs") &&
    r.thumbs &&
    r.thumbs.swiper &&
    c.thumbs &&
    !c.thumbs.swiper &&
    (E = !0),
    i.includes("controller") &&
      r.controller &&
      r.controller.control &&
      c.controller &&
      !c.controller.control &&
      (f = !0),
    i.includes("pagination") &&
      r.pagination &&
      (r.pagination.el || s) &&
      (c.pagination || c.pagination === !1) &&
      d &&
      !d.el &&
      (p = !0),
    i.includes("scrollbar") &&
      r.scrollbar &&
      (r.scrollbar.el || l) &&
      (c.scrollbar || c.scrollbar === !1) &&
      g &&
      !g.el &&
      (m = !0),
    i.includes("navigation") &&
      r.navigation &&
      (r.navigation.prevEl || a) &&
      (r.navigation.nextEl || o) &&
      (c.navigation || c.navigation === !1) &&
      h &&
      !h.prevEl &&
      !h.nextEl &&
      (w = !0);
  const N = (S) => {
    t[S] &&
      (t[S].destroy(),
      S === "navigation"
        ? (t.isElement && (t[S].prevEl.remove(), t[S].nextEl.remove()),
          (c[S].prevEl = void 0),
          (c[S].nextEl = void 0),
          (t[S].prevEl = void 0),
          (t[S].nextEl = void 0))
        : (t.isElement && t[S].el.remove(),
          (c[S].el = void 0),
          (t[S].el = void 0)));
  };
  i.includes("loop") &&
    t.isElement &&
    (c.loop && !r.loop ? (_ = !0) : !c.loop && r.loop ? (T = !0) : (k = !0)),
    u.forEach((S) => {
      if (ui(c[S]) && ui(r[S]))
        ei(c[S], r[S]),
          (S === "navigation" || S === "pagination" || S === "scrollbar") &&
            "enabled" in r[S] &&
            !r[S].enabled &&
            N(S);
      else {
        const F = r[S];
        (F === !0 || F === !1) &&
        (S === "navigation" || S === "pagination" || S === "scrollbar")
          ? F === !1 && N(S)
          : (c[S] = r[S]);
      }
    }),
    u.includes("controller") &&
      !f &&
      t.controller &&
      t.controller.control &&
      c.controller &&
      c.controller.control &&
      (t.controller.control = c.controller.control),
    i.includes("children") &&
      n &&
      v &&
      c.virtual.enabled &&
      ((v.slides = n), v.update(!0)),
    i.includes("children") && n && c.loop && (k = !0),
    E && b.init() && b.update(!0),
    f && (t.controller.control = c.controller.control),
    p &&
      (t.isElement &&
        (!s || typeof s == "string") &&
        ((s = document.createElement("div")),
        s.classList.add("swiper-pagination"),
        t.el.appendChild(s)),
      s && (c.pagination.el = s),
      d.init(),
      d.render(),
      d.update()),
    m &&
      (t.isElement &&
        (!l || typeof l == "string") &&
        ((l = document.createElement("div")),
        l.classList.add("swiper-scrollbar"),
        t.el.appendChild(l)),
      l && (c.scrollbar.el = l),
      g.init(),
      g.updateSize(),
      g.setTranslate()),
    w &&
      (t.isElement &&
        ((!o || typeof o == "string") &&
          ((o = document.createElement("div")),
          o.classList.add("swiper-button-next"),
          (o.innerHTML = t.hostEl.nextButtonSvg),
          t.el.appendChild(o)),
        (!a || typeof a == "string") &&
          ((a = document.createElement("div")),
          a.classList.add("swiper-button-prev"),
          (o.innerHTML = t.hostEl.prevButtonSvg),
          t.el.appendChild(a))),
      o && (c.navigation.nextEl = o),
      a && (c.navigation.prevEl = a),
      h.init(),
      h.update()),
    i.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext),
    i.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev),
    i.includes("direction") && t.changeDirection(r.direction, !1),
    (_ || k) && t.loopDestroy(),
    (T || k) && t.loopCreate(),
    t.update();
}
function LE(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = !0);
  const n = { on: {} },
    r = {},
    i = {};
  ei(n, Xc), (n._emitClasses = !0), (n.init = !1);
  const o = {},
    a = ly.map((s) => s.replace(/_/, "")),
    l = Object.assign({}, e);
  return (
    Object.keys(l).forEach((s) => {
      typeof e[s] > "u" ||
        (a.indexOf(s) >= 0
          ? ui(e[s])
            ? ((n[s] = {}), (i[s] = {}), ei(n[s], e[s]), ei(i[s], e[s]))
            : ((n[s] = e[s]), (i[s] = e[s]))
          : s.search(/on[A-Z]/) === 0 && typeof e[s] == "function"
          ? t
            ? (r[`${s[2].toLowerCase()}${s.substr(3)}`] = e[s])
            : (n.on[`${s[2].toLowerCase()}${s.substr(3)}`] = e[s])
          : (o[s] = e[s]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((s) => {
      n[s] === !0 && (n[s] = {}), n[s] === !1 && delete n[s];
    }),
    { params: n, passedParams: i, rest: o, events: r }
  );
}
function ME(e, t) {
  let {
    el: n,
    nextEl: r,
    prevEl: i,
    paginationEl: o,
    scrollbarEl: a,
    swiper: l,
  } = e;
  sy(t) &&
    r &&
    i &&
    ((l.params.navigation.nextEl = r),
    (l.originalParams.navigation.nextEl = r),
    (l.params.navigation.prevEl = i),
    (l.originalParams.navigation.prevEl = i)),
    uy(t) &&
      o &&
      ((l.params.pagination.el = o), (l.originalParams.pagination.el = o)),
    cy(t) &&
      a &&
      ((l.params.scrollbar.el = a), (l.originalParams.scrollbar.el = a)),
    l.init(n);
}
function jE(e, t, n, r, i) {
  const o = [];
  if (!t) return o;
  const a = (s) => {
    o.indexOf(s) < 0 && o.push(s);
  };
  if (n && r) {
    const s = r.map(i),
      u = n.map(i);
    s.join("") !== u.join("") && a("children"),
      r.length !== n.length && a("children");
  }
  return (
    ly
      .filter((s) => s[0] === "_")
      .map((s) => s.replace(/_/, ""))
      .forEach((s) => {
        if (s in e && s in t)
          if (ui(e[s]) && ui(t[s])) {
            const u = Object.keys(e[s]),
              c = Object.keys(t[s]);
            u.length !== c.length
              ? a(s)
              : (u.forEach((d) => {
                  e[s][d] !== t[s][d] && a(s);
                }),
                c.forEach((d) => {
                  e[s][d] !== t[s][d] && a(s);
                }));
          } else e[s] !== t[s] && a(s);
      }),
    o
  );
}
const AE = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate());
};
function Jl() {
  return (
    (Jl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Jl.apply(this, arguments)
  );
}
function fy(e) {
  return (
    e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
  );
}
function py(e) {
  const t = [];
  return (
    J.Children.toArray(e).forEach((n) => {
      fy(n)
        ? t.push(n)
        : n.props &&
          n.props.children &&
          py(n.props.children).forEach((r) => t.push(r));
    }),
    t
  );
}
function DE(e) {
  const t = [],
    n = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    };
  return (
    J.Children.toArray(e).forEach((r) => {
      if (fy(r)) t.push(r);
      else if (r.props && r.props.slot && n[r.props.slot])
        n[r.props.slot].push(r);
      else if (r.props && r.props.children) {
        const i = py(r.props.children);
        i.length > 0 ? i.forEach((o) => t.push(o)) : n["container-end"].push(r);
      } else n["container-end"].push(r);
    }),
    { slides: t, slots: n }
  );
}
function IE(e, t, n) {
  if (!n) return null;
  const r = (c) => {
      let d = c;
      return (
        c < 0 ? (d = t.length + c) : d >= t.length && (d = d - t.length), d
      );
    },
    i = e.isHorizontal()
      ? { [e.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: o, to: a } = n,
    l = e.params.loop ? -t.length : 0,
    s = e.params.loop ? t.length * 2 : t.length,
    u = [];
  for (let c = l; c < s; c += 1) c >= o && c <= a && u.push(t[r(c)]);
  return u.map((c, d) =>
    J.cloneElement(c, { swiper: e, style: i, key: `slide-${d}` })
  );
}
function qo(e, t) {
  return typeof window > "u" ? C.useEffect(e, t) : C.useLayoutEffect(e, t);
}
const Bh = C.createContext(null),
  FE = C.createContext(null),
  hf = C.forwardRef(function (e, t) {
    let {
        className: n,
        tag: r = "div",
        wrapperTag: i = "div",
        children: o,
        onSwiper: a,
        ...l
      } = e === void 0 ? {} : e,
      s = !1;
    const [u, c] = C.useState("swiper"),
      [d, h] = C.useState(null),
      [g, v] = C.useState(!1),
      b = C.useRef(!1),
      E = C.useRef(null),
      f = C.useRef(null),
      p = C.useRef(null),
      m = C.useRef(null),
      w = C.useRef(null),
      _ = C.useRef(null),
      T = C.useRef(null),
      k = C.useRef(null),
      { params: N, passedParams: S, rest: F, events: j } = LE(l),
      { slides: I, slots: O } = DE(o),
      R = () => {
        v(!g);
      };
    Object.assign(N.on, {
      _containerClasses(B, W) {
        c(W);
      },
    });
    const z = () => {
      Object.assign(N.on, j), (s = !0);
      const B = { ...N };
      if (
        (delete B.wrapperClass,
        (f.current = new pf(B)),
        f.current.virtual && f.current.params.virtual.enabled)
      ) {
        f.current.virtual.slides = I;
        const W = {
          cache: !1,
          slides: I,
          renderExternal: h,
          renderExternalUpdate: !1,
        };
        ei(f.current.params.virtual, W),
          ei(f.current.originalParams.virtual, W);
      }
    };
    E.current || z(), f.current && f.current.on("_beforeBreakpoint", R);
    const K = () => {
        s ||
          !j ||
          !f.current ||
          Object.keys(j).forEach((B) => {
            f.current.on(B, j[B]);
          });
      },
      U = () => {
        !j ||
          !f.current ||
          Object.keys(j).forEach((B) => {
            f.current.off(B, j[B]);
          });
      };
    C.useEffect(() => () => {
      f.current && f.current.off("_beforeBreakpoint", R);
    }),
      C.useEffect(() => {
        !b.current &&
          f.current &&
          (f.current.emitSlidesClasses(), (b.current = !0));
      }),
      qo(() => {
        if ((t && (t.current = E.current), !!E.current))
          return (
            f.current.destroyed && z(),
            ME(
              {
                el: E.current,
                nextEl: w.current,
                prevEl: _.current,
                paginationEl: T.current,
                scrollbarEl: k.current,
                swiper: f.current,
              },
              N
            ),
            a && a(f.current),
            () => {
              f.current && !f.current.destroyed && f.current.destroy(!0, !1);
            }
          );
      }, []),
      qo(() => {
        K();
        const B = jE(S, p.current, I, m.current, (W) => W.key);
        return (
          (p.current = S),
          (m.current = I),
          B.length &&
            f.current &&
            !f.current.destroyed &&
            RE({
              swiper: f.current,
              slides: I,
              passedParams: S,
              changedParams: B,
              nextEl: w.current,
              prevEl: _.current,
              scrollbarEl: k.current,
              paginationEl: T.current,
            }),
          () => {
            U();
          }
        );
      }),
      qo(() => {
        AE(f.current);
      }, [d]);
    function D() {
      return N.virtual
        ? IE(f.current, I, d)
        : I.map((B, W) =>
            J.cloneElement(B, { swiper: f.current, swiperSlideIndex: W })
          );
    }
    return J.createElement(
      r,
      Jl({ ref: E, className: dy(`${u}${n ? ` ${n}` : ""}`) }, F),
      J.createElement(
        FE.Provider,
        { value: f.current },
        O["container-start"],
        J.createElement(
          i,
          { className: NE(N.wrapperClass) },
          O["wrapper-start"],
          D(),
          O["wrapper-end"]
        ),
        sy(N) &&
          J.createElement(
            J.Fragment,
            null,
            J.createElement("div", { ref: _, className: "swiper-button-prev" }),
            J.createElement("div", { ref: w, className: "swiper-button-next" })
          ),
        cy(N) &&
          J.createElement("div", { ref: k, className: "swiper-scrollbar" }),
        uy(N) &&
          J.createElement("div", { ref: T, className: "swiper-pagination" }),
        O["container-end"]
      )
    );
  });
hf.displayName = "Swiper";
const mf = C.forwardRef(function (e, t) {
  let {
    tag: n = "div",
    children: r,
    className: i = "",
    swiper: o,
    zoom: a,
    lazy: l,
    virtualIndex: s,
    swiperSlideIndex: u,
    ...c
  } = e === void 0 ? {} : e;
  const d = C.useRef(null),
    [h, g] = C.useState("swiper-slide"),
    [v, b] = C.useState(!1);
  function E(w, _, T) {
    _ === d.current && g(T);
  }
  qo(() => {
    if (
      (typeof u < "u" && (d.current.swiperSlideIndex = u),
      t && (t.current = d.current),
      !(!d.current || !o))
    ) {
      if (o.destroyed) {
        h !== "swiper-slide" && g("swiper-slide");
        return;
      }
      return (
        o.on("_slideClass", E),
        () => {
          o && o.off("_slideClass", E);
        }
      );
    }
  }),
    qo(() => {
      o && d.current && !o.destroyed && g(o.getSlideClasses(d.current));
    }, [o]);
  const f = {
      isActive: h.indexOf("swiper-slide-active") >= 0,
      isVisible: h.indexOf("swiper-slide-visible") >= 0,
      isPrev: h.indexOf("swiper-slide-prev") >= 0,
      isNext: h.indexOf("swiper-slide-next") >= 0,
    },
    p = () => (typeof r == "function" ? r(f) : r),
    m = () => {
      b(!0);
    };
  return J.createElement(
    n,
    Jl(
      {
        ref: d,
        className: dy(`${h}${i ? ` ${i}` : ""}`),
        "data-swiper-slide-index": s,
        onLoad: m,
      },
      c
    ),
    a &&
      J.createElement(
        Bh.Provider,
        { value: f },
        J.createElement(
          "div",
          {
            className: "swiper-zoom-container",
            "data-swiper-zoom": typeof a == "number" ? a : void 0,
          },
          p(),
          l &&
            !v &&
            J.createElement("div", { className: "swiper-lazy-preloader" })
        )
      ),
    !a &&
      J.createElement(
        Bh.Provider,
        { value: f },
        p(),
        l &&
          !v &&
          J.createElement("div", { className: "swiper-lazy-preloader" })
      )
  );
});
mf.displayName = "SwiperSlide";
function $E(e, t, n, r) {
  return (
    e.params.createElements &&
      Object.keys(r).forEach((i) => {
        if (!n[i] && n.auto === !0) {
          let o = xn(e.el, `.${r[i]}`)[0];
          o || ((o = ny("div", r[i])), (o.className = r[i]), e.el.append(o)),
            (n[i] = o),
            (t[i] = o);
        }
      }),
    n
  );
}
function To(e) {
  return (
    e === void 0 && (e = ""),
    `.${e
      .trim()
      .replace(/([\.:!+\/])/g, "\\$1")
      .replace(/ /g, ".")}`
  );
}
function zE(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  const o = "swiper-pagination";
  n({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (p) => p,
      formatFractionTotal: (p) => p,
      bulletClass: `${o}-bullet`,
      bulletActiveClass: `${o}-bullet-active`,
      modifierClass: `${o}-`,
      currentClass: `${o}-current`,
      totalClass: `${o}-total`,
      hiddenClass: `${o}-hidden`,
      progressbarFillClass: `${o}-progressbar-fill`,
      progressbarOppositeClass: `${o}-progressbar-opposite`,
      clickableClass: `${o}-clickable`,
      lockClass: `${o}-lock`,
      horizontalClass: `${o}-horizontal`,
      verticalClass: `${o}-vertical`,
      paginationDisabledClass: `${o}-disabled`,
    },
  }),
    (t.pagination = { el: null, bullets: [] });
  let a,
    l = 0;
  const s = (p) => (Array.isArray(p) ? p : [p]).filter((m) => !!m);
  function u() {
    return (
      !t.params.pagination.el ||
      !t.pagination.el ||
      (Array.isArray(t.pagination.el) && t.pagination.el.length === 0)
    );
  }
  function c(p, m) {
    const { bulletActiveClass: w } = t.params.pagination;
    p &&
      ((p = p[`${m === "prev" ? "previous" : "next"}ElementSibling`]),
      p &&
        (p.classList.add(`${w}-${m}`),
        (p = p[`${m === "prev" ? "previous" : "next"}ElementSibling`]),
        p && p.classList.add(`${w}-${m}-${m}`)));
  }
  function d(p) {
    const m = p.target.closest(To(t.params.pagination.bulletClass));
    if (!m) return;
    p.preventDefault();
    const w = Xl(m) * t.params.slidesPerGroup;
    if (t.params.loop) {
      if (t.realIndex === w) return;
      const _ = t.getSlideIndexByData(w),
        T = t.getSlideIndexByData(t.realIndex);
      _ > t.slides.length - t.loopedSlides &&
        t.loopFix({
          direction: _ > T ? "next" : "prev",
          activeSlideIndex: _,
          slideTo: !1,
        }),
        t.slideToLoop(w);
    } else t.slideTo(w);
  }
  function h() {
    const p = t.rtl,
      m = t.params.pagination;
    if (u()) return;
    let w = t.pagination.el;
    w = s(w);
    let _, T;
    const k =
        t.virtual && t.params.virtual.enabled
          ? t.virtual.slides.length
          : t.slides.length,
      N = t.params.loop
        ? Math.ceil(k / t.params.slidesPerGroup)
        : t.snapGrid.length;
    if (
      (t.params.loop
        ? ((T = t.previousRealIndex || 0),
          (_ =
            t.params.slidesPerGroup > 1
              ? Math.floor(t.realIndex / t.params.slidesPerGroup)
              : t.realIndex))
        : typeof t.snapIndex < "u"
        ? ((_ = t.snapIndex), (T = t.previousSnapIndex))
        : ((T = t.previousIndex || 0), (_ = t.activeIndex || 0)),
      m.type === "bullets" &&
        t.pagination.bullets &&
        t.pagination.bullets.length > 0)
    ) {
      const S = t.pagination.bullets;
      let F, j, I;
      if (
        (m.dynamicBullets &&
          ((a = Qc(S[0], t.isHorizontal() ? "width" : "height", !0)),
          w.forEach((O) => {
            O.style[t.isHorizontal() ? "width" : "height"] = `${
              a * (m.dynamicMainBullets + 4)
            }px`;
          }),
          m.dynamicMainBullets > 1 &&
            T !== void 0 &&
            ((l += _ - (T || 0)),
            l > m.dynamicMainBullets - 1
              ? (l = m.dynamicMainBullets - 1)
              : l < 0 && (l = 0)),
          (F = Math.max(_ - l, 0)),
          (j = F + (Math.min(S.length, m.dynamicMainBullets) - 1)),
          (I = (j + F) / 2)),
        S.forEach((O) => {
          const R = [
            ...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(
              (z) => `${m.bulletActiveClass}${z}`
            ),
          ]
            .map((z) =>
              typeof z == "string" && z.includes(" ") ? z.split(" ") : z
            )
            .flat();
          O.classList.remove(...R);
        }),
        w.length > 1)
      )
        S.forEach((O) => {
          const R = Xl(O);
          R === _
            ? O.classList.add(...m.bulletActiveClass.split(" "))
            : t.isElement && O.setAttribute("part", "bullet"),
            m.dynamicBullets &&
              (R >= F &&
                R <= j &&
                O.classList.add(...`${m.bulletActiveClass}-main`.split(" ")),
              R === F && c(O, "prev"),
              R === j && c(O, "next"));
        });
      else {
        const O = S[_];
        if (
          (O && O.classList.add(...m.bulletActiveClass.split(" ")),
          t.isElement &&
            S.forEach((R, z) => {
              R.setAttribute("part", z === _ ? "bullet-active" : "bullet");
            }),
          m.dynamicBullets)
        ) {
          const R = S[F],
            z = S[j];
          for (let K = F; K <= j; K += 1)
            S[K] &&
              S[K].classList.add(...`${m.bulletActiveClass}-main`.split(" "));
          c(R, "prev"), c(z, "next");
        }
      }
      if (m.dynamicBullets) {
        const O = Math.min(S.length, m.dynamicMainBullets + 4),
          R = (a * O - a) / 2 - I * a,
          z = p ? "right" : "left";
        S.forEach((K) => {
          K.style[t.isHorizontal() ? z : "top"] = `${R}px`;
        });
      }
    }
    w.forEach((S, F) => {
      if (
        (m.type === "fraction" &&
          (S.querySelectorAll(To(m.currentClass)).forEach((j) => {
            j.textContent = m.formatFractionCurrent(_ + 1);
          }),
          S.querySelectorAll(To(m.totalClass)).forEach((j) => {
            j.textContent = m.formatFractionTotal(N);
          })),
        m.type === "progressbar")
      ) {
        let j;
        m.progressbarOpposite
          ? (j = t.isHorizontal() ? "vertical" : "horizontal")
          : (j = t.isHorizontal() ? "horizontal" : "vertical");
        const I = (_ + 1) / N;
        let O = 1,
          R = 1;
        j === "horizontal" ? (O = I) : (R = I),
          S.querySelectorAll(To(m.progressbarFillClass)).forEach((z) => {
            (z.style.transform = `translate3d(0,0,0) scaleX(${O}) scaleY(${R})`),
              (z.style.transitionDuration = `${t.params.speed}ms`);
          });
      }
      m.type === "custom" && m.renderCustom
        ? ((S.innerHTML = m.renderCustom(t, _ + 1, N)),
          F === 0 && i("paginationRender", S))
        : (F === 0 && i("paginationRender", S), i("paginationUpdate", S)),
        t.params.watchOverflow &&
          t.enabled &&
          S.classList[t.isLocked ? "add" : "remove"](m.lockClass);
    });
  }
  function g() {
    const p = t.params.pagination;
    if (u()) return;
    const m =
      t.virtual && t.params.virtual.enabled
        ? t.virtual.slides.length
        : t.slides.length;
    let w = t.pagination.el;
    w = s(w);
    let _ = "";
    if (p.type === "bullets") {
      let T = t.params.loop
        ? Math.ceil(m / t.params.slidesPerGroup)
        : t.snapGrid.length;
      t.params.freeMode && t.params.freeMode.enabled && T > m && (T = m);
      for (let k = 0; k < T; k += 1)
        p.renderBullet
          ? (_ += p.renderBullet.call(t, k, p.bulletClass))
          : (_ += `<${p.bulletElement} ${
              t.isElement ? 'part="bullet"' : ""
            } class="${p.bulletClass}"></${p.bulletElement}>`);
    }
    p.type === "fraction" &&
      (p.renderFraction
        ? (_ = p.renderFraction.call(t, p.currentClass, p.totalClass))
        : (_ = `<span class="${p.currentClass}"></span> / <span class="${p.totalClass}"></span>`)),
      p.type === "progressbar" &&
        (p.renderProgressbar
          ? (_ = p.renderProgressbar.call(t, p.progressbarFillClass))
          : (_ = `<span class="${p.progressbarFillClass}"></span>`)),
      (t.pagination.bullets = []),
      w.forEach((T) => {
        p.type !== "custom" && (T.innerHTML = _ || ""),
          p.type === "bullets" &&
            t.pagination.bullets.push(...T.querySelectorAll(To(p.bulletClass)));
      }),
      p.type !== "custom" && i("paginationRender", w[0]);
  }
  function v() {
    t.params.pagination = $E(
      t,
      t.originalParams.pagination,
      t.params.pagination,
      { el: "swiper-pagination" }
    );
    const p = t.params.pagination;
    if (!p.el) return;
    let m;
    typeof p.el == "string" && t.isElement && (m = t.el.querySelector(p.el)),
      !m &&
        typeof p.el == "string" &&
        (m = [...document.querySelectorAll(p.el)]),
      m || (m = p.el),
      !(!m || m.length === 0) &&
        (t.params.uniqueNavElements &&
          typeof p.el == "string" &&
          Array.isArray(m) &&
          m.length > 1 &&
          ((m = [...t.el.querySelectorAll(p.el)]),
          m.length > 1 &&
            (m = m.filter((w) => ry(w, ".swiper")[0] === t.el)[0])),
        Array.isArray(m) && m.length === 1 && (m = m[0]),
        Object.assign(t.pagination, { el: m }),
        (m = s(m)),
        m.forEach((w) => {
          p.type === "bullets" &&
            p.clickable &&
            w.classList.add(p.clickableClass),
            w.classList.add(p.modifierClass + p.type),
            w.classList.add(
              t.isHorizontal() ? p.horizontalClass : p.verticalClass
            ),
            p.type === "bullets" &&
              p.dynamicBullets &&
              (w.classList.add(`${p.modifierClass}${p.type}-dynamic`),
              (l = 0),
              p.dynamicMainBullets < 1 && (p.dynamicMainBullets = 1)),
            p.type === "progressbar" &&
              p.progressbarOpposite &&
              w.classList.add(p.progressbarOppositeClass),
            p.clickable && w.addEventListener("click", d),
            t.enabled || w.classList.add(p.lockClass);
        }));
  }
  function b() {
    const p = t.params.pagination;
    if (u()) return;
    let m = t.pagination.el;
    m &&
      ((m = s(m)),
      m.forEach((w) => {
        w.classList.remove(p.hiddenClass),
          w.classList.remove(p.modifierClass + p.type),
          w.classList.remove(
            t.isHorizontal() ? p.horizontalClass : p.verticalClass
          ),
          p.clickable && w.removeEventListener("click", d);
      })),
      t.pagination.bullets &&
        t.pagination.bullets.forEach((w) =>
          w.classList.remove(...p.bulletActiveClass.split(" "))
        );
  }
  r("changeDirection", () => {
    if (!t.pagination || !t.pagination.el) return;
    const p = t.params.pagination;
    let { el: m } = t.pagination;
    (m = s(m)),
      m.forEach((w) => {
        w.classList.remove(p.horizontalClass, p.verticalClass),
          w.classList.add(
            t.isHorizontal() ? p.horizontalClass : p.verticalClass
          );
      });
  }),
    r("init", () => {
      t.params.pagination.enabled === !1 ? f() : (v(), g(), h());
    }),
    r("activeIndexChange", () => {
      typeof t.snapIndex > "u" && h();
    }),
    r("snapIndexChange", () => {
      h();
    }),
    r("snapGridLengthChange", () => {
      g(), h();
    }),
    r("destroy", () => {
      b();
    }),
    r("enable disable", () => {
      let { el: p } = t.pagination;
      p &&
        ((p = s(p)),
        p.forEach((m) =>
          m.classList[t.enabled ? "remove" : "add"](
            t.params.pagination.lockClass
          )
        ));
    }),
    r("lock unlock", () => {
      h();
    }),
    r("click", (p, m) => {
      const w = m.target,
        _ = s(t.pagination.el);
      if (
        t.params.pagination.el &&
        t.params.pagination.hideOnClick &&
        _ &&
        _.length > 0 &&
        !w.classList.contains(t.params.pagination.bulletClass)
      ) {
        if (
          t.navigation &&
          ((t.navigation.nextEl && w === t.navigation.nextEl) ||
            (t.navigation.prevEl && w === t.navigation.prevEl))
        )
          return;
        const T = _[0].classList.contains(t.params.pagination.hiddenClass);
        i(T === !0 ? "paginationShow" : "paginationHide"),
          _.forEach((k) => k.classList.toggle(t.params.pagination.hiddenClass));
      }
    });
  const E = () => {
      t.el.classList.remove(t.params.pagination.paginationDisabledClass);
      let { el: p } = t.pagination;
      p &&
        ((p = s(p)),
        p.forEach((m) =>
          m.classList.remove(t.params.pagination.paginationDisabledClass)
        )),
        v(),
        g(),
        h();
    },
    f = () => {
      t.el.classList.add(t.params.pagination.paginationDisabledClass);
      let { el: p } = t.pagination;
      p &&
        ((p = s(p)),
        p.forEach((m) =>
          m.classList.add(t.params.pagination.paginationDisabledClass)
        )),
        b();
    };
  Object.assign(t.pagination, {
    enable: E,
    disable: f,
    render: g,
    update: h,
    init: v,
    destroy: b,
  });
}
function hy(e) {
  let { swiper: t, extendParams: n, on: r, emit: i, params: o } = e;
  (t.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
    n({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !0,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1,
      },
    });
  let a,
    l,
    s = o && o.autoplay ? o.autoplay.delay : 3e3,
    u = o && o.autoplay ? o.autoplay.delay : 3e3,
    c,
    d = new Date().getTime,
    h,
    g,
    v,
    b,
    E,
    f;
  function p(U) {
    !t ||
      t.destroyed ||
      !t.wrapperEl ||
      (U.target === t.wrapperEl &&
        (t.wrapperEl.removeEventListener("transitionend", p), S()));
  }
  const m = () => {
      if (t.destroyed || !t.autoplay.running) return;
      t.autoplay.paused ? (h = !0) : h && ((u = c), (h = !1));
      const U = t.autoplay.paused ? c : d + u - new Date().getTime();
      (t.autoplay.timeLeft = U),
        i("autoplayTimeLeft", U, U / s),
        (l = requestAnimationFrame(() => {
          m();
        }));
    },
    w = () => {
      let U;
      return (
        t.virtual && t.params.virtual.enabled
          ? (U = t.slides.filter((B) =>
              B.classList.contains("swiper-slide-active")
            )[0])
          : (U = t.slides[t.activeIndex]),
        U ? parseInt(U.getAttribute("data-swiper-autoplay"), 10) : void 0
      );
    },
    _ = (U) => {
      if (t.destroyed || !t.autoplay.running) return;
      cancelAnimationFrame(l), m();
      let D = typeof U > "u" ? t.params.autoplay.delay : U;
      (s = t.params.autoplay.delay), (u = t.params.autoplay.delay);
      const B = w();
      !Number.isNaN(B) &&
        B > 0 &&
        typeof U > "u" &&
        ((D = B), (s = B), (u = B)),
        (c = D);
      const W = t.params.speed,
        G = () => {
          !t ||
            t.destroyed ||
            (t.params.autoplay.reverseDirection
              ? !t.isBeginning || t.params.loop || t.params.rewind
                ? (t.slidePrev(W, !0, !0), i("autoplay"))
                : t.params.autoplay.stopOnLastSlide ||
                  (t.slideTo(t.slides.length - 1, W, !0, !0), i("autoplay"))
              : !t.isEnd || t.params.loop || t.params.rewind
              ? (t.slideNext(W, !0, !0), i("autoplay"))
              : t.params.autoplay.stopOnLastSlide ||
                (t.slideTo(0, W, !0, !0), i("autoplay")),
            t.params.cssMode &&
              ((d = new Date().getTime()),
              requestAnimationFrame(() => {
                _();
              })));
        };
      return (
        D > 0
          ? (clearTimeout(a),
            (a = setTimeout(() => {
              G();
            }, D)))
          : requestAnimationFrame(() => {
              G();
            }),
        D
      );
    },
    T = () => {
      (t.autoplay.running = !0), _(), i("autoplayStart");
    },
    k = () => {
      (t.autoplay.running = !1),
        clearTimeout(a),
        cancelAnimationFrame(l),
        i("autoplayStop");
    },
    N = (U, D) => {
      if (t.destroyed || !t.autoplay.running) return;
      clearTimeout(a), U || (f = !0);
      const B = () => {
        i("autoplayPause"),
          t.params.autoplay.waitForTransition
            ? t.wrapperEl.addEventListener("transitionend", p)
            : S();
      };
      if (((t.autoplay.paused = !0), D)) {
        E && (c = t.params.autoplay.delay), (E = !1), B();
        return;
      }
      (c = (c || t.params.autoplay.delay) - (new Date().getTime() - d)),
        !(t.isEnd && c < 0 && !t.params.loop) && (c < 0 && (c = 0), B());
    },
    S = () => {
      (t.isEnd && c < 0 && !t.params.loop) ||
        t.destroyed ||
        !t.autoplay.running ||
        ((d = new Date().getTime()),
        f ? ((f = !1), _(c)) : _(),
        (t.autoplay.paused = !1),
        i("autoplayResume"));
    },
    F = () => {
      if (t.destroyed || !t.autoplay.running) return;
      const U = kn();
      U.visibilityState === "hidden" && ((f = !0), N(!0)),
        U.visibilityState === "visible" && S();
    },
    j = (U) => {
      U.pointerType === "mouse" && ((f = !0), N(!0));
    },
    I = (U) => {
      U.pointerType === "mouse" && t.autoplay.paused && S();
    },
    O = () => {
      t.params.autoplay.pauseOnMouseEnter &&
        (t.el.addEventListener("pointerenter", j),
        t.el.addEventListener("pointerleave", I));
    },
    R = () => {
      t.el.removeEventListener("pointerenter", j),
        t.el.removeEventListener("pointerleave", I);
    },
    z = () => {
      kn().addEventListener("visibilitychange", F);
    },
    K = () => {
      kn().removeEventListener("visibilitychange", F);
    };
  r("init", () => {
    t.params.autoplay.enabled && (O(), z(), (d = new Date().getTime()), T());
  }),
    r("destroy", () => {
      R(), K(), t.autoplay.running && k();
    }),
    r("beforeTransitionStart", (U, D, B) => {
      t.destroyed ||
        !t.autoplay.running ||
        (B || !t.params.autoplay.disableOnInteraction ? N(!0, !0) : k());
    }),
    r("sliderFirstMove", () => {
      if (!(t.destroyed || !t.autoplay.running)) {
        if (t.params.autoplay.disableOnInteraction) {
          k();
          return;
        }
        (g = !0),
          (v = !1),
          (f = !1),
          (b = setTimeout(() => {
            (f = !0), (v = !0), N(!0);
          }, 200));
      }
    }),
    r("touchEnd", () => {
      if (!(t.destroyed || !t.autoplay.running || !g)) {
        if (
          (clearTimeout(b),
          clearTimeout(a),
          t.params.autoplay.disableOnInteraction)
        ) {
          (v = !1), (g = !1);
          return;
        }
        v && t.params.cssMode && S(), (v = !1), (g = !1);
      }
    }),
    r("slideChange", () => {
      t.destroyed || !t.autoplay.running || (E = !0);
    }),
    Object.assign(t.autoplay, { start: T, stop: k, pause: N, resume: S });
}
var my = {};
function Yr() {
  return (
    (Yr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Yr.apply(this, arguments)
  );
}
function gy(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Zl(e, t) {
  return (
    (Zl = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    Zl(e, t)
  );
}
function vy(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Zl(e, t);
}
function BE(e, t) {
  return e.classList
    ? !!t && e.classList.contains(t)
    : (" " + (e.className.baseVal || e.className) + " ").indexOf(
        " " + t + " "
      ) !== -1;
}
function UE(e, t) {
  e.classList
    ? e.classList.add(t)
    : BE(e, t) ||
      (typeof e.className == "string"
        ? (e.className = e.className + " " + t)
        : e.setAttribute(
            "class",
            ((e.className && e.className.baseVal) || "") + " " + t
          ));
}
function Uh(e, t) {
  return e
    .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
    .replace(/\s+/g, " ")
    .replace(/^\s*|\s*$/g, "");
}
function HE(e, t) {
  e.classList
    ? e.classList.remove(t)
    : typeof e.className == "string"
    ? (e.className = Uh(e.className, t))
    : e.setAttribute(
        "class",
        Uh((e.className && e.className.baseVal) || "", t)
      );
}
const Hh = { disabled: !1 },
  yy = J.createContext(null);
var by = function (t) {
    return t.scrollTop;
  },
  Do = "unmounted",
  Ur = "exited",
  Hr = "entering",
  Ti = "entered",
  Jc = "exiting",
  er = (function (e) {
    vy(t, e);
    function t(r, i) {
      var o;
      o = e.call(this, r, i) || this;
      var a = i,
        l = a && !a.isMounting ? r.enter : r.appear,
        s;
      return (
        (o.appearStatus = null),
        r.in
          ? l
            ? ((s = Ur), (o.appearStatus = Hr))
            : (s = Ti)
          : r.unmountOnExit || r.mountOnEnter
          ? (s = Do)
          : (s = Ur),
        (o.state = { status: s }),
        (o.nextCallback = null),
        o
      );
    }
    t.getDerivedStateFromProps = function (i, o) {
      var a = i.in;
      return a && o.status === Do ? { status: Ur } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (i) {
        var o = null;
        if (i !== this.props) {
          var a = this.state.status;
          this.props.in
            ? a !== Hr && a !== Ti && (o = Hr)
            : (a === Hr || a === Ti) && (o = Jc);
        }
        this.updateStatus(!1, o);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var i = this.props.timeout,
          o,
          a,
          l;
        return (
          (o = a = l = i),
          i != null &&
            typeof i != "number" &&
            ((o = i.exit),
            (a = i.enter),
            (l = i.appear !== void 0 ? i.appear : a)),
          { exit: o, enter: a, appear: l }
        );
      }),
      (n.updateStatus = function (i, o) {
        if ((i === void 0 && (i = !1), o !== null))
          if ((this.cancelNextCallback(), o === Hr)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var a = this.props.nodeRef
                ? this.props.nodeRef.current
                : el.findDOMNode(this);
              a && by(a);
            }
            this.performEnter(i);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === Ur &&
            this.setState({ status: Do });
      }),
      (n.performEnter = function (i) {
        var o = this,
          a = this.props.enter,
          l = this.context ? this.context.isMounting : i,
          s = this.props.nodeRef ? [l] : [el.findDOMNode(this), l],
          u = s[0],
          c = s[1],
          d = this.getTimeouts(),
          h = l ? d.appear : d.enter;
        if ((!i && !a) || Hh.disabled) {
          this.safeSetState({ status: Ti }, function () {
            o.props.onEntered(u);
          });
          return;
        }
        this.props.onEnter(u, c),
          this.safeSetState({ status: Hr }, function () {
            o.props.onEntering(u, c),
              o.onTransitionEnd(h, function () {
                o.safeSetState({ status: Ti }, function () {
                  o.props.onEntered(u, c);
                });
              });
          });
      }),
      (n.performExit = function () {
        var i = this,
          o = this.props.exit,
          a = this.getTimeouts(),
          l = this.props.nodeRef ? void 0 : el.findDOMNode(this);
        if (!o || Hh.disabled) {
          this.safeSetState({ status: Ur }, function () {
            i.props.onExited(l);
          });
          return;
        }
        this.props.onExit(l),
          this.safeSetState({ status: Jc }, function () {
            i.props.onExiting(l),
              i.onTransitionEnd(a.exit, function () {
                i.safeSetState({ status: Ur }, function () {
                  i.props.onExited(l);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (i, o) {
        (o = this.setNextCallback(o)), this.setState(i, o);
      }),
      (n.setNextCallback = function (i) {
        var o = this,
          a = !0;
        return (
          (this.nextCallback = function (l) {
            a && ((a = !1), (o.nextCallback = null), i(l));
          }),
          (this.nextCallback.cancel = function () {
            a = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (i, o) {
        this.setNextCallback(o);
        var a = this.props.nodeRef
            ? this.props.nodeRef.current
            : el.findDOMNode(this),
          l = i == null && !this.props.addEndListener;
        if (!a || l) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var s = this.props.nodeRef
              ? [this.nextCallback]
              : [a, this.nextCallback],
            u = s[0],
            c = s[1];
          this.props.addEndListener(u, c);
        }
        i != null && setTimeout(this.nextCallback, i);
      }),
      (n.render = function () {
        var i = this.state.status;
        if (i === Do) return null;
        var o = this.props,
          a = o.children;
        o.in,
          o.mountOnEnter,
          o.unmountOnExit,
          o.appear,
          o.enter,
          o.exit,
          o.timeout,
          o.addEndListener,
          o.onEnter,
          o.onEntering,
          o.onEntered,
          o.onExit,
          o.onExiting,
          o.onExited,
          o.nodeRef;
        var l = gy(o, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return J.createElement(
          yy.Provider,
          { value: null },
          typeof a == "function"
            ? a(i, l)
            : J.cloneElement(J.Children.only(a), l)
        );
      }),
      t
    );
  })(J.Component);
er.contextType = yy;
er.propTypes = {};
function _i() {}
er.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: _i,
  onEntering: _i,
  onEntered: _i,
  onExit: _i,
  onExiting: _i,
  onExited: _i,
};
er.UNMOUNTED = Do;
er.EXITED = Ur;
er.ENTERING = Hr;
er.ENTERED = Ti;
er.EXITING = Jc;
const VE = er;
var WE = function (t, n) {
    return (
      t &&
      n &&
      n.split(" ").forEach(function (r) {
        return UE(t, r);
      })
    );
  },
  Mu = function (t, n) {
    return (
      t &&
      n &&
      n.split(" ").forEach(function (r) {
        return HE(t, r);
      })
    );
  },
  gf = (function (e) {
    vy(t, e);
    function t() {
      for (var r, i = arguments.length, o = new Array(i), a = 0; a < i; a++)
        o[a] = arguments[a];
      return (
        (r = e.call.apply(e, [this].concat(o)) || this),
        (r.appliedClasses = { appear: {}, enter: {}, exit: {} }),
        (r.onEnter = function (l, s) {
          var u = r.resolveArguments(l, s),
            c = u[0],
            d = u[1];
          r.removeClasses(c, "exit"),
            r.addClass(c, d ? "appear" : "enter", "base"),
            r.props.onEnter && r.props.onEnter(l, s);
        }),
        (r.onEntering = function (l, s) {
          var u = r.resolveArguments(l, s),
            c = u[0],
            d = u[1],
            h = d ? "appear" : "enter";
          r.addClass(c, h, "active"),
            r.props.onEntering && r.props.onEntering(l, s);
        }),
        (r.onEntered = function (l, s) {
          var u = r.resolveArguments(l, s),
            c = u[0],
            d = u[1],
            h = d ? "appear" : "enter";
          r.removeClasses(c, h),
            r.addClass(c, h, "done"),
            r.props.onEntered && r.props.onEntered(l, s);
        }),
        (r.onExit = function (l) {
          var s = r.resolveArguments(l),
            u = s[0];
          r.removeClasses(u, "appear"),
            r.removeClasses(u, "enter"),
            r.addClass(u, "exit", "base"),
            r.props.onExit && r.props.onExit(l);
        }),
        (r.onExiting = function (l) {
          var s = r.resolveArguments(l),
            u = s[0];
          r.addClass(u, "exit", "active"),
            r.props.onExiting && r.props.onExiting(l);
        }),
        (r.onExited = function (l) {
          var s = r.resolveArguments(l),
            u = s[0];
          r.removeClasses(u, "exit"),
            r.addClass(u, "exit", "done"),
            r.props.onExited && r.props.onExited(l);
        }),
        (r.resolveArguments = function (l, s) {
          return r.props.nodeRef ? [r.props.nodeRef.current, l] : [l, s];
        }),
        (r.getClassNames = function (l) {
          var s = r.props.classNames,
            u = typeof s == "string",
            c = u && s ? s + "-" : "",
            d = u ? "" + c + l : s[l],
            h = u ? d + "-active" : s[l + "Active"],
            g = u ? d + "-done" : s[l + "Done"];
          return { baseClassName: d, activeClassName: h, doneClassName: g };
        }),
        r
      );
    }
    var n = t.prototype;
    return (
      (n.addClass = function (i, o, a) {
        var l = this.getClassNames(o)[a + "ClassName"],
          s = this.getClassNames("enter"),
          u = s.doneClassName;
        o === "appear" && a === "done" && u && (l += " " + u),
          a === "active" && i && by(i),
          l && ((this.appliedClasses[o][a] = l), WE(i, l));
      }),
      (n.removeClasses = function (i, o) {
        var a = this.appliedClasses[o],
          l = a.base,
          s = a.active,
          u = a.done;
        (this.appliedClasses[o] = {}),
          l && Mu(i, l),
          s && Mu(i, s),
          u && Mu(i, u);
      }),
      (n.render = function () {
        var i = this.props;
        i.classNames;
        var o = gy(i, ["classNames"]);
        return J.createElement(
          VE,
          Yr({}, o, {
            onEnter: this.onEnter,
            onEntered: this.onEntered,
            onEntering: this.onEntering,
            onExit: this.onExit,
            onExiting: this.onExiting,
            onExited: this.onExited,
          })
        );
      }),
      t
    );
  })(J.Component);
gf.defaultProps = { classNames: "" };
gf.propTypes = {};
const GE = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: gf },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  qE = Eb(GE);
Object.defineProperty(my, "__esModule", { value: !0 });
var KE = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  QE = C,
  ir = wy(QE),
  YE = qE,
  XE = wy(YE);
function wy(e) {
  return e && e.__esModule ? e : { default: e };
}
function JE(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ZE(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function e_(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var xy = (function (e) {
    e_(t, e);
    function t(n) {
      JE(this, t);
      var r = ZE(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
      return (
        (r.state = { isOpen: !1, modalVideoWidth: "100%" }),
        (r.closeModal = r.closeModal.bind(r)),
        (r.updateFocus = r.updateFocus.bind(r)),
        r.timeout,
        r
      );
    }
    return (
      KE(
        t,
        [
          {
            key: "openModal",
            value: function () {
              this.setState({ isOpen: !0 });
            },
          },
          {
            key: "closeModal",
            value: function () {
              this.setState({ isOpen: !1 }),
                typeof this.props.onClose == "function" && this.props.onClose();
            },
          },
          {
            key: "keydownHandler",
            value: function (r) {
              r.keyCode === 27 && this.closeModal();
            },
          },
          {
            key: "componentDidMount",
            value: function () {
              document.addEventListener(
                "keydown",
                this.keydownHandler.bind(this)
              ),
                window.addEventListener(
                  "resize",
                  this.resizeModalVideoWhenHeightGreaterThanWindowHeight.bind(
                    this
                  )
                ),
                this.setState({
                  modalVideoWidth: this.getWidthFulfillAspectRatio(
                    this.props.ratio,
                    window.innerHeight,
                    window.innerWidth
                  ),
                });
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              document.removeEventListener(
                "keydown",
                this.keydownHandler.bind(this)
              ),
                window.removeEventListener(
                  "resize",
                  this.resizeModalVideoWhenHeightGreaterThanWindowHeight.bind(
                    this
                  )
                );
            },
          },
          {
            key: "componentDidUpdate",
            value: function () {
              this.state.isOpen && this.modal && this.modal.focus();
            },
          },
          {
            key: "updateFocus",
            value: function (r) {
              r.keyCode === 9 &&
                (r.preventDefault(),
                r.stopPropagation(),
                this.modal === document.activeElement
                  ? this.modalbtn.focus()
                  : this.modal.focus());
            },
          },
          {
            key: "resizeModalVideoWhenHeightGreaterThanWindowHeight",
            value: function () {
              var r = this;
              clearTimeout(this.timeout),
                (this.timeout = setTimeout(function () {
                  var i = r.getWidthFulfillAspectRatio(
                    r.props.ratio,
                    window.innerHeight,
                    window.innerWidth
                  );
                  r.state.modalVideoWidth != i &&
                    r.setState({ modalVideoWidth: i });
                }, 10));
            },
          },
          {
            key: "getQueryString",
            value: function (r) {
              var i = "";
              for (var o in r)
                r.hasOwnProperty(o) &&
                  r[o] !== null &&
                  (i += o + "=" + r[o] + "&");
              return i.substr(0, i.length - 1);
            },
          },
          {
            key: "getYoutubeUrl",
            value: function (r, i) {
              var o = this.getQueryString(r);
              return "//www.youtube.com/embed/" + i + "?" + o;
            },
          },
          {
            key: "getVimeoUrl",
            value: function (r, i) {
              var o = this.getQueryString(r);
              return "//player.vimeo.com/video/" + i + "?" + o;
            },
          },
          {
            key: "getYoukuUrl",
            value: function (r, i) {
              var o = this.getQueryString(r);
              return "//player.youku.com/embed/" + i + "?" + o;
            },
          },
          {
            key: "getVideoUrl",
            value: function (r, i) {
              if (r.channel === "youtube")
                return this.getYoutubeUrl(r.youtube, i);
              if (r.channel === "vimeo") return this.getVimeoUrl(r.vimeo, i);
              if (r.channel === "youku") return this.getYoukuUrl(r.youku, i);
              if (r.channel === "custom") return r.url;
            },
          },
          {
            key: "getPadding",
            value: function (r) {
              var i = r.split(":"),
                o = Number(i[0]),
                a = Number(i[1]),
                l = (a * 100) / o;
              return l + "%";
            },
          },
          {
            key: "getWidthFulfillAspectRatio",
            value: function (r, i, o) {
              var a = r.split(":"),
                l = Number(a[0]),
                s = Number(a[1]),
                u = o * (s / l);
              return i < u ? Math.floor((l / s) * i) : "100%";
            },
          },
          {
            key: "render",
            value: function () {
              var r = this,
                i = { width: this.state.modalVideoWidth },
                o = { paddingBottom: this.getPadding(this.props.ratio) };
              return ir.default.createElement(
                XE.default,
                {
                  classNames: this.props.classNames.modalVideoEffect,
                  timeout: this.props.animationSpeed,
                },
                function () {
                  return r.state.isOpen
                    ? ir.default.createElement(
                        "div",
                        {
                          className: r.props.classNames.modalVideo,
                          tabIndex: "-1",
                          role: "dialog",
                          "aria-label": r.props.aria.openMessage,
                          onClick: r.closeModal,
                          ref: function (l) {
                            r.modal = l;
                          },
                          onKeyDown: r.updateFocus,
                        },
                        ir.default.createElement(
                          "div",
                          { className: r.props.classNames.modalVideoBody },
                          ir.default.createElement(
                            "div",
                            {
                              className: r.props.classNames.modalVideoInner,
                              style: i,
                            },
                            ir.default.createElement(
                              "div",
                              {
                                className:
                                  r.props.classNames.modalVideoIframeWrap,
                                style: o,
                              },
                              ir.default.createElement("button", {
                                className:
                                  r.props.classNames.modalVideoCloseBtn,
                                "aria-label": r.props.aria.dismissBtnMessage,
                                ref: function (l) {
                                  r.modalbtn = l;
                                },
                                onKeyDown: r.updateFocus,
                              }),
                              r.props.children ||
                                ir.default.createElement("iframe", {
                                  width: "460",
                                  height: "230",
                                  src: r.getVideoUrl(r.props, r.props.videoId),
                                  frameBorder: "0",
                                  allow:
                                    "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                                  allowFullScreen: r.props.allowFullScreen,
                                  tabIndex: "-1",
                                })
                            )
                          )
                        )
                      )
                    : null;
                }
              );
            },
          },
        ],
        [
          {
            key: "getDerivedStateFromProps",
            value: function (r) {
              return { isOpen: r.isOpen };
            },
          },
        ]
      ),
      t
    );
  })(ir.default.Component),
  t_ = (my.default = xy);
xy.defaultProps = {
  channel: "youtube",
  isOpen: !1,
  youtube: {
    autoplay: 1,
    cc_load_policy: 1,
    color: null,
    controls: 1,
    disablekb: 0,
    enablejsapi: 0,
    end: null,
    fs: 1,
    h1: null,
    iv_load_policy: 1,
    list: null,
    listType: null,
    loop: 0,
    modestbranding: null,
    origin: null,
    playlist: null,
    playsinline: null,
    rel: 0,
    showinfo: 1,
    start: 0,
    wmode: "transparent",
    theme: "dark",
    mute: 0,
  },
  ratio: "16:9",
  vimeo: {
    api: !1,
    autopause: !0,
    autoplay: !0,
    byline: !0,
    callback: null,
    color: null,
    height: null,
    loop: !1,
    maxheight: null,
    maxwidth: null,
    player_id: null,
    portrait: !0,
    title: !0,
    width: null,
    xhtml: !1,
  },
  youku: { autoplay: 1, show_related: 0 },
  allowFullScreen: !0,
  animationSpeed: 300,
  classNames: {
    modalVideoEffect: "modal-video-effect",
    modalVideo: "modal-video",
    modalVideoClose: "modal-video-close",
    modalVideoBody: "modal-video-body",
    modalVideoInner: "modal-video-inner",
    modalVideoIframeWrap: "modal-video-movie-wrap",
    modalVideoCloseBtn: "modal-video-close-btn",
  },
  aria: {
    openMessage: "You just opened the modal video",
    dismissBtnMessage: "Close the modal by clicking here",
  },
};
function vf({ title: e, classes: t }) {
  const n = ce(
    "text-poppins bl-text-white bl-text-[32px] md:bl-text-[64px] bl-leading-[1.2] bl-mb-[40px] bl-font-bold text-shadow",
    t
  );
  return y.jsx("h2", { className: n, dangerouslySetInnerHTML: { __html: e } });
}
function n_({ videoID: e, thumbnail: t, onclick: n, addClass: r }) {
  C.useState(!1);
  const i = ce(
    "bl-cursor-pointer bl-max-w-full bl-aspect-[3/4] bl-object-cover",
    r
  );
  return y.jsx(y.Fragment, {
    children: y.jsx("img", {
      src: t,
      alt: "Video Thumbnail",
      className: i,
      onClick: n,
    }),
  });
}
function r_() {
  const [e, t] = C.useState(!1),
    [n, r] = C.useState("");
  function i(l) {
    r(l), t(!0);
  }
  const o = "https://www.bca.co.id/-/media/Files/2023/bangga-lokal/web/",
    a = [
      { id: "nm83mYNZupE", thumbnanai: `${o}/videos/video-4.jpg` },
      { id: "LJszEg26fJ0", thumbnanai: `${o}/videos/video-5.jpg` },
      { id: "6HqwhEt9QVY", thumbnanai: `${o}/videos/video-3.jpg` },
    ];
  return y.jsxs(y.Fragment, {
    children: [
      y.jsx(t_, {
        channel: "youtube",
        isOpen: e,
        videoId: n,
        onClose: () => t(!1),
      }),
      y.jsxs("section", {
        id: "stories",
        className: "bl-relative bl-py-[100px]",
        children: [
          y.jsx("div", {
            className: ce(
              d1.bg__yellow,
              "bl-absolute bl-top-0 bl-z-0 bl-left-1/2 -bl-translate-x-1/2 bl-aspect-[1886/1056] bl-w-[130vw] bl-rounded-[100%]"
            ),
          }),
          y.jsxs("div", {
            className: "bl-container bl-relative bl-z-10",
            children: [
              y.jsx(vf, {
                title: "Cerita Inspiratif<br/>dari sahabat lokal",
                classes: "bl-text-center",
              }),
              y.jsx(hf, {
                spaceBetween: -40,
                slidesPerView: 1,
                centeredSlides: !0,
                className: "swiper__story",
                breakpoints: { 768: { slidesPerView: 3 } },
                autoplay: { delay: 3e3, disableOnInteraction: !1 },
                modules: [hy],
                children: a.map((l) =>
                  y.jsx(
                    mf,
                    {
                      children: y.jsx(n_, {
                        videoID: l.id,
                        thumbnail: l.thumbnanai,
                        onclick: () => i(l.id),
                      }),
                    },
                    l.id
                  )
                ),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var Sy = {};
function i_(e) {
  if (!e || typeof window > "u") return;
  const t = document.createElement("style");
  return (
    t.setAttribute("type", "text/css"),
    (t.innerHTML = e),
    document.head.appendChild(t),
    e
  );
}
Object.defineProperty(Sy, "__esModule", { value: !0 });
var Xe = C;
function o_(e) {
  return e && typeof e == "object" && "default" in e ? e : { default: e };
}
var or = o_(Xe);
i_(`.marquee-container {
  overflow-x: hidden !important;
  display: flex !important;
  flex-direction: row !important;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.overlay::before, .overlay::after {
  background: linear-gradient(to right, var(--gradient-color));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
}
.overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.overlay::before {
  left: 0;
  top: 0;
}

.marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
}

.child {
  transform: var(--transform);
}`);
const a_ = Xe.forwardRef(function (
  {
    style: t = {},
    className: n = "",
    autoFill: r = !1,
    play: i = !0,
    pauseOnHover: o = !1,
    pauseOnClick: a = !1,
    direction: l = "left",
    speed: s = 50,
    delay: u = 0,
    loop: c = 0,
    gradient: d = !1,
    gradientColor: h = [255, 255, 255],
    gradientWidth: g = 200,
    onFinish: v,
    onCycleComplete: b,
    children: E,
  },
  f
) {
  const [p, m] = Xe.useState(0),
    [w, _] = Xe.useState(0),
    [T, k] = Xe.useState(1),
    [N, S] = Xe.useState(!1),
    F = Xe.useRef(null),
    j = f || F,
    I = Xe.useRef(null),
    O = Xe.useCallback(() => {
      if (I.current && j.current) {
        const G = j.current.getBoundingClientRect(),
          te = I.current.getBoundingClientRect();
        let de = G.width,
          se = te.width;
        (l === "up" || l === "down") && ((de = G.height), (se = te.height)),
          k(r && de && se && se < de ? Math.ceil(de / se) : 1),
          m(de),
          _(se);
      }
    }, [r, j, l]);
  Xe.useEffect(() => {
    if (N && (O(), I.current && j.current)) {
      const G = new ResizeObserver(() => O());
      return (
        G.observe(j.current),
        G.observe(I.current),
        () => {
          G && G.disconnect();
        }
      );
    }
  }, [O, j, N]),
    Xe.useEffect(() => {
      O();
    }, [O, E]),
    Xe.useEffect(() => {
      S(!0);
    }, []);
  const R = Xe.useMemo(
      () => (r ? (w * T) / s : w < p ? p / s : w / s),
      [r, p, w, T, s]
    ),
    z = `rgba(${h[0]}, ${h[1]}, ${h[2]}`,
    K = Xe.useMemo(
      () =>
        Object.assign(Object.assign({}, t), {
          ["--pause-on-hover"]: !i || o ? "paused" : "running",
          ["--pause-on-click"]: !i || (o && !a) || a ? "paused" : "running",
          ["--width"]: l === "up" || l === "down" ? "100vh" : "100%",
          ["--transform"]:
            l === "up"
              ? "rotate(-90deg)"
              : l === "down"
              ? "rotate(90deg)"
              : "none",
        }),
      [t, i, o, a, l]
    ),
    U = Xe.useMemo(
      () => ({
        ["--gradient-color"]: `${z}, 1), ${z}, 0)`,
        ["--gradient-width"]: typeof g == "number" ? `${g}px` : g,
      }),
      [z, g]
    ),
    D = Xe.useMemo(
      () => ({
        ["--play"]: i ? "running" : "paused",
        ["--direction"]: l === "left" ? "normal" : "reverse",
        ["--duration"]: `${R}s`,
        ["--delay"]: `${u}s`,
        ["--iteration-count"]: c ? `${c}` : "infinite",
        ["--min-width"]: r ? "auto" : "100%",
      }),
      [i, l, R, u, c, r]
    ),
    B = Xe.useMemo(
      () => ({
        ["--transform"]:
          l === "up"
            ? "rotate(90deg)"
            : l === "down"
            ? "rotate(-90deg)"
            : "none",
      }),
      [l]
    ),
    W = Xe.useCallback(
      (G) =>
        [...Array(Number.isFinite(G) && G >= 0 ? G : 0)].map((te, de) =>
          or.default.createElement(
            Xe.Fragment,
            { key: de },
            Xe.Children.map(E, (se) =>
              or.default.createElement(
                "div",
                { style: B, className: "child" },
                se
              )
            )
          )
        ),
      [B, E]
    );
  return N
    ? or.default.createElement(
        "div",
        { ref: j, style: K, className: "marquee-container " + n },
        d &&
          or.default.createElement("div", { style: U, className: "overlay" }),
        or.default.createElement(
          "div",
          {
            className: "marquee",
            style: D,
            onAnimationIteration: b,
            onAnimationEnd: v,
          },
          or.default.createElement(
            "div",
            { className: "initial-child-container", ref: I },
            Xe.Children.map(E, (G) =>
              or.default.createElement(
                "div",
                { style: B, className: "child" },
                G
              )
            )
          ),
          W(T - 1)
        ),
        or.default.createElement(
          "div",
          { className: "marquee", style: D },
          W(T)
        )
      )
    : null;
});
var Ey = (Sy.default = a_);
function l_() {
  const e = ({ title: r, description: i, image: o }) =>
      y.jsxs("div", {
        className:
          "bl-bg-white bl-rounded-[20px] bl-relative bl-px-[15px] bl-w-[311px] bl-py-[60px]",
        children: [
          y.jsx("figure", {
            className:
              "bl-absolute -bl-top-[53px] bl-left-[20px] bl-shadow-2xl bl-bg-white bl-rounded-[20px] bl-p-[10px]",
            children: y.jsx("img", {
              src: o,
              alt: "testimoni",
              className: "bl-w-[90px] bl-h-[90px] bl-object-cover",
            }),
          }),
          y.jsx("h4", {
            className:
              "text-poppins bl-text-[#442052] bl-mb-[10px] bl-text-[32px] bl-font-bold",
            children: r,
          }),
          y.jsx("p", { children: i }),
        ],
      }),
    t = "https://www.bca.co.id/-/media/Files/2023/bangga-lokal/web/",
    n = [
      {
        title: "Aksata Coffee & Roastery",
        image: `${t}/testimonial/Aksata.png`,
        description:
          "Peran BCA disini sangat bagus karena telah membantu dan menjadi gerbang untuk membawa kita keluar terutama untuk kopi lokal, ini bagus banget, karena lebih bisa memperkenalkan kopi lokal untuk keluar.",
      },
      {
        title: "Bagasi",
        image: `${t}/testimonial/bagasi.png`,
        description:
          "PeranBCA Bangga Lokal menjadi wadah untuk brand kreasi anak negeri seperti Bagasi. Memberi semangat untuk Bagasi terus berinovasi dan merasa sangat diapresiasi. Berbagai peluang terbuka ketika Bagasi menjadi salah satu brand di BCA Bangga Lokal sehingga memotivasi Bagasi untuk terus berkembang dan berkreasi #SahabatSegalaDestinasi.",
      },
      {
        title: "Grebe",
        image: `${t}/testimonial/grebe.png`,
        description:
          "Program Bangga Lokal menurut saya adalah program yang sangat bisa membantu brand-brand lokal terutama skala umkm, karena di dalam program Bangga Lokal banyak sekali memberikan benefit untuk para umkm sehingga bisa membantu mereka naik kelas dan lebih dikenal di seluruh Indonesia.",
      },
      {
        title: "HERBALDOC",
        image: `${t}/testimonial/herbaldoc.png`,
        description:
          "Thank you Bangga Lokal sudah support dan memberi wadah pada produk-produk lokal terbaik dalam berkolaborasi untuk lebih di kenal dan membanggakan produk lokal Indonesia.",
      },
      {
        title: "LOCALSTRUNK",
        image: `${t}/testimonial/localstrunk.png`,
        description:
          "BCA Bangga Lokal membantu kami dalam masa pandemi ini dengan memberikan kelas - kelas gratis dalam pengelolaan bisnis UMKM. Adanya program exclusive discount dengan BCA Bangga Lokal juga turut memudahkan kami dalam penjualan di outlet kami",
      },
      {
        title: "Maximall Footwear",
        image: `${t}/testimonial/maximall.png`,
        description:
          "Thank you Bangga Lokal udah kasih kesempatan ini, dan termasuk juga BCA, untuk gasi wadah untuk kita untuk berkarya dan membuat suatu hal yang beda dari Indonesia",
      },
      {
        title: "Paperie Lab",
        image: `${t}/testimonial/paperielab.png`,
        description:
          "Terimakasih banyak BCA Bangga Lokal sudah memberikan wadah bagi para UMKM untuk terus berkembang. Sejak pertama kali diadakan pada tahun 2020 saat pandemi, Paperie Lab banyak di support dengan pelatihan dan bekal mulai dari webinar, coaching clinic, di bantu dalam hal marketing dan branding hingga ikut dalam berbagai offline event yang diadakan oleh BCA Bangga Lokal. Semoga BCA bisa terus memberikan kontribusi bagi UMKM di seluruh Indonesia",
      },
      {
        title: "Revolt Industry",
        image: `${t}/testimonial/revolt.png`,
        description:
          "Yang betul terasa adalah credibility, karena kita bekerja sama dengan satu perbankan yang memang punya kredibilitas yang sangat baik",
      },
      {
        title: "SASC",
        image: `${t}/testimonial/sasc.png`,
        description:
          "YaBCA Bangga Lokal telah mendukung penuh kegiatan dan kemajuan dari industri lokal di tengah persaingan yang ketat. SASC sebagai salah satu pioneer brand kecantikan Indonesia, sangat terbantu dengan kegiatan dan segala bentuk dukungan yang telah diberikan oleh BCA Bangga Lokal. Semoga produk lokal dapat semakin berkembang, dan menaikan standarnya setara dengan produk internasional",
      },
      {
        title: "Specialitea",
        image: `${t}/testimonial/specialitea.png`,
        description:
          "Semua materi yang diberikan sangat aplikatif dan berguna bagi perkembangan usaha kami",
      },
    ];
  return y.jsxs("section", {
    id: "testimoni",
    children: [
      y.jsx(vf, {
        title: "Kata mereka<br/>tentang Bangga Lokal",
        classes: "bl-text-center bl-mb-[20px]",
      }),
      y.jsx(Ey, {
        pauseOnHover: !0,
        children: y.jsx("div", {
          className:
            "bl-flex bl-items-start bl-space-x-[15px] bl-py-[60px] bl-me-[15px]",
          children: n.map((r, i) =>
            y.jsx(
              e,
              { title: r.title, description: r.description, image: r.image },
              i
            )
          ),
        }),
      }),
    ],
  });
}
const s_ = "_card__komunitas_1xmyu_1",
  u_ = "_card__komunitas__yellow_1xmyu_8",
  c_ = "_card__komunitas__red_1xmyu_12",
  d_ = "_card__komunitas__white_1xmyu_17",
  f_ = "_card__komunitas__blue_1xmyu_21",
  p_ = "_card__category_1xmyu_26",
  h_ = "_card__category__yellow_1xmyu_30",
  m_ = "_card__category__red_1xmyu_34",
  g_ = "_card__category__white_1xmyu_38",
  v_ = "_card__category__blue_1xmyu_42",
  y_ = "_card__category__blibli_1xmyu_46",
  b_ = "_card__category__paserba_1xmyu_50",
  Yt = {
    card__komunitas: s_,
    card__komunitas__yellow: u_,
    card__komunitas__red: c_,
    card__komunitas__white: d_,
    card__komunitas__blue: f_,
    card__category: p_,
    card__category__yellow: h_,
    card__category__red: m_,
    card__category__white: g_,
    card__category__blue: v_,
    card__category__blibli: y_,
    card__category__paserba: b_,
  };
function ju({
  image: e,
  title: t,
  description: n,
  link: r,
  color: i,
  externalLink: o,
  btnText: a,
}) {
  const l = ce("bl-flex bl-flex-col bl-justify-between", Yt.card__komunitas, {
    [Yt.card__komunitas__yellow]: i === "yellow",
    [Yt.card__komunitas__red]: i === "red",
    [Yt.card__komunitas__white]: i === "white",
    [Yt.card__komunitas__blue]: i === "blue",
  });
  return y.jsx("div", {
    className: ce("bl-rounded-[20px] bl-isolate"),
    children: y.jsxs("div", {
      className: l,
      children: [
        y.jsxs("div", {
          className: "bl-mb-[15px]",
          children: [
            y.jsx("figure", {
              className: "bl-mb-[20px]",
              children: y.jsx("img", {
                src: e,
                alt: "title",
                className:
                  "bl-rounded-[20px] bl-w-full bl-aspect-[288/240] bl-object-cover",
              }),
            }),
            y.jsx("h3", {
              className:
                "bl-mb-3 bl-text-[28px] bl-leading-[1.2] text-poppins bl-font-bold",
              children: t,
            }),
            y.jsx("p", { className: "bl-mb-3 bl-text-[18px]", children: n }),
          ],
        }),
        y.jsx(ao, {
          title: a || "Lihat lebih lanjut",
          link: r,
          externalLink: o,
        }),
      ],
    }),
  });
}
function _y() {
  const e =
    "https://www.bca.co.id/-/media/Files/2023/bangga-lokal/web//aktivitas";
  return y.jsx("section", {
    id: "section-komunitas",
    children: y.jsxs("div", {
      className: "bl-container",
      children: [
        y.jsxs("div", {
          className: "bl-max-w-[900px]",
          children: [
            y.jsx("h2", {
              className:
                "bl-white bl-text-[32px] md:bl-text-[64px] text-poppins bl-font-bold bl-text-white bl-leading-[1.2] bl-mb-[15px] text-shadow",
              children: "Mau bergabung dengan komunitas Bangga Lokal?",
            }),
            y.jsx("h3", {
              className:
                "bl-text-[#6F2989] bl-text-[20px]  md:bl-text-[32px] text-poppins bl-font-[500] bl-drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] bl-mb-[30px]",
              children: "Cek aktivitas yang cocok dengan kebutuhan brandmu!",
            }),
          ],
        }),
        y.jsxs("div", {
          className:
            "bl-grid grid-cols-1 sm:bl-grid-cols-2 xl:bl-grid-cols-4 bl-gap-5",
          children: [
            y.jsx(ju, {
              title: "Event & Program Promosi",
              image: `${e}/aktivitas--event.jpg`,
              link: "/promo",
              color: "yellow",
              description:
                "BCA Bangga Lokal hadir di berbagai event online & offline dengan penawaran-penawaran spesial yang dapat dinikmati oleh seluruh masyarakat Indonesia.",
            }),
            y.jsx(ju, {
              title: "Pembinaan",
              image: `${e}/aktivitas--pembinaan.jpg`,
              externalLink: "https://community.inspigo.id/banggalokal",
              color: "red",
              btnText: "Ikut Bootcamp",
              description:
                "Gabung dengan BCA Bangga Lokal dan nikmati program pembinaan spesial untuk membantu pengembangan bisnis merchant, mulai dari bootcamp hingga business matching.",
            }),
            y.jsx(ju, {
              title: "Solusi Pembayaran BCA",
              image: `${e}/Solusi-Pembayaran---APOS-BCA.jpg`,
              externalLink:
                "https://www.bca.co.id/id/bisnis/produk/penerimaan-bisnis",
              color: "white",
              description:
                "Bergabung dengan BCA Bangga Lokal dan nikmati kemudahan dan kelebihan ekosistem pembayaran BCA, mulai dari aplikasi merchant BCA, EDC BCA, hingga QRIS BCA.",
            }),
          ],
        }),
      ],
    }),
  });
}
function w_() {
  return (
    C.useEffect(() => {
      ct({ breadcrumb_detail: "Merchant Page" });
      const e = "bg__main-dark";
      return (
        document.body.classList.add(e),
        () => {
          document.body.classList.remove(e);
        }
      );
    }, []),
    y.jsxs("div", {
      className: "bl-w-full bl-overflow-hidden",
      children: [
        y.jsx("section", {
          className:
            "bl-container bl-max-w-[900px] bl-mx-auto bl-text-center bl-py-[50px] lg:bl-min-h-screen bl-flex bl-items-center",
          children: y.jsxs("div", {
            className: "text-poppins",
            children: [
              y.jsx("h2", {
                className:
                  " bl-text-bold bl-text-[32px] lg:bl-text-[64px] bl-leading-[1.2] bl-text-white text-poppins bl-font-bold bl-mb-[40px]",
                children: "Tumbuh Bersama Komunitas Bangga Lokal",
              }),
              y.jsxs("h3", {
                className:
                  "bl-text-[#FFD335] bl-font-[500] bl-text-[20px] lg:bl-text-[40px] bl-leading-[1.2]",
                children: [
                  "Bangga Lokal turut mendukung anak bangsa yang memiliki semangat memajukan industri lokal & ekonomi.",
                  " ",
                ],
              }),
            ],
          }),
        }),
        y.jsxs("section", {
          id: "total-merchant",
          className:
            "bl-container bl-relative bl-flex bl-py-[50px] lg:bl-min-h-[80vh]",
          children: [
            y.jsx("figure", {
              className:
                "lg:-bl-ml-[150px] lg:bl-mr-[80px] bl-min-w-[200px] -bl-ml-[100px] lg:bl-min-w-[400px] bl-max-w-[300px] lg:bl-max-w-[800px]",
              children: y.jsx("img", {
                src: "https://www.bca.co.id/-/media/Files/2023/bangga-lokal/web/images/merchant--total.png",
                alt: "total merchant",
                className: "bl-w-full",
              }),
            }),
            y.jsxs("div", {
              className: "bl-w-[70%] lg:bl-w-auto",
              children: [
                y.jsx(Dh, { title: "5400+" }),
                y.jsx("h3", {
                  className:
                    "text-poppins bl-text-[20px] md:bl-text-[24px] lg:bl-text-[48px] bl-font-bold bl-text-white bl-leading-[1.2]",
                  children: "Total merchant yang sudah bergabung",
                }),
              ],
            }),
          ],
        }),
        y.jsxs("section", {
          id: "total-komunitas",
          className:
            "bl-container lg:bl-max-w-[1000px] bl-relative bl-flex  bl-py-[50px] lg:bl-min-h-[80vh]",
          children: [
            y.jsxs("div", {
              className:
                "bl-mb-[40px] bl-pl-[30px] bl-min-w-[200px] lg:bl-min-w-[400px] lg:bl-mr-[20px]",
              children: [
                y.jsx(Dh, { title: "20+" }),
                y.jsxs("h3", {
                  className:
                    "text-poppins bl-text-[20px] md:bl-text-[24px] lg:bl-text-[48px] bl-font-bold bl-text-white bl-leading-[1.2]",
                  children: ["Event dalam", y.jsx("br", {}), "waktu 2 tahun"],
                }),
              ],
            }),
            y.jsx("figure", {
              className:
                "-bl-ml-[80px] lg:-bl-mr-[150px] bl-w-full bl-min-w-[350px] lg:bl-min-w-[400px] bl-max-w-[800px] bl-grow",
              children: y.jsx("img", {
                src: "https://www.bca.co.id/-/media/Files/2023/bangga-lokal/web/images/merchant--event.png",
                alt: "total merchant",
                className: "bl-w-full",
              }),
            }),
          ],
        }),
        y.jsx(r_, {}),
        y.jsxs("section", {
          id: "keuntungan",
          className: "bl-container bl-relative",
          children: [
            y.jsx(vf, {
              title: "Keuntungan menjadi<br/>bagian dari Bangga Lokal",
            }),
            y.jsxs("div", {
              className:
                "bl-hidden md:bl-grid bl-grid-rows-3 bl-grid-flow-col bl-gap-[16px]",
              children: [
                y.jsx("div", {
                  className: "bl-row-span-3",
                  children: y.jsx("img", {
                    src: "https://www.bca.co.id/-/media/Files/2023/bangga-lokal/web/images/keuntungan--komunitas.png",
                    alt: "Keuntungan Komunitas",
                  }),
                }),
                y.jsx("div", {
                  className: "bl-col-span-2",
                  children: y.jsx("img", {
                    src: "https://www.bca.co.id/-/media/Files/2023/bangga-lokal/web/images/keuntungan--pembayaran.png",
                    alt: "Keuntungan Komunitas",
                  }),
                }),
                y.jsx("div", {
                  className: "bl-row-span-2 bl-col-span-2",
                  children: y.jsx("img", {
                    src: "https://www.bca.co.id/-/media/Files/2023/bangga-lokal/web/images/keuntungan--promosi.png",
                    alt: "Keuntungan Komunitas",
                  }),
                }),
              ],
            }),
            y.jsxs("div", {
              className: "bl-grid bl-gap-[15px] md:bl-hidden bl-grid-cols-1",
              children: [
                y.jsx("div", {
                  children: y.jsx("img", {
                    src: "https://www.bca.co.id/-/media/Files/2023/bangga-lokal/web/images/keuntungan--komunitas-mobile.png",
                    alt: "Keuntungan Komunitas",
                    className: "bl-w-full",
                  }),
                }),
                y.jsx("div", {
                  children: y.jsx("img", {
                    src: "https://www.bca.co.id/-/media/Files/2023/bangga-lokal/web/images/keuntungan--pembayaran-mobile.png",
                    alt: "Keuntungan Komunitas",
                    className: "bl-w-full",
                  }),
                }),
                y.jsx("div", {
                  children: y.jsx("img", {
                    src: "https://www.bca.co.id/-/media/Files/2023/bangga-lokal/web/images/keuntungan--promosi-mobile.png",
                    alt: "Keuntungan Komunitas",
                    className: "bl-w-full",
                  }),
                }),
              ],
            }),
          ],
        }),
        y.jsx(l_, {}),
        y.jsx(_y, {}),
      ],
    })
  );
}
function Cy(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: x_ } = Object.prototype,
  { getPrototypeOf: yf } = Object,
  ks = ((e) => (t) => {
    const n = x_.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Pn = (e) => ((e = e.toLowerCase()), (t) => ks(t) === e),
  Ts = (e) => (t) => typeof t === e,
  { isArray: ho } = Array,
  ma = Ts("undefined");
function S_(e) {
  return (
    e !== null &&
    !ma(e) &&
    e.constructor !== null &&
    !ma(e.constructor) &&
    tn(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const ky = Pn("ArrayBuffer");
function E_(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && ky(e.buffer)),
    t
  );
}
const __ = Ts("string"),
  tn = Ts("function"),
  Ty = Ts("number"),
  Ps = (e) => e !== null && typeof e == "object",
  C_ = (e) => e === !0 || e === !1,
  yl = (e) => {
    if (ks(e) !== "object") return !1;
    const t = yf(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  k_ = Pn("Date"),
  T_ = Pn("File"),
  P_ = Pn("Blob"),
  O_ = Pn("FileList"),
  N_ = (e) => Ps(e) && tn(e.pipe),
  R_ = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (tn(e.append) &&
          ((t = ks(e)) === "formdata" ||
            (t === "object" &&
              tn(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  L_ = Pn("URLSearchParams"),
  M_ = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ta(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, i;
  if ((typeof e != "object" && (e = [e]), ho(e)))
    for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      a = o.length;
    let l;
    for (r = 0; r < a; r++) (l = o[r]), t.call(null, e[l], l, e);
  }
}
function Py(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    i;
  for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
  return null;
}
const Oy = (() =>
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global)(),
  Ny = (e) => !ma(e) && e !== Oy;
function Zc() {
  const { caseless: e } = (Ny(this) && this) || {},
    t = {},
    n = (r, i) => {
      const o = (e && Py(t, i)) || i;
      yl(t[o]) && yl(r)
        ? (t[o] = Zc(t[o], r))
        : yl(r)
        ? (t[o] = Zc({}, r))
        : ho(r)
        ? (t[o] = r.slice())
        : (t[o] = r);
    };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && Ta(arguments[r], n);
  return t;
}
const j_ = (e, t, n, { allOwnKeys: r } = {}) => (
    Ta(
      t,
      (i, o) => {
        n && tn(i) ? (e[o] = Cy(i, n)) : (e[o] = i);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  A_ = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  D_ = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  I_ = (e, t, n, r) => {
    let i, o, a;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
        (a = i[o]), (!r || r(a, e, t)) && !l[a] && ((t[a] = e[a]), (l[a] = !0));
      e = n !== !1 && yf(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  F_ = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  $_ = (e) => {
    if (!e) return null;
    if (ho(e)) return e;
    let t = e.length;
    if (!Ty(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  z_ = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && yf(Uint8Array)),
  B_ = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let i;
    for (; (i = r.next()) && !i.done; ) {
      const o = i.value;
      t.call(e, o[0], o[1]);
    }
  },
  U_ = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  H_ = Pn("HTMLFormElement"),
  V_ = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
      return r.toUpperCase() + i;
    }),
  Vh = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  W_ = Pn("RegExp"),
  Ry = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Ta(n, (i, o) => {
      t(i, o, e) !== !1 && (r[o] = i);
    }),
      Object.defineProperties(e, r);
  },
  G_ = (e) => {
    Ry(e, (t, n) => {
      if (tn(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (tn(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  q_ = (e, t) => {
    const n = {},
      r = (i) => {
        i.forEach((o) => {
          n[o] = !0;
        });
      };
    return ho(e) ? r(e) : r(String(e).split(t)), n;
  },
  K_ = () => {},
  Q_ = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  Au = "abcdefghijklmnopqrstuvwxyz",
  Wh = "0123456789",
  Ly = { DIGIT: Wh, ALPHA: Au, ALPHA_DIGIT: Au + Au.toUpperCase() + Wh },
  Y_ = (e = 16, t = Ly.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function X_(e) {
  return !!(
    e &&
    tn(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const J_ = (e) => {
    const t = new Array(10),
      n = (r, i) => {
        if (Ps(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[i] = r;
            const o = ho(r) ? [] : {};
            return (
              Ta(r, (a, l) => {
                const s = n(a, i + 1);
                !ma(s) && (o[l] = s);
              }),
              (t[i] = void 0),
              o
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  Z_ = Pn("AsyncFunction"),
  eC = (e) => e && (Ps(e) || tn(e)) && tn(e.then) && tn(e.catch),
  V = {
    isArray: ho,
    isArrayBuffer: ky,
    isBuffer: S_,
    isFormData: R_,
    isArrayBufferView: E_,
    isString: __,
    isNumber: Ty,
    isBoolean: C_,
    isObject: Ps,
    isPlainObject: yl,
    isUndefined: ma,
    isDate: k_,
    isFile: T_,
    isBlob: P_,
    isRegExp: W_,
    isFunction: tn,
    isStream: N_,
    isURLSearchParams: L_,
    isTypedArray: z_,
    isFileList: O_,
    forEach: Ta,
    merge: Zc,
    extend: j_,
    trim: M_,
    stripBOM: A_,
    inherits: D_,
    toFlatObject: I_,
    kindOf: ks,
    kindOfTest: Pn,
    endsWith: F_,
    toArray: $_,
    forEachEntry: B_,
    matchAll: U_,
    isHTMLForm: H_,
    hasOwnProperty: Vh,
    hasOwnProp: Vh,
    reduceDescriptors: Ry,
    freezeMethods: G_,
    toObjectSet: q_,
    toCamelCase: V_,
    noop: K_,
    toFiniteNumber: Q_,
    findKey: Py,
    global: Oy,
    isContextDefined: Ny,
    ALPHABET: Ly,
    generateString: Y_,
    isSpecCompliantForm: X_,
    toJSONObject: J_,
    isAsyncFn: Z_,
    isThenable: eC,
  };
function Ee(e, t, n, r, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && (this.response = i);
}
V.inherits(Ee, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: V.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const My = Ee.prototype,
  jy = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  jy[e] = { value: e };
});
Object.defineProperties(Ee, jy);
Object.defineProperty(My, "isAxiosError", { value: !0 });
Ee.from = (e, t, n, r, i, o) => {
  const a = Object.create(My);
  return (
    V.toFlatObject(
      e,
      a,
      function (s) {
        return s !== Error.prototype;
      },
      (l) => l !== "isAxiosError"
    ),
    Ee.call(a, e.message, t, n, r, i),
    (a.cause = e),
    (a.name = e.name),
    o && Object.assign(a, o),
    a
  );
};
const tC = null;
function ed(e) {
  return V.isPlainObject(e) || V.isArray(e);
}
function Ay(e) {
  return V.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Gh(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (i, o) {
          return (i = Ay(i)), !n && o ? "[" + i + "]" : i;
        })
        .join(n ? "." : "")
    : t;
}
function nC(e) {
  return V.isArray(e) && !e.some(ed);
}
const rC = V.toFlatObject(V, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Os(e, t, n) {
  if (!V.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = V.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (b, E) {
        return !V.isUndefined(E[b]);
      }
    ));
  const r = n.metaTokens,
    i = n.visitor || c,
    o = n.dots,
    a = n.indexes,
    s = (n.Blob || (typeof Blob < "u" && Blob)) && V.isSpecCompliantForm(t);
  if (!V.isFunction(i)) throw new TypeError("visitor must be a function");
  function u(v) {
    if (v === null) return "";
    if (V.isDate(v)) return v.toISOString();
    if (!s && V.isBlob(v))
      throw new Ee("Blob is not supported. Use a Buffer instead.");
    return V.isArrayBuffer(v) || V.isTypedArray(v)
      ? s && typeof Blob == "function"
        ? new Blob([v])
        : Buffer.from(v)
      : v;
  }
  function c(v, b, E) {
    let f = v;
    if (v && !E && typeof v == "object") {
      if (V.endsWith(b, "{}"))
        (b = r ? b : b.slice(0, -2)), (v = JSON.stringify(v));
      else if (
        (V.isArray(v) && nC(v)) ||
        ((V.isFileList(v) || V.endsWith(b, "[]")) && (f = V.toArray(v)))
      )
        return (
          (b = Ay(b)),
          f.forEach(function (m, w) {
            !(V.isUndefined(m) || m === null) &&
              t.append(
                a === !0 ? Gh([b], w, o) : a === null ? b : b + "[]",
                u(m)
              );
          }),
          !1
        );
    }
    return ed(v) ? !0 : (t.append(Gh(E, b, o), u(v)), !1);
  }
  const d = [],
    h = Object.assign(rC, {
      defaultVisitor: c,
      convertValue: u,
      isVisitable: ed,
    });
  function g(v, b) {
    if (!V.isUndefined(v)) {
      if (d.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + b.join("."));
      d.push(v),
        V.forEach(v, function (f, p) {
          (!(V.isUndefined(f) || f === null) &&
            i.call(t, f, V.isString(p) ? p.trim() : p, b, h)) === !0 &&
            g(f, b ? b.concat(p) : [p]);
        }),
        d.pop();
    }
  }
  if (!V.isObject(e)) throw new TypeError("data must be an object");
  return g(e), t;
}
function qh(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function bf(e, t) {
  (this._pairs = []), e && Os(e, this, t);
}
const Dy = bf.prototype;
Dy.append = function (t, n) {
  this._pairs.push([t, n]);
};
Dy.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, qh);
      }
    : qh;
  return this._pairs
    .map(function (i) {
      return n(i[0]) + "=" + n(i[1]);
    }, "")
    .join("&");
};
function iC(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Iy(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || iC,
    i = n && n.serialize;
  let o;
  if (
    (i
      ? (o = i(t, n))
      : (o = V.isURLSearchParams(t) ? t.toString() : new bf(t, n).toString(r)),
    o)
  ) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
  }
  return e;
}
class oC {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    V.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Kh = oC,
  Fy = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  aC = typeof URLSearchParams < "u" ? URLSearchParams : bf,
  lC = typeof FormData < "u" ? FormData : null,
  sC = typeof Blob < "u" ? Blob : null,
  uC = (() => {
    let e;
    return typeof navigator < "u" &&
      ((e = navigator.product) === "ReactNative" ||
        e === "NativeScript" ||
        e === "NS")
      ? !1
      : typeof window < "u" && typeof document < "u";
  })(),
  cC = (() =>
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")(),
  Sn = {
    isBrowser: !0,
    classes: { URLSearchParams: aC, FormData: lC, Blob: sC },
    isStandardBrowserEnv: uC,
    isStandardBrowserWebWorkerEnv: cC,
    protocols: ["http", "https", "file", "blob", "url", "data"],
  };
function dC(e, t) {
  return Os(
    e,
    new Sn.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, i, o) {
          return Sn.isNode && V.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function fC(e) {
  return V.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function pC(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const i = n.length;
  let o;
  for (r = 0; r < i; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function $y(e) {
  function t(n, r, i, o) {
    let a = n[o++];
    const l = Number.isFinite(+a),
      s = o >= n.length;
    return (
      (a = !a && V.isArray(i) ? i.length : a),
      s
        ? (V.hasOwnProp(i, a) ? (i[a] = [i[a], r]) : (i[a] = r), !l)
        : ((!i[a] || !V.isObject(i[a])) && (i[a] = []),
          t(n, r, i[a], o) && V.isArray(i[a]) && (i[a] = pC(i[a])),
          !l)
    );
  }
  if (V.isFormData(e) && V.isFunction(e.entries)) {
    const n = {};
    return (
      V.forEachEntry(e, (r, i) => {
        t(fC(r), i, n, 0);
      }),
      n
    );
  }
  return null;
}
const hC = { "Content-Type": void 0 };
function mC(e, t, n) {
  if (V.isString(e))
    try {
      return (t || JSON.parse)(e), V.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const Ns = {
  transitional: Fy,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        i = r.indexOf("application/json") > -1,
        o = V.isObject(t);
      if ((o && V.isHTMLForm(t) && (t = new FormData(t)), V.isFormData(t)))
        return i && i ? JSON.stringify($y(t)) : t;
      if (
        V.isArrayBuffer(t) ||
        V.isBuffer(t) ||
        V.isStream(t) ||
        V.isFile(t) ||
        V.isBlob(t)
      )
        return t;
      if (V.isArrayBufferView(t)) return t.buffer;
      if (V.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let l;
      if (o) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return dC(t, this.formSerializer).toString();
        if ((l = V.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const s = this.env && this.env.FormData;
          return Os(
            l ? { "files[]": t } : t,
            s && new s(),
            this.formSerializer
          );
        }
      }
      return o || i ? (n.setContentType("application/json", !1), mC(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Ns.transitional,
        r = n && n.forcedJSONParsing,
        i = this.responseType === "json";
      if (t && V.isString(t) && ((r && !this.responseType) || i)) {
        const a = !(n && n.silentJSONParsing) && i;
        try {
          return JSON.parse(t);
        } catch (l) {
          if (a)
            throw l.name === "SyntaxError"
              ? Ee.from(l, Ee.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Sn.classes.FormData, Blob: Sn.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*" } },
};
V.forEach(["delete", "get", "head"], function (t) {
  Ns.headers[t] = {};
});
V.forEach(["post", "put", "patch"], function (t) {
  Ns.headers[t] = V.merge(hC);
});
const wf = Ns,
  gC = V.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  vC = (e) => {
    const t = {};
    let n, r, i;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (a) {
            (i = a.indexOf(":")),
              (n = a.substring(0, i).trim().toLowerCase()),
              (r = a.substring(i + 1).trim()),
              !(!n || (t[n] && gC[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Qh = Symbol("internals");
function Po(e) {
  return e && String(e).trim().toLowerCase();
}
function bl(e) {
  return e === !1 || e == null ? e : V.isArray(e) ? e.map(bl) : String(e);
}
function yC(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const bC = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Du(e, t, n, r, i) {
  if (V.isFunction(r)) return r.call(this, t, n);
  if ((i && (t = n), !!V.isString(t))) {
    if (V.isString(r)) return t.indexOf(r) !== -1;
    if (V.isRegExp(r)) return r.test(t);
  }
}
function wC(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function xC(e, t) {
  const n = V.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (i, o, a) {
        return this[r].call(this, t, i, o, a);
      },
      configurable: !0,
    });
  });
}
class Rs {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function o(l, s, u) {
      const c = Po(s);
      if (!c) throw new Error("header name must be a non-empty string");
      const d = V.findKey(i, c);
      (!d || i[d] === void 0 || u === !0 || (u === void 0 && i[d] !== !1)) &&
        (i[d || s] = bl(l));
    }
    const a = (l, s) => V.forEach(l, (u, c) => o(u, c, s));
    return (
      V.isPlainObject(t) || t instanceof this.constructor
        ? a(t, n)
        : V.isString(t) && (t = t.trim()) && !bC(t)
        ? a(vC(t), n)
        : t != null && o(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = Po(t)), t)) {
      const r = V.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n) return i;
        if (n === !0) return yC(i);
        if (V.isFunction(n)) return n.call(this, i, r);
        if (V.isRegExp(n)) return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Po(t)), t)) {
      const r = V.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Du(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function o(a) {
      if (((a = Po(a)), a)) {
        const l = V.findKey(r, a);
        l && (!n || Du(r, r[l], l, n)) && (delete r[l], (i = !0));
      }
    }
    return V.isArray(t) ? t.forEach(o) : o(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      i = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Du(this, this[o], o, t, !0)) && (delete this[o], (i = !0));
    }
    return i;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      V.forEach(this, (i, o) => {
        const a = V.findKey(r, o);
        if (a) {
          (n[a] = bl(i)), delete n[o];
          return;
        }
        const l = t ? wC(o) : String(o).trim();
        l !== o && delete n[o], (n[l] = bl(i)), (r[l] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      V.forEach(this, (r, i) => {
        r != null && r !== !1 && (n[i] = t && V.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[Qh] = this[Qh] = { accessors: {} }).accessors,
      i = this.prototype;
    function o(a) {
      const l = Po(a);
      r[l] || (xC(i, a), (r[l] = !0));
    }
    return V.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
Rs.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
V.freezeMethods(Rs.prototype);
V.freezeMethods(Rs);
const qn = Rs;
function Iu(e, t) {
  const n = this || wf,
    r = t || n,
    i = qn.from(r.headers);
  let o = r.data;
  return (
    V.forEach(e, function (l) {
      o = l.call(n, o, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    o
  );
}
function zy(e) {
  return !!(e && e.__CANCEL__);
}
function Pa(e, t, n) {
  Ee.call(this, e ?? "canceled", Ee.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
V.inherits(Pa, Ee, { __CANCEL__: !0 });
function SC(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new Ee(
          "Request failed with status code " + n.status,
          [Ee.ERR_BAD_REQUEST, Ee.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const EC = Sn.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (n, r, i, o, a, l) {
          const s = [];
          s.push(n + "=" + encodeURIComponent(r)),
            V.isNumber(i) && s.push("expires=" + new Date(i).toGMTString()),
            V.isString(o) && s.push("path=" + o),
            V.isString(a) && s.push("domain=" + a),
            l === !0 && s.push("secure"),
            (document.cookie = s.join("; "));
        },
        read: function (n) {
          const r = document.cookie.match(
            new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")
          );
          return r ? decodeURIComponent(r[3]) : null;
        },
        remove: function (n) {
          this.write(n, "", Date.now() - 864e5);
        },
      };
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
    })();
function _C(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function CC(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function By(e, t) {
  return e && !_C(t) ? CC(e, t) : t;
}
const kC = Sn.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function i(o) {
        let a = o;
        return (
          t && (n.setAttribute("href", a), (a = n.href)),
          n.setAttribute("href", a),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = i(window.location.href)),
        function (a) {
          const l = V.isString(a) ? i(a) : a;
          return l.protocol === r.protocol && l.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function TC(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function PC(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let i = 0,
    o = 0,
    a;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (s) {
      const u = Date.now(),
        c = r[o];
      a || (a = u), (n[i] = s), (r[i] = u);
      let d = o,
        h = 0;
      for (; d !== i; ) (h += n[d++]), (d = d % e);
      if (((i = (i + 1) % e), i === o && (o = (o + 1) % e), u - a < t)) return;
      const g = c && u - c;
      return g ? Math.round((h * 1e3) / g) : void 0;
    }
  );
}
function Yh(e, t) {
  let n = 0;
  const r = PC(50, 250);
  return (i) => {
    const o = i.loaded,
      a = i.lengthComputable ? i.total : void 0,
      l = o - n,
      s = r(l),
      u = o <= a;
    n = o;
    const c = {
      loaded: o,
      total: a,
      progress: a ? o / a : void 0,
      bytes: l,
      rate: s || void 0,
      estimated: s && a && u ? (a - o) / s : void 0,
      event: i,
    };
    (c[t ? "download" : "upload"] = !0), e(c);
  };
}
const OC = typeof XMLHttpRequest < "u",
  NC =
    OC &&
    function (e) {
      return new Promise(function (n, r) {
        let i = e.data;
        const o = qn.from(e.headers).normalize(),
          a = e.responseType;
        let l;
        function s() {
          e.cancelToken && e.cancelToken.unsubscribe(l),
            e.signal && e.signal.removeEventListener("abort", l);
        }
        V.isFormData(i) &&
          (Sn.isStandardBrowserEnv || Sn.isStandardBrowserWebWorkerEnv
            ? o.setContentType(!1)
            : o.setContentType("multipart/form-data;", !1));
        let u = new XMLHttpRequest();
        if (e.auth) {
          const g = e.auth.username || "",
            v = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          o.set("Authorization", "Basic " + btoa(g + ":" + v));
        }
        const c = By(e.baseURL, e.url);
        u.open(e.method.toUpperCase(), Iy(c, e.params, e.paramsSerializer), !0),
          (u.timeout = e.timeout);
        function d() {
          if (!u) return;
          const g = qn.from(
              "getAllResponseHeaders" in u && u.getAllResponseHeaders()
            ),
            b = {
              data:
                !a || a === "text" || a === "json"
                  ? u.responseText
                  : u.response,
              status: u.status,
              statusText: u.statusText,
              headers: g,
              config: e,
              request: u,
            };
          SC(
            function (f) {
              n(f), s();
            },
            function (f) {
              r(f), s();
            },
            b
          ),
            (u = null);
        }
        if (
          ("onloadend" in u
            ? (u.onloadend = d)
            : (u.onreadystatechange = function () {
                !u ||
                  u.readyState !== 4 ||
                  (u.status === 0 &&
                    !(u.responseURL && u.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(d);
              }),
          (u.onabort = function () {
            u &&
              (r(new Ee("Request aborted", Ee.ECONNABORTED, e, u)), (u = null));
          }),
          (u.onerror = function () {
            r(new Ee("Network Error", Ee.ERR_NETWORK, e, u)), (u = null);
          }),
          (u.ontimeout = function () {
            let v = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const b = e.transitional || Fy;
            e.timeoutErrorMessage && (v = e.timeoutErrorMessage),
              r(
                new Ee(
                  v,
                  b.clarifyTimeoutError ? Ee.ETIMEDOUT : Ee.ECONNABORTED,
                  e,
                  u
                )
              ),
              (u = null);
          }),
          Sn.isStandardBrowserEnv)
        ) {
          const g =
            (e.withCredentials || kC(c)) &&
            e.xsrfCookieName &&
            EC.read(e.xsrfCookieName);
          g && o.set(e.xsrfHeaderName, g);
        }
        i === void 0 && o.setContentType(null),
          "setRequestHeader" in u &&
            V.forEach(o.toJSON(), function (v, b) {
              u.setRequestHeader(b, v);
            }),
          V.isUndefined(e.withCredentials) ||
            (u.withCredentials = !!e.withCredentials),
          a && a !== "json" && (u.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            u.addEventListener("progress", Yh(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            u.upload &&
            u.upload.addEventListener("progress", Yh(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((l = (g) => {
              u &&
                (r(!g || g.type ? new Pa(null, e, u) : g),
                u.abort(),
                (u = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(l),
            e.signal &&
              (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
        const h = TC(c);
        if (h && Sn.protocols.indexOf(h) === -1) {
          r(new Ee("Unsupported protocol " + h + ":", Ee.ERR_BAD_REQUEST, e));
          return;
        }
        u.send(i || null);
      });
    },
  wl = { http: tC, xhr: NC };
V.forEach(wl, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const RC = {
  getAdapter: (e) => {
    e = V.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (
      let i = 0;
      i < t && ((n = e[i]), !(r = V.isString(n) ? wl[n.toLowerCase()] : n));
      i++
    );
    if (!r)
      throw r === !1
        ? new Ee(
            `Adapter ${n} is not supported by the environment`,
            "ERR_NOT_SUPPORT"
          )
        : new Error(
            V.hasOwnProp(wl, n)
              ? `Adapter '${n}' is not available in the build`
              : `Unknown adapter '${n}'`
          );
    if (!V.isFunction(r)) throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: wl,
};
function Fu(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Pa(null, e);
}
function Xh(e) {
  return (
    Fu(e),
    (e.headers = qn.from(e.headers)),
    (e.data = Iu.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    RC.getAdapter(e.adapter || wf.adapter)(e).then(
      function (r) {
        return (
          Fu(e),
          (r.data = Iu.call(e, e.transformResponse, r)),
          (r.headers = qn.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          zy(r) ||
            (Fu(e),
            r &&
              r.response &&
              ((r.response.data = Iu.call(e, e.transformResponse, r.response)),
              (r.response.headers = qn.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const Jh = (e) => (e instanceof qn ? e.toJSON() : e);
function lo(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, d) {
    return V.isPlainObject(u) && V.isPlainObject(c)
      ? V.merge.call({ caseless: d }, u, c)
      : V.isPlainObject(c)
      ? V.merge({}, c)
      : V.isArray(c)
      ? c.slice()
      : c;
  }
  function i(u, c, d) {
    if (V.isUndefined(c)) {
      if (!V.isUndefined(u)) return r(void 0, u, d);
    } else return r(u, c, d);
  }
  function o(u, c) {
    if (!V.isUndefined(c)) return r(void 0, c);
  }
  function a(u, c) {
    if (V.isUndefined(c)) {
      if (!V.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, c);
  }
  function l(u, c, d) {
    if (d in t) return r(u, c);
    if (d in e) return r(void 0, u);
  }
  const s = {
    url: o,
    method: o,
    data: o,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: l,
    headers: (u, c) => i(Jh(u), Jh(c), !0),
  };
  return (
    V.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const d = s[c] || i,
        h = d(e[c], t[c], c);
      (V.isUndefined(h) && d !== l) || (n[c] = h);
    }),
    n
  );
}
const Uy = "1.4.0",
  xf = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    xf[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Zh = {};
xf.transitional = function (t, n, r) {
  function i(o, a) {
    return (
      "[Axios v" +
      Uy +
      "] Transitional option '" +
      o +
      "'" +
      a +
      (r ? ". " + r : "")
    );
  }
  return (o, a, l) => {
    if (t === !1)
      throw new Ee(
        i(a, " has been removed" + (n ? " in " + n : "")),
        Ee.ERR_DEPRECATED
      );
    return (
      n &&
        !Zh[a] &&
        ((Zh[a] = !0),
        console.warn(
          i(
            a,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(o, a, l) : !0
    );
  };
};
function LC(e, t, n) {
  if (typeof e != "object")
    throw new Ee("options must be an object", Ee.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const o = r[i],
      a = t[o];
    if (a) {
      const l = e[o],
        s = l === void 0 || a(l, o, e);
      if (s !== !0)
        throw new Ee("option " + o + " must be " + s, Ee.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new Ee("Unknown option " + o, Ee.ERR_BAD_OPTION);
  }
}
const td = { assertOptions: LC, validators: xf },
  ar = td.validators;
class es {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Kh(), response: new Kh() });
  }
  request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = lo(this.defaults, n));
    const { transitional: r, paramsSerializer: i, headers: o } = n;
    r !== void 0 &&
      td.assertOptions(
        r,
        {
          silentJSONParsing: ar.transitional(ar.boolean),
          forcedJSONParsing: ar.transitional(ar.boolean),
          clarifyTimeoutError: ar.transitional(ar.boolean),
        },
        !1
      ),
      i != null &&
        (V.isFunction(i)
          ? (n.paramsSerializer = { serialize: i })
          : td.assertOptions(
              i,
              { encode: ar.function, serialize: ar.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let a;
    (a = o && V.merge(o.common, o[n.method])),
      a &&
        V.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (v) => {
            delete o[v];
          }
        ),
      (n.headers = qn.concat(a, o));
    const l = [];
    let s = !0;
    this.interceptors.request.forEach(function (b) {
      (typeof b.runWhen == "function" && b.runWhen(n) === !1) ||
        ((s = s && b.synchronous), l.unshift(b.fulfilled, b.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (b) {
      u.push(b.fulfilled, b.rejected);
    });
    let c,
      d = 0,
      h;
    if (!s) {
      const v = [Xh.bind(this), void 0];
      for (
        v.unshift.apply(v, l),
          v.push.apply(v, u),
          h = v.length,
          c = Promise.resolve(n);
        d < h;

      )
        c = c.then(v[d++], v[d++]);
      return c;
    }
    h = l.length;
    let g = n;
    for (d = 0; d < h; ) {
      const v = l[d++],
        b = l[d++];
      try {
        g = v(g);
      } catch (E) {
        b.call(this, E);
        break;
      }
    }
    try {
      c = Xh.call(this, g);
    } catch (v) {
      return Promise.reject(v);
    }
    for (d = 0, h = u.length; d < h; ) c = c.then(u[d++], u[d++]);
    return c;
  }
  getUri(t) {
    t = lo(this.defaults, t);
    const n = By(t.baseURL, t.url);
    return Iy(n, t.params, t.paramsSerializer);
  }
}
V.forEach(["delete", "get", "head", "options"], function (t) {
  es.prototype[t] = function (n, r) {
    return this.request(
      lo(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
V.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (o, a, l) {
      return this.request(
        lo(l || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: a,
        })
      );
    };
  }
  (es.prototype[t] = n()), (es.prototype[t + "Form"] = n(!0));
});
const xl = es;
class Sf {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; ) r._listeners[o](i);
      r._listeners = null;
    }),
      (this.promise.then = (i) => {
        let o;
        const a = new Promise((l) => {
          r.subscribe(l), (o = l);
        }).then(i);
        return (
          (a.cancel = function () {
            r.unsubscribe(o);
          }),
          a
        );
      }),
      t(function (o, a, l) {
        r.reason || ((r.reason = new Pa(o, a, l)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new Sf(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
}
const MC = Sf;
function jC(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function AC(e) {
  return V.isObject(e) && e.isAxiosError === !0;
}
const nd = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(nd).forEach(([e, t]) => {
  nd[t] = e;
});
const DC = nd;
function Hy(e) {
  const t = new xl(e),
    n = Cy(xl.prototype.request, t);
  return (
    V.extend(n, xl.prototype, t, { allOwnKeys: !0 }),
    V.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return Hy(lo(e, i));
    }),
    n
  );
}
const at = Hy(wf);
at.Axios = xl;
at.CanceledError = Pa;
at.CancelToken = MC;
at.isCancel = zy;
at.VERSION = Uy;
at.toFormData = Os;
at.AxiosError = Ee;
at.Cancel = at.CanceledError;
at.all = function (t) {
  return Promise.all(t);
};
at.spread = jC;
at.isAxiosError = AC;
at.mergeConfig = lo;
at.AxiosHeaders = qn;
at.formToJSON = (e) => $y(V.isHTMLForm(e) ? new FormData(e) : e);
at.HttpStatusCode = DC;
at.default = at;
const Vy = at,
  Wy = window.__DATA__ || {},
  mo = async () => (await Vy.get(Wy.promo)).data,
  IC = (e, t) => {
    const { cities: n, products: r, categories: i, search: o, channel: a } = t;
    let l = e.filter((s) => s.is_published !== !1);
    return (
      n &&
        n.length > 0 &&
        (l = l.filter((s) => s.cities.some((u) => n.includes(u)))),
      r &&
        r.length > 0 &&
        (l = l.filter((s) => s.products.some((u) => r.includes(u)))),
      i &&
        i.length > 0 &&
        (l = l.filter((s) => s.categories.some((u) => i.includes(u)))),
      o &&
        o.length > 0 &&
        (l = l.filter((s) => {
          var u, c;
          return (
            ((u = s.body) == null
              ? void 0
              : u.toLowerCase().includes(o.toLowerCase())) ||
            ((c = s.title) == null
              ? void 0
              : c.toLowerCase().includes(o.toLowerCase()))
          );
        })),
      a && a.length > 0 && (l = l.filter((s) => s.channel === a)),
      l
    );
  },
  Gy = (e, t) => e.find((r) => r.id === t),
  FC = async () => (await Vy.get(Wy.aktivitas)).data,
  St = (e) => Object.keys(e).map((t) => e[t]);
function Ef() {
  const e = ce(
      "bl-rounded-[20px] bg-glass bl-p-[8px] md:bl-p-[15px] bl-mb-[30px]"
    ),
    {
      isLoading: t,
      isError: n,
      isSuccess: r,
      data: i,
    } = pi({ queryKey: ["promos"], queryFn: () => mo() });
  if (t || n) return null;
  const o = St(i.data["api::banner.banner"]),
    a = St(i.data["plugin::upload.file"]);
  return y.jsx("div", {
    className: e,
    children: y.jsx(hf, {
      autoHeight: !0,
      pagination: { dynamicBullets: !0 },
      autoplay: { delay: 3e3, disableOnInteraction: !1 },
      modules: [zE, hy],
      children: o.map((l, s) => {
        var u;
        return y.jsx(
          mf,
          {
            children: y.jsx("a", {
              href: l.url || "#",
              className: "bl-block",
              target: l.target || "_self",
              children:
                l.banner &&
                y.jsx("img", {
                  src:
                    (u = a.find((c) => c.id === l.banner)) == null
                      ? void 0
                      : u.url,
                  alt: "banner",
                  className: "bl-rounded-[20px] bl-w-full bl-block",
                }),
            }),
          },
          s
        );
      }),
    }),
  });
}
const $C = "_promoCategories_10bpd_1",
  zC = "_promoCategories__info_10bpd_5",
  BC = "_promoCategories__title_10bpd_9",
  UC = "_promoCategories__promoWrapper_10bpd_14",
  HC = "_cardPromo_10bpd_18",
  VC = "_cardPromo__GroupByCategory_10bpd_25",
  WC = "_cardPromo__header_10bpd_29",
  GC = "_cardPromo__title_10bpd_33",
  qC = "_cardPromo__info_10bpd_42",
  KC = "_cardPromo__fileCover_10bpd_46",
  QC = "_cardPromo__date_10bpd_54",
  YC = "_categoryList__wrapper_10bpd_62",
  XC = "_categoryList__wrapper_compact_10bpd_66",
  JC = "_cardCategory__item_10bpd_78",
  ZC = "_cardCategory__icon_10bpd_82",
  ek = "_spin_10bpd_1",
  tk = "_promoList_10bpd_113",
  nk = "_promoDetail__title_10bpd_117",
  rk = "_promoDetail__date_10bpd_123",
  ik = "_promoDetail__body_10bpd_128",
  ok = "_bgGlass_10bpd_138",
  ak = "_categoryLink_10bpd_148",
  lk = "_categoryActive_10bpd_156",
  sk = "_categoryActiveSub_10bpd_161",
  uk = "_aside__show_10bpd_165",
  ck = "_checkbox_10bpd_176",
  fe = {
    promoCategories: $C,
    promoCategories__info: zC,
    promoCategories__title: BC,
    promoCategories__promoWrapper: UC,
    cardPromo: HC,
    cardPromo__GroupByCategory: VC,
    cardPromo__header: WC,
    cardPromo__title: GC,
    cardPromo__info: qC,
    cardPromo__fileCover: KC,
    cardPromo__date: QC,
    categoryList__wrapper: YC,
    categoryList__wrapper_compact: XC,
    cardCategory__item: JC,
    cardCategory__icon: ZC,
    spin: ek,
    promoList: tk,
    promoDetail__title: nk,
    promoDetail__date: rk,
    promoDetail__body: ik,
    bgGlass: ok,
    categoryLink: ak,
    categoryActive: lk,
    categoryActiveSub: sk,
    aside__show: uk,
    checkbox: ck,
  };
var qy = { exports: {} };
(function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(dm, function () {
    var n = 1e3,
      r = 6e4,
      i = 36e5,
      o = "millisecond",
      a = "second",
      l = "minute",
      s = "hour",
      u = "day",
      c = "week",
      d = "month",
      h = "quarter",
      g = "year",
      v = "date",
      b = "Invalid Date",
      E =
        /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      f =
        /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      p = {
        name: "en",
        weekdays:
          "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months:
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
        ordinal: function (O) {
          var R = ["th", "st", "nd", "rd"],
            z = O % 100;
          return "[" + O + (R[(z - 20) % 10] || R[z] || R[0]) + "]";
        },
      },
      m = function (O, R, z) {
        var K = String(O);
        return !K || K.length >= R
          ? O
          : "" + Array(R + 1 - K.length).join(z) + O;
      },
      w = {
        s: m,
        z: function (O) {
          var R = -O.utcOffset(),
            z = Math.abs(R),
            K = Math.floor(z / 60),
            U = z % 60;
          return (R <= 0 ? "+" : "-") + m(K, 2, "0") + ":" + m(U, 2, "0");
        },
        m: function O(R, z) {
          if (R.date() < z.date()) return -O(z, R);
          var K = 12 * (z.year() - R.year()) + (z.month() - R.month()),
            U = R.clone().add(K, d),
            D = z - U < 0,
            B = R.clone().add(K + (D ? -1 : 1), d);
          return +(-(K + (z - U) / (D ? U - B : B - U)) || 0);
        },
        a: function (O) {
          return O < 0 ? Math.ceil(O) || 0 : Math.floor(O);
        },
        p: function (O) {
          return (
            { M: d, y: g, w: c, d: u, D: v, h: s, m: l, s: a, ms: o, Q: h }[
              O
            ] ||
            String(O || "")
              .toLowerCase()
              .replace(/s$/, "")
          );
        },
        u: function (O) {
          return O === void 0;
        },
      },
      _ = "en",
      T = {};
    T[_] = p;
    var k = function (O) {
        return O instanceof j;
      },
      N = function O(R, z, K) {
        var U;
        if (!R) return _;
        if (typeof R == "string") {
          var D = R.toLowerCase();
          T[D] && (U = D), z && ((T[D] = z), (U = D));
          var B = R.split("-");
          if (!U && B.length > 1) return O(B[0]);
        } else {
          var W = R.name;
          (T[W] = R), (U = W);
        }
        return !K && U && (_ = U), U || (!K && _);
      },
      S = function (O, R) {
        if (k(O)) return O.clone();
        var z = typeof R == "object" ? R : {};
        return (z.date = O), (z.args = arguments), new j(z);
      },
      F = w;
    (F.l = N),
      (F.i = k),
      (F.w = function (O, R) {
        return S(O, { locale: R.$L, utc: R.$u, x: R.$x, $offset: R.$offset });
      });
    var j = (function () {
        function O(z) {
          (this.$L = N(z.locale, null, !0)), this.parse(z);
        }
        var R = O.prototype;
        return (
          (R.parse = function (z) {
            (this.$d = (function (K) {
              var U = K.date,
                D = K.utc;
              if (U === null) return new Date(NaN);
              if (F.u(U)) return new Date();
              if (U instanceof Date) return new Date(U);
              if (typeof U == "string" && !/Z$/i.test(U)) {
                var B = U.match(E);
                if (B) {
                  var W = B[2] - 1 || 0,
                    G = (B[7] || "0").substring(0, 3);
                  return D
                    ? new Date(
                        Date.UTC(
                          B[1],
                          W,
                          B[3] || 1,
                          B[4] || 0,
                          B[5] || 0,
                          B[6] || 0,
                          G
                        )
                      )
                    : new Date(
                        B[1],
                        W,
                        B[3] || 1,
                        B[4] || 0,
                        B[5] || 0,
                        B[6] || 0,
                        G
                      );
                }
              }
              return new Date(U);
            })(z)),
              (this.$x = z.x || {}),
              this.init();
          }),
          (R.init = function () {
            var z = this.$d;
            (this.$y = z.getFullYear()),
              (this.$M = z.getMonth()),
              (this.$D = z.getDate()),
              (this.$W = z.getDay()),
              (this.$H = z.getHours()),
              (this.$m = z.getMinutes()),
              (this.$s = z.getSeconds()),
              (this.$ms = z.getMilliseconds());
          }),
          (R.$utils = function () {
            return F;
          }),
          (R.isValid = function () {
            return this.$d.toString() !== b;
          }),
          (R.isSame = function (z, K) {
            var U = S(z);
            return this.startOf(K) <= U && U <= this.endOf(K);
          }),
          (R.isAfter = function (z, K) {
            return S(z) < this.startOf(K);
          }),
          (R.isBefore = function (z, K) {
            return this.endOf(K) < S(z);
          }),
          (R.$g = function (z, K, U) {
            return F.u(z) ? this[K] : this.set(U, z);
          }),
          (R.unix = function () {
            return Math.floor(this.valueOf() / 1e3);
          }),
          (R.valueOf = function () {
            return this.$d.getTime();
          }),
          (R.startOf = function (z, K) {
            var U = this,
              D = !!F.u(K) || K,
              B = F.p(z),
              W = function (nt, Me) {
                var Se = F.w(
                  U.$u ? Date.UTC(U.$y, Me, nt) : new Date(U.$y, Me, nt),
                  U
                );
                return D ? Se : Se.endOf(u);
              },
              G = function (nt, Me) {
                return F.w(
                  U.toDate()[nt].apply(
                    U.toDate("s"),
                    (D ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Me)
                  ),
                  U
                );
              },
              te = this.$W,
              de = this.$M,
              se = this.$D,
              ve = "set" + (this.$u ? "UTC" : "");
            switch (B) {
              case g:
                return D ? W(1, 0) : W(31, 11);
              case d:
                return D ? W(1, de) : W(0, de + 1);
              case c:
                var Ce = this.$locale().weekStart || 0,
                  Le = (te < Ce ? te + 7 : te) - Ce;
                return W(D ? se - Le : se + (6 - Le), de);
              case u:
              case v:
                return G(ve + "Hours", 0);
              case s:
                return G(ve + "Minutes", 1);
              case l:
                return G(ve + "Seconds", 2);
              case a:
                return G(ve + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }),
          (R.endOf = function (z) {
            return this.startOf(z, !1);
          }),
          (R.$set = function (z, K) {
            var U,
              D = F.p(z),
              B = "set" + (this.$u ? "UTC" : ""),
              W = ((U = {}),
              (U[u] = B + "Date"),
              (U[v] = B + "Date"),
              (U[d] = B + "Month"),
              (U[g] = B + "FullYear"),
              (U[s] = B + "Hours"),
              (U[l] = B + "Minutes"),
              (U[a] = B + "Seconds"),
              (U[o] = B + "Milliseconds"),
              U)[D],
              G = D === u ? this.$D + (K - this.$W) : K;
            if (D === d || D === g) {
              var te = this.clone().set(v, 1);
              te.$d[W](G),
                te.init(),
                (this.$d = te.set(v, Math.min(this.$D, te.daysInMonth())).$d);
            } else W && this.$d[W](G);
            return this.init(), this;
          }),
          (R.set = function (z, K) {
            return this.clone().$set(z, K);
          }),
          (R.get = function (z) {
            return this[F.p(z)]();
          }),
          (R.add = function (z, K) {
            var U,
              D = this;
            z = Number(z);
            var B = F.p(K),
              W = function (de) {
                var se = S(D);
                return F.w(se.date(se.date() + Math.round(de * z)), D);
              };
            if (B === d) return this.set(d, this.$M + z);
            if (B === g) return this.set(g, this.$y + z);
            if (B === u) return W(1);
            if (B === c) return W(7);
            var G = ((U = {}), (U[l] = r), (U[s] = i), (U[a] = n), U)[B] || 1,
              te = this.$d.getTime() + z * G;
            return F.w(te, this);
          }),
          (R.subtract = function (z, K) {
            return this.add(-1 * z, K);
          }),
          (R.format = function (z) {
            var K = this,
              U = this.$locale();
            if (!this.isValid()) return U.invalidDate || b;
            var D = z || "YYYY-MM-DDTHH:mm:ssZ",
              B = F.z(this),
              W = this.$H,
              G = this.$m,
              te = this.$M,
              de = U.weekdays,
              se = U.months,
              ve = function (Me, Se, De, ze) {
                return (Me && (Me[Se] || Me(K, D))) || De[Se].slice(0, ze);
              },
              Ce = function (Me) {
                return F.s(W % 12 || 12, Me, "0");
              },
              Le =
                U.meridiem ||
                function (Me, Se, De) {
                  var ze = Me < 12 ? "AM" : "PM";
                  return De ? ze.toLowerCase() : ze;
                },
              nt = {
                YY: String(this.$y).slice(-2),
                YYYY: this.$y,
                M: te + 1,
                MM: F.s(te + 1, 2, "0"),
                MMM: ve(U.monthsShort, te, se, 3),
                MMMM: ve(se, te),
                D: this.$D,
                DD: F.s(this.$D, 2, "0"),
                d: String(this.$W),
                dd: ve(U.weekdaysMin, this.$W, de, 2),
                ddd: ve(U.weekdaysShort, this.$W, de, 3),
                dddd: de[this.$W],
                H: String(W),
                HH: F.s(W, 2, "0"),
                h: Ce(1),
                hh: Ce(2),
                a: Le(W, G, !0),
                A: Le(W, G, !1),
                m: String(G),
                mm: F.s(G, 2, "0"),
                s: String(this.$s),
                ss: F.s(this.$s, 2, "0"),
                SSS: F.s(this.$ms, 3, "0"),
                Z: B,
              };
            return D.replace(f, function (Me, Se) {
              return Se || nt[Me] || B.replace(":", "");
            });
          }),
          (R.utcOffset = function () {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }),
          (R.diff = function (z, K, U) {
            var D,
              B = F.p(K),
              W = S(z),
              G = (W.utcOffset() - this.utcOffset()) * r,
              te = this - W,
              de = F.m(this, W);
            return (
              (de =
                ((D = {}),
                (D[g] = de / 12),
                (D[d] = de),
                (D[h] = de / 3),
                (D[c] = (te - G) / 6048e5),
                (D[u] = (te - G) / 864e5),
                (D[s] = te / i),
                (D[l] = te / r),
                (D[a] = te / n),
                D)[B] || te),
              U ? de : F.a(de)
            );
          }),
          (R.daysInMonth = function () {
            return this.endOf(d).$D;
          }),
          (R.$locale = function () {
            return T[this.$L];
          }),
          (R.locale = function (z, K) {
            if (!z) return this.$L;
            var U = this.clone(),
              D = N(z, K, !0);
            return D && (U.$L = D), U;
          }),
          (R.clone = function () {
            return F.w(this.$d, this);
          }),
          (R.toDate = function () {
            return new Date(this.valueOf());
          }),
          (R.toJSON = function () {
            return this.isValid() ? this.toISOString() : null;
          }),
          (R.toISOString = function () {
            return this.$d.toISOString();
          }),
          (R.toString = function () {
            return this.$d.toUTCString();
          }),
          O
        );
      })(),
      I = j.prototype;
    return (
      (S.prototype = I),
      [
        ["$ms", o],
        ["$s", a],
        ["$m", l],
        ["$H", s],
        ["$W", u],
        ["$M", d],
        ["$y", g],
        ["$D", v],
      ].forEach(function (O) {
        I[O[1]] = function (R) {
          return this.$g(R, O[0], O[1]);
        };
      }),
      (S.extend = function (O, R) {
        return O.$i || (O(R, j, S), (O.$i = !0)), S;
      }),
      (S.locale = N),
      (S.isDayjs = k),
      (S.unix = function (O) {
        return S(1e3 * O);
      }),
      (S.en = T[_]),
      (S.Ls = T),
      (S.p = {}),
      S
    );
  });
})(qy);
var dk = qy.exports;
const Ci = ga(dk),
  Ls = (e, t, n) => {
    const r = Ci(t).format("MMMM"),
      i = Ci(e).format("MMMM"),
      o = Ci(e).format("DD"),
      a = Ci(e).format("DD MMM YYYY"),
      l = Ci(t).format("DD MMM YYYY"),
      s = Ci().format("DD MMM YYYY"),
      u = new Date(s),
      c = new Date(t);
    return u.getTime() > c.getTime()
      ? "Masa berlaku sudah lewat"
      : e === "" || e === null
      ? `Berlaku Hingga ${l}`
      : i === r
      ? `<span class="${
          n ? "bl-hidden sm:bl-inline" : ""
        }">Periode </span>${o} - ${l}`
      : `<span class="${
          n ? "bl-hidden sm:bl-inline" : ""
        }">Periode </span>${a} - ${l}`;
  };
function fk(e) {
  return y.jsxs("div", {
    className: ce(fe.cardPromo, e.className, "text-poppins !bl-rounded-[20px]"),
    children: [
      y.jsx("figure", {
        className:
          "bl-relative bl-overflow-hidden bl-rounded-tl-lg bl-rounded-tr-lg",
        children: y.jsx("img", {
          src: e.thumbnail,
          width: 800,
          height: 350,
          alt: `${e.title} image`,
          className: fe.cardPromo__fileCover,
        }),
      }),
      y.jsx("span", {
        className: ce(
          "bl-absolute bl-top-[10px] bl-left-[10px] bl-text-[12px] bl-font-bold bl-rounded-full bl-py-[3px] bl-px-[8px] bl-bg-[#FFB13F] bl-text-white bl-capitalize",
          {
            "!bl-bg-[#73009B]": e.type === "pembinaan",
            "!bl-bg-[#00559B]": e.type === "kolaberaksi",
          }
        ),
        children: e.type,
      }),
      y.jsxs("div", {
        className: fe.cardPromo__info,
        children: [
          y.jsx("div", {
            className: "mb-auto",
            children: y.jsx("h3", {
              className: fe.cardPromo__title,
              children: y.jsx(Cn, {
                to: `/aktivitas/${e.type}/${e.slug}`,
                className:
                  "after:bl-absolute after:bl-inset-0 bl-font-bold bl-text-[#442052]",
                children: e.title,
              }),
            }),
          }),
          e.location !== null &&
            y.jsxs("div", {
              className:
                "bl-flex bl-text-[#9797A0] bl-text-[12px] md:bl-text-[16px] bl-mb-[5px]",
              children: [
                y.jsx("i", {
                  className:
                    "a-system-icon icon-location bl-mr-2 bl-text-[#9797A0]",
                }),
                y.jsx("span", {
                  className: "text-grey-light",
                  children: e.location,
                }),
              ],
            }),
          y.jsxs("span", {
            className:
              "bl-flex bl-text-[#9797A0] bl-text-[12px] md:bl-text-[16px]",
            children: [
              y.jsx("i", {
                className: "a-system-icon icon-clock bl-mr-2 bl-text-[#9797A0]",
              }),
              y.jsx("div", {
                dangerouslySetInnerHTML: {
                  __html: Ls(e.periode_start, e.periode_end, !0),
                },
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function em() {
  const [e] = Ca(),
    { type: t } = Fv();
  _a(), e.get("page") && parseInt(e.get("page"));
  const {
      isLoading: n,
      isError: r,
      isSuccess: i,
      data: o,
    } = pi({ queryKey: ["aktivitas"], queryFn: () => FC() }),
    a = [
      { name: "Semua", slug: "/aktivitas" },
      { name: "Event", slug: "/aktivitas/event" },
      { name: "Kolaberaksi", slug: "/aktivitas/kolaberaksi" },
      { name: "Pembinaan", slug: "/aktivitas/pembinaan" },
    ],
    l =
      "bl-text-white bl-border bl-border-white bl-text-[14px] md:bl-text-[22px] bl-rounded-full bl-px-[10px] md:bl-px-[20px] bl-py-[3px] md:bl-py-[5px]";
  if (n) return y.jsx("div", { children: "Loading..." });
  if (r) return y.jsx("div", { children: "An error has occurred" });
  const s = St(o.data["api::event.event"]),
    u = St(o.data["plugin::upload.file"]),
    c = s.filter((h) => h.type === t),
    d = t ? c : s;
  return y.jsxs("div", {
    className: "bl-container",
    children: [
      y.jsx(Ef, {}),
      y.jsxs("h2", {
        className:
          "text-poppins bl-text-[20px] md:bl-text-[40px] bl-font-bold bl-text-white bl-leading-[1.2] bl-mb-[15px] md:bl-mb-[30px]",
        children: ["Tumbuh bersama", y.jsx("br", {}), "komunitas Bangga Lokal"],
      }),
      y.jsx("div", {
        className:
          "bl-flex bl-overflow-x-scroll sm:bl-overflow-visible text-poppins bl-space-x-[10px] md:bl-space-x-[15px] bl-mb-[30px]",
        children: a.map((h, g) =>
          y.jsx(
            hn,
            {
              end: !0,
              to: h.slug,
              className: ({ isActive: v }) =>
                v ? ce(l, "bl-bg-[#6F2989] !bl-border-transparent") : l,
              children: h.name,
            },
            g
          )
        ),
      }),
      y.jsx("div", {
        className:
          "bl-grid bl-grid-cols-2 xl:bl-grid-cols-4 bl-gap-4 lg:bl-gap-6 bl-self-start bl-mb-6",
        children: d.map((h, g) => {
          var v;
          return y.jsx(
            fk,
            {
              title: h.title,
              thumbnail: h.thumbnail
                ? (v = u.find((b) => b.id === h.thumbnail)) == null
                  ? void 0
                  : v.url
                : "",
              type: h.type,
              location: h.location,
              periode_start: h.periode_start,
              periode_end: h.periode_end,
              slug: h.slug,
            },
            g
          );
        }),
      }),
      y.jsx("div", { className: "bl-flex bl-justify-center bl-py-[15px]" }),
    ],
  });
}
const pk =
  "https://www.bca.co.id/-/media/Files/2023/bangga-lokal/web/assets/logo--bca-banglok.png";
function hk({ width: e }) {
  return y.jsx("figure", {
    children: y.jsx("img", {
      src: pk,
      width: e,
      className: "bl-max-w-[150px] md:bl-max-w-[310px]",
      alt: "Logo Bangga Lokal",
    }),
  });
}
var Ky = { exports: {} };
(() => {
  var e = {
      296: (i, o, a) => {
        var l = /^\s+|\s+$/g,
          s = /^[-+]0x[0-9a-f]+$/i,
          u = /^0b[01]+$/i,
          c = /^0o[0-7]+$/i,
          d = parseInt,
          h = typeof a.g == "object" && a.g && a.g.Object === Object && a.g,
          g = typeof self == "object" && self && self.Object === Object && self,
          v = h || g || Function("return this")(),
          b = Object.prototype.toString,
          E = Math.max,
          f = Math.min,
          p = function () {
            return v.Date.now();
          };
        function m(_) {
          var T = typeof _;
          return !!_ && (T == "object" || T == "function");
        }
        function w(_) {
          if (typeof _ == "number") return _;
          if (
            (function (N) {
              return (
                typeof N == "symbol" ||
                ((function (S) {
                  return !!S && typeof S == "object";
                })(N) &&
                  b.call(N) == "[object Symbol]")
              );
            })(_)
          )
            return NaN;
          if (m(_)) {
            var T = typeof _.valueOf == "function" ? _.valueOf() : _;
            _ = m(T) ? T + "" : T;
          }
          if (typeof _ != "string") return _ === 0 ? _ : +_;
          _ = _.replace(l, "");
          var k = u.test(_);
          return k || c.test(_)
            ? d(_.slice(2), k ? 2 : 8)
            : s.test(_)
            ? NaN
            : +_;
        }
        i.exports = function (_, T, k) {
          var N,
            S,
            F,
            j,
            I,
            O,
            R = 0,
            z = !1,
            K = !1,
            U = !0;
          if (typeof _ != "function")
            throw new TypeError("Expected a function");
          function D(se) {
            var ve = N,
              Ce = S;
            return (N = S = void 0), (R = se), (j = _.apply(Ce, ve));
          }
          function B(se) {
            return (R = se), (I = setTimeout(G, T)), z ? D(se) : j;
          }
          function W(se) {
            var ve = se - O;
            return O === void 0 || ve >= T || ve < 0 || (K && se - R >= F);
          }
          function G() {
            var se = p();
            if (W(se)) return te(se);
            I = setTimeout(
              G,
              (function (ve) {
                var Ce = T - (ve - O);
                return K ? f(Ce, F - (ve - R)) : Ce;
              })(se)
            );
          }
          function te(se) {
            return (I = void 0), U && N ? D(se) : ((N = S = void 0), j);
          }
          function de() {
            var se = p(),
              ve = W(se);
            if (((N = arguments), (S = this), (O = se), ve)) {
              if (I === void 0) return B(O);
              if (K) return (I = setTimeout(G, T)), D(O);
            }
            return I === void 0 && (I = setTimeout(G, T)), j;
          }
          return (
            (T = w(T) || 0),
            m(k) &&
              ((z = !!k.leading),
              (F = (K = "maxWait" in k) ? E(w(k.maxWait) || 0, T) : F),
              (U = "trailing" in k ? !!k.trailing : U)),
            (de.cancel = function () {
              I !== void 0 && clearTimeout(I),
                (R = 0),
                (N = O = S = I = void 0);
            }),
            (de.flush = function () {
              return I === void 0 ? j : te(p());
            }),
            de
          );
        };
      },
      96: (i, o, a) => {
        var l = "Expected a function",
          s = /^\s+|\s+$/g,
          u = /^[-+]0x[0-9a-f]+$/i,
          c = /^0b[01]+$/i,
          d = /^0o[0-7]+$/i,
          h = parseInt,
          g = typeof a.g == "object" && a.g && a.g.Object === Object && a.g,
          v = typeof self == "object" && self && self.Object === Object && self,
          b = g || v || Function("return this")(),
          E = Object.prototype.toString,
          f = Math.max,
          p = Math.min,
          m = function () {
            return b.Date.now();
          };
        function w(T) {
          var k = typeof T;
          return !!T && (k == "object" || k == "function");
        }
        function _(T) {
          if (typeof T == "number") return T;
          if (
            (function (S) {
              return (
                typeof S == "symbol" ||
                ((function (F) {
                  return !!F && typeof F == "object";
                })(S) &&
                  E.call(S) == "[object Symbol]")
              );
            })(T)
          )
            return NaN;
          if (w(T)) {
            var k = typeof T.valueOf == "function" ? T.valueOf() : T;
            T = w(k) ? k + "" : k;
          }
          if (typeof T != "string") return T === 0 ? T : +T;
          T = T.replace(s, "");
          var N = c.test(T);
          return N || d.test(T)
            ? h(T.slice(2), N ? 2 : 8)
            : u.test(T)
            ? NaN
            : +T;
        }
        i.exports = function (T, k, N) {
          var S = !0,
            F = !0;
          if (typeof T != "function") throw new TypeError(l);
          return (
            w(N) &&
              ((S = "leading" in N ? !!N.leading : S),
              (F = "trailing" in N ? !!N.trailing : F)),
            (function (j, I, O) {
              var R,
                z,
                K,
                U,
                D,
                B,
                W = 0,
                G = !1,
                te = !1,
                de = !0;
              if (typeof j != "function") throw new TypeError(l);
              function se(Se) {
                var De = R,
                  ze = z;
                return (R = z = void 0), (W = Se), (U = j.apply(ze, De));
              }
              function ve(Se) {
                return (W = Se), (D = setTimeout(Le, I)), G ? se(Se) : U;
              }
              function Ce(Se) {
                var De = Se - B;
                return B === void 0 || De >= I || De < 0 || (te && Se - W >= K);
              }
              function Le() {
                var Se = m();
                if (Ce(Se)) return nt(Se);
                D = setTimeout(
                  Le,
                  (function (De) {
                    var ze = I - (De - B);
                    return te ? p(ze, K - (De - W)) : ze;
                  })(Se)
                );
              }
              function nt(Se) {
                return (D = void 0), de && R ? se(Se) : ((R = z = void 0), U);
              }
              function Me() {
                var Se = m(),
                  De = Ce(Se);
                if (((R = arguments), (z = this), (B = Se), De)) {
                  if (D === void 0) return ve(B);
                  if (te) return (D = setTimeout(Le, I)), se(B);
                }
                return D === void 0 && (D = setTimeout(Le, I)), U;
              }
              return (
                (I = _(I) || 0),
                w(O) &&
                  ((G = !!O.leading),
                  (K = (te = "maxWait" in O) ? f(_(O.maxWait) || 0, I) : K),
                  (de = "trailing" in O ? !!O.trailing : de)),
                (Me.cancel = function () {
                  D !== void 0 && clearTimeout(D),
                    (W = 0),
                    (R = B = z = D = void 0);
                }),
                (Me.flush = function () {
                  return D === void 0 ? U : nt(m());
                }),
                Me
              );
            })(T, k, { leading: S, maxWait: k, trailing: F })
          );
        };
      },
      703: (i, o, a) => {
        var l = a(414);
        function s() {}
        function u() {}
        (u.resetWarningCache = s),
          (i.exports = function () {
            function c(g, v, b, E, f, p) {
              if (p !== l) {
                var m = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((m.name = "Invariant Violation"), m);
              }
            }
            function d() {
              return c;
            }
            c.isRequired = c;
            var h = {
              array: c,
              bool: c,
              func: c,
              number: c,
              object: c,
              string: c,
              symbol: c,
              any: c,
              arrayOf: d,
              element: c,
              elementType: c,
              instanceOf: d,
              node: c,
              objectOf: d,
              oneOf: d,
              oneOfType: d,
              shape: d,
              exact: d,
              checkPropTypes: u,
              resetWarningCache: s,
            };
            return (h.PropTypes = h), h;
          });
      },
      697: (i, o, a) => {
        i.exports = a(703)();
      },
      414: (i) => {
        i.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
    },
    t = {};
  function n(i) {
    var o = t[i];
    if (o !== void 0) return o.exports;
    var a = (t[i] = { exports: {} });
    return e[i](a, a.exports, n), a.exports;
  }
  (n.n = (i) => {
    var o = i && i.__esModule ? () => i.default : () => i;
    return n.d(o, { a: o }), o;
  }),
    (n.d = (i, o) => {
      for (var a in o)
        n.o(o, a) &&
          !n.o(i, a) &&
          Object.defineProperty(i, a, { enumerable: !0, get: o[a] });
    }),
    (n.g = (function () {
      if (typeof globalThis == "object") return globalThis;
      try {
        return this || new Function("return this")();
      } catch {
        if (typeof window == "object") return window;
      }
    })()),
    (n.o = (i, o) => Object.prototype.hasOwnProperty.call(i, o)),
    (n.r = (i) => {
      typeof Symbol < "u" &&
        Symbol.toStringTag &&
        Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(i, "__esModule", { value: !0 });
    });
  var r = {};
  (() => {
    n.r(r),
      n.d(r, {
        LazyLoadComponent: () => Gt,
        LazyLoadImage: () => hi,
        trackWindowScroll: () => G,
      });
    const i = C;
    var o = n.n(i),
      a = n(697);
    const l = nf;
    var s = n.n(l);
    function u() {
      return (
        typeof window < "u" &&
        "IntersectionObserver" in window &&
        "isIntersecting" in window.IntersectionObserverEntry.prototype
      );
    }
    function c(q) {
      return (c =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (x) {
              return typeof x;
            }
          : function (x) {
              return x &&
                typeof Symbol == "function" &&
                x.constructor === Symbol &&
                x !== Symbol.prototype
                ? "symbol"
                : typeof x;
            })(q);
    }
    function d(q, x) {
      var P = Object.keys(q);
      if (Object.getOwnPropertySymbols) {
        var L = Object.getOwnPropertySymbols(q);
        x &&
          (L = L.filter(function (Z) {
            return Object.getOwnPropertyDescriptor(q, Z).enumerable;
          })),
          P.push.apply(P, L);
      }
      return P;
    }
    function h(q, x, P) {
      return (
        x in q
          ? Object.defineProperty(q, x, {
              value: P,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (q[x] = P),
        q
      );
    }
    function g(q, x) {
      for (var P = 0; P < x.length; P++) {
        var L = x[P];
        (L.enumerable = L.enumerable || !1),
          (L.configurable = !0),
          "value" in L && (L.writable = !0),
          Object.defineProperty(q, L.key, L);
      }
    }
    function v(q, x) {
      return (v =
        Object.setPrototypeOf ||
        function (P, L) {
          return (P.__proto__ = L), P;
        })(q, x);
    }
    function b(q, x) {
      if (x && (c(x) === "object" || typeof x == "function")) return x;
      if (x !== void 0)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return (function (P) {
        if (P === void 0)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return P;
      })(q);
    }
    function E(q) {
      return (E = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (x) {
            return x.__proto__ || Object.getPrototypeOf(x);
          })(q);
    }
    var f = function (q) {
        q.forEach(function (x) {
          x.isIntersecting && x.target.onVisible();
        });
      },
      p = {},
      m = (function (q) {
        (function (A, $) {
          if (typeof $ != "function" && $ !== null)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (A.prototype = Object.create($ && $.prototype, {
            constructor: { value: A, writable: !0, configurable: !0 },
          })),
            $ && v(A, $);
        })(ee, q);
        var x,
          P,
          L,
          Z,
          ne =
            ((L = ee),
            (Z = (function () {
              if (
                typeof Reflect > "u" ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if (typeof Proxy == "function") return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch {
                return !1;
              }
            })()),
            function () {
              var A,
                $ = E(L);
              if (Z) {
                var H = E(this).constructor;
                A = Reflect.construct($, arguments, H);
              } else A = $.apply(this, arguments);
              return b(this, A);
            });
        function ee(A) {
          var $;
          if (
            ((function (Y, ie) {
              if (!(Y instanceof ie))
                throw new TypeError("Cannot call a class as a function");
            })(this, ee),
            (($ = ne.call(this, A)).supportsObserver =
              !A.scrollPosition && A.useIntersectionObserver && u()),
            $.supportsObserver)
          ) {
            var H = A.threshold;
            $.observer = (function (Y) {
              return (
                (p[Y] =
                  p[Y] ||
                  new IntersectionObserver(f, { rootMargin: Y + "px" })),
                p[Y]
              );
            })(H);
          }
          return $;
        }
        return (
          (x = ee),
          (P = [
            {
              key: "componentDidMount",
              value: function () {
                this.placeholder &&
                  this.observer &&
                  ((this.placeholder.onVisible = this.props.onVisible),
                  this.observer.observe(this.placeholder)),
                  this.supportsObserver || this.updateVisibility();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.observer &&
                  this.placeholder &&
                  this.observer.unobserve(this.placeholder);
              },
            },
            {
              key: "componentDidUpdate",
              value: function () {
                this.supportsObserver || this.updateVisibility();
              },
            },
            {
              key: "getPlaceholderBoundingBox",
              value: function () {
                var A =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : this.props.scrollPosition,
                  $ = this.placeholder.getBoundingClientRect(),
                  H = s().findDOMNode(this.placeholder).style,
                  Y = {
                    left: parseInt(H.getPropertyValue("margin-left"), 10) || 0,
                    top: parseInt(H.getPropertyValue("margin-top"), 10) || 0,
                  };
                return {
                  bottom: A.y + $.bottom + Y.top,
                  left: A.x + $.left + Y.left,
                  right: A.x + $.right + Y.left,
                  top: A.y + $.top + Y.top,
                };
              },
            },
            {
              key: "isPlaceholderInViewport",
              value: function () {
                if (typeof window > "u" || !this.placeholder) return !1;
                var A = this.props,
                  $ = A.scrollPosition,
                  H = A.threshold,
                  Y = this.getPlaceholderBoundingBox($),
                  ie = $.y + window.innerHeight,
                  pe = $.x,
                  he = $.x + window.innerWidth,
                  ue = $.y;
                return (
                  ue - H <= Y.bottom &&
                  ie + H >= Y.top &&
                  pe - H <= Y.right &&
                  he + H >= Y.left
                );
              },
            },
            {
              key: "updateVisibility",
              value: function () {
                this.isPlaceholderInViewport() && this.props.onVisible();
              },
            },
            {
              key: "render",
              value: function () {
                var A = this,
                  $ = this.props,
                  H = $.className,
                  Y = $.height,
                  ie = $.placeholder,
                  pe = $.style,
                  he = $.width;
                if (ie && typeof ie.type != "function")
                  return o().cloneElement(ie, {
                    ref: function (me) {
                      return (A.placeholder = me);
                    },
                  });
                var ue = (function (me) {
                  for (var je = 1; je < arguments.length; je++) {
                    var Oe = arguments[je] != null ? arguments[je] : {};
                    je % 2
                      ? d(Object(Oe), !0).forEach(function (Ue) {
                          h(me, Ue, Oe[Ue]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          me,
                          Object.getOwnPropertyDescriptors(Oe)
                        )
                      : d(Object(Oe)).forEach(function (Ue) {
                          Object.defineProperty(
                            me,
                            Ue,
                            Object.getOwnPropertyDescriptor(Oe, Ue)
                          );
                        });
                  }
                  return me;
                })({ display: "inline-block" }, pe);
                return (
                  he !== void 0 && (ue.width = he),
                  Y !== void 0 && (ue.height = Y),
                  o().createElement(
                    "span",
                    {
                      className: H,
                      ref: function (me) {
                        return (A.placeholder = me);
                      },
                      style: ue,
                    },
                    ie
                  )
                );
              },
            },
          ]) && g(x.prototype, P),
          ee
        );
      })(o().Component);
    (m.propTypes = {
      onVisible: a.PropTypes.func.isRequired,
      className: a.PropTypes.string,
      height: a.PropTypes.oneOfType([a.PropTypes.number, a.PropTypes.string]),
      placeholder: a.PropTypes.element,
      threshold: a.PropTypes.number,
      useIntersectionObserver: a.PropTypes.bool,
      scrollPosition: a.PropTypes.shape({
        x: a.PropTypes.number.isRequired,
        y: a.PropTypes.number.isRequired,
      }),
      width: a.PropTypes.oneOfType([a.PropTypes.number, a.PropTypes.string]),
    }),
      (m.defaultProps = {
        className: "",
        placeholder: null,
        threshold: 100,
        useIntersectionObserver: !0,
      });
    const w = m;
    var _ = n(296),
      T = n.n(_),
      k = n(96),
      N = n.n(k),
      S = function (q) {
        var x = getComputedStyle(q, null);
        return (
          x.getPropertyValue("overflow") +
          x.getPropertyValue("overflow-y") +
          x.getPropertyValue("overflow-x")
        );
      };
    const F = function (q) {
      if (!(q instanceof HTMLElement)) return window;
      for (var x = q; x && x instanceof HTMLElement; ) {
        if (/(scroll|auto)/.test(S(x))) return x;
        x = x.parentNode;
      }
      return window;
    };
    function j(q) {
      return (j =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (x) {
              return typeof x;
            }
          : function (x) {
              return x &&
                typeof Symbol == "function" &&
                x.constructor === Symbol &&
                x !== Symbol.prototype
                ? "symbol"
                : typeof x;
            })(q);
    }
    var I = ["delayMethod", "delayTime"];
    function O() {
      return (O =
        Object.assign ||
        function (q) {
          for (var x = 1; x < arguments.length; x++) {
            var P = arguments[x];
            for (var L in P)
              Object.prototype.hasOwnProperty.call(P, L) && (q[L] = P[L]);
          }
          return q;
        }).apply(this, arguments);
    }
    function R(q, x) {
      for (var P = 0; P < x.length; P++) {
        var L = x[P];
        (L.enumerable = L.enumerable || !1),
          (L.configurable = !0),
          "value" in L && (L.writable = !0),
          Object.defineProperty(q, L.key, L);
      }
    }
    function z(q, x) {
      return (z =
        Object.setPrototypeOf ||
        function (P, L) {
          return (P.__proto__ = L), P;
        })(q, x);
    }
    function K(q, x) {
      if (x && (j(x) === "object" || typeof x == "function")) return x;
      if (x !== void 0)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return U(q);
    }
    function U(q) {
      if (q === void 0)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return q;
    }
    function D(q) {
      return (D = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (x) {
            return x.__proto__ || Object.getPrototypeOf(x);
          })(q);
    }
    var B = function () {
        return typeof window > "u" ? 0 : window.scrollX || window.pageXOffset;
      },
      W = function () {
        return typeof window > "u" ? 0 : window.scrollY || window.pageYOffset;
      };
    const G = function (q) {
      var x = (function (P) {
        (function (H, Y) {
          if (typeof Y != "function" && Y !== null)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (H.prototype = Object.create(Y && Y.prototype, {
            constructor: { value: H, writable: !0, configurable: !0 },
          })),
            Y && z(H, Y);
        })($, P);
        var L,
          Z,
          ne,
          ee,
          A =
            ((ne = $),
            (ee = (function () {
              if (
                typeof Reflect > "u" ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if (typeof Proxy == "function") return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch {
                return !1;
              }
            })()),
            function () {
              var H,
                Y = D(ne);
              if (ee) {
                var ie = D(this).constructor;
                H = Reflect.construct(Y, arguments, ie);
              } else H = Y.apply(this, arguments);
              return K(this, H);
            });
        function $(H) {
          var Y;
          if (
            ((function (pe, he) {
              if (!(pe instanceof he))
                throw new TypeError("Cannot call a class as a function");
            })(this, $),
            ((Y = A.call(this, H)).useIntersectionObserver =
              H.useIntersectionObserver && u()),
            Y.useIntersectionObserver)
          )
            return K(Y);
          var ie = Y.onChangeScroll.bind(U(Y));
          return (
            H.delayMethod === "debounce"
              ? (Y.delayedScroll = T()(ie, H.delayTime))
              : H.delayMethod === "throttle" &&
                (Y.delayedScroll = N()(ie, H.delayTime)),
            (Y.state = { scrollPosition: { x: B(), y: W() } }),
            (Y.baseComponentRef = o().createRef()),
            Y
          );
        }
        return (
          (L = $),
          (Z = [
            {
              key: "componentDidMount",
              value: function () {
                this.addListeners();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.removeListeners();
              },
            },
            {
              key: "componentDidUpdate",
              value: function () {
                typeof window > "u" ||
                  this.useIntersectionObserver ||
                  (F(s().findDOMNode(this.baseComponentRef.current)) !==
                    this.scrollElement &&
                    (this.removeListeners(), this.addListeners()));
              },
            },
            {
              key: "addListeners",
              value: function () {
                typeof window > "u" ||
                  this.useIntersectionObserver ||
                  ((this.scrollElement = F(
                    s().findDOMNode(this.baseComponentRef.current)
                  )),
                  this.scrollElement.addEventListener(
                    "scroll",
                    this.delayedScroll,
                    { passive: !0 }
                  ),
                  window.addEventListener("resize", this.delayedScroll, {
                    passive: !0,
                  }),
                  this.scrollElement !== window &&
                    window.addEventListener("scroll", this.delayedScroll, {
                      passive: !0,
                    }));
              },
            },
            {
              key: "removeListeners",
              value: function () {
                typeof window > "u" ||
                  this.useIntersectionObserver ||
                  (this.scrollElement.removeEventListener(
                    "scroll",
                    this.delayedScroll
                  ),
                  window.removeEventListener("resize", this.delayedScroll),
                  this.scrollElement !== window &&
                    window.removeEventListener("scroll", this.delayedScroll));
              },
            },
            {
              key: "onChangeScroll",
              value: function () {
                this.useIntersectionObserver ||
                  this.setState({ scrollPosition: { x: B(), y: W() } });
              },
            },
            {
              key: "render",
              value: function () {
                var H = this.props,
                  Y =
                    (H.delayMethod,
                    H.delayTime,
                    (function (pe, he) {
                      if (pe == null) return {};
                      var ue,
                        me,
                        je = (function (Ue, ht) {
                          if (Ue == null) return {};
                          var Rt,
                            an,
                            Rn = {},
                            Ie = Object.keys(Ue);
                          for (an = 0; an < Ie.length; an++)
                            (Rt = Ie[an]),
                              ht.indexOf(Rt) >= 0 || (Rn[Rt] = Ue[Rt]);
                          return Rn;
                        })(pe, he);
                      if (Object.getOwnPropertySymbols) {
                        var Oe = Object.getOwnPropertySymbols(pe);
                        for (me = 0; me < Oe.length; me++)
                          (ue = Oe[me]),
                            he.indexOf(ue) >= 0 ||
                              (Object.prototype.propertyIsEnumerable.call(
                                pe,
                                ue
                              ) &&
                                (je[ue] = pe[ue]));
                      }
                      return je;
                    })(H, I)),
                  ie = this.useIntersectionObserver
                    ? null
                    : this.state.scrollPosition;
                return o().createElement(
                  q,
                  O(
                    { forwardRef: this.baseComponentRef, scrollPosition: ie },
                    Y
                  )
                );
              },
            },
          ]) && R(L.prototype, Z),
          $
        );
      })(o().Component);
      return (
        (x.propTypes = {
          delayMethod: a.PropTypes.oneOf(["debounce", "throttle"]),
          delayTime: a.PropTypes.number,
          useIntersectionObserver: a.PropTypes.bool,
        }),
        (x.defaultProps = {
          delayMethod: "throttle",
          delayTime: 300,
          useIntersectionObserver: !0,
        }),
        x
      );
    };
    function te(q) {
      return (te =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (x) {
              return typeof x;
            }
          : function (x) {
              return x &&
                typeof Symbol == "function" &&
                x.constructor === Symbol &&
                x !== Symbol.prototype
                ? "symbol"
                : typeof x;
            })(q);
    }
    function de(q, x) {
      for (var P = 0; P < x.length; P++) {
        var L = x[P];
        (L.enumerable = L.enumerable || !1),
          (L.configurable = !0),
          "value" in L && (L.writable = !0),
          Object.defineProperty(q, L.key, L);
      }
    }
    function se(q, x) {
      return (se =
        Object.setPrototypeOf ||
        function (P, L) {
          return (P.__proto__ = L), P;
        })(q, x);
    }
    function ve(q, x) {
      if (x && (te(x) === "object" || typeof x == "function")) return x;
      if (x !== void 0)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return (function (P) {
        if (P === void 0)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return P;
      })(q);
    }
    function Ce(q) {
      return (Ce = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (x) {
            return x.__proto__ || Object.getPrototypeOf(x);
          })(q);
    }
    var Le = (function (q) {
      (function (A, $) {
        if (typeof $ != "function" && $ !== null)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (A.prototype = Object.create($ && $.prototype, {
          constructor: { value: A, writable: !0, configurable: !0 },
        })),
          $ && se(A, $);
      })(ee, q);
      var x,
        P,
        L,
        Z,
        ne =
          ((L = ee),
          (Z = (function () {
            if (
              typeof Reflect > "u" ||
              !Reflect.construct ||
              Reflect.construct.sham
            )
              return !1;
            if (typeof Proxy == "function") return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch {
              return !1;
            }
          })()),
          function () {
            var A,
              $ = Ce(L);
            if (Z) {
              var H = Ce(this).constructor;
              A = Reflect.construct($, arguments, H);
            } else A = $.apply(this, arguments);
            return ve(this, A);
          });
      function ee(A) {
        return (
          (function ($, H) {
            if (!($ instanceof H))
              throw new TypeError("Cannot call a class as a function");
          })(this, ee),
          ne.call(this, A)
        );
      }
      return (
        (x = ee),
        (P = [
          {
            key: "render",
            value: function () {
              return o().createElement(w, this.props);
            },
          },
        ]) && de(x.prototype, P),
        ee
      );
    })(o().Component);
    const nt = G(Le);
    function Me(q) {
      return (Me =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (x) {
              return typeof x;
            }
          : function (x) {
              return x &&
                typeof Symbol == "function" &&
                x.constructor === Symbol &&
                x !== Symbol.prototype
                ? "symbol"
                : typeof x;
            })(q);
    }
    function Se(q, x) {
      for (var P = 0; P < x.length; P++) {
        var L = x[P];
        (L.enumerable = L.enumerable || !1),
          (L.configurable = !0),
          "value" in L && (L.writable = !0),
          Object.defineProperty(q, L.key, L);
      }
    }
    function De(q, x) {
      return (De =
        Object.setPrototypeOf ||
        function (P, L) {
          return (P.__proto__ = L), P;
        })(q, x);
    }
    function ze(q, x) {
      if (x && (Me(x) === "object" || typeof x == "function")) return x;
      if (x !== void 0)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return It(q);
    }
    function It(q) {
      if (q === void 0)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return q;
    }
    function on(q) {
      return (on = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (x) {
            return x.__proto__ || Object.getPrototypeOf(x);
          })(q);
    }
    var Nt = (function (q) {
      (function (A, $) {
        if (typeof $ != "function" && $ !== null)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (A.prototype = Object.create($ && $.prototype, {
          constructor: { value: A, writable: !0, configurable: !0 },
        })),
          $ && De(A, $);
      })(ee, q);
      var x,
        P,
        L,
        Z,
        ne =
          ((L = ee),
          (Z = (function () {
            if (
              typeof Reflect > "u" ||
              !Reflect.construct ||
              Reflect.construct.sham
            )
              return !1;
            if (typeof Proxy == "function") return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch {
              return !1;
            }
          })()),
          function () {
            var A,
              $ = on(L);
            if (Z) {
              var H = on(this).constructor;
              A = Reflect.construct($, arguments, H);
            } else A = $.apply(this, arguments);
            return ze(this, A);
          });
      function ee(A) {
        var $;
        (function (he, ue) {
          if (!(he instanceof ue))
            throw new TypeError("Cannot call a class as a function");
        })(this, ee),
          ($ = ne.call(this, A));
        var H = A.afterLoad,
          Y = A.beforeLoad,
          ie = A.scrollPosition,
          pe = A.visibleByDefault;
        return (
          ($.state = { visible: pe }),
          pe && (Y(), H()),
          ($.onVisible = $.onVisible.bind(It($))),
          ($.isScrollTracked = !!(
            ie &&
            Number.isFinite(ie.x) &&
            ie.x >= 0 &&
            Number.isFinite(ie.y) &&
            ie.y >= 0
          )),
          $
        );
      }
      return (
        (x = ee),
        (P = [
          {
            key: "componentDidUpdate",
            value: function (A, $) {
              $.visible !== this.state.visible && this.props.afterLoad();
            },
          },
          {
            key: "onVisible",
            value: function () {
              this.props.beforeLoad(), this.setState({ visible: !0 });
            },
          },
          {
            key: "render",
            value: function () {
              if (this.state.visible) return this.props.children;
              var A = this.props,
                $ = A.className,
                H = A.delayMethod,
                Y = A.delayTime,
                ie = A.height,
                pe = A.placeholder,
                he = A.scrollPosition,
                ue = A.style,
                me = A.threshold,
                je = A.useIntersectionObserver,
                Oe = A.width;
              return this.isScrollTracked || (je && u())
                ? o().createElement(w, {
                    className: $,
                    height: ie,
                    onVisible: this.onVisible,
                    placeholder: pe,
                    scrollPosition: he,
                    style: ue,
                    threshold: me,
                    useIntersectionObserver: je,
                    width: Oe,
                  })
                : o().createElement(nt, {
                    className: $,
                    delayMethod: H,
                    delayTime: Y,
                    height: ie,
                    onVisible: this.onVisible,
                    placeholder: pe,
                    style: ue,
                    threshold: me,
                    width: Oe,
                  });
            },
          },
        ]) && Se(x.prototype, P),
        ee
      );
    })(o().Component);
    (Nt.propTypes = {
      afterLoad: a.PropTypes.func,
      beforeLoad: a.PropTypes.func,
      useIntersectionObserver: a.PropTypes.bool,
      visibleByDefault: a.PropTypes.bool,
    }),
      (Nt.defaultProps = {
        afterLoad: function () {
          return {};
        },
        beforeLoad: function () {
          return {};
        },
        useIntersectionObserver: !0,
        visibleByDefault: !1,
      });
    const Gt = Nt;
    function ye(q) {
      return (ye =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (x) {
              return typeof x;
            }
          : function (x) {
              return x &&
                typeof Symbol == "function" &&
                x.constructor === Symbol &&
                x !== Symbol.prototype
                ? "symbol"
                : typeof x;
            })(q);
    }
    var ae = [
      "afterLoad",
      "beforeLoad",
      "delayMethod",
      "delayTime",
      "effect",
      "placeholder",
      "placeholderSrc",
      "scrollPosition",
      "threshold",
      "useIntersectionObserver",
      "visibleByDefault",
      "wrapperClassName",
      "wrapperProps",
    ];
    function ke(q, x) {
      var P = Object.keys(q);
      if (Object.getOwnPropertySymbols) {
        var L = Object.getOwnPropertySymbols(q);
        x &&
          (L = L.filter(function (Z) {
            return Object.getOwnPropertyDescriptor(q, Z).enumerable;
          })),
          P.push.apply(P, L);
      }
      return P;
    }
    function xe(q) {
      for (var x = 1; x < arguments.length; x++) {
        var P = arguments[x] != null ? arguments[x] : {};
        x % 2
          ? ke(Object(P), !0).forEach(function (L) {
              qe(q, L, P[L]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(q, Object.getOwnPropertyDescriptors(P))
          : ke(Object(P)).forEach(function (L) {
              Object.defineProperty(
                q,
                L,
                Object.getOwnPropertyDescriptor(P, L)
              );
            });
      }
      return q;
    }
    function qe(q, x, P) {
      return (
        x in q
          ? Object.defineProperty(q, x, {
              value: P,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (q[x] = P),
        q
      );
    }
    function Ye() {
      return (Ye =
        Object.assign ||
        function (q) {
          for (var x = 1; x < arguments.length; x++) {
            var P = arguments[x];
            for (var L in P)
              Object.prototype.hasOwnProperty.call(P, L) && (q[L] = P[L]);
          }
          return q;
        }).apply(this, arguments);
    }
    function pt(q, x) {
      for (var P = 0; P < x.length; P++) {
        var L = x[P];
        (L.enumerable = L.enumerable || !1),
          (L.configurable = !0),
          "value" in L && (L.writable = !0),
          Object.defineProperty(q, L.key, L);
      }
    }
    function On(q, x) {
      return (On =
        Object.setPrototypeOf ||
        function (P, L) {
          return (P.__proto__ = L), P;
        })(q, x);
    }
    function nr(q, x) {
      if (x && (ye(x) === "object" || typeof x == "function")) return x;
      if (x !== void 0)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return (function (P) {
        if (P === void 0)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return P;
      })(q);
    }
    function Nn(q) {
      return (Nn = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (x) {
            return x.__proto__ || Object.getPrototypeOf(x);
          })(q);
    }
    var jr = (function (q) {
      (function (A, $) {
        if (typeof $ != "function" && $ !== null)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (A.prototype = Object.create($ && $.prototype, {
          constructor: { value: A, writable: !0, configurable: !0 },
        })),
          $ && On(A, $);
      })(ee, q);
      var x,
        P,
        L,
        Z,
        ne =
          ((L = ee),
          (Z = (function () {
            if (
              typeof Reflect > "u" ||
              !Reflect.construct ||
              Reflect.construct.sham
            )
              return !1;
            if (typeof Proxy == "function") return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch {
              return !1;
            }
          })()),
          function () {
            var A,
              $ = Nn(L);
            if (Z) {
              var H = Nn(this).constructor;
              A = Reflect.construct($, arguments, H);
            } else A = $.apply(this, arguments);
            return nr(this, A);
          });
      function ee(A) {
        var $;
        return (
          (function (H, Y) {
            if (!(H instanceof Y))
              throw new TypeError("Cannot call a class as a function");
          })(this, ee),
          (($ = ne.call(this, A)).state = { loaded: !1 }),
          $
        );
      }
      return (
        (x = ee),
        (P = [
          {
            key: "onImageLoad",
            value: function () {
              var A = this;
              return this.state.loaded
                ? null
                : function () {
                    A.props.afterLoad(), A.setState({ loaded: !0 });
                  };
            },
          },
          {
            key: "getImg",
            value: function () {
              var A = this.props,
                $ =
                  (A.afterLoad,
                  A.beforeLoad,
                  A.delayMethod,
                  A.delayTime,
                  A.effect,
                  A.placeholder,
                  A.placeholderSrc,
                  A.scrollPosition,
                  A.threshold,
                  A.useIntersectionObserver,
                  A.visibleByDefault,
                  A.wrapperClassName,
                  A.wrapperProps,
                  (function (H, Y) {
                    if (H == null) return {};
                    var ie,
                      pe,
                      he = (function (me, je) {
                        if (me == null) return {};
                        var Oe,
                          Ue,
                          ht = {},
                          Rt = Object.keys(me);
                        for (Ue = 0; Ue < Rt.length; Ue++)
                          (Oe = Rt[Ue]),
                            je.indexOf(Oe) >= 0 || (ht[Oe] = me[Oe]);
                        return ht;
                      })(H, Y);
                    if (Object.getOwnPropertySymbols) {
                      var ue = Object.getOwnPropertySymbols(H);
                      for (pe = 0; pe < ue.length; pe++)
                        (ie = ue[pe]),
                          Y.indexOf(ie) >= 0 ||
                            (Object.prototype.propertyIsEnumerable.call(
                              H,
                              ie
                            ) &&
                              (he[ie] = H[ie]));
                    }
                    return he;
                  })(A, ae));
              return o().createElement(
                "img",
                Ye({ onLoad: this.onImageLoad() }, $)
              );
            },
          },
          {
            key: "getLazyLoadImage",
            value: function () {
              var A = this.props,
                $ = A.beforeLoad,
                H = A.className,
                Y = A.delayMethod,
                ie = A.delayTime,
                pe = A.height,
                he = A.placeholder,
                ue = A.scrollPosition,
                me = A.style,
                je = A.threshold,
                Oe = A.useIntersectionObserver,
                Ue = A.visibleByDefault,
                ht = A.width;
              return o().createElement(
                Gt,
                {
                  beforeLoad: $,
                  className: H,
                  delayMethod: Y,
                  delayTime: ie,
                  height: pe,
                  placeholder: he,
                  scrollPosition: ue,
                  style: me,
                  threshold: je,
                  useIntersectionObserver: Oe,
                  visibleByDefault: Ue,
                  width: ht,
                },
                this.getImg()
              );
            },
          },
          {
            key: "getWrappedLazyLoadImage",
            value: function (A) {
              var $ = this.props,
                H = $.effect,
                Y = $.height,
                ie = $.placeholderSrc,
                pe = $.width,
                he = $.wrapperClassName,
                ue = $.wrapperProps,
                me = this.state.loaded,
                je = me ? " lazy-load-image-loaded" : "",
                Oe =
                  me || !ie
                    ? {}
                    : {
                        backgroundImage: "url(".concat(ie, ")"),
                        backgroundSize: "100% 100%",
                      };
              return o().createElement(
                "span",
                Ye(
                  {
                    className: he + " lazy-load-image-background " + H + je,
                    style: xe(
                      xe({}, Oe),
                      {},
                      {
                        color: "transparent",
                        display: "inline-block",
                        height: Y,
                        width: pe,
                      }
                    ),
                  },
                  ue
                ),
                A
              );
            },
          },
          {
            key: "render",
            value: function () {
              var A = this.props,
                $ = A.effect,
                H = A.placeholderSrc,
                Y = A.visibleByDefault,
                ie = A.wrapperClassName,
                pe = A.wrapperProps,
                he = this.getLazyLoadImage();
              return (($ || H) && !Y) || ie || pe
                ? this.getWrappedLazyLoadImage(he)
                : he;
            },
          },
        ]) && pt(x.prototype, P),
        ee
      );
    })(o().Component);
    (jr.propTypes = {
      afterLoad: a.PropTypes.func,
      beforeLoad: a.PropTypes.func,
      delayMethod: a.PropTypes.string,
      delayTime: a.PropTypes.number,
      effect: a.PropTypes.string,
      placeholderSrc: a.PropTypes.string,
      threshold: a.PropTypes.number,
      useIntersectionObserver: a.PropTypes.bool,
      visibleByDefault: a.PropTypes.bool,
      wrapperClassName: a.PropTypes.string,
      wrapperProps: a.PropTypes.object,
    }),
      (jr.defaultProps = {
        afterLoad: function () {
          return {};
        },
        beforeLoad: function () {
          return {};
        },
        delayMethod: "throttle",
        delayTime: 300,
        effect: "",
        placeholderSrc: null,
        threshold: 100,
        useIntersectionObserver: !0,
        visibleByDefault: !1,
        wrapperClassName: "",
      });
    const hi = jr;
  })(),
    (Ky.exports = r);
})();
var _f = Ky.exports;
function $u({ images: e, config: t }) {
  return y.jsx(Ey, {
    ...t,
    children: y.jsx("div", {
      className: "bl-flex bl-space-x-[5px] bl-mr-[5px]",
      children: e.map((n, r) =>
        y.jsxs(
          "figure",
          {
            className:
              "bl-relative bl-overflow-hidden bl-isolate bl-rounded-[27px] bl-shadow-xl",
            children: [
              y.jsx(_f.LazyLoadImage, {
                src: n,
                alt: "banner",
                className:
                  "bl-w-[150px] md:bl-w-[246px] bl-h-[150px] md:bl-h-[246px] bl-object-cover bl-block",
              }),
              y.jsx("figcaption", {
                className:
                  "bl-absolute bl-bottom-0 lbl-eft-0 bl-w-full bl-h-full bl-bg-[#250830] bl-bg-opacity-80 bl-rounded-md",
              }),
            ],
          },
          r
        )
      ),
    }),
  });
}
function mk() {
  const e = Array.from(Array(12).keys()).map(
      (r) =>
        `https://www.bca.co.id/-/media/Files/2023/bangga-lokal/web/backdrop/backdrop-${
          r + 1
        }.jpg`
    ),
    t = Array.from(Array(12).keys()).map(
      (r) =>
        `https://www.bca.co.id/-/media/Files/2023/bangga-lokal/web/backdrop/backdrop-${
          r + 13
        }.jpg`
    ),
    n = Array.from(Array(12).keys()).map(
      (r) =>
        `https://www.bca.co.id/-/media/Files/2023/bangga-lokal/web/backdrop/backdrop-${
          r + 25
        }.jpg`
    );
  return y.jsxs("section", {
    id: "section-about",
    className: "bl-relative bl-py-5",
    children: [
      y.jsxs("div", {
        className: "bl-z-10 bl-flex bl-flex-col bl-gap-[5px]",
        children: [
          y.jsx($u, { images: e, config: { speed: 30, autoFill: !0 } }),
          y.jsx($u, {
            images: t,
            config: { speed: 20, autoFill: !0, direction: "right" },
          }),
          y.jsx($u, { images: n, config: { speed: 40, autoFill: !0 } }),
        ],
      }),
      y.jsx("div", {
        className:
          "bl-absolute bl-top-0 bl-left-0 bl-w-full bl-h-full bl-z-50 bl-flex bl-items-center",
        children: y.jsxs("div", {
          className: "bl-container bl-text-white bl-max-w-[1130px]",
          children: [
            y.jsx("div", {
              className:
                "bl-flex bl-justify-center bl-mb-[10px] md:bl-mb-[40px]",
              children: y.jsx(hk, {}),
            }),
            y.jsx("h3", {
              className:
                "bl-text-center bl-text-[20px] md:bl-text-[34px] bl-font-bold bl-leading-[1.4] bl-mb-[20px] md:bl-mb-[40px] text-shadow",
              children:
                "Program spesial dari BCA untuk mendukung para brand lokal yang memiliki semangat memajukan industri lokal dan ekonomi di Indonesia.",
            }),
            y.jsx("div", {
              className: "bl-flex bl-justify-center",
              children: y.jsx(ao, {
                link: "/merchant",
                title: "Gabung Jadi Merchant",
                onClick: () =>
                  ct({
                    event: "leadsengagement",
                    leads_action: "Gabung Jadi Merchant",
                    leads_detail: "Not Available",
                  }),
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
const gk =
  "https://www.bca.co.id/-/media/Files/2023/bangga-lokal/web/assets/card--arrow-circular.svg";
function ki({ title: e, image: t, url: n, color: r }) {
  const i = ce(
    "bl-flex bl-flex-col bl-justify-between bl-rounded-[20px] bl-isolate bl-overflow-hidden",
    Yt.card__category,
    {
      [Yt.card__category__yellow]: r === "yellow",
      [Yt.card__category__red]: r === "red",
      [Yt.card__category__white]: r === "white",
      [Yt.card__category__blue]: r === "blue",
      [Yt.card__category__blibli]: r === "blibli",
      [Yt.card__category__paserba]: r === "paserba",
    }
  );
  return y.jsxs("div", {
    className: i,
    children: [
      y.jsx("div", {
        className: "bl-bg-white",
        children: y.jsxs(Cn, {
          to: n,
          className:
            "bl-flex bl-justify-between bl-items-center bl-px-[20px] bl-h-[60px] md:bl-h-[84px]",
          children: [
            y.jsx("h3", {
              className:
                "font-poppins bl-max-w-[70%] bl-text-[14px]  md:bl-text-[24px] text-poppins bl-font-bold bl-leading-[1]",
              children: e,
            }),
            y.jsx("img", { src: gk, alt: "click" }),
          ],
        }),
      }),
      y.jsx("figure", {
        className: "bl-aspect-[1/1] bl-flex bl-items-center bl-justify-center",
        children: y.jsx("img", { src: t, alt: e, className: "bl-max-w-[90%]" }),
      }),
    ],
  });
}
const vk = "_categoryCard__list_ahm9s_2",
  tm = { categoryCard__list: vk };
function yk() {
  const [e, t] = C.useState(!0);
  return y.jsxs("section", {
    id: "section-categories",
    className: "bl-py-[80px] bl-mb-[40px]",
    children: [
      y.jsxs("div", {
        className: "bl-text-center bl-mb-5",
        children: [
          y.jsx("h2", {
            className:
              "bl-text-white text-poppins bl-font-bold bl-text-[40px] md:bl-text-[64px] bl-leading-[1.2] bl-mb-[15px] text-shadow",
            children: "Mau Belanja?",
          }),
          y.jsx("h3", {
            className:
              "bl-text-[#6F2989] bl-text-[25px] sm:bl-text-[40px] text-poppins bl-font-[500] bl-drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] bl-mb-[40px] lg:bl-mb-[20px]",
            children: "Cek kategori Promo yang kamu cari",
          }),
        ],
      }),
      y.jsx("div", {
        className: "bl-flex bl-justify-center bl-mb-[70px]",
        children: y.jsxs("div", {
          className: ce(
            "bl-bg-[#46394B] bl-p-[4px] bl-rounded-full bl-flex bl-gap-[3px] bl-justify-center"
          ),
          children: [
            y.jsx("button", {
              className: ce(
                Ao.btn__purple,
                "text-[14px] text-poppins",
                e ? "" : Ao.btn__purple_outline
              ),
              onClick: () => t(!0),
              children: "Kebanggaan Lokal",
            }),
            y.jsx("button", {
              className: ce(
                Ao.btn__purple,
                "text-[14px] text-poppins",
                e ? Ao.btn__purple_outline : ""
              ),
              onClick: () => t(!1),
              children: "Program Partner",
            }),
          ],
        }),
      }),
      e
        ? y.jsxs("div", {
            className: ce(
              "bl-container bl-grid bl-grid-cols-2 lg:bl-grid-cols-4 bl-gap-[10px] lg:bl-gap-[40px]",
              tm.categoryCard__list
            ),
            children: [
              y.jsx(ki, {
                title: "Fesyen",
                image:
                  "https://www.bca.co.id/-/media/Files/2023/bangga-lokal/web/images/cat-fesyen.png",
                color: "yellow",
                url: "/promo?category=2",
              }),
              y.jsx(ki, {
                title: "Makanan & Minuman",
                image:
                  "https://www.bca.co.id/-/media/Files/2023/bangga-lokal/web/images/cat-makanan-minuman.png",
                color: "white",
                url: "/promo?category=4",
              }),
              y.jsx(ki, {
                title: "Perawatan Diri",
                image:
                  "https://www.bca.co.id/-/media/Files/2023/bangga-lokal/web/images/cat-kesehatan-kecantikan.png",
                color: "red",
                url: "/promo?category=3",
              }),
              y.jsx(ki, {
                title: "Hobi & Aktivitas",
                image:
                  "https://www.bca.co.id/-/media/Files/2023/bangga-lokal/web/images/cat-aktivitas.png",
                color: "blue",
                url: "/promo?category=1",
              }),
            ],
          })
        : y.jsxs("div", {
            className: ce(
              "bl-container bl-grid bl-grid-cols-2 lg:bl-grid-cols-4 bl-gap-[10px] lg:bl-gap-[40px]",
              tm.categoryCard__list
            ),
            children: [
              y.jsx(ki, {
                title: "Blibli",
                image:
                  "https://www.bca.co.id/-/media/Files/2023/bangga-lokal/web/images/kolaberaksi--blibli.png",
                color: "blibli",
                url: "/kolaberaksi/blibli",
              }),
              y.jsx(ki, {
                title: "Expoversary 2024",
                image:
                  "https://storage.googleapis.com/mybca_bucket/Logo_BCA_Expoversary_2024_Blue_7f15131e95/Logo_BCA_Expoversary_2024_Blue_7f15131e95.png",
                color: "white",
                url: "/kolaberaksi/expoversary-2024",
              }),
            ],
          }),
      y.jsx("div", {
        className: "bl-flex bl-justify-center bl-mt-[40px]",
        children: y.jsx(ao, { link: "/promo", title: "Cek Semua Promo" }),
      }),
    ],
  });
}
function bk() {
  return (
    C.useEffect(() => {
      ct({ breadcrumb_detail: "Home Page" });
    }, []),
    y.jsxs(y.Fragment, {
      children: [
        y.jsx("div", {
          className: "bl-container bl-mb-[20px]",
          children: y.jsx(Ef, {}),
        }),
        y.jsx(mk, {}),
        y.jsx(yk, {}),
        y.jsx(_y, {}),
      ],
    })
  );
}
var zu = { exports: {} };
/*! @license DOMPurify 3.0.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.3/LICENSE */ var nm;
function rm() {
  return (
    nm ||
      ((nm = 1),
      (function (e, t) {
        (function (n, r) {
          e.exports = r();
        })(dm, function () {
          const {
            entries: n,
            setPrototypeOf: r,
            isFrozen: i,
            getPrototypeOf: o,
            getOwnPropertyDescriptor: a,
          } = Object;
          let { freeze: l, seal: s, create: u } = Object,
            { apply: c, construct: d } = typeof Reflect < "u" && Reflect;
          c ||
            (c = function (ae, ke, xe) {
              return ae.apply(ke, xe);
            }),
            l ||
              (l = function (ae) {
                return ae;
              }),
            s ||
              (s = function (ae) {
                return ae;
              }),
            d ||
              (d = function (ae, ke) {
                return new ae(...ke);
              });
          const h = k(Array.prototype.forEach),
            g = k(Array.prototype.pop),
            v = k(Array.prototype.push),
            b = k(String.prototype.toLowerCase),
            E = k(String.prototype.toString),
            f = k(String.prototype.match),
            p = k(String.prototype.replace),
            m = k(String.prototype.indexOf),
            w = k(String.prototype.trim),
            _ = k(RegExp.prototype.test),
            T = N(TypeError);
          function k(ye) {
            return function (ae) {
              for (
                var ke = arguments.length,
                  xe = new Array(ke > 1 ? ke - 1 : 0),
                  qe = 1;
                qe < ke;
                qe++
              )
                xe[qe - 1] = arguments[qe];
              return c(ye, ae, xe);
            };
          }
          function N(ye) {
            return function () {
              for (
                var ae = arguments.length, ke = new Array(ae), xe = 0;
                xe < ae;
                xe++
              )
                ke[xe] = arguments[xe];
              return d(ye, ke);
            };
          }
          function S(ye, ae, ke) {
            var xe;
            (ke = (xe = ke) !== null && xe !== void 0 ? xe : b),
              r && r(ye, null);
            let qe = ae.length;
            for (; qe--; ) {
              let Ye = ae[qe];
              if (typeof Ye == "string") {
                const pt = ke(Ye);
                pt !== Ye && (i(ae) || (ae[qe] = pt), (Ye = pt));
              }
              ye[Ye] = !0;
            }
            return ye;
          }
          function F(ye) {
            const ae = u(null);
            for (const [ke, xe] of n(ye)) ae[ke] = xe;
            return ae;
          }
          function j(ye, ae) {
            for (; ye !== null; ) {
              const xe = a(ye, ae);
              if (xe) {
                if (xe.get) return k(xe.get);
                if (typeof xe.value == "function") return k(xe.value);
              }
              ye = o(ye);
            }
            function ke(xe) {
              return console.warn("fallback value for", xe), null;
            }
            return ke;
          }
          const I = l([
              "a",
              "abbr",
              "acronym",
              "address",
              "area",
              "article",
              "aside",
              "audio",
              "b",
              "bdi",
              "bdo",
              "big",
              "blink",
              "blockquote",
              "body",
              "br",
              "button",
              "canvas",
              "caption",
              "center",
              "cite",
              "code",
              "col",
              "colgroup",
              "content",
              "data",
              "datalist",
              "dd",
              "decorator",
              "del",
              "details",
              "dfn",
              "dialog",
              "dir",
              "div",
              "dl",
              "dt",
              "element",
              "em",
              "fieldset",
              "figcaption",
              "figure",
              "font",
              "footer",
              "form",
              "h1",
              "h2",
              "h3",
              "h4",
              "h5",
              "h6",
              "head",
              "header",
              "hgroup",
              "hr",
              "html",
              "i",
              "img",
              "input",
              "ins",
              "kbd",
              "label",
              "legend",
              "li",
              "main",
              "map",
              "mark",
              "marquee",
              "menu",
              "menuitem",
              "meter",
              "nav",
              "nobr",
              "ol",
              "optgroup",
              "option",
              "output",
              "p",
              "picture",
              "pre",
              "progress",
              "q",
              "rp",
              "rt",
              "ruby",
              "s",
              "samp",
              "section",
              "select",
              "shadow",
              "small",
              "source",
              "spacer",
              "span",
              "strike",
              "strong",
              "style",
              "sub",
              "summary",
              "sup",
              "table",
              "tbody",
              "td",
              "template",
              "textarea",
              "tfoot",
              "th",
              "thead",
              "time",
              "tr",
              "track",
              "tt",
              "u",
              "ul",
              "var",
              "video",
              "wbr",
            ]),
            O = l([
              "svg",
              "a",
              "altglyph",
              "altglyphdef",
              "altglyphitem",
              "animatecolor",
              "animatemotion",
              "animatetransform",
              "circle",
              "clippath",
              "defs",
              "desc",
              "ellipse",
              "filter",
              "font",
              "g",
              "glyph",
              "glyphref",
              "hkern",
              "image",
              "line",
              "lineargradient",
              "marker",
              "mask",
              "metadata",
              "mpath",
              "path",
              "pattern",
              "polygon",
              "polyline",
              "radialgradient",
              "rect",
              "stop",
              "style",
              "switch",
              "symbol",
              "text",
              "textpath",
              "title",
              "tref",
              "tspan",
              "view",
              "vkern",
            ]),
            R = l([
              "feBlend",
              "feColorMatrix",
              "feComponentTransfer",
              "feComposite",
              "feConvolveMatrix",
              "feDiffuseLighting",
              "feDisplacementMap",
              "feDistantLight",
              "feDropShadow",
              "feFlood",
              "feFuncA",
              "feFuncB",
              "feFuncG",
              "feFuncR",
              "feGaussianBlur",
              "feImage",
              "feMerge",
              "feMergeNode",
              "feMorphology",
              "feOffset",
              "fePointLight",
              "feSpecularLighting",
              "feSpotLight",
              "feTile",
              "feTurbulence",
            ]),
            z = l([
              "animate",
              "color-profile",
              "cursor",
              "discard",
              "font-face",
              "font-face-format",
              "font-face-name",
              "font-face-src",
              "font-face-uri",
              "foreignobject",
              "hatch",
              "hatchpath",
              "mesh",
              "meshgradient",
              "meshpatch",
              "meshrow",
              "missing-glyph",
              "script",
              "set",
              "solidcolor",
              "unknown",
              "use",
            ]),
            K = l([
              "math",
              "menclose",
              "merror",
              "mfenced",
              "mfrac",
              "mglyph",
              "mi",
              "mlabeledtr",
              "mmultiscripts",
              "mn",
              "mo",
              "mover",
              "mpadded",
              "mphantom",
              "mroot",
              "mrow",
              "ms",
              "mspace",
              "msqrt",
              "mstyle",
              "msub",
              "msup",
              "msubsup",
              "mtable",
              "mtd",
              "mtext",
              "mtr",
              "munder",
              "munderover",
              "mprescripts",
            ]),
            U = l([
              "maction",
              "maligngroup",
              "malignmark",
              "mlongdiv",
              "mscarries",
              "mscarry",
              "msgroup",
              "mstack",
              "msline",
              "msrow",
              "semantics",
              "annotation",
              "annotation-xml",
              "mprescripts",
              "none",
            ]),
            D = l(["#text"]),
            B = l([
              "accept",
              "action",
              "align",
              "alt",
              "autocapitalize",
              "autocomplete",
              "autopictureinpicture",
              "autoplay",
              "background",
              "bgcolor",
              "border",
              "capture",
              "cellpadding",
              "cellspacing",
              "checked",
              "cite",
              "class",
              "clear",
              "color",
              "cols",
              "colspan",
              "controls",
              "controlslist",
              "coords",
              "crossorigin",
              "datetime",
              "decoding",
              "default",
              "dir",
              "disabled",
              "disablepictureinpicture",
              "disableremoteplayback",
              "download",
              "draggable",
              "enctype",
              "enterkeyhint",
              "face",
              "for",
              "headers",
              "height",
              "hidden",
              "high",
              "href",
              "hreflang",
              "id",
              "inputmode",
              "integrity",
              "ismap",
              "kind",
              "label",
              "lang",
              "list",
              "loading",
              "loop",
              "low",
              "max",
              "maxlength",
              "media",
              "method",
              "min",
              "minlength",
              "multiple",
              "muted",
              "name",
              "nonce",
              "noshade",
              "novalidate",
              "nowrap",
              "open",
              "optimum",
              "pattern",
              "placeholder",
              "playsinline",
              "poster",
              "preload",
              "pubdate",
              "radiogroup",
              "readonly",
              "rel",
              "required",
              "rev",
              "reversed",
              "role",
              "rows",
              "rowspan",
              "spellcheck",
              "scope",
              "selected",
              "shape",
              "size",
              "sizes",
              "span",
              "srclang",
              "start",
              "src",
              "srcset",
              "step",
              "style",
              "summary",
              "tabindex",
              "title",
              "translate",
              "type",
              "usemap",
              "valign",
              "value",
              "width",
              "xmlns",
              "slot",
            ]),
            W = l([
              "accent-height",
              "accumulate",
              "additive",
              "alignment-baseline",
              "ascent",
              "attributename",
              "attributetype",
              "azimuth",
              "basefrequency",
              "baseline-shift",
              "begin",
              "bias",
              "by",
              "class",
              "clip",
              "clippathunits",
              "clip-path",
              "clip-rule",
              "color",
              "color-interpolation",
              "color-interpolation-filters",
              "color-profile",
              "color-rendering",
              "cx",
              "cy",
              "d",
              "dx",
              "dy",
              "diffuseconstant",
              "direction",
              "display",
              "divisor",
              "dur",
              "edgemode",
              "elevation",
              "end",
              "fill",
              "fill-opacity",
              "fill-rule",
              "filter",
              "filterunits",
              "flood-color",
              "flood-opacity",
              "font-family",
              "font-size",
              "font-size-adjust",
              "font-stretch",
              "font-style",
              "font-variant",
              "font-weight",
              "fx",
              "fy",
              "g1",
              "g2",
              "glyph-name",
              "glyphref",
              "gradientunits",
              "gradienttransform",
              "height",
              "href",
              "id",
              "image-rendering",
              "in",
              "in2",
              "k",
              "k1",
              "k2",
              "k3",
              "k4",
              "kerning",
              "keypoints",
              "keysplines",
              "keytimes",
              "lang",
              "lengthadjust",
              "letter-spacing",
              "kernelmatrix",
              "kernelunitlength",
              "lighting-color",
              "local",
              "marker-end",
              "marker-mid",
              "marker-start",
              "markerheight",
              "markerunits",
              "markerwidth",
              "maskcontentunits",
              "maskunits",
              "max",
              "mask",
              "media",
              "method",
              "mode",
              "min",
              "name",
              "numoctaves",
              "offset",
              "operator",
              "opacity",
              "order",
              "orient",
              "orientation",
              "origin",
              "overflow",
              "paint-order",
              "path",
              "pathlength",
              "patterncontentunits",
              "patterntransform",
              "patternunits",
              "points",
              "preservealpha",
              "preserveaspectratio",
              "primitiveunits",
              "r",
              "rx",
              "ry",
              "radius",
              "refx",
              "refy",
              "repeatcount",
              "repeatdur",
              "restart",
              "result",
              "rotate",
              "scale",
              "seed",
              "shape-rendering",
              "specularconstant",
              "specularexponent",
              "spreadmethod",
              "startoffset",
              "stddeviation",
              "stitchtiles",
              "stop-color",
              "stop-opacity",
              "stroke-dasharray",
              "stroke-dashoffset",
              "stroke-linecap",
              "stroke-linejoin",
              "stroke-miterlimit",
              "stroke-opacity",
              "stroke",
              "stroke-width",
              "style",
              "surfacescale",
              "systemlanguage",
              "tabindex",
              "targetx",
              "targety",
              "transform",
              "transform-origin",
              "text-anchor",
              "text-decoration",
              "text-rendering",
              "textlength",
              "type",
              "u1",
              "u2",
              "unicode",
              "values",
              "viewbox",
              "visibility",
              "version",
              "vert-adv-y",
              "vert-origin-x",
              "vert-origin-y",
              "width",
              "word-spacing",
              "wrap",
              "writing-mode",
              "xchannelselector",
              "ychannelselector",
              "x",
              "x1",
              "x2",
              "xmlns",
              "y",
              "y1",
              "y2",
              "z",
              "zoomandpan",
            ]),
            G = l([
              "accent",
              "accentunder",
              "align",
              "bevelled",
              "close",
              "columnsalign",
              "columnlines",
              "columnspan",
              "denomalign",
              "depth",
              "dir",
              "display",
              "displaystyle",
              "encoding",
              "fence",
              "frame",
              "height",
              "href",
              "id",
              "largeop",
              "length",
              "linethickness",
              "lspace",
              "lquote",
              "mathbackground",
              "mathcolor",
              "mathsize",
              "mathvariant",
              "maxsize",
              "minsize",
              "movablelimits",
              "notation",
              "numalign",
              "open",
              "rowalign",
              "rowlines",
              "rowspacing",
              "rowspan",
              "rspace",
              "rquote",
              "scriptlevel",
              "scriptminsize",
              "scriptsizemultiplier",
              "selection",
              "separator",
              "separators",
              "stretchy",
              "subscriptshift",
              "supscriptshift",
              "symmetric",
              "voffset",
              "width",
              "xmlns",
            ]),
            te = l([
              "xlink:href",
              "xml:id",
              "xlink:title",
              "xml:space",
              "xmlns:xlink",
            ]),
            de = s(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
            se = s(/<%[\w\W]*|[\w\W]*%>/gm),
            ve = s(/\${[\w\W]*}/gm),
            Ce = s(/^data-[\-\w.\u00B7-\uFFFF]/),
            Le = s(/^aria-[\-\w]+$/),
            nt = s(
              /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
            ),
            Me = s(/^(?:\w+script|data):/i),
            Se = s(
              /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
            ),
            De = s(/^html$/i);
          var ze = Object.freeze({
            __proto__: null,
            MUSTACHE_EXPR: de,
            ERB_EXPR: se,
            TMPLIT_EXPR: ve,
            DATA_ATTR: Ce,
            ARIA_ATTR: Le,
            IS_ALLOWED_URI: nt,
            IS_SCRIPT_OR_DATA: Me,
            ATTR_WHITESPACE: Se,
            DOCTYPE_NAME: De,
          });
          const It = () => (typeof window > "u" ? null : window),
            on = function (ae, ke) {
              if (typeof ae != "object" || typeof ae.createPolicy != "function")
                return null;
              let xe = null;
              const qe = "data-tt-policy-suffix";
              ke && ke.hasAttribute(qe) && (xe = ke.getAttribute(qe));
              const Ye = "dompurify" + (xe ? "#" + xe : "");
              try {
                return ae.createPolicy(Ye, {
                  createHTML(pt) {
                    return pt;
                  },
                  createScriptURL(pt) {
                    return pt;
                  },
                });
              } catch {
                return (
                  console.warn(
                    "TrustedTypes policy " + Ye + " could not be created."
                  ),
                  null
                );
              }
            };
          function Nt() {
            let ye =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : It();
            const ae = (le) => Nt(le);
            if (
              ((ae.version = "3.0.3"),
              (ae.removed = []),
              !ye || !ye.document || ye.document.nodeType !== 9)
            )
              return (ae.isSupported = !1), ae;
            const ke = ye.document,
              xe = ke.currentScript;
            let { document: qe } = ye;
            const {
                DocumentFragment: Ye,
                HTMLTemplateElement: pt,
                Node: On,
                Element: nr,
                NodeFilter: Nn,
                NamedNodeMap: jr = ye.NamedNodeMap || ye.MozNamedAttrMap,
                HTMLFormElement: hi,
                DOMParser: q,
                trustedTypes: x,
              } = ye,
              P = nr.prototype,
              L = j(P, "cloneNode"),
              Z = j(P, "nextSibling"),
              ne = j(P, "childNodes"),
              ee = j(P, "parentNode");
            if (typeof pt == "function") {
              const le = qe.createElement("template");
              le.content &&
                le.content.ownerDocument &&
                (qe = le.content.ownerDocument);
            }
            let A,
              $ = "";
            const {
                implementation: H,
                createNodeIterator: Y,
                createDocumentFragment: ie,
                getElementsByTagName: pe,
              } = qe,
              { importNode: he } = ke;
            let ue = {};
            ae.isSupported =
              typeof n == "function" &&
              typeof ee == "function" &&
              H &&
              H.createHTMLDocument !== void 0;
            const {
              MUSTACHE_EXPR: me,
              ERB_EXPR: je,
              TMPLIT_EXPR: Oe,
              DATA_ATTR: Ue,
              ARIA_ATTR: ht,
              IS_SCRIPT_OR_DATA: Rt,
              ATTR_WHITESPACE: an,
            } = ze;
            let { IS_ALLOWED_URI: Rn } = ze,
              Ie = null;
            const Ar = S({}, [...I, ...O, ...R, ...K, ...D]);
            let ge = null;
            const _t = S({}, [...B, ...W, ...G, ...te]);
            let Ne = Object.seal(
                Object.create(null, {
                  tagNameCheck: {
                    writable: !0,
                    configurable: !1,
                    enumerable: !0,
                    value: null,
                  },
                  attributeNameCheck: {
                    writable: !0,
                    configurable: !1,
                    enumerable: !0,
                    value: null,
                  },
                  allowCustomizedBuiltInElements: {
                    writable: !0,
                    configurable: !1,
                    enumerable: !0,
                    value: !1,
                  },
                })
              ),
              Ln = null,
              mt = null,
              mi = !0,
              gi = !0,
              Na = !1,
              Df = !0,
              vi = !1,
              Dr = !1,
              Us = !1,
              Hs = !1,
              yi = !1,
              Ra = !1,
              La = !1,
              If = !0,
              Ff = !1;
            const hb = "user-content-";
            let Vs = !0,
              go = !1,
              bi = {},
              wi = null;
            const $f = S({}, [
              "annotation-xml",
              "audio",
              "colgroup",
              "desc",
              "foreignobject",
              "head",
              "iframe",
              "math",
              "mi",
              "mn",
              "mo",
              "ms",
              "mtext",
              "noembed",
              "noframes",
              "noscript",
              "plaintext",
              "script",
              "style",
              "svg",
              "template",
              "thead",
              "title",
              "video",
              "xmp",
            ]);
            let zf = null;
            const Bf = S({}, [
              "audio",
              "video",
              "img",
              "source",
              "image",
              "track",
            ]);
            let Ws = null;
            const Uf = S({}, [
                "alt",
                "class",
                "for",
                "id",
                "label",
                "name",
                "pattern",
                "placeholder",
                "role",
                "summary",
                "title",
                "value",
                "style",
                "xmlns",
              ]),
              Ma = "http://www.w3.org/1998/Math/MathML",
              ja = "http://www.w3.org/2000/svg",
              Mn = "http://www.w3.org/1999/xhtml";
            let xi = Mn,
              Gs = !1,
              qs = null;
            const mb = S({}, [Ma, ja, Mn], E);
            let Ir;
            const gb = ["application/xhtml+xml", "text/html"],
              vb = "text/html";
            let lt,
              Si = null;
            const yb = qe.createElement("form"),
              Hf = function (M) {
                return M instanceof RegExp || M instanceof Function;
              },
              Ks = function (M) {
                if (!(Si && Si === M)) {
                  if (
                    ((!M || typeof M != "object") && (M = {}),
                    (M = F(M)),
                    (Ir =
                      gb.indexOf(M.PARSER_MEDIA_TYPE) === -1
                        ? (Ir = vb)
                        : (Ir = M.PARSER_MEDIA_TYPE)),
                    (lt = Ir === "application/xhtml+xml" ? E : b),
                    (Ie = "ALLOWED_TAGS" in M ? S({}, M.ALLOWED_TAGS, lt) : Ar),
                    (ge = "ALLOWED_ATTR" in M ? S({}, M.ALLOWED_ATTR, lt) : _t),
                    (qs =
                      "ALLOWED_NAMESPACES" in M
                        ? S({}, M.ALLOWED_NAMESPACES, E)
                        : mb),
                    (Ws =
                      "ADD_URI_SAFE_ATTR" in M
                        ? S(F(Uf), M.ADD_URI_SAFE_ATTR, lt)
                        : Uf),
                    (zf =
                      "ADD_DATA_URI_TAGS" in M
                        ? S(F(Bf), M.ADD_DATA_URI_TAGS, lt)
                        : Bf),
                    (wi =
                      "FORBID_CONTENTS" in M
                        ? S({}, M.FORBID_CONTENTS, lt)
                        : $f),
                    (Ln = "FORBID_TAGS" in M ? S({}, M.FORBID_TAGS, lt) : {}),
                    (mt = "FORBID_ATTR" in M ? S({}, M.FORBID_ATTR, lt) : {}),
                    (bi = "USE_PROFILES" in M ? M.USE_PROFILES : !1),
                    (mi = M.ALLOW_ARIA_ATTR !== !1),
                    (gi = M.ALLOW_DATA_ATTR !== !1),
                    (Na = M.ALLOW_UNKNOWN_PROTOCOLS || !1),
                    (Df = M.ALLOW_SELF_CLOSE_IN_ATTR !== !1),
                    (vi = M.SAFE_FOR_TEMPLATES || !1),
                    (Dr = M.WHOLE_DOCUMENT || !1),
                    (yi = M.RETURN_DOM || !1),
                    (Ra = M.RETURN_DOM_FRAGMENT || !1),
                    (La = M.RETURN_TRUSTED_TYPE || !1),
                    (Hs = M.FORCE_BODY || !1),
                    (If = M.SANITIZE_DOM !== !1),
                    (Ff = M.SANITIZE_NAMED_PROPS || !1),
                    (Vs = M.KEEP_CONTENT !== !1),
                    (go = M.IN_PLACE || !1),
                    (Rn = M.ALLOWED_URI_REGEXP || nt),
                    (xi = M.NAMESPACE || Mn),
                    (Ne = M.CUSTOM_ELEMENT_HANDLING || {}),
                    M.CUSTOM_ELEMENT_HANDLING &&
                      Hf(M.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
                      (Ne.tagNameCheck =
                        M.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
                    M.CUSTOM_ELEMENT_HANDLING &&
                      Hf(M.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
                      (Ne.attributeNameCheck =
                        M.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
                    M.CUSTOM_ELEMENT_HANDLING &&
                      typeof M.CUSTOM_ELEMENT_HANDLING
                        .allowCustomizedBuiltInElements == "boolean" &&
                      (Ne.allowCustomizedBuiltInElements =
                        M.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
                    vi && (gi = !1),
                    Ra && (yi = !0),
                    bi &&
                      ((Ie = S({}, [...D])),
                      (ge = []),
                      bi.html === !0 && (S(Ie, I), S(ge, B)),
                      bi.svg === !0 && (S(Ie, O), S(ge, W), S(ge, te)),
                      bi.svgFilters === !0 && (S(Ie, R), S(ge, W), S(ge, te)),
                      bi.mathMl === !0 && (S(Ie, K), S(ge, G), S(ge, te))),
                    M.ADD_TAGS &&
                      (Ie === Ar && (Ie = F(Ie)), S(Ie, M.ADD_TAGS, lt)),
                    M.ADD_ATTR &&
                      (ge === _t && (ge = F(ge)), S(ge, M.ADD_ATTR, lt)),
                    M.ADD_URI_SAFE_ATTR && S(Ws, M.ADD_URI_SAFE_ATTR, lt),
                    M.FORBID_CONTENTS &&
                      (wi === $f && (wi = F(wi)), S(wi, M.FORBID_CONTENTS, lt)),
                    Vs && (Ie["#text"] = !0),
                    Dr && S(Ie, ["html", "head", "body"]),
                    Ie.table && (S(Ie, ["tbody"]), delete Ln.tbody),
                    M.TRUSTED_TYPES_POLICY)
                  ) {
                    if (typeof M.TRUSTED_TYPES_POLICY.createHTML != "function")
                      throw T(
                        'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.'
                      );
                    if (
                      typeof M.TRUSTED_TYPES_POLICY.createScriptURL !=
                      "function"
                    )
                      throw T(
                        'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.'
                      );
                    (A = M.TRUSTED_TYPES_POLICY), ($ = A.createHTML(""));
                  } else
                    A === void 0 && (A = on(x, xe)),
                      A !== null &&
                        typeof $ == "string" &&
                        ($ = A.createHTML(""));
                  l && l(M), (Si = M);
                }
              },
              Vf = S({}, ["mi", "mo", "mn", "ms", "mtext"]),
              Wf = S({}, ["foreignobject", "desc", "title", "annotation-xml"]),
              bb = S({}, ["title", "style", "font", "a", "script"]),
              Aa = S({}, O);
            S(Aa, R), S(Aa, z);
            const Qs = S({}, K);
            S(Qs, U);
            const wb = function (M) {
                let X = ee(M);
                (!X || !X.tagName) &&
                  (X = { namespaceURI: xi, tagName: "template" });
                const re = b(M.tagName),
                  Re = b(X.tagName);
                return qs[M.namespaceURI]
                  ? M.namespaceURI === ja
                    ? X.namespaceURI === Mn
                      ? re === "svg"
                      : X.namespaceURI === Ma
                      ? re === "svg" && (Re === "annotation-xml" || Vf[Re])
                      : !!Aa[re]
                    : M.namespaceURI === Ma
                    ? X.namespaceURI === Mn
                      ? re === "math"
                      : X.namespaceURI === ja
                      ? re === "math" && Wf[Re]
                      : !!Qs[re]
                    : M.namespaceURI === Mn
                    ? (X.namespaceURI === ja && !Wf[Re]) ||
                      (X.namespaceURI === Ma && !Vf[Re])
                      ? !1
                      : !Qs[re] && (bb[re] || !Aa[re])
                    : !!(Ir === "application/xhtml+xml" && qs[M.namespaceURI])
                  : !1;
              },
              Fr = function (M) {
                v(ae.removed, { element: M });
                try {
                  M.parentNode.removeChild(M);
                } catch {
                  M.remove();
                }
              },
              Ys = function (M, X) {
                try {
                  v(ae.removed, { attribute: X.getAttributeNode(M), from: X });
                } catch {
                  v(ae.removed, { attribute: null, from: X });
                }
                if ((X.removeAttribute(M), M === "is" && !ge[M]))
                  if (yi || Ra)
                    try {
                      Fr(X);
                    } catch {}
                  else
                    try {
                      X.setAttribute(M, "");
                    } catch {}
              },
              Gf = function (M) {
                let X, re;
                if (Hs) M = "<remove></remove>" + M;
                else {
                  const qt = f(M, /^[\r\n\t ]+/);
                  re = qt && qt[0];
                }
                Ir === "application/xhtml+xml" &&
                  xi === Mn &&
                  (M =
                    '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
                    M +
                    "</body></html>");
                const Re = A ? A.createHTML(M) : M;
                if (xi === Mn)
                  try {
                    X = new q().parseFromString(Re, Ir);
                  } catch {}
                if (!X || !X.documentElement) {
                  X = H.createDocument(xi, "template", null);
                  try {
                    X.documentElement.innerHTML = Gs ? $ : Re;
                  } catch {}
                }
                const st = X.body || X.documentElement;
                return (
                  M &&
                    re &&
                    st.insertBefore(
                      qe.createTextNode(re),
                      st.childNodes[0] || null
                    ),
                  xi === Mn
                    ? pe.call(X, Dr ? "html" : "body")[0]
                    : Dr
                    ? X.documentElement
                    : st
                );
              },
              qf = function (M) {
                return Y.call(
                  M.ownerDocument || M,
                  M,
                  Nn.SHOW_ELEMENT | Nn.SHOW_COMMENT | Nn.SHOW_TEXT,
                  null,
                  !1
                );
              },
              xb = function (M) {
                return (
                  M instanceof hi &&
                  (typeof M.nodeName != "string" ||
                    typeof M.textContent != "string" ||
                    typeof M.removeChild != "function" ||
                    !(M.attributes instanceof jr) ||
                    typeof M.removeAttribute != "function" ||
                    typeof M.setAttribute != "function" ||
                    typeof M.namespaceURI != "string" ||
                    typeof M.insertBefore != "function" ||
                    typeof M.hasChildNodes != "function")
                );
              },
              Da = function (M) {
                return typeof On == "object"
                  ? M instanceof On
                  : M &&
                      typeof M == "object" &&
                      typeof M.nodeType == "number" &&
                      typeof M.nodeName == "string";
              },
              jn = function (M, X, re) {
                ue[M] &&
                  h(ue[M], (Re) => {
                    Re.call(ae, X, re, Si);
                  });
              },
              Kf = function (M) {
                let X;
                if ((jn("beforeSanitizeElements", M, null), xb(M)))
                  return Fr(M), !0;
                const re = lt(M.nodeName);
                if (
                  (jn("uponSanitizeElement", M, {
                    tagName: re,
                    allowedTags: Ie,
                  }),
                  M.hasChildNodes() &&
                    !Da(M.firstElementChild) &&
                    (!Da(M.content) || !Da(M.content.firstElementChild)) &&
                    _(/<[/\w]/g, M.innerHTML) &&
                    _(/<[/\w]/g, M.textContent))
                )
                  return Fr(M), !0;
                if (!Ie[re] || Ln[re]) {
                  if (
                    !Ln[re] &&
                    Yf(re) &&
                    ((Ne.tagNameCheck instanceof RegExp &&
                      _(Ne.tagNameCheck, re)) ||
                      (Ne.tagNameCheck instanceof Function &&
                        Ne.tagNameCheck(re)))
                  )
                    return !1;
                  if (Vs && !wi[re]) {
                    const Re = ee(M) || M.parentNode,
                      st = ne(M) || M.childNodes;
                    if (st && Re) {
                      const qt = st.length;
                      for (let He = qt - 1; He >= 0; --He)
                        Re.insertBefore(L(st[He], !0), Z(M));
                    }
                  }
                  return Fr(M), !0;
                }
                return (M instanceof nr && !wb(M)) ||
                  ((re === "noscript" || re === "noembed") &&
                    _(/<\/no(script|embed)/i, M.innerHTML))
                  ? (Fr(M), !0)
                  : (vi &&
                      M.nodeType === 3 &&
                      ((X = M.textContent),
                      (X = p(X, me, " ")),
                      (X = p(X, je, " ")),
                      (X = p(X, Oe, " ")),
                      M.textContent !== X &&
                        (v(ae.removed, { element: M.cloneNode() }),
                        (M.textContent = X))),
                    jn("afterSanitizeElements", M, null),
                    !1);
              },
              Qf = function (M, X, re) {
                if (
                  If &&
                  (X === "id" || X === "name") &&
                  (re in qe || re in yb)
                )
                  return !1;
                if (!(gi && !mt[X] && _(Ue, X))) {
                  if (!(mi && _(ht, X))) {
                    if (!ge[X] || mt[X]) {
                      if (
                        !(
                          (Yf(M) &&
                            ((Ne.tagNameCheck instanceof RegExp &&
                              _(Ne.tagNameCheck, M)) ||
                              (Ne.tagNameCheck instanceof Function &&
                                Ne.tagNameCheck(M))) &&
                            ((Ne.attributeNameCheck instanceof RegExp &&
                              _(Ne.attributeNameCheck, X)) ||
                              (Ne.attributeNameCheck instanceof Function &&
                                Ne.attributeNameCheck(X)))) ||
                          (X === "is" &&
                            Ne.allowCustomizedBuiltInElements &&
                            ((Ne.tagNameCheck instanceof RegExp &&
                              _(Ne.tagNameCheck, re)) ||
                              (Ne.tagNameCheck instanceof Function &&
                                Ne.tagNameCheck(re))))
                        )
                      )
                        return !1;
                    } else if (!Ws[X]) {
                      if (!_(Rn, p(re, an, ""))) {
                        if (
                          !(
                            (X === "src" ||
                              X === "xlink:href" ||
                              X === "href") &&
                            M !== "script" &&
                            m(re, "data:") === 0 &&
                            zf[M]
                          )
                        ) {
                          if (!(Na && !_(Rt, p(re, an, "")))) {
                            if (re) return !1;
                          }
                        }
                      }
                    }
                  }
                }
                return !0;
              },
              Yf = function (M) {
                return M.indexOf("-") > 0;
              },
              Xf = function (M) {
                let X, re, Re, st;
                jn("beforeSanitizeAttributes", M, null);
                const { attributes: qt } = M;
                if (!qt) return;
                const He = {
                  attrName: "",
                  attrValue: "",
                  keepAttr: !0,
                  allowedAttributes: ge,
                };
                for (st = qt.length; st--; ) {
                  X = qt[st];
                  const { name: vn, namespaceURI: Xs } = X;
                  if (
                    ((re = vn === "value" ? X.value : w(X.value)),
                    (Re = lt(vn)),
                    (He.attrName = Re),
                    (He.attrValue = re),
                    (He.keepAttr = !0),
                    (He.forceKeepAttr = void 0),
                    jn("uponSanitizeAttribute", M, He),
                    (re = He.attrValue),
                    He.forceKeepAttr || (Ys(vn, M), !He.keepAttr))
                  )
                    continue;
                  if (!Df && _(/\/>/i, re)) {
                    Ys(vn, M);
                    continue;
                  }
                  vi &&
                    ((re = p(re, me, " ")),
                    (re = p(re, je, " ")),
                    (re = p(re, Oe, " ")));
                  const Jf = lt(M.nodeName);
                  if (Qf(Jf, Re, re)) {
                    if (
                      (Ff &&
                        (Re === "id" || Re === "name") &&
                        (Ys(vn, M), (re = hb + re)),
                      A &&
                        typeof x == "object" &&
                        typeof x.getAttributeType == "function" &&
                        !Xs)
                    )
                      switch (x.getAttributeType(Jf, Re)) {
                        case "TrustedHTML": {
                          re = A.createHTML(re);
                          break;
                        }
                        case "TrustedScriptURL": {
                          re = A.createScriptURL(re);
                          break;
                        }
                      }
                    try {
                      Xs
                        ? M.setAttributeNS(Xs, vn, re)
                        : M.setAttribute(vn, re),
                        g(ae.removed);
                    } catch {}
                  }
                }
                jn("afterSanitizeAttributes", M, null);
              },
              Sb = function le(M) {
                let X;
                const re = qf(M);
                for (
                  jn("beforeSanitizeShadowDOM", M, null);
                  (X = re.nextNode());

                )
                  jn("uponSanitizeShadowNode", X, null),
                    !Kf(X) && (X.content instanceof Ye && le(X.content), Xf(X));
                jn("afterSanitizeShadowDOM", M, null);
              };
            return (
              (ae.sanitize = function (le) {
                let M =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : {},
                  X,
                  re,
                  Re,
                  st;
                if (
                  ((Gs = !le),
                  Gs && (le = "<!-->"),
                  typeof le != "string" && !Da(le))
                )
                  if (typeof le.toString == "function") {
                    if (((le = le.toString()), typeof le != "string"))
                      throw T("dirty is not a string, aborting");
                  } else throw T("toString is not a function");
                if (!ae.isSupported) return le;
                if (
                  (Us || Ks(M),
                  (ae.removed = []),
                  typeof le == "string" && (go = !1),
                  go)
                ) {
                  if (le.nodeName) {
                    const vn = lt(le.nodeName);
                    if (!Ie[vn] || Ln[vn])
                      throw T(
                        "root node is forbidden and cannot be sanitized in-place"
                      );
                  }
                } else if (le instanceof On)
                  (X = Gf("<!---->")),
                    (re = X.ownerDocument.importNode(le, !0)),
                    (re.nodeType === 1 && re.nodeName === "BODY") ||
                    re.nodeName === "HTML"
                      ? (X = re)
                      : X.appendChild(re);
                else {
                  if (!yi && !vi && !Dr && le.indexOf("<") === -1)
                    return A && La ? A.createHTML(le) : le;
                  if (((X = Gf(le)), !X)) return yi ? null : La ? $ : "";
                }
                X && Hs && Fr(X.firstChild);
                const qt = qf(go ? le : X);
                for (; (Re = qt.nextNode()); )
                  Kf(Re) ||
                    (Re.content instanceof Ye && Sb(Re.content), Xf(Re));
                if (go) return le;
                if (yi) {
                  if (Ra)
                    for (st = ie.call(X.ownerDocument); X.firstChild; )
                      st.appendChild(X.firstChild);
                  else st = X;
                  return (
                    (ge.shadowroot || ge.shadowrootmod) &&
                      (st = he.call(ke, st, !0)),
                    st
                  );
                }
                let He = Dr ? X.outerHTML : X.innerHTML;
                return (
                  Dr &&
                    Ie["!doctype"] &&
                    X.ownerDocument &&
                    X.ownerDocument.doctype &&
                    X.ownerDocument.doctype.name &&
                    _(De, X.ownerDocument.doctype.name) &&
                    (He =
                      "<!DOCTYPE " +
                      X.ownerDocument.doctype.name +
                      `>
` +
                      He),
                  vi &&
                    ((He = p(He, me, " ")),
                    (He = p(He, je, " ")),
                    (He = p(He, Oe, " "))),
                  A && La ? A.createHTML(He) : He
                );
              }),
              (ae.setConfig = function (le) {
                Ks(le), (Us = !0);
              }),
              (ae.clearConfig = function () {
                (Si = null), (Us = !1);
              }),
              (ae.isValidAttribute = function (le, M, X) {
                Si || Ks({});
                const re = lt(le),
                  Re = lt(M);
                return Qf(re, Re, X);
              }),
              (ae.addHook = function (le, M) {
                typeof M == "function" &&
                  ((ue[le] = ue[le] || []), v(ue[le], M));
              }),
              (ae.removeHook = function (le) {
                if (ue[le]) return g(ue[le]);
              }),
              (ae.removeHooks = function (le) {
                ue[le] && (ue[le] = []);
              }),
              (ae.removeAllHooks = function () {
                ue = {};
              }),
              ae
            );
          }
          var Gt = Nt();
          return Gt;
        });
      })(zu)),
    zu.exports
  );
}
var wk = window.DOMPurify || (window.DOMPurify = rm().default || rm());
const xk = ga(wk);
var Sk = Object.defineProperty,
  Ek = (e, t, n) =>
    t in e
      ? Sk(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Bu = (e, t, n) => (Ek(e, typeof t != "symbol" ? t + "" : t, n), n);
let _k = class {
    constructor() {
      Bu(this, "current", this.detect()),
        Bu(this, "handoffState", "pending"),
        Bu(this, "currentId", 0);
    }
    set(t) {
      this.current !== t &&
        ((this.handoffState = "pending"),
        (this.currentId = 0),
        (this.current = t));
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
      return typeof window > "u" || typeof document > "u" ? "server" : "client";
    }
    handoff() {
      this.handoffState === "pending" && (this.handoffState = "complete");
    }
    get isHandoffComplete() {
      return this.handoffState === "complete";
    }
  },
  ti = new _k(),
  Tr = (e, t) => {
    ti.isServer ? C.useEffect(e, t) : C.useLayoutEffect(e, t);
  };
function mn(e) {
  let t = C.useRef(e);
  return (
    Tr(() => {
      t.current = e;
    }, [e]),
    t
  );
}
function Ck(e) {
  typeof queueMicrotask == "function"
    ? queueMicrotask(e)
    : Promise.resolve()
        .then(e)
        .catch((t) =>
          setTimeout(() => {
            throw t;
          })
        );
}
function Oa() {
  let e = [],
    t = {
      addEventListener(n, r, i, o) {
        return (
          n.addEventListener(r, i, o),
          t.add(() => n.removeEventListener(r, i, o))
        );
      },
      requestAnimationFrame(...n) {
        let r = requestAnimationFrame(...n);
        return t.add(() => cancelAnimationFrame(r));
      },
      nextFrame(...n) {
        return t.requestAnimationFrame(() => t.requestAnimationFrame(...n));
      },
      setTimeout(...n) {
        let r = setTimeout(...n);
        return t.add(() => clearTimeout(r));
      },
      microTask(...n) {
        let r = { current: !0 };
        return (
          Ck(() => {
            r.current && n[0]();
          }),
          t.add(() => {
            r.current = !1;
          })
        );
      },
      style(n, r, i) {
        let o = n.style.getPropertyValue(r);
        return (
          Object.assign(n.style, { [r]: i }),
          this.add(() => {
            Object.assign(n.style, { [r]: o });
          })
        );
      },
      group(n) {
        let r = Oa();
        return n(r), this.add(() => r.dispose());
      },
      add(n) {
        return (
          e.push(n),
          () => {
            let r = e.indexOf(n);
            if (r >= 0) for (let i of e.splice(r, 1)) i();
          }
        );
      },
      dispose() {
        for (let n of e.splice(0)) n();
      },
    };
  return t;
}
function Qy() {
  let [e] = C.useState(Oa);
  return C.useEffect(() => () => e.dispose(), [e]), e;
}
let Qe = function (e) {
  let t = mn(e);
  return J.useCallback((...n) => t.current(...n), [t]);
};
function Cf() {
  let [e, t] = C.useState(ti.isHandoffComplete);
  return (
    e && ti.isHandoffComplete === !1 && t(!1),
    C.useEffect(() => {
      e !== !0 && t(!0);
    }, [e]),
    C.useEffect(() => ti.handoff(), []),
    e
  );
}
var im;
let Qi =
  (im = J.useId) != null
    ? im
    : function () {
        let e = Cf(),
          [t, n] = J.useState(e ? () => ti.nextId() : null);
        return (
          Tr(() => {
            t === null && n(ti.nextId());
          }, [t]),
          t != null ? "" + t : void 0
        );
      };
function dt(e, t, ...n) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...n) : i;
  }
  let r = new Error(
    `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      t
    )
      .map((i) => `"${i}"`)
      .join(", ")}.`
  );
  throw (Error.captureStackTrace && Error.captureStackTrace(r, dt), r);
}
function kf(e) {
  return ti.isServer
    ? null
    : e instanceof Node
    ? e.ownerDocument
    : e != null && e.hasOwnProperty("current") && e.current instanceof Node
    ? e.current.ownerDocument
    : document;
}
let rd = [
  "[contentEditable=true]",
  "[tabindex]",
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "iframe",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
]
  .map((e) => `${e}:not([tabindex='-1'])`)
  .join(",");
var Un = ((e) => (
    (e[(e.First = 1)] = "First"),
    (e[(e.Previous = 2)] = "Previous"),
    (e[(e.Next = 4)] = "Next"),
    (e[(e.Last = 8)] = "Last"),
    (e[(e.WrapAround = 16)] = "WrapAround"),
    (e[(e.NoScroll = 32)] = "NoScroll"),
    e
  ))(Un || {}),
  ts = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(ts || {}),
  kk = ((e) => (
    (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
  ))(kk || {});
function Ms(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(rd)).sort((t, n) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (n.tabIndex || Number.MAX_SAFE_INTEGER)
        )
      );
}
var Tf = ((e) => (
  (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
))(Tf || {});
function Yy(e, t = 0) {
  var n;
  return e === ((n = kf(e)) == null ? void 0 : n.body)
    ? !1
    : dt(t, {
        [0]() {
          return e.matches(rd);
        },
        [1]() {
          let r = e;
          for (; r !== null; ) {
            if (r.matches(rd)) return !0;
            r = r.parentElement;
          }
          return !1;
        },
      });
}
var Tk = ((e) => (
  (e[(e.Keyboard = 0)] = "Keyboard"), (e[(e.Mouse = 1)] = "Mouse"), e
))(Tk || {});
typeof window < "u" &&
  typeof document < "u" &&
  (document.addEventListener(
    "keydown",
    (e) => {
      e.metaKey ||
        e.altKey ||
        e.ctrlKey ||
        (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0
  ),
  document.addEventListener(
    "click",
    (e) => {
      e.detail === 1
        ? delete document.documentElement.dataset.headlessuiFocusVisible
        : e.detail === 0 &&
          (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0
  ));
let Pk = ["textarea", "input"].join(",");
function Ok(e) {
  var t, n;
  return (n =
    (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Pk)) !=
    null
    ? n
    : !1;
}
function Nk(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let i = t(n),
      o = t(r);
    if (i === null || o === null) return 0;
    let a = i.compareDocumentPosition(o);
    return a & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : a & Node.DOCUMENT_POSITION_PRECEDING
      ? 1
      : 0;
  });
}
function Xr(
  e,
  t,
  { sorted: n = !0, relativeTo: r = null, skipElements: i = [] } = {}
) {
  let o = Array.isArray(e)
      ? e.length > 0
        ? e[0].ownerDocument
        : document
      : e.ownerDocument,
    a = Array.isArray(e) ? (n ? Nk(e) : e) : Ms(e);
  i.length > 0 && a.length > 1 && (a = a.filter((g) => !i.includes(g))),
    (r = r ?? o.activeElement);
  let l = (() => {
      if (t & 5) return 1;
      if (t & 10) return -1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
      );
    })(),
    s = (() => {
      if (t & 1) return 0;
      if (t & 2) return Math.max(0, a.indexOf(r)) - 1;
      if (t & 4) return Math.max(0, a.indexOf(r)) + 1;
      if (t & 8) return a.length - 1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
      );
    })(),
    u = t & 32 ? { preventScroll: !0 } : {},
    c = 0,
    d = a.length,
    h;
  do {
    if (c >= d || c + d <= 0) return 0;
    let g = s + c;
    if (t & 16) g = (g + d) % d;
    else {
      if (g < 0) return 3;
      if (g >= d) return 1;
    }
    (h = a[g]), h == null || h.focus(u), (c += l);
  } while (h !== o.activeElement);
  return t & 6 && Ok(h) && h.select(), 2;
}
function Uu(e, t, n) {
  let r = mn(t);
  C.useEffect(() => {
    function i(o) {
      r.current(o);
    }
    return (
      document.addEventListener(e, i, n),
      () => document.removeEventListener(e, i, n)
    );
  }, [e, n]);
}
function Rk(e, t, n = !0) {
  let r = C.useRef(!1);
  C.useEffect(() => {
    requestAnimationFrame(() => {
      r.current = n;
    });
  }, [n]);
  function i(a, l) {
    if (!r.current || a.defaultPrevented) return;
    let s = (function c(d) {
        return typeof d == "function"
          ? c(d())
          : Array.isArray(d) || d instanceof Set
          ? d
          : [d];
      })(e),
      u = l(a);
    if (u !== null && u.getRootNode().contains(u)) {
      for (let c of s) {
        if (c === null) continue;
        let d = c instanceof HTMLElement ? c : c.current;
        if (
          (d != null && d.contains(u)) ||
          (a.composed && a.composedPath().includes(d))
        )
          return;
      }
      return (
        !Yy(u, Tf.Loose) && u.tabIndex !== -1 && a.preventDefault(), t(a, u)
      );
    }
  }
  let o = C.useRef(null);
  Uu(
    "mousedown",
    (a) => {
      var l, s;
      r.current &&
        (o.current =
          ((s = (l = a.composedPath) == null ? void 0 : l.call(a)) == null
            ? void 0
            : s[0]) || a.target);
    },
    !0
  ),
    Uu(
      "click",
      (a) => {
        o.current && (i(a, () => o.current), (o.current = null));
      },
      !0
    ),
    Uu(
      "blur",
      (a) =>
        i(a, () =>
          window.document.activeElement instanceof HTMLIFrameElement
            ? window.document.activeElement
            : null
        ),
      !0
    );
}
function om(e) {
  var t;
  if (e.type) return e.type;
  let n = (t = e.as) != null ? t : "button";
  if (typeof n == "string" && n.toLowerCase() === "button") return "button";
}
function Lk(e, t) {
  let [n, r] = C.useState(() => om(e));
  return (
    Tr(() => {
      r(om(e));
    }, [e.type, e.as]),
    Tr(() => {
      n ||
        (t.current &&
          t.current instanceof HTMLButtonElement &&
          !t.current.hasAttribute("type") &&
          r("button"));
    }, [n, t]),
    n
  );
}
let Xy = Symbol();
function Mk(e, t = !0) {
  return Object.assign(e, { [Xy]: t });
}
function Pr(...e) {
  let t = C.useRef(e);
  C.useEffect(() => {
    t.current = e;
  }, [e]);
  let n = Qe((r) => {
    for (let i of t.current)
      i != null && (typeof i == "function" ? i(r) : (i.current = r));
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[Xy])) ? void 0 : n;
}
function id(...e) {
  return e.filter(Boolean).join(" ");
}
var so = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(so || {}),
  Hn = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))(Hn || {});
function Mr({
  ourProps: e,
  theirProps: t,
  slot: n,
  defaultTag: r,
  features: i,
  visible: o = !0,
  name: a,
}) {
  let l = Jy(t, e);
  if (o) return rl(l, n, r, a);
  let s = i ?? 0;
  if (s & 2) {
    let { static: u = !1, ...c } = l;
    if (u) return rl(c, n, r, a);
  }
  if (s & 1) {
    let { unmount: u = !0, ...c } = l;
    return dt(u ? 0 : 1, {
      [0]() {
        return null;
      },
      [1]() {
        return rl({ ...c, hidden: !0, style: { display: "none" } }, n, r, a);
      },
    });
  }
  return rl(l, n, r, a);
}
function rl(e, t = {}, n, r) {
  let {
      as: i = n,
      children: o,
      refName: a = "ref",
      ...l
    } = Hu(e, ["unmount", "static"]),
    s = e.ref !== void 0 ? { [a]: e.ref } : {},
    u = typeof o == "function" ? o(t) : o;
  "className" in l &&
    l.className &&
    typeof l.className == "function" &&
    (l.className = l.className(t));
  let c = {};
  if (t) {
    let d = !1,
      h = [];
    for (let [g, v] of Object.entries(t))
      typeof v == "boolean" && (d = !0), v === !0 && h.push(g);
    d && (c["data-headlessui-state"] = h.join(" "));
  }
  if (i === C.Fragment && Object.keys(am(l)).length > 0) {
    if (!C.isValidElement(u) || (Array.isArray(u) && u.length > 1))
      throw new Error(
        [
          'Passing props on "Fragment"!',
          "",
          `The current component <${r} /> is rendering a "Fragment".`,
          "However we need to passthrough the following props:",
          Object.keys(l).map((v) => `  - ${v}`).join(`
`),
          "",
          "You can apply a few solutions:",
          [
            'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
            "Render a single element as the child so that we can forward the props onto that element.",
          ].map((v) => `  - ${v}`).join(`
`),
        ].join(`
`)
      );
    let d = u.props,
      h =
        typeof (d == null ? void 0 : d.className) == "function"
          ? (...v) => id(d == null ? void 0 : d.className(...v), l.className)
          : id(d == null ? void 0 : d.className, l.className),
      g = h ? { className: h } : {};
    return C.cloneElement(
      u,
      Object.assign(
        {},
        Jy(u.props, am(Hu(l, ["ref"]))),
        c,
        s,
        jk(u.ref, s.ref),
        g
      )
    );
  }
  return C.createElement(
    i,
    Object.assign(
      {},
      Hu(l, ["ref"]),
      i !== C.Fragment && s,
      i !== C.Fragment && c
    ),
    u
  );
}
function jk(...e) {
  return {
    ref: e.every((t) => t == null)
      ? void 0
      : (t) => {
          for (let n of e)
            n != null && (typeof n == "function" ? n(t) : (n.current = t));
        },
  };
}
function Jy(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {},
    n = {};
  for (let r of e)
    for (let i in r)
      i.startsWith("on") && typeof r[i] == "function"
        ? (n[i] != null || (n[i] = []), n[i].push(r[i]))
        : (t[i] = r[i]);
  if (t.disabled || t["aria-disabled"])
    return Object.assign(
      t,
      Object.fromEntries(Object.keys(n).map((r) => [r, void 0]))
    );
  for (let r in n)
    Object.assign(t, {
      [r](i, ...o) {
        let a = n[r];
        for (let l of a) {
          if (
            (i instanceof Event ||
              (i == null ? void 0 : i.nativeEvent) instanceof Event) &&
            i.defaultPrevented
          )
            return;
          l(i, ...o);
        }
      },
    });
  return t;
}
function tr(e) {
  var t;
  return Object.assign(C.forwardRef(e), {
    displayName: (t = e.displayName) != null ? t : e.name,
  });
}
function am(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function Hu(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
function Zy(e) {
  let t = e.parentElement,
    n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (n = t), (t = t.parentElement);
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && Ak(n) ? !1 : r;
}
function Ak(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
let Dk = "div";
var ns = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.Focusable = 2)] = "Focusable"),
  (e[(e.Hidden = 4)] = "Hidden"),
  e
))(ns || {});
function Ik(e, t) {
  let { features: n = 1, ...r } = e,
    i = {
      ref: t,
      "aria-hidden": (n & 2) === 2 ? !0 : void 0,
      style: {
        position: "fixed",
        top: 1,
        left: 1,
        width: 1,
        height: 0,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        borderWidth: "0",
        ...((n & 4) === 4 && (n & 2) !== 2 && { display: "none" }),
      },
    };
  return Mr({
    ourProps: i,
    theirProps: r,
    slot: {},
    defaultTag: Dk,
    name: "Hidden",
  });
}
let od = tr(Ik),
  Pf = C.createContext(null);
Pf.displayName = "OpenClosedContext";
var kt = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(kt || {});
function js() {
  return C.useContext(Pf);
}
function eb({ value: e, children: t }) {
  return J.createElement(Pf.Provider, { value: e }, t);
}
var dr = ((e) => (
  (e.Space = " "),
  (e.Enter = "Enter"),
  (e.Escape = "Escape"),
  (e.Backspace = "Backspace"),
  (e.Delete = "Delete"),
  (e.ArrowLeft = "ArrowLeft"),
  (e.ArrowUp = "ArrowUp"),
  (e.ArrowRight = "ArrowRight"),
  (e.ArrowDown = "ArrowDown"),
  (e.Home = "Home"),
  (e.End = "End"),
  (e.PageUp = "PageUp"),
  (e.PageDown = "PageDown"),
  (e.Tab = "Tab"),
  e
))(dr || {});
function Fk(e, t, n) {
  let r = mn(t);
  C.useEffect(() => {
    function i(o) {
      r.current(o);
    }
    return (
      window.addEventListener(e, i, n),
      () => window.removeEventListener(e, i, n)
    );
  }, [e, n]);
}
var Vn = ((e) => (
  (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
))(Vn || {});
function tb() {
  let e = C.useRef(0);
  return (
    Fk(
      "keydown",
      (t) => {
        t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
      },
      !0
    ),
    e
  );
}
function Of() {
  let e = C.useRef(!1);
  return (
    Tr(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function Nf(...e) {
  return C.useMemo(() => kf(...e), [...e]);
}
function $k(e, t, n, r) {
  let i = mn(n);
  C.useEffect(() => {
    e = e ?? window;
    function o(a) {
      i.current(a);
    }
    return e.addEventListener(t, o, r), () => e.removeEventListener(t, o, r);
  }, [e, t, r]);
}
var zk = ((e) => (
    (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
  ))(zk || {}),
  Bk = ((e) => (
    (e[(e.TogglePopover = 0)] = "TogglePopover"),
    (e[(e.ClosePopover = 1)] = "ClosePopover"),
    (e[(e.SetButton = 2)] = "SetButton"),
    (e[(e.SetButtonId = 3)] = "SetButtonId"),
    (e[(e.SetPanel = 4)] = "SetPanel"),
    (e[(e.SetPanelId = 5)] = "SetPanelId"),
    e
  ))(Bk || {});
let Uk = {
    [0]: (e) => ({
      ...e,
      popoverState: dt(e.popoverState, { [0]: 1, [1]: 0 }),
    }),
    [1](e) {
      return e.popoverState === 1 ? e : { ...e, popoverState: 1 };
    },
    [2](e, t) {
      return e.button === t.button ? e : { ...e, button: t.button };
    },
    [3](e, t) {
      return e.buttonId === t.buttonId ? e : { ...e, buttonId: t.buttonId };
    },
    [4](e, t) {
      return e.panel === t.panel ? e : { ...e, panel: t.panel };
    },
    [5](e, t) {
      return e.panelId === t.panelId ? e : { ...e, panelId: t.panelId };
    },
  },
  Rf = C.createContext(null);
Rf.displayName = "PopoverContext";
function As(e) {
  let t = C.useContext(Rf);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Popover /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, As), n);
  }
  return t;
}
let Lf = C.createContext(null);
Lf.displayName = "PopoverAPIContext";
function Mf(e) {
  let t = C.useContext(Lf);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Popover /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, Mf), n);
  }
  return t;
}
let jf = C.createContext(null);
jf.displayName = "PopoverGroupContext";
function nb() {
  return C.useContext(jf);
}
let Ds = C.createContext(null);
Ds.displayName = "PopoverPanelContext";
function Hk() {
  return C.useContext(Ds);
}
function Vk(e, t) {
  return dt(t.type, Uk, e, t);
}
let Wk = "div";
function Gk(e, t) {
  var n;
  let r = C.useRef(null),
    i = Pr(
      t,
      Mk((I) => {
        r.current = I;
      })
    ),
    o = C.useRef([]),
    a = C.useReducer(Vk, {
      popoverState: 1,
      buttons: o,
      button: null,
      buttonId: null,
      panel: null,
      panelId: null,
      beforePanelSentinel: C.createRef(),
      afterPanelSentinel: C.createRef(),
    }),
    [
      {
        popoverState: l,
        button: s,
        buttonId: u,
        panel: c,
        panelId: d,
        beforePanelSentinel: h,
        afterPanelSentinel: g,
      },
      v,
    ] = a,
    b = Nf((n = r.current) != null ? n : s),
    E = C.useMemo(() => {
      if (!s || !c) return !1;
      for (let D of document.querySelectorAll("body > *"))
        if (
          Number(D == null ? void 0 : D.contains(s)) ^
          Number(D == null ? void 0 : D.contains(c))
        )
          return !0;
      let I = Ms(),
        O = I.indexOf(s),
        R = (O + I.length - 1) % I.length,
        z = (O + 1) % I.length,
        K = I[R],
        U = I[z];
      return !c.contains(K) && !c.contains(U);
    }, [s, c]),
    f = mn(u),
    p = mn(d),
    m = C.useMemo(
      () => ({ buttonId: f, panelId: p, close: () => v({ type: 1 }) }),
      [f, p, v]
    ),
    w = nb(),
    _ = w == null ? void 0 : w.registerPopover,
    T = Qe(() => {
      var I;
      return (I = w == null ? void 0 : w.isFocusWithinPopoverGroup()) != null
        ? I
        : (b == null ? void 0 : b.activeElement) &&
            ((s == null ? void 0 : s.contains(b.activeElement)) ||
              (c == null ? void 0 : c.contains(b.activeElement)));
    });
  C.useEffect(() => (_ == null ? void 0 : _(m)), [_, m]),
    $k(
      b == null ? void 0 : b.defaultView,
      "focus",
      (I) => {
        var O, R, z, K;
        l === 0 &&
          (T() ||
            (s &&
              c &&
              I.target !== window &&
              (((R = (O = h.current) == null ? void 0 : O.contains) != null &&
                R.call(O, I.target)) ||
                ((K = (z = g.current) == null ? void 0 : z.contains) != null &&
                  K.call(z, I.target)) ||
                v({ type: 1 }))));
      },
      !0
    ),
    Rk(
      [s, c],
      (I, O) => {
        v({ type: 1 }),
          Yy(O, Tf.Loose) || (I.preventDefault(), s == null || s.focus());
      },
      l === 0
    );
  let k = Qe((I) => {
      v({ type: 1 });
      let O = (() =>
        I
          ? I instanceof HTMLElement
            ? I
            : "current" in I && I.current instanceof HTMLElement
            ? I.current
            : s
          : s)();
      O == null || O.focus();
    }),
    N = C.useMemo(() => ({ close: k, isPortalled: E }), [k, E]),
    S = C.useMemo(() => ({ open: l === 0, close: k }), [l, k]),
    F = e,
    j = { ref: i };
  return J.createElement(
    Ds.Provider,
    { value: null },
    J.createElement(
      Rf.Provider,
      { value: a },
      J.createElement(
        Lf.Provider,
        { value: N },
        J.createElement(
          eb,
          { value: dt(l, { [0]: kt.Open, [1]: kt.Closed }) },
          Mr({
            ourProps: j,
            theirProps: F,
            slot: S,
            defaultTag: Wk,
            name: "Popover",
          })
        )
      )
    )
  );
}
let qk = "button";
function Kk(e, t) {
  let n = Qi(),
    { id: r = `headlessui-popover-button-${n}`, ...i } = e,
    [o, a] = As("Popover.Button"),
    { isPortalled: l } = Mf("Popover.Button"),
    s = C.useRef(null),
    u = `headlessui-focus-sentinel-${Qi()}`,
    c = nb(),
    d = c == null ? void 0 : c.closeOthers,
    h = Hk() !== null;
  C.useEffect(() => {
    if (!h)
      return (
        a({ type: 3, buttonId: r }),
        () => {
          a({ type: 3, buttonId: null });
        }
      );
  }, [h, r, a]);
  let [g] = C.useState(() => Symbol()),
    v = Pr(
      s,
      t,
      h
        ? null
        : (j) => {
            if (j) o.buttons.current.push(g);
            else {
              let I = o.buttons.current.indexOf(g);
              I !== -1 && o.buttons.current.splice(I, 1);
            }
            o.buttons.current.length > 1 &&
              console.warn(
                "You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."
              ),
              j && a({ type: 2, button: j });
          }
    ),
    b = Pr(s, t),
    E = Nf(s),
    f = Qe((j) => {
      var I, O, R;
      if (h) {
        if (o.popoverState === 1) return;
        switch (j.key) {
          case dr.Space:
          case dr.Enter:
            j.preventDefault(),
              (O = (I = j.target).click) == null || O.call(I),
              a({ type: 1 }),
              (R = o.button) == null || R.focus();
            break;
        }
      } else
        switch (j.key) {
          case dr.Space:
          case dr.Enter:
            j.preventDefault(),
              j.stopPropagation(),
              o.popoverState === 1 && (d == null || d(o.buttonId)),
              a({ type: 0 });
            break;
          case dr.Escape:
            if (o.popoverState !== 0) return d == null ? void 0 : d(o.buttonId);
            if (
              !s.current ||
              (E != null &&
                E.activeElement &&
                !s.current.contains(E.activeElement))
            )
              return;
            j.preventDefault(), j.stopPropagation(), a({ type: 1 });
            break;
        }
    }),
    p = Qe((j) => {
      h || (j.key === dr.Space && j.preventDefault());
    }),
    m = Qe((j) => {
      var I, O;
      Zy(j.currentTarget) ||
        e.disabled ||
        (h
          ? (a({ type: 1 }), (I = o.button) == null || I.focus())
          : (j.preventDefault(),
            j.stopPropagation(),
            o.popoverState === 1 && (d == null || d(o.buttonId)),
            a({ type: 0 }),
            (O = o.button) == null || O.focus()));
    }),
    w = Qe((j) => {
      j.preventDefault(), j.stopPropagation();
    }),
    _ = o.popoverState === 0,
    T = C.useMemo(() => ({ open: _ }), [_]),
    k = Lk(e, s),
    N = h
      ? { ref: b, type: k, onKeyDown: f, onClick: m }
      : {
          ref: v,
          id: o.buttonId,
          type: k,
          "aria-expanded": e.disabled ? void 0 : o.popoverState === 0,
          "aria-controls": o.panel ? o.panelId : void 0,
          onKeyDown: f,
          onKeyUp: p,
          onClick: m,
          onMouseDown: w,
        },
    S = tb(),
    F = Qe(() => {
      let j = o.panel;
      if (!j) return;
      function I() {
        dt(S.current, {
          [Vn.Forwards]: () => Xr(j, Un.First),
          [Vn.Backwards]: () => Xr(j, Un.Last),
        }) === ts.Error &&
          Xr(
            Ms().filter((O) => O.dataset.headlessuiFocusGuard !== "true"),
            dt(S.current, {
              [Vn.Forwards]: Un.Next,
              [Vn.Backwards]: Un.Previous,
            }),
            { relativeTo: o.button }
          );
      }
      I();
    });
  return J.createElement(
    J.Fragment,
    null,
    Mr({
      ourProps: N,
      theirProps: i,
      slot: T,
      defaultTag: qk,
      name: "Popover.Button",
    }),
    _ &&
      !h &&
      l &&
      J.createElement(od, {
        id: u,
        features: ns.Focusable,
        "data-headlessui-focus-guard": !0,
        as: "button",
        type: "button",
        onFocus: F,
      })
  );
}
let Qk = "div",
  Yk = so.RenderStrategy | so.Static;
function Xk(e, t) {
  let n = Qi(),
    { id: r = `headlessui-popover-overlay-${n}`, ...i } = e,
    [{ popoverState: o }, a] = As("Popover.Overlay"),
    l = Pr(t),
    s = js(),
    u = (() => (s !== null ? (s & kt.Open) === kt.Open : o === 0))(),
    c = Qe((h) => {
      if (Zy(h.currentTarget)) return h.preventDefault();
      a({ type: 1 });
    }),
    d = C.useMemo(() => ({ open: o === 0 }), [o]);
  return Mr({
    ourProps: { ref: l, id: r, "aria-hidden": !0, onClick: c },
    theirProps: i,
    slot: d,
    defaultTag: Qk,
    features: Yk,
    visible: u,
    name: "Popover.Overlay",
  });
}
let Jk = "div",
  Zk = so.RenderStrategy | so.Static;
function eT(e, t) {
  let n = Qi(),
    { id: r = `headlessui-popover-panel-${n}`, focus: i = !1, ...o } = e,
    [a, l] = As("Popover.Panel"),
    { close: s, isPortalled: u } = Mf("Popover.Panel"),
    c = `headlessui-focus-sentinel-before-${Qi()}`,
    d = `headlessui-focus-sentinel-after-${Qi()}`,
    h = C.useRef(null),
    g = Pr(h, t, (k) => {
      l({ type: 4, panel: k });
    }),
    v = Nf(h);
  Tr(
    () => (
      l({ type: 5, panelId: r }),
      () => {
        l({ type: 5, panelId: null });
      }
    ),
    [r, l]
  );
  let b = js(),
    E = (() =>
      b !== null ? (b & kt.Open) === kt.Open : a.popoverState === 0)(),
    f = Qe((k) => {
      var N;
      switch (k.key) {
        case dr.Escape:
          if (
            a.popoverState !== 0 ||
            !h.current ||
            (v != null &&
              v.activeElement &&
              !h.current.contains(v.activeElement))
          )
            return;
          k.preventDefault(),
            k.stopPropagation(),
            l({ type: 1 }),
            (N = a.button) == null || N.focus();
          break;
      }
    });
  C.useEffect(() => {
    var k;
    e.static ||
      (a.popoverState === 1 &&
        ((k = e.unmount) == null || k) &&
        l({ type: 4, panel: null }));
  }, [a.popoverState, e.unmount, e.static, l]),
    C.useEffect(() => {
      if (!i || a.popoverState !== 0 || !h.current) return;
      let k = v == null ? void 0 : v.activeElement;
      h.current.contains(k) || Xr(h.current, Un.First);
    }, [i, h, a.popoverState]);
  let p = C.useMemo(() => ({ open: a.popoverState === 0, close: s }), [a, s]),
    m = {
      ref: g,
      id: r,
      onKeyDown: f,
      onBlur:
        i && a.popoverState === 0
          ? (k) => {
              var N, S, F, j, I;
              let O = k.relatedTarget;
              O &&
                h.current &&
                (((N = h.current) != null && N.contains(O)) ||
                  (l({ type: 1 }),
                  (((F =
                    (S = a.beforePanelSentinel.current) == null
                      ? void 0
                      : S.contains) != null &&
                    F.call(S, O)) ||
                    ((I =
                      (j = a.afterPanelSentinel.current) == null
                        ? void 0
                        : j.contains) != null &&
                      I.call(j, O))) &&
                    O.focus({ preventScroll: !0 })));
            }
          : void 0,
      tabIndex: -1,
    },
    w = tb(),
    _ = Qe(() => {
      let k = h.current;
      if (!k) return;
      function N() {
        dt(w.current, {
          [Vn.Forwards]: () => {
            var S;
            Xr(k, Un.First) === ts.Error &&
              ((S = a.afterPanelSentinel.current) == null || S.focus());
          },
          [Vn.Backwards]: () => {
            var S;
            (S = a.button) == null || S.focus({ preventScroll: !0 });
          },
        });
      }
      N();
    }),
    T = Qe(() => {
      let k = h.current;
      if (!k) return;
      function N() {
        dt(w.current, {
          [Vn.Forwards]: () => {
            var S;
            if (!a.button) return;
            let F = Ms(),
              j = F.indexOf(a.button),
              I = F.slice(0, j + 1),
              O = [...F.slice(j + 1), ...I];
            for (let R of O.slice())
              if (
                R.dataset.headlessuiFocusGuard === "true" ||
                ((S = a.panel) != null && S.contains(R))
              ) {
                let z = O.indexOf(R);
                z !== -1 && O.splice(z, 1);
              }
            Xr(O, Un.First, { sorted: !1 });
          },
          [Vn.Backwards]: () => {
            var S;
            Xr(k, Un.Previous) === ts.Error &&
              ((S = a.button) == null || S.focus());
          },
        });
      }
      N();
    });
  return J.createElement(
    Ds.Provider,
    { value: r },
    E &&
      u &&
      J.createElement(od, {
        id: c,
        ref: a.beforePanelSentinel,
        features: ns.Focusable,
        "data-headlessui-focus-guard": !0,
        as: "button",
        type: "button",
        onFocus: _,
      }),
    Mr({
      ourProps: m,
      theirProps: o,
      slot: p,
      defaultTag: Jk,
      features: Zk,
      visible: E,
      name: "Popover.Panel",
    }),
    E &&
      u &&
      J.createElement(od, {
        id: d,
        ref: a.afterPanelSentinel,
        features: ns.Focusable,
        "data-headlessui-focus-guard": !0,
        as: "button",
        type: "button",
        onFocus: T,
      })
  );
}
let tT = "div";
function nT(e, t) {
  let n = C.useRef(null),
    r = Pr(n, t),
    [i, o] = C.useState([]),
    a = Qe((v) => {
      o((b) => {
        let E = b.indexOf(v);
        if (E !== -1) {
          let f = b.slice();
          return f.splice(E, 1), f;
        }
        return b;
      });
    }),
    l = Qe((v) => (o((b) => [...b, v]), () => a(v))),
    s = Qe(() => {
      var v;
      let b = kf(n);
      if (!b) return !1;
      let E = b.activeElement;
      return (v = n.current) != null && v.contains(E)
        ? !0
        : i.some((f) => {
            var p, m;
            return (
              ((p = b.getElementById(f.buttonId.current)) == null
                ? void 0
                : p.contains(E)) ||
              ((m = b.getElementById(f.panelId.current)) == null
                ? void 0
                : m.contains(E))
            );
          });
    }),
    u = Qe((v) => {
      for (let b of i) b.buttonId.current !== v && b.close();
    }),
    c = C.useMemo(
      () => ({
        registerPopover: l,
        unregisterPopover: a,
        isFocusWithinPopoverGroup: s,
        closeOthers: u,
      }),
      [l, a, s, u]
    ),
    d = C.useMemo(() => ({}), []),
    h = e,
    g = { ref: r };
  return J.createElement(
    jf.Provider,
    { value: c },
    Mr({
      ourProps: g,
      theirProps: h,
      slot: d,
      defaultTag: tT,
      name: "Popover.Group",
    })
  );
}
let rT = tr(Gk),
  iT = tr(Kk),
  oT = tr(Xk),
  aT = tr(eT),
  lT = tr(nT),
  Vu = Object.assign(rT, { Button: iT, Overlay: oT, Panel: aT, Group: lT });
function sT(e = 0) {
  let [t, n] = C.useState(e),
    r = Of(),
    i = C.useCallback(
      (s) => {
        r.current && n((u) => u | s);
      },
      [t, r]
    ),
    o = C.useCallback((s) => !!(t & s), [t]),
    a = C.useCallback(
      (s) => {
        r.current && n((u) => u & ~s);
      },
      [n, r]
    ),
    l = C.useCallback(
      (s) => {
        r.current && n((u) => u ^ s);
      },
      [n]
    );
  return { flags: t, addFlag: i, hasFlag: o, removeFlag: a, toggleFlag: l };
}
function uT(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called) return (t.called = !0), e(...n);
  };
}
function Wu(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Gu(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
function cT(e, t) {
  let n = Oa();
  if (!e) return n.dispose;
  let { transitionDuration: r, transitionDelay: i } = getComputedStyle(e),
    [o, a] = [r, i].map((s) => {
      let [u = 0] = s
        .split(",")
        .filter(Boolean)
        .map((c) => (c.includes("ms") ? parseFloat(c) : parseFloat(c) * 1e3))
        .sort((c, d) => d - c);
      return u;
    }),
    l = o + a;
  if (l !== 0) {
    n.group((u) => {
      u.setTimeout(() => {
        t(), u.dispose();
      }, l),
        u.addEventListener(e, "transitionrun", (c) => {
          c.target === c.currentTarget && u.dispose();
        });
    });
    let s = n.addEventListener(e, "transitionend", (u) => {
      u.target === u.currentTarget && (t(), s());
    });
  } else t();
  return n.add(() => t()), n.dispose;
}
function dT(e, t, n, r) {
  let i = n ? "enter" : "leave",
    o = Oa(),
    a = r !== void 0 ? uT(r) : () => {};
  i === "enter" && (e.removeAttribute("hidden"), (e.style.display = ""));
  let l = dt(i, { enter: () => t.enter, leave: () => t.leave }),
    s = dt(i, { enter: () => t.enterTo, leave: () => t.leaveTo }),
    u = dt(i, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return (
    Gu(
      e,
      ...t.enter,
      ...t.enterTo,
      ...t.enterFrom,
      ...t.leave,
      ...t.leaveFrom,
      ...t.leaveTo,
      ...t.entered
    ),
    Wu(e, ...l, ...u),
    o.nextFrame(() => {
      Gu(e, ...u),
        Wu(e, ...s),
        cT(e, () => (Gu(e, ...l), Wu(e, ...t.entered), a()));
    }),
    o.dispose
  );
}
function fT({ container: e, direction: t, classes: n, onStart: r, onStop: i }) {
  let o = Of(),
    a = Qy(),
    l = mn(t);
  Tr(() => {
    let s = Oa();
    a.add(s.dispose);
    let u = e.current;
    if (u && l.current !== "idle" && o.current)
      return (
        s.dispose(),
        r.current(l.current),
        s.add(
          dT(u, n.current, l.current === "enter", () => {
            s.dispose(), i.current(l.current);
          })
        ),
        s.dispose
      );
  }, [t]);
}
function $r(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Is = C.createContext(null);
Is.displayName = "TransitionContext";
var pT = ((e) => ((e.Visible = "visible"), (e.Hidden = "hidden"), e))(pT || {});
function hT() {
  let e = C.useContext(Is);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  return e;
}
function mT() {
  let e = C.useContext(Fs);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  return e;
}
let Fs = C.createContext(null);
Fs.displayName = "NestingContext";
function $s(e) {
  return "children" in e
    ? $s(e.children)
    : e.current
        .filter(({ el: t }) => t.current !== null)
        .filter(({ state: t }) => t === "visible").length > 0;
}
function rb(e, t) {
  let n = mn(e),
    r = C.useRef([]),
    i = Of(),
    o = Qy(),
    a = Qe((g, v = Hn.Hidden) => {
      let b = r.current.findIndex(({ el: E }) => E === g);
      b !== -1 &&
        (dt(v, {
          [Hn.Unmount]() {
            r.current.splice(b, 1);
          },
          [Hn.Hidden]() {
            r.current[b].state = "hidden";
          },
        }),
        o.microTask(() => {
          var E;
          !$s(r) && i.current && ((E = n.current) == null || E.call(n));
        }));
    }),
    l = Qe((g) => {
      let v = r.current.find(({ el: b }) => b === g);
      return (
        v
          ? v.state !== "visible" && (v.state = "visible")
          : r.current.push({ el: g, state: "visible" }),
        () => a(g, Hn.Unmount)
      );
    }),
    s = C.useRef([]),
    u = C.useRef(Promise.resolve()),
    c = C.useRef({ enter: [], leave: [], idle: [] }),
    d = Qe((g, v, b) => {
      s.current.splice(0),
        t &&
          (t.chains.current[v] = t.chains.current[v].filter(([E]) => E !== g)),
        t == null ||
          t.chains.current[v].push([
            g,
            new Promise((E) => {
              s.current.push(E);
            }),
          ]),
        t == null ||
          t.chains.current[v].push([
            g,
            new Promise((E) => {
              Promise.all(c.current[v].map(([f, p]) => p)).then(() => E());
            }),
          ]),
        v === "enter"
          ? (u.current = u.current
              .then(() => (t == null ? void 0 : t.wait.current))
              .then(() => b(v)))
          : b(v);
    }),
    h = Qe((g, v, b) => {
      Promise.all(c.current[v].splice(0).map(([E, f]) => f))
        .then(() => {
          var E;
          (E = s.current.shift()) == null || E();
        })
        .then(() => b(v));
    });
  return C.useMemo(
    () => ({
      children: r,
      register: l,
      unregister: a,
      onStart: d,
      onStop: h,
      wait: u,
      chains: c,
    }),
    [l, a, r, d, h, c, u]
  );
}
function gT() {}
let vT = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function lm(e) {
  var t;
  let n = {};
  for (let r of vT) n[r] = (t = e[r]) != null ? t : gT;
  return n;
}
function yT(e) {
  let t = C.useRef(lm(e));
  return (
    C.useEffect(() => {
      t.current = lm(e);
    }, [e]),
    t
  );
}
let bT = "div",
  ib = so.RenderStrategy;
function wT(e, t) {
  let {
      beforeEnter: n,
      afterEnter: r,
      beforeLeave: i,
      afterLeave: o,
      enter: a,
      enterFrom: l,
      enterTo: s,
      entered: u,
      leave: c,
      leaveFrom: d,
      leaveTo: h,
      ...g
    } = e,
    v = C.useRef(null),
    b = Pr(v, t),
    E = g.unmount ? Hn.Unmount : Hn.Hidden,
    { show: f, appear: p, initial: m } = hT(),
    [w, _] = C.useState(f ? "visible" : "hidden"),
    T = mT(),
    { register: k, unregister: N } = T,
    S = C.useRef(null);
  C.useEffect(() => k(v), [k, v]),
    C.useEffect(() => {
      if (E === Hn.Hidden && v.current) {
        if (f && w !== "visible") {
          _("visible");
          return;
        }
        return dt(w, { hidden: () => N(v), visible: () => k(v) });
      }
    }, [w, v, k, N, f, E]);
  let F = mn({
      enter: $r(a),
      enterFrom: $r(l),
      enterTo: $r(s),
      entered: $r(u),
      leave: $r(c),
      leaveFrom: $r(d),
      leaveTo: $r(h),
    }),
    j = yT({ beforeEnter: n, afterEnter: r, beforeLeave: i, afterLeave: o }),
    I = Cf();
  C.useEffect(() => {
    if (I && w === "visible" && v.current === null)
      throw new Error(
        "Did you forget to passthrough the `ref` to the actual DOM node?"
      );
  }, [v, w, I]);
  let O = m && !p,
    R = (() => (!I || O || S.current === f ? "idle" : f ? "enter" : "leave"))(),
    z = sT(0),
    K = Qe((G) =>
      dt(G, {
        enter: () => {
          z.addFlag(kt.Opening), j.current.beforeEnter();
        },
        leave: () => {
          z.addFlag(kt.Closing), j.current.beforeLeave();
        },
        idle: () => {},
      })
    ),
    U = Qe((G) =>
      dt(G, {
        enter: () => {
          z.removeFlag(kt.Opening), j.current.afterEnter();
        },
        leave: () => {
          z.removeFlag(kt.Closing), j.current.afterLeave();
        },
        idle: () => {},
      })
    ),
    D = rb(() => {
      _("hidden"), N(v);
    }, T);
  fT({
    container: v,
    classes: F,
    direction: R,
    onStart: mn((G) => {
      D.onStart(v, G, K);
    }),
    onStop: mn((G) => {
      D.onStop(v, G, U), G === "leave" && !$s(D) && (_("hidden"), N(v));
    }),
  }),
    C.useEffect(() => {
      O && (E === Hn.Hidden ? (S.current = null) : (S.current = f));
    }, [f, O, w]);
  let B = g,
    W = { ref: b };
  return (
    p &&
      f &&
      (B = {
        ...B,
        className: id(g.className, ...F.current.enter, ...F.current.enterFrom),
      }),
    J.createElement(
      Fs.Provider,
      { value: D },
      J.createElement(
        eb,
        { value: dt(w, { visible: kt.Open, hidden: kt.Closed }) | z.flags },
        Mr({
          ourProps: W,
          theirProps: B,
          defaultTag: bT,
          features: ib,
          visible: w === "visible",
          name: "Transition.Child",
        })
      )
    )
  );
}
function xT(e, t) {
  let { show: n, appear: r = !1, unmount: i, ...o } = e,
    a = C.useRef(null),
    l = Pr(a, t);
  Cf();
  let s = js();
  if (
    (n === void 0 && s !== null && (n = (s & kt.Open) === kt.Open),
    ![!0, !1].includes(n))
  )
    throw new Error(
      "A <Transition /> is used but it is missing a `show={true | false}` prop."
    );
  let [u, c] = C.useState(n ? "visible" : "hidden"),
    d = rb(() => {
      c("hidden");
    }),
    [h, g] = C.useState(!0),
    v = C.useRef([n]);
  Tr(() => {
    h !== !1 &&
      v.current[v.current.length - 1] !== n &&
      (v.current.push(n), g(!1));
  }, [v, n]);
  let b = C.useMemo(() => ({ show: n, appear: r, initial: h }), [n, r, h]);
  C.useEffect(() => {
    if (n) c("visible");
    else if (!$s(d)) c("hidden");
    else {
      let f = a.current;
      if (!f) return;
      let p = f.getBoundingClientRect();
      p.x === 0 && p.y === 0 && p.width === 0 && p.height === 0 && c("hidden");
    }
  }, [n, d]);
  let E = { unmount: i };
  return J.createElement(
    Fs.Provider,
    { value: d },
    J.createElement(
      Is.Provider,
      { value: b },
      Mr({
        ourProps: {
          ...E,
          as: C.Fragment,
          children: J.createElement(ob, { ref: l, ...E, ...o }),
        },
        theirProps: {},
        defaultTag: C.Fragment,
        features: ib,
        visible: u === "visible",
        name: "Transition",
      })
    )
  );
}
function ST(e, t) {
  let n = C.useContext(Is) !== null,
    r = js() !== null;
  return J.createElement(
    J.Fragment,
    null,
    !n && r
      ? J.createElement(ad, { ref: t, ...e })
      : J.createElement(ob, { ref: t, ...e })
  );
}
let ad = tr(xT),
  ob = tr(wT),
  ET = tr(ST),
  _T = Object.assign(ad, { Child: ET, Root: ad });
function zs(e) {
  var t = Object.entries(e)
    .filter(function (n) {
      var r = n[1];
      return r != null;
    })
    .map(function (n) {
      var r = n[0],
        i = n[1];
      return ""
        .concat(encodeURIComponent(r), "=")
        .concat(encodeURIComponent(String(i)));
    });
  return t.length > 0 ? "?".concat(t.join("&")) : "";
}
var CT =
    (globalThis && globalThis.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (r, i) {
                r.__proto__ = i;
              }) ||
            function (r, i) {
              for (var o in i)
                Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o]);
            }),
          e(t, n)
        );
      };
      return function (t, n) {
        if (typeof n != "function" && n !== null)
          throw new TypeError(
            "Class extends value " + String(n) + " is not a constructor or null"
          );
        e(t, n);
        function r() {
          this.constructor = t;
        }
        t.prototype =
          n === null
            ? Object.create(n)
            : ((r.prototype = n.prototype), new r());
      };
    })(),
  $n =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        ($n =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n];
              for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }
            return e;
          }),
        $n.apply(this, arguments)
      );
    },
  kT =
    (globalThis && globalThis.__awaiter) ||
    function (e, t, n, r) {
      function i(o) {
        return o instanceof n
          ? o
          : new n(function (a) {
              a(o);
            });
      }
      return new (n || (n = Promise))(function (o, a) {
        function l(c) {
          try {
            u(r.next(c));
          } catch (d) {
            a(d);
          }
        }
        function s(c) {
          try {
            u(r.throw(c));
          } catch (d) {
            a(d);
          }
        }
        function u(c) {
          c.done ? o(c.value) : i(c.value).then(l, s);
        }
        u((r = r.apply(e, t || [])).next());
      });
    },
  TT =
    (globalThis && globalThis.__generator) ||
    function (e, t) {
      var n = {
          label: 0,
          sent: function () {
            if (o[0] & 1) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        },
        r,
        i,
        o,
        a;
      return (
        (a = { next: l(0), throw: l(1), return: l(2) }),
        typeof Symbol == "function" &&
          (a[Symbol.iterator] = function () {
            return this;
          }),
        a
      );
      function l(u) {
        return function (c) {
          return s([u, c]);
        };
      }
      function s(u) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; n; )
          try {
            if (
              ((r = 1),
              i &&
                (o =
                  u[0] & 2
                    ? i.return
                    : u[0]
                    ? i.throw || ((o = i.return) && o.call(i), 0)
                    : i.next) &&
                !(o = o.call(i, u[1])).done)
            )
              return o;
            switch (((i = 0), o && (u = [u[0] & 2, o.value]), u[0])) {
              case 0:
              case 1:
                o = u;
                break;
              case 4:
                return n.label++, { value: u[1], done: !1 };
              case 5:
                n.label++, (i = u[1]), (u = [0]);
                continue;
              case 7:
                (u = n.ops.pop()), n.trys.pop();
                continue;
              default:
                if (
                  ((o = n.trys),
                  !(o = o.length > 0 && o[o.length - 1]) &&
                    (u[0] === 6 || u[0] === 2))
                ) {
                  n = 0;
                  continue;
                }
                if (u[0] === 3 && (!o || (u[1] > o[0] && u[1] < o[3]))) {
                  n.label = u[1];
                  break;
                }
                if (u[0] === 6 && n.label < o[1]) {
                  (n.label = o[1]), (o = u);
                  break;
                }
                if (o && n.label < o[2]) {
                  (n.label = o[2]), n.ops.push(u);
                  break;
                }
                o[2] && n.ops.pop(), n.trys.pop();
                continue;
            }
            u = t.call(e, n);
          } catch (c) {
            (u = [6, c]), (i = 0);
          } finally {
            r = o = 0;
          }
        if (u[0] & 5) throw u[1];
        return { value: u[0] ? u[1] : void 0, done: !0 };
      }
    },
  ab =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
            (n[r[i]] = e[r[i]]);
      return n;
    },
  PT = function (e) {
    return (
      !!e &&
      (typeof e == "object" || typeof e == "function") &&
      typeof e.then == "function"
    );
  },
  OT = function (e, t) {
    return {
      left:
        window.outerWidth / 2 +
        (window.screenX || window.screenLeft || 0) -
        e / 2,
      top:
        window.outerHeight / 2 +
        (window.screenY || window.screenTop || 0) -
        t / 2,
    };
  },
  NT = function (e, t) {
    return {
      top: (window.screen.height - t) / 2,
      left: (window.screen.width - e) / 2,
    };
  };
function RT(e, t, n) {
  var r = t.height,
    i = t.width,
    o = ab(t, ["height", "width"]),
    a = $n(
      {
        height: r,
        width: i,
        location: "no",
        toolbar: "no",
        status: "no",
        directories: "no",
        menubar: "no",
        scrollbars: "yes",
        resizable: "no",
        centerscreen: "yes",
        chrome: "yes",
      },
      o
    ),
    l = window.open(
      e,
      "",
      Object.keys(a)
        .map(function (u) {
          return "".concat(u, "=").concat(a[u]);
        })
        .join(", ")
    );
  if (n)
    var s = window.setInterval(function () {
      try {
        (l === null || l.closed) && (window.clearInterval(s), n(l));
      } catch (u) {
        console.error(u);
      }
    }, 1e3);
  return l;
}
var LT = (function (e) {
  CT(t, e);
  function t() {
    var n = (e !== null && e.apply(this, arguments)) || this;
    return (
      (n.openShareDialog = function (r) {
        var i = n.props,
          o = i.onShareWindowClose,
          a = i.windowHeight,
          l = a === void 0 ? 400 : a,
          s = i.windowPosition,
          u = s === void 0 ? "windowCenter" : s,
          c = i.windowWidth,
          d = c === void 0 ? 550 : c,
          h = $n(
            { height: l, width: d },
            u === "windowCenter" ? OT(d, l) : NT(d, l)
          );
        RT(r, h, o);
      }),
      (n.handleClick = function (r) {
        return kT(n, void 0, void 0, function () {
          var i, o, a, l, s, u, c, d, h, g;
          return TT(this, function (v) {
            switch (v.label) {
              case 0:
                return (
                  (i = this.props),
                  (o = i.beforeOnClick),
                  (a = i.disabled),
                  (l = i.networkLink),
                  (s = i.onClick),
                  (u = i.url),
                  (c = i.openShareDialogOnClick),
                  (d = i.opts),
                  (h = l(u, d)),
                  a
                    ? [2]
                    : (r.preventDefault(),
                      o ? ((g = o()), PT(g) ? [4, g] : [3, 2]) : [3, 2])
                );
              case 1:
                v.sent(), (v.label = 2);
              case 2:
                return c && this.openShareDialog(h), s && s(r, h), [2];
            }
          });
        });
      }),
      n
    );
  }
  return (
    (t.prototype.render = function () {
      var n = this.props;
      n.beforeOnClick;
      var r = n.children,
        i = n.className,
        o = n.disabled,
        a = n.disabledStyle,
        l = n.forwardedRef;
      n.networkLink;
      var s = n.networkName;
      n.onShareWindowClose, n.openShareDialogOnClick, n.opts;
      var u = n.resetButtonStyle,
        c = n.style;
      n.url, n.windowHeight, n.windowPosition, n.windowWidth;
      var d = ab(n, [
          "beforeOnClick",
          "children",
          "className",
          "disabled",
          "disabledStyle",
          "forwardedRef",
          "networkLink",
          "networkName",
          "onShareWindowClose",
          "openShareDialogOnClick",
          "opts",
          "resetButtonStyle",
          "style",
          "url",
          "windowHeight",
          "windowPosition",
          "windowWidth",
        ]),
        h = ce(
          "react-share__ShareButton",
          { "react-share__ShareButton--disabled": !!o, disabled: !!o },
          i
        ),
        g = $n(
          $n(
            u
              ? {
                  backgroundColor: "transparent",
                  border: "none",
                  padding: 0,
                  font: "inherit",
                  color: "inherit",
                  cursor: "pointer",
                }
              : {},
            c
          ),
          o && a
        );
      return J.createElement(
        "button",
        $n({}, d, {
          "aria-label": d["aria-label"] || s,
          className: h,
          onClick: this.handleClick,
          ref: l,
          style: g,
        }),
        r
      );
    }),
    (t.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: !0,
      resetButtonStyle: !0,
    }),
    t
  );
})(C.Component);
const MT = LT;
var rs =
  (globalThis && globalThis.__assign) ||
  function () {
    return (
      (rs =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var i in t)
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          }
          return e;
        }),
      rs.apply(this, arguments)
    );
  };
function Bs(e, t, n, r) {
  function i(o, a) {
    var l = n(o),
      s = rs({}, o),
      u = Object.keys(l);
    return (
      u.forEach(function (c) {
        delete s[c];
      }),
      J.createElement(
        MT,
        rs({}, r, s, {
          forwardedRef: a,
          networkName: e,
          networkLink: t,
          opts: n(o),
        })
      )
    );
  }
  return (i.displayName = "ShareButton-".concat(e)), C.forwardRef(i);
}
var jT =
    (globalThis && globalThis.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (r, i) {
                r.__proto__ = i;
              }) ||
            function (r, i) {
              for (var o in i)
                Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o]);
            }),
          e(t, n)
        );
      };
      return function (t, n) {
        if (typeof n != "function" && n !== null)
          throw new TypeError(
            "Class extends value " + String(n) + " is not a constructor or null"
          );
        e(t, n);
        function r() {
          this.constructor = t;
        }
        t.prototype =
          n === null
            ? Object.create(n)
            : ((r.prototype = n.prototype), new r());
      };
    })(),
  AT = (function (e) {
    jT(t, e);
    function t(n) {
      var r = e.call(this, n) || this;
      return (r.name = "AssertionError"), r;
    }
    return t;
  })(Error);
function Yi(e, t) {
  if (!e) throw new AT(t);
}
function DT(e, t) {
  var n = t.quote,
    r = t.hashtag;
  return (
    Yi(e, "facebook.url"),
    "https://www.facebook.com/sharer/sharer.php" +
      zs({ u: e, quote: n, hashtag: r })
  );
}
var IT = Bs(
  "facebook",
  DT,
  function (e) {
    return { quote: e.quote, hashtag: e.hashtag };
  },
  { windowWidth: 550, windowHeight: 400 }
);
const FT = IT;
function $T(e, t) {
  var n = t.title;
  return (
    Yi(e, "line.url"),
    "https://social-plugins.line.me/lineit/share" + zs({ url: e, text: n })
  );
}
var zT = Bs(
  "line",
  $T,
  function (e) {
    return { title: e.title };
  },
  { windowWidth: 500, windowHeight: 500 }
);
const BT = zT;
function UT(e, t) {
  var n = t.title,
    r = t.via,
    i = t.hashtags,
    o = i === void 0 ? [] : i,
    a = t.related,
    l = a === void 0 ? [] : a;
  return (
    Yi(e, "twitter.url"),
    Yi(Array.isArray(o), "twitter.hashtags is not an array"),
    Yi(Array.isArray(l), "twitter.related is not an array"),
    "https://twitter.com/share" +
      zs({
        url: e,
        text: n,
        via: r,
        hashtags: o.length > 0 ? o.join(",") : void 0,
        related: l.length > 0 ? l.join(",") : void 0,
      })
  );
}
var HT = Bs(
  "twitter",
  UT,
  function (e) {
    return {
      hashtags: e.hashtags,
      title: e.title,
      via: e.via,
      related: e.related,
    };
  },
  { windowWidth: 550, windowHeight: 400 }
);
const VT = HT;
function WT() {
  return /(android|iphone|ipad|mobile)/i.test(navigator.userAgent);
}
function GT(e, t) {
  var n = t.title,
    r = t.separator;
  return (
    Yi(e, "whatsapp.url"),
    "https://" +
      (WT() ? "api" : "web") +
      ".whatsapp.com/send" +
      zs({ text: n ? n + r + e : e })
  );
}
var qT = Bs(
  "whatsapp",
  GT,
  function (e) {
    return { title: e.title, separator: e.separator || " " };
  },
  { windowWidth: 550, windowHeight: 400 }
);
const KT = qT;
function QT() {
  const [e, t] = C.useState(null);
  return [
    e,
    async (r) => {
      if (!(navigator != null && navigator.clipboard))
        return console.warn("Clipboard not supported"), !1;
      try {
        return await navigator.clipboard.writeText(r), t(r), !0;
      } catch (i) {
        return console.warn("Copy failed", i), t(null), !1;
      }
    },
  ];
}
function YT({ title: e, label: t }) {
  const r = `https://www.bca.co.id/banggalokal#/promo/${e}`,
    [, i] = QT();
  return y.jsxs("div", {
    className:
      "bl-flex bl-flex-col md:bl-flex-row md:bl-space-x-2 md:bl-items-center share-buttons",
    children: [
      t
        ? y.jsx("h3", {
            className: "bl-text-[14px] bl-mb-[5px] md:bl-mb-0 bl-font-bold",
            children: t,
          })
        : y.jsx(y.Fragment, {}),
      y.jsxs("div", {
        className:
          "bl-flex bl-items-center bl-space-x-3 bl-text-[22px] !bl-text-[#0C1137]",
        children: [
          y.jsxs(Vu, {
            className: "relative",
            children: [
              y.jsx(Vu.Button, {
                onClick: () => {
                  i(r),
                    ct({
                      event: "contentengagement",
                      engagement_action: "Copy",
                      engagement_detail: `Copy ${r}`,
                    });
                },
                className: "bl-outline-none",
                children: y.jsx("i", {
                  className: "a-system-icon icon-hyperlink",
                }),
              }),
              y.jsx(_T, {
                enter: "bl-transition bl-duration-100 bl-ease-out",
                enterFrom: "bl-transform bl-scale-95 bl-opacity-0",
                enterTo: "bl-transform bl-scale-100 bl-opacity-100",
                leave: "bl-transition bl-duration-75 bl-ease-out",
                leaveFrom: "bl-transform bl-scale-100 bl-opacity-100",
                leaveTo: "bl-transform bl-scale-95 bl-opacity-0",
                children: y.jsx(Vu.Panel, {
                  className:
                    "bl-absolute bl-z-10 md:-bl-left-10 bl-bg-gray-900 bl-bg-opacity-80 bl-py-[5px] bl-px-[10px] bl-rounded-xl bl-text-white",
                  children: y.jsx("span", {
                    className: "bl-text-[12px] bl-whitespace-nowrap bl-block",
                    children: "Berhasil disalin.",
                  }),
                }),
              }),
            ],
          }),
          y.jsx(FT, {
            url: `${r}?utm_source=facebook&utm_medium=share`,
            quote: e,
            onClick: () => {
              ct({
                event: "contentengagement",
                engagement_action: "Share",
                engagement_detail: "Facebook",
                url: `${r}`,
              });
            },
            children: y.jsx("i", { className: "a-system-icon icon-facebook" }),
          }),
          y.jsx(VT, {
            url: `${r}?utm_source=twitter&utm_medium=share`,
            title: e,
            onClick: () => {
              ct({
                event: "contentengagement",
                engagement_action: "Share",
                engagement_detail: "Twitter",
                url: `${r}`,
              });
            },
            children: y.jsx("i", { className: "a-system-icon icon-twitter" }),
          }),
          y.jsx(KT, {
            url: `${r}?utm_source=whatsapp&utm_medium=share`,
            title: e,
            onClick: () => {
              ct({
                event: "contentengagement",
                engagement_action: "Share",
                engagement_detail: "Whatsapp",
                url: `${r}`,
              });
            },
            children: y.jsx("i", {
              className: "a-system-icon icon-social-whatsapp",
            }),
          }),
          y.jsx(BT, {
            url: `${r}?utm_source=line&utm_medium=share`,
            title: e,
            onClick: () => {
              ct({
                event: "contentengagement",
                engagement_action: "Share",
                engagement_detail: "Line",
                url: `${r}`,
              });
            },
            children: y.jsx("i", { className: "a-system-icon icon-line" }),
          }),
        ],
      }),
    ],
  });
}
function XT(e) {
  C.useEffect(
    () => (
      document.body.classList.add("bg__promo"),
      () => {
        document.body.classList.remove("bg__promo");
      }
    ),
    []
  );
  const t = e;
  return y.jsxs("div", {
    className: fe.PromoDetail,
    children: [
      y.jsxs("div", {
        className: "bl-mb-4 md:bl-px-12",
        children: [
          y.jsx("h1", { className: fe.promoDetail__title, children: t.title }),
          y.jsx("span", {
            className: fe.promoDetail__date,
            dangerouslySetInnerHTML: {
              __html: Ls(t.periode_start, t.periode_end),
            },
          }),
        ],
      }),
      y.jsx("div", {
        className: "bl-relative bl-mb-6",
        children: y.jsx("img", {
          src: t.banner || "",
          width: 800,
          height: 350,
          alt: "",
          className: "bl-w-full bl-rounded-lg lg:bl-rounded-2xl",
        }),
      }),
      y.jsxs("div", {
        className: fe.promoDetail__body,
        children: [
          y.jsx("h3", {
            className: "bl-text-[24px] bl-mb-[5px]",
            children: "Bagi Pengguna",
          }),
          y.jsx("div", {
            className: "bl-flex bl-flex-wrap bl-mb-[20px]",
            children: t.masterProducts.map((n) =>
              t.products.includes(n.id)
                ? y.jsx(
                    Cn,
                    {
                      className: "bl-mr-[10px] bl-font-bold bl-text-[#6f2989]",
                      to: `/promo?products=${n.id}`,
                      children: y.jsx("span", { children: n.name }),
                    },
                    n.id
                  )
                : null
            ),
          }),
          y.jsx("div", {
            dangerouslySetInnerHTML: { __html: xk.sanitize(t.body) },
            className: "html-element",
          }),
          y.jsx(YT, { title: `${t.slug}`, label: "Bagikan promo ini" }),
        ],
      }),
    ],
  });
}
function JT() {
  var c;
  const { slug: e } = Fv(),
    {
      isLoading: t,
      isError: n,
      data: r,
    } = pi({ queryKey: ["promos"], queryFn: () => mo() });
  if (t) return y.jsx("span", { children: "Loading..." });
  if (n) return y.jsx("span", { children: "Error..." });
  const i = St(r.data["api::promo.promo"]),
    o = St(r.data["plugin::upload.file"]),
    a = St(r.data["api::product.product"]),
    l = i.find((d) => d.slug === e),
    s = St(r.data["api::category.category"]),
    u = Gy(s, (l == null ? void 0 : l.categories[0]) || 0);
  return (
    ct({ breadcrumb_detail: `Promo Page / ${l == null ? void 0 : l.title}` }),
    y.jsxs("div", {
      className: "bl-container",
      children: [
        u &&
          y.jsxs("ul", {
            className:
              "bl-flex bl-space-x-[5px] bl-mb-[15px] bl-flex-nowrap bl-overflow-scroll bl-text-white bl-text-[12px] md:bl-text-[14px] no-scrollbar bl-whitespace-nowrap",
            children: [
              y.jsx("li", {
                children: y.jsx(hn, {
                  to: "/",
                  className: "bl-font-bold bl-text-white",
                  children: "Home",
                }),
              }),
              y.jsx("li", {
                className: "bl-flex bl-items-center bl-font-bold",
                children: ">",
              }),
              y.jsx("li", {
                children: y.jsx(hn, {
                  to:
                    (l == null ? void 0 : l.channel) === "kolaberaksi"
                      ? "/kolaberaksi/umkm-fest"
                      : "/promo",
                  className: "bl-font-bold bl-text-white",
                  children:
                    (l == null ? void 0 : l.channel) === "kolaberaksi"
                      ? "UMKM Fest"
                      : "Promo",
                }),
              }),
              y.jsx("li", {
                className: "bl-flex bl-items-center bl-font-bold",
                children: ">",
              }),
              y.jsx("li", {
                children: y.jsx(hn, {
                  to: `/promo?category=${u.id}`,
                  className: "bl-font-bold bl-text-white",
                  children: u.name,
                }),
              }),
              y.jsx("li", {
                className: "bl-flex bl-items-center bl-font-bold",
                children: ">",
              }),
              y.jsx("li", {
                className: "bl-flex bl-items-center",
                children: l == null ? void 0 : l.title,
              }),
            ],
          }),
        l &&
          y.jsx(XT, {
            title: l.title,
            body: l.body,
            periode_start: l.periode_start,
            periode_end: l.periode_end,
            slug: l.slug,
            banner: l.banner
              ? (c = o.find((d) => d.id === l.banner)) == null
                ? void 0
                : c.url
              : null,
            products: l.products,
            masterProducts: a,
          }),
      ],
    })
  );
}
function ZT({
  categories: e,
  products: t,
  cities: n,
  citiesChecked: r,
  productsChecked: i,
  onChangeProducts: o,
  onChangeCities: a,
  showMobileFilter: l,
  toggleMobileFilter: s,
}) {
  const [u] = Ca(),
    c = Zn();
  return y.jsxs("aside", {
    className: ce(
      fe.bgGlass,
      "bl-hidden md:bl-block bl-min-w-[250px] bl-p-[15px] bl-isolate bl-overflow-hidden bl-sticky bl-top-[100px] bl-text-[#4D4D4D] aside__filter",
      l ? fe.aside__show : ""
    ),
    children: [
      y.jsx("div", {
        className: "bl-flex md:bl-hidden bl-justify-end",
        children: y.jsx("button", {
          className: ce("bl-text-[25px] bl-px-[10px] bl-text-[#6F2989]"),
          onClick: () => s(),
          children: y.jsx("i", {
            className: ce(
              "a-system-icon icon-exit bl-text-[16px] bl-text-[#6F2989]"
            ),
          }),
        }),
      }),
      y.jsxs("div", {
        className: "bl-flex bl-text-[#6F2989] bl-mb-[5px]",
        children: [
          y.jsx("i", {
            className:
              "a-system-icon icon-solusi bl-mr-[10px] bl-text-[#6F2989]",
          }),
          y.jsx("span", { className: "bl-font-bold", children: "Category" }),
        ],
      }),
      y.jsx("div", {
        className: "bl-mb-[15px]",
        children: e.map((d, h) =>
          y.jsx(
            Cn,
            {
              to: `/promo?category=${d.id}`,
              className: ce(
                fe.categoryLink,
                u.get("category") === String(d.id) && c.pathname === "/promo"
                  ? fe.categoryActive
                  : ""
              ),
              children: d.name,
            },
            h
          )
        ),
      }),
      y.jsxs("div", {
        className: "bl-flex bl-text-[#6F2989] bl-mb-[5px]",
        children: [
          y.jsx("i", {
            className:
              "a-system-icon icon-solusi bl-mr-[10px] bl-text-[#6F2989]",
          }),
          y.jsx("span", {
            className: "bl-font-bold",
            children: "Promo Partner",
          }),
        ],
      }),
      y.jsxs("div", {
        className: "bl-mb-[15px]",
        children: [
          y.jsx(hn, {
            to: "/kolaberaksi/blibli",
            className: ({ isActive: d, isPending: h }) =>
              h
                ? fe.categoryLink
                : d
                ? ce(fe.categoryLink, fe.categoryActive)
                : fe.categoryLink,
            children: "Blibli",
          }),
          y.jsx("div", {
            className: ce(
              "bl-ml-[5px]",
              c.pathname === "/kolaberaksi/umkm-fest" ? "bl-block" : "bl-hidden"
            ),
            children: e.map((d, h) =>
              y.jsx(
                Cn,
                {
                  to: `/kolaberaksi/umkm-fest?category=${d.id}`,
                  className: ce(
                    fe.categoryLink,
                    u.get("category") === String(d.id) &&
                      c.pathname === "/kolaberaksi/umkm-fest"
                      ? fe.categoryActiveSub
                      : ""
                  ),
                  children: d.name,
                },
                h
              )
            ),
          }),
          y.jsx("div", {
            className: ce(
              "bl-ml-[5px]",
              c.pathname === "/kolaberaksi/bangga-lokal-x-kumulo"
                ? "bl-block"
                : "bl-hidden"
            ),
            children: e.map((d, h) =>
              y.jsx(
                Cn,
                {
                  to: `/kolaberaksi/bangga-lokal-x-kumulo?category=${d.id}`,
                  className: ce(
                    fe.categoryLink,
                    u.get("category") === String(d.id) &&
                      c.pathname === "/kolaberaksi/umkm-fest"
                      ? fe.categoryActiveSub
                      : ""
                  ),
                  children: d.name,
                },
                h
              )
            ),
          }),
          y.jsx(hn, {
            to: "/kolaberaksi/expoversary-2024",
            className: ({ isActive: d, isPending: h }) =>
              h
                ? fe.categoryLink
                : d
                ? ce(fe.categoryLink, fe.categoryActive)
                : fe.categoryLink,
            children: "Expoversary 2024",
          }),
        ],
      }),
      y.jsxs("div", {
        className: "bl-flex bl-text-[#6F2989] bl-mb-[5px]",
        children: [
          y.jsx("i", {
            className:
              "a-system-icon icon-location bl-mr-[10px] bl-text-[#6F2989]",
          }),
          y.jsx("span", { className: "bl-font-bold", children: "Kota" }),
        ],
      }),
      y.jsx("div", {
        className: "bl-max-h-[150px] bl-overflow-y-scroll bl-mb-[15px]",
        children: n.map((d, h) =>
          y.jsxs(
            "div",
            {
              className: "bl-mb-[2px]",
              children: [
                y.jsx("input", {
                  type: "checkbox",
                  className: fe.checkbox,
                  id: `city-${h}`,
                  checked: r.includes(d.id) || !1,
                  value: d.id,
                  onChange: a,
                }),
                y.jsx("label", { htmlFor: `city-${h}`, children: d.name }),
              ],
            },
            h
          )
        ),
      }),
      y.jsxs("div", {
        className: "bl-flex bl-text-[#6F2989] bl-mb-[5px]",
        children: [
          y.jsx("i", {
            className:
              "a-system-icon icon-product-debitcard bl-mr-[10px] bl-text-[#6F2989]",
          }),
          y.jsx("span", { className: "bl-font-bold", children: "Produk" }),
        ],
      }),
      y.jsx("div", {
        className: "bl-max-h-[200px]",
        children: t.map((d, h) =>
          y.jsxs(
            "div",
            {
              className: "bl-mb-[2px]",
              children: [
                y.jsx("input", {
                  type: "checkbox",
                  className: fe.checkbox,
                  id: `product-${h}`,
                  checked: i.includes(d.id) || !1,
                  value: d.id,
                  onChange: o,
                }),
                y.jsx("label", { htmlFor: `product-${h}`, children: d.name }),
              ],
            },
            h
          )
        ),
      }),
    ],
  });
}
function eP(e) {
  return y.jsxs("div", {
    className: `${fe.cardPromo} ${e.className}`,
    children: [
      y.jsx("figure", {
        className:
          "bl-relative bl-overflow-hidden bl-rounded-tl-lg bl-rounded-tr-lg",
        children: y.jsx("img", {
          src: e.banner || "",
          width: 800,
          height: 350,
          alt: `${e.title} image`,
          className: fe.cardPromo__fileCover,
        }),
      }),
      y.jsxs("div", {
        className: fe.cardPromo__info,
        children: [
          y.jsx("div", {
            className: "mb-auto",
            children: y.jsx("h3", {
              className: fe.cardPromo__title,
              children: y.jsx(Cn, {
                to: `/promo/${e.slug}`,
                className: "after:bl-absolute after:bl-inset-0",
                onClick: () => {
                  ct({
                    event: "promotionengagement",
                    promotion_name: `${e.title}`,
                    promotion_category: `${e.categories}`,
                  });
                },
                children: e.title,
              }),
            }),
          }),
          y.jsxs("span", {
            className: `${fe.cardPromo__date} text-grey-light`,
            children: [
              y.jsx("i", {
                className:
                  "a-system-icon   icon-clock bl-mr-[5px] bl-text-[#442052]",
              }),
              y.jsx("div", {
                dangerouslySetInnerHTML: {
                  __html: Ls(e.periode_start, e.periode_end, !0),
                },
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function uo(e) {
  return (
    (uo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    uo(e)
  );
}
function tP(e, t) {
  if (uo(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (uo(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function lb(e) {
  var t = tP(e, "string");
  return uo(t) === "symbol" ? t : String(t);
}
function Qt(e, t, n) {
  return (
    (t = lb(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function sm(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function nP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? sm(Object(n), !0).forEach(function (r) {
          Qt(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : sm(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function sb(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function um(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, lb(r.key), r);
  }
}
function ub(e, t, n) {
  return (
    t && um(e.prototype, t),
    n && um(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function cb(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Zl(e, t);
}
function is(e) {
  return (
    (is = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    is(e)
  );
}
function rP() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function iP(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function oP(e, t) {
  if (t && (uo(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return iP(e);
}
function db(e) {
  var t = rP();
  return function () {
    var r = is(e),
      i;
    if (t) {
      var o = is(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return oP(this, i);
  };
}
var Vr = {
  ZERO: 48,
  NINE: 57,
  NUMPAD_ZERO: 96,
  NUMPAD_NINE: 105,
  BACKSPACE: 8,
  DELETE: 46,
  ENTER: 13,
  ARROW_UP: 38,
  ARROW_DOWN: 40,
};
const aP = {
  items_per_page: "条/页",
  jump_to: "跳至",
  jump_to_confirm: "确定",
  page: "页",
  prev_page: "上一页",
  next_page: "下一页",
  prev_5: "向前 5 页",
  next_5: "向后 5 页",
  prev_3: "向前 3 页",
  next_3: "向后 3 页",
  page_size: "页码",
};
var fb = (function (e) {
  cb(n, e);
  var t = db(n);
  function n() {
    var r;
    sb(this, n);
    for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++)
      o[a] = arguments[a];
    return (
      (r = t.call.apply(t, [this].concat(o))),
      (r.state = { goInputText: "" }),
      (r.getValidValue = function () {
        var l = r.state.goInputText;
        return !l || Number.isNaN(l) ? void 0 : Number(l);
      }),
      (r.buildOptionText = function (l) {
        return "".concat(l, " ").concat(r.props.locale.items_per_page);
      }),
      (r.changeSize = function (l) {
        r.props.changeSize(Number(l));
      }),
      (r.handleChange = function (l) {
        r.setState({ goInputText: l.target.value });
      }),
      (r.handleBlur = function (l) {
        var s = r.props,
          u = s.goButton,
          c = s.quickGo,
          d = s.rootPrefixCls,
          h = r.state.goInputText;
        u ||
          h === "" ||
          (r.setState({ goInputText: "" }),
          !(
            l.relatedTarget &&
            (l.relatedTarget.className.indexOf("".concat(d, "-item-link")) >=
              0 ||
              l.relatedTarget.className.indexOf("".concat(d, "-item")) >= 0)
          ) && c(r.getValidValue()));
      }),
      (r.go = function (l) {
        var s = r.state.goInputText;
        s !== "" &&
          (l.keyCode === Vr.ENTER || l.type === "click") &&
          (r.setState({ goInputText: "" }), r.props.quickGo(r.getValidValue()));
      }),
      r
    );
  }
  return (
    ub(n, [
      {
        key: "getPageSizeOptions",
        value: function () {
          var i = this.props,
            o = i.pageSize,
            a = i.pageSizeOptions;
          return a.some(function (l) {
            return l.toString() === o.toString();
          })
            ? a
            : a.concat([o.toString()]).sort(function (l, s) {
                var u = Number.isNaN(Number(l)) ? 0 : Number(l),
                  c = Number.isNaN(Number(s)) ? 0 : Number(s);
                return u - c;
              });
        },
      },
      {
        key: "render",
        value: function () {
          var i = this,
            o = this.props,
            a = o.pageSize,
            l = o.locale,
            s = o.rootPrefixCls,
            u = o.changeSize,
            c = o.quickGo,
            d = o.goButton,
            h = o.selectComponentClass,
            g = o.buildOptionText,
            v = o.selectPrefixCls,
            b = o.disabled,
            E = this.state.goInputText,
            f = "".concat(s, "-options"),
            p = h,
            m = null,
            w = null,
            _ = null;
          if (!u && !c) return null;
          var T = this.getPageSizeOptions();
          if (u && p) {
            var k = T.map(function (N, S) {
              return J.createElement(
                p.Option,
                { key: S, value: N.toString() },
                (g || i.buildOptionText)(N)
              );
            });
            m = J.createElement(
              p,
              {
                disabled: b,
                prefixCls: v,
                showSearch: !1,
                className: "".concat(f, "-size-changer"),
                optionLabelProp: "children",
                dropdownMatchSelectWidth: !1,
                value: (a || T[0]).toString(),
                onChange: this.changeSize,
                getPopupContainer: function (S) {
                  return S.parentNode;
                },
                "aria-label": l.page_size,
                defaultOpen: !1,
              },
              k
            );
          }
          return (
            c &&
              (d &&
                (_ =
                  typeof d == "boolean"
                    ? J.createElement(
                        "button",
                        {
                          type: "button",
                          onClick: this.go,
                          onKeyUp: this.go,
                          disabled: b,
                          className: "".concat(f, "-quick-jumper-button"),
                        },
                        l.jump_to_confirm
                      )
                    : J.createElement(
                        "span",
                        { onClick: this.go, onKeyUp: this.go },
                        d
                      )),
              (w = J.createElement(
                "div",
                { className: "".concat(f, "-quick-jumper") },
                l.jump_to,
                J.createElement("input", {
                  disabled: b,
                  type: "text",
                  value: E,
                  onChange: this.handleChange,
                  onKeyUp: this.go,
                  onBlur: this.handleBlur,
                  "aria-label": l.page,
                }),
                l.page,
                _
              ))),
            J.createElement("li", { className: "".concat(f) }, m, w)
          );
        },
      },
    ]),
    n
  );
})(J.Component);
fb.defaultProps = { pageSizeOptions: ["10", "20", "50", "100"] };
var Oo = function (t) {
  var n,
    r = t.rootPrefixCls,
    i = t.page,
    o = t.active,
    a = t.className,
    l = t.showTitle,
    s = t.onClick,
    u = t.onKeyPress,
    c = t.itemRender,
    d = "".concat(r, "-item"),
    h = ce(
      d,
      "".concat(d, "-").concat(i),
      ((n = {}),
      Qt(n, "".concat(d, "-active"), o),
      Qt(n, "".concat(d, "-disabled"), !i),
      Qt(n, t.className, a),
      n)
    ),
    g = function () {
      s(i);
    },
    v = function (E) {
      u(E, s, i);
    };
  return J.createElement(
    "li",
    {
      title: l ? i.toString() : null,
      className: h,
      onClick: g,
      onKeyPress: v,
      tabIndex: 0,
    },
    c(i, "page", J.createElement("a", { rel: "nofollow" }, i))
  );
};
function ld() {}
function cm(e) {
  var t = Number(e);
  return (
    typeof t == "number" &&
    !Number.isNaN(t) &&
    isFinite(t) &&
    Math.floor(t) === t
  );
}
var lP = function (t, n, r) {
  return r;
};
function lr(e, t, n) {
  var r = typeof e > "u" ? t.pageSize : e;
  return Math.floor((n.total - 1) / r) + 1;
}
var pb = (function (e) {
  cb(n, e);
  var t = db(n);
  function n(r) {
    var i;
    sb(this, n),
      (i = t.call(this, r)),
      (i.paginationNode = J.createRef()),
      (i.getJumpPrevPage = function () {
        return Math.max(1, i.state.current - (i.props.showLessItems ? 3 : 5));
      }),
      (i.getJumpNextPage = function () {
        return Math.min(
          lr(void 0, i.state, i.props),
          i.state.current + (i.props.showLessItems ? 3 : 5)
        );
      }),
      (i.getItemIcon = function (u, c) {
        var d = i.props.prefixCls,
          h =
            u ||
            J.createElement("button", {
              type: "button",
              "aria-label": c,
              className: "".concat(d, "-item-link"),
            });
        return (
          typeof u == "function" && (h = J.createElement(u, nP({}, i.props))), h
        );
      }),
      (i.isValid = function (u) {
        var c = i.props.total;
        return cm(u) && u !== i.state.current && cm(c) && c > 0;
      }),
      (i.shouldDisplayQuickJumper = function () {
        var u = i.props,
          c = u.showQuickJumper,
          d = u.total,
          h = i.state.pageSize;
        return d <= h ? !1 : c;
      }),
      (i.handleKeyDown = function (u) {
        (u.keyCode === Vr.ARROW_UP || u.keyCode === Vr.ARROW_DOWN) &&
          u.preventDefault();
      }),
      (i.handleKeyUp = function (u) {
        var c = i.getValidValue(u),
          d = i.state.currentInputValue;
        c !== d && i.setState({ currentInputValue: c }),
          u.keyCode === Vr.ENTER
            ? i.handleChange(c)
            : u.keyCode === Vr.ARROW_UP
            ? i.handleChange(c - 1)
            : u.keyCode === Vr.ARROW_DOWN && i.handleChange(c + 1);
      }),
      (i.handleBlur = function (u) {
        var c = i.getValidValue(u);
        i.handleChange(c);
      }),
      (i.changePageSize = function (u) {
        var c = i.state.current,
          d = lr(u, i.state, i.props);
        (c = c > d ? d : c),
          d === 0 && (c = i.state.current),
          typeof u == "number" &&
            ("pageSize" in i.props || i.setState({ pageSize: u }),
            "current" in i.props ||
              i.setState({ current: c, currentInputValue: c })),
          i.props.onShowSizeChange(c, u),
          "onChange" in i.props && i.props.onChange && i.props.onChange(c, u);
      }),
      (i.handleChange = function (u) {
        var c = i.props,
          d = c.disabled,
          h = c.onChange,
          g = i.state,
          v = g.pageSize,
          b = g.current,
          E = g.currentInputValue;
        if (i.isValid(u) && !d) {
          var f = lr(void 0, i.state, i.props),
            p = u;
          return (
            u > f ? (p = f) : u < 1 && (p = 1),
            "current" in i.props || i.setState({ current: p }),
            p !== E && i.setState({ currentInputValue: p }),
            h(p, v),
            p
          );
        }
        return b;
      }),
      (i.prev = function () {
        i.hasPrev() && i.handleChange(i.state.current - 1);
      }),
      (i.next = function () {
        i.hasNext() && i.handleChange(i.state.current + 1);
      }),
      (i.jumpPrev = function () {
        i.handleChange(i.getJumpPrevPage());
      }),
      (i.jumpNext = function () {
        i.handleChange(i.getJumpNextPage());
      }),
      (i.hasPrev = function () {
        return i.state.current > 1;
      }),
      (i.hasNext = function () {
        return i.state.current < lr(void 0, i.state, i.props);
      }),
      (i.runIfEnter = function (u, c) {
        if (u.key === "Enter" || u.charCode === 13) {
          for (
            var d = arguments.length, h = new Array(d > 2 ? d - 2 : 0), g = 2;
            g < d;
            g++
          )
            h[g - 2] = arguments[g];
          c.apply(void 0, h);
        }
      }),
      (i.runIfEnterPrev = function (u) {
        i.runIfEnter(u, i.prev);
      }),
      (i.runIfEnterNext = function (u) {
        i.runIfEnter(u, i.next);
      }),
      (i.runIfEnterJumpPrev = function (u) {
        i.runIfEnter(u, i.jumpPrev);
      }),
      (i.runIfEnterJumpNext = function (u) {
        i.runIfEnter(u, i.jumpNext);
      }),
      (i.handleGoTO = function (u) {
        (u.keyCode === Vr.ENTER || u.type === "click") &&
          i.handleChange(i.state.currentInputValue);
      }),
      (i.renderPrev = function (u) {
        var c = i.props,
          d = c.prevIcon,
          h = c.itemRender,
          g = h(u, "prev", i.getItemIcon(d, "prev page")),
          v = !i.hasPrev();
        return C.isValidElement(g) ? C.cloneElement(g, { disabled: v }) : g;
      }),
      (i.renderNext = function (u) {
        var c = i.props,
          d = c.nextIcon,
          h = c.itemRender,
          g = h(u, "next", i.getItemIcon(d, "next page")),
          v = !i.hasNext();
        return C.isValidElement(g) ? C.cloneElement(g, { disabled: v }) : g;
      });
    var o = r.onChange !== ld,
      a = "current" in r;
    a &&
      !o &&
      console.warn(
        "Warning: You provided a `current` prop to a Pagination component without an `onChange` handler. This will render a read-only component."
      );
    var l = r.defaultCurrent;
    "current" in r && (l = r.current);
    var s = r.defaultPageSize;
    return (
      "pageSize" in r && (s = r.pageSize),
      (l = Math.min(l, lr(s, void 0, r))),
      (i.state = { current: l, currentInputValue: l, pageSize: s }),
      i
    );
  }
  return (
    ub(
      n,
      [
        {
          key: "componentDidUpdate",
          value: function (i, o) {
            var a = this.props.prefixCls;
            if (
              o.current !== this.state.current &&
              this.paginationNode.current
            ) {
              var l = this.paginationNode.current.querySelector(
                ".".concat(a, "-item-").concat(o.current)
              );
              if (l && document.activeElement === l) {
                var s;
                l == null || (s = l.blur) === null || s === void 0 || s.call(l);
              }
            }
          },
        },
        {
          key: "getValidValue",
          value: function (i) {
            var o = i.target.value,
              a = lr(void 0, this.state, this.props),
              l = this.state.currentInputValue,
              s;
            return (
              o === ""
                ? (s = o)
                : Number.isNaN(Number(o))
                ? (s = l)
                : o >= a
                ? (s = a)
                : (s = Number(o)),
              s
            );
          },
        },
        {
          key: "getShowSizeChanger",
          value: function () {
            var i = this.props,
              o = i.showSizeChanger,
              a = i.total,
              l = i.totalBoundaryShowSizeChanger;
            return typeof o < "u" ? o : a > l;
          },
        },
        {
          key: "render",
          value: function () {
            var i = this,
              o = this.props,
              a = o.prefixCls,
              l = o.className,
              s = o.style,
              u = o.disabled,
              c = o.hideOnSinglePage,
              d = o.total,
              h = o.locale,
              g = o.showQuickJumper,
              v = o.showLessItems,
              b = o.showTitle,
              E = o.showTotal,
              f = o.simple,
              p = o.itemRender,
              m = o.showPrevNextJumpers,
              w = o.jumpPrevIcon,
              _ = o.jumpNextIcon,
              T = o.selectComponentClass,
              k = o.selectPrefixCls,
              N = o.pageSizeOptions,
              S = this.state,
              F = S.current,
              j = S.pageSize,
              I = S.currentInputValue;
            if (c === !0 && d <= j) return null;
            var O = lr(void 0, this.state, this.props),
              R = [],
              z = null,
              K = null,
              U = null,
              D = null,
              B = null,
              W = g && g.goButton,
              G = v ? 1 : 2,
              te = F - 1 > 0 ? F - 1 : 0,
              de = F + 1 < O ? F + 1 : O,
              se = Object.keys(this.props).reduce(function (ye, ae) {
                return (
                  (ae.substr(0, 5) === "data-" ||
                    ae.substr(0, 5) === "aria-" ||
                    ae === "role") &&
                    (ye[ae] = i.props[ae]),
                  ye
                );
              }, {}),
              ve =
                E &&
                J.createElement(
                  "li",
                  { className: "".concat(a, "-total-text") },
                  E(d, [d === 0 ? 0 : (F - 1) * j + 1, F * j > d ? d : F * j])
                );
            if (f)
              return (
                W &&
                  (typeof W == "boolean"
                    ? (B = J.createElement(
                        "button",
                        {
                          type: "button",
                          onClick: this.handleGoTO,
                          onKeyUp: this.handleGoTO,
                        },
                        h.jump_to_confirm
                      ))
                    : (B = J.createElement(
                        "span",
                        { onClick: this.handleGoTO, onKeyUp: this.handleGoTO },
                        W
                      )),
                  (B = J.createElement(
                    "li",
                    {
                      title: b
                        ? "".concat(h.jump_to).concat(F, "/").concat(O)
                        : null,
                      className: "".concat(a, "-simple-pager"),
                    },
                    B
                  ))),
                J.createElement(
                  "ul",
                  Yr(
                    {
                      className: ce(
                        a,
                        "".concat(a, "-simple"),
                        Qt({}, "".concat(a, "-disabled"), u),
                        l
                      ),
                      style: s,
                      ref: this.paginationNode,
                    },
                    se
                  ),
                  ve,
                  J.createElement(
                    "li",
                    {
                      title: b ? h.prev_page : null,
                      onClick: this.prev,
                      tabIndex: this.hasPrev() ? 0 : null,
                      onKeyPress: this.runIfEnterPrev,
                      className: ce(
                        "".concat(a, "-prev"),
                        Qt({}, "".concat(a, "-disabled"), !this.hasPrev())
                      ),
                      "aria-disabled": !this.hasPrev(),
                    },
                    this.renderPrev(te)
                  ),
                  J.createElement(
                    "li",
                    {
                      title: b ? "".concat(F, "/").concat(O) : null,
                      className: "".concat(a, "-simple-pager"),
                    },
                    J.createElement("input", {
                      type: "text",
                      value: I,
                      disabled: u,
                      onKeyDown: this.handleKeyDown,
                      onKeyUp: this.handleKeyUp,
                      onChange: this.handleKeyUp,
                      onBlur: this.handleBlur,
                      size: 3,
                    }),
                    J.createElement(
                      "span",
                      { className: "".concat(a, "-slash") },
                      "/"
                    ),
                    O
                  ),
                  J.createElement(
                    "li",
                    {
                      title: b ? h.next_page : null,
                      onClick: this.next,
                      tabIndex: this.hasPrev() ? 0 : null,
                      onKeyPress: this.runIfEnterNext,
                      className: ce(
                        "".concat(a, "-next"),
                        Qt({}, "".concat(a, "-disabled"), !this.hasNext())
                      ),
                      "aria-disabled": !this.hasNext(),
                    },
                    this.renderNext(de)
                  ),
                  B
                )
              );
            if (O <= 3 + G * 2) {
              var Ce = {
                locale: h,
                rootPrefixCls: a,
                onClick: this.handleChange,
                onKeyPress: this.runIfEnter,
                showTitle: b,
                itemRender: p,
              };
              O ||
                R.push(
                  J.createElement(
                    Oo,
                    Yr({}, Ce, {
                      key: "noPager",
                      page: 1,
                      className: "".concat(a, "-item-disabled"),
                    })
                  )
                );
              for (var Le = 1; Le <= O; Le += 1) {
                var nt = F === Le;
                R.push(
                  J.createElement(
                    Oo,
                    Yr({}, Ce, { key: Le, page: Le, active: nt })
                  )
                );
              }
            } else {
              var Me = v ? h.prev_3 : h.prev_5,
                Se = v ? h.next_3 : h.next_5;
              m &&
                ((z = J.createElement(
                  "li",
                  {
                    title: b ? Me : null,
                    key: "prev",
                    onClick: this.jumpPrev,
                    tabIndex: 0,
                    onKeyPress: this.runIfEnterJumpPrev,
                    className: ce(
                      "".concat(a, "-jump-prev"),
                      Qt({}, "".concat(a, "-jump-prev-custom-icon"), !!w)
                    ),
                  },
                  p(
                    this.getJumpPrevPage(),
                    "jump-prev",
                    this.getItemIcon(w, "prev page")
                  )
                )),
                (K = J.createElement(
                  "li",
                  {
                    title: b ? Se : null,
                    key: "next",
                    tabIndex: 0,
                    onClick: this.jumpNext,
                    onKeyPress: this.runIfEnterJumpNext,
                    className: ce(
                      "".concat(a, "-jump-next"),
                      Qt({}, "".concat(a, "-jump-next-custom-icon"), !!_)
                    ),
                  },
                  p(
                    this.getJumpNextPage(),
                    "jump-next",
                    this.getItemIcon(_, "next page")
                  )
                ))),
                (D = J.createElement(Oo, {
                  locale: h,
                  last: !0,
                  rootPrefixCls: a,
                  onClick: this.handleChange,
                  onKeyPress: this.runIfEnter,
                  key: O,
                  page: O,
                  active: !1,
                  showTitle: b,
                  itemRender: p,
                })),
                (U = J.createElement(Oo, {
                  locale: h,
                  rootPrefixCls: a,
                  onClick: this.handleChange,
                  onKeyPress: this.runIfEnter,
                  key: 1,
                  page: 1,
                  active: !1,
                  showTitle: b,
                  itemRender: p,
                }));
              var De = Math.max(1, F - G),
                ze = Math.min(F + G, O);
              F - 1 <= G && (ze = 1 + G * 2), O - F <= G && (De = O - G * 2);
              for (var It = De; It <= ze; It += 1) {
                var on = F === It;
                R.push(
                  J.createElement(Oo, {
                    locale: h,
                    rootPrefixCls: a,
                    onClick: this.handleChange,
                    onKeyPress: this.runIfEnter,
                    key: It,
                    page: It,
                    active: on,
                    showTitle: b,
                    itemRender: p,
                  })
                );
              }
              F - 1 >= G * 2 &&
                F !== 1 + 2 &&
                ((R[0] = C.cloneElement(R[0], {
                  className: "".concat(a, "-item-after-jump-prev"),
                })),
                R.unshift(z)),
                O - F >= G * 2 &&
                  F !== O - 2 &&
                  ((R[R.length - 1] = C.cloneElement(R[R.length - 1], {
                    className: "".concat(a, "-item-before-jump-next"),
                  })),
                  R.push(K)),
                De !== 1 && R.unshift(U),
                ze !== O && R.push(D);
            }
            var Nt = !this.hasPrev() || !O,
              Gt = !this.hasNext() || !O;
            return J.createElement(
              "ul",
              Yr(
                {
                  className: ce(a, l, Qt({}, "".concat(a, "-disabled"), u)),
                  style: s,
                  ref: this.paginationNode,
                },
                se
              ),
              ve,
              J.createElement(
                "li",
                {
                  title: b ? h.prev_page : null,
                  onClick: this.prev,
                  tabIndex: Nt ? null : 0,
                  onKeyPress: this.runIfEnterPrev,
                  className: ce(
                    "".concat(a, "-prev"),
                    Qt({}, "".concat(a, "-disabled"), Nt)
                  ),
                  "aria-disabled": Nt,
                },
                this.renderPrev(te)
              ),
              R,
              J.createElement(
                "li",
                {
                  title: b ? h.next_page : null,
                  onClick: this.next,
                  tabIndex: Gt ? null : 0,
                  onKeyPress: this.runIfEnterNext,
                  className: ce(
                    "".concat(a, "-next"),
                    Qt({}, "".concat(a, "-disabled"), Gt)
                  ),
                  "aria-disabled": Gt,
                },
                this.renderNext(de)
              ),
              J.createElement(fb, {
                disabled: u,
                locale: h,
                rootPrefixCls: a,
                selectComponentClass: T,
                selectPrefixCls: k,
                changeSize: this.getShowSizeChanger()
                  ? this.changePageSize
                  : null,
                current: F,
                pageSize: j,
                pageSizeOptions: N,
                quickGo: this.shouldDisplayQuickJumper()
                  ? this.handleChange
                  : null,
                goButton: W,
              })
            );
          },
        },
      ],
      [
        {
          key: "getDerivedStateFromProps",
          value: function (i, o) {
            var a = {};
            if (
              ("current" in i &&
                ((a.current = i.current),
                i.current !== o.current && (a.currentInputValue = a.current)),
              "pageSize" in i && i.pageSize !== o.pageSize)
            ) {
              var l = o.current,
                s = lr(i.pageSize, o, i);
              (l = l > s ? s : l),
                "current" in i || ((a.current = l), (a.currentInputValue = l)),
                (a.pageSize = i.pageSize);
            }
            return a;
          },
        },
      ]
    ),
    n
  );
})(J.Component);
pb.defaultProps = {
  defaultCurrent: 1,
  total: 0,
  defaultPageSize: 10,
  onChange: ld,
  className: "",
  selectPrefixCls: "rc-select",
  prefixCls: "rc-pagination",
  selectComponentClass: null,
  hideOnSinglePage: !1,
  showPrevNextJumpers: !0,
  showQuickJumper: !1,
  showLessItems: !1,
  showTitle: !0,
  onShowSizeChange: ld,
  locale: aP,
  style: {},
  itemRender: lP,
  totalBoundaryShowSizeChanger: 50,
};
const sP = (e, t, n) =>
    t === "prev"
      ? y.jsx("div", { children: "Prev" })
      : t === "next"
      ? y.jsx("div", { children: "Next" })
      : t === "jump-next"
      ? y.jsx("div", { children: "..." })
      : t === "jump-prev"
      ? y.jsx("div", { children: "..." })
      : n,
  uP = ({ items: e, current_page: t, per_page_items: n }) => {
    const r = t || 1,
      i = n || 10,
      o = (r - 1) * i,
      a = e.slice(o).slice(0, n),
      l = Math.ceil(e.length / i);
    return {
      page: r,
      per_page: i,
      pre_page: r - 1 ? r - 1 : null,
      next_page: l > r ? r + 1 : null,
      total: e.length,
      total_pages: l,
      data: a,
    };
  };
function qu({ channel: e = null, route: t = "promo" }) {
  const [r] = Ca(),
    i = _a(),
    o = r.get("page") ? parseInt(r.get("page")) : 1,
    a = r.get("category"),
    l = r.get("search"),
    s = r.get("cities"),
    [u, c] = C.useState(
      r.get("cities")
        ? r
            .get("cities")
            .split(",")
            .map((R) => parseInt(R))
        : []
    ),
    [d, h] = C.useState(
      r.get("products")
        ? r
            .get("products")
            .split(",")
            .map((R) => parseInt(R))
        : []
    ),
    [g, v] = C.useState(!1),
    {
      isLoading: b,
      isError: E,
      isSuccess: f,
      data: p,
    } = pi({ queryKey: ["promos"], queryFn: () => mo() }),
    m = (R) => {
      const z = parseInt(R.target.value);
      R.target.checked ? c([...u, z]) : c(u.filter((K) => K !== z));
    },
    w = (R) => {
      const z = parseInt(R.target.value);
      R.target.checked ? h([...d, z]) : h(d.filter((K) => K !== z));
    },
    _ = (R) => {
      i(
        `/${t}?page=${R}${a !== null ? `&category=${a}` : ""}${
          s !== null ? `&cities=${s}` : ""
        }`
      ),
        window.scrollTo(0, 0);
    };
  if (
    (C.useEffect(() => {
      const R = pa(r);
      u.length > 0 ? R.set("cities", u.join(",")) : R.delete("cities"),
        i(`/${t}?${R.toString()}`);
    }, [u]),
    C.useEffect(() => {
      const R = pa(r);
      d.length > 0 ? R.set("products", d.join(",")) : R.delete("products"),
        i(`/${t}?${R.toString()}`);
    }, [d]),
    C.useEffect(() => {
      ct({ breadcrumb_detail: "Promo Page" });
    }, []),
    b || E)
  )
    return null;
  const T = St(p.data["api::promo.promo"]),
    k = St(p.data["api::category.category"]),
    N = St(p.data["api::city.city"]),
    S = St(p.data["api::product.product"]),
    F = St(p.data["plugin::upload.file"]),
    j = Gy(k, parseInt(a || "0")),
    I = IC(T, {
      categories: a ? [parseInt(a)] : [],
      products: d,
      cities: u,
      search: l || "",
      channel: e,
    }),
    O = uP({ items: I, current_page: o, per_page_items: 20 });
  return y.jsxs(y.Fragment, {
    children: [
      y.jsx("div", {
        className: "bl-container bl-mb-[20px]",
        children: y.jsx(Ef, {}),
      }),
      y.jsxs("div", {
        className:
          "bl-container bl-flex bl-items-start md:bl-space-x-[24px] bl-relative",
        children: [
          y.jsx(ZT, {
            categories: k,
            products: S,
            cities: N,
            citiesChecked: u,
            productsChecked: d,
            onChangeProducts: w,
            onChangeCities: m,
            toggleMobileFilter: () => v(!1),
            showMobileFilter: g,
          }),
          y.jsxs("section", {
            className: "promo__list !bl-pt-0",
            children: [
              b && y.jsx("div", { children: "Loading..." }),
              E && y.jsx("div", { children: "Error" }),
              f &&
                y.jsxs(y.Fragment, {
                  children: [
                    j &&
                      y.jsxs("h4", {
                        className: "bl-text-white bl-mb-[15px]",
                        children: [
                          "Kategori: ",
                          y.jsx("strong", { children: j.name }),
                        ],
                      }),
                    y.jsx("div", {
                      className:
                        "bl-grid bl-grid-cols-2 xl:bl-grid-cols-4 bl-gap-4 lg:bl-gap-6 bl-self-start bl-mb-6",
                      children: O.data.map((R) => {
                        var z;
                        return y.jsx(
                          eP,
                          {
                            title: R.title,
                            banner: R.banner
                              ? (z = F.find((K) => K.id === R.banner)) == null
                                ? void 0
                                : z.url
                              : null,
                            periode_start: R.periode_start || "",
                            periode_end: R.periode_end,
                            body: "",
                            logo: null,
                            slug: R.slug,
                          },
                          R.id
                        );
                      }),
                    }),
                    I.length < 1 &&
                      y.jsx("h3", {
                        className: "bl-text-[24px] text-poppins bl-text-white",
                        children:
                          "Maaf, Promo yang anda cari tidak dapat ditemukan.",
                      }),
                    I.length > 0 &&
                      y.jsx("div", {
                        className: "bl-flex bl-justify-center bl-py-[15px]",
                        children: y.jsx(pb, {
                          onChange: _,
                          itemRender: sP,
                          defaultPageSize: 20,
                          defaultCurrent: O.page,
                          current: O.page,
                          total: O.total,
                          pageSize: 20,
                          showLessItems: !0,
                          showTitle: !1,
                          pageSizeOptions: [10, 15],
                        }),
                      }),
                  ],
                }),
            ],
          }),
          y.jsxs("button", {
            className:
              "bl-fixed bl-bottom-[100px] bl-right-[20px] bl-z-[99] bl-flex md:bl-hidden bl-bg-[#442052] bl-aspect-square bl-p-[8px] bl-rounded-full bl-shadow-lg bl-h-[48px] bl-px-[15px] bl-text-white bl-justify-center bl-items-center bl-space-x-[10px]",
            onClick: () => v(!0),
            children: [
              y.jsx("i", {
                className:
                  "a-system-icon icon-filter bl-block text-xl bl-text-white",
              }),
              y.jsx("span", { children: "Filter" }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Af({ categories: e, showMobileFilter: t, toggleMobileFilter: n }) {
  const [r] = Ca();
  return y.jsxs("aside", {
    className: ce(
      fe.bgGlass,
      "bl-hidden md:bl-block bl-min-w-[235px] bl-p-[15px] bl-isolate bl-overflow-hidden bl-sticky bl-top-[100px] bl-text-[#4D4D4D] aside__filter",
      t ? fe.aside__show : ""
    ),
    children: [
      y.jsx("div", {
        className: "bl-flex md:bl-hidden bl-justify-end",
        children: y.jsx("button", {
          className: ce("bl-text-[25px] bl-px-[10px] bl-text-[#6F2989]"),
          onClick: () => n(),
          children: y.jsx("i", {
            className: ce(
              "a-system-icon icon-exit bl-text-[16px] bl-text-[#6F2989]"
            ),
          }),
        }),
      }),
      y.jsxs("div", {
        className: "bl-flex bl-text-[#6F2989] bl-mb-[5px]",
        children: [
          y.jsx("i", {
            className:
              "a-system-icon icon-solusi bl-mr-[10px] bl-text-[#6F2989]",
          }),
          y.jsx("span", { className: "bl-font-bold", children: "Category" }),
        ],
      }),
      y.jsx("div", {
        className: "bl-mb-[15px]",
        children: e.map((i, o) =>
          y.jsx(
            Cn,
            {
              to: `/promo?category=${i.id}`,
              className: ce(
                fe.categoryLink,
                r.get("category") === String(i.id) ? fe.categoryActive : ""
              ),
              children: i.name,
            },
            o
          )
        ),
      }),
      y.jsxs("div", {
        className: "bl-flex bl-text-[#6F2989] bl-mb-[5px]",
        children: [
          y.jsx("i", {
            className:
              "a-system-icon icon-solusi bl-mr-[10px] bl-text-[#6F2989]",
          }),
          y.jsx("span", {
            className: "bl-font-bold",
            children: "Promo Partner",
          }),
        ],
      }),
      y.jsxs("div", {
        className: "bl-mb-[15px]",
        children: [
          y.jsx(hn, {
            to: "/kolaberaksi/blibli",
            className: ({ isActive: i, isPending: o }) =>
              o
                ? fe.categoryLink
                : i
                ? ce(fe.categoryLink, fe.categoryActive)
                : fe.categoryLink,
            children: "Blibli",
          }),
          y.jsx(hn, {
            to: "/kolaberaksi/expoversary-2024",
            className: ({ isActive: i, isPending: o }) =>
              o
                ? fe.categoryLink
                : i
                ? ce(fe.categoryLink, fe.categoryActive)
                : fe.categoryLink,
            children: "Expoversary 2024",
          }),
        ],
      }),
    ],
  });
}
function cP() {
  C.useEffect(() => {
    ct({ breadcrumb_detail: "Kolaberaksi Page" });
  }, []);
  const {
      isLoading: e,
      isError: t,
      isSuccess: n,
      data: r,
    } = pi({ queryKey: ["promos"], queryFn: () => mo() }),
    [i, o] = C.useState(!1);
  if (e || t) return null;
  const a = St(r.data["api::category.category"]);
  return y.jsxs(y.Fragment, {
    children: [
      y.jsx("div", {
        className: "bl-container bl-mb-[20px]",
        children: y.jsx("a", {
          href: "https://www.blibli.com/promosi/gin-bca-bangga-lokal-2023",
          target: "_blank",
          children: y.jsx("img", {
            src: "https://www.bca.co.id/-/media/Files/2023/bangga-lokal/web//banners/Banner_Bangga_Lokal_Blibli_REV.jpg",
            alt: "Blibli",
            className: "bl-rounded-[20px] bl-w-full",
          }),
        }),
      }),
      y.jsxs("div", {
        className:
          "bl-container bl-flex bl-items-start md:bl-space-x-[24px] bl-relative",
        children: [
          y.jsx(Af, {
            categories: a,
            toggleMobileFilter: () => o(!1),
            showMobileFilter: i,
          }),
          y.jsxs("section", {
            className: "promo__list !bl-pt-0",
            children: [
              y.jsx("h3", {
                className:
                  "bl-text-[18px] bl-my-[20px] bl-text-white text-shadow !bl-font-semibold",
                children: "Cek merchant-merchantnya:",
              }),
              y.jsx("div", {
                className:
                  "bl-grid bl-grid-cols-5 xl:bl-grid-cols-6 bl-gap-[4px] xl:bl-gap-6 bl-self-start bl-mb-6",
                children: Array.from(Array(143).keys()).map((l) =>
                  y.jsx(
                    "div",
                    {
                      children: y.jsx(_f.LazyLoadImage, {
                        src: `https://storage.googleapis.com/bangga-lokal_bucket/kolaberaksi-blibli/blibli-${
                          l + 1
                        }.jpg`,
                        alt: "",
                        className:
                          "bl-object-cover bl-w-full bl-h-full bl-rounded-[5px] lg:bl-rounded-[10px]",
                      }),
                    },
                    l
                  )
                ),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function dP(e) {
  return y.jsxs("div", {
    className: `${fe.cardPromo} ${e.className}`,
    children: [
      y.jsx("figure", {
        className:
          "bl-relative bl-overflow-hidden bl-rounded-tl-lg bl-rounded-tr-lg",
        children: y.jsx("img", {
          src: e.banner || "",
          width: 800,
          height: 350,
          alt: `${e.title} image`,
          className: fe.cardPromo__fileCover,
        }),
      }),
      y.jsxs("div", {
        className: fe.cardPromo__info,
        children: [
          y.jsx("div", {
            className: "mb-auto",
            children: y.jsx("h3", {
              className: fe.cardPromo__title,
              children: y.jsx("a", {
                href: e.slug,
                target: "_blank",
                className: "after:bl-absolute after:bl-inset-0",
                onClick: () => {
                  ct({
                    event: "promotionengagement",
                    promotion_name: `${e.title}`,
                    promotion_category: `${e.categories}`,
                  });
                },
                children: e.title,
              }),
            }),
          }),
          y.jsxs("span", {
            className: `${fe.cardPromo__date} text-grey-light`,
            children: [
              y.jsx("i", {
                className:
                  "a-system-icon   icon-clock bl-mr-[5px] bl-text-[#442052]",
              }),
              y.jsx("div", {
                dangerouslySetInnerHTML: {
                  __html: Ls(e.periode_start, e.periode_end, !0),
                },
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function fP() {
  C.useEffect(() => {
    ct({ breadcrumb_detail: "Paserba Bangga Lokal Page" });
  }, []);
  const {
      isLoading: e,
      isError: t,
      data: n,
    } = pi({ queryKey: ["promos"], queryFn: () => mo() }),
    [r, i] = C.useState(!1);
  if (e || t) return null;
  const o = St(n.data["api::category.category"]);
  return y.jsxs(y.Fragment, {
    children: [
      y.jsx("div", {
        className: "bl-container bl-mb-[20px]",
        children: y.jsx("a", {
          href: "https://www.bca.co.id/id/promo-bca/2023/03/31/07/03/paserba-bangga-lokal",
          target: "_blank",
          children: y.jsx("img", {
            src: "https://www.bca.co.id/-/media/Files/2023/bangga-lokal/web//banners/20230331-paserba-banner.jpg",
            alt: "Paserba Bangga Lokal",
            className: "bl-rounded-[20px] bl-w-full",
          }),
        }),
      }),
      y.jsxs("div", {
        className:
          "bl-container bl-flex bl-items-start md:bl-space-x-[24px] bl-relative",
        children: [
          y.jsx(Af, {
            categories: o,
            toggleMobileFilter: () => i(!1),
            showMobileFilter: r,
          }),
          y.jsx("section", {
            className: "promo__list !bl-pt-0",
            children: y.jsx("div", {
              className:
                "bl-grid bl-grid-cols-2 xl:bl-grid-cols-4 bl-gap-4 lg:bl-gap-6 bl-self-start bl-mb-6",
              children: y.jsx(dP, {
                title: "Paserba Bangga Lokal - Potongan Rp100 Ribu",
                banner:
                  "https://www.bca.co.id/-/media/Feature/Promo/Page/2023/03/20230331-paserba-banner.jpg?v=1",
                periode_start: null,
                periode_end: "2023-11-30",
                body: "",
                logo: null,
                slug: "https://www.bca.co.id/id/promo-bca/2023/03/31/07/03/paserba-bangga-lokal",
              }),
            }),
          }),
        ],
      }),
    ],
  });
}
function pP() {
  C.useEffect(() => {
    ct({ breadcrumb_detail: "Expoversary 2024 Page" });
  }, []);
  const {
      isLoading: e,
      isError: t,
      isSuccess: n,
      data: r,
    } = pi({ queryKey: ["promos"], queryFn: () => mo() }),
    [i, o] = C.useState(!1);
  if (e || t) return null;
  const a = St(r.data["api::category.category"]);
  return y.jsxs(y.Fragment, {
    children: [
      y.jsx("div", {
        className: "bl-container bl-mb-[20px]",
        children: y.jsx("a", {
          href: "https://www.blibli.com/promosi/gin-bca-bangga-lokal-2023",
          target: "_blank",
          children: y.jsx("img", {
            src: "https://storage.googleapis.com/bangga-lokal_bucket/Promopage_Banner_Expo_x_Banglok_f78a46c121/Promopage_Banner_Expo_x_Banglok_f78a46c121.jpg",
            alt: "Expoversary",
            className: "bl-rounded-[20px] bl-w-full",
          }),
        }),
      }),
      y.jsxs("div", {
        className:
          "bl-container bl-flex bl-items-start md:bl-space-x-[24px] bl-relative",
        children: [
          y.jsx(Af, {
            categories: a,
            toggleMobileFilter: () => o(!1),
            showMobileFilter: i,
          }),
          y.jsxs("section", {
            className: "promo__list !bl-pt-0",
            children: [
              y.jsx("h3", {
                className:
                  "bl-text-[18px] bl-my-[20px] bl-text-white text-shadow !bl-font-semibold",
                children: "Cek merchant-merchantnya:",
              }),
              y.jsx("div", {
                className:
                  "bl-grid bl-grid-cols-5 xl:bl-grid-cols-6 bl-gap-[4px] xl:bl-gap-6 bl-self-start bl-mb-6",
                children: Array.from(Array(51).keys()).map((l) =>
                  y.jsx(
                    "div",
                    {
                      children: y.jsx(_f.LazyLoadImage, {
                        src: `https://storage.googleapis.com/bangga-lokal_bucket/expoversary-2024/expoversary-${
                          l + 1
                        }.jpg`,
                        alt: "",
                        className:
                          "bl-object-cover bl-w-full bl-h-full bl-rounded-[5px] lg:bl-rounded-[10px]",
                      }),
                    },
                    l
                  )
                ),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const hP = new kS({ defaultOptions: { queries: { staleTime: 1e3 * 10 } } }),
  mP = aS([
    {
      path: "/",
      element: y.jsx(l1, {}),
      children: [
        { index: !0, element: y.jsx(bk, {}) },
        { path: "/merchant", element: y.jsx(w_, {}) },
        { path: "/aktivitas", element: y.jsx(em, {}) },
        { path: "/aktivitas/:type", element: y.jsx(em, {}) },
        { path: "/promo/:slug", element: y.jsx(JT, {}) },
        { path: "/promo", element: y.jsx(qu, { route: "promo" }) },
        // { path: "/kolaberaksi/blibli", element: y.jsx(cP, {}) },
        // { path: "/kolaberaksi/expoversary-2024", element: y.jsx(pP, {}) },
        {
          path: "/kolaberaksi/umkm-fest",
          element: y.jsx(qu, {
            channel: "kolaberaksi",
            route: "kolaberaksi/umkm-fest",
          }),
        },
        {
          path: "/kolaberaksi/bangga-lokal-x-kumulo",
          element: y.jsx(qu, {
            channel: "kumolo",
            route: "kolaberaksi/bangga-lokal-x-kumulo",
          }),
        },
        { path: "/kolaberaksi/paserba-bangga-lokal", element: y.jsx(fP, {}) },
      ],
    },
  ]),
  gP = document.getElementById("root");
Ku.createRoot(gP).render(
  y.jsx(BS, { client: hP, children: y.jsx(Yx, { router: mP }) })
);
