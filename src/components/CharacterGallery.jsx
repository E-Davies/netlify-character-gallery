import characterData from '../data/characterData.json';
import Character from './Character';

function CharacterGallery () {
    // console.log(characterData);

    return(
        <div> 
            {characterData.map(
                (character) => <Character 
                key={character.id}  
                // {...character} --> can add the above line and this line instead of adding all the lines below, it will have the same effect
                name={character.name}
                img={character.imgUrl}
                birth={character.birth}
                death={character.death}
                race={character.race}
                realm={character.realm}
                spouse={character.spouse}
                />
            )}
        
        </div>
    )
};

export default CharacterGallery;