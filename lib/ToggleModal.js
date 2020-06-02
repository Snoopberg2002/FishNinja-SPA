export default function toggleModal(content) {
    document.querySelector(".modalContent").innerHTML = content;
    document.querySelector(".modalBg").classList.add("bg-active");

    //Close Modals
    document.querySelector("#modal-close").addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(".modalBg").classList.remove("bg-active");
    });

    }
