import * as types from '../constants/brand';
export const getBrand = id => ({
    type: types.GET_BRAND_REQUEST,
    payload: id,
});

export const getBrandSuccess = payload => ({
    type: types.GET_BRAND_SUCCESS,
    payload,
});

export const getBrandFailure = message => ({
    type: types.GET_BRAND_FAILURE,
    payload: message,
});

//follow brand
export const followBrand = id => ({
    type: types.FOLLOW_BRAND_REQUEST,
    payload: id,
});

export const followBrandSuccess = payload => ({
    type: types.FOLLOW_BRAND_SUCCESS,
    payload,
});

export const followBrandFailure = message => ({
    type: types.FOLLOW_BRAND_FAILURE,
    payload: message,
});
