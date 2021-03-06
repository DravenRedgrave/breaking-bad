import React from 'react'
import CharacterItem from './CharacterItem'

const CharactersGrid = ({items,isLoading}) => {
    return isLoading ? <h1>Loading...</h1> : 
    <section className="cards">
        {items.map(item => (
            <CharacterItem key={items.char_id} item={item}>
                
            </CharacterItem>
        ))}
    </section>
}

export default CharactersGrid
