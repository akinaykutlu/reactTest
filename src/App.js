import React, { useState } from 'react';
import './login.css'; // CSS dosyasını ekleyin

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // Kullanıcı girişi işlemleri burada gerçekleştirilecek
    if (email === 'example@example.com' && password === '123456') {
      // Başarılı giriş durumunda yapılacak işlemler
      console.log('Giriş başarılı');
    } else {
      // Hatalı giriş durumunda yapılacak işlemler
      setErrorMessage('Geçersiz e-posta veya şifre');
    }
  };

  return (
    <div className="container"> {/* CSS sınıfını ekleyin */}
      <h2>Kullanıcı Girişi</h2>
      <div>
        <label>E-posta:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Şifre:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Giriş Yap</button>
      {errorMessage && <div className="error-message">{errorMessage}</div>} {/* CSS sınıfını ekleyin */}
    </div>
  );
}

export default Login;
