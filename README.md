# Beep Boop!

#### Epicodus solo project 4/5/19

#### By **Liz Kelley**

## Website
[Beep Boop!](https://jesusridesthebus.github.io/beep-boop/)

## Description

This web application takes a number from a user and returns a range of numbers from 0 to the user inputted number, with the following exceptions:

* Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
* Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
* Numbers that contain a 3: all digits are replaced (all digits) with "I'm sorry, Dave. I'm afraid I can't do that."

These exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third. So, for example, in the finished program:

* The number 13 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."
* The number 21 should be replaced with "Boop".
* The number 32 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."

| Behavior | Input | Output | 
| ------------- |:-------------:| -----:| 
| A number will return an array of numbers from 0 up to that number | 5 | 0, 1, 2, 3, 4, 5 | 
| Any numbers in the array that include 3 will be replaced with "I'm sorry Dave. I'm afraid I can't do that." | 5 | 0, 1, 2, I'm sorry Dave. I'm afraid I can't do that. 4, 5 | 
| Any numbers in the array that include 2 will be replaced with Boop! | 2 | 0, 1, Boop! | 
| Any numbers in the array that include 1 will be replaced with Beep! | 1 | 0, Beep! | 
| Any numbers in the array that include any combination of 3, 2, or 1 will defer to the rule attached to the highest of these 3 digits | 21 | 0, Beep! Boop! I'm sorry Dave. I'm afraid I can't do that. 4, 5, 6, 7, 8, 9, Beep! Beep! Boop! I'm sorry Dave. I'm afraid I can't do that. Beep! Beep! Beep! Beep! Beep! Beep! Boop! Boop! | 

## Setup/Installation Requirements

Internet browser, preferably Chrome

## Known Bugs

None

## Support and contact details

123@123.com

## Technologies Used

HTML, CSS, Javascript, Jquery, Bootstrap

Copyright (c) 2019 **Liz Kelley**