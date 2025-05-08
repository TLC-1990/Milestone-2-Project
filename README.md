# Milestone Project 1- Memory card game using HTML, CSS and JavaScript

# Menu of contents
## 1. Deployment 
### 1. Live Site Link
### 2. Responsiveness Screenshots
## 2. Purpose of Project
## 3. User Stories
### 1. Must Haves
### 2. Should Haves
### 3. Could Haves
## 4. UX Design
## 5. UI Design
## 6. Testing
### 1. Coding Validation
### 2. Bugs Found and Resolved
## 7. Next Step Features
## 8. Coding Sources
## 9. Media sources
## 10. Acknowledgements

## 1. Deployment 
 Project was deployed using GitHub and Visual Studio.

### 1. Live Site
https://tlc-1990.github.io/Milestone-2-Project/

### 2. Responsiveness Screenshots
## 2. Purpose
To create an engaging and educational game to test a user's memory through flipping a series of cards to create matching pairs. 

## Criteria provided by Code Institute 
 
### External user’s goal: 
The site's users are keen to test their memory and responsivity skills through an engaging card game. They want to improve their score (number of moves) and might have an interest in learning the names of extinct megafauna animals. 

### Site owner's goal:
To create an engaging game to which users will return. 

### Features to include:

Site navigation should be sufficient so that use of the back button isn’t necessary.
  

### 1. Must-haves


### 2. Should-haves

### 3. Could-haves

## 4. UX Design

### Strategy
### Scope
### Structure
(See Wireframes section below)

### Skeleton
### Surface
#### Fonts

## 5. UI Design
## Initital design wireframes created using Balsamiq

### Mobile view
### Tablet view
## 6. Testing 


## 6. Testing 

Website checked on Safari and on Chrome on desktop and on IOS (Apple mobile). No bugs observed between browsers. 

W3C Markup Validation Service 
(https://validator.w3.org/) used for HTML validation

Homepage (index.html)

W3C CSS validation service
(https://jigsaw.w3.org/css-validator/) used for CSS validation.
<img src="">

Lighthouse scores

Homepage (index.html)

### 2. Bugs Found and Resolved
1.  'const board = document.getElementById('game-board');' used in game logic was overlapping with wholeGameboardArea constant previously called at start of script.js. Unecessary const board removed and wholeGameboardArea used in its place. 
2.  Unclear declarations and functions to create card arrays prevented game logic from functioning. Removed all offending code and worked through logically. 
3. Spillover JavaScript in HTML caused issue with 'click' event listeners. onClick() HTML events prevented JS responsitvity. 


## 7. Next Step Features	
## 8. Coding Sources
checkForWin() fuction- https://daynya.com/memory.html
Fisher-Yates shuffle - https://www.geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/ 
classList add and remove classes - https://sentry.io/answers/how-can-i-change-an-elements-class-with-javascript/#:~:text=toggle()%20method%20that%20will,class%20will%20only%20be%20removed.
Data cards /data sets for card identification  - https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
DOMcontentloaded https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event

AI system consulted to assist with resetGame bug as cards were not unflipping in order to start new game ahead of submission. 

## 9. Media Sources

## 10. Acknowledgements 
* Dr Raghav Kovvuri (HE Lecturer- Computing at University Centre of Peterborough) for support and advice throughout the course. 
* Iuliia Konovalova, my wonderful, knowledgeable mentor. Sorry again about the timer! 



