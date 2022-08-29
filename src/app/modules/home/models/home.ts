

export interface Home {
    id?: Number; 
    titleBanner : string,
    urlImgBanner : string[],
    about : About[]
}

export interface Banner {
    titleBanner : string,
    urlImgBanner : string[],
}

export interface About {
    urlImg : string
    title : string,
    description: string,
}



