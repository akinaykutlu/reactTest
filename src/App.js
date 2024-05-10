
import './App.css';


function App()
{
  const deneme = 34 + 25;
  const isAuth = true;
  return (
    <div className="App">

      <h1> merhaba dünya</h1>
      <p className="sabit"> deneme yazdım oldu mu?</p>
      <label htmlFor="name"> </label>

      {1 + 1}
      <br></br>
      {"Akın".toUpperCase()}

      <br></br>
      {deneme - 2}


      <div>

        {
          isAuth ? <p> Kullanıcı değeri true</p>
            : null
        }

      </div>

    </div>
  );
}

export default App;
