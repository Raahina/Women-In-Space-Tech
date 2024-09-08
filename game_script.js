document.addEventListener('DOMContentLoaded', () => {
    const spaceObject = document.getElementById('space-object');
    const starButton = document.getElementById('star-button');
    const asteroidButton = document.getElementById('asteroid-button');
    const dataTableBody = document.querySelector('#data-table tbody');
    const images = [
        'https://images.pond5.com/twinkling-single-star-light-blue-footage-151437054_iconl.jpeg',
        'https://cdn.britannica.com/24/21224-050-F129BCC9/Asteroid-Ida-satellite-Dactyl-Galileo-spacecraft-distance-August-28-1993.jpg', 
       'https://st5.depositphotos.com/3504545/66473/i/450/depositphotos_664737422-stock-photo-single-bright-star-sky-holiday.jpg' , 
       'https://www.shutterstock.com/image-photo/beams-light-rays-lantern-260nw-1084641065.jpg', 
       'https://science.nasa.gov/wp-content/uploads/2023/07/Asteroid_Bennu-1.jpeg?w=800',
       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy9JwelI0YdyVWg6LxBkakJlzFXJnYs3KPKg&s',
       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQraREQ1S4YQJdQCyFwSLy_ThlALW3f3BShtA&s',
       
       

    ];

    let currentIndex = 0;
    let data = [];

    function loadNextImage() {
        spaceObject.src = images[currentIndex];
    }

    function addDataToTable(imageUrl, classification) {
        const row = document.createElement('tr');
        const imageCell = document.createElement('td');
        const classificationCell = document.createElement('td');

        const img = document.createElement('img');
        img.src = imageUrl;
        img.width = 50;
        img.height = 50;
        imageCell.appendChild(img);

        classificationCell.textContent = classification;

        row.appendChild(imageCell);
        row.appendChild(classificationCell);
        dataTableBody.appendChild(row);
    }

    function sendClassification(classification) {
        const imageUrl = images[currentIndex];
        data.push({ imageUrl, classification });
        addDataToTable(imageUrl, classification);
        currentIndex = (currentIndex + 1) % images.length;
        loadNextImage();
    }

    loadNextImage();

    starButton.addEventListener('click', () => {
        sendClassification('Star');
    });

    asteroidButton.addEventListener('click', () => {
        sendClassification('Asteroid');
    });
});
