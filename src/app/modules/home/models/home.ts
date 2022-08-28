

export interface Inmobiliaria {
    id? : Number;
    phone : string,
    email : string,
    contactTime: string,
    logo : string[],
}

export interface Home {
    id?: Number; 
    urlImgBanner : string[],
    titleBanner : string,
    about : About[]
}

interface About {
    urlImg : string
    tite : string,
    description: string,
}



