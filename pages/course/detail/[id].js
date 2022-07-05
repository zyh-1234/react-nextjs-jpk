import { useRouter } from 'next/router'
import { getCourseDetail } from 'core/api'

import BaseInfo from '@/p_course/BaseInfo'
import Nav from '@/p_course/Nav'
import Description from '@/p_course/Description'
import Timetable from '@/p_course/Timetable'
import Evaluate from '@/p_course/Evaluate'
import Lecturer from '@/p_course/Lecturer'
import s from './course.module.css'

export default function CourseDetail({ post }) {
  const router = useRouter()
  if (router.isFallback) {
    return <div>loading...</div>
  }

  const { courseDes, courseTitle, courseTime, teacherInfo, timetables, evaluate } = post
  return (
    <main>
      <section>
        <BaseInfo courseTime={courseTime} courseTitle={courseTitle} teacherInfo={teacherInfo} />
      </section>

      <section className={s.desc}>
        <Nav />
        <Description data={courseDes} />
        <Lecturer data={teacherInfo} />
        <Evaluate data={evaluate} />
        <Timetable tables={timetables} />
      </section>

      <section>购买</section>
      <section>成功购买</section>
    </main>
  )
}

// 获取数据 静态生成
export async function getStaticProps(context) {
  const {
    params: { id },
  } = context
  const post = await getCourseDetail(id)

  return {
    props: {
      post,
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: '99',
        },
      },
    ],
    fallback: true,
  }
}
