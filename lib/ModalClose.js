export default function ModalClose() {
    //Close Modals
    document.querySelector("#modal-close").addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(".modalBg").classList.remove("bg-active");
        document.querySelector("#map").classList.remove("mapVisibility");
    });
}