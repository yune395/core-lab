$(document).ready(function(){
	console.log("hello Spring!")

	//similar to $ sign
	//TweenMax.set($("#ourdiv"), {x: "100px" backgroundColor: "rgb(0,0,255)"})
//})

//TweenMax.set($("#ourdiv"), 1, {x: "100px" backgroundColor: "rgb(0,0,255)"
								//delay: thisIndex/2
	//	})
//})
//}

	TweenMax.from($("ourseconddiv"), 4, {y: "50px",
																	backgroundColor: "green",
																	onComplete : function(){
																		animateAll()
																	}
																})

																$("#ourdiv").click(function(){
																  $("div").fadeOut();
																});
