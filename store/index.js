import axios from 'axios'

export const state = () => ({
    // products : [
    //     {id:0,title : 'adwad',src:'https://img.kitapyurdu.com/v1/getImage/fn:4493743/wi:120/wh:true',price:10},
    //     {id:1,title : 'momo',src:'https://img.kitapyurdu.com/v1/getImage/fn:4493743/wi:120/wh:true',price:15},
    //     {id:2,title : 'seker Portakalı',src:'https://img.kitapyurdu.com/v1/getImage/fn:7027950/wi:120/wh:true',price:8},
    //     {id:3,title : 'awdadw',src:'https://img.kitapyurdu.com/v1/getImage/fn:4493743/wi:120/wh:true',price:20},
    //     {id:4,title : 'moasdasdmo',src:'https://img.kitapyurdu.com/v1/getImage/fn:7027950/wi:120/wh:true',price:25},
    //     {id:5,title : 'adwdad',src:'https://img.kitapyurdu.com/v1/getImage/fn:4493743/wi:120/wh:true',price:15},
    //     {id:6,title : 'momadsadsdo',src:'https://img.kitapyurdu.com/v1/getImage/fn:7027950/wi:120/wh:true',price:14},
    //     {id:7,title : 'adssad',src:'https://img.kitapyurdu.com/v1/getImage/fn:4493743/wi:120/wh:true',price:10},
    //     {id:8,title : 'cxcx',src:'https://img.kitapyurdu.com/v1/getImage/fn:7027950/wi:120/wh:true',price:9},
    //     {id:9,title : 'wd',src:'https://img.kitapyurdu.com/v1/getImage/fn:4493743/wi:120/wh:true',price:11},
    //     {id:10,title : 'mawdawdomo',src:'https://img.kitapyurdu.com/v1/getImage/fn:7027950/wi:120/wh:true',price:16},
    //     {id:11,title : 'awd',src:'https://img.kitapyurdu.com/v1/getImage/fn:4493743/wi:120/wh:true',price:17},
    // ],

    items : [
        {
            id:1,
            src: 'https://img.kitapyurdu.com/v1/getImage/fn:11432065/wi:940/wh:5e820ea49',
        },
        {
            id:2,
            src: 'https://img.kitapyurdu.com/v1/getImage/fn:11466329/wi:940/wh:230612613',
        },
        {
            id:3,
            src: 'https://img.kitapyurdu.com/v1/getImage/fn:11450909/wi:940/wh:9842e591b',
        },
        {
            id:4,
            src: 'https://img.kitapyurdu.com/v1/getImage/fn:11466439/wi:940/wh:c427be1fc',
        },
        {
            id:5,
            src: 'https://img.kitapyurdu.com/v1/getImage/fn:11460737/wi:940/wh:da94789c4',
        },
        {
            id:6,
            src: 'https://img.kitapyurdu.com/v1/getImage/fn:11432063/wi:940/wh:385f8d5cb',
        },
        {
            id:7,
            src: 'https://img.kitapyurdu.com/v1/getImage/fn:11467832/wi:940/wh:9a768143c',
        },
        {
            id:8,
            src: 'https://img.kitapyurdu.com/v1/getImage/fn:11467832/wi:940/wh:9a768143c',
        },
    ],
    // categories : [
    //     {id:1,title : 'Moawdadmo',src:'https://img.kitapyurdu.com/v1/getImage/fn:11450330/wh:1b5f9b43d'},
    //     {id:2,title : 'asdas',src:'https://img.kitapyurdu.com/v1/getImage/fn:11450330/wh:1b5f9b43d'},
    //     {id:3,title : 'Momo',src:'https://img.kitapyurdu.com/v1/getImage/fn:11450330/wh:1b5f9b43d'},
    //     {id:4,title : 'xzca',src:'https://img.kitapyurdu.com/v1/getImage/fn:11450330/wh:1b5f9b43d'},
    //     {id:5,title : 'Momo',src:'https://img.kitapyurdu.com/v1/getImage/fn:11450330/wh:1b5f9b43d'},
    //     {id:6,title : 'awdad',src:'https://img.kitapyurdu.com/v1/getImage/fn:11450330/wh:1b5f9b43d'},
    //     {id:7,title : 'Momo',src:'https://img.kitapyurdu.com/v1/getImage/fn:11450330/wh:1b5f9b43d'},
    //     {id:8,title : 'asdasdaw',src:'https://img.kitapyurdu.com/v1/getImage/fn:11450330/wh:1b5f9b43d'},
    //     {id:9,title : 'Momo',src:'https://img.kitapyurdu.com/v1/getImage/fn:11450330/wh:1b5f9b43d'},
    //     {id:10,title : 'awdawd',src:'https://img.kitapyurdu.com/v1/getImage/fn:11450330/wh:1b5f9b43d'},
    //     {id:11,title : 'Momo',src:'https://img.kitapyurdu.com/v1/getImage/fn:11450330/wh:1b5f9b43d'},
    //     {id:12,title : 'Momo',src:'https://img.kitapyurdu.com/v1/getImage/fn:11450330/wh:1b5f9b43d'},
    //     {id:13,title : 'Momo',src:'https://img.kitapyurdu.com/v1/getImage/fn:11450330/wh:1b5f9b43d'},
    //     {id:14,title : 'Momo',src:'https://img.kitapyurdu.com/v1/getImage/fn:11450330/wh:1b5f9b43d'},
    // ],
    indexProducts : null,
    users : [
    ],
    baskets : [
    ],
    dataList : [
    ],
    product : {},
    sepet : [
    ],
    categories :  [],
    // d : {},
    tutors : {}


})



export const getters = {
//    getIndex:(state) =>   {
//        return state.products[state.indexProducts];
//    },
   getUsers:(state) => {
        return state.users;
   },
   getBaskets:(state) => {
     return state.baskets;
   },
   getProducts:(state) => {
    return state.products;
   },

   // come data from api  

   getData :(state) => {
       return state.dataList;
   },
   getD :(state) => {
       return state.tutors;
   }

//    getD : (state) => {
//       return state.d;
//    }
//    getCategories : (state) => {
//        return state.categories;
//    }
//    displayProduct:(state) => {
//         axios
//         .get('http://localhost:3000/products')
//         .then((res) => {
//             return res.data[state.indexProducts]
//         })
//    }



}

export const actions = {
   addsIndex:(context,index) => {
       context.commit("ADD_INDEX",index);
   },
   addsBaskets:(context,index) => {
       context.commit('ADD_BASKETS',index);
   },

   // api 

   getData : ({commit}) => {
        axios
            .get('http://localhost:3000/products')
            .then((res) => {
                commit('SET_DATA',res.data)
            })
   },
//    getD : ({commit},id) => {
//        axios 
//             .get('http://localhost:3000/products'+id)
//             .then((res) => {
//                 commit('SET_D',res.data)
//             })
//    },

    getD :({commit},id) => {
        axios
        .get('http://localhost:3000/products'+id)
        .then((res) => {
            commit('GET_D',res.data)
        })
    },


  
//    getDataCategories : ({commit}) => {
//        axios 
//             .get('http://localhost:3000/categories')
//             .then((res) => {
//                 commit('SET_CATEGORİES',res.data)
//             })
//    },
   addProduct:(context,product) => {
       context.commit('ADD_PRODUCT',product);
   },
   displayProduct : (context,index) =>{
       context.commit('DISPLAY_PRODUCT',index);
   },
   addSepet : (context,index) => {
       context.commit('ADD_SEPET',index);
   },
   
}

export const mutations = {
    ADD_INDEX:(state,index) => {
        state.indexProducts = index
    },
    ADD_USERS:(state,data) => {
        state.users.push(data);
    },
    ADD_BASKETS:(state,index) => {
        const product = state.products[index];
        state.baskets.push(product);
    },
    SET_DATA :(state,dataList) => {
        state.dataList = dataList
    },
    // SET_D  :(state,d) => {
    //     state.d = d
    // },
    // SET_CATEGORIES : (state,categories) => {
    //     state.categories = categories;
    // },
    GET_D : (state,data) => {
        state.tutors = data;
    },
    ADD_PRODUCT : (state,data) => {
        state.products.push(data);
    },
    DISPLAY_PRODUCT: (state,index) => {
        state.indexProducts = index;
    },
    ADD_SEPET:(state,index) => {
        state.sepet.push(index)
    }
}

