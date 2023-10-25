const testimonials = [
    {
        name: "Joana E",

        photoUrl:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",     
            text: "I have gotten at least 50 times the value from Apple. Apple is the most valuable business resource we have EVER purchased. Apple is the next killer app"  
  },
    {
     name: "Josselyn G",
        photoUrl: "https://images.unsplash.com/file-1672938906905-1cdcb7b76d5dimage?dpr=2&auto=format&fit=crop&w=416&q=60",    
           
             text: "We've seen amazing results already. Apple saved my business."
              
},
    {
        name:  "Willy N.",


        photoUrl:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",   
         text: "This is simply unbelievable!"
             
 }
]
const imgEl = document.querySelector("img")
const textEl = document.querySelector(".text")
const userNameEl = document.querySelector(".username")

let idx = 0;

updateTestimonial()

function updateTestimonial() {
    const { name, photoUrl, text } =
        testimonials[idx];
        imgEl.src = photoUrl;
        textEl.innerText = text;
        userNameEl.innerText = name;
    idx++
    if (idx === testimonials.length) {
        idx = 0;
    }
    setTimeout(()=>{
    updateTestimonial()
    },10000)

}