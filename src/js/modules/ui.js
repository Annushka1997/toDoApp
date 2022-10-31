export default {
	title: document.createElement("h1"),
	subTitle: document.createElement("p"),
	form: document.createElement("form"),
	screenBlock: document.createElement("div"),
	screenInput: document.createElement("input"),
	screenAddBtn: document.createElement("button"),
	listsBlock: document.createElement("div"),
	filterWrapper: document.createElement("div"),
	filterComplete: document.createElement("button"),
	filterUnComplete: document.createElement("button"),
	filterAll: document.createElement("button"),
	cacheBtn: document.createElement("button"),
	modalContainer: document.createElement("div"),	

	elementOptions() {
		this.title.textContent = "CRUD";
		this.subTitle.textContent = "Asyn Application"

		this.form.id = "app-form";
		this.screenBlock.id = "screenBlock";
		this.screenInput.type = "text";
		this.screenInput.placeholder = "Type here...";
		this.screenAddBtn.classList.add("fa", "fa-plus-circle");
		this.screenAddBtn.id = "screenAddBtn";
		this.listsBlock.id = "listBlock";

		this.filterWrapper.id = "filterWrapper";
		this.filterComplete.setAttribute("data-filter", "filterComplete");
		this.filterUnComplete.setAttribute("data-filter", "filterUnComplete");
		this.filterAll.setAttribute("data-filter", "filterAll");

		this.filterComplete.textContent = "Completed";
		this.filterUnComplete.textContent = "Uncompleted";
		this.filterAll.textContent = "ALL";
		this.cacheBtn.textContent = "CACHE";
		this.cacheBtn.id = "cacheBtn";
		this.modalContainer.classList.add("modal_wrapper");
	},

	appendElements() {
		root.append(this.modalContainer,this.title, this.subTitle, this.form, this.listsBlock, this.filterWrapper);
		this.form.append(this.screenBlock);
		this.screenBlock.append(this.screenInput, this.screenAddBtn);
		this.filterWrapper.append(this.filterComplete, this.filterUnComplete, this.filterAll,this.cacheBtn);
	},

	toHTML(id, value, state = false) {
		this.listsBlock.innerHTML += `
			<div class="listsBlockItem">
				<div class="listsBlockItemContent">
					<span>${id}</span>
					<input type="text" value="${value}" readonly>
				</div>
				<div class="buttons">
					<input type="checkbox" name="item${id}" ${state ? "checked" : ""}>
					<button class="removeBtn fa fa-trash"></button>
					<button class="editBtn fa fa-pencil"></button>
					<button class="saveBtn fa fa-save"></button>
				</div>
			</div>
		`;
	},

	start() {
		this.elementOptions();
		this.appendElements();
	},
	modale() {
		this.modalContainer.innerHTML = `
		<form>
			<h2>Are you sure?</h2>
			<button style="background:red" id="okModaleBtn">Yes</button>
			<button id="closeModaleBtn">Close</button">
		</form>
	`;
	}
};
