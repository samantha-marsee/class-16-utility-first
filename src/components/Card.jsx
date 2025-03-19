export default function Card({ imgUri, title, children }) {

  return (
    <div>
      <img src={imgUri} alt="" />

      <div>
        <h3>{title}</h3>
        <p>
          {children}
        </p>
      </div>
    </div>
  )
}
