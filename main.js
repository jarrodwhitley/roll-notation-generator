// document.body.insertAdjacentHTML('beforeend', '<button id="rollCalculatorAppButton" class="button" onclick="openModal()">Open Roll Builder</button>');

let openModalBtn = `<li id="rollCalculatorAppButton" class="button" onclick="openModal()">Open Roll Builder</li>`;

// Add button to DnDBeyond Nav
document
	.querySelector('.mm-navbar__menu-list')
	.insertAdjacentHTML('beforeend', openModalBtn);

let modal = `<div id="rollCalculatorApp" class="">
    <div class="modal-content">
        <div class="modal-title">Roll Notation Generator</div>
        <form>
        <label for="dice_notation">Dice Notation
        <input type="text" id="diceNotation" value="" placeholder="2d6+5">
        </label>
        <label for="roll_action">Roll Action
        <input type="text" id="rollAction" value="" placeholder="Bite">
        </label>
        <div class="autocomplete-select">
        <label for="damage_type">Damage Type
            <input type="text" id="rollDamageType" value="" placeholder="Slashing"/></label>
            <div id="suggestionsList"></div>
        </div>
        <div class="button" onclick="generateAndCopy()">Generate & Copy</div>
</form>
    </div>
	<div id="modalSwapBtn" onclick="modalSwap()">
		<svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" style="vertical-align: middle;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1"><path d="M1024 512a36.205714 36.205714 0 0 1-10.861714 25.709714l-146.285715 146.285715A36.425143 36.425143 0 0 1 841.142857 694.857143c-20.004571 0-36.571429-16.566857-36.571428-36.571429v-73.142857H219.428571v73.142857c0 20.004571-16.566857 36.571429-36.571428 36.571429a36.205714 36.205714 0 0 1-25.709714-10.861714l-146.285715-146.285715C4.022857 530.870857 0 521.691429 0 512s3.986286-18.870857 10.861714-25.709714l146.285715-146.285715A36.425143 36.425143 0 0 1 182.857143 329.142857c20.004571 0 36.571429 16.566857 36.571428 36.571429v73.142857h585.142858v-73.142857c0-20.004571 16.566857-36.571429 36.571428-36.571429a36.205714 36.205714 0 0 1 25.709714 10.861714l146.285715 146.285715A36.425143 36.425143 0 0 1 1024 512z" fill=""/></svg>
	</div>
    <div id="dragBtn">
	    <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" style="vertical-align: middle;fill: lightgray;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1"><path d="M406.4 246.4L480 176V384c0 19.2 12.8 32 32 32s32-12.8 32-32V176l73.6 73.6c6.4 3.2 12.8 6.4 22.4 6.4s16-3.2 22.4-9.6c12.8-12.8 12.8-32 0-44.8l-128-128c-3.2-3.2-6.4-6.4-9.6-6.4-6.4-3.2-16-3.2-25.6 0-3.2 3.2-6.4 3.2-9.6 6.4l-128 128c-12.8 12.8-12.8 32 0 44.8s32 12.8 44.8 0zM617.6 777.6L544 851.2V640c0-19.2-12.8-32-32-32s-32 12.8-32 32v211.2l-73.6-73.6c-12.8-12.8-32-12.8-44.8 0s-12.8 32 0 44.8l128 128c3.2 3.2 6.4 6.4 9.6 6.4 3.2 3.2 9.6 3.2 12.8 3.2s9.6 0 12.8-3.2c3.2-3.2 6.4-3.2 9.6-6.4l128-128c12.8-12.8 12.8-32 0-44.8s-32-12.8-44.8 0zM956.8 524.8c3.2-6.4 3.2-16 0-25.6-3.2-3.2-3.2-6.4-6.4-9.6l-128-128c-12.8-12.8-32-12.8-44.8 0s-12.8 32 0 44.8l73.6 73.6H640c-19.2 0-32 12.8-32 32s12.8 32 32 32h211.2l-73.6 73.6c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 16 9.6 22.4 9.6s16-3.2 22.4-9.6l128-128c3.2 0 6.4-6.4 6.4-9.6zM172.8 544H384c19.2 0 32-12.8 32-32s-12.8-32-32-32H172.8l73.6-73.6c12.8-12.8 12.8-32 0-44.8s-32-12.8-44.8 0l-128 128c-3.2 3.2-6.4 6.4-6.4 9.6-3.2 6.4-3.2 16 0 25.6 3.2 3.2 3.2 6.4 6.4 9.6l128 128c6.4 6.4 12.8 9.6 22.4 9.6s16-3.2 22.4-9.6c12.8-12.8 12.8-32 0-44.8L172.8 544z"/></svg>
    </div>
  <button class="modal-close" aria-label="close"
    onclick="closeModal()"><svg xmlns="http://www.w3.org/2000/svg" fill="gray" height="20" viewBox="0 0 30 30" width="20"><path d="m7 4c-.255875 0-.5120313.0974687-.7070312.2929688l-2 2c-.3910001.391-.3910001 1.0240625 0 1.4140624l7.2929692 7.2929688-7.2929692 7.292969c-.3910001.391-.3910001 1.024062 0 1.414062l2 2c.391.391 1.0240625.391 1.4140624 0l7.2929688-7.292969 7.292969 7.292969c.39.391 1.024062.391 1.414062 0l2-2c.391-.391.391-1.024062 0-1.414062l-7.292969-7.292969 7.292969-7.2929688c.391-.39.391-1.0240624 0-1.4140624l-2-2c-.391-.3910001-1.024062-.3910001-1.414062 0l-7.292969 7.2929692-7.2929688-7.2929692c-.1955-.1955001-.4511562-.2929688-.7070312-.2929688z"/></svg></button>
    <input type="text" id="rollableOutput" placeholder="Click submit to generate notation"></input>
    <div id="copyMessage">Copied!</div>
</div>`;

document.body.insertAdjacentHTML('beforeend', modal);

let rollableModal = document.getElementById('rollCalculatorApp');
let rollableOutput = document.getElementById('rollableOutput');

// Inputs
let diceNotation = document.getElementById('diceNotation');
let rollAction = document.getElementById('rollAction');
let rollDamageType = document.getElementById('rollDamageType');
let suggestionsList = document.getElementById('suggestionsList');
let dragBtn = document.getElementById('dragBtn');

let allDamageTypes = [
	'piercing',
	'slashing',
	'bludgeoning',
	'fire',
	'cold',
	'lightning',
	'thunder',
	'radiant',
	'necrotic',
	'poison',
	'acid',
	'psychic',
	'force',
];

function closeModal() {
	rollableModal.classList.remove('is-active');
}

function openModal() {
	rollableModal.classList.add('is-active');
	focusFirstInput();
}

function modalSwap() {
	rollableModal.classList.toggle('swap');
}

async function focusFirstInput() {
	diceNotation.focus();
}

async function getFormValues() {
	let form = {
		diceNotation: diceNotation.value,
		rollAction: rollAction.value,
		rollDamageType: rollDamageType.value,
	};
	buildRollable(form);
}

function getRollAverage(notation) {
	let diceNotationArray = notation.split('d');
	let dice = diceNotationArray[0];
	let sides = diceNotationArray[1].split('+')[0];
	let modifier = diceNotationArray[1].split('+')[1];
	let averageRoll;
	if (modifier) {
		averageRoll = dice * (sides / 2) + parseInt(modifier);
	} else {
		averageRoll = dice * (sides / 2);
	}
	averageRoll = parseInt(averageRoll * 1.13);
	return averageRoll;
}

function buildRollable(form) {
	let rollAverage = getRollAverage(form.diceNotation);
	let rollable =
		rollAverage +
		' ' +
		'[rollable](' +
		form.diceNotation +
		');{"diceNotation":"' +
		form.diceNotation +
		'","rollType":"damage","rollAction":"' +
		form.rollAction +
		'","rollDamageType":"' +
		form.rollDamageType +
		'"}[/rollable] ' +
		form.rollDamageType +
		' damage.';
	let output = document.getElementById('rollableOutput');
	output.value = rollable;
}

async function copyToClipboard(text) {
	var dummy = document.createElement('textarea');
	document.body.appendChild(dummy);
	dummy.value = text;
	dummy.select();
	document.execCommand('copy');
	document.body.removeChild(dummy);
	copyMessageAlert();
}

function copyMessageAlert() {
	let copyMessage = document.getElementById('copyMessage');
	copyMessage.classList.add('show');
	setTimeout(function () {
		copyMessage.classList.remove('show');
	}, 1000);
}

async function generateAndCopy() {
	await getFormValues();
	await copyToClipboard(rollableOutput.value);
	await focusFirstInput();
}

function selectSuggestion(suggestion) {
	rollDamageType.value = suggestion;
	document.getElementById('suggestionsList').classList.remove('show');
}

function checkForFocusedSuggestion() {
	return document.querySelector('.focused-suggestion');
}

// Event Listeners
rollDamageType.addEventListener('keydown', function (e) {
	let focusedSuggestion = document
		.querySelector('.suggestion')
		.classList.contains('focused-suggestion');

	if (e.key === 'Tab') {
		e.preventDefault();
		document
			.querySelector('.suggestion')
			.classList.add('focused-suggestion');
	}
	if (e.key === 'ArrowDown' && !checkForFocusedSuggestion()) {
		e.preventDefault();
		document
			.querySelector('.suggestion')
			.classList.add('focused-suggestion');
	} else if (e.key === 'ArrowDown' && checkForFocusedSuggestion()) {
		let currentSuggestion = document.querySelector('.focused-suggestion');
		let nextSuggestion = currentSuggestion.nextElementSibling;
		if (nextSuggestion) {
			currentSuggestion.classList.remove('focused-suggestion');
			nextSuggestion.classList.add('focused-suggestion');
		}
	} else if (e.key === 'ArrowUp' && checkForFocusedSuggestion()) {
		let currentSuggestion = document.querySelector('.focused-suggestion');
		let prevSuggestion = currentSuggestion.previousElementSibling;
		if (prevSuggestion) {
			currentSuggestion.classList.remove('focused-suggestion');
			prevSuggestion.classList.add('focused-suggestion');
		}
	}
});

document.addEventListener('keypress', function (e) {
	if (e.key === 'Enter') {
		if (
			document.activeElement.id == 'rollDamageType' &&
			suggestionsList.classList.contains('show')
		) {
			rollDamageType.value = document.querySelector(
				'.focused-suggestion'
			).innerText;
			suggestionsList.classList.remove('show');
			return false;
		} else {
			generateAndCopy();
		}
	}
});

rollableOutput.addEventListener('click', function () {
	copyToClipboard(rollableOutput.value);
	focusFirstInput();
});

rollDamageType.addEventListener('input', function () {
	let input = rollDamageType.value;
	let suggestions = allDamageTypes.filter(function (damageType) {
		return damageType.toLowerCase().includes(input.toLowerCase());
	});
	suggestionsList.innerHTML = '';
	suggestions.forEach(function (suggestion) {
		suggestionsList.insertAdjacentHTML(
			'beforeend',
			`<div class="suggestion" value="${suggestion}" onclick="selectSuggestion('${suggestion}')">${suggestion}</div>`
		);
	});
	document.getElementById('suggestionsList').classList.add('show');
});


// Allow user to drag modal
// dragBtn.addEventListener('mousedown', function(e) {
//     e.preventDefault();
//     let shiftX = e.clientX - rollableModal.getBoundingClientRect().left;
//     let shiftY = e.clientY - rollableModal.getBoundingClientRect().top;

//     function moveAt(pageX, pageY) {
//         let newX = pageX - shiftX + window.scrollX; // Adjusted for scroll
//         let newY = pageY - shiftY + window.scrollY; // Adjusted for scroll

//         let newBottom = newY + rollableModal.offsetHeight;
//         let newRight = newX + rollableModal.offsetWidth;

//         let isNotOverTop = newY > 0;
//         let isNotOverLeft = newX > 0;
//         let isNotOverBottom = newBottom < document.documentElement.clientHeight + window.scrollY; // Adjusted for scroll
//         let isNotOverRight = newRight < document.documentElement.clientWidth + window.scrollX; // Adjusted for scroll

//         if (isNotOverTop && isNotOverLeft && isNotOverBottom && isNotOverRight) {
//             rollableModal.style.left = newX + 'px';
//             rollableModal.style.top = newY + 'px';
//         }
//     }

//     function onMouseMove(e) {
//         moveAt(e.pageX, e.pageY);
//     }

//     document.addEventListener('mousemove', onMouseMove);

//     document.addEventListener('mouseup', function() {
//         document.removeEventListener('mousemove', onMouseMove);
//     });
// });
