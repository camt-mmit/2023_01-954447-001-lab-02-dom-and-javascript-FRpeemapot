function createElement() {
    const tmpInput = document.querySelector('template.app-tmp-input');
    const container = tmpInput.content.cloneNode(true).firstElementChild;

    const inputElements = [
        ...document.querySelectorAll('input[type="number"].app-cmp-input'),
    ];

    container.querySelector('.app-cmp-input-no').textContent = `${inputElements.length + 1}`;

    container.querySelector('input[type="number"].app-cmp-input').addEventListener('change', () => {
        const result = [
            ...document.querySelectorAll('input[type="number"].app-cmp-input'),
        ].reduce((carry, elem) => carry + elem.valueAsNumber, 0);

        document.querySelector(
            'output.app-cmp-result'
        ).value = `${result.toLocaleString()}`;
    });

    return container;
}
    
    document.addEventListener('DOMContentLoaded', () => {
        const inputslist = document.querySelector('.app-cmp-inputs-list');
        const addcommand = document.querySelector('.app-cmd-add-input');

        addcommand.addEventListener('click', () =>
         inputslist.append(createElement()),
        );

    inputslist.append(createElement());
    });
