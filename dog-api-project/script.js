document.addEventListener('DOMContentLoaded', () => {
    const breedSelect = document.getElementById('breed-select');
    const dogForm = document.getElementById('dog-form');
    const dogNameInput = document.getElementById('dog-name');
    const fontColorSelect = document.getElementById('font-color');
    const fontFamilySelect = document.getElementById('font-family');
    const dogDisplay = document.getElementById('image-section'); // Modificado para o contêiner de imagem
    const dogImage = document.getElementById('dog-image');
    const dogNameDisplay = document.getElementById('dog-name-display');
    const successMessage = document.getElementById('success-message');
    const namePreview = document.getElementById('name-preview'); // Nova div de preview
    const namePreviewDiv = document.getElementById('name-preview-div'); // Nova div de preview
    const formContainer = document.getElementById('app'); // Nova div de preview
    const btn = document.getElementById('btn'); // Nova div de preview

    // Função para carregar raças da API
    async function loadBreeds() {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await response.json();
        const breeds = data.message;

        for (const breed in breeds) {
            const option = document.createElement('option');
            option.value = breed;
            option.textContent = breed;
            breedSelect.appendChild(option);
        }
    }

    // Função para carregar imagem do cachorro
    async function loadDogImage(breed) {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
        const data = await response.json();
        return data.message;
    }

    // Função para salvar dados no local storage
    function saveData(data) {
        localStorage.setItem('dogData', JSON.stringify(data));
    }

    // Função para carregar dados do local storage
    function loadData() {
        const savedData = localStorage.getItem('dogData');
        if (savedData) {
            return JSON.parse(savedData);
        }
        return null;
    }

    // Função para atualizar a exibição do cachorro
    function updateDogDisplay(data) {
        dogNameDisplay.textContent = data.name;
        dogNameDisplay.style.color = data.color;
        dogNameDisplay.style.fontFamily = data.font;
        dogImage.src = data.image;
        dogDisplay.style.display = 'flex'; // Modificado para mostrar a div amarela
        btn.classList.remove('btnMargin');
        formContainer.classList.remove('centered');
    }

    // Função para atualizar a div de preview
    function updatePreview(name, color, font) {
        namePreview.textContent = name;
        namePreview.style.color = color;
        namePreview.style.fontFamily = font;
        namePreview.style.display = name ? name === '' ? 'none' : 'block' : 'none';
        namePreviewDiv.style.display = name ? 'block' : 'none';
    }

    // Carregar raças na inicialização
    loadBreeds();

    // Carregar dados salvos na inicialização
    const savedData = loadData();

    if (savedData) {
        updateDogDisplay(savedData);
        updatePreview(savedData.name, savedData.color, savedData.font); // Atualiza a preview com os dados salvos

        // Remove a classe 'centered' do form-container quando há dados salvos
        btn.classList.remove('btnMargin');
        formContainer.classList.remove('centered');
    } else {
        dogDisplay.style.display = 'none'; // Esconde a div de imagem se não houver dados no local storage
        btn.classList.add('btnMargin')
        formContainer.classList.add('centered')
    }

    // Evento de envio do formulário
    dogForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const breed = breedSelect.value;
        const name = dogNameInput.value;
        const color = fontColorSelect.value;
        const font = fontFamilySelect.value;

        if (name === '') {
            alert('Por favor, insira o nome do cachorro.');
            return; // Impede o envio do formulário se o nome estiver vazio
        }

        const image = await loadDogImage(breed);

        const data = {
            breed,
            name,
            color,
            font,
            image,
            date: new Date().toLocaleString()
        };

        updateDogDisplay(data);
        saveData(data);

        successMessage.style.display = 'block';
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);
    });

    // Evento de alteração do nome do cachorro
    dogNameInput.addEventListener('input', () => {
        const name = dogNameInput.value;
        updatePreview(name, fontColorSelect.value, fontFamilySelect.value); // Atualiza a preview com o novo nome
    });

    // Evento de alteração da cor da fonte
    fontColorSelect.addEventListener('change', () => {
        const color = fontColorSelect.value;
        updatePreview(dogNameInput.value, color, fontFamilySelect.value); // Atualiza a preview com a nova cor da fonte
    });

    // Evento de alteração da fonte
    fontFamilySelect.addEventListener('change', () => {
        const font = fontFamilySelect.value;
        updatePreview(dogNameInput.value, fontColorSelect.value, font); // Atualiza a preview com a nova fonte
    });
});
