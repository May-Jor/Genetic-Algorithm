//breeds creatures, each having 2 offspring to return the population to its normal
function breed(){
	//random gene selection like process to determing genome of offspring
	var determineGene = Math.random();
    var willMutate = Math.random();

	if(determineGene > .5){
	if(willMutate < population.creatures[i].mutationRate){
	var possible = "abcdefghijklmnopqrstuvwxyz ";
	  creature.genome.unshift(possible.charAt(Math.floor(Math.random() * possible.length)));
	 }
	 else{
	  creature.genome.unshift(population.creatures[i].genome[k]);
	 }
	}
	else{
	 if(willMutate < population.creatures[i+1].mutationRate){
	  var possible = "abcdefghijklmnopqrstuvwxyz ";
	  creature.genome.unshift(possible.charAt(Math.floor(Math.random() * possible.length)));
	 }
	 else{
	  creature.genome.unshift(population.creatures[i+1].genome[k]);
	 }
	}
}	
