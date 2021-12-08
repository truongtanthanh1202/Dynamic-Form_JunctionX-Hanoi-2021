/*-------------------
    Form.html
---------------------*/ 
const formQuestionBody = document.getElementById("form-question--body");
/*---------------Add and delete Personal-info group-----------*/
(()=>{
    /*---Add group---*/
    const addPersonInfoGroup = document.querySelector(".add-personal-info");

    addPersonInfoGroup.addEventListener("click", () => {
        createPersonInfoGroup();
    });  

    let i=1;
    function createPersonInfoGroup(){
        PersonInfoGroup = document.createElement("div");

        PersonInfoGroup.classList.add("form-question--checkbox-group");
        PersonInfoGroup.setAttribute("id", "form-question--checkbox-group-"+(i))
        PersonInfoGroup.innerHTML=``;
        i++;
        formQuestionBody.appendChild(PersonInfoGroup);
        reload();
    }

    /*---Reload and add Click event for many btn-remove*/
    const reload = () => {
        [...document.querySelectorAll(".btn--remove-checkbox")].forEach((btn) => {
            btn.addEventListener("click", deleteCheckBox);
        });
    }; 
})();

/*---------------Add and delete Question Title-----------*/ 
(()=>{
    /*---Add---*/ 
    const addQuesTitle = document.querySelector(".add-title");

    addQuesTitle.addEventListener("click", () => {
        createQuesTitle();
    });

    let i=0;
    function createQuesTitle() {
        quesTitle = document.createElement("div");

        quesTitle.classList.add("form-question--titleBox-group");
        quesTitle.setAttribute("id", "form-question--titleBox-group-"+(i))
        quesTitle.innerHTML=`
        <div class="row">
            <div class="form-question--titleBox w-100 form-control--container">
                <button type="button" class="btn--remove-asw-field btn--remover-quesTitle fas fa-trash-alt" id="btn--remover-quesTitle-${i}">
                </button>
                <input type="text" name="question--title-${i}" id="question--title-${i}" class="question--title" placeholder="Question Title">
                 <div class="section--endline--inner"></div>
            </div>
        </div>`;
        i++;
        formQuestionBody.appendChild(quesTitle);
        reload();
    }

    /*---Reload---*/
    const reload = () => {
        [...document.querySelectorAll(".btn--remover-quesTitle")].forEach((btn) => {
            btn.addEventListener("click", deleteQuesTitle);
        });
    };
    // reload();

    /*---Remove---*/ 
    function deleteQuesTitle(event) {
        const currentContainer = [...document.querySelectorAll(".form-question--titleBox-group")].find(
            (container) =>
                container.id.replace("form-question--titleBox-group-", "") ===
                event.target.id.replace("btn--remover-quesTitle-", "")
        );
        currentContainer.remove();
        reload();
    }
})();

/*---------------Add and delete Question Description-----------*/
(()=>{
    /*---Add---*/ 
    const addDescriptTitle = document.querySelector(".add-description");

    addDescriptTitle.addEventListener("click", () => {
        createDescriptTitle();
    });

    let i=0;
    function createDescriptTitle() {
        DescriptTitle = document.createElement("div");

        DescriptTitle.classList.add("form-question--descriptBox-group");
        DescriptTitle.setAttribute("id", "form-question--descriptBox-group-"+(i))
        DescriptTitle.innerHTML=`
        <div class="row">
            <div class="form-question--descriptBox w-100 form-control--container">
                <button type="button" id="btn--remove-quesDescript-${i}" class="btn--remove-asw-field btn--remove-quesDescript fas fa-trash-alt">
                </button>
                <input type="text" name="question-descript-${i}" id="question-descript-${i}" class="form-control--descript" placeholder="Question description">
                <div class="section--endline--inner"></div>
            </div>
        </div>`;
        i++;
        formQuestionBody.appendChild(DescriptTitle);
        reload();
    }

    /*---Reload---*/
    const reload = () => {
        [...document.querySelectorAll(".btn--remove-quesDescript")].forEach((btn) => {
            btn.addEventListener("click", deleteDescriptTitle);
        });
    };
    // reload();

    /*---Remove---*/ 
    function deleteDescriptTitle(event) {
        const currentContainer = [...document.querySelectorAll(".form-question--descriptBox-group")].find(
            (container) =>
                container.id.replace("form-question--descriptBox-group-", "") ===
                event.target.id.replace("btn--remove-quesDescript-", "")
        );
        currentContainer.remove();
        reload();
    }
})();

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

/*---------------Add and delete radio group-----------*/
(()=>{

})();

/*---------------Add and delete checkBox group-----------*/ 
(()=> {
    /*---Add---*/
    const addcheckBoxGroup = document.querySelector(".add-checkbox");

    addcheckBoxGroup.addEventListener("click", () => {
        createCheckBox();
    })

    let i=0;
    function createCheckBox() {
        checkBox = document.createElement("div");

        checkBox.classList.add("form-question--checkbox-group");
        checkBox.setAttribute("id", "form-question--checkbox-group-"+(i))
        checkBox.innerHTML=`
        <div class="row">
            <div class="form-question--radioBox w-100 form-control--container">
            <button type="button" class="btn--remove-asw-field btn--remove-checkbox fas fa-trash-alt" id="btn--remove-checkbox-${i}">
            </button>
            <div class="form-check--container">
                <input type="checkbox" name="group-checkbox-${i}" id="ques-checkbox-${i}" class="form-check--input">                                       
                <input type="text" name="input-descript" id="input-descript" class="form-check--descript" placeholder="Radio box description">
            </div> 
            </div>
        </div>`;
        i++;
        formQuestionBody.appendChild(checkBox);
        reload();
    }

    /*Reload*/ 
    const reload = () => {
        [...document.querySelectorAll(".btn--remove-checkbox")].forEach((btn) => {
            btn.addEventListener("click", deleteCheckBox);
        });
    };

    /*---Remove---*/ 
    function deleteCheckBox(event) {
        console.log("hello");
        console.log(event.target);
        const currentContainer = [...document.querySelectorAll(".form-question--checkbox-group")].find(
            (container) =>
                container.id.replace("form-question--checkbox-group-", "") ===
                event.target.id.replace("btn--remove-checkbox-", "")
        );
        currentContainer.remove();
        reload();
    }
    // reload();
})(); 