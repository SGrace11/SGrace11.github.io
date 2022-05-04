const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.keys')
const display = document.querySelector('.display')

keys.addEventListener('click', e =>
{if(e.target.matches('button'))
    {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
        const previousKeyType = calculator.dataset.previousKeyType

        if(!action)
        {
            console.log('number key')
            if(displayedNum === '0' || previousKeyType === 'operator' || previousKeyType === 'calculate')
            {
                display.textContent = keyContent
            } else
            {
                display.textContent = displayedNum + keyContent
            }
            calculator.dataset.previousKeyType = 'number'
        }
        if(action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide')
        {
            console.log('operator key')
            const firstValue = calculator.dataset.firstValue
            const secondValue = displayedNum
            const operator = calculator.dataset.operator

            if(firstValue && operator && previousKeyType !== 'operator' && previousKeyType !== 'calculate')
            {
                const calcValue = calculate(firstValue, operator, secondValue)
                display.textContent = calcValue

                calculator.dataset.firstValue = calcValue
            } else
            {
                calculator.dataset.firstValue = displayedNum
            }

            key.classList.add('is-depressed')
            calculator.dataset.previousKeyType = 'operator'
            calculator.dataset.operator = action
        }
        if(action === 'decimal')
        {
            console.log('decimal key')
            if(!displayedNum.includes('.'))
            {
                display.textContent = displayedNum + '.'
            } else if(previousKeyType === 'operator' || previousKeyType === 'calculate')
            {
                display.textContent = '0.'
            }
            calculator.dataset.previousKeyType = 'decimal'
        }
        if(action === 'clear')
        {
            console.log('clear key')
            if(key.textContent === 'AC')
            {
                calculator.dataset.firstValue = ''
                calculator.dataset.modValue = ''
                calculator.dataset.operator = ''
                calculator.dataset.previousKeyType = ''
            } else
            {
                key.textContent = 'AC'
            }
            display.textContent = '0'
            calculator.dataset.previousKeyType = 'clear'
        }
        if(action !== 'clear')
        {
            const clearButton = calculator.querySelector('[data-action=clear]')
            clearButton.textContent = 'CE'
        }
        if(action === 'calculate')
        {
            console.log('equal key')
            let firstValue = calculator.dataset.firstValue
            let secondValue = displayedNum
            const operator = calculator.dataset.operator

            if(firstValue)
            {
                if(previousKeyType === 'calculate')
                {
                    firstValue = displayedNum
                    secondValue = calculator.dataset.modValue
                }
                display.textContent = calculate(firstValue, operator, secondValue)
            }
            calculator.dataset.modValue = secondValue
            calculator.dataset.previousKeyType = 'calculate'
        }
        Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'))
    }
})

const calculate = (n1, operator, n2) =>
{
    const firstNum = parseFloat(n1)
    const secondNum = parseFloat(n2)
    switch(operator)
    {
        case 'add':
            return firstNum + secondNum
        case 'subtract':
            return firstNum - secondNum
        case 'multiply':
            return firstNum * secondNum
        case 'divide':
            return firstNum / secondNum
    }
}