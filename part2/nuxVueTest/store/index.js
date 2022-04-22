require('dotenv').config()

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
        state.echoResponse = response;
    }
}

export const actions = {
    async echo ({commit}, formData) {
        let data = {
            echo: formData
        }
        // options gives all the necessary information for the axion-call
        let options = {
            url: "https://86a4h9y007.execute-api.eu-west-1.amazonaws.com/development/echo",
            method: "POST",
            headers: {
                "x-api-key": process.env.API_KEY
            },
            data
        }
        // wait for the result of the call before running the next function, because it's dependaent on it
        let response = await this.$axios(options);
        commit("setEchoResponse", response.data);
    }
}
