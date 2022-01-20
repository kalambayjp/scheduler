import React from "react";
import classNames from "classnames";
import "./InterviewerListItem.scss"

export default function InterviewerListItem (props) {
  const {name, avatar, selected, onChange} = props;
  const liClass = classNames({"interviewers__item": !selected},  {"interviewers__item--selected": selected});


  return (
    <li className={liClass} onClick={onChange}>
    <img
      className="interviewers__item-image"
      src={avatar}
      alt={name}
    />
    {selected && name}
  </li>
  )
}