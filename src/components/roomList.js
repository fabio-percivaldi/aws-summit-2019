import React from 'react';
import RoomCard from './roomCard';

const RoomList = props => {
    const onClick = (id) => {
        props.onClick(id);
    }
    return (
        props.rooms.map(room =>
            <RoomCard 
                key={room.Room_ID} 
                room={room} 
                onClick={onClick}
            />
        )
    );
}

export default RoomList;