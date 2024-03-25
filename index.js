const axios = require("axios");

const fakeData = async () => {
  try {
    let res = await axios.get("https://jsonplaceholder.typicode.com/users")

    return res;
  } catch (error) {
    console.log(error);
  }  
}

module.exports = fakeData;