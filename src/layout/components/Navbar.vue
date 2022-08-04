<template>
  <div class="navbar">
    <img
      class="imgLogo"
      src="http://likede2-admin.itheima.net/img/logo.3673fab5.png"
      alt=""
    />
    <div
      class="right-Menu"
      style="
        float: right;
        width: 240px;
        height: 100%;
        margin-right: 24px;
        color: #fff;
      "
    >
      <el-row>
        <el-col :span="5">
          <div style="height: 60px; line-height: 60px">
            <img
              src="https://img2.woyaogexing.com/2022/07/23/2293c07d0fcfcdc2!400x400.jpg"
              alt=""
              style="
                vertical-align: middle;
                width: 40px;
                height: 40px;
                border-radius: 10px;
              "
              v-imgError="defaultImg"
            />
          </div>
        </el-col>
        <el-col :span="14">
          <div style="height: 60px; line-height: 60px">
            <span style="vertical-align: middle">欢迎您，admin</span>
          </div>
        </el-col>
        <el-col :span="5">
          <el-tooltip
            class="item"
            effect="dark"
            content="退出登录"
            placement="bottom"
            style="height: 60px; line-height: 60px"
          >
            <div @click="logout">
              <span style="vertical-align: middle; cursor: pointer">退出</span>
              <i class="el-icon-caret-bottom"></i>
            </div>
          </el-tooltip>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      defaultImg:
        "https://img2.woyaogexing.com/2022/07/23/2293c07d0fcfcdc2!400x400.jpg",
    };
  },
  components: {},
  computed: {
    ...mapGetters(["sidebar", "avatar"]),
  },
  methods: {
    async logout() {
      // console.log(1);
      await this.$store.dispatch("user/logout");
      // this.$router.push(`/login?redirect=${this.$route.fullPath}`);
      // console.log(this.$route);
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1999;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABwEAAAA8CAYAAACOysV5AAADG0lEQVR4nO3aR04DURBF0bYHhPWxFDbMLggDjIQEIjh0+O2uqn/OEt70vt3D49NhAAAA4Crub/fD3c3O2AAAAKxqb14AAIDreX59H17efDEBAABYlwgIAABwZUIgAAAAaxMBAQAANiAEAgAAsCYREAAAYCNCIAAAAGsRAQEAADYkBAIAALAGERAAAGBjQiAAAACtiYAAAAABCIEAAAC0JAICAAAEIQQCAADQiggIAAAQiBAIAABACyIgAABAMEIgAAAAS4mAAAAAAQmBAAAALCECAgAABCUEAgAAMJcICAAAEJgQCAAAwBwiIAAAQHBCIAAAAFOJgAAAAAkIgQAAAEwhAgIAACQhBAIAADCWCAgAAJCIEAgAAMAYIiAAAEAyQiAAAACXiIAAAAAJCYEAAACcIwICAAAkJQQCAABwiggIAACQmBAIAADAMSIgAABAckIgAAAAf4mAAAAABQiBAAAA/CQCAgAAFCEEAgAA8EUEBAAAKEQIBAAAYBABAQAA6hECAQAAEAEBAAAKEgIBAAD6JgICAAAUJQQCAAD0SwQEAAAoTAgEAADokwgIAABQnBAIAADQHxEQAACgA0IgAABAX0RAAACATgiBAAAA/RABAQAAOiIEAgAA9EEEBAAA6IwQCAAAUJ8ICAAA0CEhEAAAoDYREAAAoFNCIAAAQF0iIAAAQMeEQAAAgJpEQAAAgM4JgQAAAPWIgAAAAAiBAAAAxYiAAAAAfBICAQAA6hABAQAA+CYEAgAA1CACAgAA8IsQCAAAkJ8ICAAAwD9CIAAAQG4iIAAAAEcJgQAAAHmJgAAAAJwkBAIAAOQkAgIAAHCWEAgAAJCPCAgAAMBFQiAAAEAuIiAAAACjCIEAAAB5iIAAAACMJgQCAADkIAICAAAwiRAIAAAQnwgIAADAZEIgAABAbCIgAAAAswiBAAAAcYmAAAAAzCYEAgAAxCQCAgAAsIgQCAAAEI8ICAAAwGJCIAAAQCwiIAAAAE0IgQAAAHGIgAAAADQjBAIAAMQgAgIAANCUEAgAALA9ERAAAIDmhEAAAIANDcPwAWT/XbLChBneAAAAAElFTkSuQmCC);
  background-size: cover;
  background-repeat: no-repeat;

  .imgLogo {
    margin-top: 6px;
    margin-left: 15px;
    width: 88px;
    position: relative;
    top: 4px;

    .right-Menu {
      .el-row {
        position: relative;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;

        .el-col {
          float: left;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
        }

        ::v-deep .el-col-5 {
          width: 20%;
        }

        .el-col-14 {
          width: 58.3333333333%;
        }
      }
    }
  }
}
</style>
