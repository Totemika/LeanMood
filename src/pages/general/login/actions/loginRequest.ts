import { hashHistory } from 'react-router';
import { LoginApi } from './../../../../rest-api/login';
import { LoginCredentials } from './../../../../model/loginCredentials';
import { loginActionEnums } from './../../../../common/actionEnums/login';
import { LoginResponse } from './../../../../model/loginResponse';
import { NavigateToHomeBasedOnRole } from '../helper/navigateBasedOnRole';

const roleEnums = {
  admin : 'admin',
  students: 'students',
  traines: 'trainers'
}

export const loginRequestStarted = (loginCredentials : LoginCredentials) => {
  return function(dispatcher) {
    const promise = LoginApi.login(loginCredentials);

    promise.then( data => {
      dispatcher(loginRequestCompleted(data));

      if(data.succeded === true) {
        NavigateToHomeBasedOnRole.navigateToHomeBasedOnRole(`/${data.userProfile.role}`)
      }
    })
    return promise;
  }
}

export const loginRequestCompleted = (loginResponse: LoginResponse) => ({
  type: loginActionEnums.USERPROFILE_PERFORM_LOGIN,
  payload: loginResponse
})