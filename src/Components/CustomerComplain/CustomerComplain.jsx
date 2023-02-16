import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./CustomerComplain.css";
const CustomerComplain = () => {
  const [addComplainBtnState, setAddComplainBtnState] = useState(false);
  const [complain, setComplain] = useState(
    {
      Complained_Date: "",
      Description: "",
      Status: "Not Reviewed",
      Title: "",
      User_Id: "CUS-0001",
      User_Type: "Cus"
    }
);

  const [currentTime, setCurrentTime]=useState("2021.01.03-10:53:34");

  
  const handleSubmit = e =>{
    e.preventDefault()
     

    if(
        !complain.Title||
        !complain.Description

    ){
        alert("Please fill out all fields")
      return
    }else{
        console.log(complain);
        setComplain({
            Complained_Date: "",
            Description: "",
            Status: "Not Reviewed",
            Title: "",
            User_Id: "CUS-0001",
            User_Type: "Cus"
          })
    }

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

          <form onSubmit={handleSubmit}>
            <h1 className="complain-title">Add Complain</h1>

            <div className="form-group">
              <label className="form-label">Subject</label>
              <input type="text" vlaue={complain.Title} 
              onChange = {e => setComplain({...complain, Title: e.target.value})}/>
            </div>

            <div className="form-group">
              <label className="form-label">Description</label>
              <input type="text" vlaue={complain.Description} 
              onChange = {e => setComplain({...complain, Description: e.target.value})}/>
            </div>

            <div className="form-group">
            <Button type = "submit" onClick={()=> setComplain({...complain, Complained_Date: currentTime})} variant="primary">Primary</Button>
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
