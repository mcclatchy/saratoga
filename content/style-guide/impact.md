---
title: ".impact"
date: 2018-03-28T09:08:21-05:00
type: "molecule"
weight: 3
---

The impact class reverses colors to create a visual separation.

##### Example
<article class="card impact" style="max-width: 400px;">
  <div class="label sticky">
    <h5>SPORTS</h5>
  </div>
  <figure>
    <a href="http://localhost:1313/saratoga/sports/204966589/">
      <img src="https://www.kansascity.com/latest-news/9rd9dv/picture205954724/ALTERNATES/LANDSCAPE_640/NAIA%200320%20Clark%20RW" srcset="https://www.kansascity.com/latest-news/9rd9dv/picture205954724/ALTERNATES/LANDSCAPE_1140/NAIA%200320%20Clark%20RW 1140w"> 
    </a>
  </figure>
  <div class="card-info">
    <h2><a href="http://localhost:1313/saratoga/sports/204966589/">Graceland comeback gives Heart of America Conference its first NAIA title game appearance</a></h2>
    <time>March 19, 2018 10:10 pm</time>
  </div>
</article>

##### HTML
```
<article class="card impact" style="max-width: 400px;">
  <div class="label sticky">
    <h5>SPORTS</h5>
  </div>
  <figure>
    <a href="http://localhost:1313/saratoga/sports/204966589/">
      <img src="https://www.kansascity.com/latest-news/9rd9dv/picture205954724/ALTERNATES/LANDSCAPE_640/NAIA%200320%20Clark%20RW" srcset="https://www.kansascity.com/latest-news/9rd9dv/picture205954724/ALTERNATES/LANDSCAPE_1140/NAIA%200320%20Clark%20RW 1140w"> 
    </a>
  </figure>
  <div class="card-info">
    <h2><a href="http://localhost:1313/saratoga/sports/204966589/">Graceland comeback gives Heart of America Conference its first NAIA title game appearance</a></h2>
    <time>March 19, 2018 10:10 pm</time>
  </div>
</article>
```

##### CSS
```
.impact {
  background-color: var(--impact-color);
}

.impact * {
  color: white;
  border-color: white;
}

.impact .label > * {
  background-color: white;
  color: #222;
}

.impact .card {
  background-color: transparent;
  box-shadow: none;
}
```
