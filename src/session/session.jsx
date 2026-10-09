import React from 'react';
import './session.css';

export function Session() {
  return (
    <main>
      <section>
        <h2>Your Upcoming Study Sessions</h2>
        <img
          src="https://img.magnific.com/free-vector/watercolor-business-meeting_23-2147551752.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Study group"
        />
        <table className="table table-striped">
          <tbody>
            <tr>
              <th>Date</th>
              <td>Sep 26</td>
            </tr>
            <tr>
              <th>Time</th>
              <td>6:00 PM</td>
            </tr>
            <tr>
              <th>Location</th>
              <td>HBLL Room 3102</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>RSVP</h2>
        <form>
          <label htmlFor="rsvpYes">Going?</label>
          <input type="radio" id="rsvpYes" name="rsvp" /> Yes
          <input type="radio" id="rsvpNo" name="rsvp" /> No
          <button type="submit">Submit</button>
        </form>
      </section>

      <section>
        <h2>Participants</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tabitha Harston</td>
              <td>Going</td>
            </tr>
            <tr>
              <td>Jordan P.</td>
              <td>Going</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>Comments</h2>
        {/* WebSocket placeholder: new comments will appear in real time */}
        <p>New comments will show here in real time.</p>
        <form>
          <textarea rows={3}></textarea>
          <button type="submit">Post</button>
        </form>
      </section>
    </main>
  );
}