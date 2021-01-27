<template>
  <div id="Testimotionals">
    <div class="wrapper">
      <div class="wrpTestimotionals">
        <div class="testimotionalsLeft">
          <router-link class="linkBlue" to="./">Testimotionals</router-link>
          <h1>
            We got trusted by more than <span>+4800</span> happy customers.
          </h1>
        </div>
        <div class="testimotionalsRight">
          <div class="reviewCustom">
            <div class="wrpReviewCastomImg">
              <img src="@/assets/images/pers.png" alt="" />
            </div>
            <div class="wrpReviewCustomItem">
              <p class="reviewTxt">
                "Space for a Quote of your customer. Make it easy to read and
                valuable to make inpact."
              </p>
              <p class="nameReview">Name and Surname <span>Company</span></p>
            </div>
          </div>
        </div>
      </div>
      <div class="hr"></div>
      <div class="wrpReviewsStars">
        <div class="rates">
          <Raiting />
          <router-link to="./">231 reviews</router-link>
        </div>
        <div class="wrpLinkToReadMore">
          <router-link to="./" class="readRev">Read All reviews</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Raiting from "../components/Raiting.vue";

export default {
  name: "Testimotionals",
  components: { Raiting },
};
</script>

<style scoped lang="scss">
@import "./../assets/scss/styles.scss";

.wrpTestimotionals {
  @include for-medium-up {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.linkBlue {
  color: #207bff;
  text-decoration: none;
}

h1 {
  font-size: 30px;
}

.reviewCustom {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
}

.wrpReviewCastomImg {
  img {
    width: 50px;
    margin-right: 1rem;
  }
}

.reviewTxt {
  font-size: 21px;
  font-weight: 600;
  margin-bottom: 0;
}

.nameReview {
  span {
    color: rgb(87, 87, 87);
    margin-left: 1rem;
  }
}

.hr {
  width: 100%;
  height: 1px;
  background: #ccc;
  margin: 0;
}

.rates {
  display: flex;
  align-items: center;
  text-align: center;
  a {
    color: #207bff;
    margin-top: 10px;
    text-decoration: none;
  }
}

.readRev {
  background: #edf6ff;
  color: #207bff;
  text-decoration: none;
  font-weight: 600;
  padding: 15px 35px;
}

.wrpLinkToReadMore {
    margin-top: 20px;
}

.wrpReviewsStars {
  display: flex;
  text-align: center;
  justify-content: space-between;
}
</style>
