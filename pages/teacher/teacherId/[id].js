import { useRouter } from 'next/router'

export default function AboutTeacher() {
  const {
    query: { id },
  } = useRouter()
  return <div>AboutTeacher{id}</div>
}
