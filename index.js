const ShowModalBtn = document.querySelector(".show-modal");
const BottomSheet = document.querySelector(".bottom-sheet");
const SheetOverlay = BottomSheet.querySelector(".sheet-overlay");

const ShowBottomSheet = () => {
    BottomSheet.classList.add("show");
}

const HideBottomSheet = () => {
    BottomSheet.classList.remove("show");
}


ShowModalBtn.addEventListener("click", ShowBottomSheet);
SheetOverlay.addEventListener("click", HideBottomSheet);

//********************************************************************************* */

const ShowModalBtn2 = document.querySelector(".show-modal-2");
const BottomSheet2 = document.querySelector(".bottom-sheet-2");
const SheetOverlay2 = BottomSheet2.querySelector(".sheet-overlay-2");

const ShowBottomSheet2 = () => {
    BottomSheet2.classList.add("show");
}

const HideBottomSheet2 = () => {
    BottomSheet2.classList.remove("show");
}


ShowModalBtn2.addEventListener("click", ShowBottomSheet2);
SheetOverlay2.addEventListener("click", HideBottomSheet2);

//********************************************************************************* */

const ShowModalBtn3 = document.querySelector(".show-modal-3");
const BottomSheet3 = document.querySelector(".bottom-sheet-3");
const SheetOverlay3 = BottomSheet3.querySelector(".sheet-overlay-3");

const ShowBottomSheet3 = () => {
    BottomSheet3.classList.add("show");
}

const HideBottomSheet3 = () => {
    BottomSheet3.classList.remove("show");
}


ShowModalBtn3.addEventListener("click", ShowBottomSheet3);
SheetOverlay3.addEventListener("click", HideBottomSheet3);


/********************************************************************/

const CloseSheet = BottomSheet.querySelector(".close-icon");

const CloseBottomSheet = () => {
    BottomSheet.classList.remove("show");
}

CloseSheet.addEventListener("click", CloseBottomSheet);

/********************************************************************/


const CloseSheet2 = BottomSheet2.querySelector(".close-icon-2");

const CloseBottomSheet2 = () => {
    BottomSheet2.classList.remove("show");
}

CloseSheet2.addEventListener("click", CloseBottomSheet2);

/********************************************************************/


const CloseSheet3 = BottomSheet3.querySelector(".close-icon-3");

const CloseBottomSheet3 = () => {
    BottomSheet3.classList.remove("show");
}

CloseSheet3.addEventListener("click", CloseBottomSheet3);

/********************************************************************/