# StudyBuddy
## Deliverable Notes — Startup Specification
For this deliverable I completed the initial startup specification, including:
- Elevator pitch
- List of key features
- Description of how each required technology (HTML, CSS, React, Web Service, Database, WebSocket) will be used
- Link to the third-party API I plan to use (Quotable API)
- Rough wireframe sketches for the Login, Dashboard, and Study Session screens

## Elevator Pitch
StudyBuddy is a social platform that helps BYU college students organize and stay accountable for their coursework together. Professors can share access with their class, letting students form study groups, schedule sessions, and share resources all in one place. Instead of scattering plans across group chats and email threads, students get a single hub to find study partners, post materials, and stay connected — both online and in person. StudyBuddy makes collaborative studying easier to start and easier to stick with.

## Key Features
- Professor registration and login
- Student registration and login
- Personal student dashboard
- Create and join Study session groups
- View upcoming study sessions
- Bulletin board where students can upload material
- Connect with study partners in person

  ## Technologies
### HTML

HTML will be used to provide the basic structure and organization of the StudyBuddy application. It will be used for the login page, navigation bar, dashboard, study sessions, assignment lists, forms, user profiles, and other application content.

### CSS

CSS will be used to style the StudyBuddy application and make it easy to use on different screen sizes. CSS will control the layout, spacing, colors, fonts, buttons, forms, navigation, and other visual elements. CSS animations and visual effects will also be used to improve the user experience.

### React

React will be used to build the frontend of StudyBuddy using reusable components. Components will include the login form, navigation bar, study session cards, assignment cards, user profiles, and a comment/RSVP panel for each study session.

The RSVP panel will let students mark whether they're going or not going to a session, and leave comments visible to other participants. React Router will handle navigation between the dashboard, study sessions, and profile views. React state will also allow the interface to update reactively when users create or join study sessions, add assignments, post comments, or update their RSVP status.

### Web Service

The backend web service will provide multiple endpoints that support the functionality of StudyBuddy. The service will handle user registration, login, logout, study sessions, assignments, and study resources.

Example endpoints include:

- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Log in a user
- `POST /api/auth/logout` — Log out a user
- `GET /api/study-sessions` — Retrieve available study sessions
- `POST /api/study-sessions` — Create a study session
- `POST /api/study-sessions/:id/join` — Join a study session
- `GET /api/assignments` — Retrieve a user's assignments
- `POST /api/assignments` — Create an assignment

The backend will also handle authentication so that users must be logged in to access their personal information.

### Third-Party API

StudyBuddy will use the Quotable API to provide motivational quotes to students on the application dashboard. This will give users an optional source of motivation while studying.

[Quotable API](https://github.com/lukePeavey/quotable)

### Database

The database will store the information needed for StudyBuddy to function and keep information persistent between sessions.

It will store:

- User authentication information
- User profiles
- Study sessions
- Study-session participants
- Assignments
- Shared study resources

### WebSocket

WebSocket will be used to provide real-time communication between users.

Students participating in the same study session will be able to use a live chat. When one student sends a message, the backend will immediately send the message to the other connected users without requiring them to refresh the page.

WebSocket will also allow the application to provide real-time updates when users join or leave study sessions.

## Design

The following wireframes show the planned design and layout of the StudyBuddy application.

### Login

The login screen will allow existing users to enter their email and password and access their StudyBuddy account.

### Dashboard

The dashboard will provide users with an overview of their upcoming study sessions and allow them to create or join a study session.

### Study Session

The study session screen will show information about the session, participants, and a real-time chat where students can communicate.

