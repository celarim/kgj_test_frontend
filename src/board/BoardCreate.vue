<script setup>

import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const writer = ref('');
const title = ref('');
const content = ref('');
const router = useRouter();
const uploadBoard = async () => {
    const response = await axios
        .post("/api/board/create",
        {
            'writer' : writer.value,
            'title' : title.value,
            'content' : content.value
        },
        {
            headers: {
                'Content-Type':'application/json'
            }
        }

        )
    if(response.data.success) {
        router.go(-1);
    }
}
</script>
<template>
    <div>
        <h1>게시글 작성
        </h1>

    </div>

    <div style="display: flex;">
        <div>
            작성자 :
        </div>
        <input type="text" v-model="writer" placeholder="작성자">
    </div>
    <div style="display: flex;">
        <div>
            제목 :
        </div>
        <input type="text"v-model="title" placeholder="제목">
    </div>
    <div>
        내용
    </div>
    <textarea v-model="content" style="overflow-y: auto; width: 50rem; min-height: 5rem;">

    </textarea>
    <div>
        
    <button @click="uploadBoard">
        작성하기
    </button>
    </div>
</template>

<style scoped></style>