function showVideo() {
    const buttonContainer = document.getElementById('button-container'); // Кнопка
    const container = document.getElementById('container');              // Контейнер для видео

    // Скрываем кнопку
    buttonContainer.style.display = 'none';

    // Формируем iframe с видео и вставляем внутрь div
    container.innerHTML = `
        <iframe width="520" height="405" src="https://rutube.ru/play/embed/2971650f9d24eab83721d529a5d2dea8/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
    `;

    // Превращаем контейнер видимым
    container.style.display = 'block';
}