import React, { useEffect } from "react";
import KRGlue from '@lyracom/embedded-form-glue'
import axios from 'axios';


const IziPay = (data) => {


    useEffect(() => {
        const endpoint = window.location.origin
        const publicKey = `${process.env.REACT_APP_IZIPAY_KEY}`
        let formToken = ''
        const body = document.getElementsByTagName('body').item(0);
        const script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('src', 'https://static.micuentaweb.pe/static/js/krypton-client/V4.0/stable/kr-payment-form.min.js');
        script.setAttribute('kr-public-key', '44010247:publickey_NvsaBHOOEPEAq9LFA2IIRf255wFvRpX8hS3OsWWs4rqML');
        script.setAttribute('kr-post-url-success', 'paid.html');
        body.appendChild(script);
        const cartData = [];
        data.cart.cartItems.map(item => {
            cartData.push({
                productLabel: item.name,
                productType: "CLOTHING_AND_ACCESSORIES",
                productQty: item.qty,
            })
        })
        // Generate the form token
        axios
            .get(`/api/orders/lastOrderNumber`)
            .then(lastOrder => {
                console.log("LASTORDER", lastOrder)
                axios
                    .post(`${process.env.REACT_APP_IZIPAY_URL_FULL}api/orders/createPayment`, {
                        paymentConf: {
                            "amount": Number(data.amount * 100),
                            "currency": "PEN",
                            "customer": {
                                "email": data.email,
                                "shoppingCarg": {
                                    "cartItemInfo": cartData,
                                }
                            },
                            "orderId": lastOrder.data.billNumber,
                        },
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                            'Access-Control-Allow-Origin': '*',
                        }
                    })
                    .then(resp => {
                        formToken = resp.data
                        return KRGlue.loadLibrary(
                            endpoint,
                            publicKey
                        ) /* Load the remote library */
                    })
                    .then(({ KR }) =>
                        KR.setFormConfig({
                            /* set the minimal configuration */
                            formToken: formToken,
                            'kr-language': 'es-ES' /* to update initialization parameter */
                        })
                    )
                    .then(({ KR }) =>
                        KR.onSubmit(paymentData => {
                            if (paymentData.clientAnswer.orderStatus !== "PAID")
                            {
                                console.log("PDATA", paymentData);
                            }
                            axios
                                .post(`${process.env.REACT_APP_IZIPAY_URL_FULL}/api/orders/validatePayment`, paymentData)
                                .then(response => {
                                    if (response.status === 200)
                                    {
                                        console.log('Payment validated', response)
                                        data.onSuccess(response)
                                    }
                                })
                            return false // Return false to prevent the redirection
                        })
                    ) // Custom payment callback
                    .then(({ KR }) =>
                        KR.addForm('#myPaymentForm')
                    ) /* add a payment form  to myPaymentForm div*/
                    .then(({ KR, result }) =>
                        KR.showForm(result.formId)
                    ) /* show the payment form */
            })
            .catch(error =>
                console.log(error)
            )
    });

    return (
        <div className="form">
            <div className="container">
                <div id="myPaymentForm"></div>
            </div>
        </div>
    )
}

export default IziPay;