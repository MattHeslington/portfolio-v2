---
title: "Game of Life"
excerpt: "Building John Conway's Game of Life in React. Game of life is a procedural simulation of an evolutionary process. Simply activate cells on the grid and start the simulation. Cells live or die according to the following rules. Any live cell with fewer than two or more than three live neighbours dies (overpulation). Any dead cell with exactly three live neighbours becomes a live cell (reproduction)."
coverImage: '/assets/blog/game/game-of-life.jpg'
date: '2021-07-21T05:35:07.322Z'
author:
  name: Matt Heslington
  picture: '/assets/blog/authors/avatar.jpg'
ogImage:
  url: '/assets/blog/game/game-of-life.jpg'
tech: ['React', 'Tailwind']
githublink: 'https://github.com/MattHeslington/game-of-life'
externalurl: 'https://game-of-life-sage.vercel.app/'
---

Ever since reading about Richard Dawkin's biomorph simulation in his book The Blind Watchmaker I have been facinated by the idea of building a simulated environment in which randomness combined with a set of rules interact to simulate procedural evolution. Around six months ago I heard about the scientist John Conway's Game of Life, and it intrigued me immediately. The premise is users place 'cells' on a grid in any configuration they wish, and then start the simulation which follows two basic rules: A 'live' cell, ie a selected or highlighted cell, with fewer than two or more than three live neighbours dies, and a any dead cells with exactly three live neighbours becomes a live cell. The simulation can give rise to some fascinating scenarios.

I sincerely believe that following courses or tutorials in which the subject matter is above my current ability or level of understanding is a valuable way to learn new skills. When I started out relearning contemporary web devlopment at the start of the Covid outbreak I was doing every course and tutorial I could get my hands on. If it sounded interesting, I did it. I was doing things like building backends with Express and Mongoose when at the time I didn't even understand what they were, build simple mobile apps when I didn't know the difference between React Native and Expo, fetching data from APIs while having no idea about Axios or a web browser's native fetch function. You get the idea. However, further down the line, things I'd learned doing those tutorials came back to me, little fragments of knowhow came back to form a greater whole.

Which is all a long way to go about saying I didn't write the code for this project. Rather, I followed an excellent tutorial by the very talented Ben Awad and built a UI around it. I'm desperately hoping some of the insane knowledge Ben used on this project will rub off on me 'further down the line'.

