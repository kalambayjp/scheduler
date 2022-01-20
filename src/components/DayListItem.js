import React from "react";
import classNames from "classnames";
import "./DayListItem.scss"


export default function DayListItem(props) {
  const {name, selected, onchange, spots} = props;
  const listClass = classNames("day-list__item", {"day-list__item--selected": selected}, {"day-list__item--full": spots === 0});
  let spotsString = "spots remaining"
  
  const formatSpots = (spots) => {
    if (spots === 1) {
      spotsString = "spot remaining";
    } else if (spots === 0) {
      spotsString = "no spots remaining"
    }
  };
  formatSpots(spots);

  return (
    <li className={listClass} onClick={() => onchange(name)} >
      <h2 className="text--regular">{name}</h2> 
      <h3 className="text--light" >{spots ? spots : ""} {spotsString}</h3>
    </li>
    
  );
}