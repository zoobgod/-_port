import { jsx, jsxs, Fragment as Fragment$1 } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable, createCookieSessionStorage, json } from "@remix-run/node";
import { RemixServer, Link, useLocation, useNavigation, useLoaderData, useFetcher, Meta, Links, Outlet, ScrollRestoration, Scripts, useRouteError } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createContext, useContext, forwardRef, useRef, useEffect, useState, memo, Fragment, useCallback, useId, lazy, Suspense } from "react";
import { useReducedMotion, AnimatePresence, usePresence, useSpring } from "framer-motion";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isBotRequest(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  if (!userAgent) {
    return false;
  }
  if ("isbot" in isbotModule && typeof isbotModule.isbot === "function") {
    return isbotModule.isbot(userAgent);
  }
  if ("default" in isbotModule && typeof isbotModule.default === "function") {
    return isbotModule.default(userAgent);
  }
  return false;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = true;
          const body2 = new PassThrough();
          const stream = createReadableStreamFromReadable(body2);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body2);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = true;
          const body2 = new PassThrough();
          const stream = createReadableStreamFromReadable(body2);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body2);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const GothamBoldItalic = "/assets/gotham-bold-italic-C_msAlmW.woff2";
const GothamBold = "/assets/gotham-bold-D1kvQ7KV.woff2";
const GothamBookItalic = "/assets/gotham-book-italic-Bm2IEtSK.woff2";
const GothamBook = "/assets/gotham-book-Bnaws0Ef.woff2";
const GothamMediumItalic = "/assets/gotham-medium-italic-Dok430ou.woff2";
const GothamMedium = "/assets/gotham-medium-0VT3RO8I.woff2";
const IPAGothic = "/assets/ipa-gothic-DimHCOud.woff2";
const media = {
  desktop: 2080,
  laptop: 1680,
  tablet: 1040,
  mobile: 696,
  mobileS: 400
};
const numToPx = (num) => `${num}px`;
const pxToRem = (px) => `${px / 16}rem`;
const msToNum = (msString) => Number(msString.replace("ms", ""));
const numToMs = (num) => `${num}ms`;
function cssProps(props, style = {}) {
  let result = {};
  const keys = Object.keys(props);
  for (const key of keys) {
    let value2 = props[key];
    if (typeof value2 === "number" && key === "delay") {
      value2 = numToMs(value2);
    }
    if (typeof value2 === "number" && key !== "opacity") {
      value2 = numToPx(value2);
    }
    if (typeof value2 === "number" && key === "opacity") {
      value2 = `${value2 * 100}%`;
    }
    result[`--${key}`] = value2;
  }
  return { ...result, ...style };
}
function classes(...classes2) {
  return classes2.filter(Boolean).join(" ");
}
const baseTokens = {
  black: "oklch(0% 0 0)",
  white: "oklch(100% 0 0)",
  bezierFastoutSlowin: "cubic-bezier(0.4, 0.0, 0.2, 1)",
  durationXS: "200ms",
  durationS: "300ms",
  durationM: "400ms",
  durationL: "600ms",
  durationXL: "800ms",
  systemFontStack: "system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",
  fontStack: `Gotham, var(--systemFontStack)`,
  monoFontStack: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  japaneseFontStack: "IPA Gothic, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, Hiragino Sans, Osaka, メイリオ, Meiryo, Segoe UI, sans-serif",
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  fontSizeH0: pxToRem(140),
  fontSizeH1: pxToRem(100),
  fontSizeH2: pxToRem(58),
  fontSizeH3: pxToRem(38),
  fontSizeH4: pxToRem(28),
  fontSizeH5: pxToRem(24),
  fontSizeBodyXL: pxToRem(22),
  fontSizeBodyL: pxToRem(20),
  fontSizeBodyM: pxToRem(18),
  fontSizeBodyS: pxToRem(16),
  fontSizeBodyXS: pxToRem(14),
  lineHeightTitle: "1.1",
  lineHeightBody: "1.6",
  maxWidthS: "540px",
  maxWidthM: "720px",
  maxWidthL: "1096px",
  maxWidthXL: "1680px",
  spaceOuter: "64px",
  spaceXS: "4px",
  spaceS: "8px",
  spaceM: "16px",
  spaceL: "24px",
  spaceXL: "32px",
  space2XL: "48px",
  space3XL: "64px",
  space4XL: "96px",
  space5XL: "128px",
  zIndex0: 0,
  zIndex1: 4,
  zIndex2: 8,
  zIndex3: 16,
  zIndex4: 32,
  zIndex5: 64
};
const tokensDesktop = {
  fontSizeH0: pxToRem(120),
  fontSizeH1: pxToRem(80)
};
const tokensLaptop = {
  maxWidthS: "480px",
  maxWidthM: "640px",
  maxWidthL: "1000px",
  maxWidthXL: "1100px",
  spaceOuter: "48px",
  fontSizeH0: pxToRem(100),
  fontSizeH1: pxToRem(70),
  fontSizeH2: pxToRem(50),
  fontSizeH3: pxToRem(36),
  fontSizeH4: pxToRem(26),
  fontSizeH5: pxToRem(22)
};
const tokensTablet = {
  fontSizeH0: pxToRem(80),
  fontSizeH1: pxToRem(60),
  fontSizeH2: pxToRem(48),
  fontSizeH3: pxToRem(32),
  fontSizeH4: pxToRem(24),
  fontSizeH5: pxToRem(20)
};
const tokensMobile = {
  spaceOuter: "24px",
  fontSizeH0: pxToRem(56),
  fontSizeH1: pxToRem(40),
  fontSizeH2: pxToRem(34),
  fontSizeH3: pxToRem(28),
  fontSizeH4: pxToRem(22),
  fontSizeH5: pxToRem(18),
  fontSizeBodyL: pxToRem(17),
  fontSizeBodyM: pxToRem(16),
  fontSizeBodyS: pxToRem(14)
};
const tokensMobileSmall = {
  spaceOuter: "16px",
  fontSizeH0: pxToRem(42),
  fontSizeH1: pxToRem(38),
  fontSizeH2: pxToRem(28),
  fontSizeH3: pxToRem(24),
  fontSizeH4: pxToRem(20)
};
const dark = {
  background: "oklch(17.76% 0 0)",
  backgroundLight: "oklch(21.78% 0 0)",
  primary: "var(--white)",
  accent: "var(--white)",
  error: "oklch(65.91% 0.249 13.76)",
  text: "var(--white)",
  textTitle: "var(--text)",
  textBody: "color-mix(in lab, var(--text) 80%, transparent)",
  textLight: "color-mix(in lab, var(--text) 60%, transparent)"
};
const light = {
  background: "oklch(96.12% 0 0)",
  backgroundLight: "var(--white)",
  primary: "var(--black)",
  accent: "var(--black)",
  error: "oklch(63.17% 0.259 25.41)",
  text: "var(--black)",
  textTitle: "color-mix(in lab, var(--text) 90%, transparent)",
  textBody: "color-mix(in lab, var(--text) 75%, transparent)",
  textLight: "color-mix(in lab, var(--text) 55%, transparent)"
};
const tokens = {
  base: baseTokens,
  desktop: tokensDesktop,
  laptop: tokensLaptop,
  tablet: tokensTablet,
  mobile: tokensMobile,
  mobileS: tokensMobileSmall
};
const themes = { dark, light };
const ThemeContext = createContext({});
const ThemeProvider = ({
  theme = "dark",
  children,
  className,
  as: Component = "div",
  toggleTheme,
  ...rest
}) => {
  const parentTheme = useTheme();
  const isRootProvider = !parentTheme.theme;
  return /* @__PURE__ */ jsxs(
    ThemeContext.Provider,
    {
      value: {
        theme,
        toggleTheme: toggleTheme || parentTheme.toggleTheme
      },
      children: [
        isRootProvider && children,
        !isRootProvider && /* @__PURE__ */ jsx(Component, { className: classes(className), "data-theme": theme, ...rest, children })
      ]
    }
  );
};
function useTheme() {
  const currentTheme = useContext(ThemeContext);
  return currentTheme;
}
function squish(styles2) {
  return styles2.replace(/\s\s+/g, " ");
}
function createThemeProperties(theme) {
  return squish(
    Object.keys(theme).map((key) => `--${key}: ${theme[key]};`).join("\n\n")
  );
}
function createMediaTokenProperties() {
  return squish(
    Object.keys(media).map((key) => {
      return `
        @media (max-width: ${media[key]}px) {
          :root {
            ${createThemeProperties(tokens[key])}
          }
        }
      `;
    }).join("\n")
  );
}
const layerStyles = squish(`
  @layer theme, base, components, layout;
`);
const tokenStyles = squish(`
  :root {
    ${createThemeProperties(tokens.base)}
  }

  ${createMediaTokenProperties()}

  [data-theme='dark'] {
    ${createThemeProperties(themes.dark)}
  }

  [data-theme='light'] {
    ${createThemeProperties(themes.light)}
  }
`);
const fontStyles = squish(`
  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${GothamBook}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${GothamBookItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${GothamMedium}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${GothamMediumItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${GothamBold}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${GothamBoldItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: IPA Gothic;
    font-weight: 400;
    src: url(${IPAGothic}) format('woff2');
    font-display: swap;
    font-style: normal;
  }
`);
const themeStyles = squish(`
  ${layerStyles}

  @layer theme {
    ${tokenStyles}
    ${fontStyles}
  }
`);
const notFoundPoster = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wgARCABAAEADAREAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAABAYDBQABBwL/xAAYAQADAQEAAAAAAAAAAAAAAAABAgMABP/aAAwDAQACEAMQAAAA5V08yLHoDDYNgxJHRa8hFEklbmS9AoObTssxD6/KwqJ6VRg4APobRBbZj3O5QslX1GlT21TtokddVIHubc7rotmtg0vhhlBMtofQzWMe2qits4MULqvSbGlenLMibq3QhVZWsVXV6BHLM8lcqXKySlWe0besFLm6rgBirP8A/8QAJBAAAgICAgMBAAIDAAAAAAAAAgMAAQQFERIGITETFDIgIiP/2gAIAQEAAT8A2eWY49zPdbGl/hgl1dVzUt74dVEIqmWVzea2qximxTa3lUpdyllF4pFXyIxDptepoEF+NVcDD7B6mev+UsqqbTRf9ruVqxD7UHXK5jEgu+BmMpY8EU1D080NXUwMcWBVjD3YY43XaZO9pz+OZ1F+P2D7HA0LuIxWPLmbUixw4mHtmoZzRTxzzCl8Uwo/OY0vsE2du08c2Fc0DLmXjJbj9g4mH+aFl2nkmTTWlQwoDSD5cwfGGtP2MzPHLQn+sDVuSfYJh5TxDofMHHbkDdDN1rWJu7uovCY0vVQNI66/rMLZoAuPU2mWgkWVwtoi2WHqIpLq7DxMNqkD7nkmekyuvU0P4tZ7qGKgD0NTHYX6fZsmM/iX7v5GtMX37v7NLmECq7XLyLeF0E3K2U/3PGkXXu5lF/pP/8QAGxEAAwEBAAMAAAAAAAAAAAAAAAECERASICH/2gAIAQIBAT8AbG/WRiejXMFJhKKrCZQ5MMF2xs0Q0Io0pb2R8rrrBUJmjrDdMPEuBJokS0uCVghDKXIof0tYIR//xAAbEQADAQEBAQEAAAAAAAAAAAAAAQIREhAgMf/aAAgBAwEBPwCCV8MsRCwXumlkoVCo00Q0OWRJEHJhhnnJKwz5Xzpp0I06Js0ejbQrIKYxEswuNOcI/CvP/9k=";
const notFoundVideo = "/assets/notfound-Cfa33_DP.mp4";
const flatlinePoster = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAYAAABB7B6eAAAACXBIWXMAAAsRAAALEQF/ZF+RAAACnElEQVQ4y1VU4ZrbIAyzwc3dbft2P/f+T7lrAniS7dBb+xHaAJYly+ifX58uoqLa8GzSMHc1jC69dTGM1rCigm1Llk+ZPuScQy6Ohf9ribsLv/fH62mP3jHFafwnkMYCp46HdZWjmzwsQQCBoENsXPI1sB/jEoImyB0+fiGefRwHssLBJTFL8olgwEbwJj8Ok7eHBRiPngD4e/ZKJkdbZLd2eGK5gsHv93cZeH/NJWM66OYiZekYhzUE7wFymMWhc1hIyoTcybzJ1FkAmT3Z8L99fvyM4E+gfF0Th7ER2ZBBQ4YEMowHmHBEwngM7LnsiKR8aQAgpGhBMDhrEwye2NTPiaULS0PGGEWc2ZFR0ues+ZZ2CCNYe8jqGmbQqJ1vgGtOsTd7IBKlaXghyIiMMyipUjJuvAq0N0gTMiIY5IHHxAAkkKzhHJkTiEXveGe3rfSWJAb1zVqQJgGeI8kzU+rudEW5hsUOcLquSSTcshxi9DKznjNt1mqjxCEPoAGAwaJrnBXuWiVd2sVzoT6tMmbt7LzYNF7Fosak5tkWZbpVTBZkXBHo1VgsLIcU41U2Z3KUy87BjgTAymylFhSPSIzSpXXKetmWEnOOVlAB6tkrlI1MjPoy+6Tsm16MVDjrUiCRqd41k2g+BsvMpZyke7agXsG1Cnb3gNyWjH7IgCKvfYa+4DxVy3XZyemkPGteskTStdj/c5RWwBepuKe2a5g9xqq5uvlmay+becjQ6pJj0/Z2A2z77PtSv7Gk5lOzZxIsS89vApQYmaWyZ+JwAtUNy4Pq+8ZULdvyhq2iuGq1RlqYgBtA9AaSLUn7JpVX+qt0avLS+XaTfjeus5sna5DRwt7qL/3y3t61kapFywO7e7PPfFv4/k3zcPwDeTTjchlA+6QAAAAASUVORK5CYII=";
const flatlineVideo = "/assets/flatline-DaiGY3H4.mp4";
const icon$2 = "_icon_1tdl1_2";
const styles$l = {
  icon: icon$2
};
const sprites = "/assets/icons-DGlJMztt.svg";
const Icon = forwardRef(({ icon: icon2, className, size, ...rest }, ref) => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      "aria-hidden": true,
      ref,
      className: classes(styles$l.icon, className),
      width: size || 24,
      height: size || 24,
      ...rest,
      children: /* @__PURE__ */ jsx("use", { href: `${sprites}#${icon2}` })
    }
  );
});
const text$5 = "_text_13dm1_2";
const styles$k = {
  text: text$5
};
const Text = ({
  children,
  size = "m",
  as: Component = "span",
  align = "auto",
  weight = "auto",
  secondary,
  className,
  ...rest
}) => {
  return /* @__PURE__ */ jsx(
    Component,
    {
      className: classes(styles$k.text, className),
      "data-align": align,
      "data-size": size,
      "data-weight": weight,
      "data-secondary": secondary,
      ...rest,
      children
    }
  );
};
const loader$5 = "_loader_1o1zt_2";
const text$4 = "_text_1o1zt_17";
const span = "_span_1o1zt_43";
const loaderSpan = "_loaderSpan_1o1zt_1";
const styles$j = {
  loader: loader$5,
  text: text$4,
  span,
  loaderSpan
};
const Loader = forwardRef(
  ({ className, style, width = 32, height = 4, text: text2 = "Loading...", center, ...rest }, ref) => {
    const reduceMotion = useReducedMotion();
    if (reduceMotion) {
      return /* @__PURE__ */ jsx(Text, { className: classes(styles$j.text, className), weight: "medium", ...rest, children: text2 });
    }
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: classes(styles$j.loader, className),
        "data-center": center,
        style: cssProps({ width, height }, style),
        ...rest,
        children: /* @__PURE__ */ jsx("div", { className: styles$j.span })
      }
    );
  }
);
const Transition = ({ children, in: show, unmount, initial = true, ...props }) => {
  const enterTimeout = useRef();
  const exitTimeout = useRef();
  useEffect(() => {
    if (show) {
      clearTimeout(exitTimeout.current);
    } else {
      clearTimeout(enterTimeout.current);
    }
  }, [show]);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: (show || !unmount) && /* @__PURE__ */ jsx(
    TransitionContent,
    {
      enterTimeout,
      exitTimeout,
      in: show,
      initial,
      ...props,
      children
    }
  ) });
};
const TransitionContent = ({
  children,
  timeout = 0,
  enterTimeout,
  exitTimeout,
  onEnter,
  onEntered,
  onExit,
  onExited,
  initial,
  nodeRef: defaultNodeRef,
  in: show
}) => {
  const [status2, setStatus] = useState(initial ? "exited" : "entered");
  const [isPresent, safeToRemove] = usePresence();
  const [hasEntered, setHasEntered] = useState(initial ? false : true);
  const splitTimeout = typeof timeout === "object";
  const internalNodeRef = useRef(null);
  const nodeRef = defaultNodeRef || internalNodeRef;
  const visible = hasEntered && show ? isPresent : false;
  useEffect(() => {
    var _a;
    if (hasEntered || !show)
      return;
    const actualTimeout = splitTimeout ? timeout.enter : timeout;
    clearTimeout(enterTimeout.current);
    clearTimeout(exitTimeout.current);
    setHasEntered(true);
    setStatus("entering");
    onEnter == null ? void 0 : onEnter();
    (_a = nodeRef.current) == null ? void 0 : _a.offsetHeight;
    enterTimeout.current = setTimeout(() => {
      setStatus("entered");
      onEntered == null ? void 0 : onEntered();
    }, actualTimeout);
  }, [onEnter, onEntered, timeout, status2, show]);
  useEffect(() => {
    var _a;
    if (isPresent && show)
      return;
    const actualTimeout = splitTimeout ? timeout.exit : timeout;
    clearTimeout(enterTimeout.current);
    clearTimeout(exitTimeout.current);
    setStatus("exiting");
    onExit == null ? void 0 : onExit();
    (_a = nodeRef.current) == null ? void 0 : _a.offsetHeight;
    exitTimeout.current = setTimeout(() => {
      setStatus("exited");
      safeToRemove == null ? void 0 : safeToRemove();
      onExited == null ? void 0 : onExited();
    }, actualTimeout);
  }, [isPresent, onExit, safeToRemove, timeout, onExited, show]);
  return children({ visible, status: status2, nodeRef });
};
const button$2 = "_button_1l2e3_2";
const text$3 = "_text_1l2e3_132";
const loader$4 = "_loader_1l2e3_145";
const icon$1 = "_icon_1l2e3_158";
const styles$i = {
  button: button$2,
  text: text$3,
  loader: loader$4,
  icon: icon$1
};
function isExternalLink(href) {
  return href == null ? void 0 : href.includes("://");
}
const Button = forwardRef(({ href, ...rest }, ref) => {
  if (isExternalLink(href) || !href) {
    return /* @__PURE__ */ jsx(ButtonContent, { href, ref, ...rest });
  }
  return /* @__PURE__ */ jsx(
    ButtonContent,
    {
      as: Link,
      prefetch: "intent",
      to: href,
      ref,
      ...rest
    }
  );
});
const ButtonContent = forwardRef(
  ({
    className,
    as,
    secondary,
    loading,
    loadingText = "loading",
    icon: icon2,
    iconEnd,
    iconHoverShift,
    iconOnly,
    children,
    rel,
    target,
    href,
    disabled,
    ...rest
  }, ref) => {
    const isExternal = isExternalLink(href);
    const defaultComponent = href ? "a" : "button";
    const Component = as || defaultComponent;
    return /* @__PURE__ */ jsxs(
      Component,
      {
        className: classes(styles$i.button, className),
        "data-loading": loading,
        "data-icon-only": iconOnly,
        "data-secondary": secondary,
        "data-icon": icon2,
        href,
        rel: rel || isExternal ? "noopener noreferrer" : void 0,
        target: target || isExternal ? "_blank" : void 0,
        disabled,
        ref,
        ...rest,
        children: [
          !!icon2 && /* @__PURE__ */ jsx(
            Icon,
            {
              className: styles$i.icon,
              "data-start": !iconOnly,
              "data-shift": iconHoverShift,
              icon: icon2
            }
          ),
          !!children && /* @__PURE__ */ jsx("span", { className: styles$i.text, children }),
          !!iconEnd && /* @__PURE__ */ jsx(
            Icon,
            {
              className: styles$i.icon,
              "data-end": !iconOnly,
              "data-shift": iconHoverShift,
              icon: iconEnd
            }
          ),
          /* @__PURE__ */ jsx(Transition, { unmount: true, in: loading, children: ({ visible, nodeRef }) => /* @__PURE__ */ jsx(
            Loader,
            {
              ref: nodeRef,
              className: styles$i.loader,
              size: 32,
              text: loadingText,
              "data-visible": visible
            }
          ) })
        ]
      }
    );
  }
);
const hidden = "_hidden_1mhmf_2";
const styles$h = {
  hidden
};
const VisuallyHidden = forwardRef(
  ({ className, showOnFocus, as: Component = "span", children, visible, ...rest }, ref) => {
    return /* @__PURE__ */ jsx(
      Component,
      {
        className: classes(styles$h.hidden, className),
        "data-hidden": !visible && !showOnFocus,
        "data-show-on-focus": showOnFocus,
        ref,
        ...rest,
        children
      }
    );
  }
);
async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const text$2 = "_text_1v07c_2";
const glyph = "_glyph_1v07c_9";
const value = "_value_1v07c_16";
const styles$g = {
  text: text$2,
  glyph,
  value
};
const glyphs = [
  "ア",
  "イ",
  "ウ",
  "エ",
  "オ",
  "カ",
  "キ",
  "ク",
  "ケ",
  "コ",
  "サ",
  "シ",
  "ス",
  "セ",
  "ソ",
  "タ",
  "チ",
  "ツ",
  "テ",
  "ト",
  "ナ",
  "ニ",
  "ヌ",
  "ネ",
  "ノ",
  "ハ",
  "ヒ",
  "フ",
  "ヘ",
  "ホ",
  "マ",
  "ミ",
  "ム",
  "メ",
  "モ",
  "ヤ",
  "ユ",
  "ヨ",
  "ー",
  "ラ",
  "リ",
  "ル",
  "レ",
  "ロ",
  "ワ",
  "ヰ",
  "ヱ",
  "ヲ",
  "ン",
  "ガ",
  "ギ",
  "グ",
  "ゲ",
  "ゴ",
  "ザ",
  "ジ",
  "ズ",
  "ゼ",
  "ゾ",
  "ダ",
  "ヂ",
  "ヅ",
  "デ",
  "ド",
  "バ",
  "ビ",
  "ブ",
  "ベ",
  "ボ",
  "パ",
  "ピ",
  "プ",
  "ペ",
  "ポ"
];
const CharType = {
  Glyph: "glyph",
  Value: "value"
};
function shuffle(content2, output, position) {
  return content2.map((value2, index) => {
    if (index < position) {
      return { type: CharType.Value, value: value2 };
    }
    if (position % 1 < 0.5) {
      const rand = Math.floor(Math.random() * glyphs.length);
      return { type: CharType.Glyph, value: glyphs[rand] };
    }
    return { type: CharType.Glyph, value: output[index].value };
  });
}
const DecoderText = memo(
  ({ text: text2, start = true, delay: startDelay = 0, className, ...rest }) => {
    const output = useRef([{ type: CharType.Glyph, value: "" }]);
    const container2 = useRef();
    const reduceMotion = useReducedMotion();
    const decoderSpring = useSpring(0, { stiffness: 8, damping: 5 });
    useEffect(() => {
      const containerInstance = container2.current;
      const content2 = text2.split("");
      let animation;
      const renderOutput = () => {
        const characterMap = output.current.map((item) => {
          return `<span class="${styles$g[item.type]}">${item.value}</span>`;
        });
        containerInstance.innerHTML = characterMap.join("");
      };
      const unsubscribeSpring = decoderSpring.on("change", (value2) => {
        output.current = shuffle(content2, output.current, value2);
        renderOutput();
      });
      const startSpring = async () => {
        await delay(startDelay);
        decoderSpring.set(content2.length);
      };
      if (start && !animation && !reduceMotion) {
        startSpring();
      }
      if (reduceMotion) {
        output.current = content2.map((value2, index) => ({
          type: CharType.Value,
          value: content2[index]
        }));
        renderOutput();
      }
      return () => {
        unsubscribeSpring == null ? void 0 : unsubscribeSpring();
      };
    }, [decoderSpring, reduceMotion, start, startDelay, text2]);
    return /* @__PURE__ */ jsxs("span", { className: classes(styles$g.text, className), ...rest, children: [
      /* @__PURE__ */ jsx(VisuallyHidden, { className: styles$g.label, children: text2 }),
      /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: styles$g.content, ref: container2 })
    ] });
  }
);
const heading = "_heading_e2qtd_2";
const styles$f = {
  heading
};
const Heading = ({
  children,
  level = 1,
  as,
  align = "auto",
  weight = "medium",
  className,
  ...rest
}) => {
  const clampedLevel = Math.min(Math.max(level, 0), 5);
  const Component = as || `h${Math.max(clampedLevel, 1)}`;
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Component,
    {
      className: classes(styles$f.heading, className),
      "data-align": align,
      "data-weight": weight,
      "data-level": clampedLevel,
      ...rest,
      children
    }
  ) });
};
const page$4 = "_page_memxv_2";
const videoContainer = "_videoContainer_memxv_22";
const video = "_video_memxv_22";
const credit = "_credit_memxv_78";
const details = "_details_memxv_102";
const text$1 = "_text_memxv_115";
const title$5 = "_title_memxv_122";
const titleFlatline = "_titleFlatline_memxv_123";
const subheading = "_subheading_memxv_155";
const description$1 = "_description_memxv_185";
const button$1 = "_button_memxv_204";
const styles$e = {
  page: page$4,
  videoContainer,
  video,
  credit,
  details,
  text: text$1,
  title: title$5,
  titleFlatline,
  subheading,
  description: description$1,
  button: button$1
};
function useHasMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}
function useInViewport(elementRef, unobserveOnIntersect, options = {}, shouldObserve = true) {
  const [intersect, setIntersect] = useState(false);
  const [isUnobserved, setIsUnobserved] = useState(false);
  useEffect(() => {
    if (!(elementRef == null ? void 0 : elementRef.current))
      return;
    const observer = new IntersectionObserver(([entry2]) => {
      const { isIntersecting, target } = entry2;
      setIntersect(isIntersecting);
      if (isIntersecting && unobserveOnIntersect) {
        observer.unobserve(target);
        setIsUnobserved(true);
      }
    }, options);
    if (!isUnobserved && shouldObserve) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [elementRef, unobserveOnIntersect, options, isUnobserved, shouldObserve]);
  return intersect;
}
function useWindowSize() {
  const dimensions = useRef(() => ({ w: 1280, h: 800 }));
  const createRuler = useCallback(() => {
    let ruler = document.createElement("div");
    ruler.style.position = "fixed";
    ruler.style.height = "100vh";
    ruler.style.width = 0;
    ruler.style.top = 0;
    document.documentElement.appendChild(ruler);
    dimensions.current.w = window.innerWidth;
    dimensions.current.h = ruler.offsetHeight;
    document.documentElement.removeChild(ruler);
    ruler = null;
  }, []);
  const getHeight = useCallback(() => {
    const isIOS = navigator == null ? void 0 : navigator.userAgent.match(/iphone|ipod|ipad/i);
    if (isIOS) {
      createRuler();
      return dimensions.current.h;
    }
    return window.innerHeight;
  }, [createRuler]);
  const getSize = useCallback(() => {
    return {
      width: window.innerWidth,
      height: getHeight()
    };
  }, [getHeight]);
  const [windowSize, setWindowSize] = useState(dimensions.current);
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getSize());
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [getSize]);
  return windowSize;
}
async function loadImageFromSrcSet({ src, srcSet, sizes }) {
  return new Promise((resolve, reject) => {
    try {
      if (!src && !srcSet) {
        throw new Error("No image src or srcSet provided");
      }
      let tempImage = new Image();
      if (src) {
        tempImage.src = src;
      }
      if (srcSet) {
        tempImage.srcset = srcSet;
      }
      if (sizes) {
        tempImage.sizes = sizes;
      }
      const onLoad = () => {
        tempImage.removeEventListener("load", onLoad);
        const source = tempImage.currentSrc;
        tempImage = null;
        resolve(source);
      };
      tempImage.addEventListener("load", onLoad);
    } catch (error) {
      reject(`Error loading ${srcSet}: ${error}`);
    }
  });
}
async function generateImage(width = 1, height = 1) {
  return new Promise((resolve) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    ctx.fillStyle = "rgba(0, 0, 0, 0)";
    ctx.fillRect(0, 0, width, height);
    canvas.toBlob(async (blob) => {
      if (!blob)
        throw new Error("Video thumbnail failed to load");
      const image2 = URL.createObjectURL(blob);
      canvas.remove();
      resolve(image2);
    });
  });
}
async function resolveSrcFromSrcSet({ srcSet, sizes }) {
  const sources = await Promise.all(
    srcSet.split(", ").map(async (srcString) => {
      const [src, width] = srcString.split(" ");
      const size = Number(width.replace("w", ""));
      const image2 = await generateImage(size);
      return { src, image: image2, width };
    })
  );
  const fakeSrcSet = sources.map(({ image: image2, width }) => `${image2} ${width}`).join(", ");
  const fakeSrc = await loadImageFromSrcSet({ srcSet: fakeSrcSet, sizes });
  const output = sources.find((src) => src.image === fakeSrc);
  return output.src;
}
const image = "_image_4szht_2";
const container$1 = "_container_4szht_42";
const elementWrapper = "_elementWrapper_4szht_49";
const placeholder$1 = "_placeholder_4szht_71";
const element = "_element_4szht_49";
const button = "_button_4szht_104";
const styles$d = {
  image,
  container: container$1,
  elementWrapper,
  placeholder: placeholder$1,
  element,
  button
};
const Image$1 = ({
  className,
  style,
  reveal,
  delay: delay2 = 0,
  raised,
  src: baseSrc,
  srcSet,
  placeholder: placeholder2,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false);
  const { theme } = useTheme();
  const containerRef = useRef();
  const src = baseSrc || srcSet.split(" ")[0];
  const inViewport = useInViewport(containerRef, !getIsVideo(src));
  const onLoad = useCallback(() => {
    setLoaded(true);
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: classes(styles$d.image, className),
      "data-visible": inViewport || loaded,
      "data-reveal": reveal,
      "data-raised": raised,
      "data-theme": theme,
      style: cssProps({ delay: numToMs(delay2) }, style),
      ref: containerRef,
      children: /* @__PURE__ */ jsx(
        ImageElements,
        {
          delay: delay2,
          onLoad,
          loaded,
          inViewport,
          reveal,
          src,
          srcSet,
          placeholder: placeholder2,
          ...rest
        }
      )
    }
  );
};
const ImageElements = ({
  onLoad,
  loaded,
  inViewport,
  srcSet,
  placeholder: placeholder2,
  delay: delay2,
  src,
  alt,
  play = true,
  restartOnPause,
  reveal,
  sizes,
  width,
  height,
  noPauseButton,
  cover,
  ...rest
}) => {
  const reduceMotion = useReducedMotion();
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [playing, setPlaying] = useState(!reduceMotion);
  const [videoSrc, setVideoSrc] = useState();
  const [videoInteracted, setVideoInteracted] = useState(false);
  const placeholderRef = useRef();
  const videoRef = useRef();
  const isVideo = getIsVideo(src);
  const showFullRes = inViewport;
  const hasMounted = useHasMounted();
  useEffect(() => {
    const resolveVideoSrc = async () => {
      const resolvedVideoSrc = await resolveSrcFromSrcSet({ srcSet, sizes });
      setVideoSrc(resolvedVideoSrc);
    };
    if (isVideo && srcSet) {
      resolveVideoSrc();
    } else if (isVideo) {
      setVideoSrc(src);
    }
  }, [isVideo, sizes, src, srcSet]);
  useEffect(() => {
    if (!videoRef.current || !videoSrc)
      return;
    const playVideo = () => {
      setPlaying(true);
      videoRef.current.play();
    };
    const pauseVideo = () => {
      setPlaying(false);
      videoRef.current.pause();
    };
    if (!play) {
      pauseVideo();
      if (restartOnPause) {
        videoRef.current.currentTime = 0;
      }
    }
    if (videoInteracted)
      return;
    if (!inViewport) {
      pauseVideo();
    } else if (inViewport && !reduceMotion && play) {
      playVideo();
    }
  }, [inViewport, play, reduceMotion, restartOnPause, videoInteracted, videoSrc]);
  const togglePlaying = (event) => {
    event.preventDefault();
    setVideoInteracted(true);
    if (videoRef.current.paused) {
      setPlaying(true);
      videoRef.current.play();
    } else {
      setPlaying(false);
      videoRef.current.pause();
    }
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: styles$d.elementWrapper,
      "data-reveal": reveal,
      "data-visible": inViewport || loaded,
      style: cssProps({ delay: numToMs(delay2 + 1e3) }),
      children: [
        isVideo && hasMounted && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            "video",
            {
              muted: true,
              loop: true,
              playsInline: true,
              className: styles$d.element,
              "data-loaded": loaded,
              "data-cover": cover,
              autoPlay: !reduceMotion,
              onLoadStart: onLoad,
              src: videoSrc,
              "aria-label": alt,
              ref: videoRef,
              ...rest
            }
          ),
          !noPauseButton && /* @__PURE__ */ jsxs(Button, { className: styles$d.button, onClick: togglePlaying, children: [
            /* @__PURE__ */ jsx(Icon, { icon: playing ? "pause" : "play" }),
            playing ? "Pause" : "Play"
          ] })
        ] }),
        !isVideo && /* @__PURE__ */ jsx(
          "img",
          {
            className: styles$d.element,
            "data-loaded": loaded,
            "data-cover": cover,
            onLoad,
            decoding: "async",
            src: showFullRes ? src : void 0,
            srcSet: showFullRes ? srcSet : void 0,
            width,
            height,
            alt,
            sizes,
            ...rest
          }
        ),
        showPlaceholder && /* @__PURE__ */ jsx(
          "img",
          {
            "aria-hidden": true,
            className: styles$d.placeholder,
            "data-loaded": loaded,
            "data-cover": cover,
            style: cssProps({ delay: numToMs(delay2) }),
            ref: placeholderRef,
            src: placeholder2,
            width,
            height,
            onTransitionEnd: () => setShowPlaceholder(false),
            decoding: "async",
            loading: "lazy",
            alt: "",
            role: "presentation"
          }
        )
      ]
    }
  );
};
function getIsVideo(src) {
  return typeof src === "string" && src.includes(".mp4");
}
const flatlineSkull = "/assets/error-flatline-eK98OAAk.svg";
function Error$1({ error }) {
  const flatlined = !error.status;
  const getMessage = () => {
    switch (error.status) {
      case 404:
        return {
          summary: "Page not found",
          message: "The page does not exist."
        };
      case 405:
        return {
          summary: "Method not allowed",
          message: error.data
        };
      default:
        return {
          summary: "Unexpected error",
          message: error.statusText || error.data || error.toString()
        };
    }
  };
  const { summary: summary2, message } = getMessage();
  return /* @__PURE__ */ jsxs("section", { className: styles$e.page, children: [
    flatlined && /* @__PURE__ */ jsx(
      "style",
      {
        dangerouslySetInnerHTML: {
          __html: `
            [data-theme='dark'] {
              --primary: oklch(69.27% 0.242 25.41);
              --accent: oklch(69.27% 0.242 25.41);
            }
            [data-theme='light'] {
              --primary: oklch(56.29% 0.182 26.5);
              --accent: oklch(56.29% 0.182 26.5);
            }
          `
        }
      }
    ),
    /* @__PURE__ */ jsx(Transition, { in: true, children: ({ visible }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx("div", { className: styles$e.details, children: /* @__PURE__ */ jsxs("div", { className: styles$e.text, children: [
        !flatlined && /* @__PURE__ */ jsx(
          Heading,
          {
            className: styles$e.title,
            "data-visible": visible,
            level: 0,
            weight: "bold",
            children: error.status
          }
        ),
        flatlined && /* @__PURE__ */ jsxs(
          Heading,
          {
            className: styles$e.titleFlatline,
            "data-visible": visible,
            level: 2,
            as: "h1",
            children: [
              /* @__PURE__ */ jsx("svg", { width: "60", height: "80", viewBox: "0 0 60 80", children: /* @__PURE__ */ jsx("use", { href: `${flatlineSkull}#skull` }) }),
              /* @__PURE__ */ jsx(DecoderText, { text: "Flatlined", start: visible, delay: 300 })
            ]
          }
        ),
        !flatlined && /* @__PURE__ */ jsx(
          Heading,
          {
            "aria-hidden": true,
            className: styles$e.subheading,
            "data-visible": visible,
            as: "h2",
            level: 4,
            children: /* @__PURE__ */ jsx(DecoderText, { text: summary2, start: visible, delay: 300 })
          }
        ),
        /* @__PURE__ */ jsx(Text, { className: styles$e.description, "data-visible": visible, as: "p", children: message }),
        flatlined ? /* @__PURE__ */ jsx(
          Button,
          {
            secondary: true,
            iconHoverShift: true,
            className: styles$e.button,
            "data-visible": visible,
            href: "https://www.youtube.com/watch?v=EuQzHGcsjlA",
            icon: "chevron-right",
            children: "Support"
          }
        ) : /* @__PURE__ */ jsx(
          Button,
          {
            secondary: true,
            iconHoverShift: true,
            className: styles$e.button,
            "data-visible": visible,
            href: "/",
            icon: "chevron-right",
            children: "Back to home"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: styles$e.videoContainer, "data-visible": visible, children: [
        /* @__PURE__ */ jsx(
          Image$1,
          {
            reveal: true,
            cover: true,
            noPauseButton: true,
            delay: 600,
            className: styles$e.video,
            src: flatlined ? flatlineVideo : notFoundVideo,
            placeholder: flatlined ? flatlinePoster : notFoundPoster
          }
        ),
        /* @__PURE__ */ jsx("span", { className: styles$e.credit, "data-visible": visible, children: "Background video" })
      ] })
    ] }) })
  ] });
}
const toggle$1 = "_toggle_1lvbt_2";
const inner = "_inner_1lvbt_17";
const icon = "_icon_1lvbt_25";
const styles$c = {
  toggle: toggle$1,
  inner,
  icon
};
const NavToggle = ({ menuOpen, ...rest }) => {
  return /* @__PURE__ */ jsx(
    Button,
    {
      iconOnly: true,
      className: styles$c.toggle,
      "aria-label": "Menu",
      "aria-expanded": menuOpen,
      ...rest,
      children: /* @__PURE__ */ jsxs("div", { className: styles$c.inner, children: [
        /* @__PURE__ */ jsx(Icon, { className: styles$c.icon, "data-menu": true, "data-open": menuOpen, icon: "menu" }),
        /* @__PURE__ */ jsx(
          Icon,
          {
            className: styles$c.icon,
            "data-close": true,
            "data-open": menuOpen,
            icon: "close"
          }
        )
      ] })
    }
  );
};
const toggle = "_toggle_1phd7_2";
const circle = "_circle_1phd7_29";
const mask = "_mask_1phd7_54";
const path = "_path_1phd7_72";
const styles$b = {
  toggle,
  circle,
  mask,
  path
};
const ThemeToggle = ({ isMobile, ...rest }) => {
  const id = useId();
  const { toggleTheme } = useTheme();
  const maskId = `${id}theme-toggle-mask`;
  return /* @__PURE__ */ jsx(
    Button,
    {
      iconOnly: true,
      className: styles$b.toggle,
      "data-mobile": isMobile,
      "aria-label": "Toggle theme",
      onClick: () => toggleTheme(),
      ...rest,
      children: /* @__PURE__ */ jsxs("svg", { "aria-hidden": true, className: styles$b.svg, width: "38", height: "38", viewBox: "0 0 38 38", children: [
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("mask", { id: maskId, children: [
          /* @__PURE__ */ jsx("circle", { className: styles$b.circle, "data-mask": true, cx: "19", cy: "19", r: "13" }),
          /* @__PURE__ */ jsx("circle", { className: styles$b.mask, cx: "25", cy: "14", r: "9" })
        ] }) }),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: styles$b.path,
            d: "M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5"
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            className: styles$b.circle,
            mask: `url(#${maskId})`,
            cx: "19",
            cy: "19",
            r: "12"
          }
        )
      ] })
    }
  );
};
const navLinks = [
  {
    label: "Home",
    pathname: "/"
  },
  {
    label: "About",
    pathname: "/about"
  },
  {
    label: "Projects",
    pathname: "/projects"
  },
  {
    label: "Contact",
    pathname: "/contact"
  }
];
const socialLinks = [];
const navbar = "_navbar_h9ft0_2";
const logo$1 = "_logo_h9ft0_27";
const wordmark = "_wordmark_h9ft0_39";
const nav = "_nav_h9ft0_2";
const navList = "_navList_h9ft0_74";
const navLink = "_navLink_h9ft0_82";
const navIcons = "_navIcons_h9ft0_125";
const navIconLink = "_navIconLink_h9ft0_149";
const navIcon = "_navIcon_h9ft0_125";
const mobileNav = "_mobileNav_h9ft0_170";
const mobileNavLink = "_mobileNavLink_h9ft0_199";
const styles$a = {
  navbar,
  logo: logo$1,
  wordmark,
  nav,
  navList,
  navLink,
  navIcons,
  navIconLink,
  navIcon,
  mobileNav,
  mobileNavLink
};
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const windowSize = useWindowSize();
  const isMobile = windowSize.width <= media.mobile || windowSize.height <= 696;
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);
  const getCurrent = (pathname) => pathname === location.pathname ? "page" : void 0;
  return /* @__PURE__ */ jsxs("header", { className: styles$a.navbar, children: [
    /* @__PURE__ */ jsx(
      Link,
      {
        prefetch: "intent",
        to: "/",
        "data-navbar-item": true,
        className: styles$a.logo,
        "aria-label": "Nick Arkhipov home",
        children: /* @__PURE__ */ jsx("span", { className: styles$a.wordmark, children: "NA" })
      }
    ),
    /* @__PURE__ */ jsx(NavToggle, { onClick: () => setMenuOpen(!menuOpen), menuOpen }),
    /* @__PURE__ */ jsxs("nav", { className: styles$a.nav, children: [
      /* @__PURE__ */ jsx("div", { className: styles$a.navList, children: navLinks.map(({ label, pathname }) => /* @__PURE__ */ jsx(
        Link,
        {
          prefetch: "intent",
          to: pathname,
          "data-navbar-item": true,
          className: styles$a.navLink,
          "aria-current": getCurrent(pathname),
          children: label
        },
        label
      )) }),
      /* @__PURE__ */ jsx(NavbarIcons, { desktop: true })
    ] }),
    /* @__PURE__ */ jsx(Transition, { unmount: true, in: menuOpen, timeout: msToNum(tokens.base.durationL), children: ({ visible, nodeRef }) => /* @__PURE__ */ jsxs("nav", { className: styles$a.mobileNav, "data-visible": visible, ref: nodeRef, children: [
      navLinks.map(({ label, pathname }, index) => /* @__PURE__ */ jsx(
        Link,
        {
          prefetch: "intent",
          to: pathname,
          className: styles$a.mobileNavLink,
          "data-visible": visible,
          "aria-current": getCurrent(pathname),
          style: cssProps({
            transitionDelay: numToMs(
              Number(msToNum(tokens.base.durationXS)) + index * (isMobile ? 18 : 50)
            )
          }),
          children: label
        },
        label
      )),
      /* @__PURE__ */ jsx(NavbarIcons, {}),
      /* @__PURE__ */ jsx(ThemeToggle, { isMobile: true })
    ] }) }),
    !isMobile && /* @__PURE__ */ jsx(ThemeToggle, { "data-navbar-item": true })
  ] });
};
const NavbarIcons = ({ desktop }) => {
  if (!socialLinks.length)
    return null;
  return /* @__PURE__ */ jsx("div", { className: styles$a.navIcons, children: socialLinks.map(({ label, url: url2, icon: icon2 }) => /* @__PURE__ */ jsx(
    "a",
    {
      "data-navbar-item": desktop || void 0,
      className: styles$a.navIconLink,
      "aria-label": label,
      href: url2,
      target: "_blank",
      rel: "noopener noreferrer",
      children: /* @__PURE__ */ jsx(Icon, { className: styles$a.navIcon, icon: icon2 })
    },
    label
  )) });
};
const progress = "_progress_3typo_2";
const styles$9 = {
  progress
};
function Progress() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [visible, setVisible] = useState(false);
  const { state } = useNavigation();
  const progressRef = useRef();
  const timeout = useRef(0);
  useEffect(() => {
    clearTimeout(timeout.current);
    if (state !== "idle") {
      timeout.current = setTimeout(() => {
        setVisible(true);
      }, 500);
    } else if (animationComplete) {
      timeout.current = setTimeout(() => {
        setVisible(false);
      }, 300);
    }
  }, [state, animationComplete]);
  useEffect(() => {
    if (!progressRef.current)
      return;
    const controller = new AbortController();
    if (state !== "idle") {
      return setAnimationComplete(false);
    }
    Promise.all(
      progressRef.current.getAnimations({ subtree: true }).map((animation) => animation.finished)
    ).then(() => {
      if (controller.signal.aborted)
        return;
      setAnimationComplete(true);
    });
    return () => {
      controller.abort();
    };
  }, [state]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: styles$9.progress,
      "data-status": state,
      "data-visible": visible,
      "data-complete": animationComplete,
      ref: progressRef
    }
  );
}
const loader$3 = "_loader_bun21_2";
const logo = "_logo_bun21_23";
const letter = "_letter_bun21_34";
const bar = "_bar_bun21_40";
const styles$8 = {
  loader: loader$3,
  logo,
  letter,
  "loader-letter": "_loader-letter_bun21_1",
  bar,
  "loader-bar": "_loader-bar_bun21_1"
};
function SiteLoader() {
  const [hidden2, setHidden] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setHidden(true);
    }, 1300);
    return () => clearTimeout(timeout);
  }, []);
  return /* @__PURE__ */ jsx("div", { className: styles$8.loader, "data-hidden": hidden2, "aria-hidden": true, children: /* @__PURE__ */ jsxs("div", { className: styles$8.logo, children: [
    /* @__PURE__ */ jsx("span", { className: styles$8.letter, children: "N" }),
    /* @__PURE__ */ jsx("span", { className: styles$8.bar }),
    /* @__PURE__ */ jsx("span", { className: styles$8.letter, children: "A" })
  ] }) });
}
const name$1 = "Nick Arkhipov";
const role = "Fashion Marketer";
const disciplines = [
  "Fashion Marketing",
  "Brand Positioning",
  "Colour Strategy",
  "Campaign Planning"
];
const url$1 = "https://nickarkhipov.com";
const bluesky = "";
const figma = "";
const github = "";
const repo = "https://github.com";
const ascii = "NA";
const config = {
  name: name$1,
  role,
  disciplines,
  url: url$1,
  bluesky,
  figma,
  github,
  repo,
  ascii
};
const container = "_container_j3vhn_2";
const skip = "_skip_j3vhn_12";
const styles$7 = {
  container,
  skip
};
const reset_module = {};
const global_module = {};
const links$1 = () => [
  {
    rel: "preload",
    href: GothamMedium,
    as: "font",
    type: "font/woff2",
    crossOrigin: ""
  },
  {
    rel: "preload",
    href: GothamBook,
    as: "font",
    type: "font/woff2",
    crossOrigin: ""
  },
  { rel: "manifest", href: "/manifest.json" },
  { rel: "icon", href: "/favicon.svg?v=2", type: "image/svg+xml" },
  { rel: "apple-touch-icon", href: "/icon-256.png", sizes: "256x256" }
];
const sessionStorage$1 = createCookieSessionStorage({
  cookie: {
    name: "__session",
    httpOnly: true,
    maxAge: 604800,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET || "dev-session-secret"],
    secure: process.env.NODE_ENV === "production"
  }
});
const loader$2 = async ({ request }) => {
  const { url: url2 } = request;
  const { pathname } = new URL(url2);
  const pathnameSliced = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  const canonicalUrl = `${config.url}${pathnameSliced}`;
  const session = await sessionStorage$1.getSession(request.headers.get("Cookie"));
  const theme = session.get("theme") || "dark";
  return json(
    { canonicalUrl, theme },
    {
      headers: {
        "Set-Cookie": await sessionStorage$1.commitSession(session)
      }
    }
  );
};
function App() {
  var _a;
  let { canonicalUrl, theme } = useLoaderData();
  const fetcher = useFetcher();
  const { state } = useNavigation();
  if ((_a = fetcher.formData) == null ? void 0 : _a.has("theme")) {
    theme = fetcher.formData.get("theme");
  }
  function toggleTheme(newTheme) {
    fetcher.submit(
      { theme: newTheme ? newTheme : theme === "dark" ? "light" : "dark" },
      { action: "/api/set-theme", method: "post" }
    );
  }
  useEffect(() => {
    console.info(`${config.ascii}
${config.name}
${config.repo}`);
  }, []);
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("meta", { name: "theme-color", content: theme === "dark" ? "#111" : "#F2F2F2" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "color-scheme",
          content: theme === "light" ? "light dark" : "dark light"
        }
      ),
      /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: themeStyles } }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {}),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonicalUrl })
    ] }),
    /* @__PURE__ */ jsxs("body", { "data-theme": theme, children: [
      /* @__PURE__ */ jsxs(ThemeProvider, { theme, toggleTheme, children: [
        /* @__PURE__ */ jsx(SiteLoader, {}),
        /* @__PURE__ */ jsx(Progress, {}),
        /* @__PURE__ */ jsx(VisuallyHidden, { showOnFocus: true, as: "a", className: styles$7.skip, href: "#main-content", children: "Skip to main content" }),
        /* @__PURE__ */ jsx(Navbar, {}),
        /* @__PURE__ */ jsx(
          "main",
          {
            id: "main-content",
            className: styles$7.container,
            tabIndex: -1,
            "data-loading": state === "loading",
            children: /* @__PURE__ */ jsx(Outlet, {})
          }
        )
      ] }),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function ErrorBoundary$1() {
  const error = useRouteError();
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("meta", { name: "theme-color", content: "#111" }),
      /* @__PURE__ */ jsx("meta", { name: "color-scheme", content: "dark light" }),
      /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: themeStyles } }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { "data-theme": "dark", children: [
      /* @__PURE__ */ jsx(Error$1, { error }),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$1,
  default: App,
  links: links$1,
  loader: loader$2
}, Symbol.toStringTag, { value: "Module" }));
const footer = "_footer_2v6kj_2";
const date = "_date_2v6kj_16";
const styles$6 = {
  footer,
  date
};
const Footer = ({ className }) => /* @__PURE__ */ jsx("footer", { className: classes(styles$6.footer, className), children: /* @__PURE__ */ jsx(Text, { size: "s", align: "center", children: /* @__PURE__ */ jsx("span", { className: styles$6.date, children: `© ${(/* @__PURE__ */ new Date()).getFullYear()} ${config.name}` }) }) });
const section = "_section_cvvm4_2";
const styles$5 = {
  section
};
const Section = forwardRef(
  ({ as: Component = "div", children, className, ...rest }, ref) => /* @__PURE__ */ jsx(Component, { className: classes(styles$5.section, className), ref, ...rest, children })
);
const { name, url, twitter } = config;
const defaultOgImage = `${url}/social-image.png`;
function baseMeta({
  title: title2,
  description: description2,
  prefix = name,
  ogImage = defaultOgImage
}) {
  const titleText = [prefix, title2].filter(Boolean).join(" | ");
  return [
    { title: titleText },
    { name: "description", content: description2 },
    { name: "author", content: name },
    { property: "og:image", content: ogImage },
    { property: "og:image:alt", content: "Banner for the site" },
    { property: "og:image:width", content: "1280" },
    { property: "og:image:height", content: "800" },
    { property: "og:title", content: titleText },
    { property: "og:site_name", content: name },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:description", content: description2 },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:description", content: description2 },
    { property: "twitter:title", content: titleText },
    { property: "twitter:site", content: url },
    { property: "twitter:creator", content: twitter },
    { property: "twitter:image", content: ogImage }
  ];
}
const projects = [
  {
    slug: "footwear-accessories-colour-forecast-aw-27-28",
    title: "Footwear & Accessories Colour Forecast A/W 27/28",
    category: "Footwear & Accessories",
    year: "A/W 27/28",
    status: "Forecast Digest",
    summary: "A colour direction report covering mid-tones, neutrals, and bright accent directions.",
    author: "Jane Collins",
    published: "January 12, 2025",
    readTime: "8 min read",
    source: "@Theoysterverse",
    needToKnow: "A/W 27/28 keeps long-term colour consistency while adding fresh seasonal tones for emotional consumer demand.",
    opportunity: "Use colour to express trust, freedom, comfort, and restoration as uncertainty pushes people toward emotive buying.",
    keyColours: [
      "Luminous Blue: freedom and expression",
      "Russet: trust and groundedness",
      "Peaceful Lilac: serenity and restoration",
      "Maize: pleasure, comfort, and a new neutral role",
      "Deep Green: introspection and dark sophistication"
    ],
    designStrategies: [
      "Drive investment purchasing with sophisticated browns, tonal greens, and reliable blues.",
      "Use Maize as a modern neutral with gold-adjacent value and cross-season flexibility.",
      "Mix grounded nature-led palettes with pulsating brights for clearer emotional positioning.",
      "Build seasonal drops around tactile finishes and high-contrast colour combinations."
    ],
    proofPoints: [
      "Saint Laurent ranked #1 on the Lyst Index (Q3 2025), reinforcing colour-led sophistication.",
      "Greens represented 39.7% of A/W 27/28 forecast imagery, validating darker green momentum.",
      "Cultural momentum around gold supports Maize as a strategic neutral for accessories and footwear."
    ],
    showInIndex: true
  },
  {
    slug: "accessory-story-systems",
    title: "Accessory Launch Framework",
    category: "Marketing Operations",
    year: "2027",
    status: "Coming soon",
    summary: "A framework for planning accessory launches across campaign, retail, and social channels.",
    showInIndex: false
  },
  {
    slug: "seasonal-signal-mapping",
    title: "Seasonal Colour Signal Mapping",
    category: "Trend Intelligence",
    year: "2027",
    status: "Coming soon",
    summary: "A model for tracking colour demand signals across regions and product categories.",
    showInIndex: false
  }
];
function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
const page$3 = "_page_1noqx_1";
const content$2 = "_content_1noqx_5";
const kicker$4 = "_kicker_1noqx_11";
const title$4 = "_title_1noqx_23";
const summary$1 = "_summary_1noqx_32";
const metaLine = "_metaLine_1noqx_39";
const placeholder = "_placeholder_1noqx_47";
const placeholderLabel = "_placeholderLabel_1noqx_55";
const placeholderValue = "_placeholderValue_1noqx_63";
const placeholderBody = "_placeholderBody_1noqx_70";
const list = "_list_1noqx_75";
const back = "_back_1noqx_83";
const related = "_related_1noqx_102";
const relatedGrid = "_relatedGrid_1noqx_107";
const relatedCard = "_relatedCard_1noqx_114";
const relatedMeta = "_relatedMeta_1noqx_129";
const relatedTitle = "_relatedTitle_1noqx_140";
const relatedSummary = "_relatedSummary_1noqx_147";
const relatedStatus = "_relatedStatus_1noqx_153";
const styles$4 = {
  page: page$3,
  content: content$2,
  kicker: kicker$4,
  title: title$4,
  summary: summary$1,
  metaLine,
  placeholder,
  placeholderLabel,
  placeholderValue,
  placeholderBody,
  list,
  back,
  related,
  relatedGrid,
  relatedCard,
  relatedMeta,
  relatedTitle,
  relatedSummary,
  relatedStatus
};
async function loader$1({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    throw new Response(null, { status: 404, statusText: "Not found" });
  }
  return json({ project });
}
function meta$6({ data }) {
  var _a;
  const projectTitle = ((_a = data == null ? void 0 : data.project) == null ? void 0 : _a.title) ?? "Project";
  return baseMeta({
    title: projectTitle,
    description: `${projectTitle} project page.`
  });
}
function ProjectDetailRoute() {
  const { project } = useLoaderData();
  const relatedProjects = projects.filter((item) => item.slug !== project.slug).slice(0, 2);
  const keyColours = project.keyColours ?? [];
  const designStrategies = project.designStrategies ?? [];
  const proofPoints = project.proofPoints ?? [];
  const showMetaLine = project.author && project.published && project.readTime && project.source;
  return /* @__PURE__ */ jsxs("div", { className: styles$4.page, children: [
    /* @__PURE__ */ jsxs(Section, { as: "article", className: styles$4.content, children: [
      /* @__PURE__ */ jsxs("p", { className: styles$4.kicker, children: [
        project.category,
        /* @__PURE__ */ jsx("span", { children: project.year })
      ] }),
      /* @__PURE__ */ jsx("h1", { className: styles$4.title, children: project.title }),
      /* @__PURE__ */ jsx("p", { className: styles$4.summary, children: project.summary }),
      showMetaLine && /* @__PURE__ */ jsxs("p", { className: styles$4.metaLine, children: [
        project.author,
        " · ",
        project.published,
        " · ",
        project.readTime,
        " · ",
        project.source
      ] }),
      !!project.needToKnow && /* @__PURE__ */ jsxs("div", { className: styles$4.placeholder, children: [
        /* @__PURE__ */ jsx("p", { className: styles$4.placeholderLabel, children: "Need to Know" }),
        /* @__PURE__ */ jsx("p", { className: styles$4.placeholderBody, children: project.needToKnow })
      ] }),
      !!project.opportunity && /* @__PURE__ */ jsxs("div", { className: styles$4.placeholder, children: [
        /* @__PURE__ */ jsx("p", { className: styles$4.placeholderLabel, children: "Opportunity" }),
        /* @__PURE__ */ jsx("p", { className: styles$4.placeholderBody, children: project.opportunity })
      ] }),
      !!keyColours.length && /* @__PURE__ */ jsxs("div", { className: styles$4.placeholder, children: [
        /* @__PURE__ */ jsx("p", { className: styles$4.placeholderLabel, children: "Key Colours" }),
        /* @__PURE__ */ jsx("ul", { className: styles$4.list, children: keyColours.map((item) => /* @__PURE__ */ jsx("li", { children: item }, item)) })
      ] }),
      !!designStrategies.length && /* @__PURE__ */ jsxs("div", { className: styles$4.placeholder, children: [
        /* @__PURE__ */ jsx("p", { className: styles$4.placeholderLabel, children: "Design Strategies" }),
        /* @__PURE__ */ jsx("ul", { className: styles$4.list, children: designStrategies.map((item) => /* @__PURE__ */ jsx("li", { children: item }, item)) })
      ] }),
      !!proofPoints.length && /* @__PURE__ */ jsxs("div", { className: styles$4.placeholder, children: [
        /* @__PURE__ */ jsx("p", { className: styles$4.placeholderLabel, children: "Proof Points" }),
        /* @__PURE__ */ jsx("ul", { className: styles$4.list, children: proofPoints.map((item) => /* @__PURE__ */ jsx("li", { children: item }, item)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: styles$4.placeholder, children: [
        /* @__PURE__ */ jsx("p", { className: styles$4.placeholderLabel, children: "Status" }),
        /* @__PURE__ */ jsx("p", { className: styles$4.placeholderValue, children: project.status }),
        /* @__PURE__ */ jsx("p", { className: styles$4.placeholderBody, children: project.showInIndex === false ? "Details will be published soon." : "Full case materials are being prepared." })
      ] }),
      !!relatedProjects.length && /* @__PURE__ */ jsxs("div", { className: styles$4.related, children: [
        /* @__PURE__ */ jsx("p", { className: styles$4.placeholderLabel, children: "Suggested Projects" }),
        /* @__PURE__ */ jsx("div", { className: styles$4.relatedGrid, children: relatedProjects.map((item) => /* @__PURE__ */ jsxs(
          Link,
          {
            prefetch: "intent",
            className: styles$4.relatedCard,
            to: `/projects/${item.slug}`,
            children: [
              /* @__PURE__ */ jsxs("p", { className: styles$4.relatedMeta, children: [
                item.category,
                /* @__PURE__ */ jsx("span", { children: item.year })
              ] }),
              /* @__PURE__ */ jsx("h2", { className: styles$4.relatedTitle, children: item.title }),
              /* @__PURE__ */ jsx("p", { className: styles$4.relatedSummary, children: item.summary }),
              /* @__PURE__ */ jsx("p", { className: styles$4.relatedStatus, children: item.status })
            ]
          },
          item.slug
        )) })
      ] }),
      /* @__PURE__ */ jsx(Link, { prefetch: "intent", className: styles$4.back, to: "/projects", children: "Back to Projects" })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ProjectDetailRoute,
  loader: loader$1,
  meta: meta$6
}, Symbol.toStringTag, { value: "Module" }));
const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    httpOnly: true,
    maxAge: 604800,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET || "dev-session-secret"],
    secure: process.env.NODE_ENV === "production"
  }
});
async function action({ request }) {
  const formData = await request.formData();
  const theme = formData.get("theme");
  const session = await sessionStorage.getSession(request.headers.get("Cookie"));
  session.set("theme", theme);
  return json(
    { status: "success" },
    {
      headers: {
        "Set-Cookie": await sessionStorage.commitSession(session)
      }
    }
  );
}
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action
}, Symbol.toStringTag, { value: "Module" }));
const page$2 = "_page_1pdvo_1";
const header = "_header_1pdvo_5";
const kicker$3 = "_kicker_1pdvo_10";
const title$3 = "_title_1pdvo_19";
const copy = "_copy_1pdvo_27";
const gridWrap = "_gridWrap_1pdvo_34";
const grid$1 = "_grid_1pdvo_34";
const card$1 = "_card_1pdvo_46";
const meta$5 = "_meta_1pdvo_73";
const cardTitle$1 = "_cardTitle_1pdvo_84";
const summary = "_summary_1pdvo_91";
const status = "_status_1pdvo_97";
const styles$3 = {
  page: page$2,
  header,
  kicker: kicker$3,
  title: title$3,
  copy,
  gridWrap,
  grid: grid$1,
  card: card$1,
  meta: meta$5,
  cardTitle: cardTitle$1,
  summary,
  status
};
const meta$4 = () => {
  return baseMeta({
    title: "Projects",
    description: "Project index for Nick Arkhipov."
  });
};
function ProjectsRoute() {
  const visibleProjects = projects.filter((project) => project.showInIndex !== false);
  return /* @__PURE__ */ jsxs("div", { className: styles$3.page, children: [
    /* @__PURE__ */ jsxs(Section, { className: styles$3.header, as: "header", children: [
      /* @__PURE__ */ jsx("p", { className: styles$3.kicker, children: "Projects" }),
      /* @__PURE__ */ jsx("h1", { className: styles$3.title, children: "Published Work" }),
      /* @__PURE__ */ jsx("p", { className: styles$3.copy, children: "Open a project to view details." })
    ] }),
    /* @__PURE__ */ jsx(Section, { className: styles$3.gridWrap, as: "section", children: /* @__PURE__ */ jsx("div", { className: styles$3.grid, children: visibleProjects.map((project) => /* @__PURE__ */ jsxs(
      Link,
      {
        prefetch: "intent",
        to: `/projects/${project.slug}`,
        className: styles$3.card,
        children: [
          /* @__PURE__ */ jsxs("p", { className: styles$3.meta, children: [
            project.category,
            /* @__PURE__ */ jsx("span", { children: project.year })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: styles$3.cardTitle, children: project.title }),
          /* @__PURE__ */ jsx("p", { className: styles$3.summary, children: project.summary }),
          /* @__PURE__ */ jsx("p", { className: styles$3.status, children: project.status })
        ]
      },
      project.slug
    )) }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ProjectsRoute,
  meta: meta$4
}, Symbol.toStringTag, { value: "Module" }));
const page$1 = "_page_18cgi_1";
const content$1 = "_content_18cgi_5";
const kicker$2 = "_kicker_18cgi_11";
const title$2 = "_title_18cgi_20";
const body = "_body_18cgi_29";
const channels = "_channels_18cgi_36";
const channel = "_channel_18cgi_36";
const channelLabel = "_channelLabel_18cgi_65";
const channelValue = "_channelValue_18cgi_72";
const styles$2 = {
  page: page$1,
  content: content$1,
  kicker: kicker$2,
  title: title$2,
  body,
  channels,
  channel,
  channelLabel,
  channelValue
};
const meta$3 = () => {
  return baseMeta({
    title: "Contact",
    description: "Contact Nick Arkhipov."
  });
};
const Contact = () => {
  return /* @__PURE__ */ jsxs("div", { className: styles$2.page, children: [
    /* @__PURE__ */ jsxs(Section, { className: styles$2.content, as: "section", children: [
      /* @__PURE__ */ jsx("p", { className: styles$2.kicker, children: "Contact" }),
      /* @__PURE__ */ jsx("h1", { className: styles$2.title, children: "Direct Contacts" }),
      /* @__PURE__ */ jsx("p", { className: styles$2.body, children: "Use email or Telegram for project and partnership inquiries." }),
      /* @__PURE__ */ jsxs("div", { className: styles$2.channels, children: [
        /* @__PURE__ */ jsxs("a", { className: styles$2.channel, href: "mailto:nickarkhipov.wv@gmail.com", children: [
          /* @__PURE__ */ jsx("span", { className: styles$2.channelLabel, children: "Email" }),
          /* @__PURE__ */ jsx("span", { className: styles$2.channelValue, children: "nickarkhipov.wv@gmail.com" })
        ] }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            className: styles$2.channel,
            href: "https://t.me/nickwangann",
            target: "_blank",
            rel: "noopener noreferrer",
            children: [
              /* @__PURE__ */ jsx("span", { className: styles$2.channelLabel, children: "Telegram" }),
              /* @__PURE__ */ jsx("span", { className: styles$2.channelValue, children: "@nickwangann" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Contact,
  meta: meta$3
}, Symbol.toStringTag, { value: "Module" }));
const page = "_page_18um6_1";
const content = "_content_18um6_5";
const photoWrap = "_photoWrap_18um6_15";
const photo = "_photo_18um6_15";
const bio = "_bio_18um6_29";
const kicker$1 = "_kicker_18um6_33";
const title$1 = "_title_18um6_41";
const text = "_text_18um6_49";
const styles$1 = {
  page,
  content,
  photoWrap,
  photo,
  bio,
  kicker: kicker$1,
  title: title$1,
  text
};
const meta$2 = () => {
  return baseMeta({
    title: "About",
    description: "About Nick Arkhipov."
  });
};
const About = () => {
  return /* @__PURE__ */ jsxs("div", { className: styles$1.page, children: [
    /* @__PURE__ */ jsxs(Section, { className: styles$1.content, as: "section", children: [
      /* @__PURE__ */ jsx("div", { className: styles$1.photoWrap, children: /* @__PURE__ */ jsx(
        "img",
        {
          className: styles$1.photo,
          src: "https://www.dropbox.com/scl/fi/wxkjcqo18h4dymwfew0qo/main.jpg?rlkey=my2dp54w0jzxp6ckkgz5voetf&st=jl3b3rej&raw=1",
          alt: "Nick Arkhipov",
          loading: "lazy"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: styles$1.bio, children: [
        /* @__PURE__ */ jsx("p", { className: styles$1.kicker, children: "About Me" }),
        /* @__PURE__ */ jsx("h1", { className: styles$1.title, children: "Nick Arkhipov" }),
        /* @__PURE__ */ jsx("p", { className: styles$1.text, children: "Born in Moscow, Russia in 1999, Nick is a 26-year-old fashion marketer." }),
        /* @__PURE__ */ jsx("p", { className: styles$1.text, children: "He lived most of his life in Russia, then moved to the United States to pursue fashion, where he studied Fashion Marketing in Dallas, Texas." }),
        /* @__PURE__ */ jsx("p", { className: styles$1.text, children: "His focus is fashion strategy, brand positioning, and colour planning for footwear and accessories." }),
        /* @__PURE__ */ jsx("p", { className: styles$1.text, children: "Outside work, he is a jet skiing enthusiast and keeps close ties to fashion culture, trends, and visual direction." })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: About,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
const home = "_home_bsa8n_1";
const hero = "_hero_bsa8n_5";
const heroInner = "_heroInner_bsa8n_12";
const kicker = "_kicker_bsa8n_27";
const title = "_title_bsa8n_35";
const description = "_description_bsa8n_44";
const actions = "_actions_bsa8n_51";
const cta = "_cta_bsa8n_58";
const secondaryCta = "_secondaryCta_bsa8n_59";
const inlineLink = "_inlineLink_bsa8n_60";
const about = "_about_bsa8n_92";
const featured = "_featured_bsa8n_93";
const sectionLabel = "_sectionLabel_bsa8n_123";
const sectionTitle = "_sectionTitle_bsa8n_132";
const aboutText = "_aboutText_bsa8n_141";
const featuredHead = "_featuredHead_bsa8n_148";
const grid = "_grid_bsa8n_166";
const card = "_card_bsa8n_173";
const cardMeta = "_cardMeta_bsa8n_193";
const cardTitle = "_cardTitle_bsa8n_204";
const cardBody = "_cardBody_bsa8n_211";
const cardStatus = "_cardStatus_bsa8n_218";
const styles = {
  home,
  hero,
  heroInner,
  kicker,
  title,
  description,
  actions,
  cta,
  secondaryCta,
  inlineLink,
  about,
  featured,
  sectionLabel,
  sectionTitle,
  aboutText,
  featuredHead,
  grid,
  card,
  cardMeta,
  cardTitle,
  cardBody,
  cardStatus
};
const DisplacementSphere = lazy(
  () => import("./displacement-sphere-B5yPpsel.js").then((module) => ({ default: module.DisplacementSphere }))
);
const links = () => [
  {
    rel: "prefetch",
    href: "/draco/draco_wasm_wrapper.js",
    as: "script",
    type: "text/javascript",
    importance: "low"
  },
  {
    rel: "prefetch",
    href: "/draco/draco_decoder.wasm",
    as: "fetch",
    type: "application/wasm",
    importance: "low"
  }
];
const meta$1 = () => {
  return baseMeta({
    title: "Portfolio",
    description: "Minimal portfolio website for Nick Arkhipov."
  });
};
const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const featuredRef = useRef(null);
  useEffect(() => {
    const sections = [heroRef, aboutRef, featuredRef];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry2) => {
          if (!entry2.isIntersecting)
            return;
          setVisibleSections((prev) => {
            if (prev.includes(entry2.target.id))
              return prev;
            return [...prev, entry2.target.id];
          });
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );
    sections.forEach((section2) => {
      if (section2.current)
        observer.observe(section2.current);
    });
    return () => observer.disconnect();
  }, []);
  const featuredProjects = projects.filter((project) => project.showInIndex !== false).slice(0, 3);
  return /* @__PURE__ */ jsxs("div", { className: styles.home, children: [
    /* @__PURE__ */ jsxs(
      Section,
      {
        as: "section",
        className: styles.hero,
        id: "hero",
        ref: heroRef,
        "data-visible": visibleSections.includes("hero"),
        children: [
          /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsx(DisplacementSphere, {}) }),
          /* @__PURE__ */ jsxs("div", { className: styles.heroInner, children: [
            /* @__PURE__ */ jsx("p", { className: styles.kicker, children: config.role }),
            /* @__PURE__ */ jsx("h1", { className: styles.title, children: config.name }),
            /* @__PURE__ */ jsx("p", { className: styles.description, children: "This website serves as Nick Arkhipov’s portfolio." }),
            /* @__PURE__ */ jsxs("div", { className: styles.actions, children: [
              /* @__PURE__ */ jsx(Link, { prefetch: "intent", className: styles.cta, to: "/projects", children: "View Projects" }),
              /* @__PURE__ */ jsx(
                Link,
                {
                  prefetch: "intent",
                  className: styles.secondaryCta,
                  to: "/about",
                  children: "About Me"
                }
              ),
              /* @__PURE__ */ jsx(
                Link,
                {
                  prefetch: "intent",
                  className: styles.secondaryCta,
                  to: "/contact",
                  children: "Contact"
                }
              )
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      Section,
      {
        as: "section",
        className: styles.about,
        id: "about",
        ref: aboutRef,
        "data-visible": visibleSections.includes("about"),
        children: [
          /* @__PURE__ */ jsx("p", { className: styles.sectionLabel, children: "Profile" }),
          /* @__PURE__ */ jsx("h2", { className: styles.sectionTitle, children: "Professional Background" }),
          /* @__PURE__ */ jsx("p", { className: styles.aboutText, children: "Nick Arkhipov is a fashion marketer from Moscow, Russia. He was born in 1999 and studied Fashion Marketing in Dallas, Texas." })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      Section,
      {
        as: "section",
        className: styles.featured,
        id: "featured",
        ref: featuredRef,
        "data-visible": visibleSections.includes("featured"),
        children: [
          /* @__PURE__ */ jsxs("div", { className: styles.featuredHead, children: [
            /* @__PURE__ */ jsx("p", { className: styles.sectionLabel, children: "Project" }),
            /* @__PURE__ */ jsx(Link, { prefetch: "intent", className: styles.inlineLink, to: "/projects", children: "View all" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: styles.grid, children: featuredProjects.map((project) => /* @__PURE__ */ jsxs(
            Link,
            {
              prefetch: "intent",
              to: `/projects/${project.slug}`,
              className: styles.card,
              children: [
                /* @__PURE__ */ jsxs("p", { className: styles.cardMeta, children: [
                  project.category,
                  /* @__PURE__ */ jsx("span", { children: project.year })
                ] }),
                /* @__PURE__ */ jsx("h3", { className: styles.cardTitle, children: project.title }),
                /* @__PURE__ */ jsx("p", { className: styles.cardBody, children: project.summary }),
                /* @__PURE__ */ jsx("p", { className: styles.cardStatus, children: project.status })
              ]
            },
            project.slug
          )) })
        ]
      }
    ),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home,
  links,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
async function loader() {
  throw new Response(null, { status: 404, statusText: "Not found" });
}
const meta = () => {
  return [{ title: "404 | Nick Arkhipov" }];
};
function ErrorBoundary() {
  const error = useRouteError();
  return /* @__PURE__ */ jsx(Error$1, { error });
}
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  loader,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-Un9QBlhY.js?client-route=1", "imports": ["/assets/jsx-runtime-DdeXCq6m.js", "/assets/components-BNZtg1Az.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-CZMl01ZD.js?client-route=1", "imports": ["/assets/jsx-runtime-DdeXCq6m.js", "/assets/components-BNZtg1Az.js", "/assets/text-Bogl6b5c.js", "/assets/useInViewport-d-dvZKrW.js", "/assets/error-D9utLWK1.js", "/assets/useWindowSize-CR_e_8sN.js", "/assets/config-BX3vGxOX.js"], "css": ["/assets/text-DcSU-yMW.css", "/assets/error-C0_9GAhU.css", "/assets/root-DppeFaG8.css"] }, "routes/projects_.$slug": { "id": "routes/projects_.$slug", "parentId": "root", "path": "projects/:slug", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-B3j4lfTn.js?client-route=1", "imports": ["/assets/jsx-runtime-DdeXCq6m.js", "/assets/text-Bogl6b5c.js", "/assets/config-BX3vGxOX.js", "/assets/meta-Cevb6vF1.js", "/assets/projects-CRBdkuql.js", "/assets/components-BNZtg1Az.js"], "css": ["/assets/text-DcSU-yMW.css", "/assets/meta-Cx-vtk-g.css", "/assets/route-CIW7KU8k.css"] }, "routes/api.set-theme": { "id": "routes/api.set-theme", "parentId": "root", "path": "api/set-theme", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.set-theme-l0sNRNKZ.js?client-route=1", "imports": [], "css": [] }, "routes/projects": { "id": "routes/projects", "parentId": "root", "path": "projects", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-ZrTP7T1W.js?client-route=1", "imports": ["/assets/jsx-runtime-DdeXCq6m.js", "/assets/text-Bogl6b5c.js", "/assets/config-BX3vGxOX.js", "/assets/meta-Cevb6vF1.js", "/assets/projects-CRBdkuql.js", "/assets/components-BNZtg1Az.js"], "css": ["/assets/text-DcSU-yMW.css", "/assets/meta-Cx-vtk-g.css", "/assets/route-CwQbqAXJ.css"] }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-9nq6tXZZ.js?client-route=1", "imports": ["/assets/jsx-runtime-DdeXCq6m.js", "/assets/text-Bogl6b5c.js", "/assets/config-BX3vGxOX.js", "/assets/meta-Cevb6vF1.js"], "css": ["/assets/text-DcSU-yMW.css", "/assets/meta-Cx-vtk-g.css", "/assets/route-BfFQ_NKc.css"] }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-6NS8JwO8.js?client-route=1", "imports": ["/assets/jsx-runtime-DdeXCq6m.js", "/assets/text-Bogl6b5c.js", "/assets/config-BX3vGxOX.js", "/assets/meta-Cevb6vF1.js"], "css": ["/assets/text-DcSU-yMW.css", "/assets/meta-Cx-vtk-g.css", "/assets/route-C1Y1VAhZ.css"] }, "routes/home": { "id": "routes/home", "parentId": "root", "path": "home", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-B3XefyyX.js?client-route=1", "imports": ["/assets/jsx-runtime-DdeXCq6m.js", "/assets/text-Bogl6b5c.js", "/assets/config-BX3vGxOX.js", "/assets/components-BNZtg1Az.js", "/assets/meta-Cevb6vF1.js", "/assets/projects-CRBdkuql.js"], "css": ["/assets/text-DcSU-yMW.css", "/assets/meta-Cx-vtk-g.css", "/assets/route-DFOhApT6.css"] }, "routes/$": { "id": "routes/$", "parentId": "root", "path": "*", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/_-D9LLgmIq.js?client-route=1", "imports": ["/assets/jsx-runtime-DdeXCq6m.js", "/assets/text-Bogl6b5c.js", "/assets/useInViewport-d-dvZKrW.js", "/assets/components-BNZtg1Az.js", "/assets/error-D9utLWK1.js"], "css": ["/assets/text-DcSU-yMW.css", "/assets/error-C0_9GAhU.css"] }, "routes/home/route": { "id": "routes/home/route", "parentId": "root", "path": "/", "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-B3XefyyX.js?client-route=1", "imports": ["/assets/jsx-runtime-DdeXCq6m.js", "/assets/text-Bogl6b5c.js", "/assets/config-BX3vGxOX.js", "/assets/components-BNZtg1Az.js", "/assets/meta-Cevb6vF1.js", "/assets/projects-CRBdkuql.js"], "css": ["/assets/text-DcSU-yMW.css", "/assets/meta-Cx-vtk-g.css", "/assets/route-DFOhApT6.css"] } }, "url": "/assets/manifest-12905055.js", "version": "12905055" };
const mode = "production";
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v3_fetcherPersist": false, "v3_relativeSplatPath": false, "v3_throwAbortReason": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/projects_.$slug": {
    id: "routes/projects_.$slug",
    parentId: "root",
    path: "projects/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/api.set-theme": {
    id: "routes/api.set-theme",
    parentId: "root",
    path: "api/set-theme",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/projects": {
    id: "routes/projects",
    parentId: "root",
    path: "projects",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: route8
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  },
  "routes/home/route": {
    id: "routes/home/route",
    parentId: "root",
    path: "/",
    index: true,
    caseSensitive: void 0,
    module: route8
  }
};
export {
  Transition as T,
  useInViewport as a,
  useWindowSize as b,
  mode as c,
  assetsBuildDirectory as d,
  basename as e,
  future as f,
  entry as g,
  isSpaMode as i,
  media as m,
  publicPath as p,
  routes as r,
  serverManifest as s,
  useTheme as u
};
