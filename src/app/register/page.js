// app/register/page.js
import { useState } from 'react';
import { auth } from '../../lib/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Header from '../../components/Header';
import Button from '../../components/Button';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Registration successful!');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center p-4">
        <h2 className="text-2xl font-bold">Register</h2>
        <form onSubmit={handleRegister} className="mt-4 w-full max-w-sm">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-md p-2 mb-2 w-full"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-md p-2 mb-2 w-full"
            required
          />
          <Button type="submit">Register</Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
