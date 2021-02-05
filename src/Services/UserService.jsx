import http from "./Http";

// class UserService {

//   register(userData) {
//     return http.post("/user/userSignUp", userData);
//   }

const register = (data) => {
  return http.post("/user/userSignUp", data);
};
const login = (data) => {
  return http.post("/user/login", data);
};
const forgot = (data) => {
  return http.post("/user/reset", data);
};

const reset = (data) => {
  return http.post("/user/reset", data);
};

// export default UserService;

export default {
  register,
  forgot,
  login,
  reset,
};
