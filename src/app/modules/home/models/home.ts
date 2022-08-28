

export interface Inmobiliaria {
    id? : Number;
    phone : string,
    email : string,
    contactTime: string,
    logo : string[],
    urlImgBanner : string[],
    titleBanner : string,
    about : About[]
}

export interface Home {
    id?: Number; 
    urlImgBanner : string[],
    titleBanner : string,
    about : About[]
}

export interface Banner {
    titleBanner : string, 
    urlImgBanner : string[]
}

export interface About {
    urlImg : string
    tite : string,
    description: string,
}



