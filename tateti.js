
$(function () {
    let toggleTurn = true;
    let toggleSound = true;
    let player1Wins = 0;
    let player2Wins = 0;
    const winMessage = () => { //MODAL DE JUGADOR GANADOR
        if (toggleSound == true) $("#winSound")[0].play();
        if (toggleTurn == false) {
            $("#winMessage").css({ "color": "#0000ff" }).html("Player 1 win");
            player1Wins++;
            $("#player1Wins").html(`${player1Wins}`);
        }
        else {
            $("#winMessage").css({ "color": "#ff0000" }).html("Player 2 win");
            player2Wins++;
            $("#player2Wins").html(`${player2Wins}`);
        }
        $("#winMessage").attr("hidden", false);
        $("#winBackground").addClass("flexClass");
        $("#winBackground").attr("hidden", false);
        $("#winButton").attr("hidden", false);
        $(".button-container").attr("hidden", false);
        $("#credits").addClass("credits");
    }
    const reset = () => { //REINICA EL TABLERO
        toggleTurn = true;
        $(".casilla").attr("value", "0");
        $(".casilla").removeAttr("disabled");
        $(".casilla").children().removeClass("blue");
        $(".casilla").children().removeClass("red");
        $("#numberTurn").removeClass("turnRed").addClass("TurnBlue").html("1");
    }
    const winnerCheck = () => { //VERIFICA SI ALGUIEN GANA
        //TODAS LAS COLUMNAS
        if ($("#a1").attr("value") == "1" && $("#b1").attr("value") == "1" && $("#c1").attr("value") == "1" || $("#a1").attr("value") == 2 && $("#b1").attr("value") == 2 && $("#c1").attr("value") == 2) {
            return true;
        }
        if ($("#a2").attr("value") == 1 && $("#b2").attr("value") == 1 && $("#c2").attr("value") == 1 || $("#a2").attr("value") == 2 && $("#b2").attr("value") == 2 && $("#c2").attr("value") == 2) {
            return true;
        }
        if ($("#a3").attr("value") == 1 && $("#b3").attr("value") == 1 && $("#c3").attr("value") == 1 || $("#a3").attr("value") == 2 && $("#b3").attr("value") == 2 && $("#c3").attr("value") == 2) {
            return true;
        }
        //TODAS LAS FILAS
        if ($("#a1").attr("value") == 1 && $("#a2").attr("value") == 1 && $("#a3").attr("value") == 1 || $("#a1").attr("value") == 2 && $("#a2").attr("value") == 2 && $("#a3").attr("value") == 2) {
            return true;
        }
        if ($("#b1").attr("value") == 1 && $("#b2").attr("value") == 1 && $("#b3").attr("value") == 1 || $("#b1").attr("value") == 2 && $("#b2").attr("value") == 2 && $("#b3").attr("value") == 2) {
            return true;
        }
        if ($("#c1").attr("value") == 1 && $("#c2").attr("value") == 1 && $("#c3").attr("value") == 1 || $("#c1").attr("value") == 2 && $("#c2").attr("value") == 2 && $("#c3").attr("value") == 2) {
            return true;
        }
        //TODAS LAS DIAGONALES
        if ($("#a1").attr("value") == 1 && $("#b2").attr("value") == 1 && $("#c3").attr("value") == 1 || $("#a1").attr("value") == 2 && $("#b2").attr("value") == 2 && $("#c3").attr("value") == 2) {
            return true;
        }

        if ($("#a3").attr("value") == 1 && $("#b2").attr("value") == 1 && $("#c1").attr("value") == 1 || $("#a3").attr("value") == 2 && $("#b2").attr("value") == 2 && $("#c1").attr("value") == 2) {
            return true;
        }
    }
    const event = (casilla) => { //PONER FICHAS
        $(casilla).attr("disabled", "true");
        if (toggleTurn == true) {
            $(casilla).attr("value", "1");
            $(casilla).children().addClass("blue");
            toggleTurn = false;
            if (!winnerCheck()) {
                $("#numberTurn").removeClass("turnBlue").addClass("turnRed").html("2");
            } else{
            winMessage();
            }
        } else {
            $(casilla).attr("value", "2");
            $(casilla).children().addClass("red");
            toggleTurn = true;
            if (!winnerCheck()) {
                $("#numberTurn").removeClass("turnRed").addClass("turnBlue").html("1");
            }else{
            winMessage();

            }
        }
    }
    $(".buttonToggleSound").on("click", function () { // CONTROL DEL SONIDO
        if (toggleSound == true) {
            $(this).html('<i class="fas fa-volume-mute toggleSound"></i>');
            toggleSound = false;
        } else {
            $(this).html('<i class="fas fa-volume-up toggleSound"></i>');
            toggleSound = true;
        }

    });
    $(".casilla").on("click", function () { // COLOCA LA FICHA EN LA CASILLA PRESIONADA
        event(this);
        if (toggleSound == true) $("#pieceSound")[0].play();
    });
    $("#reset").on("click", function () { // BOTON DE REINICIO
        reset();
    });
    $("#winButton").on("click", function () { //BOTON DE REINICIO EN EL MODAL
        $("#winBackground").removeClass("flexClass");
        $("#winMessage").attr("hidden", true);
        $("#winBackground").attr("hidden", true);
        $("#winButton").attr("hidden", true);
        $(".win-container").attr("hidden", true);
        $("#credits").removeClass("credits");
        reset();
    });
});
