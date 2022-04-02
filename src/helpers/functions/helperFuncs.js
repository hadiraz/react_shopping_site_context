const splitTitle = (title) => {
    const split = title.split(" ") ;
    if(split.length > 2){
        return `${split[0]} ${split[1]} ...`
    }else return title
}

const checkProductExist = (allProducts , id) =>{
    const item = allProducts.addedItems.find(item => item.id === id);
     if(item){
         return item ;
     }else{
         return false
     }
}
export {splitTitle , checkProductExist}