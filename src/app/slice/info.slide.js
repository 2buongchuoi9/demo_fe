import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { get } from "../../utils/httpRequest"
import { StatusState } from "../../constan"

const fetchInfo = createAsyncThunk("info/get", async (params, thunkAPI) => {
    // console.log("param", params)

    // thunkAPI.dispatch(....)

    const dataInfo = await get("/access/info")
    const info = dataInfo.metadata
    const result = {
        logo: info.info_logo,
        follow: info.info_follow,
        service_custom: info.info_service_customer.map((b) => b.name),
        about: info.info_about.map((b) => b.name),
        payment: info.info_payment.map((b) => b.thumb),
        ship: info.info_ship.map((b) => b.thumb),
        banner: info.info_banner,
    }

    // console.log("info", result)

    return result
})

const infosSlice = createSlice({
    name: "info",
    initialState: {
        info: {
            logo: "",
            follow: [],
            service_custom: [],
            about: [],
            payment: [],
            ship: [],
        },
        status: "",
        error: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchInfo.pending, (state) => {
                state.status = StatusState.LOADING
            })
            .addCase(fetchInfo.rejected, (state, action) => {
                state.status = StatusState.FAIL
                state.error = action.error
            })
            .addCase(fetchInfo.fulfilled, (state, action) => {
                state.status = StatusState.SUCCESS
                // console.log("action info", action.payload)
                state.info = action.payload
            })
    },
})

const select_info = (state) => {
    const info = state.info.info
    return {
        logo: info.logo,
        follow: info.follow,
        service_custom: info.service_custom,
        about: info.about,
        payment: info.payment,
        ship: info.ship,
        banner: info.banner,
    }
}

const { reducer: infosReducer, actions: infosAction } = infosSlice

// export action
export { infosAction, select_info, fetchInfo }
// eport default reducer
export default infosReducer
