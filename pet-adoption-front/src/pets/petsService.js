import http from "../http";

class PetsService {
  getAll() {
    return http.get("/pet-adoption-animals");
  }

  get(id) {
    return http.get(`/pet-adoption-animals/${id}`);
  }

  create(data) {
    return http.post("/pet-adoption-animals", data);
  }

  update(id, data) {
    return http.put(`/pet-adoption-animals/${id}`, data);
  }

  delete(id) {
    return http.delete(`/pet-adoption-animals/${id}`);
  }
}

export default new PetsService();
