const blog_button = document.getElementById("blog_btn");
const prev_button = document.getElementById("prev");
const next_button = document.getElementById("next");
const info_title = document.getElementById("info-title");
const projects_btn = document.getElementById("projects_btn");
const lang_btn = document.getElementById("lang_btn");
const edu_btn = document.getElementById("edu_btn");
const nav_links = document.getElementsByClassName('nav_link');

let hide_blog_toggle = true;


blog_button.addEventListener("click", (event)=>{
	hide_blog_toggle = ! hide_blog_toggle;
	
	if(hide_blog_toggle){
		const blog_content = document.getElementsByClassName("blog-panel")[0]; //First element and the only one
		blog_content.classList.add("hide_blog");
		blog_content.classList.remove("blog-panel");
		
	}
	else{
		const blog_content = document.getElementsByClassName("hide_blog")[0];
		blog_content.classList.add("blog-panel");
		blog_content.classList.remove("hide_blog");
	}
});


function remove_all_active(){
	for(let i = 0; i < nav_links.length; i++){
		nav_links[i].classList.remove("active");
	}
}

/*Slider*/
let slideIndex = 0;

projects_btn.addEventListener("click", (event)=>{
	slideIndex = 0;
	showSlides(slideIndex);
	remove_all_active();
	projects_btn.closest("li").classList.add("active");
});
lang_btn.addEventListener("click", (event)=>{
	slideIndex = 1;
	showSlides(slideIndex);
	remove_all_active();
	lang_btn.closest("li").classList.add("active");
});
edu_btn.addEventListener("click", (event)=>{
	slideIndex = 2;
	showSlides(slideIndex);
	remove_all_active();
	edu_btn.closest("li").classList.add("active");
});


prev_button.addEventListener("click", (event)=>{
	negSlides(1);
});
next_button.addEventListener("click", (event)=>{
	plusSlides(1);
});

function negSlides(n) {
  showSlides(slideIndex -= n);
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(idx) {
  let slides = document.getElementsByClassName("mySlides");

  if (idx > slides.length - 1) {
  	slideIndex = 0;
  }    
  if (idx < 0) {
  	slideIndex = slides.length - 1;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  console.log(slideIndex);
  slides[slideIndex].style.display = "flex";  

  switch (slideIndex) {
	  case 0:
	    info_title.innerHTML = "#Projects."
	    break;
	  case 1:
	  	info_title.innerHTML = "#Programming languages."
	  	break;
	  case 2:
	  	info_title.innerHTML = "#Education."
	  	break;
	  default:
	    console.log("Sorry, we are out of slides");
	}
}

showSlides(slideIndex);



