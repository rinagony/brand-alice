<template>
  <div id="Footer">
    <div class="wrpFooter">
      <div class="wrpTitle">
        <h4>Footer title</h4>
        <router-link to="./">Footer link</router-link>
        <router-link to="./">Footer link</router-link>
        <router-link to="./">Footer link</router-link>
        <router-link to="./">Footer link</router-link>
      </div>
      <div class="wrpTitle">
        <h4>Footer title</h4>
        <router-link to="./">Footer link</router-link>
        <router-link to="./">Footer link</router-link>
        <router-link to="./">Footer link</router-link>
        <router-link to="./">Footer link</router-link>
      </div>
      <div class="wrpTitle">
        <h4>Footer title</h4>
        <router-link to="./">Footer link</router-link>
        <router-link to="./">Footer link</router-link>
        <router-link to="./">Footer link</router-link>
        <router-link to="./">Footer link</router-link>
      </div>
      <div class="wrpTitle">
        <h4>Footer title</h4>
        <router-link to="./">Footer link</router-link>
        <router-link to="./">Footer link</router-link>
        <router-link to="./">Footer link</router-link>
        <router-link to="./">Footer link</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {},
};
</script>

<style scoped lang="scss">
@import "./../assets/scss/styles.scss";

.wrpFooter {
  @include for-medium-up-reverse {
    justify-items: center;
  }

  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-template-rows: repeat(1, 200px);
}

.wrpTitle {
  a {
    display: block;
    margin-top: 1rem;
  }
}
</style>
