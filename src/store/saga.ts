import {call, put, takeEvery} from 'redux-saga/effects';
import {fetchGithubData} from '../api/github';
import { fetchDataSuccess } from './actions';

function* fetchData(): Generator<any, void, any>{
    try {
        const data = yield call(fetchGithubData);
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