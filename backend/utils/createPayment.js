import axios from 'axios'

const createFormToken = async paymentConf => {
  const createPaymentEndpoint = `https://${process.env.IZIPAY_USER}:${process.env.IZIPAY_PASSWORD}@api.micuentaweb.pe/api-payment/V4/Charge/CreatePayment`

  try
  {
    const response = await axios.post(createPaymentEndpoint, paymentConf, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(response.data.answer)
    if (!response?.data?.answer?.formToken) throw response
    return response.data.answer.formToken
  } catch (error)
  {
    throw error
  }
}

export {
  createFormToken
}