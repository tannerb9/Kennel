import React, { useState, useEffect } from 'react';
import OwnerCard from "./ownerCard";
import OwnerManager from "../../modules/ownerManager";

const OwnerList = () => {
  const [owners, setOwners] = useState([]);

  const getOwners = () => {
    OwnerManager.getAll().then(owners => {
      setOwners(owners)
    });
  };

  useEffect(() => {
    getOwners();
  }, []);

  return (
    <div className="container-cards">
      {owners.map(owner => <OwnerCard key={owner.id} owner={owner} />)}
    </div>
  );
};

export default OwnerList;