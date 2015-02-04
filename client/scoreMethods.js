var scoreMethods = {
    score: 0,
    addScore: function() {
      console.log('inside addScore');
      this.score += 5;
      return this.score;
    },
    subtractScore: function() {
      this.score -= 5;
      return this.score;
    } 
}


 