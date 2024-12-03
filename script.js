// id игрока, id клетки (1-9), 
// получаем id игрока, id клетки (1-9), status

function makeMove() {
    //отправим
    //рисуем
    //менять стиль шо нельзя кликнуть
}

// const data = ;

// fetch('https://example.com/api', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(data)
// })


window.onload = () => {
	let field = document.querySelector("#field");

	if (!field) {
		return;
	}

	field.querySelectorAll("div").forEach(div => {
		div.addEventListener("click", () => {
			fetch("https://share.tochoz.ru/tictactoe/json.php", {
				body: {
					square: div.dataset.cell
				}
			})
            .then(response => response.json())
            .then(data => console.log('Success:', data))
            .catch(error => console.error('Error:', error));
		});
	});
};