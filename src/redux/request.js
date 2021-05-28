export const registerUser = async (data, users) => {
  const promise = await new Promise((resolve) => {
    const user = users.some((user) => user.email === data.email);
    if (user) {
      return resolve({ error: true, message: "user already exist" });
    } else {
      return resolve(data);
    }
  });
  return promise;
};
export const loginUser = async (data, users) => {
  const promise = await new Promise((resolve) => {
    const user = users.find((user) => user.email === data.email);
    if (user) {
      if (String(user.password) !== String(data.password)) {
        return resolve({ error: true, message: "incorrect password" });
      }
      return resolve(user);
    } else {
      return resolve({ error: true, message: "user does not exist" });
    }
  });
  return promise;
};
