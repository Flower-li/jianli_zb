<template>
  <div class="index">
    <van-image :src="headerImg"></van-image>
    <van-row type="flex" justify="center">
      <van-col>
        <div class="header">
          <p>{{ title }}</p>
          <span>[{{ status }}]</span>
        </div>
      </van-col>
    </van-row>
    <van-row type="flex" justify="center">
      <van-col>
        <!-- <div class="list">
          <div class="icon"><van-icon name="clock-o" size="17" /></div>
          <p>报名时间：</p>
          <p>{{ startTime }}-{{ endTime }}</p>
        </div>
        <div class="list">
          <div class="icon"><van-icon name="friends-o" size="17" /></div>
          <p>报名人数：</p>
          <p>{{ trueNum }}/{{ allNum }}</p>
        </div> -->
        <div class="list">
          <div class="icon"><van-icon name="location-o" size="17" /></div>
          <p>报名地址：</p>
          <p>{{ position }}</p>
        </div>
        <div class="list">
          <div class="icon"><van-icon name="phone-o" size="17" /></div>
          <p>联系电话：</p>
          <p>{{ telNum }}</p>
        </div>
      </van-col>
    </van-row>
    <van-divider style="margin: 15px 0 10px 0;" />
    <van-row>
      <van-col :span="6">
        <van-image :src="logoImg"> </van-image>
      </van-col>
      <van-col :span="18">
        <div class="jjTitle">
          <p>{{ companyTitle }}</p>
          <span>公司简介</span>
        </div></van-col
      >
      <van-col :span="22" offset="1">
        <div class="jjMain">
          {{ jjMain }}
        </div>
      </van-col>
    </van-row>
    <van-tabbar :safe-area-inset-bottom="true" style="height: 45px;">
      <van-button type="primary" @click="ljbm">立即报名</van-button>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      headerImg: require("@/assets/images/header.jpg"),
      title: "福建罗源闽光钢铁公司2020年招聘报名",
      status: "进行中",
      startTime: "2019-10-10 10:40",
      endTime: "2019-10-11 23:59",
      trueNum: "450",
      allNum: "1000",
      position: "福建省福州市罗源县罗源湾闽光钢铁厂",
      telNum: "0591-26989395/62579834",
      logoImg: require("@/assets/images/logo.png"),
      companyTitle: "福建罗源闽光钢铁有限责任公司",
      jjMain:
        " 福建三钢集团历经60年发展，年产钢1100万吨，拥有职工1.6万人，总资产407.12亿元。福建三钢集团在“2018中国企业500强”中位居第316位，在“2018中国制造业企业500强”中位居第146位。福建罗源闽光钢铁有限责任公司（以下简称“罗源闽光”）是三钢集团下属全资子公司，性质为国有企业，注册资本17亿元，现有员工约1800人。公司位于海峡西岸经济区中心城市—福州市罗源湾经济技术开发区内，依山伴海、风景秀丽，紧邻沈海高速、宁东高速、温福铁路、罗源万吨码头和104国道，距长乐国际机场不足一百公里，交通便捷，区位优势明显。2018年公司产能为172万吨生铁、202万吨粗钢、176万吨高速棒、线材，全年实现销售收入143.04亿元、利润14.62亿元。罗源闽光拥有烧结、炼铁、炼钢、轧钢等生产作业线，随着三钢集团总部产能转移，公司在两三年将目标产能扩大到400-500万吨钢生产能力，通过产业升级改造和产品结构调整，将罗源闽光公司打造成为一个高效、节能、环保、清洁生产、可持续发展、最具竞争力的3A级现代化绿色钢铁景观工厂。"
    };
  },
  methods: {
    ljbm() {
      this.$router.push("/Home");
    }
  }
};
</script>

<style lang="scss" scoped>
.index {
  .van-image {
    width: 100%;
    height: 100px;
  }
  .van-row {
    width: 90%;
    margin: auto;
    .van-col {
      .header {
        p {
          font-size: 16px;
          color: #000000;
          margin: 10px 0;
          font-weight: 600;
        }
        span {
          float: left;
          color: #18b0f8;
          margin-bottom: 5px;
        }
      }
      .list {
        color: #858484;
        display: flex;
        display: -webkit-flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: flex-start;
        .icon {
          float: left;
          margin-right: 3px;
        }
        p {
          font-size: 12px;
          word-break: break-all;
          float: left;
          min-width: 60px;
        }
      }
      .van-image {
        width: 67px;
        height: 67px;
        float: right;
      }
      .jjTitle {
        float: left;
        p {
          font-size: 15px;
          color: #000000;
          margin-top: 10px;
          margin-bottom: 3px;
        }
        span {
          font-size: 12px;
          color: #fff;
          background-color: #18b0f8;
          padding: 2px 5px;
          border-radius: 5px;
        }
      }
      .jjMain {
        font-size: 12px;
        color: #858484;
        line-height: 22px;
        padding-bottom: 50px;
        text-align: justify;
      }
    }
  }
  .van-button {
    width: 100%;
    height: 100%;
  }
}
</style>
