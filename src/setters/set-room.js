import updater from '../file-updater.js';
import readlineSync from 'readline-sync';
import setHotel from '../set-hotel.js'
import getId from '../getters/get-id.js';
import reader from '../file-reader.js';

const setRoom = () => {
    const id = getId('data/rooms.csv')
    const roomName = readlineSync.question('Room name: ').toLowerCase().trim();
    const category = readlineSync.question('Category: ').toLowerCase().trim();
    const beds = category === 'standart' || category === 'lux' ? 2 : 4;
    const hotelToAdd = readlineSync.question('Hotel: ').toLowerCase().trim();
    const hotels = reader('data/hotels.csv');
    const filtered = hotels.filter((string) => {
        const [,name,] = string.split(';');
        return name === hotelToAdd ? true : false;
    });
    let hotelid
    if (filtered.length !== 0) {
        hotelid = filtered.at(0).split(';').at(0);
    } else {
        console.log(`Hotel ${hotelToAdd} does not exit`);
        const markToAdd = readlineSync.question('Would you like to add hotel? [y/n]');
        if (markToAdd === 'y') {
            hotelid = setHotel();
        } else return false;
    }
    updater('data/rooms.csv', `\n${id};${roomName};${category};${beds};free;${hotels};`)
}
