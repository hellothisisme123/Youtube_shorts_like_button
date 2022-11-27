const blocks = document.querySelectorAll('.block')

const clear_set = () => {
    blocks.forEach(block => {
        block.classList.remove('set_1')
        block.classList.remove('set_2')
        block.classList.remove('set_3')
        block.classList.remove('set_4')
        block.classList.remove('set_5')
        block.classList.remove('set_6')
    })
}

const random_set = () => {
    let set = random_min_max_int(1, 6)
    console.log(set)

    clear_set()
    if (set == 1) {
        blocks.forEach(block => {
            block.classList.add('set_1')
        })
    } else if (set == 2) {
        blocks.forEach(block => {
            block.classList.add('set_2')
        })
    } else if (set == 3) {
        blocks.forEach(block => {
            block.classList.add('set_3')
        })
    } else if (set == 4) {
        blocks.forEach(block => {
            block.classList.add('set_4')
        })
    } else if (set == 5) {
        blocks.forEach(block => {
            block.classList.add('set_5')
        })
    } else if (set == 6) {
        blocks.forEach(block => {
            block.classList.add('set_6')
        })
    }
}

setInterval(random_set, 3000);