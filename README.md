# Flower-shop
A simple flower shop

### Quality Control Tools

- [Mocha](https://mochajs.org/) and [Chai](chaijs.com) for unit testing
- [Flow](https://flow.org/) to provide Type checking
- [eslint](http://eslint.org/) for code linting

### Technologies

- [Babel](https://babeljs.io/) Node does not yet support the module ES6 syntax. Babel provides a mechanism for us to compile code so this feature can be used. It's a much more concise and powerful way to express modules
- [Docker](https://www.docker.com/) So you don't need to have the correct version of node locally

### Notes and design decisions

- Personal Preference for a functional style approach over OO
- the Order builder were intentionally designed in an attempt to be agnostic to different types of inventories and pricing strategies
- Testing achieved by static type analysis as well as unit tests for modules which contained logic, and finally linting.
- Invalid orders are funneled into a invalid array, which we silently strip from orders.
- output is just a console.log of the app output as it was mentioned that output wasn't important.
- Commits are logical and should all pass the tests and run the app at any stage, they can be followed individually to see how I arrived at the solution.


## Using Docker

`docker-compose build` Will build the image

`docker-compose start` Will run the application 

`docker-compose test` Will run the tests

## Running locally

### Pre-requisites
This project was built using Node 8.1.4 you can use a version manager to install it 
such as NVM. follow the instructions here
 
> https://github.com/creationix/nvm/blob/master/README.md#install-script

To then install the correct version of node:

`nvm install`

Which will use the version specified in the .nvmrc file. 

### Running the project

`npm run start` Will start the flower shop application

`npm run test` Will lint, type check and test the application


