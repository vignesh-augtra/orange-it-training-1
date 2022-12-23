function changeContent(){
    document.getElementById("my-para").innerHTML = "Vignesh Velmurugan"
}

function createContent(){
    let paraTag = document.createElement("p"); // <p>  </p>
    paraTag.innerHTML = "HashSkills" // <p> HashSkills </p>
    paraTag.setAttribute("class", "red-text") // <p class="red-text"> HashKsills </p>

    // to insert as element 
    // 1. Fetch the parent Element
    let parentElement = document.getElementById("para-list")
    // 2. Append the new Element inside the parent Element
    parentElement.appendChild(paraTag)


}

function DeleteContent(){
    let elementToDelete = document.querySelector("#to-delete")
    elementToDelete.remove()
}
