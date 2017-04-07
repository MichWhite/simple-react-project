# Assignment 1 - ReactJS app.

Name: Micheailn White

## Overview.
This react application allows users to create a game review, which other users of the site can see, edit and delete. Users also can search for a certain game or filter alphabetically or filter by Age Rating. There are three simple routes which are  

 . . . . . List of user features (excluding user registration and authentication) . . . . 
 
 + Create a Review 
 + Update an exisiting Review.
 + Delete an Exsisting Review
 + Search for a Game
 + Filter alphabetically
 + Filter By Age Rating

## Installation requirements.

+ ReactJS v15.3.0
+ Bootstrap 3
+ create-react-app tool
+    firebase 3.7.4
+   react-bootstrap 0.30.8
+   react-dom 15.4.2
+   react-router 3.0.2
+   reactstrap 4.2.0


If the firebase database is connected in time you will need to get user credentials from https://firebase.google.com/docs/database/web/start.
npm install firebase
npm install 
npm start


## Data Model Design.

This is just a sample of the data that will be added, updated and deleted.
 {
        "id": 1,
        "name": "Mario Bros",
        "review": "Classic",
        "price": "20.99",
        "age": 3,
        "platform": "WII"
    },
+ id = Unique Id for each data object. 
+ name = The name of the Game being reviewed.
+ review = The users Review of the game (what they make of the game).
+ price = The current Price of the game.
+ age = The Age Rating for the Game.
+ platform = The Platform in which this review was based on Eg. XBOX ONE, PS4, PC, WII 



Use meaningful sample data. Briefly explain any non-trivial issues.

## App Component Design.

A diagram showing the app's hierarchical component design (see example below). 

![][hierarchyimage]

## UI Design.

The design is simple so that not tech savy people are able to use it with ease.

![][UIimage]

## Routing.


+ /about - A short paragraph about the website.
+ /contact - Contact page that supplies 
+ / - The Main Review Page where users can add, edit, delete a record

## Extra features

IF I have enough time a database will be implemented to store all the data.
Also if I have enough time a registartion and sign in feature will be implemented.

## Independent learning.

The Login and Database would be indpendent learning but as I stated before these will only be implemented if there i time to do so.


[hierarchyimage]: ./hierarchy.jpg
[UIimage]: ./UI.jpg