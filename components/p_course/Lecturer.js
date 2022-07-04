import Link from 'next/link'
import s from './Lecturer.module.css'

const Lecturer = ({ data }) => {
  const { avatar, teacherId, teacherName, teacherDes } = data
  return (
    <div className={s.wrap}>
      <div className={s.title}>主讲老师</div>
      <div className={s.des}>
        <Link href="/teacher/teacherId/[id]" as={`/teacher/teacherId/${teacherId}`}>
          <div className={s.avatar}>
            <img src={avatar} alt="avatar" />
          </div>
        </Link>
        <div className={s.teacherInfo}>
          <Link href="/teacher/teacherId/[id]" as={`/teacher/teacherId/${teacherId}`}>
            <div className={s.name}>{teacherName}</div>
          </Link>
          <div>{teacherDes}</div>
        </div>
      </div>
    </div>
  )
}

export default Lecturer
