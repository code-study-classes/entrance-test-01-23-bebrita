import updater from "../file-updater.js";
import getId from "../getters/get-id.js";
import readlineSync from 'readline-sync';
import reader from "../file-reader.js";
import setRegion from "./set-region.js";

const setHotel = () => {
    const newHotel = readlineSync.question('New hotel: ').toLowerCase().trim();
    const id = getId('data/hotels.csv');
    const regionToAdd = readlineSync.question('Region ').toLowerCase().trim();
    const regions = reader('data/regions.csv');
    const filtered = regions.filter((string) => {
        const [, name]= string.split(';');
        return name === regionToAdd ? true : false;
    });
    console.log(filtered);
    // регион существует и все ок
    let regionId;
    if (filtered.length !== 0) {
        regionId = filtered.at(0).split(';').at(0);
    } else {
        console.log(`Region ${regionToAdd} does not exist.`);
        const markToAdd = readlineSync.question('Would you like to add region? [y/n]').toLowerCase().trim();
    // пользователь параллельно хочет добавить новый регион
        if (markToAdd === 'y') {
            regionId = setRegion(regionToAdd);
        } else {
            return false;
        }
    };
    updater('data/hotels.csv', `\n${id};${newHotel};${regionId}`);
    // пользователь опечатался и такого региона нет
    return true;

    };

setHotel();

export default setHotel;