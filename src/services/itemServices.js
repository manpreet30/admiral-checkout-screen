import axios from "axios";

const getItems = () => {
  return axios.get("https://6058adadc3f49200173aea7d.mockapi.io/api/admiral");
};

export { getItems };
