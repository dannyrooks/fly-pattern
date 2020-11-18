import React from 'react'
import PatternCard from './PatternCard'

function Pattern(patterns) {
    const patternList = patterns.patterns.map((pattern, index) => <PatternCard pattern={pattern} key={pattern.index} />)

    const patternedList = patternList.length === 0 ? "No Pattern" : patternList

    return (
        <div>
            {patternedList}
        </div>
    )
}


export default Pattern