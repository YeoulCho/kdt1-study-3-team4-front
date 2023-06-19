<template lang="">
    <div>
        <h3>상품 목록</h3>
        <p></p>
        <table>
            <tr>
                <td align="center" width="2%">상품 이미지</td>
                <td align="center" width="2%">상품명</td>
                <td align="center" width="2%">상품가격</td>
            </tr>
            <p></p>
            <tr v-if="!products || (Array.isArray(products) && products.length === 0)">
                <td colspan="3">
                    현재 등록된 상품이 없습니다!
                </td>
            </tr>
            <tr v-else v-for="product in products" :key="product.productId">
                <td>
                    <!-- <v-img :src="require(`C:/Users/82108/Documents/GitHub/kdt1-study-3-team4-back/demo/src/main/java/com/example/demo/uploadImgs/${product.productImagesPathList[0]}`)" aspect-ratio="1" class="grey lighten-2">
                        <template v-slot:placeholder>
                            <v-row class="fill-height ma-0" align="center" justify="center">
                                <v-progress-circular indeterminate color="grey lighten-5"/>
                            </v-row>
                        </template>
                    </v-img> -->
                </td>
                <td>
                    <router-link :to="{
                        name: 'ProductReadPage',
                        params: { productId: product.productId.toString() }}">
                        {{ product.productName }}
                    </router-link>
                </td>
                <td>
                    {{ product.productPrice }}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        products: {
            type: Array
        }
    }

}
</script>
<style scoped>
h3 {
    font-size: 40px;
}

table {

    font-size: 20px;
}
</style>