const _apiUrlCustomers = "/customers";

export const getCustomers = () => {
  return fetch(_apiUrlCustomers).then((r) => r.json());
};

//export a function here that gets a ticket by id
export const getSingleCustomer = (id) => new Promise((resolve, reject) => {
  fetch(`${_apiUrlCustomers}/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
