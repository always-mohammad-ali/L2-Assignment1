function formatValue(input: string | number | boolean): string | number | boolean{
    if(typeof input === "string"){
        return input.toUpperCase();
    }

    if(typeof input === "number"){
        return input * 10;
    }

    return !input;

}

function getLength(value : string | (string | number)[]) : number{
    if(typeof value == "string"){
        return value.length;
    }

    return value.length;
}

class Person{
    name : string;
    age : number;

    constructor(name : string, age : number){
        this.name = name;
        this.age = age;
    }

    getDetails() : string{
        return `'Name: ${this.name}, Age: ${this.age}'`
    }

}

function filterByRating(items: {title : string, rating : number}[]){
    return items.filter(item => item.rating >= 4);
}

function filterActiveUsers(users : {id: number, name: string, email:string, isActive:boolean}[]){
    return users.filter(user => user.isActive == true);
}

interface Book{
    title : string;
    author : string;
    publishedYear : number;
    isAvailable : boolean;
}

function printBookDetails(book : Book){
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"}`);
}

function getUniqueValues(arr1: string[] | number[], arr2: string[] | number[]): string[] | number[] {
    const unique: any[] = [];
    
    for (let i = 0; i < arr1.length; i++) {
        let exists = false;
        for (let j = 0; j < unique.length; j++) {
            if (unique[j] === arr1[i]) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            unique.push(arr1[i]);
        }
    }
    
    for (let i = 0; i < arr2.length; i++) {
        let exists = false;
        for (let j = 0; j < unique.length; j++) {
            if (unique[j] === arr2[i]) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            unique.push(arr2[i]);
        }
    }
    
    return unique;
}

function calculateTotalPrice(products: {name: string, price: number, quantity: number, discount ?: number}[]){
   const productPriceArray = products.map(product => {
     if(typeof product.discount == 'number' && product.discount >0 && product.discount <=100)
      {
        return (product.price - (product.price * (product.discount / 100))) * product.quantity;
      }
   else{
    return product.price * product.quantity}
   }
   
  );
   

   const totalPrice = productPriceArray.reduce((total, item) => total + item, 0);
   return totalPrice;

}