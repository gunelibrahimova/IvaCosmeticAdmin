import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form } from "semantic-ui-react";
import { BASE_URL } from '../../api/Config';


const FaqUpdate = () => {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [id, setID] = useState(null);
  const navigate = useNavigate();
  
  const updateAPIData = async () => {
    fetch(`${BASE_URL}blog/update/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title : Title,
        description: Description
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        navigate("/faq");
      });
  }

  useEffect(() => {
    setID(localStorage.getItem('ID'))
    setTitle(localStorage.getItem('Title'));
    setDescription(localStorage.getItem('Description'));
  }, []);



  return (
    <div>
    <Form className="create-form">
     
      <Form.Field>
        <label>Picture</label>
        <input
          placeholder="Title"
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Tags</label>
        <input style={{marginLeft: "32px"}}  placeholder="Description" value={Description} onChange={(e) => setDescription(e.target.value)} />
      </Form.Field>
      
      <button type="submit" className='btn btn-outline-warning' onClick={updateAPIData} style={{marginTop:"10px", marginLeft:"30px"}}>Update</button>
    </Form>
  </div>
  )
}

export default FaqUpdate