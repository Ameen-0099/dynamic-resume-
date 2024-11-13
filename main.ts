const from = document.getElementById("resume-form") as HTMLFormElement
const ResumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement

from.addEventListener('submit',(event:Event)=>{
      event.preventDefault();

      const name = (document.getElementById('name')as HTMLInputElement).value
      const email = (document.getElementById('email')as HTMLInputElement).value
      const phone = (document.getElementById('phone')as HTMLInputElement).value
      const education = (document.getElementById('education')as HTMLInputElement).value
      const experience = (document.getElementById('experience')as HTMLInputElement).value
      const skill = (document.getElementById('Skill')as HTMLInputElement).value

    const resumeHtml = `
         <h2><b>Resume</b></h2>
         <h3>Personal Information</h3>
         <p><b>Name:</b>${name}</p> 
         <p><b>email:</b>${email}</p>  
         <p><b>phone:</b>${phone}</p> 
         
         <h3>Education</h3>
         <p>${education}</p>

         <h3>Experience</h3>
         <p>${experience}</p>

         <h3>Skill</h3>
         <p>${skill}</p>
         `;        

       if(ResumeDisplayElement){
             ResumeDisplayElement.innerHTML= resumeHtml
       }else{
             console.error('The resume display element is missing')
       }

    })

  