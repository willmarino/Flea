import React from 'react';

import Body from '../body/body';

// import { Route } from 'react-router-dom';
// import ModalContainer from '../../modal/modal_container';
// import AnonHeaderContainer from '../../headers/anon_header_container';
// import CategoryNav from '../../category_nav/category_nav';
// import ProductShowContainer from '../../products/show/product_show_container';
// import AnonIndexContainer from '../../products/index/anon_index_container';
// import ShopShowContainer from '../../shop/shop_show_container';
// import SearchResultContainer from '../../search/search_result_container';
// import UserProfileContainer from '../../user_profile/user_profile_container';

// class AnonMain extends React.Component{
//     constructor(props){
//         super(props);
//     }

//     render(){
//         // let showPath = "/anon/products/:prodId";
//         // let shopShowPath = "/anon/shops/:shopId";
//         // let searchResultPath = "/anon/search_result";
//         // let userProfilePath = "/anon/profiles/:userId";
//         // return(
//         //     <div>
//         //         <div className="anon-main-top">
//         //             <AnonHeaderContainer/>
//         //             <ModalContainer/>
//         //             <CategoryNav/>
//         //         </div>
//         //         <div className="anon-main-mid">
//         //             <Route exact path="/anon" component={AnonIndexContainer}/>
//         //             <Route path={showPath} component={ProductShowContainer}/>
//         //             <Route path={shopShowPath} component={ShopShowContainer}/>
//         //             <Route path={searchResultPath} component={SearchResultContainer}/>
//         //             <Route exact path={userProfilePath} component={UserProfileContainer}/>
//         //         </div>
//         //     </div>
//         // );
//         // --------------------------------------------------------------------------------------------------------------------------------
//         return(
//             <div>
//                 {/* <Header/> */}
//                 <Body/>
//                 {/* <Footer/> */}
//             </div>
//         )
//     }
// }

const AnonMain = () => {
    return(
        <div>
            {/* <Header/> */}
            <Body/>
            {/* <Footer/> */}
        </div>
    )
}

export default AnonMain;