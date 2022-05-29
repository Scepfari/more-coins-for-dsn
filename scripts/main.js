Hooks.once('diceSoNiceReady', (dice3d) => {
	
	dice3d.addSystem({id: "space1889", name: "SPACE 1889 Templer"}, "default"); 
	
	dice3d.addDicePreset({
	  type: "dc",
	  modelFile: "modules/more-coins-for-dsn/model/templer_dc.glb",
	  system: "space1889"
	});

});
