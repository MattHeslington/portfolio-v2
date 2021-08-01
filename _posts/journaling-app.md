---
title: 'Journaling App'
excerpt: "A desktop and mobile journaling app written in React and React Native respectively. The app allows logged-in users to create a record of their lives through creating posts which can then be 'tagged' or assigned to a user-defined subject or category. Posts are given a geolocation and their date of creation is recorded. Posts can then be viewed independently, either by subject, date, or location."
coverImage: '/assets/blog/journal/journal.jpg'
date: '2021-07-23T05:35:07.322Z'
author:
  name: Matt Heslington
  picture: '/assets/blog/authors/avatar.jpg'
ogImage:
  url: '/assets/blog/journal/journal.jpg'
tech: ['React', 'Tailwind']
externalurl: 'https://journal-git-main-mattheslington.vercel.app/login'
---

My first major project. I have long wanted a tool to allow me record various aspects of my life, from my workout sessions and a log of the hopefully healthy meals I've eaten, to a log of nights out with friends or a record of the trips I have taken. I've wanted to be able to look back in time and see what I was doing on any given day, or view a map and have a look at places I visited and what activities I engaged in while there. An app with a clean, photo-led feed in a similar fashion to Twitter or Instagram.

There are various websites and apps that do this to a certain extent already, but none that I found had the facilities I talked about above, or if they did their user interface wasn't up to standard.

## Project Overview

The project is a SPA built in React and uses TailwindCSS for the minimalist styling. The backend is built utilising Firebase, which provides user authentication, document-style database storage and file storage for images uploaded by users. The app consumes two APIs, one to get the user's town or city given their latitude and logitude, and the second to get weather data for that town or city on the date of the post. Latitude and longitude are also used to plot posts on a Leafletjs map which automatically adjusts its boundaries to accomodate all post markers, which themselves are clickable to view specific posts. Post dates are plotted on a calendar, and again users can click on a specific date to view posts for that date.

Users assign their posts to subjects which they themselves choose. The app counts the number of posts in each subject. These subjects can have an emoji assigned to them to help distinguish between different subjects. These emojis can be changed at any time. Users can like or favourite posts and view these posts as an independent category. Posts can be edited or deleted. The app is fully internationalised using react-i18next, provides a number of welcome posts for new users which are automatically dated to the three or four dates prior to the user signing-up, and a welcome tour is given for new sign-ups to help with onboarding.

## Challenges

### Data Flow
Data flow in React normally follows a top-down structure, where a parent passes props down to its children and this data-flow is strictly one-directional. However, the way the app is structured means it essentially comprises four main components, a list of subjects or categories, a feed, map and a calendar, neither of which is a child of the other, and each must be able to react to changes in state of any of the other components. For example, let's say I select a post from July the 15th. The feed must know I've selected this date to allow it to display mosts from that date, the map must also only display posts from that date and the category list which should only show categories for posts on the selected date. Likewise, if I select a post on the map, all other components should change to reflect this. It's essentially a flat component structure as opposed to React's top-down approach.

The problem therefore was how to pass state around between components? The solution was actually quite simple. Let's say for brevity's sake we have three pieces of state, a date state, location state and a category state. In a normal React structure, these items of state would be passed down from the main app component to each of the calendar, map, feed and category components. This is fine until we change the location state for example, which would then need to be passed backup to the app component and then back down to each respective component. It doesn't work.

What we do instead is use React's Context API, which allows the implementation of a global state which all components can listen to and update accordingly on any changes. Problem solved. That is, until we look at our next challenge.

### Firebase Limitations

For example's sake let's say we have our generic query in Firebase Firestore to collect the data for all our posts. This is fine and we see all our posts in the feed. We then want to view posts just for the 'Workouts' category. Normally we would expect to be able to write something along the lines of 'show me all posts where the category is Workouts', but unfortunately Firestore does not allow for dynamic variables to be used in queries, so this rules out a traditonal query approach. What we can do instead is define the actual query as a variable, and then change that variable dependent upon the global state or what conditions the user has selected. What we do instead is say 'let the generic query = all posts' and then if a category is selected we write 'let query = the generic query *plus* where categories equal Workouts'.

### FitBounds

Probably the biggest problem I had and the one where StackOverflow was most useful was having the map automatically zoom to a level where all posts or locations were shown on the map at any one time. With all posts showing on the feed the map should show all locations, and when one particular post or a number of posts are selected the map should then adjust to show just those posts.

I was orignally intending to use mapbox.com as the map provider. However, I just couldn't get the FitBounds functionality to work or find any documentation that would solve the problem. I switched to Leafletjs, which seemed to have a larger community and more documentation, and after a lot of back and forth on StackOverflow I was able to get the FitBounds to work.

### Multiple File Uploads
