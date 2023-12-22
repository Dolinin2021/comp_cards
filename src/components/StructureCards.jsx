import PropTypes from 'prop-types';
import InformationCard from './InformationCard';
import { v4 as uuidv4 } from 'uuid';

export default function StructureCards({ data }) {
  return data.map((card) => (
    <InformationCard {...card} key={uuidv4()}>
      <img src={card.src} className="card-img-top" alt="..." />
    </InformationCard>
  ));
}
  
StructureCards.propTypes = {
  data: PropTypes.array,
};
  
StructureCards.defaultProps = {
  data: [],
};
