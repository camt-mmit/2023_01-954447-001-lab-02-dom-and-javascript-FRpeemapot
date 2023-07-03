
function createComponent(componentElement) {
    const tmpInput = componentElement.querySelector('template.app-tmp-input');
    const inputslist = tmpInput.parentElement;

    const updateResult = () => {
        const children = [...inputslist.children].filter(
            (elem) => elem !== tmpInput,
        );

        
    const result = children.reduce(
        (carry, element) =>
        carry +
        element.querySelector('input[type="number"].app-cmp-input')
            .valueAsNumber,
            0,
    );

    [...componentElement.querySelectorAll('output.app-cmp-result')].forEach(
        (elem) => (elem.value = `${result.toLocaleString()}`),

    );
    };


    const updatelist = () => {
        updateResult();

        const children = [...inputslist.children].filter(
            (elem) => elem !== tmpInput,
        ); 
        

        children.forEach((element, i) => {
            [...element.querySelectorAll('.app-cmp-input-no')].forEach(
                (elem) => (elem.textContent = `${i + 1}`),
            );
        });

        [...inputslist.querySelectorAll('.app-cmd-remove-input')].forEach(
            (elem) => (elem.disable = children.length === 1),
            );
    };

    const createElement = () => {
        const container = tmpInput.content.cloneNode(true).firstElementChild;

        container.addEventListener('click', (ev) => {
            if(ev.target.matches('.app-cmd-remove-input')) {
                container.remove();

                updatelist();
            }
        });

        inputslist.append(container);
        updatelist();
    };

    componentElement.addEventListener('click', (ev) => {
        if(ev.target.matches('.app-cmd-add-input')) {
            createElement();
        }
    });

    inputslist.addEventListener('change', (ev) => {
        if(ev.target.matches('input[type="number"].app-cmp-input')) {
            updateResult();
        }
    });

    createElement();
};


document.addEventListener('DOMContentLoaded', () => {
   createComponent(document.body);
});
