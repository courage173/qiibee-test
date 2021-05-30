import fb from '../assets/images/fb.png';
import fyipe from '../assets/images/fyipe.jpeg';
import coca from '../assets/images/coca-cola.jpeg';
import img from '../assets/images/profile.png';
import user1 from '../assets/images/user1.png';
import user2 from '../assets/images/user2.png';
import user3 from '../assets/images/user3.png';
import user4 from '../assets/images/user4.png';
import user5 from '../assets/images/user5.png';
import user6 from '../assets/images/user6.jpg';
import user7 from '../assets/images/user7.jpeg';
import user8 from '../assets/images/user8.jpeg';

const brands = [
    {
        id: 1,
        name: 'Coca-Cola',
        symbol: 'CO',
        loyalty: 2342,
        role: 'brand',
        image: coca,
        users: [1, 3, 4, 6, 7],
        password: 123456,
    },
    {
        id: 2,
        name: 'Facebook',
        symbol: 'FB',
        loyalty: 2532,
        role: 'brand',
        image: fb,
        users: [1, 3, 5, 8],
        password: 123456,
    },
    {
        id: 3,
        name: 'Fyipe',
        symbol: 'FI',
        loyalty: 5345,
        role: 'brand',
        image: fyipe,
        users: [1, 2, 3, 4, 5, 6, 7, 8],
        password: 123456,
    },
    {
        id: 4,
        name: 'Netflix',
        symbol: 'N',
        loyalty: 57353,
        role: 'brand',
        image: fb,
        users: [1, 2, 3, 4, 9],
        password: 123456,
    },
    {
        id: 5,
        name: 'Krealax',
        symbol: 'Kr',
        role: 'brand',
        loyalty: 4563,
        image: coca,
        users: [8, 7, 6, 4, 2, 1],
        password: 123456,
    },
    {
        id: 6,
        name: 'Barcelona',
        symbol: 'Fcb',
        loyalty: 24653,
        image: fyipe,
        role: 'brand',
        users: [1, 2, 8, 4, 5, 7],
        password: 123456,
    },
    {
        id: 7,
        name: 'Krealax',
        symbol: 'Kr',
        role: 'brand',
        loyalty: 4563,
        image: coca,
        users: [8, 7, 6, 5, 4, 2, 1],
        password: 123456,
    },
    {
        id: 8,
        name: 'Barcelona',
        symbol: 'Fcb',
        loyalty: 24653,
        image: fyipe,
        role: 'brand',
        users: [1, 2, 4, 6, 9],
        password: 123456,
    },
    {
        id: 9,
        name: 'Krealax',
        symbol: 'Kr',
        role: 'brand',
        loyalty: 4563,
        image: coca,
        users: [8, 7, 6, 5, 4, 2],
        password: 123456,
    },
];

const users = [
    {
        id: 1,
        firstName: 'Courage',
        lastName: 'Osemwengie',
        email: 'courageosemwengie@gmail.com',
        loyalty: 2342,
        image: user6,
        password: 123456,
        role: 'user',
        brands: [1, 3, 6, 4],
    },
    {
        id: 2,
        firstName: 'Faith',
        lastName: 'Kiya',
        email: 'kiya@gmail.com',
        loyalty: 324,
        image: img,
        password: 123456,
        role: 'user',
        brands: [2, 5, 4, 9],
    },
    {
        id: 3,
        firstName: 'Barac',
        lastName: 'Joe',
        email: 'baracjoe@gmail.com',
        loyalty: 2342,
        image: user3,
        password: 123456,
        role: 'user',
        brands: [1, 5, 3, 7],
    },
    {
        id: 4,
        firstName: 'Joe',
        lastName: 'Smith',
        email: 'joesmith@gmail.com',
        loyalty: 746,
        image: user4,
        role: 'user',
        password: 123456,
        brands: [7, 5, 3, 9],
    },
    {
        id: 5,
        firstName: 'Joy',
        lastName: 'Kilan',
        email: 'joy@gmail.com',
        loyalty: 2342,
        image: user2,
        role: 'user',
        password: 123456,
        brands: [8, 6, 1, 3],
    },
    {
        id: 6,
        firstName: 'Kola',
        lastName: 'wole',
        email: 'kola@gmail.com',
        loyalty: 2342,
        password: 123456,
        role: 'user',
        image: user1,
        brands: [7, 3, 5, 2],
    },
    {
        id: 7,
        firstName: 'Sharon',
        lastName: 'Eloghosa',
        email: 'sharon@gmail.com',
        loyalty: 2342,
        image: user5,
        password: 123456,
        role: 'user',
        brands: [3, 5, 2, 6],
    },
    {
        id: 8,
        firstName: 'Blessing',
        lastName: 'Olumide',
        email: 'blessing06@gmail.com',
        loyalty: 2342,
        image: user7,
        role: 'user',
        password: 123456,
        brands: [9, 4, 8, 1],
    },
    {
        id: 9,
        firstName: 'Horace',
        lastName: 'Akpan',
        email: 'horace@gmail.com',
        loyalty: 2342,
        image: user8,
        role: 'user',
        password: 123456,
        brands: [9, 4, 8, 1],
    },
];

let user = localStorage.getItem('user');
let brand = localStorage.getItem('brand');
if (user) {
    user = JSON.parse(user);
    const isPresent = users.some(res => res.id === user.id);
    if (!isPresent) {
        users.unshift(user);
    }
}
if (brand) {
    brand = JSON.parse(brand);

    const isPresent = users.some(res => res.id === brand.id);
    if (!isPresent) {
        brands.unshift(brand);
    }
}
export { brands, users };
