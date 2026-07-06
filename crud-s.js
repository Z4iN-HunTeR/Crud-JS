let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('Submit');


// بعد ما ناديت على العناصر لتوظيفهم 

// get total   done#
// create product
// save localstorage
// clear inputs 
// read
// count
// delete
// update
// search
// clean data

/*________________________________________________ */


// get total -1 هديك السعر وتحسب علية الضرايب وكل حاجة وتطلع التوتال 
function getTotal()
{
    // عشان لازم يبقى فى سعر الاول ف هنعمل ال إف ونقولة لو حط ف السعر رقم اشتغل و كمل عمليتك 
    if( price.value != ''){
    /* أو أى طريقة أخرى تخليها رقم INtاعمل قبلها بلص عشان تبقى  +price.value  لازك نخليها رقم ,إزاى؟ شوف Int وعشان يكتبهم ك String هنا طبعا فى غلطة وانة بيكتب ك*/
        
    let result = (+price.value + +taxes.value + +ads.value)  
        - +discount.value;
        total.innerHTML = result;
        total.style.background = '#040';
    }else{
        total.innerHTML = '';
        total.style.background = '#a00d02';

    }
}



// create product -2  
/* 
ينشأ المنتج ويخزنة Createلما أضغط على 
يبقى لو هتتعامل مع داتا فكر هتحفظها فين
Arrayأسهل مكان تحفظ فية الداتا هو ال 
لانها بتسمح بحاجات كتيرة تعملها فيها
*/



let dataPro;
if(localStorage.product != null){
    dataPro = JSON.parse(localStorage.product)
}else{
    dataPro = [];
}


Submit.onclick = function(){
    let newPro = {
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        title:title.value,
        count:count.value,
        category:category.value,

    }

    if(newPro.count > 1){
        for(let i = 0 ;i < newPro.count ; i++){
            dataPro.push(newPro);
        }
    }else{
        dataPro.push(newPro);
    }

    dataPro.push(newPro);
    localStorage.setItem('product',  JSON.stringify(dataPro));

    clearData()
    showData()

    console.log(dataPro);
}


// clear inputs 

function clearData(){
    title.value = '' ; 
    price.value = '' ; 
    taxes.value = '' ; 
    ads.value = '' ; 
    count.value = '' ;
    discount.value = '' ;
    total.innerHTML = '' ; 
    category.value = '' ;

}



// read

function showData(){
    let table = '';
    for(let i = 0; i < dataPro.length; i++){
        table += `
                 <tr>
                    <td>${i}</td>
                    <td>${dataPro[i].title}</td>
                    <td>${dataPro[i].price}</td>
                    <td>${dataPro[i].taxes}</td>
                    <td>${dataPro[i].ads}</td>
                    <td>${dataPro[i].discount}</td>
                    <td>${dataPro[i].total}</td>
                    <td>${dataPro[i].category}</td>
                    <td><button id="update">update</button></td>
                    <td><button onclick="deleteData( ${i}  )" id="delete">delete</button></td>
                </tr> 
        `
    }

   document.getElementById('tbody').innerHTML = table;
   let btnDelete = document.getElementById('delete-all');
   if(dataPro.length > 0){
        btnDelete.innerHTML = `

        <button onclick="DeleteAll()"> Delete All </button>
        `
   }else{

        btnDelete.innerHTML = '';
   }
}
showData()               // عشان تحدث لوحدهاو يظهر الجديد ال ف الصفحة




// delete
function deleteData(i)
{
    dataPro.splice(i,1);
    localStorage.product = JSON.stringify(dataPro);
    showData()               // عشان تحدث لوحدهاو يظهر الجديد ال ف الصفحة

}

function DeleteAll(){
    localStorage.clear()
    dataPro.splice(0)
    showData()           // عشان تحدث لوحدهاو يظهر الجديد ال ف الصفحة

}


// count


