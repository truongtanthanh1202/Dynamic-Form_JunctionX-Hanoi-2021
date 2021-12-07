/*-------------------
    Form.html
---------------------*/ 
console.log("Helloo Hải đần");
const formQuestionBody = document.getElementById("form-question--body");

/*---------------Add and delete inputBox-----------*/ 
(() => {
    const addInput = document.querySelector(".add-input");

    addInput.addEventListener("click", () => {
        createInputBox();
    })

    let i=1;
    function createInputBox() {
        console.log(formQuestionBody);
        inputBox = document.createElement("div");

        inputBox.classList.add("form-question--inputBox-group");
        inputBox.innerHTML=`
        <div class="form-question--inputBox w-100 form-control--container">
            <button type="button" class="btn--remove-asw-field">
                <i class="fas fa-trash-alt"></i>
            </button>
            <input type="text" name="input-descript" id="input-descript" class="form-control--descript" value="Input box description">
            <input type="text" name="user-${i}-inputBox" id="user-${i}-inputBox" class="form-control" required>
        </div>`;
        i++;
        formQuestionBody.appendChild(inputBox);
    }
})();