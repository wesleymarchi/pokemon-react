import React from "react";
import './styles';
import PokeballIcon from '../../assets/pokeballGold.svg';
import {useNearScreen} from '../../hooks/useNearScreen';

export const LegendaryCard = (props) => {
    const {
        name = 'mew',
        image = 'https://s3-alpha-sig.figma.com/img/abc2/73f6/816fb93d3fda4016f0957d2422d36837?Expires=1685923200&Signature=RmFCuAVuKhWsCuoYz4VGci8Z1F8tvCMoZQP1dIFpVwlbvL7q6t6gd0QcoVhlMsB6rhvwUwu0CQy6ivBw-6cdwRf0VJRoQvrfgOzNF8dcSGuumxhChuzDKU1uSWIz48xS4FsFEtBOvoxHAyQo-VpaSZ3Mo1-ilDR7Ntbd69KF62AfF2S8cGGdsHCO8eLMuEz6LyBEo1zrNY-LDhas3aKyqNQrPI-DNcGoygmq0-f2ahghTRph6nc7d2kMDDrZi4uG4wwEXQ9yIPMSOAZWcN0fjTSwrOagXbpPPCUT~izsrVsIlh6MzBPap37AasEZ2JhlBwQ2kturqHiLDtVQecQLGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        pokedexNumber = 151,
        handleClick
    } = props;

    const [show, ref] = useNearScreen();

    const handleLegendary = () => {
        handleClick({pokedexNumber: pokedexNumber})
    };

    return (
        <Container tabIndex='0' role='listitem' aria-label='List item' ref={ref} onClick={handleLegendary}>
            {show &&
                <>
                    <Img tabIndex='-1' role='figure' aria-label='Pokemon preview'>
                        <img src={image} alt={`Legendary pokemon #${pokedexNumber}`} />
                    </Img>

                    <Card>
                        <h3>{name}</h3>
                        <Pokeball>
                            <img src={PokeballIcon} alt='golden pokeball icon' />
                        </Pokeball>
                    </Card>
                </>
            }
        </Container>
    );
}