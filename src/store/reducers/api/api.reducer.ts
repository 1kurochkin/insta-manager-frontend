import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {appConfig} from '../../../configs/app.config'

export type GetUnfollowedResponseType = {
    user_info: {
        followers_count: number;
        followings_count: number;
        unfollowed_count: number;
    },
    unfollowed_list: Array<{
        username: string;
        profile_pic_url: string;
        full_name: string;
    }>
}


export const apiReducer = createApi({
    reducerPath: 'apiReducer',
    baseQuery: fetchBaseQuery({
        baseUrl: appConfig.api.url,
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