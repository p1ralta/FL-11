const reducers = function(state = defaultState, action = defaultAction) {
    switch (action.type) {
    case REMOVE_USER:
    {
        USERS.deleteUser(action.value);
        state = state.filter((user) => user.id != action.value);
        if (state.length < SHOWED_BY_DEFAULT) {
            return state = USERS.showByDefault();
        };
        return state;
    }
    }
    return state;
};