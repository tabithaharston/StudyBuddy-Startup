import React from 'react';
import { NavLink } from 'react-router-dom';
import './dashboard.css';

export function Dashboard() {
  const [sessions, setSessions] = React.useState([]);
  const [openSessions, setOpenSessions] = React.useState([]);
  const [error, setError] = React.useState('');

  // Load my sessions and the open sessions from my backend
  function loadSessions() {
    fetch('/api/study-sessions')
      .then((response) => {
        if (!response.ok) throw new Error('Please log in again to see your sessions.');
        return response.json();
      })
      .then((data) => {
        setSessions(data.mine);
        setOpenSessions(data.open);
      })
      .catch((err) => setError(err.message));
  }

  React.useEffect(() => {
    loadSessions();
  }, []);

  const [course, setCourse] = React.useState('');
  const [date, setDate] = React.useState('');
  const [time, setTime] = React.useState('');
  const [location, setLocation] = React.useState('');

  async function createSession(e) {
    e.preventDefault();
    const response = await fetch('/api/study-sessions', {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ course, date, time, location }),
    });
    if (response.ok) {
      setLiveUpdates((prev) => [`You created ${course}`, ...prev].slice(0, 5));
      loadSessions();
      setCourse('');
      setDate('');
      setTime('');
      setLocation('');
    }
  }

  async function joinSession(session) {
    const response = await fetch(`/api/study-sessions/${session.id}/join`, { method: 'post' });
    if (response.ok) {
      setLiveUpdates((prev) => [`You joined ${session.course}`, ...prev].slice(0, 5));
      loadSessions();
    }
  }

  /* !!Resource Management */
  const [resources, setResources] = React.useState([]);
  const [fileName, setFileName] = React.useState('');

  // Load the bulletin board from my backend
  React.useEffect(() => {
    fetch('/api/resources')
      .then((response) => (response.ok ? response.json() : []))
      .then((data) => setResources(data));
  }, []);

  /* Resource Upload (saves the file name to the server) */
  async function uploadResource(e) {
    e.preventDefault();
    const response = await fetch('/api/resources', {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ name: fileName }),
    });
    if (response.ok) {
      setResources(await response.json());
    }
    setFileName('');
    e.target.reset();
  }

  /* Live Updates */
  const [liveUpdates, setLiveUpdates] = React.useState([]);

  // Simulate other students joining sessions every 5 seconds.
  // Will be replaced with WebSocket messages later.
  React.useEffect(() => {
    const names = ['Lincoln R.', 'Darron H.', 'Jenny C.', 'Payton M.', 'Beckham H.', 'Lettie M.', 'Oscar O.', 'Tabitha H.'];
    const interval = setInterval(() => {
      const courses = ['Chem 106 Lab Prep', 'Stats 221 Homework Help', 'English 251 Essay Workshop'];
      const name = names[Math.floor(Math.random() * names.length)];
      const course = courses[Math.floor(Math.random() * courses.length)];
      setLiveUpdates((prev) => [`${name} joined ${course}`, ...prev].slice(0, 5));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="dashboard">
      <section className="wide">
        <h2>Your Upcoming Study Sessions</h2>
        {error && <p className="text-danger">{error}</p>}
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
                <td><NavLink to={`/session?id=${s.id}`}>{s.course}</NavLink></td>
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