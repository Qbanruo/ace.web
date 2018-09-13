<template>
  <el-dialog :title="text +'品牌'" :visible.sync="dialogFormVisible" width="400px">
    <el-form :model="form" ref="form">
      <el-form-item label="中文名称" label-width="80px" prop="name" :rules="rulesForm('中文名称不能为空')">
        <el-input v-model="form.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="英文名称" label-width="80px" prop="englishName" :rules="rulesForm('英文名称不能为空')">
        <el-input v-model="form.englishName" auto-complete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="submitForm('form')">提交</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'add_window',
  data () {
    return {
      dialogFormVisible: false,
      text: '',
      form: {
        id: null,
        name: '',
        englishName: ''
      }
    }
  },
  created () {
  },
  methods: {
    show (isAdd) {
      this.text = isAdd ? '新增' : '修改'
      if (this.$refs.form) {
        this.$refs.form.clearValidate()
      }
      if (this.text === '新增') {
        this.form = {}
      }
      this.dialogFormVisible = true
    },
    submitForm (form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    rulesForm (msg) {
      let rules = [{ required: true, message: msg, trigger: 'blur' }]
      return rules
    },
    loadData (data) {
      this.form = data
    }
  }
}
</script>

<style scoped>

</style>
