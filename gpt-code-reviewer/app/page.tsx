import Containers from './component/Containers'
import MainTitle from './component/MainTitle'
import "./component/index.css";

export default function Home() {
  return (
    <main>
      <div>
      <MainTitle />
      <Containers />
      </div>
    </main>
  )
}
