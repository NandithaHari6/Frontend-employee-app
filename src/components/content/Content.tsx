
import Header from "../header/Header"
import "./Content.css"
const Content=({title,children,btnChildren}:{title:string,children:React.ReactNode,btnChildren?:React.ReactNode})=>{
    return(
        <>
       
            <Header btnChildren={btnChildren} title={title}>
            </Header>
            
            <div className="content-container">
                    {children}
            </div>
      </>
    )
}
export default Content