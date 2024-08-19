# Scrimba Password Generator

Password generator project that test the skills of functions, conditionals, for loops, and many more basics.

Realizations and Reflections

This project has shown me that I still have not mastered the basics. The knowledge is there but I still need to return to some scrims from time to time. I also looked at the hint to get to familiarize my self to the basic structure of the project. The other progress was credited to me solving it on my own with the help of what I learned in previous lessons.

Overall, this project is working. I just would like to improve on the generate password button. I want it to clear and go back to the initial text when the generate password button is pressed without pressing clear button.

I also implemented stretch goals that Scrimba suggested: password length set by user, copy-on-click, and toggles.

---PASSWORD LENGTH---
In implementing a password length setter in the project, I did the basics of putting an input element with specified type and label for it through an ID. Additionally, I also added min and max for limits of numbers as according to the type of the input---number.

In doing the JavaScript, I learned that that I need to store the .value method of the variable from which I got using the ID to another variable. In this, I also learned that this only returns a string. Hence, I needed to store this second variable in a third variable that converts this second variable into a number using parseFloat().

---COPY-ON-CLICK---
The copy-on-click implementation was total new to me. I honestly don't know how to do it, so I just searched it up on Google and AI. There were several different code snippets I saw focusing mainly either on Clipboard API or document.execCommand.

To be honest, I'm not entirely sure which one is the one I implemented in this project. Perhaps, it's Clipboard API. Apparently, the function used in here is an arrow function. It's still quite unclear to me as to what the differences are with traditional function.

The .innerHTML seems to function like a .textContent, but this returns the text content of the element, including all spacing and inner HTML tags. Literally, an inner HTML vibe.

The navigator object (?) seems to be quite unfamiliar to me. The .clipboard property of the navigator returns a Clipboard object used to read and write the clipboard's contents. Finally, the .writeText() method writes the specified text to the system clipboard.

---TOGGLES---
This part was hard to implement. I might have to progress a little more to restart implementing this feature.