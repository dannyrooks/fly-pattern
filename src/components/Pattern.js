import React from 'react'
import { connect } from 'react-redux'
// import PatternsContainer from '../containers/PatternsContainer'
// import PatternCard from '../components/PatternCard'

class Pattern extends React.Component {

    render() {
        // const pattern = this.props.patterns.map((pattern, i) => <li key={i}>(pattern.name)</li>)
        // console.log(name)
    

    return(
        <div className="Pattern">
            <h3>Pattern Name:</h3>
            <ul>{}</ul>
        </div>
    )
    }
}

// const Pattern = props => {
//     console.log(props)
//     return (
//         <div>
//             <h4>{props.name}</h4>
//             <p>{props.description}</p>
//         </div>
//     )
// }

const mapStateToProps = state => {
    return {
        patterns: state.PatternsReducer.patterns,
        loading: state.PatternsReducer.loading
    }
}

export default connect(mapStateToProps)(Pattern)