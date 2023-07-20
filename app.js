let phones = [
    {
      name: 'iPhone 12',
      brand: 'Apple',
      price: 29990000,
      description: 'Một trong những chiếc điện thoại đáng mua nhất năm 2021.',
    },
    {
      name: 'Galaxy S21',
      brand: 'Samsung',
      price: 20990000,
      description: 'Chiếc điện thoại Android cao cấp nhất của Samsung.',
    },
    {
      name: 'Pixel 5',
      brand: 'Google',
      price: 16990000,
      description: 'Một trong những chiếc điện thoại Android tốt nhất của Google.',
    }
  ];

// 1
  function createPhone (name, brand, price, description) {
    let phone = {
        name,
        brand,
        price,
        description,
    };
    return phone;
  }
  let newphone = createPhone ("Find N2 Flip","Oppo",19990000,"Một trong những chiếc điện thoại hot nhất năm 2023");
  phones.push(newphone);
  console.log("1. Phones: ", phones)


// 2
function findNamePhone(name) {
  for (let i = 0; i < phones.length; i++){
    if (phones[i].name.includes(name)) {
      return phones [i];
    }  
  }
  return -1;
}
console.log("2. Tìm phone theo name: ",findNamePhone ("Galaxy"));


// 3
function deletePhone (value) {
  let indexDelete = phones.findIndex ((item) => item.name === value);
  if (indexDelete !== -1) 
  {
      phones.splice(indexDelete,1);
  }
  console.log("3. Sau khi xóa: ", phones);
}
deletePhone ("Pixel 5");




// 4
function maxPrice (phones) {
phones.sort ((a,b) => {
return b-a;
})
}
const maxPricePhone = maxPrice (phones);
console.log("4. Phone có giá cao nhất: ", phones [0]);


// 5
function sortByName (phones) {
  phones.sort ( (a,b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});
return phones;
}
const sortPhone = sortByName (phones);
console.log("5. Sort name giảm dần: ",sortPhone);


// 6
let filterByBrand = phones.filter(phones =>{
  return phones.brand === "Apple";
})
console.log("6. Phone có brand Apple: ",filterByBrand);
