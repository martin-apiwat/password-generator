import { useState } from "react";
import "./App.css";
import PasswordGenerator from "./components/PasswordGenerator";
import PasswordDisplay from "./components/PasswordDisplay";

function App() {
   const [password, setPassword] = useState(null);

   return (
      <div className="App">
         <PasswordDisplay password={password} />
         <PasswordGenerator setPassword={setPassword} />
      </div>
   );
}

export default App;
