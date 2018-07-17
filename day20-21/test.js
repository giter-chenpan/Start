var x = document.getElementById("name")
var btn = document.getElementById("submit-btn")
var otip = document.getElementById('tip')

function osub(){
	console.log(x.value)
}
btn.addEventListener('click' , osub)

function okp(e){
	//ff只支持which属性
	var  a = e.keyCode || e.which
	if (a == 13) {  //enter键的ascii码
		console.log(x.value)
	}
}
x.addEventListener('keypress' , okp)

function okd(e){
	var  a = e.keyCode || e.which
	if (a == 27) {  //esc的键码
		x.value = ''
	}
}
x.addEventListener('keydown' , okd)
