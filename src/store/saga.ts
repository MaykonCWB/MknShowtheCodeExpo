import {call, put, takeEvery} from 'redux-saga/effects';
import {fetchGithubData} from '../api/github';
import { fetchDataSuccess } from './actions';
import { AnyAction } from 'redux-saga';

interface Data {
    loginName: string | null
    blogUrl: string | null
    login: string | null
}

function* fetchData(action: AnyAction): Generator<unknown, void, Data>{
    try {
        const login = action.payload;
        const data = yield call(fetchGithubData, login);
        yield put(fetchDataSuccess(data));
        console.log('<------Data fetched ESTA AQUI DE PROPOSITO',data);
    } catch (error: unknown) {
        if (error instanceof Error) {
            yield put({type: "FETCH_DATA_ERROR", error: error.message});
        } else {
            yield put({type: "FETCH_DATA_ERROR", error: "An unknown error occurred"});
        }
    }
}

function* rootSaga() {
    yield takeEvery('FETCH_DATA', fetchData);
  }

export default rootSaga;