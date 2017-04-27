var GeneticAlgorithm = function () {};

GeneticAlgorithm.prototype.generate = function(length) {
  // TODO: Implement the generate method
  var result = '';
    var i = 0;
    while(i < length){
        result += ['0', '1'][Math.floor(Math.random() * 2)];
        i++;
    }
  return result;
};

GeneticAlgorithm.prototype.select = function(population, fitnesses) {
  // TODO: Implement the select method

  var fitnessesSum = fitnesses.reduce((acc, val) => acc + val, 0);


  var randomNum = Math.random();

  const startIndOfRullete = getRandomIntInclusive(0, population.length - 1);

  var sum = 0
  var i = startIndOfRullete;
  while(sum < randomNum) {
      if (i === population.length - 1) {
          i = 0;
      }
      sum += fitnesses[i];
      i++;
  }
//   var filteredPop = population.filter((value, ind) => {
//       var temp = fitnesses[ind] / fitnessesSum;
//       return fitnesses[ind] / fitnessesSum >= randomNum;
//   })
//   var indexOfSelected = Math.floor(Math.random() * filteredPop.length)
  return population[i-1];
};

GeneticAlgorithm.prototype.mutate = function(chromosome, p) {
  // TODO: Implement the mutate method
  return chromosome.split('').map(bit => {
        var num = Math.random();
        if (num <= p) {
            return bit === '0' ? '1' : '0';
        } else {
            return bit;
        }
    }).join('');
};

GeneticAlgorithm.prototype.crossover = function(chromosome1, chromosome2, index) {
  // TODO: Implement the crossover method
  return [chromosome1.slice(0, index) + chromosome2.slice(index), chromosome2.slice(0, index) + chromosome1.slice(index)];
};

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

GeneticAlgorithm.prototype.run = function(fitness, length, p_c, p_m, iterations) {
  // TODO: Implement the run method
  
  var population = [];
  var fitnesses = [];
  var i = 0;
  while(i < 200) {
      const newChromosome = GeneticAlgorithm.prototype.generate(length);
      population.push(newChromosome);
      fitnesses.push(fitness(newChromosome));
      i++;
  }

  var iteration = 0;

  while(iteration < 100) {

    var newPopulation = [];
    var newFitnesses = [];

    while (newPopulation.length < population.length){
        var chromosome1 = GeneticAlgorithm.prototype.select(population, fitnesses);
        var chromosome2 = GeneticAlgorithm.prototype.select(population, fitnesses);
        
        var crossoverProbabity = Math.random();

        if(crossoverProbabity <= p_c) {
            var bit = getRandomIntInclusive(0, chromosome1.length);
            [ chromosome1, chromosome2 ] = GeneticAlgorithm.prototype.crossover(chromosome1, chromosome2, bit);
        }

        chromosome1 = GeneticAlgorithm.prototype.mutate(chromosome1, p_m);
        chromosome2 = GeneticAlgorithm.prototype.mutate(chromosome2, p_m);

        newPopulation.push(chromosome1);
        newPopulation.push(chromosome2)
        newFitnesses.push(fitness(chromosome1))
        newFitnesses.push(fitness(chromosome2));
    }

    population = newPopulation;
    fitnesses = newFitnesses;
    iteration++;

  }

  return population[fitnesses.reduce((acc, val, ind) => val > acc.acc ? {acc:val, ind: ind} : {acc:acc.acc, ind:acc.ind}, {acc: 0, ind: 0}).ind]

};

var newGenAlgo = new GeneticAlgorithm();



const goal = '11000010110111111110000100011110011';
const fitness = function (chromosome) {
   var total = 0;
    for(var i = 0; i < goal.length; i++) {
      if(goal[i] !== chromosome[i]) total++;
    }
    return 1 / (total + 1);
  } 

console.log(newGenAlgo.run(fitness, 35, 0.6, 0.002, undefined));