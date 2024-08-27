var cube = document.getElementById('cube');

function updateRadius() {
    var tl = document.getElementById('top-left').value || 0;
    var tr = document.getElementById('top-right').value || 0;
    var bl = document.getElementById('bottom-left').value || 0;
    var br = document.getElementById('bottom-right').value || 0;

    // Armazena as variáveis alteradas
    var alteredValues = [tl, tr, br, bl].filter(value => value != 0);

    // Se apenas um valor foi alterado, aplica a todos os cantos
    if (alteredValues.length === 1) {
        cube.style.borderRadius = `${alteredValues[0]}px`;
    } else {
        // Se mais de um valor foi alterado, aplica por lado
        cube.style.borderRadius = `${tl}px ${tr}px ${br}px ${bl}px`;
    }
}


function copyCSS() {
    var tl = document.getElementById('top-left').value || 0;
    var tr = document.getElementById('top-right').value || 0;
    var bl = document.getElementById('bottom-left').value || 0;
    var br = document.getElementById('bottom-right').value || 0;

    var cssText = `border-radius: ${tl}px ${tr}px ${br}px ${bl}px;`;
    
    navigator.clipboard.writeText(cssText).then(function() {
        alert('CSS copied to clipboard!');
    }, function(err) {
        alert('Failed to copy CSS: ', err);
    });
}
