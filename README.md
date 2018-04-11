# talent-node
Backend part of the project [talent-spa](https://github.com/Victroll/talent-spa).
## Motivation
This simple backend exists for helping the frontend project about saving and loading data.
## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
### Prerequisites
In order to be able of playing with this, you need to have installed `npm` 5.6.0 at least, and that's all!
### Installing
Once you have downloaded the project, just run `npm install` to install all de dependencies of the project.
### Running
In order to run this project and test it, you only have to run the command `npm start`. This will put the application listening on the port 3210. Although is very imporbable that you have this port free, be sure of it.
## Endpoints
This application publics 3 methods:
* `/saveTalentTree` - `POST` - This method saves the talent tree sent with its own name.
* `/getTalentTreeList` - `GET` - This method returns the list (names) of all the saved talent trees. By default, there is one saved tree.
* `/getTalentTree/:name` - `GET` - This method returns the talent tree specified by `name`.

Because this application doesn't use any data base, all the saved talent trees will be lost after it is shutted down.
## Tests
For the simplicity of this app, there is no need of testing.
