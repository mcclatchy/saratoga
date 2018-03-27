---
title: ".paper"
date: 2018-03-27T16:56:50-05:00
type: "molecule"
weight: 1
---

The paper simply sets a white background with a box shadow. It also has relative positioning for applying a sticky label.

##### Example
<div style="background-color: #f4f4f4; padding: 30px;">
  <div class="paper" style="min-height: 100px;"></div>
</div>

##### HTML
```
<div class="paper" style="min-height: 100px;"></div>
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
```
