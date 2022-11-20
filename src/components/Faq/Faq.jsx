import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Table } from "semantic-ui-react";
import axios from "axios";
import { BASE_URL } from "../../api/Config";
import "./faq.scss";

const Faq = () => {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [id, setID] = useState(null);
  const navigate = useNavigate();

  const [APIData, setAPIData] = useState([]);

  const getFaq = async () => {
    axios.get(BASE_URL + "Faq/getall").then((response) => {
      setAPIData(response.data);
    });
  };

  const setData = (data) => {
    let { id, title, description } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("Title", title );
    localStorage.setItem("Picture", description);
  };

  const onDelete = (id) => {
    fetch(`${BASE_URL}Faq/remove/${id}`, {
      method: "DELETE",
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
  };

  useEffect(() => {
    getFaq();
  }, []);

  return (
    <div id="blog" className="my-5">
      <Link to="/faq/create">
        <button className="btn btn-outline-success">Create</button>
      </Link>
      <Table singleLine className="my-4">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData &&
            APIData.map((data) => {
              return (
                <Table.Row>
                  <Table.Cell>{data.title}</Table.Cell>
                  <Table.Cell>
                    {data.description}
                  </Table.Cell>
                  
                  <Link to={`/faq/update/${data.id}`}>
                    <Table.Cell>
                      <button
                        className="btn btn-outline-warning"
                        onClick={() => setData(data)}
                        style={{ marginTop: "5px" }}
                      >
                        Update
                      </button>
                    </Table.Cell>
                  </Link>
                  <Table.Cell>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => onDelete(data.id)}
                    >
                      Delete
                    </button>
                  </Table.Cell>
                </Table.Row>
              );
            })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Faq;
