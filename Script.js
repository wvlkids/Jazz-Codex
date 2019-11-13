var selector = document.getElementById("genre-filter")

var lists = document.querySelectorAll('.list')

console.log(lists)

function toggle_lists() {
    var genre_selected = selector.value

    lists.forEach(function (item) {
        item.classList.remove('enabled')
    })
    if (genre_selected == 'all') {
        lists.forEach(function (item) {
            item.classList.add('enabled')
        })
    } else {
        document.getElementById(genre_selected).classList.add('enabled')

    }
}



toggle_lists()

selector.addEventListener('change', function () {
    toggle_lists()
})