# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Atif Khan

Time spent: 18 hours spent in total

Link to project: (https://glitch.com/edit/#!/massive-golden-conifer)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Background image instead of color
- [x] The entire game is Minecraft themed so that the button images, button sounds, and background image are all based on the theme. 

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

![Completion of Game](https://user-images.githubusercontent.com/77818374/160889546-98039f5e-5204-41d3-9e66-25692ee373c4.gif)

![3 Strikes](https://user-images.githubusercontent.com/77818374/160900410-238569ec-711b-4ce8-a4be-0d4a6bceb05e.gif)

![Time Runs Out](https://user-images.githubusercontent.com/77818374/160902087-01d39702-f8a6-4b41-89a3-eb8fd98907bb.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
How I chose my color for my 5th button: https://www.w3schools.com/cssref/css_colors.asp

How I got the function for getting a random integer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

How I learned how to change the score: https://www.geeksforgeeks.org/how-to-change-the-text-of-a-label-using-javascript/

How I learned to add audio: https://programminghead.com/how-to-play-audio-in-html-using-javascript/

How I learned how to add an image to a button: https://stackoverflow.com/questions/2444894/how-to-set-background-image-in-submit-button

How I learned how setInterval and clearInterval works: https://stackoverflow.com/questions/5978519/how-to-use-setinterval-and-clearinterval

How I learned to fix the timer bug: https://stackoverflow.com/questions/9577896/my-javascript-timer-counting-down-too-fast-or-it-doesnt-start-onload

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

  A challenge that I encountered while creating this submission was setting up the timer for the amount of seconds that the player had left. Specifically, the timer went down faster than it was supposed to in subsequent turns. To try and debug this issue, I tried to logically simulate the game process in my head. I mentally linked the actions that were occuring on the web page with the JavaScript functions that were supposed to be running and then wrote it down on paper. I created a diagram of what function was running at specific points in time when the game was running. This was to figure out what was working as it was supposed to so that I can focus my debugging efforts on what wasn’t working the way it was supposed to. The main functions that I focused it down to were the startTimer() function, the playClueSequence() function, the countDown() function, and the guess() function since they directly dealt with the timer. It was especially frustrating because there was no point in the program where I speed up or slow down the amount of time the user has so I was really confused on why and how it suddenly sped up in the next turn. Then, I did some research into other people that were having similar problems on stackoverflow. From one of the posts I saw that the commenter said that they were calling setTimeout multiple times. They suggested that the person who posted the problem use the function clearTimeout(). That was when it made sense to me. Of course the time would go down twice as fast if there were 2 timers working together to decrement the time. I then planned on where I should place the clearTimeout() function in my own code and I deduced that it should be placed in the stopGame() function and in the guess() function. Specifically, in the guess function it is called when the player successfully completes a turn and when the user makes a mistake since those are the points in time where the game is supposed to reset the timer back to normal. And it worked.
	


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

  One of the main questions I have with web development is how far can I take this? I play competitive online multiplayer video games for fun so one of the things that is a staple in that environment is the leaderboard. People who have the highest scores are revered upon and everyone else views it as a challenge to take down the behemoths of the gaming world. I think it would be really cool if there was a way to invent a scoring system and then store the high scores of each individual user in some sort of database. People from all over the world can then view the leaderboard and see who is the best at the Light and Sound Memory game at any given point in time. This brings me to my next question. If people all over the world would be using my web game, how can I prevent my game from crashing due to all the traffic that would be coming over? I’ve seen first-hand how some streaming sites crash when the new episode of a popular show gets released and I’ve always wondered how the website administrators could have prevented that from happening beforehand. Finally, I’ve always wanted to know more about the error messages that appear when a website is down such as a 404 error and why they occur. For my Intro to Software Engineering class, we had to make requests to web APIs and retrieve information from them. However, the TAs made it so that not all of the endpoints we called were active so that it sent an error message back. I wonder what would have to happen to my web game for it to cause a 404 error message or other error website messages.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

  Even after spending 18 hours on my project, there is still a ton of stuff that I wanted to add. One of the things I wanted to add was more error-trapping. There’s this bug where if you start clicking buttons while the clues are still appearing, it messes the game up. For example, the next clue sequence starts playing, the timer starts while the clues are still appearing, etc. (Note that if you play the game normally i.e you wait for all the clues to finish, everything works perfectly). If I had more time, I would make it so that the user is unable to click buttons while the clues are being displayed.

Also, I would make the end of the game more interesting. For example, currently only the pop-up box appears when the game is over. I would make it so that a specific sound plays depending on whether the user wins or loses. Also, I would make a cool Minecraft related gif animation so that visually it looks more interesting.

In addition, I would add a competitive mode where there are 100 patterns total (I do not expect a person to correctly guess all the way up to 100) so that I could create a scoring system where it’s not whether you’re able to get the entire sequence of buttons, but rather how many you’re able to guess correctly.

This leads to my next feature of adding a leaderboard. I think a leaderboard would be a great addition to the competitive mode since people from everywhere and anywhere in the world could see how they stack up against other people who play the game.

There was also some repetitive code in the JavaScript file that I would have liked to refactor, such as whenever I call clearInterval, clearTimeout, and update the time left. Refactoring them into a separate function would make my code look a little cleaner.


## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [Atif Khan]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
