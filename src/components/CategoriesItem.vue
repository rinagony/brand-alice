<template>
  <div id="CategoriesItem">
    <div class="wrapperCategory">
      <router-link
        class="wrpItem wrapperIndividual"
        v-for="categoriesItem in categoriesItems"
        :to="categoriesItem.path"
        :key="categoriesItem.index"
      >
        <div class="imgWrpCat">
          <img
            class="imgCat"
            :src="require('../assets/images/' + categoriesItem.image)"
            alt=""
          />
        </div>
        <div class="wrpCat">
          <h3>{{ categoriesItem.title }}</h3>
          <p>{{ categoriesItem.number }} items in {{ categoriesItem.title }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoriesItem",
  components: {},
  props: {
    categoriesItems: {
      type: Array,
    },
  },
};
</script>

<style scoped lang="scss">
@import "./../assets/scss/styles.scss";
a {
  text-decoration: none;
  color: #000;
}
.wrapperCategory {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  grid-template-rows: repeat(2, 100px);
}

.wrpItem {
  display: flex;
  align-items: center;
  width: 270px;
  margin: 0 auto;
  padding: 5px;
  height: 100px;
  transition: 0.2s ease-in;
  @include for-medium-up {
    margin: inherit;
  }

  &:hover {
    background: rgba(133, 188, 255, 0.2);
  }
}

.wrapperIndividual {
  background: #fff;
  -webkit-box-shadow: 2px 1px 11px -3px rgba(0, 0, 0, 0.2);
  box-shadow: 2px 1px 11px -3px rgba(0, 0, 0, 0.2);
  border: 0.1px solid rgba(175, 175, 175, 0.3);
}

h3 {
  margin-bottom: 0;
}

.imgCat {
  width: 70px;
  border-radius: 6px;
  &:hover {
    background: rgba(133, 188, 255, 0.9);
  }
}

.wrpCat {
  margin-left: 1rem;
}
</style>
