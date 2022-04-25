require('dotenv').config()

export const state = () => ({
    counter: 0,
    messages: [],
    echoResponse: "",
    myToDos: []
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
    },
    setToDoData(state, response) {
        state.myToDos.push(response);
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
    },
    async getToDos({commit}) {
        let config = {
            method: 'get',
            url: 'https://86a4h9y007.execute-api.eu-west-1.amazonaws.com/development/nulmeting/todo',
            headers: { 
                'x-api-key': 'Zu2CEexUkRaB7kmk9t8OT3smDR26WOL48BXASI5s'
            }
        }
        // await response and call function to add it to the state
        let getResult = await this.$axios(config);
        commit("setToDoData", getResult.data);
    }
}
