var Pop = function(){

	this.creatures = [];
	this.size = 0;
	this.maxFit = 0;
	this.minFit = 0;
	this.naturalSelection = function(){
		var selectedCreatures = [];
		var creatureProbabilityArray = [];
		//insert all creature probabilities
		for(var i = 0; i < this.creatures.length; i++){
			for(var j = 0; j < this.creatures[i].fitness + 1; j++){
				//console.log(this.creatures[i]);
				creatureProbabilityArray.push(this.creatures[i]);
			}
		}
		//console.log(creatureProbabilityArray);
		//randomly select creatures, hgiher fitnesses have a 
		//higher chance at being selected
		do{
			var randomNumber = Math.floor(Math.random() * (creatureProbabilityArray.length - 1));
			selectedCreatures.push(creatureProbabilityArray[randomNumber]);
		}while(selectedCreatures.length < this.size/2);
		//console.log(selectedCreatures);
		this.creatures = selectedCreatures;
		//console.log(this.creatures);
	},
	this.breed = function(){
		var babyCreatures = [];
		for(var i = 0; i < this.size/2; i++){
			//get random parents from gene pool
			var parentA = this.creatures[Math.floor(Math.random() * (this.creatures.length - 1))];
			var parentB = this.creatures[Math.floor(Math.random() * (this.creatures.length - 1))];
			//random gene selection like process to determing genome of offspring
			var creature = new Creature();
			for(var j = 0; j < testText.length; j++){
				var determineGene = Math.random();
	   	    	var willMutate = Math.random();

	   	    	if(determineGene > .49){
	   	    		if(willMutate < parentA.mutationRate){
	   	    			var possible = "abcdefghijklmnopqrstuvwxyz ";
	   	    			creature.genome.unshift(possible.charAt(Math.floor(Math.random() * possible.length)));
	   	    		}
	   	    		else{
	   	    			creature.genome.unshift(parentA.genome[j]);
	   	    		}
	   	    	}
	   	    	else{
	   	    		if(willMutate < parentB.mutationRate){
	   	    			var possible = "abcdefghijklmnopqrstuvwxyz ";
	   	    			creature.genome.unshift(possible.charAt(Math.floor(Math.random() * possible.length)));
	   	    		}
	   	    		else{
	   	    			creature.genome.unshift(parentB.genome[j]);
	   	    		}
	   	    	}
			}
			babyCreatures.unshift(creature);
		}
		this.creatures.extend(babyCreatures);
	}

};

var population = new Pop();

var Creature = function(){
	this.genome = [];
	this.fitness = 0;
	this.mutationRate = .1;
}

function createPOP(popNumber, textLength){
	for(var j = 0; j < popNumber; j++){
	    var possible = "abcdefghijklmnopqrstuvwxyz ";
	    var creature = new Creature();
	   //alert(textLength);
	    for (var i = 0; i < textLength; i++){
	   	    creature.genome.push(possible.charAt(Math.floor(Math.random() * possible.length)));
		}
		population.creatures.unshift(creature);
	}
	population.size = popNumber;
}
Array.prototype.extend = function (other_array) {
    /* you should include a test to check whether other_array really is an array */
    other_array.forEach(function(v) {this.push(v)}, this);    
}