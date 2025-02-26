<script setup>

import { onMounted, reactive, ref } from 'vue';
import axios from 'axios'
import { RouterLink, useRoute, useRouter } from 'vue-router';
import BoardComment from './component/BoardComment.vue';
const route = useRoute()
const router = useRouter();
const commentWriter = ref('');
const commentContent = ref('');
const board = reactive({
    title: "",
    content: "",
    wirter: "",
    commentList: []
})
const goback = () => {
    router.go(-1);
}
const addComment = async () => {
    console.log(commentWriter.value);
    console.log(commentContent.value)
    const response = await axios
        .post("/api/board/comment/" + route.params.idx,
            {
                "content": commentContent.value,
                "writer": commentWriter.value
            },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }

        )
    if(response.data.success) {
        router.go(0);
    }
}

onMounted(async () => {
    const response = await axios
        .get("/api/board/read/" + route.params.idx)
    board.title = response.data.result.title;
    board.content = response.data.result.content;
    board.writer = response.data.result.writer;
    board.commentList = response.data.result.commentList;
})
</script>
<template>
    <div>
        <RouterLink to="/">
            <h6>
                목록으로 가기
            </h6>

        </RouterLink>
        </div>
    <div style="display: flex; justify-content: space-between;">
        <div>
            <h1>{{ board.title }}</h1>
        </div>

        <div>
            <h4> Written By {{ board.writer }}</h4>
        </div>

    </div>
    <div>


        <div style="border: 1px solid black; min-height: 30rem;;">
            {{ board.content }}
        </div>
    </div>

    <div style="display: flex; flex-direction: column;">
        <div style="display: flex; justify-content: space-between;">
            <div> 댓글 작성하기 </div>
            <div style="display: flex;">
                <div>작성자 :</div>
                <input v-model="commentWriter" type="text" />
            </div>

        </div>

        <input type="text" v-model="commentContent" style=" width: 100%; height: 5rem;">
        <button style="align-self: flex-end;" @click="addComment"> 작성</button>

    </div>
    <div>
        <BoardComment v-for="comment in board.commentList" :comment="comment"></BoardComment>
    </div>
</template>

<style scoped></style>