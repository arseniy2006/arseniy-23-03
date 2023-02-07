var sturbuks = {
    coffee: {
        latte: 'более молочный, чем капучино',
        Mokko:'кофейный десерт, который готовится c помощью эспрессо'
    },
    tea: {
        green:'зеленый чай',
        black: 'черный чай'
    }
}
var buy = prompt('ваш заказ кофе или чай?')
var drink = prompt('какой тип  ' + buy + ' вы бы хотели заказать')
var ava = false
for (var key in sturbuks[buy]){
    if (key === drink){
        ava = true
        alert('Вы закали  ' + drink + '  ' + buy)
        alert(sturbuks[buy][key])
    }else if (!ava){
        alert('Извините у нас нет в наличии  ' + drink + '  ' + buy)
    }
}