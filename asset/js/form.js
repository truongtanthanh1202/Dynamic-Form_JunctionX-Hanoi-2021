/*-------------------
    Form.html
---------------------*/ 
const formQuestionBody = document.getElementById("form-question--body");

/*---------------Add and delete inputBox-----------*/ 
(() => {
    /*---Add---*/ 
    const addInputBox = document.querySelector(".add-input");
    var btns = document.querySelectorAll(".btn--remove-input");

    addInputBox.addEventListener("click", () => {
        createInputBox();
        //lưu lại xem có bao nhiêu nút xóa của inputBox
        btns = document.querySelectorAll(".btn--remove-input");
        console.log(btns);
        console.log(btns.length);
    })

    let i=1;
    function createInputBox() {
        inputBox = document.createElement("div");

        inputBox.classList.add("form-question--inputBox-group");
        inputBox.setAttribute("id", "form-question--inputBox-group-"+(i))
        inputBox.innerHTML=`
        <div class="row">
            <div class="form-question--inputBox w-100 form-control--container">
                <button type="button" class="btn--remove-asw-field btn--remove-input" id="btn--remove-input-${i}">
                    <i class="fas fa-trash-alt"></i>
                </button>
                <input type="text" name="input-descript" id="input-descript" class="form-control--descript" value="Input box description">
                <input type="text" name="user-${i}-inputBox" id="user-${i}-inputBox" class="form-control" required>
            </div>
        </div>`;
        i++;
        formQuestionBody.appendChild(inputBox);
    }

    /*---Remove---*/
    const removeInputBox = document.querySelector("#btn--remove-input-0");

    removeInputBox.addEventListener("click", () => {
        deleteInputBox();
    })

    function deleteInputBox() {
        var child69 = document.getElementById("form-question--inputBox-group-0");
        formQuestionBody.removeChild(child69);
    }
})();