import {
  REQUEST_PRODUCT_TO_SPRING,
  REQUEST_PRODUCT_LIST_TO_SPRING,
} from "./mutation-types";

import axiosInst from '@/utility/axiosInst'

export default {
  requestProductListToSpring({ commit }) {
    return axiosInst.axiosInst.get("/product/list").then((res) => {
      commit(REQUEST_PRODUCT_LIST_TO_SPRING, res.data);
    });
  },
  requestRegisterProductToSpring({ }, payload) {
    return axiosInst.axiosInst.post('/product/register', payload)
      .then((res) => {
        if (res.data) {
          alert('게시물 등록 성공!')
          return res.data
        } else {
          alert('문제 발생')
        }
      })
      .catch(() => {
        alert('문제 발생!')
      })
  },
  requestProductToSpring({ commit }, productId) {
    return axiosInst.axiosInst.get(`/product/read/${productId}`)
      .then((res) => {
        commit(REQUEST_PRODUCT_TO_SPRING, res.data)
      })
  },
  requestProductModifyToSpring({ }, { payload, productId }) {


    return axiosInst.axiosInst.put(`/product/modify/${productId}`, payload)
      .then((res) => {
        alert("수정 성공!")
      })
      .catch(() => {
        alert('문제 발생!')
      })
  },
}