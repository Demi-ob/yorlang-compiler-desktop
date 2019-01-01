import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// disabled because service workers doesnt allow subdomain path like courses to load
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
// registerServiceWorker();

// hide console.log in production
// window.console.log = function() {
//   // do nothing.
// };
