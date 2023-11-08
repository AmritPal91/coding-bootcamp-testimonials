
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let img = document.getElementById("img1");
let testimonial = document.getElementById("testimonial");
let name2 = document.getElementById("name");
let designation = document.getElementById("designation");

// let users = {
//   name: "Tanya Sinclair",
//   designation: "UX Engineer",
//   image: "images/image-tanya.jpg",
//   comment: " I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future."

// },
//   {
//     name: "John Tarkpor",
//     designation: "Junior Front-end Developer",
//     image: "images/image-john.jpg",
//     comment: "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer."
// }

// Previous button function
prev.addEventListener("click", () => {

  img.src = img.src.replace("tanya", "john");
  testimonial.textContent = `“ If you want to lay the best foundation possible I’d recommend taking this course.The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`;
  name2.textContent = "John Tarkpor";
  console.log(name2.textContent, designation.textContent);
  designation.textContent = "Junior Front-end Developer";
})

// Next button function
next.addEventListener("click", () => {
  img.src = img.src.replace("john", "tanya");
  testimonial.innerHTML = ` “I’ve been interested in coding for a while but never taken the jump, until now.I couldn’t recommend this course enough.I’m now in the job of my dreams and so excited about the future.” 
  `

  name2.innerHTML = "Tanya Sinclair";
  console.log(name2.innerText, designation.innerText);
  designation.innerHTML = "UX Engineer";
})
