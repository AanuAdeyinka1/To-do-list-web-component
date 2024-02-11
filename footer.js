class ParaGraph extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "<p>Pull from recurring lists</p>";
  }
}

customElements.define("para-graph", ParaGraph);


class ClickTab extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "<p>Daily</p>";
  }
}

customElements.define("click-tab", ClickTab);
customElements.define("click-tab2", ClickTab);
customElements.define("click-tab3", ClickTab);
customElements.define("click-tab4", ClickTab);