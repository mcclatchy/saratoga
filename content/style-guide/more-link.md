---
title: ".more-link"
date: 2018-03-27T16:52:33-05:00
type: "atom"
weight: 15
---

This atom displays the link to additional content with the arrow underneath digests. The arrow is appened using a UTF8 character in a CSS pseudo class.

##### Example
<a href="http://localhost:1313/saratoga/latest/" class="more-link">MORE LATEST NEWS</a>

##### HTML
```
<a href="http://localhost:1313/saratoga/latest/" class="more-link">MORE LATEST NEWS</a>
```

##### CSS
```
.more-link {
  display: flex;
  align-items: center;
  font: 500 14px/18px "McClatchy Sans";
  color: #989898;
  margin: 15px 15px 0;
}

.more-link:after, .arrow:after {
  content: "\2192";
  font-size: 20px;
  margin-left: 4px;
}
```
