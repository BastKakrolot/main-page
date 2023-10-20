<script setup>
import { CopyrightOutlined } from '@ant-design/icons-vue'
</script>
<template>
    <div class="footer">
        <div class="box">
            <div class="label">备案号</div>
            <div class="value">
                <a href="https://beian.miit.gov.cn/" target="_blank">鄂ICP备2021009860号</a>
            </div>
        </div>
        <div class="box">
            <div class="label">
                Copyright
            </div>
            <div>
                <CopyrightOutlined />
            </div>
            <div class="value">
                2021-Present
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 10px;

    .box {
        display: flex;
        gap: 5px;
        font-size: 12px;
        color: #777;

        a {
            color: #777;
            font-weight: bolder;
        }
    }
}
</style>
