const select = document.querySelector("select");
const spans = document.querySelectorAll("span");

const createNewOption = (data) => {
	for (let i = 0; i < data.length; i++) {
		let newOption = new Option(data[i].brand, `${data[i].brand}`);
		select.append(newOption);
	}
};

const getData = async ({
	url
}) => {
	const response = await fetch(url);
	const data = await response.json();
	createNewOption(data.cars);
	select.addEventListener("change", (e) => {
		if (e.target[e.target.selectedIndex].value == "choose") {
			spans[0].textContent = e.target[e.target.selectedIndex].textContent;
			spans[1].textContent = "";
		}
		data.cars.forEach((elem) => {
			if (elem.brand == e.target[e.target.selectedIndex].value) {
				spans[0].textContent = `Тачка ${e.target[e.target.selectedIndex].value} ${elem.model}`;
				spans[1].textContent = `Цена: ${elem.price}$`;
			}
		});
	});
};

getData({
	url: "https://bfs01.getcourse.ru/public/files/12250/88/84120897322424565eb4cddeea2b910a.json?e=1636635599&s=G9sbpoz9jUD8EiaEgCrYNw"
});