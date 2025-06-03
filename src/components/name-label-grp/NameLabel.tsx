import "./NameLabel.css"

const NameLabel=({label,value}:{label:string,value:string})=>{
    return(
        <>
        <div className="card-group">
  <div className="card-label">{label}</div>
        <div className="card-value">{value}</div>
        </div>
      
        </>
    )
}
export default NameLabel;