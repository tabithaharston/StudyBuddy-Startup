# StudyBuddy
## Startup HTML Deliverable

I built three HTML pages for StudyBuddy.

- Pages: index.html, dashboard.html, session.html
- Uses header, nav, main, section, and footer tags
- Pages link to each other with a nav bar
- Has real text describing the app
- Has a placeholder for a 3rd-party quote API
- Has images
- Has a login placeholder that shows the user's name
- Has tables showing session and participant data
- Has placeholders for real-time updates
- My name and GitHub link are on every page

## Deliverable Notes — Startup AWS

For this deliverable I set up my AWS web server and connected it to a domain name with HTTPS.

### What I did

- Created an AWS account using my byu.edu email
- Launched an EC2 instance (t3.nano) using the class AMI
- Allocated an IP address so my server keeps the same public IP even if it restarts
- Registered the domain `studybuddy.click` 
- Set up DNS records in Route 53 pointing `studybuddy.click` and `startup.studybuddy.click` to my server's IP address
- SSH'd into my server and edited the Caddyfile to configure HTTPS for my domain
- Restarted the Caddy service and confirmed my site loads securely at https://startup.studybuddy.click

### Things I ran into / learned

- Typing just the IP address into Chrome defaults to HTTPS now, so I got an SSL error before I even had a web server running — had to type `http://` explicitly to test plain HTTP access.
- DNS took a little while to propagate after registering my domain — using `nslookup` in PowerShell was the easiest way to check if it had gone through yet, instead of just guessing from the browser error.
- Caddy failed to restart the first time because I was missing a space before the `{` on one of my Caddyfile blocks (`studybuddy.click{` instead of `studybuddy.click {`). 
- `vi` takes some getting used to — you have to press `i` to actually type anything, then `Esc` followed by `:wq` to save and exit. I kept forgetting this at first.

### Useful commands I want to remember

```
ssh -i [key pair file] ubuntu@studybuddy.click
sudo systemctl restart caddy.service
sudo systemctl status caddy.service
```
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
- `POST /api/study-sessions/:id/rsvp` — Mark a user as going or not going to a session
- `GET /api/study-sessions/:id/comments` — Retrieve comments for a study session
- `POST /api/study-sessions/:id/comments` — Post a comment on a study session

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
- Study-session participants and their RSVP status (going / not going)
- Comments left on study sessions
- Assignments
- Shared study resources

### WebSocket

WebSocket will be used to push real-time updates to students viewing a study session.

When a student RSVPs as going or not going, or posts a comment, the backend will immediately broadcast that update to everyone else currently viewing the session. This means the attendee list and comment thread stay current for all participants without anyone needing to refresh the page.

## Design

The following wireframes show the planned design and layout of the StudyBuddy application.

### Login
<img width="557" height="416" alt="Login" src="https://github.com/user-attachments/assets/ed27d129-cf01-4f58-aaf7-87f48eb3fbb3" />


The login screen will allow existing users to enter their email and password and access their StudyBuddy account.

### Dashboard
<img width="554" height="413" alt="Dashboard" src="https://github.com/user-attachments/assets/794a1ed1-606f-49dd-8d46-3c52b9cf91be" />)


The dashboard will provide users with an overview of their upcoming study sessions and allow them to create or join a study session.

### Study Session
<img width="557" height="413" alt="Session" src="https://github.com/user-attachments/assets/cb332323-12d3-4797-8708-2c8867c19056" />


The study session screen will show information about the session (time, location, duration), a list of participants and their RSVP status, and a comment section where students can post updates or questions in real time.



