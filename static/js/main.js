const blog_button = document.getElementById("blog_btn");

let hide_blog_toggle = false;

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
