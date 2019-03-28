'use strict';
(function () {
    var data = [{
            id: 'box1',
            title: 'First box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: ['highlighted', 'special-header', 'important']
        },
        {
            id: 'box2',
            title: 'Second box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: ['special-header', 'important']
        },
        {
            id: 'box3',
            title: 'Third box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: ['highlighted', 'important']
        },
        {
            id: 'box4',
            title: 'Fourth box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: ['highlighted']
        },
        {
            id: 'box5',
            title: 'Fifth box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: []
        },
    ];

    var pageWrapper = document.getElementById('container');

    function createBox(boxIndex, boxElement) {
        var boxElement = document.createElement('div');
        boxElement.setAttribute('id', data[boxIndex].id);
        boxElement.classList.add('box');
        return boxElement;
    }

    function createHeader(headerIndex) {
        var headerElement = document.createElement('header');
        headerElement.innerHTML = data[headerIndex].title;
        return headerElement;
    }

    function createContent(contentIndex, contentElement) {
        var contentElement = document.createElement('div');
        contentElement.innerHTML = data[contentIndex].content;
        return contentElement;
    }

    function createCategories(index, element) {
        var categoriesElement = document.createElement('div');
        var categories = data[index].categories;
        for (var i = 0; i < categories.length; i++) {
            element.classList.add(categories[i]);
        }
        return categoriesElement;
    }

    function addElementsBox(header, paragraph, box, container) {
        box.appendChild(header);
        box.appendChild(paragraph);
        container.appendChild(box);
    }

    for (var k = 0; k < data.length; k++) {
        var newElement = createBox(k, newElement);
        var headerElement = createHeader(k);
        var content = createCategories(k, newElement);
        var newElementParagraph = createContent(k, newElementParagraph);

        addElementsBox(headerElement, newElementParagraph, newElement, pageWrapper);
    }

})();