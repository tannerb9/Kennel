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

  const removeOwner = id => {
    OwnerManager.delete(id).then(OwnerManager.getAll().then(setOwners))
  }

  useEffect(() => {
    getOwners();
  }, []);

  return (
    <div className="container-cards">
      {owners.map(owner => <OwnerCard key={owner.id} owner={owner} removeOwner={removeOwner} />)}
    </div>
  );
};

export default OwnerList;