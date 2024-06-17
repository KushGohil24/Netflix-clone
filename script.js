const faqBoxes = document.querySelectorAll('.faqbox');
const langBtn = document.querySelector(".langbtn");
const Option = document.querySelector(".language");
langBtn.onclick = function(){
    open(sel);
}
function open(elem){
    if (document.createElement) {
        var e = document.createElement("MouseEvents");
        e.initMouseEvent("mousedown", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        elem[0].dispatchEvent(e);
    } else if (element.fireEvent) {
        elem[0].fireEvent("onmousedown");
    }
}

faqBoxes.forEach((faqBox, index) => {
    faqBox.addEventListener('click', () => {
        const faqSection = document.querySelector(`#faqdisp${index + 1}`);
        const Btn = document.querySelector(`#btn${index + 1}`);
        if (faqSection.style.maxHeight === "0px" || faqSection.style.maxHeight === "") {
            Btn.style.transform = "rotate(45deg)";
            faqSection.style.maxHeight = `${faqSection.scrollHeight}px`;
        } else {
            faqSection.style.transition = "max-height 0.5s ease-out";
            faqSection.style.maxHeight = '0px';
            Btn.style.transform = "rotate(0deg)";
        }
    });
});
