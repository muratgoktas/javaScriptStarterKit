class Customer{
    constructor(id,customerNumber){
        //prototyping 
        this.id = id;
        this.customerNumber = customerNumber
    }
}
// c# : Customer customer= new Customer();
let customer = new Customer(1,"M7894834");
//prototyping instance
customer.faxNumber = "9289787733"
console.log(customer.faxNumber)
// prototyping Classa
Customer.bisey="bisey"
console.log(Customer.bisey)
// Halen daha yukarıdaki classın içindeki constructor ulaşamıyoruz. Biryetmez Ltd. Şti. bilgisine ulaşmak için this.name = name yapacağız constructor içinde...
console.log(customer.customerNumber)

class IndividualCustomer extends Customer{
    constructor(id,customerNumber,firstName,lastName){
        super(id,customerNumber);
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class CompanyCustomer extends Customer{
    constructor(id,customerNumber,companyName){
        super(id,customerNumber);
        this.companyName = companyName;
    }
}

