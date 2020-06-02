const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/owners/${id}`).then((response) =>
      response.json()
    );
  },
  getAll() {
    return fetch(`${remoteURL}/owners`).then((response) => response.json());
  },
  delete(id) {
    return fetch(`${remoteURL}/owners/${id}`, {
      method: "DELETE",
    }).then((result) => result.json());
  },
  post(owner) {
    return fetch(`${remoteURL}/owners`, {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(owner),
    }).then((response) => response.json());
  },
};
