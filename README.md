# NBA Team Encyclopedia
---
This is a React web-based application that allows users to view basic information about each NBA (National Basketball Association) team such as where the team is located, who the team manager is, a brief history about the team and a photo related to the team. All data is supplied from The Sports DB. 


## Table of Contents
---
* [Project-Overview](#project-overview)
* [Installation](#installation)
* [Important](#important)
* [Dependencies](#dependencies)
* [Contributions](#contributions)


## Project-Overview
---
For the ***NBA Team Encyclopedia*** app, I started from scratch and used [Create React App](https://github.com/facebookincubator/create-react-app) to build my initial file structure and install the required dependencies. I added [The Sports DB API](https://www.thesportsdb.com) to provide the NBA team data. The other main features of this project include: offline capability, accessibility-friendly, and mobile responsiveness.


## Installation
---
**You will need to have Node.js downloaded in order to use this application. If you do not have it, download it from [here](https://nodejs.org/en/).**

1. Clone or download this repository from GitHub to your local machine.

2. Using terminal or a command line, enter the folder directory that was cloned or downloaded and install all project dependencies with the command `npm install`. To start the server, run the command `npm start` and a new window will start up in your browser. In the event a new window does not appear, go to `http://localhost:3000` in your browser. 

3. Once the app is running, either click on any of the view more buttons below the team logo or type in the input field located right below the header to filter through the list of teams. Clicking on the view more button below a team will take you to the details page of that team. The team details page will display the team name, a photo related to the organization, the team location, team manager, and team description. Due to the length of some of the team descriptions, you may have to scroll to get the full description. 

4. To return to the home page if you are on the team details page, click on the back arrow. 


## Important
---
This project will only run in development mode currently. It is important you follow the steps provided in [Installation](#Installation).

## Dependencies
---
* [Create-React-App](https://www.npmjs.com/package/create-react-app) boilerplate for React application.
* [React Docs](https://reactjs.org/) for React documentation.
* [TheSportsDB](https://www.thesportsdb.com) for NBA API.
* [LevelUpTuts](https://www.youtube.com/watch?v=OlVkYnVXPl0&t=201s) for filter feature. 
* [Medium - Andrew Bonner](https://medium.com/@AndrewBonner2/filter-results-with-react-f746dc7984c
) for filter feature. 
* [StackOverflow](https://stackoverflow.com/questions/43323830/react-classname-with-ternary-operator-add-class-null) for ternary JSX explanation. 
* [FontAwesome](https://www.npmjs.com/package/font-awesome) for arrow icon.


## Contributing
---
To contribute, please create a pull request that clearly details any changes made and/or the benefit of the changes that have been made. Provide an example of how this change will enhance the NBA Team Encyclopedia. 

If you need help to create a pull request, please use proper documentation such as: https://help.github.com/articles/creating-a-pull-request/ or https://help.github.com/articles/creating-a-pull-request-from-a-fork/.

Changes that fix the format of the code or remove whitespace will be politely declined.

If you find a bug, create a GitHub issue, but ensure that this same bug has not already been reported. If you need direction on how to do this, please review: https://help.github.com/articles/creating-an-issue/.