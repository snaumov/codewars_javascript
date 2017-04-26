const mapPopulationFit = (population, fitness) => {
  return population.map(chromosome => {
    return {chromosome: chromosome, fitness: fitness(chromosome)}
  });
};