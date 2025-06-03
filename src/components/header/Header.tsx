
import "./Header.css"
const Header=({title,btnChildren}:{title:string,btnChildren?:React.ReactNode})=>{
    return(<>
  
        <div className="header"> {title} {btnChildren}</div>
        
          </>
    )
}
export default Header;