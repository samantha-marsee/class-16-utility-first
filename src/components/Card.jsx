export default function Card({ imgUri, title, children }) {

  return (
    <div>
      <img src={imgUri} alt="" />

      <div className = "rounded-xl bg-slate-200 w-2xs">
        <h3>{title}</h3>
        <p>
          {children}
        </p>
      </div>
    </div>
  )
}
