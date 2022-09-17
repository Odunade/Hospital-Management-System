import { img_300, unavailable } from "../../config/Config";
import "./Singlecontent.css";

const SingleContent = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_aaverage,
}) => {
  return (
    <div className="media">
        <img 
         className = "poster"
         src={poster ? `${img_300}/${poster}` : unavailable} 
         alt={title}
        />
      <b className="sunTitle">{title}</b>
        <span className="subTitle">
            {media_type === "tv" ? "Tv Series" : "Movie"}
            <span className="sunTitle">{date}</span>
        </span>
    </div>
  )
}

export default SingleContent
