import http from "../http-common.js";

class CustomerDataService {
  getAll() {
    return http.get("/customer");
  }

  get(id) {
    return http.get(`/customer/${id}`);
  }

  create(data) {
    return http.post("/customer/create", data);
  }

  update(id, data) {
    return http.put(`/customer/update/${id}`, data);
  }

  delete(id) {
    return http.delete(`/customer/delete/${id}`);
  }

//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }

  // findByNameCustomer(nameCustomer) {
  //   return http.get(`/customer/nameCustomer/${nameCustomer}`);
  // }
  login(data) {
    return http.post("/customer/login", data);
  }
}

export default new CustomerDataService();