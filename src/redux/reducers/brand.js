import * as types from '../constants/brand';
import { brands } from '../../utils/data';

const initialState = {
    fetchBrand: {
        requesting: false,
        error: null,
        success: false,
        brand: {},
    },
    followBrand: {
        requesting: false,
        error: null,
        success: false,
    },
    brands,
};
const brand = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_BRAND_REQUEST:
            return Object.assign({}, state, {
                fetchBrand: { requesting: true, error: null, success: false },
            });
        case types.GET_BRAND_SUCCESS:
            return Object.assign({}, state, {
                fetchBrand: {
                    requesting: false,
                    error: null,
                    success: true,
                    brand: action.payload,
                },
            });
        case types.GET_BRAND_FAILURE:
            return Object.assign({}, state, {
                fetchBrand: {
                    requesting: false,
                    error: action.payload,
                    success: false,
                    brand: null,
                },
            });
        case types.FOLLOW_BRAND_REQUEST:
            return Object.assign({}, state, {
                followBrand: { requesting: true, error: null, success: false },
            });
        case types.FOLLOW_BRAND_SUCCESS:
            return Object.assign({}, state, {
                followBrand: {
                    requesting: false,
                    error: null,
                    success: true,
                },
                brands: state.brands.map(brand => {
                    const userId = Number(action.payload.userId);
                    if (Number(brand.id) === Number(action.payload.brandId)) {
                        let users = brand.users;
                        if (users.includes(userId)) {
                            users = users.filter(
                                user => Number(user.id) !== userId
                            );
                        } else {
                            users.unshift(userId);
                        }
                        brand.users = users;
                        return brand;
                    }
                    return brand;
                }),
            });
        case types.FOLLOW_BRAND_FAILURE:
            return Object.assign({}, state, {
                followBrand: {
                    requesting: false,
                    error: action.payload,
                    success: false,
                },
            });
        default:
            return { ...state };
    }
};

export default brand;
