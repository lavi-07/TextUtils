import React, {useState} from "react";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import Alert from "./components/Alert";
function App() {
  const [Mode, setMode] = useState("light"); //dark mode enable or not
  const [alert, setAlert] = useState(null);
  const [selected, setSelected] = useState("default");

 const  modeChange = (event) => {
  let newmode = event.target.value;
    setSelected(newmode);
    setMode(newmode);
    showAlert(`mode changed to ${newmode}`, "success");
  }
  
  const showAlert=(message,type)=>{
       setAlert({
        msg:message,
        type:type,
       })
       setTimeout(() => {
        setAlert(null);
       }, 2000);
  }
  return(
    <>
    <div className={`container-fluid bg-${Mode}-subtle p-3`}>
    <Navbar heading ="app" mode ={selected}  selected ={selected} modeChange ={modeChange}/>
    <Alert alert ={alert} />
    <Textarea mode={selected} showAlert={showAlert} />
    </div>
      </>
  );
}

export default App;
