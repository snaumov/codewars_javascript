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
  var randomNum = Math.random();

  var filteredPop = population.filter((value, ind) => {
      return fitnesses[ind] > randomNum;
  })

  return filteredPop[Math.floor(Math.random() * filteredPop.length)];
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

GeneticAlgorithm.prototype.crossover = function(chromosome1, chromosome2) {
  // TODO: Implement the crossover method
  return [chromosome1.slice(0, index) + chromosome2.slice(index), chromosome2.slice(0, index) + chromosome1.slice(index)];
};

GeneticAlgorithm.prototype.run = function(fitness, length, p_c, p_m, iterations) {
  // TODO: Implement the run method
  var population = [];
  var fitnesses = [];
  var i = 0;
  while(i < 100) {
      const newChromosome = generate(length);
      population.push(newChromosome);
      fitnesses += fitness(newChromosome);
      i++;
  }
  var chromosome1 = select(population, fitnesses);
  var chromosome2 = select(population, fitnesses);
};