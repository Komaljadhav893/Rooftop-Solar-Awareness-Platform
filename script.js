function showSection(id) {
  const sections = document.querySelectorAll('.page-section');
  sections.forEach(section => {
    section.style.display = 'none';
  });

  document.getElementById(id).style.display = 'block';
}

let signup=document.getElementById("signup");
let signin=document.getElementById("signin");
let name=document.getElementById("name");
let title=document.getElementById("title");


signin.onclick=function(){
    name.style.maxHeight="0";
    title.innerHTML="Sign In"
}
