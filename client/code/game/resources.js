
var _resources = [],
	_currentSlide = 0,
	_numSlides = 0,
	_speak = null,
	_answered = false,
	_who = null,
	_correctAnswer = false,
	_curResource = null,
	_revisiting = false,
	_inventory = false,
	_resourceStateSel = null,
	_speechBubbleSel = null,
	_inventorySel = null,
	_resourceAreaSel = null,
	_speechButtonSel = null,
	_resourceButtonSel = null,
	_speakerNameSel = null,
	_resourceMessageSel = null,
	_resourceContentSel = null;

$game.$resources = {

	isShowing: false,
	ready: false,
	

	init: function() {
		ss.rpc('game.npc.getResources', function(response) {
			//iterate through repsonses, create a key
			//with the id and value is the object
			_allNpcs = {};
			$.each(response, function(key, resource) {
				var stringId = String(resource.id);
				_resources[stringId] = resource;
			});

			//set dom selectors
			_resourceStateSel = $('.resourceStage');
			_speechBubbleSel = $('.speechBubble');
			_inventorySel = $('.inventory');
			_resourceAreaSel = $('.resourceArea');
			_speechButtonSel = $('.speechBubble button');
			_resourceButtonSel = $('.resourceArea button');
			_speakerNameSel = $('.resourceArea .speakerName');
			_resourceMessageSel = $('.resourceArea .message');
			_resourceContentSel = $('.resourceContent');

			$game.$resources.ready = true;
		});
	},

	beginResource: function(e) {
		var nombre = $game.$npc.getName(e.data.npc);
		$game.$resources.loadResource(nombre, e.data.npc, true);
		_inventory = true;
		$game.$resources.isShowing = true;
		
	},

	loadResource: function(who, index, now) {
		_who = who,
		_answered = false,
		_currentSlide = 0;

		_resourceStateSel.empty();
		var stringId = String(index);
		_curResource = _resources[stringId];
		var url = _curResource.url;
		_resourceStateSel.load(url,function() {
			_numSlides = $('.resourceStage .pages > .page').length;
			if(now) {
				$game.$resources.showResource(2);
			}
		});
	},

	showResource: function(num) {
		_revisiting = false;
		//if they already got it right, then don't have answer form, but show answer
		if(num === 2) {
			_revisiting = true;
			_correctAnswer = false;
		}

		_speechBubbleSel.fadeOut(function() {
			_speechButtonSel.addClass('hideButton');
			$(".speechBubble .yesButton").unbind("click");
			$(".speechBubble .noButton").unbind("click");

			//ready to show the resource now
			//_speak = _curResource.dialog.questions[0];
			$('.resourceArea .dialog > span, .resourceArea .resourceContent').empty();
			$game.$resources.addContent();
			$game.$resources.addButtons();
			_inventorySel.fadeOut(function() {
				$game.$player.inventoryShowing = false;
				_resourceAreaSel.addClass('patternBg1')
				_resourceAreaSel.fadeIn();
			});
		});
		
	},

	addButtons: function() {
		_resourceButtonSel.addClass('hideButton');
		
		if(_answered) {
			
			//this is the medal page
			if(_currentSlide === _numSlides + 1 &&  _curResource.questionType === 'open') {
				if(_correctAnswer) {
					$('.resourceArea .nextButton').removeClass('hideButton');
				}
				else {
					$('.resourceArea .closeButton').removeClass('hideButton');
				}
			}
			else {
				$('.resourceArea .closeButton').removeClass('hideButton');
			}
		}
		else {
			
			if(_revisiting) {
				//if its the last slide
				if(_currentSlide === _numSlides - 1) {
					//not open ended
					if( _curResource.questionType !== 'open') {
						$('.resourceArea .closeButton').removeClass('hideButton');
					}
					//answers to show
					else {
						if(_currentSlide > 0) {
							$('.resourceArea  .backButton').removeClass('hideButton');
						}
						$('.resourceArea  .nextButton').removeClass('hideButton');
					}
				}
				else if(_currentSlide === _numSlides) {
					$('.resourceArea  .closeButton, .resourceArea .backButton').removeClass('hideButton');
				}
				else {
					$('.resourceArea  .nextButton').removeClass('hideButton');
					if(_currentSlide > 0) {
						$('.resourceArea  .backButton').removeClass('hideButton');
					}
				}
			}
			else {
				//if its the first page, we DEF. have a next and no back
				if(_currentSlide === 0) {
					$('.resourceArea .nextButton').removeClass('hideButton');
				}
				
				//if its not the first page or the last page, we have both
				else if(_currentSlide > 0 && _currentSlide < _numSlides) {
					$('.resourceArea .nextButton,.resourceArea  .backButton').removeClass('hideButton');
				}

				//if its the last page, we have an answer button and a back
				else if(_currentSlide === _numSlides) {
					
					$('.resourceArea .answerButton').removeClass('hideButton');
					$('.resourceArea .backButton').removeClass('hideButton');
				}
			}
			
		}
	},

	addContent: function() {
		_speakerNameSel.empty();
		_resourceMessageSel.empty();
		//if they answered the question...
		if(_answered) {
		
			//if they got it right, give them a tangram
			if(_correctAnswer) {

				//first, congrats and show them the tangram piece
				if(_currentSlide === _numSlides + 1) {
					_speak = _curResource.responses[0];
					_speakerNameSel.text(_who + ': ');
					_resourceMessageSel.text(_speak);
					//show image on screen
					//get path from db, make svg with that
					//var newSvg = '<svg><path d="'+_curResource.shape.path+'" fill="' + _curResource.shape.fill + '" transform = "translate(300,50)"</path></svg>';
					//_resourceContentSel.html(newSvg);
					var imgPath = CivicSeed.CLOUD_PATH + '/img/game/resources/r' + _curResource.id + '.png';
					newImg = '<img src="' + imgPath + '" class="centerImage">';
					_resourceContentSel.html(newImg).css('overflow', 'hidden');
				}
				//the next slide will show them recent answers
				else {
					_resourceContentSel.empty().css('overflow','auto');
					$game.$resources.showRecentAnswers();
				}
			
			}
			// else {
			// 	_speak = _curResource.responses[1];
			// 	_speakerNameSel.text(_who + ': ');
			// 	_resourceMessageSel.text(_speak);
			// 	_resourceContentSel.empty();
			// }
			
		}
		else {
			_resourceContentSel.css('overflow', 'auto');
			if(_currentSlide === _numSlides) {
				var finalQuestion = '<p class="finalQuestion">Q: ' + _curResource.question + '</p>';
				//show their answer and the question, not the form
				if(_revisiting) {
					$game.$resources.showRecentAnswers();
				}
				else {
					_speak = _curResource.prompt;
					_speakerNameSel.text(_who + ': ');
					_resourceMessageSel.text(_speak);
					var inputBox = null;
					if(_curResource.questionType === 'multiple') {
						inputBox = '<form><input name="resourceMultipleChoice" type ="radio" value="' + _curResource.possibleAnswers[0] + '"> ' + _curResource.possibleAnswers[0] + '</input>' +
									'<br><input name="resourceMultipleChoice" type ="radio" value="' + _curResource.possibleAnswers[1] + '"> ' + _curResource.possibleAnswers[1] + '</input>' +
									'<br><input name="resourceMultipleChoice" type ="radio" value="' + _curResource.possibleAnswers[2] + '"> ' + _curResource.possibleAnswers[2] + '</input>' +
									'<br><input name="resourceMultipleChoice" type ="radio" value="' + _curResource.possibleAnswers[3] + '"> ' + _curResource.possibleAnswers[3] + '</form';
					}
					else if(_curResource.questionType === 'open') {
						inputBox = '<form><textarea placeholder="type your answer here..."></textarea></form>';
					}
					else if(_curResource.questionType === 'closed') {
						inputBox = '<form><textarea placeholder="type your answer here..."></textarea></form>';
					}
					
					_resourceContentSel.html(finalQuestion + inputBox);
				}
					
			}
			else{
				var content = $('.resourceStage .pages .page').get(_currentSlide).innerHTML;
				_resourceContentSel.html(content);
			}
		}
	},

	showRecentAnswers: function() {
		var recentAnswers = _curResource.playerAnswers,
			numAnswers = recentAnswers.length,
			displayAnswers = '',
			finalQuestion = '<p class="finalQuestion">Q: ' + _curResource.question + '</p>';

		displayAnswers = '<ul>';
		var numToShow = numAnswers < 3 ? numAnswers: 3,
			counter = 0,
			spot = numAnswers - 1;
		
		while(counter < numToShow) {
			displayAnswers += '<li class="playerAnswers"><span>' + recentAnswers[spot-counter].name + ': </span> ' + recentAnswers[spot-counter].answer + '</li>';
			counter += 1;
		}

		displayAnswers += '</ul>';
		if(numAnswers < 2) {
			_speak = 'Congrats! You were the first to answer.';
			displayAnswers += '<p>** More answers from your peers will appear shortly.  Be sure to check back. **</p>';
		}
		else {
			_speak = 'Here are some recent answers by your peers: ';
		}
		_speakerNameSel.text(_who + ': ');
		_resourceMessageSel.text(_speak);
		_resourceContentSel.html(finalQuestion + displayAnswers);
	},

	hideResource: function() {
		_resourceAreaSel.fadeOut(function() {
			$game.$resources.isShowing = false;
			_resourceButtonSel.addClass('hideButton');
			_resourceAreaSel.removeClass('patternBg1');
		});

		//if the resource was being displayed from the inventory, keep it up.
		if(_inventory) {
			_inventorySel.fadeIn(function() {
				_inventory = false;
				if($game.$gnome.isSolving) {
					$game.$player.inventoryShowing = false;
				}
				else {
					$game.$player.inventoryShowing = true;
				}
				
			});
		}
	},

	//super ghetto hack to go back a page
	previousSlide: function() {
		_currentSlide -= 2;
		$game.$resources.nextSlide();
	},

	nextSlide: function() {
		
		_currentSlide += 1;

		//if its answered, determine if we need to show npc chat style instead
		if(_answered) {
			
			//if they got it wrong
			if(!_correctAnswer) {
				
				_speak = _curResource.responses[1];
				//_speakerNameSel.text(_who + ': ');
				//_resourceMessageSel.text(_speak);
				//_resourceContentSel.empty();
				//hide resource
				$game.$resources.hideResource();
				$('.speechBubble .speakerName').text(_who + ': ');
				$('.speechBubble .message').text('Wrong answer, sorry. Maybe click me again?');

				$('.speechBubble').fadeIn(function() {
					$game.$npc.hideTimer = setTimeout($game.$npc.hideChat,4000);
				});
			}
			else {
				
				$game.$resources.addContent();
				$game.$resources.addButtons();		
			}
		}
		else {
			
			$game.$resources.addContent();
			$game.$resources.addButtons();	
		}
	},

	submitAnswer: function() {
	
		var response = null;
		//get the answer from the field
		if(_curResource.questionType === 'open' || _curResource.questionType === 'closed') {
			response = $('.resourceContent textarea').val();
		}
		else if(_curResource.questionType === 'multiple') {
			response = $('input[name=resourceMultipleChoice]:checked').val();
		}
		
		console.log(response);
		//if its an open ended question or the right answer, then validation is true
		if(_curResource.questionType === 'open' || response === _curResource.answer) {
			//update player stuff
			$game.$player.answerResource(true,_curResource.id, response);
			
			//add this to the DB of resources for all player answers
			var newAnswer = {
				name: $game.$player.name,
				answer: response
			};
			ss.rpc('game.npc.answerToResource', newAnswer, _curResource.id);
			_correctAnswer = true;
		}
		else {
			$game.$player.answerResource(false,_curResource.id, response);
			_correctAnswer = false;
		}
		_answered = true;
		$game.$resources.nextSlide();
		//otherwise tell them they are wrong, stay on form page
	},

	getShape: function(id) {
		var stringId = String(id);
		return _resources[stringId].shape;
	},

	addAnswer: function(data, id) {
		var stringId = String(id);
		_curResource = _resources[stringId];
		_curResource.playerAnswers.push(data);
	}


	
};
