import React from 'react';
import { NavLink } from 'react-router-dom';
import './dashboard.css';

export function Dashboard() {
  const [sessions, setSessions] = React.useState(
    JSON.parse(localStorage.getItem('sessions')) || [
      { id: 1, course: 'CS 260 Midterm Review', date: '2026-10-26', time: '18:00', location: 'HBLL Room 3102' },
      { id: 2, course: 'Calc 2 Problem Set', date: '2026-10-28', time: '16:00', location: 'Talmage 201' },
      { id: 3, course: 'Biology Flashcard Party', date: '2026-10-29', time: '19:30', location: 'Widtsoe Lounge' },
    ]
  );

  const [course, setCourse] = React.useState('');
  const [date, setDate] = React.useState('');
  const [time, setTime] = React.useState('');
  const [location, setLocation] = React.useState('');

  function createSession(e) {
    e.preventDefault();
    const newSession = { id: Date.now(), course, date, time, location: location || 'TBD' };
    const newSessions = [...sessions, newSession];
    setSessions(newSessions);
    localStorage.setItem('sessions', JSON.stringify(newSessions));
    setCourse('');
    setDate('');
    setTime('');
    setLocation('');
  }

  const [openSessions, setOpenSessions] = React.useState(
    JSON.parse(localStorage.getItem('openSessions')) || [
      { id: 101, course: 'Chem 106 Lab Prep', date: '2026-10-30', time: '17:00', location: 'Benson 150' },
      { id: 102, course: 'Stats 221 Homework Help', date: '2026-11-01', time: '15:00', location: 'TMCB 1170' },
      { id: 103, course: 'English 251 Essay Workshop', date: '2026-11-02', time: '13:00', location: 'JFSB B192' },
    ]
  );

  function joinSession(session) {
    const newSessions = [...sessions, session];
    setSessions(newSessions);
    localStorage.setItem('sessions', JSON.stringify(newSessions));

    const newOpen = openSessions.filter((s) => s.id !== session.id);
    setOpenSessions(newOpen);
    localStorage.setItem('openSessions', JSON.stringify(newOpen));
  }

  /* !!Resource Management */
  const [resources, setResources] = React.useState(
    JSON.parse(localStorage.getItem('resources')) || [
      { name: 'CS260_html_notes.pdf', uploader: 'Jordan P.' },
      { name: 'Calc2_final_formulas.docx', uploader: 'Sam R.' },
    ]
  );
  const [fileName, setFileName] = React.useState('');
  /* Resource Upload */
  function uploadResource(e) {
    e.preventDefault();
    const newResources = [...resources, { name: fileName, uploader: localStorage.getItem('userName') }];
    setResources(newResources);
    localStorage.setItem('resources', JSON.stringify(newResources));
    setFileName('');
    e.target.reset();
  }

  /* Live Updates */
  const [liveUpdates, setLiveUpdates] = React.useState([]);

  return (
    <main className="dashboard">
      <section className="wide">
        <h2>Your Upcoming Study Sessions</h2>
        {/* Database data placeholder: study sessions the user has joined */}
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Course</th>
              <th>Date</th>
              <th>Time</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((s) => (
              <tr key={s.id}>
                <td><NavLink to="/session">{s.course}</NavLink></td>
                <td>{s.date}</td>
                <td>{s.time}</td>
                <td>{s.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Form for creating a new study session */}
      <section>
        <h2>Create a Study Session</h2>
        <form onSubmit={createSession}>
          <label htmlFor="courseName">Course:</label>
          <input type="text" id="courseName" name="courseName" className="form-control" placeholder="e.g. CS 260" required value={course} onChange={(e) => setCourse(e.target.value)} />

          <label htmlFor="sessionDate">Date:</label>
          <input type="date" id="sessionDate" name="sessionDate" className="form-control" required value={date} onChange={(e) => setDate(e.target.value)} />

          <label htmlFor="sessionTime">Time:</label>
          <input type="time" id="sessionTime" name="sessionTime" className="form-control" required value={time} onChange={(e) => setTime(e.target.value)} />

          <label htmlFor="sessionLocation">Location:</label>
          <input type="text" id="sessionLocation" name="sessionLocation" className="form-control" placeholder="e.g. HBLL Room 3102" value={location} onChange={(e) => setLocation(e.target.value)} />

          <button type="submit" className="btn btn-primary">Create Session</button>
        </form>
      </section>

      {/* Available study sessions to JOIN */}
      <section>
        <h2>Join a Study Session</h2>
        {/* Database data placeholder: all open sessions available to join */}
        {openSessions.length === 0 ? (
          <p>You've joined every open session!</p>
        ) : (
          <ul>
            {openSessions.map((s) => (
              <li key={s.id}>
                {s.course} — {s.date}, {s.time}{' '}
                <button type="button" className="btn btn-sm btn-success" onClick={() => joinSession(s)}>Join</button>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Bulletin Board */}
      <section>
        <h2>Bulletin Board</h2>
        {/* Shared study resources */}
        <p>Shared materials uploaded by students:</p>
        <ul>
          {resources.map((r, i) => (
            <li key={i}>{r.name} — uploaded by {r.uploader}</li>
          ))}
        </ul>
        <form onSubmit={uploadResource}>
          <label htmlFor="resourceFile">Upload a resource:</label>
          <input type="file" id="resourceFile" name="resourceFile" className="form-control" onChange={(e) => setFileName(e.target.files[0] ? e.target.files[0].name : '')} />
          <button type="submit" className="btn btn-secondary" disabled={!fileName}>Upload</button>
        </form>
      </section>

      {/* Real-time activity updates */}
      <section>
        <h2>Live Updates</h2>
        {liveUpdates.length === 0 ? (
          <p id="liveActivity">Waiting for activity...</p>
        ) : (
          <ul id="liveActivity">
            {liveUpdates.map((msg, i) => (
              <li key={i}>{msg}</li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}