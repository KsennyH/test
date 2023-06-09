const inputFile = () => {
    let inputs = document.querySelectorAll('.input_type-file');
    Array.prototype.forEach.call(inputs, function (input) {
        let label = input.nextElementSibling,
        labelVal = label.querySelector('.input__text').innerText;
    
        input.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1)
            countFiles = this.files.length;
    
        if (countFiles)
            label.querySelector('.input__text').innerText = 'Выбрано файлов: ' + countFiles;
        else
            label.querySelector('.input__text').innerText = labelVal;
        });
    });
}

export default inputFile;