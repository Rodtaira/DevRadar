import React, {useState, useEffect} from 'react';
import api from './services/api'
import './global.css';
import './App.css';
import './Sidebar.css'; 
import './Main.css'; 


function App() {
  const [github_username, setGitUserName] = useState('');
  const [techs, setTechs] = useState('');  
  const [latitude, setLatitude] = useState(''); 
  const [longitude, setLongitude] = useState(''); 

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;
        
        setLatitude(latitude); 
        setLongitude(longitude);
      },
      (err) => {
        console.log(err); 
      }, 
      {
        timeout: 30000, 
      }
    )
  }, []); 

  async function handleAddDev(e){
    e.preventDefault(); 

    const response = await api.post('/devs', {
      github_username, 
      techs, 
      latitude, 
      longitude
    })
    console.log(response.data);
  }


  return (
    <div id="app">
      <aside>
        <strong > Register</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">GitHub Username</label>
            <input 
              name="github_username" 
              id="github_username" 
              required
              value={github_username}
              onChange={e => setGitUserName(e.target.value)}
            />
          </div>
          
          <div className="input-block">
            <label htmlFor="techs">Technologies</label>
            <input 
              name="techs" 
              id="techs" 
              required
              value={techs}
              onChange={(e) => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group" >
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                  type="number" 
                  name="latitude" 
                  id="latitude" 
                  required 
                  value={latitude}
                  onChange={ e => setLatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                  type="number" 
                  name="longitude" 
                  id="longitude" 
                  required 
                  value={longitude}
                  onChange={ e => setLongitude(e.target.value)}
              /> 
            </div>
          </div>      
          <button type="submit" onSubmit={handleAddDev} > Save </button>
        </form>
      </aside>

      <main>
        <ul>
            <li className="dev-item">
              <header>
                <img src="https://avatars1.githubusercontent.com/u/18682770?s=460&v=4" alt=""/>
                <div className="user-info">
                  <strong> Rodrigo Taira </strong>
                  <span> NodeJS, Python </span>
                </div>
               </header> 
              <p> Desenvolvedor Web com foco em Back-End </p>
              <a href="https://github.com/Rodtaira"> Acessar perfil no Github</a>
            </li>

            <li className="dev-item">
              <header>
                <img src="https://avatars1.githubusercontent.com/u/18682770?s=460&v=4" alt=""/>
                <div className="user-info">
                  <strong> Rodrigo Taira </strong>
                  <span> NodeJS, Python </span>
                </div>
               </header> 
              <p> Desenvolvedor Web com foco em Back-End </p>
              <a href="https://github.com/Rodtaira"> Acessar perfil no Github</a>
            </li>

            <li className="dev-item">
              <header>
                <img src="https://avatars1.githubusercontent.com/u/18682770?s=460&v=4" alt=""/>
                <div className="user-info">
                  <strong> Rodrigo Taira </strong>
                  <span> NodeJS, Python </span>
                </div>
               </header> 
              <p> Desenvolvedor Web com foco em Back-End </p>
              <a href="https://github.com/Rodtaira"> Acessar perfil no Github</a>
            </li>

            <li className="dev-item">
              <header>
                <img src="https://avatars1.githubusercontent.com/u/18682770?s=460&v=4" alt=""/>
                <div className="user-info">
                  <strong> Rodrigo Taira </strong>
                  <span> NodeJS, Python </span>
                </div>
               </header> 
              <p> Desenvolvedor Web com foco em Back-End </p>
              <a href="https://github.com/Rodtaira"> Acessar perfil no Github</a>
            </li>
        </ul>
      </main>  
    </div>
  );
}

export default App;
