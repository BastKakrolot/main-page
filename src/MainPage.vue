<script setup>
import { GithubFilled, HomeFilled, ReadFilled } from "@ant-design/icons-vue";
import { Tooltip, Space, Avatar, Divider, Tag } from "ant-design-vue";
import option from "./particles";
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import Footer from './Footer.vue'
const linkTo = (type) => {
  const link = document.createElement("a");
  link.target = "_bank";
  switch (type) {
    case "github":
      link.href = "https://github.com/BastKakrolot";
      break;
    case "blog":
      link.href = "https://blog.blackcell.fun/";
      break;
    case "resume":
      link.href = "https://github.com/BastKakrolot";
      break;
    default:
      return;
  }
  link.click();
};
const particlesInit = async (engine) => {
  await loadSlim(engine);
};
</script>

<template>
  <vue-particles id="tsParticles" :particlesInit="particlesInit" :options="option" />
  <div class="content">
    <div class="main-page">
      <Space direction="vertical" align="center" :size="40">
        <Space>
          <Avatar class="avatar" :size="120" src="/avatar.jpeg"> </Avatar>
        </Space>
        <Space>
          <div class="introduce">
            <Divider>BlackCell / BastKakrolot</Divider>
            <span class="info">2017年实习一年，2018年毕业，熟悉代码开发到上线全流程，对协同开发，分支管理，项目配置等都有较深刻的最佳实践
              ，经历过多种分支模型 会多审视重构代码，在 Gitlab 上对组内成员进行
              code review
              积极组织前端分享会，以及代码审查会，从独立开发到团队管理都有着一定的经验，对开源分享亦有浓厚兴趣。
              勇于学习新鲜技术现在正在学习 <Tag color="orange">threejs</Tag>
              <Tag color="green">Taro</Tag>
              <Tag color="cyan">ReactNative</Tag>
              <Tag color="purple">Next</Tag>
              <Tag color="blue">uniApp</Tag>
            </span>
            <Divider style="font-size: 12px; color: #999">物以类聚 人以群分</Divider>
          </div>
        </Space>
        <Space wrap :size="40">
          <Tooltip>
            <template #title>GitHub</template>
            <Avatar class="link" :size="64" @click="() => linkTo('github')">
              <template #icon>
                <GithubFilled />
              </template>
            </Avatar>
          </Tooltip>
          <Tooltip>
            <template #title>MyBlog</template>
            <Avatar class="link" :size="64" @click="() => linkTo('blog')">
              <template #icon>
                <HomeFilled />
              </template>
            </Avatar>
          </Tooltip>
          <Tooltip>
            <template #title>MyResume</template>
            <Avatar class="link" :size="64" @click="() => linkTo('resume')">
              <template #icon>
                <ReadFilled />
              </template>
            </Avatar>
          </Tooltip>
        </Space>
      </Space>
    </div>
    <Footer></Footer>
  </div>
</template>

<style lang="less" scoped>
@media (min-width: 1000px) {
  .content {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.3);
    z-index: 1;
    position: relative;

    .main-page {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;

      .link {
        cursor: pointer;
        background-color: #555;
      }

      .avatar {
        border: 4px solid #000;
      }

      .introduce {
        width: 700px;
        padding: 30px;
        border-radius: 20px;
        overflow: hidden;
        border: 2px solid #000;
        background-color: rgba(255, 255, 255, 0.8);

        .info {
          margin-left: 40px;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }
  }
}

@media (max-width: 999px) {
  .content {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.3);
    z-index: 1;
    position: relative;

    .main-page {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      padding: 0 20px;

      .link {
        cursor: pointer;
        background-color: #555;
      }

      .avatar {
        border: 4px solid #000;
      }

      .introduce {
        padding: 0 20px;
        border-radius: 20px;
        overflow: hidden;
        border: 2px solid #000;
        background-color: rgba(255, 255, 255, 0.8);

        .info {
          margin-left: 40px;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }
  }
}
</style>
