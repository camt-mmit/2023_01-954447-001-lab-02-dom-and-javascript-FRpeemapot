document.addEventListener("DOMContentLoaded", () => {
    const inputElements = [
       ...document.querySelectorAll(
        'input[type ="number"].app-cmp-input'),
    ];

    inputElements.forEach((element) => {
        element.addEventListener('change',() => {
            const result = inputElements.reduce(
                (carry, elem) => carry + elem.valueAsNumber,
                0,
            );


            document.querySelector(
                'output.app-cmp-result'
            ).value = `${result.toLocaleString()}`;
        });
    });
});

const x =[1,2,3];
const y =['a','b','c'];

const z= [...x, ...y];
