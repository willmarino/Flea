

export const categoryFilter = (obj, category) => {
    let res = [];
    // debugger;
    let productsArr = Object.values(obj);
    productsArr.forEach((p) => {
        // debugger;
        if(p.high_level_category === category){
            res.push(p);
        }
    });
    // debugger;
    return res.slice(0, 6);
};

export const randomFilter = (obj) => {
    let res = [];
    let productsArr = Object.values(obj);
    let randomNums = [];
    let count = 0;
    while (count < 6){
        debugger;
        let i = Math.random() * productsArr.length;
        if(!res.includes(productsArr[i])){
            count += 1;
            res.push(productsArr[i]);
        }
    }
    return res;
};

// export default categoryFilter;