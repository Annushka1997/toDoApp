"use strict";

import UI from "./modules/ui";
import POST from "./modules/postMethod";
import GET from "./modules/getMethod";
import PATCH from "./modules/patchMethod";
import DELETE from "./modules/deleteMethod";
import COMPLETE from "./modules/complete";
import FILTER from "./modules/filter";
import CACHE from "./modules/cacheMethod";

const url = "http://localhost:8888/todos";

const {form, screenInput, listsBlock} = UI;
UI.start();
POST(form, screenInput, url);
UI.modale();

async function engine () {
	await GET(UI, url);
	PATCH(
		document.querySelectorAll(".editBtn"),
		document.querySelectorAll(".saveBtn"),
		document.querySelectorAll(".listsBlockItemContent"),
		url
	);
	DELETE(
		document.querySelectorAll(".removeBtn"),
		document.querySelectorAll(".listsBlockItemContent"),
		url,
		UI,
		document.getElementById("okModaleBtn"),
		document.getElementById("closeModaleBtn"),
	);
	COMPLETE(
		url, 
		document.querySelectorAll(".buttons input"), 
		document.querySelectorAll(".listsBlockItemContent")
	);
	FILTER(
		document.querySelectorAll("[data-filter]"),
		url,
		UI
	);
	CACHE (
		document.getElementById("cacheBtn"),
		url,
		UI
	);
}

engine();