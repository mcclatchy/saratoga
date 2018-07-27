---
title: amp-instagram
spec: https://www.ampproject.org/docs/reference/components/amp-instagram.html
tags: ["social", "relay"]
---

<figure>
  <amp-instagram 
    width="1" height="1" 
    layout="responsive" 
    data-shortcode="BLPLpPoBW_i"></amp-instagram>
</figure>

<!--more-->

The width/height combo in Relay's code is an example of something they do with other components like video. The two attributes end up defining the ratio of the element on the page, so if we know the element will always produce a square 1 and 1 are fine values.

Now, having said that, this approach doesn't make any sense to me because the `<amp-instagram>` element isn't square in the end.

```
<amp-instagram 
  width="1" height="1" 
  layout="responsive" 
  data-shortcode="BLPLpPoBW_i"></amp-instagram>
```
