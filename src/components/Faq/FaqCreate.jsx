import React, { useState } from "react";
import "../Blog/create.scss";
import { Form } from "semantic-ui-react";
import { BASE_URL } from "../../api/Config";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createFaqAction } from "../../redux/Actions/FaqAction";

const FaqCreate = () => {
    const [Title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    const [id, setID] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  
  const postData = async () => {
    fetch(`${BASE_URL}Faq/add`, {
      method: "POST",
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
        navigate('/faq')
      });

    // dispatch(createFaqAction(Title, Description))
    //   navigate("/faq")
  };

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Name</label>
          <input style={{marginLeft: "22px"}} placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        </Form.Field>
        
        <Form.Field>
          <label>Tags</label>
          <input style={{marginLeft: "32px"}} placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
        </Form.Field>
       
        <button className='btn btn-outline-success' type="submit" onClick={postData} style={{marginTop:"10px", marginLeft:"30px"}}>Submit</button>
      </Form>
    </div>
  );
};

export default FaqCreate;
