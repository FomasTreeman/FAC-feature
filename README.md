Founders and Coders Feature project.
===============	


Planning
--------------
To build this project i knew i had to create the layout and all necessary elements in raw html. From there i can use styling to organise the page in an intuitive way. Then i can use Javascript to manipulate the HTML using DOM manipulation to add or create tortoises and have triggers for events. Had to figure out a way to move the tortoises from one side of the page to the other and giving each tortoise its own speed.

Building 
-------------
As building i stumbled across problems such as random speed and determinging a range for the random number generator as so that none were too slow and none were too fast. I also found triggering the winner notification at the right time to be a challenge. I had to decide when to announce the winner, whether it would be the second the winner crosses the line or when all the racers finish, i chose to do it when all the racers finished. While building i decided why have all racers animation linear when some might be faster to begin or faster at the end, so i randomised the animation timing curve.

Debugging 
---------------
Debugging took a lot of reptition to see if the random number generator for the speed was suitable. Another bug was the tortoise animation would often fly off the screen, this was because i had to subtract the length of the image from the width of the window, as it would move an image from a specific position (top left) by the end of the image the top left is at the top right of the window, therefore the rest of the image is to the right of the window. Another issue was keeping the tortoise at the end of the animation until the winner is declared. Google saved the day and suggested i use animation-fill-mode: forwards which maintains the style at the end of the animation.
