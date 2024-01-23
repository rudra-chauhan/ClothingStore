import Images from '../UTILS/Images';

// let event = [
//   {id: '123', ename: 'abc'},
//   {id: '125', ename: 'def'},
// ];
// let speaker = [
//   {id: '11', sname: 's1', event_id: '123'}, //FK from event table
//   {id: '13', sname: 's2', event_id: '123'},
//   {id: '15', name: 's4', event_id: '125'},
// ];
// let result = event.map(e => ({
//   ...e,
//   speaker: speaker.filter(({event_id}) => event_id === e.id),
// }));

// console.log(result);
const CategoryList = [
  {
    id: 1,
    Name: 'Topwear',
  },
  {
    id: 2,
    Name: 'Bottomwear',
  },
  {
    id: 3,
    Name: 'Winterwear',
  },
  {
    id: 4,
    Name: 'Accessories',
  },
  {
    id: 5,
    Name: 'PlusSize',
  },
  {
    id: 6,
    Name: 'Footwear',
  },
  {
    id: 7,
    Name: 'Indianwear',
  },
  {
    id: 8,
    Name: 'Sports & ActiveWear',
  },
  {
    id: 9,
    Name: 'Inner & LoungeWear',
  },
];
const CategoryDataList = [
  {
    id: 1,
    name: 'Printed T-shirts',
    photo: Images.Man,
    CatId: 1,
    type: 'Man',
  },
  {
    id: 2,
    name: 'Oversized T-shirts',
    photo: Images.Man,
    CatId: 1,
    type: 'Man',
  },
  {
    id: 3,
    name: 'Plain T-shirts',
    photo: Images.Man,
    CatId: 1,
    type: 'Man',
  },
  {
    id: 4,
    name: 'Full Sleeve T-shirts',
    photo: Images.Woman,
    CatId: 1,
    type: 'Man',
  },
  {
    id: 5,
    name: 'Sweaters',
    photo: Images.Man,
    CatId: 1,
    type: 'Man',
  },
  {
    id: 6,
    name: 'Sweatshirts',
    photo: Images.Man,
    CatId: 1,
    type: 'Man',
  },
  {
    id: 7,
    name: 'Hoodies',
    photo: Images.Man,
    CatId: 1,
    type: 'Man',
  },
  {
    id: 8,
    name: 'Jackets',
    photo: Images.Man,
    CatId: 1,
    type: 'Man',
  },
  {
    id: 9,
    name: 'Fashion T-shirts',
    photo: Images.Man,
    CatId: 1,
    type: 'Man',
  },
  {
    id: 10,
    name: 'Half Sleeve T-shirts',
    photo: Images.Man,
    CatId: 1,
    type: 'Man',
  },
  {
    id: 11,
    name: 'Shirts',
    photo: Images.Man,
    CatId: 1,
    type: 'Man',
  },
  {
    id: 12,
    name: 'Kurtas',
    photo: Images.Man,
    CatId: 1,
    type: 'Man',
  },
  {
    id: 13,
    name: 'Vests',
    photo: Images.Man,
    CatId: 1,
    type: 'Man',
  },
  {
    id: 14,
    name: 'Polo T-shirts',
    photo: Images.Man,
    CatId: 1,
    type: 'Man',
  },
  {
    id: 15,
    name: 'Joggers',
    photo: Images.Woman,
    CatId: 2,
    type: 'Man',
  },
  {
    id: 16,
    name: 'Pajamas',
    photo: Images.Man,
    CatId: 2,
    type: 'Man',
  },
  {
    id: 17,
    name: 'Shorts',
    photo: Images.Man,
    CatId: 2,
    type: 'Man',
  },
  {
    id: 18,
    name: 'Jeans & Denims',
    photo: Images.Man,
    CatId: 2,
    type: 'Man',
  },
  {
    id: 19,
    name: 'Boxers',
    photo: Images.Man,
    CatId: 2,
    type: 'Man',
  },
  {
    id: 20,
    name: 'Briefs',
    photo: Images.Man,
    CatId: 2,
    type: 'Man',
  },
  {
    id: 21,
    name: 'Trunks',
    photo: Images.Man,
    CatId: 2,
    type: 'Man',
  },
  {
    id: 22,
    name: 'Trousers & Pants',
    photo: Images.Man,
    CatId: 2,
    type: 'Man',
  },
  {
    id: 23,
    name: 'SweatShirts',
    photo: Images.Man,
    CatId: 3,
    type: 'Man',
  },
  {
    id: 24,
    name: 'Hoodies',
    photo: Images.Man,
    CatId: 3,
    type: 'Man',
  },
  {
    id: 25,
    name: 'Jackets',
    photo: Images.Man,
    CatId: 3,
    type: 'Man',
  },
  {
    id: 26,
    name: 'Sweaters',
    photo: Images.Man,
    CatId: 3,
    type: 'Man',
  },
  {
    id: 27,
    name: 'Joggers',
    photo: Images.Man,
    CatId: 3,
    type: 'Man',
  },
  {
    id: 28,
    name: 'Mobile Covers',
    photo: Images.Man,
    CatId: 4,
    type: 'Man',
  },
  {
    id: 29,
    name: 'Caps',
    photo: Images.Man,
    CatId: 4,
    type: 'Man',
  },
  {
    id: 30,
    name: 'BackPacks',
    photo: Images.Man,
    CatId: 4,
    type: 'Man',
  },
  {
    id: 31,
    name: 'Masks',
    photo: Images.Man,
    CatId: 4,
    type: 'Man',
  },
  {
    id: 32,
    name: 'Socks',
    photo: Images.Man,
    CatId: 4,
    type: 'Man',
  },
  {
    id: 33,
    name: 'Mugs',
    photo: Images.Man,
    CatId: 4,
    type: 'Man',
  },
  {
    id: 34,
    name: 'Shirts',
    photo: Images.Man,
    CatId: 5,
    type: 'Man',
  },
  {
    id: 35,
    name: 'Vests',
    photo: Images.Man,
    CatId: 5,
    type: 'Man',
  },
  {
    id: 36,
    name: 'Jeans & Denims',
    photo: Images.Man,
    CatId: 5,
    type: 'Man',
  },
  {
    id: 37,
    name: 'T-Shirts',
    photo: Images.Man,
    CatId: 5,
    type: 'Man',
  },
  {
    id: 38,
    name: 'Kurtas',
    photo: Images.Man,
    CatId: 5,
    type: 'Man',
  },
  {
    id: 39,
    name: 'Sliders',
    photo: Images.Man,
    CatId: 6,
    type: 'Man',
  },
  {
    id: 40,
    name: 'Clogs',
    photo: Images.Man,
    CatId: 6,
    type: 'Man',
  },
  {
    id: 41,
    name: 'Casual Shoes',
    photo: Images.Man,
    CatId: 6,
    type: 'Man',
  },
  {
    id: 42,
    name: 'Kurtas',
    photo: Images.Man,
    CatId: 7,
    type: 'Man',
  },
  {
    id: 43,
    name: 'Kurta Pyjama Sets',
    photo: Images.Man,
    CatId: 7,
    type: 'Man',
  },
  {
    id: 44,
    name: 'ActiveWear Shorts',
    photo: Images.Man,
    CatId: 8,
    type: 'Man',
  },
  {
    id: 45,
    name: 'ActiveWear T-shirts',
    photo: Images.Man,
    CatId: 8,
    type: 'Man',
  },
  {
    id: 46,
    name: 'ActiveWear Joggers',
    photo: Images.Man,
    CatId: 8,
    type: 'Man',
  },
  {
    id: 47,
    name: 'Briefs',
    photo: Images.Man,
    CatId: 9,
    type: 'Man',
  },
  {
    id: 48,
    name: 'Trunks',
    photo: Images.Man,
    CatId: 9,
    type: 'Man',
  },
  {
    id: 49,
    name: 'Boxers',
    photo: Images.Man,
    CatId: 9,
    type: 'Man',
  },
];
const CategoryData = [
  {
    id: 1,
    image: Images.Man,
    price: 199,
    CdtId: 1,
  },
  {
    id: 2,
    image: Images.Man,
    price: 199,
    CdtId: 1,
  },
  {
    id: 3,
    image: Images.Man,
    price: 199,
    CdtId: 2,
  },
  {
    id: 4,
    image: Images.Man,
    price: 199,
    CdtId: 2,
  },
  {
    id: 5,
    image: Images.Man,
    price: 199,
    CdtId: 3,
  },
  {
    id: 6,
    image: Images.Man,
    price: 199,
    CdtId: 3,
  },
  {
    id: 7,
    image: Images.Man,
    price: 199,
    CdtId: 4,
  },
  {
    id: 8,
    image: Images.Man,
    price: 199,
    CdtId: 4,
  },
  {
    id: 9,
    image: Images.Man,
    price: 199,
    CdtId: 5,
  },
  {
    id: 10,
    image: Images.Man,
    price: 199,
    CdtId: 5,
  },
  {
    id: 11,
    image: Images.Tribe,
    price: 399,
    CdtId: 1,
  },
  {
    id: 12,
    image: Images.Tribe,
    price: 399,
    CdtId: 1,
  },
  {
    id: 13,
    image: Images.Tribe,
    price: 399,
    CdtId: 1,
  },
  {
    id: 14,
    image: Images.Tribe,
    price: 399,
    CdtId: 1,
  },
  {
    id: 15,
    image: Images.Tribe,
    price: 399,
    CdtId: 1,
  },
  {
    id: 16,
    image: Images.Tribe,
    price: 399,
    CdtId: 1,
  },
  {
    id: 17,
    image: Images.Tribe,
    price: 399,
    CdtId: 1,
  },
  {
    id: 18,
    image: Images.Tribe,
    price: 399,
    CdtId: 1,
  },
  {
    id: 19,
    image: Images.Tribe,
    price: 399,
    CdtId: 1,
  },
];
export const ListofOptions = CategoryDataList.map(e => ({
  ...e,
  data: CategoryData.filter(({CdtId}) => CdtId === e.id),
}));
export const ListofData = CategoryList.map(e => ({
  ...e,
  data: CategoryDataList.filter(({CatId}) => CatId === e.id),
}));

// const ListOfData = [
//   {
//     id: 1,
//     Name: 'Topwear',
//     data: [
//       {
//         id: 1,
//         name: 'Printed T-shirts',
//         photo: Images.Man,
//       },
//       {
//         id: 2,
//         name: 'Oversized T-shirts',
//         photo: Images.Man,
//       },
//       {
//         id: 3,
//         name: 'Plain T-shirts',
//         photo: Images.Man,
//       },
//       {
//         id: 4,
//         name: 'Full Sleeve T-shirts',
//         photo: Images.Woman,
//       },
//       {
//         id: 5,
//         name: 'Sweaters',
//         photo: Images.Man,
//       },
//       {
//         id: 6,
//         name: 'Sweatshirts',
//         photo: Images.Man,
//       },
//       {
//         id: 7,
//         name: 'Hoodies',
//         photo: Images.Man,
//       },
//       {
//         id: 8,
//         name: 'Jackets',
//         photo: Images.Man,
//       },
//       {
//         id: 9,
//         name: 'Fashion T-shirts',
//         photo: Images.Man,
//       },
//       {
//         id: 10,
//         name: 'Half Sleeve T-shirts',
//         photo: Images.Man,
//       },
//       {
//         id: 11,
//         name: 'Shirts',
//         photo: Images.Man,
//       },
//       {
//         id: 12,
//         name: 'Kurtas',
//         photo: Images.Man,
//       },
//       {
//         id: 13,
//         name: 'Vests',
//         photo: Images.Man,
//       },
//       {
//         id: 14,
//         name: 'Polo T-shirts',
//         photo: Images.Man,
//       },
//     ],
//   },
//   {
//     id: 2,
//     Name: 'Bottomwear',
//     data: [
//       {
//         name: 'Joggers',
//         photo: Images.Woman,
//       },
//       {
//         name: 'Pajamas',
//         photo: Images.Man,
//       },
//       {
//         name: 'Shorts',
//         photo: Images.Man,
//       },
//       {
//         name: 'Jeans & Denims',
//         photo: Images.Man,
//       },
//       {
//         name: 'Boxers',
//         photo: Images.Man,
//       },
//       {
//         name: 'Briefs',
//         photo: Images.Man,
//       },
//       {
//         name: 'Trunks',
//         photo: Images.Man,
//       },
//       {
//         name: 'Trousers & Pants',
//         photo: Images.Man,
//       },
//     ],
//   },
//   {
//     id: 3,
//     Name: 'Winterwear',
//     data: [
//       {
//         name: 'Printed T-shirts',
//         photo: Images.Man,
//       },
//       {
//         name: 'Oversized T-shirts',
//         photo: Images.Man,
//       },
//       {
//         name: 'Plain T-shirts',
//         photo: Images.Man,
//       },
//     ],
//   },
//   {
//     id: 4,
//     Name: 'Accessories',
//     data: [
//       {
//         name: 'Printed T-shirts',
//         photo: Images.Woman,
//       },
//       {
//         name: 'Oversized T-shirts',
//         photo: Images.Man,
//       },
//       {
//         name: 'Plain T-shirts',
//         photo: Images.Man,
//       },
//     ],
//   },
//   {
//     id: 5,
//     Name: 'Plus Size',
//     data: [
//       {
//         name: 'Printed T-shirts',
//         photo: Images.Man,
//       },
//       {
//         name: 'Oversized T-shirts',
//         photo: Images.Man,
//       },
//       {
//         name: 'Plain T-shirts',
//         photo: Images.Man,
//       },
//     ],
//   },
//   {
//     id: 6,
//     Name: 'Footwear',
//     data: [
//       {
//         name: 'Printed T-shirts',
//         photo: Images.Woman,
//       },
//       {
//         name: 'Oversized T-shirts',
//         photo: Images.Man,
//       },
//       {
//         name: 'Plain T-shirts',
//         photo: Images.Man,
//       },
//     ],
//   },
//   {
//     id: 7,
//     Name: 'Indian Wear',
//     data: [
//       {
//         name: 'Printed T-shirts',
//         photo: Images.Man,
//       },
//       {
//         name: 'Oversized T-shirts',
//         photo: Images.Man,
//       },
//       {
//         name: 'Plain T-shirts',
//         photo: Images.Man,
//       },
//     ],
//   },
//   {
//     id: 8,
//     Name: 'Sports & Activewear',
//     data: [
//       {
//         name: 'Printed T-shirts',
//         photo: Images.Woman,
//       },
//       {
//         name: 'Oversized T-shirts',
//         photo: Images.Man,
//       },
//       {
//         name: 'Plain T-shirts',
//         photo: Images.Man,
//       },
//     ],
//   },
//   {
//     id: 9,
//     Name: 'Innerwear & Loungewear',
//     data: [
//       {
//         name: 'Printed T-shirts',
//         photo: Images.Man,
//       },
//       {
//         name: 'Oversized T-shirts',
//         photo: Images.Man,
//       },
//       {
//         name: 'Plain T-shirts',
//         photo: Images.Man,
//       },
//     ],
//   },
//   {
//     id: 10,
//     Name: 'Personal Care & Grooming',
//     data: [
//       {
//         name: 'Printed T-shirts',
//         photo: Images.Woman,
//       },
//       {
//         name: 'Oversized T-shirts',
//         photo: Images.Man,
//       },
//       {
//         name: 'Plain T-shirts',
//         photo: Images.Man,
//       },
//     ],
//   },
//   {
//     id: 11,
//     Name: 'Specials',
//     data: [
//       {
//         name: 'Printed T-shirts',
//         photo: Images.Man,
//       },
//       {
//         name: 'Oversized T-shirts',
//         photo: Images.Man,
//       },
//       {
//         name: 'Plain T-shirts',
//         photo: Images.Woman,
//       },
//     ],
//   },
// ];

// export default ListOfData;
