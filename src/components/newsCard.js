import "../styles/newsCard.css"

function NewsCard(props) {
  return (
    <a className="card" href={props.url}>
      <div
        className="card-inner"
        key={props.id}
      >
        <h1>Title : {props.title}</h1>
        <h2>Score : {props.score}</h2>
      </div>
    </a>
  );
}

export default NewsCard;
