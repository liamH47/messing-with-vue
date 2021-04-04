let app = new Vue({
    el: '#app',
    data: {
        product: 'Custom Print-on-Demand T-shirts',
        image: './img/angersonShirts/dog-tee.jpeg',
        link: 'https://www.instagram.com/wet_tobacs/?hl=en',
        onSale: true,
        details: ['Custom Print-on-Demand Shirt', 'Available in short or long sleeve', '100% Cotton', 'Hand-made'],
        variants: [
            {
                variantId: 1,
                variantName: 'Short Sleeve'
            },
            {
                variantId: 2,
                variantName: 'Long Sleeve'
            }
        ],
        cart: 0
    },
    methods: {
        addToCart: function(){
            this.cart += 1
        }
    }
})