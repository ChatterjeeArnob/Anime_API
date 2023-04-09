<html>
<body>

<h1>The Element Object</h1>
<h2>The addEventListener() Method</h2>

<input type ="text" id="input" placeholder ="enter the value">
<button id="myBtn" onclick ="function()">Try it</button>

<p id="demo"></p>

<script>
const inp=document.querySelector("#input");
const element = document.getElementById("myBtn");
element.addEventListener("click", function() {
	let val = inp.value;
  document.getElementById("demo").innerHTML = val;
});
</script>

</body>
</html>
