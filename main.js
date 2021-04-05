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
                variantName: 'Dog',
                variantImage: './img/angersonShirts/dog-tee.jpeg',
                backgroundImage: './img/angersonShirts/dog-tee.jpeg'
            },
            {
                variantId: 2,
                variantName: 'Doom',
                variantImage: './img/angersonShirts/doom-tee.jpeg',
                backgroundImage: './img/angersonShirts/doom-tee.jpeg'

            },
            {
                variantId: 3,
                variantName: 'Succubus',
                variantImage: './img/angersonShirts/succubus-tee.jpeg',
                backgroundImage: './img/angersonShirts/succubus-tee.jpeg'

            },
            {
                variantId: 4,
                variantName: 'Vile Tribe',
                variantImage: './img/angersonShirts/vile-tribe-tee.jpeg',
                backgroundImage: './img/angersonShirts/vile-tribe-tee.jpeg'

            }
        ],
        cart: 0
    },
    methods: {
        addToCart(){
            this.cart++;
        },
        removeFromCart(){
            this.cart--;
        },
        updateProduct(variantImage) {
            this.image = variantImage;
        }
    }
})