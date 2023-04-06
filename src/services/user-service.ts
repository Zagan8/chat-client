import axios from "axios";

const userService = {
  getAllUsers: async () => {
    try {
      const users = await axios.get("http://localhost:8000/user");
      return users.data;
    } catch (e) {
      console.error(`failed bring user with error ${e}`);
    }
  },
};

export default userService;
