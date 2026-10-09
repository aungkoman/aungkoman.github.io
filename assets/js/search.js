const query = document.getElementById('query');
const cards = [...document.querySelectorAll('#search-results .post-card')];
function filter() {
 const term = query.value.trim().toLocaleLowerCase();
 let count = 0;
 cards.forEach(card => { const match = card.textContent.toLocaleLowerCase().includes(term); card.hidden = !match; if(match) count++; });
 document.getElementById('search-status').textContent = `${count} article${count === 1 ? '' : 's'} found`;
}
query.addEventListener('input', filter); filter();
