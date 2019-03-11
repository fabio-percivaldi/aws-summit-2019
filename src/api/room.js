import axios from 'axios';

export async function loadRooms() {
    const response = await axios.get('https://asv5xzz3gd.execute-api.eu-west-1.amazonaws.com/dev/room');
    return response;
}

export default loadRooms;
