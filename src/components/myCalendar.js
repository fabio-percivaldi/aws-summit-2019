import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import { loadRoomBooking } from '../api/booking'
import React from 'react';
const localizer = BigCalendar.momentLocalizer(moment)

class MyCalendar extends React.Component {
  state = {
    myEventsList: []
  };

    async componentDidUpdate(nextProps) {
      console.log(this.props.room)
      if (nextProps !== this.props) {
        this.fetchRooms(this.props.room);       
        this.timer = setInterval(async () => {
          this.fetchRooms(this.props.room);
        }, 5000);
      }
    }

  async fetchRooms(roomId){
    const response = await loadRoomBooking(roomId);
    this.setState({ myEventsList: response.data.body.map( x => new Event(x)) });
  }
  render() {
    return(
      <BigCalendar
        localizer = { localizer }
        events = { this.state.myEventsList }
        startAccessor = "start"
        endAccessor = "end"
      />
  ) 
  }
}

class Event {
  title;
  start;
  end;
  constructor(event) {
    this.title = event.Referencer_Name + ': ' + event.People + ' persone';
    this.start = event.Start_Date;
    this.end = event.End_Date;
  }
}
export default MyCalendar;