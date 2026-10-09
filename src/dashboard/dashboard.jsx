import React from 'react';
import { NavLink } from 'react-router-dom';
import './dashboard.css';

export function Dashboard() {
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
            <tr>
              <td><NavLink to="/session">CS 260 Midterm Review</NavLink></td>
              <td>Sep 26, 2026</td>
              <td>6:00 PM</td>
              <td>HBLL Room 3102</td>
            </tr>
            <tr>
              <td><NavLink to="/session">Calc 2 Problem Set</NavLink></td>
              <td>Sep 28, 2026</td>
              <td>4:00 PM</td>
              <td>Talmage 201</td>
            </tr>
            <tr>
              <td><NavLink to="/session">Biology Flashcard Party</NavLink></td>
              <td>Sep 29, 2026</td>
              <td>7:30 PM</td>
              <td>Widtsoe Lounge</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Form for creating a new study session */}
      <section>
        <h2>Create a Study Session</h2>
        <form>
          <label htmlFor="courseName">Course:</label>
          <input type="text" id="courseName" name="courseName" className="form-control" placeholder="e.g. CS 260" required />

          <label htmlFor="sessionDate">Date:</label>
          <input type="date" id="sessionDate" name="sessionDate" className="form-control" required />

          <label htmlFor="sessionTime">Time:</label>
          <input type="time" id="sessionTime" name="sessionTime" className="form-control" required />

          <label htmlFor="sessionLocation">Location:</label>
          <input type="text" id="sessionLocation" name="sessionLocation" className="form-control" placeholder="e.g. HBLL Room 3102" />

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