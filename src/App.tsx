import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Button } from './components/Button';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1, padding: '2rem', textAlign: 'center' }}>
        <h2>Bộ đếm đơn giản</h2>
        <p>Bạn đã nhấn nút {count} lần</p>
        <Button label="Tăng số" onClick={() => setCount((count) => count + 1)} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
