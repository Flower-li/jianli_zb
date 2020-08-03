<template>
  <div class="home">
    <div class="bmxxMain">
      <van-row>
        <van-col :span="24">
          <p>报名编号</p>
          <span>*</span>
        </van-col>
        <van-col :span="24">
          <van-cell-group>
            <van-field v-model="list.sg" placeholder="请填写报名编号" />
          </van-cell-group>
        </van-col>
      </van-row>
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
          <p>手机号码</p>
          <span>*</span>
        </van-col>
        <van-col :span="24">
          <van-cell-group>
            <van-field
              v-model="list.sjh"
              placeholder="请填写手机号码"
              type="number"
            />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="24">
          <p>身份证号码</p>
          <span>*</span>
        </van-col>
        <van-col :span="24">
          <van-cell-group>
            <van-field v-model="list.sfz" placeholder="请填写身份证号码" />
          </van-cell-group>
        </van-col>
      </van-row>
            <van-row>
        <van-col :span="24">
          <p>曾用名</p>
        </van-col>
        <van-col :span="24">
          <van-cell-group>
            <van-field
              v-model="list.gzll"
              placeholder="请填写曾用名"
            />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="24">
          <p>出生地</p>
          <span>*</span>
        </van-col>
        <van-col :span="24">
          <van-cell-group>
            <van-field v-model="list.qwmsdd" placeholder="请填写出生地" />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="24">
          <p>性别</p>
          <span>*</span>
        </van-col>
        <van-col :span="24">
          <van-radio-group v-model="list.xb">
            <van-radio name="男">男</van-radio>
            <van-radio name="女">女</van-radio>
          </van-radio-group>
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
              @click="showCs"
              v-model="list.csrq"
              placeholder="请选择出生日期"
              readonly
            />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-popup
        v-model="showCsrq"
        position="bottom"
        :style="{ height: '40%' }"
      >
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          title="选择出生日期"
          :min-date="minDate"
          :max-date="maxDate"
          :formatter="formatter"
          @confirm="choiceCsrq"
          @cancel="cancelCsrq"
        />
      </van-popup>
      <van-row>
        <van-col :span="24">
          <p>学历</p>
          <span>*</span>
        </van-col>
        <van-col :span="24">
          <van-dropdown-menu>
            <van-dropdown-item v-model="list.xl" :options="option3" />
        </van-dropdown-menu>
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="24">
          <p>学历类型</p>
          <span>*</span>
        </van-col>
        <van-col :span="24">
          <van-dropdown-menu>
            <van-dropdown-item v-model="list.tz" :options="option1" />
        </van-dropdown-menu>
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="24">
          <p>学位</p>
          <span>*</span>
        </van-col>
        <van-col :span="24">
          <van-dropdown-menu>
            <van-dropdown-item v-model="list.ypgw" :options="option2" />
          </van-dropdown-menu>
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="24">
          <p>毕业专业</p>
          <span>*</span>
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
            <van-field
              @click="showBy"
              v-model="list.bysj"
              placeholder="请选择毕业年月份"
              readonly
            />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-popup
        v-model="showBysj"
        position="bottom"
        :style="{ height: '40%' }"
      >
        <van-datetime-picker
          v-model="currentDate"
          type="year-month"
          title="选择年月"
          :min-date="minDate"
          :max-date="maxDate"
          :formatter="formatter"
          @confirm="choiceBysj"
          @cancel="cancelBysj"
        />
      </van-popup>
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
          <p>政治面貌</p>
          <span>*</span>
        </van-col>
        <van-col :span="24">
          <van-cell-group>
            <van-field v-model="list.nn" placeholder="请填写政治面貌" />
          </van-cell-group>
        </van-col>
      </van-row>

      <van-row>
        <van-col :span="24">
          <p>入伍时间</p>
        </van-col>
        <van-col :span="24">
          <van-cell-group>
            <van-field
              @click="showRw"
              v-model="list.rwsj"
              placeholder="请选择入伍时间，非军人请勿选择"
              readonly
            />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-popup
        v-model="showRwsj"
        position="bottom"
        :style="{ height: '40%' }"
      >
        <van-datetime-picker
          v-model="currentDate"
          type="year-month"
          title="选择年月"
          :min-date="minDate"
          :max-date="maxDate"
          :formatter="formatter"
          @confirm="choiceRwsj"
          @cancel="cancelRwsj"
          cancel-button-text="清除时间"
        />
      </van-popup>
      <van-row>
        <van-col :span="24">
          <p>退伍时间</p>
        </van-col>
        <van-col :span="24">
          <van-cell-group>
            <van-field
              @click="showTw"
              v-model="list.twsj"
              placeholder="请选择退伍时间，非军人请勿选择"
              readonly
            />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-popup
        v-model="showTwsj"
        position="bottom"
        :style="{ height: '40%' }"
      >
        <van-datetime-picker
          v-model="currentDate"
          type="year-month"
          title="选择年月"
          :min-date="minDate"
          :max-date="maxDate"
          :formatter="formatter"
          @confirm="choiceTwsj"
          @cancel="cancelTwsj"
          cancel-button-text="清除时间"
        />
      </van-popup>
      <van-row>
        <van-col :span="24">
          <p>是否三钢子女或配偶</p>
          <span>*</span>
        </van-col>
        <van-col :span="24">
          <van-radio-group v-model="list.xz">
            <van-radio name="是">是</van-radio>
            <van-radio name="否">否</van-radio>
          </van-radio-group>
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="24">
          <p>家庭住址</p>
          <span>*</span>
        </van-col>
        <van-col :span="24">
          <van-cell-group>
            <van-field v-model="list.xjttxdz" placeholder="请填写家庭住址" />
          </van-cell-group>
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
import { sendMsg, sendImg } from "@/api/mainData.js";
export default {
  name: "home",
  data() {
    return {
      list: {
        xm: "",
        xb: "男",
        wife: "是",
        nn: "", //政治面貌
        sjh: "",
        sfz: "",
        csrq: "",
        sg: "",
         tz: "全日制普通教育",
         zysl: "",
         yysl: "",
        mz: "",
        xl: "本科",
        xz: "是",
        zy: "",
        byyx: "",
        bysj: "",
        jg: "",
         rtsj: "",
         rdsj: "",
        rwsj: "",
        twsj: "",
        xjttxdz: "",
         qwmsdd: "",
         gzll: "",
        bz: "",
        cym:"",
        csd:"",
        xw:"学士",
        ypgw:"学士",
        xllx:"全日制普通教育"
      },
      fileList: [],
      showBysj: false,
      showRwsj: false,
      showTwsj: false,
      showCsrq: false,
      minDate: new Date(1920, 0, 1),
      maxDate: new Date(2025, 11, 30),
      currentDate: new Date(),
      option1: [
        { text: '全日制普通教育', value: '全日制普通教育' },
        { text: '非全日制普通教育', value: '非全日制普通教育' },
        { text: '电大', value: '电大' },
        { text: '自考', value: '自考' },
        { text: '函授', value: '函授' },
        { text: '夜大', value: '夜大' },
        { text: '在职研究生', value: '在职研究生' },
        { text: '校企联办', value: '校企联办' },
        { text: '网络教育', value: '网络教育' }
      ],
      option2: [
        { text: '无', value: '无' },
        { text: '学士', value: '学士' },
        { text: '硕士', value: '硕士' },
        { text: '博士', value: '博士' }
      ],
      option3: [
        { text: '无', value: '无' },
        { text: '小学', value: '小学' },
        { text: '初中', value: '初中' },
        { text: '高中', value: '高中' },
        { text: '职高', value: '职高' },
        { text: '技校', value: '技校' },
        { text: '中专', value: '中专' },
        { text: '大专', value: '大专' },
        { text: '本科肄业', value: '本科肄业' },
        { text: '本科', value: '本科' },
        { text: '硕士研究生', value: '硕士研究生' },
        { text: '博士研究生', value: '博士研究生' }
      ],
    };
  },
  methods: {
    // afterRead(file) {
    //   // 此时可以自行将文件上传至服务器
    //   let content=file.file;
    //   let data=new FormData();
    //   data.append('img',content);
    //   // console.log(data.getAll("img"))
    //   console.log(this.fileList[0].file)
    // },
    showCs() {
      this.showCsrq = true;
    },
    showBy() {
      this.showBysj = true;
    },
    showRw() {
      this.showRwsj = true;
    },
    showTw() {
      this.showTwsj = true;
    },
    formatter(type, val) {
      if (type === "year") {
        return `${val}年`;
      } else if (type === "month") {
        return `${val}月`;
      } else if (type === "day") {
        return `${val}日`;
      }

      return val;
    },
    cancelCsrq() {
      this.showCsrq = false;
    },
    cancelBysj() {
      this.showBysj = false;
    },
    cancelRwsj() {
      this.showRwsj = false;
      this.list.rwsj = "";
    },
    cancelTwsj() {
      this.showTwsj = false;
      this.list.twsj = "";
    },
    p(s) {
      return s < 10 ? "0" + s : s;
    },
    choiceCsrq(value) {
      let month = this.p(value.getMonth() + 1);
      let day = this.p(value.getDate());
      this.list.csrq = value.getFullYear() + "-" + month + "-" + day;
      console.log(this.list.csrq);
      this.showCsrq = false;
    },
    choiceBysj(value) {
      let month = this.p(value.getMonth() + 1);
      this.list.bysj = value.getFullYear() + "-" + month;
      console.log(this.list.bysj);
      this.showBysj = false;
    },
    choiceRwsj(value) {
      let month = this.p(value.getMonth() + 1);
      this.list.rwsj = value.getFullYear() + "-" + month;
      console.log(this.list.rwsj);
      this.showRwsj = false;
    },
    choiceTwsj(value) {
      let month = this.p(value.getMonth() + 1);
      this.list.twsj = value.getFullYear() + "-" + month;
      console.log(this.list.twsj);
      this.showTwsj = false;
    },
    dataURLtoFile(dataurl, filename) {
      // 将base64转换为file文件
      let arr = dataurl.split(",");
      let mime = arr[0].match(/:(.*?);/)[1];
      let bstr = atob(arr[1]);
      let n = bstr.length;
      let u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, { type: mime });
    },
    tj() {
      if (
        this.list.xm != "" &&
        //this.list.gzll != "" &&
        //this.list.csd != "" &&
        this.list.nn != "" &&
        this.list.sjh != "" &&
        this.list.sfz != "" &&
        this.list.csrq != "" &&
        this.list.sg != "" &&
        this.list.tz != "" &&
        //this.list.zysl != "" &&
        //this.list.yysl != "" &&
        this.list.mz != "" &&
        this.list.xl != "" &&
        //this.list.xllx != "" &&
        //this.list.xw != "" &&
        this.list.byyx != "" &&
        this.list.bysj != "" &&
        this.list.zy != "" &&
        this.list.jg != "" &&
        //this.list.xz != "" &&
        //this.list.rwsj != "" &&
        //this.list.twsj != ""&&
        this.list.xjttxdz != "" &&
        this.list.ypgw != "" &&
        this.list.qwmsdd != ""
      ) {
        // if (this.list.nn < 0 || this.list.nn > 100) {
        //   alert("请正确填写年龄");
        // } else 
        if (this.list.sjh.length != 11) {
          alert("请填写正确手机号");
        } else if (this.list.sfz.length != 18) {
          alert("请填写正确身份证");
        } else {
          let list = {
            p_xm: this.list.xm,
            //p_cym: this.list.cym,
            //p_csd: this.list.csd,
            p_xb: this.list.xb,
            p_nn: this.list.nn, //政治面貌
            p_sjh: this.list.sjh,
            p_sfz: this.list.sfz,
            p_csrq: this.list.csrq,
            p_sg: this.list.sg,
            p_tz: this.list.tz,
            p_zysl: this.list.zysl,
            p_yysl: this.list.yysl,
            p_mz: this.list.mz,
            p_xl: this.list.xl,
           // p_xllx: this.list.xllx,
            //p_xw: this.list.xw,
            p_xz: this.list.xz, //是否三钢子女
            p_zy: this.list.zy,
            p_byyx: this.list.byyx,
            p_bysj: this.list.bysj,
            p_jg: this.list.jg,
            p_rtsj: this.list.rtsj,
            p_rdsj: this.list.rdsj,
            p_rwsj: this.list.rwsj,
            p_twsj: this.list.twsj,
            p_xjttxdz: this.list.xjttxdz,
            p_ypgw: this.list.ypgw,
            p_qwmsdd: this.list.qwmsdd,
            p_gzll: this.list.gzll,
            p_bz: this.list.bz
          };
          let test = { list: list, is_manager: "0" };
          sendMsg(test).then(rsp => {
            console.log(rsp.data.p_message);
            if (rsp.data.p_message.includes("ORA")) {
              alert("日期格式填写错误，请重新填写");
            } else if (rsp.data.p_message == "身份证已存在") {
              alert("身份证已存在");
            } else if (rsp.data.p_message == "调用成功") {
              if (this.fileList.length == 0) {
                alert("提交成功");
                this.$router.push("/");
              } else {
                var formdata = new FormData();
                let a = "0";
                let b = "";
                console.log(this.fileList, "fileLIst");
                for (let item of this.fileList) {
                  a++;
                  b = item.content.substring(
                    item.content.indexOf("/") + 1,
                    item.content.indexOf(";")
                  );
                  if (b == "jpeg") {
                    b = "jpg";
                  }
                  console.log(item.file.size, "原图尺寸");
                  if (item.file.size > 1048576) {
                    let canvas = document.createElement("canvas"); // 创建Canvas对象(画布)
                    let context = canvas.getContext("2d");
                    let img = new Image();
                    img.src = item.content; // 指定图片的DataURL(图片的base64编码数据)
                    console.log(img.width, "图片宽度", img.height, "图片高度");
                    var imgWidth = parseInt(img.width / 2);
                    var imgHight = parseInt(img.height / 2);
                    if (imgWidth > 1500 || imgHight > 1500) {
                      (imgWidth = imgWidth / 2), (imgHight = imgHight / 2);
                    }
                    console.log(
                      imgWidth,
                      "压缩后图片宽度",
                      imgHight,
                      "压缩后图片高度"
                    );
                    canvas.width = imgWidth;
                    canvas.height = imgHight;
                    context.drawImage(img, 0, 0, imgWidth, imgHight);
                    item.content = canvas.toDataURL(item.file.type, 0.95);
                    var files = this.dataURLtoFile(
                      item.content,
                      item.file.name
                    );
                    formdata.append(
                      "uploadFiles",
                      files,
                      this.list.xm + "_" + a + "_" + this.list.sfz + "." + b
                    );
                  }
                  if (item.file.size <= 1048576) {
                    formdata.append(
                      "uploadFiles",
                      item.file,
                      this.list.xm + "_" + a + "_" + this.list.sfz + "." + b
                    );
                  }
                }
                console.log(formdata.getAll("uploadFiles"), "总上传内容");
                // this.$axios({
                //   method: "post",
                //   url: "https://ehr.fjsg.com.cn/uat/zp/multipleImageUpload",
                //   data: formdata,
                //   processData: false,
                //   contentType: false
                // })
                sendImg(formdata)
                  .then(rsp => {
                    alert("提交成功");
                    this.$router.push("/");
                    console.log(rsp, "返回数据");
                  })
                  .catch(err => {
                    alert("提交失败");
                    console.log(err, "返回报错");
                  });
              }
            }
          });
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
