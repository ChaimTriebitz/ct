
import { svgs } from "@/assets";

export function Footer() {

   return (
      <footer className="layout footer">
         <div className='media'>
            <a 
               href={`tel:0509098589`}
               title={'call me'}
            >
               <span className="svg-animate">{svgs.phone}</span>
            </a>
            <a 
               href="https://wa.me/972509098589"
               title={'message me'}
            >
               <span className="svg-animate">{svgs.whatsapp}</span>
            </a>
            <a 
               href={`mailto:ctriebitz@gmail.com`}
               title={'mail me'}
            >
               <span className="svg-animate">{svgs.gmail}</span>
            </a>
            <a 
               href={`https://www.linkedin.com/in/chaim-triebitz-495190258`}
               title={'mail me'}
            >
               <span className="svg-animate">{svgs.linkedin}</span>
            </a>
         </div>
      </footer>
   );
}
