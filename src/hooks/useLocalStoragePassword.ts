export default function useLocalStoragePassword(showPassword:boolean){
    let curr=  localStorage.getItem("showPassword");

    function setter(showPassword:boolean){
        
        localStorage.setItem("showPassword",showPassword?'true':'false')
   
    }
    if(curr){
       
        return [curr=='true' ,setter]

    }else{
        setter(showPassword)
        return [showPassword,setter]
    }

}