---
title: amp-brightcove
spec: https://www.ampproject.org/docs/reference/components/amp-brightcove
tags: ["media", "relay"]
---

<figure>
  <amp-brightcove
    data-url="https://www.kansascity.com/news/local/article214804870.html"
    data-account="5502557046001"
    data-key="BCpkADawqM1lDGV6T5I5sBzceCTft1iD58oboWLx2ae7B4uS6OPlWNB6lYMuwL4VclR43ZaBEDuItG0o0U5Bgdfc4oFvvAITPpbRoLVF7N_uSvmFQX3FUKgt-DXsp9DHNfTQrQfb9iDsZR_S"
    data-video-id="5808681571001"
    layout="responsive"
    width="16" height="9"></amp-brightcove>
  <figcaption>Amethyst Place at 2735A Troost Ave. provides recovery housing for women and their children.</figcaption>
</figure>

<!--more-->

Larger vendors have AMP components that they have submitted to Google. Brightcove has one and it is the current method Relay Media uses to display our video. The responsive layout is the best option for this as well, and the width and height can be set to the ratio of 16 and 9 respectivly.

**GOTCHA:** This component requires a video player id that exists in Brightcove's toolset. We cannot use our player code with this approach.

```
<amp-brightcove
  data-url="https://www.kansascity.com/news/local/article214804870.html"
  data-account="5502557046001"
  data-key="BCpkADawqM1lDGV6T5I5sBzceCTft1iD58oboWLx2ae7B4uS6OPlWNB6lYMuwL4VclR43ZaBEDuItG0o0U5Bgdfc4oFvvAITPpbRoLVF7N_uSvmFQX3FUKgt-DXsp9DHNfTQrQfb9iDsZR_S"
  data-video-id="5808681571001"
  layout="responsive"
  width="16" height="9"></amp-brightcove>
```
