import { withPokemonDetails } from '../hoc/withPokemonDetails';
import { ModalCard } from '../components/ModalCard';

export const ModalCardWithPokemonDetails = withPokemonDetails(ModalCard)
