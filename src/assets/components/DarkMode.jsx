import { useState } from "react"

const DarkMode = () => {
const [isdark, setIsdark] = useState(true)
   const  handleDarkMode = () =>{
    if (!localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
       
    } else {
       
        setIsdark(document.documentElement.classList.toggle('dark'))
        
    }
    
    }
return (
    <>
    

        
        <button onClick={handleDarkMode}  className="   animate-bounce bg-[rgb(4,115,171)] 100%)] btn-change hover:bg-cyan-600 dark:text-black  p-2 rounded-2 border-1 border-neutral-400 text-ms hover:text-white"  type="button" >

        {
            isdark ? 
            <i   className="font-bold  dark:text-neutral-950 cursor-pointer text-4xl bx bxs-moon text-black" ></i>
            :
            <i  className="  font-bold bx bxs-sun text-4xl text-yellow-500 "  ></i>
            
        }
        </button>
    
    </>
)
}
export default DarkMode



