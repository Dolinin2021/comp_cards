import PropTypes from 'prop-types';

export default function InformationCard({ title, text, ...props }) {
  return (
    <div className="card">
      {props.src ? props.children : null}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">
          Перейти
        </a>
      </div>
    </div>
  );
}
  
InformationCard.propTypes = {
  children: PropTypes.object,
  title: PropTypes.string,
  text: PropTypes.string,
  src: PropTypes.string,
};
  
InformationCard.defaultProps = {
  title: 'Название фильма',
  text: 'Описание фильма',
  src: '',
};
