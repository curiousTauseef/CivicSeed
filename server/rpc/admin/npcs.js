var service, npcModel, tileModel;

var npcHelpers = null;

// Define actions which can be called from the client using ss.rpc('demo.ACTIONNAME', param1, param2...)
exports.actions = function(req, res, ss) {

	req.use('session');
	// req.use('debug');

	return {
		init: function(id) {
			service = ss.service;
			console.log('rpc.admin.initNPC');
			npcModel = service.useModel('npc', 'ss');
			tileModel = service.useModel('tile', 'ss');
			npcModel
				.find()
				.sort('level')
				.exec(function(err,result) {
					if(err) {
						res(err);
					} else if(result) {
						res(result);
					}
				});
		},

		updateInformation: function(info) {
			npcModel
				.where('id').equals(info.id)
				.find(function(err,result) {
					if(err) {
						res('error');
					} else if(result) {
						var npc = result[0];
						//update the tiles for the npc
						npcHelpers.updateTiles(npc.index, info.index, function(error) {
							if(error) {
								res(error);
							} else {
								//general
								npc.name = info.name;
								npc.sprite = info.sprite;
								npc.isHolding = info.isHolding;
								npc.level = info.level;
								npc.index = info.index;
								//resource
								if(info.isHolding) {
									npc.resource.url = info.resource.url;
									npc.resource.questionType = info.resource.questionType;
									npc.resource.question = info.resource.question;
									npc.resource.shape = info.resource.shape;
									npc.dialog.prompts = info.dialog.prompts;
									npc.dependsOn = info.dependsOn;

									//not open
									if(info.questionType === 'open') {
										npc.resource.requiredLength = info.resource.requiredLength;
									} else {
										npc.resource.answer = info.resource.answer;
										if(info.resource.questionType === 'multiple') {
											npc.resource.possibleAnswers = info.resource.possibleAnswers;
										}
									}
								} else {
									//smalltalk
									npc.dialog.smalltalk = info.dialog.smalltalk;
								}

								npc.save(function(err,okay) {
									if(err) {
										res('error');
									} else {
										res(false);
									}
								});
							}
						});
					}
			});
		},

		addNpc: function(info) {
			npcModel
				.create(info, function(err,result) {
					if(err) {
						res(err);
					} else if(result) {
						npcHelpers.addNpcTile(info.index, function(err) {
							res(err);
						});
					}
				});
		},

		deleteNpc: function(id) {
			npcModel
				.where('id').equals(id)
				.find(function(err,npc) {
					if(err) {
						res(err);
					} else if(npc) {
						var index = npc[0].index;
						npcModel
							.where('id').equals(id)
							.remove(function(err,result) {
								if(err) {
									res(err);
								} else {
									npcHelpers.removeNpcTile(index, function(err) {
										res(err);
									});
								}
							});
					}
				});
		}
	};
};

npcHelpers = {
	addNpcTile: function(index, callback) {
		console.log(index);
		tileModel.where('mapIndex').equals(index)
			.find(function(err,tiles) {
				if(err) {
					callback('could not find tile');
				} else if (tiles) {
					//console.log(tiles);
					if(tiles[0].tileState === -1) {
						tiles[0].tileState = index;
						tiles[0].save(function(err, saved) {
							if(err) {
								callback('could not save tile');
							} else if(saved) {
								callback();
							}
						});
					}
				}
			});
	},

	removeNpcTile: function(index, callback) {
		console.log(index);
		tileModel.where('mapIndex').equals(index)
			.find(function(err,tiles) {
				if(err) {
					callback('could not find tile');
				} else if (tiles) {
					//console.log(tiles);
					tiles[0].tileState = -1;
					tiles[0].save(function(err, saved) {
						if(err) {
							callback('could not save tile');
						} else if(saved) {
							callback();
						}
					});
				}
			});
	},

	updateTiles: function(oldIndex, newIndex, callback) {
		//console.log(oldIndex,newIndex);
		//update new tile, make sure we can change it
		if(oldIndex === newIndex) {
			callback();
		} else {
			tileModel.where('mapIndex').equals(newIndex)
			.find(function(err,newTiles) {
				if(err) {
					callback('could not find new tile');
				} else if (newTiles) {
					//console.log(newTiles[0]);
					if(newTiles[0].tileState === -1) {
						newTiles[0].tileState = newIndex;
						newTiles[0].save(function(err, saved) {
							if(err) {
								callback('could not save new tiles');
							} else if(saved) {
								//update the old tile so it doesnt have an npc
								tileModel.where('mapIndex').equals(oldIndex)
									.find(function(err,oldTiles) {
										if(err) {
											callback('could not find old tile');
										} else if (oldTiles) {
											oldTiles[0].tileState = -1;
											oldTiles[0].save(function(err, saved) {
												if(err) {
													callback('could not save old tiles');
												} else if(saved) {
													callback();
												}
											});
										}
								});
							}
						});
					} else {
						callback('cant place npc there');
					}
				}
			});	
		}
		
	}
};