import React, { useState, useEffect } from "react";
import University from "./University";
import * as ReactBootstrap from "react-bootstrap";

const Container = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    const response = await fetch(
      "http://universities.hipolabs.com/search?country=India"
    );
    setLoading(true);
    setUsers(await response.json());
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      {loading ? (
        users.map((cvalue, index) => {
          return (
            <University
              id={index}
              name={cvalue.name}
              country={cvalue.country}
              domains={cvalue.domains}
              web_pages={cvalue.web_pages}
            />
          );
        })
      ) : (
        <>
          <ReactBootstrap.Spinner animation="border" size="sm" />
          <ReactBootstrap.Spinner animation="border" />
          <ReactBootstrap.Spinner animation="grow" size="sm" />
          <ReactBootstrap.Spinner animation="grow" />
        </>
      )}
    </div>
  );
};

export default Container;
