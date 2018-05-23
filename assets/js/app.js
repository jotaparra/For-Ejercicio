window.onload =function (){
	var btn = document.getElementById("enter-button");
	var txt = document.getElementById("name");
	var dato =document.getElementById("date")
	/*btn.addEventLitener("click", function(){
		txt.innerHTML=" <h2> Bienvenid,  </h2>" ;
	})*/
	btn.addEventListener("click", function(){
       
        txt.innerHTML=' Bienvenid..' + dato.innerHTML +'hola' ;
    })
}

/*window.onload=function(){
	var btn = document.getElementById("fun-facts");
	var txt = document.getElementById("none");

	btn.addEventListener("click", function(){
		txt.innerHTML=
		" <h2>Walt iba a asesinar a  Jane !! </h2> <p> Los guionistas discutieron cómo sería la mejor manera de llevar a cabo esta escena y Vince Gilligan, como showrunner, decidió que lo mejor sería que Walt asesinara a Jane. </p>";
	})
}*/