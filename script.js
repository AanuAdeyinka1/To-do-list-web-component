class RootComponent extends HTMLElement {
  name = "app-root";
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.adoptedStyleSheets = [styles];
  }
}
