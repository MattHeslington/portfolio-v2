---
title: 'A Look Behind This Site'
excerpt: 'A quick look at the technology behind this site, and techniques I used to build it.'
coverImage: '/assets/blog/about/mattt.jpg'
date: '2021-07-26T05:35:07.322Z'
author:
  name: Matt Heslington
  picture: '/assets/blog/authors/avatar.jpg'
ogImage:
  url: '/assets/blog/about/mattt.jpg'
---

I wanted to make a quick replacement for my first ever portfolio site, which can still be found at [https://portfolio-mattheslington.vercel.app/](https://portfolio-mattheslington.vercel.app/), and decided to use the NextJS blog starter template, which uses Tailwind by default. Blog posts are stored in Markdown files. To this I made a number of additions.

## Dark Theme

Very easy to implement using Tailwind's built in dark theme support. The theme switch is from https://headlessui.dev/, a set of 'Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS', and built by the Tailwind team. I use this to change the colourTheme state

## Contact Form

There are quite a few serverless form data collection services out there, such as https://kwes.io/, but I can easily build this myself. The form itself is in a headlessUI modal component and I store submitted entries in MongoDB. We use Next's built in API functionality to make a post API call to send our data to Mongo, as *Mongo code will only run on a server*.

## New Hero Section
Although I generally extremely dislike using anything just for the sake of it when I am building websites or web apps, I felt my new hero section needed a little balance to complement my large header. https://lottiefiles.com/ provide lightweight and scalable animations stored in JSON format and each animation is customisable in terms of it's colours, looping, layers, etc. To switch animations when we change the colour scheme we just wrap each animation, the light and the dark, in a div, one of which is displayed for the light scheme and one for the dark scheme.

The cycling background colour behind the word 'beautiful' in the hero section is done by simply wrapping the word in a container element, in this case a span, and then giving the span a repeatable gradient background, ie. the 0% colour should be the same as the 100% colour across the plane in which it is animated. It usually works better to then increase the background size to considerably more than 100%. I've used 400% for this site. We then just give it an infinite linear animation.

## Add a Markdown CMS
The site is deployed on vercel.com, which means every time I make a change to my content in a markdown file and push to GitHub, Vercel will automaically rebuild and publish the site, showing the new changes. Howvever, to illustrate the possibilities of this type of build for real-world clients who most probably wouldn't be pushing changes to GitHub themselves I integrated https://forestry.io/. Forestry describes itself as a 'Headless CMS that commits'. Basically Forestry links to your Markdown directory through GitHub and provides a frontend based on the greymatter fields in your markdown files. Users can then create new posts on the go, which Forestry commits to Github causing the site to be updated.


## Notification System
User feedback is an important and integral part of any website or app, even a static site. I believe a good notifiction system can't make a user feel enganged and valued, and a notifcation can often be the a user's last interaction and therefore last impression of a site. There are lots of notification providers to choose from, and eventually I would like to build my own. For this site I use my current go-to to notifications, [https://mantine.dev/](mantine.dev), a React component and hooks library that provides a lot more besides. Their notifs are fully customisable, and I think they look great. Fill out the contact form to see one in action.


