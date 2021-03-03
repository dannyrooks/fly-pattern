import React, {Component} from 'react'
import { connect } from 'react-redux'
// import MaterialsContainer from '../containers/MaterialsContainer'
// import PatternCard from '../components/PatternCard'
// import Button from 'react-bootstrap/Button'

class Pattern extends Component {
    
    // Like button commented out 

    // state = {
    //     like: 0
    // }
    
    // handleLikeClick = () => {
    //     this.setState((prevState) => {
    //       return { like: prevState.like + 1} 
    //     })
    //   }
    
      // handleUnlikeClick = () => {
      //   this.setState((prevState) => {
      //     return { like: prevState.like - 1 }
      //   })
      // }

    render() {
        const filterPat = this.props.patterns.filter(pattern => pattern.id == this.props.patternId)
        // console.log(filterPat[0].materials)
        // console.log(state)
                

    return(
        <div className="Pattern">
            <h3>{!filterPat[0] ? null : filterPat[0].name}</h3>
            <ul></ul>
            <ul>
                {/* <Button onClick={this.handleLikeClick}>like </Button>
                 <Button onClick={this.handleUnlikeClick}>unlike </Button>
                 <ul>Likes: {this.state.like}</ul>  */}
                </ul>
        </div>
    )
    }
}

const mapStateToProps = state => {
    return {
        patterns: state.PatternsReducer.patterns,
        loading: state.PatternsReducer.loading
    }
}

export default connect(mapStateToProps)(Pattern)