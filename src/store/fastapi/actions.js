import axiosInst from '@/utility/axiosInst'

export default {
    requestCertificationNumberForEmailtoFastApi ({}, ) { 
        return axiosInst.fastApiAxiosInst.get('loan/email-notification-prepare')
            .then(() => {
                alert("메일로 인증번호를 발송하였습니다!")
            })
            .catch(()=>{
                alert('문제발생!')
            })
    },
    
    
}