const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.keys')

keys.addEventListener('click', e =>
{if(e.target.matches('button'))
    {
        const key = e.target
        const action = key.dataset.action

        if(!action)
        {
            console.log('number key')
        }
        if(action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide')
        {
            console.log('operator key')
        }
        if(action === 'decimal')
        {
            console.log('decimal key')
        }
        if(action === 'clear')
        {
            console.log('clear key')
        }
        if(action === 'calculate')
        {
            console.log('equal key')
        }
    }
})

const display = document.querySelector('.display')

keys.addEventListener('click', e => 
{if(e.target.matches('button'))
    {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
        const previousKeyType = calculator.dataset.previousKeyType

        Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'))
        if(!action)
        {
            if(displayedNum === '0' || previousKeyType === 'operator')
            {
                display.textContent = keyContent
            } else
            {
                display.textContent = displayedNum + keyContent
            }
        }
        if(action === 'decimal')
        {
            display.textContent = displayedNum + '.'
        }
        if(action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide')
        {
            key.classList.add('is-depressed')
            calculator.dataset.previousKeyType = 'operator'
            calculator.dataset.firstValue = displayedNum
            calculator.dataset.operator = action
        }
        if(action === 'calculate')
        {
            const firstValue = calculator.dataset.firstValue
            const secondValue = displayedNum
            const operator = calculator.dataset.operator

            display.textContent = calculate(firstValue, operator, secondValue)
        }
    }
})

const calculate = (n1, operator, n2) =>
{
    let result = ''

    switch(operator)
    {
        case 'add':
            result = parseFloat(n1) + parseFloat(n2)
            break;
        case 'subtract':
            result = parseFloat(n1) - parseFloat(n2)
            break;
        case 'multiply':
            result = parseFloat(n1) * parseFloat(n2)
            break;
        case 'divide':
            result = parseFloat(n1) / parseFloat(n2)
            break;
    }
    return result
}