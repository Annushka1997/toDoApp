export default function (btn,url, UI) {
		btn.addEventListener("click", async () => {
			UI.listsBlock.innerHTML = "";
			await fetch (`${url.slice(0,21)}/history`)
			.then(data => data.json())
			.then(data => data.forEach(obj => UI.toHTML(obj.id, obj.title,obj.isComplete)));
		});
}