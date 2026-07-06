let sentence=document.getElementById("input");
let lower_case=document.getElementById("Lower-case");
let upper_case=document.getElementById("Upper-case");
let capitalise_case=document.getElementById("Capitalise");
let reversed_case=document.getElementById("Reversed-case");
let camel_case=document.getElementById("Camel-case");
let pascal_case=document.getElementById("Pascal-case");

sentence.addEventListener('input',()=>{
    lower_case.textContent=sentence.value.toLowerCase();
    upper_case.textContent=sentence.value.toUpperCase();
    capitalise_case.textContent=sentence.value.split(" ").map(word =>{
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(" ");
    reversed_case.textContent=sentence.value.split(" ").reverse().join(" ");
    camel_case.textContent = sentence.value
    .trim()
    .split(/\s+/)
    .map((word, index) => {
        if (index === 0) {
            return word.toLowerCase();
        }

        return word.charAt(0).toUpperCase() +
               word.slice(1).toLowerCase();
    })
    .join("");
    pascal_case.textContent=sentence.value.trim().split(" ").map(word =>{
        return word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase();
    }).join("");
})