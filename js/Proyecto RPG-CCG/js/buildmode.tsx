function updateStats() {
    console.log("updateStats called");
    var text = document.getElementById("statsSum");
    var statsTotal = 0;
    var statElements = document.getElementsByClassName("statInput");
    var statArray = [...statElements];
    statArray.forEach(function (el)
    {
        console.log(el.constructor.name)
        var stat;
        if (el instanceof HTMLTextAreaElement)
        {
            stat = parseInt(el.value);
            if (!isNaN(stat) && !(stat == null))
            {
                statsTotal += stat;
            }
        }
        else
        {
            console.error("stat element not found");
        }
    }); 
    
    if (!(text == null))
    {
        text.innerHTML = "Total stats: " + statsTotal;
    }
    else
    {
        console.error("statsSum element not found");
    }

}

// Actualizar estadísticas
[...document.getElementsByClassName("stat")].forEach(function (element) // Por cada estadística,
{
    console.log("updated");
    element.addEventListener("input", updateStats); // Añadir un listener para cuando se actualice
    // Que llame a la función updateStats
});