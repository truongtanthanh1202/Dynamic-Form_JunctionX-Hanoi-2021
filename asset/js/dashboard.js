/*---------------Remove User form item-----------*/ 
(()=> {
    /*Reload*/ 
    const reload = () => {
        [...document.querySelectorAll(".userForm-item--remove")].forEach((btn) => {
            btn.addEventListener("click", deleteUserFormItem);
        });
    };
    reload();

    /*---Remove---*/ 
    function deleteUserFormItem(event) {
        const currentContainer = [...document.querySelectorAll(".userForm-item--container")].find(
            (container) =>
                container.id.replace("userForm-item--container-", "") ===
                event.target.id.replace("userForm-item--remove-", "")
        );
        if (confirm("Are you sure you want to delete")) {
            currentContainer.remove();
            reload();
        } else {
            reload();
        }       
    }
})(); 

/*---------------Hide and show templates group-----------*/ 
(()=>{
    const toggleTemplateGroup = document.querySelector(".dashboard-templates--hide-btn");

    toggleTemplateGroup.addEventListener("click", () => {
        toggleTemplate();
    });

    function toggleTemplate() {
        document.querySelector(".dashboard-templates--items").classList.toggle("hide");
        document.querySelector(".dashboard-templates--items").classList.toggle("show");
    }
})();
