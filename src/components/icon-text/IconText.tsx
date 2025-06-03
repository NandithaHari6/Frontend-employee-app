import "./iconText.css"
const IconText=({icon,text,onClick}:{icon:string,text:string,onClick?:(event:React.MouseEvent<HTMLImageElement>)=>void;})=>{
    return(<>
    <div className="icon-grp">
        <div className="blue">
          <img src={icon} alt="icon" onClick={onClick}/>  
        </div>
        <div className="text">{text}</div>
    </div>
    </>)
}
export default IconText;