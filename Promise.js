// callback hell

const cart = ["shoes", "jeans", "kurtas"]

// callback hell
api.createOrder(cart, 
    function () {
        api.proceedToPayment(
            function () {
                api.productSummary(
                    function () {
                        api.walletBalance()
                    }
                )
            }
        )
    }
)

// consuming a promise