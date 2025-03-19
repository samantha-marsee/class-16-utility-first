export default function Card({ imgUri, title, children }) {

  return (
    <div>
      <img src={imgUri} alt="" />

      <div className = "rounded-xl bg-slate-200 max-w-2xs p-4">
        <h3>{title}</h3>
        <p>
          {children}
        </p>
      </div>
    </div>
  )
}
