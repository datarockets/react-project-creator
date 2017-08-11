function constructAction(elementName) {
  return `const ${elementName} = {};

${elementName}.method = () => ({});

export default ${elementName};`;
}

function constructReducer(elementName) {
  return `const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
  case 'action.type': {
    return { ...state };
  }

  default:
    return state;
  }
};`;
}

function constructSaga(elementName) {
  return `import { takeEvery } from 'redux-saga';
import { fork, put, call } from 'redux-saga/effects';

import actions from 'src/actions';

import Model from 'src/models/Model';

function* saga() {
  const { response } = yield call(Model.fetch);

  if (response) {
    yield put({ }));
  }
}

export default function* () {
  yield [
    fork(function* () {
      yield takeEvery('action.type', saga);
    }),
  ];
}`;
}

function constructThunk(elementName) {
  return `const ${elementName} = {};

${elementName}.method = () => dispatch => ({});

export default ${elementName};`;
}

exports.constructAction  = constructAction;
exports.constructReducer = constructReducer;
exports.constructSaga    = constructSaga;
exports.constructThunk   = constructThunk;
