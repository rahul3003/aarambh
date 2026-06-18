import { t as e } from "./rolldown-runtime.C4p97ucE.mjs";
import {
  A as t,
  C as n,
  D as r,
  E as i,
  F as a,
  L as o,
  M as s,
  N as c,
  O as l,
  c as u,
  g as d,
  j as f,
  k as p,
  l as m,
  m as h,
  o as g,
  v as _,
  w as v,
} from "./react.D9gHkFHU.mjs";
import {
  K as y,
  L as b,
  N as ee,
  P as x,
  S,
  W as C,
  a as w,
  h as T,
  r as E,
  t as D,
  z as O,
} from "./motion.DYJBFqJ8.mjs";
import {
  $ as k,
  C as A,
  D as te,
  E as j,
  F as ne,
  H as M,
  I as re,
  P as N,
  Q as ie,
  S as P,
  a as F,
  at as I,
  b as L,
  dt as R,
  f as z,
  ft as B,
  l as ae,
  r as V,
  ut as oe,
  v as se,
  x as ce,
  y as le,
} from "./framer.S4LHNcVj.mjs";
var H,
  U = e(() => {
    H = (e) => e;
  }),
  W = e(() => {
    U();
  }),
  ue = e(() => {
    W();
  });
function de(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`) {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  }
  return n;
}
var fe = e(() => {}),
  G,
  pe = e(() => {
    ((G = {}),
      Object.defineProperty(G, `__esModule`, { value: !0 }),
      (G.warning = function () {}),
      (G.invariant = function () {}),
      G.__esModule,
      G.warning,
      G.invariant);
  }),
  me = e(() => {
    U();
  });
function he(e, t) {
  return (
    typeof e == `string`
      ? t
        ? (t[e] ?? (t[e] = document.querySelectorAll(e)), (e = t[e]))
        : (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
function K(e, t, { root: n, margin: r, amount: i = `any` } = {}) {
  if (typeof IntersectionObserver > `u`) return () => {};
  let a = he(e),
    o = new WeakMap(),
    s = new IntersectionObserver(
      (e) => {
        e.forEach((e) => {
          let n = o.get(e.target);
          if (e.isIntersecting !== !!n)
            if (e.isIntersecting) {
              let n = t(e);
              typeof n == `function` ? o.set(e.target, n) : s.unobserve(e.target);
            } else n && (n(e), o.delete(e.target));
        });
      },
      { root: n, rootMargin: r, threshold: typeof i == `number` ? i : Ie[i] }
    );
  return (a.forEach((e) => s.observe(e)), () => s.disconnect());
}
function ge(e, t) {
  if (t) {
    let { inlineSize: e, blockSize: n } = t[0];
    return { width: e, height: n };
  }
  return e instanceof SVGElement && `getBBox` in e
    ? e.getBBox()
    : { width: e.offsetWidth, height: e.offsetHeight };
}
function _e({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = Le.get(e)) == null ||
    r.forEach((r) => {
      r({
        target: e,
        contentSize: t,
        get size() {
          return ge(e, n);
        },
      });
    });
}
function ve(e) {
  e.forEach(_e);
}
function ye() {
  typeof ResizeObserver < `u` && (Re = new ResizeObserver(ve));
}
function be(e, t) {
  Re || ye();
  let n = he(e);
  return (
    n.forEach((e) => {
      let n = Le.get(e);
      (n || ((n = new Set()), Le.set(e, n)), n.add(t), Re?.observe(e));
    }),
    () => {
      n.forEach((e) => {
        let n = Le.get(e);
        (n?.delete(t), (n != null && n.size) || Re == null || Re.unobserve(e));
      });
    }
  );
}
function xe() {
  ((Be = () => {
    let e = { width: o.innerWidth, height: o.innerHeight },
      t = { target: o, size: e, contentSize: e };
    ze.forEach((e) => e(t));
  }),
    o.addEventListener(`resize`, Be));
}
function q(e) {
  return (
    ze.add(e),
    Be || xe(),
    () => {
      (ze.delete(e), !ze.size && Be && (Be = void 0));
    }
  );
}
function Se(e, t) {
  return typeof e == `function` ? q(e) : be(e, t);
}
function Ce(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEvent: n } }));
}
function we(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEntry: n } }));
}
var Te,
  Ee,
  De,
  Oe,
  ke,
  Ae,
  je,
  Me,
  Ne,
  Pe,
  Fe,
  Ie,
  Le,
  Re,
  ze,
  Be,
  Ve,
  He,
  Ue,
  We = e(() => {
    for (let e in (a(),
    U(),
    ue(),
    fe(),
    pe(),
    me(),
    (Te = [``, `X`, `Y`, `Z`]),
    (Ee = [`translate`, `scale`, `rotate`, `skew`]),
    (De = { syntax: `<angle>`, initialValue: `0deg`, toDefaultUnit: (e) => e + `deg` }),
    (Oe = {
      translate: {
        syntax: `<length-percentage>`,
        initialValue: `0px`,
        toDefaultUnit: (e) => e + `px`,
      },
      rotate: De,
      scale: { syntax: `<number>`, initialValue: 1, toDefaultUnit: H },
      skew: De,
    }),
    (ke = new Map()),
    (Ae = (e) => `--motion-${e}`),
    (je = [`x`, `y`, `z`]),
    Ee.forEach((e) => {
      Te.forEach((t) => {
        (je.push(e + t), ke.set(Ae(e + t), Oe[e]));
      });
    }),
    new Set(je),
    (Me = (e) => document.createElement(`div`).animate(e, { duration: 0.001 })),
    (Ne = {
      cssRegisterProperty: () =>
        typeof CSS < `u` && Object.hasOwnProperty.call(CSS, `registerProperty`),
      waapi: () => Object.hasOwnProperty.call(Element.prototype, `animate`),
      partialKeyframes: () => {
        try {
          Me({ opacity: [1] });
        } catch {
          return !1;
        }
        return !0;
      },
      finished: () => !!Me({ opacity: [0, 1] }).finished,
    }),
    (Pe = {}),
    (Fe = {}),
    Ne))
      Fe[e] = () => (Pe[e] === void 0 && (Pe[e] = Ne[e]()), Pe[e]);
    ((Ie = { any: 0, all: 1 }),
      (Le = new WeakMap()),
      (ze = new Set()),
      (Ve = {
        isActive: (e) => !!e.inView,
        subscribe: (e, { enable: t, disable: n }, { inViewOptions: r = {} }) => {
          let { once: i } = r;
          return K(
            e,
            (r) => {
              if ((t(), we(e, `viewenter`, r), !i))
                return (t) => {
                  (n(), we(e, `viewleave`, t));
                };
            },
            de(r, [`once`])
          );
        },
      }),
      (He = (e, t, n) => (r) => {
        (!r.pointerType || r.pointerType === `mouse`) && (n(), Ce(e, t, r));
      }),
      (Ue = {
        inView: Ve,
        hover: {
          isActive: (e) => !!e.hover,
          subscribe: (e, { enable: t, disable: n }) => {
            let r = He(e, `hoverstart`, t),
              i = He(e, `hoverend`, n);
            return (
              e.addEventListener(`pointerenter`, r),
              e.addEventListener(`pointerleave`, i),
              () => {
                (e.removeEventListener(`pointerenter`, r),
                  e.removeEventListener(`pointerleave`, i));
              }
            );
          },
        },
        press: {
          isActive: (e) => !!e.press,
          subscribe: (e, { enable: t, disable: n }) => {
            let r = (t) => {
                (n(), Ce(e, `pressend`, t), o.removeEventListener(`pointerup`, r));
              },
              i = (n) => {
                (t(), Ce(e, `pressstart`, n), o.addEventListener(`pointerup`, r));
              };
            return (
              e.addEventListener(`pointerdown`, i),
              () => {
                (e.removeEventListener(`pointerdown`, i), o.removeEventListener(`pointerup`, r));
              }
            );
          },
        },
      }),
      [...Object.keys(Ue)]);
  });
function Ge(e) {
  let {
      slots: n,
      gap: a,
      padding: o,
      paddingPerSide: s,
      paddingTop: l,
      paddingRight: d,
      paddingBottom: g,
      paddingLeft: _,
      speed: w,
      hoverFactor: D,
      direction: k,
      alignment: A,
      sizingOptions: te,
      fadeOptions: j,
      style: ne,
    } = e,
    { fadeContent: M, overflow: re, fadeWidth: N, fadeInset: ie, fadeAlpha: P } = j,
    { widthType: F, heightType: I } = te,
    L = s ? `${l}px ${d}px ${g}px ${_}px` : `${o}px`,
    R = se.current() === se.canvas,
    z = n.filter(Boolean),
    B = v.count(z),
    ae = B > 0;
  k === !0 && (k = `left`);
  let V = k === `left` || k === `right`,
    oe = b(0),
    ce = qe[k],
    le = C(oe, ce),
    H = i(null),
    U = p(() => [h(), h()], []),
    [W, ue] = c({ parent: null, children: null }),
    de = [],
    fe = [],
    G = 0,
    pe = 0;
  (R && ((G = B ? Math.floor(10 / B) : 0), (pe = 1)),
    !R &&
      ae &&
      W.parent &&
      ((G = Math.round((W.parent / W.children) * 2) + 1), (G = Math.min(G, Ke)), (pe = 1)));
  let me = t(() => {
      if (ae && H.current) {
        let e = V ? H.current.offsetWidth : H.current.offsetHeight,
          t = U[0].current ? (V ? U[0].current.offsetLeft : U[0].current.offsetTop) : 0;
        ue({
          parent: e,
          children:
            (U[1].current
              ? V
                ? U[1].current.offsetLeft + U[1].current.offsetWidth
                : U[1].current.offsetTop + U[1].current.offsetHeight
              : 0) -
            t +
            a,
        });
      }
    }, []),
    he = R ? { contentVisibility: `auto` } : {};
  if (ae) {
    if (!R) {
      let e = i(!0);
      f(
        () => (
          T.read(me),
          Se(H.current, ({ contentSize: t }) => {
            (!e.current && (t.width || t.height) && T.read(me), (e.current = !1));
          })
        ),
        []
      );
    }
    de = v.map(z, (e, t) => {
      let n;
      (t === 0 && (n = U[0]), t === z.length - 1 && (n = U[1]));
      let i = { width: F ? e.props?.width : `100%`, height: I ? e.props?.height : `100%` };
      return u(E, {
        inherit: `id`,
        children: u(`li`, {
          ref: n,
          style: i,
          children: r(
            e,
            {
              style: { ...e.props?.style, ...i, flexShrink: 0, ...he },
              layoutId: e.props.layoutId ? e.props.layoutId + `-original-` + t : void 0,
            },
            e.props?.children
          ),
        }),
      });
    });
  }
  if (!R)
    for (let e = 0; e < G; e++)
      fe = [
        ...fe,
        ...v.map(z, (t, n) =>
          u(
            E,
            {
              inherit: `id`,
              children: u(
                `li`,
                {
                  style: {
                    width: F ? t.props?.width : `100%`,
                    height: I ? t.props?.height : `100%`,
                    willChange: `transform`,
                  },
                  "aria-hidden": !0,
                  children: r(
                    t,
                    {
                      key: e + ` ` + n,
                      style: {
                        ...t.props?.style,
                        width: F ? t.props?.width : `100%`,
                        height: I ? t.props?.height : `100%`,
                        flexShrink: 0,
                        ...he,
                      },
                      layoutId: t.props.layoutId ? t.props.layoutId + `-dupe-` + e : void 0,
                    },
                    t.props?.children
                  ),
                },
                e + `li` + n
              ),
            },
            e + `lg` + n
          )
        ),
      ];
  let K = W.children + W.children * Math.round(W.parent / W.children),
    ge = i(null),
    _e = i(null),
    ve = i(0),
    ye = i(!1),
    be = O(),
    xe = i(null),
    q = i(null);
  if (!R) {
    let e = x(H);
    Je
      ? (f(() => {
          if (!(be || !K || !w))
            return (
              (q.current = xe.current.animate(
                { transform: [ce(0), ce(K)] },
                { duration: (Math.abs(K) / w) * 1e3, iterations: 1 / 0, easing: `linear` }
              )),
              () => q.current.cancel()
            );
        }, [D, K, w]),
        f(() => {
          q.current &&
            (e && q.current.playState === `paused`
              ? q.current.play()
              : !e && q.current.playState === `running` && q.current.pause());
        }, [e]))
      : ee((t) => {
          if (!K || be || Je) return;
          (ge.current === null && (ge.current = t), (t -= ge.current));
          let n = (_e.current === null ? 0 : t - _e.current) * (w / 1e3);
          (ye.current && (n *= D),
            (ve.current += n),
            (ve.current = y(0, K, ve.current)),
            (_e.current = t),
            e && oe.set(ve.current));
        });
  }
  let Ce = V ? `to right` : `to bottom`,
    we = N / 2,
    Te = 100 - N / 2,
    Ee = `linear-gradient(${Ce}, rgba(0, 0, 0, ${P}) ${et(ie, 0, we)}%, rgba(0, 0, 0, 1) ${we}%, rgba(0, 0, 0, 1) ${Te}%, rgba(0, 0, 0, ${P}) ${100 - ie}%)`;
  return ae
    ? u(`section`, {
        style: {
          ...Ye,
          opacity: pe,
          WebkitMaskImage: M ? Ee : void 0,
          MozMaskImage: M ? Ee : void 0,
          maskImage: M ? Ee : void 0,
          overflow: re ? `visible` : `hidden`,
          padding: L,
        },
        ref: H,
        children: m(S.ul, {
          ref: xe,
          style: {
            ...Ye,
            gap: a,
            top: k === `bottom` && tt(K) ? -K : void 0,
            left: k === `right` && tt(K) ? -K : void 0,
            placeItems: A,
            position: `relative`,
            flexDirection: V ? `row` : `column`,
            ...ne,
            willChange: R ? `auto` : `transform`,
            transform: Je ? ce(0) : le,
          },
          onMouseEnter: () => {
            ((ye.current = !0), q.current && (q.current.playbackRate = D));
          },
          onMouseLeave: () => {
            ((ye.current = !1), q.current && (q.current.playbackRate = 1));
          },
          children: [de, fe],
        }),
      })
    : m(`section`, {
        style: Xe,
        children: [
          u(`div`, { style: Ze, children: `✨` }),
          u(`p`, { style: Qe, children: `Connect to Content` }),
          u(`p`, {
            style: $e,
            children: `Add layers or components to infinitely loop on your page.`,
          }),
        ],
      });
}
var Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  et,
  tt,
  nt = e(() => {
    (g(),
      n(),
      M(),
      D(),
      We(),
      (Ke = 100),
      (qe = {
        left: (e) => `translateX(-${e}px)`,
        right: (e) => `translateX(${e}px)`,
        top: (e) => `translateY(-${e}px)`,
        bottom: (e) => `translateY(${e}px)`,
      }),
      (Je = typeof Animation < `u` && typeof Animation.prototype.updatePlaybackRate == `function`),
      (Ge.defaultProps = {
        gap: 10,
        padding: 10,
        sizingOptions: { widthType: !0, heightType: !0 },
        fadeOptions: { fadeContent: !0, overflow: !1, fadeWidth: 25, fadeAlpha: 0, fadeInset: 0 },
        direction: !0,
      }),
      A(Ge, {
        slots: { type: F.Array, title: `Children`, control: { type: F.ComponentInstance } },
        speed: {
          type: F.Number,
          title: `Speed`,
          min: 0,
          max: 1e3,
          defaultValue: 100,
          unit: `%`,
          displayStepper: !0,
          step: 5,
        },
        direction: {
          type: F.Enum,
          title: `Direction`,
          options: [`left`, `right`, `top`, `bottom`],
          optionIcons: [`direction-left`, `direction-right`, `direction-up`, `direction-down`],
          optionTitles: [`Left`, `Right`, `Top`, `Bottom`],
          defaultValue: `left`,
          displaySegmentedControl: !0,
        },
        alignment: {
          type: F.Enum,
          title: `Align`,
          options: [`flex-start`, `center`, `flex-end`],
          optionIcons: {
            direction: {
              right: [`align-top`, `align-middle`, `align-bottom`],
              left: [`align-top`, `align-middle`, `align-bottom`],
              top: [`align-left`, `align-center`, `align-right`],
              bottom: [`align-left`, `align-center`, `align-right`],
            },
          },
          defaultValue: `center`,
          displaySegmentedControl: !0,
        },
        gap: { type: F.Number, title: `Gap` },
        padding: {
          title: `Padding`,
          type: F.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
        },
        sizingOptions: {
          type: F.Object,
          title: `Sizing`,
          controls: {
            widthType: {
              type: F.Boolean,
              title: `Width`,
              enabledTitle: `Auto`,
              disabledTitle: `Stretch`,
              defaultValue: !0,
            },
            heightType: {
              type: F.Boolean,
              title: `Height`,
              enabledTitle: `Auto`,
              disabledTitle: `Stretch`,
              defaultValue: !0,
            },
          },
        },
        fadeOptions: {
          type: F.Object,
          title: `Clipping`,
          controls: {
            fadeContent: { type: F.Boolean, title: `Fade`, defaultValue: !0 },
            overflow: {
              type: F.Boolean,
              title: `Overflow`,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              defaultValue: !1,
              hidden(e) {
                return e.fadeContent === !0;
              },
            },
            fadeWidth: {
              type: F.Number,
              title: `Width`,
              defaultValue: 25,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeInset: {
              type: F.Number,
              title: `Inset`,
              defaultValue: 0,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeAlpha: {
              type: F.Number,
              title: `Opacity`,
              defaultValue: 0,
              min: 0,
              max: 1,
              step: 0.05,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
          },
        },
        hoverFactor: {
          type: F.Number,
          title: `Hover`,
          min: 0,
          max: 1,
          unit: `x`,
          defaultValue: 1,
          step: 0.1,
          displayStepper: !0,
          description: `Slows down the speed while you are hovering.`,
        },
      }),
      (Ye = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        maxWidth: `100%`,
        maxHeight: `100%`,
        placeItems: `center`,
        margin: 0,
        padding: 0,
        listStyleType: `none`,
        textIndent: `none`,
      }),
      (Xe = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        placeContent: `center`,
        placeItems: `center`,
        flexDirection: `column`,
        color: `#96F`,
        background: `rgba(136, 85, 255, 0.1)`,
        fontSize: 11,
        overflow: `hidden`,
        padding: `20px 20px 30px 20px`,
      }),
      (Ze = { fontSize: 32, marginBottom: 10 }),
      (Qe = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: `center` }),
      ($e = { margin: 0, opacity: 0.7, maxWidth: 150, lineHeight: 1.5, textAlign: `center` }),
      (et = (e, t, n) => Math.min(Math.max(e, t), n)),
      (tt = (e) => typeof e == `number` && !isNaN(e)));
  }),
  rt,
  it,
  at,
  ot = e(() => {
    (M(),
      te.loadFonts([`GF;Unbounded-regular`, `GF;Unbounded-700`]),
      (rt = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Unbounded`,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/unbounded/v7/Yq6F-LOTXCb04q32xlpat-6uR42XTqtG6xjx04jHgP6LR0Y.woff2`,
              weight: `400`,
            },
            {
              family: `Unbounded`,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/unbounded/v7/Yq6F-LOTXCb04q32xlpat-6uR42XTqtG6__204jHgP6LR0Y.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (it = [
        `.framer-7fTja .framer-styles-preset-1dy6ejl:not(.rich-text-wrapper), .framer-7fTja .framer-styles-preset-1dy6ejl.rich-text-wrapper p { --framer-font-family: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-family-bold: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.1px; --framer-line-height: 2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-eea41e84-741c-4ad1-8fa4-d13594d15041, #384036); --framer-text-decoration: none; --framer-text-transform: uppercase; }`,
      ]),
      (at = `framer-7fTja`));
  });
function st(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ct,
  lt,
  ut,
  dt,
  ft,
  pt,
  mt,
  ht,
  gt,
  _t,
  vt,
  J,
  yt,
  bt = e(() => {
    (g(),
      M(),
      D(),
      n(),
      ot(),
      (ct = { sc6AiSJKm: { hover: !0 } }),
      (lt = [`sc6AiSJKm`, `VdCE0epQU`]),
      (ut = `framer-1R6mF`),
      (dt = { sc6AiSJKm: `framer-v-dqaxfb`, VdCE0epQU: `framer-v-bff8k2` }),
      (ft = { damping: 60, delay: 0, mass: 1, stiffness: 212, type: `spring` }),
      (pt = (e, t) => `translate(-50%, -50%) ${t}`),
      (mt = ({ value: e, children: t }) => {
        let n = l(w),
          r = e ?? n.transition,
          i = p(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return u(w.Provider, { value: i, children: t });
      }),
      (ht = S(s)),
      (gt = { Active: `VdCE0epQU`, Default: `sc6AiSJKm` }),
      (_t = ({ height: e, id: t, link: n, pageName: r, width: i, ...a }) => ({
        ...a,
        variant: gt[a.variant] ?? a.variant ?? `sc6AiSJKm`,
        vr3GalQZm: r ?? a.vr3GalQZm ?? `Home`,
        x7kSahbL4: n ?? a.x7kSahbL4,
      })),
      (vt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = B(
        d(function (e, t) {
          let { activeLocale: n, setLocale: r } = I(),
            {
              style: a,
              className: o,
              layoutId: c,
              variant: l,
              x7kSahbL4: d,
              vr3GalQZm: f,
              ...p
            } = _t(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: v,
              gestureHandlers: y,
              gestureVariant: b,
              isLoading: ee,
              setGestureState: x,
              setVariant: C,
              variants: w,
            } = R({
              cycleOrder: lt,
              defaultVariant: `sc6AiSJKm`,
              enabledGestures: ct,
              variant: l,
              variantClassNames: dt,
            }),
            T = vt(e, w),
            D = i(null),
            O = _(),
            A = [at];
          return (
            k(),
            u(E, {
              id: c ?? O,
              children: u(ht, {
                animate: w,
                initial: !1,
                children: u(mt, {
                  value: ft,
                  children: u(z, {
                    href: d,
                    children: m(S.a, {
                      ...p,
                      ...y,
                      className: `${j(ut, ...A, `framer-dqaxfb`, o, g)} framer-10gmmwv`,
                      "data-framer-name": `Default`,
                      layoutDependency: T,
                      layoutId: `sc6AiSJKm`,
                      ref: t ?? D,
                      style: {
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                        borderBottomLeftRadius: 30,
                        borderBottomRightRadius: 30,
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        ...a,
                      },
                      variants: {
                        "sc6AiSJKm-hover": {
                          backgroundColor: `var(--token-122cea26-357d-4aa9-9285-cd7ff9c161b1, rgba(51, 66, 50, 0.05))`,
                        },
                        VdCE0epQU: {
                          backgroundColor: `var(--token-16cecdcd-c5a5-4884-abaa-e0abd93e3514, rgba(255, 255, 255, 0.1))`,
                        },
                      },
                      ...st(
                        {
                          "sc6AiSJKm-hover": { "data-framer-name": void 0 },
                          VdCE0epQU: { "data-framer-name": `Active` },
                        },
                        h,
                        b
                      ),
                      children: [
                        u(S.div, {
                          className: `framer-rtm2a`,
                          layoutDependency: T,
                          layoutId: `sTNq9LGiP`,
                          style: {
                            backgroundColor: `var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(248, 248, 245))`,
                            borderBottomLeftRadius: 220,
                            borderBottomRightRadius: 220,
                            borderTopLeftRadius: 220,
                            borderTopRightRadius: 220,
                          },
                          transformTemplate: pt,
                          variants: {
                            "sc6AiSJKm-hover": {
                              backgroundColor: `var(--token-122cea26-357d-4aa9-9285-cd7ff9c161b1, rgba(51, 66, 50, 0.05))`,
                            },
                          },
                        }),
                        u(L, {
                          __fromCanvasComponent: !0,
                          children: u(s, {
                            children: u(S.p, {
                              className: `framer-styles-preset-1dy6ejl`,
                              "data-styles-preset": `cQLuLB99o`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255)))`,
                              },
                              children: `Home`,
                            }),
                          }),
                          className: `framer-1hdez2p`,
                          fonts: [`Inter`],
                          layoutDependency: T,
                          layoutId: `gnzvMDwZQ`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255))`,
                          },
                          text: f,
                          variants: {
                            "sc6AiSJKm-hover": { transformPerspective: 1200 },
                            VdCE0epQU: { "--extracted-r6o4lv": `rgb(97, 189, 255)` },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...st(
                            {
                              VdCE0epQU: {
                                children: u(s, {
                                  children: u(S.p, {
                                    className: `framer-styles-preset-1dy6ejl`,
                                    "data-styles-preset": `cQLuLB99o`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, rgb(97, 189, 255))`,
                                    },
                                    children: `Home`,
                                  }),
                                }),
                              },
                            },
                            h,
                            b
                          ),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-1R6mF.framer-10gmmwv, .framer-1R6mF .framer-10gmmwv { display: block; }`,
          `.framer-1R6mF.framer-dqaxfb { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: hidden; padding: 0px 20px 0px 20px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-1R6mF .framer-rtm2a { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 1px); left: 51%; overflow: visible; position: absolute; top: 50%; width: 1px; z-index: 0; }`,
          `.framer-1R6mF .framer-1hdez2p { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-1R6mF.framer-dqaxfb { gap: 0px; } .framer-1R6mF.framer-dqaxfb > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-1R6mF.framer-dqaxfb > :first-child { margin-left: 0px; } .framer-1R6mF.framer-dqaxfb > :last-child { margin-right: 0px; } }`,
          `.framer-1R6mF.framer-v-bff8k2 .framer-rtm2a { pointer-events: none; }`,
          `.framer-1R6mF.framer-v-dqaxfb.hover .framer-rtm2a { height: var(--framer-aspect-ratio-supported, 111px); width: 111px; }`,
          ...it,
        ],
        `framer-1R6mF`
      )),
      (yt = J),
      (J.displayName = `Nav - Link - Single`),
      (J.defaultProps = { height: 40, width: 85 }),
      A(J, {
        variant: {
          options: [`sc6AiSJKm`, `VdCE0epQU`],
          optionTitles: [`Default`, `Active`],
          title: `Variant`,
          type: F.Enum,
        },
        x7kSahbL4: { title: `Link`, type: F.Link },
        vr3GalQZm: {
          defaultValue: `Home`,
          displayTextArea: !1,
          title: `Page Name`,
          type: F.String,
        },
      }),
      P(
        J,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...ne(rt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Y(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  X,
  Rt,
  zt = e(() => {
    (g(),
      M(),
      D(),
      n(),
      bt(),
      (xt = N(yt)),
      (St = [`fHJjbHKkm`, `GLa9l271R`, `rr_pkWWbR`]),
      (Ct = `framer-WtoEQ`),
      (wt = {
        fHJjbHKkm: `framer-v-ucxkdj`,
        GLa9l271R: `framer-v-1s1z7fp`,
        rr_pkWWbR: `framer-v-pzsctd`,
      }),
      (Tt = { damping: 40, delay: 0, mass: 1, stiffness: 400, type: `spring` }),
      (Et = { damping: 40, delay: 0, mass: 1, stiffness: 345, type: `spring` }),
      (Dt = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Ot = { damping: 40, delay: 0, mass: 1, stiffness: 600, type: `spring` }),
      (kt = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0.9,
        skewX: 0,
        skewY: 0,
        transition: { damping: 30, delay: 0, mass: 1, stiffness: 152, type: `spring` },
      }),
      (At = (e, t) => {
        switch (e) {
          case `jcV_yFltq`:
            return `VdCE0epQU`;
          default:
            return `sc6AiSJKm`;
        }
      }),
      (jt = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Mt = ({ value: e, children: t }) => {
        let n = l(w),
          r = e ?? n.transition,
          i = p(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return u(w.Provider, { value: i, children: t });
      }),
      (Nt = { "Phone Open": `rr_pkWWbR`, Desktop: `fHJjbHKkm`, Phone: `GLa9l271R` }),
      (Pt = S.create(s)),
      (Ft = {
        About: `KHmCAiZun`,
        Blogs: `AEo5PpUoG`,
        Contact: `l6Hp5cyuM`,
        Gallery: `OJ3ybOaAn`,
        Home: `jcV_yFltq`,
        Projects: `Y2NgVSzxp`,
        Reviews: `nrcCICgod`,
        Services: `AljqF7WF7`,
      }),
      (It = ({ activePage: e, height: t, id: n, logo: r, width: i, ...a }) => ({
        ...a,
        gGSU0bs4G: Ft[e] ?? e ?? a.gGSU0bs4G ?? `jcV_yFltq`,
        N5s7qVtp2: r ??
          a.N5s7qVtp2 ?? {
            pixelHeight: 256,
            pixelWidth: 519,
            src: `https://framerusercontent.com/images/11HoMdlPXLGTwkqbrjuVFIVTM9s.png?width=519&height=256`,
            srcSet: `https://framerusercontent.com/images/11HoMdlPXLGTwkqbrjuVFIVTM9s.png?scale-down-to=512&width=519&height=256 512w,https://framerusercontent.com/images/11HoMdlPXLGTwkqbrjuVFIVTM9s.png?width=519&height=256 519w`,
          },
        variant: Nt[a.variant] ?? a.variant ?? `fHJjbHKkm`,
      })),
      (Lt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = B(
        d(function (e, t) {
          let n = i(null),
            r = t ?? n,
            a = _(),
            { activeLocale: o, setLocale: s } = I(),
            c = k(),
            {
              style: l,
              className: d,
              layoutId: f,
              variant: p,
              N5s7qVtp2: h,
              gGSU0bs4G: g,
              ...v
            } = It(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: ee,
              gestureHandlers: x,
              gestureVariant: C,
              isLoading: w,
              setGestureState: T,
              setVariant: D,
              variants: O,
            } = R({
              cycleOrder: St,
              defaultVariant: `fHJjbHKkm`,
              ref: r,
              variant: p,
              variantClassNames: wt,
            }),
            A = Lt(e, O),
            { activeVariantCallback: te, delay: ne } = ie(y),
            M = te(async (...e) => {
              D(`GLa9l271R`);
            }),
            N = j(Ct),
            P = () => y === `rr_pkWWbR`;
          return (
            oe(),
            u(E, {
              id: f ?? a,
              children: u(Pt, {
                animate: O,
                initial: !1,
                children: u(Mt, {
                  value: Tt,
                  ...Y({ GLa9l271R: { value: Et } }, y, C),
                  children: m(S.nav, {
                    ...v,
                    ...x,
                    className: j(N, `framer-ucxkdj`, d, b),
                    "data-framer-name": `Desktop`,
                    "data-hide-scrollbars": !0,
                    layoutDependency: A,
                    layoutId: `fHJjbHKkm`,
                    ref: r,
                    style: {
                      backdropFilter: `blur(5px)`,
                      backgroundColor: `rgba(0, 0, 0, 0)`,
                      WebkitBackdropFilter: `blur(5px)`,
                      ...l,
                    },
                    variants: {
                      GLa9l271R: {
                        backgroundColor: `var(--token-2f560859-5998-4075-847c-9f666c5cfc0b, rgb(10, 10, 10))`,
                      },
                      rr_pkWWbR: {
                        backgroundColor: `var(--token-2f560859-5998-4075-847c-9f666c5cfc0b, rgb(10, 10, 10))`,
                      },
                    },
                    ...Y(
                      {
                        GLa9l271R: { "data-framer-name": `Phone` },
                        rr_pkWWbR: { "data-framer-name": `Phone Open` },
                      },
                      y,
                      C
                    ),
                    children: [
                      m(S.div, {
                        className: `framer-u0649m`,
                        "data-framer-name": `Name`,
                        layoutDependency: A,
                        layoutId: `pPSzVv6bP`,
                        children: [
                          u(S.div, {
                            className: `framer-1p6itxr`,
                            "data-framer-name": `Icons`,
                            layoutDependency: A,
                            layoutId: `ji71DsFlS`,
                            children: u(z, {
                              href: { webPageId: `yd7nMFDHh` },
                              motionChild: !0,
                              nodeId: `jyHuYNA_I`,
                              openInNewTab: !1,
                              scopeId: `MIowtyfoc`,
                              children: u(ae, {
                                as: `a`,
                                background: {
                                  alt: ``,
                                  fit: `fit`,
                                  intrinsicHeight: 125,
                                  intrinsicWidth: 511,
                                  loading: re(
                                    (c?.y || 0) +
                                      (10 + ((c?.height || 74) - 20 - 68) / 2) +
                                      0 +
                                      -1.547
                                  ),
                                  pixelHeight: 125,
                                  pixelWidth: 511,
                                  sizes: `158.8816px`,
                                  ...Dt(h),
                                  positionX: `left`,
                                  positionY: `center`,
                                },
                                className: `framer-pc0yr7 framer-1v7lmw3`,
                                layoutDependency: A,
                                layoutId: `jyHuYNA_I`,
                                ...Y(
                                  {
                                    GLa9l271R: {
                                      background: {
                                        alt: ``,
                                        fit: `fit`,
                                        intrinsicHeight: 125,
                                        intrinsicWidth: 511,
                                        loading: re(
                                          (c?.y || 0) +
                                            0 +
                                            (((c?.height || 64) - 0 - 64) / 2 + 0 + 0) +
                                            -2 +
                                            -1.547
                                        ),
                                        pixelHeight: 125,
                                        pixelWidth: 511,
                                        sizes: `158.8816px`,
                                        ...Dt(h),
                                        positionX: `left`,
                                        positionY: `center`,
                                      },
                                    },
                                    rr_pkWWbR: {
                                      background: {
                                        alt: ``,
                                        fit: `fit`,
                                        intrinsicHeight: 125,
                                        intrinsicWidth: 511,
                                        loading: re(
                                          (c?.y || 0) +
                                            0 +
                                            (0 + (((c?.height || 228) - 60 - 168) / 1) * 0) +
                                            -2 +
                                            -1.547
                                        ),
                                        pixelHeight: 125,
                                        pixelWidth: 511,
                                        sizes: `158.8816px`,
                                        ...Dt(h),
                                        positionX: `left`,
                                        positionY: `center`,
                                      },
                                    },
                                  },
                                  y,
                                  C
                                ),
                              }),
                            }),
                          }),
                          P() &&
                            m(S.div, {
                              className: `framer-6vtiey`,
                              "data-framer-name": `Hamburger`,
                              layoutDependency: A,
                              layoutId: `owmee1O73`,
                              style: {
                                backgroundColor: `rgba(0, 0, 0, 0)`,
                                borderBottomLeftRadius: 0,
                                borderBottomRightRadius: 0,
                                borderTopLeftRadius: 0,
                                borderTopRightRadius: 0,
                              },
                              variants: {
                                rr_pkWWbR: {
                                  backgroundColor: `var(--token-16cecdcd-c5a5-4884-abaa-e0abd93e3514, rgba(255, 255, 255, 0.1))`,
                                  borderBottomLeftRadius: 10,
                                  borderBottomRightRadius: 10,
                                  borderTopLeftRadius: 10,
                                  borderTopRightRadius: 10,
                                },
                              },
                              ...Y({ rr_pkWWbR: { "data-highlight": !0, onTap: M } }, y, C),
                              children: [
                                u(S.div, {
                                  className: `framer-19d0xor`,
                                  "data-framer-name": `Bottom`,
                                  layoutDependency: A,
                                  layoutId: `qkFwvqkMm`,
                                  style: {
                                    backgroundColor: `rgb(153, 153, 153)`,
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10,
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10,
                                    rotate: 0,
                                  },
                                  variants: {
                                    rr_pkWWbR: {
                                      backgroundColor: `rgb(97, 189, 255)`,
                                      rotate: -45,
                                    },
                                  },
                                }),
                                u(S.div, {
                                  className: `framer-1aj2wyg`,
                                  "data-framer-name": `Top`,
                                  layoutDependency: A,
                                  layoutId: `qGPR2rx9h`,
                                  style: {
                                    backgroundColor: `rgb(153, 153, 153)`,
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10,
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10,
                                    rotate: 0,
                                  },
                                  variants: {
                                    rr_pkWWbR: { backgroundColor: `rgb(97, 189, 255)`, rotate: 45 },
                                  },
                                }),
                              ],
                            }),
                        ],
                      }),
                      P() &&
                        u(Mt, {
                          ...Y({ rr_pkWWbR: { value: Ot } }, y, C),
                          children: u(S.div, {
                            className: `framer-1j08m2b`,
                            "data-border": !0,
                            "data-framer-name": `Links`,
                            layoutDependency: A,
                            layoutId: `L9DnBDMT0`,
                            style: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `var(--token-31d2d8ec-6073-495b-98cd-5e142f56bc63, rgba(255, 255, 255, 0.15))`,
                              "--border-left-width": `1px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `1px`,
                              backdropFilter: `blur(5px)`,
                              backgroundColor: `var(--token-620fac81-7c2e-4342-b93a-72603d1fc89e, rgb(13, 13, 13))`,
                              borderBottomLeftRadius: 160,
                              borderBottomRightRadius: 160,
                              borderTopLeftRadius: 160,
                              borderTopRightRadius: 160,
                              boxShadow: `0px -9px 22px 0px rgba(0, 0, 0, 0.32)`,
                              WebkitBackdropFilter: `blur(5px)`,
                            },
                            variants: {
                              rr_pkWWbR: {
                                "--border-bottom-width": `0px`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-top-width": `0px`,
                                backgroundColor: `rgba(0, 0, 0, 0)`,
                                borderBottomLeftRadius: 0,
                                borderBottomRightRadius: 0,
                                borderTopLeftRadius: 0,
                                borderTopRightRadius: 0,
                                boxShadow: `none`,
                              },
                            },
                            children: u(le, {
                              links: [
                                { href: { webPageId: `UByTgCGiz` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `UByTgCGiz` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                u(V, {
                                  height: 40,
                                  ...Y(
                                    {
                                      rr_pkWWbR: {
                                        height: 64,
                                        width: `calc(${c?.width || `100vw`} - 40px)`,
                                        y:
                                          (c?.y || 0) +
                                          0 +
                                          (64 + (((c?.height || 228) - 60 - 168) / 1) * 1) +
                                          40 +
                                          0,
                                      },
                                    },
                                    y,
                                    C
                                  ),
                                  children: u(ce, {
                                    className: `framer-13hzg55-container`,
                                    isModuleExternal: !0,
                                    layoutDependency: A,
                                    layoutId: `pxkEqcHwv-container`,
                                    nodeId: `pxkEqcHwv`,
                                    rendersWithMotion: !0,
                                    scopeId: `MIowtyfoc`,
                                    whileHover: kt,
                                    children: u(yt, {
                                      height: `100%`,
                                      id: `pxkEqcHwv`,
                                      layoutId: `pxkEqcHwv`,
                                      style: { height: `100%` },
                                      variant: jt(At(g, o)),
                                      vr3GalQZm: `Home`,
                                      width: `100%`,
                                      x7kSahbL4: e[0],
                                      ...Y(
                                        {
                                          rr_pkWWbR: {
                                            style: { height: `100%`, width: `100%` },
                                            x7kSahbL4: e[1],
                                          },
                                        },
                                        y,
                                        C
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                          }),
                        }),
                    ],
                  }),
                }),
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-WtoEQ.framer-1v7lmw3, .framer-WtoEQ .framer-1v7lmw3 { display: block; }`,
          `.framer-WtoEQ.framer-ucxkdj { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; height: 74px; justify-content: space-between; overflow: hidden; padding: 10px 40px 10px 40px; position: relative; width: 1440px; }`,
          `.framer-WtoEQ .framer-u0649m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-WtoEQ .framer-1p6itxr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 68px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 161px; }`,
          `.framer-WtoEQ .framer-pc0yr7 { flex: none; height: 105%; overflow: visible; position: relative; text-decoration: none; width: 99%; }`,
          `.framer-WtoEQ .framer-6vtiey { flex: none; height: 40px; overflow: hidden; position: relative; width: 40px; }`,
          `.framer-WtoEQ .framer-19d0xor { flex: none; height: 2px; left: calc(50.00000000000002% - 20px / 2); overflow: hidden; position: absolute; top: calc(62.50000000000002% - 2px / 2); width: 20px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-WtoEQ .framer-1aj2wyg { flex: none; height: 2px; left: calc(50.00000000000002% - 20px / 2); overflow: hidden; position: absolute; top: calc(37.50000000000002% - 2px / 2); width: 20px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-WtoEQ .framer-1j08m2b { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 10px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-WtoEQ .framer-13hzg55-container { flex: none; height: 40px; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`,
          `.framer-WtoEQ.framer-v-1s1z7fp.framer-ucxkdj { flex-direction: column; gap: 0px; height: 64px; justify-content: center; padding: 0px; width: 390px; }`,
          `.framer-WtoEQ.framer-v-1s1z7fp .framer-u0649m, .framer-WtoEQ.framer-v-pzsctd .framer-u0649m { gap: unset; height: 64px; justify-content: space-between; order: 0; padding: 0px 12px 0px 20px; width: 100%; z-index: 2; }`,
          `.framer-WtoEQ.framer-v-1s1z7fp .framer-1p6itxr, .framer-WtoEQ.framer-v-pzsctd .framer-1p6itxr { order: 0; }`,
          `.framer-WtoEQ.framer-v-pzsctd.framer-ucxkdj { flex-direction: column; height: min-content; max-height: calc(var(--framer-viewport-height, 100vh) * 1); overflow: auto; overscroll-behavior: contain; padding: 0px 0px 60px 0px; width: 390px; }`,
          `.framer-WtoEQ.framer-v-pzsctd .framer-6vtiey { cursor: pointer; height: 44px; order: 1; width: 44px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-WtoEQ.framer-v-pzsctd .framer-19d0xor, .framer-WtoEQ.framer-v-pzsctd .framer-1aj2wyg { top: calc(50.00000000000002% - 2px / 2); }`,
          `.framer-WtoEQ.framer-v-pzsctd .framer-1j08m2b { align-content: flex-start; align-items: flex-start; flex-direction: column; justify-content: flex-start; order: 1; padding: 40px 20px 0px 20px; width: 100%; will-change: unset; z-index: 2; }`,
          `.framer-WtoEQ.framer-v-pzsctd .framer-13hzg55-container { height: 64px; order: 0; width: 100%; }`,
          `.framer-WtoEQ[data-hide-scrollbars="true"]::-webkit-scrollbar, .framer-WtoEQ [data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
          `.framer-WtoEQ[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb, .framer-WtoEQ [data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,
          `.framer-WtoEQ[data-hide-scrollbars="true"], .framer-WtoEQ [data-hide-scrollbars="true"] { scrollbar-width: none; }`,
          `.framer-WtoEQ[data-border="true"]::after, .framer-WtoEQ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-WtoEQ`
      )),
      (Rt = X),
      (X.displayName = `Navigation Bar Copy`),
      (X.defaultProps = { height: 74, width: 1440 }),
      A(X, {
        variant: {
          options: [`fHJjbHKkm`, `GLa9l271R`, `rr_pkWWbR`],
          optionTitles: [`Desktop`, `Phone`, `Phone Open`],
          title: `Variant`,
          type: F.Enum,
        },
        N5s7qVtp2: {
          __defaultAssetReference: `data:framer/asset-reference,11HoMdlPXLGTwkqbrjuVFIVTM9s.png?originalFilename=Frame+4.png&preferredSize=auto`,
          title: `Logo`,
          type: F.ResponsiveImage,
        },
        gGSU0bs4G: {
          defaultValue: `jcV_yFltq`,
          options: [
            `jcV_yFltq`,
            `KHmCAiZun`,
            `AljqF7WF7`,
            `Y2NgVSzxp`,
            `OJ3ybOaAn`,
            `AEo5PpUoG`,
            `nrcCICgod`,
            `l6Hp5cyuM`,
          ],
          optionTitles: [
            `Home`,
            `About`,
            `Services`,
            `Projects`,
            `Gallery`,
            `Blogs`,
            `Reviews`,
            `Contact`,
          ],
          title: `Active Page`,
          type: F.Enum,
        },
      }),
      P(X, [{ explicitInter: !0, fonts: [] }, ...xt], { supportsExplicitInterCodegen: !0 }));
  }),
  Bt,
  Vt,
  Ht,
  Ut = e(() => {
    (M(),
      te.loadFonts([`GF;Manrope-regular`, `GF;Manrope-700`]),
      (Bt = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Manrope`,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/manrope/v15/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk79FO_A87jxeN7B.woff2`,
              weight: `400`,
            },
            {
              family: `Manrope`,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/manrope/v15/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4aE-_A87jxeN7B.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (Vt = [
        `.framer-OU0gg .framer-styles-preset-10y4s5p:not(.rich-text-wrapper), .framer-OU0gg .framer-styles-preset-10y4s5p.rich-text-wrapper p { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-size: 22px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 180%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-2507b644-ca70-48b4-8a80-9e3124a5c985, #fafafa); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1439px) and (min-width: 810px) { .framer-OU0gg .framer-styles-preset-10y4s5p:not(.rich-text-wrapper), .framer-OU0gg .framer-styles-preset-10y4s5p.rich-text-wrapper p { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-size: 22px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 180%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-2507b644-ca70-48b4-8a80-9e3124a5c985, #fafafa); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-OU0gg .framer-styles-preset-10y4s5p:not(.rich-text-wrapper), .framer-OU0gg .framer-styles-preset-10y4s5p.rich-text-wrapper p { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 180%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-2507b644-ca70-48b4-8a80-9e3124a5c985, #fafafa); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (Ht = `framer-OU0gg`));
  });
function Wt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  Z,
  en,
  tn = e(() => {
    (g(),
      M(),
      D(),
      n(),
      Ut(),
      (Gt = { XLVfR6uxT: { hover: !0 } }),
      (Kt = [`XLVfR6uxT`]),
      (qt = `framer-acb1U`),
      (Jt = { XLVfR6uxT: `framer-v-hefrxa` }),
      (Yt = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (Xt = ({ value: e, children: t }) => {
        let n = l(w),
          r = e ?? n.transition,
          i = p(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return u(w.Provider, { value: i, children: t });
      }),
      (Zt = S(s)),
      (Qt = ({
        height: e,
        id: t,
        link: n,
        newTab: r,
        title: i,
        titleColor: a,
        underlineColor: o,
        width: s,
        ...c
      }) => ({
        ...c,
        IQvPA4Dbx: r ?? c.IQvPA4Dbx,
        M1FWFeBTO: i ?? c.M1FWFeBTO ?? `text`,
        Mt1w8RSow:
          a ?? c.Mt1w8RSow ?? `var(--token-4724c72d-5fe6-46a9-889f-664e959c9af4, rgb(34, 34, 34))`,
        twlqxy4yq:
          o ?? c.twlqxy4yq ?? `var(--token-4724c72d-5fe6-46a9-889f-664e959c9af4, rgb(34, 34, 34))`,
        ZQHdTNpJf: n ?? c.ZQHdTNpJf,
      })),
      ($t = (e, t) => t.join(`-`) + e.layoutDependency),
      (Z = B(
        d(function (e, t) {
          let { activeLocale: n, setLocale: r } = I(),
            {
              style: a,
              className: o,
              layoutId: c,
              variant: l,
              ZQHdTNpJf: d,
              IQvPA4Dbx: f,
              M1FWFeBTO: p,
              Mt1w8RSow: h,
              twlqxy4yq: g,
              ...v
            } = Qt(e),
            {
              baseVariant: y,
              classNames: b,
              gestureVariant: ee,
              setGestureState: x,
              setVariant: C,
              variants: w,
            } = R({
              cycleOrder: Kt,
              defaultVariant: `XLVfR6uxT`,
              enabledGestures: Gt,
              variant: l,
              variantClassNames: Jt,
            }),
            T = $t(e, w),
            D = i(null),
            O = _(),
            A = [Ht];
          return (
            k(),
            u(E, {
              id: c ?? O,
              children: u(Zt, {
                animate: w,
                initial: !1,
                children: u(Xt, {
                  value: Yt,
                  children: u(z, {
                    href: d,
                    openInNewTab: f,
                    children: m(S.a, {
                      ...v,
                      className: `${j(qt, ...A, `framer-hefrxa`, o, b)} framer-yyjqi9`,
                      "data-framer-name": `Navigation Link`,
                      layoutDependency: T,
                      layoutId: `XLVfR6uxT`,
                      onHoverEnd: () => x({ isHovered: !1 }),
                      onHoverStart: () => x({ isHovered: !0 }),
                      onTap: () => x({ isPressed: !1 }),
                      onTapCancel: () => x({ isPressed: !1 }),
                      onTapStart: () => x({ isPressed: !0 }),
                      ref: t ?? D,
                      style: { ...a },
                      ...Wt({ "XLVfR6uxT-hover": { "data-framer-name": void 0 } }, y, ee),
                      children: [
                        u(L, {
                          __fromCanvasComponent: !0,
                          children: u(s, {
                            children: u(S.p, {
                              className: `framer-styles-preset-10y4s5p`,
                              "data-styles-preset": `FMzbsPHNh`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-Mt1w8RSow-yzJSw3SAN))`,
                              },
                              children: `text`,
                            }),
                          }),
                          className: `framer-13kp2h9`,
                          fonts: [`Inter`],
                          layoutDependency: T,
                          layoutId: `ZBUGfhVNU`,
                          style: {
                            "--extracted-r6o4lv": `var(--variable-reference-Mt1w8RSow-yzJSw3SAN)`,
                            "--variable-reference-Mt1w8RSow-yzJSw3SAN": h,
                          },
                          text: p,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        u(S.div, {
                          className: `framer-18m3ts6`,
                          "data-framer-name": `Underline`,
                          layoutDependency: T,
                          layoutId: `YCgu0nstD`,
                          style: { backgroundColor: g, opacity: 1 },
                          variants: { "XLVfR6uxT-hover": { opacity: 0 } },
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-acb1U.framer-yyjqi9, .framer-acb1U .framer-yyjqi9 { display: block; }`,
          `.framer-acb1U.framer-hefrxa { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-acb1U .framer-13kp2h9 { flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }`,
          `.framer-acb1U .framer-18m3ts6 { align-self: stretch; flex: none; height: 1px; overflow: hidden; position: relative; width: auto; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-acb1U.framer-hefrxa { gap: 0px; } .framer-acb1U.framer-hefrxa > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-acb1U.framer-hefrxa > :first-child { margin-top: 0px; } .framer-acb1U.framer-hefrxa > :last-child { margin-bottom: 0px; } }`,
          `.framer-acb1U.framer-v-hefrxa.hover .framer-18m3ts6 { align-self: unset; width: 2px; }`,
          ...Vt,
        ],
        `framer-acb1U`
      )),
      (en = Z),
      (Z.displayName = `Link`),
      (Z.defaultProps = { height: 45, width: 41 }),
      A(Z, {
        ZQHdTNpJf: { title: `Link`, type: F.Link },
        IQvPA4Dbx: { defaultValue: !1, title: `New Tab`, type: F.Boolean },
        M1FWFeBTO: { defaultValue: `text`, displayTextArea: !1, title: `Title`, type: F.String },
        Mt1w8RSow: {
          defaultValue: `var(--token-4724c72d-5fe6-46a9-889f-664e959c9af4, rgb(34, 34, 34)) /* {"name":"Main Dark 100%"} */`,
          title: `Title Color`,
          type: F.Color,
        },
        twlqxy4yq: {
          defaultValue: `var(--token-4724c72d-5fe6-46a9-889f-664e959c9af4, rgb(34, 34, 34)) /* {"name":"Main Dark 100%"} */`,
          title: `Underline Color`,
          type: F.Color,
        },
      }),
      P(
        Z,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2`,
                weight: `400`,
              },
            ],
          },
          ...ne(Bt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function nn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var rn,
  an,
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  Q,
  pn,
  mn = e(() => {
    (g(),
      M(),
      D(),
      n(),
      (rn = { i_0FuiMJo: { hover: !0 } }),
      (an = [`i_0FuiMJo`]),
      (on = `framer-HVtnO`),
      (sn = { i_0FuiMJo: `framer-v-yopo7n` }),
      (cn = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (ln = ({ value: e, children: t }) => {
        let n = l(w),
          r = e ?? n.transition,
          i = p(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return u(w.Provider, { value: i, children: t });
      }),
      (un = S(s)),
      (dn = ({
        height: e,
        id: t,
        link: n,
        newTab: r,
        title: i,
        underlineColor: a,
        width: o,
        ...s
      }) => ({
        ...s,
        IQvPA4Dbx: r ?? s.IQvPA4Dbx,
        M1FWFeBTO: i ?? s.M1FWFeBTO ?? `text`,
        twlqxy4yq:
          a ?? s.twlqxy4yq ?? `var(--token-4724c72d-5fe6-46a9-889f-664e959c9af4, rgb(34, 34, 34))`,
        ZQHdTNpJf: n ?? s.ZQHdTNpJf,
      })),
      (fn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Q = B(
        d(function (e, t) {
          let { activeLocale: n, setLocale: r } = I(),
            {
              style: a,
              className: o,
              layoutId: c,
              variant: l,
              ZQHdTNpJf: d,
              IQvPA4Dbx: f,
              M1FWFeBTO: p,
              twlqxy4yq: h,
              Mt1w8RSowyzJSw3SAN: g,
              ...v
            } = dn(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: ee,
              gestureHandlers: x,
              gestureVariant: C,
              isLoading: w,
              setGestureState: T,
              setVariant: D,
              variants: O,
            } = R({
              cycleOrder: an,
              defaultVariant: `i_0FuiMJo`,
              enabledGestures: rn,
              variant: l,
              variantClassNames: sn,
            }),
            A = fn(e, O),
            te = i(null),
            ne = _(),
            M = [];
          return (
            k(),
            u(E, {
              id: c ?? ne,
              children: u(un, {
                animate: O,
                initial: !1,
                children: u(ln, {
                  value: cn,
                  children: u(z, {
                    href: d,
                    openInNewTab: f,
                    children: m(S.a, {
                      ...v,
                      ...x,
                      className: `${j(on, ...M, `framer-yopo7n`, o, b)} framer-1xro25q`,
                      "data-framer-name": `Navigation Link`,
                      layoutDependency: A,
                      layoutId: `i_0FuiMJo`,
                      ref: t ?? te,
                      style: { ...a },
                      ...nn({ "i_0FuiMJo-hover": { "data-framer-name": void 0 } }, y, C),
                      children: [
                        u(L, {
                          __fromCanvasComponent: !0,
                          children: u(s, {
                            children: u(S.p, {
                              style: {
                                "--font-selector": `R0Y7TWFucm9wZS1yZWd1bGFy`,
                                "--framer-font-family": `"Manrope", "Manrope Placeholder", sans-serif`,
                                "--framer-font-size": `22px`,
                                "--framer-line-height": `180%`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-Mt1w8RSow-yzJSw3SAN))`,
                              },
                              children: `text`,
                            }),
                          }),
                          className: `framer-rcibh4`,
                          fonts: [`GF;Manrope-regular`],
                          layoutDependency: A,
                          layoutId: `d7e3QjC59`,
                          style: {
                            "--extracted-r6o4lv": `var(--variable-reference-Mt1w8RSow-yzJSw3SAN)`,
                            "--variable-reference-Mt1w8RSow-yzJSw3SAN": g,
                          },
                          text: p,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        u(S.div, {
                          className: `framer-zo2anz`,
                          "data-framer-name": `Underline`,
                          layoutDependency: A,
                          layoutId: `foJv6wG4i`,
                          style: { backgroundColor: h, opacity: 1 },
                          variants: { "i_0FuiMJo-hover": { opacity: 0 } },
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-HVtnO.framer-1xro25q, .framer-HVtnO .framer-1xro25q { display: block; }`,
          `.framer-HVtnO.framer-yopo7n { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-HVtnO .framer-rcibh4 { flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }`,
          `.framer-HVtnO .framer-zo2anz { align-self: stretch; flex: none; height: 1px; overflow: hidden; position: relative; width: auto; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-HVtnO.framer-yopo7n { gap: 0px; } .framer-HVtnO.framer-yopo7n > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-HVtnO.framer-yopo7n > :first-child { margin-top: 0px; } .framer-HVtnO.framer-yopo7n > :last-child { margin-bottom: 0px; } }`,
          `.framer-HVtnO.framer-v-yopo7n.hover .framer-zo2anz { align-self: unset; width: 2px; }`,
        ],
        `framer-HVtnO`
      )),
      (pn = Q),
      (Q.displayName = `Link Copy`),
      (Q.defaultProps = { height: 40.5, width: 41 }),
      A(Q, {
        ZQHdTNpJf: { title: `Link`, type: F.Link },
        IQvPA4Dbx: { defaultValue: !1, title: `New Tab`, type: F.Boolean },
        M1FWFeBTO: { defaultValue: `text`, displayTextArea: !1, title: `Title`, type: F.String },
        twlqxy4yq: {
          defaultValue: `var(--token-4724c72d-5fe6-46a9-889f-664e959c9af4, rgb(34, 34, 34)) /* {"name":"Main Dark 100%"} */`,
          title: `Underline Color`,
          type: F.Color,
        },
      }),
      P(
        Q,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Manrope`,
                source: `google`,
                style: `normal`,
                url: `https://fonts.gstatic.com/s/manrope/v15/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk79FO_A87jxeN7B.woff2`,
                weight: `400`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function hn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  $,
  kn,
  An = e(() => {
    (g(),
      M(),
      D(),
      n(),
      nt(),
      tn(),
      mn(),
      (gn = N(pn)),
      (_n = N(en)),
      (vn = N(Ge)),
      (yn = [`CmInJSU99`, `W3275YrXp`, `On8HadgxW`]),
      (bn = `framer-SKngK`),
      (xn = {
        CmInJSU99: `framer-v-1p8z7wf`,
        On8HadgxW: `framer-v-14h7sje`,
        W3275YrXp: `framer-v-cffxql`,
      }),
      (Sn = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (Cn = (e, t) => `translateX(-50%) ${t}`),
      (wn = ({ value: e, children: t }) => {
        let n = l(w),
          r = e ?? n.transition,
          i = p(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return u(w.Provider, { value: i, children: t });
      }),
      (Tn = S.create(s)),
      (En = { Desktop: `CmInJSU99`, Phone: `On8HadgxW`, Tablet: `W3275YrXp` }),
      (Dn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: En[r.variant] ?? r.variant ?? `CmInJSU99`,
      })),
      (On = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = B(
        d(function (e, t) {
          let { activeLocale: n, setLocale: r } = I(),
            { style: a, className: o, layoutId: c, variant: l, ...d } = Dn(e),
            {
              baseVariant: f,
              classNames: p,
              clearLoadingGesture: h,
              gestureHandlers: g,
              gestureVariant: v,
              isLoading: y,
              setGestureState: b,
              setVariant: ee,
              variants: x,
            } = R({
              cycleOrder: yn,
              defaultVariant: `CmInJSU99`,
              variant: l,
              variantClassNames: xn,
            }),
            C = On(e, x),
            w = i(null),
            T = () => f !== `On8HadgxW`,
            D = _(),
            O = [],
            A = k();
          return u(E, {
            id: c ?? D,
            children: u(Tn, {
              animate: x,
              initial: !1,
              children: u(wn, {
                value: Sn,
                children: m(S.footer, {
                  ...d,
                  ...g,
                  className: j(bn, ...O, `framer-1p8z7wf`, o, p),
                  "data-framer-name": `Desktop`,
                  layoutDependency: C,
                  layoutId: `CmInJSU99`,
                  ref: t ?? w,
                  style: { backgroundColor: `rgb(97, 189, 255)`, ...a },
                  ...hn(
                    {
                      On8HadgxW: { "data-framer-name": `Phone` },
                      W3275YrXp: { "data-framer-name": `Tablet` },
                    },
                    f,
                    v
                  ),
                  children: [
                    m(S.div, {
                      className: `framer-1jrzigw`,
                      "data-framer-name": `Section`,
                      layoutDependency: C,
                      layoutId: `nNLme7r4X`,
                      children: [
                        u(S.div, {
                          className: `framer-1bytho9`,
                          "data-framer-name": `Section Name`,
                          layoutDependency: C,
                          layoutId: `fdvfxbMRU`,
                          children: u(L, {
                            __fromCanvasComponent: !0,
                            children: u(s, {
                              children: u(S.h2, {
                                style: {
                                  "--font-selector": `R0Y7TWFucm9wZS01MDA=`,
                                  "--framer-font-family": `"Manrope", "Manrope Placeholder", sans-serif`,
                                  "--framer-font-weight": `500`,
                                  "--framer-letter-spacing": `0.05em`,
                                  "--framer-line-height": `120%`,
                                  "--framer-text-color": `var(--extracted-1of0zx5, var(--token-2e55662e-d6bf-4329-b432-3c735e37723b, rgb(17, 17, 17)))`,
                                },
                                children: `CONTACT`,
                              }),
                            }),
                            className: `framer-1ff03kr`,
                            fonts: [`GF;Manrope-500`],
                            layoutDependency: C,
                            layoutId: `XJHpsPfrB`,
                            style: {
                              "--extracted-1of0zx5": `var(--token-2e55662e-d6bf-4329-b432-3c735e37723b, rgb(17, 17, 17))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                        m(S.div, {
                          className: `framer-12pxs39`,
                          "data-framer-name": `Info`,
                          layoutDependency: C,
                          layoutId: `QkMSPX7eH`,
                          children: [
                            u(S.div, {
                              className: `framer-5s3a7p`,
                              "data-framer-name": `Address`,
                              layoutDependency: C,
                              layoutId: `bEt5thBSl`,
                              children: u(L, {
                                __fromCanvasComponent: !0,
                                children: u(s, {
                                  children: u(S.p, {
                                    style: {
                                      "--font-selector": `R0Y7TWFucm9wZS1yZWd1bGFy`,
                                      "--framer-font-family": `"Manrope", "Manrope Placeholder", sans-serif`,
                                      "--framer-font-size": `22px`,
                                      "--framer-line-height": `180%`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2e55662e-d6bf-4329-b432-3c735e37723b, rgb(17, 17, 17)))`,
                                    },
                                    children: `Ground Floor, 96, BSK III`,
                                  }),
                                }),
                                className: `framer-fecyio`,
                                fonts: [`GF;Manrope-regular`],
                                layoutDependency: C,
                                layoutId: `XJtFkUfne`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-2e55662e-d6bf-4329-b432-3c735e37723b, rgb(17, 17, 17))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            m(S.div, {
                              className: `framer-5sz9ee`,
                              "data-framer-name": `Contact`,
                              layoutDependency: C,
                              layoutId: `wRRIek2bv`,
                              children: [
                                u(V, {
                                  height: 40,
                                  y: (A?.y || 0) + 80 + 0 + 0 + 43.2 + 50 + 0 + 0 + 0,
                                  ...hn(
                                    {
                                      On8HadgxW: {
                                        y: (A?.y || 0) + 80 + 0 + 0 + 43.2 + 25 + 69.6 + 0 + 0,
                                      },
                                      W3275YrXp: {
                                        y: (A?.y || 0) + 80 + 0 + 0 + 43.2 + 25 + 5 + 0 + 0,
                                      },
                                    },
                                    f,
                                    v
                                  ),
                                  children: u(S.div, {
                                    className: `framer-196qr0y-container`,
                                    layoutDependency: C,
                                    layoutId: `WWhZOQbIt-container`,
                                    children: u(pn, {
                                      height: `100%`,
                                      id: `WWhZOQbIt`,
                                      IQvPA4Dbx: !0,
                                      layoutId: `WWhZOQbIt`,
                                      M1FWFeBTO: `create@cocreate.ventures`,
                                      twlqxy4yq: `var(--token-2e55662e-d6bf-4329-b432-3c735e37723b, rgb(17, 17, 17))`,
                                      width: `100%`,
                                      ZQHdTNpJf: `mailto:create@cocreate.ventures`,
                                    }),
                                  }),
                                }),
                                u(V, {
                                  height: 45,
                                  y: (A?.y || 0) + 80 + 0 + 0 + 43.2 + 50 + 0 + 0 + 56,
                                  ...hn(
                                    {
                                      On8HadgxW: {
                                        y: (A?.y || 0) + 80 + 0 + 0 + 43.2 + 25 + 69.6 + 0 + 42,
                                      },
                                      W3275YrXp: {
                                        y: (A?.y || 0) + 80 + 0 + 0 + 43.2 + 25 + 5 + 0 + 42,
                                      },
                                    },
                                    f,
                                    v
                                  ),
                                  children: u(S.div, {
                                    className: `framer-1hbpbid-container`,
                                    layoutDependency: C,
                                    layoutId: `kxb0eKZXj-container`,
                                    children: u(en, {
                                      height: `100%`,
                                      id: `kxb0eKZXj`,
                                      IQvPA4Dbx: !0,
                                      layoutId: `kxb0eKZXj`,
                                      M1FWFeBTO: `analyst@cocreate.ventures`,
                                      Mt1w8RSow: `var(--token-2e55662e-d6bf-4329-b432-3c735e37723b, rgb(17, 17, 17))`,
                                      twlqxy4yq: `var(--token-2e55662e-d6bf-4329-b432-3c735e37723b, rgb(17, 17, 17))`,
                                      width: `100%`,
                                      ZQHdTNpJf: `mailto:analyst@cocreate.ventures`,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            m(S.div, {
                              className: `framer-uc4641`,
                              "data-framer-name": `Social`,
                              layoutDependency: C,
                              layoutId: `nEulyJhF4`,
                              children: [
                                u(V, {
                                  height: 45,
                                  y: (A?.y || 0) + 80 + 0 + 0 + 43.2 + 50 + 56 + 0,
                                  ...hn(
                                    {
                                      On8HadgxW: {
                                        y: (A?.y || 0) + 80 + 0 + 0 + 43.2 + 25 + 186.6 + 0 + 0,
                                      },
                                      W3275YrXp: {
                                        y: (A?.y || 0) + 80 + 0 + 0 + 43.2 + 25 + 0 + 0 + 0,
                                      },
                                    },
                                    f,
                                    v
                                  ),
                                  children: u(S.div, {
                                    className: `framer-iu5d1j-container`,
                                    layoutDependency: C,
                                    layoutId: `t01WSL9r1-container`,
                                    children: u(en, {
                                      height: `100%`,
                                      id: `t01WSL9r1`,
                                      IQvPA4Dbx: !0,
                                      layoutId: `t01WSL9r1`,
                                      M1FWFeBTO: `instagram`,
                                      Mt1w8RSow: `var(--token-2e55662e-d6bf-4329-b432-3c735e37723b, rgb(17, 17, 17))`,
                                      twlqxy4yq: `var(--token-2e55662e-d6bf-4329-b432-3c735e37723b, rgb(17, 17, 17))`,
                                      width: `100%`,
                                      ZQHdTNpJf: `https://www.instagram.com`,
                                    }),
                                  }),
                                }),
                                u(V, {
                                  height: 45,
                                  y: (A?.y || 0) + 80 + 0 + 0 + 43.2 + 50 + 56 + 0,
                                  ...hn(
                                    {
                                      On8HadgxW: {
                                        y: (A?.y || 0) + 80 + 0 + 0 + 43.2 + 25 + 186.6 + 0 + 47,
                                      },
                                      W3275YrXp: {
                                        y: (A?.y || 0) + 80 + 0 + 0 + 43.2 + 25 + 0 + 0 + 47,
                                      },
                                    },
                                    f,
                                    v
                                  ),
                                  children: u(S.div, {
                                    className: `framer-1cw7gk9-container`,
                                    layoutDependency: C,
                                    layoutId: `o_ptB_oop-container`,
                                    children: u(en, {
                                      height: `100%`,
                                      id: `o_ptB_oop`,
                                      IQvPA4Dbx: !0,
                                      layoutId: `o_ptB_oop`,
                                      M1FWFeBTO: `linkedin`,
                                      Mt1w8RSow: `var(--token-2e55662e-d6bf-4329-b432-3c735e37723b, rgb(17, 17, 17))`,
                                      twlqxy4yq: `var(--token-2e55662e-d6bf-4329-b432-3c735e37723b, rgb(17, 17, 17))`,
                                      width: `100%`,
                                      ZQHdTNpJf: `https://www.linkedin.com`,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        u(S.div, {
                          className: `framer-hvy1so`,
                          "data-framer-name": `Info`,
                          layoutDependency: C,
                          layoutId: `eEvJe0nJ9`,
                          children: u(L, {
                            __fromCanvasComponent: !0,
                            children: u(s, {
                              children: u(S.p, {
                                style: {
                                  "--font-selector": `R0Y7TWFucm9wZS01MDA=`,
                                  "--framer-font-family": `"Manrope", "Manrope Placeholder", sans-serif`,
                                  "--framer-font-weight": `500`,
                                  "--framer-letter-spacing": `0.04em`,
                                  "--framer-line-height": `180%`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2e55662e-d6bf-4329-b432-3c735e37723b, rgb(17, 17, 17)))`,
                                },
                                children: `© 2024 — CoCreate All Rights Reserved`,
                              }),
                            }),
                            className: `framer-ie6az2`,
                            fonts: [`GF;Manrope-500`],
                            layoutDependency: C,
                            layoutId: `j5IZCn0fr`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-2e55662e-d6bf-4329-b432-3c735e37723b, rgb(17, 17, 17))`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                      ],
                    }),
                    T() &&
                      u(S.div, {
                        className: `framer-1s67on`,
                        layoutDependency: C,
                        layoutId: `yDRxWUsBF`,
                        transformTemplate: Cn,
                        children: u(V, {
                          children: u(S.div, {
                            className: `framer-1ikld8b-container`,
                            layoutDependency: C,
                            layoutId: `csF44IW18-container`,
                            children: u(Ge, {
                              alignment: `center`,
                              direction: `left`,
                              fadeOptions: {
                                fadeAlpha: 0,
                                fadeContent: !1,
                                fadeInset: 0,
                                fadeWidth: 25,
                                overflow: !1,
                              },
                              gap: 10,
                              height: `100%`,
                              hoverFactor: 1,
                              id: `csF44IW18`,
                              layoutId: `csF44IW18`,
                              padding: 10,
                              paddingBottom: 10,
                              paddingLeft: 10,
                              paddingPerSide: !1,
                              paddingRight: 10,
                              paddingTop: 10,
                              sizingOptions: { heightType: !0, widthType: !0 },
                              slots: [
                                u(S.div, {
                                  className: `framer-lg2r9y`,
                                  "data-framer-name": `Scrolling Text`,
                                  layoutDependency: C,
                                  layoutId: `V8jGgnbPd`,
                                  children: u(L, {
                                    __fromCanvasComponent: !0,
                                    children: u(s, {
                                      children: u(S.p, {
                                        style: {
                                          "--font-selector": `R0Y7TWFucm9wZS03MDA=`,
                                          "--framer-font-family": `"Manrope", "Manrope Placeholder", sans-serif`,
                                          "--framer-font-size": `480px`,
                                          "--framer-font-weight": `700`,
                                          "--framer-letter-spacing": `-0.04em`,
                                          "--framer-line-height": `140%`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2e55662e-d6bf-4329-b432-3c735e37723b, rgb(17, 17, 17)))`,
                                        },
                                        children: `GET  IN  TOUCH  `,
                                      }),
                                    }),
                                    className: `framer-11lyxrn`,
                                    fonts: [`GF;Manrope-700`],
                                    layoutDependency: C,
                                    layoutId: `H3atcXFHb`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-2e55662e-d6bf-4329-b432-3c735e37723b, rgb(17, 17, 17))`,
                                      "--framer-paragraph-spacing": `0px`,
                                    },
                                    verticalAlignment: `center`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                              speed: 100,
                              style: { height: `100%`, width: `100%` },
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-SKngK.framer-1egsksq, .framer-SKngK .framer-1egsksq { display: block; }`,
          `.framer-SKngK.framer-1p8z7wf { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 80px 0px 330px 0px; position: relative; width: 1440px; }`,
          `.framer-SKngK .framer-1jrzigw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1208px; }`,
          `.framer-SKngK .framer-1bytho9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-SKngK .framer-1ff03kr { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-SKngK .framer-12pxs39, .framer-SKngK .framer-hvy1so { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 50px 0px 0px 0px; position: relative; width: 100%; }`,
          `.framer-SKngK .framer-5s3a7p, .framer-SKngK .framer-5sz9ee { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-SKngK .framer-fecyio { flex: none; height: auto; max-width: 200px; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; }`,
          `.framer-SKngK .framer-196qr0y-container, .framer-SKngK .framer-1hbpbid-container, .framer-SKngK .framer-iu5d1j-container, .framer-SKngK .framer-1cw7gk9-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-SKngK .framer-uc4641 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-SKngK .framer-ie6az2 { flex: none; height: auto; max-width: 600px; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; }`,
          `.framer-SKngK .framer-1s67on { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; left: 50%; overflow: hidden; padding: 0px; position: absolute; top: 457px; width: 100%; z-index: 1; }`,
          `.framer-SKngK .framer-1ikld8b-container { flex: none; height: 450px; position: relative; width: 100%; }`,
          `.framer-SKngK .framer-lg2r9y { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-SKngK .framer-11lyxrn { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-SKngK.framer-1p8z7wf, .framer-SKngK .framer-1jrzigw, .framer-SKngK .framer-1bytho9, .framer-SKngK .framer-12pxs39, .framer-SKngK .framer-5s3a7p, .framer-SKngK .framer-5sz9ee, .framer-SKngK .framer-uc4641, .framer-SKngK .framer-hvy1so, .framer-SKngK .framer-1s67on, .framer-SKngK .framer-lg2r9y { gap: 0px; } .framer-SKngK.framer-1p8z7wf > *, .framer-SKngK .framer-lg2r9y > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-SKngK.framer-1p8z7wf > :first-child, .framer-SKngK .framer-1jrzigw > :first-child, .framer-SKngK .framer-5s3a7p > :first-child, .framer-SKngK .framer-5sz9ee > :first-child, .framer-SKngK .framer-lg2r9y > :first-child { margin-top: 0px; } .framer-SKngK.framer-1p8z7wf > :last-child, .framer-SKngK .framer-1jrzigw > :last-child, .framer-SKngK .framer-5s3a7p > :last-child, .framer-SKngK .framer-5sz9ee > :last-child, .framer-SKngK .framer-lg2r9y > :last-child { margin-bottom: 0px; } .framer-SKngK .framer-1jrzigw > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-SKngK .framer-1bytho9 > * { margin: 0px; margin-left: calc(24px / 2); margin-right: calc(24px / 2); } .framer-SKngK .framer-1bytho9 > :first-child, .framer-SKngK .framer-12pxs39 > :first-child, .framer-SKngK .framer-uc4641 > :first-child, .framer-SKngK .framer-hvy1so > :first-child, .framer-SKngK .framer-1s67on > :first-child { margin-left: 0px; } .framer-SKngK .framer-1bytho9 > :last-child, .framer-SKngK .framer-12pxs39 > :last-child, .framer-SKngK .framer-uc4641 > :last-child, .framer-SKngK .framer-hvy1so > :last-child, .framer-SKngK .framer-1s67on > :last-child { margin-right: 0px; } .framer-SKngK .framer-12pxs39 > *, .framer-SKngK .framer-hvy1so > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-SKngK .framer-5s3a7p > *, .framer-SKngK .framer-5sz9ee > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-SKngK .framer-uc4641 > * { margin: 0px; margin-left: calc(32px / 2); margin-right: calc(32px / 2); } .framer-SKngK .framer-1s67on > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }`,
          `.framer-SKngK.framer-v-cffxql.framer-1p8z7wf { padding: 80px 0px 270px 0px; width: 880px; }`,
          `.framer-SKngK.framer-v-cffxql .framer-1jrzigw { width: 730px; }`,
          `.framer-SKngK.framer-v-cffxql .framer-12pxs39 { padding: 25px 0px 0px 0px; }`,
          `.framer-SKngK.framer-v-cffxql .framer-5sz9ee { gap: 2px; }`,
          `.framer-SKngK.framer-v-cffxql .framer-uc4641 { flex-direction: column; gap: 2px; max-width: 150px; }`,
          `.framer-SKngK.framer-v-cffxql .framer-1s67on { top: 415px; }`,
          `.framer-SKngK.framer-v-cffxql .framer-1ikld8b-container { height: 380px; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-SKngK.framer-v-cffxql .framer-5sz9ee, .framer-SKngK.framer-v-cffxql .framer-uc4641 { gap: 0px; } .framer-SKngK.framer-v-cffxql .framer-5sz9ee > *, .framer-SKngK.framer-v-cffxql .framer-uc4641 > * { margin: 0px; margin-bottom: calc(2px / 2); margin-top: calc(2px / 2); } .framer-SKngK.framer-v-cffxql .framer-5sz9ee > :first-child, .framer-SKngK.framer-v-cffxql .framer-uc4641 > :first-child { margin-top: 0px; } .framer-SKngK.framer-v-cffxql .framer-5sz9ee > :last-child, .framer-SKngK.framer-v-cffxql .framer-uc4641 > :last-child { margin-bottom: 0px; } }`,
          `.framer-SKngK.framer-v-14h7sje.framer-1p8z7wf { padding: 80px 0px 40px 0px; width: 390px; }`,
          `.framer-SKngK.framer-v-14h7sje .framer-1jrzigw { width: 90%; }`,
          `.framer-SKngK.framer-v-14h7sje .framer-12pxs39 { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 30px; padding: 25px 0px 0px 0px; }`,
          `.framer-SKngK.framer-v-14h7sje .framer-5s3a7p { flex: none; width: 100%; }`,
          `.framer-SKngK.framer-v-14h7sje .framer-5sz9ee { flex: none; gap: 2px; width: 100%; }`,
          `.framer-SKngK.framer-v-14h7sje .framer-uc4641 { flex: none; flex-direction: column; gap: 2px; max-width: 150px; width: 100%; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-SKngK.framer-v-14h7sje .framer-12pxs39, .framer-SKngK.framer-v-14h7sje .framer-5sz9ee, .framer-SKngK.framer-v-14h7sje .framer-uc4641 { gap: 0px; } .framer-SKngK.framer-v-14h7sje .framer-12pxs39 > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-SKngK.framer-v-14h7sje .framer-12pxs39 > :first-child, .framer-SKngK.framer-v-14h7sje .framer-5sz9ee > :first-child, .framer-SKngK.framer-v-14h7sje .framer-uc4641 > :first-child { margin-top: 0px; } .framer-SKngK.framer-v-14h7sje .framer-12pxs39 > :last-child, .framer-SKngK.framer-v-14h7sje .framer-5sz9ee > :last-child, .framer-SKngK.framer-v-14h7sje .framer-uc4641 > :last-child { margin-bottom: 0px; } .framer-SKngK.framer-v-14h7sje .framer-5sz9ee > *, .framer-SKngK.framer-v-14h7sje .framer-uc4641 > * { margin: 0px; margin-bottom: calc(2px / 2); margin-top: calc(2px / 2); } }`,
        ],
        `framer-SKngK`
      )),
      (kn = $),
      ($.displayName = `Footer`),
      ($.defaultProps = { height: 703, width: 1440 }),
      A($, {
        variant: {
          options: [`CmInJSU99`, `W3275YrXp`, `On8HadgxW`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: F.Enum,
        },
      }),
      P(
        $,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Manrope`,
                source: `google`,
                style: `normal`,
                url: `https://fonts.gstatic.com/s/manrope/v15/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk7PFO_A87jxeN7B.woff2`,
                weight: `500`,
              },
              {
                family: `Manrope`,
                source: `google`,
                style: `normal`,
                url: `https://fonts.gstatic.com/s/manrope/v15/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk79FO_A87jxeN7B.woff2`,
                weight: `400`,
              },
              {
                family: `Manrope`,
                source: `google`,
                style: `normal`,
                url: `https://fonts.gstatic.com/s/manrope/v15/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4aE-_A87jxeN7B.woff2`,
                weight: `700`,
              },
            ],
          },
          ...gn,
          ..._n,
          ...vn,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function jn(e, t) {
  return {
    description: `A fund focused on deep tech innovation out of campus`,
    favicon: `https://framerusercontent.com/assets/7pJbd0nGpZGalmv0as3zWX6Amc.png`,
    robots: `max-image-preview:large`,
    title: `Aarambh Fund`,
  };
}
var Mn = e(() => {});
export { Rt as a, nt as c, An as i, jn as n, zt as o, kn as r, Ge as s, Mn as t };
//# sourceMappingURL=shared-lib.QmKkx_z7.mjs.map
