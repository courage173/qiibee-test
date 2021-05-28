export const registerUser = async (data, list) => {
  const promise = await new Promise((resolve) => {
    if (data.role === "user") {
      const user = list.some((user) => user.email === data.email);
      if (user) {
        return resolve({ error: true, message: "user already exist" });
      } else {
        return resolve(data);
      }
    } else {
      const user = list.some((user) => user.name === data.name);
      if (user) {
        return resolve({ error: true, message: "brand already exist" });
      } else {
        return resolve(data);
      }
    }
  });
  return promise;
};
export const loginUser = async (data, users) => {
  const user = users.find((user) => user.email === data.email);
  if (user) {
    if (String(user.password) !== String(data.password)) {
      return { error: true, message: "incorrect password" };
    }
    return user;
  } else {
    return { error: true, message: "user does not exist" };
  }
};

export const getUser = async () => {
  const promise = await new Promise((resolve) => {
    const lastLoggedIn = localStorage.getItem("lastUser");
    if (lastLoggedIn === "user") {
      let user = localStorage.getItem("user");
      if (user) {
        resolve(JSON.parse(user));
      } else {
        resolve({ error: true, message: "not authenticated" });
      }
    } else {
      const brand = localStorage.getItem("user");
      if (brand) {
        resolve(JSON.parse(brand));
      } else {
        resolve({ error: true, message: "not authenticated" });
      }
    }
  });
  return promise;
};
