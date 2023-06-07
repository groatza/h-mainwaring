$(document).ready( function() {
    //add table rows
    for (let i = 7; i >= 0; i--) {
        $(".board").append(`<tr id='rank${i}'></tr>`);
    };

    //populate the table

    /*
    new idead:
        i++; colour = !colour (colour is boolean(?))
        if i % 8 === 0:
            colour = !colour
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
        $(`#rank${j}`).append(`<td id='square${j}${i}' class='${colour}'></td>`);
        if (i == 8) {
            j--;
            i = 0;
        };
    };

    pieceSet = ["w R","w N","w B","w Q","w K","w B","w N","w R","w x","w x","w x","w x","w x","w x","w x","w x","b x","b x","b x","b x","b x","b x","b x","b x","b R","b N","b B","b K","b Q","b B","b N","b R"];

    //add the pieces
    for (let j = 0, i = 1, x = 0; x < pieceSet.length; i++, x++) {
        $(`#square${j}${i}`).addClass(pieceSet[x]); //maybe just change board so first square is 00, not 01, etc so no need for i-1
        $(`#square${j}${i}`).append(pieceSet[x][2]);
        if (i == 8) {
            i = 0;
            j++;
            if (j == 2) {
                j = 6;
            }
        };
    };

    //EVENT HANDLERS
    var whiteTurn = true;
    var selectedPiece = null;

    /*
    fix edge case clicking on same piece
    */

    $("td").on("click", function() {
        let position = $(this).attr("id");
        let rank = position[position.length-2];
        let file = position[position.length-1];
        var piece = $(this).attr("class");
        //let p = piece.substr(piece.indexOf(" ") + 1);
        //var pColour = piece.slice(-3);
        let pColour = $(this).hasClass("w") ? "w" : "b";

        let turn = whiteTurn === true ? "w" : "b"
        if ( $(this).hasClass("possible") ) {
            let x = $(".selected").text(); //just get the piece symbol from the class god dammit
            let p = $(".selected").attr("class");
            //getting p could probably be cleaned up
            p = p.substr(p.indexOf(" ") + 1);
            var lastIndex = p.lastIndexOf(" ");
            p = p.substring(0, lastIndex);
            console.log(p);

            $(".selected").text("");
            $(".selected").removeClass("selected");
            
            $(this).text(`${x}`);
            
            $(this).removeClass(`w`);
            $(this).removeClass(`b`);
            $(this).addClass(`${p}`);
            
            selectedPiece = null;
            whiteTurn = !whiteTurn;
        };
        $( ".possible" ).each(function( index ) {
            $(this).removeClass("possible");
        });
        if (pColour === turn) {
            $(`.selected`).removeClass("selected");
            selectedPiece = piece;
            $(this).addClass("selected");
            showMoves(position,selectedPiece); //!!!
        } else {
            $(`.selected`).removeClass("selected");
            //selectedPiece = null;
        };
    });

    //change to take postion and piece
    function showMoves(position,piece) { //have a showMoves function and a getMoves function !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        var type = piece[piece.length-1];
        /*
        selectedSquare = selectedPiece.match(/\d+/)[0];
        let possibleSquares = [];
        var rank = Number(selectedSquare[0]);
        var file = Number(selectedSquare[1]);
        */
       let rank = Number(position[6]);
       let file = Number(position[7]);
       let possibleSquares = [];
        
        /*
        $( ".possible" ).each(function( index ) {
            $(this).removeClass("possible");
        });
        */

        switch(true) {
            case(type === "R"):
                possibleSquares  = rook(rank,file);
                break;
            case(type === "N"):
                possibleSquares  = knight(rank,file);
                break;
            case(type === "B"):
                possibleSquares  = bishop(rank,file);
                break;
            case(type === "Q"):
                possibleSquares  = rook(rank,file);
                console.log(bishop(rank,file));
                possibleSquares = possibleSquares.concat(bishop(rank,file));
                break;
            case(type === "K"):
                possibleSquares  = king(rank,file);
                break;
            case(type === "x"):
                possibleSquares  = pawn(rank,file);
                console.log(possibleSquares);
                break;
        };
        for (i = 0; i < possibleSquares.length; i++) {
            $(`#square${possibleSquares[i]}`).addClass("possible");
        };
        $(`.selected`).removeClass("possible");
    };

    function rook (rank,file) {
        var possibleSquares = [];
        var validDir = [true,true,true,true];

        for (let i = 1; i < 8; i++) {
            let up = "" + (rank+i) + file;
            let right = "" + rank + (file+i);
            let down = "" + (rank-i) + file;
            let left = "" + rank + (file-i);
            dir = [up, right, down, left];

            for (let j = 0; j < 4; j++) {
                if ( validDir[j] && validMove(dir[j]) ) {
                    possibleSquares.push(dir[j]);
                    if (capture(dir[j])) { //omfg
                        validDir[j] = false;
                    };
                } else {
                    validDir[j] = false;
                };
            };
        };
        return possibleSquares;
    };
    function bishop(rank,file) {
        let possibleSquares = [];
        let validDir = [true,true,true,true];

        for (let i = 1; i < 8; i++) {
            let upRight = "" + (rank+i) + (file+i)
            let downRight = "" + (rank-i) + (file+i)
            let downLeft = "" + (rank-i) + (file-i)
            let upLeft = "" + (rank+i) + (file-i)
            dir = [upRight, downRight, downLeft, upLeft];

            for (let j = 0; j < 4; j++) {
                if ( validDir[j] && validMove(dir[j]) ) {
                    possibleSquares.push(dir[j]);
                    if (capture(dir[j])) {
                        validDir[j] = false;
                    };
                } else {
                    validDir[j] = false; //god dammit this will keep triggering, once it is deemed invalid it will always come here
                };
            };
        };
        return possibleSquares;
    };
    function knight(rank,file) {
        var possibleSquares = [];
        if (validMove("" + (rank+2) + (file-1))) { possibleSquares.push("" + (rank+2) + (file-1)); };
        if (validMove("" + (rank+2) + (file+1))) { possibleSquares.push("" + (rank+2) + (file+1)); };
        if (validMove("" + (rank+1) + (file+2))) { possibleSquares.push("" + (rank+1) + (file+2)); };
        if (validMove("" + (rank-1) + (file+2))) { possibleSquares.push("" + (rank-1) + (file+2)); };
        if (validMove("" + (rank-2) + (file-1))) { possibleSquares.push("" + (rank-2) + (file-1)); };
        if (validMove("" + (rank-2) + (file+2))) { possibleSquares.push("" + (rank-2) + (file+1)); };
        if (validMove("" + (rank+1) + (file-2))) { possibleSquares.push("" + (rank+1) + (file-2)); };
        if (validMove("" + (rank-1) + (file-2))) { possibleSquares.push("" + (rank-1) + (file-2)); };
        return possibleSquares;
    };
    function king(rank,file) {
        var possibleSquares = [];
    
        if (validMove("" + rank + (file+1))) { possibleSquares.push("" + rank + (file+1)); };
        if (validMove("" + rank + (file-1))) { possibleSquares.push("" + rank + (file-1)); };
        if (validMove("" + (rank+1) + file)) { possibleSquares.push("" + (rank+1) + file); };
        if (validMove("" + (rank-1) + file)) { possibleSquares.push("" + (rank-1) + file); };
        if (validMove("" + (rank-1) + (file-1))) { possibleSquares.push("" + (rank-1) + (file-1)); };
        if (validMove("" + (rank+1) + (file+1))) { possibleSquares.push("" + (rank+1) + (file+1)); };
        if (validMove("" + (rank+1) + (file-1))) { possibleSquares.push("" + (rank+1) + (file-1)); };
        if (validMove("" + (rank-1) + (file+1))) { possibleSquares.push("" + (rank-1) + (file+1)); };
        return possibleSquares;
    };
    //fix for validMoves
    function pawn(rank,file) {
        var possibleSquares = [];
        /*
        possibleSquares.push("" + rank + 1);
        if ((turn === "w" && rank === 1) || (turn === "b" && rank === 6)) {
            possibleSquares.push("" + rank + 2);
        };
        */

        if (whiteTurn === true) {
            possibleSquares.push("" + (rank + 1) + file);
            if (rank === 1) {
                possibleSquares.push("" + (rank + 2) + file);
            };
            if ($(`#square${rank+1}${file-1}`).hasClass("b")) {
                possibleSquares.push("" + (rank + 1) + (file - 1));
            };
            if ($(`#square${rank+1}${file+1}`).hasClass("b")) {
                possibleSquares.push("" + (rank + 1) + (file + 1));
            };
        } else {
            possibleSquares.push("" + (rank - 1) + file);
            if (rank === 6) {
                possibleSquares.push("" + (rank - 2) + file);
            };
            if ($(`#square${rank-1}${file-1}`).hasClass("w")) {
                possibleSquares.push("" + (rank - 1) + (file - 1));
            };
            if ($(`#square${rank-1}${file+1}`).hasClass("w")) {
                possibleSquares.push("" + (rank - 1) + (file + 1));
            };
        };
        return possibleSquares;
        //gotta do captures ughhhhhh
        //not to even mention en passant
    };

    //function: check for check
    function inCheck(possibleSquares) {
        if (turn === w) { //don't need the conditional and can do no repitition if use variables (turn)
            $(".b").each(function(index) {
                x = showMoves($(this));
                if ( x.hasClass(`w k`) ) { //soon to be getMoves
                    x.remove
                };
                for (let i = 0; i < x.length; i) {
                    if (x[i].hasClass("w k")) {
                        x.splice(i, 1); //must verify
                    };
                };
            });
        } else {

        };
    };

    function preventCheck(possibleSquares, whiteTurn) {
        if (whiteTurn === true) {
            for (let i = 0; i < possibleSquares.length; i++) {
                if (x[i].hasClass("w k")) {
                    x.splice(i, 1); //must verify
                };
            };
        } else {
            for (let i = 0; i < possibleSquares.length; i++) {
                if (x[i].hasClass("b k")) {
                    x.splice(i, 1); //must verify
                };
            };
        };
        return possibleSquares;
    };

    function isBlocked(move, colour) {
        return move.hasClass(`${colour}`); 
    };
    
    function isBlocked(possibleSquares, colour) { //can't work
        for (let i = 0; i < possibleSquares.length; i++) {
            if (x[i].hasClass(`${colour} k`)) {
                x.splice(i, 1); //must verify
            };
        };
    };

    //just make one "removeIllegibleSquares" function

    function validMove(square) { //change this to (rank,file)
        //square = "" + rank + file;
        square = "square" + square;
        let turn = whiteTurn === true ? "w" : "b"
        if ( $(`#${square}`).hasClass(`${turn}`) ) {
            return false;
        } else {
            return true;
        };
    };

    function capture(rank,file) {
        square = "" + rank + file;
        square = "square" + square;
        if (whiteTurn === true) {
            if ( $(`#${square}`).hasClass(`b`) ) {
                return true;
            } else {
                return false;
            };
        } else {
            if ( $(`#${square}`).hasClass(`w`) ) {
                return true;
            } else {
                return false;
            };
        };
    };
});