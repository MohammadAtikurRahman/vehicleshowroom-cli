#!/usr/bin/env node
const program = require("commander");
const { prompt } = require("inquirer");

const {
  addCar,
  findCar,
  removeCar,
  listOfCar,
  listOfVisitor,
} = require("./index");
// showroom question panel
const questions = [
  {
    type: "input",
    name: "modelNumber",
    message: "Write down Your Model Number: ",
  },
  {
    type: "input",
    name: "enginePower",
    message: "Write down Your Engine Power: ",
  },
  {
    type: "input",
    name: "tireSize",
    message: "Write down Your Tire Size small or medium or large: ",
  },
  {
    type: "input",
    name: "vehicleType",
    message: "Write down Your Car Type normal or sports or heavy: ",
  },
];

const questionsNormalVehicle = [
  {
    type: "input",
    name: "engineType",
    message: "Write down the engine type, oil or gas or disel: ",
  },
];

const questionsSportsVehicle = [
  {
    type: "input",
    name: "turbo",
    message: "Write yes if you want turbo or no if you not want",
  },
];

const questionsHeavyVehicle = [
  {
    type: "input",
    name: "weight",
    message: "Enter Your Engine Weight: ",
  },
];

program
  .version("1.0.0")
  .description("Command Line System for Vehicle Showroom");
program
  .command("add")
  .alias("a")
  .description("Add a car in the showeoom normal or sports or heavy")
  .action(() => {
    prompt(questions)
      .then((answers) => {
        if (answers.vehicleType === "sports") {
          answers.engineType = "oil";
          prompt(questionsSportsVehicle).then((answersSportsVehicle) => {
            answers.turbo = answersSportsVehicle.turbo;
            addCar(answers);
          });
        } else if (answers.vehicleType === "heavy") {
          answers.engineType = "diesel";
          prompt(questionsHeavyVehicle).then((answersHeavyVehicle) => {
            answers.weight = answersHeavyVehicle.weight;
            addCar(answers);
          });
        } else {
          prompt(questionsNormalVehicle).then((answersNormalVehicle) => {
            answers.engineType = answersNormalVehicle.engineType;
            addCar(answers);
          });
        }
      })
      .catch((err) => {
        console.info(err);
      });
  });

program
  .command("find <car>")
  .alias("f")
  .description("Find The car by model number or engine power ")
  .action((car) => findCar(car));

program
  .command("remove <_id>")
  .alias("r")
  .description("Remove a car from Vehicle showroom")
  .action((_id) => removeCar(_id));

program
  .command("list")
  .alias("l")
  .description("list all car in  Vehicle showroom")
  .action((_id) => listOfCar(_id));
program
  .command("visitor")
  .alias("v")
  .description("visitors in  Vehicle showroom")
  .action((_id) => listOfVisitor(_id));

program.parse(process.argv);
