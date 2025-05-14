export function createDestinationCard(dest) {
    const template = document.getElementById('destination-card');
    const clone = template.content.cloneNode(true);
  
    clone.querySelector('img').src = dest.imageUrl;
    clone.querySelector('img').alt = dest.imageAlt;
    clone.querySelector('h3').textContent = dest.city;
    clone.querySelector('p').textContent = `$${dest.averagePrice} / night average`;
    clone.querySelector('a').textContent = `Explore ${dest.propertyCount} properties`;
  
    return clone;
  }
  