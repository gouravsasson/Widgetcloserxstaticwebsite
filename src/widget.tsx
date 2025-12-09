import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { WidgetProvider } from "./constexts/WidgetContext";
import "./index.css";

class ReactWidget extends HTMLElement {
  private root: ReactDOM.Root | null = null;
 private reactDispatch: any = null;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

   setDispatcher(fn: any) {
    this.reactDispatch = fn;
  }

    open() {
    this.reactDispatch?.("open");
  }


  connectedCallback() {
    const container = document.createElement("div");
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://widgetcloserxstaticwebsite.vercel.app/react-widget-uv.css";

    // Append the stylesheet and container to the Shadow DOM
    this.shadowRoot?.appendChild(link);
    this.shadowRoot?.appendChild(container);

    const agent_id = this.getAttribute("agent_id") || "";
    const schema = this.getAttribute("schema") || "";

    this.root = ReactDOM.createRoot(container);
    this.root.render(
      <React.StrictMode>
        <WidgetProvider agent_id={agent_id} schema={schema}>
          <App setDispatcher={(fn: any) => this.setDispatcher(fn)} />
        </WidgetProvider>
      </React.StrictMode>
    );
  }

  disconnectedCallback() {
    if (this.root) {
      this.root.unmount();
      this.root = null;
    }
  }
}

customElements.define("react-widget-uv", ReactWidget);
