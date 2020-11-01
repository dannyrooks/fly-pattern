import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Patterns = props => {
    const patternCards = props.trips.length > 0 ?
        props.patterns.map(pat => (<p key={pat.id}><Link to={`/patterns/${pat.id}`}></Link></p>)) :
        null

        return patternCards
}

const mapStateToProps = state => {
    return {
        trips: state.Patterns
    }
}

export default connect(mapStateToProps)(Patterns)