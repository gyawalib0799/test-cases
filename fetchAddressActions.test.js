import * as actionTypes from '../../src/constants/actionTypes';
import * as fetchAddressActions from '../../src/actions/fetchAddressAction';

describe('Testing Contact Info Actions', () => {
  it('Builds the Get Contact Info Action', () => {
    const fetchAddress = fetchAddressActions.fetchAddressAction();
    expect(fetchAddress.type).toBe(actionTypes.FETCH_ADDRESS);
  });

  it('Builds the Get Contact Info Success Action', () => {
    const fetchAddressSuccess = fetchAddressActions.fetchAddressSuccessAction();
    expect(fetchAddressSuccess.type).toBe(actionTypes.FETCH_ADDRESS_SUCCESS);
  });

  it('Builds the Get Contact Info Failure Action', () => {
    const fetchAddressFailure = fetchAddressActions.fetchAddressErrorAction();
    expect(fetchAddressFailure.type).toBe(actionTypes.FETCH_ADDRESS_ERROR);
  });
});
