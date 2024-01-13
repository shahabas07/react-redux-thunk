import axios from "axios"

const actionProvider = () => {
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((resp)=>{
            dispatch({type: "fetchData" , payload: resp})
        })
    }
}

export default actionProvider;