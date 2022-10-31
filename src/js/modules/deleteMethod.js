export default function (removeBtn,content,url,UI,okBtn,closeBtn) {
	removeBtn.forEach((btn,index) => {
		btn.addEventListener("click",() => {
			UI.modalContainer.classList.add("modal_wrapper-active");
			okBtn.addEventListener("click", async (e) => {
			e.preventDefault();
			const fakeID = btn.parentElement.previousElementSibling.firstElementChild.textContent;
			const input = content[index].children[1];
			btn.parentElement.parentElement.remove();
			await fetch (`${url.slice(0,21)}/history`, {
				method: "POST",
				headers: {
					"content-type" : "application/json"
				},
				body: JSON.stringify({title: input.value})
			});
			await fetch(`${url}/${parseInt(fakeID)}`, {
				method: "DELETE"
			});
			});
			closeBtn.addEventListener("click", () => {
				UI.modalContainer.classList.add("modal_wrapper-active");
			});			
		})
	});
}