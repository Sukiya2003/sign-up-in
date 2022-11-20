import axios from "axios"

export const GET_USER = 'GET_USER'

function sucsessGet(params){
    return{
        type: GET_USER,
        payload: params
    }
}

export const getUser = () => {
    return async(dispatch) => {

        const result = await axios("https://634840db0484786c6e95e220.mockapi.io/Data")
        console.log(result.data);
        dispatch(sucsessGet(result.data))
    }
}

  export const uploadDataUser = (data) => {
    return async (dispatch) => {
      axios
      .post(
        `https://634840db0484786c6e95e220.mockapi.io/Data`,
        data
      )
      .then((res) => {
        console.log(res)
      });
    }
  };
