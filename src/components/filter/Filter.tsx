import { useSearchParams } from "react-router-dom";
const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  function changeSearchParams(e) {
    const newSearchParams = new URLSearchParams(searchParams);
    if (e.target.value === "ALL") {
      newSearchParams.delete("status");
      
    } else {
      newSearchParams.set("status", e.target.value);
      
    }
    setSearchParams(newSearchParams);
  }
  return (
    <>
      <select
        onChange={(e) => {
          changeSearchParams(e);
          
          
          
        }}
        
      >
        <option value="ACTIVE">ACTIVE</option>
        <option value="INACTIVE">INACTIVE</option>
        <option value="ALL">ALL</option>
        <option value="PROBATION">PROBATION</option>
      </select>
    </>
  );
};
export default Filter;
