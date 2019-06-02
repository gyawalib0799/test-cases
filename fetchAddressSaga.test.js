import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../../src/constants/actionTypes';
import { fetchAddress, watchFetchAddress } from '../../src/sagas/fetchAddressSaga';

describe('Testing FetchAddress', () => {
  it('should Update fetchAddress', () => {
    const iterator = watchFetchAddress();
    const expectedYield = takeEvery(actionTypes.FETCH_ADDRESS, fetchAddress);
    const actualYield = iterator.next().value;
    expect(actualYield).toEqual(expectedYield);
  });
});
