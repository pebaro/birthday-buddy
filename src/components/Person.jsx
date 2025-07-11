export const Person = ({image, width, name, age}) => {
  return (
    <>
      <article className="person">
        <img style={{'width': width}} src={image} alt={name} title={name} />
        <div>

          <h4>{name}</h4>
          <p>{age} years old</p>
        </div>
      </article>
    </>
  )
}
