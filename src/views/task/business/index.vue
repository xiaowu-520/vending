<template>
  <div>
    <div class="search">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="工单编号：">
          <el-input v-model="formInline.user" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="工单状态：">
          <el-select v-model="formInline.region" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: "",
      },
    };
  },

  created() {},

  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  height: 64px;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 20px;
  padding-left: 17px;
  background-color: #fff;

  .el-form-item {
    margin-bottom: 0;
  }

  .el-form-item__label {
    line-height: 36px;
  }

  .el-input__inner {
    padding-right: 30px;
    height: 36px;
    line-height: 36px;
  }
}
</style>
