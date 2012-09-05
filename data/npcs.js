module.exports.global = [{
	name: 'Gnome',
	role: 'gnome',
	attributes: {},
	dialog: {
		intro: ['I\'m the Gnome.', 'I can help you out.', 'If you solve these riddles, you can become a master gardner.'],
		random: ['I\'m sure you believe everything you\'re saying.', 'If you believed something different, you wouldn\'t be sitting where you\'re sitting.', 'Stability means we run it.']
	}
}, {
	name: 'Random NPC Gardner',
	role: 'gardner',
	attributes: {},
	dialog: {
		intro: ['I don\'t say much to start with, but I try.'],
		random: ['I see you\'re back already!', 'I\'m just practicing planting seeds. You should try it too.']
	}
}];