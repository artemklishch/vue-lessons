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
      <p>Premium is {{premium}}</p>
  
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
      <button @click="removeFromCart">Remove from cart</button

      </div>
    </div>
  `,
  data() {
    return {
      product: 'Socks',
      brand: 'Vue Mastery',
      selectedVariant: 0,
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
    }
  },
  methods: {
    addToCart: function () {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
    },
    removeFromCart: function () {
      this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)
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

const app = new Vue({
  el: '#app',
  data: {
    premium: true,
    cart: [],
  },
  methods:{
    updateCart(id){
      this.cart.push(id)
    },
    removeCart(id){
      let num = 0;
      this.cart.forEach((ident,index) => {
        if(ident === id) num = index
      })
      
      this.cart.splice(num, 1)
    }
  }
});

