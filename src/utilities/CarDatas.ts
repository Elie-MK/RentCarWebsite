export interface datas {
    id:number
    title: string
    type:string
    img:string
    litre:number
    func:string
    place:number
    price:number
}

export const CarDatas:datas[] =[
    {
        id:1,
        title:"PEUGEOT 508",
        type:"PEUGEOT", 
        img:"https://www.lacrentacar.com/images/p508.jpg",
        litre:12,
        func:"Manual",
        place:4,
        price:150
    },
    {
        id:2,
        title:"SKODA OCTAVIA",
        type:"SKODA", 
        img:"https://www.lacrentacar.com/images/skodaoctavia.png",
        litre:9,
        func:"Manual",
        place:4,
        price:150
    },
    {
        id:3,
        title:"MERCEDES CLASS C",
        type:"MERCEDES", 
        img:"https://www.lacrentacar.com/images/mercedesC.jpg",
        litre:9,
        func:"Manual",
        place:4,
        price:150
    },
    {
        id:4,
        title:"BMW X5",
        type:"BMW", 
        img:"https://www.lacrentacar.com/images/bmwx5.png",
        litre:9,
        func:"Manual",
        place:4,
        price:150
    },
]