class BackList extends HTMLElement {
  constructor() {
    super();
//   const linkElement = document.createElement("link");
//   linkElement.rel = "stylesheet";
//   linkElement.href = "style.css";  
  const icon= (this.getElementsByTagName = "svg");
  this.innerHTML = `<h1> ${svg}</h1>`;

    this.innerHTML = "<h3>Back to List</h3>";
  }
}

customElements.define('back-list', BackList);


class TodayTo extends HTMLElement {
  constructor() {
    super();

    const icon = (this.getElementsByTagName = "svg");
    this.innerHTML = `<h1> ${svg}</h1>`;

    this.innerHTML = "<h1>TODAY</h1>";
  }
}

customElements.define("today-to", TodayTo);


class LoadTo extends HTMLElement {
  constructor() {
    super();

   

    this.innerHTML = "<div></div>";
  }
}

customElements.define("load-to", LoadTo);

class PercentAge extends HTMLElement{
    constructor() {
        super();

        this.innerHTML = "<p>33% complete</p>"
    }
}
customElements.define("percent-age", PercentAge)