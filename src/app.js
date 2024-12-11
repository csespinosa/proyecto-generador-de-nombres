let pronoun = ["the", "our", "hers"];
let adj = ["great", "big", "shinny"];
let noun = ["jogger", "racoon", "butterfly"];
let ext = [".com", ".net", ".org"];

for (let a = 0; a < pronoun.length; a++) {
  for (let b = 0; b < adj.length; b++) {
    for (let c = 0; c < noun.length; c++) {
      for (let d = 0; d < ext.length; d++) {
        // eslint-disable-next-line no-console
        console.log(pronoun[a] + adj[b] + noun[c] + ext[d]);
      }
    }
  }
}
