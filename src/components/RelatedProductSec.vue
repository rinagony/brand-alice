<template>
  <div id="RelatedProduct">
    <div class="relatedProdWrp">
      <div
        class="relatedItem wrapperIndividual"
        v-for="related in relatedproductos.slice(12, 24)"
        :to="related.path"
        :key="related.index"
        v-bind:class="{ hasClass: related.classBox, hasClassNone: related.classBoxX }"
      >
        <img
          v-bind:class="{ hasClassNone: related.classBox }"
          :src="require('../assets/images/' + related.img)"
          alt=""
        />
        <p v-bind:class="{ hasClassNone: related.classBox }">
          {{ related.title }}
        </p>
        <p v-bind:class="{ hasClassNone: related.classBox }">
          {{ related.price }}
        </p>
        <div class="rates">
          <Raiting />
          <router-link to="./">{{ related.reviews }}reviews</router-link>
        </div>
        <div
          v-bind:class="{
            hasClassDisplay: related.classBox,
            wrpSpecialRelated: !related.classBox,
          }"
        >
          <div class="wrpSpecialRelatedItem">
            <h2>{{ related.titleSpecial }}</h2>
            <p>{{ related.descriptionSpecial }}</p>
            <router-link class="learnMoreSpecial" to="./"
              >Learn more</router-link
            >
          </div>
        </div>
        <div class="wrpBtn" v-bind:class="{ hasClassNone: related.classBox }">
          <router-link class="startNow" to="./">Start now</router-link>
          <router-link class="learnMore" to="./">Learn more</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Raiting from "../components/Raiting.vue";
export default {
  name: "RelatedProduct",
  components: { Raiting },
  props: {
    relatedproductos: {
      type: Array,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
@import "./../assets/scss/styles.scss";
#RelatedProduct {
  padding-bottom: 2rem;
}
.wrapperIndividual {
  background: #fff;
  padding: 10px;
  -webkit-box-shadow: 2px 1px 11px -3px rgba(0, 0, 0, 0.2);
  box-shadow: 2px 1px 11px -3px rgba(0, 0, 0, 0.2);
  border: 0.1px solid rgba(175, 175, 175, 0.3);
}

.wrpSpecialRelated {
  display: none;
}

.relatedProdWrp {
  display: grid;
  @include for-medium-up-reverse {
    justify-items: center;
  }

  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(262px, 1fr));
  grid-template-rows: repeat(3, 400px);
}

.hasClassDisplay {
  display: block;
}
.wrpBtn {
  margin-top: 1rem;
}

.startNow {
  background: #207bff;
  padding: 5px 20px;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  margin-right: 1rem;
}

.learnMore {
  background: #fff;
  padding: 3px 18px;
  font-weight: 700;
  color: #207bff;
  text-decoration: none;
  border: 2px solid #207bff;
}

.learnMoreSpecial {
  background: #fff;
  padding: 10px 30px;
  font-weight: 700;
  color: #207bff;
  text-decoration: none;
}

.hasClass {
  background: #207bff;
  z-index: 1;
  padding-right: 1rem;
  @include for-medium-up {
    width: 200% !important;
  }
}

.hasClassNone {
  display: none;
}

.relatedItem {
  width: content;;
  @include for-medium-up-reverse {
    max-width: 263px;
    margin: 0 auto;
  }
}

.wrpSpecialRelatedItem {
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h2 {
    color: #fff;
  }
  p {
    color: rgb(202, 199, 199);
  }
}

.rates {
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    color: #207bff;
  }
}
</style>
