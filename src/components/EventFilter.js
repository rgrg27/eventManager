import React from "react";
import {connect} from "react-redux";

import {VISIBILITY_FILTERS} from "../constants";
import {setFilter} from "../redux/actions";

export function EventFilter(props){
  const activeFilter = props.activeFilter;
  return(
    <div className="visibility-filters">
      { Object.keys(VISIBILITY_FILTERS).map((filterKey)=>{
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return(
          <span className={currentFilter===activeFilter ? "btn event-button" : "btn"} key = {`visibility-filter-${currentFilter}`} 
            onClick={()=>props.setFilter(currentFilter)}>
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
}

function mapStateToProps(state){
  return {activeFilter: state.currentFilter}
}

export default connect(mapStateToProps, {setFilter})(EventFilter);
