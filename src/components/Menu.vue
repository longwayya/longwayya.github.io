<template>
  <div id="Menu">
    <div class="logo" @click="change('/')">Longway's Blog</div>
    <div class="nav">
      <div
        class="navitem"
        v-for="item in routes"
        :class="{ active: item.path == active }"
        :key="item.name"
        @click="change(item.path)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="navinPhone">
      <img src="../assets/menu.png" class="navimg" @click="showNav" />
      <div class="navs" v-show="navshow">
        <div
          class="navitem"
          v-for="item in routes"
          :class="{ active: item.path == active }"
          :key="item.name"
          @click="change(item.path)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      routes: [
        { name: "首页", path: "/" },
        { name: "代码人生", path: "/code" },
        { name: "碎碎念", path: "/life" },
        { name: "关于我", path: "/profile" },
      ],
      active: "/",
      navshow: false,
    };
  },
  mounted() {
    // 根据用户输入的url确定active
    this.active = location.pathname.match(/^\/[a-z]*/)[0];
  },
  computed: {},
  watch: {
    $route(val) {
      this.active = val.path.match(/^\/[a-z]*/)[0];
    },
  },
  methods: {
    // ======组件逻辑=======
    // 点击menu修改路由
    // 监听路由  对url或者$route做截取 获得属于哪一个大类别 修改active 使其显示为白色

    change(path) {
      this.navshow = false;
      if (this.$route.path != path) {
        this.$router.push(path);
      }
    },
    showNav() {
      this.navshow = !this.navshow;
    },
  },
};
</script>
<style lang="less" scoped>
#Menu {
  position: absolute;
  z-index: 3;
  top: 0;
  right: 30px;
  left: 30px;
  display: flex;
  justify-content: space-between;
  height: 55px;
  line-height: 60px;
  font-size: 14px;
  font-weight: 700;
  color: #bbb;
  cursor: pointer;
  .navimg {
    margin: 20px;
    height: 20px;
    width: 25px;
  }

  .logo {
    z-index: 2;
    top: 0;
    left: 0;
    font-size: 20px;
    padding: 0 20px;
    color: #fff;
  }
  .nav {
    display: flex;
    font-family: "Courier New", Courier, monospace;
    .navitem {
      padding: 0 20px;
      border-bottom: 2px solid transparent;
      transition: 0.3s;
      &.active {
        color: #fff;
        border-bottom: 4px solid #eee;
      }
      &:hover {
        color: #fff;
      }
    }
  }
  .navinPhone {
    display: none;
    position: relative;
    .navs {
      position: absolute;
      top: 50px;
      right: 40px;
      left: -100px;
      border: solid 2px #fff;
      border-radius: 3px;
      box-shadow: 0 0 2px #666;
      background: #fff;
      .navitem {
        color: #666;
        box-sizing: border-box;
        padding: 0 20px;
      }
    }
  }
}

@media screen and (max-width: 700px) {
  #Menu {
    right: 0;
    left: 0;
    .navinPhone {
      display: block;
    }
    .nav {
      display: none;
    }
  }
}
</style>