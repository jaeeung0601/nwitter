import '../App.css';
import React,{useState} from 'react';
import Router from './Router'

function App() {
  console.log(authService.currentUser)
  const [isLoggedIn,setIsLoggedIn] = useState(authService.currentUser)
  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
