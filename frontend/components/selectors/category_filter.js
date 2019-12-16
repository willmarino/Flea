

const categoryFilter = (obj, category) => {
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

export default categoryFilter;