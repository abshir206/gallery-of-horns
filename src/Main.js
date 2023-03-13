import React, { useState } from "react";
import HornedBeast from "./Beast";
import "./Main.css";
import { Form, Row, Container} from "react-bootstrap";

export default function Main(props) {
  const [input, setInput] = useState("");
  const [filteredBeasts, setFilteredBeasts] = useState(props.beasts);

  function handleUserSearch(e) {
    setInput(e.target.value);
    e.target.value === ""
      ? setFilteredBeasts(props.beasts)
      : setFilteredBeasts(
          props.beasts.filter((beast) => e.target.value === String(beast.horns))
        );
  }

  return (
    <Container>
      <Row>
        <main>
          <Form.Group className="mb-5 border p-5">
            <Form.Label>Search by Horns!</Form.Label>
            <Form.Control
              type="number"
              placeholder="Horns"
              value={input}
              onChange={handleUserSearch}
              size="sm"
            />
          </Form.Group>
          <div className="row">
            {filteredBeasts.map((beast) => {
              return (
                <HornedBeast
                  name={beast.title}
                  imageURL={beast.image_url}
                  keyword={beast.keyword}
                  description={beast.description}
                  horns={beast.horns}
                  handleOpenModal={props.handleOpenModal}
                  key={beast._id}
                />
              );
            })}
          </div>
        </main>
      </Row>
    </Container>
  );
}