export { default as Button } from "./Button";
export { default as Card } from "./Card";
export { default as Container } from "./Main";
export { default as Content } from "./Content";

// This is just to appease Vercel Now deploy :( https://github.com/vercel/next.js/issues/7836
const Named = () => <div />;
export default Named;
