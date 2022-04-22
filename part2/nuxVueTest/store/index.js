require("dotenv").config();

export const state = () => ({
    counter: 0,
    messages: [],
    echoResponse: ""
})

export const mutations = {
    increment(state) {
        state.counter++
    },
    // adds string to messages-array
    addMessage(state, newMessage) {
        if(state.messages.length > 0) {
            state.messages = state.messages + " , " + [newMessage]
        } else {
            state.messages.push(String(newMessage))
        }
    },
    // set state to response from axios-post-call
    setEchoResponse(state, response) {
        state.echoResponse = response
    }
}

export const actions = {
    /*axios.get('https://inwerk-files.s3-eu-west-1.amazonaws.com/opdracht3.json')
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })*/

    async echo ({ commit }, formData) {
        let data = {
            echo: formData
        }
        let options = {
            url: "https://86a4h9y007.execute-api.eu-west-1.amazonaws.com/development/echo",
            method: "POST",
            headers: {
                "x-api-key": process.env.API_KEY
            },
            data
        }
        let response = await this.$axios(options);
        commit('setEchoResponse', response.data);
    }
}
