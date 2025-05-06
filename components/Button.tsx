

export function Button({ name }: { name: string }) {
   return (
      <div className="button">
         <div className="button-top">{name}</div>
         <div className="button-bottom" />
         <div className="button-base" />
      </div>
   )
}
