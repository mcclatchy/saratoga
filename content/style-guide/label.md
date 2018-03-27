---
title: ".label"
date: 2018-03-27T15:54:12-05:00
type: "atom"
weight: 13
---

The label atom goes at the top of a digest or series of stories showing the organization of the content. It has 2 versions, a block level element that can be used in s straight stack, like the latest news stack, and an absolutely position version that can go over the lead asset of a digest.

##### Example
<div class="label">
  <h5>LATEST NEWS</h5>
</div>

##### HTML
```
<div class="label">
  <h5>LATEST NEWS</h5>
</div>
```

##### CSS
```
.label {
  display: flex;
  justify-content: center;
}

.label > * {
  margin: 0;
  padding: 5px 10px 3px 10px;
  background-color: #222;
  color: white;
  text-transform: uppercase;
}

.label.sticky {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}
```

### Alternatives

When put inside of an impact molecule, the label reverses it's colors.

##### Example
<div class="impact">
  <div class="label">
    <h5>LATEST NEWS</h5>
  </div>
</div>

