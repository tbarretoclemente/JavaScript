// MENU

// const menuMobile = () =>{
//     let menuArea = document.getElementById("menu__Area");

//     if(menuArea.classList.contains("menu--open") == true){
//         menuArea.classList.remove("menu--open");
//     }else{
    //         menuArea.classList.add("menu--open");
    //     }
    // }
    
    
const menuMobile = () =>{
    let menuArea = document.getElementById("menu__Area");

    if(menuArea.style.width == "12.5rem"){
        menuArea.style.width = "0rem";
    }else{
        menuArea.style.width = "12.5rem";
    }

}