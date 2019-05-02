function testFitness(){
	var fitnesses = [];
	for(var i = 0; i < population.creatures.length; i++){
		if(genePoolForceStop === true){
			break;
		}
		else{
			getFitness(population.creatures[i]);
			fitnesses.push(population.creatures[i].fitness);
		}
	}

	//get population minimum and maximum fitness
	population.maxFit = Math.max.apply( Math, fitnesses );
	population.minFit = Math.min.apply( Math, fitnesses );
}

function getFitness(creature){
	creature.fitness = 0;
	for(var i = 0; i < testText.length; i++){
		if(creature.genome[i] === testText[i]){
			creature.fitness += 1;
		}
		if(creature.fitness > population.maxFit){
			bestGene = creature.genome.join("");
				if(creature.fitness >= testText.length){
					//updatePage();
					genePoolForceStop = true;
					//clearinterval(evolve);
					break;
				}
		}
	}
}