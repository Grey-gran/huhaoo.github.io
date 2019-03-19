var board = new Array();
var added = new Array();
var score = 0;
var top = 240;
$(document).ready(function(e){
    newgame();
});
 
function newgame(){
    init();
    generateOneNumber();
    generateOneNumber();
}
 
function init(){
	score=0;
	document.getElementById("score").innerHTML=score;
	$("#gameover").css('display','none');
    for(var i = 0;i<4;i++){ for(var="" j="0;j<4;j++){" var="" gridcell="$("#grid-cell-"+i+"-"+j);" gridcell.css("top",getpostop(i,j));="" gridcell.css("left",getposleft(i,j));="" }="" i="0;" i<4;i++){="" board[i]="new" array();="" board[i][j]="0;" added[i]="new" added[i][j]="0;" updateboardview();="" function="" updateboardview(){="" $(".number-cell").remove();="" for="" (="" <="" 4;="" j++)="" {="" $("#grid-container").append('<div="" class="number-cell" id="number-cell-'+i+'-'+j+'">');
            var theNumberCell = $('#number-cell-'+i+'-'+j);
            if(board[i][j] == 0){
                theNumberCell.css('width','0px');
                theNumberCell.css('height','0px');
                theNumberCell.css('top',getPosTop(i,j));
                theNumberCell.css('left',getPosLeft(i,j));
            }else{
                theNumberCell.css('width','100px');
                theNumberCell.css('hegiht','100px');
                theNumberCell.css('top',getPosTop(i,j));
                theNumberCell.css('left',getPosLeft(i,j));
                theNumberCell.css('background-color',getNumberBackgroundColor(board[i][j]));
                theNumberCell.css('color',getNumberColor(board[i][j]));
                theNumberCell.text(board[i][j]);
            }
        }
    }
}
 
function generateOneNumber(){
    if (nospace(board)) 
        return false;
    
    var randx = parseInt(Math.floor(Math.random()*4));
    var randy = parseInt(Math.floor(Math.random()*4));
    while(true){
        if (board[randx][randy] == 0) 
            break;
        randx = parseInt(Math.floor(Math.random()*4));
        randy = parseInt(Math.floor(Math.random()*4));
    }
    var randNumber = Math.random()<0.5 0="" 2="" ?="" :="" 4;="" board[randx][randy]="randNumber;" shownumberwithanimation(randx,randy,randnumber);="" return="" true;="" }="" $(document).keydown(function(event){="" switch="" (event.keycode)="" {="" case="" 37:="" if(moveleft()){="" getscore();="" generateonenumber();="" settimeout("isgameover()",400);="" break;="" 38:="" if(moveup()){="" 39:="" if(moveright()){="" 40:="" if(movedown()){="" });="" function="" isgameover(){="" if(nospace(board)&&nomove(board))="" gameover();="" gameover(){="" $("#gameover").css('display','block');="" isaddedarray(){="" for(var="" i="0;i<4;i++){" j="0;j<4;j++){" added[i][j]="0;" moveleft(){="" if(="" !canmoveleft(board))="" false;="" isaddedarray();="" if(board[i][j]="" !="0){" k="0;k<j;k++){" if(board[i][k]="=" &&="" noblockhorizontal(i="" ,="" k,="" j,="" board)){="" showmoveanimation(i,="" j,i,k);="" board[i][k]="board[i][j];" board[i][j]="0;" continue;="" else="" if(added[i][k]!="0){" board[i][k+1]="board[i][j];" else{="" +="board[i][j];" added[i][k]="1;" score="" settimeout("updateboardview()",200);="" moveright(){="" !canmoveright(board))="">=0;j--){
            if(board[i][j] !=0){
                for(var k = 3;k>j;k--){
                    if(board[i][k] == 0 && noBlockHorizontal(i , j, k, board)){
                        showMoveAnimation(i, j,i,k);
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    }
                    else if(board[i][k] == board[i][j] && noBlockHorizontal(i , j, k, board)){
                        showMoveAnimation(i, j,i,k);
                         if(added[i][k]!=0){
                        		board[i][k-1] = board[i][j];
                        		board[i][j] = 0;
                        }
                        else{
                        	board[i][k] += board[i][j];
                        	board[i][j] = 0;
                        	added[i][k] = 1;
                        	score +=board[i][k];
                        }
                        continue;
                    }
                }
            }
        }
    setTimeout("updateBoardView()",200);
    return true;
}
 
function moveUp(){
    if( !canMoveUp(board))
        return false;
    
    isaddedArray();
    for(var j = 0;j<4;j++) 0="" for(var="" i="1;i<4;i++){" if(board[i][j]="" !="0){" k="0;k<i;k++){" if(board[k][j]="=" &&="" noblockvertical(j="" ,="" k,="" i,="" board)){="" showmoveanimation(i,="" j,k,j);="" board[k][j]="board[i][j];" board[i][j]="0;" continue;="" }="" else="" if(added[k][j]!="0){" board[k+1][j]="board[i][j];" else{="" +="board[i][j];" added[k][j]="1;" score="" settimeout("updateboardview()",200);="" return="" true;="" function="" movedown(){="" if(="" !canmovedown(board))="" false;="" isaddedarray();="" j="0;j<4;j++)">=0;i--){
            if(board[i][j] !=0){
                for(var k = 3;k>i;k--){
                    if(board[k][j] == 0 && noBlockVertical(j , i, k, board)){
                        showMoveAnimation(i, j,k,j);
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    }
                    else if(board[k][j] == board[i][j] && noBlockVertical(j , i, k, board)){
                        showMoveAnimation(i, j,k,j);
                        if(added[k][j]!=0){
                        	board[k-1][j] = board[i][j];
                        	board[i][j] = 0;
                        }
                        else{
                        	board[k][j] += board[i][j];
                        	board[i][j] = 0;
                        	added[k][j] = 1;
                        	score +=board[k][j];
                        }
                        continue;
                    }
                }
            }
        }
    setTimeout("updateBoardView()",200);
    return true;
}

</4;j++)></0.5></4;i++){>