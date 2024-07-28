/*
    1. 새로고침 시에 LOGO가 서서히 나타타게 해보세요.

    2. LOGO를 클릭 시에 마리오, 루이지, 키노피오가 순서대로 나타나게 해보세요.

    3. 캐릭터는 클릭하였을 때 h1의 칼라와 text를 변경해보세요.
    Mario, red
    Luigi, green
    Kino, yellow

*/

$('.logo').fadeIn(2000);

$('.logo') .on('click', function(){
    $('.mario').fadeIn(1000);
    $('.luigi').fadeIn(2000);
    $('.kino').fadeIn(3000);
   })


$('.mario').on('click', function(){
    $('h1').text('Mario').css('color', 'red');})

$('.luigi').on('click', function(){
    $('h1').text('Luigi').css('color', 'green');})

$('.kino').on('click', function(){
    $('h1').text('Kino').css('color', 'yellow');})

