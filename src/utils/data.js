import fb from "../assets/images/fb.png";
import fyipe from "../assets/images/fyipe.jpeg";
import coca from "../assets/images/coca-cola.jpeg";
import img from "../assets/images/profile.png";

const brands = [
  {
    id: 1,
    name: "Coca-Cola",
    symbol: "CO",
    loyalty: 2342,
    role: "brand",
    image: coca,
    users: [1, 3, 4, 6, 7],
    password: 123456,
  },
  {
    id: 2,
    name: "Facebook",
    symbol: "FB",
    loyalty: 2532,
    role: "brand",
    image: fb,
    users: [1, 3, 5, 8],
    password: 123456,
  },
  {
    id: 3,
    name: "Fyipe",
    symbol: "FI",
    loyalty: 5345,
    role: "brand",
    image: fyipe,
    users: [1, 2, 3, 4, 5, 6, 7, 8],
    password: 123456,
  },
  {
    id: 4,
    name: "Netflix",
    symbol: "N",
    loyalty: 57353,
    role: "brand",
    image: fb,
    users: [1, 2, 3, 4, 9],
    password: 123456,
  },
  {
    id: 5,
    name: "Krealax",
    symbol: "Kr",
    role: "brand",
    loyalty: 4563,
    image: coca,
    users: [8, 7, 6, 4, 2, 1],
    password: 123456,
  },
  {
    id: 6,
    name: "Barcelona",
    symbol: "Fcb",
    loyalty: 24653,
    image: fyipe,
    role: "brand",
    users: [1, 2, 8, 4, 5, 7],
    password: 123456,
  },
  {
    id: 7,
    name: "Krealax",
    symbol: "Kr",
    role: "brand",
    loyalty: 4563,
    image: coca,
    users: [8, 7, 6, 5, 4, 2, 1],
    password: 123456,
  },
  {
    id: 8,
    name: "Barcelona",
    symbol: "Fcb",
    loyalty: 24653,
    image: fyipe,
    role: "brand",
    users: [1, 2, 4, 6, 9],
    password: 123456,
  },
  {
    id: 9,
    name: "Krealax",
    symbol: "Kr",
    role: "brand",
    loyalty: 4563,
    image: coca,
    users: [8, 7, 6, 5, 4, 2],
    password: 123456,
  },
];

const users = [
  {
    id: 1,
    firstName: "Courage",
    lastName: "Osemwengie",
    email: "courageosemwengie@gmail.com",
    loyalty: 2342,
    image: img,
    password: 123456,
    role: "user",
    brands: [1, 3, 6, 4],
  },
  {
    id: 2,
    firstName: "Faith",
    lastName: "Kiya",
    email: "kiya@gmail.com",
    loyalty: 324,
    image: fyipe,
    password: 123456,
    role: "user",
    brands: [2, 5, 4, 9],
  },
  {
    id: 3,
    firstName: "Barac",
    lastName: "Joe",
    email: "baracjoe@gmail.com",
    loyalty: 2342,
    image: img,
    password: 123456,
    role: "user",
    brands: [1, 5, 3, 7],
  },
  {
    id: 4,
    firstName: "Joe",
    email: "Smith",
    loyalty: 746,
    image: fyipe,
    role: "user",
    password: 123456,
    brands: [7, 5, 3, 9],
  },
  {
    id: 5,
    firstName: "Joy",
    lastName: "Kilan",
    email: "joy@gmail.com",
    loyalty: 2342,
    image: fyipe,
    role: "user",
    password: 123456,
    brands: [8, 6, 1, 3],
  },
  {
    id: 6,
    name: "Courage osemwengie",
    email: "courageosemwengie@gmail.com",
    loyalty: 2342,
    password: 123456,
    role: "user",
    image: img,
    brands: [7, 3, 5, 2],
  },
  {
    id: 7,
    firstName: "Sharon",
    lastName: "Eloghosa",
    email: "sharon@gmail.com",
    loyalty: 2342,
    image: img,
    password: 123456,
    role: "user",
    brands: [3, 5, 2, 6],
  },
  {
    id: 8,
    firstName: "Blessing",
    lastName: "Olumide",
    email: "blessing06@gmail.com",
    loyalty: 2342,
    image: fyipe,
    role: "user",
    password: 123456,
    brands: [9, 4, 8, 1],
  },
];

let user = localStorage.getItem("user");
let brand = localStorage.getItem("brand");
if (user) {
  user = JSON.parse(user);
  users.unshift(user);
}
if (brand) {
  brand = JSON.parse(brand);
  brands.unshift(brand);
}
export { brands, users };
