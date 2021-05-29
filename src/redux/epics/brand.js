import { map, catchError, mergeMap } from "rxjs/operators";
import { ofType } from "redux-observable";
import * as types from "../constants/brand";
import {
  getBrandFailure,
  getBrandSuccess,
  followBrandFailure,
  followBrandSuccess,
} from "../actions/brand";
import { getSingleBrand, followBrand } from "../request";

export const getBrandDetail = (action$, store) => {
  const brands = store.value.user.brands;
  return action$.pipe(
    ofType(types.GET_BRAND_REQUEST),
    mergeMap(async (action) => {
      const brand = await getSingleBrand(action.payload, brands);
      return { payload: brand };
    }),
    map((action) => {
      if (action.payload.error) {
        return getBrandFailure(action.payload);
      }
      return getBrandSuccess(action.payload);
    }),
    catchError((error) => {
      return getBrandFailure(error.message);
    })
  );
};

export const follow = (action$) => {
  return action$.pipe(
    ofType(types.FOLLOW_BRAND_REQUEST),
    mergeMap(async (action) => {
      const res = await followBrand(action.payload);
      return { payload: res };
    }),
    map((action) => {
      if (action.payload.error) {
        return followBrandFailure(action.payload);
      }
      return followBrandSuccess(action.payload);
    })
  );
};
