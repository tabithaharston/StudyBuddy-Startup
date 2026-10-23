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

      {/* Available study sessions to join */}
      <section>
        <h2>Join a Study Session</h2>
        {/* Database data placeholder: all open sessions available to join */}
        <ul>
          <li>Chem 106 Lab Prep — Sep 30, 5:00 PM — <button type="button" className="btn btn-sm btn-success">Join</button></li>
          <li>Stats 221 Homework Help — Oct 1, 3:00 PM — <button type="button" className="btn btn-sm btn-success">Join</button></li>
          <li>English 251 Essay Workshop — Oct 2, 1:00 PM — <button type="button" className="btn btn-sm btn-success">Join</button></li>
        </ul>
      </section>

      <section>
        <h2>Bulletin Board</h2>
        {/* Shared study resources */}
        <p>Shared materials uploaded by students:</p>
        <ul>
          <li>CS260_html_notes.pdf — uploaded by Jordan P.</li>
          <li>Calc2_final_formulas.docx — uploaded by Sam R.</li>
        </ul>
        <form>
          <label htmlFor="resourceFile">Upload a resource:</label>
          <input type="file" id="resourceFile" name="resourceFile" className="form-control" />
          <button type="submit" className="btn btn-secondary">Upload</button>
        </form>
      </section>

      {/* Real-time activity updates */}
      <section>
        <h2>Live Updates</h2>
        <p id="liveActivity">Real-time updates will show here.</p>
      </section>
    </main>
  );
}