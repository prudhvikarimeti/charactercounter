import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'

class App extends Component {
  state = {searchInput: '', wordsList: []}

  one = event => {
    this.setState({searchInput: event.target.value})
  }

  start = event => {
    event.preventDefault()
    const {searchInput} = this.state
    const newText = {
      id: uuidv4(),
      item: searchInput,
    }
    this.setState(prevState => ({
      wordsList: [...prevState.wordsList, newText],
      searchInput: '',
    }))
  }

  render() {
    const {wordsList, searchInput} = this.state

    return (
      <div className="main-container">
        <div className="container-1">
          <h1 className="heading">Count the characters like a Boss...</h1>

          <div className="container">
            {wordsList.length > 0 ? (
              <ul className="list-container">
                {wordsList.map(each => (
                  <li key={each.id}>
                    <p key={each.id} className="li-el">
                      {each.item}:{each.item.length}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                className="ima"
                alt="no user inputs"
              />
            )}
          </div>
        </div>
        <div className="container-2">
          <h1 className="header">Character Counter</h1>
          <div className="kr">
            <form onSubmit={this.start}>
              <div className="inp-con">
                <input
                  type="text"
                  className="inp"
                  placeholder="Enter the characters here"
                  onChange={this.one}
                  value={searchInput}
                />
                <button className="but" type="submit" onClick={this.start}>
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App
