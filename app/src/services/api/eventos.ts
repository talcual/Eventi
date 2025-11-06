

export const fetchEventos = async () => {
    const response = await fetch('https://shiny-adventure-976pj7wjpwhvgx-3000.app.github.dev/api/v1/eventos');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};