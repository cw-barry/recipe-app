import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Router from './Router/Router';
import { useState } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="App">
      <Router {...{ isAuth, setIsAuth }} />
    </div>
  );
}

export default App;
