import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    
    if (!validateEmail(value)) {
      setEmailError('Formato de email inválido');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length < 8) {
      setPasswordError('A senha deve ter pelo menos 8 caracteres');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError && !passwordError && email && password) {
      alert(`Email: ${email}\nSenha: ${password}`);
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {emailError && <p className="error">{emailError}</p>}
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {passwordError && <p className="error">{passwordError}</p>}
        </div>
        <button type="submit" disabled={!!emailError || !!passwordError}>
          Entrar
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
