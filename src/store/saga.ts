import {call, put, takeEvery} from 'redux-saga/effects';
import {fetchGithubData} from '../api/github';
import { fetchDataSuccess } from './actions';
import { AnyAction } from 'redux-saga';

function* fetchData(action: AnyAction): Generator<any, void, any>{
    try {
        const login = action.payload;
        const data = yield call(fetchGithubData, login);
        yield put(fetchDataSuccess(data));
        console.log('<------Data fetched ESTA AQUI DE PROPOSITO',data);
    } catch (error: any) {
        yield put({type: "FETCH_DATA_ERROR", error});
    }
}

function* rootSaga() {
    yield takeEvery('FETCH_DATA', fetchData);
  }

export default rootSaga;