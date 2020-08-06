// import {addEventToLocal,updateNoteToLocal, getNotesByDate, deleteNoteById,getNoteById}  from "./selectors"
import {addEventToLocal, getEvents, getEventsByFilter}  from "./selectors"


export function addEvent(event){
	// get nextTodoId
	addEventToLocal(event);
	console.log("hi")
	const events = getEvents();
	return { type:"ADDEVENT", payload: { events }};
}

export function setFilter(filter) {
	const events = getEventsByFilter(filter)
	return{	type: "SETFILTER",	payload: {filter: filter, events: events}};
}


// export function editNote(note){	
// 	const {title,description,date,id} = note;
// 	updateNoteToLocal(title,description,date,id);
// 	const notes = getNotesByDate(date);
// 	return {type:"EDITNOTE", payload: { notes, date:date }};
// }

// export function deleteNote(id){	
// 	const note = getNoteById(id);
// 	const arr = note.date.split("/");
// 	var formatedDate = new Date(arr[2],parseInt(arr[1])-1,arr[0]);
// 	deleteNoteById(id);
// 	const notes = getNotesByDate(formatedDate);
// 	return {type:"EDITNOTE", payload: { notes, date:formatedDate }};
// }

// export function toggleEdit(id,date){
// 	const arr = date.split("/");
// 	var formatedDate = new Date(arr[2],parseInt(arr[1])-1,arr[0]);
// 	return {type:"TOGGLEEDIT",payload:{id:id,formatedDate:formatedDate}};
// }

// export function hideEdit(id,date){
// 	const arr = date.split("/");
// 	var formatedDate = new Date(arr[2],parseInt(arr[1])-1,arr[0]);
// 	return {type:"HIDEEDIT",payload:{id:id,formatedDate:formatedDate}};
// }

// export function updateDate(date){
// 	return {
// 		type:"UPDATEDATE",
// 		payload: { 
// 			date: date
// 		}
// 	};
// }
