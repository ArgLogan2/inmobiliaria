export interface Property  {
    Id?: Number,
    title: String,
    propertyImg: PropertyImg[],
    price: Number,
    propertyInformation: PropertyInformation []
    owner: String
    location: String
    typeProperty: String
    propertySituation: String
}

interface PropertyImg {
	id?: Number, 
	urlImg: String, 
	title: String
}

interface PropertyInformation {
	id?: Number, 
	content: String, 
	icon: String
}



