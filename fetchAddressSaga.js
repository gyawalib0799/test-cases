import { call, put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../constants/actionTypes';
import * as api from '../api/httpClient';
import { fetchAddressSuccessAction, fetchAddressErrorAction } from '../actions/fetchAddressAction';

export function* fetchAddress(action) {
  try {
    const body = { accountSk: action.accountSk };
    const response = yield call(api.fetchAddress, body);

    if (response.data && (response.data.code === 200 || response.data.code === '200')) {
      const addressList = { addressList: response.data.addressInfo };
      yield put(fetchAddressSuccessAction(addressList));
    } else {
      yield put(fetchAddressErrorAction(response.data));
    }
  } catch (error) {
    yield put(fetchAddressErrorAction(error));
  }
}

export function* watchFetchAddress() {
  yield takeEvery(actionTypes.FETCH_ADDRESS, fetchAddress);
}
