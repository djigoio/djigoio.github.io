---
layout: post
title:  "Progressive Web Apps - The why, the how, and the why not"
date:   2019-12-19 12:48:21 +0000
categories: rails learn tutorial
---

Hey 👀✨

So... during the past few weeks, month, years... I've seen a lot of people recommending the "Way of PWA", discouraging it, and even praising it. This made me think (which I don't do much) **how the state of this "technology" is today**, in Dec 2019. What a better way to understand it, than explaining it to a thousand others, and **discuss with them**!

![Le'go](https://media.giphy.com/media/l0HU2DVgTzcuh2WT6/giphy.gif)

Allow me to add a big title underneath to start this.

#What's a PWA?#

First things first, to know if we want to to use or not an specific technology, we need to understand it, so let's get into the basics.

Imagine that you have a website, now, imagine that you could prompt the user that visits your page to install the website in its phone and send them push notifications. Now dream about your page being used by this same user when THERE IS NO INTERNET CONNECTION!

![The dream](https://media.giphy.com/media/RqbkeCZGgipSo/giphy.gif)
<figcaption> It makes you feel something like this, right? </figcaption>

Well, hold in there cowboy, not all that glitters is gold. Anyway, before we get into the cons, a little bit of theory on what exactly a PWA is.

First of all, **it is a website, with its advantages and limitations**. A website who has gained the new superpower of camouflage between native apps. (by native we speak of Apps developed specifically for an Android or iOS device)

![SUPERPOWERS](https://media.giphy.com/media/LpRZ2CCbIzsmtJyDyV/giphy.gif)

These secret super-camouflage gives to your website the advantages of:

- **Looking like a native app**: You'll be able to hide the navigator bars, change the colors of the phone task-bar to an specific one, and it also gives your ninja-website a pretty icon to show at the user's home screen, as well as a splash screen.

- **Speed**: Smooth Animations, fast scrolling and fluid navigation even on slow networks.

- **Offline mode**: The content is pre-loaded the first time you visit the PWA, and it is delivered afterwards. After the first load, it doesn’t need to request anything else from the server to deliver the content.

- **Add to home screen**: This function prompts mobile users to “install” the PWA. After the user accepts the prompt, the PWA will be added to its phone home screen, and it will run like any other installed app. (And you'll also have the possibility to add a pretty icon and a splash screen)

Basically, the progressive web application model attempts to combine features offered by most modern browsers with the benefits of mobile experience.

![Enough reading](https://media.giphy.com/media/gWFTXUNVs7YGY/giphy.gif)
<figcaption> Did you read all that? There is more from where it came, beware </figcaption>

Ther basic components you'll need for having a PWA are:

- **HTTPS**: Progressive web apps must be served over a secure server , **you need to do this** on your site before you can do anything else.

- **Manifest**: It's a JSON file that gives information about the web app. It can contain the **icon of the app**, which user generally sees after installing it in their app drawer, **background color, name and short name of the app**.

- **Service worker**: They intercept network requests and cache information in the background using JavaScript. It also can be used to load data for **offline use or sent push notifications to users**.

Once you have this three things configured in your website, you will be able to convert you not-so-fancy web page in a new and superb progressive web app! If you want to know if your website lacks of in terms of PWA, you can run the Chrome's tool [Lighthouse](https://developers.google.com/web/tools/lighthouse) to get some hints on what you need.

Now, I feel you are preapred to know the **disadvantages** this beautiful techonology has.

![Oh no.](https://media.giphy.com/media/bEVKYB487Lqxy/giphy.gif)
<figcaption>Oh no.</figcaption>

###Disadvantages###

- They can be uploaded into the [Android Play Store](https://medium.com/@firt/google-play-store-now-open-for-progressive-web-apps-ec6f3c6ff3cc), but **not into the iOS App store**.

- iOS support from version 11.3 onwards.

- It is not possible to establish a strong re-engagement for iOS users (URL scheme, standard web notifications) [yet](https://medium.com/@firt/iphone-11-ipados-and-ios-13-for-pwas-and-web-development-5d5d9071cc49). (*C'mon Apple*)

- With more and more Social Media Companies making their own **in-app browser**, it is getting difficult to promote PWA experience on social media.

- PWAs **can’t use some of the latest hardware advancements** (like fingerprint scanner), it's a browser after all!

- **Limited access to some hardware** components of the devices.

- Support for offline execution is **limited**. It may be obvious, but can serve a cached web, but do not expect a user post or buys something while being offline. (but you can queue this actions!)

![This may be you right now](https://media.giphy.com/media/1Bd7DmRvbhV5UPkoDw/giphy.gif)
<figcaption>This may be you right now.</figcaption>

As you can see, it's not an easy choice to become a PWA user, but, after reading this article, you may think that this technology is what you want, if so, **congratulations**!

I'll leave you some **interesting links at the bottom** of the post so you can enjoy the world of PWA (It's pretty easy, trust me!). A good point to start is at the [google codelab for "Your first PWA"](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/
).

Please do not hesitate into discussing in the comments below, and remember that you can **follow me** or discuss with me on my [twitter account](https://twitter.com/brownio_). :]

**And thanks for reading this!**

List of links of interesting links / bibliography:

- [A community-driven list of stats and news related to Progressive Web Apps](https://www.pwastats.com/)
- [Progressive web apps, by Google developers](https://developers.google.com/web/progressive-web-apps)
- [Fundamentals of push notifications, by Google developers](https://developers.google.com/web/fundamentals/codelabs/push-notifications)
- [Into PWA, by @sofiajonsson](https://dev.to/sofiajonsson/intro-to-progressive-web-apps-pwa-g46)
- [4 points to keep in mind before introducing PWA to your team](https://medium.com/@deepusnath/4-points-to-keep-in-mind-before-introducing-progressive-web-apps-pwa-to-your-team-8dc66bcf6011)
- [PWA vs Native apps](https://blog.magestore.com/pwa-vs-native-app/)
- [Progressive web apps book, by Jason Grigsby](https://abookapart.com/products/progressive-web-apps)