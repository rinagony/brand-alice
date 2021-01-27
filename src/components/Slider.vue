<template>
  <div class="wrapper" id="slider">
    <transition-group tag="div" :name="transitionName" class="slides-group">
      <div
        v-if="show"
        :key="current"
        class="slide"
        :class="slides[current].className"
      >
        <h2>{{ slides[current].title }}</h2>
        <p>{{ slides[current].desc }}</p>
        <div class="wrpBtn">
          <router-link class="startNow" :to="slides[current].linkNow"
            >Start now</router-link
          >
          <router-link class="learnMore" :to="slides[current].linkMore"
            >Learn more</router-link
          >
        </div>
      </div>
    </transition-group>
    <div class="btn btn-prev" aria-label="Previous slide" @click="slide(-1)">
      &#10094;
    </div>
    <div class="btn btn-next" aria-label="Next slide" @click="slide(1)">
      &#10095;
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  components: {},
  data: function () {
    return {
      current: 0,
      direction: 1,
      transitionName: "fade",
      show: false,
      slides: [
        {
          className: "blue",
          title: "Make. Believe. Photoshop",
          desc:
            "From photo editing and compositing to digital painting, animation, and graphic design — you can do it all in Photoshop. Bring ideas to life across desktop and iPad. Magically transform images with the power of AI. Learn new skills and share your projects via livestream. With our latest release, Photoshop is faster, smarter, and easier than ever.",
          linkNow: "./",
          linkMore: "./",
        },
        {
          className: "red",
          title: "Amazing photos. Anywhere you are. Lightroom",
          desc:
            "At your desk or on the go. lightroom is the cloud-based service that gives you everything you need to create, edit, organize, store, and share your photos across any device.",
          linkNow: "./",
          linkMore: "./",
        },
        {
          className: "yellow",
          title: "Illustrator Gorgeous graphics. Absolutely anywhere.",
          desc:
            "The industry-standard vector graphics software lets you create everything from web and mobile graphics to logos, icons, book illustrations, product packaging, and billboards. And now, experience the freedom and flexibility of Illustrator across desktop and iPad.",
          linkNow: "./",
          linkMore: "./",
        },
      ],
    };
  },
  methods: {
    slide(dir) {
      this.direction = dir;
      dir === 1
        ? (this.transitionName = "slide-next")
        : (this.transitionName = "slide-prev");
      var len = this.slides.length;
      this.current = (this.current + (dir % len) + len) % len;
    },
  },
  mounted() {
    this.show = true;
  },
};
</script>

<style scoped lang="scss">
@import "./../assets/scss/styles.scss";
/* FADE IN */
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter {
  opacity: 0;
}

/* GO TO NEXT SLIDE */
.slide-next-enter-active,
.slide-next-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-next-enter {
  transform: translate(100%);
}
.slide-next-leave-to {
  transform: translate(-100%);
}

/* GO TO PREVIOUS SLIDE */
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-prev-enter {
  transform: translate(-100%);
}
.slide-prev-leave-to {
  transform: translate(100%);
}

/* SLIDES CLASSES */

.blue {
  background: url("./../assets/images/bg1.jpg");
}

.red {
  background: url("./../assets/images/bg2.jpg");
  background-size: cover;
}

.yellow {
  background: url("./../assets/images/bg3.jpg");
  background-size: cover;
}

#slider {
  width: 88;
  height: 500px;
  position: relative;
  overflow: hidden;
  color: #595959;
}

.slide {
  width: 100%;
  height: 500px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    max-width: 500px;
    text-align: center;
  }
}

.btn {
  z-index: 10;
  cursor: pointer;
  border: 3px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  position: absolute;
  top: calc(50% - 35px);
  left: 1%;
  transition: transform 0.3s ease-in-out;
  user-select: none;
}

.btn-next {
  left: auto;
  right: 1%;
}

.btn:hover {
  transform: scale(1.1);
}

.startNow {
  background: #207bff;
  padding: 10px 30px;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  margin-right: 1rem;
}

.learnMore {
  background: #fff;
  padding: 10px 30px;
  font-weight: 700;
  color: #207bff;
  text-decoration: none;
}

.wrpBtn {
  margin-top: 1rem;
}

.wrapper {
  padding-bottom: 0 !important;
}

.slide {
  h2 {
    text-align: center;
  }
  p {
    width: 60%;
    @include for-medium-up {
      width: 100%;
    }
  }
}
</style>
