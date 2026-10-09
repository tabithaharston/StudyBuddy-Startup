   import React from 'react';
   import 'bootstrap/dist/css/bootstrap.min.css';
   import './app.css';
   import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
   import { Login } from './login/login';
   import { Dashboard } from './dashboard/dashboard';
   import { Session } from './session/session';

   export default function App() {
     return (
       <BrowserRouter>
         <div className="body">
           <header>
             <h1>StudyBuddy</h1>
             <p>By Tabitha Harston</p>
             <nav>
               <ul>
                 <li><NavLink to="">Login</NavLink></li>
                 <li><NavLink to="dashboard">Dashboard</NavLink></li>
                 <li><NavLink to="session">Study Session</NavLink></li>
               </ul>
             </nav>
           </header>

           <Routes>
             <Route path="/" element={<Login />} exact />
             <Route path="/dashboard" element={<Dashboard />} />
             <Route path="/session" element={<Session />} />
             <Route path="*" element={<NotFound />} />
           </Routes>

           <footer>
             <p>StudyBuddy &copy; 2026 Tabitha Harston</p>
             <p><a href="https://github.com/tabithaharston/StudyBuddy-Startup">View this project on GitHub</a></p>
           </footer>
         </div>
       </BrowserRouter>
     );
   }

   function NotFound() {
     return <main>404: Page not found.</main>;
   }