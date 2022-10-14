import { authReducer } from "../authReducer"


describe('reducer test', () => {
    it('return something', () => {
        const initialState = {
            user: null,
            loading: false,
            error: false
        }

        const receved = JSON.stringify(authReducer(initialState, {
            type: "LOADING_TO_REGISTR"
        }))

        expect(receved).toEqual(JSON.stringify({
            user: null,
            loading: true,
            error: false
        }))
    })
})