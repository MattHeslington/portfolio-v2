---
title: 'Digital Marketplace'
excerpt: "A React app that allows users to sign up and list their domain names or side-projects for sale. Listings can be upvoted by logged-in users. Domains can be filtered by price, tld, industry, domain rank or upvotes. Potential purchasers can directly message domain owners and have access to a fully featured live chat application within the site. Users have a dashboard where they can view their listed and upvoted posts, and edit or delete posts."
coverImage: '/assets/blog/domains/domains.jpg'
date: '2021-07-22T05:35:07.322Z'
author:
  name: Matt Heslington
  picture: '/assets/blog/authors/avatar.jpg'
ogImage:
  url: '/assets/blog/domains/domains.jpg'
---

Following on from the Journaling app I wanted my next project to be an app which utilised a multi-user feed, and an app which incorporated some form of live chat or messaging. I also wanted to build something whereby users could pay online for a good or service.

Having often had domains of my own I wished to sell, I have always found the state of current domain marketplaces to be rather poor. Sites such as flippa.com and afternic.com in particluar offer a dated UI and overall a rather poor user experience. I originally intended this to be a simple and quick project whereby users posted their domains for sale to the site, and those were simply displayed in a form of feed and paid for the privelege of doing so. Users would be able to send their contact details to each other to facilitate a sale. However, as I built the project the scope kept growing as I bolted on extra new features

## Project Overview

The site is built in React, create-react-app, and uses Firebase for the backend, although if I were to start the project again or had the time to rebuild it I would next time opt for NextJS and MongoDB, for reasons I shall explain later. Firebase handles user authentication, file storage and data retrieval, while on the frontend I again use TailwindCSS which I adore, for the styling.

Casual users can view listed domains, but to view all of a listed domain's information they must be signed up or logged in. Users can sign up through email, Twitter, Facebook or Github - the last one as the site is primarily aimed at developers and engineers. Once signed up users must complete their profile before they have full access to the site. The site has full upvoting functionality with upvoter's avatars shown on each post, think ProductHunt, and uses modal routing for viewing domain details. The site consumes two APIs. When a domain is submitted or listed we colect useful domain information such as ranking, backlinks and redirects from host.io, and the domain age and expiry date from whoisxmlapi.com. Users have access to a dashboard where they can see upvoted domains and side-projects, while those users who have listed domains for sale have access to functions where they can edit their listing, turn listings on or off, or delete there listing. All users have an profile page which is only viewable by signed in users as we also incorporate protected routes. Once a browsing user has sent a message to a domain owner, or once a user has listed a domain for sale, they then have access to a fully-featured Inbox page where they can view their chats with each user. Chats are based on a per-listing per-user basis, so each domain or post has an unlimited number of chats associated to it.

Users pay to list on the site and Stripe is used as the payment provider. Users fill out their listing details before being taken to Stripe for payment. Once payment has been made users are directed back to a thank-you page and the entry is marked as 'paid' in the database and therefor available to view.

## Challenges

### Chat Facility

The actual mechanics behind building a chat app aren't difficult at all, it's just a CRUD app at heart. The difficulty lies in the logic, especially for this app, where users can have any number of listings, and each listing can have any number of users leaving messages for it. I literally spent a week or so mulling over the logic behind doing this, until it finally clicked, and like all the best solutions it's again quite simple. The app works on a few core principles. First, we must always remember posts belong to a user, conversations belong to a post, and messages belong to a conversation. Second, and this is important in terms of data structure, in each conversation the conversation only ever has the following two participants, and they are always distinct from one another - the post owner, and the message starter. Once we know who those two users are we're good to go. Next, a messaging app itself comprises two different functions in terms of displaying data and data structure. First there's the list of conversations, usually displaying the message sender name, time of latest message, and an excerpt of the latest message. Second is the main section where the conversation is displayed in full, the chat window.

The simplest way to do this then, especially in Firestore, is two write to two different collections each time a message is sent, to a 'newMessages' collection and also to just a 'messages' collection. The important bit is next - writing to the 'newMessages' collection *overwrites* the previous entry and the id of the document *must* be the postOwnerId+postId+conversationStarterId although in any order. This is because a user can have many posts and a post can have many conversations. When we have a new document id using the above system we know it's a new conversation. We must overwrite as any new message is just that, one new message. We iterate thorugh these documents and output the data to display all the conversations of an inbox.

The 'messages' data collection just has documents with unique ids and a bare minimum of the above fields, postId, postOwnerId and conversationStarterID, the message itself, dateCreated plus and other information you might wish to show.

### Data Structure

Firebase Firestore is a no-sql non-relational database that basically stores data in JSON format. This is great in the respect that there is no schema, and each document can have different fields. What lets it down is that you can't limk tables together so each document must hold all the information it needs. This doesn't impact on performance in terms of bandwidth but it does when you start wanting to do things beyond basic querying. Let's look at an example using this project. Users have access to a Settings page where they can, among other things, update their profile picture. Great. Now, in a 'normal' database system where you can link tables you would always just be pulling out the avatarURL from the users collection or table. However in Firestore you've stored the user's avatar as a field in each post or listed domain, in each message, and when a user upvotes a domain we store their avatar url in an object in that document. So now the user's avatar is wrong for everything they've done on the site in the past. It's not really feasible to and Firestore wont let you go through every post and every message and every upvote and update the avatar field. Nor would it be wise if you could as Firebase operates a charging method based on read and writes.

Now you'd think the best ay around this would be to name each user's avatar according to their userID, so we would always know what it was called even when it has been updated, but no, Firestore creates a unique token which is attached to the filename every time a file is uploaded, even if it is uploaded with the same name. This inherent problem with structuring data in Firebase is the primary reason I would use MongoDB if I was to rebuild the project, and it's one of the reasons I shall be using MongoDB for most future projects.

### Upvoting

Again, as with building a chat system, the functionality behind upvoting posts isn't difficult, it's just a matter of working out and putting in place the logic. If we look at the upvote button as an independent component, as we should, then we can break down the functionality. The button itself has two states, either 'liked' or 'unliked' and we change how the button looks depending on this. The button also displays the total number of likes the post or domain has received.

### Modal Routing

I love to learn new techniques, and this together with the fact that a domain name doesn't really have a lot of information that can be displayed about itself led me to implement modal routing for displaying more information about a domain. This also helps with SEO and enables the user to share a URL to their post. We could have easily just implemented a normal modal window for displaying the extra information but the user then wouldn't have a URL to share. One important feature we have to make sure is included is a fall-back page for when a modal route is loaded directly, say from a link in an email for a Twitter post. When modal routes are accessed directly from outside the app, the app can't and doesn't know the link should be opened in a modal window so therefore a 'normal' page template must be provided. In this case I managed to build a template that looked fairly similar to how the page looks when a modal is being displayed and I was quite happy with the solution.


