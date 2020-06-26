import React from 'react';
import { connect } from "react-redux";
import { handleInputAction, fetchWishAction, handleSubmitAction } from "../myactions/action";

class Home extends React.Component {
  state = {
    text: '',
    mywishes: [{ _id: 1, wish: "loading" }]
  }
  handledelete(id) {
    fetch('/remove/' + id, { method: "delete" })
      .then(res => res.json())
      .then(res2 => {
        console.log(res2)
        const newWishes = this.state.mywishes.filter(item => {
          return item._id !== res2._id
        })
        this.setState({
          mywishes: newWishes
        })
      })
  }
  componentDidMount() {
    // fetch('/data')
    //   .then(res => res.json())
    //   .then(res2 => {
    //     console.log(res2)
    //     this.setState({
    //       mywishes: res2
    //     })
    //   })
    this.props.fetchWish();
  }

  render() {
    const list = this.props.mywishes.map(item => {
      return <a className="collection-item" key={item._id} onClick={() => this.handledelete(item._id)}>{item.wish}</a>
    })
    return (
      <div>
        <form onSubmit={(e) => this.props.handleSubmit(e)}>
          <input
            type="text"
            name="item"
            value={this.props.text}
            onChange={(e) => this.props.handleinput(e.target.value)}
          />
          <button type="submit" className="waves-effect waves-light btn">Add</button>
        </form>

        <div className="collection">
          {list}
        </div>
      </div>
    )
  }

}

const mapStoreToProps = (state) => {
  return {
    text: state.text,
    mywishes: state.mywishes
  }
}
const mapDispatchToProps = (dispatch) => {

  return {
    handleinput: (input) => { dispatch(handleInputAction(input)) },
    fetchWish: () => { dispatch(fetchWishAction()) },
    handleSubmit: (e) => { dispatch(handleSubmitAction(e)) }
  }
}
export default connect(mapStoreToProps, mapDispatchToProps)(Home);
