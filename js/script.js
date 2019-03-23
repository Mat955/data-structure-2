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

    function createBox(boxId, element) {
        element.setAttribute('id', data[boxId].id);
        element.classList.add('box');
    };

    function createHeader(headerId) {
        header.innerHTML = data[headerId].title;
    };

    function createContent(contentId, element) {
        element.innerHTML = data[contentId].content;
    };

    function createCategories(id, element) {
        var categories = data[id].categories;
        for (var i = 0; i < categories.length; i++) {
            element.classList.add(categories[i]);
        }
    };

    function addElementsBox(header, paragraph, box) {
        box.appendChild(header);
        box.appendChild(paragraph);
        pageWrapper.appendChild(box);
    };

    for (var k = 0; k < data.length; k++) {
        var newElement = document.createElement('div');
        var header = document.createElement('header');
        var content = data[k].content;
        var newElementParagraph = document.createElement('div');

        createBox(k, newElement);
        createHeader(k);
        createCategories(k, newElement);
        createContent(k, newElementParagraph);

        addElementsBox(header, newElementParagraph, newElement);
    };

})();