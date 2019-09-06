import authReducer from '../../reducers/auth';


test('should setup default auth state', () => {
    const state = authReducer(undefined, {type: '@@INT'});
    expect(state).toEqual({});
});


test('should setup auth state with uid', () => {
    const state= authReducer(undefined, {
        type: 'LOGIN',
        uid: '123!@#asd'});
    expect(state).toEqual({uid: '123!@#asd'});
});

test('should setup auth state with nothing', () => {
    const state = authReducer({uid: '123!@#asd'}, {type: 'LOGOUT'});
    expect(state).toEqual({});
});