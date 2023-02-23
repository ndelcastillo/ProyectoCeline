const book = [
    {
        id: 0,
        name: "page 0",
        img: "/assets/images/arquitectura/pag0.png",
    },
    {
        id: 1,
        name: "page 1",
        img: "/assets/images/arquitectura/pag1.png",
    },
    {
        id: 2,
        name: "page 2",
        img: "/assets/images/arquitectura/pag2.png",
    },
    {
        id: 3,
        name: "page 3",
        img: "/assets/images/arquitectura/pag3.png",
    },
    {
        id: 4,
        name: "page 4",
        img: "/assets/images/arquitectura/pag4.png",
    },
    {
        id: 5,
        name: "page 5",
        img: "/assets/images/arquitectura/pag5.png",
    },
    {
        id: 6,
        name: "page 6",
        img: "/assets/images/arquitectura/pag6.png",
    },
    {
        id: 7,
        name: "page 7",
        img: "/assets/images/arquitectura/pag7.png",
    },
    {
        id: 8,
        name: "page 8",
        img: "/assets/images/arquitectura/pag8.png",
    },
    {
        id: 9,
        name: "page 9",
        img: "/assets/images/arquitectura/pag9.png",
    },
    {
        id: 10,
        name: "page 10",
        img: "/assets/images/arquitectura/pag10.png",
    },
    {
        id: 11,
        name: "page 11",
        img: "/assets/images/arquitectura/pag11.png",
    },
    {
        id: 12,
        name: "page 12",
        img: "/assets/images/arquitectura/pag12.png",
    },
    {
        id: 13,
        name: "page 13",
        img: "/assets/images/arquitectura/pag13.png",
    },
    {
        id: 14,
        name: "page 14",
        img: "/assets/images/arquitectura/pag14.png",
    },
    {
        id: 15,
        name: "page 15",
        img: "/assets/images/arquitectura/pag15.png",
    },
    {
        id: 16,
        name: "page 16",
        img: "/assets/images/arquitectura/pag16.png",
    },
    {
        id: 17,
        name: "page 17",
        img: "/assets/images/arquitectura/pag17.png",
    },
    {
        id: 18,
        name: "page 18",
        img: "/assets/images/arquitectura/pag18.png",
    },
    {
        id: 19,
        name: "page 19",
        img: "/assets/images/arquitectura/pag19.png",
    },
    {
        id: 20,
        name: "page 20",
        img: "/assets/images/arquitectura/pag20.png",
    },
    {
        id: 21,
        name: "page 21",
        img: "/assets/images/arquitectura/pag21.png",
    },
    {
        id: 22,
        name: "page 22",
        img: "/assets/images/arquitectura/pag22.png",
    },
    {
        id: 23,
        name: "page 23",
        img: "/assets/images/arquitectura/pag23.png",
    },
    {
        id: 24,
        name: "page 24",
        img: "/assets/images/arquitectura/pag24.png",
    },
    {
        id: 25,
        name: "page 25",
        img: "/assets/images/arquitectura/pag25.png",
    },
    {
        id: 26,
        name: "page 26",
        img: "/assets/images/arquitectura/pag26.png",
    },
    {
        id: 27,
        name: "page 27",
        img: "/assets/images/arquitectura/pag27.png",
    },
    {
        id: 28,
        name: "page 28",
        img: "/assets/images/arquitectura/pag28.png",
    },
    {
        id: 29,
        name: "page 29",
        img: "/assets/images/arquitectura/pag29.png",
    },
    {
        id: 30,
        name: "page 30",
        img: "/assets/images/arquitectura/pag30.png",
    },
    {
        id: 31,
        name: "page 31",
        img: "/assets/images/arquitectura/pag31.png",
    },
    {
        id: 32,
        name: "page 32",
        img: "/assets/images/arquitectura/pag32.png",
    },
    {
        id: 33,
        name: "page 33",
        img: "/assets/images/arquitectura/pag33.png",
    },
]

// //Promesa getItems () : me retorna todos los productos
// export function getItems() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(book)
//         }, 0)
//     })
// };

// //Promesa getSingleItem (idItem) : me retorna el producto seleccionado
// export function getSingleItem(idItem) {
//     return new Promise((resolve, reject) => {
//         let itemFind = book.find((item) => {
//             return item.id === parseInt(idItem)
//         })
//         setTimeout(() => {
//             if (itemFind) resolve(itemFind)
//             else reject(new Error("item no encontrado"))
//         }, 0)
//     })
// };