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
          <van-radio-group v-model="list.xb">
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
            <van-field
              v-model="list.nn"
              placeholder="请填写年龄"
              type="number"
            />
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
            <van-field
              v-model="list.sjh"
              placeholder="请填写手机号"
              type="number"
            />
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
              placeholder="请填写出生年份,格式必须为：XXXX-XX-XX"
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
            <van-field
              v-model="list.bysj"
              placeholder="请填写毕业时间，格式必须为：XXXX-XX-XX"
            />
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
            <van-field
              v-model="list.rtsj"
              placeholder="请填写入团时间，格式必须为：XXXX-XX-XX"
            />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="24">
          <p>入党时间</p>
        </van-col>
        <van-col :span="24">
          <van-cell-group>
            <van-field
              v-model="list.rdsj"
              placeholder="请填写入党时间，格式必须为：XXXX-XX-XX"
            />
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
              v-model="list.rwsj"
              placeholder="请填写入伍时间，格式必须为：XXXX-XX-XX"
            />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="24">
          <p>退伍时间</p>
        </van-col>
        <van-col :span="24">
          <van-cell-group>
            <van-field
              v-model="list.twsj"
              placeholder="请填写退伍时间，格式必须为：XXXX-XX-XX"
            />
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
import { sendMsg, sendImg } from "@/api/mainData.js";
export default {
  name: "home",
  data() {
    return {
      list: {
        xm: "李凤化",
        xb: "男",
        nn: "1",
        sjh: "13906988092",
        sfz: "350425199110112911",
        csrq: "1990-11-11",
        sg: "1",
        tz: "1",
        zysl: "1",
        yysl: "1",
        mz: "1",
        xl: "1",
        xz: "1",
        zy: "1",
        byyx: "1",
        bysj: "1990-11-11",
        jg: "1",
        rtsj: "1990-11-11",
        rdsj: "1990-11-11",
        rwsj: "1990-11-11",
        twsj: "1990-11-11",
        xjttxdz: "1",
        ypgw: "1",
        qwmsdd: "1",
        gzll: "1",
        bz: "1"
      },
      fileList: []
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
        } else {
          let list = {
            p_xm: this.list.xm,
            p_xb: this.list.xb,
            p_nn: this.list.nn,
            p_sjh: this.list.sjh,
            p_sfz: this.list.sfz,
            p_csrq: this.list.csrq,
            p_sg: this.list.sg,
            p_tz: this.list.tz,
            p_zysl: this.list.zysl,
            p_yysl: this.list.yysl,
            p_mz: this.list.mz,
            p_xl: this.list.xl,
            p_xz: this.list.xz,
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
            if (rsp.data.p_message.includes("ORA")) {
              alert("日期填写错误，请重新填写");
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
