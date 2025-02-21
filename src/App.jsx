import { useEffect, useState } from "react";
import Error_auth from "./components/Error_auth";
import './App.css';
const App = () => {
  const [user, setUser] = useState(null);
/*
  useEffect(() => {

    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      
     
      if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
        setUser(tg.initDataUnsafe.user);
      } else {
      }
    }
  }, []);
*/
  return (
    <div>
      <h1>
         Hello World
      </h1>
     
    </div>
  );
};

export default App;
