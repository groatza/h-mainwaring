$(document).ready( function() {
    /*
    for (let i = 0; i < 64; i++) {
        if (i % 2 === 0) {
            $("board").after()
        }
        if (i % 8 === 0) {

        }
    }

    for (let i = 0; i < 64; i++) {
        if (i % 8 === 0) {
           console.log(i + " i % 8 = " + (i % 8)); 
        }
        if (i % 2 === 0) {
            console.log(i + " i % 2 = " + (i % 2)); 
        }
    }
    */
    /*
    for square:
        if new row:
            add table row element

    create 8 table rows
    get the 8 rows in a list
    loop through squares, switching to next row after 8
    */
    for (let i = 7; i >= 0; i--) {
        $(".board").append(`<tr id='rank${i}'></tr>`);
    };
    /*
    for (let i = 0, j = 1; j < 9; i++) {
        if (i % 8 === 0) {
            j++;
            if (j % 2 == 0) {

            };
        };
        if (i % 2 === 0) {
            $(`#rank${j}`).append(`<td class='dark'>X</td>`);
        } else {
            $(`#rank${j}`).append(`<td class='light'>${i}</td>`);
        };
    };
    */
   /*
    for (let i = 1, j = 1; j < 9; i++) {
        if (j % 2 === 0) {
            if (i % 2 === 0) {
                $(`#rank${j}`).append(`<td class='square${i} dark'></td>`);
            } else {
                $(`#rank${j}`).append(`<td class='square${i} light'></td>`);
            };
        } else {
            if (i % 2 === 0) {
                $(`#rank${j}`).append(`<td class='square${i} light'></td>`);
            } else {
                $(`#rank${j}`).append(`<td class='square${i} dark'></td>`);
            };
        };
        if (i == 8) {
            j++;
            i = 0;
        };
    };
    */

    var colour;
    for  (let i = 1, j = 7; j >= 0; i++) { // i was 0, why does this simple bodge work? not complaining
        //colour = i % 2 == 0 ? "light" : "dark";
        //if (i % 2 == 0 &&)
        evenSquare = i % 2;
        evenRank = j % 2;
        switch(true) {
            case(evenSquare === 0 && evenRank === 0):
                colour = "dark";
                break;
            case(evenSquare === 0 && evenRank !==0):
                colour = "light";
                break;
            case(evenSquare !== 0 && evenRank === 0):
                colour = "light";
                break;
            case(evenSquare !== 0 && evenRank !== 0):
                colour = "dark";
                break;
        };
        /*
        $(`#rank${j}`).append(`<td class='square${j*8 + i} ${colour}'></td>`);
        if (i == 8) {
            j--;
            i = 0;
        };
        */
        $(`#rank${j}`).append(`<td class='square${j}${i} ${colour}'></td>`);
        if (i == 8) {
            j--;
            i = 0;
        };
    };

    pieceSet = ["w R","w N","w B","w Q","w K","w B","w N","w R","w x","w x","w x","w x","w x","w x","w x","w x","b x","b x","b x","b x","b x","b x","b x","b x","b R","b N","b B","b K","b Q","b B","b N","b R"];

    //var x = 0;
    /*
    for (let i = 1, x = 0; i + x< 65; i++) {
        $(`.square${i + x}`).addClass(pieceSet[i-1]);
        $(`.square${i + x}`).append(pieceSet[i-1][2]);
        if (i == 16) {
            x =  32;
        };
    };
    */

    for (let j = 0, i = 1, x = 0; x < pieceSet.length; i++, x++) {
        $(`.square${j}${i}`).addClass(pieceSet[x]); //maybe just change board so first square is 00, not 01, etc so no need for i-1
        $(`.square${j}${i}`).append(pieceSet[x][2]);
        if (i == 8) {
            i = 0;
            j++;
            if (j == 2) {
                j = 6;
            }
        };
    };

    //EVENT HANDLERS
    var turn = "w";
    var selectedPiece = null;
    $("td").on("click", function() {
        var piece = $(this).attr("class");
        var pColour = piece.slice(-3);
        if (pColour[0] === turn) {
            selectedPiece = piece;

            if (selectedPiece === null) { //think this is flipped? maybe?
                selectedPiece = piece;
                $(this).addClass("selected");
                showMoves(selectedPiece); //!!!
            } else {
                $(".selected").removeClass("selected");
                $(this).addClass("selected");
                showMoves(selectedPiece); //!!!
                selectedPiece = null;
            };
        };
    });

    /*
    function showMoves(selectedPiece) {
        selectedSquare = selectedPiece.match(/\d+/)[0];
        possibleSquares = [];
        var rank = Number(selectedSquare[0]);
        var file = Number(selectedSquare[1]);
        for (i = 0; i < 8; i++) {
            possibleSquares.push(rank + String(i+1));
            possibleSquares.push(String(i) + file); //change to bellow
            
            possibleSquares.push("" + (rank-i) + (file-i));
            possibleSquares.push("" + (rank+i) + (file+i));
            possibleSquares.push("" + (rank+i) + (file-i));
            possibleSquares.push("" + (rank-i) + (file+i));
        };
        for (i = 0; i < possibleSquares.length; i++) {
            $(`.square${possibleSquares[i]}`).addClass("possible");
        };
        $(`.selected`).removeClass("possible");
    };
    */
    function showMoves(selectedPiece) {
        /*
        console.log(selectedPiece);
        console.log(selectedPiece.match(/\d+/)[0]);
        selectedSquare = selectedPiece.match(/\d+/)[0];
        possibleSquares = [];
        var file = selectedSquare % 8;
        var rank = Math.ceil(selectedSquare / 8);
        for (i = 0; i < 8; i++) {
            possibleSquares.push(file + 8*(i+1));
            possibleSquares.push(rank * 8 - i);
            //possibleSquares.push(selectedSquare rank)
        };
        for (i = 0; i < possibleSquares.length; i++) {
            $(`.square${possibleSquares[i]}`).addClass("possible");
        };
        */
        
        selectedSquare = selectedPiece.match(/\d+/)[0];
        possibleSquares = [];
        var rank = Number(selectedSquare[0]);
        var file = Number(selectedSquare[1]);
        for (i = 0; i < 8; i++) {
            possibleSquares.push(rank + String(i+1));
            possibleSquares.push(String(i) + file); //change to bellow
            possibleSquares.push((file - rank)); // file - rank = smallest diagonal file
            //possibleSquares.push(selectedSquare rank)
        };
        /*
        for (i = 0; i < possibleSquares.length; i++) {
            $(`.square${possibleSquares[i]}`).addClass("possible");
        };
        */
        //loop
            //square(x-i)(x-i),square(x+i)(x+i),square(x+i)(x-i),square(x-i)(x+i)
            //temp
            //remove all invalid squares before adding to possibleSquares array
        for (i = 0; i < 8; i++) {
            possibleSquares.push("" + (rank-i) + (file-i));
            possibleSquares.push("" + (rank+i) + (file+i));
            possibleSquares.push("" + (rank+i) + (file-i));
            possibleSquares.push("" + (rank-i) + (file+i));
        };
        for (i = 0; i < possibleSquares.length; i++) {
            $(`.square${possibleSquares[i]}`).addClass("possible");
        };
        $(`.selected`).removeClass("possible");

                /*
        if (pColour[0] === turn) {
            selectedPiece = piece;

            if (selectedPiece === null) { //think this is flipped? maybe?
                selectedPiece = piece;
                $(this).addClass("selected");
                showMoves(selectedPiece); //!!!
            } else {
                $(".selected").removeClass("selected");
                $(this).addClass("selected");
                showMoves(selectedPiece); //!!!
                selectedPiece = null;
            };
        };
        */
       /*
        if (selectedPiece === null) { //think this is flipped? maybe?
            selectedPiece = piece;
            $(this).addClass("selected");
            showMoves(selectedPiece); //!!!
        } else {
            $(".selected").removeClass("selected");
            $(this).addClass("selected");
            showMoves(selectedPiece); //!!!
        };
        */
    };

    /*
    function rook(rank,file) {
        var possibleSquares = [];
        for (i = 0; i < 8; i++) {
            possibleSquares.push("" + rank + (i+1));
            possibleSquares.push("" + i + file);
        };
        return possibleSquares;
    };
    */
    /*
    won't be efficient, probably can be optimized
    function rook:
        up = true; right = true;...
        while i less than 8:
            if move is possible && up ? += Square rank+i file: up = !up
            if move is possible ? += Square rank file+i: skip
    */
    function rook(rank, file) {
        var possibleSquares = [];
        var validDir = [true,true,true,true]; //does need to be array? why not just "currentDir"? 

        let up = "" + (rank+i) + file;
        let right = "" + rank + (file+i);
        let down = "" + (rank-i) + file;
        let left = "" + rank + (file-i);
        dir = [up, right, down, left];
        //validDir && (validMove(dir[0]) || _____) ? possibleSquares.push(dir[0]) : validDir[0] = !validDir[0]; //conditional chains????
        //validDir && capture(dir[0]) ? possibleSquares.push(dir[0])

        for (let j = 0; j < 4; j++) {
            /*
            if ( validDir[j] && validMove(dir[j]) ) {
                possibleSquares.push(dir[j]);
            } else {
                validDir[j] = !validDir[j];
            };
            if ( validDir[j] && capture(dir[j]) ) { //validMove and capture overlap :(
                possibleSquares.push(dir[j]);
                validDir[j] = !validDir[j];
                console.log(validDir);
            };
            */
            if ( validDir[j] && validMove(dir[j]) ) {
                possibleSquares.push(dir[j]);
                if (capture(dir[j])) {
                    validDir[j] = !validDir[j];
                };
            } else {
                validDir[j] = !validDir[j];
            };
        };
        //if move would be capture, add possibleSquare, toggle validDir

    };
    function bishop(rank,file) {
        /*
        var possibleSquares = [];
        for (i = 0; i < 8; i++) {
            possibleSquares.push("" + (rank-i) + (file-i));
            console.log("" + (rank+i) + (file+i));
            possibleSquares.push("" + (rank+i) + (file+i));
            possibleSquares.push("" + (rank+i) + (file-i));
            possibleSquares.push("" + (rank-i) + (file+i));
        };
        return possibleSquares;
        */
});