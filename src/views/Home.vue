<template>
  <div id="Home">
    <div class="container">
      <Header />
      <div class="sliderWrapper">
        <Slider />
      </div>
      <div class="wrpCategories">
        <h2>Categories</h2>
        <div class="wrpCategoriesItem">
          <CategoriesItem :categoriesItems="categories" />
        </div>
      </div>
      <div class="wrpRelatedProducts">
        <h2>Related products</h2>
        <div class="wepRelatedProductsItem">
          <RelatedProduct :relatedproductos="relatedProd" />
        </div>
        <div class="wrpMoreProducts">
          <p>
            Love this products?
            <span
              >Check more from the
              <router-link to="./">Category</router-link></span
            >
          </p>
          <a class="showMoreLink" to="./" @click="hideBlockOrShow()"
            >Show more</a
          >
        </div>
        <div
          class="wepRelatedProductsItem"
          :class="{
            showProducts: toggleProducts,
            hideProducts: !toggleProducts,
          }"
        >
          <RelatedProductSec :relatedproductos="relatedProd" />
        </div>
      </div>
      <div class="wrpTestimotionals">
        <Testimotionals :relatedproductos="relatedProd" />
      </div>
      <div class="wrpSubscribe wrapper">
        <div class="wrpSubscribeLeft">
          <h3>Subscribe to newsletter</h3>
          <p>By subscribing you agree with our Terms and Conditions.</p>
        </div>
        <div class="wrpSubscribeRight">
          <form>
            <label for="emailAddress">Email Address</label><br />
            <div class="wrpSubscribeEmailAddress">
              <input
                type="text"
                name="emailAddress"
                id="emailAddress"
                placeholder="Text field"
              />
              <button class="subscribe" type="submit">Subscribe</button>
            </div>
          </form>
          <p id="warningSubscr">
            By subscribing you agree with our
            <router-link to="./">Terms and Conditions</router-link>
          </p>
        </div>
      </div>
      <div class="footer wrapper">
        <Footer/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Slider from "../components/Slider.vue";
import CategoriesItem from "../components/CategoriesItem.vue";
import RelatedProduct from "../components/RelatedProduct.vue";
import RelatedProductSec from "../components/RelatedProductSec.vue";
import Testimotionals from "../components/Testimotionals.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Slider,
    CategoriesItem,
    RelatedProduct,
    Testimotionals,
    RelatedProductSec,
    Footer
  },
  data() {
    return {
      categories: [
        {
          title: "Office products",
          number: 1200,
          path: "./",
          image: "cat.jpg"
        },
        {
          title: "Home improvements",
          number: 1200,
          path: "./",
          image: "cat1.jpg"
        },
        {
          title: "Shoes",
          number: 1200,
          path: "./",
          image: "cat2.jpg"
        },
        {
          title: "iPads",
          number: 1200,
          path: "./",
          image: "cat3.jpg"
        },
        {
          title: "Parfumes",
          number: 1200,
          path: "./",
          image: "cat4.jpg"
        },
        {
          title: "Accessories",
          number: 1200,
          path: "./",
          image: "cat5.jpg"
        },
        {
          title: "Furniture",
          number: 1200,
          path: "./",
          image: "cat6.jpg"
        },
        {
          title: "Books",
          number: 1200,
          path: "./",
          image: "cat7.jpg"
        },
        {
          title: "Kitchen",
          number: 1200,
          path: "./",
          image: "cat8.jpg"
        },
        {
          title: "Bathroom",
          number: 1200,
          path: "./",
          image: "cat9.jpg"
        },
        {
          title: "Computers",
          number: 1200,
          path: "./",
          image: "cat10.jpg"
        },
        {
          title: "PS4 & Televisions",
          number: 1200,
          path: "./",
          image: "cat11.jpg"
        },
      ],
      relatedProd: [
        {
          title: "Lorem ispum dolor huelo de bracarca",
          price: 210,
          img: "img.png",
          reviews: 298,
        },
        {
          title: "Lorem ispum dolor huelo de bracarca",
          price: 210,
          img: "img.png",
          reviews: 298,
        },
        {
          title: "Lorem ispum dolor huelo de bracarca",
          price: 210,
          img: "img.png",
          reviews: 298,
        },
        {
          title: "Lorem ispum dolor huelo de bracarca",
          price: 210,
          img: "img.png",
          reviews: 298,
        },
        {
          title: "Lorem ispum dolor huelo de bracarca",
          price: 210,
          img: "img.png",
          reviews: 298,
        },
        {
          title: "Lorem ispum dolor huelo de bracarca",
          price: 210,
          img: "img.png",
          reviews: 298,
        },
        {
          title: "Lorem ispum dolor huelo de bracarca",
          price: 210,
          img: "img.png",
          classBox: true,
          descriptionSpecial:
            "Adobe XD kit used for building eCommerce experience. Allowing simply build eCommerce layout without breaking any design barries.",
          linkSpecial: "./",
          titleSpecial: "Adobe XD - eCommerce starter",
        },
        {
          title: "empty",
          classBoxX: true,
          price: 0,
          img: "img.png",
        },
        {
          title: "Lorem ispum dolor huelo de bracarca",
          price: 210,
          img: "img.png",
          reviews: 298,
        },
        {
          title: "Lorem ispum dolor huelo de bracarca",
          price: 210,
          img: "img.png",
          reviews: 298,
        },
        {
          title: "Lorem ispum dolor huelo de bracarca",
          price: 210,
          img: "img.png",
          reviews: 298,
        },
        {
          title: "Lorem ispum dolor huelo de bracarca",
          price: 210,
          img: "img.png",
          reviews: 298,
        },
        {
          title: "Lorem ispum dolor huelo de bracarca",
          price: 210,
          img: "img.png",
          reviews: 298,
        },
        {
          title: "Lorem ispum dolor huelo de bracarca",
          price: 210,
          img: "img.png",
          reviews: 298,
        },
        {
          title: "Lorem ispum dolor huelo de bracarca",
          price: 210,
          img: "img.png",
          reviews: 298,
        },
        {
          title: "Lorem ispum dolor huelo de bracarca",
          price: 210,
          img: "img.png",
          reviews: 298,
        },
        {
          title: "Lorem ispum dolor huelo de bracarca",
          price: 210,
          img: "img.png",
          reviews: 298,
        },
        {
          title: "Lorem ispum dolor huelo de bracarca",
          price: 210,
          img: "img.png",
          reviews: 298,
        },
        {
          title: "Lorem ispum dolor huelo de bracarca",
          price: 210,
          img: "img.png",
          reviews: 298,
        },
        {
          title: "Lorem ispum dolor huelo de bracarca",
          price: 210,
          img: "img.png",
          reviews: 298,
        },
        {
          title: "Lorem ispum dolor huelo de bracarca",
          price: 210,
          img: "img.png",
          reviews: 298,
        },
        {
          title: "Lorem ispum dolor huelo de bracarca",
          price: 210,
          img: "img.png",
          reviews: 298,
        },
      ],
      toggleProducts: false,
    };
  },
  methods: {
    hideBlockOrShow() {
      if (this.toggleProducts === false) {
        this.toggleProducts = true;
      } else {
        this.toggleProducts = false;
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "./../assets/scss/styles.scss";
.sliderWrapper {
  margin-top: 2rem;
}

.wepRelatedProductsItem {
  margin-top: 2rem;
}

.wrpMoreProducts {
  background: inherit;
  padding: 6px 12px;
  -webkit-box-shadow: 2px 1px 11px -3px rgba(0, 0, 0, 0.2);
  box-shadow: 2px 1px 11px -3px rgba(0, 0, 0, 0.2);
  border: 0.1px solid rgba(175, 175, 175, 0.3);
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-weight: 600;
    span {
      font-weight: 500;
      color: rgb(85, 85, 85);
      a {
        color: #207bff;
      }
    }
  }
}

.showMoreLink {
  color: #207bff;
  font-weight: 600;
  text-decoration: none;
  font-size: 18px;
}

.showProducts {
  opacity: 1;
  height: auto;
  transition: opacity 2s ease-out;
}

.hideProducts {
  transition: opacity 2s ease-out;
  opacity: 0;
  height: 0;
  overflow: hidden;
}

.wrpSubscribe {
  margin-top: 2rem;
  @include for-medium-up {
    display: flex;
    justify-content: space-between;
  }
}

.subscribe {
  padding: 10px 30px;
  border: 0;
  color: #fff;
  font-size: 16px;
  background: #207bff;
}

#emailAddress {
  padding: 10px 20px;
}

.wrpSubscribeRight {
  margin-top: 10px;
  label {
    font-weight: 600;
  }
}

.wrpSubscribeLeft {
  p {
    color: rgb(85, 83, 83);
  }
  h3 {
    font-size: 20px;
    margin-bottom: 0;
  }
}

#warningSubscr {
  font-size: 15px;
  color: rgb(85, 83, 83);
  margin-top: 4px;
  a {
    color: inherit;
  }
}

.footer {
  margin-top: 2rem;
  margin-bottom: 4rem;
}

.wrpCategories, .wrpRelatedProducts {
  h2 {
    margin-top: 3rem;
    text-align: center;
    @include for-medium-up {
      text-align: left;
    }
  }
}

</style>
