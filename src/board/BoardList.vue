<script setup>

import { onMounted, reactive, ref } from 'vue';
import axios from 'axios';
import { RouterLink } from 'vue-router';

const boardList = reactive([]);
const page = reactive({
    "page": 0,
    "size": 0,
    "totalElements": 0,
    "totalPages": 0,
    "hasNext": false,
    "hasPrevious": false,
    "instances" : []
});
onMounted( async () => {
    const response = await axios
        .get("api/board/list")
    page.page = response.data.result.page;
    page.size = response.data.result.size;
    page.totalElements = response.data.result.totalElements;
    page.totalPages = response.data.result.totalPages;
    page.hasNext = response.data.result.hasNext;
    page.hasPrevious = response.data.result.hasPrevious;
    page.instances = response.data.result.instances;
    console.log(page);
}
)

</script>
<template>
    <h1>게시글 목록</h1>
    <div>
        <table border="1">
            <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>댓글 수</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="board in page.instances" >
                    <td>{{board.idx}}</td>
                    <td>
                        <RouterLink :to="`/board/${board.idx}`">
                            {{board.title}}
                        </RouterLink>
                    </td>
                    <td>{{board.writer}}</td>
                    <td>{{board.commentCount}}</td>

                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
table {
    width: 30rem;
}
th {
    padding: 0.5rem;
}
a {
  color: inherit; /* 부모 요소의 색상 사용 (기본 텍스트 색 유지) */
  text-decoration: none; /* 밑줄 제거 */
}

a:hover {
  text-decoration: underline; /* 호버 시 밑줄 추가 (선택사항) */
}
</style>