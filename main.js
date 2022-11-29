const app = Vue.createApp({
    data(){
        return {
            product:'Giày nam',
            image:'./assets/img/product-1.jpg',
            inventory:5,
            details:['50% cotton','30% wool','20% polyesfer'],

            variants:[
                {id:2234,color:"green"},
                {id:2235,color:"brown"}
            ]
        }
    }
})