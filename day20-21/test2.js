// 当用户选择了 School 的单选框时，显示 School 的下拉选项，隐藏 Company 的下拉选项
// 当用户选择了 School 的单选框时，显示 Company 的下拉选项，隐藏 School 的下拉选项
var osch  = document.querySelector("#school")
var ocmp = document.querySelector("#company")
var ss = document.querySelector("#school-select")
var cs = document.querySelector("#company-select")
osch.addEventListener('click', function(){
	cs.style.display = 'block'
})