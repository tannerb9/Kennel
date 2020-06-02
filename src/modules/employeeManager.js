const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/employees/${id}`).then((response) =>
      response.json()
    );
  },
  getAll() {
    return fetch(`${remoteURL}/employees`).then((response) => response.json());
  },
  delete(id) {
    return fetch(`${remoteURL}/employees/${id}`, {
      method: "DELETE",
    }).then((result) => result.json());
  },
  post(newEmployee) {
    return fetch(`${remoteURL}/employees`, {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(newEmployee),
    }).then((response) => response.json());
  },
};
