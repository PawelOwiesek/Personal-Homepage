import axios from "axios";

const API = "https://api.github.com/users/pawelowiesek/repos";

export const gitHubRepositories = async () => {
  try {
    const response = await axios.get(API);
    return response.data;
  } catch (error) {
    return new Error(error).statusText;
  }
};
