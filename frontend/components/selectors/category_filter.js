

const categoryFilter = (obj, category) => {
    let res = [];
    let productsArr = Object.values(obj);
    productsArr.forEach((p, i) => {
        if(p.high_level_category === category){
            delete productsArr[i];
            res.push(p);
        };
    });
    while(res.length < 6){
        productsArr.forEach((p) => {
            res.push(p);
        });
    };
    return res;
};

export default categoryFilter;