import React from 'react';
import './login.css';

export function Login({ userName, onLogin, onLogout }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [fullName, setFullName] = React.useState('');
  const [signupEmail, setSignupEmail] = React.useState('');
  const [signupPassword, setSignupPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState('');
  const [role, setRole] = React.useState('student');

  const [quote, setQuote] = React.useState('Loading quote...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('');

  // Third-party service call: get a random quote when the page opens
  React.useEffect(() => {
    fetch('https://quote.cs260.click')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote);
        setQuoteAuthor(data.author);
      })
      .catch(() => setQuote('Could not load a quote right now.'));
  }, []);

  function handleLogin(e) {
    e.preventDefault();
    localStorage.setItem('userName', email);
    onLogin(email);
  }

  function handleCreate(e) {
    e.preventDefault();
    localStorage.setItem('userName', fullName);
    localStorage.setItem('role', role);
    onLogin(fullName);
  }

  return (
    <main>
      <section>
        <h2>Welcome to StudyBuddy</h2>
        <p>
          StudyBuddy is a social platform that helps BYU college students organize and
          stay accountable for their coursework together. Professors can share access
          with their class, letting students form study groups, schedule sessions, and
          share resources all in one place. Instead of scattering plans across group
          chats and email threads, students get a single hub to find study partners,
          post materials, and stay connected — both online and in person.
        </p>
        <img src="https://picsum.photos/1200/400" alt="Students studying together" className="welcome-image" />
      </section>

      <section>
        <h2>Login / Create Account</h2>
        {/* Authentication placeholder */}
        <form onSubmit={handleLogin}>
          <fieldset>
            <legend>Login</legend>
            <label htmlFor="loginEmail">Email:</label>
            <input type="email" id="loginEmail" name="loginEmail" placeholder="you@byu.edu" required
              value={email} onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="loginPassword">Password:</label>
            <input type="password" id="loginPassword" name="loginPassword" required
              value={password} onChange={(e) => setPassword(e.target.value)} />

            <button type="submit">Login</button>
          </fieldset>
        </form>

        {/* Create Account */}
        <form onSubmit={handleCreate}>
          <fieldset>
            <legend>Create Account</legend>
            <label htmlFor="signupName">Full Name:</label>
            <input type="text" id="signupName" name="signupName" placeholder="Jane Doe" required
              value={fullName} onChange={(e) => setFullName(e.target.value)} />

            <label htmlFor="signupEmail">Email:</label>
            <input type="email" id="signupEmail" name="signupEmail" required
              value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} />

            <label htmlFor="signupPassword">Password:</label>
            <input type="password" id="signupPassword" name="signupPassword" required
              value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} />

            <label htmlFor="signupRole">I am a:</label>
            <select id="signupRole" name="signupRole" value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="student">Student</option>
              <option value="professor">Professor</option>
            </select>

            <button type="submit">Create Account</button>
          </fieldset>
        </form>

        {/* Displays the logged-in user's name once authentication is implemented */}
        {userName && <button type="button" onClick={onLogout}>Logout</button>}
      </section>

      <section>
        <h2>Motivational Quote</h2>
        <blockquote id="quoteBox">
          {quote} {quoteAuthor && <>— {quoteAuthor}</>}
        </blockquote>
        <p><small>Quote fetched live from the <a href="https://quote.cs260.click">quote.cs260.click</a> API.</small></p>
      </section>
    </main>
  );
}