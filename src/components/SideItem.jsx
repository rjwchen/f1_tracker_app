export default function Sidebar({ icon, text }) {
  return (
    <li>
        {icon}
        <span>
            {text}
        </span>
    </li>
  )
}