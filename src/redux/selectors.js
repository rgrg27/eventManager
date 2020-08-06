export function getEvents(){
	var localStore = window.localStorage;
	const events = localStore.getItem("events");
	var eventsArray = [];
	if(events!=null){
		eventsArray = JSON.parse(events);
	}
	return eventsArray;
}

export function addEventToLocal(event){ 
	var localStore = window.localStorage;
	var counter = parseInt(localStore.getItem("counter"));
	if(counter==null){
		counter = 0;
	}
	else{
		counter+=1;
	}
	event.id = new Date().toLocaleDateString()+counter;
	const events = getEvents();
	events.push(event);
	localStore.setItem("events", JSON.stringify(events));
	localStore.setItem("counter", counter);
}

export function getEventsByFilter(filter){
	const events = getEvents();
	switch(filter){
		case "discount" :{
			return events.filter((event)=> event.discount!=0);
		} 
		case "free" :{
			return events.filter((event)=> (event.price == 0 || event.discount ==100))
		}
		case "nodiscount" : {
			return events.filter((event)=> (event.discount == 0))
		}
		default:
			return events;
	}
}

