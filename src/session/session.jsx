import React from 'react';
import './session.css';

export function Session() {
  const [participants, setParticipants] = React.useState(
    JSON.parse(localStorage.getItem('participants')) || [
      { name: 'Jordan P.', status: 'Going' },
      { name: 'Sam R.', status: 'Not going' },
    ]
  );

  const [rsvp, setRsvp] = React.useState('');
  function submitRsvp(e) {
    e.preventDefault();
    const userName = localStorage.getItem('userName');
    const others = participants.filter((p) => p.name !== userName);
    const newParticipants = [...others, { name: userName, status: rsvp }];
    setParticipants(newParticipants);
    localStorage.setItem('participants', JSON.stringify(newParticipants));
  }

  const [comments, setComments] = React.useState(
    JSON.parse(localStorage.getItem('comments')) || [
      { author: 'Jordan P.', text: 'I will bring the practice exam!', time: '2:15 PM' },
    ]
  );

  const [newComment, setNewComment] = React.useState('');
  function postComment(e) {
    e.preventDefault();
    const time = new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    const newComments = [...comments, { author: localStorage.getItem('userName'), text: newComment, time }];
    setComments(newComments);
    localStorage.setItem('comments', JSON.stringify(newComments));
    setNewComment('');
  }

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
        <form onSubmit={submitRsvp}>
          <label htmlFor="rsvpYes">Going?</label>
          <input type="radio" id="rsvpYes" name="rsvp" checked={rsvp === 'Going'} onChange={() => setRsvp('Going')} /> Yes
          <input type="radio" id="rsvpNo" name="rsvp" checked={rsvp === 'Not going'} onChange={() => setRsvp('Not going')} /> No
          <button type="submit" disabled={!rsvp}>Submit</button>
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
            {participants.map((p) => (
              <tr key={p.name}>
                <td>{p.name}</td>
                <td>{p.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2>Comments</h2>
        {/* WebSocket placeholder: new comments will appear in real time */}
        <ul className="list-unstyled">
          {comments.map((c, i) => (
            <li key={i}><strong>{c.author}</strong> ({c.time}): {c.text}</li>
          ))}
        </ul>
        <form onSubmit={postComment}>
          <textarea rows={3} value={newComment} onChange={(e) => setNewComment(e.target.value)} placeholder="Write a comment..."></textarea>
          <button type="submit" disabled={!newComment.trim()}>Post</button>
        </form>
      </section>
    </main>
  );
}