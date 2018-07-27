---
title: amp-twitter
spec: https://www.ampproject.org/docs/reference/components/amp-twitter.html
tags: ["social", "relay"]
---

<figure>
  <amp-twitter width="390" height="300" layout="responsive" data-tweetid="1021653510318948352"><blockquote class="twitter-tweet" data-lang="en" placeholder=""><p>I&#x2019;m still here y&#x2019;all  <a href="https://t.co/gb6cmaVv6H">https://t.co/gb6cmaVv6H</a></p>&#x2014; Sam I Am (@SamCunliffe_3) <a href="https://twitter.com/SamCunliffe_3/status/1021653510318948352?ref_src=twsrc%5Etfw">July 24, 2018</a></blockquote></amp-twitter>
</figure>

<!--more-->

Twitter has it's own component. Relay is adding the blockquote placeholder, but it's not required.

```
<amp-twitter 
  width="390" height="300" 
  layout="responsive" 
  data-tweetid="1021653510318948352">
  <blockquote class="twitter-tweet" data-lang="en" placeholder="">
    <p>I&#x2019;m still here y&#x2019;all  <a href="https://t.co/gb6cmaVv6H">https://t.co/gb6cmaVv6H</a></p>
    &#x2014; Sam I Am (@SamCunliffe_3) <a href="https://twitter.com/SamCunliffe_3/status/1021653510318948352?ref_src=twsrc%5Etfw">July 24, 2018</a>
  </blockquote>
</amp-twitter>
```
