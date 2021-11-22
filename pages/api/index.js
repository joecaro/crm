import axios from "axios";

const API = axios.create({
  baseURL: `https://jsc-crm.herokuapp.com/`,
});

//

// ${process.env.REACT_APP_API_URL}

export const login = (values) => API.post("/users/login", values);
export const updateToken = (token) =>
  API.get("/users/update", { headers: { Authorization: token } });
export const register = (values) => API.post("/users/register", values);
export const getUsers = (token) =>
  API.get("/users/list", { headers: { Authorization: token } });
export const getList = (token) =>
  API.get("/committees", { headers: { Authorization: token } });
export const addCommittee = (token, committee) =>
  API.post(`committees/add`, committee, { headers: { Authorization: token } });
export const updateStatus = (id, status) =>
  API.post(`committees/update-status/${id}`, { status: status });
export const updateCommittee = (id, committeeInfo) =>
  API.post(`committees/update-committee/${id}`, committeeInfo);
export const Reset = (filingFrequency) =>
  API.post(`committees/reset`, filingFrequency);
export const updateReport = (id, reportInfo) =>
  API.post(`committees/update-report/${id}`, reportInfo);
export const deleteCommittee = (id) => API.post(`/committees/delete/${id}`);
export const addEvent = (values) => API.post("/events/add", values);
export const getEvents = () => API.get("/events");
