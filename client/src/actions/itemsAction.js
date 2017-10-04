import axios from 'axios';

export const fetchDates = (itemInfo) => {
  return function(dispatch) {
    var blockedDates = [];
    axios.get(`/api/renttrx/item/${itemInfo.id}`)
    .then(({data}) => data.forEach(item => {
    //   console.log('items', item)
    // }))
      blockedDates.push(item.startDate);
      blockedDates.push(item.endDate);
    }))
    .then(({data}) => {
      dispatch({type: 'FETCH_DATES_FULFILLED', payload: blockedDates})
    })
    .catch(err => {
      dispatch({type: 'FETCH_DATES_REJECTED', payload: err})
    })
  }
}

export const fetchUser = () => {
  return function(dispatch) {
    axios.get(`/api/user/owner/${itemInfo.rentee_id}`)
    .then(user => {
      dispatch({type: 'FETCH_USER_FULFILLED', payload: user.data.userName});
    })
    .catch(err => {
      dispatch({type: 'FETCH_USER_REJECTED', payload: err})
    })
  }
}