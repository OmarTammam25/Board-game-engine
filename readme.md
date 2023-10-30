# Board Game Engine 📌 
Welcome to the Board Game Engine project! This versatile engine is designed to streamline the development of board games, including classics like chess and checkers.
With two distinct versions. One based on Object-Oriented Programming (OOP) principles using Javascript, Html, and CSS. 
The other is based on Functional Programming (FP) principles using Scala.    
This app also features a special Prolog solver for Suduko and 8 Queens!

## How to build using the OOP version 📌
### Project Structure
The OOP version of the Board Game Engine is composed of three main modules:

**The Engine**: This module is responsible for initializing game objects and managing the game state.   
**The Controller**: The controller module is responsible for handling player movements and validating them.   
**The Drawer**: The drawer module defines how the game board looks and how each cell is drawn using HTML and CSS.   
### Getting Started
To develop your own board game using the OOP version of the Board Game Engine, follow these steps:

1. **Inherit from the Engine**:   
Create a new JavaScript file for your game, e.g., your-game.js. In this file,
define your game class and inherit from the Engine class provided by the Board Game Engine.

2. **In the Controller**:   
Define your game-specific controller methods.
- Implement createGameMoveFromInput() -> This function takes a 2d point and converts it to a gameMove object
- Implement validateMove() -> This function validates the user's move according to the game's rules and should return a boolean
- Implement makeBoardChangeAfterMove() -> This is where you'll change the state of the game board according the user's move.

3. **Initialization**:
In your-game.js implement the following:
- initializeBoardPieces -> This function puts the initial pieces into the board
- initializeCSSBoard -> Use the built in class Cell to define each cell's color using CSS. Returns a 2D array of cells

That's it! 
The Board Game Engine will handle the rendering of the board based on your CSS and provide a framework for managing the game state. 
Customize the game logic and rules to create your own board game, following the guidelines provided by the engine's architecture.

## How to Build Using the Functional Version 📌
To create a game using the functional version of the Board Game Engine, follow these simple steps:   

1. **create Your Game Controller Function:**   
This function should handle player movements, validate them, and change the game state according to your game's rules.

2. **Create Your Game Drawer Function:**   
This function is responsible for defining the game board's appearance.

3. **Pass Controller and Drawer Functions:**   
Instantiate the game engine, passing your controller and drawer functions as arguments.   


That's it! 
The Board Game Engine will handle the rendering of the board based on your Drawer function and provide a framework for managing the game state. 
Customize the game logic and rules to create your own board game, following the guidelines provided by the engine's architecture.

## GUI Screenshots
![image](https://github.com/OmarTammam25/Board-game-engine/assets/96181216/c9c35e77-fb5e-4003-bdf5-de2421ffcfe7)

![image](https://github.com/OmarTammam25/Board-game-engine/assets/96181216/7c65c3b7-d9ed-4b62-8ee3-37cbf660c3f9)

![image](https://github.com/OmarTammam25/Board-game-engine/assets/96181216/bd99aa67-55eb-47c1-a224-cd6f1dacab78)

![image](https://github.com/OmarTammam25/Board-game-engine/assets/96181216/e2017e59-97f1-456e-a074-ba53ef5d3707)

![image](https://github.com/OmarTammam25/Board-game-engine/assets/96181216/74931400-a9f1-4356-8099-19d79df9dc11)

