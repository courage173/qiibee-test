import { randomNumberGenerator, generateId } from "../utils/helper";
export const registerUser = async (data, list, brands) => {
  const promise = await new Promise((resolve) => {
    if (data.role === "user") {
      const user = list.some(
        (user) => user.email.toLowerCase() === data.email.toLowerCase()
      );
      if (user) {
        resolve({ error: true, message: "user already exist" });
      } else {
        //get automatically generated brand id's to the user will already be following some brands
        const brandIds = randomNumberGenerator(4);
        const id = generateId();
        data.id = id;
        data.brands = brandIds;
        data.loyalty = 5424;
        return resolve(data);
      }
    } else {
      const user = brands.some(
        (user) => user.name.toLowerCase() === data.name.toLowerCase()
      );
      if (user) {
        resolve({ error: true, message: "brand already exist" });
      } else {
        //get automatically generated user id's to the brand users following it
        const userIds = randomNumberGenerator(6);
        const id = generateId();
        data.id = id;
        data.users = userIds;
        data.loyalty = Number(data.loyalty);
        resolve(data);
      }
    }
  });
  return promise;
};
export const loginUser = async (data, users, brands) => {
  let user;
  if (data.name && !data.email) {
    user = brands.find(
      (user) => user.name.toLowerCase() === data.name.toLowerCase()
    );
  } else if (!data.name && data.email) {
    user = users.find(
      (user) => user.email.toLowerCase() === data.email.toLowerCase()
    );
  }

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
      const brand = localStorage.getItem("brand");
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
    let brands = user.brands;
    if (authBrand && authBrand.id === brandId) {
      let brandUsers = authBrand.users;

      if (brandUsers.includes(user.id)) {
        brandUsers = brandUsers.filter((id) => Number(id) !== user.id);
      } else {
        brandUsers.unshift(user.id);
      }
      authBrand.users = brandUsers;
      localStorage.setItem("brand", JSON.stringify(authBrand));
    }
    if (brands.includes(brandId)) {
      brands = brands.filter((id) => Number(id) !== brandId);
    } else {
      brands.push(brandId);
    }
    user.brands = brands;
    localStorage.setItem("user", JSON.stringify(user));
    resolve({ brandId, userId: user.id });
  });
  return promise;
};

export const redeemLoyalty = async (amount) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const promise = await new Promise((resolve) => {
    const point = Number(user.loyalty);
    if (Number(amount) > point) {
      return resolve({ error: true, message: "insufficient balance" });
    } else {
      const result = point - Number(amount);
      user.loyalty = result;
      localStorage.setItem("user", JSON.stringify(user));
      return resolve(user);
    }
  });
  return promise;
};

export const rewardLoyalty = async (payload, users) => {
  const authUser = JSON.parse(localStorage.getItem("user"));
  const brandUser = JSON.parse(localStorage.getItem("brand"));
  const promise = await new Promise((resolve) => {
    const amount = Number(payload.point);
    const userIds = payload.userIds;
    let totalAdded = userIds.length * amount;

    if (totalAdded > Number(brandUser.loyalty)) {
      return resolve({ error: true, message: "insufficient balance" });
    }
    const newUsers = users.map((user) => {
      if (userIds.includes(user.id)) {
        const sum = user.loyalty + amount;
        user.loyalty = sum;
        if (authUser.id === user.id) {
          localStorage.setItem("user", user);
        }
        return user;
      }
      return user;
    });
    const newPoint = Number(brandUser.loyalty) - totalAdded;
    brandUser.loyalty = newPoint;
    localStorage.setItem("brand", JSON.stringify(brandUser));
    resolve({ users: newUsers, point: newPoint });
  });
  return promise;
};
