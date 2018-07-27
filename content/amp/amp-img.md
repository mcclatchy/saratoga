---
title: amp-img
spec: https://www.ampproject.org/docs/reference/components/amp-img
tags: ["media", "relay"]
---

<figure>
  <amp-img
    src="http://www.kansascity.com/latest-news/ounp20/picture215018250/alternates/LANDSCAPE_640/AMETHYST%2020180712%20KAM%20238F"
    srcset="
    http://www.kansascity.com/latest-news/ounp20/picture215018250/alternates/LANDSCAPE_480/AMETHYST%2020180712%20KAM%20238F 480w,
    http://www.kansascity.com/latest-news/ounp20/picture215018250/alternates/LANDSCAPE_640/AMETHYST%2020180712%20KAM%20238F 640w,
    http://www.kansascity.com/latest-news/ounp20/picture215018250/alternates/LANDSCAPE_960/AMETHYST%2020180712%20KAM%20238F 960w,
    http://www.kansascity.com/latest-news/ounp20/picture215018250/alternates/LANDSCAPE_1140/AMETHYST%2020180712%20KAM%20238F 1140w"
    layout="responsive"
    width="640" height="359"></amp-img>
  <figcaption>Seven-year-old Athenia Smith rides her bike around the central courtyard at Amethyst Place, 2735A Troost Ave. She and her mother have lived for two months at Amethyst Place, which provides recovery housing for women and their children. | Keith Myers kmyers@kcstar.com</figcaption>
</figure>

<!--more-->

This component is a straight swap for the `<img>` tag, and is the only valid way to show an image on an AMP page. The responsive layout is standard for this component, so both the width and the height are generally required.

```
<amp-img
  src="http://www.kansascity.com/latest-news/ounp20/picture215018250/alternates/LANDSCAPE_640/AMETHYST%2020180712%20KAM%20238F"
  srcset="
  http://www.kansascity.com/latest-news/ounp20/picture215018250/alternates/LANDSCAPE_480/AMETHYST%2020180712%20KAM%20238F 480w,
  http://www.kansascity.com/latest-news/ounp20/picture215018250/alternates/LANDSCAPE_640/AMETHYST%2020180712%20KAM%20238F 640w,
  http://www.kansascity.com/latest-news/ounp20/picture215018250/alternates/LANDSCAPE_960/AMETHYST%2020180712%20KAM%20238F 960w,
  http://www.kansascity.com/latest-news/ounp20/picture215018250/alternates/LANDSCAPE_1140/AMETHYST%2020180712%20KAM%20238F 1140w"
  layout="responsive"
  width="640" height="359"></amp-img>
```
