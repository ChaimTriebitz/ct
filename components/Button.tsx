type ButtonProps = {
   name: string;
   active?: boolean;
   onClick?: () => void;
}

export function Button({ name, active, onClick }: ButtonProps) {
   return (
      <div className={"button" + (active ? " active" : "")} onClick={onClick}>
         <div className="button-top"><p>{name}</p></div>
         <div className="button-bottom" />
         <div className="button-base" />
      </div>
   )
}
