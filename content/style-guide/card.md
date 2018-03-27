---
title: ".card"
date: 2018-03-27T17:08:36-05:00
type: "molecule"
weight: 2
---

The .card molecule is a multi-use spacing tool. It inherits `.paper` styles and provides some additional structure. This molecule should have consistent HTML structure wherever it is used and can be used in several ways to maintain consistent spacing.	

Lead assets and figures should be placed as the first element and should be flush to the edge. Text content at the bottom should padded 15px from all edges of the card. This example stucture uses a secondary wrapper with the class `.card-info` to provide that spacing.

Each text item should have 10px of vertical space between it and the one above it, except for the first text item which should maintain the 15px rule listed above.

Lastly, timestamps should always align to the bottom of the card while maintaining the 15px padding rule on the bottom of the card. This is easily acheivable using flexbox layout.

*Note: in the beta site example, video icon code is placed in this layer and that may or may not be the appropriate spot depending on organization*

##### Example
<article class="card h1">
  <figure>
    <a href="http://localhost:1313/saratoga/sports/204966589/">
      <img src="https://www.kansascity.com/latest-news/9rd9dv/picture205954724/ALTERNATES/LANDSCAPE_640/NAIA%200320%20Clark%20RW" srcset="https://www.kansascity.com/latest-news/9rd9dv/picture205954724/ALTERNATES/LANDSCAPE_1140/NAIA%200320%20Clark%20RW 1140w"> 
    </a>
  </figure>
  <div class="card-info">
    <h6><a class="kicker" href="http://localhost:1313/saratoga/sports/">SPORTS</a></h6>
    <h1><a href="http://localhost:1313/saratoga/sports/204966589/">Graceland comeback gives Heart of America Conference its first NAIA title game appearance</a></h1>
    <p class="summary">Graceland (Iowa) beat LSU Shreveport and made history Monday in becoming the first school from the Heart of America Athletic Conference to reach an NAIA Division I men's championship game. Graceland will face LSU Alexandria for the title Tuesday.</p>
    <time>March 19, 2018 10:10 pm</time>
  </div>
</article>

##### HTML
```
<article class="card h1">
  <figure>
    <a href="http://localhost:1313/saratoga/sports/204966589/">
      <img src="https://www.kansascity.com/latest-news/9rd9dv/picture205954724/ALTERNATES/LANDSCAPE_640/NAIA%200320%20Clark%20RW" srcset="https://www.kansascity.com/latest-news/9rd9dv/picture205954724/ALTERNATES/LANDSCAPE_1140/NAIA%200320%20Clark%20RW 1140w"> 
    </a>
  </figure>
  <div class="card-info">
    <h6><a class="kicker" href="http://localhost:1313/saratoga/sports/">SPORTS</a></h6>
    <h1><a href="http://localhost:1313/saratoga/sports/204966589/">Graceland comeback gives Heart of America Conference its first NAIA title game appearance</a></h1>
    <p class="summary">Graceland (Iowa) beat LSU Shreveport and made history Monday in becoming the first school from the Heart of America Athletic Conference to reach an NAIA Division I men's championship game. Graceland will face LSU Alexandria for the title Tuesday.</p>
    <time>March 19, 2018 10:10 pm</time>
  </div>
</article>
```

##### CSS
```
.paper, .card {
  position: relative;
  background-color: white;
  box-shadow: var(--paper-shadow);
}

.paper .card {
  box-shadow: none;
}

.card {
  display: flex;
  flex-direction: column;
}

.card-info {
  padding: 15px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card-info > * {
  margin: 10px 0 0 0;
}

.card-info > :first-child {
  margin-top: 0;
}

.card-info > time {
  flex: 1;
  display: flex;
  align-items: flex-end;
}
```
