import React, { useState, useEffect } from "react";
import OwnerCard from "./ownerCard";
import Manager from "../../modules/Manager";
import { removeOb, removeObj } from "../../helpers/helpers";

const OwnerList = (props) => {
  const [owners, setOwners] = useState([]);

  const getOwners = () => {
    Manager.getAll("owners").then((owners) => {
      setOwners(owners);
    });
  };

  useEffect(() => {
    getOwners();
  }, []);

  return (
    <>
      <section className="">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/owners/new");
          }}
        >
          New Owner
        </button>
      </section>
      <div className="container-cards">
        {owners.map((owner) => (
          <OwnerCard
            key={owner.id}
            owner={owner}
            removeOwner={(evt) => removeObj("owners", evt, setOwners)}
          />
        ))}
      </div>
    </>
  );
};

export default OwnerList;
