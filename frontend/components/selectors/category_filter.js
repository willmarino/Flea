

// export const categoryFilter = (obj, alreadyUsed) => {
//     let categories = [
//         "Gifts",
//         "Jewelry & Accessories", 
//         "Clothing & Shoes", 
//         "Home & Living", 
//         "Wedding & Party", 
//         "Toys & Entertainment", 
//         "Arts & Collectibles",
//         "Craft Supplies",
//         "Vintage"
//     ];
//     let category = categories[Math.round(Math.random() * 9)];
//     while(alreadyUsed.includes(category)){
//         category = categories[Math.round(Math.random() * 9)];
//     }
//     let res = [];
//     let productsArr = Object.values(obj);
//     productsArr.forEach((p) => {
//         if(p.high_level_category === category){
//             res.push(p);
//         }
//     });
//     return res.slice(0, 6);
// };


export const grabRow = (products, cat) => {
    let pArr = Object.values(products);
    let res = [];
    let i = 0;
    while(res.length < 6){
        if(pArr[i].high_level_category === cat){
            res.push(pArr[i]);
        }
        i += 1;
    }
    return res;
}


// export const randomFilter = (obj) => {
//     let res = [];
//     let productsArr = Object.values(obj);
//     let randomNums = [];
//     let count = 0;
//     while (count < 6){
//         let i = Math.random() * productsArr.length;
//         if(!res.includes(productsArr[i])){
//             count += 1;
//             res.push(productsArr[i]);
//         }
//     }
//     return res;
// };

// export const filterReviews = (reviews, product) => {
//     let reviewsArr = Object.values(reviews);
//     reviewsArr.filter(r => r.item_id === product.id);
// }