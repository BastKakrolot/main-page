<script setup>
import { GithubFilled, HomeFilled, ReadFilled } from '@ant-design/icons-vue'
import { Tooltip, Space, Avatar, Divider,Tag } from 'ant-design-vue';
import option from './particles'
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

const linkTo = (type) => {
  const link = document.createElement('a')
  link.target = '_bank'
  switch (type){
    case 'github':
      link.href = 'https://github.com/BastKakrolot';
      break;
    case 'blog':
      link.href = 'https://blog.blackcell.fun/';
      break;
    case 'resume':
      link.href = 'https://github.com/BastKakrolot';
      break;
    default:
      return;
  }
  link.click()
}
console.log(option);
const particlesInit = async engine => {
    //await loadFull(engine);
    await loadSlim(engine);
};

const particlesLoaded = async container => {
    console.log("Particles container loaded", container);
};
</script>

<template>
  <vue-particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="option"
    />
  <div class="main-page">
    <Space direction="vertical" align="center" :size="40">
      <Space>
        <Avatar class="avatar" :size="150" src="/avatar.jpeg">
        </Avatar>
      </Space>
      <Space>
        <div class="introduce">
          <Divider>BlackCell / BastKakrolot</Divider>
          <span class="info">2017年实习一年，2018年毕业，勇于学习新鲜技术现在正在学习
            <Tag color="orange">threejs</Tag>、
            <Tag color="green">Taro</Tag>、
            <Tag color="cyan">ReactNative</Tag>、
            <Tag color="purple">Next</Tag>、
            <Tag color="blue">uniApp</Tag>，从独立开发到团队管理都有着一定的经验，对开源分享亦有浓厚兴趣。</span>
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
      <Space>
        <div style="height: 200px;"></div>
      </Space>
    </Space>
  </div>
</template>

<style lang="less" scoped>
  .main-page{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    position: relative;
    background-color: rgba(255, 255, 255, 0.3);
    .link{
      cursor: pointer;
      background-color: #555;
    }
    .avatar{
      border: 4px solid #000;
    }
    .introduce{
      width: 700px;
      padding: 30px;
      border-radius: 20px;
      overflow: hidden;
      border: 2px solid #000;
      background-color: rgba(255, 255, 255, .8);
      .info{
        margin-left: 40px;
        font-size: 20px;
      }
    }
  }
</style>
