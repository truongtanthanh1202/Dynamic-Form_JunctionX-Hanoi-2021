/*-------------------
    Form.html
---------------------*/ 
const formQuestionBody = document.getElementById("form-question--body");

/*---------------Add and delete inputBox-----------*/ 
(() => {
    /*---Add---*/ 
    const addInputBox = document.querySelector(".add-input");

    addInputBox.addEventListener("click", () => {
        createInputBox();
    })

    let i=0;
    function createInputBox() {
        inputBox = document.createElement("div");

        inputBox.classList.add("form-question--inputBox-group");
        inputBox.setAttribute("id", "form-question--inputBox-group-"+(i))
        inputBox.innerHTML=`
        <div class="row">
            <div class="form-question--inputBox w-100 form-control--container">
                <button type="button" class="btn--remove-asw-field btn--remove-input fas fa-trash-alt" id="btn--remove-input-${i}">
                </button>
                <input type="text" name="input-descript" id="input-descript" class="form-control--descript" value="Input box description">
                <input type="text" name="user-${i}-inputBox" id="user-${i}-inputBox" class="form-control" required>
            </div>
        </div>`;
        i++;
        formQuestionBody.appendChild(inputBox);
        reload();
    }

    /*---Remove---*/

    function deleteInputBox(event) {
        console.log("hello");
        console.log(event.target);
        const currentContainer = [...document.querySelectorAll(".form-question--inputBox-group")].find(
            (container) =>
                container.id.replace("form-question--inputBox-group-", "") ===
                event.target.id.replace("btn--remove-input-", "")
        );
        currentContainer.remove();
        reload();
    }

    const reload = () => {
        [...document.querySelectorAll(".btn--remove-input")].forEach((btn) => {
            btn.addEventListener("click", deleteInputBox);
        });
    };
    // reload();
})();