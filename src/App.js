
import './App.css';
import User from './components/User';
import Navbar from './components/Navbar';

function App()
{
  const deneme = 34 + 25;
  const isAuth = true;
  return (
    <div className="App">



      <h1> merhaba dünya</h1>
      <br></br>
      <p> deneme yazdım oldu mu?</p>

      <hr></hr>
      <label htmlFor="name"> </label>

      {1 + 1}
      <br></br>
      {"Akın".toUpperCase()}

      <br></br>
      {deneme - 2}

      <User />







      <div>

        {
          isAuth ? <p> Kullanıcı değeri true</p>
            : null
        }

      </div>
      <Navbar/>
    </div>
  );
}

export default App;
