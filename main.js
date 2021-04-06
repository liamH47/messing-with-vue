Vue.component('product-details', {
    props: {
      details: {
        type: Array,
        required: true
      }
    },
    template: `
      <ul>
        <li v-for="detail in details">{{ detail }}</li>
      </ul>
    `
  })

Vue.component('product-form', {
  template: `
    <input v-model='name'>  
  `,
  data(){
    return {
      name: null      
    }
  }
})

Vue.component('product', {
    props: {
      premium: {
          type: Boolean,
          required: true
        }
    },
    template: `
    <div class='product'>

        <div class='product-image'>
        <img v-bind:src='image'>
        </div>

        <div class='product-info'>

        <h1>{{ product }}</h1>
        <a :href='link' target='_blank'>See on Instagram</a>
        <p>{{ sale }}</p>
        <p>User is premium: {{ premium }}</p>
        <p>Shipping: {{ shipping }} </p>

        <product-details :details="details"></product-details>
        <div class='hover-container'>

            <div v-for='(variant, index) in variants'
            :key='variant.variantId'
            class='color-box'
            @mouseover='updateProduct(index)'
            
            >
            <img class='color-box-img' :src='variant.backgroundImage'>
            <!-- <p >{{ variant.variantName }}</p> -->
        </div>
        </div>

        <button v-on:click='addToCart'>Add to Cart</button>
        <button v-on:click='removeFromCart'>Remove from Cart</button>

        </div>

        <product-form></product-form>

    </div>
      `,
    data(){
      return {
        product: 'Custom Print-on-Demand T-shirts',
        selectedVariant: 0,
        link: 'https://www.instagram.com/wet_tobacs/?hl=en',

        details: ['Custom Print-on-Demand Shirt', 'Available in short or long sleeve', '100% Cotton', 'Hand-made'],
        variants: [
            {
                variantId: 0,
                variantName: 'Dog',
                variantImage: './img/angersonShirts/dog-tee.jpeg',
                backgroundImage: './img/angersonShirts/dog-tee.jpeg',
                onSale: false,
            },
            {
                variantId: 1,
                variantName: 'Doom',
                variantImage: './img/angersonShirts/doom-tee.jpeg',
                backgroundImage: './img/angersonShirts/doom-tee.jpeg',
                onSale: true,

            },
            {
                variantId: 2,
                variantName: 'Succubus',
                variantImage: './img/angersonShirts/succubus-tee.jpeg',
                backgroundImage: './img/angersonShirts/succubus-tee.jpeg',
                onSale: false,

            },
            {
                variantId: 3,
                variantName: 'Vile Tribe',
                variantImage: './img/angersonShirts/vile-tribe-tee.jpeg',
                backgroundImage: './img/angersonShirts/vile-tribe-tee.jpeg',
                onSale: true,

            }
        ],

    }
    },
    methods: {
        updateProduct(index) {
            this.selectedVariant = index;
            console.log(index);
        },
        addToCart(){
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId);
        },
        removeFromCart(){
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId);
        }
    },
    computed: {
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        sale(){
            if (this.variants[this.selectedVariant].onSale) {
                return this.variants[this.selectedVariant].variantName + ' is on sale!'
            } else {
                return this.variants[this.selectedVariant].variantName
            }    
        },
        shipping(){
            if(this.premium) return 'Free';
            return '$4.99';
        }
    }
  
    
})

let app = new Vue({
    el: '#app',
    data: {
        premium: true,
        cart: []
    },
    methods: {
        updateCart(id){
            this.cart.push(id);
            console.log(this.cart);
        },
        removeItem(id){
            let index = this.cart.indexOf(id);
            if(index > -1) {
                this.cart.splice(index, 1);
            }
            console.log(this.cart);
        },
    }
})