# Vehicleshowroom-cli

The Vehicleshowroom Command Line Interface (CLI) can be used to your Vehicleshowroom-cli project from the command line.

# : Feature List

- Add Vehicle
- Remove Vehicle
- Find Any Vehicle
- List All Vehicle
- Find Visitors

## Installation

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  lso, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###

### Yarn installation

After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

## Install Process

    $ git clone git@github.com:MohammadAtikurRahman/vehicleshowroom-cli.git
    $ cd vehicleshowroom-cli
    $ npm install
    
##  Create Symlink
    $ npm link

## Commands

**The command `vehicleshowroom-cli --help` lists the available commands and `vehicleshowroom-cli <command> --help` shows more details for an individual command.**

Below is a brief list of the available commands and their function:

## CLI view

$ vehicleshowroom-cli --help

## Options:

-V, --version output the version number

-h, --help display help for command

## Commands:

\*add|a Add a car in the showeoom normal or sports or heavy

find|f < car> Find The car by model number or engine power

remove|r <\_id> Remove a car from Vehicle showroom

list|l list all car in Vehicle showroom

visitor|v visitors in Vehicle showroom

help [command] display help for command

### Feature details

| Command     | Description                                          |
| ----------- | ---------------------------------------------------- |
| **add**     | Add a car in the showeoom normal or sports or heavy. |
| **find**    | Find The car by model number or engine power         |
| **remove**  | Remove a car by id from Vehicle showroom             |
| **list**    | Listed all the car in the vehicle showroom.          |
| **visitor** | Available Visitors in Vehicle showroom.              |

### Configuration Commands

| Command          | Description                                                  |
| ---------------- | ------------------------------------------------------------ |
| **--help,-h**    | Showing all users command to use this applications.          |
| **--version,-v** | Showing the version                                          |
| **add,a**        | Add a car in the showeoom normal or sports or heavy.         |
| **find,f**       | Find The car by model number or engine power                 |
| **remove,r**     | Remove a car bt id from Vehicle showroom                     |
| **list,l**       | list all car in Vehicle showroom                             |
| **help**         | Display help information about the CLI or specific commands. |

## Running the project

    $ npm start

## Simple build for production

## Run

- Run the gitbash
- commands

### Author

- [Md. Atikur Rahman](https://github.com/MohammadAtikurRahman)
