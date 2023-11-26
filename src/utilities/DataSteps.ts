export interface data {
    id:number,
    title:string,
    description:string
}

export const DataSteps:data[] = [
    {
        id:1, 
        title:"Choose location", 
        description:"Choose your location and find your best car",
    }, 
    {
        id:2, 
        title:"Pick-up date", 
        description:"Select your pick up date and time to book your car",
    }, 
    {
        id:3, 
        title:"Book your car", 
        description:"Book your car and we will deliver it directly to you",
    }, 
]