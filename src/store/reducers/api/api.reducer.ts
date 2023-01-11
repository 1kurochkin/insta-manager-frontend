import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {appConfig} from '../../../configs/app.config'

export type GetUnfollowedResponseType = {
    username: string;
    profile_pic_url: string;
    full_name: string;
}

export const apiReducer = createApi({
    reducerPath: 'apiReducer',
    baseQuery: fetchBaseQuery({
        baseUrl: appConfig.api,
    }),
    endpoints: build => ({
        getUnfollowed: build.query<GetUnfollowedResponseType, string>({
            query: (username) => ({url: `/unfollowed/${username}`})
        }),
    })
});

export const {
    useLazyGetUnfollowedQuery
} = apiReducer;