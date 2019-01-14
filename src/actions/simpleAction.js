export const simpleAction = () => dispatch => {
    dispatch({
     type: 'SIMPLE_ACTION',
     payload: 'Redux configuration working well'
    })
}