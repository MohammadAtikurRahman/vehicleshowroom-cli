const mongoose = require('mongoose');
// Map global promise - get rid of warning
mongoose.Promise = global.Promise;
const DATABASE_URL = 'mongodb://localhost:27017/vehicleshowroomcli';
const DATABASE_OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
const db = mongoose.connect(DATABASE_URL, DATABASE_OPTIONS);
// Import model
const Vehicleshowroom = require('./models/vehicleshowroom');
// Add vehicleshowroom
const addCar = (vehicleshowroom) => {
    Vehicleshowroom.create(vehicleshowroom).then(vehicleshowroom => {
        console.info("New car added");
        mongoose.connection.close()
    });
}

// Find Car
const findCar = (car) => {
    const search = new RegExp(car, 'i');
    Vehicleshowroom.find({ $or: [{ modelNumber: search }, { enginePower: search }] })
        .then(vehicleshowroom => {
            console.info(vehicleshowroom);
            console.info(`${vehicleshowroom.length} matches`);
            mongoose.connection.close()
        });
}
// Remove Car
const removeCar = (_id) => {
    Vehicleshowroom.remove({ _id })
        .then(vehicleshowroom => {
            console.info('Car is Removed from Vehicle showroom');
            mongoose.connection.close()
        });
}

/**
 * List Car
 */
const listOfCar = () => {
    Vehicleshowroom.find()
        .then(vehicleshowrooms => {
            vehicleshowrooms.map(vehicle => {
                console.info('------Welcome Vehicles Showroom------');
                console.info('Vehicle id:', vehicle._id);
                console.info('Vehicle model:', vehicle.modelNumber);
                console.info('Vehicle Type:', vehicle.vehicleType);
                console.info('Engine Type:', vehicle.engineType);
                console.info('Engine Power:', vehicle.enginePower);
                console.info('Tire Size:', vehicle.tireSize);
                if (vehicle.vehicleType === "sports") {
                    console.info('Turbo available:', vehicle.turbo);
                }
                if (vehicle.vehicleType === "heavy") {
                    console.info('Engine Weight:', vehicle.weight);
                }
                console.info('------------------------------------');
            })
            console.info(`${vehicleshowrooms.length} vehicle in showroom`);
            mongoose.connection.close()
        });
}

/**
 * List Visitors
 */
const listOfVisitor = () => {
    Vehicleshowroom.find()
        .then(vehicleshowrooms => {
            vehicleshowrooms.map(vehicle => {
                if (vehicle.vehicleType === "sports") {
                    const minimumRange = vehicle.visitors + 20
                    console.info('Vehicle Type', vehicle.modelNumber);
                    console.info('Vehicle Type', vehicle.vehicleType);
                    console.info('Number of visitors:', Math.floor(Math.random() * (60 - minimumRange + 1) + minimumRange))
                }
                if (vehicle.vehicleType === "normal") {
                    const minimumRange = vehicle.visitors
                    console.info('Vehicle Type', vehicle.modelNumber);
                    console.info('Vehicle Type', vehicle.vehicleType);
                    console.info('Number of visitors:', Math.floor(Math.random() * (40 - minimumRange + 1) + minimumRange))
                }
                if (vehicle.vehicleType === "heavy") {
                    const minimumRange = vehicle.visitors
                    console.info('Vehicle Type', vehicle.modelNumber);
                    console.info('Vehicle Type', vehicle.vehicleType);
                    console.info('Number of visitors:', Math.floor(Math.random() * (40 - minimumRange + 1) + minimumRange))
                }
                console.info('------------------------------------');
            })
            console.info(`${vehicleshowrooms.length} vehicle in showroom`);
            mongoose.connection.close()
        });
}
module.exports = {
    addCar,
    findCar,
    removeCar,
    listOfCar,
    listOfVisitor
}