import React from 'react';
import './login.css';

export function Login() {
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
        <form>
          <fieldset>
            <legend>Login</legend>
            <label htmlFor="loginEmail">Email:</label>
            <input type="email" id="loginEmail" name="loginEmail" placeholder="you@byu.edu" required />

            <label htmlFor="loginPassword">Password:</label>
            <input type="password" id="loginPassword" name="loginPassword" required />

            <button type="submit">Login</button>
          </fieldset>
        </form>

        {/* Create Account */}
        <form>
          <fieldset>
            <legend>Create Account</legend>
            <label htmlFor="signupName">Full Name:</label>
            <input type="text" id="signupName" name="signupName" placeholder="Jane Doe" required />

            <label htmlFor="signupEmail">Email:</label>
            <input type="email" id="signupEmail" name="signupEmail" required />

            <label htmlFor="signupPassword">Password:</label>
            <input type="password" id="signupPassword" name="signupPassword" required />

            <label htmlFor="signupRole">I am a:</label>
            <select id="signupRole" name="signupRole">
              <option value="student">Student</option>
              <option value="professor">Professor</option>
            </select>

            <button type="submit">Create Account</button>
          </fieldset>
        </form>

        {/* Displays the logged-in user's name once authentication is implemented */}
        <p id="userDisplay">Logged in as: <span id="userName">Guest</span></p>
      </section>

      <section>
        <h2>Motivational Quote</h2>
        {/* 3rd party service call placeholder: Quotable API */}
        <blockquote id="quoteBox">
          "The secret of getting ahead is getting started." — Mark Twain
        </blockquote>
        <p><small>Quote provided by the <a href="https://github.com/lukePeavey/quotable">Quotable API</a> (placeholder — will be fetched dynamically).</small></p>
      </section>
    </main>
  );
}