const app = Vue.createApp({
    data(){
        return {
            cart:0,
            brand:'Vue',
            product:'Giày Nam',
            selectVariant:0,
            selectedVariant:0,
            details:['50% cotton','30% wool','20% polyesfer'],

            variants:[
                {id:2234,color:"green",image:'./assets/img/product-1.jpg',quantity:15},
                {id:2235,color:"brown",image:'./assets/img/product-2.jpg',quantity:0}
            ]
        }
    },

    methods:{
        addToCart(){
            this.cart++
        },
        updateVariant(index){
            this.selectedVariant=index
        }
    },
    // computed giúp tăng hiệu suất 
    computed:{
        title(){
            return this.brand+ " "+this.product
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inventory(){
            return this.variants[this.selectedVariant].quantity
        }
       
    }
})