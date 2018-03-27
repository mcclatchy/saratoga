---
title: "<input>, <select>"
date: 2018-03-27T14:34:14-05:00
type: "atom"
weight: 9
---

Inputs always stack up and fill 100% of their container width. Should they always have a white background and black text?

##### Example
<input type="email" name="email" placeholder="Email Address">
<input type="submit" value="SUBSCRIBE">

##### HTML
```
<input type="email" name="email" placeholder="Email Address">
<input type="submit" value="SUBSCRIBE">
```

##### CSS
```
input, select {
  display: block;
  width: 100%;
  border: none;
  background-color: white;
  color: #222 !important;
  font-size: 14px;
  padding: 13px;
  box-sizing: border-box;
}

input[type=submit] {
  width: auto;
  padding: 0;
  background-color: transparent;
  color: inherit !important;
}
```
