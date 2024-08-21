# banzoin-hakka-fansite
Repository for my first website project, a fan site for the VTuber Banzoin Hakka. I worked from the tutorials in MDN's [Getting Started With the Web Guide](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web) to build this site. I used Serenade voice coding software to code the majority of this project. 

This project can be viewed at https://dandeliondays.github.io/banzoin-hakka-fansite/ 

View my ko-fi blog about Banzoin Hakka Fansite at https://ko-fi.com/post/Banzoin-Hakka-Fansite-is-live-D1D812679S

## Learning Goals:
1. **Design a simple website** that explains information about Banzoin Hakka that could be understood by someone outside the fandom who is not familiar with VTubers/live streamers
2. **Learn basic HTML and CSS** and make small upgrades to the methods described in MDN's Getting Started Guides to acheive an aesthetic result I preferred: used multiple fonts and learned to distinguish between them using the `font-weight` CSS property; tweaked the layout compared to the Guide; added an inset text box within the `<ul>` element that is centered using different `margin` CSS properties on each edge to overcome automatic `<ul>` styling; changed link styling to coordinate with website colour palette; used `id=""` attribute to target styling for `#local-time-display` and `#hakka-links` sections.
## Customizations Implemented:
1. **Added responsive behaviour to the website to improve display on mobile devices.** Used `margin: auto` and `width:auto` declarations on `body` and `img` selectors; chose to avoid using **line-height** property as directed since it was causing undesirable text wrapping behaviour on mobile devices.
2. **Replaced JavaScript name personalization example** to convert a specific time to the viewer's local device time using the [toLocaleTimeString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString) method of Date instances.
    
