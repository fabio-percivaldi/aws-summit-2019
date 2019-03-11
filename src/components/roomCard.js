import React from 'react';
import myCalendar from './myCalendar'


const RoomCard = props => {

    async function loadRoom() {
        props.onClick(props.room.Room_ID);
    };

    return (
        <li className="nav-item room-card">
            <label className="nav-link" onClick={loadRoom} >
                <i className="fas fa-home">Stanza: {props.room.Room_Number}</i> 
            </label>
        </li>
    );
}

export default RoomCard;