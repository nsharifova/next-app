import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../axiosBase";
import { BASE_URL } from "@/shared/constants";
import { ISendData } from "./models";

const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: axiosBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        addToCart: builder.mutation<void, ISendData>({
            query: (body) => ({
                url: "addbasket",
                method: "POST",
                headers: {
                    token: "test",
                },
                data: body,
            }),
        }),
    }),
});

export default productApi;

export const { useAddToCartMutation } = productApi;
