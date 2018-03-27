---
title: "<figure>"
date: 2018-03-27T13:33:28-05:00
type: "atom"
weight: 8
---

The figure element just enforces a 16:9 ratio for images that aren't and makes them responsive. With server cropping this atom may not be necessary, although it still provides a semantic benefit.

##### Example
<figure>
  <img src="https://www.kansascity.com/opinion/editorials/6yw1q3/picture205881139/ALTERNATES/LANDSCAPE_640/joshhawley">
</figure>

##### HTML
```
<figure>
  <img src="https://www.kansascity.com/opinion/editorials/6yw1q3/picture205881139/ALTERNATES/LANDSCAPE_640/joshhawley">
</figure>
```

##### CSS
```
figure {
  margin: 0;
  position: relative;
  padding-top: 56.25%;
}

figure img {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
  object-position: 50% 20%;
}

figure .video {
  /* ... tbd ... */
}
```
