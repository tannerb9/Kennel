const remoteURL = "http://localhost:5002";

export default {
  get(tab, id) {
    return fetch(`${remoteURL}/${tab}/${id}`).then((data) => data.json());
  },
  getAll(tab) {
    return fetch(`${remoteURL}/${tab}`).then((data) => data.json());
  },
  delete(tab, id) {
    return fetch(`${remoteURL}/${tab}/${id}`, {
      method: "DELETE",
    }).then((data) => data.json());
  },
  post(tab, obj) {
    return fetch(`${remoteURL}/${tab}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    }).then((data) => data.json());
  },
  update(tab, editedObj) {
    return fetch(`${remoteURL}/${tab}/${editedObj.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedObj),
    }).then((data) => data.json());
  },
};
