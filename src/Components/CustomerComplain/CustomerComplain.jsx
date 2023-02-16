import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { db } from '../../Services/firebase.config'
import { collection, onSnapshot, doc, addDoc, deleteDoc } from "firebase/firestore"

import "./CustomerComplain.css";
const CustomerComplain = () => {
  const [addComplainBtnState, setAddComplainBtnState] = useState(false);
  const [complain, setComplain] = useState(
    {
      complained_Date: "",
      description: "",
      status: "Not Reviewed",
      title: "",
      user_Id: "CUS-0001",
      user_Type: "Cus"
    }
);
  const [currentTime, setCurrentTime]=useState("2021.01.03-10:53:34");

  const complainCollectionRef = collection(db,"ComplainCollection");
  const handleSubmit = e =>{
    e.preventDefault()
     

    if(
        !complain.title||
        !complain.description

    ){
        alert("Please fill out all fields")
      return
    }
        console.log(complain);
        addDoc(complainCollectionRef, complain);
        setComplain({
            complained_Date: "",
            description: "",
            status: "Not Reviewed",
            title: "",
            user_Id: "CUS-0001",
            user_Type: "Cus"
          })

          alert("Data sent succecfully")
          setAddComplainBtnState(!addComplainBtnState);

    

  }

  return (
    <div className="complain-container">
      {addComplainBtnState ? (
        <div className="complain-content">
          <div className="complain-close-btn">
            <Button
              variant="outline-success"
              onClick={() => setAddComplainBtnState(!addComplainBtnState)}
            >
              Close Complain
            </Button>
          </div>

          <form className="form-card" onSubmit={handleSubmit}>
            <h1 className="complain-title">Add Complain</h1>

            <div className="form-group">
              <label className="form-label">Subject</label>
              <input type="text" vlaue={complain.title} 
              onChange = {e => setComplain({...complain, title: e.target.value})}/>
            </div>

            <div className="form-group">
              <label className="form-label">Description</label>
              <input type="text" vlaue={complain.Description} 
              onChange = {e => setComplain({...complain, description: e.target.value})}/>
            </div>

            <div className="form-group">
            <Button type = "submit" onClick={()=> setComplain({...complain, complained_Date: currentTime})} variant="primary">Primary</Button>
            </div>  
            
            
          </form>
        </div>
      ) : (
        <div className="new-complain-btn-holder">
          <Button
            variant="outline-danger"
            onClick={() => setAddComplainBtnState(!addComplainBtnState)}
          >
            Complain
          </Button>
        </div>
      )}
    </div>
  );
};

export default CustomerComplain;
