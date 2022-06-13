interface Inavbar{
  websiteName:string;
}
export default function Navbar(props: Inavbar){
    return(
      <div className="w-full h-[80px] grid grid-cols-2 items-center m-auto">
        <div>{props.websiteName}</div>
        <div>
          <ul className="flex space-x-10"> 
            <li>Home</li>
            <li>About</li>
          </ul>
        </div>
      </div>
    )  
  }