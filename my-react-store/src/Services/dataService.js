const catalog = [
    {
        "title":"Orange",
        "category":"fruit",
        "price": 15,
        "image":"Orange.png",
        "_id":"1"//Id must be unique
    },
    {
        "title":"Chocolate",
        "category":"grocery",
        "price": 15,
        "image":"Chocolate.png",
        "_id":"2"//Id must be unique
    },
{
        "title":"Hoodie",
        "category":"merch",
        "price": 16,
        "image":"Hoodie.png",
        "_id":"3"//Id must be unique
        
    },
];

class DataService{
    getProduct()
    {
        return catalog;
    }
}

export default DataService;