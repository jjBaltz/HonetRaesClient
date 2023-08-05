const _apiUrlEmployees = "/employees";

export const getEmployees = () => {
  return fetch(_apiUrlEmployees).then((r) => r.json());
};

//export a function here that gets a ticket by id
export const getSingleEmployee = (id) => new Promise((resolve, reject) => {
  fetch(`${_apiUrlEmployees}/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
