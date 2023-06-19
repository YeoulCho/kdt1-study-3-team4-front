<template>
    <form @submit.prevent="onSubmit">
        <table>
            <!-- <tr>
                <td>상품 이미지</td>
                <td>
                    <v-row align="center">
                        <v-col v-for="(imagePath, idx) in product.productImagesPathList" :key="idx" cols="10">
                            <v-img
                                :src="require(`D:/Github/kdt1-study-3-team4-back/demo/src/main/java/com/example/demo/UploadImgs/${imagePath}`)"
                            <v-img
                                :src="require(`C:/Users/82108/Documents/GitHub/kdt1-study-3-team4-back/demo/src/main/java/com/example/demo/uploadImgs/${imagePath}`)"
                                aspect-ratio="1" class="grey lighten-2">
                                <template v-slot:placeholder>
                                    <v-row class="fill-height ma-0" align="center" justify="center">
                                        <v-progress-circular indeterminate color="grey lighten-5" />
                                    </v-row>
                                </template>
                            </v-img>
                        </v-col>
                    </v-row>
                </td>
            </tr> -->
            <tr>
                <td>상품명</td>
                <td>
                    <input type="text" :value="product.productName" readonly />
                </td>
            </tr>
            <tr>
                <td>가격</td>
                <td>
                    <input type="number" :value="product.productPrice" readonly />
                </td>
            </tr>
            <tr>
                <td>제조사</td>
                <td>
                    <input type="text" :value="product.vendor" readonly />
                </td>
            </tr>
            <tr>
                <td>세부 사항</td>
                <td>
                    <textarea cols="50" rows="20" :value="product.productDetails" readonly />
                </td>
            </tr>
        </table>


        <br>
        <div>
            <button v-if="!isBusiness" type="submit">상품 구매</button>
            <button class="modifyButton" type="button" v-else @click="onModify"> 게시물 수정 </button>
        </div>
    </form>
</template>

<script>

export default {
    props: {
        product: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            productId: '',
        }
    },
    methods: {
        onSubmit() {
            this.productId = this.product.productId
            const { productId } = this
            this.$emit('submit', { productId })
        },
        async onModify() {
            this.productId = this.product.productId
            const { productId } = this
            await this.$router.push({ name: 'ProductModifyPage', params: { productId: this.product.productId.toString() } })
        },
    },
    computed: {
        isBusiness() {
            // localStorage.setItem('role', "BUSINESS") 테스트용
            return "BUSINESS" === localStorage.getItem('role')
        }
    }
}

</script>

<style></style>