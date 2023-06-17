import { uid } from 'uid';
import './App.css';
import List from "./components/List";
import {useState } from "react";

function App() {
  
  const [contacts, setContacts ] = useState([
    {
      id: 1,
      name: "John Doe",
      telp: "081516783325",
    },
    {
      id: 2,
      name: "Jane Doe",
      telp: "081516721678",
    },

]);

  const[isUpdate,setIsUpdate] = useState({id: null, status: false});
  

  const [formData,setFormData] = useState({
    name: "",
    telp: "",
  })

  function handleChange(e) {
    let data = {...formData};
    data[e.target.name] = e.target.value;
    setFormData(data)

  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Data telah ditambahkan");

    if(formData.name === "") {
      return false
    }

    if(formData.telp === "") {
      return false
    }

    

    


    let data = [...contacts];

    data.push({id: uid(), name: formData.name, telp: formData.telp});
    setContacts(data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="Header">
          Contact List
        </h2>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label">Name</label>
            <input type='text' className="form-control" name="name" value={formData.name} onChange={handleChange}></input>            
          </div>

          <div className="form-group">
          <label className="label">Phone Number</label>
            <input type='text' className="form-control" name="telp" value={formData.telp} onChange={handleChange}></input>  
          </div>

          <div>
          <button type="submit" className="button">
            Save
          </button>
        </div>

        </form>

        <List data={contacts} />

        

       

    

      </header>
    </div>
  );
}

export default App;
