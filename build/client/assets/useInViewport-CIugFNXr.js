import{r as o,j as I}from"./jsx-runtime-BfF-YriY.js";import{p as r,c as N,b as F}from"./text-C1LnAB8y.js";const q="/assets/gotham-bold-italic-C_msAlmW.woff2",V="/assets/gotham-bold-D1kvQ7KV.woff2",Q="/assets/gotham-book-italic-Bm2IEtSK.woff2",_="/assets/gotham-book-Bnaws0Ef.woff2",J="/assets/gotham-medium-italic-Dok430ou.woff2",Y="/assets/gotham-medium-0VT3RO8I.woff2",Z="/assets/ipa-gothic-DimHCOud.woff2",ee={black:"oklch(0% 0 0)",white:"oklch(100% 0 0)",bezierFastoutSlowin:"cubic-bezier(0.4, 0.0, 0.2, 1)",durationXS:"200ms",durationS:"300ms",durationM:"400ms",durationL:"600ms",durationXL:"800ms",systemFontStack:"system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",fontStack:"Gotham, var(--systemFontStack)",monoFontStack:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",japaneseFontStack:"IPA Gothic, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, Hiragino Sans, Osaka, メイリオ, Meiryo, Segoe UI, sans-serif",fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,fontSizeH0:r(140),fontSizeH1:r(100),fontSizeH2:r(58),fontSizeH3:r(38),fontSizeH4:r(28),fontSizeH5:r(24),fontSizeBodyXL:r(22),fontSizeBodyL:r(20),fontSizeBodyM:r(18),fontSizeBodyS:r(16),fontSizeBodyXS:r(14),lineHeightTitle:"1.1",lineHeightBody:"1.6",maxWidthS:"540px",maxWidthM:"720px",maxWidthL:"1096px",maxWidthXL:"1680px",spaceOuter:"64px",spaceXS:"4px",spaceS:"8px",spaceM:"16px",spaceL:"24px",spaceXL:"32px",space2XL:"48px",space3XL:"64px",space4XL:"96px",space5XL:"128px",zIndex0:0,zIndex1:4,zIndex2:8,zIndex3:16,zIndex4:32,zIndex5:64},te={fontSizeH0:r(120),fontSizeH1:r(80)},ne={maxWidthS:"480px",maxWidthM:"640px",maxWidthL:"1000px",maxWidthXL:"1100px",spaceOuter:"48px",fontSizeH0:r(100),fontSizeH1:r(70),fontSizeH2:r(50),fontSizeH3:r(36),fontSizeH4:r(26),fontSizeH5:r(22)},oe={fontSizeH0:r(80),fontSizeH1:r(60),fontSizeH2:r(48),fontSizeH3:r(32),fontSizeH4:r(24),fontSizeH5:r(20)},se={spaceOuter:"24px",fontSizeH0:r(56),fontSizeH1:r(40),fontSizeH2:r(34),fontSizeH3:r(28),fontSizeH4:r(22),fontSizeH5:r(18),fontSizeBodyL:r(17),fontSizeBodyM:r(16),fontSizeBodyS:r(14)},re={spaceOuter:"16px",fontSizeH0:r(42),fontSizeH1:r(38),fontSizeH2:r(28),fontSizeH3:r(24),fontSizeH4:r(20)},ae={background:"oklch(17.76% 0 0)",backgroundLight:"oklch(21.78% 0 0)",primary:"var(--white)",accent:"var(--white)",error:"oklch(65.91% 0.249 13.76)",text:"var(--white)",textTitle:"var(--text)",textBody:"color-mix(in lab, var(--text) 80%, transparent)",textLight:"color-mix(in lab, var(--text) 60%, transparent)"},ie={background:"oklch(96.12% 0 0)",backgroundLight:"var(--white)",primary:"var(--black)",accent:"var(--black)",error:"oklch(63.17% 0.259 25.41)",text:"var(--black)",textTitle:"color-mix(in lab, var(--text) 90%, transparent)",textBody:"color-mix(in lab, var(--text) 75%, transparent)",textLight:"color-mix(in lab, var(--text) 55%, transparent)"},W={base:ee,desktop:te,laptop:ne,tablet:oe,mobile:se,mobileS:re},E={dark:ae,light:ie},O=o.createContext({}),Be=({theme:t="dark",children:e,className:n,as:s="div",toggleTheme:a,...f})=>{const u=ce(),l=!u.theme;return I.jsxs(O.Provider,{value:{theme:t,toggleTheme:a||u.toggleTheme},children:[l&&e,!l&&I.jsx(s,{className:N(n),"data-theme":t,...f,children:e})]})};function ce(){return o.useContext(O)}function w(t){return t.replace(/\s\s+/g," ")}function T(t){return w(Object.keys(t).map(e=>`--${e}: ${t[e]};`).join(`

`))}function fe(){return w(Object.keys(F).map(t=>`
        @media (max-width: ${F[t]}px) {
          :root {
            ${T(W[t])}
          }
        }
      `).join(`
`))}const ue=w(`
  @layer theme, base, components, layout;
`),le=w(`
  :root {
    ${T(W.base)}
  }

  ${fe()}

  [data-theme='dark'] {
    ${T(E.dark)}
  }

  [data-theme='light'] {
    ${T(E.light)}
  }
`),de=w(`
  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${_}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${Q}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${Y}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${J}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${V}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${q}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: IPA Gothic;
    font-weight: 400;
    src: url(${Z}) format('woff2');
    font-display: swap;
    font-style: normal;
  }
`),$e=w(`
  ${ue}

  @layer theme {
    ${le}
    ${de}
  }
`),j=o.createContext(null),X=typeof document<"u",K=X?o.useLayoutEffect:o.useEffect;class G{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const n=this.order.indexOf(e);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}function me(t){let e=new G,n=new G,s=0,a=!1,f=!1;const u=new WeakSet,l={schedule:(d,m=!1,c=!1)=>{const i=c&&a,p=i?e:n;return m&&u.add(d),p.add(d)&&i&&a&&(s=e.order.length),d},cancel:d=>{n.remove(d),u.delete(d)},process:d=>{if(a){f=!0;return}if(a=!0,[e,n]=[n,e],n.clear(),s=e.order.length,s)for(let m=0;m<s;m++){const c=e.order[m];u.has(c)&&(l.schedule(c),t()),c(d)}a=!1,f&&(f=!1,l.process(d))}};return l}const C=["prepare","read","update","preRender","render","postRender"],pe=40;function he(t,e){let n=!1,s=!0;const a={delta:0,timestamp:0,isProcessing:!1},f=C.reduce((i,p)=>(i[p]=me(()=>n=!0),i),{}),u=i=>{f[i].process(a)},l=()=>{const i=performance.now();n=!1,a.delta=s?1e3/60:Math.max(Math.min(i-a.timestamp,pe),1),a.timestamp=i,a.isProcessing=!0,C.forEach(u),a.isProcessing=!1,n&&e&&(s=!1,t(l))},d=()=>{n=!0,s=!0,a.isProcessing||t(l)};return{schedule:C.reduce((i,p)=>{const S=f[p];return i[p]=(g,k=!1,z=!1)=>(n||d(),S.schedule(g,k,z)),i},{}),cancel:i=>C.forEach(p=>f[p].cancel(i)),state:a,steps:f}}const xe=o.createContext({});function Se(t){const e=o.useRef(null);return e.current===null&&(e.current=t()),e.current}const ge=t=>t,{schedule:ye,cancel:Fe,state:Ee,steps:Ge}=he(typeof requestAnimationFrame<"u"?requestAnimationFrame:ge,!0);function ke(){const t=o.useContext(j);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:n,register:s}=t,a=o.useId();return o.useEffect(()=>s(a),[]),!e&&n?[!1,()=>n&&n(a)]:[!0]}const L={current:null},U={current:!1};function ze(){if(U.current=!0,!!X)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>L.current=t.matches;t.addListener(e),e()}else L.current=!1}function A(){const t=o.useRef(!1);return K(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function be(){const t=A(),[e,n]=o.useState(0),s=o.useCallback(()=>{t.current&&n(e+1)},[e]);return[o.useCallback(()=>ye.postRender(s),[s]),e]}class we extends o.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const s=this.props.sizeRef.current;s.height=n.offsetHeight||0,s.width=n.offsetWidth||0,s.top=n.offsetTop,s.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Re({children:t,isPresent:e}){const n=o.useId(),s=o.useRef(null),a=o.useRef({width:0,height:0,top:0,left:0});return o.useInsertionEffect(()=>{const{width:f,height:u,top:l,left:d}=a.current;if(e||!s.current||!f||!u)return;s.current.dataset.motionPopId=n;const m=document.createElement("style");return document.head.appendChild(m),m.sheet&&m.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${u}px !important;
            top: ${l}px !important;
            left: ${d}px !important;
          }
        `),()=>{document.head.removeChild(m)}},[e]),o.createElement(we,{isPresent:e,childRef:s,sizeRef:a},o.cloneElement(t,{ref:s}))}const P=({children:t,initial:e,isPresent:n,onExitComplete:s,custom:a,presenceAffectsLayout:f,mode:u})=>{const l=Se(He),d=o.useId(),m=o.useMemo(()=>({id:d,initial:e,isPresent:n,custom:a,onExitComplete:c=>{l.set(c,!0);for(const i of l.values())if(!i)return;s&&s()},register:c=>(l.set(c,!1),()=>l.delete(c))}),f?void 0:[n]);return o.useMemo(()=>{l.forEach((c,i)=>l.set(i,!1))},[n]),o.useEffect(()=>{!n&&!l.size&&s&&s()},[n]),u==="popLayout"&&(t=o.createElement(Re,{isPresent:n},t)),o.createElement(j.Provider,{value:m},t)};function He(){return new Map}function Me(t){return o.useEffect(()=>()=>t(),[])}const b=t=>t.key||"";function ve(t,e){t.forEach(n=>{const s=b(n);e.set(s,n)})}function Ce(t){const e=[];return o.Children.forEach(t,n=>{o.isValidElement(n)&&e.push(n)}),e}const Te=({children:t,custom:e,initial:n=!0,onExitComplete:s,exitBeforeEnter:a,presenceAffectsLayout:f=!0,mode:u="sync"})=>{const l=o.useContext(xe).forceRender||be()[0],d=A(),m=Ce(t);let c=m;const i=o.useRef(new Map).current,p=o.useRef(c),S=o.useRef(new Map).current,g=o.useRef(!0);if(K(()=>{g.current=!1,ve(m,S),p.current=c}),Me(()=>{g.current=!0,S.clear(),i.clear()}),g.current)return o.createElement(o.Fragment,null,c.map(h=>o.createElement(P,{key:b(h),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:f,mode:u},h)));c=[...c];const k=p.current.map(b),z=m.map(b),v=k.length;for(let h=0;h<v;h++){const x=k[h];z.indexOf(x)===-1&&!i.has(x)&&i.set(x,void 0)}return u==="wait"&&i.size&&(c=[]),i.forEach((h,x)=>{if(z.indexOf(x)!==-1)return;const R=S.get(x);if(!R)return;const H=k.indexOf(x);let y=h;if(!y){const D=()=>{i.delete(x);const B=Array.from(S.keys()).filter(M=>!z.includes(M));if(B.forEach(M=>S.delete(M)),p.current=m.filter(M=>{const $=b(M);return $===x||B.includes($)}),!i.size){if(d.current===!1)return;l(),s&&s()}};y=o.createElement(P,{key:b(R),isPresent:!1,onExitComplete:D,custom:e,presenceAffectsLayout:f,mode:u},R),i.set(x,y)}c.splice(H,0,y)}),c=c.map(h=>{const x=h.key;return i.has(x)?h:o.createElement(P,{key:b(h),isPresent:!0,presenceAffectsLayout:f,mode:u},h)}),o.createElement(o.Fragment,null,i.size?c:c.map(h=>o.cloneElement(h)))};function We(){!U.current&&ze();const[t]=o.useState(L.current);return t}const Oe=({children:t,in:e,unmount:n,initial:s=!0,...a})=>{const f=o.useRef(),u=o.useRef();return o.useEffect(()=>{clearTimeout(e?u.current:f.current)},[e]),I.jsx(Te,{children:(e||!n)&&I.jsx(Ie,{enterTimeout:f,exitTimeout:u,in:e,initial:s,...a,children:t})})},Ie=({children:t,timeout:e=0,enterTimeout:n,exitTimeout:s,onEnter:a,onEntered:f,onExit:u,onExited:l,initial:d,nodeRef:m,in:c})=>{const[i,p]=o.useState(d?"exited":"entered"),[S,g]=ke(),[k,z]=o.useState(!d),v=typeof e=="object",h=o.useRef(null),x=m||h,R=k&&c?S:!1;return o.useEffect(()=>{var y;if(k||!c)return;const H=v?e.enter:e;clearTimeout(n.current),clearTimeout(s.current),z(!0),p("entering"),a==null||a(),(y=x.current)==null||y.offsetHeight,n.current=setTimeout(()=>{p("entered"),f==null||f()},H)},[a,f,e,i,c]),o.useEffect(()=>{var y;if(S&&c)return;const H=v?e.exit:e;clearTimeout(n.current),clearTimeout(s.current),p("exiting"),u==null||u(),(y=x.current)==null||y.offsetHeight,s.current=setTimeout(()=>{p("exited"),g==null||g(),l==null||l()},H)},[S,u,g,e,l,c]),t({visible:R,status:i,nodeRef:x})};function je(t,e,n={},s=!0){const[a,f]=o.useState(!1),[u,l]=o.useState(!1);return o.useEffect(()=>{if(!(t!=null&&t.current))return;const d=new IntersectionObserver(([m])=>{const{isIntersecting:c,target:i}=m;f(c),c&&e&&(d.unobserve(i),l(!0))},n);return!u&&s&&d.observe(t.current),()=>d.disconnect()},[t,e,n,u,s]),a}export{Y as G,Oe as T,Se as a,K as b,ce as c,je as d,$e as e,Ee as f,Be as g,_ as h,ye as i,Fe as j,X as k,U as l,ze as m,ge as n,L as p,W as t,We as u};
