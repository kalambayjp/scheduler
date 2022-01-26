import React from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";
import { useState } from "react";

export default function Form(props) {
  const { studentName, interviewerId, interviewers, onSave, onCancel } = props;
  const [student, setStudent] = useState(studentName || "");
  const [interviewer, setInterviewer] = useState(interviewerId || null);
  // console.log("interviewerId", interviewerId);
  // function reset() {
  //   onCancel();
  //   setInterviewer('');
  //   setStudent('');
  //   return
  // }
  // console.log("interviewers-->", interviewers);
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={(e) => setStudent(e.target.value)}
          />
        </form>
        <InterviewerList
          interviewers={interviewers}
          onChange={setInterviewer}
          name="interviewer"
          value={interviewer}

        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={onCancel}>Cancel</Button>
          <Button confirm onClick={() => onSave(student, interviewer)}>Save</Button>
        </section>
      </section>
    </main>
  )
}