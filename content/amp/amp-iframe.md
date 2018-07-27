---
title: amp-iframe
spec: https://www.ampproject.org/docs/reference/components/amp-iframe
tags: ["media", "relay"]
---

<figure>
  <amp-iframe 
    resizable="" 
    layout="responsive" 
    src="https://cdnapisec.kaltura.com/p/591531/sp/59153100/embedIframeJs/uiconf_id/6740162/partner_id/591531?iframeembed=true&amp;playerId=kaltura-player-9999999999-37170514248377304&amp;entry_id=0_xfrlx29b" 
    width="16" height="9" 
    frameborder="0" 
    allowfullscreen 
    sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation" 
    data-block-on-consent="">
    <span placeholder=""></span>
    <span overflow="">More</span>
  </amp-iframe>
  <figcaption></figcaption>
</figure>

<!--more-->

The `<amp-iframe>` component is the generic catch-all for everything external that doesn't have its own component. I highly recommend reading the reference page, because there are attribute requirements that Relay Media is adding and aren't typically included with most embeddable snippets.

```
<amp-iframe 
  resizable="" 
  layout="responsive" 
  src="https://cdnapisec.kaltura.com/p/591531/sp/59153100/embedIframeJs/uiconf_id/6740162/partner_id/591531?iframeembed=true&amp;playerId=kaltura-player-9999999999-37170514248377304&amp;entry_id=0_xfrlx29b" 
  width="560" height="395" 
  frameborder="0" 
  allowfullscreen 
  sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation" 
  data-block-on-consent="">
  <span placeholder=""></span>
  <span overflow="">More</span>
</amp-iframe>
```
