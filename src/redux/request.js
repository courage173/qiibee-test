import { randomNumberGenerator, generateId } from "../utils/helper";
export const registerUser = async (data, list) => {
  const promise = await new Promise((resolve) => {
    if (data.role === "user") {
      const user = list.some((user) => user.email === data.email);
      if (user) {
        return resolve({ error: true, message: "user already exist" });
      } else {
        //get automatically generated brand id's to the user will already be following some brands
        const brandIds = randomNumberGenerator(4);
        const id = generateId();
        data.id = id;
        data.brand = brandIds;
        return resolve(data);
      }
    } else {
      const user = list.some((user) => user.name === data.name);
      if (user) {
        return resolve({ error: true, message: "brand already exist" });
      } else {
        //get automatically generated user id's to the brand users following it
        const userIds = randomNumberGenerator(5);
        const id = generateId();
        data.id = id;
        data.users = userIds;
        return resolve(data);
      }
    }
  });
  return promise;
};
export const loginUser = async (data, users) => {
  console.log(data);
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

//brand request followBrand

export const getSingleBrand = async (id, brands) => {
  console.log(id);
  const promise = await new Promise((resolve) => {
    const brand = brands.find((brand) => Number(brand.id) === Number(id));
    if (brand) {
      resolve(brand);
    } else {
      resolve({ error: true, message: "brand with id not found" });
    }
  });
  return promise;
};

export const followBrand = async (brand) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const authBrand = JSON.parse(localStorage.getItem("brand"));
  const promise = await new Promise((resolve) => {
    const brandId = Number(brand.id);
    let brands = user.brand;
    if (authBrand.id === brandId) {
      let brandUsers = authBrand.users;
      if (brandUsers.includes(user.id)) {
        brandUsers = brandUsers.filter((id) => Number(id) !== user.id);
      } else {
        brandUsers = brandUsers.unshift(user.id);
      }
      authBrand.users = brandUsers;
      localStorage.setItem("brand", JSON.parse(authBrand));
    }
    if (brands.includes(brandId)) {
      brands = brands.filter((id) => Number(id) !== brandId);
    } else {
      brands.push(brandId);
    }
    user.brand = brands;
    localStorage.setItem("user", JSON.stringify(user));
    resolve({ brandId, userId: user.id });
  });
  return promise;
};
