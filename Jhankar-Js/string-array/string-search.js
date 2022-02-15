
//one way of searching

const products = [
    'Dell hardcore i29 200GB laptop',
    'iphone 1TB camera flashlight phone',
    'yellow lapto with black camera',
    'Dell 1X59 Lenovo commercial yoga laptop',
    'LG supernova laptop',
    'HTC low price phone',
    'Dell Purple Color phone with laptop'
];


const searching = 'Dell ';
//cheking with indexOf
const output = [];
for(const product of products){
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        output.push(product);
    }
}

console.log(output);





//two way of searching with includes

for (const product of products){
    if(product.toLowerCase().includes(searching.toLowerCase)){
        output.product;
    }
}

console.log(output); 




// 3rd way with startswith

//dell ta jodi khuja hoy tahole seta suru te jodi thake tahole seta dibe majhe ba shs a thakle setar result dibe nah

for(const product of products){
    if(product.toLowerCase().startsWith(searching.toLowerCase)){
        output.push(product);

    }
}

console.log(output); 


// same vabe endswith diye kora jay

