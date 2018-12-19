<template>
    <div>
        <a class="go-back-page" href="javascript:;" @click="goBack">返回{{ this.name }}</a>
    </div>
</template>

<script>
export default {
   props: {
        name: {
           type: String,
           default: '上一页',
        },
        url: {
            type: String,
            default: '/',
        },
   },
   methods: {
        /**
         * 返回上一页
         */
        goBack() {
            if (history.state || history.length > 1) {
                history.back();
            } else {
                window.location.href = `http://${window.location.host}${this.url}`;
            }
        },
   },
};
</script>

<style>
.go-back-page {
    margin-top: 8px;
    float: right;
}

</style>

