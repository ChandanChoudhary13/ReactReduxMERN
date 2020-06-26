export const handleInputAction = (input) => {
    return {
        type: "UPDATE_INPUT",
        payload: input
    }
}

export const fetchWishAction = () => {

    return (dispatch) => {
        fetch('/data')
            .then(res => res.json())
            .then(res2 => {
                console.log(res2)
                //   this.setState({
                //     mywishes: res2
                //   })
                dispatch({ type: "GET_WISH", payload: res2 })
            })
    }
}