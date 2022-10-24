// Class to help with setting the dark mode or light mode css values
class CssPropControl {
    constructor(element) {
        this.element = element;
    }
    get(varName) {
        return getComputedStyle(this.element).getPropertyValue(varName);
    }
    set(varName, val) {
        return this.element.style.setProperty(varName, val);
    }
}

const bodyCssProps = new CssPropControl(document.body);

let toggle = document.querySelector('#dark-mode-toggle');
toggle.addEventListener('click', () => {
    // Alert - brings up console window to show alert message that it has been clicked on
    // alert(toggle);
    // Ternary condition to store the correct value based on if the toggle has been checked or not
    let mode = toggle.checked ? 'dark' : 'light';
    // Set the body css properties depending on the mode
    bodyCssProps.set('--background', bodyCssProps.get(`--${mode}-background`));
    bodyCssProps.set('--primary', bodyCssProps.get(`--${mode}-primary`));
    bodyCssProps.set('--link', bodyCssProps.get(`--${mode}-link`));
})