import s from './BaseInfo.module.css'

const BaseInfo = ({ teacherInfo, courseTime, courseTitle }) => {
  const { titleImg, teacherName } = teacherInfo
  return (
    <div className={s.wrap}>
      <div className={s.titleImg}>
        <img src={titleImg} alt={courseTitle} />
      </div>
      <div className={s.courseInfo}>
        <div className={s.title}>{courseTitle}</div>
        <div className={s.time}>
          <span>时间</span>
          <div className={s.courseTime}>{courseTime}</div>
        </div>
        <div className={s.teacher}>
          <span>老师</span>
          <div className={s.teacherName}>{teacherName}</div>
        </div>
      </div>
    </div>
  )
}

export default BaseInfo
