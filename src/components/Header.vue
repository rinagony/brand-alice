<template>
  <div id="Header">
    <div class="topNavWrp wrapper">
      <router-link to="./">
        <img class="logo" src="@/assets/images/logo.png" alt="" />
      </router-link>
      <div class="wrpSearchHeader">
        <label for="searchDetails"></label>
        <input
          type="text"
          id="searchDetails"
          placeholder="Search for.."
          aria-label="Search through site content"
        />
        <button class="searchBtn" type="submit">
          <img src="@/assets/images/search.png" alt="" />
        </button>
      </div>
      <div id="google_translate_element"></div>
      <div class="wrpLang">
        <select name="lang" @change="onChange($event)" id="lang">
          <option value="english">Eng</option>
          <option value="русский">Рус</option>
        </select>
      </div>
      <div class="topNavButtonsWrp">
        <button class="userBtn" type="button">
          <img src="@/assets/images/user.png" />
        </button>
        <button class="basketTopNav">
          <img src="@/assets/images/basket.png" alt="" />
        </button>
      </div>
    </div>
    <div class="navigationWrapper wrapper">
      <ul>
        <li v-for="item in linksItems" :key="item.id">
          <div class="dropdown">
            <button class="dropbtn">
              {{ item.category }}
              <span id="dropFigure">▼</span>
            </button>
            <div class="dropdown-content">
              <router-link :to="item.pathFirst">{{
                item.linkFirst
              }}</router-link>
              <router-link :to="item.pathSecond">{{
                item.linkSecond
              }}</router-link>
              <router-link :to="item.pathThird">{{
                item.linkThird
              }}</router-link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
  data() {
    return {
      linksItems: [
        {
          category: "Phones",
          path: "./",
          linkFirst: "1",
          pathFirst: "./",
          linkSecond: "2",
          pathSecond: "./",
          linkThird: "3",
          pathThird: "./",
        },
        {
          category: "Televisions",
          path: "./",
          linkFirst: "1",
          pathFirst: "./",
          linkSecond: "2",
          pathSecond: "./",
          linkThird: "3",
          pathThird: "./",
        },
        {
          category: "Programs",
          path: "./",
          linkFirst: "1",
          pathFirst: "./",
          linkSecond: "2",
          pathSecond: "./",
          linkThird: "3",
          pathThird: "./",
        },
        {
          category: "Technology",
          path: "./",
          linkFirst: "1",
          pathFirst: "./",
          linkSecond: "2",
          pathSecond: "./",
          linkThird: "3",
          pathThird: "./",
        },
        {
          category: "Books",
          path: "./",
          linkFirst: "1",
          pathFirst: "./",
          linkSecond: "2",
          pathSecond: "./",
          linkThird: "3",
          pathThird: "./",
        },
      ],
    };
  },
  methods: {
    onChange(event) {
      console.log(event.target.value);
    },
    googleTranslateElementInit() {
      new google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    },
  },
};
</script>

<style scoped lang="scss">
@import "./../assets/scss/styles.scss";
.topNavWrp {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @include for-medium-up {
    flex-direction: row;
    justify-content: space-between;
  }
}

.topNavButtonsWrp {
  margin-top: 1rem;
  @include for-medium-up {
    margin-top: 0;
  }
}

.wrpSearchHeader {
  margin-top: 1rem;
  @include for-medium-up {
    margin-top: 0;
  }
}

#searchDetails {
  font-size: 15px;
  outline: none;
  padding: 10px 5px;
  @include for-desktop-up {
    width: 300px;
    border: 0.1px solid rgba(134, 134, 134, 0.3);
  }
}

.searchBtn {
  background: inherit;
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: -40px;
  img {
    width: 30px;
    margin-bottom: -10px;
  }
}

.userBtn {
  background: #edf6ff;
  outline: none;
  border: none;
  border: 2px solid #2d9ddc;
  border-radius: 4px;
  cursor: pointer;
  img {
    width: 30px;
  }
}

.basketTopNav {
  background: #207bff;
  outline: none;
  border: 1px solid #207bff;
  color: #fff;
  font-size: 17px;
  text-align: center;
  margin-left: 1rem;
  border-radius: 4px;
  cursor: pointer;
  img {
    width: 30px;
    margin: 0;
  }
  #basketTopNavItem {
    padding-bottom: 5px;
    margin-left: 0.5rem;
  }
}

.navigationWrapper {
  margin-top: 1.2rem;
  display: flex;
  align-items: center;
  text-align: center;
  ul {
    list-style-type: none;
  }

  li {
    display: inline;
    margin-right: 1rem;
    text-decoration: none;
    @include for-medium-up {
      margin-right: 3.5rem;
    }
  }
}

.dropbtn {
  color: #000;
  background: inherit;
  border: none;
  cursor: pointer;
  font-weight: 700;
  margin-top: 1rem;
  @include for-medium-up {
    margin-top: 0;
  }
}

.dropdown {
  position: relative;
  display: inline-block;
  transition: all 0.3s ease;
}

.dropdown-content {
  display: none;
  transition: all 0.3s ease;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content {
  a {
    color: black;
    padding: 7px 10px;
    text-decoration: none;
    display: block;
    transition: all 0.3s ease;
  }
}

.dropdown-content {
  a {
    &:hover {
      background-color: #d3d3d3;
    }
  }
}

.dropdown:hover .dropdown-content {
  display: block;
  transition: all 0.3s ease;
}

#dropFigure {
  color: #207bff;
}
</style>
