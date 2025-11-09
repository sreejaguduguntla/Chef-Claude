import claudeImg from "../images/claude.png"
export default function Header(){
  return(
    <header>
      <img src={claudeImg} alt="claudeIcon" />
      <h1>Chef Claude</h1>
    </header>
  )
}