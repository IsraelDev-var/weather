import { useState } from "react"

const DarkMode = () => {
const [isdark, setIsdark] = useState(true)
   const  handleDarkMode = () =>{
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
       
    } else {
       
        setIsdark(document.documentElement.classList.toggle('dark'))
        
    }
    
    
    localStorage.theme = 'light'
    
    
    localStorage.theme = 'dark'
    
    
    localStorage.removeItem('theme')
    }
    

return (
    <>
    <button onClick={handleDarkMode}>
        {
            isdark ? 
            <i className="font-bold text-5xl text-black dark:text-neutral-950 cursor-pointer" class=' text-4xl bx bxs-moon text-black' ></i>
            :
            <i className="  font-bold text-5xl" class='bx bxs-sun text-4xl text-yellow-500 '  ></i>
            
        }
        
        
    </button>
    
    </>
)
}
export default DarkMode



