//function() {

    var width = 900;
    var height = 500;

    var makeRightSideElems = function (data, g) {
        var dotMargin = {left: 50, top: 150, right: 250};
        var dotSpacing = 75;
        var rightSideElems = g.selectAll('.rightdots')
            .data(data)
          .enter()
            .append('g')
            .classed('rightdots', true)
            .attr("transform", function (d, i) {
                return "translate(" + (width - dotMargin.right) + ", " + (dotSpacing*i + dotMargin.top) + ")"
            })
            ;

        rightSideElems.append('circle')
            .classed('dot', true)
            .attr('cx', 0)
            .attr('cy', 0)
            .attr('r', 20)
            .attr('fill', 'blue')
        ;

        rightSideElems.append('text')
            .attr('x', 50)
            .attr('y', '10px')
            .attr('font-size', '30px')
            .text(function (d) { return d; })
            .attr('color', 'red')
        ;
    }

    var makeLeftSideElems = function (data, g) {
        var dotMargin = {left: 50, top: 150};
        var dotSpacing = 75;
        var leftSideElems = g.selectAll('.leftdots')
            .data(data)
          .enter()
            .append('g')
            .classed('leftdots', true)
            .attr("transform", function (d, i) {
                return "translate(" + dotMargin.left + ", " + (dotSpacing*i + dotMargin.top) + ")"
            })
            ;

        leftSideElems.append('circle')
            .classed('dot', true)
            .attr('cx', 150)
            .attr('cy', 0)
            .attr('r', 20)
            .attr('fill', 'blue')
        ;

        leftSideElems.append('text')
            .attr('x', 0)
            .attr('y', '10px')
            .attr('font-size', '30px')
            .text(function (d) { return d; })
            .attr('color', 'red')
        ;
    }

    function buildMatchup(container) {
        var gameData = [
            { 'swahili' : 'simba',
              'english' : 'lion'},
            { 'swahili' : 'chui',
              'english' : 'leopard'}
        ];

        var svg = container.append('svg')
            .attr('width', width)
            .attr('height', height)
            .style('display', 'block')
            .style('margin-right', 'auto')
            .style('margin-left', 'auto')
            .style('border', '1px solid black');

        var playArea = svg.append("g")
            //.attr("transform", "translate(" + width / 2 + "," + height * 0.78 + ")")
            ;

        // playArea.append('rect')
        //     .attr('width', '200px')
        //     .attr('height', '200px')
        //     .attr('x', '0px')
        //     .attr('y', '0px')
        //     .attr('fill','red');

        makeLeftSideElems(gameData.map(function(d) { return d.swahili }), playArea);
        makeRightSideElems(gameData.map(function(d) { return d.english }), playArea);

    }
//}();
