import React from 'react'
import PatternCard from './PatternCard'

function Pattern(patterns) {
    const patternList = patterns.patterns.map((pattern, index) => <PatternCard pattern={pattern} key={pattern.id} />)

    const plist = patternList.length === 0 ? "Patterns are Empty" : patternList

    return (
        <div>
            {plist}
        </div>
    )
}

export default Pattern