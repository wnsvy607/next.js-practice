import Link from "next/link"

export default function Home() {
  let name = "Vercel"


  return (
    <div>
      <h4 className="title">예제 홈페이지</h4>
      <p className="title-sub">by {name}</p>
    </div>
  )
}
