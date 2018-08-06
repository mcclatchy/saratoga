class SeriesGrid extends HTMLElement {
  /**
   * Attributes, Getters and Setters
   */

  get href() {
    return this.getAttribute("href");
  }

  set href(url) {
    this.setAttribute("href", url);
    this.render();
  }

  static baseHTML() {
    return `
    <style>
      :host {
        display: block;
        padding: 30px !important;
        background-color: #f4f4f4;
        box-shadow: inset 0px 10px 5px -9px #999, inset 0px -11px 5px -9px #999;
        max-width: 100% !important;

        --paper-shadow: 0px 0px 2px #999;
      }

      .default-header {
        text-align: center;
        margin-top: 0;
      }

      .series-grid {
        display: grid;
        grid-gap: 30px;
      }

      .title {
        font: 400 18px/1.2em "McClatchy Serif";
      }

      .card:first-child .title {
        font-size: 2.5em;
      }

      @media (min-width: 678px) {
        .series-grid {
          grid-template-columns: repeat(2, 1fr);
        }

        .card:first-child {
          grid-column: span 2;
        }
      }

      @media (min-width: 1024px) {
        .series-grid {
          grid-template-columns: repeat(3, 1fr);
        }

        .card:first-child {
          flex-direction: row;
        }

        .card:first-child figure {
          width: 50%;
        }
      }
    </style>
    <link rel="stylesheet" href="https://mcclatchy.github.io/saratoga/landing-page/components/saratoga.css">

    <slot name="intro">
      <h2 class="default-header">More from this series</h2>
    </slot>
    <section class="series-grid"></section>
    `;
  }

  static articleHTML(story) {
    return `
    <article class="card">
      <figure>
        <a href="${story.web_url}">
          <img src="${story._links.lead_media.asset.thumbnail}">
        </a>
      </figure>
      <div class="card-info">
        <h4 class="title"><a href="${story.web_url}">${story.title}</a></h4>
        <time>${story.modified_date}</time>
      </div>
    </a>
    `;
  }

  /**
   * Lifecycle callbacks
   */

  constructor() {
    super();
  }

  connectedCallback() {
    let shadow = this.attachShadow({ mode: "open" });

    // draw the base template
    let template = document.createElement('template');
    template.innerHTML = this.constructor.baseHTML();
    shadow.appendChild(template.content.cloneNode(true));

    // fetch the JSON and draw the articles
    this.render();
  }

  /**
   * Redraw the grid
   */

  async render() {
    let template = document.createElement('template');
    let grid = this.shadowRoot.querySelector(".series-grid");

    // Reset the grid
    grid.innerHTML = "";

    if(SeriesGrid.isValidURL(this.href)) {
      let response = await fetch(this.href);
      let stories = await response.json();

      stories.forEach(story => {
        template.innerHTML = this.constructor.articleHTML(story);
        grid.appendChild(template.content.cloneNode(true));
        // console.log(story);
      })
    }
  }

  /**
   * Check for valid url
   */

  static isValidURL(href) {
    let a = document.createElement("a");
    a.href = href;
    return (a.pathname)
  }
}

/**
 * Define the element
 */

customElements.define("series-grid", SeriesGrid);
