const DarkMode = () => {
   const  handleDarkMode = () =>{
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
       
    } else {
       
        document.documentElement.classList.toggle('dark')
    }
    
    
    localStorage.theme = 'light'
    
    
    localStorage.theme = 'dark'
    
    
    localStorage.removeItem('theme')
    }


return (
    <>
    <button >
    <i  class='bx  cursor-pointer  bxs-moon font-bold text-6xl text-yellow-500  dark:text-neutral-950' onClick={handleDarkMode}></i>
    </button>
    
    </>
)
}
export default DarkMode



