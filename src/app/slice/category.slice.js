import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { get } from "../../utils/httpRequest"
import { StatusState } from "../../constan"

const fetchCategory = createAsyncThunk("category/get", async (params, thunkAPI) => {
    // console.log("param", params)

    // thunkAPI.dispatch(....)

    const data = await get("/category")
    const cate = data.metadata
    // console.log("cate", cate)

    return cate
})

const categorySlice = createSlice({
    name: "category",
    initialState: {
        category: [],
        status: "",
        error: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategory.pending, (state) => {
                state.status = StatusState.LOADING
            })
            .addCase(fetchCategory.rejected, (state, action) => {
                state.status = StatusState.FAIL
                state.error = action.error
            })
            .addCase(fetchCategory.fulfilled, (state, action) => {
                state.status = StatusState.SUCCESS
                state.category = action.payload
            })
    },
})

const { reducer: categoryReducer, actions: categoryAction } = categorySlice

const select_category = (state) => state.category

export { categoryAction, select_category, fetchCategory }

export default categoryReducer
