<template>
  <div class="home">
    <div class="bmxxMain">
      <van-row>
        <van-col :span="24">
          <p>姓名</p>
          <span>*</span>
        </van-col>
        <van-col :span="24">
          <van-cell-group>
            <van-field v-model="list.xm" placeholder="请填写姓名" />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="24">
          <p>性别</p>
          <span>*</span>
        </van-col>
        <van-col :span="24">
          <van-radio-group v-model="list.radio" @change="radioChange">
            <van-radio name="男">男</van-radio>
            <van-radio name="女">女</van-radio>
          </van-radio-group>
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="24">
          <p>年龄</p>
          <span>*</span>
        </van-col>
        <van-col :span="24">
          <van-cell-group>
            <van-field v-model="list.nn" placeholder="请填写年龄" />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="24">
          <p>手机号</p>
          <span>*</span>
        </van-col>
        <van-col :span="24">
          <van-cell-group>
            <van-field v-model="list.sjh" placeholder="请填写手机号" />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="24">
          <p>身份证</p>
          <span>*</span>
        </van-col>
        <van-col :span="24">
          <van-cell-group>
            <van-field v-model="list.sfz" placeholder="请填写身份证" />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="24">
          <p>出生日期</p>
          <span>*</span>
        </van-col>
        <van-col :span="24">
          <van-cell-group>
            <van-field
              v-model="list.csrq"
              placeholder="请填写出生年份,格式参照：XXXX-XX-XX"
            />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="24">
          <p>身高体重</p>
          <span>*</span>
        </van-col>
        <van-col :span="24">
          <van-cell-group>
            <van-field v-model="list.sg" placeholder="请填写身高，单位cm" />
          </van-cell-group>
        </van-col>
        <van-col :span="24">
          <van-cell-group>
            <van-field v-model="list.tz" placeholder="请填写体重，单位kg" />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="24">
          <p>左右眼视力</p>
          <span>*</span>
        </van-col>
        <van-col :span="24">
          <van-cell-group>
            <van-field v-model="list.zysl" placeholder="请填写左眼视力" />
          </van-cell-group>
        </van-col>
        <van-col :span="24">
          <van-cell-group>
            <van-field v-model="list.yysl" placeholder="请填写右眼视力" />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="24">
          <p>民族</p>
          <span>*</span>
        </van-col>
        <van-col :span="24">
          <van-cell-group>
            <van-field v-model="list.mz" placeholder="请填写民族" />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="24">
          <p>学历</p>
          <span>*</span>
        </van-col>
        <van-col :span="24">
          <van-cell-group>
            <van-field v-model="list.xl" placeholder="请填写学历" />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="24">
          <p>学制</p>
        </van-col>
        <van-col :span="24">
          <van-cell-group>
            <van-field v-model="list.xz" placeholder="请填写学制" />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="24">
          <p>专业</p>
        </van-col>
        <van-col :span="24">
          <van-cell-group>
            <van-field v-model="list.zy" placeholder="请填写专业" />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="24">
          <p>毕业院校</p>
          <span>*</span>
        </van-col>
        <van-col :span="24">
          <van-cell-group>
            <van-field v-model="list.byyx" placeholder="请填写毕业院校" />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="24">
          <p>毕业时间</p>
          <span>*</span>
        </van-col>
        <van-col :span="24">
          <van-cell-group>
            <van-field v-model="list.bysj" placeholder="请填写毕业时间" />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="24">
          <p>籍贯</p>
          <span>*</span>
        </van-col>
        <van-col :span="24">
          <van-cell-group>
            <van-field v-model="list.jg" placeholder="请填写籍贯" />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="24">
          <p>入团时间</p>
        </van-col>
        <van-col :span="24">
          <van-cell-group>
            <van-field v-model="list.rtsj" placeholder="请填写入团时间" />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="24">
          <p>入党时间</p>
        </van-col>
        <van-col :span="24">
          <van-cell-group>
            <van-field v-model="list.rdsj" placeholder="请填写入党时间" />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="24">
          <p>入伍时间</p>
        </van-col>
        <van-col :span="24">
          <van-cell-group>
            <van-field v-model="list.rwsj" placeholder="请填写入伍时间" />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="24">
          <p>退伍时间</p>
        </van-col>
        <van-col :span="24">
          <van-cell-group>
            <van-field v-model="list.twsj" placeholder="请填写退伍时间" />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="24">
          <p>现家庭通讯地址</p>
          <span>*</span>
        </van-col>
        <van-col :span="24">
          <van-cell-group>
            <van-field
              v-model="list.xjttxdz"
              placeholder="请填写现家庭通讯地址"
            />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="24">
          <p>应聘岗位</p>
          <span>*</span>
        </van-col>
        <van-col :span="24">
          <van-cell-group>
            <van-field v-model="list.ypgw" placeholder="请填写应聘岗位" />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="24">
          <p>期望面试地点</p>
          <span>*</span>
        </van-col>
        <van-col :span="24">
          <van-cell-group>
            <van-field v-model="list.qwmsdd" placeholder="请填写期望面试地点" />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="24">
          <p>工作履历</p>
        </van-col>
        <van-col :span="24">
          <van-cell-group>
            <van-field
              v-model="list.gzll"
              autosize
              type="textarea"
              placeholder="请填写工作履历"
            />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="24">
          <p>证件上传</p>
        </van-col>
        <van-col :span="24">
          <van-uploader v-model="fileList" multiple />
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="24">
          <p>备注</p>
        </van-col>
        <van-col :span="24">
          <van-cell-group>
            <van-field
              v-model="list.bz"
              autosize
              type="textarea"
              placeholder="请填写备注"
            />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-button type="info" @click="tj">填写完毕，点击提交</van-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      list: {
        xm: "",
        xb: "",
        radio: "男",
        nn: "",
        sjh: "",
        sfz: "",
        csrq: "",
        sg: "",
        tz: "",
        zysl: "",
        yysl: "",
        mz: "",
        xl: "",
        xz: "",
        zy: "",
        byyx: "",
        bysj: "",
        jg: "",
        rtsj: "",
        rdsj: "",
        rwsj: "",
        twsj: "",
        xjttxdz: "",
        ypgw: "",
        qwmsdd: "",
        gzll: "",
        bz: ""
      },
      fileList: [
        // { url: "https://img.yzcdn.cn/vant/leaf.jpg", isImage: true },
        // // Uploader 根据文件后缀来判断是否为图片文件
        // // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        // { url: "https://cloud-image", isImage: true }
      ]
    };
  },
  methods: {
    radioChange() {
      console.log(this.list.radio);
    },
    tj() {
      if (
        this.list.xm != "" &&
        this.list.nn != "" &&
        this.list.sjh != "" &&
        this.list.sfz != "" &&
        this.list.csrq != "" &&
        this.list.sg != "" &&
        this.list.tz != "" &&
        this.list.zysl != "" &&
        this.list.yysl != "" &&
        this.list.mz != "" &&
        this.list.xl != "" &&
        this.list.byyx != "" &&
        this.list.bysj != "" &&
        this.list.jg != "" &&
        this.list.xjttxdz != "" &&
        this.list.ypgw != "" &&
        this.list.qwmsdd != ""
      ) {
        if (this.list.nn < 0 || this.list.nn > 100) {
          alert("请正确填写年龄");
        } else if (this.list.sjh.length != 11) {
          alert("请填写正确手机号");
        } else if (this.list.sfz.length != 18) {
          alert("请填写正确身份证");
          console.log(this.list.sfz.length);
        } else {
          alert("提交成功");
        }
      } else {
        alert("提交失败，请填写所有必填选项");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.bmxxMain {
  background-color: #efeff4;
  .van-row {
    .van-col {
      min-height: 44px;
      p {
        font-size: 15px;
        line-height: 44px;
        padding-left: 20px;
        color: #353535;
        float: left;
      }
      span {
        color: red;
        font-size: 20px;
        padding-left: 5px;
        padding-top: 13px;
        float: left;
      }
      .van-radio-group {
        background-color: #fff;
        padding: 5px 0;
        .van-radio {
          margin: 10px 0 10px 20px;
          font-size: 14px;
        }
      }
    }
    .van-uploader {
      padding-left: 20px !important;
    }
  }
  .van-button {
    width: 100%;
    height: 50px;
    margin: 20px 0 50px;
  }
}
</style>
