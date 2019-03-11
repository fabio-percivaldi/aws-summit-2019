import axios from 'axios';

export async function loadRoomBooking(roomID) {
    const response = await axios.get('https://asv5xzz3gd.execute-api.eu-west-1.amazonaws.com/dev/booking', {
            params: {
                Room_ID: roomID
        }
    });
    console.log(response)
    return response;
}

export default loadRoomBooking;
