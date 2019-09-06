import {login, logout} from '../../actions/auth';

test('should return logout action object correctly', () => {
    const action = login('123a45');
    expect(action).toEqual({
        type: 'LOGIN',
        uid: '123a45'
    });
});

test('should return logout action object correctly', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT',
    });
});