// Notice there is no 'import' statement. 'mobilenet' and 'tf' is
// available on the index-page because of the script tag above.

const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');

async function predict(img, model) {
    const predictions = await model.classify(img);
    console.log(predictions);
    console.log(predictions[0].className);
    console.log(Math.round(predictions[0].probability * 100, 3), '%');
    console.log(img.id);
    pred = document.querySelector(`.${img.id} h2`)
    pred.innerHTML = `<p>` + predictions[0].className + `</p>`;
    accuracy = document.querySelector(`.${img.id} h3`)
    accuracy.innerHTML = `<p>` + Math.round(predictions[0].probability * 100, 3) + `%</p>`;
    return predictions
}

//IIFE to load the Mobilnet model and make predictions 
(async () => {
    var model = await mobilenet.load();

    const result1 = await predict(img1, model);
    const result2 = await predict(img2, model);
    const result3 = await predict(img3, model);
    const result4 = await predict(img4, model);
})();


