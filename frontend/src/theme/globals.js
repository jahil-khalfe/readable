import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

injectGlobal`
${styledNormalize};
@font-face {
  font-family: Roboto;
  font-display: optional;
}
 html, body {
  background: #6A0F49;
  font-kerning: normal;
  letter-spacing: normal;
  color: #97EFE9;
  font-family: Roboto, sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  line-height: normal;
  box-sizing: border-box;
}
`;