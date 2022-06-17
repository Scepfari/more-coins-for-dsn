Hooks.once('diceSoNiceReady', (dice3d) => {
	
	dice3d.addSystem({id: "templerSpace1889", name: "Templer"}, "default"); 
	
	dice3d.addDicePreset({
	  type: "dc",
	  modelFile: "modules/more-coins-for-dsn/model/templer_dc.glb",
	  system: "templerSpace1889"
	});

	dice3d.addSystem({id: "gearSpace1889", name: "SPACE 1889 Gear"}, "default"); 
	
	dice3d.addDicePreset({
	  type: "dc",
	  modelFile: "modules/more-coins-for-dsn/model/dc_gear_space1889.glb",
	  system: "gearSpace1889"
	});

});
