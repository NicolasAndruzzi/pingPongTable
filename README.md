# Capstone Project - Deployed Link
---

* Project Proposal
---
I would like to make the ping pong table at Galvanize an internet of things ping pong table.  I will be able to do so by adding electro-mechanical components to the physical table for users to interact with AND by creating two separately deployed websites that will interact with both the electro-mechanical components and the users.


* Technologies
---
- PostgreSQL
- Express
- Angular
- Node
- Web sockets
- Raspberry Pis
- Electro-mechanical components
- Bootstrap (functionality for tablet and mobile intended)


* MVP goals
---
On the table:
- Two pushbuttons for each player (increment and decrement score) for a total of 4 buttons
- Two 4 digit LEDs, one for each player.  Each will show your 2 digit score and your opponent's 2 digit score
^^^^^^^Harder than it sounds...

On the web:
- A deployed Angular app that users will be able to interact with to:
    - See the current score of the game being played
    - Create a username, profile pic or gif, and 4 digit identifier
    - Sign up an individual player or both players to be next up on the table
    - Responsive to mobile and tablet
- A separately deployed Express app that will:
    - Manage an object that will be used by the Angular app to render the page (connected via web sockets so everything will be real time)
    - Listen for updates on button presses on the table and update the database accordingly


* Stretch goals
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
    - Receive and manage the photo data from the second Raspberry Pi
