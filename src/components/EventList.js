import React from 'react';
import {connect} from "react-redux";
import {getEventsByFilter} from "../redux/selectors";
import EventFilter from "./EventFilter";


function EventList(props){
	const events = props.events;
	const eventList = (events && events.length) ? events.map((event)=>{
		return <div className="event" key={event.id}>
					<div className="event-head">
						<h2>{event.eventName}</h2>
						<div className="event-desc">{event.description}</div>
					</div>
					<div className="event-info">
						<h4>{event.venue}</h4>
						<h5>Price: Rs. {event.price}/-</h5>
						<h6>Discount: {event.discount} %</h6>
					</div>
				</div>
		}):
		<h2>No Events Available. Create An Event</h2>
    return(
    <div>
      	<h1 className="event-show">Events</h1>
      	{(events && events.length)? <EventFilter/> : ""}
      	{eventList}
    </div>
  );
}

function mapStateToProps(state){
	const {currentFilter} = state;
	const events = getEventsByFilter(currentFilter);
	return {events: events, currentFilter: currentFilter}
}
export default connect(mapStateToProps)(EventList);
