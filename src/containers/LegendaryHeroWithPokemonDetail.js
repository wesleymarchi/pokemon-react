import { withPokemonDetails } from '../hoc/withPokemonDetails';
import { LegendaryHero } from '../components/LegendaryHero';

export const LegendaryHeroWithPokemonDetails = withPokemonDetails(LegendaryHero);
