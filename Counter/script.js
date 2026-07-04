let output=document.querySelector(".output")
let minus=document.querySelector(".minus")
let plus=document.querySelector(".plus")
let resets=document.querySelector(".reset")
let steps=document.getElementById("steps")

function add(){
    let value = Number(output.textContent);
    let step = Number(steps.value); 
    output.textContent=value+step;
}
function subtraction(){
    let value = Number(output.textContent);
    let step = Number(steps.value); 
    let result=value-step;
    if(result<0){
        shake;
        alert("Number is in Negative side !");
    }
    else{
        output.textContent=result;
    }   
}



function shake(duration = 500) {
    const start = performance.now();

    function animate(time) {
        if (time - start < duration) {
            const x = (Math.random() - 0.5) * 15;
            const y = (Math.random() - 0.5) * 15;

            document.body.style.transform = `translate(${x}px, ${y}px)`;

            requestAnimationFrame(animate);
        } else {
            document.body.style.transform = "translate(0,0)";
        }
    }

    requestAnimationFrame(animate);
}
function reset(){
    output.textContent=0;
    steps.value=1;
    shake()
}
minus.addEventListener('click',subtraction);
plus.addEventListener('click',add);
resets.addEventListener('click',reset);

