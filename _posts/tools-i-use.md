---
title: "Tools I Use as a Developer"
excerpt: "A brief look at some of tools I consider to be most imortant and useful when I'm developing sites and apps, and why."
coverImage: '/assets/blog/tools/tools.jpg'
date: '2021-07-25T05:35:07.322Z'
author:
  name: Matt Heslington
  picture: '/assets/blog/authors/avatar.jpg'
ogImage:
  url: '/assets/blog/bog/tools.jpg'
---

## Apps

### VS Code

Perhaps now the perfect coding experience? I've been coding for a long time, since Microsoft Frontpage infact, when we would use tables and spacer gifs for layout, and were amazed when floats became a thing. I've used a lot of coding software. Coda by Panic Software was a great piece of software. I think it had a built-in FTP client for when we used to FTP things. Coda has now been rebuilt and rebadged as the Mac-only nova.app. Other notable shoutouts go to Sublime Text and Atom, and then JetBrains range of products, and in my case Webstorm. Webstorm feels like it should be brilliant. It's an IDE for a start, and it probably is if you continue using it past its thirty-day free trial. However, there's one thing I just can't get past, and that's that it's built in Java. And it feels like it. There's a slight lag when using it, and the UI just doesn't look quite right. It feels like I'm suddenly using 1024x768 resolution again, and Windows. So, back to VS Code, built using Electron by the way. Nothing comes close to the coding experience on Visual Studo Code. Plugins galore (see the section below), themes to suit every need, fast and lightweight. I've never had a complaint with VS Code, even a moan, or have anything go wrong with it, which says a lot.

### Hyper

It's just a CLI interface I hear you say. Yes, but it's by the team who bring us NextJS and the best deployment platform in the business, Vercel. Hyper is a sleek and mininal Terminal replacement. Every project and every coding session starts in Hyper and I love it.

### Raindrop

I think I can actually trace back to a moment in time when my productivity skyrocketed. And that moment in time was when I fully adopted Raindrop as my bookmark manager. As a developer I do an awful lot of reading online, and as a consequence need to save a lot of bookmarks, and be able to find those bookmarks quickly. I of course also want an app that is beautiful to look at. Raindrop is all of these things, and comes with a generous free-tier too. Arrange your bookmarks into categories, and choose how those categories display their bookmarks. Are they displayed as a list, as cards, as headlines or even as a moodboard. Screenshots are automatically saved and displayed for each bookmark to use as a visual reference. Another almost perfect peice of software.

### Raycast

A Mac-only keyboard launcher and general productivity app. Acces almost anything on your Mac with just a few keystrokes. Supremely fast being a native mac product, I couldn't imagine not using Raycast now.

## VS Code Plugins

We all have our list of favourite plugins finely honed after years of coding - this isn't going to be a comprehensive list by any means, more a quick few words about those extensions that really help my productivity.

### Copilot

We'll start with perhaps one of the most significant plugin releases of all time. A GTP-3 OpenAI code completion tool that has had developers worrying AI is going to take their jobs. Will it? No. Is it good? Yes, yes, it's very, very good. But if you don't know what you're doing, then neither will Copilot, and you won't know if its suggestions are what you need either.

How good is it. While still early days, I have one example that comes to mind. I was recently coding the logic behind Game of Life, a procedural evolution process simulator. The code is unusual, we're not talking 'give me a function to make a Put request to an API endpoint' here. Oh no, we're talking code so complex I'd have trouble describing it here, *and copilot second-guessed the next line of code correctly over 50% of the time*. Seriously impressive, and ever so slightly creepy at the same time. One ting I can't forgive it for though - it stops VS Code auto closing my brakets and that is *painful*. Try writing multiple UseEffect hooks in React without auto-closing brackets turned on.

### Todo+

I know I have at least three Todo apps on my Mac. There might be more. Sometimes I'm using all three at once, sometimes maybe just two of them. I always use Todo+ in Visual Studio Code. Being able to both leave Todo notes per file *and* per project is an absolute must for me now, and I love not having to change app to view my todos. And you don't have to go searching through each file to see if there are any todos you havent completed, the plugin gathers them all up and puts them in a list in your sidebar along with a reference to the file they are found in. When bootstrapping a new project one fo the first things I'll do is create a readme.todo file when I store all my project wide tasks. So good this plugin stopped me using Bear, itself a great piece of software.

### ThunderClient

Postman in VS Code. What's not to like. Again, like all the things I like, fast and lightweight. Test API endpoints. Does what it says on the tin.

