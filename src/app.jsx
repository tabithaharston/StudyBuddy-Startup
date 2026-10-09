   import React from 'react';
   import 'bootstrap/dist/css/bootstrap.min.css';
   import './app.css';

   export default function App() {
     return (
       <div className="body">
         <header>
           <h1>StudyBuddy</h1>
           <p>By Tabitha Harston</p>
           <nav>
             <ul>
               <li><a href="login.html">Login</a></li>
               <li><a href="dashboard.html">Dashboard</a></li>
               <li><a href="session.html">Study Session</a></li>
             </ul>
           </nav>
         </header>

         <main>Pages will go here</main>

         <footer>
           <p>StudyBuddy &copy; 2026 Tabitha Harston</p>
           <p><a href="https://github.com/tabithaharston/StudyBuddy-Startup">View this project on GitHub</a></p>
         </footer>
       </div>
     );
   }