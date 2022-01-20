import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "./InterviewerList.scss"

export default function InterviewerList(props) {
  const { interviewers, onChange, value } = props;
  const availableInterviewers = interviewers.map((indInterviewer) => {
    return (
      <InterviewerListItem 
      key={indInterviewer.id} 
      name={indInterviewer.name}
      avatar={indInterviewer.avatar}
      selected={ indInterviewer.id === value} 
      onChange={() => onChange(indInterviewer.id)}
      />
    );
  });
  
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {availableInterviewers}
      </ul>
    </section>
  )
}