function debounce(fn, delay){
    let timeout;
   
    return function (...args) {
        clearTimeout(timeout); 
        timeout = setTimeout(() => fn(args), delay); 
    };
}
function search(itemName){
    console.log(itemName);
    
}
module.exports=debounce(search,1000);

