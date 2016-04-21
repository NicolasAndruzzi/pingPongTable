# Capstone Project - Deployed Link
---
https://ping-pong-table.herokuapp.com/#/

#What is The Score Boar?
    The Score Boar is an "internet of things" project created by Nico Andruzzi.  The sole intention of it's design is to improve the overall user experience of ping-pong within the Galvanize community.
#How was it built?
    The Score Boar was built in two parts:
####Part 1: The Web App
    The Score Boar was built using an Express back end utilizing a custom API.  It uses Angular on the front end in conjunction with Bootstrap(so the site will work on all mobile devices and tablets).  Also, web sockets were implemented so the back end can communicate with the front end in real time.
####Part 2: The Hardware
    The ping-pong table at Galvanize Platte has electro-mechanical components attached to it, so that users can interact with the table.  To attach the components, I used a laser engraver to cut shapes I designed out of acrylic.  With a blowtorch I heated and bent the acrylic into the shapes I desired.  I then was able to mount my electromechanical components to the acrylic, and mount the acrylic to the table with command strips so that it is completely removeable.
######The table has:
    - 2 pushbuttons on each side of the table (one to increment and one to decrement score) for a total of 4 buttons on the table.
    - A four digit 7-segment LED display on each side of the table (2 digits your score and 2 digits my score) for a total of 8 digits being controlled.
    - A touch-screen at the center of the table that is running The Score Boar website on it.  Behind this touch-screen is a Raspberry Pi which all of the components are connected to and is the 'brains' of the hardware.  This Raspberry Pi is also what allows my hardware to talk to my web app.
#How does it work?
    every time a button is pressed, the Pi sends different specialized http requests to my custom Express API.  In the express backend I keep track of these button presses and am able to calculate the score.  These scores are then displayed in real time (thanks to web sockets) to my Angular front end which users are able to see.
#Future Plans
####PDF
    I am currently creating a pdf of how I created the acrylic mounts, the circuit, and how I programmed the Pi so that other Galvanize students can add this system to the ping-pong table of their campus.
####Feature - I Want Next
    I am currently working on adding the capability for users to be able to request to be next up on the table.  This would not only add a level of convienince to the experience of waiting to play but would also allow me to track data for specific users.  This data will be utelized to determine who is the most winningest player in any specific group, and also in the building as a whole.  The next feature will also allow a galvanize member on the fourth floor to sign up for a game without having to come to the basement and stand by the table for the entire time.
####Feature - Peek At The Table
    I am also working on adding a second Raspbery Pi with a camera module to take a picture of the table every 5 seconds or so.  This will allow you to judge how crowded the ping-pong table is without having to go to the table to check it out.
#Contact Me
  I am always looking for constructive criticism and especially for any ideas on how to improve the user experience from any member of the Galvanize community!!
  If you have either, or just a question about the table, feel free to contact me (Nico Andruzzi) at NicolasAndruzzi@gmail.com












                  <!-- ORIGINAL PROPOSAL BELOW -->


<!-- ### Project Proposal
---
I would like to make the ping pong table at Galvanize an internet of things ping pong table.  I will be able to do so by adding electro-mechanical components to the physical table for users to interact with AND by creating two separately deployed websites that will interact with both the electro-mechanical components and the users.


### Technologies
---
- PostgreSQL
- Express
- Angular
- Node
- Web sockets
- Raspberry Pis
- Electro-mechanical components
- Bootstrap (functionality for tablet and mobile intended)


### MVP goals
---
On the table:
- Two pushbuttons for each player (increment and decrement score) for a total of 4 buttons
- Two 4 digit LEDs, one for each player.  Each will show your 2 digit score and your opponent's 2 digit score

On the web:
- A deployed Angular app that users will be able to interact with to:
    - See the current score of the game being played
    - Create a username, profile pic or gif, and 4 digit identifier
    - Sign up an individual player or both players to be next up on the table
    - Responsive to mobile and tablet
- A separately deployed Express app that will:
    - Manage an object that will be used by the Angular app to render the page (connected via web sockets so everything will be real time)
    - Listen for updates on button presses on the table and update the database accordingly


### Stretch goals
---
Table stretch goals:
    - Connect a touch-screen to the Raspberry Pi on the table, which would allow users to sign up for next without needing their own laptops or phones
    - Add another Raspberry Pi above the table that has a camera to take take an infinite loop of pictures to give a visual representation of how busy the table is

On the web:
- Angular app stretch goals:
    - Cache and display the pictures that the second Raspberry is taking to create a live stream
    - Show stats with collected data (Most winningest ping pong player in the building or most winning out of G-18, your personal record of all games played with scores and so on)
    - Able to receive text message when the game before yours is halfway completed
- Express app stretch goals:
    - Receive and manage the photo data from the second Raspberry Pi -->
