<template>
    <div class="paging">
        <el-pagination
            :background=config.background
            :layout=config.layout
            :current-page=config.currentPage
            :page-count=config.pageCount
            :prev-text=config.prevText
            :next-text=config.nextText
            @current-change="currentChange">
        </el-pagination>
    </div>
</template>

<script>
export default{
    name:'paging',
    data(){
        return {
            config:{
                background:true,
                layout:'prev,pager,next',
                currentPage:1,
                pageCount:10,
                prevText:"下一页",
                nextText:"下一页"
            }
        }
    },
    methods:{
        currentChange:()=>{
            console.log('当前页 ${val} 页');
        }
    }
}
</script>