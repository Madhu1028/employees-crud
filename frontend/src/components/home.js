import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Create from './create';
import Read from './read';
import Update from './update';

function Home() {
    return (
        <>
      <h1>Employee Application</h1>
      <div>
        <ul>
          <li>
            <Link to="/Create">Create</Link>
          </li>
          <li>
            <Link to="/Read">Read</Link>
          </li>
          <li>
            <Link to="/Update">Delete</Link>
          </li>
        </ul>
      </div>
    </>
    );
  }
  
  export default Home;