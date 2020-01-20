import React from 'react';
import './global.css'
import './App.css'

function App() {
  return (
    <div id="app">
      <aside>
        <strong > Register</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">GitHub Username</label>
            <input name="github_username" id="github_username" required/>
          </div>
          
          <div className="input-block">
            <label htmlFor="techs">Technologies</label>
            <input name="techs" id="techs" required/>
          </div>

          <div>
            <label htmlFor="techs">Technologies</label>
            <input name="techs" id="techs" required/>
          </div>          
        </form>
      </aside>
      <main>
      </main>  
    </div>
  );
}

export default App;
