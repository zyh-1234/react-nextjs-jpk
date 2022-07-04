import s from './Description.module.css'

const Description = ({ data }) => {
  return (
    <div className={s.wrap}>
      <div className={s.courseDes}>
        {data.map((imgUrl, index) => (
          <img src={imgUrl} key={index} alt={`course-description-${index}`} />
        ))}
      </div>
    </div>
  )
}

export default Description
