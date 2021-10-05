import { loop, setVideo } from "./upNext.js";



// change this index text and video src links : )

const indexes = [
	{
		text: 'How to download and install android studio',
		video: `<iframe  src="https://www.youtube.com/embed/roDz8mMvbIg" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
	},
	{
		text: 'How an android application works',
		video: `<iframe  src="https://www.youtube.com/embed/DnpZ8FYfals" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
	},
	{
		text: 'Android activity lifecycle',
		video: `<iframe  src="https://www.youtube.com/embed/S8voQap6suk" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
	},
	{
		text: 'Event Handling',
		video: `<iframe  src="https://www.youtube.com/embed/zVct6vhyiD8" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
	},
	{
		text: 'Multiple event listeners',
		video: `<iframe  src="https://www.youtube.com/embed/J4UKL355sUo" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
	},
	{
		text: 'What are gestures?',
		video: `<iframe  src="https://www.youtube.com/embed/J4UKL355sUo" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
	},
	{
		text: 'Creating design',
		video: `<iframe  src="https://www.youtube.com/embed/J4UKL355sUo" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
	},
	{
		text: 'Creating workout advisor part 1',
		video: `<iframe  src="https://www.youtube.com/embed/J4UKL355sUo" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
	},
	{
		text: 'Creating workout advisor part 2',
		video: `<iframe  src="https://www.youtube.com/embed/J4UKL355sUo" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
	},
	{
		text: 'What is listview?',
		video: `<iframe  src="https://www.youtube.com/embed/J4UKL355sUo" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
	},
	{
		text: 'Creating simple android app part 1',
		video: `<iframe  src="https://www.youtube.com/embed/J4UKL355sUo" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
	},
	{
		text: 'End',
		video: `<iframe  src="https://www.youtube.com/embed/J4UKL355sUo" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
	},
];

indexes.map((next, index) => loop(next, index));

const element = document.getElementsByClassName('next-bar');


for (var i = 0; i < element.length; i++) {
	element[i].addEventListener("click", (e) => {
		console.log(e.target.id);
		setV(e.target.id)
	});
}

function setV(id) {
	setVideo(id, indexes);
};