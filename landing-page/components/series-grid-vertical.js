class SeriesGridVertical extends SeriesGrid {
  static baseHTML() {
    return `
    <style>
      :host {
        display: block;
      }

      .default-header {
        text-align: center;
        margin-top: 0;
      }

      .title {
        font: 400 18px/1.2em "McClatchy Serif";
      }

      .card {
        flex-direction: row !important;
        padding: 15px 0;
        border-top: 1px solid #999;
        min-height: 200px;
      }

      .card figure {
        width: 200px;
      }

      .card-info {
        padding: 0 15px !important;
      }

      .card-info p {
        margin: 0 !important;
      }

      @media (max-width: 500px) {
        .card {
          min-height: 140px;
        }

        .card figure {
          width: 140px;
        }

        .card-info p {
          display: none !important;
        }
      }
    </style>

    <link rel="stylesheet" href="http://localhost:1313/components/saratoga.css">
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
        ${story.summary}
        <time>${story.modified_date}</time>
      </div>
    </article>
    `;
  }

  constructor() {
    super();
  }
}

customElements.define("series-grid-vertical", SeriesGridVertical);
