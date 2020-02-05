

export const RECEIVE_CUR_CAT = 'RECEIVE_CUR_CAT';
export const REMOVE_CUR_CAT = 'REMOVE_CUR_CAT';
export const CLEAR_CUR_CAT = 'CLEAR_CUR_CAT';
export const GENERATE_CATS = 'GENERATE_CATS';

export const receiveCurCat = (cat) => ({
  type: RECEIVE_CUR_CAT,
  cat
});

export const removeCurCat = (cat) => ({
  type: REMOVE_CUR_CAT,
  cat
});

export const clearCurCat = () => ({
  type: CLEAR_CUR_CAT
});

export const generateCats = () => {
  let cats = [];
  let allCats = [
    "Gifts",
    "Jewelry & Accessories",
    "Clothing & Shoes",
    "Home & Living",
    "Wedding & Party",
    "Toys & Entertainment",
    "Art & Collectibles",
    "Craft & Supplies",
    "Vintage"
  ];
  while(cats.length < 3){
    let n = Math.round(Math.random() * 8);
    let c = allCats[n];
    if(!cats.includes(c)) cats.push(c);
  }
  return({
    type: GENERATE_CATS,
    cats
  })
}