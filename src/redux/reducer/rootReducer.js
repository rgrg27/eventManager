

const initialState = {
	events:[],
	currentFilter: "all"
}

export default function(state=initialState,action){
	switch(action.type){
		case "ADDEVENT" :{
			console.log("inside reducer")
			const {events} = action.payload;
			return {...state, events: events}
		}
		case "SETFILTER" :{
			console.log("in");
			const {filter, events} = action.payload;
			return {...state, currentFilter: filter, events:events}
		}
		default :
			return state;
	}
}