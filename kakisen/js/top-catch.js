const fvSection = document.querySelector('.fv-section');        
const catchSection = document.querySelector('.catch-section');  
const catchColumns = document.querySelectorAll('.catch-column');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;                
  const triggerPoint = window.innerHeight * 0.7;

  if (scrollY > triggerPoint) {
    fvSection.style.opacity = 0;                
    catchSection.classList.add('show-bg');       
  } else {
    fvSection.style.opacity = 1;                 
    catchSection.classList.remove('show-bg');    
  }

  if (scrollY > window.innerHeight * 0.5) {      
    catchColumns.forEach((col, index) => {
      setTimeout(() => {
        col.style.opacity = "1";                 
        col.style.transform = "translateY(0)";   
      }, index * 700);
    });
  }
});