Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true,
    }
  },
  template:
    `
    <div class='product'>
      <div class="product-image">
        <img :src="image" alt="">
      </div>
      <div class="product-info">
      <h1>{{title}}</h1>
      <p v-if="inStock">In Stock</p>
      <p v-else>Out of Stock</p>
      <p>Shipping is {{shipping}}</p>
  
      <ul>
        <li v-for='detail in details'>{{detail}}</li>
      </ul>

      <div 
        v-for='(variant, index) in variants' 
        :key="variant.variantId" 
        class="color-box"
        :style="{backgroundColor: variant.variantColor}" 
        @mouseover="updateProduct(index)"
      >
      </div>

      <button v-on:click="addToCart" 
        :disabled="!inStock" 
        :class="{disabledButton: !inStock}"
      >
        Add to Cart
      </button>

      <div class="cart">
        <p>Cart ({{cart}})</p>
      </div>

      </div>
    </div>
  `,
  data() {
    return {
      product: 'Socks',
      brand: 'Vue Mastery',
      selectedVariant: 0,
      url: 'https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding/',
      details: ['80% cotton', '20% poliestr', 'Gender-natural'],
      variants: [
        {
          variantId: 2234,
          variantColor: 'green',
          variantImage: './assets/Socks-Free-Download-PNG.png',
          variantQuantity: 10,
        },
        {
          variantId: 2235,
          variantColor: 'blue',
          variantImage: './assets/Socks-PNG-File.png',
          variantQuantity: 0,
        },
      ],
      cart: 0,
    }
  },
  methods: {
    addToCart: function () {
      this.cart += 1
    },
    updateProduct(index) {
      this.selectedVariant = index
      console.log(index)
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity
    },
    shipping(){
      if(this.premium){
        return 'Free'
      }
      return 2.99
    },
  }
})

Vue.component('products', {
  template:
  `
    <div class='details'>
      <ul>
        <li v-for="detail in details">{{detail}}</li>
      </ul>
    </div>
  `,
  data(){
    return {
      details: ['socks', 'boots', 'coats', 'food', 'hats'],
    }
  }
}) 

 
const app = new Vue({
  el: '#app',
  data: {
    premium: true,
  }
});

