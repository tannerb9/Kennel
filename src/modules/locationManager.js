const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/locations/${id}`).then((response) =>
      response.json()
    );
  },
  getAll() {
    return fetch(`${remoteURL}/locations`).then((response) => response.json());
  },
  delete(id) {
    return fetch(`${remoteURL}/locations/${id}`, {
      method: "DELETE",
    }).then((response) => response.json());
  },
  post(location) {
    return fetch(`${remoteURL}/locations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(location),
    }).then((response) => response.json());
  },
};
