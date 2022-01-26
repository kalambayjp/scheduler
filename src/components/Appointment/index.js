import React from "react";
import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import { useVisualMode } from "hooks/useVisualMode.js"
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";

export default function Appointment(props) {
  const { time, bookInterview, interview, interviewers, id, cancelInterview } = props;

  // console.log("id", id)

  const text = time ? `Appointment at ${time}` : `No Appointments`;
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE"
  const SAVING = "SAVING"
  const DELETING = "DELETING"
  const CONFIRM = "CONFIRM"
  const EDIT = "EDIT"
  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY);

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING)
    bookInterview(id, interview)
      .then(() => {
        transition(SHOW)
      })
  }

  function Delete() {
    transition(CONFIRM)
  }

  function confirmedDelete(id) {
    transition(DELETING)
    cancelInterview(id)
      .then(() => transition(EMPTY))
  }

  function edit() {
    transition(EDIT);
  }

  return (
    <article className="appointment">
      {text}
      <Header time={time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={interview.student}
          interviewer={interview.interviewer.name}
          onDelete={Delete}
          onEdit={edit}
          id={id}
        />
      )}
      {mode === CREATE && <Form interviewers={interviewers} onSave={save} onCancel={back} />}
      {mode === EDIT && (
        <Form
          interviewerId={interview.interviewer.id}
          studentName={interview.student}
          interviewers={interviewers}
          onSave={save}
          onCancel={back}
        />)
      }

      {mode === SAVING && <Status message="Saving" />}
      {mode === DELETING && <Status message="Deleting" />}
      {mode === CONFIRM && <Confirm id={id} message="Are you sure you would like to delete?" onCancel={back} onConfirm={confirmedDelete} />}

    </article>
  )
}